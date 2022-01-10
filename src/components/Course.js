import React from 'react'
import Header from './Header'

import '../styles/courseStyle.css'

export default function Course() {
    return (
        <div>
            <Header/>

            {/* <div className="container px-4 py-3" id="icon-grid">
                <h3 className="pb-2 border-bottom">Student Name | Selected Courses</h3>

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-2">
                <div className="col d-flex align-items-start">
                    <div>
                    <h5 className="fw-bold mb-0">Featured title</h5>
                    <p>Paragraph of text beneath the heading to explain the heading.</p>
                    </div>
                </div>
                <div className="col d-flex align-items-start">
                    <div>
                    <h5 className="fw-bold mb-0">Featured title</h5>
                    <p>Paragraph of text beneath the heading to explain the heading.</p>
                    </div>
                </div>
                <div className="col d-flex align-items-start">
                    <div>
                    <h5 className="fw-bold mb-0">Featured title</h5>
                    <p>Paragraph of text beneath the heading to explain the heading.</p>
                    </div>
                </div>
                <div className="col d-flex align-items-start">
                    <div>
                    <h5 className="fw-bold mb-0">Featured title</h5>
                    <p>Paragraph of text beneath the heading to explain the heading.</p>
                    </div>
                </div>
                <div className="col d-flex align-items-start">
                    <div>
                    <h5 className="fw-bold mb-0">Featured title</h5>
                    <p>Paragraph of text beneath the heading to explain the heading.</p>
                    </div>
                </div>
                <div className="col d-flex align-items-start">
                    <div>
                    <h5 className="fw-bold mb-0">Featured title</h5>
                    <p>Paragraph of text beneath the heading to explain the heading.</p>
                    </div>
                </div>
                <div className="col d-flex align-items-start">
                    <div>
                    <h5 className="fw-bold mb-0">Featured title</h5>
                    <p>Paragraph of text beneath the heading to explain the heading.</p>
                    </div>
                </div>
                <div className="col d-flex align-items-start">
                    <div>
                    <h5 className="fw-bold mb-0">Featured title</h5>
                    <p>Paragraph of text beneath the heading to explain the heading.</p>
                    </div>
                </div>
                </div>
            </div> */}

            <div className="d-flex gap-5 justify-content-center" id="dropdownMacos">
            <ul className="dropdown-menu dropdown-menu-macos mx-0 shadow" style={{width: '220px'}}>
                <li><a className="dropdown-item active" href="/#">Action</a></li>
                <li><a className="dropdown-item" href="/#">Another action</a></li>
                <li><a className="dropdown-item" href="/#">Something else here</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="/#">Separated link</a></li>
            </ul>
            </div>

        </div>
    )
}
