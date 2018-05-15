import Button from './button/button'
import Input from './input/input'

const Component = [
  Button,
  Input
]

Component.forEach(item => {
  item.install = function (Vue) {
    Vue.component(item.name, item)
  }
})

const install = function (Vue) {
  Component.map(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const Cs = {
  install,
  Button,
  Input
}

export {Button, Input}

export default Cs
