import React, { Component, Fragment } from 'react'
import gql from 'graphql-tag'
import DatePicker from 'material-ui/DatePicker'

import { client } from '../EndPoint'

export default class extends Component {
    state = { date: '', info: '' }

    onFormSubmitted = async (e) => {
        e.preventDefault()
        alert("Updated")
        const updateDataBase = async () => {
            let changeEvent = await client.mutate({
                mutation: gql`
                    mutation{
                        updateEvent(
                            data: {
                                info: "${this.state.Event}"
                            },
                            where: {
                                date: "${this.state.dateState}"
                            }
                        ){
                            date
                            info
                        }
                    }
                `
            }).then((result) => {
                return result.data.updateEvent
            })

            await console.log("Data: ", changeEvent)
            await this.setState({Event: ''})
            window.location.reload()
        }
        updateDataBase()
    }

    splitDate = (e, date) => {
        const dateSplitter = date.toString().split(" ")
        this.setState({dateState: dateSplitter[1]+" "+ dateSplitter[2]+" "+ dateSplitter[3]})
    }

    render() {

        return (
            <div>
                <h1>Date</h1>
                <DatePicker mode="landscape"
                            onChange={ this.splitDate }/>
                <h1>Info</h1>
                <textarea rows="30" cols="80" value={this.state.Event}
                          onChange={(e) => this.setState({Event: e.target.value})}>
                </textarea>
                <br/> <br/>
                <button onClick={ this.onFormSubmitted }> Update</button>
            </div>
        )
    }
}