import app from './src/app.js';
import 'dotenv/config';

const port = process.env.PORT | 3001; 

app.listen(port, () => {
    console.log(`Ouvindo pela porta ${port}\nAcesso pela URL http://localhost:${port}`);
});