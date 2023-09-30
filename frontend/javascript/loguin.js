document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    fetch('http://localhost:8000/login', {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        const error = document.getElementById('error');
        error.textContent = data.mensagem;
        if (!data.erro) {
            localStorage.setItem('token', data.token); // Armazenar o token em localStorage
            error.textContent = ''; // Limpar mensagem de erro
        }
    });
});