import React, { useState } from 'react';
import axios from 'axios';

function Form() {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/users', formData);
      alert('Données envoyées avec succès !');
    } catch (error) {
      console.error('Erreur lors de l\'envoi des données', error);
    }
  };

  return (
    <div>
      <h2>Formulaire d'Inscription</h2>
      <form onSubmit={handleSubmit}>
        <label>Nom :</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        <br />
        <label>Email :</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        <br />
        <button type="submit">Soumettre</button>
      </form>
    </div>
  );
}

export default Form;


