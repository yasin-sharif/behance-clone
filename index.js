function changeHeart(element){
    let e=element.attributes;
    let val=e.ref.value;
    if(val=='a'){
        e.src.value='assets/heart_on.svg';
        e.ref.value='b';
    }
    else{
        e.src.value='assets/heart_off.svg';
        e.ref.value='a';
    }
}

function changeHighlight(element){
    let items=document.querySelectorAll('.search-category li');
    items.forEach(p=>{p.classList.remove('highlight')});
    element.classList.add('highlight');
}
