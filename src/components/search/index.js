import React from 'react';
import {View, TextInput} from 'react-native';

import styles from './styles';

import {colors} from '../../styles';

export const Search = (props) => {
  let {value = ''} = props;

  return (
    <View style={[props.style ? props.style : styles.containerDefault]}>
      <TextInput
        style={{color: '#888'}}
        value={value}
        onChangeText={props.onChangeText}
        placeholder={'Ex: Margarita'}
      />
    </View>
  );
};
