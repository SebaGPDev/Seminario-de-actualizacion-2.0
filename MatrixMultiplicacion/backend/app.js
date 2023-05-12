import express from "express"
import cors from "cors"

const app = express();
const port = 3000 || 4000;

app.use(cors());
app.use(express.json());

app.use("/multiplicar", (req, res) => {
  const { Matriz1, Matriz2 } = req.body;
  

  const filasM1 = Matriz1.length;
  const filasM2 = Matriz2.length;
  const columnasM2 = Matriz2[0].length;
  try {

    const resultado = new Array(filasM1).fill(0).map(() => new Array(columnasM2).fill(0));

    for (let i = 0; i < filasM1; i++) {
      //filas de la matriz 1

      for (let j = 0; j < columnasM2; j++) {
        // columnas de la matriz2

        for (let k = 0; k < filasM2; k++) {
          //filas de la matriz2

          resultado[i][j] += Matriz1[i][k] * Matriz2[k][j];
        }
      }
    }
    console.log( resultado)
    res.json({
      resultado
    })
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log("Server corriendo en el puerto:",port);
});
