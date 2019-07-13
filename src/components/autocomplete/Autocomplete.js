import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from '../list/List'
import {
    ARROW_DOWN_KEY,
    ARROW_DOWN_KEY_CODE,
    ARROW_UP_KEY,
    ARROW_UP_KEY_CODE,
} from '../../utils/constants';
import {
    getUsers,
  } from '../../actions';

class Autocomplete extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            selected: -1,
            data: []
        };
    }

    componentWillMount() {
        this.props.getUsers();
    }

    resetSelectedListItem = (index) => {
        this.setState({ selected: index })
    }

    onKeyDown = ({ keyCode, key } = {}) => {
        const { selected, result } = this.state
        if (
            (keyCode === ARROW_UP_KEY_CODE || key === ARROW_UP_KEY) &&
            selected > 0
        ) {
            this.setState( prevState => ({
                selected: prevState.selected - 1
            }))
        } else if (
            (keyCode === ARROW_DOWN_KEY_CODE || key === ARROW_DOWN_KEY) &&
            selected < result.length - 1
        ) {
            this.setState( prevState => ({
                selected: prevState.selected + 1
            }))
        }
    }

    ListEmptyComponent = () => {
        return <h3>No data found</h3>
    }

    render() {
        return (
            <div className="autocomplete-wrapper">
                <input type="text" onKeyDown={this.onKeyDown}/>
                <List
                    selected={this.state.selected}
                    resetSelectedListItem={this.resetSelectedListItem}
                    ListEmptyComponent={this.ListEmptyComponent}
                    data={this.state.data}
                />
            </div>
        )
    }
}


const mapStateToProps = ({ userReducers }) => {
    const { getUsers: getUsersProps } = userReducers;
    return { getUsersProps };
  };
  
  export default connect(mapStateToProps, {
    getUsers,
  })(Autocomplete);