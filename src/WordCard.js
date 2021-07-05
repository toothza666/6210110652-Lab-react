import React from 'react';
import CharaacterCard from './CharacterCard';

export default function WordCard(props){
    return(
        <div>
            {
                Array.from(props.value).map((c,i)=><CharaacterCard value ={c} key={i}/> )
            } 
        </div>
    )
}