# CaloriZen – Simple & Smart Calorie Planner 📱

![React Native](https://img.icons8.com/color/48/000000/react-native.png)

**CaloriZen** is a modern, user-friendly calorie planner app built with **React Native + Expo**. It helps users calculate and track daily calorie needs for **weight loss, gain, or maintenance** in a simple, intuitive way. Designed for beginners and fitness enthusiasts, it combines **clean design, smooth animations, and interactive features** to make calorie management engaging and effortless.

### 🎯 Key Features
- **Quick & Accurate Calculations:** Daily calorie needs calculated based on weight, height, age, gender, and activity level.  
- **Flexible Goal Setting:** Mild, moderate, or extreme adjustments for weight loss or gain.  
- **Interactive Calorie Gauge:** Animated circular gauge displays daily calorie targets visually.  
- **Custom Themes & Fonts:** Soft green and dark themes paired with **Poppins** font.  
- **Responsive Design:** Works seamlessly across phones and tablets.  
- **Notes & Tracking:** Record goals, reminders, and progress in-app.  
- **Smooth Navigation:** Powered by **Expo Router** for seamless screen transitions.  
- **Polished Animations:** Built with **React Native Reanimated** for smooth UI feedback.  
- **Precision Visuals:** Circular gauge rendered with **React Native SVG** ensures accuracy.

### 💡 User Tips
- Enter accurate weight and height for precise calorie recommendations.  
- Track daily goals in the notes section to stay motivated.  
- Adjust calorie targets to match your lifestyle.  
- Explore different themes for better readability.  
- Check progress regularly to maintain healthy habits consistently.  

### 🚀 Installation & Running the App
```bash
# 1. Clone the repository
git clone https://github.com/izharahmaad/CaloriZen.git
cd CaloriZen

# 2. Install dependencies
npm install

# 3. Start the development server
npx expo start

# Scan the QR code using Expo Go app on your mobile device

# 4. Android Builds
# Test APK
eas build -p android --profile preview
# Production AAB for Play Store
eas build -p android --profile production
