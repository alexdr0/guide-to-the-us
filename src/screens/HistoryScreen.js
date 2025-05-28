import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity,
  Image 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const HistoryScreen = () => {
  const historyPeriods = [
    {
      title: 'Colonial Period',
      years: '1607-1776',
      description: 'European colonization and the establishment of the 13 colonies',
      icon: 'boat',
      color: '#8B4513'
    },
    {
      title: 'American Revolution',
      years: '1775-1783',
      description: 'War for independence from British rule',
      icon: 'flag',
      color: '#DC143C'
    },
    {
      title: 'Early Republic',
      years: '1789-1815',
      description: 'Formation of government and westward expansion',
      icon: 'home',
      color: '#4169E1'
    },
    {
      title: 'Civil War Era',
      years: '1861-1865',
      description: 'Conflict over slavery and preservation of the Union',
      icon: 'shield',
      color: '#696969'
    },
    {
      title: 'Industrial Revolution',
      years: '1870-1914',
      description: 'Rapid industrialization and urbanization',
      icon: 'construct',
      color: '#FF8C00'
    },
    {
      title: 'World Wars',
      years: '1914-1945',
      description: 'America emerges as a global superpower',
      icon: 'globe',
      color: '#006400'
    },
    {
      title: 'Modern America',
      years: '1945-Present',
      description: 'Cold War, civil rights, and technological advancement',
      icon: 'rocket',
      color: '#9932CC'
    }
  ];

  const keyEvents = [
    {
      year: '1776',
      event: 'Declaration of Independence',
      description: 'Thirteen colonies declare independence from Britain'
    },
    {
      year: '1787',
      event: 'Constitution Ratified',
      description: 'Framework for the federal government established'
    },
    {
      year: '1803',
      event: 'Louisiana Purchase',
      description: 'Territory doubled with purchase from France'
    },
    {
      year: '1869',
      event: 'Transcontinental Railroad',
      description: 'First railroad connecting Atlantic and Pacific coasts'
    },
    {
      year: '1920',
      event: 'Women\'s Suffrage',
      description: '19th Amendment grants women the right to vote'
    },
    {
      year: '1969',
      event: 'Moon Landing',
      description: 'First humans land on the moon during Apollo 11'
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>American History Timeline</Text>
          <Text style={styles.headerSubtitle}>
            From colonial beginnings to modern superpower
          </Text>
        </View>

        {/* Historical Periods */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Historical Periods</Text>
          {historyPeriods.map((period, index) => (
            <TouchableOpacity key={index} style={styles.periodCard}>
              <View style={[styles.periodIcon, { backgroundColor: period.color }]}>
                <Ionicons name={period.icon} size={24} color="white" />
              </View>
              <View style={styles.periodContent}>
                <Text style={styles.periodTitle}>{period.title}</Text>
                <Text style={styles.periodYears}>{period.years}</Text>
                <Text style={styles.periodDescription}>{period.description}</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#ccc" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Key Events */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Key Events</Text>
          <View style={styles.timelineContainer}>
            {keyEvents.map((event, index) => (
              <View key={index} style={styles.timelineItem}>
                <View style={styles.timelineDate}>
                  <Text style={styles.yearText}>{event.year}</Text>
                </View>
                <View style={styles.timelineContent}>
                  <Text style={styles.eventTitle}>{event.event}</Text>
                  <Text style={styles.eventDescription}>{event.description}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Founding Fathers */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Founding Fathers</Text>
          <View style={styles.foundersContainer}>
            <View style={styles.founderCard}>
              <Text style={styles.founderName}>George Washington</Text>
              <Text style={styles.founderRole}>1st President</Text>
              <Text style={styles.founderDescription}>
                "Father of His Country" - Led Continental Army and presided over Constitutional Convention
              </Text>
            </View>
            <View style={styles.founderCard}>
              <Text style={styles.founderName}>Thomas Jefferson</Text>
              <Text style={styles.founderRole}>3rd President</Text>
              <Text style={styles.founderDescription}>
                Primary author of Declaration of Independence and Louisiana Purchase
              </Text>
            </View>
            <View style={styles.founderCard}>
              <Text style={styles.founderName}>Benjamin Franklin</Text>
              <Text style={styles.founderRole}>Diplomat & Inventor</Text>
              <Text style={styles.founderDescription}>
                Diplomat, inventor, and key figure in both Revolution and Constitutional Convention
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    backgroundColor: '#0066CC',
    padding: 30,
    alignItems: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  headerSubtitle: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: 16,
    textAlign: 'center',
  },
  section: {
    margin: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  periodCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  periodIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  periodContent: {
    flex: 1,
  },
  periodTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 2,
  },
  periodYears: {
    fontSize: 14,
    color: '#0066CC',
    marginBottom: 5,
  },
  periodDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 18,
  },
  timelineContainer: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  timelineItem: {
    flexDirection: 'row',
    marginBottom: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  timelineDate: {
    width: 60,
    alignItems: 'center',
    marginRight: 15,
  },
  yearText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0066CC',
    backgroundColor: '#E3F2FD',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 15,
  },
  timelineContent: {
    flex: 1,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  eventDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 18,
  },
  foundersContainer: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  founderCard: {
    padding: 15,
    marginBottom: 15,
    borderLeftWidth: 4,
    borderLeftColor: '#0066CC',
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
  },
  founderName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 2,
  },
  founderRole: {
    fontSize: 14,
    color: '#0066CC',
    marginBottom: 8,
  },
  founderDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 18,
  },
});

export default HistoryScreen;
