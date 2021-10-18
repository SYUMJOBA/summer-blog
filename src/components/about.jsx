import React, { Component } from 'react'
import "./page.css"
import DJ_pic from "../images/DJ_baxdevil.jpg"
import Arcax from "../images/Arcax.png"
import Nat_boom from "../images/natural_boom.png"
import Bendings from "../images/Bendings.png"
import chiara1 from "../images/ChiaraX1.png"
import chiara2 from "../images/ChiaraX4.png"
import space from "../images/space.png"
import idiot from "../images/idiot.jpg"

class About extends React.Component {
    render() { 
        return <div className="mainContent">
        <div className="flex">
            <div className="column">
                <div className="title"> MEET JOHN! </div> 
                <div className="separator"></div>
                <div className="text"> The author of this masterpiece! (wich I know is not a masterpiece, but please, make me happy, I made it)</div>
                <div className="bigSpace"></div>
                
                <div className="text"> Meet john, just a very average guy who tasked with doing a very VERY simple english summer blog, in two days.</div>
                <div className="text"> So he of course wanted to overengineer everything to an unnecessary level coding an etire website in React.js (wich he had to also learn from basically zero)</div>
            </div>
            <img className="homeImage" src={idiot} alt="" />
        </div>

        <div className="space"></div>
        <div className="title"> You know .. I'm not normal </div>
        <div className="separator"></div>
        <div className="text"> It's not because I don't have friends, that would be an old boring story wich already too many people know very well </div>
            <div className="flex"> <img className="homeImage" src={DJ_pic} alt="" /> 
                <div className="text"> 
                    <div className="space"></div>
                    <div className="title"> but weirder!</div> 
                    <div className="separator"></div>
                    <div className="text"> I am a: <div className="space"></div> jewel designer, <br /> DJ, <br /> developer, <br /> writer, <br /> musician, <br /> 3D artist, <br /> willing entrepeneur </div>
                </div>
                <div>
                    <img className="homeImage" src={Arcax} alt="" />
                    <img className="homeImage" src={Nat_boom} alt="" />
                    <img className="homeImage" src={Bendings} alt="" />
                    <img className="homeImage" src={chiara1} alt="" />
                    <img className="homeImage" src={chiara2} alt="" />
                    <img className="homeImage" src={space} alt="" />
                </div>
                
            </div>
        <div className="text"> I do quite the amount of stuff, people ask me "how do you have time to do all of this stuff?" and the answer is quite simple: "I just don't watch Netflix, and don't like social events"</div>
        <div className="text"> The funny thing is that, this alone allows to be a recource for social events, like being a DJ is the most obvious one, but also being a 3D artist and a website developr can be quite useful often.</div>
        <div className="separator"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="text"> I know that the way this webpage behaves is horrible, please forgive me, I did in it in a clear rush</div>
        <div className="title"> Don't try this at home </div>
        <div className="text"> I really risked it here, I was about to not decently finish the blog in time, I found many obstacles. I don't feel lucky because I basically did nothing else in the last two days, but I know for sure that this was a smart move to do if you wanted to learn React.js in two days, not to do a good english project. </div>
        
    </div>;
    }
}
 
export default About;