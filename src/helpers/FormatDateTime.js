import moment from 'react-moment';

export const formatDateTime = (date) => {
    console.log(date);
    if (!date){
        return "";
    }
    return moment(date).format("DD-MM-YYYY H:mm:ss")

}
