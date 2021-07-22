import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import {toUpperCase} from '../helper';

// Styled Components
const SummaryContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;
    padding: 1rem;
`;

const Summary = ({data}) => {

    const {marca, year, plan} = data;

    if(marca === '' || year === '' || plan === '') return null;

    return ( 
       <SummaryContainer>
            <h2>Resumen de Cotizacion</h2>
            <ul>
                <li>Marca:{toUpperCase(marca)}</li>
                <li>Año del Auto: {toUpperCase(year)}</li>
                <li>Plan: {toUpperCase(plan)}</li>
            </ul>
       </SummaryContainer>
    );
}
Summary.propTypes = {
    data: PropTypes.object.isRequired
}
export default Summary;