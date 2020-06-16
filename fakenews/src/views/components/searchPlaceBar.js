import React from 'react'
import '../styles/searchBar.css'
import { MDBIcon } from "mdbreact";
import { Input, FormText } from 'reactstrap';


export default class search extends React.Component {

    constructor() {
        super();
        this.state = {
            searchedVal: "",
        }
        this.handleSubmite = this.handleSubmite.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleEnter = this.handleEnter.bind(this)
    }

    handleSubmite() {
        console.log("submited")
        // return window.location.replace(`/places/${this.state.searchedVal}`)
    }

    handleEnter(e) {
        console.log("here", e.key)
        if (e.key === "Enter")
            this.handleSubmite(e)
    }

    handleChange(e) {
        console.log(this.state.searchedVal)
        this.setState({
            searchedVal: e.target.value
        })
        console.log(this.state.searchedVal)
    }

    render() {
        return (
            <div className=" searchBar">
                <Input type="textarea" name="text" value={this.state.searchedVal} rows= '5' onKeyPress={this.handleEnter} onChange={this.handleChange} className="searchItem" placeholder="متن مورد نظر را وارد کنید" aria-label="Search" />
                <div className = "searchButton">   
                <p>جست و جو</p>            
                </div>
            </div>


        );
    }
}