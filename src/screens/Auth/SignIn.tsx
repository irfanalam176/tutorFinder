
import { Image, Pressable, Text, View } from 'react-native';
import { style } from '../../styles/Style';
import InputGroup from '../../components/common/InputGroup';
import MainBtn from '../../components/common/MainBtn';

const SignIn = () => {
  return (
    <View>
     <View style={style.loginHeader}>
    <Image source={require('../../assets/images/blur.png')} style={style.blur}/>

        <View style={style.logoStyle}>
            <Image source={require('../../assets/images/logo.png')} style={{width:70,height:70}}/>
            <Text style={style.logoText}>Tutor Finder</Text>
        </View>

            <Text style={style.regesterPageName}>Sign in to your</Text>
            <Text style={style.regesterPageName}>Account</Text>

     </View>

    <View style={{padding:44}}>
    <InputGroup label={'Email'} password={false}/>
    <InputGroup label={'Password'} password={true} />

    <Pressable><Text style={style.forgotBtn}>Forgot Password ?</Text></Pressable>

    <MainBtn btnText={"Log In"}/>
    </View>
    </View>
  );
};

export default SignIn;
