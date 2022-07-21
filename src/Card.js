import React, { useState } from 'react'
import { friends } from './friends'
import Friend from "./Friend";

const Card = () => {
    const [people, setPeople] = useState(friends)
    const removeAllItems = () => setPeople([])

    const removeItem = (id) => {
        const newPeople = people.filter(friend => id !== friend.id)
        setPeople(newPeople)
    }

    const amountOfBirthdays = people.length

    return (<section className='container'>
        <h3>{amountOfBirthdays} birthdays today</h3>
        {people.map(friend => {
            const { id, name, age, img } = friend
            return <Friend key={id} id={id} img={img} age={age} name={name} deleteItem={removeItem}></Friend>

        })}
        <button type='btn' className='bigButton' onClick={removeAllItems}>Clear all</button>
    </section>)
}

export default Card