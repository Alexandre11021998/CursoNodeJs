const mongoose = require("mongoose");

const connectToDatabase = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejs.ildiw.mongodb.net/?retryWrites=true&w=majority&appName=CursoNodeJs`
        );
        console.log("Conectado com Sucesso ao Banco de Dados");
    } catch (error) {
        console.log(
            "Ocorreu um erro ao se conectar com o Banco de Dados",
            error
        );
    }
};

module.exports = connectToDatabase;
