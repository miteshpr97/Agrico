import React from 'react'

const MainForm = () => {
    return (
        <form>
        <div className="form">
       
                <div className="form1">
                    <div className="top">
                        <i className="fa-solid fa-bag-shopping"></i><p className='top-p1'>Inbound</p>
                    </div>
                    <div className="order">
                        <ul>
                            <li><i className="fa-solid fa-truck"></i><p className='order-p'>Truck Reporting</p></li>
                            <hr />
                            <li><i className="fa-solid fa-briefcase"></i><p className='order-p'>GRN</p></li>
                            <hr />
                        </ul>
                    </div>
                </div>




                <div className="form2">
                    <div className="top form2-top">
                        <i className="fa-solid fa-cart-shopping"></i><p className='top-p2'>Cycle Count</p>
                    </div>
                    <div className="order form2-order">
                        <ul>
                            <li><i className="fa-solid fa-bell"></i><p className='order-p'>Stock Count Dashboard</p></li>
                            <hr />
                            <li><i className="fa-solid fa-bell"></i><p className='order-p'>Stock Count</p></li>
                            <hr />
                        </ul>
                    </div>
                </div>


                <div className="form3">
                    <div className="top form3-top">
                        <i className="fa-solid fa-suitcase"></i><p className='top-p3'>Outbound</p>
                    </div>
                    <div className="order">
                        <ul>
                            <li><i className="fa-solid fa-bell"></i><p className='order-p'>Locate Materials</p></li>
                            <hr />
                            <li><i className="fa-solid fa-briefcase"></i><p className='order-p'>Picking & Loading</p></li>
                            <hr />
                            <li><i className="fa-solid fa-truck"></i><p className='order-p'>POD</p></li>
                            <hr />
                        </ul>
                    </div>
                </div>

                <button>Back</button>
        
        </div>
        </form>
    )
}

export default MainForm