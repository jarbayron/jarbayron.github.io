const userInit = (function() {
    const ready_but = document.querySelector('.ready_but');
    const modal = document.querySelector('#modal');
    const tiles = document.querySelectorAll('.C');
    const init = ready_but.addEventListener('click',  coverInit);
    const play = tiles.forEach(a=>{
        a.addEventListener('click',function(){
            if (findEmptytiles().includes(a,0)==1){
                mutation(a)
            };
        });
    });
})();

function coverInit() {
    
    const tiles = document.querySelectorAll('.C');
    const UI_text = document.querySelector('.UI');
    const modal = document.querySelector('#modal');
    const cover = document.querySelector('.Cover');
    let bool;
    let Emptytiles;
    tiles.forEach(a=>a.textContent="")

    elemMutate(modal,"" ,"modal none");
    elemMutate(UI_text,"CHOOSING FIRST PLAYER....", "UI blink_black")

    setTimeout(()=> {
        bool = Math.random()<.5 ? 1:0
        if (!bool) {
            elemMutate(UI_text, "Computer's Turn (Please Wait)", "UI")
    
            setTimeout(()=> {},1800);
    
            Emptytiles = findEmptytiles();
            r=rnd(0,Emptytiles.length-1); //THIS IS THE BRAIN OF COMP Player
            elemMutate(Emptytiles[r],"O","add mark");
        }
        elemMutate(UI_text,"Your Turn (Please Click)","UI")
        elemMutate(cover,"", "Cover Cover_Off")
    },1800)
};

function mutation(a) {
    const UI_text = document.querySelector('.UI');
    const modal = document.querySelector('#modal');
    const cover = document.querySelector('.Cover');
    let Emptytiles;
    elemMutate(a, "X", "add mark");
    elemMutate(UI_text, "Computer's Turn (Please Wait)", "UI");
    elemMutate(cover, "", "Cover");

    if (checkWinner()==1) {return;};

    setTimeout(()=> {
        Emptytiles = findEmptytiles();
        r=rnd(0,Emptytiles.length-1); //THIS IS THE BRAIN OF COMP Player
        elemMutate(Emptytiles[r],"O","add mark");
        if (checkWinner()==1) {return;} 

        elemMutate(UI_text,"Your Turn (Please Click)","UI")
        elemMutate(cover, "", "Cover Cover_Off");
        
    },1800);
    
};

function checkWinner() {
    const tiles = document.querySelectorAll('.C');
    const cover = document.querySelector('.Cover');
    const UI_text = document.querySelector('.UI');
    const modal = document.querySelector('#modal');


    const a = tiles[0].textContent; b = tiles[1].textContent; c=tiles[2].textContent;
    const d = tiles[3].textContent; e = tiles[4].textContent; f =tiles[5].textContent;
    const g = tiles[6].textContent; h = tiles[7].textContent; j = tiles[8].textContent;
    let x = ["X","O"];
    for (i=0;i<x.length;i++){


    if ((a ==b && a==c && a==x[i]) 
        ||(a==d && a==g&& a==x[i])
        ||(a ==e &&a==j&& a==x[i])
        ||(j==h&&j==g&&j==x[i])
        ||(j==f&&j==c&&j==x[i])
        ||(c==e&&c==g&&c==x[i])
        ||(b==e&&b==h&&b==x[i])
        ||(d==e&&d==f&d==x[i])) {
        if (x[i]=="X") {
            UI_text.textContent = "You WIN!";
        } else if(x[i]="O") {
            UI_text.textContent = "COMPUTER Wins..";
        };
        cover.classList = "Cover"
        modal.classList = "modal"
        return 1;
    }
    
}
}

function elemMutate (/*obj,txt,class*/){
    args= arguments;

    if (args[2].indexOf('add')>-1) {
        args[0].textContent = args[1];
        args[0].classList.add(args[2].substring(4)) //"mark"
    } else if (args[1]=="") {
        args[0].classList = args[2];
    } else {
        args[0].textContent = args[1];
        args[0].classList = args[2];
    }
}

function findEmptytiles() {
    const tiles = document.querySelectorAll('.C');
    const token = [];
    for (i=0;i<tiles.length;i++) {
        if (tiles[i].textContent =="") {
            token.push(tiles[i]);
        }
    }
    return token;
}

function rnd(min,max){
    return Math.floor(Math.random()*(max-min+1)+min );
}

