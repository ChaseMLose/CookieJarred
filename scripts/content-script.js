//test site for delayed cookie removeal https://adamsavage.com
//test site for standard onCompleted cookie removeal https://filewave.com
//Constantly check for new elements that are added to the page
//var keyWord = new [String]('cookie', 'consent', 'accept all', 'accept all cookies', 'accept cookies', 'accept all cookies', 'ad', 'advertisement', 'advertising', 'promotion', 'promotional', 'marketing', 'marketing cookies', 'marketing cookie', 'marketing consent', 'marketing cookies consent', 'marketing cookie consent', 'marketing cookies')
var keyWord = ['cookie', 'consent', 'accept all cookies', 'accept cookies', 'accept all cookies', 'marketing cookies', 'marketing cookie', 'marketing consent', 'marketing cookies consent', 'marketing cookie consent', 'marketing cookies', 'cookieconsent']
setInterval(function(){removeConsent(keyWord)}, 1000)



/* 
    This function will remove the cookie consent from the page. It will loop through the spans
    and find the one that has the innerHTML of a keyword and then remove the entire div that the 
    span is in. This will remove the entire span/div/label from the page.
*/
function removeConsent(removedKeyWord){
    // Get all the spans on the page
    let spans = document.getElementsByTagName("span");

    // Get all divs on the page
    let divs = document.getElementsByTagName("div");

    //Get all aria-labels on the page
    let ariaLabels = document.getElementsByTagName("aria-label");

    // Loop through removedKeyWord array
    for (let i = 0; i < removedKeyWord.length; ++i) {

        // Loop through all the spans
        for (let j = 0; j < spans.length; ++j) {
            // Check if the span has the innerHTML of the removed key word
            if (spans[j].innerHTML.includes(removedKeyWord[i])) {
                // Remove the span from the page
               spans[j].remove();
            }

            // Loop through all the divs
            for (let k = 0; k < divs.length; ++k) {
                // Check if the div has the span with the innerHTML of removed key word
                if (divs[k].contains(removedKeyWord[i])) {
                    // Remove the div from the page
                    divs[k].remove();
                }
            }

            // Loop through all the aria-labels
            for (let l = 0; l < ariaLabels.length; ++l) {
                // Check if the aria-label has the innerHTML of the removed key word
                if (ariaLabels[l].innerHTML.includes(removedKeyWord[i])) {
                    // Remove the aria-label from the page
                    ariaLabels[l].remove();
                }
            }
        } 
    }
}