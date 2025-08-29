📱 CaloriZen – Simple & Smart Calorie Planner

CaloriZen is a modern, beautifully designed calorie calculator app built with React Native (Expo).
It helps users calculate their daily calorie needs for weight loss, weight gain, or maintenance using the latest formulas.

✨ Features

✅ 4 clean screens – Welcome, Input, Goal selection, and Results
✅ Beautiful green/dark theme 🌿
✅ Custom Poppins font for a modern look
✅ Weight & height units toggle (KG/LB, CM/FT)
✅ Animated gauge for daily calorie display 🔥
✅ Smart breakdown: mild, moderate, extreme loss/gain
✅ Notes field – users can write goals or reminders
✅ Expo Router navigation for clean screen flow
✅ Vector icons (Ionicons) for intuitive UI
✅ Fully responsive – looks great on all devices

	
⚙️ Tech Stack

React Native (Expo SDK 53)

Expo Router – navigation

Expo Linear Gradient – stylish backgrounds

React Native Reanimated – smooth animations

React Native SVG – circular calorie gauge

@expo-google-fonts/poppins – custom typography

🚀 Installation

Clone the repo:

git clone https://github.com/izharahmaad/CaloriZen.git
cd CaloriZen


Install dependencies:

npm install


Run locally:

npx expo start


Scan QR with Expo Go app (Android/iOS).

📦 Build APK / AAB

To create a build with Expo EAS:

eas build -p android --profile preview   # for APK test build
eas build -p android --profile production # for Play Store release (AAB)
