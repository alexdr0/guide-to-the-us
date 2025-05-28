import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView,
  Dimensions 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

const NormsCustomsScreen = () => {
  const normsAndCustoms = [
    {
      category: 'Social Interactions',
      icon: 'people',
      color: '#FF6B6B',
      items: [
        'Maintain eye contact during conversations - shows respect and attention',
        'Personal space is important - keep arm\'s length distance in conversations',
        'Firm handshakes are standard for greetings in professional settings',
        'Say "please," "thank you," and "excuse me" regularly',
        'Small talk is common - topics include weather, sports, current events',
        'Americans value directness but remain polite in communication',
        'Punctuality is highly valued - arrive on time for appointments',
        'RSVP to invitations promptly and honor your commitments'
      ]
    },
    {
      category: 'Workplace Culture',
      icon: 'briefcase',
      color: '#4ECDC4',
      items: [
        'Dress codes vary - business casual is common in many offices',
        'Email communication is primary for business correspondence',
        'Meetings typically start and end on time',
        'Participation in meetings is encouraged - ask questions and contribute',
        'Work-life balance is increasingly important to many Americans',
        'Networking is crucial for career advancement',
        'Performance reviews are standard and usually annual',
        'Taking initiative and showing leadership qualities is valued'
      ]
    },
    {
      category: 'Dining Etiquette',
      icon: 'restaurant',
      color: '#45B7D1',
      items: [
        'Tipping 18-20% at restaurants is expected for good service',
        'Wait to be seated at restaurants unless it\'s clearly self-seating',
        'Keep hands visible on the table during meals',
        'Cut food one piece at a time (American style eating)',
        'It\'s polite to finish what\'s on your plate',
        'Say "excuse me" if you need to leave the table',
        'Splitting the bill ("going Dutch") is common among friends',
        'Doggy bags for leftovers are perfectly acceptable'
      ]
    },
    {
      category: 'Public Behavior',
      icon: 'globe',
      color: '#96CEB4',
      items: [
        'Hold doors open for people behind you',
        'Stand to the right on escalators, walk on the left',
        'Queue/line up in order - cutting in line is very rude',
        'Use indoor voices in public spaces',
        'Clean up after yourself in public areas',
        'Offer your seat to elderly, pregnant, or disabled passengers',
        'Avoid loud phone conversations in public',
        'Respect "no smoking" signs and designated smoking areas'
      ]
    },
    {
      category: 'Communication Style',
      icon: 'chatbubbles',
      color: '#FECA57',
      items: [
        'Americans often use casual greetings like "How\'s it going?" (not expecting detailed answers)',
        'Sarcasm and humor are common but be careful with cultural references',
        'Direct communication is preferred over hints or indirect suggestions',
        'Apologizing is common even for minor inconveniences ("Sorry!" when bumping into someone)',
        'Americans may seem informal but still expect respect',
        'Avoid discussing personal finances, age, or weight',
        'Political and religious discussions can be sensitive topics',
        'Compliments are given and received openly'
      ]
    },
    {
      category: 'Shopping & Services',
      icon: 'storefront',
      color: '#FF8A80',
      items: [
        'Customer service expectations are high - polite but efficient service',
        'Return policies are generally customer-friendly within time limits',
        'Haggling is not common except at flea markets or car dealerships',
        'Sales tax is added at checkout - prices displayed don\'t include tax',
        'Credit and debit cards are widely accepted',
        'Tipping for personal services: haircuts (15-20%), taxis (15-20%)',
        'Black Friday and holiday sales are major shopping events',
        'Online shopping and home delivery are very common'
      ]
    },
    {
      category: 'Holiday Traditions',
      icon: 'calendar',
      color: '#DDA0DD',
      items: [
        'Thanksgiving (4th Thursday in November) - family gathering, turkey dinner',
        'Christmas (December 25) - gift-giving, family time, religious observance',
        'Independence Day (July 4) - BBQs, fireworks, patriotic celebrations',
        'Memorial Day - honors military veterans, unofficial start of summer',
        'Labor Day - celebrates workers, unofficial end of summer',
        'Halloween (October 31) - costume parties, trick-or-treating for children',
        'New Year\'s Eve - parties, resolutions, countdown celebrations',
        'Valentine\'s Day - romantic gestures, cards, flowers'
      ]
    },
    {
      category: 'Home & Neighborhood',
      icon: 'home',
      color: '#87CEEB',
      items: [
        'Maintain your property and yard - neighbors notice and appreciate this',
        'Introduce yourself to neighbors when you move in',
        'Be mindful of noise levels, especially early morning and late evening',
        'Participate in neighborhood activities if invited',
        'Shovel your sidewalk after snow (where applicable)',
        'Respect property lines and ask before crossing onto neighbors\' land',
        'Many neighborhoods have HOA (Homeowners Association) rules',
        'Block parties and neighborhood gatherings are common in some areas'
      ]
    }
  ];

  const renderCategory = (category) => {
    return (
      <View key={category.category} style={styles.categoryContainer}>
        <View style={[styles.categoryHeader, { backgroundColor: category.color }]}>
          <Ionicons name={category.icon} size={24} color="white" />
          <Text style={styles.categoryTitle}>{category.category}</Text>
        </View>
        
        <View style={styles.categoryContent}>
          {category.items.map((item, index) => (
            <View key={index} style={styles.itemContainer}>
              <View style={styles.bulletPoint}>
                <Ionicons name="checkmark-circle" size={16} color={category.color} />
              </View>
              <Text style={styles.itemText}>{item}</Text>
            </View>
          ))}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Ionicons name="people" size={40} color="white" />
          <Text style={styles.headerTitle}>Norms & Customs</Text>
          <Text style={styles.headerSubtitle}>
            Understanding American culture and social expectations
          </Text>
        </View>

        {/* Introduction */}
        <View style={styles.introSection}>
          <Text style={styles.introTitle}>Cultural Integration</Text>
          <Text style={styles.introText}>
            Understanding American social norms and customs helps you navigate daily life more effectively and build better relationships with colleagues, neighbors, and friends. While America is diverse and customs can vary by region, these are generally accepted practices across the country.
          </Text>
        </View>

        {/* Categories */}
        <View style={styles.content}>
          {normsAndCustoms.map(renderCategory)}
        </View>

        {/* Important Notes */}
        <View style={styles.notesSection}>
          <Text style={styles.notesTitle}>Important Notes</Text>
          
          <View style={styles.noteCard}>
            <Ionicons name="information-circle" size={24} color="#0066CC" />
            <View style={styles.noteContent}>
              <Text style={styles.noteTitle}>Regional Differences</Text>
              <Text style={styles.noteText}>
                Customs can vary between regions. The South tends to be more formal and traditional, while the West Coast is often more casual and progressive.
              </Text>
            </View>
          </View>
          
          <View style={styles.noteCard}>
            <Ionicons name="heart" size={24} color="#FF6B6B" />
            <View style={styles.noteContent}>
              <Text style={styles.noteTitle}>Be Patient with Yourself</Text>
              <Text style={styles.noteText}>
                Learning cultural norms takes time. Americans generally understand that immigrants are learning and are usually patient and helpful when you make cultural mistakes.
              </Text>
            </View>
          </View>
          
          <View style={styles.noteCard}>
            <Ionicons name="people-circle" size={24} color="#28A745" />
            <View style={styles.noteContent}>
              <Text style={styles.noteTitle}>Ask Questions</Text>
              <Text style={styles.noteText}>
                When unsure about appropriate behavior in a situation, it's perfectly acceptable to ask American friends or colleagues for guidance.
              </Text>
            </View>
          </View>
          
          <View style={styles.noteCard}>
            <Ionicons name="star" size={24} color="#FFC107" />
            <View style={styles.noteContent}>
              <Text style={styles.noteTitle}>Respect Diversity</Text>
              <Text style={styles.noteText}>
                America is multicultural. While learning American customs is helpful, maintaining your own cultural identity is also valued and respected.
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
  introSection: {
    padding: 20,
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  introTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  introText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
  },
  content: {
    paddingHorizontal: 20,
  },
  categoryContainer: {
    marginBottom: 20,
    borderRadius: 15,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  categoryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 10,
  },
  categoryContent: {
    padding: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  bulletPoint: {
    marginRight: 10,
    marginTop: 2,
  },
  itemText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#333',
    flex: 1,
  },
  notesSection: {
    padding: 20,
  },
  notesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  noteCard: {
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
  noteContent: {
    marginLeft: 15,
    flex: 1,
  },
  noteTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  noteText: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
    lineHeight: 20,
  },
});

export default NormsCustomsScreen;
