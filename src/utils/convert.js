export const convertJSONToArray = (jsonString) => {
  try {
    const jsonArray = JSON.parse(jsonString);
    if (Array.isArray(jsonArray)) {
      return jsonArray;
    } else {
      return [];
    }
  } catch (error) {
    return [];
  }
};
