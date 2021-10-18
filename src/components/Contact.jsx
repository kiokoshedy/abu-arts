import React from 'react'
import contact from '../images/contact.png';

const Contact = () => {
    return (
        <div>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-12 text-center py-4 my-4">
                        <h1>Always call us For any queries and customizations.</h1>
                        <hr />
                    </div>
                    <div className="row">
                        <div className="col-md-5 d-flex justify-content-center">
                            <img src={contact} alt="Contact Us"
                                height="300px" width="300px" />
                        </div>
                        <div className="col-md-6">
                            <form>
                                <div class="mb-3">
                                    <label for="exampleForm" class="form-label">Full Name</label>
                                    <input type="email" class="form-control" id="exampleForm" placeholder="Abu Arts"/>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="abuarts@email.com"/>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1"placeholder="Message us your comments, or anything you would wish us to do for you ASAP" rows="3"></textarea>
                                </div>
                                <button type="submit" class="btn btn-outline-primary">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
