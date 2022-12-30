import { StyleSheet } from "react-native";
import colors from "../../utils/colors";
export const styles = StyleSheet.create({
    container:{
        padding:20,
        flexDirection:"row",
        alignItems: "center", 
        borderBottomColor: colors.gray,
        borderBottomWidth: 1
    },
    image:{
        width:70,
        height:70,
        borderRadius:20,
        backgroundColor: colors.gray
    },
infoContainer:{
    flex:1,
    justifyContent: "center",
    alignItems:"flex-start",
    marginLeft: 15
},
title:{
    fontSize: 16,
    color: colors.text,
    marginBottom: 10
}
})