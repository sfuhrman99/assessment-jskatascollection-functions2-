

function add(a1, a2) {
    
    return a1 + a2
}
console.log(add(2,2))


function multiply(m1, m2) {
    let sum = 0
    for(counter = 0; counter < m2; counter++) {
        sum = add(m1, sum)
        
    }
    return sum
}

console.log(multiply(3, 3))

function factorial(f1) {
    let factor = 0
    let sum = 0
    for(counter = 0; counter < f1; counter++) {
        factor = multiply(f1, counter)
        sum = add(sum, factor)
        console.log(sum)
    }
    return sum
}
console.log(factorial(3))




function power(p1, p2) {
    let product = p1
    let counter = 1
    while (counter < p2) {
        product = multiply(p1, product) 
        counter += 1
    }
    
    return product
}

console.log(power(2, 5))
