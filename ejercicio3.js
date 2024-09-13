let precios = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 
    1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 
    1900, 2000, 2100, 2200, 2300, 2400, 2500, 2600, 
    2700, 2800, 2900, 3000, 3100, 3200, 3300, 3400, 
    3500, 3600, 3700, 3800, 3900, 4000];

let totalConDescuento = precios.reduce((acumulador, precio) => {
return acumulador + (precio * 0.9);
}, 0);

console.log(totalConDescuento);
