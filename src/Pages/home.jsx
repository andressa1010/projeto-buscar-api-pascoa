import React, { useEffect, useState } from "react"
import api from "../Services/api"
import { ContainerProdutos } from "../Styles/styled"
import { useNavigate } from "react-router-dom"
import Logo from "../components/logo"



const Home = () => {
    const navegar = useNavigate()
    const [produto , setProduto]= useState([])

    useEffect(()=>{
        async function buscarProdutosApi (){
            const resposta = await api.get("/api/pascoa")
            setProduto(resposta.data)
        }

        buscarProdutosApi()
    
    })


    return (  
        <>
        <Logo/>
        <ContainerProdutos>
            {
              produto.map((produto)=>(
                 <div key={produto.id} className="produto">
                    <h2> {produto.nome} </h2>
                    <img src={`http://localhost:3001${produto.imagem}`} 
                    alt={produto.nome}/>
                    <p>{produto.price} </p>
                    <p> {produto.descricao} </p>
                    <button onClick={() => navegar(`/encomendar/${produto.id}`)}>Fazer Encomenda</button>
                 </div>
              ))
            }
        </ContainerProdutos>

        </>
    );
}
 
export default Home;