const inputQuantity = document.querySelector('.input-quantity')
const btnIncrement = document.querySelector('#increment')
const btnDecrement = document.querySelector('#decrement')


let valueByDefault = parseInt(inputQuantity.value)



btnIncrement.addEventListener('click',() =>{
    valueByDefault += 1
    inputQuantity.value = valueByDefault
})

btnDecrement.addEventListener('click',() =>{

    if(valueByDefault === 1){
        return
    }
    valueByDefault -= 1
    inputQuantity.value = valueByDefault
})


const toggleReviews = document.querySelector('.title-reviews')

const contentReviews = document.querySelector('.text-reviews')

toggleReviews.addEventListener('click', () => {
    contentReviews.classList.toggle('hidden')
});

