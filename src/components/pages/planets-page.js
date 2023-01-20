import React, { useState } from 'react'
import { Record} from '../item-details';
import Row from '../row/row';
import {PlanetList, PlanetItemDetails} from '../sw-components'
import { withRouter } from 'react-router-dom';



const PlanetsPage = ({itemId, history}) => {
    // const [state, setState] = useState({itemId: 1})

    const leftElement = (
    <PlanetList setItemId={(id) => history.push(id)}>
        {(item) => `${item.name} - ${item.diameter}`}
    </PlanetList>
    )
    const rightElement = (
    <PlanetItemDetails itemId={itemId}>
             <Record label='Population' label_key='population'/>
            <Record label='Rotation period' label_key='rotationPeriod'/>
            <Record label='Diameter' label_key='diameter'/>       
    </PlanetItemDetails>
    )

    return (
        <Row left={leftElement} right={rightElement}/>
    
    )
}

export default withRouter(PlanetsPage);