import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'

const routes = [
  {
    path: '/home',
    // exact: true,
    sidebar: () => <div>Home!</div>,
    main: () => <h2>Klik Menu Home!</h2>  
  },
  {
    path: '/inbox',
    sidebar: () => <div>Inbox!</div>,
    main: () => <h2>Klik Menu Inbox!</h2>
  },
  {
    path: '/starred',
    sidebar: () => <div>Starred!</div>,
    main: () => <h2>Klik Menu Starred!</h2>
  },
]

class App extends Component {
 render() {
    return (      
      <Router>
      <div style={{display: 'flex'}}>
          <div style={{
            padding: '10px',
            width: '40%',
            background: '#f0f0f0'
          }}>
            <ul style={{listStyleType: 'none', padding: 0}}>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/inbox'>Inbox</Link></li>
            <li><Link to='/starred'>Starred</Link></li>
            </ul>
          </div>
        
          <div style={{flex:1, padding:'10px'}}>
            {routes.map((route) =>( 
              <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              component={route.main}
              />
            ))}
          </div>
        </div> 
      </Router>
    )
  }
}

export default App;
