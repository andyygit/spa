import { pages } from "./pages.js"

class Navbar extends HTMLElement {
  constructor() {
    super()
    this.pages = pages
  }
  getMenuItems() {
    return this.pages.map(
      (item) =>
        `<a href="#" data-target="${item.page}" ${
          this.getAttribute("activelink") == item.menuitems.title
            ? "class='active'"
            : ""
        }>${item.menuitems.title}</a>`
    )
  }
  generateMenu() {
    return "".concat(...this.getMenuItems())
  }
  clickHandler(event) {
    this.render(event.target.dataset.target)
  }
  connectedCallback() {
    this.innerHTML = `
    <div class="navbar">
      <div class="container">
        <nav id="navigation">${this.generateMenu()}</nav>
      </div>
    </div>
    `
    this.addEventListener("click", this.clickHandler)
  }
  disconnectedCallback() {
    this.removeEventListener("click", this.clickHandler)
    // console.log('click handler on menu removed')
  }
}

class Actionbar extends HTMLElement {
  constructor() {
    super()
    this.pages = pages
    this.activeLink = document.querySelector("#navigation .active").textContent
  }
  getActionItems() {
    let page = this.pages.filter(
      (item) => item.menuitems.title == this.activeLink
    )
    if (page[0].menuitems.actions) {
      return page[0].menuitems.actions.map(
        (item) => `<a href="#" data-target="${item[1]}">${item[0]}</a>`
      )
    }
    return "<p></p>"
  }
  generateActions() {
    return "".concat(...this.getActionItems())
  }
  clickHandler(event) {
    this.render(event.target.dataset.target)
  }
  connectedCallback() {
    this.innerHTML = `
    <div class="actionbar">
      <div class="container">
        <nav id="actions">${this.generateActions()}</nav>
      </div>
    </div>
    `
    this.addEventListener("click", this.clickHandler)
  }
  disconnectedCallback() {
    this.removeEventListener("click", this.clickHandler)
    // console.log('click handler on action removed')
  }
}

class Card extends HTMLElement {
  constructor() {
    super()
  }
  connectedCallback() {
    this.innerHTML = `
    <div class="card">
      <div class="card-title">
        card title card title card title
      </div>
      <div class="card-body">
        card body
      </div>
    </div>
    `
  }
  disconnectedCallback() {
    console.log("card removed")
  }
}

export { Navbar, Actionbar, Card }
