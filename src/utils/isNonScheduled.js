export const isNonScheduled = (value) => {
  if (value === null || value === undefined || value?.name === 'Nunca')
    return true;
  // if (!isToday(value)) return false;
  return false;
};
