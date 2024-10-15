import {Text, TouchableOpacity } from 'react-native'
import React, { ReactNode } from 'react'
import { style } from '../../styles/Style'
import { MainBtnProps } from '../../types/PropsType'

const MainBtn:React.FC<MainBtnProps> = ({btnText}) => {
  return (
     <TouchableOpacity style={style.mainBtn}>
    <Text style={style.mainBtnText}>{btnText}</Text>
   </TouchableOpacity>
  )
}

export default MainBtn