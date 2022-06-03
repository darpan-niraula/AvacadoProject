import React from "react";
// import axios from "axios";

class AddContact extends React.Component{
    state = {
        name: "",
        email: "",
        capacity: "",
        c_box: "",
        image:"",
    }

    add = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.email === "" || this.state.capacity === "" || this.state.image === "") {
            alert("All the fields are mandatory!!");
            return
        }
        this.props.addContactHandler(this.state);
        this.setState({name:"", email:"", capacity:"", c_box:"", image:""});
    }

    render(){
        return(
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Layout</label>
                        <select name="name" placeholder="Layout" value={this.state.name} defaultValue="default" onChange={(e)=> this.setState({name:e.target.value})}>
                            <option value="default">Choose a Layout</option>
                            <option value="Grid">Grid</option>
                            <option value="List">List</option>
                            <option value="Icon">Icon</option>
                            <option value="Matrix">Matrix</option>
                        </select>
                    </div>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="email" placeholder="Name"  value={this.state.email} onChange={(e)=> this.setState({email:e.target.value})}/>
                    </div>
                    <div className="field">
                        <label>Capacity</label>
                        <input type="text" name="capacity" placeholder="Capacity"  value={this.state.capacity} onChange={(e)=> this.setState({capacity:e.target.value})}/>
                    </div>
                    <div className="field">
                    <label>Status</label>
                    <input type="checkbox" name="c_box" value={this.state.c_box} onChange={(e)=> this.setState({c_box: e.target.checked.toString()})}/>
                    </div>
                    <div className="field">
                        <label>Image</label>
                        <input type="file" name="image"  value={this.state.image} onChange={(e) =>this.setState({image:e.target.value})}/>
                    </div>
                    
                    <button className="ui button blue">Create Table</button>
                </form>
            </div>
        );
    }
}

export default AddContact;