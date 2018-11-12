import React from 'react'
import { render } from 'react-dom'

import Home from './containers/Home'

import { injectGlobal } from 'emotion'

injectGlobal`
html{
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
body{
  background-color: #183956 ;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
*:focus {
    outline: 0;
}`

// Create main App component
class App extends React.Component {
  render () {
    return (
      <div>
        <Home />
      </div>
    )
  }
}

// Create your own root div in the body element before rendering into it
let root = document.createElement('div')

// Add id 'root' and append the div to body element
root.id = 'root'
document.body.appendChild(root)

// Render the application into the DOM, the div inside index.html
render(<App />, document.getElementById('root'))
