var inputRange = document.querySelector("#avaliacao");
    console.log(inputRange);

var inputNumberRange = document.querySelector("#numberRange");
    console.log(inputNumberRange);

inputRange.addEventListener("click", function(){
    var rangeValue = inputRange.value;
    console.log(rangeValue);
    inputNumberRange.textContent = rangeValue;
});