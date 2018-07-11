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

class Changer extends React.Component {
    render() {
        return (
            <Wrapper 
                diameter={40}
                iconSize={20}
                backgroundColor="#60ac5d"
                iconSource={arrowDropDownIcon}
                >
                <Menu 
                    defaultValue={this.props.selectedOption}
                    onChange={this.handleChange}>
                    <Item 
                        value="move" 
                        disabled>Move to...</Item>
                    {this.props.options.map((option, index) =>
                        <Item
                            key={index}
                            value={option.id}>{option.title}</Item>
                    )}
                    <Item value="none">None</Item>
                </Menu>
            </Wrapper>
        )
    }

    handleChange = evt => {
        this.props.onChangeShelf(evt.target.value)
    }
}

Changer.defaultProps = {
    options: [],
    onChangeShelf: () => {}
}

Changer.propTypes = {
    selectedOption: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired
          })
    ).isRequired,
    onChangeShelf: PropTypes.func.isRequired
}

export default Changer