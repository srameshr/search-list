import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from './Item'


class List extends Component {
    
    renderElements = () => {
        const { data, search } = this.props;
        if (!data.length && search) {
            return this.props.ListEmptyComponent();
        }
        return this.props.data.map((data, i) => <Item {...this.props} data={data} index={i} key={i} />);
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