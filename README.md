# Freedombook9 Landing Page

A professional landing page for the Freedombook9 iGaming brand.

## Features

- Modern, responsive design
- WhatsApp CTA integration
- Register button functionality
- Animated gaming cards
- Mobile-optimized layout
- Professional color scheme with gradient effects

## Setup

1. Simply open `index.html` in your web browser
2. For WhatsApp functionality, update the phone number in the JavaScript section
3. For registration functionality, update the registration URL in the JavaScript section

## Files

- `index.html` - Main landing page
- `styles.css` - Complete styling and responsive design
- `README.md` - This file

## Customization

To customize for your needs:

### **Quick Setup - Update URLs**
1. **Edit Configuration**: Open `index.html` and update the `CONFIG` object (lines 163-172):
   ```javascript
   const CONFIG = {
       whatsappNumber: '919876543210', // Your WhatsApp number with country code
       registerUrl: 'https://your-site.com/register',
       loginUrl: 'https://your-site.com/login',
       supportUrl: 'https://your-site.com/support',
       gamesUrl: 'https://your-site.com/games',
       promotionsUrl: 'https://your-site.com/promotions',
       liveChatUrl: 'https://your-site.com/chat',
       faqUrl: 'https://your-site.com/faq'
   };
   ```

### **Button Functionality**
- **WhatsApp Buttons**: Opens WhatsApp with pre-filled message
- **Register Buttons**: Redirects to registration page
- **Login Button**: Redirects to login page
- **Footer Links**: All footer links redirect to respective pages

### **Additional Customization**
1. **Colors**: Modify the CSS variables in `styles.css` to match your brand colors
2. **Content**: Update text content in `index.html` to match your specific offerings
3. **Images**: Replace placeholder content with your actual images

## Browser Compatibility

Works on all modern browsers including Chrome, Firefox, Safari, and Edge.
