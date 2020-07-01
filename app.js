var message = "";
function laugh(num) {
    for (var i = 0;i < num;i++) {
        message += "ha";
    }
    message = message + "!";
    return message;
}
console.log(laugh(7));
