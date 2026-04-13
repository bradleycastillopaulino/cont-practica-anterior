# 🚀 Proyecto DevOps - Aplicación Web con Docker y CI/CD

## 📌 Descripción
Este proyecto consiste en el desarrollo de una aplicación web básica utilizando Node.js (Express), contenedorizada con Docker y desplegada en la nube mediante Render. Además, se implementa un flujo de integración y despliegue continuo (CI/CD) utilizando GitHub Actions.

---

## 🛠️ Tecnologías utilizadas

- Node.js (Express)
- Docker
- GitHub
- GitHub Actions
- Docker Hub
- Render

---

## 📂 Estructura del proyecto
/proyecto
│── app.js
│── package.json
│── Dockerfile
│── .dockerignore


---

## 🌐 Enlaces del proyecto

Repositorio de GitHub:  
https://github.com/bradleycastillopaulino/cont-practica-anterior

Imagen en Docker Hub:  
https://hub.docker.com/r/bradleycastillo/hola-mundo

Aplicación desplegada en Render:  
https://cont-practica-anterior-bkfd.onrender.com

---

## ⚙️ Funcionamiento

La aplicación cuenta con dos endpoints principales:

- `/` → Retorna un mensaje JSON "Hola Mundo"
- `/health` → Verifica el estado del servicio

---

## 🐳 Docker

Se creó un Dockerfile para contenerizar la aplicación:

- Imagen base: Node.js
- Instalación de dependencias con npm
- Exposición del puerto
- Ejecución con `node app.js`

---

## 🔄 CI/CD (Integración y Despliegue Continuo)

Se utilizó GitHub Actions para automatizar el proceso:

### Flujo:

1. Se realiza un push al repositorio
2. Se construye la imagen Docker
3. Se sube automáticamente a Docker Hub
4. Se despliega en Render usando su API

---

## 🔐 Variables y Secrets

Se utilizaron los siguientes secretos en GitHub:

- DOCKER_USERNAME → Usuario de Docker Hub
- DOCKER_PASSWORD → Token de acceso de Docker Hub
- RENDER_API_KEY → Clave de API de Render
- RENDER_SERVICE_ID → ID del servicio en Render

⚠️ Por seguridad, los valores reales no se incluyen en este repositorio.

---

## 🚀 Despliegue

La aplicación fue desplegada en Render como Web Service:

- Runtime: Node.js
- Build Command: `npm install`
- Start Command: `node app.js`

---

## 📊 Resultado

Se logró implementar el ciclo completo de DevOps:

- Desarrollo ✔️  
- Contenerización ✔️  
- Integración continua ✔️  
- Despliegue automático ✔️  

---

## 👤 Autor

Bradley Castillo  
Matrícula: 20240186  
Instituto Tecnológico de Las Américas (ITLA)
