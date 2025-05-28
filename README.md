# Guide to the US 🇺🇸

An essential mobile app providing comprehensive information and resources for immigrants and newcomers to the United States.

## 📱 Features

- **Language Support**: English and Spanish (coming soon)
- **6 Essential Categories**:
  - 🏛️ Legal & Financial Rights
  - 📚 Education
  - 🚗 Transportation  
  - 🏠 Housing
  - 🤝 Norms & Customs
  - 🚨 Emergency Information
- **Expandable Information Sections**
- **Bottom Navigation**
- **Search Functionality**
- **Emergency Contact Integration**

## 🚀 Deployment Options

### Option 1: Expo Go (Immediate Access)
Your app is already published! Users can access it through:

**EAS Dashboard**: https://expo.dev/accounts/alexanderbobo/projects/guide-to-the-us/updates/4edccc34-1cde-4043-9549-f9206b3fb0cf

### Option 2: Web Version (Browser Access)
Deploy the web version for browser access:

1. **Netlify (Recommended - Free & Easy)**:
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `dist/` folder
   - Get instant live URL!

2. **Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Connect your GitHub repository
   - Auto-deploy on every push

3. **GitHub Pages**:
   - Push code to GitHub
   - Enable Pages in repository settings
   - Upload `dist/` contents to `gh-pages` branch

### Option 3: Native Apps (App Stores)
Native builds are currently being generated for:
- 📱 iOS (App Store)
- 🤖 Android (Google Play Store)

Check build status: [EAS Build Dashboard](https://expo.dev/accounts/alexanderbobo/projects/guide-to-the-us/builds)

## 🛠️ Development

### Prerequisites
- Node.js 18+
- Expo CLI
- EAS CLI

### Setup
```bash
npm install
npx expo start
```

### Build Commands
```bash
# Development
npm start

# Web development
npm run web

# Build for production
npx eas build --platform all

# Deploy web version
./deploy-web.sh
```

## 📂 Project Structure

```
src/
├── navigation/
│   └── AppNavigator.js      # Main navigation setup
├── screens/
│   ├── LanguagePickerScreen.js
│   ├── HomeScreen.js
│   ├── LegalFinancialScreen.js
│   ├── EducationScreen.js
│   ├── TransportationScreen.js
│   ├── HousingScreen.js
│   ├── NormsCustomsScreen.js
│   └── EmergencyScreen.js
└── components/
    └── [Reusable components]
```

## 🌐 Access Your App

### For Testing & Development:
- **Expo Go**: Scan QR code when running `npx expo start`
- **Web**: Run `npx expo start --web`

### For Public Access:
1. **Web**: Deploy `dist/` folder to any web host
2. **Mobile**: Install native builds or use Expo Go with published update

## 📱 Sharing Your App

### Immediate Sharing (Expo Go):
Send users this link: `exp://u.expo.dev/e67544df-cada-4676-ae0d-0d23561d09c4`

### Web Sharing:
Deploy to Netlify/Vercel and share the URL

### App Store Distribution:
Wait for native builds to complete, then submit to app stores

## 🔧 Configuration

- **Project ID**: `e67544df-cada-4676-ae0d-0d23561d09c4`
- **Expo Account**: `alexanderbobo`
- **Bundle ID (iOS)**: `com.alexanderbobo.guidetotheus`
- **Package Name (Android)**: `com.alexanderbobo.guidetotheus`

## 📈 Next Steps

1. ✅ App published to Expo
2. ✅ Web version exported
3. 🔄 Native builds in progress
4. ⏳ Deploy web version
5. ⏳ Add Spanish language support
6. ⏳ Submit to app stores

---

**Built with Expo & React Native** ⚛️
