import React, { Fragment } from "react";
import styled from "styled-components";

export const InputField = field => {
  const { error, touched } = field.meta;

  return (
    <Fragment>
      <Input
        {...field.input}
        error={error && touched}
        touched={touched}
        className={field.className}
        id={field.id}
        readOnly={field.readOnly}
        onBlur={() => {
          if (field.onBlur) {
            field.onBlur();
            field.input.onBlur();
          } else {
            field.input.onBlur();
          }
        }}
        placeholder={field.placeholder}
      />
      {error && touched && (<ErrorMsg>{error}</ErrorMsg>)}
    </Fragment>
  );
};

const Input = styled.input`
  font-family: "Roboto", sans-serif;
  outline: 0;
  width: 320px;
  border: none;
  border-bottom: ${props => props.error ? "2px solid red" : props.touched ? "2px solid green" : "2px solid #d5f2c4"};
  background-color: #02BE3B;
  color: white;
  margin: 0 0 5px;
  padding: 15px;
  font-size: 1rem;
  box-sizing: border-box;
  ::placeholder {
    color: #d5f2c4;
  }
`;

const ErrorMsg = styled.div`
  color: red;
`;
