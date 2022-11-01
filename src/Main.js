import React, { Component } from 'react'
import CategoryCard from './CategoryCard';
import { Categories } from './shared/ListOfCard';


export class Main extends Component {
    constructor() {
        super();
        this.state = {
            categories: Categories
        };
    }
    render() {
        return <CategoryCard categories={this.state.categories} />
    }
}
export default Main