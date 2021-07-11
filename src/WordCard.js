import React , { useState } from 'react';
import  _, { attempt } from 'lodash'
import CharaacterCard from './CharacterCard';

const prepareStateFromWord = given_word =>{
        let word = given_word.toUpperCase()
        let chars = _.shuffle(Array.from(word))
        return {
            word,
            chars,
            attempt: 1,
            guess:'',
            completed: false    
    }

}

export default function WordCard(props){

    const [state, setState] = useState(prepareStateFromWord(props.value))
    const Ans =[];
    const activationHandler =c =>{
        console.log(`${c} has been activated.`)

        let guess = state.guess + c
        setState({...state, guess})
        console.log (guess)

        if(guess.length == state.word.length){
            if(guess == state.word){
                console.log('yeah!')
                setState({...state, completed: true})
            }else if (state.attempt == state.word.length){
                console.log('T T')
                console.log( 'Correct Ans:',state.word)
                
            }else{
                console.log('reset,next attempt')
                setState({...state, guess: '', attempt: state.attempt +1})
                
                let j= Math.floor(Math.random() *state.word.length)

                for(let i=0 ; i<state.word.length;i++){
                        if(i!=j)
                            Ans.push('_')
                        else {
                            Ans.push(state.word[j])
                            
                        }
                } 
                
            }   console.log('Hint',Ans)
                console.log('attempt',state.attempt)

        }
        
    } 


    return(
        <div>
            {
                state.chars.map((c,i)=>
                    <CharaacterCard value ={c} key={i} activationHandler={activationHandler} attempt={state.attempt}/> )
            } 
        </div>
    )
}