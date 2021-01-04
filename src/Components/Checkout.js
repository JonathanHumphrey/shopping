import React from 'react'
import Modal from 'react-bootstrap/Modal'

export default function Checkout(props, {showModal, setShowModal, total}) {
    
    const styles = {
        zIndex: -1,
        border: 'none'
    }
    return (
        <div className="modal" style={!showModal ? styles : null}>
            <Modal
                {...props}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <h1>Checkout Menu</h1>
                        <hr></hr>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Enter Your Information Below</h4>
                    <label for='name'>Enter Your Name</label>
                    <input
                        id='name'
                        type='text'
                        inputMode='text'
                        placeholder='Your Name'
                    /><br/>
                    <label for='ccn'>Card Number: </label>
                    <input
                        id='ccn'
                        type='tel'
                        inputMode='numeric'
                        pattern='[0-9\s]{13,19}'
                        maxLength='19'
                        placeholder='xxxx xxxx xxxx xxxx'
                        autoComplete='cc-number'
                    />
                    <label for='cvc'></label>
                    <input
                        id='cvc'
                        type='tel'
                        inputMode='numeric'
                        pattern='[0-9\s]{13,19}'
                        maxLength='19'
                        placeholder='CVC'
                    /><br />
                    <label for='exp'>Expiration Date: </label>
                    <select>
                        <option default>Select Month</option>
                        <option>January</option>
                        <option>February</option>
                        <option>March</option>
                        <option>April</option>
                        <option>May</option>
                        <option>June</option>
                        <option>July</option>
                        <option>August</option>
                        <option>September</option>
                        <option>October</option>
                        <option>November</option>
                        <option>December</option>
                    </select>
                      /
                      <select>
                        <option default>Select Year</option>
                        <option>2021</option>
                        <option>2022</option>
                        <option>2023</option>
                        <option>2024</option>
                        <option>2025</option>
                        <option>2026</option>
                        <option>2027</option>
                        <option>2028</option>
                        <option>2029</option>
                        <option>2030</option>
                        <option>2031</option>
                        <option>2032</option>
                    </select>
                </Modal.Body>
                <Modal.Footer>
                    <h4>Your total is: {total}</h4>
                    <button>Checkout</button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}
