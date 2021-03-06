import { Navbar, Actionbar } from './components.js'
import { pages } from './pages.js'

customElements.define('dw-navbar', Navbar)
customElements.define('dw-actionbar', Actionbar)

const app = document.getElementById('app')

const clearPage = () => {
    while (app.lastChild) {
        app.removeChild(app.lastChild)
    }
}

const buildLayout = page => {
    let menu = document.createElement('dw-navbar')
    menu.setAttribute('activelink', page.menuitems.title)
    app.appendChild(menu)
    // let menuItems = document.querySelector('#navigation').children
    // Array.from(menuItems).forEach(item => {
    //     if (item.classList.contains('active')) {
    //         item.classList.remove('active')
    //     }
    //     if (item.textContent == page.menuitems.title) {
    //         item.classList.add('active')
    //     }
    // })
    let actionbar = document.createElement('dw-actionbar')
    app.appendChild(actionbar)
    let wrapper = document.createElement('div')
    wrapper.className = 'wrapper'
    return app.appendChild(wrapper)
}

const addContent = (layout, content) => {
    let wrapper = document.querySelector('.wrapper')
    if (layout == '1col') {
        let container = document.createElement('div')
        container.className = 'container'
        wrapper.appendChild(container)
        let row = document.createElement('div')
        row.className = 'row'
        row.textContent = content.body
        return container.appendChild(row)
    }
    if (layout == '2col') {
        let container = document.createElement('div')
        container.className = 'container d-flex'
        wrapper.appendChild(container)
        let left = document.createElement('div')
        left.className = 'col2'
        left.innerHTML = `<div class='row'>${content.left.body}</div>`
        container.appendChild(left)
        let right = document.createElement('div')
        right.className = 'col2'
        right.innerHTML = `<div class='row'>${content.right.body}</div>`
        return container.appendChild(right)
    }
}

const render = pageToDisplay => {
    clearPage()
    let targetPage = pages.filter(item => item.page === pageToDisplay)
    buildLayout(targetPage[0])
    addContent(targetPage[0].layout, targetPage[0].content)
}

render('inventar')