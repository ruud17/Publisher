import React, {Component} from 'react';
import PropTypes from 'prop-types';

class CreateWebsiteComponent extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            // infoGraphicItems:[]
        }

    }

    componentWillReceiveProps(nextProps) {
        // this.setState({     infoGraphicItems:nextProps.data })
    }

    render() {
        return (
            <div className="main-body-wrapper" id="mainEl">
                <div className="zimgo-content">
                    {this.props.zimgoData}
                </div>
            </div>
        );
    }
}

CreateWebsiteComponent.propTypes = {
    //data:PropTypes.array
};

export default CreateWebsiteComponent;
