document.body.addEventListener('click', function(e){
    if (e.target.type == 'checkbox'){
        const checked = e.target.checked;                      // зпоминаем состояние родительского элемента
        // walk(e.target.nextNode, checked);                    // передаём функции элемент и состояние 
        walk(e.target.parentNode, checked);                    // передаём функции элемент и состояние 
    }
})





function walk(root, checked){
    if (!root) return;
    // console.log(root);
    if (root.type == 'checkbox') root.checked = checked;       // если находим чекбос - отмечаем его
    if (!root.children) return;                                // если у элемента нет детей выходим 
    let tree = root.children;                                  // дети элемента 
    console.log(tree);

    for (let i = 0; i < tree.length; i++) {                    // проходим по всем детям 
        if (tree[i].children[0] && tree[i].children[0].length > 0) console.log(tree[i].children[0]);
        walk(tree[i].children[1], checked);                             // вызываем функцию для каждого ребенка 
    }
}

