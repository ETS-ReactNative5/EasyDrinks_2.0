import React, {useState} from 'react';
import {
  View,
  Modal,
  Text,
  TextInput,
  ScrollView,
  ActivityIndicator,
  TouchableWithoutFeedback,
} from 'react-native';

import {useSelector} from 'react-redux';

import styles from './styles';

import {ButtonFilterFast} from '..';
import {fonts, colors} from '../../styles';

import TouchableScale from 'react-native-touchable-scale';
export const FilterModal = (props) => {
  // State
  const [glassFilter, setGlassFilter] = useState('');
  const [igradienteFilter, setIgradienteFilter] = useState('');

  const {arrayOfGlass, arrayOfIgradients} = useSelector(
    (state) => state.filters,
  );
  console.log({arrayOfGlass, arrayOfIgradients});
  const {modalVisible = false, filter = {}} = props;

  return (
    <Modal
      animationType="fade"
      transparent
      visible={modalVisible}
      onRequestClose={props._onCancel}>
      <TouchableWithoutFeedback
        onPress={() => {
          setGlassFilter('');
          setIgradienteFilter('');
          props._onCancel();
        }}
        useForeground>
        <View style={styles.containerBlack}>
          <TouchableWithoutFeedback onPress={() => false} useForeground>
            <View style={styles.containerWhite}>
              <View style={{flex: 1}}>
                <View style={styles.containerHeaderModal}>
                  <Text style={styles.textLabelInfos}>Filter by: </Text>
                  <TouchableScale
                    onPress={() => {
                      setGlassFilter('');
                      setIgradienteFilter('');
                      props._onCancel();
                    }}
                    activeScale={0.99}
                    style={styles.buttonClearFilter}>
                    <Text
                      style={[
                        styles.textClearFilter,
                        {
                          color:
                            props.filter.filterValue !== ''
                              ? colors.primary
                              : '#ddd',
                        },
                      ]}>
                      Clear Filter
                    </Text>
                  </TouchableScale>
                </View>
                <View>
                  <View style={styles.headerInfos}>
                    <View style={styles.tick} />
                    <View style={styles.containerLabelInfos}>
                      <Text style={styles.textLabelInfos}>Glass:</Text>
                      <View style={{color: '#888', height: 30}}>
                        <TextInput
                          style={styles.searchIgradiente}
                          value={glassFilter}
                          onChangeText={setGlassFilter}
                          placeholder={'Ex: Collins glass'}
                        />
                      </View>
                    </View>
                  </View>
                  <ScrollView horizontal showsHorizontalScrollIndicator>
                    {arrayOfGlass && (
                      <>
                        {arrayOfGlass.length === 0 && (
                          <View style={styles.containerLoading}>
                            <ActivityIndicator
                              size="small"
                              color={colors.primary}
                            />
                          </View>
                        )}
                        <View style={styles.containerListOfGlass}>
                          {arrayOfGlass
                            .filter((item) =>
                              item.strGlass
                                .toLowerCase()
                                .includes(glassFilter.toLocaleLowerCase()),
                            )
                            .map((item) => (
                              <ButtonFilterFast
                                label={item.strGlass}
                                style={styles.buttonFastFilter}
                                onPress={() =>
                                  props._setFilter(item.strGlass, 'glass')
                                }
                                colorNoChecked={'#F0F0F0'}
                                checked={item.strGlass === filter.filterValue}
                              />
                            ))}
                        </View>
                      </>
                    )}
                  </ScrollView>
                </View>
                <View style={{flex: 1}}>
                  <View style={styles.headerInfos}>
                    <View style={styles.tick} />
                    <View style={styles.containerLabelInfos}>
                      <Text style={styles.textLabelInfos}>Igradient:</Text>
                      <View style={{color: '#888', height: 30}}>
                        <TextInput
                          style={styles.searchIgradiente}
                          value={igradienteFilter}
                          onChangeText={setIgradienteFilter}
                          placeholder={'Ex: Vodka'}
                        />
                      </View>
                    </View>
                  </View>
                  <ScrollView contentContainerStyle={{width: '100%'}}>
                    <View style={[styles.containerListOfIgradients]}>
                      {arrayOfIgradients && (
                        <>
                          {arrayOfIgradients.length === 0 && (
                            <View style={styles.containerLoading}>
                              <ActivityIndicator
                                size="small"
                                color={colors.primary}
                              />
                            </View>
                          )}
                          {arrayOfIgradients
                            .filter((item) =>
                              item.strIngredient1
                                .toLowerCase()
                                .includes(igradienteFilter.toLocaleLowerCase()),
                            )
                            .map((item) => (
                              <ButtonFilterFast
                                label={item.strIngredient1}
                                style={styles.buttonFastFilter}
                                colorNoChecked={'#F0F0F0'}
                                onPress={() =>
                                  props._setFilter(
                                    item.strIngredient1,
                                    'igradient',
                                  )
                                }
                                checked={
                                  item.strIngredient1 === filter.filterValue
                                }
                              />
                            ))}
                        </>
                      )}
                    </View>
                  </ScrollView>
                </View>
              </View>
              <View style={styles.footerModal}>
                <TouchableScale
                  onPress={() => {
                    setGlassFilter('');
                    setIgradienteFilter('');
                    props._onCancel(true);
                  }}
                  activeScale={0.99}
                  style={styles.btnCancel}>
                  <Text style={styles.textCancel}>Cancel</Text>
                </TouchableScale>
                <TouchableScale
                  onPress={props._onFilter}
                  activeScale={0.99}
                  style={styles.btnApplyFiter}>
                  <Text style={styles.textApplyFilter}>Apply Filter</Text>
                </TouchableScale>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
