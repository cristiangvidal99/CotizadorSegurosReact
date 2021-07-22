import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import {getDifferenceYear, calculateCarBrand, getPlan} from '../helper';


// Styled Component

const Field = styled.div `
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
    gap: .5rem;
`;
const Label = styled.label`
    flex: 0 0 100px;
`;

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none; // removes the appearance that comes by default
`;
const InputRadio = styled.input`
    margin: 0 1rem;
`;

const Button = styled.button`
    background-color: #00838F;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border-radius: 1.5rem;
    border: 3px solid black;
    transition: 1s;
    &:hover {
        transition-duration: 1s;
        background-color: #26c6da;
        cursor: pointer;
    }
`;
const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    margin-bottom: 2rem;
    text-align: center;
    width: 100%;
`;
const Form = ({saveInsuranceSummary, saveLoading}) => {

    // UseState 
    const [data, saveData] = useState({
        marca: '',
        year: '',
        plan: ''
    });
    const [error, saveError] = useState(false);

    // Extract the values from the state
    const {marca, year, plan} = data;

    // get information from the formulary
    const getInformation = e => {
        saveData({
            ...data,
            [e.target.name] : e.target.value
        })
    }
    // when the user presses submit
    const handleSubmit = e => {
        e.preventDefault();
        
        if(marca.trim() === '' || year.trim() === '' || plan.trim() === '') {
            saveError(true);
            return;
        }
        saveError(false);

        // base = 2000$
        let result = 2000;

        // get the difference of years
        const difference = getDifferenceYear(year);
        
        // For each year you have to subtract 3%
        result -= (( difference * 3) * result) / 100;

        /*  Asiatico = 5%
            Americano = 15%
            Europeo  = 30% */
        result = calculateCarBrand(marca) * result;

        // Basico increases to 20%
        // Completo increases to 50%
        const increasePlan = getPlan(plan);
        result = parseFloat(increasePlan * result).toFixed(2);

        // set spinner entrance
        saveLoading(true);

        setTimeout(() => {
            // remove the spinner

            saveLoading(false);

            saveInsuranceSummary({
                price: Number(result),
                data
            });
        }, 2000);

        
    }
    return ( 
        <form
         onSubmit={handleSubmit}
        
        >
            {error ? <Error>Todos los campos son obligatorios</Error> : null}
            <Field>
                <Label>Marca</Label>
                <Select
                    name='marca'
                    value={marca}
                    onChange={getInformation}
                >
                    <option value=''>Seleccionar</option>
                    <option value='Americano'>Americano</option>
                    <option value='Europeo'>Europeo</option>
                    <option value='Asiatico'>Asiatico</option>
                </Select>
            </Field>

            <Field>
                <Label>Año</Label>
                <Select
                     name='year'
                     value={year}
                     onChange={getInformation}    
                >
                    <option value="">Seleccionar</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                </Select>
            </Field>

            <Field>
                <Label>Plan</Label>
                    <InputRadio 
                        type='radio'
                        name='plan'
                        value='basico'
                        checked={plan === 'basico'}
                        onChange={getInformation}
                    />Básico
                    <InputRadio 
                        type='radio'
                        name='plan'
                        value='completo'
                        checked={plan === 'completo'} 
                        onChange={getInformation}
                    />Completo
            </Field>

            <Button type='submit'>Cotizar</Button>
        </form>
    );
}
Form.propTypes = {
    saveInsuranceSummary: PropTypes.func.isRequired,
    saveLoading: PropTypes.func.isRequired
}
export default Form;