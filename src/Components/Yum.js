import React from 'react';
import Request from 'superagent';
import _ from 'lodash';

export class Yum extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            searchQuery: '',
            recipe: {
                ingredients: [],
                name: props.name
            },
            name: ""
        
        };

        this.search = this.search.bind(this);
        this.queryUpdate = this.queryUpdate.bind(this);
    }

    componentWillMount(){
        this.search(this.state.searchQuery);
    }
    
    displayName(recipe) {

        const name = _.get(recipe).map((sourceDisplayName) => {
            this.setState({name:name});
            
        });   
    }

    render(){
        //const title = 'Onion Soup'; // Get this from somwhere else ?
        const {recipe, searchQuery, name} = this.state; // Get state properties
        const title = recipe.recipeName;
        const id = recipe.id;
        console.log(title);
        
        const listItems = _.get(recipe, 'ingredients', []).map((ingredient, sourceDisplayName) => {
            return (<h5>{ingredient}</h5>);
        });

        return(
            <div className = "container justify-content-center">
                <input onChange={this.queryUpdate} type="text" value={searchQuery} />

                <h4>{title}</h4>
                <ul className="list-group">
                    <li className="btn btn-primary">{listItems}</li>
                </ul>
            </div>
        )
    }

    queryUpdate(event) {
        const searchQuery = event.target.value; // Get new value from DOM event
        this.setState({searchQuery}); // Save to state
        this.search(searchQuery); // Search
    }

    search(searchQuery) {
        const url = `http://api.yummly.com/v1/api/recipes?_app_id=5129dd16&_app_key=9772f1db10ba433223ad4e765dc2b537&q=${searchQuery}&maxResult=1`
        Request.get(url).then((response) => {
            this.setState({
                recipe: response.body.matches[0]
            });
        });
    }
}

export default Yum;