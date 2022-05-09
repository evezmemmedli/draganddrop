const draggableElements = document.querySelectorAll(".task");
const containers = document.querySelectorAll(".todo-list");

draggableElements.forEach((element) => {
  element.addEventListener("dragstart", (e) => {
    e.target.classList.add("drag-item");
  });
});

containers.forEach((container) => {
  container.addEventListener("dragenter", (e) => {
    e.preventDefault();
    const dragItem = document.querySelector(".drag-item");
    container.appendChild(dragItem);
    dragItem.classList.remove('.drag-item')
  });

  container.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  container.addEventListener("dragleave", () => {
    e.preventDefault();
  });
});
