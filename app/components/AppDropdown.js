import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

function AppDropdown({value, dropdownOptions, onSetValue}) {
    const [isFocus, setIsFocus] = useState(false);

    return (
        <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: 'dodgerblue' }]}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={dropdownOptions}
            labelField="label"
            valueField="value"
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
                onSetValue(item.value);
                setIsFocus(false);
            }}
        />
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      padding: 16,
    },
    dropdown: {
      height: 50,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
      width: 250,
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      backgroundColor: 'white',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
});

export default AppDropdown;