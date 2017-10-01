import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { HeaderItem, HeaderTab } from './';

const Header = props => {
  return (
    <View style={styles.headerStyle}>
      <HeaderItem
        headerItemText=""
        iconName="md-checkmark-circle"
        iconSize={26}
        iconColor="white"
      />

      <HeaderItem
        headerItemText="모든 위치"
        iconName="md-checkmark-circle"
        iconSize={26}
        iconColor="white"
      />

      <HeaderItem
        headerItemText="모든 날짜"
        iconName="md-checkmark-circle"
        iconSize={26}
        iconColor="white"
      />
      <HeaderItem
        headerItemText="게스트 1명"
        iconName="md-checkmark-circle"
        iconSize={26}
        iconColor="white"
      />
      <HeaderTab />
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    paddingLeft: 12,
    paddingRight: 12,
    height: 272,
    backgroundColor: '#2680eb'
  }
});

export { Header };
