import React, { Component, Fragment } from 'react'
import { Query } from "react-apollo"
import gql from "graphql-tag"
import {client} from '../EndPoint'


export default class extends Component {

    // loadEvents = async () => {
    //     let getEvents = await client.query({
    //         query: gql`
    //             query {
    //                 events {
    //                     id
    //                     date
    //                     info
    //                 }
    //             }
    //         `
    //     }).then((result) => {
    //         return result.data.readEvent
    //     })
    //
    //     await console.log("Data: ", getEvents)
    //     await this.setState({events: getEvents})
    //     window.location.reload()
    //
    // }
    //


    render() {


        return (
        <Fragment>
            <p>Events</p>
            <Query
                query={gql`
                        {
                            events {
                                id
                                date
                                info
                            }
                        }
                    `}
            >
                {({ loading, error, data }) => {
                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>Error :(</p>;

                    return data.events.map(({ id, date, info }) => (
                        <div key={id}>
                            <p>{`${date}`}</p>
                            <p>{`${info}`}</p>
                        </div>
                    ));
                }}
            </Query>
        </Fragment>
        )
    }
}