import axios from 'axios';
import React, { Component } from 'react';
import NewsArticle from './NewsArticle/NewsArticle';

class NewsArticles extends Component {
    state = {
        articles:[]
    }

    componentDidMount() {
        axios.get('https://newsapi.org/v2/sources?language=en&category=technology&apiKey=3509aaf3c987442f8ec14f072964c831')
            .then((res) => {
                
                this.setState({articles : res.data.sources})
                
                // let articlesArray = Object.keys(articles)
                //     .map(key => articles[key])
                //     .reduce((arr, el)=>{
                //         return arr.concat(el);
                //     },[]); 

                //console.log("articlesArray",articlesArray);
                //console.log("data is as follows --- ", typeof(articlesArray));
                
                // for(let i =0; i<10;i++){
                //     this.state.articles.push(articles[i])
                // }
                //this.setState({articles:articlesArray})
            })
            .catch(error => {
                console.log('Error Subjects.js FE', error);

            })
    }

    render() {
        console.log("this.state.articles", this.state.articles);
        return Object.keys(this.state.articles).map(key => {
            return <NewsArticle article = {this.state.articles[key]} key={key} />
        })  
            
    }
}

export default NewsArticles;
