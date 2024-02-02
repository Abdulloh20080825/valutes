"use strict"

const uzs = document.querySelector('#uzs')
const usd = document.querySelector('#usd')
const eur = document.querySelector('#eur')
const cny = document.querySelector('#cny')

uzs.addEventListener('input', (event) =>{
     const request = new XMLHttpRequest()

     request.open('GET', 'json/current.json')
     request.setRequestHeader('Content-Type', 'application/json; charset=utf-8')
     request.send()

     request.addEventListener('load', () => {
          if(request.status === 200){
               console.log(request.response)
               const data = JSON.parse(request.response)
               usd.value = (+uzs.value / data.current.usd).toFixed(2)
               eur.value = (+uzs.value / data.current.eur).toFixed(2)
               cny.value = (+uzs.value / data.current.cny).toFixed(2)
          }else {
               usd.value = 'Something went wrong'
          }
     })
})   
