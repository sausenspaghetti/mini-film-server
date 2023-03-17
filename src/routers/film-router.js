const Router = require('../../framework/Router');
const filmController = require('../controllers/film-controller');
const router = new Router()


router.post('/films', filmController.createFilm);
router.delete('/films/:id', filmController.deleteFilm);
router.put('/films', filmController.updateFilm);
router.get('/films', filmController.getFilms);
router.get('/films/:id', filmController.getOneFilm);


module.exports = router