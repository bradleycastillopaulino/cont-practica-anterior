/**
 * Servidor Express.js - Proyecto Docker
 * 
 * Autor: Bradley Castillo
 * Matrícula: 20240186
 * Instituto Tecnológico de Las Américas (ITLA)
 * Fecha: Abril 2026
 */

const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON y URL-encoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware de logging básico
app.use((req, _res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// ── Rutas ────────────────────────────────────────────

app.get('/', (_req, res) => {
  res.json({
    mensaje: 'Hola Mundo desde Docker 🚀',
    autor: 'Bradley Castillo',
    matricula: '20240186',
    timestamp: new Date().toISOString(),
  });
});

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() });
});

// Ruta 404
app.use((_req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

// Manejo global de errores
app.use((err, _req, res, _next) => {
  console.error(`[ERROR] ${err.message}`);
  res.status(500).json({ error: 'Error interno del servidor' });
});

// ── Inicio del servidor ──────────────────────────────

app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
  console.log(`📦 Entorno: ${process.env.NODE_ENV || 'development'}`);
});