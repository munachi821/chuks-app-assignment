import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useUser } from '../_layout';

export default function ProfileScreen() {
  const { profileName } = useUser();
  const displayCapital = profileName ? profileName.charAt(0).toUpperCase() : 'C';
  const displayFull = profileName ? profileName.charAt(0).toUpperCase() + profileName.slice(1) : 'Chuks';

  const settingsOptions = [
    { icon: 'person-outline', title: 'Account Settings', subtitle: 'Edit your profile and next of kin' },
    { icon: 'call-outline', title: 'Verify Phone Number', subtitle: 'Enable OTP notifications' },
    { icon: 'shield-checkmark-outline', title: 'KYC Verification', subtitle: 'Complete your KYC' },
    { icon: 'chatbubbles-outline', title: 'Support', subtitle: 'Chat with our support agents' },
    { icon: 'finger-print-outline', title: 'Biometrics', subtitle: 'Enable Secure Login' },
    { icon: 'lock-closed-outline', title: 'Security', subtitle: 'Add an extra layer of security' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        
        <View style={styles.header}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{displayCapital}</Text>
          </View>
          <View style={styles.usernameRow}>
            <Text style={styles.username}>@{displayFull}</Text>
            <TouchableOpacity style={styles.copyBtn}>
              <Ionicons name="copy-outline" size={16} color="#888" />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.referralBanner}>
          <View style={styles.bannerIconWrapper}>
            <Ionicons name="trophy" size={24} color="#F9A826" />
          </View>
          <View style={styles.bannerTextContent}>
            <Text style={styles.bannerTitle}>Referral</Text>
            <Text style={styles.bannerSubtitle}>Refer friends and earn points</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#888" />
        </TouchableOpacity>

        <View style={styles.settingsList}>
          {settingsOptions.map((item, index) => (
            <TouchableOpacity key={index} style={styles.settingsItem}>
              <View style={styles.settingsIconWrapper}>
                <Ionicons name={item.icon as any} size={24} color="#2952E3" />
              </View>
              <View style={styles.settingsItemTextContent}>
                <Text style={styles.settingsItemTitle}>{item.title}</Text>
                <Text style={styles.settingsItemSubtitle}>{item.subtitle}</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#666" />
            </TouchableOpacity>
          ))}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A',
  },
  content: {
    padding: 24,
    paddingTop: 40,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#2952E3',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  avatarText: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
  },
  usernameRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  username: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 8,
  },
  copyBtn: {
    padding: 4,
  },
  referralBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1A1A1A',
    padding: 16,
    borderRadius: 16,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: '#333',
  },
  bannerIconWrapper: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(249, 168, 38, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  bannerTextContent: {
    flex: 1,
  },
  bannerTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  bannerSubtitle: {
    color: '#888',
    fontSize: 12,
  },
  settingsList: {
    backgroundColor: '#1A1A1A',
    borderRadius: 16,
    overflow: 'hidden',
  },
  settingsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  settingsIconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(41, 82, 227, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  settingsItemTextContent: {
    flex: 1,
  },
  settingsItemTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  settingsItemSubtitle: {
    color: '#888',
    fontSize: 12,
  },
});
