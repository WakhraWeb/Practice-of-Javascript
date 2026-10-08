// // const title = document.querySelector("#title");
// // title.textContent = "text is changes of title";
// // const info = document.querySelectorAll(".info");
// // info.forEach((element) => {
// //   element.textContent = "Updated Paragraph";
// // });

// // const box = document.querySelector("#box");
// // box.innerHTML = "<h1>Hello World</h1>";

// //////////////////////////////
// // #card element ko select karein.

// // JS ke zariye us se hidden class remove karein (taake woh screen par nazar aane lage).

// // JS ke zariye us par highlight class add karein.

// // const card = document.querySelector("#card");
// // card.classList.remove("hidden");
// // card.classList.add("highlight");

// // const themeBtn = document.querySelector("#themeBtn");
// // const box = document.querySelector("#box");
// // themeBtn.addEventListener("click", () => {
// //   box.classList.toggle("dark");
// // });
// // const addBtn = document.querySelector("#addBtn");
// // const list = document.querySelector("#list");
// // addBtn.addEventListener("click", () => {
// //   const lii = document.createElement("li");
// //   lii.textContent = "New course";
// //   list.append(lii);
// // });

// // const list = document.querySelector("#list");
// // const delBtn = document.querySelector("#delBtn");
// // delBtn.addEventListener("click", () => {
// //   const item = document.querySelector("#item1");
// //   item.remove();
// // });
// /////////////////////Dynamic Course List App///////////
// const task = document.getElementById("task-input");
// const addBtn = document.getElementById("add-btn");
// const list = document.getElementById("task-list");

// addBtn.addEventListener("click", () => {
//   const newItem = document.createElement("li");
//   const delBtn = document.createElement("Button");
//   list.append(newItem);
//   delBtn.addEventListener("click", (e) => {
//     e.stopPropagation();
//     newItem.remove();
//   });
//   newItem.textContent = task.value;
//   newItem.append(delBtn);
//   newItem.addEventListener("click", () => {
//     newItem.classList.toggle("done");
//   });
//   delBtn.textContent = "Delete";
//   task.value = "";
// });
const inputTask = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const completedBtn = document.getElementById("clear-completed-btn");
const taskList = document.getElementById("task-list");
const classInput = document.getElementsByClassName("input-section");

addBtn.addEventListener("click", () => {
  if (inputTask.value.trim() !== "") {
    const newItem = document.createElement("span");
    newItem.classList.add("task-text");
    const delBtn = document.createElement("Button");
    const outer = document.createElement("li");
    outer.addEventListener("click", () => {
      outer.classList.toggle("done");
    });
    delBtn.innerHTML = "Delete";
    delBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      outer.remove();
    });
    newItem.textContent = inputTask.value;
    outer.append(newItem);
    taskList.append(outer);
    outer.append(delBtn);
    inputTask.value = "";
  }
});
