// get the string (message that was entered)
function getValues() {
    let alertDiv = document.getElementById('alertDiv');
    alertDiv.classList.add('invisible');
    let inputElement = document.getElementById('msgInput');
    //find the <input id='msgInput' /> element
    let userString = inputElement.value;
    //get what the user typed out of the <input/> 
    //use the let element you used to get elementById 
    if (userString.length) {
        //validate that the user typed atlest two characters
        //if not show a SWAL 
        swal.fire({
            backdrop: false,
            title: 'uh oh',
            text: 'please enter a palindrome messege',
            icon: 'error'
        })
    };

    //return message is based off of the let 
    let cleanedRevString = checkForPalindrome(userString);

    //cleanedRevString is a new name that is assinged to the actions of
    // checkForPalindrome(userString) anything inside the parameters of 
    //checkForPalindrome (), will take on the functions of checkForPalindrome
    displayResults(cleanedRevString);
    // anything in the parameters of displayResults will take on the functions 
    // of displayResults. cleanedRevString will  



}
// clean and reverse the message 
function checkForPalindrome(message) {

    let clean = message.replace(/[^a-z0-9]/gi, '').toLowerCase();
    //gi means case insensitive
    let revWord = '';

    for (let idx = clean.length - 1; idx >= 0; idx = idx - 1) {

        let char = clean[idx];
        //push is only for arrays
        //char reprsents characters you say let char = message [idx] which
        //is the letters index 


        revWord = revWord + char;
        //this is equivalent revWord.push
    }

    return clean == revWord;


}
//display the reversed message
function displayResults(isPalindrome) {
    let alertDiv = document.getElementById('alertDiv');

    alertDiv.classList.remove('invisible', 'alert-success', 'alert-danger');

    //put in the html "your message reversed is:"
    let heading = document.getElementById('alertHeading');

    let body = document.getElementById('alertMsg');

    if (isPalindrome == true) {
        heading.innerText = 'Nice Job 😎';
        body.innerHTML = 'That <b>IS</b> a palindrome!';
        alertDiv.classList.add('alert-success');
    } else {
        heading.innerText = 'Sorry';
        body.innerHTML = 'That is <b>NOT<b> a palindrome';
        alertDiv.classList.add('alert-danger');
    }

}
