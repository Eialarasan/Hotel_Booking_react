import React, { useState } from "react";
import { Day, Months, Year } from "../utils";
import { useDispatch } from "react-redux";
import action from "../redux/action";
import Hotel from '../img/hotel.jpeg'

const roomTypes = [
    { value: 'Standard room', option: 'Standard room (1 to 2 people)' },
    { value: 'Family room', option: 'Family room (1 to 4 people)' },
    { value: 'Private room', option: 'Private room (1 to 3 people)' },
    { value: 'Mixed dorm room', option: 'Mixed dorm  room (6 people)' },
    { value: 'Female dorm room', option: 'Female dorm  room (6 people)' },
    { value: 'Male dorm room', option: 'Male dorm  room (6 people)' }
]
const HotelBooking = () => {
    const [formDetails, setFormDetails] = useState({})
    const [errMsgs, setErrmsgs] = useState({})
    const  dispatch=useDispatch()
    const submit = () => {
        console.log(formDetails,"check")
        if(!formDetails?.email){
            setErrmsgs({...errMsgs,email:'Please enter email'})
        }else if(!formDetails?.numOfGuests){
            setErrmsgs({...errMsgs,numOfGuests:'Please enter numberOfQuests'})
        }else if(!formDetails?.arrDate){
            setErrmsgs({...errMsgs,arrDate:'Please enter arrival date'})
        }else if(!formDetails?.arrHourMin){
            setErrmsgs({...errMsgs,arrHourMin:'Please enter arrival hour and min'})
        }else if(!formDetails?.arrTimeZone){
            setErrmsgs({...errMsgs,arrTimeZone:"Please enter  arrival Time zone"})
        }else if(!formDetails?.depDay){
            setErrmsgs({...errMsgs,depDay:'Please enter departure day'})
        }else if(!formDetails?.depMonth){
            setErrmsgs({...errMsgs,depMonth:'Please enter departure month'})
        }
        else if(!formDetails?.depYear){
            setErrmsgs({...errMsgs,depYear:'Please enter departure year'})
        }
        else if(!formDetails.freePickNo&&!formDetails.freePickYes){
            setErrmsgs({...errMsgs,freePick:"Please select free pick"})
        }else{
            console.log(formDetails,"check")
            dispatch(action.FormDetails(formDetails))
            window.open('/form')
        }
    }

    return <div className="Container">
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card" style={{ margin: '120px' }}>
                    <img height={130} src={Hotel}></img>
                    <div className="card-body">
                        <div className="header-text text-center">
                            <h4>Hotel Booking</h4>
                            <p className="text-muted">Experience something new every moment</p>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <label className="mb-2">Name</label>
                                <input className="form-control" type="text" value={formDetails.firstName} onChange={(e) => setFormDetails({ ...formDetails, firstName: e.target?.value })}></input>
                                <p className="text-muted mt-2" style={{ fontSize: '10px' }}>First name</p>
                               
                            </div>
                            <div className="col-3">
                                <label className="mb-2">Last name</label>
                                <input className="form-control" type="text" value={formDetails.lastName} onChange={(e) => setFormDetails({ ...formDetails, lastName: e.target?.value })}></input>
                                <p className="text-muted mt-2" style={{ fontSize: '10px' }}>Last name</p>

                            </div>
                            <div className="col-6">
                                <label className="mb-2">Email <span style={{ color: 'red' }}>*</span></label>
                                <input className="form-control" placeholder="ex:myname@gmail.com" type="email" value={formDetails.email} onChange={(e) =>{
                                     setFormDetails({ ...formDetails, email: e.target?.value })
                                     setErrmsgs({...errMsgs,email:""})
                                }}></input>
                                <p className="text-muted mt-2" style={{ fontSize: '10px' }}>example@example.com</p>
                                {
                                    errMsgs?.email&&<p style={{'color':'red'}}>{errMsgs?.email}</p>
                                }
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <label className="mb-2">Room type</label>
                                <select className="form-control" value={formDetails.roomType} onChange={(e) =>{ 
                                    setFormDetails({ ...formDetails, roomType: e.target?.value })
                                    }}>
                                    <option hidden> Select room type</option>
                                    {roomTypes.map((o) => {
                                        return <option value={o.value}>{o.option} </option>
                                    })
                                    }
                                </select>
                            </div>
                            <div className="col-6">
                                <label className="mb-2">Number of Guests <span style={{ color: 'red' }}>*</span></label>
                                <input className="form-control" placeholder="enter number of guests" type="text" value={formDetails.numOfGuests} onChange={(e) =>{
                                     setFormDetails({ ...formDetails, numOfGuests: e.target?.value })
                                     setErrmsgs({...errMsgs,numOfGuests:""})}}></input>
                                {
                                    errMsgs?.numOfGuests&&<p style={{'color':'red'}}>{errMsgs?.numOfGuests}</p>
                                }
                            </div>

                        </div>
                        <div className="mt-4">
                            <div className="row">
                                <label className="mb-2">Arrival Date & Time <span style={{ color: 'red' }}>*</span></label>

                                <div className="col-6">
                                    <input className="form-control" type="date" value={formDetails.arrDate} onChange={(e) => {
                                        setFormDetails({ ...formDetails, arrDate: e.target?.value })
                                        setErrmsgs({...errMsgs,arrDate:""})
                                        }}></input>
                                    <p className="text-muted mt-2" style={{ fontSize: '10px' }} >Date</p>
                                    {
                                    errMsgs?.arrDate&&<p style={{'color':'red'}}>{errMsgs?.arrDate}</p>
                                }
                                </div>
                                <div className="col-3">
                                    <input className="form-control " placeholder={'HH:MM'} style={{ 'width': '120px' }} type="text" value={formDetails.arrHourMin} onChange={(e) =>{
                                         setFormDetails({ ...formDetails, arrHourMin: e.target?.value })
                                         setErrmsgs({...errMsgs,arrHourMin:""})
                                         }}></input>
                                          {
                                    errMsgs?.arrHourMin&&<p style={{'color':'red'}}>{errMsgs?.arrHourMin}</p>
                                }
                                    <p className="text-muted mt-2" style={{ fontSize: '10px' }}>Hours minutes</p>
                                </div>
                                <div className="col-3">
                                    <select className="form-control" style={{ 'width': '120px' }} value={formDetails.arrTimeZone} onChange={(e) => {
                                        setFormDetails({ ...formDetails, arrTimeZone: e.target?.value })
                                        setErrmsgs({...errMsgs,arrTimeZone:""})
                                        }}>
                                        <option value={'AM'}>AM</option>
                                        <option value={'PM'}>PM</option>
                                    </select>
                                    {
                                    errMsgs?.arrTimeZone&&<p style={{'color':'red'}}>{errMsgs?.arrTimeZone}</p>
                                }
                                </div>
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="row">
                                <label className="mb-2">Departure Date & Time <span style={{ color: 'red' }}>*</span></label>
                                <div className="col-6">
                                    <select className="form-control"  value={formDetails.depMonth} onChange={(e) =>{
                                         setFormDetails({ ...formDetails, depMonth: e.target?.value })
                                         setErrmsgs({...errMsgs,depMonth:''})
                                        }
                                    }>
                                        <option hidden>
                                            Please select month
                                        </option>
                                        {
                                            Months.map((o) => {
                                                return <option value={o.value}>{o.option}</option>
                                            })
                                        }
                                    </select>
                                    {
                                    errMsgs?.depMonth&&<p style={{'color':'red'}}>{errMsgs?.depMonth}</p>
                                }
                                </div>
                                <div className="col-3">
                                    <select className="form-control" value={formDetails.depDay} onChange={(e) => {
                                        setFormDetails({ ...formDetails, depDay: e.target?.value })
                                        setErrmsgs({...errMsgs,depDay:""})
                                        }}>
                                        <option hidden>
                                            Please select day
                                        </option>
                                        {
                                            Day.map((o) => {
                                                return <option value={o.value}>{o.option}</option>
                                            })
                                        }
                                    </select>
                                    {
                                    errMsgs?.depDay&&<p style={{'color':'red'}}>{errMsgs?.depDay}</p>
                                }
                                </div>
                                <div className="col-3">
                                    <select className="form-control"  value={formDetails?.depYear} onChange={(e) =>{
                                         setFormDetails({ ...formDetails, depYear: e.target?.value })
                                         setErrmsgs({...errMsgs,depYear:""})
                                    }}>
                                        <option hidden>
                                            Please select Year
                                        </option>
                                        {
                                            Year.map((o) => {
                                                return <option value={o.value}>{o.option}</option>
                                            })
                                        }
                                    </select>
                                    {
                                    errMsgs?.depYear&&<p style={{'color':'red'}}>{errMsgs?.depYear}</p>
                                }
                                </div>
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="row">
                                <label className="mb-2">Free pickup ? <span style={{ color: 'red' }}>*</span></label>
                                <div className="col-6">
                                    <div className="d-flex">
                                        <input type="radio" name="frepick"  value={"Yes"} onChange={(e) =>{
                                             setFormDetails({ ...formDetails, freePickYes: e.target?.value,freePickNo:'' })
                                             setErrmsgs({...errMsgs,freePick:""})}}></input>
                                        <p className="mt-2"> Yes pick me on arrival</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="d-flex">
                                        <input type="radio" name="frepick" value={"No"} onChange={(e) =>{ setFormDetails({ ...formDetails, freePickNo: e.target?.value,freePickYes:'' })
                                        setErrmsgs({...errMsgs,freePick:""})
                                        }}></input>
                                        <p className="mt-2"> No thanks..</p>
                                    </div>
                                </div>
                                {
                                    errMsgs&&<p color="red">{errMsgs?.freePick}</p>
                                }
                            </div>
                           
                        </div>
                        {formDetails?.freePickYes&&<div className="mt-4">
                            <div className="row">
                                <label className="mb-2">Flight Number <span style={{ color: 'red' }}>*</span></label>
                                <div className="col-6">
                                    <input type="number" className="form-control" value={formDetails.flightNumber} onChange={(e) => setFormDetails({ ...formDetails, flightNumber: e.target?.value })}></input>
                                </div>
                            </div>
                        </div>}

                        <div className="mt-4">
                            <div className="row">
                                <label className="mb-2">Special Requests</label>
                                <div className="col-12">
                                    <textarea className="form-control" value={formDetails.specialRequest} onChange={(e) => setFormDetails({ ...formDetails, specialRequest: e.target?.value })}>
                                    </textarea>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="text-center">
                                <button type="button" className="btn btn-primary" style={{ 'backgroundColor': 'green', height: '40px', width: '180px' }} onClick={() => submit()}> Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
}
export default HotelBooking