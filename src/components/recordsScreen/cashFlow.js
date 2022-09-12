import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { MdAddCircleOutline } from "react-icons/md";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import React, { useState } from "react";

function CashFlow() {
  const dados = JSON.parse(localStorage.getItem("dados"));
  const navigate = useNavigate();
  const [empty, setEmpty] = useState(true);
  const { name, token } = dados;

  function listCashFlow() {
    return "lista";
  }

  return (
    <Body>
      <Header>
        <h1>Olá, {name}</h1>
        <RiLogoutBoxRLine />
      </Header>
      <Box>
        {empty ? <h3>Não há registros de entrada ou saída</h3> : listCashFlow()}
      </Box>
      <BoxButtons>
        <div onClick={() => navigate("../cashIn")}>
          <MdAddCircleOutline />
          <h2>Nova entrada</h2>
        </div>
        <div onClick={() => navigate("../cashOut")}>
          <IoMdRemoveCircleOutline />
          <h2>Nova entrada</h2>
        </div>
      </BoxButtons>
    </Body>
  );
}
export default CashFlow;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
`;

const Header = styled.header`
  margin-bottom: 22px;
  width: 326px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: #ffffff;
  }
  svg {
    width: 26px;
    height: 25px;

    color: #ffffff;
  }
`;

const Box = styled.div`
  width: 326px;
  height: 446px;
  padding: 23px 11px 10px 12px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #ffffff;
  border-radius: 5px;

  h3 {
    width: 180px;
    font-weight: 400;
    font-size: 18px;
    line-height: 20px;
    text-align: center;

    color: #868686;
  }
`;

const BoxButtons = styled.section`
  width: 326px;
  margin-top: 13px;

  display: flex;
  justify-content: space-between;

  div {
    width: 155px;
    height: 114px;
    padding: 10px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    background-color: #a328d6;
    border-radius: 5px;

    h2 {
      width: 64px;
      height: 40px;

      font-weight: 700;
      font-size: 17px;
      line-height: 20px;

      color: #ffffff;
    }

    svg {
      width: 22px;
      height: 22px;
      color: #ffffff;
    }
  }
`;
