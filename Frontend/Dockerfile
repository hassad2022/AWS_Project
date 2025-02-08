# Étape 1 : Builder le frontend avec Node.js
FROM node:18-alpine AS builder

WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package.json package-lock.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du projet
COPY . .

# Construire le projet React
RUN npm run build

# Étape 2 : Servir avec Nginx
FROM nginx:alpine

# Copier les fichiers build de React dans Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Lancer Nginx
CMD ["nginx", "-g", "daemon off;"]
