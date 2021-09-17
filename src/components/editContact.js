import React, { Component } from 'react';



class EditContact extends Component{

    constructor(props){
        super(props);
        
        const {id,name,email} = props.location.state.contact;
        this.state={
            id,name,email
        };
    }
    
    update=(e)=> {
        e.preventDefault();
        if(this.state.name==="" || this.state.email===""){
            alert("All fields are mandatory");
            return;
        }

        this.props.EditContactHandler(this.state);
        this.setState({name:"",email:""});
        this.props.history.push("/");
        return;
    }

    render(){
        return(
            <div className="ui container">
                <h2>Update Contact</h2>
                <form className="ui form" onSubmit={this.update}>
                    <div className="field">
                        <label for="name">Name</label>
                        <input  type="text" id="name" placeholder="Enter your Name" onChange={(e)=>{this.setState({name:e.target.value})}} value={this.state.name}/>
                    </div>
                    <div className="field">
                        <label for="email">Email</label>
                        <input  type="email" id="email" placeholder="Enter your Email" onChange={(e)=>{this.setState({email:e.target.value})}} value={this.state.email}/>
                    </div>
                    <button className="ui primary button">Update</button>

                </form>

            </div>
        );
    }



}


export default EditContact;