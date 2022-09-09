import { Form, Button } from "../../styles/loginStyle";
import styled from "styled-components";
import { useState } from "react";

function CashIn() {
  const [value, setValue] = useState();
  const [description, setDescription] = useState();

  return (
    <Body>
      <div>
        <h1>Nova entrada</h1>
      </div>

      <Form>
        <input
          type="text"
          placeholder="Valor"
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={value}
          required
        />
        <input
          type="text"
          placeholder="Descrição"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
          required
        />
      </Form>
      <Button>Salvar entrada</Button>
    </Body>
  );
}
export default CashIn;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    width: 326px;
    margin-top: 25px;
    h1 {
      font-weight: 700;
      font-size: 26px;
      line-height: 31px;

      color: #ffffff;
    }
  }
`;