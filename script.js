  function enviarWhatsApp() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    const texto = `Olá, meu nome é ${nome}%0AEmail: ${email}%0AMensagem: ${mensagem}`;

    // Substitua o número abaixo pelo seu número do WhatsApp, no formato internacional
    const numero = '5531988040607'; // Exemplo com DDD 31

    window.open(`https://wa.me/${numero}?text=${texto}`, '_blank');
    setTimeout(() => {
      window.location.href = "agradecimento.html";
    }, 2000);
  }
