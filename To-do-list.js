const form = document.getElementById("New-task-from");
const taskList = document.getElementById("tasks");
form.addEventListener("submit", function (e) {
  e.preventDefault();
});
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
const secform = document.getElementById("submit-btn");
secform.addEventListener("click", function (event) {
  event.preventDefault();

  const title = document.getElementById("title-input");
  const description = document.getElementById("description-input");
  const calendar = document.getElementById("Cleander");
  // const taskList = document.getElementById('task-list');

  document.getElementById("submit-btn").addEventListener("click", handleSubmit);

  function handleSubmit(event) {
    event.preventDefault();

    const usepasd = {
      name: title.value,
      subject: description.value,
      date: calendar.value,
    };

    if (usepasd.name !== "" && usepasd.subject !== "" && usepasd.date !== "") {
      const newTaskDiv = document.createElement("div");
      newTaskDiv.classList.add("task");
      const taskContentDiv = document.createElement("div");
      taskContentDiv.classList.add("content");

      const taskText = document.createElement("div");
      const taskText1 = document.createElement("div");
      const taskText2 = document.createElement("div");
      const taskText3 = document.createElement("div");
      let titleNode = document.createTextNode(` ${usepasd.name}`);
      let DateNode = document.createTextNode(` ${usepasd.date}`);
      let TextNode = document.createTextNode(` ${usepasd.subject}`);
      taskText1.appendChild(titleNode);
      taskText2.appendChild(DateNode);
      taskText3.appendChild(TextNode);
      taskText.appendChild(taskText1);
      taskText.appendChild(taskText2);
      taskText.appendChild(taskText3);
      taskContentDiv.appendChild(taskText);
      newTaskDiv.appendChild(taskContentDiv);

      const taskActionsDiv = document.createElement("div");
      taskActionsDiv.classList.add("actions");

      newTaskDiv.appendChild(taskActionsDiv);
      taskList.appendChild(newTaskDiv);
      closeModal();
    }

    title.value = "";
    description.value = "";
    calendar.value = "";
  }
});

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");

// close the modal when the close button and overlay is clicked
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// close modal when the Esc key is pressed
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// open modal function
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
// open modal event
openModalBtn.addEventListener("click", openModal);
