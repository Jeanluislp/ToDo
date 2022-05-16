export const unique = (task) => {
  const unique = [];
  task.forEach((date) => {
    if (!unique.includes(date.calendarFormat)) unique.push(date.calendarFormat);
  });
  return unique;
};

export const dateOrder = (date) => {
  date.sort((a, b) => {
    const firstDate = moment(a, "DD/MM/YYYY");
    const secondDate = moment(b, "DD/MM/YYYY");
    return firstDate - secondDate;
  });
};
