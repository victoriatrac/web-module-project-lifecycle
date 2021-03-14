import React from 'react'
import styled from 'styled-components'

const Cards = styled.div`
    background-color: black;
    color: white;
    width: 90%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2rem;
    margin-bottom: 2rem;
    padding: 2rem;
`

const Card = styled.div`
    width: 30%;
`

const H2 = styled.h2`
    margin-block-start: 0em;
    width: 100%;
`

const Img = styled.img`
    max-width: 20rem;
    width: 100%;
    height: auto;
`

function FollowerCard(props) {
    return(
        <Cards>
            <H2>Followers:</H2>
            {props.followers.map(follower => (
                <Card key={follower.id}>
                    <Img src={follower.avatar_url} />
                    <h3>{follower.login}</h3>
                </Card>
            ))}
        </Cards>
    )
}

export default FollowerCard