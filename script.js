let selectBlack = document.querySelector('#black');
selectBlack.addEventListener('click', trocaCorBlack);

let selectRed = document.querySelector('#red');
selectRed.addEventListener('click', trocaCorRed);

let selectPurple = document.querySelector('#purple');
selectPurple.addEventListener('click', trocaCorPurple);

let selectBlue = document.querySelector('#blue');
selectBlue.addEventListener('click', trocaCorBlue);

function trocaCorBlack(aleatory){
    document.querySelector('.selected').classList.remove('selected');
    selectBlack.classList.add('selected');
    console.log(aleatory.target);
}

function trocaCorRed(aleatory){
    document.querySelector('.selected').classList.remove('selected'); 
    selectRed.classList.add('selected');
    console.log(aleatory.target);
}

function trocaCorPurple(aleatory){
    document.querySelector('.selected').classList.remove('selected'); 
    selectPurple.classList.add('selected');
    console.log(aleatory.target);
}

function trocaCorBlue(aleatory){
    document.querySelector('.selected').classList.remove('selected'); 
    selectBlue.classList.add('selected');
    console.log(aleatory.target);
}