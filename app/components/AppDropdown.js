import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Dropdown } from 'react-native-element-dropdown';

function AppDropdown({value, dropdownOptions, onSetValue}) {
    const { colors } = useTheme();
    const [isFocus, setIsFocus] = useState(false);

    return (
        <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: colors.primary }, { borderColor: colors.border}]}
            containerStyle={{ backgroundColor: colors.background }}
            selectedTextStyle={[styles.selectedTextStyle, {color: colors.text}]}
            itemTextStyle={{color: colors.text}}
            activeColor={colors.card}
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
    dropdown: {
      height: 50,
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