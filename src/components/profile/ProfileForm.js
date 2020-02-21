import React, { useState } from "react";

const ProfileForm = () => {
    const [login, setLogin] = useState("Steven");
    const [mail, setMail] = useState("Steven@test.com");
    const [pwd, setPwd] = useState("");
    const [confpwd, SetConfPwd] = useState("");

    const onChangeLogin = event => {
        setLogin(event.target.value);
    };

    const onChangeMail = event => {
        setMail(event.target.value);
    };

    const onChangePwd = event => {
        setPwd(event.target.value);
    };

    const onChangeConfPwd = event => {
        SetConfPwd(event.target.value);
    };
    return (
        <div>
            <div>
                <input type="file" name="profileImage" />
            </div>
            <div>
                <div>
                    {/* DIV Gauche */}
                    <input
                        type="text"
                        name="Login"
                        value={login}
                        onChange={() => onChangeLogin}
                    />
                    <input
                        type="text"
                        name="Mail"
                        value={mail}
                        onChange={() => onChangeMail}
                    />
                </div>
                <div>
                    <input
                        type="password"
                        name="pwd"
                        value={pwd}
                        onChange={() => onChangePwd}
                    />
                    <input
                        type="password"
                        name="confpwd"
                        value={confpwd}
                        onChange={() => onChangeConfPwd}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProfileForm;
