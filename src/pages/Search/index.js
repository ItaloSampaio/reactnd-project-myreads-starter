import React from 'react'

import BooksGrid from '../../components/BooksGrid'

import Bar from './Bar'
import ResultsContent from './ResultsContent'

export default class SearchPage extends React.Component {
    render() {
        return (
            <div>
                <Bar onCloseButtonClick={this.goToMainPage} />
                <ResultsContent>
                    <BooksGrid>
                        
                    </BooksGrid>
                </ResultsContent>
            </div>
        )
    }

    goToMainPage = () => {
        this.props.history.push('/')
    }
}