import React from "react"
import CarInfoStyle from "../styles/CarInfo.module.css"
import {Col, Carousel, Table} from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCar,
  faCogs,
  faGasPump,
  // faSearch,
  // faDollarSign,
} from "@fortawesome/free-solid-svg-icons"
import Img from "gatsby-image"

export default function CarInfo(props) {
  const cardClasses = ["card", CarInfoStyle.carCard].join(" ")
  const imgClasses = ["d-block", "w-100", CarInfoStyle.carImg].join(" ")
  const valueClasses = [
    "align-self-center",
    "py-2",
    "px-3",
    CarInfoStyle.carValue,
  ].join(" ")
  const cardBodyClasses = ["card-body", CarInfoStyle.cardBody].join(" ")
  /////////////data binding//////////////////////
  //   const imgageList = car.imgageList
  //   const nameCar = car.nameCar
  //   const priceCar = car.priceCar
  //   const fuelTankCapacity = car.fuelTankCapacity
  //   const bodyStyle = car.bodyStyle
  //   const seat = car.seat
  //   const transmission = car.transmission
  //   const modelList = car.modelList
  const {
    imgageList,
    nameCar,
    priceCar,
    fuelTankCapacity,
    // bodyStyle,
    seat,
    transmission,
    modelList,
  } = props
//   console.log("imgageList ", imgageList)
  return (
    <Col className="col-12 col-md-6 col-lg-6 mx-auto my-3">
      {/* <div className="card car-card"> */}
      <div className={cardClasses}>
        <Carousel>
          {imgageList.map((image, i) => (
            <Carousel.Item key={i}>
              <Img className={imgClasses} fluid={image} alt={" slide " + i} />
            </Carousel.Item>
          ))}
        </Carousel>
        <div className={cardBodyClasses}>
          <div className="car-info d-flex justify-content-between">
            <div className="car-text text-uppercase">
              <h5
                className={["font-weight-bold", CarInfoStyle.carInfo].join(" ")}
              >
                FORD
              </h5>
              <h6 className={CarInfoStyle.carInfo}>{nameCar}</h6>
            </div>
            <h5 className={valueClasses}>
              VND&nbsp;<span className="car-price">{priceCar}</span>
            </h5>
          </div>
        </div>
        <div className="card-footer text-capitalize d-flex justify-content-between">
          <p>
            <FontAwesomeIcon icon={faCar} />
            {seat}
          </p>
          <p>
            <FontAwesomeIcon icon={faCogs} />
            {transmission}
          </p>
          <p>
            <FontAwesomeIcon icon={faGasPump} />
            {fuelTankCapacity}
          </p>
        </div>
        <Table striped bordered hover style={{ fontSize: "smaller" }}>
          <thead>
            <tr>
              <th style={{ color: "red" }}>Phiên bản</th>
              <th style={{ color: "red" }}>Động cơ</th>
              <th style={{ color: "red" }}>Giá (VAT)</th>
            </tr>
          </thead>
          <tbody>
            {modelList.map((model, i) => (
              <tr key={i}>
                <td>{model.modelName}</td>
                <td>{model.engine}</td>
                <td>{model.price}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Col>
  )
}
