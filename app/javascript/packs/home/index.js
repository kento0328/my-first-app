document.addEventListener("DOMContentLoaded", () => {
    const node = document.getElementById("homeIndex");
    const initialData = JSON.parse(node.getAttribute("data"));
    console.log(initialData);
  });