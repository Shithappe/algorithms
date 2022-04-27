document.body.addEventListener('click', function(e){
    if (e.target.type == 'checkbox'){
        const checked = e.target.checked;                   // зпоминаем состояние родительского элемента
        walk(e.target.parentNode, checked);                 // передаём функции элемент и состояние 
    }
})





function walk(root, checked) {
    if (root.type == 'checkbox') root.checked = checked;    // если находим чекбос - отмечаем его
    let tree = root.children;                               // дети элемента 
    
    if (tree) {                                             // если есть дети
        for (let i = 0; i < tree.length; i++) {             // для каждого ребёнка 
            walk(tree[i], checked);                         // парлнить функциюю (запуск рекурсии)
        }
    }
}
