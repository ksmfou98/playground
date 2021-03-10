const express = require("express");
const app = express();

const PORT = 4000;

const handleListening = () => {
  console.log(`Listening on: http://localhost:${PORT}`);
};

const handleHome = (req, res) => {
  //req : 나에게 요청온거
  res.send("Hello from home"); //res : 페이지로 보여주는거
};

const handleProfile = (req, res) => {
  res.send("You are on my profile");
};

app.get("/", handleHome); // "/" 페이지에 접근하면 handleHome 함수 실행
app.get("/profile", handleProfile); // "/profile" 페이지에 접근하면 handleProfile 함수 실행

app.listen(PORT, handleListening); //npm start 했을때 PORT 로 서버를 열고 handleListening 함수 실행
