import { Button } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { NextSeoProps } from 'next-seo'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import { FiActivity, FiAlertCircle, FiBook, FiCamera, FiCheck, FiCpu, FiGlobe, FiMessageCircle, FiUser, FiUsers } from 'react-icons/fi'
import { Logo } from './logo'

const siteConfig = {
  logo: Logo,
  seo: {
    title: 'CarePulse: Rooted in tradition, powered by innovation: Your AI health ally',
    description: 'A healthcare patient management System designed to streamline patient registration, appointment scheduling, and medical records management for healthcare providers.',
  } as NextSeoProps,
  termsUrl: '#',
  privacyUrl: '#',
  header: {
    links: [
      {
        id: 'home',
        label: 'Home',
      },
      {
        id: 'about',
        label: 'About',
      },
      {
        id: 'pricing',
        label: 'Pricing',
      },
      {
        id: 'faq',
        label: 'FAQ',
      },
      {
        label: 'Contact',
        href: 'mailto:ndedilan504@gmail.com',
      },
      {
        label: 'Get Started',
        href: '/signup',
        className: 'shad-primary-btn',
      },
    ],
  },
  footer: {
    copyright: (
      <>
        Built by{' '}
        <Link href="https://textwithdilan.tech/">Nde Dilan</Link>
      </>
    ),
    links: [
      {
        href: 'mailto:ndedilan504@gmail.com',
        label: 'Contact',
      },
      {
        href: 'https://twitter.com/nde_dilan_',
        label: <FaTwitter size="14" />,
      },
      {
        href: 'https://github.com/Nde-Dilan',
        label: <FaGithub size="14" />,
      },
    ],
  },
  signup: {
    title: 'Start building with Saas UI',
    features: [
      {
        title: "AI-Powered Advice",
        icon: FiCpu,
        className: "icon-badge",
        description:
          "Get instant, culturally relevant health advice based on traditional Cameroonian remedies, available 24/7.",
        variant: "inline",
      },
      {
        title: "Plant Recognition",
        icon: FiCamera,
        className: "icon-badge",
        description:
          "Use our advanced image recognition to identify medicinal plants accurately, ensuring safe and effective use of natural remedies.",
        variant: "inline",
      },
      {
        title: "Personalized Care",
        icon: FiUser,
        className: "icon-badge",
        description:
          "Receive advice tailored to your specific symptoms, medical history, and local environmental factors.",
        variant: "inline",
      },
    ],
  },
}

export default siteConfig
