import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function NewIncident() {
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const history = useHistory();

  const ongId = localStorage.getItem('ongId');

  async function handleNewIncident(e) {
    e.preventDefault();

    const data = {
      title,
      description,
      value,
    };

    try {
      const response = await api.post('incidents', data, {
        headers: {
          Authorization: ongId,
        }
      });
      
      alert("Caso cadastrado com sucesso !!!");
      alert(`Caso: ${response.data.title}`);

      history.push('/profile');
    } 

    catch (error) {
      alert.error("Ops, tivemos uma probleminha ao realizar o seu cadastro de caso, nossos robôs estão trabalhando para corrigir isso, tente novamente !!!");
    }

  }

  return(
    <div className = "new-incident-container">
      <div className = "content">
        <section>
          <img src = {logoImg} alt = "Be the Hero"/>

          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

          <Link className = "back-link" to = "/profile">
            <FiArrowLeft size = {16} color = "#E02041"/>
            Voltar para home
          </Link>
        </section>

        <form onSubmit = {handleNewIncident} >
          <input 
            placeholder = "Título do Caso"
            value = {title}
            onChange = {e => setTitle(e.target.value)} 
          />

          <textarea 
            placeholder = "Descrição"
            value = {description}
            onChange = {e => setDescription(e.target.value)} 
          />

          <input 
            placeholder = "Valor em reais"
            value = {value}
            onChange = {e => setValue(e.target.value)} 
          />

        <div className="button-group">
          <Link to="/profile" className="bttCancel">Cancelar</Link>
          <button id="bttNewIncident" type="submit">Cadastrar</button>
        </div>
        
        </form>
      </div>
    </div>
  );
} 