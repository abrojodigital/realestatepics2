import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
  deleteAllPropertiesFromDatabase,
  deleteProperty,
  insertProperty,
  selectProperties,
  updateProperty,
} from "../../db";
import Property from "../../model/property";
import { extractErrorMessage } from "../../utils";
import { URL_GEOCODING } from "../../utils/maps";

const initialState = {
  properties: [],
  isLoading: false,
};
export const saveProperty = createAsyncThunk(
  "property/saveProperty",
  async (property, thunkAPI) => {
    try {
      const response = await fetch(
        URL_GEOCODING(property.coords.lat, property.coords.lng)
      );

      if (!response.ok) {
        return thunkAPI.rejectWithValue("¡Algo salió mal!");
      }

      const data = await response.json();
      if (!data.results) {
        return thunkAPI.rejectWithValue(
          "No se ha podido encontrar la dirección del lugar"
        );
      }

      const address = data.results[0].formatted_address;
      const result = await insertProperty(
        property.title,
        property.images,
        address,
        property.coords,
        property.status,
        property.price,
        property.area
      );

      const newProperty = new Property(
        result.insertId,
        property.title,
        property.images,
        address,
        property.coords,
        property.status,
        property.price,
        property.area
      );
      return newProperty;
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  }
);

export const getProperties = createAsyncThunk(
  "property/getProperties",
  async (_, thunkAPI) => {
    try {
      const result = await selectProperties();
      return result?.rows?._array || [];
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  }
);

export const deletePropertyById = createAsyncThunk(
  "property/deletePropertyById",
  async (propertyId, thunkAPI) => {
    try {
      await deleteProperty(propertyId);
      return propertyId;
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  }
);

export const updatePropertyById = createAsyncThunk(
  "property/updatePropertyById",
  async (updatedProperty, thunkAPI) => {
    try {
      const {
        propertyId,
        title,
        images,
        address,
        coords,
        status,
        price,
        area,
      } = updatedProperty;
      await updateProperty(
        propertyId,
        title,
        images,
        address,
        coords,
        status,
        price,
        area
      );
      return updatedProperty;
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  }
);

export const deleteAllProperties = createAsyncThunk(
  "property/deleteAllProperties",
  async (_, thunkAPI) => {
    try {
      await deleteAllPropertiesFromDatabase();
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  }
);

const propertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(saveProperty.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(saveProperty.fulfilled, (state, action) => {
        state.isLoading = false;
        state.properties.push(action.payload);
      })
      .addCase(saveProperty.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(getProperties.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProperties.fulfilled, (state, action) => {
        state.isLoading = false;
        state.properties = action.payload;
      })
      .addCase(getProperties.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(deletePropertyById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deletePropertyById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.properties = state.properties.filter(
          (property) => property.id !== action.payload
        );
      })
      .addCase(deleteAllProperties.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteAllProperties.fulfilled, (state) => {
        state.isLoading = false;
        state.properties = [];
      })
      .addCase(deleteAllProperties.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(deletePropertyById.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(updatePropertyById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updatePropertyById.fulfilled, (state, action) => {
        state.isLoading = false;
        const updatedProperty = action.payload;
        const index = state.properties.findIndex(
          (property) => property.id === updatedProperty.propertyId
        );
        if (index !== -1) {
          state.properties[index] = updatedProperty;
        }
      })
      .addCase(updatePropertyById.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export default propertySlice.reducer;
