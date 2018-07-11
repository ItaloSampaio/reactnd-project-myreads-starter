import styled from 'styled-components'

const arrowBackIcon = require('./images/arrow-back.svg')

export default styled.a`
    display: block;
    top: 20px;
    left: 15px;
    width: 50px;
    height: 53px;
    background: white;
    background-image: url('${arrowBackIcon}');
    background-position: center;
    background-repeat: no-repeat;
    background-size: 28px;
    font-size: 0;
    cursor: pointer;
`