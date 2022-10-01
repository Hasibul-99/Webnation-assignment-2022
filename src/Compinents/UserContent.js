import React, { Fragment } from 'react'

export default function UserContent({user}) {
    return (
        <Fragment>
            <div className="col-lg-4 col-md-12 col-sm-12 mb-4">
                <div className="box regular-member">
                    <h2>{user.name}</h2>
                    <h5><strong>E-mail: </strong>{user.email}</h5>
                    <h5><strong>Phone: </strong>{user.phone}</h5>
                </div>
            </div>
        </Fragment>
    )
}
