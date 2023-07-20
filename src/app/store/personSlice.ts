import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import Person from "../types/person";
import { doGet } from "../service/api";


//action para PROMESSA
//GET - ALL
export const getAll = createAsyncThunk(
  //nome da action
  "persons/get",
  //funcao de promise
  async () => {
    const response: Person[] = await doGet('/character')
        console.log(response);
        return response;
  }
);

//GET - ID
export const idChar = createAsyncThunk(
  //nome da action
  "persons/id",
  //funcao de promise
  async (id:any) => {
    const response: Person = await doGet('/character/'+id)
      console.log(response);
      return response;
  }
);

interface PersonInitial {
  data: null | Person[]; //o atributo que recebe a lista
  selectPerson: null | Person;
  loading: boolean; //é para dizer a minha aplicação se está dando certo os seus processos
};

const initialState = {
  data: null,
  selectPerson: null,
  loading: false,
} as PersonInitial;

const personSlice = createSlice({
  name: "person",
  initialState,
  reducers: {},
  extraReducers(builder) {
    // aciona as actions externas
    // (funcao promise, (state, action))
    builder
      .addCase(getAll.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getAll.fulfilled, (state, action: PayloadAction<Person[]>) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(getAll.rejected, (state, action) => {
        state.loading = false;
      });

    builder
      .addCase(idChar.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(idChar.fulfilled, (state, action: PayloadAction<Person>) => {
        state.selectPerson = action.payload;
        state.loading = false;
      })
      .addCase(idChar.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export default personSlice.reducer;
