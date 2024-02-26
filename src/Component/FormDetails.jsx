import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getFormDetails } from "../redux/reducers/FormReducers";




const FormDetails = () => {
    const formDataSelector = useSelector(getFormDetails)

    console.log(formDataSelector, "formselector")
    return <div className="Container">
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card" style={{ margin: '120px' }}>
                    <div className="card-body">
                        <div className="header-text text-center">
                            <h4>Hotel Booking</h4>
                            <p className="text-muted">Experience something new every moment</p>
                        </div>
                        <hr></hr>
                        <div className="row mt-4">
                            <div className="col-6">
                              <p style={{fontWeight:'bold'}}>Name:</p>
                            </div>
                            <div className="col-6">
                              <p >{formDataSelector?.firstName} {formDataSelector?.lastName}</p>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-6">
                              <p style={{fontWeight:'bold'}}>Email:</p>
                            </div>
                            <div className="col-6">
                              <p >{formDataSelector?.email}</p>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-6">
                              <p style={{fontWeight:'bold'}}>Room type:</p>
                            </div>
                            <div className="col-6">
                              <p >{formDataSelector?.roomType}</p>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-6">
                              <p style={{fontWeight:'bold'}}>Number of guests:</p>
                            </div>
                            <div className="col-6">
                              <p >{formDataSelector?.numOfGuests}</p>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-6">
                              <p style={{fontWeight:'bold'}}>Arrival date:</p>
                            </div>
                            <div className="col-6">
                              <p >{formDataSelector?.arrDate} {formDataSelector?.arrHourMin} {formDataSelector?.arrTimeZone} </p>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-6">
                              <p style={{fontWeight:'bold'}}>Departure Date:</p>
                            </div>
                            <div className="col-6">
                              <p>{formDataSelector?.depDay} {formDataSelector?.depMonth} {formDataSelector?.depYear}</p>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-6">
                              <p style={{fontWeight:'bold'}}>Free Pick:</p>
                            </div>
                            <div className="col-6">
                              <p>{formDataSelector?.freePickYes?formDataSelector?.freePickYes:formDataSelector?.freePickNo}</p>
                            </div>
                        </div>
                        {formDataSelector?.freePickYes&&<div className="row mt-4">
                            <div className="col-6">
                              <p style={{fontWeight:'bold'}}>Flight number:</p>
                            </div>
                            <div className="col-6">
                              <p>{formDataSelector?.flightNumber}</p>
                            </div>
                        </div>}
                        {<div className="row mt-4">
                            <div className="col-6">
                              <p style={{fontWeight:'bold'}}>Special requests:</p>
                            </div>
                            <div className="col-6">
                              <p>{formDataSelector?.specialRequest}</p>
                            </div>
                        </div>}
                    </div>
                </div>
            </div>
        </div>

    </div>
}
export default FormDetails