import React from "react";
import styled from "styled-components";
import Items from "../../Items";
import InitialData from "../../InitialData";
import { DragDropContext, Draggable } from "react-beautiful-dnd";
import { Item } from "../Item/Item";
import { BigContainer } from "../Bigcontainer/BigContainer";
import QuarterContainer from "../QuarterContainer/QuarterContainer";
import { ItemContainer } from "../ItemContainer/ItemContainer";

export const Home = () => {
  const state = InitialData;
  const handleDragEnd = (result) => {};
  return (
    <Container>
      <DragDropContext
        onDragEnd={handleDragEnd}
        onDragStart={() => {}}
        onDragUpdate={() => {}}
      >
        <GameContainer>
          {state.columnOrder.map((columnId) => {
            const column = state.columns[columnId];
            const task = column.taskIds.map((id) => state.tasks[id]);
            return <BigContainer key={column.id} column={column} task={task} />;
          })}
        </GameContainer>
      </DragDropContext>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const GameContainer = styled.div`
  width: 70%;
  height: 70%;
  display: flex;
  flex-direction: row;
  border: 1px solid red;
`;
