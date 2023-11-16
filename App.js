import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import EmployeeList from './components/EmployeeList';
import EmployeeCard from './components/EmployeeCard';
import { fetchData } from './api';

const HomeScreen = ({ navigation }) => {
    const [data, setData] = useState([]);
    const [singleCardView, setSingleCardView] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState({});
  
    useEffect(() => {
      const fetchDataAsync = async () => {
        const result = await fetchData();
        if (result) setData(result);
      };
  
      fetchDataAsync();
    }, []);
  
    const switchView = (employee) => {
      setSingleCardView(!singleCardView);
      setSelectedEmployee(employee);
    };
  
    return (
      <View>
        {singleCardView ? (
          <SingleCardView employee={selectedEmployee} />
        ) : (
          <EmployeeList data={data} switchView={switchView} />
        )}
        <Button
          title={`Switch to ${singleCardView ? 'List' : 'Single Card'} View`}
          onPress={() => setSingleCardView(!singleCardView)}
        />
      </View>
    );
  };  


const SingleCardView = ({ navigation }) => {
    const employee = navigation.getParam('employee', {});
  
    return (
      <View>
        <EmployeeCard employee={employee} />
  
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginVertical: 10 }}>
          Manager:
        </Text>
        <EmployeeCard employee={employee.manager} />
  
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginVertical: 10 }}>
          Subordinates:
        </Text>
        {employee.subordinates && employee.subordinates.length > 0 ? (
          <FlatList
            data={employee.subordinates}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <EmployeeCard employee={item} />}
          />
        ) : (
          <Text>No subordinates</Text>
        )}
      </View>
    );
  };

  
const AppNavigator = createStackNavigator(
    {
      Home: {
        screen: HomeScreen,
        navigationOptions: {
          title: 'Employee Directory',
        },
      },
      SingleCardView: {
        screen: SingleCardView,
        navigationOptions: {
          title: 'Employee Details',
        },
      },
    },
    {
      initialRouteName: 'Home',
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#3498db',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    }
  );
  

export default createAppContainer(AppNavigator);
