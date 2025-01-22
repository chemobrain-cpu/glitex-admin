import React, { useState, useEffect } from 'react';
import styles from '../../common/Home.module.css';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { jsPDF } from 'jspdf'; // Importing jsPDF for PDF functionality

export const AdminHistoryEditComponent = ({ updateHandler }) => {
  const [isData, setIsData] = useState({});
  const { color, historyList } = useSelector((state) => state.userAuth);
  const { id } = useParams();

  // Handle field change
  const handleChangeHandler = (e, nameField) => {
    const val = e.target.value;
    setIsData((prev) => {
      const newData = { ...prev, [nameField]: val };
      return newData;
    });
  };

  // Handle form submission
  const submitHandler = (e) => {
    e.preventDefault();
    updateHandler(isData);
  };

  // Load data on component mount or when `id` changes
  useEffect(() => {
    const dataObj = historyList.find((data) => data._id.toString() === id.toString());
    setIsData(dataObj || {});
  }, [id, historyList]);

  // Function to print PDF
  const handlePrintPDF = () => {
    const doc = new jsPDF();
    const printContent = document.getElementById('print-div');

    doc.html(printContent, {
      callback: function (doc) {
        doc.save('receipt.pdf');
      },
      margin: [10, 10, 10, 10],
      x: 10,
      y: 10,
    });
  };

  return (
    <>
      <div style={{ backgroundColor: color.background, textAlign: 'left' }}>
        <div style={{ backgroundColor: color.background, padding: '0px' }}>
          {historyList && isData && (
            <form
              className={styles.editForm}
              onSubmit={submitHandler}
              style={{
                maxWidth: '600px',
                margin: '20px auto',
                padding: '20px',
                backgroundColor: '#fff',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                marginBottom: '100px',
              }}
            >
              <h2>Basic Info</h2>

              {/* Input fields */}
              {['transactionType', 'status', 'date', 'time', 'duration', 'accountNumber', 'accountName', 'amount', 'recieptFor', 'reason'].map((field) => (
                <div key={field} className={styles.inputCards} style={{ marginBottom: '15px' }}>
                  <label>{field.replace(/([A-Z])/g, ' $1').toUpperCase()}</label>
                  {field === 'status' ? (
                    <select
                      onChange={(e) => handleChangeHandler(e, field)}
                      value={isData[field]}
                      style={{
                        width: '100%',
                        padding: '8px',
                        borderRadius: '4px',
                        backgroundColor: '#f5f5f5',
                      }}
                    >
                      <option value="true">True</option>
                      <option value="false">False</option>
                    </select>
                  ) : (
                    <input
                      value={isData[field]}
                      onChange={(e) => handleChangeHandler(e, field)}
                      type={field === 'amount' ? 'number' : 'text'}
                      readOnly={field === 'transactionType'}
                      style={{ width: '100%', padding: '8px', borderRadius: '4px' }}
                    />
                  )}
                </div>
              ))}

              {/* Submit Button */}
              <div className={styles.buttonContainer} style={{ textAlign: 'center', width: '100%' }}>
                <button
                  type="submit"
                  style={{
                    backgroundColor: '#382b7d',
                    color: 'white',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '16px',
                  }}
                >
                  Update
                </button>
              </div>
            </form>
          )}

          {/* PDF Print Area */}
          <div
            style={{
              fontFamily: 'Arial, sans-serif',
              color: '#333',
              backgroundColor: '#fff',
              padding: '30px',
              borderRadius: '12px',
              margin: '20px auto',
              width: '85%',
              maxWidth: '700px',
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
              lineHeight: '1.8',
              position: 'relative',
              transition: 'all 0.3s ease',
            }}
          >
            <div id="print-div" style={{ width: '100%' }}>
              {isData.accountName && (
                <p style={{ marginBottom: '12px', fontSize: '18px', fontWeight: 'bold' }}>
                  Dear <span style={{ color: '#382b7d' }}>{isData.recieptFor}</span>
                </p>
              )}

              <p style={{ marginBottom: '24px', fontSize: '16px', color: '#555' }}>
                <strong style={{ fontSize: '18px', color: '#382b7d' }}>
                  glitexfiance.net Bank Electronic Notification Service
                </strong>
                <br />
                We wish to inform you that a{' '}
                {isData.transactionType && (
                  <span style={{ fontWeight: 'bold', color: '#382b7d' }}>
                    {isData.transactionType}
                  </span>
                )}{' '}
                transaction occurred on your account with us.
                <br />
                The details of this transaction are shown below:
              </p>

              <p
                style={{
                  fontWeight: 'bold',
                  marginBottom: '12px',
                  fontSize: '17px',
                  color: '#333',
                  textDecoration: 'underline',
                }}
              >
                Transaction Notification
              </p>

              <div style={{ fontSize: '15px', color: '#444' }}>
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
                  <strong>Description:</strong> {isData.transactionType} ALERT TYPE
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

            {/* Button to download PDF */}
            <button
              onClick={handlePrintPDF}
              style={{
                position: 'absolute',
                top: '100%',
                right: '10px',
                padding: '12px 20px',
                fontSize: '16px',
                backgroundColor: '#382b7d',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                marginTop: '20px',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = '#5e3b8d')}
              onMouseLeave={(e) => (e.target.style.backgroundColor = '#382b7d')}
            >
              Download Receipt as PDF
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
