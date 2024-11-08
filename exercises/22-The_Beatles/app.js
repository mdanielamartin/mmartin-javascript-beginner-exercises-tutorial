function sing(){
    let song ='';
    song = repeat(4)
    song +='there will be an answer, '
    song +=repeat(5);
    song += 'whisper words of wisdom, let it be'
    return song

}

function repeat(times){
    let repeat = 'let it be';
    let verse = ''
    for (let i = 0 ; i < times; i++){
        verse += repeat + ', '
    }
    return verse;
}
//Your code above ^^^

console.log(sing());