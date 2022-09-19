//1 вариант
let car = {
    drive : 'drive',
    brake : 'brake',
    bodyStyle : 'sedan'
}
console.log(car)

let carBrand = {
    transmission : 'automatic',
    fuel : 'patrol',
    __proto__: car
}
console.log(carBrand)

let Lamborghini = {
    doors : 'LamboDoors',
    topSpeed : 325,
    engine : 'V10',
    __proto__: carBrand
}

console.log(Lamborghini)
console.log(Lamborghini.drive)
console.log(Lamborghini.transmission)


//2 вариант
let car2 = {
    drive : 'drive',
    brake : 'brake',
    bodyStyle : 'sedan'
}

let carBrand2 = {
    transmission : 'automatic',
    fuel : 'patrol',
}

let Lamborghini2 = {
    doors : 'LamboDoors',
    topSpeed : 325,
    engine : 'V10',
}

Object.setPrototypeOf(Lamborghini2,carBrand2)
Object.setPrototypeOf(carBrand2,car2)

console.log(Lamborghini2)
console.log(Lamborghini2.bodyStyle)
console.log(Lamborghini2.fuel)



  
