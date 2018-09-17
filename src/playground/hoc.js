// Higher Order Component (HOC) - a component that renders another component
// goal of HOC is code reuse.
// Render hijacking
// prop manipulation
// abstract state
import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>This is where we keep the info: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private information - DO NOT SHARE!</p>}
      <WrappedComponent {...props}/>
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>Please log in to continue.</p>
      )}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info="*sketchy whispers*" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="*sketchy whispers*" />, document.getElementById('app'));
