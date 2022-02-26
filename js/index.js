
const idNode = document.querySelector('#id-advice')
const adviceNode = document.querySelector('#body-advice')
const btn = document.querySelector('#button')

const api = 'https://api.adviceslip.com/advice'

let canClick = true

const fetcher = async () => {
    let response = await fetch(api)
    let data = await response.json()
    return data
}

const setData = (data) => {
    idNode.innerHTML = data.id;
    adviceNode.innerHTML = data.advice;
}

const getAdvice = () => fetcher()
    .then(data => setData(data.slip))
    .catch(() => alert('Encountered an error while trying to load advices...'))

const data = getAdvice()

btn.addEventListener('click', () => {
    if (!canClick) {
        setTimeout(() => canClick = !canClick, 2000)
        return alert('Don`t spam please ♥')
    }
    canClick = !canClick
    getAdvice()

})