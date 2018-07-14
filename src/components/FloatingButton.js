import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
    display: block;
    width: ${props => props.diameter}px;
    height: ${props => props.diameter}px;
    border-radius: 50%;
    background: ${props => props.backgroundColor};
    background-image: url(${props => props.iconSource});
    background-repeat: no-repeat;
    background-position: center;
    background-size: ${props => props.iconSize}px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    font-size: 0;
    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
        transform: scale(1.1);
    }
`
Wrapper.displayName = 'Wrapper'

const FloatingButton = props => (
    <Wrapper {...props} />
)

FloatingButton.defaultProps = {
    diameter: 50,
    iconSize: 28,
    backgroundColor: '#2e7d32'
}

FloatingButton.propTypes = {
    iconSource: PropTypes.string.isRequired,
    diameter: PropTypes.number.isRequired,
    iconSize: PropTypes.number.isRequired,
    backgroundColor: PropTypes.string.isRequired
}

export default FloatingButton