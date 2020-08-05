import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const initialValue = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(initialValue);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(event) {
    setValue(event.target.getAttribute('name'), event.target.value);
  }

  useEffect(() => {
    const URL = 'http://localhost:8080/categorias';
    fetch(URL).then(async (respostaServidor) => {
      const resposta = await respostaServidor.json();
      setCategorias([
        ...resposta,
      ]);
    });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>
      <form onSubmit={function handleSubmit(event) {
        event.preventDefault();
        setCategorias([...categorias, values]);
        setValues(initialValue);
      }}
      >
        <FormField
          label="Nome"
          type="text"
          value={values.nome}
          name="name"
          onChange={handleChange}
        />
        <FormField
          label="Descrição"
          type="textarea"
          value={values.descricao}
          name="description"
          onChange={handleChange}
        />
        <FormField
          label="Cor"
          type="color"
          value={values.cor}
          name="color"
          onChange={handleChange}
        />
        <Button to="/">
          Cadastrar
        </Button>
      </form>
      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}
      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.nome}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>
      <Link to="/">
        Go home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
