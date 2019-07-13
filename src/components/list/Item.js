import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../card/Card';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: -1,
        };
        this.listElement = React.createRef();
    }

    componentWillReceiveProps(prevProps) {
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
        const { id, name, items, address } = this.props.data;
        return (
           <li
                ref={this.listElement}
                key={this.props.index}
                onMouseEnter={(e) => this.toggleActiveClass(this.props.index)}
                onMouseLeave={(e) => this.toggleActiveClass(-1)}
                className={`item ${this.state.selected === this.props.index  ? this.scrollAndHighlight()  : ''}`} 
            >
               <Card title={id} subtitle={name} items={items} info={address} highlight={this.props.highlight}/>
            </li>
        )
    }
}


const mapStateToProps = () => ({});
  
export default connect(mapStateToProps, {})(Item);