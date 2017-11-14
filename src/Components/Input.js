import React from 'react';

export default class Input extends React.Component {
    constructor(props) {
        super(props)

        this.state = {value: "test"};

        this.handleChange = this.handleChange.bind(this);
        this.addIngred = this.addIngred.bind(this);
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    addIngred(ingred) {
        if (ingred.length > 0){
        this.props.addIngred(ingred);
        this.setState({value: ''});
        }
    }

    render() {
        return (
            <div className="container justify-content-center">
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
                <button className="btn btn-primary" onClick={() => 
                    this.addIngred(this.state.value)}>
                    Submit</button>
            </div>
        );
    }
}