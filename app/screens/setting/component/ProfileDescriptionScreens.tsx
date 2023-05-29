import {NavigatorParamList} from '@/navigators';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC, useState} from 'react';
import SupportTicket from './supportTicket';



const ProfileDescription = ({
  navigation,
  route
//   index,setIndex
}) => {
//   const [index, setIndex] = useState('0');
const {index}=route?.params;
console.log(index,'index');
  const renderComponent = () => {
    console.log(index,'index333');
    switch (index) {
      case 0:
        return (
        console.log('object')
        );
      case 1:
        return console.log('object')
        case 2:
            return (
            console.log('object')
            );
            case 3:
        return (
        <SupportTicket/>
        );
      default:
        return null;
    }
  };
  return (
    <>
    
    {renderComponent()}
  </>
  );
};

export default ProfileDescription;
