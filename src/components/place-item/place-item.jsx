import React from "react";
import { styles } from "./styles";
import { View, Text, Image, TouchableOpacity } from "react-native";


const PlaceItem = ({id, title, image, onSelected}) =>{
    return(
        <TouchableOpacity onPress={onSelected} style={styles.container}>
            <Image style={styles.image} source={{uri:image}}/>
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default PlaceItem