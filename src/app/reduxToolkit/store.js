const { configureStore } = require("@reduxjs/toolkit");
import employeeReducer from "./slice"

export const store = configureStore({
  reducer: {
    employeeData: employeeReducer
    // Could Be Multiple Reducers From Multiple slice file
  }
})