let input = document.querySelector('#input')
let searchBtn = document.querySelector('#search')
let apiKey = 
searchBtn.addEventListener('click', function(e){
    e.preventDefault();
    alert(1);


//Get the input data

let word = input.value;

//Call Api and get the data

if(word == ''){
    alert('Word is required')
    return;
}
    getData(word);

})

function getData(word){
    //Ajax Call
    fetch(`https://www.dictionaryapi.com/api/v3/references/learners/json/${word}? key=${apiKey}`)
}