import { View, Text, ScrollView, TextInput, Button } from "react-native";
import colors from "../../utils/colors";
import { useDispatch } from "react-redux";
import { styles } from "./styles";
import {  savePlace } from "../../store/place.slice";
import { useState } from "react";
import ImageSelector from "../../components/image-selector/image-selector";
const NewPlace = ({ navigation }) => {
  const [title, settitle] = useState("");
  const [image, setimage] = useState(null)
  const dispatch = useDispatch()
  const onHandleSubmit = () =>{
      dispatch(savePlace({title,image}))
      navigation.navigate("Places")
  }
  const onHandleChange = (text) =>{
        settitle(text)   
  }
  const onImagePicker = (uri) =>{
    setimage(uri)
    
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
      <Text style={styles.title}>Nuevo Lugar</Text>
      <TextInput onChangeText={onHandleChange} style={styles.input} placeholder="Escribí el lugar"/>
      <ImageSelector onImagePicker={onImagePicker}/>
      <Button
      color={colors.gray}
      title= "Guardar dirección"
      onPress={onHandleSubmit}
      />
     
      </View>
    </ScrollView>
  );
};

export default NewPlace;
