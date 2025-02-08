# Étape 1 : Utiliser une image de base Node.js
FROM node:18-alpine

# Étape 2 : Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Étape 3 : Copier les fichiers de votre projet (package.json et package-lock.json) dans le conteneur
COPY package*.json ./

# Étape 4 : Installer les dépendances du projet
RUN npm install

# Étape 5 : Copier tout le reste du code source dans le conteneur
COPY . .

# Étape 6 : Exposer le port sur lequel l'application va écouter (5000)
EXPOSE 5000

# Étape 7 : Lancer l'application
CMD ["npm", "start"]
