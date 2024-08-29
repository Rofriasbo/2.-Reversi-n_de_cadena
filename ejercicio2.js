// 2. Reversión de cadena
function revertirFrase(frase) {
    // Dividir la frase en palabras, revertir el orden y también invertir cada palabra
    return frase.split(" ").map(palabra => palabra.split("").reverse().join("")).reverse().join(" ");
}
console.log(revertirFrase("aroñes aretog al atse ednod,neib satse oicirtaP")); // Salida: "aroñes ategot al adnerD"
