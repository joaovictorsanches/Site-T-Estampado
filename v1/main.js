var bar = false

function efeitobarra(sinal) {
  let div = document.getElementById('barra')
  div.style.transition = '3s'
  div.style.right = `${sinal}10%`
}

efeitobarra('-')

function barra(){
  efeitobarra('-')
  if (bar != true) {
    let div = document.getElementById('barra')
    div.style.position = 'fixed'
    div.style.top = '13%'
    div.style.right = '0%'
    bar = true
    div = document.getElementById('pontos-menu')
    div.style.transition = '2s'
    div.style.background = 'goldenrod'
 }else{
   bar = false
   let div = document.getElementById('barra')
   div.style.position = 'relative'
   div = document.getElementById('pontos-menu')
   div.style.transition = '2s'
   div.style.background = 'orange'
 }
}


function enviar() {
  let nome = document.getElementById('name').value
  let op = document.getElementById('produto').value
  
  if (confirm(`Olá ${nome}, podemos ter redreciona para o whatsapp?`)) {
    document.location = `https://wa.me/5511914718913?text=Meu nome é ${nome} Tenho interesse em uma ${op} personalizada.`.replace(' ', '%20')
  }
}