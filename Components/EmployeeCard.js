import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';


const EmployeeCard = ({ employee, switchView }) => {
    const handlePress = () => {
      if (switchView) {
        switchView(employee);
      }
    };
  
    return (
      <Card
        containerStyle={{ backgroundColor: employee.backgroundColor }}
        onPress={handlePress}
      >
        <Text>Name: {employee.name}</Text>
        <Text>Email: {employee.email}</Text>
        <Text>Phone: {employee.phone}</Text>
        <Text>Manager: {employee.manager}</Text>
      </Card>
    );
  };
    

const styles = StyleSheet.create({
  // Add any additional styles if needed
});

export default EmployeeCard;
