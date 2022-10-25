import React, {Component} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faAddressCard, faBasketShopping } from '@fortawesome/free-solid-svg-icons';

import { Container, Nav, Navbar } from 'react-bootstrap';

import './main.css';

import Home from './components/home';
// import AboutUs from './components/aboutus';
// import Vets from './components/vets';
// import ContactUs from './components/contactus';
import Footer from './footer';

class Main extends Component {
    state = {
        showHome: true,
        showAboutUs: false,
        showVets: false,
        showLocations: false,
        showContact: false,
        baseURL: ''
    }

    //Usado para iniciar una acción antes de renderizar
    //componentWillMount = () => console.log('antes de iniciar');

    //Usado para iniciar una acción despues de renderizar
    componentDidMount = () => this.setState({baseURL: window.location.origin});

    handleClick = (e) => this.showComponent(e.target.name);

    showComponent = (name) => {
        const homeSelected = name === 'home' ? true : false;
        this.setState({showHome : homeSelected});

        // const aboutUsSelected = name === 'aboutus' ? true : false;
        // this.setState({showAboutUs : aboutUsSelected});

        // const vetsSelected = name === 'vets' ? true : false;
        // this.setState({showVets : vetsSelected});

        // const locationsSelected = name === 'location' ? true : false;
        // this.setState({showLocations : locationsSelected});

        // const contactSelected = name === 'contact' ? true : false;
        // this.setState({showContact : contactSelected});
    }

    render = () => {
        return(
            <React.Fragment>
                <div className='row'>
                    <div className="row-header container"> 
                        <h1>Llilli Alfajores</h1>
                    </div>
                    <div className="row">
                        <Navbar bg="light" variant="light" sticky='top'>
                            <Container>
                                <Nav className="justify-content-center" onClick={(e) => this.handleClick(e)}>
                                    <Nav.Link name="home"><FontAwesomeIcon icon={faHome} /> | Home </Nav.Link>
                                    <Nav.Link name="features"><FontAwesomeIcon icon={faAddressCard} /> | About Us </Nav.Link>
                                    <Nav.Link name="pricing"><FontAwesomeIcon icon={faBasketShopping} /> | Products </Nav.Link>
                                </Nav>
                            </Container>
                        </Navbar>
                    </div>
                    <div className="row"> 
                        {this.state.showHome ? <Home></Home> : null }
                        {/* {this.state.showAboutUs ? <AboutUs></AboutUs> : null }
                        {this.state.showVets ? <Vets></Vets> : null }
                        {this.state.showContact ? <ContactUs></ContactUs> : null } */}
                    </div>
                    <div className='row'>
                        <Footer homeURL={this.state.baseURL}></Footer>
                    </div>
                </div>
            </React.Fragment>
        );
    };
}

export default Main;