import { styles } from "./styles";
import React, {useState} from "react";
import * as ImagePicker from "expo-image-picker"
import { View, Text, Image, Button, Alert } from "react-native";
import colors from "../../utils/colors"
const ImageSelector = ({onImagePicker}) =>{
    const onHandleTakeImage = async() =>{
        const isCameraPermissions = await verifyPermissions()
        if (!isCameraPermissions) return
        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [16,9],
            quality: 0.7,
            
        })
        setpickedUrl(image.uri)
        onImagePicker(image.uri)
    }

    const verifyPermissions = async() =>{
        const {status} = await ImagePicker.requestCameraPermissionsAsync()
        if (status != "granted"){
            Alert.alert(
                "permisos insuficientes",
                "Necesitas dar permisos para usar la camara", [{text: "ok"}]
            )
            return false
        }
       return true
    }
    const [pickedUrl,setpickedUrl] = useState(null)
        return (
            <View style={styles.container}>
                <View style={styles.preview}>
                    {!pickedUrl ? (
                        <Text style={styles.title}> No hay imagen seleccionada</Text>
                    ) : (
                        <Image style={styles.imagen} source={{uri : pickedUrl }}/>
                    )}
                </View>
                <Button
                title="Tomar foto"
                color={colors.gray}
                onPress={onHandleTakeImage}
                />
            </View>
        )
}

export default ImageSelector