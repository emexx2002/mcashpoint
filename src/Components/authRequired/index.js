import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { isLoggedIn } from "../../utils/isLoggedIn";

const AuthRequired = ({
  component: Component,
  role,
  adminRequred,
  ...rest
}) => {
  const token = JSON.parse(localStorage.getItem("data"));
  console.log(token);
  if (token) {
    const { name } = token.user.roleGroup;
    if (adminRequred && name !== "ADMIN") {
      return <Redirect to="/" />;
    }
  } else {
    return <Redirect to="/" />;
  }
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
};

const mapStateToProps = (state) => ({
  role: state.users.role,
});

export default connect(() => mapStateToProps, {})(AuthRequired);
