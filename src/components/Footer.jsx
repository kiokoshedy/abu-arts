import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

export default function App() {
    return (
        <MDBFooter backgroundColor='light' className='text-center text-lg-left' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            <MDBContainer className='p-1'>
                <MDBRow>
                    <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
                        <h5 className='text-uppercase'>ABUARTS DECOR</h5>

                        <p>
                        “The Earth without art is just eh.” – Unknown 
                        </p>
                    </MDBCol>

                    <MDBCol lg='3' md='6' className='mb-4 mb-md-2'>

                        <br/>
                        <div className="icons mx-auto">
                            <a href="https://twitter.com/KiokoKe_" className="bi bi-facebook me-4 fa-lg">

                            </a>
                            <a href="https://github.com/kiokoshedy" className="bi bi-instagram me-4 fa-lg">

                            </a>
                            <a href="https://www.linkedin.com/in/shadrack-kioko-b2a712179/" className="bi bi-twitter me-4 fa-lg">

                            </a>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                &copy; {new Date().getFullYear()}{' '}
                <a className='text-dark' href='https://abuartsdecor.com/'>
                    abuartsdecor.com
                </a>
            </div>
        </MDBFooter>
    );
}