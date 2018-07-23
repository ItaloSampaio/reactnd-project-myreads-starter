import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Motion, spring } from 'react-motion'

import FloatingButton from '../FloatingButton'

const Wrapper = styled.div`
    margin: 3px 0;    
    position: relative;
    display: flex;
    align-items: center;
`
Wrapper.displayName = 'Wrapper'

const Button = styled(FloatingButton)`
    width: 32px;
    height: 32px;
    background-color: ${props => props.selected ? 'white' : '#8957af'};
    transition: transform 0.3s, opacity 0.3s;
    transform: scale(${props => props.visible ? 1 : 0.2});
    opacity: ${props => props.visible ? 1 : 0};
    transition-delay: ${props => props.transitionDelay}s;
    z-index: 1;

    &:hover {
        transition-delay: 0s;
    }
`
Button.displayName = 'Button'

const Label = styled.div`
    position: absolute;
    left: 20px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    color: #8957af;
    display: flex;
    align-items: center;
    white-space: nowrap;
    padding: 0px 10px;
    z-index: 0;
    text-transform: lowercase;
    ${props => !props.visible && 
    'display: none;'
    }

`
Label.displayName = 'Label'

export default class OptionButton extends React.Component {

    static defaultProps = {
        visible: PropTypes.bool.isRequired,
        selected: PropTypes.bool.isRequired,
        iconName: PropTypes.bool.isRequired,
        iconColor: PropTypes.bool.isRequired,
        transitionDelay: PropTypes.number.isRequired,
        label: PropTypes.bool.isRequired,
        onClick: PropTypes.func.isRequired,
    }

    state = {
        isHighlighted: false
    }

    render() {
        const { visible, selected, iconName, iconColor, transitionDelay, label, onClick } = this.props

        return (
            <Wrapper>
                <Button
                    visible={visible}
                    selected={selected}
                    iconName={iconName}
                    iconColor={iconColor}
                    transitionDelay={transitionDelay}
                    onMouseEnter={this.handleMouseEnter}
                    onMouseLeave={this.handleMouseLeave}
                    onClick={onClick}>
                </Button>
                <Motion 
                    style={this.getLabelAnimatedStyle(this.state.isHighlighted)}
                    onRest={this.hideLabel}>
                    {({ x, opacity }) =>
                    <Label
                        style={{ transform: `translateX(${x}px)`, opacity }}
                        visible={this.state.isLabelVisible}>
                        {label}
                    </Label>
                    }
                </Motion>
            </Wrapper>
        )
    }

    getLabelAnimatedStyle = isHighlighted => {
        return isHighlighted 
            ? { x: spring(20), opacity: spring(1) } 
            : { x: spring(0), opacity: spring(0) }
    }

    handleMouseEnter = () => {
        this.setState({ isHighlighted: true, isLabelVisible: true })
    }

    handleMouseLeave = () => {
        this.setState({ isHighlighted: false })
    }    

    hideLabel = () => {
        if(!this.state.isHighlighted)
            this.setState({ isLabelVisible: false })
    }
}