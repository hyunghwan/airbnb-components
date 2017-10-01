import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HeaderItem = props => {
  return (
    <View style={styles.headerItemStyle}>
      <Ionicons
        name="md-heart-outline"
        size={props.iconSize}
        color={props.iconColor}
      />

      <Text style={styles.headerItemTextStyle}>{props.headerItemText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerItemStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 12,
    paddingRight: 12,
    marginTop: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 3
  },
  headerItemTextStyle: {
    color: 'white',
    fontSize: 15,
    marginLeft: 10
  }
});

export { HeaderItem };
