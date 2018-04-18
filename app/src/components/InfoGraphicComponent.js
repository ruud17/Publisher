import React, {Component} from 'react';
import PropTypes from 'prop-types';

class InfoGraphicComponent extends Component {
    constructor(props, context) {
        super(props, context);
        this.state={
            infoGraphicItems:[]
        }

    }

    componentWillReceiveProps (nextProps){
        this.setState({
            infoGraphicItems:nextProps.data
        })
    }

    render() {
        const {infoGraphicItems} = this.state;

        const listResult= infoGraphicItems.map(item =>
            <li className="step-list__item" key={item.id}>
            <div className="step-list__item__inner">
                <div className="content">
                    <div className="body">
                        <h2>{item.name}</h2>
                        <p>{item.text}</p>
                    </div>

                    <div className="icon">
                        <img
                            src={item.img}
                            alt="Check"/>
                    </div>
                </div>
            </div>
        </li> 
        )

        return (
            <ol className="step-list"> 
            {listResult}
            </ol>
        );
    }
}

InfoGraphicComponent.propTypes = {
    data:PropTypes.array
  };

export default InfoGraphicComponent;
