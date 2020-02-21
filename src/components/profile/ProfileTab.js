import React from "react";

const ProfileTab = ({ headers, elements, component: Component }) => {
    return (
        <div>
            <div className="flex flex-row text-lg">
                {headers.map(head => {
                    return (
                        <div className="flex-1 font-semibold"
                            key={head}
                        >
                            {head}
                        </div>
                    );
                })}
            </div>
            <div>
                {elements.map(element => {
                    return (
                        <Component
                            key={element.id}
                            componentsParameters={element}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default ProfileTab;
