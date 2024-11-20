
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { style } from '../../styles/Style';
import InputGroup from '../../components/common/InputGroup';
import MainBtn from '../../components/common/MainBtn';
import MainText from '../../components/common/MainText';
import BoldText from '../../components/common/BoldText';
import { AllNavigationProps, NavigateProps } from '../../types/NavigationTypes';

const SignIn:React.FC<NavigateProps> = ({navigation}) => {


  function navigateTo(path:any){
    navigation.navigate(path)
  }
function login(){
  navigation.navigate("layout")
}
  return (
    <ScrollView>
     <View style={style.loginHeader}>
    <Image source={require('../../assets/images/blur.png')} style={style.blur}/>

        <View style={style.logoStyle}>
            <Image source={require('../../assets/images/logo.png')} style={{width:70,height:70}}/>
            <BoldText style={style.logoText}>Tutor Finder</BoldText>
        </View>

            
            <BoldText style={style.regesterPageName}>Sign in to your</BoldText>
            <BoldText style={style.regesterPageName}>Account</BoldText>
     </View>

    <View style={{padding:44}}>
    <InputGroup label={'Email'} password={false}/>
    <InputGroup label={'Password'} password={true} />

   <View style={[style.flexRow,{justifyContent:"space-between"}]}>
   <Pressable onPress={()=>navigateTo("registration")}><MainText style={style.forgotBtn}>Create an Account ?</MainText></Pressable> 
   <Pressable><MainText style={style.forgotBtn}>Forgot Password ?</MainText></Pressable> 
   </View>

    <MainBtn btnText={"Log In"} onPress={()=>login()
    }/>
    </View>
    </ScrollView>
  );
};

export default SignIn;
