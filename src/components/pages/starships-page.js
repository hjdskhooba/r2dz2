import React, { useState } from 'react'
import { Record} from '../item-details';
import Row from '../row/row';
import {StarshipList, StarshipItemDetails} from '../sw-components'
import { withRouter } from 'react-router-dom';



const StartshipPage = ({itemId, history}) => {
    // const [state, setState] = useState({itemId: 2})

    const leftElement = (
    <StarshipList setItemId={(id) => history.push(id)}>
        {(item) => `${item.name} - ${item.model}`}
    </StarshipList>
    )
    const rightElement = (
    <StarshipItemDetails itemId={itemId}>
            <Record label='Model' label_key='model'/>
            <Record label='Manufacturer' label_key='manufacturer'/>
            <Record label='Cost In Credits' label_key='costInCreditsr'/>       
            <Record label='Length' label_key='length'/>       
            <Record label='Crew' label_key='crew'/>       
    </StarshipItemDetails>
    )

    return (
        <Row left={leftElement} right={rightElement}/>
    
    )
}

export default withRouter(StartshipPage);