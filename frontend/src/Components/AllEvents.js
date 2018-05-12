import React, { Component, Fragment } from 'react'
import { Query } from "react-apollo"
import gql from "graphql-tag"

export default class extends Component {

    render() {

        return (
        <Fragment>
            <h1>Events</h1>
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