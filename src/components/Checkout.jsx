import React from 'react'
import { useSelector } from 'react-redux'
import mpesaLogo from '../images/mpesaLogo.png';

const Checkout = () => {

    const state = useSelector((state) => state.addItem)

    var total = 0;
    const itemList = (item) => {

        total = total + item.price
        return (
            <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                    <h6 className="my-0">{item.title}</h6>
                </div>
                <span className="text-muted">Kes {item.price}</span>
            </li>
        );
    }
    return (
        <div>
            <div className="container my-5">

                <div className="row g-5">
                    <div className="col-md-5 col-lg-4 order-md-last">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-primary">Your cart</span>
                            <span className="badge bg-primary rounded-pill">{state.length}</span>
                        </h4>
                        <ul className="list-group mb-3">

                            {state.map(itemList)}

                            <li className="list-group-item d-flex justify-content-between">
                                <span>Total (KES)</span>
                                <strong>KES {total}</strong>
                            </li>
                        </ul>

                       
                    </div>
                    <div className="col-md-7 col-lg-8">
                        <h4 className="mb-3">Billing address</h4>
                        <form className="needs-validation" novalidate="">
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <label htmlFor="firstName" className="form-label">First name</label>
                                    <input type="text" className="form-control" id="firstName" placeholder="Abu " value="" required="" />
                                    <div className="invalid-feedback">
                                        Valid first name is required.
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <label htmlFor="lastName" className="form-label">Last name</label>
                                    <input type="text" className="form-control" id="lastName" placeholder="Arts" value="" required="" />
                                    <div className="invalid-feedback">
                                        Valid last name is required.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="email" className="form-label">Email <span className="text-muted">(Optional)</span></label>
                                    <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                                    <div className="invalid-feedback">
                                        Please enter a valid email address for shipping updates.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="address" className="form-label">Address</label>
                                    <input type="text" className="form-control" id="address" placeholder="1234 Main St" required="" />
                                    <div className="invalid-feedback">
                                        Please enter your shipping address.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="address2" className="form-label">Address 2 <span className="text-muted">(Optional)</span></label>
                                    <input type="text" className="form-control" id="address2" placeholder="Apartment or additional address details" />
                                </div>

                                <div className="col-md-3">
                                    <label htmlFor="country" className="form-label">County</label>
                                    <select className="form-select" id="country" required="">
                                        <option value="">Choose...</option>
                                        <option>Nairobi</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Please select a valid County.
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <label htmlFor="state" className="form-label">Constituency</label>
                                    <input type="text" className="form-control" id="constituency" placeholder="" required="" />
                                    <div className="invalid-feedback">
                                        Please provide a valid Constituency.
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <label htmlFor="zip" className="form-label">Street</label>
                                    <input type="text" className="form-control" id="estate" placeholder="" required="" />
                                    <div className="invalid-feedback">
                                    Street required.
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="zip" className="form-label"> Estate</label>
                                    <input type="text" className="form-control" id="estate" placeholder="" required="" />
                                    <div className="invalid-feedback">
                                    Estate required.
                                    </div>
                                </div>
                            </div>

                            <hr className="my-4" />

                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="same-address" />
                                <label className="form-check-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
                            </div>

                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="save-info" />
                                <label className="form-check-label" htmlFor="save-info">Save this information for next time</label>
                            </div>

                            <hr className="my-4" />

                            <h4 className="mb-3">Payment</h4>

                            <div className="my-3">
                                
                                <div className="form-check">
                                    <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required="" />
                                    <label className="form-check-label" htmlFor="debit">
                                        <div>
                                        <img src={mpesaLogo} class="" alt="Art" height="25px" />
                                        </div>
                                        
                                    </label>
                                </div>
                                
                                
                            </div>

                            <div class="row gy-3">
                                <div class="col-md-6">
                                    <label for="cc-name" class="form-label">Your Name</label>
                                    <input type="text" class="form-control" id="cc-name" placeholder="" required=""/>
                                        <small class="text-muted">Full name used for Mpesa.</small>
                                        <div class="invalid-feedback">
                                            Mpesa name is required!
                                        </div>
                                </div>

                                <div class="col-md-6">
                                    <label for="cc-number" class="form-label">Mpesa number</label>
                                    <input type="text" class="form-control" id="cc-number" placeholder="" required=""/>
                                        <small class="text-muted">Mobile number to make payment.</small>
                                        <div class="invalid-feedback">
                                        Mpesa Number is required
                                        </div>
                                </div>

                            </div>

                            <hr className="my-4" />

                            <button className="w-100 btn btn-outline-primary mb-5 " type="submit">Continue to checkout</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout
