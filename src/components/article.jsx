import React, { Component } from 'react'
import "./page.css"
import "./articles.css"
import articles from "../data.json"

class Article extends React.Component {

    constructor(props){
        super(props);
        console.log(articles)
        this.handleArticleChange = this.handleArticleChange.bind(this);
        this.renderPage = this.renderPage.bind(this);

        this.state = {
            currentArticle : "",
        }
    }

    handleArticleChange(articleTitle, articleText, articleSubtitle, articleImages){
        this.setState({
            currentArticle : articleTitle,
            text : articleText,
            subtitle : articleSubtitle,
            images : articleImages,
        })
    }

    renderPage(){
        if (this.state.currentArticle){
            return (
            <div className="articleContainer">
                <div className="title">{this.state.currentArticle}</div>
                <div className="separator"></div>
                <div className="text">{this.state.subtitle}</div>
                <div className="bigSpace"></div>
                {this.state.text.map(
                    e => <> <div className="text"> {e} </div> <div className="space"></div> </>
                )}
                
                    {this.state.images.map(i => <img className="fullImage" key={this.state.currentArticle} src={i} alt="" /> )}
                
            </div>
            )
        } else {
            return (
            <div className="articleContainer">
                <div className="title">Please select an article!</div>
                <div className="separator"></div>
                <div className="text">Subtext</div>
                <div className="bigSpace"></div>
                <div className="text">text</div>
            </div>
            )
        }
    }

    render() { 
        return <div className="mainContent">
        <div className="flex">
            <div className="articleColumn">
                {articles.map(e => {
                    return <div className="articleColumnElement" onClick={() => this.handleArticleChange(e.title, e.text, e.subtitle, e.images)} className={e.title === this.state.currentArticle ? "selectedArticle" : ""}>
                        <div className="articleColumnTitle">{e.title}</div>
                        <div className="articleColumnSubtitle">{e.subtitle}</div>
                    </div>
                })}
            </div>
            {this.renderPage()}
        </div>
    </div>;
    }
}
 
export default Article;