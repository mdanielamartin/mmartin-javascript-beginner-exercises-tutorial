let guests = prompt('How many people are coming to your wedding?');

function getPrice(guests){
    let cost = 0;
    let numGuest = Number(guests)
    if (numGuest <= 50){
        return 4000;
    }else if (numGuest <= 100){
        return 10000;
    }else if (numGuest <= 200){
        return 15000
    }else {
        return 20000
    }

    return cost;
}

let price = getPrice(guests);
console.log('Your wedding will cost '+price+' dollars');
