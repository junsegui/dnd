import React from "react";
import styled from "styled-components";

export const Item = ({ id, name, type }) => {
  return (
    <ItemContainer id={id}>
      <Itm id={id}>{name}</Itm>
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  border: 1px solid forestgreen;
`;
const Itm = styled.p``;
