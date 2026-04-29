import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

function MyTabBar({ state, descriptors, navigation }: any) {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        let iconName = 'home';
        if (route.name === 'index') iconName = isFocused ? 'home' : 'home-outline';
        else if (route.name === 'portfolio') iconName = isFocused ? 'pie-chart' : 'pie-chart-outline';
        else if (route.name === 'rewards') iconName = isFocused ? 'gift' : 'gift-outline';
        else if (route.name === 'savings') iconName = isFocused ? 'wallet' : 'wallet-outline';
        else if (route.name === 'profile') iconName = isFocused ? 'person' : 'person-outline';

        // Optional: you can define a label string based on route.name
        let label = 'Home';
        if (route.name === 'index') label = 'Home';
        else if (route.name === 'portfolio') label = 'Portfolio';
        else if (route.name === 'rewards') label = 'Rewards';
        else if (route.name === 'savings') label = 'Savings';
        else if (route.name === 'profile') label = 'Profile';

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={styles.tabItem}
          >
            <Ionicons name={iconName as any} size={24} color={isFocused ? '#2952E3' : '#666'} />
            <Text style={[styles.tabLabel, { color: isFocused ? '#2952E3' : '#666' }]}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default function TabLayout() {
  return (
    <Tabs tabBar={(props) => <MyTabBar {...props} />} screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="portfolio" options={{ title: 'Portfolio' }} />
      <Tabs.Screen name="rewards" options={{ title: 'Rewards' }} />
      <Tabs.Screen name="savings" options={{ title: 'Savings' }} />
      <Tabs.Screen name="profile" options={{ title: 'Profile' }} />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#0A0A0A',
    paddingBottom: 30, // For SafeArea
    paddingTop: 10,
    borderTopWidth: 1,
    borderColor: '#333',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
  },
  tabLabel: {
    fontSize: 10,
    marginTop: 4,
  }
});
