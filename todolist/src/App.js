import React from 'react';
import {Box} from '@mui/material'
import './App.css';
import Todolist from './Todolist'

function App() {
  return (
    <Box sx={{flexGrow:1}}>
        <Todolist/>
    </Box>
  );
}

export default App;
