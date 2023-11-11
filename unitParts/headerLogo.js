import React from 'react';
import {Image, Text, View} from 'react-native';

// export default function ImageHeader() {
//     return (
//             <Image
//                 style={{width: 150, height: 50}}
//                 source={require('../../assets/logoheading.png')}
//             />    
//     )
// }

export default function LogoTitle() {
    return (
      <Image
        style={{ width: 110, height: 50 }}
        source={require('./../assets/logoheading.png')}
      />
    );
  }