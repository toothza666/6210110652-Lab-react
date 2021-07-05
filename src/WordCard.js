import React , { useState } from 'react';
import  _ from 'lodash'
import CharaacterCard from './CharacterCard';

const prepareStateFromWord = given_word =>{
        let word = given_word.toUpperCase()
        let chars = _.shuffle(Array.from(word))
        return {
            word,
            chars
        }

}

export default function WordCard(props){

    const [state, setState] = useState(prepareStateFromWord(props.value))

    const activationHandler =c =>{
        console.log(`${c} has been activated.`)
    } 


    return(
        <div>
            {
                state.chars.map((c,i)=>
                    <CharaacterCard value ={c} key={i} activationHandler={activationHandler}/> )
            } 
        </div>
    )
}