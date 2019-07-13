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
            searchValue: '',
        };
    }

    resetSelectedListItem = (index) => {
        this.setState({ selected: index })
    }

    onKeyDown = ({ keyCode, key } = {}) => {
        const { selected } = this.state
        const { data = [] } = this.props.getUsersProps.success;
        if (
            (keyCode === ARROW_UP_KEY_CODE || key === ARROW_UP_KEY) &&
            selected > 0
        ) {
            this.setState( prevState => ({
                selected: prevState.selected - 1
            }))
        } else if (
            (keyCode === ARROW_DOWN_KEY_CODE || key === ARROW_DOWN_KEY) &&
            selected < data.length - 1
        ) {
            this.setState( prevState => ({
                selected: prevState.selected + 1
            }))
        }
    }

    ListEmptyComponent = () => {
        return (
            <div className="empty-wrapper">
                <p className="empty-message">No User Found</p>
            </div>
        )
    }

    handleOnChange = (e) => {
        this.setState({ searchValue: e.target.value }, () => {
            this.props.getUsers({ query: this.state.searchValue });
        });
    }

    render() {
        return (
            <div className="autocomplete-wrapper">
                <div className="autocomplete-input-wrapper">
                    <input
                        value={this.state.searchValue}
                        type="text"
                        onKeyDown={this.onKeyDown}
                        placeholder="Search users by id, address, name"
                        onChange={this.handleOnChange}
                    />
                </div>
                <List
                    selected={this.state.selected}
                    resetSelectedListItem={this.resetSelectedListItem}
                    ListEmptyComponent={this.ListEmptyComponent}
                    data={this.props.getUsersProps.success && this.props.getUsersProps.success.data || []}
                    highlight={this.state.searchValue}
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