import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    background-color: black;
    color: white;
    width: 50%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2rem;
    padding: 2rem;
`

const H2 = styled.h2`
    margin-block-start: 0em;
`

const A = styled.a`
    color: white;
`

function UserCard(props) {
    return (
        <Card>
            <div>
                <H2>{props.user.login}</H2>
                <img
                    src={props.user.avatar_url}
                    alt={props.user.login}
                />
                <p>{props.user.location}</p>
                <p><A href={props.user.blog}>Website</A></p>
                <p>{props.user.bio}</p>
            </div>
        </Card>
    )
}

export default UserCard