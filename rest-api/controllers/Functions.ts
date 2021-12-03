export const IsDateInRange = (start: string, end: string, repeat: boolean = false, tomorrow: boolean = false) => {
    const startDate = new Date(start);
    let date = new Date();
    if (tomorrow) {
        date = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
    }
    let endDate = new Date(end);
    startDate.setHours(0,0,0,0); 
    date.setHours(0,0,0,0); 
    endDate.setHours(0,0,0,0); 
    if (startDate.getTime() === date.getTime()) {
        return true;
    }

    // If end date is invalid
    if (endDate.getTime() === new Date(0).getTime() || end === null || end === '0000-00-00') {
        endDate = startDate;
    }

    if (repeat)  {
        return (startDate.getTime() <= date.getTime() && date.getTime() <= endDate.getTime());
    } else {
        return false;
    }
};