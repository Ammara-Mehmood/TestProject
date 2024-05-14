import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, removeUser, updateUser } from '../Redux/Store';
import 'bootstrap/dist/css/bootstrap.min.css';

const Users = () => {
  const users = useSelector(state => state.users.users);
  const dispatch = useDispatch();

  // Local state for managing form inputs and editing state
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [editingUserId, setEditingUserId] = useState(null);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddUser = () => {
    dispatch(
      addUser({
        id: Math.random().toString(36).substr(2, 9), // Random ID generation
        ...formData,
      })
    );
    setFormData({ name: '', email: '' });
  };

  const handleRemoveUser = id => {
    dispatch(removeUser(id));
  };

  const handleEditUser = (id, currentName, currentEmail) => {
    setFormData({ name: currentName, email: currentEmail });
    setEditingUserId(id);
  };

  const handleUpdateUser = () => {
    dispatch(
      updateUser({
        id: editingUserId,
        data: formData,
      })
    );
    setFormData({ name: '', email: '' });
    setEditingUserId(null);
  };

  return (
    <div className=" w-30 vh-100 p-4">
      <div className="card p-4">
        <h1 className="mb-4 text-center">Users</h1>
        <ul className="list-group mb-4">
          {users.map(user => (
            <li key={user.id} className="list-group-item">
              <div>
                {user.name} - {user.email}{' '}
                <button
                  className="btn btn-danger"
                  onClick={() => handleRemoveUser(user.id)}
                >
                  Remove
                </button>
                <button
                  className="btn btn-primary ms-2"
                  onClick={() =>
                    handleEditUser(user.id, user.name, user.email)
                  }
                >
                  Edit
                </button>
              </div>
            </li>
          ))}
        </ul>
        {(editingUserId !== null || !editingUserId) && (
          <div>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <input
              type="email"
              className="form-control mb-2"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {editingUserId !== null ? (
              <button
                className="btn btn-primary me-2"
                onClick={handleUpdateUser}
              >
                Edit User
              </button>
            ) : (
              <button className="btn btn-success" onClick={handleAddUser}>
                Add User
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Users;
