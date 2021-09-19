import React from "react";
import styled from "styled-components";
import { Form, Field } from "react-final-form";
import { validateLogin } from "../validations";
import { InputField } from "shared/fields";
import logo from "static/img/bycoders.png";

export const LoginComponent = props => {
  const { submit } = props;

  return (
    <Container>
      <Form
        onSubmit={data => submit(data)}
        validate={validateLogin}
        render={({ handleSubmit, submitting, invalid }) => (
          <FormGroup noValidate onSubmit={handleSubmit} className="form">
            <Image src={logo} alt="ByCoders" />
            <FieldGroup>
              <i className="fa fa-envelope icon"></i>
              <Field id="email" name="email" placeholder="Insira seu email" component={InputField} />
            </FieldGroup>
            <FieldGroup>
              <i className="fa fa-key icon"></i>
              <Field name="password" placeholder="Insira sua senha" type="password" component={InputField} />
            </FieldGroup>
            <Button type="submit" className="" disabled={submitting || invalid}>
              <i className="fa fa-sign-in"></i> Login
            </Button>
          </FormGroup>
        )}
      />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const FormGroup = styled.form`
  position: relative;
  z-index: 1;
  background: #FFFFFF;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  background-color: #02BE3B;
  text-align: center;
  border-radius: 4px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
`;

const FieldGroup = styled.div`
  i {
    color: white;
  }
`;

const Image = styled.img`
  margin-bottom: 1rem;
`;

const Button = styled.button`
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  width: 100%;
  border: 0;
  padding: 15px;
  background-color: #02942e;
  color: #FFFFFF;
  font-size: 1rem;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
  margin-top: 1.5rem;

  :hover, :active, :focus {
    background-color: #037507;
  }
`;
