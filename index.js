// Step 1:
let newInventoryCarModels = ['S1', 'T1', 'S2', 'S1', 'S2', 'S1']
let newInventoryCarTypes = ['StockCar', 'Refrigerator', 'StockCar', 'Lorrie', 'Lorrie', 'Lorrie']
let newInventoryYearBuilt = [1922, 2011, 1975, 2002, 1965, 1951]

//Step 2:
// declaring our iterator, in this case "i". We start it at 0, as we want it to begin at the first value in any given array!
let i = 0

// While loop from step 2:
while(i < newInventoryCarModels.length){
    console.log(`${newInventoryCarModels[i]} is of type: ${newInventoryCarTypes[i]}`)
    // remember to increment your iterator, or you'll have an infinite loop!
    i++
}

// Step 3:
// declaring a new iterator for our next "while"
let j = 0

// declaring our S1 count:
let typeS1Count = 0

// while loop adapted for the instructions in step 3:
while(j < newInventoryCarModels.length){
    if(newInventoryCarModels[j] === 'S1'){
        typeS1Count++
    }
    j++
}

// Step 4:
console.log(`Number of S1 Cars is: ${typeS1Count}`)

// Test step 5 on your own!

// Step 6, 7:

let lorrieCount = 0
for(let i = 0; i < newInventoryCarModels.length; i++){
    if(newInventoryCarTypes[i] === 'Lorrie'){
        lorrieCount++
    }
}

// Step 8:
console.log(`I have found ${lorrieCount} lorries.`)

// Bonus:

let totalValue = 0

for(let i = 0; i < newInventoryYearBuilt.length; i++){
    totalValue += (2022 - newInventoryYearBuilt[i])
}

let averageYear = (totalValue / newInventoryYearBuilt.length)
console.log('Average age is ' + averageYear + ' years.')