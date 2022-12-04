import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/Actions/userActions";
import logo from "../assets/images/Logo-2.png";

import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Offcanvas from 'react-bootstrap/Offcanvas';

const Head = () => {
  const [keyword, setKeyword] = useState();
  const dispatch = useDispatch();
  let history = useHistory();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword?.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };

  return (
    <div>
      {/* Top Header */}
      <div className="Announcement ">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center display-none"></div>
            <div className=" col-12 col-lg-6 justify-content-center justify-content-lg-end d-flex align-items-center">
              <Link to="/">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link to="/">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link to="/">
                <i className="fab fa-linkedin-in"></i>
              </Link>
              <Link to="/">
                <i className="fab fa-youtube"></i>
              </Link>
              <Link to="/">
                <i className="fab fa-pinterest-p"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Header */}
      <div className="header-top">
        <div className="container">
          {/* MOBILE HEADER */}
          <div className="mobile-header">
            <div className="container ">
              <div className="row ">
                <div className="col-6 d-flex align-items-center">
                  <Link className="navbar-brand" to="/">
                    <img alt="logo" src="/products/Logo-2.png" />
                  </Link>
                </div>
                <div className="col-6 d-flex align-items-center justify-content-end Login-Register">
                  {userInfo ? (
                    <div className="btn-group">
                      <button
                        type="button"
                        className="name-button dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="fas fa-user"></i>
                      </button>
                      <div className="dropdown-menu">
                        <Link to="/profile" className="dropdown-item">
                          Trang cá nhân
                        </Link>

                        <Link
                          to="/login"
                          className="dropdown-item"
                          onClick={logoutHandler}
                        >
                          Đăng xuất
                        </Link>
                      </div>
                      <Link to="/cart" className="cart-mobile-icon">
                        <i className="fas fa-shopping-bag"></i>
                        <span className="badge">{cartItems.length}</span>
                      </Link>
                    </div>
                  ) : (
                    <div className="btn-group">
                      <button
                        type="button"
                        className="name-button dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="fas fa-user"></i>
                      </button>
                      <div className="dropdown-menu">
                        <Link to="/login" className="dropdown-item">
                          Đăng nhập
                        </Link>

                        <Link className="dropdown-item" to="/register">
                          Đăng xuất
                        </Link>
                      </div>
                      <Link to="/cart" className="cart-mobile-icon">
                        <i className="fas fa-shopping-bag"></i>
                        <span className="badge">{cartItems.length}</span>
                      </Link>
                    </div>
                  )}
                </div>
                <div className="col-12 d-flex align-items-center">
                  <form onSubmit={submitHandler} className="input-group">
                    <input
                      type="search"
                      className="form-control rounded search"
                      placeholder="Search"
                      onClick={(e) => setKeyword(e.target.value)}
                    />
                    <button type="submit" className="search-button">
                      search
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* PC HEADER */}
          <div className="pc-header">
            <div className="row">
              <div className="col-md-3 col-4 d-flex align-items-center">
                <Link to="/" className="navbar-brand">
                  <img alt="logo" src={logo} />
                </Link>
              </div>
              <div className="col-md-6 col-8 d-flex align-items-center">
                <form onSubmit={submitHandler} className="input-group">
                  <input
                    type="search"
                    className="form-control rounded search"
                    placeholder="Search"
                    onChange={(e) => setKeyword(e.target.value)}
                  />
                  <button type="submit" className="search-button">
                    search
                  </button>
                </form>
              </div>
              <div className="col-md-3 d-flex align-items-center justify-content-end Login-Register">
                {userInfo ? (
                  <div className="btn-group">
                    <button
                      type="button"
                      className="name-button dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Hi, {userInfo.name}
                    </button>
                    <div className="dropdown-menu">
                      <Link to="/profile" className="dropdown-item">
                        Trang cá nhân
                      </Link>

                      <Link
                        to="/login"
                        className="dropdown-item"
                        onClick={logoutHandler}
                      >
                        Đăng xuất
                      </Link>
                    </div>
                  </div>
                ) : (
                  <>
                    <Link to="/register">Đăng kí</Link>

                    <Link to="/login">Đăng nhập</Link>
                  </>
                )}

                <Link to="/cart">
                  <i className="fas fa-shopping-bag"></i>
                  <span className="badge">{cartItems.length}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Navbar */}
      {/* <div className="navigation">
        <div className="container--fluid">
        <nav>

<input type="checkbox" id="check" />
<label htmlFor="check" className="checkbtn">
<i className="fas fa-bars"></i>
</label>

  <div className="navi">
    <div className="nav-links">
      <ul className="links">
        <li>
          <Link to="/" className="active">Trang Chủ</Link>
        </li>

        <li>
          <Link to="/catalog">Đồng hồ thông minh</Link>
        </li>
        <li>
          <Link to="/male">Đồng hồ nam</Link>

          <i className="bx bxs-chevron-down htmlcss-arrow arrow  "></i>
          <ul className="htmlCss-sub-menu sub-menu">
            <li>
              <a href="/">Rado</a>
            </li>
            <li>
              <a href="/">Seiko</a>
            </li>
            <li>
              <a href="/">Baume & Mercier</a>
            </li>
            <li className="more information-grid">
              <span>
                <a href="/">Smart Watch</a>
                <i className="bx bxs-chevron-right arrow more-arrow"></i>
              </span>
              <ul className="more-sub-menu sub-menu">
                <li>
                  <a href="/">Apple</a>
                </li>
                <li>
                  <a href="/">Samsung</a>
                </li>
                <li>
                  <a href="/">Oppo</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/female">Đồng hồ nữ</Link>

          <i className="bx bxs-chevron-down js-arrow arrow "></i>
          <ul className="js-sub-menu sub-menu">
            <li>
              <a href="/">Rado</a>
            </li>
            <li>
              <a href="/">Seiko</a>
            </li>
            <li>
              <a href="/">Baume & Mercier</a>
            </li>
          </ul>
        </li>
       

        <li>
          <Link to="/news"> Tin tức</Link>
        </li>
        <li>
          <Link to="/">Liên hệ</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
      </div> */}
      {[ 'sm'].map((expand) => (
        <Navbar key={expand} bg="black" expand={expand} className="mb-3 " >
          <Container fluid>
     
     
            
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className="btn btn-light"/>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className = "bg-dark"
             
              
            >
              <Offcanvas.Header closeButton>
               
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1" >
                <Nav.Link href="/" className="text-white  nav-links ">Trang chủ</Nav.Link>
                  <Nav.Link href="/catalog" className="text-white nav-links ">Đồng hồ thông minh</Nav.Link>
                  <Nav.Link href="/male" className="text-white nav-links ">Đồng hồ nam</Nav.Link>
                  <Nav.Link href="/female" className="text-white nav-links ">Đồng hồ nữ</Nav.Link>
                  <Nav.Link href="/news" className="text-white nav-links ">Tin tức</Nav.Link>
                  
                </Nav>
               
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
};

export default Head;
