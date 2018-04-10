import React, { Component } from 'react';

class InfoGraphicComponent extends Component {
    constructor(props, context) {
        super(props, context);
        
    }
    
    render() {
        return (
            <div className="container" style={{width:200+'px', height:150+'px'}}>
            <ol className="step-list">
                <li className="step-list__item">
                    <div className="step-list__item__inner">
                        <div className="content">
                            <div className="body">
                                <h2>Lorem ipsum dolor sit amet</h2>
                                <p>Consectetur adipisicing elit. Reprehenderit perspiciatis.</p>
                            </div>
        
                            <div className="icon">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/13060/check-circle.svg" alt="Check" />
                            </div>                
                        </div>
                    </div>
                </li>
                <li className="step-list__item">
                    <div className="step-list__item__inner">
                        <div className="content">
                            <div className="body">
                                <h2>Impedit ducimus saepe assumenda</h2>
                                <p>Sapiente beatae? Quo maiores consequatur, eveniet autem eos quia molestias perferendis.</p>
                            </div>
        
                            <div className="icon">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/13060/mail_outline_copy.svg" alt="Check" />
                            </div>                
                        </div>
                    </div>
                </li>
                <li className="step-list__item">
                    <div className="step-list__item__inner">
                        <div className="content">
                            <div className="body">
                                <h2>Repellendus</h2>
                                <p> Asperiores eum, accusantium harum, aperiam labore assumenda quisquam tempore magnam enim iusto voluptatum aspernatur dicta saepe possimus nobis molestiae quas sapiente.</p>
                            </div>
        
                            <div className="icon">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/13060/graph.svg" alt="Check" />
                            </div>                
                        </div>
                    </div>
                </li>
                <li className="step-list__item">
                    <div className="step-list__item__inner">
                        <div className="content">
                            <div className="body">
                                <h2>Quaerat</h2>
                                <p> Iusto quod incidunt vel quidem fuga quos laudantium dignissimos eos, tempore sequi quis praesentium.</p>
                            </div>
        
                            <div className="icon">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/13060/calendar.svg" alt="Check" />
                            </div>                
                        </div>
                    </div>
                </li>
                <li className="step-list__item">
                    <div className="step-list__item__inner">
                        <div className="content">
                            <div className="body">
                                <h2>Voluptatum alias hic</h2>
                                <p>Officiis excepturi atque velit asperiores cum perferendis, repellendus facilis voluptatibus quas! Consequuntur.</p>
                            </div>
        
                            <div className="icon">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/13060/heart.svg" alt="Check" />
                            </div>                
                        </div>
                    </div>
                </li>
            </ol>
        </div>
        );
    }
}

export default InfoGraphicComponent;
