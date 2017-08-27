var React = require('react');

(function (window) {
    var Index = React.createClass({
        render: function () {
            return (
                <div className="marDiv">
                    <img className="div_img1" src={"image/I_img.png"}/>
                </div>
            )
        }
    })

    module.exports = Index;
})(window)