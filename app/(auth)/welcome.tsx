import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          {/* Placeholder for the logo */}
          <View style={styles.logoCircle}>
            <View style={styles.logoBars}>
              <View style={[styles.bar, { backgroundColor: '#F9A826', height: 16 }]} />
              <View style={[styles.bar, { backgroundColor: '#9C27B0', height: 24 }]} />
              <View style={[styles.bar, { backgroundColor: '#3F51B5', height: 18 }]} />
            </View>
          </View>
        </View>

        <Text style={styles.title}>Welcome to the{'\n'}Future of finance</Text>
        <Text style={styles.subtitle}>
          To get started create an account, if you already have an account we will log you in
        </Text>

        <TouchableOpacity 
          style={[styles.button, styles.primaryButton]} 
          onPress={() => router.push('/(auth)/email')}
        >
          <Ionicons name="mail-outline" size={20} color="white" style={styles.buttonIcon} />
          <Text style={styles.primaryButtonText}>Continue with Email</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Ionicons name="logo-google" size={20} color="#4285F4" style={styles.buttonIcon} />
          <Text style={styles.buttonText}>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Ionicons name="logo-apple" size={20} color="white" style={styles.buttonIcon} />
          <Text style={styles.buttonText}>Continue with Apple</Text>
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
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 60,
    alignItems: 'center',
  },
  logoContainer: {
    marginBottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(210, 180, 140, 0.2)', // Light tan outline
    borderWidth: 8,
    borderColor: '#D2B48C',
  },
  logoCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoBars: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 4,
  },
  bar: {
    width: 8,
    borderRadius: 4,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 14,
    color: '#A0A0A0',
    textAlign: 'center',
    marginBottom: 40,
    paddingHorizontal: 20,
    lineHeight: 20,
  },
  button: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#333',
    marginBottom: 16,
  },
  primaryButton: {
    backgroundColor: '#2952E3', // Blue
    borderColor: '#2952E3',
  },
  buttonIcon: {
    marginRight: 12,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  primaryButtonText: {
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
