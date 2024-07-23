import { Button } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { NextSeoProps } from 'next-seo'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'
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
        icon: FiCheck,
        title: 'Accessible',
        description: 'All components strictly follow WAI-ARIA standards.',
      },
      {
        icon: FiCheck,
        title: 'Themable',
        description:
          'Fully customize all components to your brand with theme support and style props.',
      },
      {
        icon: FiCheck,
        title: 'Composable',
        description:
          'Compose components to fit your needs and mix them together to create new ones.',
      },
      {
        icon: FiCheck,
        title: 'Productive',
        description:
          'Designed to reduce boilerplate and fully typed, build your product at speed.',
      },
    ],
  },
}

export default siteConfig
