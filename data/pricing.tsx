import { HStack, Text } from '@chakra-ui/react'
export default {
  title: 'Choose the plan that fits your needs',
  description: 'From individuals to families, we have a plan for everyone.',
  plans: [
    {
      id: 'free',
      title: 'Basic Care',
      description: 'Perfect for getting started with AI-powered health assistance.',
      price: 'Free',
      features: [
        {
          title: 'Limited AI health prompts',
        },
        {
          title: 'Up to 10 appointment bookings',
        },
        {
          title: '1 gift appointment booking monthly',
        },
        {
          title: 'Basic health insights',
        },
        {
          title: 'Ad-supported experience',
        },
      ],
      action: {
        href: '#',
        label: 'Get Started'
      },
    },
    {
      id: 'standard',
      title: 'Enhanced Care',
      description: 'Ideal for those seeking more comprehensive health support.',
      price: '€9.99/month',
      isRecommended: true,
      features: [
        {
          title: 'Increased AI health prompts',
        },
        {
          title: 'Unlimited appointment bookings',
        },
        {
          title: 'Ad-supported experience',
        },
        {
          title: 'Priority customer support',
        },
        {
          title: 'Extended health insights',
        },
        {
          title: 'Personalized health tips',
        },
      ],
      action: {
        href: '#',
        label: 'Choose Plan'
      },
    },
    {
      id: 'premium',
      title: 'Premium Care',
      description: 'Comprehensive health management for the health-conscious.',
      price: '€19.99/month',
      features: [
        {
          title: 'Unlimited AI health prompts',
        },
        {
          title: 'Unlimited appointment bookings',
        },
        {
          title: 'Ad-free experience',
        },
        {
          title: 'VIP customer support',
        },
        {
          title: 'Advanced health insights',
        },
        {
          title: 'AI analysis of medical documents',
        },
        {
          title: 'Personalized health & diet recommendations',
        },
        {
          title: 'Early access to new features',
        },
      ],
      action: {
        href: '#',
        label: 'Choose Plan'
      },
    },
    {
      id: 'family',
      title: 'Family Care',
      description: 'Comprehensive health management for the entire family.',
      price: 'Custom',
      features: [
        {
          title: 'All Premium Care features',
        },
        {
          title: 'Up to 6 family member profiles',
        },
        {
          title: 'Family health overview dashboard (comming soon)',
        },
        {
          title: 'Shared appointment calendar (comming soon)',
        },
        {
          title: 'Family health trend analysis (comming soon)',
        },
        {
          title: 'Personalized family health recommendations',
        },
        {
          title: 'Priority family support line',
        },
        {
          title: 'Annual family health report',
        },
      ],
      action: {
        href: 'https:wa.me/237694525931',
        label: 'Contact Us'
      },
    },
  ],
}