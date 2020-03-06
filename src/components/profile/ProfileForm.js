import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import SVG from "react-inlinesvg";
import ProfileIllustration from "../../assets/illustrations/undraw/undraw_profile_6l1l.svg";
import {connect} from "react-redux";

const ProfileForm = ({user}) => {
    const {t} = useTranslation();

    const [login, setLogin] = useState(null);
    const [mail, setMail] = useState(null);
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

    useEffect(() => {
        if (user !== null && login === null && mail === null) {
            setLogin(user.username);
            setMail(user.email);
        }
    }, [user]);

    return (
        <div className="flex items-center justify-center my-4">
            <div className="flex">
                {/*<div className="flex items-center">
                    <label
                        className="cursor-pointer pr-4"
                        htmlFor="profileImage"
                    >
                        <SVG
                            className="w-10 h-10 fill-current"
                            src={CameraIcon}
                            title={t('profile.form.inputs.avatar')}
                        />
                    </label>
                    <input
                        className="hidden"
                        id="profileImage"
                        type="file"
                        name="profileImage"
                    />
                </div>*/}
                <div className="flex">
                    <div className="flex flex-col pl-6">
                        {/* DIV Gauche */}
                        <label htmlFor="Login">
                            {t("profile.form.inputs.login")}
                        </label>
                        <input
                            className="bg-gray-500 text-gray-900 p-2 rounded-lg focus:outline-none focus:shadow-outline placeholder-gray-400"
                            type="text"
                            name="Login"
                            id="Login"
                            value={login}
                            onChange={() => onChangeLogin}
                            readOnly
                        />
                        <label htmlFor="Login" className="mt-4">
                            {t("profile.form.inputs.email")}
                        </label>
                        <input
                            className="bg-gray-500 text-gray-900 p-2 rounded-lg focus:outline-none focus:shadow-outline placeholder-gray-400 "
                            type="text"
                            name="Mail"
                            value={mail}
                            onChange={() => onChangeMail}
                            readOnly
                        />
                        {/* <button
                            type="button"
                            className="p-3 bg-blue-600 hover:bg-blue-700 text-gray-300 rounded-lg mt-4 hover:shadow-lg shadow focus:outline-none focus:shadow-outline"
                        >
                            {t("profile.form.inputs.submit")}
                        </button> */}
                    </div>
                    {/*  <div className="flex flex-col pl-6">
                        <label htmlFor="Login">{t('profile.form.inputs.password')}</label>
                        <input
                            className="bg-gray-500 text-gray-900 p-2 rounded-lg focus:outline-none focus:shadow-outline placeholder-gray-400"
                            type="password"
                            name="pwd"
                            value={pwd}
                            onChange={() => onChangePwd}
                        />
                        <label
                            htmlFor="Login"
                            className="mt-4"
                        >
                            {t('profile.form.inputs.confirm_password')}
                        </label>
                        <input
                            className="bg-gray-500 text-gray-900 p-2 rounded-lg focus:outline-none focus:shadow-outline  placeholder-gray-400"
                            type="password"
                            name="confpwd"
                            value={confpwd}
                            onChange={() => onChangeConfPwd}
                        />
                    </div>
            */}
                </div>
            </div>
            <div className="pl-16">
                <SVG className="h-64" src={ProfileIllustration}/>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        user: state.authenticatedUser
    };
};

export default connect(mapStateToProps)(ProfileForm);
