var bar = false


function barra(){
  if (bar != true) {
    let div = document.getElementById('barra')
    div.style.transition = '2s'
    div.style.position = 'fixed'
    div.style.right = '0%'
    bar = true
    div = document.getElementById('pontos-menu')
    div.style.transition = '2s'
    div.style.background = 'goldenrod'
 }else{
   bar = false
   let div = document.getElementById('barra')
   div.style.transition = '2s'
   div.style.right = '-20%'
   div = document.getElementById('pontos-menu')
   div.style.transition = '2s'
   div.style.background = 'orange'
 }
}


function enviar() {
  let nome = document.getElementById('nome').value
  let telefone = document.getElementById('telefone').value
  let texto = document.getElementById('produto-det').value
  let produto = document.getElementById('produto-list').value
  let perm = confirm(`Olá ${nome}, podemos te redreciona para o whatsapp?`)
  if (perm) {
    msg = `NOME: ${nome}, TELEFONE: ${telefone}, DETALHES: ${texto}, PRODUTO: ${produto}`.replace(' ', '%20')
    //document.location = 'https://wa.me/5511914718913?text='+msg
    document.location = 'aviso.html'
  }
}