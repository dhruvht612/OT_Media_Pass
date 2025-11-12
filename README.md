# OT Media Pass

Official multi-page website for the Ontario Tech Media Pass - A student-run media organization providing professional photography, videography, and graphic design services to the Ontario Tech University community.

## 🌟 Features

- **Multi-Page Architecture**: Organized content across 6 dedicated pages
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Dark Theme**: Modern dark design with purple accents (#8b5cf6)
- **Interactive Navigation**: Mobile-friendly hamburger menu with smooth transitions
- **Working Contact Form**: Client-side validation with user feedback
- **Gallery Lightbox**: Click to expand gallery images
- **Smooth Animations**: Fade-in effects and hover transitions throughout

## 📄 Pages

1. **Home** (`index.html`) - Hero section with call-to-action and service overview
2. **About** (`about.html`) - Detailed services, mission statement, and benefits
3. **Team** (`team.html`) - Executive team profiles with 6 members
4. **Events** (`events.html`) - Upcoming campus events with 6 scheduled activities
5. **Gallery** (`gallery.html`) - Portfolio showcase with 8 project images
6. **Contact** (`contact.html`) - Contact form and FAQ section

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for development)

### Running Locally

1. Clone the repository:
```bash
git clone https://github.com/dhruvht612/OT_Media_Pass.git
cd OT_Media_Pass
```

2. Open with a local server (recommended):
```bash
# Using Python 3
python3 -m http.server 8080

# Using Node.js (if you have http-server installed)
npx http-server -p 8080

# Using PHP
php -S localhost:8080
```

3. Open your browser and navigate to:
```
http://localhost:8080
```

Alternatively, you can simply open `index.html` directly in your browser.

## 📁 Project Structure

```
OT_Media_Pass/
├── index.html          # Home page
├── about.html          # About page
├── team.html           # Team page
├── events.html         # Events page
├── gallery.html        # Gallery page
├── contact.html        # Contact page
├── css/
│   └── styles.css      # Main stylesheet
├── js/
│   └── script.js       # JavaScript functionality
├── images/
│   ├── hero-bg.jpg     # Hero background image
│   ├── team/           # Team member photos
│   │   └── member*.jpg
│   └── gallery/        # Gallery project images
│       └── project*.jpg
└── README.md
```

## 🎨 Design System

### Colors
- **Primary Purple**: `#8b5cf6`
- **Secondary Purple**: `#a78bfa`
- **Dark Background**: `#0f0f1e`
- **Darker Background**: `#0a0a14`
- **Card Background**: `#1a1a2e`
- **Text Primary**: `#ffffff`
- **Text Secondary**: `#b8b8d1`

### Typography
- **Font Family**: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
- **Hero Title**: 3.5rem (responsive)
- **Section Titles**: 2.5rem
- **Body Text**: 1rem with 1.6 line-height

## 💻 Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Custom properties, Grid, Flexbox, animations
- **JavaScript (ES6+)**: DOM manipulation, form validation, event handling
- **SVG**: Placeholder images (can be replaced with actual photos)

## 🔧 Customization

### Updating Content

1. **Team Members**: Edit `team.html` and update the team member information
2. **Events**: Modify `events.html` to add/remove upcoming events
3. **Services**: Update service cards in `about.html`
4. **Contact Info**: Change contact details in the footer section (present in all pages)

### Changing Colors

Edit the CSS variables in `css/styles.css`:
```css
:root {
    --primary-color: #8b5cf6;      /* Change primary purple */
    --secondary-color: #a78bfa;     /* Change secondary purple */
    --dark-bg: #0f0f1e;            /* Change main background */
    /* ... other colors */
}
```

### Adding Images

Replace the SVG placeholder images in:
- `images/hero-bg.jpg` - Hero background
- `images/team/member*.jpg` - Team photos (400x400px recommended)
- `images/gallery/project*.jpg` - Gallery images (600x600px recommended)

## 📱 Responsive Breakpoints

- **Desktop**: > 768px
- **Tablet/Mobile**: ≤ 768px
- **Small Mobile**: ≤ 480px

## ✨ JavaScript Features

- Mobile menu toggle with hamburger animation
- Active navigation link highlighting
- Smooth scrolling for anchor links
- Contact form validation and submission handling
- Gallery lightbox functionality
- Fade-in animations on scroll
- Dynamic navbar shadow on scroll

## 🔒 Security

The website has been analyzed with CodeQL and contains no security vulnerabilities. The contact form includes:
- Client-side input validation
- Email format validation
- XSS prevention through proper handling of user input

## 🤝 Contributing

This is a student project for Ontario Tech University. If you'd like to contribute:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

Copyright © 2025 Ontario Tech Media Pass. All rights reserved.

## 📧 Contact

- **Email**: info@otmediapass.ca
- **Phone**: (905) 721-8668
- **Location**: Ontario Tech University, Oshawa, ON

---

Built with ❤️ by the Ontario Tech Media Pass Team
