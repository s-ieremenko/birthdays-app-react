import React, { useState } from "react";

const Friend = (props) => {
    const { id, img, name, age, deleteItem } = props
    console.log(props)
    return (
        <article className="friend">
            <img src={img} alt=""/>
            <div>
                <h4>{name}</h4>
                <div>
                    <p>{age} years</p>
                    <button type='btn' className='insideButton' onClick={() => deleteItem(id)}>Delete</button>
                </div>
            </div>
        </article>
    )
}
export default Friend