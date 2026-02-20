/**
 * Ordena una lista de elementos basada en un criterio específico.
 * 
 * @param {string} order - El tipo de ordenamiento ('az', 'za', 'date-ascend', 'date-defaul').
 * @param {Array} list - La lista de objetos a ordenar.
 * @returns {Array} La lista ordenada según el criterio.
 */
export function orderItems(order, list) {
  let sortList = [...list];
  switch (order) {
    case "az":
      return sortList.sort((a, b) => a.name.localeCompare(b.name));
    case "za":
      return sortList.sort((a, b) => b.name.localeCompare(a.name));
    case "date-ascend":
      return sortList.sort((a, b) => b.date - a.date);
    case "date-defaul":
      return sortList.sort((a, b) => a.date - b.date);
    default:
      return sortList;
  }
}
