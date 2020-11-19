import React from "react"
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  Container,
  Card,
  Button,
} from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faSearch, faHome, faUserCircle, faDollarSign, faAddressBook, faPhone } from '@fortawesome/free-solid-svg-icons';
import {
  faDollarSign,
  faAddressBook,
  faPhone,
  faHome,
} from "@fortawesome/free-solid-svg-icons"
// import style from '../styles/MenuBottom.module.css'

const tabs = [
  {
    route: "/mail",
    icon: faDollarSign,
    label: "Báo giá",
  },
  {
    route: "/#",
    icon: faHome,
    label: "Trang chủ",
  },
  {
    route: "tel:0977857315",
    icon: faPhone,
    label: "Gọi",
  },
]

// console.log('style ',style)

// const navbarClasses = [style.navbar,'fixed-bottom', 'navbar-light'].join(' ') ;
// const bottomTabNavClasses = [style.bottomNavLink,'fixed-bottom', 'navbar-light'].join(' ') ;

export default function MenuBottom() {
  const numberPhone = "0977857315"
  return (
    <Card className="d-block d-sm-none" style={{ marginBottom: "15px" }}>
      <Card.Header>
        <Nav
          variant="pills"
          defaultActiveKey="#priceTable"
          className={`fixed-bottom justify-content-center mx-auto`}
          style={{ backgroundColor: "#0066ff" }}
        >
          {tabs.map((tab, index) => (
            <Nav.Item
              key={`tab-${index}`}
              style={{
                borderTop: "solid 5px #EBEBEB",
                marginBottom: "25px",
                marginRight: "10px",
              }}
            >
              <Nav.Link href={tab.route} style={{ color: "white" }}>
                <FontAwesomeIcon size="lg" icon={tab.icon} />
                {tab.label}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </Card.Header>
    </Card>
  )
}
