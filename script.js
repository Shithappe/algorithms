let data = [];

function initArray(event){
    event.preventDefault();
    data.push(document.getElementsByName('input')[0].value);
    console.log(data)
    document.getElementsByName('input')[0].value = '';
    document.getElementsByClassName('show')[0].innerHTML = data;
}


function partition(arr){
    console.log( Math.ceil(arr.length / 2));
}

function sort(event){
    event.preventDefault();
    partition(data)
}