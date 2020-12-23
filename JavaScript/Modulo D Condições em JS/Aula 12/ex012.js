var agora = new Date()
var hora = agora.getHours()

console.log(`Agora sao ${hora} `)

if (hora < 12 ){
    console.log('Boom dia')
}else if (hora <= 18) {
    console.log('Boa tarde')
}else {
    console.log('Ba noite')
}
