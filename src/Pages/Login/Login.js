import React, { useEffect } from "react";
import LoginCard from "../../Components/auth/Login/LoginCard";
import { connect } from "react-redux";

function Login({ user, history }) {
  useEffect(() => {
    if (user.email) {
      history.push("/dashboard");
    }
  }, [user, history]);
  return (
    <div className="login">
      <LoginCard />
    </div>
  );
}

const mapStateToProps = reduxState => reduxState;
export default connect(mapStateToProps)(Login);
