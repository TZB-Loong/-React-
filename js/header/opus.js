/**
 * Created by Administrator on 2016/12/9.
 */
var React = require('react');

(function (window) {
    var Opus = React.createClass({
        getInitialState:function () {
            return {
                dragBool:13
            }
        },
        handleMouseLeave : function () {
            this.setState({
                dragBool:13
            })
        },
        handleMouseMove:function (index) {
            this.setState({
                dragBool:index
            })
        },

        feactData:function () {
            let bef = {transform: 'translate3d(0,0,0)',opacity:'1'};
            let bef_None = {transform: 'translate3d(0,0,0)',opacity:'0'};
            let bef_Img = {transition: 'opacity 0.35s',opacity:'0.2'};
            let opusData = this.props.opus;
            var newData = opusData.map((item,i) => {
                return <div className="opus_Div1" key={i}>
                    <div className="opus_Div2">
                        <figure onMouseMove={this.handleMouseMove.bind(this,i)}
                                onMouseLeave={this.handleMouseLeave}
                                className="opus_Fig">
                            <img style={this.state.dragBool==i?bef_Img:null}
                                 className="opus_Img" src={item.URL}></img>
                            <figcaption className={this.state.dragBool==i?'opus_Figcp1':'opus_Figcp'}>
                                <p></p>
                                <h2 style={this.state.dragBool==i?bef_None:null} className="opus_H2">
                                    {item.TILE}
                                    <span className="opus_Span">{item.STITLE}</span>
                                </h2>
                                <img style={this.state.dragBool==i?bef:null}
                                     src={item.CONTENT_ONE} className="opus_Il"></img>
                                <img style={this.state.dragBool==i?bef:null}
                                     src={item.CONTENT_TWO} className="opus_Il"></img>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            });
            return newData;
        },
        render: function () {
            return (
                <div className="opus_Box">
                    {this.feactData()}
                </div>
            )
        }
    })

    module.exports = Opus;
})(window)