///convertirHorasEnSegundos(horas)

let horaUsuario = prompt("Diga un número a ser convertido en HORAS")

console.log(horaUsuario)

let convertirHorasEnSegundos = () => {
    let equivalente = 3600
    console.log(equivalente)
    let resultado = horaUsuario * equivalente
    console.log(resultado)
    return resultado

}
alert(convertirHorasEnSegundos())