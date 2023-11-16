import React from 'react';
import { View, FlatList } from 'react-native';
import EmployeeCard from './EmployeeCard';

const EmployeeList = ({ data, navigation }) => {
    const handleCardPress = (employee) => {
      navigation.navigate('SingleCardView', { employee });
    };
  
    return (
      <View>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleCardPress(item)}>
              <EmployeeCard employee={item} />
            </TouchableOpacity>
          )}
        />
      </View>
    );
  };

  

export default EmployeeList;
