import React from "react";
import styled from "styled-components";
import { Item } from "../Item/Item";
import Items from "../../Items";

export const ItemContainer = () => {
  return (
    <ItemsContainer>
      <Title>Items</Title>
      {Items.map((i) => {
        return <Item id={i.Id} name={i.Name} type={i.Type} key={i.Id} />;
      })}
    </ItemsContainer>
  );
};
const ItemsContainer = styled.div`
  width: 20%;
  height: 100%;
  border: 1px solid peru;
  display: flex;
  flex-direction: column;
`;
const Title = styled.p`
  text-align: center;
  font-size: 2rem;
  border-bottom: 1px solid black;
`;
