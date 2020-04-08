import { StyleSheet } from 'react-native';

import { colors, metrics, fonts } from '../../styles';

const styles = StyleSheet.create({
  containerHeaderCategory: {
      paddingTop: 15, 
      flexDirection: 'row', 
      alignItems: 'center', 
      paddingHorizontal: 20, 
      backgroundColor: '#FFF', 
  },

  iconLogo: {
      width: 50,
      height: 50, 
  },

  containerTextHeaderCategory: {
      marginLeft: 10
  },
  
  textEasy: {
      fontWeight: '500',
      fontSize: fonts.force, 
      fontFamily: fonts.semi_bold,
  },

  
  textDrinks: {
      fontSize: 20, 
      fontWeight: '100',
      fontFamily: fonts.regular_text,
  },

  

  bodyCategory: {
      flex: 1, 
      paddingTop: 5,
      flexWrap: 'wrap',
      flexDirection: 'row',
      paddingHorizontal: 30, 
      backgroundColor: '#fff', 
      justifyContent: 'space-between' ,
  },

  
  iconCategory: {
      width: 30,
      height: 30, 
  },

});

export default styles;
