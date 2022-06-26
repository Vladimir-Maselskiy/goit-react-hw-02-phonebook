import styled from 'styled-components';
import { Form } from 'formik';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 100%;
  margin: 0 auto;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const InputForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  label {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  input {
    margin-left: auto;
  }
  button {
    margin-left: auto;
  }
`;
