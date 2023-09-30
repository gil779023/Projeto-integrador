document.getElementById('listUsers').addEventListener('click', () => {
    fetch('http://localhost:8000/', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })
    .then(response => response.json())
    .then(data => {
        const userList = document.getElementById('userList');
        userList.innerHTML = '';
        if (data.erro === false) {
            data.users.forEach(user => {
                const userItem = document.createElement('div');
                userItem.innerHTML = `ID: ${user.id}, Nome: ${user.name}, E-mail: ${user.email}`;
                userList.appendChild(userItem);
            });
        } else {
            userList.innerHTML = 'Erro ao listar usuários.';
        }
    });
});
