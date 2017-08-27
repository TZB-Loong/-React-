/**
 * Created by apple on 16/10/22.
 */

var React = require('react');


var Index = require('./header/index');
var Server = require('./header/server');
var Contact = require('./header/contact');
var Opus = require('./header/opus.js');

(function (window) {

    var Header = React.createClass({
        getInitialState : function () {
            return{
                index : 0,
                time : true
            }
        },
        makeImgBox : function (index) {
              let arr = index.map((item,i) => {
                  return <img key={i} src={item}/>
              })
            return arr;
        },
        componentWillMount : function () {
            setTimeout(() => {
                this.setState({
                    time:false
                })
            },1000);
        },
        timerSet1:function () {
            let imgDateServer = this.imgDate("server",6);
            return   <section className="boxStyleLi">
                <div className="boxStyleLiBox">
                    {this.makeImgBox(imgDateServer)}
                </div>
                <div className="boxStyleDiv">
                    <Server Move_index={this.props.Move_index} />
                </div>
            </section>
        },
        timerSet2:function () {
            let imgDateOpus = this.imgDate("opus",6);
            return  <section className="flex_center">
                <div className="flexLiBox">
                    {this.makeImgBox(imgDateOpus)}
                </div>
                <div className="boxStyleDiv">
                    <Opus opus={this.props.opus}/>
                </div>
            </section>
        },
        timerSet3:function () {
            let imgDateContact = this.imgDate("contact",6);
            return  <section className="boxStyleLi">
                <div className="boxStyleLiBox">
                    {this.makeImgBox(imgDateContact)}
                </div>
                <div className="boxStyleDiv">
                    <Contact />
                </div>
            </section>
        },
        imgDate : function (name,index) {
            let arr = [];
              for (let i=1; i<=index ; i++){
                  if (i<10){
                      arr[i] = "image/"+ name +"_0"+ i +".jpg";
                  }else {
                      arr[i] = "image/"+ name +"_"+ i +".jpg";
                  }

              }
            return arr;
        },
        render(){
            let datas = this.props.datas;
            let imgDateIndex = this.imgDate("index",6);
            return (
               <section>
                   <li key={datas[0].ID}>
                       <section className="boxStyleLi">
                           <div className="boxStyleLiBox">
                               {this.makeImgBox(imgDateIndex)}
                           </div>

                           <div className="boxStyleDiv">
                               <Index />
                           </div>
                       </section>
                   </li>
                   <li key={datas[1].ID}>
                       {this.state.time==false?this.timerSet1():""}
                   </li>
                   <li key={datas[2].ID}>
                       {this.state.time==false?this.timerSet2():""}
                   </li>
                   <li key={datas[3].ID}>
                       {this.state.time==false?this.timerSet3():""}
                   </li>
               </section>
            );
        }

    });

    module.exports = Header;


})(window);
