import React, { Component } from 'react';
import { Droppable } from "react-beautiful-dnd";
import styled from 'styled-components';
import Task from './task';


const Container = styled.div`
  width: 220px;
  margin: 8px;
  border: 1px solid lightgrey;

  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? 'lightgrey' : 'white')};
  flex-grow: 1;
`;

class Index extends Component {

  render() {
    const { column, tasks } = this.props;
    return (
      <div>
      <Container>
        <Title>{column.title}</Title>
        <Droppable droppableId={column.id}>
        {(provided,snapshot) => (
          <TaskList
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {tasks.map( (task, index) => (<Task key={task.id} task={task} index={index}/> ))
          }
            {provided.placeholder}

          </TaskList>
        )}
        </Droppable>
      </Container>
      <Droppable droppableId='1'>
        {(provided,snapshot) => (
          <TaskList
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {/* {tasks.map( (task, index) => (<Task key={task.id} task={task} index={index}/> )) */}
          }
            {provided.placeholder}

          </TaskList>
        )}
        </Droppable>
      </div>
    )}
}

export default Index;
