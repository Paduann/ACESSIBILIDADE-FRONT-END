var campoEmail = document.querySelector('#email')
var sugestao = document.querySelector('#sugestao')

var domains = ['gmail.com', 'aol.com', 'outlook.com', 'alura.com.br'];
var secondLevelDomains = ['hotmail']
var topLevelDomains = ["com", "net", "org"];

var superStringDistance = function(string1, string2) {
  // a string distance algorithm of your choosing
}

campoEmail.addEventListener('blur', function() {
    Mailcheck.run({
    email: campoEmail.value,
    domains: domains,                       // optional
    topLevelDomains: topLevelDomains,       // optional
    secondLevelDomains: secondLevelDomains, // optional
    distanceFunction: superStringDistance,  // optional
    suggested: function(suggestion) {
        sugestao.style.display = 'inline-block';
        sugestao.textContent = 'Você quis dizer: ' + suggestion.full + ' ?';
        sugestao.parentNode.classList.add('contatoCampo--erro');
        campoEmail.classList.add('contatoCampo--validouErro');
        sugestao.setAttribute('tabindex', '0');
        sugestao.setAttribute('role', 'alert');
    }
    });
});
