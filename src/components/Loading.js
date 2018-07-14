import React from 'react'
import styled from 'styled-components'
import ReactLoading from 'react-loading'

const Wrapper = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
`

const Loading = () => (
    <Wrapper>
        <ReactLoading 
            type="bubbles" 
            color="#2e7c31" 
            height={200} 
            width={112} 
            />
    </Wrapper>
)
 
export default Loading