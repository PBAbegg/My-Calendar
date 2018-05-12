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

    splitDate = (e, date) => {
        const dateSplitter = date.toString().split(" ")
        this.setState({dateState: dateSplitter[1]+" "+ dateSplitter[2]+" "+ dateSplitter[3]})
    }

    render() {
        return (
            <Fragment>
                <h1>Date</h1>
                <DatePicker mode="landscape"
                            onChange={ this.splitDate }/>
                <h1>Info</h1>
                <AddToDB eventDate={this.state.dateState}/>
            </Fragment>
        )
    }
}