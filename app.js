const error = document.getElementById('error')
const subMain = document.getElementById('sub-main')
const main = document.getElementById('main')
const cocktelDetails=()=>{
    const inputField = document.getElementById('input-field')
    const inputValue = inputField.value
     inputField.value=''
      if(inputValue===''){
        main.innerHTML=''
        subMain.innerHTML=''
       error.innerText = 'Please search for text'
      }
      else{
        error.innerHTML =''
     subMain.innerHTML =''
          const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputValue}`
           fetch(url)
           .then(res=>res.json())
           .then(data=>singelCocktel(data.drinks))
      }
}
 const singelCocktel =(cocktels)=>{
     for(const cocktel of cocktels){
          console.log(cocktel)
         const div = document.createElement('div')
        //  div.classList.add(col-lg-4)
         div.innerHTML= `
         <div class="card mt-4" style="width: 18rem;">
         <img src="${cocktel.strDrinkThumb}" class="card-img-top" alt="...">
         <div class="card-body">
           <h5 class="card-title">${cocktel.strDrink}</h5>
           <p class="card-text"> ${cocktel.strAlcoholic}.</p>
           <button onclick ="detailId('${cocktel.idDrink}')" class="btn btn-primary">Go somewhere</button>
         </div>
       </div>
         `
         main.appendChild(div)
     }
 }
  const detailId =(Drink)=>{
    console.log(Drink)
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${Drink}`
     fetch(url)
     .then(res=>res.json())
     .then(data=>idDetails(data.drinks[0]))
  }
    
  const idDetails=(id)=>{
     main.innerHTML =''
  //  console.log(id)
   const div = document.createElement('div')
    div.innerHTML= `
    <div class="card mt-4 text-center" style="width: 18rem;">
    <img src="${id.strDrinkThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${id.strCategory}</h5>
      <p class="card-text"> ${id.strInstructions}.</p>
    </div>
  </div>
    `
     subMain.appendChild(div)
  } 