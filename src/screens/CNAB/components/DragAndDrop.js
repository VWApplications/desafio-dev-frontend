import React from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";

export const DragAndDrop = props => {
  const { validator, submit } = props;

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    validator: validator,
    onDropAccepted: files => submit(files[0])
  });

  const files = acceptedFiles.map(file => (
    <span key={file.path}>
      {file.path} - {file.size} bytes
    </span>
  ));

  return (
    <Container>
      <DropInput {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p>Arraste o arquivo CNAB aqui, ou clique e selecione o arquivo.</p>
      </DropInput>
      {files.length > 0 && (
        <aside>
          <p><b>Arquivo</b>: {files}</p>
        </aside>
      )}
    </Container>
  );
};

const Container = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const DropInput = styled.div`
  border: 2px dashed gray;
  padding: 2rem;
`;
