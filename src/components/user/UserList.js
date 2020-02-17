import React from 'react';
import PropTypes from 'prop-types';
import UserListItem from "./UserListItem";

const UserList = props => {
    const {users} = props;
    return (
        <div className="w-full content">
            <div className="w-full h-full overflow-y-scroll">
                {users.map(user => {
                    return (
                        <UserListItem key={user.id} user={user} />
                    );
                })}
            </div>
        </div>
    );
};

UserList.propTypes = {
    users: PropTypes.array.isRequired
};

export default UserList;