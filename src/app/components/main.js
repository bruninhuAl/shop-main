'use client'
import { useEffect, useState } from "react";
import style from "../styles/main.module.css";
import Spinner from "./spinner";
import ErrorFetch from "./ErrorFetch";
import Link from "next/link";

export default function Main() {

  const [listProducts, setProducts] = useState([]);
  const [listComplete, setComplete] = useState([]);
  const [textSearch, setTextSearch] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect( ()=> {   
    const getProduct = async() => {
      try {
      const response = await fetch("https://fakestoreapi.com/products")
      const data = await response.json();
      setProducts(data);
      setComplete(data);
      }
      catch{
        setIsError(true);
      }
    }
    getProduct();
  },[]);

    const orderAz = () => {
      const listAux = [...listProducts].sort((a,b) =>
       a.title.localeCompare(b.title) );
      setProducts(listAux);
    } 

    const orderZa = () => {
      let listAux = [...listProducts].sort((a,b) =>
       a.title.localeCompare(b.title) );

       listAux = listAux.reverse();
       setProducts(listAux);
    }

    const orderMenorMaior = () => {
      const teste = [...listProducts].sort((a, b) => 
      a.price - b.price);
      
      setProducts(teste);
    }

    const orderMaiorMenor = () => {
      let teste = [...listProducts].sort((a, b) => 
      a.price - b.price);
      
      teste = teste.reverse();
      setProducts(teste);
    }

    const search = (text) => {
      setTextSearch(text);
      if(text == ""){
        listProducts(listComplete);
        return
      }
      const newList = listProducts.filter((produto) =>
        produto.title.topUpperCase().Spinnertrim().includes(textSearch.topUpperCase())
      );
      listComplete(newList);
    }

    if(isError == true){
      return <ErrorFetch />
    }

    if( listComplete[0] == null){
      return <Spinner/>
    }

  return (
    <>
      <div >
        <div>
          <input type="text" value={textSearch} placeholder="Pesquise um produto" onChange={(event) => search(event.targed.value) }/>
        </div>
          <div>
              <button onClick={ orderAz }> Az</button>
              <button onClick={ orderZa }> Za</button>
              <button onClick={ orderMenorMaior }> - +</button>
              <button onClick={ orderMaiorMenor }> + -</button>
          </div>
      </div>  
      <main className={style.grid}>
        {listProducts.map((produto) => (
          <div key={produto.id} className={style.pprt}>
            <h3>{produto.title}</h3>
            <img src={produto.image} alt={produto.title} className={style.imagem} />
            <p>Price: R${produto.price}</p>
            <p>{produto.description}</p>
            <p>Category: {produto.category}</p>
            <p>Rating: {produto.rating.count}</p>
            <Link href={"/product/" + produto.id}>
            <button>Ver Mais</button>
            </Link>
          </div>
        ))}
      </main>
    </>
  );
}