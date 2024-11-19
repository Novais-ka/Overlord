document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário por padrão

    // Aqui você pode adicionar sua lógica de validação
    const usuario = event.target.usuario.value;
    const senha = event.target.senha.value;

    if (usuario === "Novais123" && senha === "12345678") {
        console.log("Login bem-sucedido! Redirecionando...");
        window.location.href = 'inicio.html';
    } else {
        alert("Usuário ou senha incorretos!"); // Alerta se as credenciais forem inválidas
    }
});