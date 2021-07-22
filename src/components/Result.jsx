import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

// Styles Components

const Message = styled.p`
    background-color: rgb(127, 244, 237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`;
const TextResult = styled.div`
    text-align: center;
    padding: 1rem;
    border: 1px solid #26c6da;
    margin-top: 1rem;
    position: relative;
`;
const TextInsurance = styled.p`
    color: #00838F;
    background-color:rgb(127, 244, 237);
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
`;

const Result = ({price}) => {

    return ( 
        (price === 0) 
            ? <Message>Elige marca, año y tipo de seguro</Message> 
            : (
            <TextResult>
                <TransitionGroup
                    component='span'
                    className='resultado'
                >
                    <CSSTransition
                        classNames='resultado'
                        key={price}
                        timeout={{enter: 500, exit: 500}}
                    >
                    <TextInsurance>El total a pagar es: $ <span>{price}</span></TextInsurance>
                    </CSSTransition>
                </TransitionGroup>
            </TextResult>
                
        )
        
    );
}
Result.propTypes = {
    price: PropTypes.number.isRequired
}
export default Result;