export const convertDate = (date: string): string => {
  return new Date(date).toLocaleDateString('pt-BR');
};
