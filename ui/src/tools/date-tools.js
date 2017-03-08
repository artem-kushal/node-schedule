'use strict';

const dateTools = {

  setDayOfWeek (date, dayOfWeekToSet) {
    const clonedDate = new Date(date.getTime());
    const currentDayOfWeek = clonedDate.getDay();
    const distance = dayOfWeekToSet - currentDayOfWeek;
    
    clonedDate.setDate(date.getDate() + distance);
    return clonedDate;
  }

};

export default dateTools;
