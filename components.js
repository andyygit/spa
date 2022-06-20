import { pages } from "./pages.js"

class Menu extends HTMLElement {
    constructor() {
        super()
        this.menuItems = pages
    }
    getMenuItems() {
        return this.menuItems.map(item => `<a href="#">${item.menuitems.title}</a>`)
    }
    generateMenu() {
        let menuItems = this.getMenuItems()
        return ''.concat(...menuItems)
    }
    connectedCallback() {
        this.innerHTML = `
                            <div class="navbar">
                                <div class="container">
                                    <nav id="navigation">${this.generateMenu()}</nav>
                                </div>
                            </div>
                            <div class="actionbar">
                                <div class="container">
                                    <nav id="actions"><p></p></nav>
                                </div>
                            </div>
                        `
    }
}

export { Menu }