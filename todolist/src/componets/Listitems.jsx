import React from 'react'
import {ListItem, Box,TextField, Button} from '@mui/material'

const Listitems = ({item, delTodo, index, editTodo, editIndex, editVal, setEditVal, saveTodo}) => {
  return (
    <ListItem
        sx={{
            borderBottom: '1px dashed silver',
            paddingBottom: '15px',
            marginBottom: '10px',
            marginTop:'10px'
        }}>
        {editIndex === index ?
            (<>
            <TextField
                value={editVal}
                onChange={(e)=>setEditVal(e.target.value)}
                size="small"
                style={{marginRight:'20px'}}
                />
                <Box>
                    <Button
                        variant='outlined'
                        color="error"
                        size="small"
                        onClick={()=>editTodo("", item)}
                        style={{marginRight : '15px'}}
                    >취소</Button>
                        
                    <Button
                        variant='outlined'
                        color="error"
                        size="small"
                        onClick={saveTodo}
                    >저장</Button>                       
                </Box>                               
            </>):(
                <>

                    <span style={{marginRight: '20px'}}>{item}</span>
                    <Box>
                        <Button
                            variant='outlined'
                            color="error"
                            size="small"
                            onClick={()=>editTodo(index, item)}
                            style={{marginRight : '15px'}}
                        >수정</Button>
                        
                        <Button
                            variant='outlined'
                            color="error"
                            size="small"
                            onClick={()=>delTodo(index)}
                        >삭제</Button>
                        
                    </Box>
                </>
            )
        }
    </ListItem>
  )
}

export default Listitems