import React, {useState} from 'react';
import TheRightSidePanelHeader from "./TheRightSidePanelHeader";
import TheRightSidePanelContent from "./TheRightSidePanelContent";

const TheRightSidePanel = props => {

    const [tab, setTab] = useState('chat');

    const changeTab = tab => setTab(tab);

    return (
        <div className="left-side-container fixed right-0 p-4 w-1/5">
            <div className="h-full w-full box p-4 overflow-hidden">

                <TheRightSidePanelHeader currentTab={tab} onChangeTab={changeTab}/>

                <div className="separator-b my-2"/>

                <TheRightSidePanelContent {...props} currentTab={tab}/>
            </div>
        </div>
    );
};

export default TheRightSidePanel;