import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

app.get("/calcular", (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);
    const op = req.query.op;

    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: "Valores inválidos" });
    }

    let resultado;

    switch (op) {
        case "suma":
            resultado = a + b;
            break;
        case "resta":
            resultado = a - b;
            break;
        case "multiplicacion":
            resultado = a * b;
            break;
        case "division":
            if (b === 0) {
                return res.status(400).json({ error: "División por cero" });
            }
            resultado = a / b;
            break;
        default:
            return res.status(400).json({ error: "Operación inválida" });
    }

    res.json({ resultado });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});
