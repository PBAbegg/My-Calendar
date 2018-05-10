import React, {Component, Fragment} from 'react'
import gql from "graphql-tag"
import {client} from '../EndPoint'


export default class extends Component {
    state = {Event: ''}


    onFormSubmitted = async (e) => {
        e.preventDefault()
        alert("submitted")
        const addToDataBase = async () => {
            let makeEvent = await client.mutate({
                mutation: gql`
                    mutation{
                        createEvent(
                            data: { 
                                info: "${this.state.Event}"
                                date: "${this.props.eventDate}"
                            }
                        ){
                            id
                            info
                        }
                    }
                `
            }).then((result) => {
                return result.data.createEvent
            })

            await console.log("Data: ", makeEvent)
            await this.setState({Event: ''})
            window.location.reload()
        }
        addToDataBase()
    }

    render() {

        return (
            <Fragment>
                <form onSubmit={this.onFormSubmitted}>
                    <textarea rows="30" cols="80" value={this.state.Event}
                              onChange={(e) => this.setState({Event: e.target.value})}></textarea>
                    <button className="gralInput" type="submit"> Submit </button>
                </form>
            </Fragment>
        )
    }
}
