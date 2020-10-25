let romeo;
let juliet;
let dreams;
let cntScreen = document.querySelector('.screen');
//CSS PROPERTIES
let clkFlash = Array.from(document.querySelectorAll('.key'));
clkFlash.forEach(a=>{ 
    a.addEventListener('click', e => {
        a.classList.add('playing');
        if (!juliet){
            calculate(a.textContent);
        } else if (juliet) {
            if ((romeo)&&(!dreams)) {
                dreams=true;
                cntScreen.textContent='';
                calculate(a.textContent);
            } else if ((romeo)&&(dreams)) {
                calculate(a.textContent);
            }
        }
        
    });
    
    a.addEventListener('transitionend', e =>{
        clkFlshOn.forEach(b => b.classList.remove('playing'));
        a.addEventListener('transitionend', e=> a.classList.remove('playing'));
    }); 
});

let clkFlshOn = Array.from(document.querySelectorAll('.key_on'));
clkFlshOn.forEach(a => {
    a.addEventListener('click', e => {
        Array.from(document.querySelectorAll('.playing')).forEach(c => c.classList.remove('playing'));
        a.classList.add('playing'); 

        
        if (!dreams) {
            symbolCalc(a.textContent);
        } else if ((dreams)&& (juliet)&&(romeo)) {
            let total = mathCalc(romeo,juliet,cntScreen.textContent);
            juliet = a.textContent;
            cntScreen.textContent = total;
            romeo =total;
            dreams = false;
        }
        
    });

    a.addEventListener('transitionend', e => {
        if (cntScreen.textContent == "00.00" || (a.textContent == "+/-" || a.textContent == "=")) {
            Array.from(document.querySelectorAll('.playing')).forEach(c => c.classList.remove('playing'));
        }
    });
}); 

//CSS_FUNCTIONS
function calculate(x) {
    (x=='CLEAR') ? fClear() : calcs(x)
    function calcs(x) {
        if (cntScreen.textContent == '00.00' && (!isNaN(x))) {
            cntScreen.textContent='';}
        if (!isNaN(x)) {
            caScreen(x);
        } else if (x == '+/-' && cntScreen.textContent != "00.00") {
            (cntScreen.textContent.includes('-')== true ) ? dbSceen(): cbScreen('-');
        } else if (x == '.' && cntScreen.textContent != "00.00") {
            caScreen(x);
        }
    }
}

function symbolCalc(x) {
    if (x=="="){
        //nothing 
    } else if (!(cntScreen.textContent == "00.00")) { //ALL OTHER OPERATORS NOT EQUALS
        juliet=x;
        romeo = cntScreen.textContent;
    }
}

function mathCalc(num1,oper,num2) { 
    console.log(oper)
    if (oper == "+") {
        return add(num1, num2).toFixed(2);
    }else if (oper == "-") {
        return subtract(num1, num2).toFixed(2);
    } else if (oper == "X") {
        return multiply(num1, num2).toFixed(2);
    } else if (oper == "/") {
        return (num1/num2).toFixed(2);
    } else if (oper == "nRoot") {
        return (power(num2,(1/num1))).toFixed(2);
    } else if (oper == "%") {
        return (num1%num2).toFixed(2);
    } else if (oper == "="){    
        console.log('lol');
    }
}

function fClear() {
    cntScreen.textContent= "00.00"
    romeo=undefined;juliet = undefined;dreams =undefined;
    
}

function caScreen(x) {
    cntScreen.textContent = cntScreen.textContent.concat(x);
}

function cbScreen(x) {
    cntScreen.textContent = x.concat(cntScreen.textContent)
}

function dbSceen() {
    cntScreen.textContent = cntScreen.textContent.substring(1)
}