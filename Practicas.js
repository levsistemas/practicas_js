let humanos = {
    persona1: {
        name: "Leandro",
        surname: "Vega",
        age: 38,
        born_age: 1986,
        country: "Argentina",
        developer: true,
        hobbies: {
            first: "Technologies",
            second: "games",
            third: "heavy metal"
        },
        music: "SlipKnot"
    },
    persona2: {
        name: "x",
        surname: "y",
        age: 0,
        born_age: 1990,
        country: "Z",
        developer: false
    }
}

for (let personas in humanos) {
    console.log(`-----------------------------------------------------------------------`)
    console.log(`\nLa Clave ${personas}\n`)
    for (let subpersonas in humanos[personas]) {
        if (typeof humanos[personas][subpersonas] === 'object') {
            console.log(`La SubClave siguiente es: ${subpersonas}\n`)
        } else {
            console.log(`La SubClave es: ${subpersonas}\n`)
        }

        if (typeof humanos[personas][subpersonas] === 'object') {
        } else {
            console.log(`El valor es: ¡${humanos[personas][subpersonas]}!\n`)
        }
        for (let resultado in humanos[personas][subpersonas]) {
            if (typeof humanos[personas][subpersonas][resultado] === 'object') {
            } else {
                if (humanos[personas][subpersonas][resultado].length > 1) {
                    console.log(`La sub clave anidada es: ¡${resultado}!\n`)
                    console.log(`El sub valor es: ¡${humanos[personas][subpersonas][resultado]}!\n`)
                }
            }
        }
    }
}

let humanoides = {
    people1: {
        name: "Leandro",
        surname: "Vega",
        age: 38,
        born_age: 1986,
        country: "Argentina",
        developer: true,
        hobbies: {
            first: "Technologies",
            second: "games",
            third: "heavy metal"
        },
        music: "SlipKnot"
    },
    people2: {
        name: "x",
        surname: "y",
        age: 0,
        born_age: 1990,
        country: "Z",
        developer: false
    },
    people3: {
        nombrecito: "boludo",
        apellidito: "imaginatelo",
        otros: {
            a: 1,
            b: 2,
            c: 3
        }
    }
}

console.log(`**********************************************************************************************************`)
console.log(`**********************************************************************************************************`)
console.log(`**********************************************************************************************************`)

for (let personas in humanoides) {
    console.log(`-----------------------------------------------------------------------`)
    console.log(`\nLa Clave ${personas}\n`)
    for (let subpersonas in humanoides[personas]) {
        if (typeof humanoides[personas][subpersonas] === 'object' || typeof humanoides[personas][subpersonas] === 'number' || typeof humanoides[personas][subpersonas] === 'string') {
            console.log(`La SubClave siguiente es: ${subpersonas}\n`)
        } else {
            console.log(`La SubClave es: ${subpersonas}\n`)
        }

        if (typeof humanoides[personas][subpersonas] === 'object' || typeof humanoides[personas][subpersonas] === 'number' || typeof humanoides[personas][subpersonas] === 'string') {
            
        } else {
            console.log(`El valor es: ¡${humanoides[personas][subpersonas]}!\n`)
        }
        for (let resultado in humanoides[personas][subpersonas]) {
            if (typeof humanoides[personas][subpersonas][resultado] === 'object' || typeof humanoides[personas][subpersonas][resultado] === 'number' || typeof humanoides[personas][subpersonas][resultado] === 'string') {
                console.log(`La sub clave anidada es: ${resultado}\n`)
                console.log(`El sub valor es: ¡${humanoides[personas][subpersonas][resultado]}!\n`)
                console.log(`El sub valor es formato length: ¡${humanoides[personas][subpersonas][resultado].length}!\n`)
                console.log(`El sub valor es formato typeof: ¡${typeof humanoides[personas][subpersonas][resultado]}!\n`)
                if (typeof humanoides[personas][subpersonas][resultado] === 'number') {
                    console.log(`La sub clave anidada es : ${resultado}\n`)
                    console.log(`El sub valor es : ¡${humanoides[personas][subpersonas][resultado]}!\n`)
                    // console.log(`El sub valor es formato length: ¡${humanoides[personas][subpersonas][resultado].length}!\n`)
                    // console.log(`El sub valor es formato typeof: ¡${typeof humanoides[personas][subpersonas][resultado]}!\n`)
                }
            } else {
                // QUILOMBO POR ACA TAMBIEN
                // console.log(`La sub clave anidada es: ${resultado}\n`)
                console.log(`El sub valor es : ¡${humanoides[personas][subpersonas][resultado]}!\n`)
            }
        }
    }
}