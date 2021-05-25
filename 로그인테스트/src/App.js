import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PresentingMedia from "./login.js";
import {Route} from "react-router-dom";

function App() {
  return (
    <Container maxWidth="xs"> 
      <div className="App">
        <header className="App-header">
          <PresentingMedia />
            <br />
            <TextField
              variant = "filled"
              type = "휴대폰번호"
              label = "휴대폰번호"
              placeholder = "휴대폰번호"
            />
              <br/>
            <TextField
                variant = "filled"
                type = "비밀번호"
                label = "비밀번호"
                placeholder = "비밀번호"
            />
              <br />
              <Button variant = "contained" color = "white">로그인</Button>
        </header>
      </div>
      <div>

      </div>
    </Container>
  
  );
}

export default App;
