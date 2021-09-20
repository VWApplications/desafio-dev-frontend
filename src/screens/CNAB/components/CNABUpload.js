import React from "react";
import styled from "styled-components";
import { DragAndDrop } from "./DragAndDrop";

export const CNABUploadComponent = props => {
  const { logout } = props;

  return (
    <>
      <Button onClick={logout}>
        <i className="fa fa-sign-out" /> Sair
      </Button>
      <DragAndDrop {...props} />
    </>
  );
};

const Button = styled.button`
  position: absolute;
  right: 1rem;
  top: 1rem;
  font-size: 1rem;
  margin: 1rem;
  background-color: transparent;
  color: white;
  border: unset;
  cursor: pointer;
`;
