// imports
import { pages } from './pages.js'
import { Menu } from './components.js'
// end imports

// init components
customElements.define('dw-menu', Menu)
// end init components

// vars
const app = document.getElementById('app')
// end vars

// dom manipulation
const clearPage = () => {
    while (app.firstChild) {
        app.removeChild(app.firstChild)
    }
}
const buildLayout = layout => {
    app.appendChild(document.createElement('dw-menu'))
    if (layout === "default") {
        let wrapper = document.createElement('div')
        wrapper.className = 'wrapper'
        // console.log('buildLayout ran')
        return app.appendChild(wrapper)
    }
}
const addContent = (type, content) => {
    let wrapper = document.querySelector('.wrapper')
    if (type === '1col') {
        let row = document.createElement('div')
        row.className = 'row'
        wrapper.appendChild(row)
        row.appendChild(document.createElement('dw-hero'))
    }
    if (type === '2col') {
        let left = document.createElement('div')
        left.className = 'col2'
        wrapper.appendChild(left)
        left.textContent = content.left.body
        let right = document.createElement('div')
        right.className = 'col2'
        wrapper.appendChild(right)
        right.textContent = content.right.body
    }
    // console.log('addContent ran')
}
const render = pageToDisplay => {
    clearPage()
    let targetPage = pages.filter(item => item.page === pageToDisplay)
    buildLayout(targetPage[0].layout)
    addContent(targetPage[0].type, targetPage[0].content)
    // console.log('render ran')
}
// end dom manipulation

// init page
render('home')