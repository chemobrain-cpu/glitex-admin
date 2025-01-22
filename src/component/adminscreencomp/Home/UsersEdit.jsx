import React, { useState, useEffect } from 'react';
import styles from '../../common/Home.module.css'
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';


export const AdminUserEditComponent = ({ updateHandler, }) => {
    let [isData, setIsData] = useState(null)
    let { color, usersList } = useSelector(state => state.userAuth)
    let { id } = useParams()

    let handleChangeHandler = (e, nameField) => {
        let val = e.target.value
        setIsData(prev => {
            prev[`${nameField}`] = val
            let newData = { ...prev }
            return newData
        })

    }

    let submitHandler = (e) => {
        e.preventDefault()
        //patch case on 
        updateHandler(isData)
    }

    useEffect(() => {
        let dataObj = usersList.find(data => data._id.toString() === id.toString())
        setIsData(dataObj)

    }, [id])



    return (<>
        <div className={styles.homeScreen} style={{ backgroundColor: color.background }}>
            <div className={styles.timeline} style={{ backgroundColor: color.background }}>

                {usersList && isData && (
                    <form className={styles.editForm} onSubmit={submitHandler}>
                        {/* Personal Information */}
                        <div className={styles.inputCards}>
                            <label>First Name</label>
                            <input
                                onChange={(e) => handleChangeHandler(e, 'firstName')}
                                value={isData.firstName}
                                type="text"
                            />
                        </div>

                        <div className={styles.inputCards}>
                            <label>Middle Name</label>
                            <input
                                onChange={(e) => handleChangeHandler(e, 'middleName')}
                                value={isData.middleName}
                                type="text"
                            />
                        </div>

                        <div className={styles.inputCards}>
                            <label>Last Name</label>
                            <input
                                onChange={(e) => handleChangeHandler(e, 'lastName')}
                                value={isData.lastName}
                                type="text"
                            />
                        </div>

                        <div className={styles.inputCards}>
                            <label>Email</label>
                            <input
                                onChange={(e) => handleChangeHandler(e, 'email')}
                                value={isData.email}
                                type="text"
                                readOnly
                            />
                        </div>

                        <div className={styles.inputCards}>
                            <label>Phone Number</label>
                            <input
                                onChange={(e) => handleChangeHandler(e, 'phone')}
                                value={isData.phone}
                                type="text"
                            />
                        </div>

                        <div className={styles.inputCards}>
                            <label>Date of Birth</label>
                            <input
                                onChange={(e) => handleChangeHandler(e, 'dob')}
                                value={isData.dob}
                                type="text"
                            />
                        </div>

                        <div className={styles.inputCards}>
                            <label>Gender</label>
                            <input
                                onChange={(e) => handleChangeHandler(e, 'gender')}
                                value={isData.gender}
                                type="text"
                            />
                        </div>

                        {/* Address Information */}
                        <div className={styles.inputCards}>
                            <label>Address</label>
                            <input
                                onChange={(e) => handleChangeHandler(e, 'address')}
                                value={isData.address}
                                type="text"
                            />
                        </div>

                        <div className={styles.inputCards}>
                            <label>City</label>
                            <input
                                onChange={(e) => handleChangeHandler(e, 'city')}
                                value={isData.city}
                                type="text"
                            />
                        </div>

                        <div className={styles.inputCards}>
                            <label>State</label>
                            <input
                                onChange={(e) => handleChangeHandler(e, 'state')}
                                value={isData.state}
                                type="text"
                            />
                        </div>

                        <div className={styles.inputCards}>
                            <label>Zip Code</label>
                            <input
                                onChange={(e) => handleChangeHandler(e, 'zipCode')}
                                value={isData.zipCode}
                                type="text"
                            />
                        </div>

                        <div className={styles.inputCards}>
                            <label>Country</label>
                            <input
                                onChange={(e) => handleChangeHandler(e, 'nationality')}
                                value={isData.nationality}
                                type="text"
                            />
                        </div>

                        {/* Next of Kin Information */}
                        <div className={styles.inputCards}>
                            <label>Next of Kin Name</label>
                            <input
                                onChange={(e) => handleChangeHandler(e, 'nokname')}
                                value={isData.nokname}
                                type="text"
                            />
                        </div>

                        <div className={styles.inputCards}>
                            <label>Next of Kin Address</label>
                            <input
                                onChange={(e) => handleChangeHandler(e, 'nokaddress')}
                                value={isData.nokaddress}
                                type="text"
                            />
                        </div>

                        <div className={styles.inputCards}>
                            <label>Next of Kin Relationship</label>
                            <input
                                onChange={(e) => handleChangeHandler(e, 'nokrelationship')}
                                value={isData.nokrelationship}
                                type="text"
                            />
                        </div>

                        <div className={styles.inputCards}>
                            <label>Next of Kin Phone</label>
                            <input
                                onChange={(e) => handleChangeHandler(e, 'nokphone')}
                                value={isData.nokphone}
                                type="text"
                            />
                        </div>

                        <div className={styles.inputCards}>
                            <label>Next of Kin Email</label>
                            <input
                                onChange={(e) => handleChangeHandler(e, 'nokemail')}
                                value={isData.nokemail}
                                type="text"
                            />
                        </div>

                        {/* Account Details */}
                        <div className={styles.inputCards}>
                            <label>Account Number</label>
                            <input
                                onChange={(e) => handleChangeHandler(e, 'acountNumber')}
                                value={isData.acountNumber}
                                type="text"
                            />
                        </div>

                        <div className={styles.inputCards}>
                            <label>Account Balance</label>
                            <input
                                onChange={(e) => handleChangeHandler(e, 'accountBalance')}
                                value={isData.accountBalance}
                                type="number"
                            />
                        </div>

                        <div className={styles.inputCards}>
                            <label>Account Type</label>
                            <input
                                onChange={(e) => handleChangeHandler(e, 'acctType')}
                                value={isData.acctType}
                                type="text"
                            />
                        </div>

                        <div className={styles.inputCards}>
                            <label>Currency</label>
                            <input
                                onChange={(e) => handleChangeHandler(e, 'currency')}
                                value={isData.currency}
                                type="text"
                            />
                        </div>

                        <div className={styles.inputCards}>
                            <label>Pin Number</label>
                            <input
                                onChange={(e) => handleChangeHandler(e, 'pinNumber')}
                                value={isData.pinNumber}
                                type="text"
                            />
                        </div>

                        {/* Profile and Verification */}
                        <div className={styles.inputCards}>
                            <label>Profile Photo</label>
                            {isData.profilePhoto && (

                                <img
                                    src={isData.profilePhoto}
                                    alt="Profile"
                                    style={{ width: window.innerWidth <= 768 ? '100%' : '50%' }}
                                />

                            )}
                        </div>

                        <div className={styles.inputCards}>
                            <label>Password</label>
                            <input
                                onChange={(e) => handleChangeHandler(e, 'password')}
                                value={isData.password}
                                type="password"
                            />
                        </div>

                        <div className={styles.inputCards}>
                            <label>Password Confirmation</label>
                            <input
                                onChange={(e) => handleChangeHandler(e, 'password_confirmation')}
                                value={isData.password_confirmation}
                                type="password"
                            />
                        </div>

                        {/* Tax, TAC, NRC, IMF, COT Verified Info */}
                        <div className={styles.inputCards}>
                            <label>Tax Verified</label>
                            <select
                                onChange={(e) => handleChangeHandler(e, 'taxVerified')}
                                value={isData.taxVerified}
                            >
                                <option value={true}>True</option>
                                <option value={false}>False</option>
                            </select>
                        </div>

                        <div className={styles.inputCards}>
                            <label>Tax Code</label>
                            <input
                                onChange={(e) => handleChangeHandler(e, 'taxCode')}
                                value={isData.taxCode}
                                type="number"
                                readOnly
                            />
                        </div>


                        <div className={styles.inputCards}>
                            <label>Otp Code</label>
                            <input
                                onChange={(e) => handleChangeHandler(e, 'otpCode')}
                                value={isData.otpCode}
                                type="number"
                                readOnly
                            />
                        </div>
                        <div className={styles.inputCards}>
                            <label>Otp Verified</label>
                            <select
                                onChange={(e) => handleChangeHandler(e, 'otpVerified')}
                                value={isData.otpVerified}
                            >
                                <option value={true}>True</option>
                                <option value={false}>False</option>
                            </select>
                        </div>



                        <div className={styles.inputCards}>
                            <label>Account Status</label>
                            <select
                                value={isData.isAccountStatus} // This binds the select to the value of isAccountStatus
                                onChange={(e) => handleChangeHandler(e, 'isAccountStatus')} // Handle change to update the value
                            >
                                <option value={true}>Active</option>
                                <option value={false}>Inactive</option>
                            </select>
                        </div>



                        <div className={styles.buttonContainer}>
                            <button type="submit">Update</button>
                        </div>
                    </form>
                )}


            </div>
















        </div>



    </>)




}