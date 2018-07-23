import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.ol`
    list-style-type: none;
    padding: 0px;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
`
Wrapper.displayName = 'Wrapper'

const BooksGrid = props => (
    <Wrapper>
        {props.children}
    </Wrapper>
)

BooksGrid.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element
    ])
}

export default BooksGrid