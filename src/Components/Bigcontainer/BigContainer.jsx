import React, { Children } from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

export const BigContainer = ({ column, task }) => {
  return (
    <Bigcontainer>
      <Title>{column.title}</Title>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <ItemsCont innerRef={provided.innerRef} {...provided.droppableProps}>
            {tasks.map((task, index) => (
              <Item key={task.id} task={task} index={index}></Item>
            ))}
            {provided.placeholder}
          </ItemsCont>
        )}
      </Droppable>
    </Bigcontainer>
  );
};
const Bigcontainer = styled.div`
  width: 100%;
  height: 33%;
  border: 1px solid blue;
  display: flex;
  flex-direction: row;
`;
const Title = styled.p``;
const ItemsCont = styled.div`
  padding: 5%;
`;
const Item = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
`;
