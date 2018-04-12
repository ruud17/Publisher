import Rnd from 'react-rnd';
import React from 'react';
import {dndTypes} from '../models/dndTypes';
import InfoGraphicComponent from './InfoGraphicComponent';
import PropTypes from 'prop-types';

const style = {
    display: "flex",
    justifyContent: "stretch",
    border: "solid 1px #ddd",
    background: "#f0f0f0",
    overflow: "hidden"
};

class DnD extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: this.props.width || 100,
            height: this.props.height || 100,
            x: 10,
            y: 10
        }
    }

// required fields : type and value; ex: type:"text" value:"this is an example"
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
           {
               this.props.type==dndTypes.imgType &&
               <img style={{ width: this.state.width, height: this.state.height}} src={this.props.value}/>            
           }
           {
               this.props.type==dndTypes.freeTextType &&
               <span style={{fontSize: 10 + 'px'}}>{this.props.value}</span>
            }
        </Rnd>
        )
    }
}

DnD.propTypes = {
    type: PropTypes.string,
    value: PropTypes.string
  };

export default DnD;