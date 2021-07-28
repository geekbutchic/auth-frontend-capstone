import React, { Component } from "react";
import "./Signup.css";

export class Signup extends Component {
  state = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    firstNameError: "",
    lastNameError: "",
    emailError: "",
    usernameError: "",
    passwordError: "",
    confirmPasswordError: "",
  };

  handleOnChange = (event) => {
    console.log("SET STATE: 1", this.state.firstName);
    this.setState(
      {
        [event.target.name]: event.target.value,
      },
      () => {
        console.log("INSIDE SET STATE CALLBACK: 2", this.state.firstName);
      }
    );
    console.log(
      "THE VALUE OF THIS.SET.STATE.FIRST_NAME: 3",
      this.state.firstName
    );
    if (this.state.firstName.length === 0) {
      console.log("CANNOT BE EMPTY: 4", this.state.firstName.length);
    }
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  handleOnBlur = (event) => {
    console.log(event.target.name);
    console.log("HANDLE ON BLUR TRIGGERED");
    if (this.state.firstName.length === 0) {
      this.setState({
        firstNameError: "First Name Cannot Be Empty!",
      });
    }
    if (this.state.lastName.length === 0) {
      this.setState({
        lastNameError: "Last Name Cannot Be Empty!",
      });
    }
    if (this.state.email.length === 0) {
      this.setState({
        emailError: "Email Cannot Be Empty!",
      });
    }
    if (this.state.username.length === 0) {
      this.setState({
        usernameError: "Username Cannot Be Empty!",
      });
    }
    if (this.state.password.length === 0) {
      this.setState({
        passwordError: "Password Cannot Be Empty!",
      });
    }
    if (this.state.confirmPassword.length === 0) {
      this.setState({
        confirmPasswordError: "Confirm Password Cannot Be Empty!",
      });
    }
  };

  render() {
    const {
      firstName,
      lastName,
      username,
      email,
      password,
      confirmPassword,
      firstNameError,
      lastNameError,
      emailError,
      usernameError,
      passwordError,
      confirmPasswordError,
    } = this.state;
    return (
      <div className="container">
        <div className="form-text">Sign up</div>
        <div className="form-div">
          <form className="form" onSubmit={this.handleOnSubmit}>
            <div className="form-group-inline">
              <div className="inline-container">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  placeholder="First Name"
                  name="firstName"
                  onChange={this.handleOnChange}
                  autoFocus
                  onBlur={this.handleOnBlur}
                />
                <div className="errorMessage pt-1 font-semibold">
                  {firstNameError && firstNameError}
                </div>
              </div>
              <div className="inline-container">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  placeholder="Last Name"
                  name="lastName"
                  onChange={this.handleOnChange}
                  autoFocus
                  onBlur={this.handleOnBlur}
                />
                <div className="errorMessage pt-1 font-semibold">
                  {lastNameError && lastNameError}
                </div>
              </div>
            </div>
            <div className="form-group-block">
              <div className="block-container">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  value={email}
                  placeholder="Email"
                  name="email"
                  onChange={this.handleOnChange}
                  autoFocus
                  onBlur={this.handleOnBlur}
                />
                <div className="errorMessage pt-1 font-semibold">
                  {emailError && emailError}
                </div>
              </div>
            </div>
            <div className="form-group-block">
              <div className="block-container">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  placeholder="Username"
                  name="username"
                  onChange={this.handleOnChange}
                  autoFocus
                  onBlur={this.handleOnBlur}
                />
                <div className="errorMessage pt-1 font-semibold">
                  {usernameError && usernameError}
                </div>
              </div>
            </div>
            <div className="form-group-block">
              <div className="block-container">
                <label htmlFor="password">Password</label>
                <input
                  type="text"
                  id="password"
                  value={password}
                  placeholder="Password"
                  name="password"
                  onChange={this.handleOnChange}
                  autoFocus
                  onBlur={this.handleOnBlur}
                />
                <div className="errorMessage pt-1 font-semibold">
                  {passwordError && passwordError}
                </div>
              </div>
            </div>
            <div className="form-group-block">
              <div className="block-container">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="text"
                  id="confirmPassword"
                  value={confirmPassword}
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  onChange={this.handleOnChange}
                  autoFocus
                  onBlur={this.handleOnBlur}
                />
                <div className="errorMessage pt-1 font-semibold">
                  {confirmPasswordError && confirmPasswordError}
                </div>
              </div>
            </div>
            <div className="button-container">
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default Signup;
