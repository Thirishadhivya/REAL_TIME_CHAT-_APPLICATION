export function extractTime(dateString) {
    const date = new Data(dataString);
    const hours = padZero(date.getHours());
    const minutes = padZero(date.getMinutes());
    return `${hours}:${minutes}`;   
}

function padZero(number) {
    return number.toString().padStart(2, "0");
}