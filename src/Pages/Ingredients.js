import React, {Component} from 'react';
import Header from '../Components/Header';
import Input from '../Components/Input';
import ListItem from '../Components/ListItem';

export default class Page extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [
                {id: 0, text: "onion"},
                {id: 1, text: "salt"},
                {id: 2, text: "pepper"}
            ],
            nextId: 3
        }

        this.addList = this.addList.bind(this);
        this.removeList = this.removeList.bind(this);
    }

    addList(inputText) {
        let list = this.state.list.slice();
        list.push({id: this.state.nextId, text: inputText});
        this.setState({
            list: list,
            nextId: ++this.state.nextId
        });
    }

    removeList(id) {
        this.setState({
            list: this.state.list.filter((list, index) => list.id !== id)
        })
    }

    render () {
        return (
        <div className="container">
            <Header />
            <Input inputText="" addIngred={this.addList}/>
            <table className = "table">
                <thead className = "container">
                    <th>Ingredients</th>
                </thead>
                <tbody className = "">
                    {
                        this.state.list.map((list) =>{
                            return <ListItem list={list} key={list.id} id={list.id} removeList={this.removeList}/>
                        })
                    }
                </tbody>
            </table>
        </div>
        )
    }
}