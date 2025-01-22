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

//className={styles.timeline}

    return (<>
        <div style={{ backgroundColor: color.background ,textAlign:'left'}}>
            <div  style={{ backgroundColor: color.background,padding:'0px' }} >



                {historyList && isData && (
                    <form
                        className={styles.editForm}
                        onSubmit={submitHandler}
                        style={{
                            maxWidth: "600px",
                            margin: "20px auto",
                            padding: "20px",
                            backgroundColor: "#fff",
                            borderRadius: "8px",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                            marginBottom: '100px'
                        }}
                    >
                        <h2>Basic Info</h2>

                        <div className={styles.inputCards} style={{ marginBottom: "15px" }}>
                            <label>Transaction Type</label>
                            <input
                                value={isData.transactionType}
                                onChange={(e) => handleChangeHandler(e, "transactionType")}
                                type="text"
                                readOnly
                                style={{ width: "100%", padding: "8px", borderRadius: "4px" }}
                            />
                        </div>

                        <div className={styles.inputCards} style={{ marginBottom: "15px" }}>
                            <label>Status</label>
                            <select
                                onChange={(e) => handleChangeHandler(e, "status")}
                                value={isData.status}
                                style={{
                                    width: "100%",
                                    padding: "8px",
                                    borderRadius: "4px",
                                    backgroundColor: "#f5f5f5",
                                }}
                            >
                                <option>true</option>
                                <option>false</option>
                            </select>
                        </div>

                        <div className={styles.inputCards} style={{ marginBottom: "15px" }}>
                            <label>Date of Transaction</label>
                            <input
                                value={isData.date}
                                onChange={(e) => handleChangeHandler(e, "date")}
                                type="text"
                                style={{ width: "100%", padding: "8px", borderRadius: "4px" }}
                            />
                        </div>

                        <div className={styles.inputCards} style={{ marginBottom: "15px" }}>
                            <label>Time of Transaction</label>
                            <input
                                value={isData.time}
                                onChange={(e) => handleChangeHandler(e, "time")}
                                type="text"
                                style={{ width: "100%", padding: "8px", borderRadius: "4px" }}
                            />
                        </div>

                        <div className={styles.inputCards} style={{ marginBottom: "15px" }}>
                            <label>Transaction Duration</label>
                            <input
                                value={isData.duration}
                                onChange={(e) => handleChangeHandler(e, "duration")}
                                type="text"
                                style={{ width: "100%", padding: "8px", borderRadius: "4px" }}
                            />
                        </div>

                        <div className={styles.inputCards} style={{ marginBottom: "15px" }}>
                            <label>Account Number</label>
                            <input
                                value={isData.accountNumber}
                                onChange={(e) => handleChangeHandler(e, "accountNumber")}
                                type="text"
                                style={{ width: "100%", padding: "8px", borderRadius: "4px" }}
                            />
                        </div>

                        <div className={styles.inputCards} style={{ marginBottom: "15px" }}>
                            <label>Account Name</label>
                            <input
                                value={isData.accountName}
                                onChange={(e) => handleChangeHandler(e, "accountName")}
                                type="text"
                                style={{ width: "100%", padding: "8px", borderRadius: "4px" }}
                            />
                        </div>





                        <div className={styles.inputCards} style={{ marginBottom: "15px" }}>
                            <label>Amount</label>
                            <input
                                value={isData.amount}
                                onChange={(e) => handleChangeHandler(e, "amount")}
                                type="number"
                                style={{ width: "100%", padding: "8px", borderRadius: "4px" }}
                            />
                        </div>

                        <div className={styles.inputCards} style={{ marginBottom: "15px" }}>
                            <label>Reason</label>
                            <input
                                value={isData.reason}
                                onChange={(e) => handleChangeHandler(e, "reason")}
                                type="text"
                                style={{ width: "100%", padding: "8px", borderRadius: "4px" }}
                            />
                        </div>

                        <div className={styles.buttonContainer} style={{ textAlign: "center", width: '100%' }}>
                            <button
                                style={{
                                    backgroundColor: "#382b7d",
                                    color: "white",
                                    padding: "10px 20px",
                                    border: "none",
                                    borderRadius: "5px",
                                    cursor: "pointer",
                                    fontSize: "16px",

                                }}
                            >
                                Update
                            </button>
                        </div>
                    </form>
                )}



<div
    style={{
        fontFamily: "Arial, sans-serif",
        color: "#000000",
        backgroundColor: "#ffffff",
        padding: "20px",
        borderRadius: "8px",
        margin: "20px auto",
        width: "90%",
        maxWidth: "600px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        lineHeight: "1.6",
        position: "relative",
    }}
>
    

    <div id="print-div" style={{ width: '100%' }}>
        {isData.accountName && (
            <p style={{ marginBottom: "10px", fontSize: "16px" }}>
                Dear <span style={{ fontWeight: "bold" }}>{isData.accountName}</span>
            </p>
        )}

        <p style={{ marginBottom: "20px", fontSize: "14px" }}>
            <strong style={{ fontSize: "15px" }}>
                glitexfiance.net Bank Electronic Notification Service
            </strong>
            <br />
            We wish to inform you that a{" "}
            {isData.transactionType && (
                <span style={{ fontWeight: "bold" }}>{isData.transactionType}</span>
            )} transaction occurred on your account with us.
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
            {isData.accountNumber && (
                <p>
                    <strong>Account Number:</strong> ******{isData.accountNumber?.slice(-4)}
                </p>
            )}
            {isData.accountName && (
                <p>
                    <strong>Account Name:</strong> {isData.accountName}
                </p>
            )}
            <p>
                <strong>Description:</strong> ${isData.transactionType} ALERT TYPE
            </p>
            {isData.amount && (
                <p>
                    <strong>Amount:</strong> ${isData.amount}
                </p>
            )}
            {isData.date && (
                <p>
                    <strong>Value Date:</strong> {isData.date}
                </p>
            )}
            {isData.time && (
                <p>
                    <strong>Time of Transaction:</strong> {isData.time}
                </p>
            )}
            {isData.transaction_number && (
                <p>
                    <strong>Document Number:</strong> {isData.transaction_number}
                </p>
            )}
            {isData.duration && (
                <p>
                    <strong>Duration:</strong> Transaction timeframe {isData.duration} working days
                </p>
            )}
        </div>
    </div>




    <button
        onClick={() => {
            const printContent = document.getElementById("print-div").innerHTML;
            const printWindow = window.open("", "_blank");
            printWindow.document.open();
            printWindow.document.write(`
                <html>
                    <head>
                        <title>Print Receipt</title>
                        <style>
                            body {
                                font-family: Arial, sans-serif;
                                margin: 0;
                                padding: 20px;
                                background-color: #ffffff;
                                color: #000000;
                            }
                        </style>
                    </head>
                    <body>
                        ${printContent}
                    </body>
                </html>
            `);
            printWindow.document.close();
            printWindow.print();
            printWindow.close();
        }}
        style={{
            position: "absolute",
            top: "100%",
            right: "10px",
            padding: "10px 15px",
            fontSize: "14px",
            backgroundColor:'#382b7d',
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop:'20px'
        }}
    >
     Receipt
    </button>
</div>

            </div>








        </div></>)




}