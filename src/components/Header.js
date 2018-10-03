import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {startLogOut} from '../actions/auth.js';


export const Header = ({startLogOut}) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          <h1>Expensify</h1>
        </Link>
        <button className="button-layout__login button--logout" onClick={startLogOut}>Log Out</button>
      </div>;
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogOut: () => dispatch(startLogOut())
});

export default connect(undefined, mapDispatchToProps)(Header);
