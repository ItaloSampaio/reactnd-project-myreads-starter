import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.ol`
    list-style-type: none;
    padding: 0;
    margin: 0;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`
Wrapper.displayName = 'Wrapper'

function BooksGrid(props) {
    return (
        <Wrapper>
            {props.children}
        </Wrapper>
    )
}

BooksGrid.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element)
}

export default BooksGrid