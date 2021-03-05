const addItems = document.querySelector('.add-item')
const itemsList = document.querySelector('.plates')

const deleteButton = document.querySelector('.dlt')
const checkAllButton = document.querySelector('.check')
const unCheckAllButton = document.querySelector('.uncheck')

// getting items from the localStorage or addItem function when browser isn't refreshing
const items = JSON.parse(localStorage.getItem('items')) || []

// adding items to the list
function addItem (e) {
    e.preventDefault()
    // console.log(this)
    const text = this.querySelector('[name=item]').value

    // Prevents empty input
    if(!text) return

    const item = {
        text,
        done: false
    }
    // console.log(item)

    // resets the input form after submission
    this.reset()

    // pushes singular data to items array
    items.push(item)

    // populates the itemList html element with values from items array
    populateList(items, itemsList)

    localStorage.setItem('items', JSON.stringify(items))
}

// takes plates array to loop through
// creates items for platesList element
function populateList (plates = [], platesList) {

    // Fall text when the array is empty
    if (!plates.length) {
        return platesList.innerHTML = "<li>Loading menu...</li>"
    }

    // Showing the list of items when array has items
    platesList.innerHTML = plates.map((plate, i) => {
        return `
            <li>
                <input type="checkbox" data-index='${i}' id="item-${i}" ${ plate.done ? 'checked' : ''}>
                <label for="item-${i}">${plate.text} <button class="delete-single" onclick="deleteItem(${i})">x</button></label>
            </li>
        `
    }).join('')
}

// Toggle the done status of the items
function itemToggle (e) {
    // skip unless the clicked item is an input item
    if (!e.target.matches('input')) return

    const index = e.target.dataset.index

    items[index].done = !items[index].done

    localStorage.setItem('items', JSON.stringify(items))

    // populates the itemList html element with values from items array
    // calling for second time here so it runs for both localStorage and submit button
    populateList(items, itemsList)
}

// To delete all items from the list
function deleteItems() {

    // reseting the array
    items.reset

    // deleting localStorage item
    localStorage.removeItem('items');

    // reloading the browser
    location.reload()
}

// To check all items in the list
function checkAllItems () {
    items.forEach(item => {
        item.done = true
    });
    localStorage.setItem('items', JSON.stringify(items))

    // reloading to make the change take effect
    location.reload()
}

// To uncheck all items in the list
function unCheckAllItems () {
    items.forEach(item => {
        item.done = false
    });
    localStorage.setItem('items', JSON.stringify(items))

    // reloading to make the change take effect
    location.reload()
}

// To delete single item from the list
function deleteItem (item) {

    items.splice(item,1)
    localStorage.setItem('items', JSON.stringify(items))

    // reloading to make the change take effect
    location.reload()
}

// listing to the submit event
addItems.addEventListener('submit', addItem)
itemsList.addEventListener('click', itemToggle)

deleteButton.addEventListener('click', deleteItems)
checkAllButton.addEventListener('click', checkAllItems)
unCheckAllButton.addEventListener('click', unCheckAllItems)

// populates the itemList html element with values from items array
// calling for second time here so it runs for both localStorage and submit button
populateList(items, itemsList)













