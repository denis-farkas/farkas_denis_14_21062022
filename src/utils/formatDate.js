export const formatDate = (date) => {
  const opcions = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  };

  return new Date(date).toLocaleDateString('fr-FR', opcions);
};
