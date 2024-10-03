const button = document.querySelector('#button')

button.addEventListener('click', () => (
    fetch('/post/create', {
        method: 'POST',
        body: JSON.stringify({
            name: 'New post',
            description: 'New post created with request',
            time: '11.09.2001',
            author: 'Tyler Derden',        
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
))