function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById("imagem")
    var data = new Date()
    //var hora = data.getHours()

    hora = 16
   

    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12){
        //Bom dia
        img.scr = 'manha.png'
        document.body.style.backgroud = '#fcb965'

    }else if (hora >= 12 && hora <= 18) {
        //Boa tarde!
        img.scr = 'tarde.png'
        document.body.style.background = '#ff6b00'

    } else {
        //Boa noite
        img.scr = 'noite.png'
        document.body.style.background = '#463758'
    }
}