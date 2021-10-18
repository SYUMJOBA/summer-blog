import React, { Component } from 'react'
import "./page.css"
import Antibes_view from "../images/Antibes_view.jpg"
import Nice_view from "../images/Nice_view.jpg"

class Home extends React.Component {
    render() { 
        return <div className="mainContent">
            <div className="title"> Welcome to my blog! </div>
            <div className="separator"></div>
            <div className="text"> I'm eager to show what amazing stuff I've done during this summer! I even had friends! I know: isn't that crazy enough alone?</div>
            <div className="space"></div>
            <div className="text"> This summer I got to Nice! One of the coolest cities ever! It has an amazing city center, fun beaches and much more, I really think you should visit this place too!</div>
            <div className="flex"> <img className="homeImage" src={Nice_view} alt="" /> <img className="homeImage" src={Antibes_view} alt="" /> </div>
            <div className="text"> This is a sky view of both Nice and Antibes, two strictly correlated places. They both are very interesting places to visit.</div>
            <div className="space"></div>
            <div className="text"> I'll show you some fun stuff I did with friends, believe me, you'll like it! </div>
        </div>;
    }
}
 
export default Home;