import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { useUser } from '../_layout';

export default function EmailScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const { setProfileName } = useUser();

  const handleContinue = () => {
    if (email) {
      const namePart = email.split('@')[0];
      setProfileName(namePart);
    }
    router.push('/(auth)/login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Enter your email address</Text>
        
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Enter your Email" 
            placeholderTextColor="#666"
            autoCapitalize="none"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <TouchableOpacity 
          style={styles.button}
          onPress={handleContinue}
        >
          <Text style={styles.buttonText}>continue</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <View style={styles.footerRow}>
          <Ionicons name="shield-checkmark" size={16} color="#4CAF50" />
          <Text style={styles.footerText}> Deposits insured by | </Text>
          <View style={styles.tidalBadge}>
            <Text style={styles.tidalText}>~~~ tidal</Text>
          </View>
        </View>
        <Text style={styles.backedBy}>Backed By:</Text>
        <View style={styles.partnersRow}>
          <Text style={styles.partnerText}>Google FOR STARTUPS</Text>
          <Text style={styles.partnerDivider}>♦</Text>
          <Text style={styles.partnerText}>BINANCE</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A',
    justifyContent: 'space-between',
  },
  content: {
    padding: 24,
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 30,
  },
  inputContainer: {
    marginBottom: 24,
  },
  label: {
    color: 'white',
    marginBottom: 8,
    fontSize: 14,
    fontWeight: '500',
  },
  input: {
    backgroundColor: '#1A1A1A',
    color: 'white',
    padding: 16,
    borderRadius: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#2952E3',
    padding: 16,
    borderRadius: 30,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    paddingBottom: 40,
    alignItems: 'center',
  },
  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  footerText: {
    color: '#888',
    fontSize: 12,
  },
  tidalBadge: {
    backgroundColor: '#1E3A8A',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  tidalText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  backedBy: {
    color: '#555',
    fontSize: 12,
    marginBottom: 8,
  },
  partnersRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  partnerText: {
    color: '#666',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  partnerDivider: {
    color: '#666',
    marginHorizontal: 8,
    fontSize: 10,
  },
});
