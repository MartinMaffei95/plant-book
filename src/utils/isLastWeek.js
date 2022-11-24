// dicctionaries
export const dictionaryWeek = {
  1: 'primer',
  2: 'segundo',
  3: 'tercer',
  4: 'cuarto',
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
