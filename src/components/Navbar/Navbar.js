import './Navbar.css'
import { Navbar, Nav, NavDropdown,Form,FormControl,Button } from 'react-bootstrap';
import logo_icon from './logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUser, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import {Animated} from "react-animated-css";
import React from 'react';
function navbar({onUserIconClick,onUserShoppingBagClick}){
    return(
    <>  
        <Navbar bg="light" expand="lg" fixed="top">
            <Navbar.Brand href="/">
                <img src={logo_icon} alt="logo" width="100px" height="auto"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll" style={{}}>
            <Nav
              className="mr-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link className="mx-3" href="/">HOME</Nav.Link>
              <Nav.Link className="mx-3" href="/new">NEW</Nav.Link>
              <NavDropdown renderMenuOnMount={true} className="mx-3" title="MEN" id="navbarScrollingDropdown">
                <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                    <NavDropdown.Item href="/men/footwear">Footwear</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/men/apparel">Apparel</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/men/accessories">Accessories</NavDropdown.Item>
                </Animated>
              </NavDropdown>
              <NavDropdown renderMenuOnMount={true} className="mx-3" title="WOMEN" id="navbarScrollingDropdown">
                <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
                    <NavDropdown.Item href="/women/footwear"> Footwear</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/women/apparel">Apparel</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/women/accessories">Accessories</NavDropdown.Item>
                </Animated>
              </NavDropdown>
              <NavDropdown renderMenuOnMount={true} className="mx-3" title="KIDS" id="navbarScrollingDropdown">
                <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
                    <NavDropdown.Item href="/kids/footwear">Footwear</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/kids/apparel">Apparel</NavDropdown.Item>
                </Animated>
              </NavDropdown>
              <NavDropdown renderMenuOnMount={true} className="mx-3" title="SALE" id="navbarScrollingDropdown">
                <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
                    <NavDropdown.Item href="/sale/men">MEN SALE</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/sale/women">WOMEN SALE</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/sale/kids  ">KIDS SALE</NavDropdown.Item>
                </Animated>
              </NavDropdown>
            </Nav>
            <div class="icon-wrapper">
              <FontAwesomeIcon  onClick={onUserShoppingBagClick} className="mx-4 FontAwesomeIcon hasBadge" icon={faShoppingBag} size="2x"/>
               <span class="badge">2</span>
            </div>
            <FontAwesomeIcon onClick={onUserIconClick} className="mx-4 FontAwesomeIcon" icon={faUser} size="2x"/>
            <Form className="d-flex mx-3">
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
                id="input_search"
              />
              <Button variant="dark"><FontAwesomeIcon className="mx-4 FontAwesomeIcon" icon={faSearch}/></Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>




      {/* <MobileView>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">
                <img src={logo_icon} alt="logo" width="100px" height="auto"/>
            </Navbar.Brand>
            <FontAwesomeIcon  className="mx-2 FontAwesomeIcon" icon={faShoppingBag} size="2x"/>
            <FontAwesomeIcon onClick={onUserIconClick} className="mx-2 FontAwesomeIcon" icon={faUser} size="2x"/>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll" style={{}}>
            <Nav
              className="mr-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link className="" href="/">HOME</Nav.Link>
              <Nav.Link className="" href="/new">NEW</Nav.Link>
              <NavDropdown renderMenuOnMount={true} className="" title="MEN" id="navbarScrollingDropdown">
                <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                    <NavDropdown.Item href="/men/footwear">Footwear</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/men/apparel">Apparel</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/men/accessories">Accessories</NavDropdown.Item>
                </Animated>
              </NavDropdown>
              <NavDropdown renderMenuOnMount={true} className="" title="WOMEN" id="navbarScrollingDropdown">
                <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
                    <NavDropdown.Item href="/women/footwear"> Footwear</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/women/apparel">Apparel</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/women/accessories">Accessories</NavDropdown.Item>
                </Animated>
              </NavDropdown>
              <NavDropdown renderMenuOnMount={true} className="" title="KIDS" id="navbarScrollingDropdown">
                <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
                    <NavDropdown.Item href="/kids/footwear">Footwear</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/kids/apparel">Apparel</NavDropdown.Item>
                </Animated>
              </NavDropdown>
              <NavDropdown renderMenuOnMount={true} className="" title="SALE" id="navbarScrollingDropdown">
                <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
                    <NavDropdown.Item href="/sale/men">MEN SALE</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/sale/women">WOMEN SALE</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/sale/kids  ">KIDS SALE</NavDropdown.Item>
                </Animated>
              </NavDropdown>
            </Nav>
            <Form className="d-flex mx-3">
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
                id="input_search"
              />
              <Button><FontAwesomeIcon className="mx-4 FontAwesomeIcon" icon={faSearch}/></Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </MobileView> */}
    </>
    )
}
export default navbar