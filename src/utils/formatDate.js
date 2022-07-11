export const formatDate = (date) => {
  const opcions = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  };

  return new Date(date).toLocaleDateString('es-PA', opcions);
};
