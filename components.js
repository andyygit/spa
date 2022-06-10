import { menuItems } from './db/menu.js'

class Menu extends HTMLElement {
    constructor() {
        super()
        this.menuItems = menuItems
    }
    getMenuItems() {
        return this.menuItems.map(item => `<a href="#">${item.title}</a>`)
    }
    generateMenu() {
        let menuItems = this.getMenuItems()
        return ''.concat(...menuItems)
    }
    getActionItems() {
        let filteredItem = this.menuItems.filter(item => item.title === 'Inventar')
        return filteredItem.map(item => `<a href="#">${item.actions}</a>`)
    }
    generateActions() {
        let actionItems = this.getActionItems()
        return ''.concat(...actionItems)
    }
    connectedCallback() {
        this.innerHTML = `
                            <div class="navbar">
                                <div class="container">
                                    <nav>${this.generateMenu()}</nav>
                                </div>
                            </div>
                            <div class="actionbar">
                                <div class="container">
                                    <nav>${this.generateActions()}</nav>
                                </div>
                            </div>
                        `
    }
}

export { Menu }