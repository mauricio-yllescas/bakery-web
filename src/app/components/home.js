import React, {Component} from "react";

import { Carousel } from 'react-bootstrap';

import images from './images';
import './home.css';

class Home extends Component {
    state = {
        products: []
    }
      
    componentWillMount = () => this.loadData();

    loadData = () => {
        let photosAvailable = [
            {
                'IdVet': 1,
                'Name': 'SuperPet',
                'Address': ' Av. República de Panamá 2577, La Victoria, Lima',
                'Phone': '(01) 641-6464',
                'url': 'https://superpet.pe/',
                'Alias': 'photo1'
            },
            {
                'IdVet': 2,
                'Name': 'DiagnoPet',
                'Address': 'Av. Aramburu 884 Surquillo Lima Perú',
                'Phone': '(51) 960-390-986',
                'url': 'https://diagnopet.com.pe/',
                'Alias': 'photo2'
            }
        ];

        this.setState({products: photosAvailable});
    }
    
    drawData = (prod) => {
        //let maxVets = vets.length;
        //let divWidth = maxVets > 5 ? 20 : (100 / maxVets);
        
        let sketch = prod
            .map(x => {
                let IdMap = 'vet' + x.IdVet;

                return(
                    <Carousel.Item key={IdMap}>
                        <img
                            className="resize"
                            src={images.alias.find(img => img.nombre === x.Alias).logo}
                            alt={x.Name}
                        />
                        {/* <Carousel.Caption>
                            <span>Address: <b>{x.Address}</b></span><br/>
                            <span>Phone: <b>{x.Phone}</b></span><br/>
                            <span>Site: <b><a target='_blank' rel='noreferrer' href={x.url} style={{cursor: 'pointer'}}>{x.url}</a></b></span><br/>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                )
            });

        return sketch;
    }

    render = () => {
        const sketch = this.drawData(this.state.products);

        return (
            <React.Fragment>
                <div className="row pad-top">
                    <div className="container">
                        <Carousel variant="dark">
                            {sketch}
                        </Carousel>
                    </div>
                </div>
            </React.Fragment>
        );
    };
}

export default Home;