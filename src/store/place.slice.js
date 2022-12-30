import { createSlice } from "@reduxjs/toolkit";
import Place from "../models/place"
import * as FileSystem from "expo-file-system"
const initialState = {
  places: [],
};

const placeSlice = createSlice({
  name: "place",
  initialState,
  reducers: {
    addPlace:(state, action) =>{
      const newPlace = new Place(Date.now().toString(), action.payload.title, action.payload.image);
      state.places.push(newPlace)
    }
  },
});

export const {addPlace} = placeSlice.actions
export const savePlace = ({title,image}) =>{
     return async(dispatch) =>{
      //const fileName = image.split("/").pop()
      //const newPath = FileSystem.documentDirectory + fileName
        try{
            //await FileSystem.moveAsync({
             // from: image,
             // to: newPath
           // })
           console.log("image", image)
        }catch (error){
            console.log(error)
        }

        dispatch(addPlace({title, image }))
     }
}


export default placeSlice.reducer;
