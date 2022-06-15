// imports
import { Menu } from './components.js'
import { pages } from './pages.js'
// end imports

// init components
customElements.define('dw-menu', Menu)
// end init components

// vars
const app = document.getElementById('app')
// end vars

// dom manipulation
const clearPage = () => {
    while (app.lastChild) {
        app.removeChild(app.lastChild)
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
        let container = document.createElement('div')
        container.className = 'container'
        wrapper.appendChild(container)
        let row = document.createElement('div')
        row.className = 'row'
        container.appendChild(row)
        row.textContent = content.body
    }
    if (type === '2col') {
        let container = document.createElement('div')
        container.className = 'container d-flex'
        wrapper.appendChild(container)
        let left = document.createElement('div')
        left.className = 'col2'
        container.appendChild(left)
        left.textContent = content.left.body
        let right = document.createElement('div')
        right.className = 'col2'
        container.appendChild(right)
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

// attach listeners
const actionListeners = () => {
    let renderedMenuItems = Array.from(document.querySelector('#navigation').children)
    renderedMenuItems.forEach(item => {
        item.addEventListener('click', e => {
            Array.from(e.target.parentElement.children).forEach(i => {
                if (i.classList.contains('active')) i.classList.remove('active')
            })
            e.target.classList.add('active')
            let actionsParent = pages.filter(item => item.menuitems.title === e.target.textContent)
            let actionsToDisplay = actionsParent[0].menuitems.actions ? actionsParent[0].menuitems.actions : '<p>--------------</p>'
            if (Array.isArray(actionsToDisplay)) {
                let outputActions = actionsToDisplay.map(item => `<a href="#">${item}</a>`)
                document.querySelector('#actions').innerHTML = ''.concat(...outputActions)
            } else {
                document.querySelector('#actions').innerHTML = actionsToDisplay
            }
        })
    })
}
// end attach listeners

// init page
render('dashboard')
actionListeners()