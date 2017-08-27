/**
 * Created by Administrator on 2016/12/5.
 */
var React = require('react');

(function (window) {
    var Contact = React.createClass({
        getInitialState:function(){
            return {
                btnColor : 6
            }
        },
        handleMouseLeave : function () {
            this.setState({
                btnColor:6
            })
        },
        handleMouseOver:function (index) {
            this.setState({
                btnColor:index
            })
        },
        render: function () {
            let btnColor = this.state.btnColor;
            return (
                <div className="flex_center">
                    <div className="div_img4">
                        <div className="img4_left">
                            <input  className="Cnt_textX" type="text" defaultValue="您的称呼"/>
                            <input className="Cnt_textX" type="text" defaultValue="联系方式"/>
                            <textarea className="Cnt_textXL" type="text" defaultValue="写下您的需求或者建议"/>
                            <input className="Cnt_btn1" type="submit" defaultValue="提交" />
                        </div>
                        <div className="img4_right">
                            <span>联系方式:13302468507</span><br />
                            <span>邮箱:13809416888@163.com</span><br />
                            <span>地址:深圳市宝安区西乡中央大道B栋6a</span>
                            <div>
                                <input onMouseOver={this.handleMouseOver.bind(this,0)} onMouseLeave={this.handleMouseLeave}
                                     style={{background:'url(image/xz2.png) no-repeat 5px 8px',
                                         backgroundColor:btnColor==0?'#5983e3':'#8f959b'}}
                                       className="Cnt_btn2" type="button" defaultValue="在线咨询"></input>
                                <input onMouseOver={this.handleMouseOver.bind(this,1)} onMouseLeave={this.handleMouseLeave}
                                    style={{background:'url(image/xz2.png) no-repeat 5px 8px',
                                        backgroundColor:btnColor==1?'#5983e3':'#8f959b'}}
                                       className="Cnt_btn2" type="button" defaultValue="在线咨询"></input>
                                <input onMouseOver={this.handleMouseOver.bind(this,2)} onMouseLeave={this.handleMouseLeave}
                                    style={{background:'url(image/xz2.png) no-repeat 5px 8px',
                                        backgroundColor:btnColor==2?'#5983e3':'#8f959b'}}
                                       className="Cnt_btn2" type="button" defaultValue="在线咨询"></input>
                            </div>
                            <div>
                                <h2>友情链接:</h2><br/>

                            </div>
                        </div>
                    </div>
                    <div className="img4_bottom">
                    <span>Copyright © 2017-2027 Soudtooth, All Rights Reserved, 粤ICP备17009520</span>
                    </div>
                </div>
            )
        }
    })

    module.exports = Contact;
})(window)


