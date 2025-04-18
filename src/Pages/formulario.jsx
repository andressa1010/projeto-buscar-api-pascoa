
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Botao,
  BotaoSegundo,
  Campo,
  ContainerFormulario,
  Input,
  Label,
  Titulo,
  TituloFormulario,
} from "../Styles/styled";
import api from "../Services/api";

export default function Formulario() {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);
  const [dados, setDados] = useState({
    nome: "",
    email: "",
    celular: "",
    endereco: "",
    data: "",
    hora: "",
  });

  const navegar = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    async function buscarProduto() {
      try {
        const resposta = await api.get(`/api/pascoa/${id}`);
        setProduto(resposta.data);
      } catch (erro) {
        console.log("Erro ao buscar produto:", erro);
      }
    }

    buscarProduto();
  }, [id]);

  async function enviarFormulario(e) {
    e.preventDefault();

    try {
      await api.post("/api/encomendas", {
        ...dados,
        produtoId: id,
      });

      alert("Encomenda realizada com sucesso!");
      navegar("/");
    } catch (erro) {
      alert("Erro ao enviar encomenda. Tente novamente!");
    }
  }

  function atualizarDados(e) {
    const { name, value } = e.target;
    setDados({ ...dados, [name]: value });
  }

  return (
    <ContainerFormulario>
   

      {produto && (
        <>
         <TituloFormulario>
         <h2>Você está encomendando: {produto.nome}</h2>
          <img
            src={`https://api-pascoa.onrender.com/${produto.imagem}`}
            alt={produto.nome}
            style={{
              width: "200px",
              marginBottom: "20px",
              borderRadius: "10px",
            }}
          />
         </TituloFormulario>
         
        </>
      )}

      <form onSubmit={enviarFormulario}>
        <Campo>
          <Label>Nome:</Label>
          <Input
            type="text"
            name="nome"
            value={dados.nome}
            onChange={atualizarDados}
            required
          />
        </Campo>

        <Campo>
          <Label>Email:</Label>
          <Input
            type="email"
            name="email"
            value={dados.email}
            onChange={atualizarDados}
            required
          />
        </Campo>

        <Campo>
          <Label>Celular:</Label>
          <Input
            type="tel"
            name="celular"
            value={dados.celular}
            onChange={atualizarDados}
            required
          />
        </Campo>

        <Campo>
          <Label>Endereço:</Label>
          <Input
            type="text"
            name="endereco"
            value={dados.endereco}
            onChange={atualizarDados}
            required
          />
        </Campo>

        <Campo>
          <Label>Data da entrega:</Label>
          <Input
            type="date"
            name="data"
            value={dados.data}
            onChange={atualizarDados}
            required
          />
        </Campo>

        <Campo>
          <Label>Hora da entrega:</Label>
          <Input
            type="time"
            name="hora"
            value={dados.hora}
            onChange={atualizarDados}
            required
          />
        </Campo>

        <Botao type="submit">Enviar Encomenda!</Botao>
        <BotaoSegundo onClick={()=> navegar("/")}>Fechar</BotaoSegundo>
      </form>
    </ContainerFormulario>
  );
}
