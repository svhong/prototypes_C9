function myMessage() {
    console.log("this is my first function!")
}
function add(num1, num2){
    var result = num1 + num2;
    console.log(result);
}
function add2(x, y) {
    var total = x + y;
    return total;
}

var add2result = add2 (10,10)

function cardFlip(element) {
    $(element).hide();
}