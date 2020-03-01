export const formatDateTime = (date) => {
    let mm = date.getMonth() + 1,
        dd = date.getDate(),
        hours = date.getHours(),
        minutes = date.getMinutes()
    ;

    if (mm < 10) mm = `0${mm}`;
    if (dd < 10) dd = `0${dd}`;
    if (hours < 10) hours = `0${hours}`;
    if (minutes < 10) minutes = `0${minutes}`;

    return `Le ${dd}/${mm}/${date.getFullYear()} à ${hours}:${minutes}`;
};