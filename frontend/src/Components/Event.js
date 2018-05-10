import React, { Component, Fragment } from 'react'
import DatePicker from 'material-ui/DatePicker'

import AddToDB from './AddToDB'


export default class extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dateState: ''
        }
    }
    render() {
        return (
            <Fragment>
                <DatePicker mode="landscape"
                            onChange={(e, date) => this.setState({dateState: date})}/>
                <AddToDB eventDate={this.state.dateState}/>
            </Fragment>
        )
    }
}