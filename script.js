import { Navbar, Actionbar, Card } from "./components.js";
import { pages } from "./pages.js";

customElements.define("dw-navbar", Navbar);
customElements.define("dw-actionbar", Actionbar);
customElements.define("dw-card", Card);

const app = document.getElementById("app");

const clearPage = () => {
  while (app.lastChild) {
    app.removeChild(app.lastChild);
  }
};

const buildLayout = (page) => {
  let menu = document.createElement("dw-navbar");
  menu.setAttribute("activelink", page.menuitems.title);
  menu.render = render;
  app.appendChild(menu);
  let actionbar = document.createElement("dw-actionbar");
  actionbar.render = render;
  app.appendChild(actionbar);
  let wrapper = document.createElement("div");
  wrapper.className = "wrapper";
  return app.appendChild(wrapper);
};

const addContent = async (layout, content) => {
  let wrapper = document.querySelector(".wrapper");
  if (layout == "1col") {
    let container = document.createElement("div");
    container.className = "container";
    wrapper.appendChild(container);
    let row = document.createElement("div");
    row.className = "row";
    row.textContent = content.body;
    container.appendChild(row);
    container.appendChild(document.createElement("dw-card"));
    container.appendChild(document.createElement("dw-card"));
    return container.appendChild(document.createElement("dw-card"));
  }
  if (layout == "2col") {
    let container = document.createElement("div");
    container.className = "container";
    wrapper.appendChild(container);
    let left = document.createElement("div");
    left.className = "col2";
    let right = document.createElement("div");
    right.className = "col2";
    container.appendChild(left);
    container.appendChild(right);
    left.innerHTML = await content.left.body();
    right.innerHTML = await content.right.body();
  }
};

const render = (pageToDisplay) => {
  clearPage();
  let targetPage = pages.filter((item) => item.page === pageToDisplay);
  buildLayout(targetPage[0]);
  addContent(targetPage[0].layout, targetPage[0].content);
};

render("dashboard");
