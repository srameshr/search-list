import React, { Component } from 'react';
import { connect } from 'react-redux';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: -1,
        };
        this.listElement = React.createRef();
    }

    componentWillReceiveProps(prevProps, nextProps) {
        this.setState({ selected: prevProps.selected })
    }

    toggleActiveClass = (index) => {
        this.props.resetSelectedListItem(index);
        this.setState({ selected: - 1 }, () => {
            this.setState({ selected: index })
        })
    }

    scrollAndHighlight = () => {
        this.listElement.current.scrollIntoView({
            block: 'nearest',
            behavior: 'auto'
        });
        return 'active';
    }

    render() {
        return (
           <li
                ref={this.listElement}
                key={this.props.index}
                onMouseEnter={(e) => this.toggleActiveClass(this.props.index)}
                onMouseLeave={(e) => this.toggleActiveClass(-1)}
                className={`item ${this.state.selected === this.props.index  ? this.scrollAndHighlight()  : ''}`} 
            >
                <div className="card-wrapper">
                    <h4 className="card-title">{this.props.data.id}</h4>
                    <i className="card-subtitle">{this.props.data.name}</i>
                    <ul className="card-items-wrapper">
                        <li className="card-items">John found in items</li>
                    </ul>
                    <p className="card-info">{this.props.data.address}</p>
                </div>
            </li>
        )
    }
}


const mapStateToProps = () => ({});
  
export default connect(mapStateToProps, {})(Item);