function handleLogin() {
    const cpf = document.getElementById("cpf").value;
    const password = document.getElementById("password").value;
  
    if (cpf && password) {
      alert(`CPF: ${cpf}\nSenha: ${password}`);
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  }
  
  function showRecoveryForm() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("recovery-form").style.display = "block";
    document.getElementById("register-form").style.display = "none";
  }
  
  function showRegisterForm() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("recovery-form").style.display = "none";
    document.getElementById("register-form").style.display = "block";
  }
  
  function showLoginForm() {
    document.getElementById("login-form").style.display = "block";
    document.getElementById("recovery-form").style.display = "none";
    document.getElementById("register-form").style.display = "none";
  }
  
  function sendRecoveryCode() {
    const cpf = document.getElementById("recovery-cpf").value;
  
    if (cpf) {
      alert(`Um código de recuperação foi enviado para o CPF: ${cpf}`);
    } else {
      alert("Por favor, digite seu CPF.");
    }
  }
  
  function registerAccount() {
    const name = document.getElementById("register-name").value;
    const cpf = document.getElementById("register-cpf").value;
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;
  
    if (name && cpf && email && password) {
      alert(`Conta criada com sucesso!\nNome: ${name}\nCPF: ${cpf}\nE-mail: ${email}`);
      showLoginForm();
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  }