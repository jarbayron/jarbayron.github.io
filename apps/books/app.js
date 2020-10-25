let myLibrary = [];

let vButton = document.querySelector("[type = 'button']");
let modul = document.querySelector("#modal");

let sButton = document.querySelector("[value = 'Send']");

let sortDirection =false;
let tableBody = document.querySelector("#tableData");

vButton.addEventListener('click', showModul);
sButton.addEventListener('click', submitInfo);

function loadTableData(personData) {
    //removeAllChildNodes(tableBody);

    for (j =0; j <= personData.length-1;j++) {
        let i=0;

        if (personData.length == 1) {

        } else if (j == (personData.length-1)) {

        } else {  

                continue
        }
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
            let td4_y = document.createElement('div');
            let td4_yes =document.createElement('input');
            let td4_n = document.createElement('div');
            let td4_no= document.createElement('input');
        let td5 = document.createElement('button');

        td1.textContent = personData[j].author
        td2.textContent = personData[j].title
        td3.textContent = personData[j].pages
        

        td4_y.textContent = "Yes";
        td4_n.textContent = "No";
        td4_yes.value = "1";
        td4_no.value = "0";
        td4_yes.type = "radio";
        td4_no.type = "radio";
        td4_yes.name = "readChoice"+myLibrary.length;  
        td4_no.name = "readChoice"+myLibrary.length;
        td4_yes.textContent = "Yes";
        td4_no.textContent = "No";

        td5.textContent = "DELETE";
        td5.classList.add("td5") 
        
        let tr1 = document.createElement('tr');
        tr1.appendChild(td1);
        tr1.appendChild(td2);
        tr1.appendChild(td3);
            td4.appendChild(td4_y);
            td4.appendChild(td4_yes);
            td4.appendChild(td4_n);
            td4.appendChild(td4_no);
            tr1.appendChild(td4);

        tr1.appendChild(td5);
        tableBody.appendChild(tr1);

        if (personData[j].read == 1) {

            td4_yes.setAttribute('checked', "checked")  ;
        } else {
            td4_no.setAttribute('checked', "checked")
        }

        td5.addEventListener('click', e=>{
            removeAllChildNodes(tr1);
            if (myLibrary.length<2) {
                myLibrary = [];
            }else {
                myLibrary.splice(i,1);
            }            
        });
        
        i=i+1;
    }
}

//   
function showModul () {
    modul.classList.add("modal_visible")
    modul.focus();
    modul.querySelector('.modal_close').addEventListener('click',removeModul)
    modul.addEventListener('keydown', esc_key);
}

function removeModul() {
    modul.classList.remove("modal_visible");
    modul.querySelector('.modal_close').removeEventListener('click',removeModul);
    modul.removeEventListener('keydown', esc_key);
}

function submitInfo() {
    let answers = modul.querySelectorAll('[type = "text"]');
    
    let Qread;
    let mcQ = modul.querySelectorAll('[name= "choice"]')
    mcQ.forEach(a => {
        if (a.checked == true) {
            Qread = a.value;
        }
    });

    let book_holder = new Book(answers[0].value, answers[1].value,answers[2].value,Qread);
    addBookToLibrary(book_holder);

    loadTableData(myLibrary);

}
//
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {return title +" by "+author+", "+pages+", "+b_read(read) }
    //"The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function list_myLibrary() {
    console.table(myLibrary);
}

function b_read(str) {return (str == true) ? "already read":"not read yet"}


function esc_key (e) {
    if (e.keyCode === 27) {
        removeModul();
    }
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}