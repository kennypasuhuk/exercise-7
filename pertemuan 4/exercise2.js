//emor,fransditho richardo

//IIFE
(function () {
        let number = -1;
        if (number > 0) {
                console.log(number, "positive");
        } else {
                console.log(number, "negative");
        }
})();


//callback
function output(result) {
        console.log(result);
}

function checkNumber(number, callback) {
        if (number < 0) {
                result = number + " = negatif";
        } else {
                result = number + " = positif";
        }
        callback(result)
};
checkNumber(-1, output)