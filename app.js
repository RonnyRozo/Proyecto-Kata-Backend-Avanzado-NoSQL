const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/users');

const app = express();

// Conexión a la base de datos de MongoDB
mongoose.connect('mongodb://localhost:27017/tu-base-de-datos', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware para procesar solicitudes JSON
app.use(express.json());

// Rutas para usuarios
app.use('/usuarios', userRoutes);

// Puerto en el que escucha el servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});