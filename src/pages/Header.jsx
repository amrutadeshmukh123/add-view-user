import { useState } from 'react';
import './Header.css';


export default function Header() {


    const [isAddRecord, setIsAddRecord] = useState(false)
    const [isViewRecord, setIsViewRecord] = useState(false)
    const [records, setRecords] = useState([])

    const addRecordClick = () => {
        setIsAddRecord(true)
        setIsViewRecord(false)
        console.log(records)
    }

    const viewRecordClick = () => {
        setIsAddRecord(false)
        setIsViewRecord(true)
    }

    return (
        <>
            <div className="header">
                <h2>Admission Form</h2>
            </div>
            <div className="btn-container">
                <button 
                onClick={addRecordClick}
                className={isAddRecord ? 'active' : ''}
                >Add Record</button>
                <button 
                onClick={viewRecordClick}
                className={isViewRecord ? 'active' : ''}
                >View Record</button>
            </div>
            {
                isAddRecord && <AddRecordComponent />
            }
            {
                isViewRecord && <ViewRecordComponent />
            }

        </>
    )

    function AddRecordComponent() {

        const [recordObj, setRecordObject] = useState({
            fullname: '', class: '', mobile: '', email: '', gender: ''
        })
        const changeInput = (e) => {
            setRecordObject({
                ...recordObj,
                [e.target.name]: e.target.value
            })
        }

        const onRecordSubmit = (e) => {
            e.preventDefault()
            setRecords([
                ...records,
                recordObj
            ])
            setRecordObject({
                fullname: '', class: '', mobile: '', email: '', gender: ''
            })
            alert('Record added successfully !!')
            setIsAddRecord(false)
            setIsViewRecord(false)

        }
        return (
            <>
                <div className="add-record-component">
                    <div className="title">
                        <h2>Add Record</h2>
                    </div>
                    <form onSubmit={onRecordSubmit}>
                        <div className="input-field">
                            <label htmlFor="">Fullname</label>
                            <input type="text" value={recordObj.fullname} onChange={changeInput} name="fullname" />
                        </div>
                        <div className="input-field">
                            <label htmlFor="">Class</label>
                            <input type="text" value={recordObj.class} onChange={changeInput} name="class" />
                        </div>
                        <div className="input-field">
                            <label htmlFor="">Mobile No</label>
                            <input type="number" value={recordObj.mobile} onChange={changeInput} name="mobile" />
                        </div>
                        <div className="input-field">
                            <label htmlFor="">E-mail ID</label>
                            <input type="email" value={recordObj.email} onChange={changeInput} name="email" />
                        </div>
                        <div className="input-field">
                            <p>Select Your Gender</p>
                            <input type="radio" value={recordObj.gender} onChange={changeInput} name='gender' />
                            <label htmlFor="">Female</label>

                            <input type="radio" value={recordObj.gender} onChange={changeInput} name='gender' />
                            <label htmlFor="">Male</label>

                            <input type="radio" value={recordObj.gender} onChange={changeInput} name='gender' />
                            <label htmlFor="">Other</label>
                        </div>
                        <button>Submit</button>
                    </form>

                </div>

            </>
        )
    }

    function ViewRecordComponent() {
        return (
            <>
                <div className="view-record-component">
                    <div className="title">
                        <h2>View Record</h2>
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <th>Sr.No</th>
                                <th>Fullname</th>
                                <th>Mobile No</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                records.length > 0 ?
                                (
                                    records.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index+1}</td>
                                                <td>{item.fullname}</td>
                                                <td>{item.mobile}</td>
                                                <td>
                                                    <button>View Class</button>
                                                </td>
    
                                            </tr>
                                        )
                                    })
                                ) :
                                (
                                    <tr>
                                        <td colSpan={3}>No Records Available !!</td>
                                    </tr>
                                )                               
                            }
                        </tbody>
                    </table>

                </div>

            </>
        )
    }


}