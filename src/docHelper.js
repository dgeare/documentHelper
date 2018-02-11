import "babel-polyfill";
import greatestStackingContext from './greatestStackingContext';

if(! window.docHelper){
    window.docHelper = {
        highestZIndex : greatestStackingContext
    };
}