import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const ChatFormInput = ({message,onMessageChange}) => {
    const { t } = useTranslation();
    return (
        <div>
            <input
                className="flex-grow bg-gray-800 placeholder-gray-500 p-2 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder={t('global.user.tchat.form.placeholder')}
                value={message}
                onChange={onMessageChange}
            />
        </div>
    );
};

ChatFormInput.propTypes = {

};

export default ChatFormInput;