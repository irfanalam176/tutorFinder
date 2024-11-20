import {View, Text, Image, Pressable, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {style} from '../../styles/Style';
import MainBtn from '../../components/common/MainBtn';
import InputGroup from '../../components/common/InputGroup';
import MainText from '../../components/common/MainText';
import BoldText from '../../components/common/BoldText';
import {Picker} from '@react-native-picker/picker';
import { NavigateProps } from '../../types/NavigationTypes';



const Registration:React.FC<NavigateProps> = ({navigation}) => {
  const [role, setRole] = useState();

  function navigateTo(){
    navigation.navigate("signIn")
  }
  return (
    <ScrollView>
      <View style={style.loginHeader}>

       <View style={[style.flexRow,{gap:15}]}>
       <TouchableOpacity onPress={navigateTo}>
       <Image
          source={require('../../assets/images/backArrow.png')}
          style={{width: 26, height: 20, marginBottom: 20}}
        />
       </TouchableOpacity>
        <BoldText style={style.signUpPageName}>Register</BoldText>
       </View>

        <View style={style.signUpHeader}>
         <MainText style={style.signUptext}>Already have an account?</MainText>
          <Pressable onPress={navigateTo}>
            <MainText style={style.signUpLoginBtn}>Log In</MainText>
          </Pressable>
        </View>
      </View>

      {/* SignUp Inputs  */}
      <View style={{padding: 44}}>
        <InputGroup label={'Name'} password={false} />
        <InputGroup label={'Email'} password={false} />

        <MainText style={[style.label,{fontSize:16}]}>Role</MainText>
        <Picker
          style={[style.textField,{marginBottom:20}]}
          selectedValue={role}
          onValueChange={(itemValue, itemIndex) => setRole(itemValue)}>
          <Picker.Item label="Student" value="student" />
          <Picker.Item label="Teacher" value="teacher" />
          <Picker.Item label="Parent" value="parent" />
        </Picker>

        <InputGroup label={'Phone Number'} password={false} isPhone={true} />
        <InputGroup label={'Set Password'} password={true} />
        <InputGroup label={'Confirm Password'} password={true} />

        <MainBtn btnText="Register Account" />
      </View>
    </ScrollView>
  );
};

export default Registration;
