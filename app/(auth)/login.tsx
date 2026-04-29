import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { useUser } from '../_layout';

export default function LoginScreen() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const { profileName } = useUser();
  const displayCapital = profileName ? profileName.charAt(0).toUpperCase() : 'C';
  const displayFull = profileName ? profileName.charAt(0).toUpperCase() + profileName.slice(1) : 'Chuks';

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          <View style={styles.avatarPlaceholder}>
            <Text style={styles.avatarText}>{displayCapital}</Text>
          </View>
          <Text style={styles.headerWelcomeText}>Welcome, {displayFull}</Text>
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Enter your password</Text>
        
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Your Password</Text>
          <View style={styles.passwordInputWrapper}>
            <Ionicons name="lock-closed-outline" size={20} color="#666" style={styles.inputIcon} />
            <TextInput 
              style={styles.input} 
              placeholder="••••••••" 
              placeholderTextColor="#666"
              secureTextEntry={!showPassword}
              autoCapitalize="none"
            />
            <TouchableOpacity 
              onPress={() => setShowPassword(!showPassword)}
              style={styles.eyeIcon}
            >
              <Ionicons 
                name={showPassword ? "eye-outline" : "eye-off-outline"} 
                size={20} 
                color="#666" 
              />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => router.replace('/(tabs)')}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.switchAccountBtn}>
          <Text style={styles.switchAccountText}>Not you? Switch account</Text>
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
  header: {
    paddingHorizontal: 24,
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1A1A1A',
    padding: 8,
    paddingRight: 16,
    borderRadius: 30,
  },
  avatarPlaceholder: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#2952E3',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  avatarText: {
    color: 'white',
    fontWeight: 'bold',
  },
  headerWelcomeText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    padding: 24,
    paddingTop: 40,
    flex: 1,
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
  passwordInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1A1A1A',
    borderRadius: 12,
    paddingHorizontal: 16,
  },
  inputIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    color: 'white',
    paddingVertical: 16,
    fontSize: 16,
  },
  eyeIcon: {
    padding: 4,
  },
  button: {
    backgroundColor: '#2952E3',
    padding: 16,
    borderRadius: 30,
    alignItems: 'center',
    width: '100%',
    marginBottom: 24,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  switchAccountBtn: {
    alignItems: 'center',
  },
  switchAccountText: {
    color: '#888',
    fontSize: 14,
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
