import React from "react"
import {Consumer} from '../swapi-context'

function withSwapi (View, parseFunc) {
    const Wrapper = (props) => {
    return (
        <Consumer>
            {
                (swapi) => {
                    const methods = parseFunc(swapi)
                   return <View {...props} {...methods}/>
                }
            }
        </Consumer>
    )
  
    }
    return Wrapper
    
}

export default withSwapi;