import hljs from 'highlight.js'
import '../css/highlight.css'
let Highlight = {}
Highlight.install = function (Vue, options) {
  Vue.directive('highlight', {
    inserted (el) {
      let blocks = el.querySelectorAll('pre code')
      blocks.forEach((block) => {
        hljs.highlightBlock(block)
      })
    }
  })
}
export default Highlight
