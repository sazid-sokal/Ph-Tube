function getTimeString (time){
    const hour = parseInt(time /60);
    const minute = parseInt(time % 60);
    const second = parseInt(time % 3600);
    return `${hour} hours ${minute} minutes ${second} seconds ago`
}

console.log(getTimeString (5200));