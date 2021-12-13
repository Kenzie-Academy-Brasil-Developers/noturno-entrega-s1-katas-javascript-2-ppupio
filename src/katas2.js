// comece a criar a sua função add na linha abaixo
function add(a,b){
    return a+b
}
//console.log(add(3,5))

// descomente a linha seguinte para testar sua função
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');



// comece a criar a sua função multiply na linha abaixo
function multiply(a,b) {
    let x=0;
    for(let indiceM=1; indiceM<=b; indiceM++) {
        x=add(x,a)
    }
    return x;
}


// descomente a linha seguinte para testar sua função
 console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo
function power(a,b) {
    let y=1;
    for(let indiceP=1; indiceP<=b; indiceP++) {
        y=multiply(y,a)
    }
    return y;
}

// descomente a linha seguinte para testar sua função
console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo

function factorial(a) {
    let w=1;
    for(let indiceF=1; indiceF<=a; indiceF++) {
        w=multiply(w,indiceF)
    }
    return w;
}
// descomente a linha seguinte para testar sua função
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci

function fibonacci(a) {
    let f1=0;
    let f2=1;
    let f;
    if(a===1){
        return f1
    }
    for(let indiceFi=1; indiceFi<a; indiceFi++) {
        f=add(f1,f2);
        f1=f2;
        f2=f;
    }
    return f1;
}
// descomente a linha seguinte para testar sua função
console.assert(fibonacci(8) === 13, 'A função fibonacci não está funcionando como esperado');
