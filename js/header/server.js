/**
 * Created by Administrator on 2016/12/5.
 */
var React = require('react');

(function (window) {
    var Server = React.createClass({
        render: function () {
            let smove = this.props.Move_index;
            return (
                <div className="marDiv">
                    <div className="div_img2">
                        <ul className="img2_ul">
                            <li style={{background:'url(image/xz1.png) no-repeat center #5D6371',
                            left:smove==1?'0':'-100px'}}>
                                <span>微信公众号开发</span>
                            </li>
                            <li style={{background:'url(image/xz1.png) no-repeat center #5D6371',
                            left:smove==1?'0':'-100px'}}>
                                <span>微信商城开发</span>
                            </li>
                            <li style={{background:'url(image/xz1.png) no-repeat center #5D6371',
                            right:smove==1?'0':'-100px'}}>
                                <span>微信应用定制</span>
                            </li>
                            <li style={{background:'url(image/xz1.png) no-repeat center #5D6371',
                            right:smove==1?'0':'-100px'}}>
                                <span>企业网站建设</span>
                            </li>
                        </ul>
                    </div>
                </div>
            )
        }
    })

    module.exports = Server;
})(window)