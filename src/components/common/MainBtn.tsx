import {Text, TouchableOpacity } from 'react-native'
import React, { ReactNode } from 'react'
import { style } from '../../styles/Style'
import { MainBtnProps } from '../../types/PropsType'
import MainText from './MainText'

const MainBtn:React.FC<MainBtnProps> = ({btnText}) => {
  return (
     <TouchableOpacity style={style.mainBtn}>
    <MainText style={style.mainBtnText}>{btnText}</MainText>
   </TouchableOpacity>
  )
}

export default MainBtn