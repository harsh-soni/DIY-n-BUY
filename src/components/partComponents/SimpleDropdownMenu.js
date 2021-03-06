import { render } from '@testing-library/react';
import React, { useState } from 'react'
import { TableCase } from "../partComponents/TableCase";


import Select from 'react-select';


export const SimpleDropdownMenu = () => {
    const data = [
        {
          value: 1,
          label: "Cases"
        },
        {
          value: 2,
          label: "Case Back"
        },
        {
          value: 3,
          label: "Movements"
        },
        {
          value: 4,
          label: "Bezels"
        },
        {
          value: 5,
          label: "Bezel Inserts"
        },
        {
          value: 6,
          label: "Chapter Rings"
        },
        {
          value: 7,
          label: "Crowns"
        },
        {
          value: 8,
          label: "Hands"
        },
        {
          value: 9,
          label: "Dials"
        },
        {
          value: 10,
          label: "Straps/Bracelets"
        },
        {
          value: 11,
          label: "Tools"
        },
        {
          value: 12,
          label: "Gaskets"
        }
    ]
    const handleChange= obj =>{
        setSelectedValue(obj)
    }
    const [selectedValue, setSelectedValue]=useState({
        value: 12,
        label: "Gaskets"
      })
      
  return <>
  <Select
  value={selectedValue}
  options={data}
  onChange={handleChange} />
  <br />
  <b>Selected Value:</b>
  <pre>{JSON.stringify(selectedValue, null, 2)}</pre>
  if(true){<TableCase/>}
  </>
    
  
}
