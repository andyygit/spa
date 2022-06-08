class Menu extends HTMLElement {
    constructor() {
        super()
        this.menuItems = ['Home', 'Infrastructura', 'Inventar']
    }
    getMenuItems() {
        return this.menuItems.map(item => `<a href="#">${item}</a>`)
    }
    generateMenu() {
        let menuItems = this.getMenuItems()
        return ''.concat(...menuItems)
    }
    connectedCallback() {
        this.innerHTML = `<nav id="navbar">${this.generateMenu()}</nav>`
    }
}

export { Menu }