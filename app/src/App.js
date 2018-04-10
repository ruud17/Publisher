import React from 'react';
import {render} from 'react-dom';
import Rnd from 'react-rnd';
import InfoGraphicComponent from './components/InfoGraphicComponent';
import ResizableBox from 'react-resizable-component';
import './App.css';
import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import logo from './img/logo.png';

const style = {
  display: "flex",
  border: "solid 1px #ddd",
  background: "#f0f0f0"
};

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      width: 100,
      height: 100,
      x: 10,
      y: 45
    }
  }

  getElem() {
    debugger
    const elem = document
      .getElementById('mainEl')
      .innerHTML;
    return;
  }

  render() {
    return (

      <div className="container">
        <div className="header">
          <header className="header-fixed">
            <div>
              <img src={logo}/> {/* <nav>
                <a>Personal Publisher</a>
              </nav> */}
            </div>
          </header>
        </div>
        <div className="content-wrapper">
          <div className="left-sidebar-wrapper">
            <div className="sidebar-wrapper">
              <div className="box">
                Templates
              </div>
              <div className="box">
                <p>Albums</p>
                <Rnd
          style={style}
          size={{ width: this.state.width, height: this.state.height }}
          position={{ x: this.state.x, y: this.state.y }}
          onDragStop={(e, d) => {
            this.setState({ x: d.x, y: d.y });
          }}
          onResize={(e, direction, ref, delta, position) => {
            this.setState({
              width: ref.offsetWidth,
              height: ref.offsetHeight,
              ...position
            });
          }}
        >
          <img
            style={{ width: this.state.width, height: this.state.height }}
            src={
              "https://img.wikinut.com/img/gycf69_-6rv_5fol/jpeg/0/Best-Friends-Img-Src%3AImage%3A-FreeDigitalPhotos.net.jpeg"
            }
          />
        </Rnd>
                {/* <Rnd         style={style}
    size={{         width: this.state.width2,         height: this.state.height2
         }} position={{         x: this.state.x2,         y: this.state.y2
    }}   onDragStop={(e, d) => {         this.setState({x2: d.x, y2: d.y})
    }}        onResize={(e, direction, ref, delta, position) => { this.setState({
              width: ref.offsetWidth,           height: ref.offsetHeight,
      ...position         });       }}>         <img        src={img2}
    alt="img2"           className="img" style={{           width:
    this.state.width,           height: this.state.height         }}/>
    </Rnd> */}
              </div>
              <div className="box">
                InfoGraphics
              </div>
              <div className="box">
                Charts
              </div>
              <div className="box">
                Custom components
              </div>
            </div>
          </div>
          <div className="main-content-wrapper">
            <div class="row">
              <div className="content-buttons">
              <button id="submit" name="button" value="register" className="btn btn-primary">Save as draft</button>
                <button id="submit" name="button" value="register" className="btn btn-primary">Publish</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}
