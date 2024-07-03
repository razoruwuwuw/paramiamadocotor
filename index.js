// const preBtn = document.querySelector('#prev-btn');
// const nextBtn = document.querySelector('#next-btn');
// const book = document.querySelector('#book');

// const paper1 = document.querySelector("#p1");
// const paper2 = document.querySelector("#p2");
// const paper3 = document.querySelector("#p3");
// preBtn.addEventListener('click', goPrevpage);
// nextBtn.addEventListener('click', goNextPage);
// let currentLocation = 1;
// let numOfPapers = 3;
// let maxLocation = numOfPapers + 1;

// function openBook(){

// }

// function closeBook(){
    
// }


// function goNextPage(){
//     if(currentLocation < maxLocation){
//         switch(currentLocation){
//             case 1: 
//             openBook()
//             paper1.classList.add("flipped")
//             break;

//             case 2: 
//             paper2.classList.add("flipped")
//             break;

//             case 3: 
//             paper3.classList.add("flipped")
//             closeBook()
//             break;
//             default:
//             throw new Error("unkown state")
//         }
//         currentLocation++;
//     }
// }



// function goPrevpage(){
    
// }

const preBtn = $('#prev-btn');
const nextBtn = $('#next-btn');
const book = $('#book');
const paper1 = $("#p1");
const paper2 = $("#p2");
const paper3 = $("#p3");

let currentLocation = 1;
let numOfPapers = 3;
let maxLocation = numOfPapers + 1;

// Función para abrir el libro y mover los botones
function openBook() {
    book.css('transform', 'translateX(50%)');
    preBtn.css('transform', 'translateX(-180px)');
    nextBtn.css('transform', 'translateX(180px)');
}

// Función para cerrar el libro y resetear posiciones de los botones
function closeBook(isAtBeginning) {
    if (isAtBeginning) {
        book.css('transform', 'translateX(0%)');
    } else {
        book.css('transform', 'translateX(100%)');
    }
    preBtn.css('transform', 'translateX(0px)');
    nextBtn.css('transform', 'translateX(0px)');
}

// Manejar clic en botón Siguiente
$(nextBtn).on('click', function() {
    if (currentLocation < maxLocation) {
        switch (currentLocation) {
            case 1:
                openBook();
                paper1.addClass("flipped").css('z-index', 1);
                break;
            case 2:
                paper2.addClass("flipped").css('z-index', 2);
                break;
            case 3:
                paper3.addClass("flipped").css('z-index', 3);
                closeBook();
                break;
            default:
                throw new Error("unknown state");
        }
        currentLocation++;
    }
});

// Manejar clic en botón Anterior
$(preBtn).on('click', function() {
    if (currentLocation > 1) {
        switch (currentLocation) {
            case 2:
                closeBook(true);
                paper1.removeClass("flipped").css('z-index', 3);
                break;
            case 3:
                paper2.removeClass("flipped").css('z-index', 2);
                break;
            case 4:
                openBook()
                paper3.removeClass("flipped").css('z-index', 1);
                break;
            default:
                throw new Error("unknown state");
        }
        currentLocation--;
    }
});
