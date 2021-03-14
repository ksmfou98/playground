import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { userRouter } from "./router"; // 내가 export 를 default로 하지 않아서 { userRouter }이런식으로 불러와여댐

const app = express();

const handleHome = (req, res) => {
  //req : 나에게 요청온거
  res.send("Hello from home"); //res : 페이지로 보여주는거
};

const handleProfile = (req, res) => {
  res.send("You are on my profile");
};

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet()); // 보안을 위한 helmet 패키지
app.use(morgan("dev")); // middleware 인 morgan 패키지

app.get("/", handleHome); // "/" 페이지에 접근하면 handleHome 함수 실행
app.get("/profile", handleProfile); // "/profile" 페이지에 접근하면 handleProfile 함수 실행

app.use("/user", userRouter);

export default app;
