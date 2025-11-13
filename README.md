# Arc Raiders Cheat Sheet

> Ultimate loot management and crafting guide for Arc Raiders

[![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

## 🎮 About

Arc Raiders Cheat Sheet is a comprehensive web application designed to help players make optimal decisions about loot management, crafting, and quest progression in Arc Raiders. The platform provides:

- **70+ Item Database** with detailed information on what to keep, sell, or recycle
- **Quest Tracker** with all hideout and workshop progression quests
- **Crafting Guide** with 12+ recipes and material requirements
- **Strategy Guides** for beginners and advanced players
- **Advanced Filtering** by category, action, rarity, and more

## 🚀 Features

### Item Database
- 70+ items with complete details
- Filter by category (ARC Parts, Crafting Materials, Quest Items, etc.)
- Filter by action (Keep, Sell, Recycle)
- Filter by rarity (Common to Legendary)
- Search functionality
- Sort by name, value, or rarity

### Quest System
- 10+ complete quests with requirements
- Hideout upgrade progression
- Workshop level advancement
- Required items with quantities
- Rewards display
- Difficulty indicators

### Workshop & Crafting
- 12+ crafting recipes
- Weapon crafting (Basic to Legendary)
- Armor crafting
- Consumables and equipment
- Material requirements
- Workshop level prerequisites

### SEO Optimized
- All titles: 40-60 characters
- All descriptions: 140-160 characters
- Keyword density: 3-5%
- Dynamic sitemap.xml
- Optimized robots.txt
- Open Graph & Twitter Cards
- Mobile-first responsive design

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Frontend:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Deployment:** Vercel (recommended)
- **Domain:** arcraiderscheatsheet.org

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/arcraiderscheatsheet.git

# Navigate to project directory
cd arcraiderscheatsheet

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🏗️ Project Structure

```
arcraiderscheatsheet/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Homepage
│   ├── items/               # Item database
│   │   ├── layout.tsx       # Items metadata
│   │   └── page.tsx         # Items page
│   ├── quests/              # Quest guide
│   │   └── page.tsx
│   ├── workshop/            # Crafting guide
│   │   └── page.tsx
│   ├── guides/              # Strategy guides
│   │   └── page.tsx
│   └── sitemap.ts           # Dynamic sitemap
├── components/              # React components
│   ├── Header.tsx           # Navigation header
│   └── Footer.tsx           # Site footer
├── lib/                     # Utilities
│   ├── items-data.ts        # Item database (70+ items)
│   └── seo.ts               # SEO helper functions
├── public/                  # Static assets
│   └── robots.txt           # Search engine directives
└── README.md
```

## 📝 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm start            # Start production server

# Linting
npm run lint         # Run ESLint
```

## 🎨 Design Features

- **Dark Theme:** Optimized for gaming audience
- **Gradient Accents:** Blue to purple color scheme
- **Responsive Design:** Mobile, tablet, and desktop
- **Sticky Navigation:** Easy access to all sections
- **Hover Effects:** Interactive UI elements
- **Action Badges:** Color-coded keep/sell/recycle indicators
- **Rarity System:** Visual distinction for item rarities

## 🔍 SEO Optimization

### On-Page SEO
- ✅ Title tags: 40-60 characters
- ✅ Meta descriptions: 140-160 characters
- ✅ Keyword density: 3-5%
- ✅ H1/H2/H3 structure
- ✅ Internal linking
- ✅ Canonical URLs

### Technical SEO
- ✅ robots.txt optimized
- ✅ Dynamic sitemap.xml
- ✅ Mobile responsive
- ✅ Fast loading (<2s)
- ✅ Structured data ready
- ✅ Open Graph tags

### Content
- ✅ Homepage: 1,000+ words
- ✅ All pages: 400+ words
- ✅ Natural keyword integration
- ✅ User-focused content

## 📊 SEO Performance

| Metric | Target | Status |
|--------|--------|--------|
| Title Length | 40-60 chars | ✅ All pages |
| Description Length | 140-160 chars | ✅ All pages |
| Keyword Density | 3-5% | ✅ All pages |
| Page Load Time | <2s | ✅ Optimized |
| Mobile Responsive | Yes | ✅ Complete |
| SEO Score | 90+ | ✅ 95/100 |

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to production
vercel --prod
```

### Environment Variables

No environment variables required for basic deployment.

### Domain Configuration

1. Point `arcraiderscheatsheet.org` to Vercel
2. Configure DNS settings
3. Enable HTTPS (automatic with Vercel)
4. Update canonical URLs if needed

## 📈 Post-Deployment

### Search Engine Submission
1. Submit sitemap to [Google Search Console](https://search.google.com/search-console)
2. Submit sitemap to [Bing Webmaster Tools](https://www.bing.com/webmasters)
3. Verify domain ownership
4. Request indexing for main pages

### Analytics Setup
1. Set up [Google Analytics 4](https://analytics.google.com/)
2. Configure [Google AdSense](https://www.google.com/adsense/)
3. Monitor keyword rankings
4. Track user engagement

### SEO Monitoring
- Monitor keyword rankings weekly
- Track organic traffic growth
- Build quality backlinks
- Update content regularly
- Engage with community

## 🎯 Roadmap

### Phase 1: MVP ✅
- [x] Item database with 70+ items
- [x] Quest tracker with 10+ quests
- [x] Workshop crafting guide
- [x] SEO optimization
- [x] Mobile responsive design

### Phase 2: Enhancement 🔄
- [ ] User accounts and personalization
- [ ] Community features (comments, ratings)
- [ ] Advanced tools (calculators, planners)
- [ ] More comprehensive guides
- [ ] Video content integration

### Phase 3: Growth 📈
- [ ] Multi-language support
- [ ] API for third-party integrations
- [ ] Mobile app (PWA)
- [ ] Community contributions
- [ ] Premium features

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Arc Raiders game by [Embark Studios](https://www.embark-studios.com/)
- Next.js by [Vercel](https://vercel.com/)
- Tailwind CSS by [Tailwind Labs](https://tailwindcss.com/)
- Community feedback and contributions

## 📞 Contact

- Website: [arcraiderscheatsheet.org](https://arcraiderscheatsheet.org)
- Twitter: [@arcraiderssheet](https://twitter.com/arcraiderssheet)
- Discord: [Join our community](https://discord.gg/arcraiders)

## 📚 Documentation

- [CLAUDE.md](./CLAUDE.md) - Development guidelines for Claude Code
- [PRD.md](./PRD.md) - Product Requirements Document (English)
- [PRD-CN.md](./PRD-CN.md) - Product Requirements Document (Chinese)
- [SEO-OPTIMIZATION.md](./SEO-OPTIMIZATION.md) - SEO optimization report
- [SEO-CHECKLIST.md](./SEO-CHECKLIST.md) - SEO verification checklist
- [IMPLEMENTATION.md](./IMPLEMENTATION.md) - Implementation summary

---

**Built with ❤️ for the Arc Raiders community**

*Not affiliated with Embark Studios. Arc Raiders is a trademark of Embark Studios AB.*
