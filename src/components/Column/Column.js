import React, { useState, useEffect, useRef } from 'react'
import AddIcon from '@material-ui/icons/Add'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import { v4 as uuidV4 } from "uuid"
import "./Column.css"

import Item from "./Item/Item.js"

const Column = ({title}) => {
    
    const [content, setContent] = useState([])
    const [itemRemove, setItemRemove] = useState(undefined)
    const scrollElement = useRef(null)
    
    
    useEffect(() => {
        setContent(content.filter(item => itemRemove !== item.key))
    }, [itemRemove])
    
    useEffect(() => {
        const container = scrollElement.current
        container.scrollTop = container.scrollHeight
    }, [content])
    
    const handleAdd = () => {
        const  itemId = uuidV4()
        
        const newItem = (
            <div className="column__item"  key={itemId}>
                <div onClick={() => setItemRemove(itemId)} className="column__itemDelete">
                    <HighlightOffIcon className="column__deleteIcon" />
                </div>
                <Item />
            </div>
        )
        
        const newContent = [...content, newItem]
        setContent(newContent)
        
    }
    
    return (
        <div className="column">
            <h2>{ title }</h2>
            <div className="column__contentContainer" ref={scrollElement}>
                { content.length ? content : (
                    <div className="column__empty">
                        <p>Add item</p>
                    </div>
                )}
            </div>
            <div className="column__add" onClick={ handleAdd }>
                <AddIcon className="column__addIcon"/>
            </div>
        </div>
    )
}

export default Column
