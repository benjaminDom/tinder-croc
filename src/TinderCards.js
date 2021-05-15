import { PersonSharp } from '@material-ui/icons';

import React, { useState,useEffect } from 'react';
import TinderCard from "react-tinder-card";
import './TinderCards.css'
import database from './firebase';
function TinderCards() {

    const [people, setPeople] = useState([]);

    // const [people, setPeople] = useState([
    //     {
    //         name: 'Young Croc',
    //         url: 'https://images.unsplash.com/photo-1614065613125-17553fbc59f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=708&q=80'
    //     },
    //     {
    //         name: 'Tanned',
    //         url: 'https://images.unsplash.com/photo-1614301970871-06870c281354?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80'
    //     }

    // ]);
    //BAD 
    // const people=[];
    //people.push('sonny','qazi')


    //React
    // const[people,setPeople]=useState([]);
    //setPeople(['sonny','qazi'])

    // useEffect works  based  on a condition 
    useEffect(() =>{
        //This  is where the code  runs
        const unsuscribe=database
        .collection('people')
        .onSnapshot((snapshot)=>
           setPeople( snapshot.docs.map( (doc)=>doc.data() ) )
        );
        return()=>{ unsuscribe();
        };
        //this will run once when the component loads  and never again 
    }, []);

    return (
        <div>
            {/* <div className="title">
            <h1 >Tinder Croc</h1>
            </div> */}
            <div className="tinderCards__cardContainer">
            {people.map(person=>(
                <TinderCard  className="swipe" 
                key={person.name}
                preventSwipe={['up','down']}
                >
                    <div 
                    style={{backgroundImage: `url(${person.url})`}}
                    className='card'>
                        <h3>{person.name}</h3>
                    </div>

                </TinderCard>

            ))};
        </div>
        </div>
    );
}

export default TinderCards