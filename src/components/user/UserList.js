import React from 'react';
import PropTypes from 'prop-types';
import UserListItem from "./UserListItem";

const UserList = props => {
    const {users} = props;
    return (
        <div>
            <div className="text-gray-600 font-semibold text-lg">Utilisateurs</div>
            {users.map(user => {
                return (
                    <UserListItem key={user.id} user={user} />
                );
            })}
        </div>
    );
};

UserList.propTypes = {
    users: PropTypes.array.isRequired
};

export default UserList;