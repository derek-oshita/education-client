import React, { useState } from 'react'; 
// import ShowName from '../ShowName/ShowName'; 

// export const IndexPage: React.FC = () => {
//     return (
//         <div className="container">
//             <h1>Education Showwcase</h1>
//         </div>
//     )
// }


// function IndexPage () {
//     console.log('IndexPage...')
//     return (
//         <div>
//             <h1><ShowName /> Education Showwcase</h1>
//         </div>
//     )
// }

class IndexPage extends React.Component {
    // state = {
    //     name: this.props
    // }
    // componentDidMount () {
    //     const { name } = this.props
    // }
    render () {
        console.log('IndexPage: ', this.props)
        return (
            <div>
                <h1>Education Showwcase</h1>
            </div>
        )
    }
}

export default IndexPage; 