import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../interface";
import axiosInstance from "../../config/axios.config";
import { RootState } from "../store";

interface ProductsState {
  loading: boolean;
  data: IProduct[];
  error: null;
}

export const getProductListAsyncThunk = createAsyncThunk(
  "products/getProductList",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axiosInstance.get(
        "/products?limit=20&skip=10&select=title,price,thumbnail"
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState: ProductsState = {
  data: [],
  loading: true,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductListAsyncThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getProductListAsyncThunk.fulfilled,
      (state, action: PayloadAction<IProduct[]>) => {
        state.loading = false;
        state.data = action.payload;
      }
    );
  },
});

export const productsSelector = ({ products }: RootState) => products;
export default productsSlice.reducer;
