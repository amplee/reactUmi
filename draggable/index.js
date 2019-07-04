import React, { Component } from 'react';
import { DragDropContext } from "react-beautiful-dnd";
import styled from 'styled-components';
import initialData from './initialData';
import Column from './column';

const Container = styled.div`
  display: flex;
`;


class Index extends Component {
 
  state = initialData;

  onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    const { columns } = this.state;
    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    const start = columns[source.droppableId];
    const finish = columns[destination.droppableId];

    if (start === finish) {
      const column = columns[source.droppableId];
      const newTaskIds = Array.from(column.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);
      
      const newColumn = {
        ...column,
        taskIds: newTaskIds
      }
  
      const newState = {
        ...this.state,
        columns: {
          ...columns,
          [newColumn.id]: newColumn
        }
      };
  
      this.setState(newState);
      return;
    }

    console.log(start,finish)

    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds
    };

    const newState = {
      ...this.state,
      columns: {
        ...columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      }
    };
    this.setState(newState);

  }

  render() {
    return (
      <DragDropContext
        onDragEnd={this.onDragEnd}
      >
      <Container>
        {this.state.columnOrder.map((columnId) => {
          const column = this.state.columns[columnId];
          const tasks = column.taskIds.map(taskId => this.state.tasks[taskId])
          return <Column key={column.id} column={column} tasks={tasks}/>
        })}
        </Container>
      </DragDropContext>
    )}
}

export default Index;
