const express = require('express');
const path = require('path');
const app = express();
const indexRoutes = require('./routes/index');
const servicesRoutes = require('./routes/services');
const materialRoutes = require('./routes/materiales');
const tiendaRoutes = require('./routes/tienda');


// Configurar el motor de plantillas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRoutes);
app.use('/servicios', servicesRoutes);
app.use('/materiales', materialRoutes);
app.use('/tienda', tiendaRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
