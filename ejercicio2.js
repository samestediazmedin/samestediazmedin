
let numeros = Array.from({ length: 50 }, (_, i) => i + 1);
let paresDuplicados = numeros.filter(num => num % 2 === 0).map(num => num * 1);
console.log("Pares Duplicados", paresDuplicados);
let duplicados = paresDuplicados.map(num => num * 1);
console.log(duplicados);
<!---
samestediazmedin/samestediazmedin is a ✨ special ✨ repository because its `README.md` (this file) appears on your GitHub profile.
You can click the Preview link to take a look at your changes.
--->
