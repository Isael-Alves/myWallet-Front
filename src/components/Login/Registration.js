import logo from "../../assets/MyWallet.svg";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Body, Form } from "../../styles/loginStyle";

function Registration() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const clearForm = {
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
  };
  const [form, setForm] = useState(clearForm);

  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function sendForm(e) {
    if (!loading && form.password === form.confirmPassword) {
      e.preventDefault();
      setLoading(true);
      const body = {
        ...form,
      };

      const promise = axios.post(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up`,
        body
      );

      promise.then((res) => {
        alert("Usuário criado com sucesso!");
        navigate(`../`);
        setForm(clearForm);
        setLoading(false);
      });

      promise.catch((err) => {
        const message = err.response.statusText;
        alert(message);
        setForm(clearForm);
        setLoading(false);
      });
    }
    alert("Confirme a senha");
  }

  return (
    <Body>
      <img src={logo} alt="Logo" style={{ marginTop: "200px" }} />
      <Form onSubmit={sendForm}>
        <input
          type="text"
          name="name"
          placeholder="Nome"
          onChange={handleForm}
          value={form.name}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          onChange={handleForm}
          value={form.email}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Senha"
          onChange={handleForm}
          value={form.password}
          required
        />
        <input
          type="password"
          alt=""
          name="confirmPassword"
          placeholder="Confirme a senha"
          onChange={handleForm}
          value={form.confirmPassword}
          required
        />
        <Button>
          {!loading ? (
            "Cadastrar"
          ) : (
            <ThreeDots color="#FFFFFF" height={20} width={70} />
          )}
        </Button>
      </Form>
      <h5 onClick={() => navigate(`../`)}>Não tem uma conta? Cadastre-se!</h5>
    </Body>
  );
}

export default Registration;
