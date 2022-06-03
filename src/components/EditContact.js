import React from "react";

class EditContact extends React.Component {
  constructor(props) {
    super(props);
    const { id, name, email, capacity, c_box, image } = props.location.state.contact;
    this.state = {
      id,
      name,
      email,
      capacity,
      c_box,
      image,
    };
  }

  update = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "" || this.state.capacity === "" || this.state.image === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.updateContactHandler(this.state);
    this.setState({ name: "", email: "", capacity:"", c_box:"", image:"" });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="ui main">
        <h2>Edit Contact</h2>
        <form className="ui form" onSubmit={this.update}>
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
            <input
              type="text"
              name="email"
              placeholder="Name"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Capacity</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ capacity: e.target.value })}
            />
          </div>
          <div className="field">
              <label>Status</label>
              <input type="checkbox"
                  name="c_box"
                  value={this.state.c_box}
                  onChange={(e)=> this.setState({c_box: e.target.checked.toString()})}/>
          </div>
          <div className="field">
              <label>Image</label>
              <input type="file"
                name="image"
                value={this.state.image}
                onChange={(e) =>this.setState({image:e.target.value})}/>
          </div>

          <button className="ui button blue">Update</button>
        </form>
      </div>
    );
  }
}

export default EditContact;
