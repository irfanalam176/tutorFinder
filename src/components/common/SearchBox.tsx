import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { style } from '../../styles/Style'

const SearchBox = () => {
  return (
    <View style={style.searchBox}>
      <Image source={require("../../assets/images/search.png")}/>
      <TextInput style={{width:"70%",padding:0}} placeholder='Find Tutor '  placeholderTextColor={"#ABB7C2"}/>
      <TouchableOpacity style={[style.mainBtn,{borderRadius:100,padding:10}]}>
        <Image source={require("../../assets/images/filter.png")} style={{width:20,height:20}}/>
      </TouchableOpacity>
    </View>
  )
}

export default SearchBox