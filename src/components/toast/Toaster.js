import React from 'react';
import {connect} from "react-redux";
import Toast from "./Toast";

const Toaster = ({messages}) => {
    return (messages.length === 0) ?'' : (
        <div className="alert-toast fixed bottom-0 m-4 w-5/6 md:w-full max-w-sm">
            {messages.map(message => <Toast
                key={message.id}
                message={message}/>)}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        messages: state.messages
    };
};

export default connect(mapStateToProps)(Toaster);
