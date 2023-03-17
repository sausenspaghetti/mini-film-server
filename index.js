const PORT = process.env.PORT || 5000;
const Application = require('./framework/Application');
const jsonParser = require('./framework/parseJson');
const parseUrl = require('./framework/parseUrl');


const filmRouter = require('./src/routers/film-router');
const genreRouter = require('./src/routers/genre-router');

const app = new Application()

app.use(jsonParser);
app.use(parseUrl('http://localhost:5000'));

app.addRouter(filmRouter);
app.addRouter(genreRouter);


app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));

