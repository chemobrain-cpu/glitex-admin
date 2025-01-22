import React, { useState, useEffect } from 'react';
import styles from '../../common/Home.module.css'
import { useSelector } from "react-redux";
import { Error } from "../../common/Error";





export const AdminDebitComponent = ({ updateHandler, }) => {
    let { color,  usersList } = useSelector(state => state.userAuth)
    let [isEmail, setIsEmail] = useState()

    //getting current user
    let [isCurrentUser, setIsCurrentUser] = useState(usersList[0])
   

    let [isReason,setIsReason] = useState('')
    let [ isDate,setIsDate] = useState()
    let [ isTime,setIsTime] = useState()

    let [isLoading, setIsLoading] = useState(true)
    let [isError, setIsError] = useState(false)


    let [isAmount, setIsAmount] = useState(false)



    let handleEmailChangeHandler = (e) => {
        setIsLoading(true)
        setIsEmail(e.target.value)
        let newCurrentUser = usersList.find(data=>data.email === e.target.value)
        setIsCurrentUser(newCurrentUser)
        //modify current user
        setIsLoading(true)
        setTimeout(()=>{
            setIsLoading(false)
        },5000)
       
    }







    let changeAmountHandler = (e)=>{
        setIsAmount(e.target.value)
    }

    let changeReasonHandler = (e)=>{
        setIsReason(e.target.value)
    }


    let changeDateHandler = (e) =>{
        setIsDate(e.target.value)
    }

    let changeTimeHandler = (e) =>{
        setIsTime(e.target.value)
    }



    useEffect(() => {
        setIsCurrentUser(usersList[0])
     
    }, [])


    let submitHandler = (e) => {
        e.preventDefault()
      
        let data ={
            user:isCurrentUser,
            amount:isAmount,
            date:isDate,
            reason:isReason,
            time:isTime
        }
        
        updateHandler(data)
    }



    if (isError) {
        return <Error />
    }


    return (<>
        <div className={styles.homeScreen} style={{ backgroundColor: color.background }}>
            <div className={styles.timeline} style={{ backgroundColor: color.background }}>
                <form className={styles.editForm} onSubmit={submitHandler}>
                    <h2>SELECT RECIPIENT </h2>



                    <div className={styles.inputCards}>
                        <label>
                            Select client to debit
                        </label>

                        <select value={isEmail} onChange={(e) => handleEmailChangeHandler(e, 'email')}  >
                            {usersList.length > 0 && usersList.map(data => <option>{data.email}</option>)}
                        </select>
                    </div>


                   


                    <h2>ACCOUNT INFORMATION </h2>


                    <div className={styles.inputCards}>
                        <label>
                            Account Name
                        </label>
                        <input value={isCurrentUser?.firstName} readOnly
                        />
                    </div>

                    <div className={styles.inputCards}>
                        <label>
                            Account Number
                        </label>

                        <input value={isCurrentUser?.acountNumber} readOnly
                        />
                    </div>

                    <div className={styles.inputCards}>
                        <label>
                            Account Balance
                        </label>

                        <input value={isCurrentUser?.accountBalance} readOnly
                        />
                    </div>


                
                    <div className={styles.inputCards}>
                        <label>
                            Debit Amount
                        </label>

                        <input  value={isAmount} onChange={changeAmountHandler} type='number'  required
                        />
                    </div>

                    <div className={styles.inputCards}>
                        <label>
                           Reason
                        </label>

                        <input  value={isReason} onChange={changeReasonHandler} type='text'  required
                        />
                    </div>

                    <div className={styles.inputCards}>
                        <label>
                            date
                           
                        </label>

                        <input  value={isDate} onChange={changeDateHandler} type='date'  required
                        />
                    </div>

                    <div className={styles.inputCards}>
                        <label>
                           time
                        </label>

                        <input  value={isTime} onChange={changeTimeHandler} type='time'  required
                        />
                    </div>



                    <div className={styles.buttonContainer} >
                        <button >Debit Client</button>
                    </div>




                </form>
            </div>






        </div></>)




}