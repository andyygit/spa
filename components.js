import { pages } from "./pages.js"

class Navbar extends HTMLElement {
    constructor() {
        super()
        this.pages = pages
    }
    getMenuItems() {
        return this.pages.map(item => `<a href="#" ${this.getAttribute('activelink') == item.menuitems.title ? "class='active'" : ""}>${item.menuitems.title}</a>`)
    }
    generateMenu() {
        return ''.concat(...this.getMenuItems())
    }
    connectedCallback() {
        this.innerHTML = `
                        <div class="navbar">
                            <div class="container">
                                <nav id="navigation">${this.generateMenu()}</nav>
                            </div>
                        </div>
                        `
    }
}

class Actionbar extends HTMLElement {
    constructor() {
        super()
        this.pages = pages
        this.activeLink = document.querySelector('#navigation .active').textContent
    }
    getActionItems() {
        let page = this.pages.filter(item => item.menuitems.title == this.activeLink)
        if (page[0].menuitems.actions) {
            return page[0].menuitems.actions.map(item => `<a href="${item[1]}">${item[0]}</a>`)
        }
        return "<p></p>"
    }
    generateActions() {
        return ''.concat(...this.getActionItems())
    }
    connectedCallback() {
        this.innerHTML = `
                        <div class="actionbar">
                            <div class="container">
                                <nav id="actions">${this.generateActions()}</nav>
                            </div>
                        </div>
                        `
    }
}

export { Navbar, Actionbar }