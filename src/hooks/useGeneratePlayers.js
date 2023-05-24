export const useGeneratePLayers = () => {
    // Función para generar un nombre aleatorio
    function generateRandomName() {
        const names = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Henry", "Ivy", "Jack"];
        return names[Math.floor(Math.random() * names.length)];
    }
    
    // Función para generar una puntuación aleatoria entre 0 y 100
    function generateRandomScore() {
        return Math.floor(Math.random() * 101);
    }

    // Crear el array
    var array = [];

    // Llenar el array con objetos con propiedades "name" y "score" aleatorias
    for (var i = 0; i < 50; i++) {
        var obj = {
            name: generateRandomName(),
            score: generateRandomScore()
        };
        array.push(obj);
    }

    // Imprimir el array en la consola
    // console.log(array);


    return {
        array
    }
}