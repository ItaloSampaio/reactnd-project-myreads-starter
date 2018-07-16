import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import BooksGrid from '../../components/BooksGrid'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
    background-color: white;
    margin: 20px;
    border-radius: 4px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  
    @media (min-width: 600px) {
        padding-bottom: 40px;
    }
`
Wrapper.displayName = 'Wrapper'

const TitleWrapper = styled.div`
    margin: 12px 20px;
    padding: 0 7px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid #dedede;
`

const Title = styled.h2`
    margin: 0 10px 0px;
`
Title.displayName = 'Title'

const Books = styled.div`
    text-align: center;
`
Books.displayName = 'Books'

function Bookshelf(props) {
    return (
        <Wrapper>
            <TitleWrapper>
                <FontAwesomeIcon icon={props.iconName} />
                <Title>{props.title}</Title>
            </TitleWrapper>
            <Books>
                <BooksGrid>
                    {props.children}
                </BooksGrid>
            </Books>
        </Wrapper>
    )
}

Bookshelf.propTypes = {
    iconName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(PropTypes.element).isRequired
}

export default Bookshelf