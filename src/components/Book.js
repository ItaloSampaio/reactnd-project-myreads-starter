import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.li`
    padding: 10px 15px;
    text-align: left;
`
Wrapper.displayName = 'Wrapper'

const Content = styled.div`
    width: 140px;
`
Content.displayName = 'Content'

const Top = styled.div`
    position: relative;
    height: 200px;
    display: flex;
    align-items: flex-end;
`
Top.displayName = 'Top'

const Cover = styled.div`
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    background: #eee;
    width: ${props => props.coverWidth}px;
    height: ${props => props.coverHeight}px;
    background-image: url(${props => props.coverImageSource});
    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
        transform: scale(1.05);
    }
`
Cover.displayName = 'Cover'

const TextInfo = styled.div`
    font-size: 0.8em;
`

const Title = styled(TextInfo)`
    margin-top: 10px;
`
Title.displayName = 'Title'

const Authors = styled(TextInfo)`
    color: #999;
`
Authors.displayName = 'Authors'

const Book = props => (
    <Wrapper>
        <Content>
            <Top>
                <Cover
                    coverWidth={props.coverWidth}
                    coverHeight={props.coverHeight}
                    coverImageSource={props.coverImageSource}
                    />
                {props.children}
            </Top>
            <Title>{props.title}</Title>
            <Authors>{props.authors}</Authors>
        </Content>
    </Wrapper>
)

Book.defaultProps = {
    coverWidth:  128,
    coverHeight: 193,
    title: 'Title',
    authors: 'Authors'
}

Book.propTypes = {
    coverWidth: PropTypes.number.isRequired,
    coverHeight: PropTypes.number.isRequired,
    coverImageSource: PropTypes.string,
    title: PropTypes.string.isRequired,
    authors: PropTypes.string.isRequired,
}

export default Book