import React, {Component} from 'react';
import styled from 'styled-components';
import GotService from '../../services/gotServices';

import './charDetails.css';

const CharDetail = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    border-radius: 4px;
`
const CharDetailH4 = styled.h4`
    margin-bottom: 20px;
    text-align: center;
`

export default class CharDetails extends Component {

    gotService = new GotService();

    state = {
        charList : null
    }

    componentDidMount() {
        this.updateChar();
    }

    componentDidUpdate(prevProps) {
        if (this.props.charId !== prevProps.charId) {
            this.updateChar();
        }
    }

    updateChar() {
        const {charId} = this.props;
        if (!charId) {
            return;
        }

        this.gotService.getCharacter(charId)
            .then((char) => {
                this.setState({char})
            })
        // this.foo.bar = 0;
    }


    render() {

        if (!this.state.char) {
            return <span className='select-error'>Please select a character</span>
        }

        const {name, gender, born, died, culture} = this.state.char;

        return (
            <CharDetail>
                <CharDetailH4>{name}</CharDetailH4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender</span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born</span>
                        <span>{born}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died</span>
                        <span>{died}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture</span>
                        <span>{culture}</span>
                    </li>
                </ul>
            </CharDetail>
        );
    }
}