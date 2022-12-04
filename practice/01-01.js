let time = 3.5,
    avarageSpeed = 112,
    kmLitre = 12,
    distance = 0,
    usedFuel = 0

// getting the distance
distance = time * avarageSpeed

//getting the fuel used in the trip
usedFuel = distance / kmLitre

// displaying the fuel used
console.log(usedFuel.toFixed(2));
