import React, {useState}from 'react'
import {Container, Grid, Button, List, TextField} from '@mui/material'
import Listitems from './Listitems';
// import Grid from '@mui/material-nex/Grid2'
const Todolist = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editVal, setEditVal] = useState("");


  const addTodo = () =>{
    if(todo.trim()){
      setTodoList([...todoList, todo]);
      setTodo("");
    }
  }

  const editTodo = (index, val) => {
    setEditIndex(index);
    setEditVal(val);
  }

  const saveTodo = () => {
    if(editVal.trim()){
      const updateTodoList = todoList.map((item, i)=>
        i === editIndex ? editVal :item
      );
      setTodoList(updateTodoList);
      setEditIndex(null);
      setEditVal("");
    }

  }

  const delTodo = (index) => {
    const newTodoList = todoList.filter((_, i) => i !== index);
    setTodoList(newTodoList);
  }

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid xs={9} md={9} lg={9}> 
          <TextField fullWidth value={todo} onChange={(e)=>setTodo(e.target.value)} variant='outlined' label="새로운할일"/>
        </Grid>
        <Grid xs={3} md={3} lg={3}>
          <Button fullWidth variant='contained' style={{height: '100%'}} onClick={addTodo}>할일추가</Button>
        </Grid>
      </Grid>
      <List>
        {
          todoList.map((item, index) =>(
            <Listitems
              key={index}
              item={item}
              delTodo={delTodo}
              index={index}
              editTodo={editTodo}
              editIndex={editIndex}
              editVal={editVal}
              setEditVal={setEditVal}
              saveTodo={saveTodo}
            />
          ))
        }
      </List>
    </Container>
  )
}

export default Todolist