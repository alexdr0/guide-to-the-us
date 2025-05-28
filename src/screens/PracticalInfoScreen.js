import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity,
  Linking 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const PracticalInfoScreen = () => {
  const emergencyNumbers = [
    { service: 'Emergency (Police, Fire, Medical)', number: '911' },
    { service: 'Poison Control', number: '1-800-222-1222' },
    { service: 'National Suicide Prevention', number: '988' },
    { service: 'Non-Emergency Police', number: '311 (varies by city)' }
  ];

  const visaInfo = [
    {
      type: 'Tourist (B-2)',
      duration: 'Up to 6 months',
      purpose: 'Tourism, visiting family/friends',
      requirements: ['Valid passport', 'Proof of ties to home country', 'Financial support']
    },
    {
      type: 'Business (B-1)',
      duration: 'Up to 6 months',
      purpose: 'Business meetings, conferences',
      requirements: ['Valid passport', 'Business invitation', 'Proof of employment']
    },
    {
      type: 'Student (F-1)',
      duration: 'Duration of studies',
      purpose: 'Academic studies',
      requirements: ['I-20 form', 'SEVIS fee payment', 'Financial support proof']
    },
    {
      type: 'Work (H-1B)',
      duration: 'Up to 3 years (renewable)',
      purpose: 'Specialty occupation employment',
      requirements: ['Job offer', 'Employer petition', 'Specialized skills']
    }
  ];

  const transportation = [
    {
      type: 'Domestic Flights',
      description: 'Extensive network connecting all major cities',
      tips: ['Book in advance for better prices', 'Arrive 2 hours early', 'TSA PreCheck saves time'],
      icon: 'airplane'
    },
    {
      type: 'Rental Cars',
      description: 'Most flexible option for exploring',
      tips: ['International license accepted', 'Gas stations everywhere', 'GPS navigation recommended'],
      icon: 'car'
    },
    {
      type: 'Public Transit',
      description: 'Available in major cities',
      tips: ['NYC: MetroCard/OMNY', 'DC: SmarTrip', 'SF: Clipper Card'],
      icon: 'train'
    },
    {
      type: 'Rideshare',
      description: 'Uber and Lyft widely available',
      tips: ['Download apps in advance', 'Tipping is customary', 'Pool options available'],
      icon: 'phone-portrait'
    }
  ];

  const tipping = [
    { service: 'Restaurants', amount: '18-20%', note: 'Based on pre-tax bill' },
    { service: 'Bars', amount: '$1-2 per drink', note: 'Or 15-20% for table service' },
    { service: 'Taxis/Rideshare', amount: '15-20%', note: 'Can tip through app' },
    { service: 'Hotels (Housekeeping)', amount: '$2-5 per night', note: 'Leave on pillow or table' },
    { service: 'Hair Salon', amount: '15-20%', note: 'Plus extra for assistants' },
    { service: 'Delivery', amount: '15-20%', note: 'Minimum $2-3' }
  ];

  const healthcare = [
    {
      type: 'Emergency Room',
      when: 'Life-threatening situations',
      cost: 'Very expensive ($1000+)',
      note: 'Cannot refuse treatment regardless of insurance'
    },
    {
      type: 'Urgent Care',
      when: 'Non-life threatening but immediate care needed',
      cost: 'Moderate ($200-500)',
      note: 'Faster and cheaper than ER'
    },
    {
      type: 'Walk-in Clinics',
      when: 'Minor illnesses, vaccinations',
      cost: 'Lower ($100-200)',
      note: 'Often located in pharmacies'
    },
    {
      type: 'Telemedicine',
      when: 'Consultations, prescriptions',
      cost: 'Lowest ($50-100)',
      note: 'Video calls with doctors'
    }
  ];

  const banking = [
    'Most banks have extensive ATM networks',
    'Credit cards widely accepted (Visa, Mastercard, Amex)',
    'Contactless payments (Apple Pay, Google Pay) common',
    'Tipping often expected in cash',
    'Foreign transaction fees may apply',
    'Notify your bank of travel plans'
  ];

  const callPhoneNumber = (number) => {
    const cleanNumber = number.replace(/[^0-9+]/g, '');
    Linking.openURL(`tel:${cleanNumber}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Practical Information</Text>
          <Text style={styles.headerSubtitle}>
            Essential info for living and visiting the US
          </Text>
        </View>

        {/* Emergency Numbers */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Emergency Numbers</Text>
          <View style={styles.emergencyContainer}>
            {emergencyNumbers.map((item, index) => (
              <TouchableOpacity 
                key={index} 
                style={styles.emergencyItem}
                onPress={() => callPhoneNumber(item.number)}
              >
                <View style={styles.emergencyIcon}>
                  <Ionicons name="call" size={20} color="#FF4444" />
                </View>
                <View style={styles.emergencyInfo}>
                  <Text style={styles.emergencyService}>{item.service}</Text>
                  <Text style={styles.emergencyNumber}>{item.number}</Text>
                </View>
                <Ionicons name="chevron-forward" size={16} color="#ccc" />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Visa Information */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Visa Types</Text>
          {visaInfo.map((visa, index) => (
            <View key={index} style={styles.visaCard}>
              <View style={styles.visaHeader}>
                <Text style={styles.visaType}>{visa.type}</Text>
                <Text style={styles.visaDuration}>{visa.duration}</Text>
              </View>
              <Text style={styles.visaPurpose}>{visa.purpose}</Text>
              <Text style={styles.requirementsTitle}>Requirements:</Text>
              {visa.requirements.map((req, reqIndex) => (
                <View key={reqIndex} style={styles.requirementItem}>
                  <Ionicons name="checkmark" size={16} color="#0066CC" />
                  <Text style={styles.requirementText}>{req}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>

        {/* Transportation */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Transportation</Text>
          {transportation.map((transport, index) => (
            <View key={index} style={styles.transportCard}>
              <View style={styles.transportHeader}>
                <Ionicons name={transport.icon} size={24} color="#0066CC" />
                <Text style={styles.transportType}>{transport.type}</Text>
              </View>
              <Text style={styles.transportDescription}>{transport.description}</Text>
              <Text style={styles.tipsTitle}>Tips:</Text>
              {transport.tips.map((tip, tipIndex) => (
                <View key={tipIndex} style={styles.tipItem}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.tipText}>{tip}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>

        {/* Tipping Guide */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tipping Guide</Text>
          <View style={styles.tippingContainer}>
            <Text style={styles.tippingNote}>
              Tipping is customary and expected in most service industries
            </Text>
            {tipping.map((tip, index) => (
              <View key={index} style={styles.tippingItem}>
                <View style={styles.tippingService}>
                  <Text style={styles.serviceName}>{tip.service}</Text>
                  <Text style={styles.serviceAmount}>{tip.amount}</Text>
                </View>
                <Text style={styles.serviceNote}>{tip.note}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Healthcare */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Healthcare Options</Text>
          <View style={styles.healthcareNote}>
            <Ionicons name="warning" size={20} color="#FF8C00" />
            <Text style={styles.healthcareWarning}>
              Healthcare is expensive. Travel insurance is highly recommended.
            </Text>
          </View>
          {healthcare.map((option, index) => (
            <View key={index} style={styles.healthcareCard}>
              <Text style={styles.healthcareType}>{option.type}</Text>
              <Text style={styles.healthcareWhen}>When to use: {option.when}</Text>
              <Text style={styles.healthcareCost}>Typical cost: {option.cost}</Text>
              <Text style={styles.healthcareNote}>{option.note}</Text>
            </View>
          ))}
        </View>

        {/* Banking & Money */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Banking & Money</Text>
          <View style={styles.bankingContainer}>
            {banking.map((info, index) => (
              <View key={index} style={styles.bankingItem}>
                <Ionicons name="card" size={16} color="#0066CC" />
                <Text style={styles.bankingText}>{info}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Quick Tips */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Tips</Text>
          <View style={styles.tipsContainer}>
            <View style={styles.quickTip}>
              <Ionicons name="time" size={20} color="#4ECDC4" />
              <Text style={styles.quickTipText}>
                Business hours: Usually 9 AM - 5 PM, Monday - Friday
              </Text>
            </View>
            <View style={styles.quickTip}>
              <Ionicons name="restaurant" size={20} color="#FF6B6B" />
              <Text style={styles.quickTipText}>
                Meal times: Lunch 12-2 PM, Dinner 6-8 PM
              </Text>
            </View>
            <View style={styles.quickTip}>
              <Ionicons name="flash" size={20} color="#FECA57" />
              <Text style={styles.quickTipText}>
                Electrical outlets: 110V, Type A & B plugs
              </Text>
            </View>
            <View style={styles.quickTip}>
              <Ionicons name="thermometer" size={20} color="#45B7D1" />
              <Text style={styles.quickTipText}>
                Temperature: Fahrenheit (°F) is used, not Celsius
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
  emergencyContainer: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  emergencyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  emergencyIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFE5E5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  emergencyInfo: {
    flex: 1,
  },
  emergencyService: {
    fontSize: 14,
    color: '#333',
    marginBottom: 2,
  },
  emergencyNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF4444',
  },
  visaCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  visaHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  visaType: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  visaDuration: {
    fontSize: 14,
    color: '#0066CC',
    fontWeight: 'bold',
  },
  visaPurpose: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  requirementsTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  requirementItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  requirementText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#333',
  },
  transportCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  transportHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  transportType: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 10,
  },
  transportDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  tipsTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  tipItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  bullet: {
    fontSize: 14,
    color: '#0066CC',
    marginRight: 8,
    marginTop: 2,
  },
  tipText: {
    flex: 1,
    fontSize: 14,
    color: '#333',
    lineHeight: 18,
  },
  tippingContainer: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  tippingNote: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
    marginBottom: 15,
    textAlign: 'center',
  },
  tippingItem: {
    marginBottom: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  tippingService: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  serviceName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  serviceAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0066CC',
  },
  serviceNote: {
    fontSize: 12,
    color: '#666',
  },
  healthcareNote: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF3CD',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
  },
  healthcareWarning: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
    color: '#856404',
    fontWeight: 'bold',
  },
  healthcareCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  healthcareType: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  healthcareWhen: {
    fontSize: 14,
    color: '#666',
    marginBottom: 3,
  },
  healthcareCost: {
    fontSize: 14,
    color: '#FF8C00',
    fontWeight: 'bold',
    marginBottom: 3,
  },
  healthcareNote: {
    fontSize: 12,
    color: '#666',
    fontStyle: 'italic',
  },
  bankingContainer: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  bankingItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  bankingText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
    color: '#333',
    lineHeight: 18,
  },
  tipsContainer: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  quickTip: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  quickTipText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
    color: '#333',
    lineHeight: 18,
  },
});

export default PracticalInfoScreen;
