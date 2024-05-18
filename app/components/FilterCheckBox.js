import React from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

function FilterCheckBox({id, text, isChecked, onCheckboxPress}) {
    
    const handleCheckboxPress = () => {
        onCheckboxPress(!isChecked, id);
    };
    
    return (
        <BouncyCheckbox 
            text={text}
            isChecked={isChecked}
            onPress={handleCheckboxPress}

            style={{padding: 5, width: 150}}
            textStyle={{textDecorationLine: "none"}} 
            iconStyle={{borderRadius: 0}} 
            innerIconStyle={{borderRadius: 0}}
            fillColor="dodgerblue"
        />
    );
}

export default FilterCheckBox;