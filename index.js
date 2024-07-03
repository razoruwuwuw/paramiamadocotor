

const preBtn = $('#prev-btn');
const nextBtn = $('#next-btn');
const book = $('#book');
const paper1 = $("#p1");
const paper2 = $("#p2");
const paper3 = $("#p3");

let currentLocation = 1;
let numOfPapers = 3;
let maxLocation = numOfPapers + 1;


function openBook() {
    book.css('transform', 'translateX(50%)');
    preBtn.css('transform', 'translateX(-180px)');
    nextBtn.css('transform', 'translateX(180px)');
}


function closeBook(isAtBeginning) {
    if (isAtBeginning) {
        book.css('transform', 'translateX(0%)');
    } else {
        book.css('transform', 'translateX(100%)');
    }
    preBtn.css('transform', 'translateX(0px)');
    nextBtn.css('transform', 'translateX(0px)');
}


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
