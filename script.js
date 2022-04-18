let data = ['5', '4', '3', '2', '1'];

function initArray(event){
    event.preventDefault();
    data.push(document.getElementsByName('input')[0].value);
    console.log(data)
    document.getElementsByName('input')[0].value = '';
    document.getElementsByClassName('show')[0].innerHTML = '[' + data + ']';
}

function sort(event){
    event.preventDefault();
    console.log(data);
    console.log(qsort(data));
}

function qsort(arr){
    if (arr.length < 2) return arr;                 // выход из рекурсии

    let p = Math.round(arr.length / 2) - 1;         //index of опорный элемент
    let pp = arr[p];                                //сам опорный элемент
    console.log(pp);

    let min = [];
    let max = [];

    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i];
        if (arr[i] < pp) {
            arr.splice(i, 1, null);                 //заменяем элемент на null (для сохранения индексации) 
            min.push(temp);
        }
        if (arr[i] > pp) {
            arr.splice(i, 1, null);
            max.push(temp);
        }
        console.log(arr, i);
    }
    return [...qsort(min), pp, ...qsort(max)];      // запускаем рекурсию 
}