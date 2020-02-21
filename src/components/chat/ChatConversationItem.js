import React from 'react';
import {axios} from "../../service/axios";

const ChatConversationItem = ({message}) => {

    const renderConversationItem= () => {
        axios.get('/users/current')
            .then(function (response) {
                if (message.user.id === response.data.user.id) {
                    return (
                        <div className={`flex justify-end mt-4 text-right`}>
                            <div>
                                <div>
                            <span className="text-xs mr-2">
                                {message.createdAt}
                            </span>
                                    <span className="font-semibold text-sm">
                                {message.user.username}
                            </span>
                                </div>
                                <div>
                                    {message.message}
                                </div>
                            </div>
                        </div>
                    )
                }
                //<img src={avatar} alt={avatar} className="h-10 rounded-full ml-4 mr-2"/>
                //<img src={avatar} alt={avatar} className="h-10 rounded-full mr-4"/>
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });

            return (
                <div className={`flex mt-4`}>
                    <div>
                        <div>
                        <span className="font-semibold text-sm">
                            {message.user.username}
                        </span>
                            <span className="text-xs ml-2">
                            {message.createdAt}
                        </span>
                        </div>
                        <div>
                            {message.message}
                        </div>
                    </div>
                </div>
            );
        };

    return (renderConversationItem());
};

export default ChatConversationItem;