import {
  saveProperty,
  getProperties,
  deletePropertyById,
  updatePropertyById,
  deleteAllProperties,
} from "./propertySlice";

export const savePropertyAsync = (property) => async (dispatch) => {
  try {
    await dispatch(saveProperty(property));
  } catch (error) {
    console.log("Save Property Error:", error);
  }
};

export const getPropertiesAsync = () => async (dispatch) => {
  try {
    await dispatch(getProperties());
  } catch (error) {
    console.log("Get Properties Error:", error);
  }
};

export const deletePropertyByIdAsync = (propertyId) => async (dispatch) => {
  try {
    await dispatch(deletePropertyById(propertyId));
  } catch (error) {
    console.log("Delete Property Error:", error);
  }
};

export const updatePropertyByIdAsync =
  (updatedProperty) => async (dispatch) => {
    try {
      await dispatch(updatePropertyById(updatedProperty));
    } catch (error) {
      console.log("Update Property Error:", error);
    }
  };

export const deleteAllPropertiesAsync = () => async (dispatch) => {
  try {
    await dispatch(deleteAllProperties());
  } catch (error) {
    console.log("Delete All Properties Error:", error);
  }
};
