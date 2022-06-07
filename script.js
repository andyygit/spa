import { pages } from './pages.js'

const app = document.getElementById('app')

const clearPage = () => {
    while (app.firstChild) {
        app.removeChild(app.firstChild)
    }
}
const buildLayout = (layout) => {
    if (layout === "default") {
        let wrapper = document.createElement('div')
        wrapper.className = 'wrapper'
        console.log('buildLayout ran')
        return app.appendChild(wrapper)
    }
}
const addContent = (type, content) => {
    let wrapper = document.querySelector('.wrapper')
    if (type === '1col') {
        let container = document.createElement('div')
        container.className = 'container'
        wrapper.appendChild(container)
        container.textContent = content.body
    }
    if (type === '2col') {
        let left = document.createElement('div')
        left.className = 'left'
        wrapper.appendChild(left)
        left.textContent = content.left.body
        let right = document.createElement('div')
        right.className = 'right'
        wrapper.appendChild(right)
        right.textContent = content.right.body
    }
    console.log('addContent ran')
}
const render = pageToDisplay => {
    clearPage()
    let targetPage = pages.filter(item => item.page === pageToDisplay)
    buildLayout(targetPage[0].layout)
    addContent(targetPage[0].type, targetPage[0].content)
    console.log('render ran')
}

render('home')