import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { noop, memoize } from 'lodash'

import FloatingButton from '../FloatingButton'
import OptionButton from './OptionButton'

const Wrapper = styled.div`
    position: absolute;
    left: -20px;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
Wrapper.displayName = 'Wrapper'

const MenuButton = styled(FloatingButton)`
    z-index: 1;
    background-color: #8957af; //#494978;
    ${props => props.open && `
    transform: scale(1.1);
    transition: transform 0.3s;

    &:hover {
        transform: scale(1.1);
    }
    `};
`
MenuButton.displayName = 'MenuButton'

const OptionsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3px;
    z-index: 1;
`
OptionsWrapper.displayName = 'OptionsWrapper'

class ShelfChangerButton extends React.Component {
    static defaultProps = {
        shelfOptions: [],
        onChangeShelf: noop
    }

    static propTypes = {
        currentShelf: PropTypes.string.isRequired,
        shelfOptions: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired,
                iconName: PropTypes.string.isRequired
              })
        ).isRequired,
        onChangeShelf: PropTypes.func.isRequired
    }

    state = {
        isOpen: false,
        opacity: 0
    }

    icon = {
        defaultColor: 'white',
        selectedColor: '#8957af'
    }

    render() {
        const { currentShelf } = this.props
        return (
            <Wrapper>
                <MenuButton 
                    diameter={40}
                    open={this.state.isOpen}
                    iconRotation={this.state.isOpen ? -180 : 0}
                    onClick={this.handleToggle} 
                    />
                <OptionsWrapper>
                    {this.props.shelfOptions.map(this.renderOptionButton)}
                    {this.renderNoneOptionButton()}
                </OptionsWrapper>
            </Wrapper>
        )
    }

    renderOptionButton = (option, index, options) => {
        const { isOpen } = this.state
        const { currentShelf } = this.props

        const isSelected = currentShelf === option.id

        const iconColor = isSelected
            ? this.icon.selectedColor
            : this.icon.defaultColor

        const transitionDelay = this.getTransitionDelayForOptionButton(isOpen, index, options.length)

        return (
            <OptionButton
                key={option.id}
                index={index}
                visible={isOpen}
                selected={isSelected}
                iconName={option.iconName}
                iconColor={iconColor}
                transitionDelay={transitionDelay}
                label={option.title}
                onClick={this.handleChange(option.id)}
                />
        )
    }

    renderNoneOptionButton = () => {
        const { shelfOptions, currentShelf } = this.props

        if(currentShelf === 'none')
            return

        const { isOpen } = this.state        
        
        const index = shelfOptions.length
        const transitionDelay = this.getTransitionDelayForOptionButton(isOpen, index, shelfOptions.length)

        return (
            <OptionButton
                index={index}
                visible={isOpen}
                selected={false}
                iconName={'trash'}
                iconColor={this.icon.defaultColor}
                transitionDelay={transitionDelay}
                label={'none'}
                onClick={this.handleChange('none')}
                />
        )
    }

    getTransitionDelayForOptionButton = (isOpen, index, amount) => {
        return isOpen
            ? index * 0.1
            : (amount - index - 1) * 0.1
    }

    handleToggle = () => {        
        this.setState(state => ({ isOpen: !state.isOpen }))
    }

    handleChange = memoize(shelfId => () => {
        this.props.onChangeShelf(shelfId)
    })
}

export default ShelfChangerButton