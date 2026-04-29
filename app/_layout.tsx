import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { createContext, useState, useContext } from 'react';

// Create a simple context for user data
type UserContextType = {
  profileName: string;
  setProfileName: (name: string) => void;
};

export const UserContext = createContext<UserContextType>({
  profileName: 'Chuks',
  setProfileName: () => {},
});

export function useUser() {
  return useContext(UserContext);
}

export default function RootLayout() {
  const [profileName, setProfileName] = useState('Chuks');

  return (
    <UserContext.Provider value={{ profileName, setProfileName }}>
      <StatusBar style="light" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(tabs)" />
      </Stack>
    </UserContext.Provider>
  );
}
