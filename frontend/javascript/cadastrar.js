document.getElementById('registerForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    fetch('http://localhost:8000/cadastrar', {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        alert(data.mensagem);
        if (!data.erro) {
            e.target.reset(); // Limpar o formulário após o cadastro bem-sucedido
        }
    });
});