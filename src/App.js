import React, {useState} from 'react';
import Header from './components/Header'
import Form from './components/Form'
import Summary from './components/Summary'
import Result from './components/Result'
import Spinner from './components/Spinner'
import styled from '@emotion/styled';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const FormContainer = styled.div`
  background-color: #FFF;
  padding: 3rem;
`;

function App() {

  const [insurancesummary, saveInsuranceSummary] = useState({
    price: 0,
    data: {
      marca: '',
      year: '',
      plan: ''
    }
  });
  // Spinner 
  const [loading, saveLoading] = useState(false);

  // extract data
  const {data, price} = insurancesummary;

  return (
    <Container>
        <Header 
          title='Cotizador de Seguros'
        />
      <FormContainer>
        <Form 
          saveInsuranceSummary={saveInsuranceSummary}
          saveLoading={saveLoading}
        />
        {loading ? <Spinner/> : null} 
        <Summary 
          data={data}
        />
          {!loading ?<Result price={price} /> : null}
      </FormContainer>
    </Container>
  );
}

export default App;
