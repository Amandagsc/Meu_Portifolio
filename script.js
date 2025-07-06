document.getElementById('form-contato').addEventListener('submit', function (event) {
  event.preventDefault(); // Bloqueia o envio normal

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const mensagem = document.getElementById('mensagem').value;

  const texto = `Olá, meu nome é ${nome}%0AEmail: ${email}%0AMensagem: ${mensagem}`;
  const numero = '5531988040607'; // Seu WhatsApp com DDI

  // Abre o WhatsApp com a mensagem
  window.open(`https://wa.me/${numero}?text=${texto}`, '_blank');
});
