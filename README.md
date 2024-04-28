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
