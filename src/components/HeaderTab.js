import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const HeaderTab = props => {
  return (
    <View style={styles.headerTabStyle}>
      <Text style={styles.headerTabTextStyle}>추천</Text>
      <Text style={styles.headerTabTextStyle}>숙소</Text>
      <Text style={styles.headerTabTextStyle}>트립</Text>
      <Text style={styles.headerTabTextStyle}>장소</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerTabStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 12,
    paddingRight: 12
  },
  headerTabTextStyle: {
    color: 'white',
    fontSize: 12,
    marginRight: 36
  }
});

export { HeaderTab };
