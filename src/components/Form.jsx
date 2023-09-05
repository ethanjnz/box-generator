import React, { useState } from 'react'

const Form = (props) => {

    const [color, setColor] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        props.addBox({color: color})
        setColor("");
        
    }

  return (
    <div>
        <form className='form w-25 mx-auto border shadow m-5 rounded' onSubmit={ handleSubmit }>
            <div className='m-3 d-flex'>
                <label className='form-label m-3' htmlFor="color">Color</label>
                <input className='form-control' type="text" name="color" id="color" onChange={(e) => setColor(e.target.value)} value={color}/>
            </div>
            <div className='m-3'>
                <input className='btn btn-primary' type="submit" value="submit" />
            </div>

        </form>
    </div>
  )
}

export default Form