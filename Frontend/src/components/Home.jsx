import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Bienvenue sur notre projet AWS !</h1>
      <p>
        Ce projet est une application Fullstack dockerisée et déployée sur AWS. Nous utilisons 
        Docker, GitHub, Terraform, Ansible et SCP pour gérer l’infrastructure et le code. 
        Découvrez notre approche DevOps en explorant les différentes sections du site.
      </p>

      {/* Image AWS depuis un lien */}
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" 
        alt="AWS Logo" 
        style={{ width: "200px", marginTop: "20px" }} 
      />

      <br />
      <Link to="/about">
        <button style={{ marginTop: "20px", padding: "10px 20px", fontSize: "16px" }}>
          En savoir plus
        </button>
      </Link>
    </div>
  );
}

export default Home;

