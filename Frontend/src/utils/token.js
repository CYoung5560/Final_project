export const getToken = () => {
    try{
    const token = document.cookie.split('; ')
        .find(row => row.startsWith('token')).split('=')[1];
    return token;
    } catch(error) {
        console.log(error);
        throw Error(`util/token.js -> Error ${error}`);
    }
};