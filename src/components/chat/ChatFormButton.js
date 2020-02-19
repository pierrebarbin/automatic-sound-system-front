import React from 'react';
import PropTypes from 'prop-types';
import SVG from "react-inlinesvg";
import { useTranslation } from 'react-i18next';
import SendIcon from "../../assets/icons/zondicons/send.svg";

const ChatFormButton = ({message,addMessages,resetMessage}) => {
    const { t } = useTranslation();
    return (
        <button
            type="button"
            className="flex-grow-0 mx-3 cursor-pointer focus:outline-none text-focus"
            onClick={() => {
                addMessages(message);
                resetMessage();
            }}
        >
            <SVG
                className="h-6 w-6 fill-current"
                src={SendIcon}
                title={t('global.user.tchat.form.send')}
            />
        </button>
    );
};

ChatFormButton.propTypes = {

};

export default ChatFormButton;