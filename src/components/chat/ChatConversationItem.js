import React from 'react';

const ChatConversationItem = ({message}) => {
    const {id, name, avatar, content, isMe} = message;

    const renderConversationItem= () => {
        if(isMe === true){
            return (
                <div className={`flex justify-end mt-4 text-right`}>
                    <div>
                        <div>
                            <span className="text-xs mr-2">
                                10:11
                            </span>
                            <span className="font-semibold text-sm">
                                {name}
                            </span>
                        </div>
                        <div>
                            {content}
                        </div>
                    </div>
                    <img src={avatar} alt={avatar} className="h-10 rounded-full ml-4 mr-2"/>
                </div>
            )
        }

        return (
            <div className={`flex mt-4`}>
                <img src={avatar} alt={avatar} className="h-10 rounded-full mr-4"/>
                <div>
                    <div>
                    <span className="font-semibold text-sm">
                        {name}
                    </span>
                        <span className="text-xs ml-2">
                        10:11
                    </span>
                    </div>
                    <div>
                        {content}
                    </div>
                </div>
            </div>
        )
    };

    return ( renderConversationItem() );
};

export default ChatConversationItem;