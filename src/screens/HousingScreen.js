import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity,
  Dimensions 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

const HousingScreen = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const housingSections = [
    {
      id: 'apartment_rental',
      title: 'Apartment Rental Process',
      icon: 'business',
      color: '#FF6B6B',
      content: {
        overview: "Finding and renting an apartment in the US involves several steps and requirements. Understanding the process helps ensure you find suitable housing.",
        steps: [
          "Determine your budget (rent + utilities should be ≤30% of income)",
          "Research neighborhoods and amenities",
          "Search online platforms (Zillow, Apartments.com, Craigslist)",
          "Schedule apartment viewings",
          "Complete rental application",
          "Provide required documentation",
          "Pay application fee and security deposit",
          "Sign lease agreement",
          "Complete move-in inspection"
        ],
        required_documents: [
          "Photo ID (driver's license or passport)",
          "Proof of income (pay stubs, employment letter)",
          "Bank statements (2-3 months)",
          "References from previous landlords",
          "Social Security number or ITIN",
          "Completed rental application",
          "Background check authorization"
        ],
        costs: [
          "First month's rent (paid upfront)",
          "Security deposit (usually 1-2 months' rent)",
          "Application fee ($25-$100)",
          "Broker fee (in some cities, 1 month's rent)",
          "Utility deposits (electricity, gas, internet)",
          "Renter's insurance ($10-$30/month)"
        ],
        lease_terms: [
          "12-month lease is most common",
          "Month-to-month leases available but more expensive",
          "Read lease carefully before signing",
          "Understand renewal terms and rent increase policies",
          "Know your rights regarding deposits and repairs",
          "Document apartment condition at move-in"
        ]
      }
    },
    {
      id: 'cost_of_living',
      title: 'Cost of Living Considerations',
      icon: 'calculator',
      color: '#4ECDC4',
      content: {
        overview: "Housing costs vary significantly across the US. Understanding regional differences helps in budgeting and decision-making.",
        housing_costs: [
          "Major cities: $1,500-$4,000+ for 1-bedroom apartment",
          "Suburban areas: $800-$2,000 for 1-bedroom apartment", 
          "Rural areas: $500-$1,200 for 1-bedroom apartment",
          "Room rentals: $400-$1,500 depending on location",
          "House rentals: $1,000-$5,000+ depending on size and location"
        ],
        additional_costs: [
          "Utilities (electricity, gas, water): $100-$200/month",
          "Internet: $30-$80/month",
          "Parking: $50-$300/month in cities",
          "Trash/recycling: $10-$30/month",
          "HOA fees (some apartments): $50-$200/month",
          "Renter's insurance: $10-$30/month"
        ],
        money_saving_tips: [
          "Consider roommates to split costs",
          "Look for apartments with utilities included",
          "Research neighborhoods with good public transportation",
          "Compare different areas for best value",
          "Negotiate rent, especially for longer leases",
          "Look for move-in specials and discounts",
          "Consider slightly older buildings for lower rent"
        ],
        expensive_cities: [
          "San Francisco, CA - Very High",
          "New York City, NY - Very High", 
          "Los Angeles, CA - High",
          "Washington, DC - High",
          "Boston, MA - High",
          "Seattle, WA - High"
        ],
        affordable_cities: [
          "Kansas City, MO - Low",
          "Oklahoma City, OK - Low",
          "Memphis, TN - Low",
          "Indianapolis, IN - Moderate",
          "Phoenix, AZ - Moderate",
          "Atlanta, GA - Moderate"
        ]
      }
    },
    {
      id: 'housing_resources',
      title: 'Housing Resources & Assistance',
      icon: 'help-circle',
      color: '#45B7D1',
      content: {
        overview: "Various programs and resources exist to help individuals and families find affordable housing and assistance.",
        government_programs: [
          "Section 8 Housing Choice Voucher Program",
          "Public Housing",
          "Low-Income Housing Tax Credit (LIHTC) properties",
          "USDA Rural Development housing programs",
          "VA housing assistance for veterans",
          "Housing assistance for seniors and disabled"
        ],
        rental_websites: [
          "Zillow.com - Comprehensive listings",
          "Apartments.com - Apartment-focused search",
          "Rent.com - Verified listings",
          "Craigslist.org - Local listings (exercise caution)",
          "Facebook Marketplace - Local community listings",
          "PadMapper - Map-based apartment search"
        ],
        assistance_organizations: [
          "Local Housing Authorities",
          "211 (dial 2-1-1 for local resources)",
          "Salvation Army housing programs",
          "Catholic Charities housing assistance",
          "United Way local chapters",
          "Local immigrant service organizations"
        ],
        tenant_rights: [
          "Right to safe and habitable housing",
          "Protection from discrimination based on race, religion, national origin",
          "Right to privacy (24-hour notice for non-emergency entry)",
          "Right to have repairs made in reasonable time",
          "Right to get security deposit back (minus legitimate deductions)",
          "Protection from illegal eviction"
        ],
        red_flags: [
          "Requests for payment via wire transfer or gift cards",
          "Landlord unwilling to show property in person",
          "Rent significantly below market rate",
          "Pressure to sign lease immediately",
          "Requests for large upfront payments",
          "No written lease agreement",
          "Poor maintenance of common areas"
        ]
      }
    }
  ];

  const renderExpandableSection = (section) => {
    const isExpanded = expandedSections[section.id];
    
    return (
      <View key={section.id} style={styles.sectionContainer}>
        <TouchableOpacity
          style={[styles.sectionHeader, { backgroundColor: section.color }]}
          onPress={() => toggleSection(section.id)}
        >
          <View style={styles.sectionHeaderLeft}>
            <Ionicons name={section.icon} size={24} color="white" />
            <Text style={styles.sectionTitle}>{section.title}</Text>
          </View>
          <Ionicons 
            name={isExpanded ? "chevron-up" : "chevron-down"} 
            size={20} 
            color="white" 
          />
        </TouchableOpacity>
        
        {isExpanded && (
          <View style={styles.sectionContent}>
            <Text style={styles.overview}>{section.content.overview}</Text>
            
            {section.content.steps && (
              <View style={styles.contentBlock}>
                <Text style={styles.blockTitle}>Rental Process Steps:</Text>
                {section.content.steps.map((step, index) => (
                  <View key={index} style={styles.listItem}>
                    <View style={styles.stepNumber}>
                      <Text style={styles.stepNumberText}>{index + 1}</Text>
                    </View>
                    <Text style={styles.listText}>{step}</Text>
                  </View>
                ))}
              </View>
            )}
            
            {section.content.required_documents && (
              <View style={styles.contentBlock}>
                <Text style={styles.blockTitle}>Required Documents:</Text>
                {section.content.required_documents.map((doc, index) => (
                  <View key={index} style={styles.listItem}>
                    <Ionicons name="document" size={16} color="#0066CC" />
                    <Text style={styles.listText}>{doc}</Text>
                  </View>
                ))}
              </View>
            )}
            
            {section.content.costs && (
              <View style={styles.contentBlock}>
                <Text style={styles.blockTitle}>Expected Costs:</Text>
                {section.content.costs.map((cost, index) => (
                  <View key={index} style={styles.listItem}>
                    <Ionicons name="cash" size={16} color="#28A745" />
                    <Text style={styles.listText}>{cost}</Text>
                  </View>
                ))}
              </View>
            )}
            
            {section.content.lease_terms && (
              <View style={styles.contentBlock}>
                <Text style={styles.blockTitle}>Lease Information:</Text>
                {section.content.lease_terms.map((term, index) => (
                  <View key={index} style={styles.listItem}>
                    <Ionicons name="contract" size={16} color="#FFC107" />
                    <Text style={styles.listText}>{term}</Text>
                  </View>
                ))}
              </View>
            )}
            
            {section.content.housing_costs && (
              <View style={styles.contentBlock}>
                <Text style={styles.blockTitle}>Housing Cost Ranges:</Text>
                {section.content.housing_costs.map((cost, index) => (
                  <View key={index} style={styles.listItem}>
                    <Ionicons name="home" size={16} color="#0066CC" />
                    <Text style={styles.listText}>{cost}</Text>
                  </View>
                ))}
              </View>
            )}
            
            {section.content.additional_costs && (
              <View style={styles.contentBlock}>
                <Text style={styles.blockTitle}>Additional Monthly Costs:</Text>
                {section.content.additional_costs.map((cost, index) => (
                  <View key={index} style={styles.listItem}>
                    <Ionicons name="add-circle" size={16} color="#DC3545" />
                    <Text style={styles.listText}>{cost}</Text>
                  </View>
                ))}
              </View>
            )}
            
            {section.content.money_saving_tips && (
              <View style={styles.contentBlock}>
                <Text style={styles.blockTitle}>Money-Saving Tips:</Text>
                {section.content.money_saving_tips.map((tip, index) => (
                  <View key={index} style={styles.listItem}>
                    <Ionicons name="bulb" size={16} color="#FFC107" />
                    <Text style={styles.listText}>{tip}</Text>
                  </View>
                ))}
              </View>
            )}
            
            {section.content.expensive_cities && (
              <View style={styles.contentBlock}>
                <Text style={styles.blockTitle}>Most Expensive Cities:</Text>
                {section.content.expensive_cities.map((city, index) => (
                  <View key={index} style={styles.listItem}>
                    <Ionicons name="trending-up" size={16} color="#DC3545" />
                    <Text style={styles.listText}>{city}</Text>
                  </View>
                ))}
              </View>
            )}
            
            {section.content.affordable_cities && (
              <View style={styles.contentBlock}>
                <Text style={styles.blockTitle}>More Affordable Cities:</Text>
                {section.content.affordable_cities.map((city, index) => (
                  <View key={index} style={styles.listItem}>
                    <Ionicons name="trending-down" size={16} color="#28A745" />
                    <Text style={styles.listText}>{city}</Text>
                  </View>
                ))}
              </View>
            )}
            
            {section.content.government_programs && (
              <View style={styles.contentBlock}>
                <Text style={styles.blockTitle}>Government Assistance Programs:</Text>
                {section.content.government_programs.map((program, index) => (
                  <View key={index} style={styles.listItem}>
                    <Ionicons name="shield-checkmark" size={16} color="#0066CC" />
                    <Text style={styles.listText}>{program}</Text>
                  </View>
                ))}
              </View>
            )}
            
            {section.content.rental_websites && (
              <View style={styles.contentBlock}>
                <Text style={styles.blockTitle}>Popular Rental Websites:</Text>
                {section.content.rental_websites.map((site, index) => (
                  <View key={index} style={styles.listItem}>
                    <Ionicons name="globe" size={16} color="#17A2B8" />
                    <Text style={styles.listText}>{site}</Text>
                  </View>
                ))}
              </View>
            )}
            
            {section.content.assistance_organizations && (
              <View style={styles.contentBlock}>
                <Text style={styles.blockTitle}>Housing Assistance Organizations:</Text>
                {section.content.assistance_organizations.map((org, index) => (
                  <View key={index} style={styles.listItem}>
                    <Ionicons name="people" size={16} color="#6F42C1" />
                    <Text style={styles.listText}>{org}</Text>
                  </View>
                ))}
              </View>
            )}
            
            {section.content.tenant_rights && (
              <View style={styles.contentBlock}>
                <Text style={styles.blockTitle}>Know Your Tenant Rights:</Text>
                {section.content.tenant_rights.map((right, index) => (
                  <View key={index} style={styles.listItem}>
                    <Ionicons name="checkmark-circle" size={16} color="#28A745" />
                    <Text style={styles.listText}>{right}</Text>
                  </View>
                ))}
              </View>
            )}
            
            {section.content.red_flags && (
              <View style={styles.contentBlock}>
                <Text style={styles.blockTitle}>Red Flags to Avoid:</Text>
                {section.content.red_flags.map((flag, index) => (
                  <View key={index} style={styles.listItem}>
                    <Ionicons name="warning" size={16} color="#DC3545" />
                    <Text style={styles.listText}>{flag}</Text>
                  </View>
                ))}
              </View>
            )}
          </View>
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Ionicons name="home" size={40} color="white" />
          <Text style={styles.headerTitle}>Housing</Text>
          <Text style={styles.headerSubtitle}>
            Finding and securing housing in the United States
          </Text>
        </View>

        {/* Housing Sections */}
        <View style={styles.content}>
          {housingSections.map(renderExpandableSection)}
        </View>

        {/* Important Tips */}
        <View style={styles.section}>
          <Text style={styles.sectionHeaderText}>Important Housing Tips</Text>
          
          <View style={styles.tipCard}>
            <Ionicons name="warning" size={24} color="#FFC107" />
            <View style={styles.tipContent}>
              <Text style={styles.tipTitle}>Avoid Scams</Text>
              <Text style={styles.tipDescription}>
                Never send money or provide personal information before seeing the property in person and meeting the landlord.
              </Text>
            </View>
          </View>
          
          <View style={styles.tipCard}>
            <Ionicons name="document" size={24} color="#0066CC" />
            <View style={styles.tipContent}>
              <Text style={styles.tipTitle}>Keep Records</Text>
              <Text style={styles.tipDescription}>
                Document everything: lease agreements, communications with landlord, apartment condition, and all payments.
              </Text>
            </View>
          </View>
          
          <View style={styles.tipCard}>
            <Ionicons name="search" size={24} color="#28A745" />
            <View style={styles.tipContent}>
              <Text style={styles.tipTitle}>Research Neighborhoods</Text>
              <Text style={styles.tipDescription}>
                Visit potential neighborhoods at different times of day to assess safety, noise levels, and convenience.
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
  content: {
    padding: 20,
  },
  sectionContainer: {
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
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  sectionHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 10,
  },
  sectionContent: {
    padding: 20,
  },
  overview: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
    marginBottom: 20,
    fontStyle: 'italic',
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 10,
  },
  contentBlock: {
    marginBottom: 20,
  },
  blockTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0066CC',
    marginBottom: 10,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
    paddingLeft: 5,
  },
  listText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#333',
    marginLeft: 10,
    flex: 1,
  },
  stepNumber: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#0066CC',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  stepNumberText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  section: {
    padding: 20,
  },
  sectionHeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  tipCard: {
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
  tipContent: {
    marginLeft: 15,
    flex: 1,
  },
  tipTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  tipDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
    lineHeight: 20,
  },
});

export default HousingScreen;
