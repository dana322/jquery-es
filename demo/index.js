import $ from '../src'

console.log('js开始了')
$( "div" ).text( "<b>Some</b> new text." );
var div = $( "div" ).css([
  "width", "height", "color", "background-color"
])

console.log(div)

