var React = require('react');
var ReactDOM =require('react-dom');

(function (window) {
var Works=React.createClass({
    propsTypes:{
        interval:React.PropTypes.number,
        autoPlay:React.PropTypes.bool,
        activeIndex:React.PropTypes.bool,
        defaultActiveIndex:React.PropTypes.bool,
        direction:React.PropTypes.oneOf['right','left'],
        number:React.PropTypes.number,
        boxStyle:React.PropTypes.string,
    },
    //设置默认的props
    getDefaultProps: function(){
        return{
            interval:3000,
            autoPlay:true,
            defaultActiveIndex:0,
            direction:'right'
        }
    },
    //设置初始的state状态
    getInitialState: function(){
        return{
            activeIndex:this.props.defaultActiveIndex?this.props.defaultActiveIndex:0,
            direction:this.props.direction?this.props.direction:'right'
        }
    },
    //组件出现前 就是dom还没有渲染到html文档里面
        //componentWillMount
    //组件渲染完成 已经出现在dom文档里
    componentDidMount: function(){
        this.autoPlay();
    },
    //已加载组件收到新的参数时调用
    //componentWillReceiveProps (){
    //
    //},
    //移除真实的DOM之前
    componentWillUnmount: function(){
        clearInterval(this.timeOuter);
    },
    autoPlay: function(){
        if(this.props.autoPlay){
            if(this.props.direction==="right"){
                this.timeOuter=setInterval(this.playRight,this.props.interval);
            }else if(this.props.direction==="left"){
                this.timeOuter=setInterval(this.playLeft,this.props.interval);
            }
        }
    },
    playRight: function(indexIn){
        let index=indexIn?indexIn:this.state.activeIndex+1;
        if(index>this.props.number-1){
            index=0;
        }
        this.setState({
            activeIndex:index
        })
    },
    playLeft: function(indexIn){
        let index=indexIn?indexIn:this.state.activeIndex-1;
        if(index<0){
            index=this.props.number-1;
        }
        this.setState({
            activeIndex:index
        })
    },
    wo_position: function(){
        switch (this.state.activeIndex){
            case 0:return "wo_onePosition" ;
            case 1:return "wo_twoPosition" ;
            case 2:return "wo_therePosition" ;
            case 3:return "wo_fourPosition";
        }
    },
    left: function(){
        clearInterval(this.timeOuter);
        let oldIndex=this.props.activeIndex;
        this.playLeft(oldIndex+1);
        this.autoPlay();
    },
    right: function(){
        clearInterval(this.timeOuter);
        let oldIndex=this.props.activeIndex;
        this.playRight(oldIndex-1);
        this.autoPlay();
    },
    fex_Li: function(){
        let num =[{"url":'image/I_img.png'},{"url":'image/I_img.png'},{"url":'image/I_img.png'},{"url":'image/I_img.png'}];
        var newLi = num.map((item,i) => {
            return <li className="wo_boxStyleLi" key={i} style={{background:'url('+ item.url +') no-repeat'}}></li>
        });
        return newLi;
    },
    render: function(){
        let{
            interval,
            autoPlay,
            activeIndex,
            defaultActiveIndex,
            direction,
            number,
            boxStyle
            }=this.props;
        return <div className="wo_Box marDiv">
            <span className="wo_leftIcon" onClick={this.left}>{'<'}</span>
            <span className="wo_rightIcon" onClick={this.right}>{'>'}</span>
            <div className={boxStyle} >
                <ul className={this.wo_position()}>
                    {this.fex_Li()}
                </ul>
            </div>

        </div>
    }
});

module.exports = Works;
})(window);