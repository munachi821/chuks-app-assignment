import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SavingsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.headerCard}>
          <Text style={styles.headerLabel}>SAVINGS PLAN</Text>
          <Text style={styles.headerBalance}>USD 0.00</Text>
        </View>

        <View style={styles.actionCardsRow}>
          <TouchableOpacity style={styles.actionCard}>
            <View style={styles.actionIconWrapper}>
              <Ionicons name="add-circle" size={24} color="#2952E3" />
            </View>
            <Text style={styles.actionTitle}>Create Plan</Text>
            <Text style={styles.actionSubtitle}>Create a fixed savings plan</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionCard}>
            <View style={styles.actionIconWrapper}>
              <Ionicons name="calculator" size={24} color="#2952E3" />
            </View>
            <Text style={styles.actionTitle}>Interest Calculator</Text>
            <Text style={styles.actionSubtitle}>Calculate your potential returns</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>ALL SAVINGS PLANS</Text>
        </View>

        <View style={styles.plansRow}>
          <View style={styles.planCard}>
            <Text style={styles.planLabel}>FLEXIBLE SAVINGS</Text>
            <Text style={styles.planBalance}>$0.00</Text>
            <TouchableOpacity style={styles.planActionBtn}>
              <Ionicons name="add" size={20} color="white" />
            </TouchableOpacity>
          </View>

          <View style={styles.planCard}>
            <Text style={styles.planLabel}>FIXED SAVINGS</Text>
            <Text style={styles.planBalance}>$0.00</Text>
            <TouchableOpacity style={styles.planViewAllBtn}>
              <Ionicons name="list" size={16} color="white" style={styles.viewAllIcon} />
              <Text style={styles.planViewAllText}>VIEW ALL PLANS</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>TODAY'S RATE</Text>
        </View>
        
        <View style={styles.rateCard}>
          <View style={styles.rateItem}>
            <Text style={styles.rateCoin}>USDT</Text>
            <Text style={styles.ratePercentage}>Up to 12% APY</Text>
          </View>
          <View style={styles.rateItem}>
            <Text style={styles.rateCoin}>USDC</Text>
            <Text style={styles.ratePercentage}>Up to 12% APY</Text>
          </View>
          <View style={[styles.rateItem, styles.lastRateItem]}>
            <Text style={styles.rateCoin}>CNGN</Text>
            <Text style={styles.ratePercentage}>Up to 15% APY</Text>
          </View>
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
  headerCard: {
    backgroundColor: '#2952E3',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    marginBottom: 24,
  },
  headerLabel: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginBottom: 8,
  },
  headerBalance: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
  },
  actionCardsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  actionCard: {
    width: '48%',
    backgroundColor: '#1A1A1A',
    borderRadius: 16,
    padding: 16,
  },
  actionIconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(41, 82, 227, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  actionTitle: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  actionSubtitle: {
    color: '#888',
    fontSize: 12,
  },
  sectionHeader: {
    marginBottom: 16,
  },
  sectionTitle: {
    color: '#888',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  plansRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  planCard: {
    width: '48%',
    backgroundColor: '#1A1A1A',
    borderRadius: 16,
    padding: 16,
  },
  planLabel: {
    color: '#888',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  planBalance: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  planActionBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#2952E3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  planViewAllBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2952E3',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  viewAllIcon: {
    marginRight: 4,
  },
  planViewAllText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  rateCard: {
    backgroundColor: '#1A1A1A',
    borderRadius: 16,
    padding: 16,
  },
  rateItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#333',
  },
  lastRateItem: {
    borderBottomWidth: 0,
  },
  rateCoin: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  ratePercentage: {
    color: '#4CAF50',
    fontSize: 14,
    fontWeight: '600',
  },
});
