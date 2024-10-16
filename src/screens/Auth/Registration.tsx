import {View, Text, Image, Pressable, ScrollView} from 'react-native';
import React from 'react';
import {style} from '../../styles/Style';
import MainBtn from '../../components/common/MainBtn';
import InputGroup from '../../components/common/InputGroup';

const Registration = () => {
  return (
    <ScrollView>
      <View style={style.loginHeader}>
        {/* <Image source={require('../../assets/images/blur.png')} style={style.blur}/> */}

        <Image
          source={require('../../assets/images/backArrow.png')}
          style={{width: 26, height: 20, marginBottom: 20}}
        />
        <Text style={style.signUpPageName}>Register</Text>

        <View style={style.signUpHeader}>
          <Text style={style.signUptext}>Already have an account?</Text>
          <Pressable>
            <Text style={style.signUpLoginBtn}>Log In</Text>
          </Pressable>
        </View>
      </View>

      {/* SignUp Inputs  */}
      <View style={{padding: 44}}>
        <InputGroup label={'Name'} password={false} />
        <InputGroup label={'Email'} password={false} />
        <InputGroup label={'Phone Number'} password={false} isPhone={true}/>
        <InputGroup label={'Set Password'} password={true} />
        <InputGroup label={'Confirm Password'} password={true} />

        <MainBtn btnText="Register Account" />
      </View>
    </ScrollView>
  );
};

export default Registration;
