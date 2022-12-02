import app from './app';

app.listen(process.env.PORT_SERVER || 3210, () => {
    console.info(`🌍 API Clinica Estetica rodando na porta /localhost: ${process.env.PORT_SERVER}`)
});