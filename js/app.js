/**
 * Created by apple on 16/10/22.
 */

//载入依赖的模块
var React = require('react');
var ReactDOM = require('react-dom');

var Nav = require('./list.js');

require('../css/app.css');

(function (window) {
    var ms_ie = false;
    var ua = window.navigator.userAgent;
    var old_ie = ua.indexOf('MSIE ');
    var new_ie = ua.indexOf('Trident/');
    var is360 = false;

    if ((old_ie > -1) || (new_ie > -1)) {
        ms_ie = true;
    }

    if (window.navigator.appName.indexOf("Microsoft") != -1){
        ms_ie= true;
    }
    if((window.navigator.mimeTypes[40] || !window.navigator.mimeTypes.length)){
        is360 = true;
    }
    if ( ms_ie ) {
        document.documentElement.className += " ie";

    }
    if ( is360 ){
        document.documentElement.className += " sl";
    }
    var App = React.createClass({
        getInitialState : function () {
            return{
                indexs:0
            }
        },
        handleWheel: function (event) {
            let deta = event.deltaY;
            let s = 0;
            if(deta < 0){s = -1;}
            if(deta > 0){s = 1;}
            this.refs.getPosition.mouseWheel(s);
        },

        render : function() {
            return <div onWheel={this.handleWheel} className="main">
                    <Nav ref="getPosition"></Nav>
                </div>
        }

    });

    ReactDOM.render(<App />, document.getElementsByClassName('todoapp')[0])

})(window);
