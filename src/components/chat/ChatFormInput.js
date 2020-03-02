import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const ChatFormInput = ({message,onMessageChange,addMessages,resetMessage}) => {
    const { t } = useTranslation();
    return (
        <div>
            <input
                className="flex-grow bg-gray-800 placeholder-gray-500 p-2 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder={t('global.user.tchat.form.placeholder')}
                value={message}
                onChange={onMessageChange}
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        addMessages(message);
                        resetMessage();
                    }
                }}
            />
        </div>
    );
};

ChatFormInput.propTypes = {

};

export default ChatFormInput;