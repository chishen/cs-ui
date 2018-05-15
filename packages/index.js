import Button from './button/index'
import Input from './input/index'
import Container from './container/index'

const Component = [
  Button,
  Input,
  Container
]

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
  Input,
  Container
}

export {Button, Input, Container}

export default Cs
