import React, { Component } from "react";
import RegisterCard from "../../Components/auth/Register/RegisterCard";
import { connect } from "react-redux";

class Register extends Component {
  componentDidMount() {
    if (this.props.user.email) {
      this.props.history.push("/dashboard");
    }
  }
  render() {
    // console.log(this.props.user);
    return (
      <div className="register">
        <RegisterCard />
      </div>
    );
  }
}

const mapStateToProps = reduxState => reduxState;
export default connect(mapStateToProps)(Register);
