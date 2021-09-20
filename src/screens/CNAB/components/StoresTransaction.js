import React from "react";
import styled from "styled-components";
import { formatMoney } from "shared/utils";

export const StoreComponent = props => {
  const { stores } = props;

  return (
    <Container>
      <Table>
        <THeader>
          <tr>
            <th>Título</th>
            <th>Dono</th>
            <th>Total em conta</th>
            <th>Transações</th>
          </tr>
        </THeader>
        <TBody>
          {stores.length == 0 && (<tr><td colSpan="4">Não foi encontrado nenhum dado.</td></tr>)}
          {stores.map((store, index) => (
            <tr key={index}>
              <td>{store.title}</td>
              <td>{store.owner} - {store.cpf}</td>
              <td>{formatMoney(store.total)}</td>
              <td>
                <ul>
                  {store.cnabs.map((cnab, index) => (
                    <li key={index}>{cnab.transaction_type} ({cnab.transaction_signal}) {formatMoney(cnab.value)} [{cnab.card}] {cnab.date} {cnab.time}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </TBody>
      </Table>
    </Container>
  );
};

const Container = styled.div`
  overflow-x: auto;
  margin-bottom: 3rem;
`;

const Table = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid gray;
  background-color: white;

  td, th {
    text-align: left;
    padding: 12px;
    border: 2px solid gray;
  }
`;

const THeader = styled.thead`
  border: 2px solid gray;
  background-color: #373837;
  color: white;
`;

const TBody = styled.tbody`
  overflow-y: auto;
  height: 300px;
`;
