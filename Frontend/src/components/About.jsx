import React from "react";

function About() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>À propos du projet</h1>
      <p style={{ maxWidth: "800px", margin: "0 auto", lineHeight: "1.6" }}>
        Bienvenue sur notre projet développé dans le cadre du cours AWS ! Ce projet est une application 
        complète avec une architecture **Frontend, Backend et Base de Données** entièrement dockerisée grâce à Docker Compose.
      </p>

      <p style={{ maxWidth: "800px", margin: "0 auto", lineHeight: "1.6" }}>
        Pour assurer un développement collaboratif efficace, nous avons utilisé **GitHub** afin de gérer 
        le code source et suivre l'évolution du projet. L’infrastructure est déployée avec **Terraform**, 
        qui nous permet de créer et configurer automatiquement une instance cloud.
      </p>

      <p style={{ maxWidth: "800px", margin: "0 auto", lineHeight: "1.6" }}>
        Une fois l’instance en place, **Ansible** est utilisé pour installer les packages nécessaires, garantissant 
        ainsi un environnement optimisé. Enfin, nous utilisons **SCP** pour transférer le projet sur l'instance distante 
        et assurer son bon fonctionnement.
      </p>

      <p style={{ maxWidth: "800px", margin: "0 auto", lineHeight: "1.6", fontWeight: "bold" }}>
        Grâce à cette stack technologique moderne, nous avons mis en place une solution robuste et évolutive, 
        démontrant l’intégration des bonnes pratiques **DevOps et Cloud**.
      </p>
    </div>
  );
}

export default About;
