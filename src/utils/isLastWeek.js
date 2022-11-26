// dicctionaries
export const dictionaryWeek = {
  1: 'FIRST',
  2: 'SECOND',
  3: 'THIRD',
  4: 'FOURTH',
};
export const dictionaryDay = {
  0: 'domingo',
  1: 'lunes',
  2: 'martes',
  3: 'mièrcoles',
  4: 'jueves',
  5: 'viernes',
  6: 'sàbado',
};

// Normalize functions
// Create number day ex:(second monday of month)
export const nWeekOfMounth = (day) => {
  // day is the number of the day in the current month
  if (day === 0) return 0;
  if (!day) return;
  const nOfWeek = Math.ceil(day / 7);
  if (!nOfWeek) return;
  return nOfWeek;
};
// return  number of week
export const WeekOfMounth = (day) => {
  if (!day) return;
  const nDay = nWeekOfMounth(day);
  return dictionaryWeek[nDay];
};
//return day name
export const dayOfWeek = (nDay) => {
  return dictionaryDay[nDay];
};

export const isLastWeek = (date) => {
  const nDate = date.date();
  const daysOnMonth = date.daysInMonth();
  const dayOnMonthSub7 = daysOnMonth - 6;
  console.log(date.isBetween(daysOnMonth, dayOnMonthSub7), date);

  if (nDate >= dayOnMonthSub7 && nDate <= daysOnMonth) return true;
  return false;
};
