import React from 'react';

const ChatConversationItem = ({message}) => {

    const renderConversationItem= () => {
        if(message.User === true){
            return (
                <div className={`flex justify-end mt-4 text-right`}>
                    <div>
                        <div>
                            <span className="text-xs mr-2">
                                {message.CreatedAt}
                            </span>
                            <span className="font-semibold text-sm">
                                {message.User}
                            </span>
                        </div>
                        <div>
                            {message.Message}
                        </div>
                    </div>
                </div>
            )
        }
        //<img src={avatar} alt={avatar} className="h-10 rounded-full ml-4 mr-2"/>
        //<img src={avatar} alt={avatar} className="h-10 rounded-full mr-4"/>

        return (
            <div className={`flex mt-4`}>
                <div>
                    <div>
                    <span className="font-semibold text-sm">
                        {message.User}
                    </span>
                    <span className="text-xs ml-2">
                        {message.CreatedAt}
                    </span>
                    </div>
                    <div>
                        {message.Message}
                    </div>
                </div>
            </div>
        )
    };

    return ( renderConversationItem() );
};

export default ChatConversationItem;