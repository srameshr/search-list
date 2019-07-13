import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from './Item'


class List extends Component {
    
    renderElements = () => {
        const { data } = this.props;
        if (!data.length) {
            return this.props.ListEmptyComponent();
        }
        return this.props.data.map((e, i) => <Item {...this.props} index={i} key={i} />);
    }
    
    render() {
        return (
            <ul className="list">
                { this.renderElements() }
            </ul>
        )
    }
}


const mapStateToProps = () => {
    
    return {};
  };
  
  export default connect(mapStateToProps, {
  })(List);