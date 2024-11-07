import { View } from "react-native";
import Registration from "./src/screens/Auth/Registration";
import SignIn from "./src/screens/Auth/SignIn";
import Filter from "./src/screens/Filter/Filter";
import Home from "./src/screens/Home/Home";
import VerificationScreen from "./src/screens/TeacherScreens/VerificationScreen/VerificationScreen";
import { style } from "./src/styles/Style";
import EditProfile from "./src/screens/TeacherScreens/VerificationScreen/EditProfile";



const App = () => {
  return (
    <View style={style.mainBg}>
   {/* <SignIn/> 
   <Registration/> 
  <Home/> 
  <Filter/>  

<VerificationScreen/> */}
<EditProfile/>
</View>
  )
};

export default App;
