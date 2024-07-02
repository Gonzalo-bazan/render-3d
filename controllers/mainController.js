// controllers/mainController.js
exports.getIndexPage = (req, res) => {
    res.render('index', { title: 'Inicio' });
  };
  