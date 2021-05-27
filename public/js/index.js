
document.addEventListener('DOMContentLoaded', () => {
    const btnAutoDisabled = document.querySelector('#btnAutoDisabled')
    const inputAutoDisabled = document.querySelector('#inputAutoDisabled')
    const btnExit = document.querySelector('#btnExit')


    if (inputAutoDisabled) {
        inputAutoDisabled.addEventListener('input', (e) => {
            const name = e.target.value
            if (name === '') btnAutoDisabled.setAttribute('disabled', '')
            else btnAutoDisabled.removeAttribute('disabled')
        })
    }

    if(btnExit) {
        btnExit.addEventListener('click', (e) => {
            Cookies.remove('user_name')
            location.reload()
        })
    }
})