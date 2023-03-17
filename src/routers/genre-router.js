const Router = require('../../framework/Router');
const genreController = require('../controllers/genre-controller');
const router = new Router()


router.post('/genres', genreController.createGenre);
router.delete('/genres/:id', genreController.deleteGenre);
router.put('/genres', genreController.updateGenre);
router.get('/genres', genreController.getGenre);
router.get('/genres/:id', genreController.getOneGenre);



module.exports = router