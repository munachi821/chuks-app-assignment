import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function RewardsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.headerText}>
          Share your code and earn rewards with every friend who joins.
        </Text>

        <View style={styles.rewardsCard}>
          <View style={styles.iconCircle}>
            <Ionicons name="gift" size={24} color="white" />
          </View>
          <View style={styles.rewardsTextContent}>
            <Text style={styles.rewardsTitle}>Rewards</Text>
            <Text style={styles.rewardsSubtitle}>
              Grow your network and unlock exclusive benefits as we grow together.
            </Text>
          </View>
        </View>

        <View style={styles.codeCard}>
          <Text style={styles.codeLabel}>Your referral code</Text>
          <View style={styles.codeRow}>
            <Text style={styles.codeText}>XEND-Henry</Text>
            <TouchableOpacity style={styles.copyBtn}>
              <Ionicons name="copy-outline" size={16} color="#2952E3" style={styles.copyIcon} />
              <Text style={styles.copyBtnText}>Copy code</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>0</Text>
            <Text style={styles.statLabel}>Referrals</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>0</Text>
            <Text style={styles.statLabel}>Points</Text>
          </View>
        </View>

        <View style={{ flex: 1 }} />

        <TouchableOpacity style={styles.shareButton}>
          <Text style={styles.shareButtonText}>Share invite link</Text>
        </TouchableOpacity>
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
    flexGrow: 1,
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    lineHeight: 34,
  },
  rewardsCard: {
    backgroundColor: '#2952E3',
    borderRadius: 16,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  rewardsTextContent: {
    flex: 1,
  },
  rewardsTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  rewardsSubtitle: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 14,
    lineHeight: 20,
  },
  codeCard: {
    backgroundColor: '#1A1A1A',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
  },
  codeLabel: {
    color: '#888',
    fontSize: 14,
    marginBottom: 12,
  },
  codeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  codeText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  copyBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(41, 82, 227, 0.1)',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
  },
  copyIcon: {
    marginRight: 4,
  },
  copyBtnText: {
    color: '#2952E3',
    fontWeight: '600',
    fontSize: 12,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  statCard: {
    width: '48%',
    backgroundColor: '#1A1A1A',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
  },
  statValue: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  statLabel: {
    color: '#888',
    fontSize: 14,
  },
  shareButton: {
    backgroundColor: '#2952E3',
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 'auto',
  },
  shareButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
