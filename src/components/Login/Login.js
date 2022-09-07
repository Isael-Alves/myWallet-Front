import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../../providers/auth";
// import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import logo from "../../assets/MyWallet.svg";
import { Body, Form, Button } from "../../styles/loginStyle";

function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handForm() {}

  return (
    <Body>
      <img src={logo} alt="Logo" style={{ marginTop: "250px" }} />
      <Form onSubmit={handForm}>
        <input
          type="email"
          placeholder="E-mail"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          required
        />
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="senha"
          value={password}
          required
        />
        <Button>
          {!loading ? (
            "Entrar"
          ) : (
            <ThreeDots color="#FFFFFF" height={20} width={70} />
          )}
        </Button>
      </Form>
      <h5 onClick={() => navigate(`../registration`)}>
        Não tem uma conta? Cadastre-se!
      </h5>
    </Body>
  );
}

export default Login;
