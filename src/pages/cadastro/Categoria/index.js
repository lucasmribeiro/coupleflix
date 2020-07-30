import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';


function CadastroCategoria() {
    const initialValue = {
        name: '',
        description: '',
        color: ''
    };

    const [category, setCategory] = useState([])
    const [values, setValues] = useState(initialValue);

    function setValue(key, value) {
        setValues({
            ...values,
            [key]: value,
        })
    }

    function handleChange(event) {
        setValue(event.target.getAttribute('name'), event.target.value);
    }

    return (
        <PageDefault> 
            <h1>Cadastro de Categoria: {values.name}</h1> 
            <form onSubmit={ function handleSubmit(event) {
                event.preventDefault();
                setCategory([ ...category, values ]);
                setValues(initialValue);
            }}>
                <FormField
                    label="Nome"
                    type="text"
                    value={values.name}
                    name="name"
                    onChange={handleChange}
                />
                <FormField
                    label="Descrição"
                    type="text"
                    value={values.description}
                    name="description"
                    onChange={handleChange}
                />
                <FormField
                    label="Cor"
                    type="color"
                    value={values.color}
                    name="color"
                    onChange={handleChange}
                />
                <button> Cadastrar </button>
            </form> 
            <ul>
                {category.map((item, index) => {
                    return (
                        <li key={index}>
                            {item.name}
                        </li>
                    )
                })}
            </ul>
            <Link to="/">
                Go home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;