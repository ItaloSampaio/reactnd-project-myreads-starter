import React from 'react'
import styled from 'styled-components'

const Bar = styled.div`
    padding: 10px 0;
    background: #2e7c31;
    text-align: center;
`
Bar.displayName = 'Bar'

const Title = styled.h1`
    font-weight: 400;
    margin: 0;
    color: white;
`
Title.displayName = 'Title'

export default function AppBar({ children }) {
    return (
        <Bar>
            <Title>MyReads</Title>
        </Bar>
    )
}