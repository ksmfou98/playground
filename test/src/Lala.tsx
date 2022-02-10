import React from "react";
import { useDispatch } from "react-redux";
import { setUser } from "stores/test";

function Lala() {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(setUser({ name: "도현", email: "ㅁㄴㅇ" }));
  };

  return (
    <div>
      <button onClick={onClick}>이름 설정</button>
    </div>
  );
}

export default Lala;
