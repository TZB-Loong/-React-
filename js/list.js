/**
 * Created by Administrator on 2016/10/22.
 */

var React = require('react');

var Dropdown = require('./dropdown.js');
var Header = require('./header.js');

(function (window) {

    var Nav = React.createClass({

        propsTypes: {
            LB_className:React.PropTypes.string,
            Move_className:React.PropTypes.string,
            Move_index:React.PropTypes.number,
            Move_lab:React.PropTypes.string
        },
        getInitialState : function() {
            return {
                datas: [{
                    "ID":0,
                    "TITLE":"网站首页",
                    "URL":"image/index.png"
                },{
                    "ID":1,
                    "TITLE":"服务项目",
                    "URL":"image/server.png"
                }, {
                    "ID":2,
                    "TITLE":"作品案例",
                    "URL":"image/opus.png"
                }, {
                    "ID":3,
                    "TITLE":"联系我们",
                    "URL":"image/contact.png"
                }],
                //案例数据
                opus:[{"ID":0,
                        "URL":"image/item-1.jpg",
                        "TILE":"餐",
                        "STITLE":"饮",
                        "CONTENT_ONE":"image/cy1.png",
                        "CONTENT_TWO":"image/cy2.jpg",
                        "INTRODUCE":"根据企业个性化需求,提供可视化原型解决方案"},
                    {"ID":1,
                        "URL":"image/item-2.jpg",
                        "TILE":"企",
                        "STITLE":"业",
                        "CONTENT_ONE":"image/qy1.jpg",
                        "CONTENT_TWO":"image/qy2.jpg",
                        "INTRODUCE":"根据行业特征及企业需求设计品牌形象"},
                    {"ID":2,
                        "URL":"image/item-3.jpg",
                        "TILE":"健",
                        "STITLE":"身",
                        "CONTENT_ONE":"image/js1.jpg",
                        "CONTENT_TWO":"image/js2.jpg",
                        "INTRODUCE":"提供不同行业的深度功能定制开发"},
                    {"ID":3,
                        "URL":"image/item-4.jpg",
                        "TILE":"摄",
                        "STITLE":"影",
                        "CONTENT_ONE":"image/sy1.jpg",
                        "CONTENT_TWO":"image/sy2.jpg",
                        "INTRODUCE":"基于微信平台的一切开发服务"},
                    {"ID":4,
                        "URL":"image/item-5.jpg",
                        "TILE":"服",
                        "STITLE":"装",
                        "CONTENT_ONE":"image/fz1.png",
                        "CONTENT_TWO":"image/fz2.png",
                        "INTRODUCE":"深度品牌植入打造个性化专属"},
                    {"ID":5,
                        "URL":"image/item-6.jpg",
                        "TILE":"美",
                        "STITLE":"容",
                        "CONTENT_ONE":"image/mr1.jpg",
                        "CONTENT_TWO":"image/mr2.jpg",
                        "INTRODUCE":"深度品牌植入打造个性化专属"
                    }],
                rtitle:"初始化标题",
                LB_className : 'onePosition',
                Move_index : 0,
                Move_lab:'move_onePosition'
            }
        },
        //导航栏
        fectData_Nav : function () {
            let res = this.state.datas;
            let reind = this.state.Move_index;

            var newData = res.map((item) => {
                return(
                    <li key={item.ID}>
                        <a href="#" style={{color:reind==item.ID?"white":"#B7B9C3",
                            borderBottom:reind==item.ID?"4px solid dodgerblue":"0"}}
                           onClick={this.position.bind(this,item.ID)}>{item.TITLE}</a>
                    </li>
                )
            });
            return newData;
        },
        mouseWheel:function (indexs) {
              let inx = this.state.Move_index;
              indexs = indexs + inx;
            if (indexs >= 0 && indexs <= 3){
                this.setState({
                    Move_index:indexs
                });
            }else if (indexs < 0){
                this.setState({
                    Move_index:0
                })
            }else if (indexs > 3){
                this.setState({
                    Move_index:3
                })
            }
              this.position(indexs);
        },
        //样式改变
        position(numder){
            switch (numder){
                case 0:return this.setState({
                    LB_className:"onePosition",
                    Move_index:0,
                    Move_lab:'move_onePosition'
                });
                case 1:return this.setState({
                    LB_className:"twoPosition",
                    Move_index:1,
                    Move_lab:'move_twoPosition'
                });
                case 2:return this.setState({
                    LB_className:"therePosition",
                    Move_index:2,
                    Move_lab:'move_therePosition'
                });
                case 3:return this.setState({
                    LB_className:"fourPosition",
                    Move_index:3,
                    Move_lab:'move_fourPosition'
                });
            }

        },
        //滚动条点数
        movesIndex:function () {
            let moves = this.state.datas;
            let newMove = moves.map((item,i) => {
                return <li key={i} style={{opacity:this.state.Move_index==i?"0":"0.5"}}
                        className="move_Lab" onClick={this.position.bind(this,item.ID)}>
                </li>
            });
            return newMove;
        },

        render : function(){
            let type = this.state.LB_className;
            let movelb = this.state.Move_lab;
            return (
                <div className="childer">
                    <ul className="move_ul">
                        <li className={'move_Move'+' '+movelb}>
                        </li>
                        {this.movesIndex()}
                    </ul>
                    <section className="nav_box">
                        <img onClick={this.position.bind(this,0)} src={"image/logo.png"} className="nav_img"></img>
                        <ul className="nav_ul">
                            {this.fectData_Nav()}
                        </ul>
                        <Dropdown Move_index={this.state.Move_index} position={this.position} datas={this.state.datas} />
                    </section>
                    <div className="content">
                        <ul className={type?type:"onePosition"}>
                            <Header Move_index={this.state.Move_index} opus={this.state.opus} datas={this.state.datas}/>
                        </ul>
                    </div>
                </div>

            );
        }
    });

    module.exports = Nav;

})(window);