import React, {useState} from 'react'
import { ListItem,Button, Box,TextField } from '@mui/material'

const ListItems = ({item, index, delTodo, editTodo, setTodo,  edit, setEdit, editText,setEditText,startEdit}) => {

  
  return (
    <ListItem  sx={{borderBottom:'1px dashed #ccc', paddingBottom:'15px', marginBottom:'15px'}}>
                    {
                      edit === index? (<TextField value={editText} onChange={(e)=> setEditText(e.target.value)}/>) : (<span style={{marginRight:'20px'}}>{item}</span>)
                    }
                    <Box>
                      {edit?(
                        <><Button variant="outlined" color='warning' size='small' style={{marginRight:'15px'}} onClick={()=>editTodo(index)}>전송</Button>
                        <Button variant="outlined" color='primary' size='small'  style={{marginRight:'15px'}} onClick={()=>setEdit(index)}>취소</Button>
                      </>
                         
                      ):(
                        <Button variant="outlined" color='primary' size='small' style={{marginRight:'15px'}} onClick={()=>setEdit(index)}>수정</Button>
                      )}
                      <Button variant="outlined" color='primary' size='small'  onClick={() => delTodo(index)}>삭제</Button>
                    </Box>
    </ListItem>
  )
}

export default ListItems