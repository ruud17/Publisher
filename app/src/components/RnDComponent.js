import Rnd from 'react-rnd';
import React from 'react';

const style = {
    display: "flex",
  // alignItems: "center",
  justifyContent: "stretch",
  border: "solid 1px #ddd",
  background: "#f0f0f0",
  overflow: "hidden"
};

class RndCustom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: this.props.width || 100,
            height: this.props.height || 100,
            x: 10,
            y: 10
        }
    }
    render() {
        return (
            <Rnd
                style={style}
                size={{
                width: this.state.width,
                height: this.state.height
            }}
                position={{
                x: this.state.x,
                y: this.state.y
            }}
                onDragStop={(e, d) => {
                this.setState({x: d.x, y: d.y});
            }}
                onResize={(e, direction, ref, delta, position) => {
                this.setState({
                    width: ref.offsetWidth,
                    height: ref.offsetHeight,
                    ...position
                });
            }}>
                <div style={{display: "inline-flex"}}>
                    {this.props.text && <span style={{fontSize:10+'px'}}>
                       {this.props.text}
                    </span>}
                    {this.props.img && <img style={{width: this.state.width, height: this.state.height}}
                        src={this.props.img}/>
                        }
                </div>                
            </Rnd>
        )
    }
}

export default RndCustom;