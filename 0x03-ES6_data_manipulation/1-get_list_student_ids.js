export default function getListStudentsIds(array) {
  if (Array.isArray(array) == false) return [];
  return array.map((obj) => obj.id);
}
