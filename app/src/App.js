import React from 'react';
import {render} from 'react-dom';
import InfoGraphicComponent from './components/InfoGraphicComponent';
import ResizableBox from 'react-resizable-component';
import './App.css';
import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import logo from './img/logo.png';
import Dnd from './components/DndComponent';
import {Accordion, AccordionItem, AccordionItemTitle, AccordionItemBody} from 'react-accessible-accordion';
import { zimgoData } from './mocks/zimgoData';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {}
  }

  getElem() {
    debugger;
    const elem = document
      .getElementById('mainEl')
      .innerHTML;
    console.log('elem', elem);
    return;
  }

  render() {
    const formatedZimgoData = zimgoData.map((item)=>
    <div key={item.id}>
      <img src={item.img} style={{height:50+'px', width:50+'px', borderRadius:30}}/> {item.name}
      <p>
      {item.text}
      </p>
    </div>
    )
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
                  <AccordionItemBody>

                    <Dnd
                      width={150}
                      height={150}
                      type="img"
                      img="http://res.cloudinary.com/demo/image/upload/multiple/folders/sample.jpg"/>

                  </AccordionItemBody>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemTitle>
                    <h5>InfoGraphics</h5>
                  </AccordionItemTitle>
                  <AccordionItemBody>
                    <p>Body content</p>
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
           <div>
                  {formatedZimgoData}
           </div>
          
              {/* <Dnd
                width={150}
                height={150}
                value="The lion (Panthera leo) is a species in the family Felidae and a member of the genus Panthera. It is the second largest extant species after the tiger. It exhibits a pronounced sexual dimorphism; males are larger than females with a typical weight range of 150 to 250 kg (331 to 551 lb) for the former and 120 to 182 kg (265 to 401 lb) for the latter. In addition, male lions have a prominent mane, which is perhaps the most recognisable feature of the species. Both sexes have hairy tufts at the end of their tails."
                type="text"/>

                <Dnd
                width={150}
                height={150}
                value={img1}
                type="img"/>

                <Dnd
                width={150}
                height={150}
                value="The lion (Panthera leo) is a species in the family Felidae and a member of the genus Panthera. It is the second largest extant species after the tiger. It exhibits a pronounced sexual dimorphism; males are larger than females with a typical weight range of 150 to 250 kg (331 to 551 lb) for the former and 120 to 182 kg (265 to 401 lb) for the latter. In addition, male lions have a prominent mane, which is perhaps the most recognisable feature of the species. Both sexes have hairy tufts at the end of their tails."
                type="text"/>

                <Dnd
                width={150}
                height={150}
                value={img2}
                type="img"/> */}
            </div>
          </div>
        </div>
      </div>

    );
  }
}
