document.addEventListener('DOMContentLoaded',function () {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementsById ('email');
    const passwordInput = document.getElementById('password');
 
    // Validação do Formulário
    loginForm.addEventListener('submit',function (event) { 
        event.preventDefault();

        // Validação básica
        if (ValidateForm()) {
            // Simulação de Login bem-secedido
            alert('Login realizado com sucesso!');
            // Aqui você normalmente faria uma requisição para o servidor 
            // loginForm.submit();
        }
    });

    // Validação em tempo real 
    emailInput.addEventListener('blur, validateEmail');
    passwordInput.addEventListener('blur', validatePassword);

    function ValidateForm() {
        const isEmailValid = ValidateEmail();
        const isPasswordValid = validatePassword();

        return isEmailValid && isPasswordValid;
    }

    function ValidateEmail() {
        const email = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === '') {
            showError (emailInput,'E-mail é obrigatório');
            return false;
        } else if (emailRegex.test(email)) {
            showError (emailInput, 'E-mail Inválido');
            return false;
        } else {
            showSucess(emailInput);
            return true;
        }
    }



