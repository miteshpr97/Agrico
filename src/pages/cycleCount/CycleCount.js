import React from 'react'
import './CycleCount.css'
import Form from 'react-bootstrap/Form';
import cycleCount from './cycleCount_pic.png'

const CycleCount = () => {
    return (

        <div className='container-fluid'>

            {/* header section */}

            <div className='heading'>
                <h3><i className="fa-solid fa-bars"></i>Cycle Count</h3>
            </div>

            {/* form container */}

            <div className='form-container1'>

                <div className='location'>
                    <span>Location</span>
                    <Form.Select>
                        <option>Select Location</option>
                        <option>one</option>
                        <option>two</option>
                    </Form.Select>

                </div>
                <div className='location'>
                    <span>SAP Code</span>
                    <Form.Select >

                        <option>SAP Code</option>
                        <option>one</option>
                        <option>two</option>

                    </Form.Select>

                </div>
                <div className='squarebox-container'>
                    <div className='leftbox' >
                        <div className='left-squarebox'></div>
                        <p className='left-p'>Description</p>

                    </div>
                    <div className='rightbox'>
                        <div className='right-squarebox'><img src={cycleCount} alt='img'/> </div>
                        <p className='right-p'>Photo</p>
                    </div>
                </div>

                <div className='system-qty'>
                    <p>System Qty</p>
                    <input ></input>
                </div>

             {/* form 2nd container */}

                <div className='form-container2'>
                    <div className='warehouse-qty'>
                        <p>warehouse Qty</p>
                        <input ></input>
                    </div>
                    <div className='qty-discrepancy'>
                        <p>Qty Discrepancy</p>
                        <input ></input>
                    </div>

                    <div className='location item-location'>
                        <span>Item Location</span>
                        <Form.Select>
                            <option>Update Location</option>
                            <option>one</option>
                            <option>two</option>
                        </Form.Select>

                    </div>
                    <div className='remark'>
                        <p>Remark</p>
                        <input ></input>
                    </div>
                    <div className='btn-container'>
                        <button className='btn-1'>Home</button>
                        <button className='btn-1'>Back</button>
                        <button className='btn-2'>Next</button>
                        <button className='btn-2'>Report</button>
                    </div>

                </div>


            </div>
        </div>

    )
}

export default CycleCount