const inpEpoca = document.getElementById("inpEpoca");
const inpX = document.getElementById("inpX");

const model = tf.sequential();
const fit = async () => {
  const epocas = parseInt(inpEpoca.value);

  model.add(tf.layers.dense({ units: 1, inputShape: [1] }));

  model.compile({ loss: "meanSquaredError", optimizer: "sgd" });

  const xs = tf.tensor2d([-2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 10], [11, 1]);
  const ys = tf.tensor2d([-5, -3, -1, 1, 3, 5, 7, 9, 11, 13, 19], [11, 1]);

  await model.fit(xs, ys, { epochs: epocas });
  document.getElementById("res").innerText = "Entrenamiento terminado";
};

const predict = () => {
  const inp = parseInt(inpX.value);
  document.getElementById("micro-out-div").innerText = model
    .predict(tf.tensor2d([inp], [1, 1]))
    .dataSync();
};
