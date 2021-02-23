const body = document.querySelector('.body')
const store = []
const secret = 'happy'

document.addEventListener('keyup', (e) => {
    store.push(e.key)
    // store.splice(-secret.length - 1, store.length - secret.length)
    store.length > secret.length ? store.shift() : ''

    if (store.join('').includes(secret)) {
        cornify_add()
        body.style.background = `hsl(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 100)}%, ${Math.floor(Math.random() * 100)}%)`
    }
    console.log(store)
})