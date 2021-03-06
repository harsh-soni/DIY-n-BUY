import React from 'react'
import { useState } from 'react'

const AdminCrownForm = () => {

    const [type, setType]=useState('')
    const [movements, setMovements]=useState('')
    
    const[material, setMaterial]=useState('')
    const[finish,setFinish]=useState('')
    
    const[color, setColor]=useState('')
    const handleSubmit=(e)=>{
            e.preventDefault()
            //this.props.history.push('/admin/inventory/successpage')
            const Crown={type,movements,material,finish,color}
            console.log(Crown)
            fetch('http://localhost:3001/create/crown',{
                method:'POST',
                mode:'cors',
                headers: {"Content-Type":"application/json charset=UTF-8"},
                body: JSON.stringify(Crown)
            }).then((response) => {
                if(response){
                    window.location.href = "/admin/inventory/successpage";
                }
            })
    }
  return (
      <div>
          <h2 align="center">Welcome Admin!!!</h2>
          <h3 align="center">Fill the form to add a new crown!!!</h3>
          <form align="center" onSubmit={handleSubmit}>
              <div >
              <label>Type</label>
        <input
        type="text"
        required
        value={type}
        onChange={(e)=> setType(e.target.value)}
        />
              </div>
              <div>
              <label>Movements</label>
        <input
        type="text"
        required
        value={movements}
        onChange={(e)=>setMovements(e.target.value)}
       
        />
              </div>
        <div>
        <label>Material</label>
        <input
        type="text"
        required
        value={material}
        onChange={(e)=>setMaterial(e.target.value)}
       
        />
        </div>
       
        <div>
        <label>Finish</label>
        <input
        type="text"
        required
        value={finish}
        onChange={(e)=>setFinish(e.target.value)}
       
        />
        </div>
        <div>
        <label>Color</label>
        <input
        type="text"
        required
        value={color}
        onChange={(e)=>setColor(e.target.value)}
       
        /> 
        </div>
        
       
        <div>
        <button type='submit'>Add Part</button>
        </div>
        
        


    </form>
    
 
      </div>
    
  )
}

export default AdminCrownForm