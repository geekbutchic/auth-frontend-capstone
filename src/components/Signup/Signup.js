import React, { Component } from "react";
import { isAlpha, isEmail, isAlphanumeric, isStrongPassword } from "validator";
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
    usernameError: "",
    emailError: "",
    passwordError: "",
    confirmPasswordError: "",
  };

  handleOnChange = (event) => {
    this.setState(
      {
        [event.target.name]: event.target.value,
      },
      () => {
        if (
          event.target.name === "firstName" ||
          event.target.name === "lastName"
        ) {
          this.handleFirstNameAndLastNameInput(event);
        }
        if (event.target.name === "email") {
          this.handleEmailInput();
        }
        if (event.target.name === "username") {
          this.handleUsernameInput();
        }
        if (event.target.name === "password") {
          this.handlePasswordInput();
        }
      }
    );
  };

  handlePasswordInput = () => {
    if (this.state.password.length === 0) {
      this.setState({
        passwordError: "Password cannot be empty!",
      });
    } else {
      if (isStrongPassword(this.state.password)) {
        this.setState({
          passwordError: "",
        });
      } else {
        this.setState({
          passwordError:
            "Password must contains 1 uppercase, 1 lowercase, 1 special character, 1 number and minimum of 8 characters long!",
        });
      }
    }
  };

  handleEmailInput = () => {
    if (this.state.email.length === 0) {
      this.setState({
        emailError: "Email cannot be empty!",
      });
    } else {
      if (isEmail(this.state.email)) {
        this.setState({
          emailError: "",
        });
      } else {
        this.setState({
          emailError: "Please, enter a valid email!",
        });
      }
    }
  };

  handleFirstNameAndLastNameInput = (event) => {
    if (this.state[event.target.name].length > 0) {
      if (isAlpha(this.state[event.target.name])) {
        this.setState({
          [`${event.target.name}Error`]: "",
        });
      } else {
        this.setState({
          [`${event.target.name}Error`]: `${event.target.placeholder} can only have 'A-Z'`,
        });
      }
    } else {
      this.setState({
        [`${event.target.name}Error`]: `${event.target.placeholder} cannot be empty`,
      });
    }
  };

  handleEmailInput = () => {
    if (this.state.email.length === 0) {
      this.setState({
        emailError: "Email cannot be empty!",
      });
    } else {
      if (isEmail(this.state.email)) {
        this.setState({
          emailError: "",
        });
      } else {
        this.setState({
          emailError: "Please, enter a valid email!",
        });
      }
    }
  };

  handleUsernameInput = () => {
    if (this.state.username.length === 0) {
      this.setState({
        usernameError: "Username cannot be empty!",
      });
    } else {
      if (isAlphanumeric(this.state.username)) {
        this.setState({
          usernameError: "",
        });
      } else {
        this.setState({
          usernameError: "Username can only have 'A-Z' and 'Numbers'!",
        });
      }
    }
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  handleOnBlur = (event) => {
    console.log(event.target.name);
    console.log("handle onBlur Triggered");
    if (this.state[event.target.name].length === 0) {
      this.setState({
        [`${event.target.name}Error`]: `${event.target.placeholder} cannot be empty!`,
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
      usernameError,
      emailError,
      passwordError,
      confirmPasswordError,
    } = this.state;
    return (
      <div className="container">
        <div className="form-text">SIGN UP</div>
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
                  onBlur={this.handleOnBlur}
                  autoFocus
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
                  onBlur={this.handleOnBlur}
                />
                <div className="errorMessage pt-1 font-semibold">
                  {lastNameError && lastNameError}
                </div>
              </div>
            </div>
            <div className="form-group-block">
              <div className="block-container">
                <label htmlFor="email">Username</label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  placeholder="Username"
                  name="username"
                  onChange={this.handleOnChange}
                  onBlur={this.handleOnBlur}
                />
                <div className="errorMessage pt-1 font-semibold">
                  {usernameError && usernameError}
                </div>
              </div>
            </div>
            <div className="form-group-block">
              <div className="block-container">
                <label htmlFor="username">Email</label>
                <input
                  type="text"
                  id="email"
                  value={email}
                  placeholder="Email"
                  name="email"
                  onChange={this.handleOnChange}
                  onBlur={this.handleOnBlur}
                />
                <div className="errorMessage pt-1 font-semibold">
                  {emailError && emailError}
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
                  onBlur={this.handleOnBlur}
                />
                <div className="errorMessage pt-1 font-semibold">
                  {confirmPasswordError && confirmPasswordError}
                </div>
              </div>
            </div>
            <div className="button-container">
              <button class="bg-red-500 hover:bg-red-600">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default Signup;
