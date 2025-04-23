// get the string (message that was entered)
function getValues() {
    let alertDiv = document.getElementById('alertDiv');
    alertDiv.classList.add('invisible');
    let inputElement = document.getElementById('msgInput');
    //find the <input id='msgInput' /> element
    let userString = inputElement.value;
    //get what the user typed out of the <input/> 
    //use the let element you used to get elementById 
    if (userString.length < 2) {
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

    //revString is a new name that will go into the reverseMessage
    //function.
    displayResults(cleanedRevString);


    //display the reversed message
}
//reverse the message
function checkForPalindrome(message) {

    let cleaned = message.replace(/[^a-z0-9]/gi, '').toLowerCase();
    //gi means case insensitive
    let revWord = '';

    for (let idx = cleaned.length - 1; idx >= 0; idx = idx - 1) {
        //this starts at the end of the word 
        //reWord += message[idx];
        let char = cleaned[idx];
        //push is only for arrays
        //char reprsents characters you say let char = message [idx] which
        //is the letters index 


        revWord = revWord + char;
        //this is equivalent revWord.push
    }

    return cleaned == revWord;


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
