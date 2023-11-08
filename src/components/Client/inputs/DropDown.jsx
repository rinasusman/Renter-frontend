import React, { useState } from 'react'

const DropDown = ({ id, label, options, selectedValue, onChange }) => {
    return (

        <div
        >
            <label htmlFor={id}>{label}</label>


            <select className="
            relative
            peer
            w-full
            p-2
            pt-5
            font-light
            bg-white
            border-2
            border-y-gray-400
            rounded-md
            outline-none
            transition"
                id={id} value={selectedValue} onChange={onChange} >
                {
                    options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))
                }
            </select >
        </div >
    )
}

export default DropDown