console.log('V1 : Mon dico anglais')

/*
MON PROGRAMME : 
> Je veux pouvoir donner la définition d'un mot à mes utilisateurs
- Récupérer le mot saisi par l'utilisateur
- Envoyer le mot à l'API ( https://dictionaryapi.dev/ )
- Récupérer la définition du mot
- Afficher la définition du mot
- Ajouter un lecteur pour écouter la prononciation du mot
*/

/*--- Récupérer le mot saisi par l'utilisateur ---*/

let wordToSearch=""

const watchSubmit = ()=>{
    const form = document.querySelector("#form")
    form.addEventListener("submit", (event)=>{
        event.preventDefault()
        const data = new FormData(form)
        wordToSearch =  data.get("search")
        apiCall(wordToSearch)
    })
}



/* --- Envoyer le mot saisi à l'API ---*/
const apiCall = (word)=>{
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then((response)=> response.json())
    .then((data)=>{
        const wordInformations = data[0]
        
    })
}


/* --- Lancement du programme ---*/
watchSubmit()