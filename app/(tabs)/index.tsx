import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

export default function HomeScreen() {
  const [showBalance, setShowBalance] = useState(false);
  const [showSavings, setShowSavings] = useState(false);

  const quickActions = [
    { icon: 'business-outline', label: 'To Bank', badge: 'NEW' },
    { icon: 'arrow-down-outline', label: 'Withdraw' },
    { icon: 'wallet-outline', label: 'Save' },
    { icon: 'trending-up-outline', label: 'Invest' },
    { icon: 'flash-outline', label: 'High Yield' },
    { icon: 'swap-horizontal-outline', label: 'Swap' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Portfolio Balance Section */}
        <View style={styles.balanceSection}>
          <Text style={styles.sectionLabel}>PORTFOLIO BALANCE</Text>
          <View style={styles.balanceRow}>
            <Text style={styles.balanceText}>
              {showBalance ? '₦ 12,345,678.90' : '**********'}
            </Text>
            <TouchableOpacity onPress={() => setShowBalance(!showBalance)}>
              <Ionicons name={showBalance ? "eye-outline" : "eye-off-outline"} size={20} color="#666" style={styles.eyeIcon} />
            </TouchableOpacity>
          </View>
          
          <View style={styles.balanceActionsRow}>
            <TouchableOpacity>
              <Text style={styles.transactionLink}>Transaction History {'>'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.addFundsBtn}>
              <Text style={styles.addFundsText}>+ Add Funds</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Total Savings Card */}
        <View style={styles.savingsCard}>
          <View style={styles.savingsHeader}>
            <View style={styles.savingsIconWrapper}>
              <Ionicons name="wallet-outline" size={20} color="#2952E3" />
            </View>
            <Text style={styles.savingsTitle}>Total Savings</Text>
            <TouchableOpacity style={styles.plansBtn}>
              <Text style={styles.plansBtnText}>Plans {'>'}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.savingsBalanceRow}>
            <Text style={styles.savingsBalanceText}>
              {showSavings ? '₦ 150,000.90' : '**********'}
            </Text>
            <TouchableOpacity onPress={() => setShowSavings(!showSavings)}>
              <Ionicons name={showSavings ? "eye-outline" : "eye-off-outline"} size={20} color="#666" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Quick Actions Grid */}
        <View style={styles.quickActionsGrid}>
          {quickActions.map((action, index) => (
            <TouchableOpacity key={index} style={styles.actionBtn}>
              <View style={styles.actionIconContainer}>
                <Ionicons name={action.icon as any} size={24} color="white" />
                {action.badge && (
                  <View style={styles.badge}>
                    <Text style={styles.badgeText}>{action.badge}</Text>
                  </View>
                )}
              </View>
              <Text style={styles.actionLabel}>{action.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* To Do Section */}
        <View style={styles.todoSection}>
          <Text style={styles.todoHeader}>To Do</Text>
          <TouchableOpacity style={styles.todoItem}>
            <View style={styles.checkbox} />
            <Text style={styles.todoText}>Update your profile.</Text>
          </TouchableOpacity>
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
  scrollContent: {
    padding: 24,
    paddingTop: 40,
  },
  balanceSection: {
    marginBottom: 30,
  },
  sectionLabel: {
    color: '#888',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginBottom: 8,
  },
  balanceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  balanceText: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
  },
  eyeIcon: {
    marginLeft: 12,
  },
  balanceActionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  transactionLink: {
    color: '#888',
    fontSize: 14,
  },
  addFundsBtn: {
    backgroundColor: '#2952E3',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  addFundsText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
  },
  savingsCard: {
    backgroundColor: '#1A1A1A',
    borderRadius: 16,
    padding: 20,
    marginBottom: 30,
  },
  savingsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  savingsIconWrapper: {
    backgroundColor: 'rgba(41, 82, 227, 0.2)',
    padding: 8,
    borderRadius: 12,
    marginRight: 12,
  },
  savingsTitle: {
    color: '#888',
    fontSize: 14,
    flex: 1,
  },
  plansBtn: {
    padding: 4,
  },
  plansBtnText: {
    color: '#2952E3',
    fontSize: 14,
    fontWeight: '500',
  },
  savingsBalanceRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  savingsBalanceText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 12,
  },
  quickActionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  actionBtn: {
    width: '30%',
    alignItems: 'center',
    marginBottom: 20,
  },
  actionIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: '#1A1A1A',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: -6,
    right: -10,
    backgroundColor: '#E53935',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
  },
  badgeText: {
    color: 'white',
    fontSize: 8,
    fontWeight: 'bold',
  },
  actionLabel: {
    color: '#CCC',
    fontSize: 12,
    textAlign: 'center',
  },
  todoSection: {
    marginBottom: 30,
  },
  todoHeader: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1A1A1A',
    padding: 16,
    borderRadius: 12,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#666',
    marginRight: 12,
  },
  todoText: {
    color: 'white',
    fontSize: 14,
  },
});
