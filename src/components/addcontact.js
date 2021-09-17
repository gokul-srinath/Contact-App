import React, { Component } from 'react';



class AddContact extends Component{

    
    state={
            name:"",
            email:""
        }
    
    add=(e)=> {
        e.preventDefault();
        if(this.state.name==="" || this.state.email===""){
            alert("All fields are mandatory");
            return;
        }

        this.props.AddContactHandler(this.state);
        this.setState({name:"",email:""});
        this.props.history.push("/");
        return;
    }

    render(){
        return(
            <div className="ui container">
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label for="name">Name</label>
                        <input  type="text" id="name" placeholder="Enter your Name" onChange={(e)=>{this.setState({name:e.target.value})}} value={this.state.name}/>
                    </div>
                    <div className="field">
                        <label for="email">Email</label>
                        <input  type="email" id="email" placeholder="Enter your Email" onChange={(e)=>{this.setState({email:e.target.value})}} value={this.state.email}/>
                    </div>
                    <button className="ui primary button">Add</button>

                </form>

            </div>
        );
    }



}


export default AddContact;