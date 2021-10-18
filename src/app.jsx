import React, { Component } from 'react'
import Navbar from './components/navbar';
import Home from './components/home';
import Article from './components/article';
import About from './components/about';
import Contact from './components/Contact';

class App extends React.Component {

    constructor(props){
        super(props);
        this.handlePageRequest = this.handlePageRequest.bind(this);

        this.state = {
            page : "Home",
        }
    }

    handlePageRequest(page){
        this.setState({
            page
        })
    }

    renderContent(page){
        if (page == "Home"){
            return <Home/>
        } else if (page == "About"){
            return <About/>
        } else if (page == "Contact"){
            return <Contact/>
        } else if (page == "Article"){
            return <Article/>
        }
    }

    render() { 
        return <div>
            <Navbar onPageRequested={this.handlePageRequest}/>
            {this.renderContent(this.state.page)}
        </div>;
    }
}
 
export default App;