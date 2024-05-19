export const isLogin = ()=>{
   const token = localStorage.getItem('user');
    if(token){
        return true;
    } else {
        return false
    }

}

export const formatDate = (isoString)=> {
    const date = new Date(isoString);

    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1; // getUTCMonth() returns 0-based month
    const year = date.getUTCFullYear();

    let hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();

    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

    const formattedDate = `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year}`;
    const formattedTime = `${hours}:${formattedMinutes} ${ampm}`;
    
    return `${formattedDate} ${formattedTime}`;
}
