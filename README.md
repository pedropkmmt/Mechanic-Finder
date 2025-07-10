# Mechanic Finder 🔧

A modern web application that helps drivers find trusted mechanics across South Africa. Built with React and powered by real-time location services.

## Features

- **🗺️ Interactive Map**: Browse mechanics on an interactive map powered by Leaflet
- **📍 Location-Based Search**: Find mechanics near your current location
- **🔍 Advanced Filtering**: Filter by services, ratings, distance, and availability
- **⭐ Reviews & Ratings**: Read and leave reviews for mechanics
- **📱 Mobile-Friendly**: Responsive design that works on all devices
- **🚗 Service Categories**: Find specialists for different vehicle types and services
- **📞 Contact Information**: Get phone numbers, addresses, and operating hours
- **🛣️ Route Planning**: Get directions to your chosen mechanic

## Tech Stack

- **Frontend**: React 19 with Vite
- **Styling**: Tailwind CSS 4
- **Maps**: Leaflet & React-Leaflet
- **Data Management**: Local state management
- **Routing**: React Router DOM
- **Icons**: Lucide React & React Icons
- **Build Tool**: Vite

## Prerequisites

Before running this application, make sure you have:

- Node.js (version 18 or higher)
- npm or yarn package manager

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/mechanic-finder.git
   cd mechanic-finder
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Data Management

This app uses local state management and static data. For production use, you may want to integrate with a backend service or database to store:

- Mechanic information (name, location, services, contact details)
- User reviews and ratings
- Service availability and scheduling
- User preferences and favorites

## Sample Data Structure

The app expects mechanic data in the following format:

```javascript
{
  id: "unique-id",
  name: "Mechanic Name",
  address: "123 Main Street, City, Province",
  latitude: -26.2041,
  longitude: 28.0473,
  phone: "+27 11 123 4567",
  email: "contact@mechanic.co.za",
  website: "https://mechanic.co.za",
  rating: 4.5,
  reviewCount: 23,
  services: ["General Repairs", "Brake Service", "Oil Change"],
  operatingHours: {
    monday: "08:00-17:00",
    tuesday: "08:00-17:00",
    // ... other days
  },
  images: ["image1.jpg", "image2.jpg"],
  verified: true
}
```

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Development Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation as needed

## Deployment

### Production Build
```bash
npm run build
```

### Deploy to Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

### Deploy to Vercel
1. Connect your GitHub repository to Vercel
2. Deploy automatically on push to main branch

## Configuration

Currently, the app runs without external configuration. For future enhancements, you may want to add environment variables for:

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_MAPS_API_KEY` | Google Maps API key (if switching from Leaflet) | Optional |
| `VITE_API_BASE_URL` | Backend API URL | Optional |

## Features Roadmap

- [ ] User authentication and profiles
- [ ] Appointment booking system
- [ ] Real-time mechanic availability
- [ ] Push notifications
- [ ] Mobile app (React Native)
- [ ] Payment integration
- [ ] Multi-language support (Afrikaans, Zulu, Xhosa)
- [ ] Emergency roadside assistance
- [ ] Mechanic verification system

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Built By
Pedro Muttenda
 Nombuso Simelane
---

**Made with ❤️ in South Africa**