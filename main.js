//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)
document.querySelector('button').addEventListener('click',clearLi)
function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h3').innerText=data.classes[0].name
        data.subclasses.forEach( obj=> {
            const li = document.createElement('li')
            li.textContent = obj.name
            document.querySelector('ul').appendChild(li)
        })
            
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
function clearLi(){
    document.querySelector('ul').removeChild('')
}
