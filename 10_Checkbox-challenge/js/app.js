const checkboxes = document.querySelectorAll('input')
console.log(checkboxes)

let lastChecked;

function handleCheck(e) {
    // Checking if the shift key is pressed
    // also if the item is checked
    let inBetween = false
    if (e.shiftKey && this.checked) {
        // loop over every single checkboxes
        checkboxes.forEach(checkbox => {
            console.log(checkbox)
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween
                console.log('Starting to check in between')
            }

            if (inBetween) {
                checkbox.checked = true
            }
        })
    }

    lastChecked = this
}


checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))