let salida = {}
for(let i = 1; i <= 20; i++) {
    salida[i] = 0
}


for(let i = 0; i < 1000; i++) {
    
    salida[parseInt(Math.random()*(21-1)+1)] ++
    
}

console.log(salida)