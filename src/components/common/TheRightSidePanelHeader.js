import React from 'react';
import SVG from "react-inlinesvg";
import UserGroupIcon from "../../assets/icons/zondicons/user-group.svg";
import ConversationIcon from "../../assets/icons/zondicons/conversation.svg";
import {useTranslation} from "react-i18next";

const TheRightSidePanelHeader = ({currentTab, onChangeTab}) => {
    const { t } = useTranslation();
    return (
        <div className="flex justify-between">
            <div className=" font-semibold text-lg flex-grow flex items-center justify-center">
                <button
                    type="button"
                    className={`p-2 rounded-full cursor-pointer focus:outline-none ${currentTab === 'users' ? 'bg-gray-800' : ''}`}
                    onClick={() => onChangeTab('users')}
                >
                    <SVG
                        className="h-5 w-5 fill-current"
                        src={UserGroupIcon}
                        title={t('global.user.list.title')}
                    />
                </button>
            </div>

            <div className="separator-r flex-grow-0"/>

            <div className="font-semibold text-lg flex-grow flex items-center justify-center">
                <button
                    type="button"
                    className={`p-2 rounded-full cursor-pointer focus:outline-none ${currentTab === 'chat' ? 'bg-gray-800' : ''}`}
                    onClick={() => onChangeTab('chat')}
                >
                    <SVG
                        className="h-5 w-5 fill-current"
                        src={ConversationIcon}
                        title={t('global.user.tchat.title')}
                    />
                </button>
            </div>
        </div>
    );
};

export default TheRightSidePanelHeader;