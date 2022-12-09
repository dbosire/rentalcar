import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteCar } from "../../actions/carActions";

class CarItem extends Component {
  handleDelete = carIdentifier => {
    this.props.deleteCar(carIdentifier);
  };
  render() {
    const { car } = this.props;
    return (
      <div className="container">
        <div className="card bg-light mb-2">
          <div className="row">
            <div className="card-body">
              <div className="container">
                <div className="row justify-content-md-left">
                  <div className="col-md-auto">
                    <h5 className="card-title">
                      {car.carName} {car.carModel}
                    </h5>
                    <h6 className="card-text">Engine: {car.engineType}</h6>
                    <h6 className="card-text">Milage: {car.milage} KM</h6>
                    <h6>Price per day: {car.pricePerDay} KES</h6>
                    <h6>
                      <span className="badge badge-warning badge-pill">
                        Rating: {car.rating} / 10
                      </span>
                    </h6>

                    
                    <Link
                          to={`/car/details/${car.carIdentifier}`}
                          style={{ color: "black" }}
                        >
                          <button
                            type="button"
                            className="btn btn-lg btn-outline-dark "
                          >
                            View
                          </button>
                        </Link>
                        <Link
                          to={`/car/update/${car.carIdentifier}`}
                          style={{ color: "black" }}
                        >
                          <button
                            type="button"
                            className="btn btn-lg btn-outline-dark "
                          >
                            Update
                          </button>
                        </Link>
                        
                        <button
                          type="button"
                          className="btn btn-outline-danger btn-lg"
                          onClick={this.handleDelete.bind(
                            this,
                            car.carIdentifier
                          )}
                        >
                          Delete
                        </button>
                 
                      
                  </div>

                  <div className="col-md-auto">
                    <ul className="list-group ">
                     
                      
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CarItem.propTypes = {
  deleteCar: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteCar }
)(CarItem);
