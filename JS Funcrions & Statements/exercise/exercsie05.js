function checkPalindrome(arr) {

    for (let num of arr){
        console.log(checkSingleNumber(num));
    }
    function checkSingleNumber(number) {

        let toString = String(number);

        if (toString == toString.split('').reverse().join('')) {
            return true;
        } else {
            return false;
        }
    }
}

checkPalindrome([123,323,421,121]);