var campos = [
     dataElement = document.querySelector('#data'),
     quantElement = document.querySelector('#quantidade'),
     valorElement = document.querySelector('#valor')

]
var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function(event){
    event.preventDefault()
    var trElement = document.createElement('tr')
    

    campos.forEach(function(conteudo){
        var tdElement = document.createElement('td')
        tdElement.innerText = conteudo.value
        trElement.appendChild(tdElement)
    })
    var tdVolum = document.createElement('td')
    tdVolum.textContent = campos[1].value*campos[2].value
    trElement.appendChild(tdVolum)
    tbody.appendChild(trElement)


    campos[0].value = ''
    campos[1].value = '0'
    campos[2].value = '0'

    campos[0].focus()
   
})
