import React, { useState } from 'react'
import "./ShowData.css"

export const ShowData = () => {
    const [rowData, setRowData] = useState([])


    const addItem = () => {
        setRowData([...rowData, []])
    }
    // console.log(rowData);
    const Clear = () => {
        setRowData([])
    }
    const removeItem = (id) => {
        setRowData(rowData.id !==id)
    }
    return (
        <>
            <div className="container">
                <div className="center">
                    <button className='btn' onClick={addItem}>Add input</button>
                    <button className='btn' onClick={Clear}>ClearData</button><br />
                    {
                        rowData.map((name, id) => {
                            return (<div key={id} className='center input__Area'>
                                <input type="text" placeholder='Enter input' />
                                <button onClick={() => removeItem(id)}>remove</button>
                            </div>
                            )
                        })
                    }
                </div>

            </div>
        </>
    )
}
