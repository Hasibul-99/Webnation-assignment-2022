import React, { Fragment, useEffect, useState } from 'react';
import Modal from 'react-modal';
import AddMember from '../Compinents/AddMember';
import UserContent from '../Compinents/UserContent';
import { USERS } from '../Scripts/api';
import { getData } from '../Scripts/api-service';
import toast, { Toaster } from 'react-hot-toast';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    padding: 0,
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: '1px solid #000000'
  },
};

export default function Home() {
  const [modalIsOpen, setIsModalOpen] = React.useState(false);
  const [users, setUsers] = useState([]);

  const handelModalSubmit = (values) => {
    users.unshift(values);
    setUsers([...users]);
    setIsModalOpen(false);
    toast('User Added Successfully!');
  }

  const getUserList = async () => {
    let res = await getData(USERS);

    if (res) {
      let masterData = res?.data;
      setUsers(masterData);
    }
  } 

  useEffect(() => {
    getUserList()
  }, [])

  return (
    <Fragment>
      <div className='home-page'>
        <div className='container'>
          <div className='row justify-content-md-center'>
            <div className="col-md-8">
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Search..." />
              </div>
            </div>
            <div className="col-6 col-md-2">
              <button type="button" className="btn btn-outline-success"
                data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setIsModalOpen(true)}>Add</button>
            </div>
          </div>

          <div className="row user-list">
            {
              users?.length ? <>
              {
                users.map(user => <UserContent user={user} key={user.id}></UserContent>)
              }
              </> : null
            }
            
          </div>

        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        ariaHideApp={false}
        contentLabel="Example Modal"
      >
        <AddMember setIsModalOpen={setIsModalOpen} handelModalSubmit={handelModalSubmit}></AddMember>
      </Modal>

    </Fragment>

  )
}