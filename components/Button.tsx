import React, { useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";

function Button() {
  return (
    <ButtonStyled>
      <Link href={"/"}>
        <a>Home</a>
      </Link>

      <Link href={`/about`}>
        <a>About</a>
      </Link>
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  background-color: red;
`;

export default Button;
