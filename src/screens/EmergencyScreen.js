import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity,
  Linking,
  Alert,
  Dimensions 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

const EmergencyScreen = () => {
  const handlePhoneCall = (number, description) => {
    Alert.alert(
      'Call Emergency Services',
      `Are you sure you want to call ${description}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Call', 
          onPress: () => Linking.openURL(`tel:${number}`) 
        }
      ]
    );
  };

  const emergencyNumbers = [
    {
      number: '911',
      title: 'Emergency Services',
      description: 'Police, Fire, Medical Emergency',
      icon: 'call',
      color: '#DC3545',
      when: 'Life-threatening emergencies, crimes in progress, fires, serious medical emergencies'
    },
    {
      number: '988',
      title: 'Suicide & Crisis Lifeline',
      description: 'Mental Health Crisis Support',
      icon: 'heart',
      color: '#6F42C1',
      when: 'Suicidal thoughts, mental health crisis, emotional distress'
    },
    {
      number: '211',
      title: 'Community Services',
      description: 'Local Resources & Information',
      icon: 'information-circle',
      color: '#17A2B8',
      when: 'Need help finding local services, food, housing, utilities assistance'
    }
  ];

  const nonEmergencyServices = [
    {
      title: 'Poison Control',
      number: '1-800-222-1222',
      description: 'For poisoning emergencies and questions',
      icon: 'medical'
    },
    {
      title: 'Domestic Violence Hotline',
      number: '1-800-799-7233',
      description: '24/7 support for domestic violence situations',
      icon: 'shield-checkmark'
    },
    {
      title: 'Child Abuse Hotline',
      number: '1-800-4-A-CHILD',
      description: 'Report child abuse or neglect',
      icon: 'people'
    },
    {
      title: 'Red Cross Emergency',
      number: '1-800-733-2767',
      description: 'Disaster relief and emergency assistance',
      icon: 'medical-outline'
    }
  ];

  const emergencyPreparedness = [
    {
      category: 'Important Documents',
      icon: 'document-text',
      items: [
        'Keep copies of ID, passport, Social Security card',
        'Insurance policies and important medical information',
        'Emergency contact list with phone numbers',
        'Bank account information and credit card numbers',
        'Store documents in waterproof container',
        'Have digital copies stored securely online'
      ]
    },
    {
      category: 'Emergency Kit',
      icon: 'briefcase',
      items: [
        'Water (1 gallon per person per day for 3 days)',
        'Non-perishable food for 3 days',
        'Flashlight and extra batteries',
        'First aid kit and necessary medications',
        'Cell phone chargers (battery-powered or hand crank)',
        'Cash in small bills',
        'Blankets and warm clothing',
        'Personal hygiene items'
      ]
    },
    {
      category: 'Medical Emergency Info',
      icon: 'medical',
      items: [
        'Know your blood type and allergies',
        'List of current medications and dosages',
        'Medical conditions and doctor contact information',
        'Health insurance information',
        'Location of nearest hospital',
        'Emergency medical contact person'
      ]
    }
  ];

  const emergencyTypes = [
    {
      type: 'Medical Emergency',
      icon: 'medical',
      color: '#DC3545',
      actions: [
        'Call 911 immediately',
        'Stay calm and provide clear information',
        'Give exact location and nature of emergency',
        'Follow dispatcher\'s instructions',
        'If trained, provide first aid',
        'Stay on the line until help arrives'
      ]
    },
    {
      type: 'Fire Emergency',
      icon: 'flame',
      color: '#FF8C00',
      actions: [
        'Call 911 immediately',
        'Evacuate the building if safe to do so',
        'Feel doors before opening (if hot, find another exit)',
        'Stay low to avoid smoke inhalation',
        'Meet at designated meeting point',
        'Do not re-enter building'
      ]
    },
    {
      type: 'Crime/Safety Emergency',
      icon: 'shield',
      color: '#0066CC',
      actions: [
        'Call 911 if in immediate danger',
        'Try to get to a safe location',
        'Provide detailed description of situation',
        'Note suspect descriptions if safe to do so',
        'Preserve evidence if possible',
        'Follow up with police report if needed'
      ]
    },
    {
      type: 'Natural Disaster',
      icon: 'warning',
      color: '#FFC107',
      actions: [
        'Follow local emergency broadcasts',
        'Evacuate if instructed by authorities',
        'Shelter in place if advised',
        'Use emergency supplies',
        'Stay away from downed power lines',
        'Check on neighbors if safe to do so'
      ]
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Ionicons name="medical" size={40} color="white" />
          <Text style={styles.headerTitle}>Emergency Information</Text>
          <Text style={styles.headerSubtitle}>
            Important contacts and emergency procedures
          </Text>
        </View>

        {/* Emergency Numbers */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Emergency Numbers</Text>
          {emergencyNumbers.map((service, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.emergencyCard, { borderLeftColor: service.color }]}
              onPress={() => handlePhoneCall(service.number, service.title)}
            >
              <View style={styles.emergencyHeader}>
                <View style={[styles.emergencyIcon, { backgroundColor: service.color }]}>
                  <Ionicons name={service.icon} size={24} color="white" />
                </View>
                <View style={styles.emergencyInfo}>
                  <Text style={styles.emergencyNumber}>{service.number}</Text>
                  <Text style={styles.emergencyTitle}>{service.title}</Text>
                  <Text style={styles.emergencyDescription}>{service.description}</Text>
                </View>
                <Ionicons name="call" size={20} color={service.color} />
              </View>
              <Text style={styles.emergencyWhen}>When to call: {service.when}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Other Important Numbers */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Other Important Numbers</Text>
          {nonEmergencyServices.map((service, index) => (
            <TouchableOpacity
              key={index}
              style={styles.serviceCard}
              onPress={() => handlePhoneCall(service.number, service.title)}
            >
              <Ionicons name={service.icon} size={20} color="#0066CC" />
              <View style={styles.serviceInfo}>
                <Text style={styles.serviceTitle}>{service.title}</Text>
                <Text style={styles.serviceNumber}>{service.number}</Text>
                <Text style={styles.serviceDescription}>{service.description}</Text>
              </View>
              <Ionicons name="call-outline" size={16} color="#666" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Emergency Preparedness */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Emergency Preparedness</Text>
          {emergencyPreparedness.map((category, index) => (
            <View key={index} style={styles.prepCard}>
              <View style={styles.prepHeader}>
                <Ionicons name={category.icon} size={24} color="#0066CC" />
                <Text style={styles.prepTitle}>{category.category}</Text>
              </View>
              <View style={styles.prepContent}>
                {category.items.map((item, itemIndex) => (
                  <View key={itemIndex} style={styles.prepItem}>
                    <Ionicons name="checkmark" size={16} color="#28A745" />
                    <Text style={styles.prepText}>{item}</Text>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>

        {/* Emergency Response */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Emergency Response Guide</Text>
          {emergencyTypes.map((emergency, index) => (
            <View key={index} style={styles.responseCard}>
              <View style={[styles.responseHeader, { backgroundColor: emergency.color }]}>
                <Ionicons name={emergency.icon} size={24} color="white" />
                <Text style={styles.responseType}>{emergency.type}</Text>
              </View>
              <View style={styles.responseContent}>
                {emergency.actions.map((action, actionIndex) => (
                  <View key={actionIndex} style={styles.actionItem}>
                    <View style={styles.actionNumber}>
                      <Text style={styles.actionNumberText}>{actionIndex + 1}</Text>
                    </View>
                    <Text style={styles.actionText}>{action}</Text>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>

        {/* Important Reminders */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Important Reminders</Text>
          
          <View style={styles.reminderCard}>
            <Ionicons name="warning" size={24} color="#FFC107" />
            <View style={styles.reminderContent}>
              <Text style={styles.reminderTitle}>Stay Calm</Text>
              <Text style={styles.reminderText}>
                In any emergency, try to remain calm. Speak clearly when calling for help and follow instructions from emergency operators.
              </Text>
            </View>
          </View>
          
          <View style={styles.reminderCard}>
            <Ionicons name="location" size={24} color="#0066CC" />
            <View style={styles.reminderContent}>
              <Text style={styles.reminderTitle}>Know Your Location</Text>
              <Text style={styles.reminderText}>
                Always know your exact address and be able to provide it to emergency services. Include apartment numbers, cross streets, or landmarks.
              </Text>
            </View>
          </View>
          
          <View style={styles.reminderCard}>
            <Ionicons name="language" size={24} color="#28A745" />
            <View style={styles.reminderContent}>
              <Text style={styles.reminderTitle}>Language Assistance</Text>
              <Text style={styles.reminderText}>
                911 operators can provide translation services. Say "Spanish" or your language name if you need an interpreter.
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
    backgroundColor: '#DC3545',
    padding: 30,
    alignItems: 'center',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
  },
  headerSubtitle: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.9)',
    textAlign: 'center',
    marginTop: 5,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  emergencyCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    borderLeftWidth: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  emergencyHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  emergencyIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  emergencyInfo: {
    flex: 1,
  },
  emergencyNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  emergencyTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  emergencyDescription: {
    fontSize: 14,
    color: '#666',
  },
  emergencyWhen: {
    fontSize: 12,
    color: '#666',
    fontStyle: 'italic',
    marginTop: 5,
  },
  serviceCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  serviceInfo: {
    flex: 1,
    marginLeft: 15,
  },
  serviceTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  serviceNumber: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#0066CC',
  },
  serviceDescription: {
    fontSize: 12,
    color: '#666',
  },
  prepCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  prepHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  prepTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 10,
  },
  prepContent: {
    paddingLeft: 10,
  },
  prepItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  prepText: {
    fontSize: 14,
    color: '#333',
    marginLeft: 10,
    flex: 1,
    lineHeight: 20,
  },
  responseCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  responseHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  responseType: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 10,
  },
  responseContent: {
    padding: 15,
  },
  actionItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  actionNumber: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#0066CC',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  actionNumberText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  actionText: {
    fontSize: 14,
    color: '#333',
    flex: 1,
    lineHeight: 20,
  },
  reminderCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  reminderContent: {
    marginLeft: 15,
    flex: 1,
  },
  reminderTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  reminderText: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
    lineHeight: 20,
  },
});

export default EmergencyScreen;
