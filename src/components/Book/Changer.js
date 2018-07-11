import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import FloatingButton from '../FloatingButton'

const arrowDropDownIcon = require('./images/arrow-drop-down.svg')

const Wrapper = styled(FloatingButton)`
    position: absolute;
    right: 0;
    bottom: -10px;
`
Wrapper.displayName = 'Wrapper'

const Menu = styled.select`
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
`
Menu.displayName = 'Menu'

const Item = styled.option`

`
Item.displayName = 'Item'

function Changer(props) {
    return (
        <Wrapper 
            diameter={40}
            iconSize={20}
            backgroundColor="#60ac5d"
            iconSource={arrowDropDownIcon}
            >
            <Menu defaultValue={props.selectedOption}>
                <Item value="move" disabled>Move to...</Item>
                {props.options.map((option, index) =>
                    <Item
                        key={index}
                        value={option.value}>{option.label}</Item>
                )}
                <Item value="none">None</Item>
            </Menu>
        </Wrapper>
    )
}

Changer.propTypes = {
    selectedOption: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired
          })
    ).isRequired
}

export default Changer