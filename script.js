let clicked = false;

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
  colors();
  data.forEach(info);
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
    if (clicked == true) {
      this.classList.remove("bigger");
      clicked = false;
    }
    this.classList.toggle("bigger");
  }
}

function colors() {
  const x = document.querySelectorAll(".theFilm");
  console.log(x);
  const y = x.forEach((z) => {
    console.log(z.innerHTML);
    const parent = z.parentElement;

    if (z.innerHTML == "Pulp Fiction") {
      console.log("This is Pulp Ficiton");
      console.log(parent);
      parent.style.borderLeft = "2px solid red";
    }

    if (z.innerHTML == "Goodfellas") {
      console.log("This is Goodfellas");
      console.log(parent);
      parent.style.borderLeft = "2px solid black";
    }

    if (z.innerHTML == "Inception") {
      console.log("This is Goodfellas");
      console.log(parent);
      parent.style.borderLeft = "2px solid yellow";
    }
  });
}

function info(data) {
  console.log("info function works");
  const whiteBox = document.querySelectorAll(".whiteBox");
  whiteBox.forEach((thebox) => {
    thebox.addEventListener("click", showInfo);
    return data;
  });
}

function showInfo(data) {
  clicked = true;
  console.log(clicked);
  console.log("the item was clicked");
  console.log(this);
  console.log(this.innerHTML);
  this.innerHTML = data.description;
}
