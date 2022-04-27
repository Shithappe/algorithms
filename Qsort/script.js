let data = [];

function initArray(event){
    event.preventDefault();
    data.push(document.getElementsByName('input')[0].value);
    console.log(data)
    document.getElementsByName('input')[0].value = '';
    document.getElementsByClassName('show')[0].innerHTML = '[' + data + ']';
}

function sort(event){
    event.preventDefault();
    document.getElementsByClassName('answer')[0].innerHTML = '[' + qsort(data) + ']';  // кладём в answer результат функции
}

function pivod(arr){                                // высчисляем опоный элемент 
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += Number(arr[i]);
    }
    return Math.floor(sum / arr.length);
}

function qsort(arr){
    console.log('pivid: ', pivod(arr));
    if (arr.length < 2) return arr;                 // выход из рекурсии

    let pp = pivod(arr);                            //сам опорный элемент

    let min = [];                                   // <= опорного элемента 
    let max = [];                                   // > опорного элемента 

    for (let i = 0; i < arr.length; i++) {          // цикл для разбиения исходного массива
        let temp = arr[i];
        if (arr[i] <= pp) {
            arr.splice(i, 1, null);                 //заменяем элемент на null (для сохранения индексации) 
            min.push(temp);
        }
        if (arr[i] > pp) {
            arr.splice(i, 1, null);
            max.push(temp);
        }
        console.log(arr, i);
    }
    return [...qsort(min), ...qsort(max)];         // запускаем рекурсию 
}