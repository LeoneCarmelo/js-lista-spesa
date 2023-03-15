/* Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while. */

const list = [
    'pane',
    'pasta',
    'verdure',
    'bevande'
]


let i = 0
while (i < list.length) {
    console.log(list[i])
    document.writeln(list[i])
    i++
}