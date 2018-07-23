import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import FloatingButton from '../../components/FloatingButton'

const addImage = require('./images/add.svg')

const Wrapper = styled(FloatingButton)`
    position: fixed;
    right: 25px;
    bottom: 25px;
`
Wrapper.displayName = 'Wrapper'

function OpenSearchButton(props) {
    return (
        <Wrapper
            diameter={50}
            backgroundColor="#ec679e"
            iconName="search"
            onClick={props.onClick}
            />
    )
}

OpenSearchButton.propTypes = {
    onClick: PropTypes.func.isRequired   
}

export default OpenSearchButton