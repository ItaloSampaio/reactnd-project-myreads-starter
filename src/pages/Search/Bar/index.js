import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import CloseButton from './CloseButton'

const Wrapper = styled.div`
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 5;
    display: flex;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 0 6px rgba(0,0,0,0.23);
`
Wrapper.displayName = 'Wrapper'

const InputWrapper = styled.div`
    flex: 1;
    background: #e9e;
`

const Input = styled.input`
    width: 100%;
    padding: 15px 10px;
    font-size: 1.25em;
    border: none;
    outline: none;
`

function Bar(props) {
    return (
        <Wrapper>
            <CloseButton onClick={props.onCloseButtonClick}>Close</CloseButton>
            <InputWrapper>
                <Input 
                    type="text" 
                    placeholder="Search by title or author"
                    />
            </InputWrapper>
        </Wrapper>
    )
}

Bar.propTypes = {
    onCloseButtonClick: PropTypes.func.isRequired
}

export default Bar
