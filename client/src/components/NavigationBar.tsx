import React from 'react';

function NavigationBar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">eCommerce example</a>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">Products</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/inventory">Inventory</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/login">Login</a>
          </li>
        </ul>
        <ul className="navbar-nav justify-content-end">
        </ul>
      </div>
    </nav >
  )
}

export default NavigationBar;