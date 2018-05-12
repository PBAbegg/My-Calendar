import React, { Component, Fragment } from 'react'
import gql from 'graphql-tag'
import DatePicker from 'material-ui/DatePicker'

import { client } from '../EndPoint'

export default class extends Component {
    state = { date: '', info: '' }

    onFormSubmitted = async (e) => {
        e.preventDefault()
        alert("Deleted")
        const deleteFromDataBase = async () => {
            let changeEvent = await client.mutate({
                mutation: gql`
                    mutation{
                        deleteEvent(
                            where: {
                                date: "${this.state.dateState}"
                            }
                        ){
                            date
                        }
                    }
                `
            }).then((result) => {
                return result.data.deleteEvent
            })

            await console.log("Data: ", changeEvent)
            await this.setState({Event: ''})
            window.location.reload()
        }
        deleteFromDataBase()
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
                <br/> <br/>
                <button onClick={ this.onFormSubmitted }> Delete</button>
            </div>
        )
    }
}