import x from './x.js'
import png from './assets/1.png'

console.log(png)

console.log(x)
const div = document.getElementById('app1')

div.innerHTML = `
    <img src="{{png}}">
`

const button = document.createElement('button')
button.innerHTML = '懒加载'
button.onclick = () => {
    const promise = import('./lazy')
    promise.then((module)=>{
        const fn = module.default
        fn()
    }, ()=> {})
}

div.appendChild(button)