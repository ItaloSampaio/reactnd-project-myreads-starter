import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { memoize, noop } from 'lodash'

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

const handleChange = memoize(onChangeShelf => evt => onChangeShelf(evt.target.value))

const ShelfChangerButton = props => (
    <Wrapper 
        diameter={40}
        iconSize={20}
        backgroundColor="#60ac5d"
        iconSource={arrowDropDownIcon}>
        <Menu 
            defaultValue={props.currentShelf}
            onChange={handleChange(props.onChangeShelf)}>
            <Item 
                value="move" 
                disabled>Move to...</Item>
            {props.shelfOptions.map((option, index) =>
                <Item
                    key={index}
                    value={option.id}>{option.title}</Item>
            )}
            <Item value="none">None</Item>
        </Menu>
    </Wrapper>
)

ShelfChangerButton.defaultProps = {
    shelfOptions: [],
    onChangeShelf: noop
}

ShelfChangerButton.propTypes = {
    currentShelf: PropTypes.string.isRequired,
    shelfOptions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired
          })
    ).isRequired,
    onChangeShelf: PropTypes.func.isRequired
}

export default ShelfChangerButton