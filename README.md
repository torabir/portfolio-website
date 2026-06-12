# Portfolio Website

This is my personal portfolio website, built to present who I am, what I work with, and the projects, technologies, and experiences that shape my professional profile.

The site works as an interactive portfolio/CV, combining web development, infrastructure, cybersecurity, project experience, and personal interests in one place.

## Live Website

[torarnebirkeland.no](https://www.torarnebirkeland.no)

## About the Project

The portfolio showcases my background as a Digital Infrastructure and Cybersecurity student, with a focus on web development, cloud platforms, infrastructure, risk analysis, and practical system security.

It includes sections for:

- Introduction and personal profile
- Selected projects
- Technical skills
- Education and work experience
- Contact form
- Downloadable CV
- Light and dark mode
- Responsive design for desktop and mobile

The goal of the website is to present both technical competence and personal background in a clean, structured, and accessible way.

## Built With

This project is built with a modern React/Next.js stack:

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- React Email
- Resend
- Vercel

## Key Features

- Responsive single-page portfolio layout
- Smooth section-based navigation
- Animated UI elements with Framer Motion
- Light and dark mode support
- Contact form using React Email and Resend
- Project and experience sections
- Skills overview
- CV download
- SEO-friendly structure
- Deployed with Vercel

## Project Structure

```bash
.
├── app/                # Next.js app directory
├── components/         # Reusable UI components
├── context/            # Context providers
├── email/              # React Email template
├── lib/                # Utility functions and data
├── public/             # Static assets
├── actions/            # Server actions
└── README.md
```

## Getting Started

To run the project locally:

```bash
git clone git@github.com:torabir/portfolio-website.git
cd portfolio-website
npm install
npm run dev
```

Then open:

```bash
http://localhost:3000
```

## Environment Variables

The contact form uses Resend for email delivery.

Create a `.env.local` file in the root directory:

```env
RESEND_API_KEY=your_resend_api_key
```

You may also need to update the recipient email address inside the email/server action file depending on your setup.

## Deployment

The site is deployed with Vercel.

Typical deployment flow:

```bash
git add .
git commit -m "Update portfolio"
git push
```

Vercel automatically builds and deploys the latest version from the connected GitHub repository.

## Purpose

This portfolio is both a technical project and a personal presentation. It is meant to show how I approach web development, structure, design, communication, and professional identity.

It also reflects the combination of areas I am currently interested in:

- Web development
- Digital infrastructure
- Cloud platforms
- Cybersecurity
- Risk analysis
- Project coordination
- Real-world technical problem solving

## Author

**Tor Arne Birkeland**

Digital Infrastructure and Cybersecurity student at NTNU Trondheim.

- Website: [torarnebirkeland.no](https://www.torarnebirkeland.no)
- GitHub: [github.com/torabir](https://github.com/torabir)
- LinkedIn: [linkedin.com/in/tor-arne-birkeland](https://www.linkedin.com/in/tor-arne-birkeland/)
