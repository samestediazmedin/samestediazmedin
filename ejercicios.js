let estudiantes = [
    { nombre: 'Juan', nota: 75 },
    { nombre: 'Ana', nota: 55 },
    { nombre: 'Luis', nota: 80 },
    { nombre: 'Marta', nota: 45 },
    { nombre: 'Pedro', nota: 90 },
    { nombre: 'Sofía', nota: 65 },
    { nombre: 'Carlos', nota: 50 },
    { nombre: 'Lucía', nota: 70 },
    { nombre: 'Javier', nota: 30 },
    { nombre: 'Clara', nota: 85 },
    { nombre: 'Diego', nota: 40 },
    { nombre: 'Valeria', nota: 95 },
    { nombre: 'Fernando', nota: 60 },
    { nombre: 'Gabriela', nota: 58 },
    { nombre: 'Andrés', nota: 72 },
    { nombre: 'Natalia', nota: 88 },
    { nombre: 'Ricardo', nota: 45 },
    { nombre: 'Isabel', nota: 77 },
    { nombre: 'Samuel', nota: 62 },
    { nombre: 'Teresa', nota: 50 }
];

let estudiantesAprobados = estudiantes

    .filter(estudiante => estudiante.nota >= 60)
    .map(estudiante => estudiante.nombre);

console.log(estudiantesAprobados);







