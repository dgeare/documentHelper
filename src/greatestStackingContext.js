export default function(context){
    context = context || document.body;
    
    return walkChildrenForGreatest(context) || undefined;
}

function walkChildrenForGreatest(node){
    if(node.nodeType !== Node.ELEMENT_NODE)
        return 0;

    let styles = getComputedStyle(node);
    if(hasNewStackingContext(styles)){
        return isNaN(styles.zIndex) ? 0 : +(styles.zIndex);
    }
    
    let childNodes = node.childNodes;
    let max = 0;
    Array.from(childNodes, element => {
        max = Math.max(max, walkChildrenForGreatest(element));
    });
    return max;
}

function hasNewStackingContext(styles){
    if(! styles) //shouldn't really happen, but handle
        return false;
    
    if(+(styles.opacity) !== 1 
        || styles.transform !== "none" 
        || styles.filter != "none"
        || (styles.position !== 'static' && styles.zIndex !== "auto")){
            return true;
    }
    return false;
}