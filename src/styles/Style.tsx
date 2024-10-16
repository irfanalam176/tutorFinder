import { StyleSheet } from "react-native";


const mainColor="#1D61E7";
export const style = StyleSheet.create(
    {
        loginHeader:{
            backgroundColor:"#0000BD",
            paddingVertical:48,
            paddingHorizontal:42,
            position:"relative"
            
        },
        logoStyle:{
            display:"flex",
            flexDirection:"row",
            alignItems:"center",
            gap:20,
            marginBottom:20
        },
        logoText:{
            color:"#ffffff",
            fontWeight:"400",
            fontSize:32
        },
        regesterPageName:{
            color:"#EEEEEE",
            fontWeight:"400",
            fontSize:28,
            lineHeight:36
        },
        blur:{
            position:"absolute",
            right:0,
            top:0,
            zIndex:-1
        },
        label:{
            color:"#6C7278",
            fontSize:12,
            fontWeight:"500",
            marginBottom:10
        },
        textField:{
            backgroundColor:"#FFFFFF",
            borderWidth:1,
            borderColor:"#EDF1F3",
            borderRadius:10,
            paddingVertical:10,
            paddingHorizontal:14
        },
        mainBtn:{
            padding:14,
            borderRadius:10,
            backgroundColor:mainColor,
            
        },
        mainBtnText:{
            color:"#ffffff",
            fontWeight:"700",
            fontSize:14,
            textAlign:"center"
        },
        forgotBtn:{
            fontWeight:"600",
            fontSize:12,
            color:mainColor,
            marginVertical:20,
            marginTop:10,
            textAlign:"right"
        },
        signUpHeader:{
            display:"flex",
            flexDirection:"row",
            alignItems:"center",
            gap:5
        },
        signUpPageName:{
            color:"#ffffff",
            fontSize:28,
            fontWeight:"700",
            marginBottom:20
        },
        signUptext:{
            color:"#ffffff",
            fontSize:16,
            fontWeight:"500"
        },
        signUpLoginBtn:{
           color:"#4D81E7",
           fontSize:16,
           fontWeight:"500"
        },

    }

)