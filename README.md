# News App

Welcome to the World News App

## Features

### User Authentication

- **Secure Login & Signup**: Utilize backend API for authentication with auto-expiry JWT tokens.
- **Token Refresh**: Automatic token refreshment upon expiration using the refresh token API, ensuring seamless user experience.
- **State Management**: Robust state management with Redux Toolkit to maintain authentication state.

### News Browsing

- **Dynamic News Feed**: Authenticated API fetches news titles that are rendered on cards with a detail view icon on the main screen.
- **Continuous Access**: The app continuously refreshes tokens and renders news data using stored refresh tokens in Async Storage.

### News Details

- **Comprehensive Information**: Access detailed views with images, keywords, descriptions, and publish dates by tapping on the details icon.
- **External Linking**: Source URLs are provided to view full articles, which open in a web browser when clicked.

### Persistent Sessions

- **Automatic Re-login**: Users are re-authenticated automatically with stored access tokens, avoiding repeated logins unless logged out.

### Navigation

- **Intuitive Interface**: The app features a bottom navigation bar with distinct icons for the News feed and Logout tabs, which adapt according to the platform (iOS/Android).

### Logout Functionality

- **Farewell Screen**: A dedicated logout screen with a goodbye pressable icon and a modal to confirm or cancel the logout process.

## Technical Details

### Architecture

- **Framework**: Built with React Native for a cross-platform mobile experience.
- **State Management**: Redux Toolkit for predictable state management with a central store.

### Networking

- **HTTP Client**: Axios for promise-based HTTP requests to consume the backend API.
- **API Interaction**: Protected routes accessed via bearer tokens, with refresh tokens used to maintain session validity.

### UI Components

- **Atomic Design**: Components structured based on the principles of atomic design—atoms, molecules, and organisms.
- **Custom Components**: Tailor-made components such as `CustomActivityIndicator` and `GradientText` for enhanced UI.

### Navigation

- **Bottom Tabs**: React Navigation for fluid movement between different sections of the app.
- **Platform-Specific Icons**: Icons dynamically change based on the OS, optimizing the user interface.

### Error Handling

- **Graceful Degradation**: User-friendly error messages and fallbacks in place to manage API failures or network issues.
- **Token Refresh Mechanism**: Automated detection and handling of expired tokens to reduce authentication errors.

## Getting Started

To get started with the Recipe Social Media App:

1. Clone the repository to your local machine: <https://github.com/rifaiiaya2/react-native-final-newsApp>
2. Install dependencies with `npm install`.
3. Start the app with `npx react-native run-android` or `npx react-native run-ios` depending on your target platform.
