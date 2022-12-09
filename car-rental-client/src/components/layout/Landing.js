import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "transparent",
        marginRight: "50px"
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "transparent",
        marginLeft: "50px",
        zIndex: "1",
        fontSize: "20px"
      }}
      onClick={onClick}
    />
  );
}

class Landing extends Component {
  componentDidMount() {
    if (this.props.security.validToken) {
      this.props.history.push("/cars");
    }
  }
  render() {
    const settings = {
      dots: false,
      pauseOnHover: false,
      arrows: true,
      infinite: true,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      autoplay: false,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };

    return (
      <div className="landing">
        <div className="light-overlay landing-inner text-dark">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-2">Car Rental System</h1>
                
                <p className="lead">
                  Create your account to become part of our awesome cars family
                  !
                </p>
                <hr />
                <Link
                  to="/register"
                  className="btn btn-lg btn-outline-dark mr-2"
                >
                  Sign Up
                </Link>
                <Link
                  to="/login"
                  className="btn btn-lg btn-outline-primary mr-2"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  security: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  security: state.security
});

export default connect(mapStateToProps)(Landing);
