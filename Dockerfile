# Imagen base
FROM node:18

# Crear carpeta de trabajo
WORKDIR /app

# Copiar archivos
COPY package.json .

# Instalar dependencias
RUN npm install

# Copiar el resto del proyecto
COPY . .

# Exponer puerto
EXPOSE 3000

# Comando de inicio
CMD ["node", "app.js"]