import React from 'react';
import {render} from 'react-dom';
import InfoGraphicComponent from './components/InfoGraphicComponent';
import ResizableBox from 'react-resizable-component';
import './App.css';
import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import logo from './img/logo.png';
import RndCustom from './components/RnDComponent';
import {Accordion, AccordionItem, AccordionItemTitle, AccordionItemBody} from 'react-accessible-accordion';

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

                    <RndCustom
                      width={500}
                      height={400}
                      text="mehmed"
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
              <RndCustom
                width={150}
                height={150}
                text="The lion (Panthera leo) is a species in the family Felidae and a member of the genus Panthera. It is the second largest extant species after the tiger. It exhibits a pronounced sexual dimorphism; males are larger than females with a typical weight range of 150 to 250 kg (331 to 551 lb) for the former and 120 to 182 kg (265 to 401 lb) for the latter. In addition, male lions have a prominent mane, which is perhaps the most recognisable feature of the species. Both sexes have hairy tufts at the end of their tails."
                img={img1}/> {/* <RndCustom width={150} height={150} text="Bears are carnivoran mammals of the family Ursidae. They are classified as caniforms, or doglike carnivorans. Although only eight species of bears are extant, they are widespread, appearing in a wide variety of habitats throughout the Northern Hemisphere and partially in the Southern Hemisphere. Bears are found on the continents of North America, South America, Europe, and Asia. Common characteristics of modern bears include large bodies with stocky legs, long snouts, small rounded ears, shaggy hair, plantigrade paws with five nonretractile claws, and short tails." img={img2}/> */}

            </div>
          </div>
        </div>
      </div>

    );
  }
}
