# Charger Digital Twin UI

A pixel-perfect EV charger monitoring interface built with React, Vite, and Tailwind CSS.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build


```

Development server runs at: `http://localhost:5173`

## 📁 Project Structure

```
my-app/
├── src/
│   ├── assets/              # Icons and images from Figma
│   │   └── icons/          # All SVG/PNG icons
│   ├── components/          # React components (12 total)
│   │   ├── Breadcrumb.jsx
│   │   ├── DiagnosticPanel.jsx
│   │   ├── DoorStatusPanel.jsx
│   │   ├── EmergencyStopPanel.jsx
│   │   ├── GunStatusPanel.jsx
│   │   ├── Header.jsx
│   │   ├── MCBPanel.jsx
│   │   ├── NavTabs.jsx
│   │   ├── NotificationsPanel.jsx
│   │   ├── OverviewPanel.jsx
│   │   ├── SideNavbar.jsx
│   │   └── TemperaturePanel.jsx
│   ├── hooks/               # Custom React hooks
│   │   ├── useChargerStatus.js
│   │   ├── useDiagnostics.js
│   │   └── useNotifications.js
│   ├── pages/
│   │   └── ChargerDigitalTwin.jsx
│   ├── App.css
│   └── index.js             # Entry point (imports ChargerDigitalTwin directly)
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## ✨ Features

### Left Panel - Charger Overview
- Charger specifications (Model, Serial, Power)
- Installation details and location
- Real-time status indicator (Online/Offline)
- Weather display

### Middle Panel - Real-Time Monitoring
- **Diagnostics**: Scan and test functionality
- **Door Status**: Front, Left, Right door monitoring
- **MCB Panel**: 3-phase power visualization (L1, L2, L3)
- **Emergency Stop**: E-stop button status
- **Temperature**: External, charger, and gun temperatures
- **Gun Status**: Charging gun states (Armed/Charging)

### Right Panel - Live Notifications
- Real-time alert feed
- Critical warnings and info messages
- Auto-refresh every 10 seconds

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **JavaScript (ES6+)** - No TypeScript

## 🎨 Key Design Elements

- **Icons**: All extracted from Figma (no external libraries)
- **Theme**: Dark mode with lime green accents
- **Layout**: 3-panel grid (3-6-3 columns)
- **Responsive**: Mobile and tablet optimized

## 🔌 Custom Hooks

### useChargerStatus()
Fetches charger data (status, power, connectivity). Auto-refreshes every 30s.

### useDiagnostics()
Manages diagnostic scan operations.

### useNotifications()
Fetches live notifications. Auto-refreshes every 10s.

## 📝 Mock API Endpoints

```javascript
GET  /api/charger/:id/status        // Charger data
POST /api/charger/:id/diagnose      // Run diagnostics
GET  /api/charger/:id/notifications // Get alerts
```

## 🎯 Entry Point

The app starts at `src/index.js` which directly imports and renders `ChargerDigitalTwin.jsx` (no App.jsx).

## 🚢 Deployment

```bash
npm run build


## 📖 Documentation

- **Figma Design**: [View Design](https://www.figma.com/design/F6yKhTlL9Cb4uk1NK0UkA0/Zynetic-Digital-Twin)
- All components are modular and reusable
- Icons located in `src/assets/icons/`
- Tailwind config in `tailwind.config.js`

---

**Built with Vite + React + Tailwind CSS**