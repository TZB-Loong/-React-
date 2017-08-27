/**
 * Created by Administrator on 2016/11/30.
 */

var React = require('react');

(function (window) {
    var CountryDropdown = React.createClass({

        getInitialState : function () {
            return {
                showOption : false
            };
        },
        //点击显示/隐藏下拉框
        handleClick : function () {
            if(this.state.showOption){
                this.setState({
                    showOption : false
                });
            }else{
                this.setState({
                    showOption : true
                });
            }
        },
        //点击移动页面
        onAClick : function (index) {
            this.props.position(index);
        },
        handData : function () {
            let dateD = this.props.datas;
            let moveI = this.props.Move_index;
            let newD = dateD.map((item)=>{
                return(
                    <li key={item.ID}>
                        <a href="#" style={{color:moveI==item.ID?'white':'#B7B9C3'}}
                           onClick={this.onAClick.bind(this,item.ID)}>{item.TITLE}</a>
                    </li>
                )
            });
            return newD;
        },

        render: function () {

            var options;

            if(this.state.showOption){
                options = (
                    <ul className="dpn_ul">
                        {this.handData()}
                    </ul>
                );
            }

            return (
                <div className="dpn" onClick={this.handleClick}>
                    <img src={"image/dpn-i.png"} className="dpn_i"></img>{options}
                </div>
            )
        }
    });

    module.exports = CountryDropdown;
})(window);

