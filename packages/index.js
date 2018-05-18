import Button from './button/index.js'
import Input from './input/index.js'
import Container from './container/index.js'
import Header from './header/index.js'
import Aside from './aside/index.js'
import Main from './main/index.js'
import Footer from './footer/index.js'
import Row from './row/index.js'
import Col from './col/index.js'

const Component = [
  Button,
  Input,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Row,
  Col
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
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Row,
  Col
}

export {Button, Input, Container, Header, Aside, Main, Footer, Row, Col}

export default Cs
