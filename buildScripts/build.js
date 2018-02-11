//unused
import webpack from 'webpack';
import webpackConfig from '../webpack.config';

console.log('beggining build');

webpack(webpackConfig).run((err, stats) =>{
    if(err){
        console.log(err);
        return 1;
    }
    
    return 0;
});