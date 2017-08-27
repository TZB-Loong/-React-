/**
 * Created by Administrator on 2016/10/22.
 */

var path = require('path');
var webpack = require('webpack');

var config = {

    //入口文件 : 要处理的文件路径
    entry : [
        path.resolve(__dirname,'./js/app.js')
    ],

    //出口文件 : 处理之后输出的文件
    output : {
        path : path.resolve(__dirname,'build'),
        filename : 'bundle.js'
    },

    //配置加载器
    module : {

        loaders : [{
            test : /\.jsx?$/,
            loader : 'babel',
            query : {
                presets : ['react','es2015']
            }
        },{
            test : /\.css$/,
            loader : 'style!css'
        }]
    },
    //配置插件
    plugins : [
        //压缩打包文件的插件
        new webpack.optimize.UglifyJsPlugin({
            compress : {
                warnings : false
            }
        })
    ]
};

module.exports = config;