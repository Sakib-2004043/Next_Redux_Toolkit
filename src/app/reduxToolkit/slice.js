const { createSlice, nanoid, current } = require("@reduxjs/toolkit");

const initialState = {
  employees: JSON.parse(localStorage.getItem('employees')) || []
}

const Slice = createSlice({
  name:"addEmployeeSlice",
  initialState,
  reducers:{
    addEmployee:(state, action) => {
      const data = {
        id: nanoid(),
        name: action.payload
      }
      state.employees.push(data)
      const saveData = JSON.stringify(current(state.employees))
      localStorage.setItem('employees', saveData);
    },
    removeEmployee:(state, action) => {
      const data =state.employees.filter((item) => {
        return item.id !== action.payload
      })
      state.employees = data;
      const saveData = JSON.stringify(state.employees)
      localStorage.setItem("employees", saveData);
    }
  }
});

export const {addEmployee, removeEmployee} = Slice.actions;
export default Slice.reducer;