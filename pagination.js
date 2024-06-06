let thisPage = 1;
let limit = 3;
let list = document.querySelectorAll('.list .item');

function loadItem(){
    let beginGet = limit * (thisPage - 1);
    let endGet = limit * thisPage - 1;
    list.forEach((item, key) => {
        if(key >= beginGet && key <= endGet) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
    listPage();
}

function listPage(){
    let listPageContainer = document.querySelector('.listPage');
    if (!listPageContainer) {
        console.error('Pagination container not found');
        return;
    }
    
    let count = Math.ceil(list.length / limit);
    listPageContainer.innerHTML = '';

    if(thisPage != 1){
        let prev = document.createElement('li');
        prev.innerText = "<";
        prev.setAttribute('onclick', "changePage(" + (thisPage - 1) + ")");
        listPageContainer.appendChild(prev);
    }

    for(let i = 1; i <= count; i++){
        let newPage = document.createElement('li');
        newPage.innerText = i;
        if(i == thisPage){
            newPage.classList.add('active');
        }
        newPage.setAttribute('onclick', "changePage(" + i + ")");
        listPageContainer.appendChild(newPage);
    }

    if(thisPage != count){
        let next = document.createElement('li');
        next.innerText = ">";
        next.setAttribute('onclick', "changePage(" + (thisPage + 1) + ")");
        listPageContainer.appendChild(next);
    }
}

function changePage(i){
    thisPage = i;
    loadItem();
}

loadItem();
