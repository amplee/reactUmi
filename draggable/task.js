import React, { Component } from 'react';
import { Draggable } from "react-beautiful-dnd";
import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 8px;
  padding: 8px;
  display: flex;
  border-radius: 4px;
  border: 1px solid lightgrey;
  background-color: ${props => (props.isDragging ? '#abcdef' : 'white')};
`;

const Handle = styled.div`
  width: 20px;
  height: 20px;
  background: orange;
  border-radius: 4px;
  margin-right: 8px;
`;

let tempSelect = [];


class Index extends Component {

  state = {
    selectList: []
  }

  handleClick = (index) => {

    let temp = this.state.selectList;
    let seleBoo = false;
    for(let i=0,l=temp.length;i<l;i++){
      if(index === temp[i]){
        seleBoo = true;
      }
    }
    seleBoo ? this.removeItem(temp,index):temp.push(index);
    Array.from(new Set(temp));
    this.setState({
      selectList:Array.from(new Set(temp))
    })

    tempSelect.push(index);
    this.setState({
      activeID: tempSelect
    })
  }

  //移除选中
  removeItem = (arr,item) => {
    const index = arr.indexOf(item);
    if (index > -1) {
      arr.splice(index, 1);
    }
  }

  render() {
    const { task, index } = this.props;
    return (
      <Draggable
        draggableId={task.id}
        index = {index}
      >
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          // isDragging={snapshot.isDragging}
          onClick={()=>{this.handleClick(task.id)}}
          isDragging={this.state.selectList.includes(task.id)} 
        >
        {/* <Handle /> */}
        {task.content}
        </Container>
      )}
      </Draggable>
    )}
}

export default Index;
