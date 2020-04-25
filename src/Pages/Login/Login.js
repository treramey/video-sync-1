import React, { Component } from "react";
import LoginCard from "../../Components/auth/Login/LoginCard";
import { connect } from "react-redux";

class Login extends Component {
  componentDidMount() {
    if (this.props.user.email) {
      this.props.history.push("/dashboard");
    }
  }
  render() {
    console.log(this.props.user);
    return (
      <div className="login">
        <LoginCard />
      </div>
    );
  }
}

const mapStateToProps = reduxState => reduxState;
export default connect(mapStateToProps)(Login);
