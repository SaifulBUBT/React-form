import React, { Component } from "react";


const initialState = {
    email: "",
    password: "",
    name: "",
    bio: "",
    country: "",
    gender: "",
    skills: []
  }

class PostForm extends Component {
    constructor() {
        super()
        this.myForm = React.createRef();
    }
  state = {
      ...initialState
  }

  changeHandler = event => {
    if(event.target.type === 'checkbox'){
      if(event.target.checked){
        this.setState({
          ...this.state,
          skills: this.state.skills.concat(event.target.value)
        })
      } else {
        this.setState({
          ...this.state,
          skills: this.state.skills.filter(skill => skill !== event.target.value)
        })
      }
    } else {
      this.setState({
        [event.target.name]: event.target.value
      });
    }
  };

  submitHandler = event => {
    event.preventDefault();

    console.log(this.state);

    this.myForm.current.reset();
    this.setState({
        ...initialState
    })
  };

  render() {
    return (
      <div className="container mb-4">
        <div className="row">
          <div className="col-md-6">
            <form ref = {this.myForm} onSubmit={this.submitHandler}>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Enter your Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputName"
                  placeholder="Name"
                  name="name"
                  value={this.state.name}
                  onChange={this.changeHandler}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email </label>
                <input
                  type="email"
                  className="form-control"
                  id="InputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  name="email"
                  onChange={this.changeHandler}
                  value={this.state.email}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  name="password"
                  value={this.state.password}
                  onChange={this.changeHandler}
                />
              </div>

             <div className="form-group">
                <label htmlFor="exampleInputBio">Bio</label>
                <textarea 
                    type="text"
                    className="form-control"
                    id="Textarea1" rows="" 
                    name="bio" 
                    placeholder="Write aobut you.."                                           
                    value= {this.state.bio}
                    onChange={ this.changeHandler}
                    />
              </div>

              <div className="form-group">
                <label htmlFor="SelectCountry">Select Country</label>
                <select onChange ={this.changeHandler} className="form-control" id="country" name="country">
                  <option>Select your Country</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="USA">USA</option>
                  <option value="Canada">Canada</option>
                  <option value="Germany">Germany</option>
                  <option value="Netherlands">Netherlands</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="gender">Gender</label>
                <div className="form-check">
                  <input className="form-check-input" onChange={this.changeHandler} type="radio" name="gender" id="gender1" value="Male"  />
                  <label className="form-check-label" htmlFor="gender1">
                    Male
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" onChange={this.changeHandler} type="radio" name="gender" id="gender2" value="Female" />
                  <label className="form-check-label" htmlFor="gender2">
                    Female
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" onChange={this.changeHandler} type="radio" name="gender" id="gender3" value="Other" />
                  <label className="form-check-label" htmlFor="gender3">
                    Other
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="Skills">Your Skills</label>
                <div className="form-check">
                  <input onChange={this.changeHandler} className="form-check-input" type="checkbox" name="Skills" id="js" value="Javascript" />
                  <label className="form-check-label" htmlFor="js">
                   Javascript
                  </label>
                </div>
                <div className="form-check">
                  <input onChange={this.changeHandler} className="form-check-input" type="checkbox" name="Skills" id="react" value="React js" />
                  <label className="form-check-label" htmlFor="react">
                   React js
                  </label>
                </div>
                <div className="form-check">
                  <input onChange={this.changeHandler} className="form-check-input" type="checkbox" id="angular" name="Skills" value="Angular" />
                  <label className="form-check-label" htmlFor="angular">
                   Angular js
                  </label>
                </div>
             </div>

                      

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default PostForm;
