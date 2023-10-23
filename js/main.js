"use stricts";
//hämta DOM element
const newTodoInput = document.getElementById("newtodo"); //input textfältet för nya uppgifter
const addButton = document.getElementById("newtodobutton"); //knapp som lägger till uppgifter
const todoList = document.getElementById("todolist"); //listan som visar uppgifterna
const clearButton = document.getElementById("clearbutton"); //knapp som rensar listan
const message = document.getElementById("message"); //elementet för meddelanden


//lägg till event listeners som lyssnar efter handlingar
addButton.addEventListener("click", addItem); //anropa addItem funktionen när "Lägg till" knappen klickas
newTodoInput.addEventListener("input", checkItemText); //anropa checkItemText funktionen när det skrivs i textfältet
clearButton.addEventListener("click", clearStorage); //anropa clearStorage funktionen när "Rensa" knappen klickas


//funktion som lägger till en uppgift/todo/uppdrag
function addItem() {
    //hämta text som skrivits in i textfältet
    const text = newTodoInput.value;
  
    //skapa en ny article  (en article är en uppgift)
    const newItem = document.createElement("article");
  
    //fyll elementet med texten
    newItem.innerText = text;
  
    //lägg till en klick-händelse för att ta bort uppgiften
    newItem.addEventListener("click", deleteItem);
  
    //lägg till uppgiften i listan
    todoList.appendChild(newItem); 
  
    //spara uppgiften i webb storage
    storeItem(text);
  
    //rensa textfältet och eventuella meddelanden
    newTodoInput.value = "";
    message.innerText = "";
  
  }