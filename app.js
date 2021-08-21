let game = document.getElementById('game');

let setArr = new Set();
let newArr = [];

while(setArr.size < 25) {
    setArr.add(Math.floor(Math.random()*25));
}

newArr.push(...setArr);

//for(let i=0; i<25; i++) {
//    newArr[i] = i;
//}
//
//newArr.sort(()=> Math.random()-0.5);

let i=0;
for(let y=0; y<5; y++) {
    for(let x=0; x<5; x++) {
        let block = document.createElement('div');
        block.classList.add('block');
        block.setAttribute('data-x', x);
        block.setAttribute('data-y', y);
        block.innerHTML = newArr[i] > 0 ? newArr[i] : '';
        game.appendChild(block);
        i++;
    }
}

let blocks = document.querySelectorAll('.block');

function colorBlocks() {
    blocks.forEach(item => {
        item.style.backgroundColor = item.innerHTML ? 'red' : 'yellow';
    });
}

colorBlocks()

game.addEventListener('click', moveBlocks);

function moveBlocks(event) {
    event.preventDefault();

    if(event.target.innerHTML !== '') {
        let x = event.target.getAttribute('data-x'),
            y = event.target.getAttribute('data-y');
        
        if(document.querySelector(`[data-x="${+x+1}"][data-y="${y}"]`) !== null && document.querySelector(`[data-x="${+x+1}"][data-y="${y}"]`).innerHTML == '') {
            document.querySelector(`[data-x="${+x+1}"][data-y="${y}"]`).innerHTML = event.target.innerHTML;
            event.target.innerHTML = '';
        }
        
        if(document.querySelector(`[data-x="${+x-1}"][data-y="${y}"]`) !== null && document.querySelector(`[data-x="${+x-1}"][data-y="${y}"]`).innerHTML == '') {
            document.querySelector(`[data-x="${+x-1}"][data-y="${y}"]`).innerHTML = event.target.innerHTML;
            event.target.innerHTML = '';
        }
        
        if(document.querySelector(`[data-x="${x}"][data-y="${+y+1}"]`) !== null && document.querySelector(`[data-x="${x}"][data-y="${+y+1}"]`).innerHTML == '') {
            document.querySelector(`[data-x="${x}"][data-y="${+y+1}"]`).innerHTML = event.target.innerHTML;
            event.target.innerHTML = '';
        }
        
        if(document.querySelector(`[data-x="${x}"][data-y="${+y-1}"]`) !== null && document.querySelector(`[data-x="${x}"][data-y="${+y-1}"]`).innerHTML == '') {
            document.querySelector(`[data-x="${x}"][data-y="${+y-1}"]`).innerHTML = event.target.innerHTML;
            event.target.innerHTML = '';
        }
    }
    colorBlocks();
}
















