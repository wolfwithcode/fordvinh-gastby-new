import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
 faLocationArrow,
 faMobile,
 faMoneyCheck,
} from "@fortawesome/free-solid-svg-icons"

export default function Footer() {
  // const titleText = "Bạn Đang Tìm Kiếm Một Chiếc Xe?"
  // const questionInfoText =
  //   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem repellendus!"
  const questionColumClasses = [
    "col-10 mx-auto my-2 col-md-6 d-flex justify-content-between p-4",
    // HomeStyle.questionGrey,
  ].join(" ")
  //   const questionIconClasses = [HomeStyle.questionIcon, "mr-3"].join(" ")
  // const questionIconClasses = ["", "mr-3"].join(" ")
  //   const questionInfo = HomeStyle.questionInfo
  const questionInfo = ""
  //   const icon = faSearch
  return (
    <footer>
      <Container>
        <Row>
          <Col className={questionColumClasses}>
            <div className="question-text w-75">
              <h4 className="question-title text-capitalize font-weight-bold">
                {"Đại lý xe Ford Vinh"}
              </h4>
              <p className={questionInfo}>
                {
                  "Công ty TNHH Vinh Ford (gọi tắt là Vinh Ford - VIF) là đại lý ủy quyền chính thức của Ford Việt Nam tại khu vực với đầy đủ các chức năng bán hàng, dịch vụ hậu mãi và kinh doanh phụ tùng chính hãng."
                }
              </p>
            </div>
          </Col>
          <Col className={questionColumClasses} id="contact">
            <div className="question-text w-75">
              <h4 className="question-title text-capitalize font-weight-bold">
                {"Thông tin  liên hệ"}
              </h4>
              <div className="row">
              <p>
                  <FontAwesomeIcon icon={faLocationArrow} />
                  {"   Địa chỉ: Km2 +200, Đường Lê Nin Tp.Vinh"}
                </p>
              </div>
              <div className="row">
              <p>
                  <FontAwesomeIcon icon={faMoneyCheck} />
                  {"   Mã số thuế: 2900646777"}
                </p>
              </div>
              <div className="row">
              <p>
                  <FontAwesomeIcon icon={faMobile} />
                  {"   Hotline: 0977 857 315"}
                </p>
              </div>
              
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
