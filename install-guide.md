# Installation Guide for Freedombook9 Landing Page

## Required Software Installation

### 1. Node.js (Required for development server)

**Option A: Download from Official Website**
1. Go to https://nodejs.org/
2. Download the LTS version (recommended)
3. Run the installer and follow the setup wizard
4. Restart your command prompt/PowerShell after installation

**Option B: Using Windows Package Manager (if available)**
```powershell
winget install OpenJS.NodeJS
```

### 2. Verify Installation
After installing Node.js, verify it's working:
```powershell
node --version
npm --version
```

### 3. Install Development Dependencies
Once Node.js is installed, run these commands in your project directory:
```powershell
cd C:\Users\hp\CascadeProjects\freedombook9-landing
npm install
```

### 4. Start Development Server
```powershell
npm start
```
This will open your landing page at http://localhost:8080

## Alternative: Simple File Opening
If you don't want to install Node.js right now, you can:
1. Navigate to `C:\Users\hp\CascadeProjects\freedombook9-landing\`
2. Double-click `index.html` to open in your default browser
3. The page will work, but without live reload functionality

## Development Commands
- `npm start` - Start development server with live reload
- `npm run dev` - Same as start (alias)

## Browser Compatibility
- Chrome (recommended)
- Firefox
- Safari
- Edge

## Next Steps After Installation
1. Update WhatsApp number in `index.html` (line 142)
2. Update registration URL in `index.html` (line 148)
3. Customize colors and content as needed
