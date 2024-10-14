import React, {useState,useEffect} from 'react'
import {Container, List, ListItem, Button, TextField, Grid} from '@mui/material'
import ListItems from './components/ListItems';

const Todolist = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodolist]  = useState([]);
  const [edit, setEdit] = useState(null);
  const [editText, setEditText] = useState('');

//   const [isEdit, setIsEdit] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(null);
  const editTodo = (index) => {
    const newTodoList = [...todoList];
    newTodoList[index] = editText;
    setTodolist(newTodoList,);
    setEdit(null);
    setEditText('');
    ;
  }
  
  const delTodo = (index) => {
    const newTodoList = todoList.filter((_, i)=> i !== index );
    setTodolist(newTodoList);

  }

  const startEdit = (index,item)=>{
    setEdit(index);
    setEditText(item);
  }

  const addTodo = () => {
    if(todo.trim()){
        // if(isEdit){
        //     const updatedList = [...todoList];
        //     // updatedList[currentIndex] = todo;
        //     // setTodolist(updatedList);
        //     // setIsEdit(false);
        //     // setCurrentIndex(null); 
        // }else{
        //     setTodolist([...todoList, todo]);  
        // }
        setTodolist([...todoList, todo]);
        setTodo("");
    }
  }

//   const editTodo = (index) => {
//     setTodo(todoList[index]);
//     setIsEdit(true);
//     setCurrentIndex(index);

//   }
//   const delTodo = (index) => {
//     setTodolist(todoList.filter((_,i)=> i !== index));
//   }

  return (
    <Container >
        <Grid container spacing={2}>
            <Grid  item xs={8} md={8} lg={4}>
                <TextField id="outlined-basic" label="새로운 할일" variant="outlined"  fullWidth onChange={(e)=>setTodo(e.target.value)} value={todo}/>      
            </Grid>
            <Grid item xs={4} md={8} lg={4}>
                {/* <Button variant='contained' type='button' onClick={addTodo} fullWidth style={{height: '100%'}} >{isEdit ? "수정완료" : "할일추가"} </Button> */}
                <Button variant='contained' type='button' onClick={addTodo} fullWidth style={{height: '100%'}} >할일추가</Button>
            </Grid>
        </Grid>
        <List>
            {
            todoList.map((item,index)=> (
                <ListItems key={index} item={item} delTodo={delTodo} edit={edit} setEdit={setEdit} editText={editText} setEditText={setEditText} startEdit={startEdit}/>               
            ))
            }
        </List>
    </Container>
  )
}

export default Todolist