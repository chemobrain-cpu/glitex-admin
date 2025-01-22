import React, { useState, useEffect } from 'react';
import styles from '../../common/Home.module.css'
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';

export const AdminHistoryEditComponent = ({ updateHandler, }) => {
    let [isData, setIsData] = useState({})
    let { color, historyList } = useSelector(state => state.userAuth)

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
        let dataObj = historyList.find(data => data._id.toString() === id.toString())
        setIsData(dataObj)
    }, [id])



    return (<>
        <div className={styles.homeScreen} style={{ backgroundColor: color.background }}>
            <div className={styles.timeline} style={{ backgroundColor: color.background }}>

                <div
                    style={{
                        fontFamily: "Arial, sans-serif",
                        color: "#000000", // Black text for white background
                        backgroundColor: "#ffffff", // White background
                        padding: "20px",
                        borderRadius: "8px",
                        margin: "20px auto",
                        width: "90%",
                        maxWidth: "600px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        lineHeight: "1.6",
                    }}
                >
                    <p style={{ marginBottom: "10px", fontSize: "16px" }}>
                        Dear <span style={{ fontWeight: "bold" }}>{isData.accountName}</span>
                    </p>

                    <p style={{ marginBottom: "20px", fontSize: "14px" }}>
                        <strong style={{ fontSize: "15px" }}>
                            alliedgemfinance.com Bank Electronic Notification Service
                        </strong>
                        <br />
                        We wish to inform you that a{" "}
                        <span style={{ fontWeight: "bold" }}>{isData.transactionType}</span> transaction
                        occurred on your account with us.
                        <br />
                        The details of this transaction are shown below:
                    </p>

                    <p
                        style={{
                            fontWeight: "bold",
                            marginBottom: "10px",
                            fontSize: "15px",
                            textDecoration: "underline",
                        }}
                    >
                        Transaction Notification
                    </p>

                    <div style={{ fontSize: "14px" }}>
                        <p>
                            <strong>Account Number:</strong> ******{isData.accountNumber?.slice(-4)}
                        </p>
                        <p>
                            <strong>Account Name:</strong> {isData.accountName}
                        </p>
                        <p>
                            <strong>Description:</strong> Debit ALERT TYPE
                        </p>
                        <p>
                            <strong>Amount:</strong> ${isData.amount}
                        </p>
                        <p>
                            <strong>Value Date:</strong> {isData.date}
                        </p>
                        <p>
                            <strong>Time of Transaction:</strong> {isData.time}
                        </p>
                        <p>
                            <strong>Document Number:</strong> {isData.transaction_number}
                        </p>
                        <p>
                            <strong>Duration:</strong> Transaction timeframe 9 - 12 working days
                        </p>
                    </div>
                </div>


                {historyList && isData && <form className={styles.editForm} onSubmit={submitHandler}>

                    <h2>Basic Info</h2>


                    <div className={styles.inputCards}>
                        <label>
                            Transaction Type
                        </label>
                        <input value={isData.transactionType} onChange={(e) => handleChangeHandler(e, 'transactionType')} type='text' readOnly />
                    </div>

                    <div className={styles.inputCards}>
                        <label>
                            status
                        </label>
                        <select onChange={(e) => handleChangeHandler(e, 'status')}
                            value={isData.status}
                        >
                            <option>
                                true

                            </option>
                            <option >
                                false
                            </option>

                        </select>


                    </div>


                    <div className={styles.inputCards}>
                        <label>
                            Date Of Transaction
                        </label>
                        <input value={isData.date} onChange={(e) => handleChangeHandler(e, 'date')} type='date' />
                    </div>

                    <div className={styles.inputCards}>
                        <label>
                            Amount
                        </label>

                        <input value={isData.amount} onChange={(e) => handleChangeHandler(e, 'amount')} type='number' />
                    </div>




                    <div className={styles.inputCards}>
                        <label>
                            Reason
                        </label>
                        <input value={isData.reason} onChange={(e) => handleChangeHandler(e, 'reason')} type='text' />
                    </div>



                    <div className={styles.buttonContainer} >
                        <button >Update</button>
                    </div>



                </form>}
            </div>






        </div></>)




}