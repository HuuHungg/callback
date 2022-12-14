function myFunction(param) {
    param("Hoc Lap Trinh")
}

function myCallback(Value) {
    console.log('Type of Value: ', Value)
}

myFunction(myCallback)