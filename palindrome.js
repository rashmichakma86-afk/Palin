function palindrome(myString){
    var input = myString.replace(/[A-Z0-9]/ig, "").toLowerCase();

    var reversedInput = input.split('').reverse().join('');

    if (input === reversedInput) {
        document.write("<div>" + myString + "is a Palindrome <div>");
    }else{
            document.write("<div>" + myString + "is not a Palindrome <div>");
    }
}

palindrome("madam")