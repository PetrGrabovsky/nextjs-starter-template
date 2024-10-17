import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LayoutState {
  isMobileView: boolean;
}

const initialState: LayoutState = {
  isMobileView: true,
};

const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    setIsMobileView: (state, action: PayloadAction<boolean>) => {
      state.isMobileView = action.payload;
    },
  },
});

export const { setIsMobileView } = layoutSlice.actions;

export default layoutSlice.reducer;
