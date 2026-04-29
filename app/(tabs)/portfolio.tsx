import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

export default function PortfolioScreen() {
  const [showBalance, setShowBalance] = useState(true);
  const [activeTab, setActiveTab] = useState('Stablecoins');

  const actionButtons = [
    { icon: 'add', label: '+ Add Fund' },
    { icon: 'arrow-down', label: 'Withdraw' },
    { icon: 'swap-horizontal', label: 'Swap' },
    { icon: 'document-text', label: 'Statement' },
  ];

  const assets = [
    { id: '1', ticker: 'CNGN', name: 'Compliant Naira', balance: '0.00', price: '$0.00', iconColor: '#9C27B0' },
    { id: '2', ticker: 'USDC', name: 'USD Coin', balance: '12,400.55', price: '$1.00', iconColor: '#2196F3' },
    { id: '3', ticker: 'USDT', name: 'Tether', balance: '0.00', price: '$1.00', iconColor: '#4CAF50' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTitleRow}>
          <Text style={styles.headerTitle}>My Asset Portfolio</Text>
          <TouchableOpacity onPress={() => setShowBalance(!showBalance)}>
            <Ionicons name={showBalance ? "eye-outline" : "eye-off-outline"} size={20} color="#666" style={styles.eyeIcon} />
          </TouchableOpacity>
        </View>
        <Text style={styles.balanceText}>
          {showBalance ? '$ 12,400.55' : '**********'}
        </Text>
      </View>

      <View style={styles.actionRow}>
        {actionButtons.map((btn, index) => (
          <TouchableOpacity key={index} style={styles.actionItem}>
            <View style={styles.actionIconBtn}>
              <Ionicons name={btn.icon as any} size={24} color="white" />
            </View>
            <Text style={styles.actionLabel}>{btn.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.tabsRow}>
        {['Stablecoins', 'Utility', 'Memes'].map((tab) => (
          <TouchableOpacity 
            key={tab} 
            style={[styles.tabBtn, activeTab === tab && styles.activeTabBtn]}
            onPress={() => setActiveTab(tab)}
          >
            <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView style={styles.assetsList}>
        {assets.map((asset) => (
          <View key={asset.id} style={styles.assetItem}>
            <View style={[styles.assetIcon, { backgroundColor: asset.iconColor }]}>
              <Text style={styles.assetIconText}>{asset.ticker.charAt(0)}</Text>
            </View>
            <View style={styles.assetInfo}>
              <Text style={styles.assetTicker}>{asset.ticker}</Text>
              <Text style={styles.assetName}>{asset.name}</Text>
            </View>
            <View style={styles.assetValues}>
              <Text style={styles.assetBalance}>{asset.balance}</Text>
              <Text style={styles.assetPrice}>{asset.price}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A',
  },
  header: {
    padding: 24,
    paddingTop: 40,
    alignItems: 'center',
  },
  headerTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  headerTitle: {
    color: '#888',
    fontSize: 14,
  },
  eyeIcon: {
    marginLeft: 8,
  },
  balanceText: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    marginBottom: 30,
  },
  actionItem: {
    alignItems: 'center',
  },
  actionIconBtn: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#1A1A1A',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  actionLabel: {
    color: '#CCC',
    fontSize: 12,
  },
  tabsRow: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderColor: '#333',
    marginBottom: 16,
  },
  tabBtn: {
    paddingVertical: 12,
    marginRight: 24,
  },
  activeTabBtn: {
    borderBottomWidth: 2,
    borderColor: '#2952E3',
  },
  tabText: {
    color: '#888',
    fontSize: 14,
    fontWeight: '500',
  },
  activeTabText: {
    color: 'white',
  },
  assetsList: {
    flex: 1,
    paddingHorizontal: 24,
  },
  assetItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: '#1A1A1A',
  },
  assetIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  assetIconText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  assetInfo: {
    flex: 1,
  },
  assetTicker: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  assetName: {
    color: '#888',
    fontSize: 14,
  },
  assetValues: {
    alignItems: 'flex-end',
  },
  assetBalance: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  assetPrice: {
    color: '#888',
    fontSize: 14,
  },
});
