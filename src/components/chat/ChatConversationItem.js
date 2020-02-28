import React from 'react';
import {getUserLogged} from "../../service/security/userService";

const ChatConversationItem = props => {
    getUserLogged()
        .then(response => {
            if (props.user.id === response.data.user.id) {
                return (
                    <div className={`flex justify-end mt-4 text-right`}>
                        <div>
                            <div>
                            <span className="text-xs mr-2">
                                {props.message.createdAt}
                            </span>
                                <span className="font-semibold text-sm">
                                {props.user.username}
                            </span>
                            </div>
                            <div>
                                {props.message}
                            </div>
                        </div>
                    </div>
                )
            }
            //<img src={avatar} alt={avatar} className="h-10 rounded-full ml-4 mr-2"/>
            //<img src={avatar} alt={avatar} className="h-10 rounded-full mr-4"/>
        })
        .catch(error => {
            // handle error
            console.log(error);
        });

    return (
        <div className={`flex mt-4`}>
            <div>
                <div>
                        <span className="font-semibold text-sm">
                            {props.user.username}
                        </span>
                    <span className="text-xs ml-2">
                            {props.createdAt}
                        </span>
                </div>
                <div>
                    {props.message}
                </div>
            </div>
        </div>
    );
};

export default ChatConversationItem;