import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import {Tabs, Tab} from 'material-ui/Tabs'

import AllEvents from './AllEvents'
import AddToDB from './AddToDB'
import Event from './Event'
import UpdateDB from './UpdateDB'
import DeleteFromDB from './DeleteFromDB'

export default class extends Component {
    render () {
        return (
            <div>
                <Route exact path='/' component={Home}/>
                <Route exact path='/AddEvent' component={AddToDB}/>
                <Route exact path='/UpdateEvent' component={UpdateDB}/>
                <Route exact path='/DeleteEvent' component={DeleteFromDB}/>
            </div>
        )
    }
}

const Home = () =>{
    return(
        <Tabs>
            <Tab label="All Events" value="/">
                <AllEvents/>
            </Tab>
            <Tab label="Add Event" value="/AddEvent">
                <Event/>
            </Tab>
            <Tab label="Update Event" value="/UpdateEvent">
                <UpdateDB/>
            </Tab>
            <Tab label="Delete Event" value="/DeleteEvent">
                <DeleteFromDB/>
            </Tab>
        </Tabs>
    )
}