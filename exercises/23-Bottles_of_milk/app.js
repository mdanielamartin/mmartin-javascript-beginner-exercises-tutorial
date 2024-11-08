// Your code here:

for (let i = 100; i>0;i--){
    let current = i-1;
    let after = i-2;

    if (i>3){
        console.log(`${current} bottles of milk on the wall, ${current} bottles of milk. Take one down and pass it around, ${after} bottles of milk on the wall.`)
    }else if(i===3){
        console.log('2 bottles of milk on the wall, 2 bottles of milk. Take one down and pass it around, 1 bottle of milk on the wall.')}
    else if (i===2){
        console.log(`1 bottle of milk on the wall, 1 bottle of milk. Take one down and pass it around, no more bottles of milk on the wall.`)
    }else{
        console.log(`No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall.`)
    }
}