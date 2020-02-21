import React from "react";

const ProfileTab = ({ headers, elements, component }) => {
    return (
        <div>
            <div>
                {headers.map(head => {
                    return <div key={head}>{head}</div>;
                })}
            </div>
            {elements.map(element => {
                var Component = component;
                return (
                    <Component
                        key={element.id}
                        componentsParameters={element}
                    />
                );
            })}
        </div>
    );
};

export default ProfileTab;
