// Higher Order Component (HOC) - A component (HOC) that renders another component
// Benefit 1: Reuse code
// Benefit 2:Render hijacking
// Benefit 3:Prop manipulation
// Benefit 4:Abstract state
import React from 'react';
import ReactDOM from 'react-dom';

// None HOC component example
const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

 // is Admin ?
const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      { props.isAdmin && <p>This is private info, please don't share!</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

// is Authenticated (log in) ?
const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      { props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>Please log in to view the info!</p>
      )}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={false} info='These are the details'/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info='These are the details'/>, document.getElementById('app'));
