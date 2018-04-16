import React from 'react';
import {render} from 'react-dom';
import InfoGraphicComponent from './components/InfoGraphicComponent';
import ResizableBox from 'react-resizable-component';
import './App.css';
import imgOneFromAlbum from './img/benz.jpg';
import imgTwoFromAlbum from './img/marcelo.jpg';
import logo from './img/logo.png';
import Dnd from './components/DndComponent';
import {Accordion, AccordionItem, AccordionItemTitle, AccordionItemBody} from 'react-accessible-accordion';
import {zimgoData} from './mocks/zimgoData';
import {topNews} from './mocks/topNews';
import _ from 'lodash';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      infoGraphicData:[]
    }
  }

  getElem() {
    debugger;
    const elem = document
      .getElementById('mainEl')
      .innerHTML;
    console.log('elem', elem);
    return;
  }

  getRandomInfoGraphicData = () =>{
    const randomData = _.sampleSize(topNews,3);
     return randomData;
  }

  updateInfoGraphic(){
   
  }

  componentDidMount() {
    setInterval(()=>{
      this.setState({
        infoGraphicData : this.getRandomInfoGraphicData()
      })
    },3000)  }

  render() {
    const formatedZimgoData = zimgoData.map((item) => <div key={item.id} className="zimgo-article">
      <Dnd value={item.img} type="img" height={120} width={120}/>
      <Dnd
        value={item.name}
        type="text"
        contentClass="zimgo-content-name"
        wrapperClass="zimgo-wrapper-name"
        width={170}
        height={25}/>
      <Dnd
        value={item.text}
        type="text"
        contentClass="zimgo-content-description"
        wrapperClass="zimgo-wrapper-description"
        width={170}height={200}/>
    </div>)
    return (
      <div className="flex-container">
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
              <Accordion>
                <AccordionItem>
                  <AccordionItemTitle>
                    <h5>Templates</h5>
                  </AccordionItemTitle>
                  <AccordionItemBody>
                    <p>Template one</p>
                    <p>Template two</p>
                  </AccordionItemBody>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemTitle>
                    <h5>Albums</h5>
                  </AccordionItemTitle>
                  <AccordionItemBody
                    style={{
                    height: 140 + 'px'
                  }}>
                    <Dnd width={120} height={120} type="img" value={imgOneFromAlbum}/>

                    <Dnd
                      width={120}
                      height={120}
                      type="img"
                      value={imgTwoFromAlbum}
                      wrapperClass="img-album"/>
                  </AccordionItemBody>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemTitle>
                    <h5>InfoGraphics</h5>
                  </AccordionItemTitle>
                  <AccordionItemBody>
                    <Dnd width={500} height={500} type="infoGraphic">
                      <InfoGraphicComponent data={this.state.infoGraphicData}/>
                    </Dnd>
                  </AccordionItemBody>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemTitle>
                    <h5>Charts</h5>
                  </AccordionItemTitle>
                  <AccordionItemBody>
                    <p>Body content</p>
                  </AccordionItemBody>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemTitle>
                    <h5>Custom Components</h5>
                  </AccordionItemTitle>
                  <AccordionItemBody>
                    <p>Body content</p>
                  </AccordionItemBody>
                </AccordionItem>

              </Accordion>
            </div>
          </div>

          <div className="main-content-wrapper" id="mainEl">
            <div className="row">
              <div className="content-buttons">
                {/* <button
                  id="submit"
                  name="button"
                  value="register"
                  className="btn btn-primary"
                  onClick={this.getElem}>Save as draft</button> */}
                <button
                  id="submit"
                  name="button"
                  value="register"
                  className="btn btn-primary btn-sm">Publish</button>
              </div>
            </div>

            <div className="main-body-wrapper">
              <div className="zimgo-content">
                {formatedZimgoData}
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}
