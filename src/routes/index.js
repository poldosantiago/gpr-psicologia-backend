import express from 'express';
import email from './emailRoutes.js';

function routes(app){
    app.use(
		express.json(),
		email,

	);

	app.get('/', (req, res) => res.status(200).send({API: "GPR Psicologia"}));
}

export default routes;