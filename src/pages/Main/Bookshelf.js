import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import BooksGrid from '../../components/BooksGrid'

const Wrapper = styled.div`
    padding: 0 10px 20px;
  
    @media (min-width: 600px) {
        padding: 0 20px 40px;
    }
`
Wrapper.displayName = 'Wrapper'

const Title = styled.h2`
    border-bottom: 1px solid #dedede;
`
Title.displayName = 'Title'

const Books = styled.div`
    text-align: center;
`
Books.displayName = 'Books'

function Bookshelf(props) {
    return (
        <Wrapper>
            <Title>{props.title}</Title>
            <Books>
                <BooksGrid>
                    {props.children}
                </BooksGrid>
            </Books>
        </Wrapper>
    )
}

Bookshelf.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(PropTypes.element).isRequired
}

export default Bookshelf