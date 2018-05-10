import React, { Component } from 'react'
import {Route} from 'react-router-dom'

import AllEvents from './AllEvents'
import AddToDB from './AddToDB'
import UpdateDB from './UpdateDB'
import DeleteFromDB from './DeleteFromDB'

export default class extends Component {
    render () {
        return (
            <div>
                <Route exact path='/' component={AllEvents}/>
                <Route exact path='/AddEvent' component={AddToDB}/>
                <Route exact path='/UpdateEvent' component={UpdateDB}/>
                <Route exact path='/DeleteEvent' component={DeleteFromDB}/>
            </div>
        )
    }
}