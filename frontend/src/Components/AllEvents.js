import React, { Component, Fragment } from 'react'
import gql from "graphql-tag"
import {client} from '../EndPoint'


export default class extends Component {

    const loadEvents = async (e) => {
        e.preventDefault()
        let getEvents = await client.query({
            query: gql`
                query {
                    events {
                        id
                        date
                        info
                    }
                }
            `
        }).then((result) => {
            return result.data.readEvent
        })

        await console.log("Data: ", getEvents)
        await this.setState({events: getEvents})
        window.location.reload()

    }



    render() {


        return (
            <Fragment>

            </Fragment>
        )
    }
}