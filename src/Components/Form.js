import React from 'react'
import './Form.css'
import Navigation from './Navigation'
import Entries from './Entries'
import Heading from './Heading'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Table from './table'

function Form() {
  return (
    <>
      <div className='Form_Main'>
        <div className='Form'>
          <Heading />
          <div className='Form_Mid'>
            <Router>
              <Navigation />
              <Switch>
                <Route exact path='/' component={Entries}></Route>
                <Route path="/table" component={Table}></Route>
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    </>
  )
}

export default Form