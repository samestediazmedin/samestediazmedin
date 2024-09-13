let matriz = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

let nuevaMatriz = [];

matriz.forEach(fila => {
    let nuevaFila = [];
    for (let elemento of fila) {
        nuevaFila.push(elemento + 5);
    }
    nuevaMatriz.push(nuevaFila);
});

console.log(nuevaMatriz);
