import React, { useState } from 'react'
import "./Item.css"

const Item = () => {
    const [value, setValue] = useState("")
    
    return (
        <div className="item">
            <textarea value={value} onChange={(e) => setValue(e.target.value)} className="item__input"></textarea>
        </div> 
    )
}

export default Item
