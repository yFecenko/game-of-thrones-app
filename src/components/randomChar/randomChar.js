import React, {Component} from 'react';
import styled from 'styled-components';
import GotService from '../../services/gotServices';


const RandomBlock = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    border-radius: 4px;
`
const RandomBlockH4 = styled.h4`
    margin-bottom: 20px;
    text-align: center;
`

const Term = styled.span`
    font-weight: bold;
`


export default class RandomChar extends Component {

    gotService = new GotService();
    state = {
        name: null,
        gender: null,
        born: null,
        died: null,
        culture: null
    }

    updateChar() {
        const id = 130;
        
    }
    
    render() {
        const {name, gender, born, died, culture} = this.state;

        return (
            <RandomBlock>
                <RandomBlockH4>Random Character: {name} </RandomBlockH4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <Term>Gender </Term>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <Term>Born </Term>
                        <span>{born}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <Term>Died </Term>
                        <span>{died}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <Term>Culture </Term>
                        <span>{culture}</span>
                    </li>
                </ul>
            </RandomBlock>
        );
    }
}
