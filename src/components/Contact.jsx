import React, { Component } from 'react'
import "./page.css"

class Contact extends React.Component {
    render() { 
        return <div className="mainContent">
        <div className="title"> Contact me! </div>
        <div className="separator"></div>
        <div className="text"> If you're interested in anything I do, maybe because you want a custom jewel for yourself, or have me as a DJ for a party, you can take a look at my work at these links.</div>
        <div className="bigSpace"></div>
        <div className="row">
            <div className="unit"> Personal INSTA </div> <a href="https://www.instagram.com/baxdevil/" className="unit link"> baxdevil </a>
        </div>
        <div className="row">
            <div className="unit"> Jewellery INSTA </div> <a href="https://www.instagram.com/antimonyx/" className="unit link"> antimonyx </a>
        </div>
        <div className="row">
            <div className="unit"> DJ INSTA </div> <a href="https://www.instagram.com/DJ_baxdevil/" className="unit link"> DJ_baxdevil </a>
        </div>
        <div className="row">
            <div className="unit"> artistic INSTA </div> <a href="https://www.instagram.com/syumjoba/" className="unit link"> syumjoba </a>
        </div>
        <div className="row">
            <div className="unit"> spotify </div> <a href="https://open.spotify.com/artist/1QYTCD8cNLvHcWtsEvYqb8?si=36014e876fc44f57" className="unit link"> syumjoba </a>
        </div>
        <div className="row">
            <div className="unit"> github </div> <a href="https://github.com/syumjoba" className="unit link"> syumjoba </a>
        </div>
        <div className="row">
            <div className="unit"> School.xyz INSTA </div> <a href="https://www.instagram.com/school.xyz/" className="unit link"> School.xyz </a>
        </div>
    </div>;
    }
}
 
export default Contact;