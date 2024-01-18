import express from 'express'
import morgan from 'morgan'

// inicializacion
const app = express();

// settins
app.set('port', process.env.PORT || 3000);
// middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes
app.get('/', (req, res) => {
    res.send(`http://localhost:${app.get('port')}`)
})

export default app;