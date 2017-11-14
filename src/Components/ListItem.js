import React, {Component} from 'react';

export default class ListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    removeList(id) {
        this.props.removeList(id);
    }

    render() {
        return (
            <div className="listWrapper">
                <button classname="removeList" onClick={(e)=> this.removeList(this.props.id)}>remove</button>{this.props.list.text}
            </div>
        );
    }
};
