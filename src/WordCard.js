import React from 'react';
import CharaacterCard from './CharacterCard';

export default function WordCard(props){

    const activationHandler =c =>{
        console.log(`${c} has been activated.`)
    } 


    return(
        <div>
            {
                Array.from(props.value).map((c,i)=>
                    <CharaacterCard value ={c} key={i} activationHandler={activationHandler}/> )
            } 
        </div>
    )
}