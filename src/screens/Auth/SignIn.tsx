
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { style } from '../../styles/Style';
import InputGroup from '../../components/common/InputGroup';
import MainBtn from '../../components/common/MainBtn';
import MainText from '../../components/common/MainText';
import BoldText from '../../components/common/BoldText';

const SignIn = () => {
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

    <Pressable><MainText style={style.forgotBtn}>Forgot Password ?</MainText></Pressable>

    <MainBtn btnText={"Log In"}/>
    </View>
    </ScrollView>
  );
};

export default SignIn;
