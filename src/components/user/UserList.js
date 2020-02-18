import React from 'react';
import PropTypes from 'prop-types';
import UserListItem from "./UserListItem";
import { Scrollbars } from 'react-custom-scrollbars';

const UserList = props => {
    const {users} = props;
    return (
        <div className="w-full content">
            <Scrollbars>
                {users.map(user => {
                    return (
                        <UserListItem key={user.id} user={user} />
                    );
                })}
            </Scrollbars>
        </div>
    );
};

UserList.propTypes = {
    users: PropTypes.array.isRequired
};

export default UserList;