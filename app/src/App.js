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
import Rodal from 'rodal';
import CreateWebsiteComponent from './components/CreateWebsiteComponent';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      infoGraphicData: [],
      modalVisible: false,
      mainContent: ""
    }
  }

  getContent = () => {
    const elem = document
      .getElementById('mainEl')
      .innerHTML;
    console.log('elem', typeof(elem));
    return elem;
  }

  hideModal = () => {
    this.setState({modalVisible: false})
  }

  openModal = () => {
    const content = this.getContent();
    this.setState({modalVisible: true, mainContent: content})
  }

  getRandomInfoGraphicData = () => {
    const randomData = _.sampleSize(topNews, 3);
    return randomData;
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        infoGraphicData: this.getRandomInfoGraphicData()
      })
    }, 3000)
  }

  render() {
    const formatedZimgoData = zimgoData.map((item) => <div key={item.id} className="zimgo-article">
      <Dnd value={item.img} type="img" height={130} width={155}/>
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
              <Accordion accordion={false} className="accordion-custom">
                <AccordionItem>
                  <AccordionItemTitle className="accordion-item-custom">
                    <h5>Templates</h5>
                  </AccordionItemTitle>
                  <AccordionItemBody>
                    <p>Template one</p>
                    <p>Template two</p>
                  </AccordionItemBody>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemTitle className="accordion-item-custom">
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
                  <AccordionItemTitle className="accordion-item-custom">
                    <h5>InfoGraphics</h5>
                  </AccordionItemTitle>
                  <AccordionItemBody
                    style={{
                    height: 320 + 'px'
                  }}>
                    <Dnd width={450} height={290} type="infoGraphic">
                      <InfoGraphicComponent data={this.state.infoGraphicData}/>
                    </Dnd>
                  </AccordionItemBody>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemTitle className="accordion-item-custom">
                    <h5>Charts</h5>
                  </AccordionItemTitle>
                  <AccordionItemBody>
                    <p>Body content</p>
                  </AccordionItemBody>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemTitle className="accordion-item-custom">
                    <h5>Custom Components</h5>
                  </AccordionItemTitle>
                  <AccordionItemBody>
                    <p>Body content</p>
                  </AccordionItemBody>
                </AccordionItem>

              </Accordion>
            </div>
          </div>

          <div className="main-content-wrapper">
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
                  className="btn btn-primary btn-sm"
                  onClick={this.openModal}>Publish</button>
              </div>
            </div>
            <div id="newWebsiteId">
            <CreateWebsiteComponent zimgoData={formatedZimgoData}/>
            </div>
          </div>
        </div>

        <Rodal visible={this.state.modalVisible} onClose={this.hideModal}>
          <div>{this.state.mainContent}</div>
        </Rodal>
      </div>

    );
  }
}
