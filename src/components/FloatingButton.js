import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${props => props.diameter}px;
    height: ${props => props.diameter}px;
    border-radius: 50%;
    background-color: ${props => props.backgroundColor};
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
        transform: scale(1.1);
    }
`
Wrapper.displayName = 'Wrapper'

const IconWrapper = styled.div`
    transform: rotateZ(${props => props.rotation}deg);
    transition: transform 0.3s;
`
IconWrapper.displayName = 'IconWrapper'

const FloatingButton = ({iconName, iconColor, iconRotation, children, ...restProps}) => (
    <Wrapper {...restProps}>
        <IconWrapper rotation={iconRotation}>
            <FontAwesomeIcon 
                icon={iconName} 
                color={iconColor}
                />
        </IconWrapper>
        {children}
    </Wrapper>
)

FloatingButton.defaultProps = {
    diameter: 50,
    iconName: 'caret-down',
    iconColor: 'white',
    iconRotation: 0,
    backgroundColor: 'black'
}

FloatingButton.propTypes = {
    iconName: PropTypes.string,
    iconColor: PropTypes.string,
    iconRotation: PropTypes.number, 
    diameter: PropTypes.number,
    backgroundColor: PropTypes.string
}

export default FloatingButton