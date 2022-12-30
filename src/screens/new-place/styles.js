import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  content:{
    flex:1,
    margin:20
  },
title:{
fontSize:18,
marginBottom:20
},
input:{
borderColor: colors.gray,
padding:5,
marginBottom:20,
borderBottomWidth: 1
}
});
