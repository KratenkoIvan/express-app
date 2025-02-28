form.addEventListener('submit', (event) => {
    event.preventDefault()
    fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({
            email: email.value,
            password: password.value
        }),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer: token'
            
        }
    })
})