import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { isLoggedIn } from "../../utils/isLoggedIn";
import DashboardTemplate from "../../Views/template/dashboardtemplate";

const AuthRequired = ({
  component: Component,
  role,
  roleCode,
  adminRequred,
  ...rest
}) => {
  const token = JSON.parse(localStorage.getItem("data"));
  isLoggedIn() 
  if (token) {
    const { name, role:roles } = token.user.roleGroup;
    console.log('roles', roles)
    if (adminRequred && name !== "ADMIN") {
      return <Redirect to="/" />;
    }

    if(!roles.some(role => role.roleCode === roleCode)) {
      return <DashboardTemplate><h2>You do not have permissions to view this page</h2></DashboardTemplate>
    }
  } else {
    return <Redirect to="/" />;
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn() ? (
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
