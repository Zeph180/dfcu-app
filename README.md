# 💳 Payment Client (Ionic Angular)

This is a mobile-first frontend built with **Ionic + Angular** that interacts with the Payment Gateway API. It allows users to initiate payments and check the status of a transaction.

---

## 🚀 Features

- ✅ Initiate new payments
- 🔁 Check payment status
- 📱 Responsive UI (Mobile & Web)
- 🎨 Theming inspired by [dfcu](https://www.dfculimited.com) brand colors

---

## 🧰 Tech Stack

- [Ionic Framework](https://ionicframework.com/)
- [Angular](https://angular.io/)
- [RxJS](https://rxjs.dev/)
- [Reactive Forms](https://angular.io/guide/reactive-forms)
- [TypeScript](https://www.typescriptlang.org/)

---

## 📦 Setup Instructions

```bash
# Clone the repository
git clone https://github.com/dfcu-app/payment-client.git
cd payment-client

# Install dependencies
npm install

# Start development server
ionic serve

Android
ionic capacitor add android
ionic capacitor run android

iOS
ionic capacitor add ios
ionic capacitor run ios
```

## 📱 Run on Mobile Devices
```bash
# Add Android platform
ionic capacitor add android
ionic capacitor build
npx cap sync
ionic capacitor run android

# Add Android platform
ionic capacitor add ios
ionic capacitor build
npx cap sync
ionic capacitor run android
