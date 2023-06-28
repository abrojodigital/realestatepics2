const convertStringToArray = (str) => {
  try {
    const arr = JSON.parse(str);
    if (Array.isArray(arr)) {
      return arr;
    } else {
      console.log("El string no representa un array.");
      return [];
    }
  } catch (error) {
    console.log("Error al convertir el string en un array:", error);
    return [];
  }
};

export default convertStringToArray;
