import React from 'react';
import PropTypes from 'prop-types';
import UserListItem from "./UserListItem";
import { useTranslation } from 'react-i18next';

const UserList = props => {
    const { t } = useTranslation();
    const {users} = props;
    return (
        <div>
            <div className="text-gray-600 font-semibold text-lg">{t('global.user.list.title')}</div>
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