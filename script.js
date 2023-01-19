let button = document.getElementById("enter");
let input = document.getElementById('todoInput');
let ul = document.querySelector("ul");

const createListElement = () => {
  let div = document.createElement('div');
  let li = document.createElement('li');
  let delBtn = document.createElement('button');
  
  div.classList.add('flex');
  delBtn.classList.add('delete');

  ul.appendChild(div);
  div.append(li, delBtn);
  li.appendChild(document.createTextNode(input.value));
  delBtn.appendChild(document.createTextNode("Delete"));

  input.value = "";
};

const deleteListElement = (element) => {
  if(element.target.className === "delete"){
    element.target.parentElement.remove() ;
  };
};

const inputLength = () => {
  return input.value.length
};

const addListAfterClick = () => {
  if( inputLength() > 0 ) {
    createListElement();
  }
}

const addListAfterKeypress = (e) => {
  if( inputLength() > 0 && e.code === "Enter" ) {
    createListElement();
  }
}

const handleUlClick = (element) => {
  doneTask(element);
  deleteListElement(element);
}

const doneTask = (task) => {
  if(task.target.tagName === "LI") {
    task.target.classList.toggle('done');
  };
};

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", handleUlClick);
