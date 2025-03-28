import { Container, TextArea, Img, Main, Ingredients } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/input";
import { FiChevronLeft, FiShare, FiChevronDown } from "react-icons/fi";
import { Button } from "../../components/Button";
import { NewTag } from "../../components/NewTag";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

export function Add() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [newIng, setNewIng] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    api.get("/categories")
      .then(response => setCategories(response.data))
      .catch(error => console.error("Erro ao buscar categorias:", error));
  }, []);

  function handleAddIng() {
    setIngredients(prevState => [...prevState, newIng]);
    setNewIng("");
  }

  function handleRemoveIng(deleted) {
    setIngs(prevState => prevState.filter(ingredient => ingredient !== deleted));
  }

  function handlePriceChange(e) {
    let value = e.target.value.replace(/\D/g, "");
    value = (Number(value) / 100).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    });
    setPrice(value);
  }

  function handleCategorySelect(name) {
    setCategory(name);
    setShowDropdown(false);
  }

  async function handleNewItem() {
    if(!title) {
      return alert("Defina o nome do item!")
    }

    if(!category) {
      return alert("Escolha a categoria do item!")
    }

    if(!price) {
      return alert("Defina o preço do item!")
    }

    if(!description) {
      return alert("Adicione uma descrição!")
    }

    if (newIng) {
      return alert("Você não adicionou todos os ingredientes digitados, clique para adicionar antes de prosseguir!")
    }

    await api.post("/items", {
      title,
      category,
      ingredients,
      price,
      description
    });

    alert("Item criado com sucesso!");
    navigate("/");
  }

return (
  <Container>
    <Header/>
    <Main>
      <div className="back">
        <FiChevronLeft size={24}/>
        <p>voltar</p>
      </div>

      <h1>Adicionar prato</h1>
      <div className="inputs">
        <div className="input" id="image">
          <label htmlFor="img">Imagem do prato</label>
          <Img id="img" >
            <FiShare size={24}/>
            Selecione imagem
          </Img>
        </div>
        <div className="input" id="title">
          <label htmlFor="name">Nome</label>
          <Input
            id="name"
            placeholder="Ex: Salada Ceasar"
            type="text"
            onChange={e => setTitle(e.target.value)}
            />
        </div>
        <div className="input" id="categ">
          <label htmlFor="category">Categoria</label>
          <Input
            id="category"
            placeholder="Refeição"
            type="text"
            value={category}
            onChange={e => setCategory(e.target.value)}
            onFocus={() => setShowDropdown(true)}
          />
          <FiChevronDown size={24} onClick={() => setShowDropdown(prev => !prev)} />
          {showDropdown && (
            <ul className="dropdown">
              {categories.map(cat => (
                <li key={cat.id} onClick={() => handleCategorySelect(cat.name)}>{cat.name}</li>
              ))}
            </ul>
          )}

        </div>
      </div>

      <div className="inputs">
        <div className="input">
           <label htmlFor="ing">Ingredientes</label>
            <Ingredients id="ing">
              {
                ingredients.map((ingredient, index) => (
                  <NewTag
                  key={String(index)}
                  value={ingredient}
                  onClick={() => handleRemoveIng(ingredient)}
                  />
                ))
              }
              <NewTag
                isNew 
                placeholder="Adicionar"
                value={newIng}
                onChange={e => setNewIng(e.target.value)}
                onClick={handleAddIng}
              />
            </Ingredients>
        </div>
        <div className="input" id="value">
           <label htmlFor="price">Preço</label>
          <Input
            id="price"
            placeholder="R$00,00"
            type="text"
            value={price}
            onChange={handlePriceChange}
            />
        </div>
      </div>
      <div className="inputs">
        <div className="input">
          <label htmlFor="desc">Descrição</label>
            <TextArea 
            id="desc"
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            type="text"
            onChange={e => setDescription(e.target.value)}
            />
        </div>
      </div>
        
      <Button 
        id="save" 
        title="Salvar Alterações" 
        onClick={handleNewItem}
      />

    </Main>

      
    <Footer/>
  </Container>
)
}