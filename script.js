//Fetch the Json File
fetch("./actors.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => handleActorList(data));

//Handle the Json file
// Function for handling the json file - it goes trough the array, one object by one and doing the function for every object
function handleActorList(data) {
  data.forEach(showActor);
  popup();
}

function showActor(actor) {
  //Grab the template
  const template = document.querySelector(".template").content;
  //Clone the template
  const templateCopy = template.cloneNode(true);
  //Modify the content
  templateCopy.querySelector(".actorName").textContent = `${actor.fullname}`;
  templateCopy.querySelector(".theFilm").textContent = `${actor.movie}`;
  //Grab parent
  const parent = document.querySelector("main");
  //Append child
  parent.appendChild(templateCopy);
}

function popup() {
  const whiteBox = document.querySelectorAll(".whiteBox");
  console.log(whiteBox);
  whiteBox.forEach((box) => {
    box.addEventListener("mouseenter", hoverState);
    box.addEventListener("mouseleave", hoverState);
  });

  function hoverState() {
    console.log("i am working");
    this.classList.toggle("bigger");
  }
}
