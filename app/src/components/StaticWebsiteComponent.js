import React, {Component} from 'react';
import PropTypes from 'prop-types';

class StaticWebsiteComponent extends Component {
    constructor(props, context) {
        super(props, context);
        this.state={
        }

    }

    componentWillReceiveProps (nextProps){
        // this.setState({
        //     infoGraphicItems:nextProps.data
        // })
    }

    render() {
        const s = this.props.htmlContent;
        let htmlObject = document.createElement('div');
        htmlObject.innerHTML = s;

        return (
            // <div>{{htmlObject}}</div>
            <div>Here goes website preview!!!</div>
        );
    }
}

StaticWebsiteComponent.propTypes = {
    // data:PropTypes.array
  };

export default StaticWebsiteComponent;
