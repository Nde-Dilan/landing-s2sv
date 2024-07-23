import * as React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import {
  Container,
  Box,
  Stack,
  HStack,
  ButtonGroup,
  Button,
  Icon,
  Heading,
  Text,
  Wrap,
  Tag,
  useClipboard,
  IconButton,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { SEO } from "components/seo/seo";

import { FallInPlace } from "components/motion/fall-in-place";
import { Hero } from "components/hero";
import { Link, Br } from "@saas-ui/react";
import { Em } from "components/typography";
import { NextjsLogo } from "components/logos";
import {
  FiActivity,
  FiAlertCircle,
  FiArrowRight,
  FiBatteryCharging,
  FiBook,
  FiBox,
  FiCamera,
  FiCheck,
  FiCode,
  FiCopy,
  FiCpu,
  FiFlag,
  FiGlobe,
  FiGrid,
  FiHeart,
  FiLock,
  FiMessageCircle,
  FiSearch,
  FiSliders,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUser,
  FiUserPlus,
  FiUsers,
} from "react-icons/fi";
import { Features } from "components/features";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { Faq } from "components/faq";
import { Pricing } from "components/pricing/pricing";

import { ButtonLink } from "components/button-link/button-link";
import { Testimonial, Testimonials } from "components/testimonials";

import faq from "data/faq";
import testimonials from "data/testimonials";
import pricing from "data/pricing";

import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from "components/highlights";

const Home: NextPage = () => {
  return (
    <Box>
      <SEO
        title="CarePulse, Your AI health Ally"
        description="A healthcare patient management System designed to streamline patient registration, appointment scheduling, and medical records management for healthcare providers."
      />
      <Box>
        <HeroSection />

        {/* <HighlightsSection /> */}
          <hr />
          <Br/>
          <FallInPlace>
            <Heading
            lineHeight="short"
            fontSize={["2xl", null, "4xl"]}
            textAlign="center"
            as="p"
                    >
            A list of services
            <Br /> Right in your <b>pocket</b>!
                    </Heading>
          </FallInPlace>
        <FeaturesSection />

        <TestimonialsSection />

        <PricingSection />

        <FaqSection />
      </Box>
    </Box>
  );
};

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack direction={{ base: "column", lg: "row" }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                Rooted in tradition,
                <Br/> powered by innovation!
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                This is <Em>Your AI health ally!</Em>
                <Br /> that doesn&apos;t get in your way and helps you <Br />{" "}
                quickly and intuitivly with your health issues.
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <HStack pt="4" pb="12" spacing="8">
                <NextjsLogo height="38px" /> 
              </HStack>

              <ButtonGroup spacing={4} alignItems="center" >
                <ButtonLink variant="outline" className="shad-primary-btn" size="lg" href="/signup">
                  Get Started
                </ButtonLink>
                <ButtonLink
                  size="lg"
                  variant="outline" className="shad-primary-btn"
                  href="https://demo.saas-ui.dev"
                  rightIcon={
                    <Icon
                      as={FiArrowRight}
                      sx={{
                        transitionProperty: "common",
                        transitionDuration: "normal",
                        ".chakra-button:hover &": {
                          transform: "translate(5px)",
                        },
                      }}
                    />
                  }
                >
                  Contact
                </ButtonLink>
              </ButtonGroup>
            </FallInPlace>
          </Hero>
          <Box
            height="600px"
            position="absolute"
            display={{ base: "none", lg: "block" }}
            left={{ lg: "60%", xl: "48%" }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="100%">
                <Image
                  src="/static/screenshots/list-1.png"
                  layout="fixed"
                  width={1200}
                  height={762}
                  alt="Screenshot of a Dashboard admin in CarePulse"
                  quality="75"
                  priority
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>

      <Features
        id="benefits"
        columns={[1, 2, 4]}
        iconSize={4}
        innerWidth="container.xl"
        pt="20"
        features={[
          {
            title: "AI-Powered Diagnostics",
            icon: FiBatteryCharging,
            description: "Cutting-edge AI technology for accurate and quick health assessments.",
            iconPosition: "left",
            delay: 0.6,
          },
          {
            title: "Traditional Wisdom Integration",
            icon: FiHeart,
            description: "Combines modern medicine with time-tested traditional health practices.",
            iconPosition: "left",
            delay: 0.8,
          },
          {
            title: "Personalized Care Plans",
            icon: FiUser,
            description: "Tailored health recommendations based on individual health profiles and needs.",
            iconPosition: "left",
            delay: 1,
          },
          {
            title: "Accessible Healthcare",
            icon: FiGlobe,
            description: "Bringing quality healthcare to your fingertips, anytime, anywhere.",
            iconPosition: "left",
            delay: 1.1,
          },
          {
            title: "Continuous Learning",
            icon: FiTrendingUp,
            description: "Our AI constantly evolves, learning from new medical research and user interactions.",
            iconPosition: "left",
            delay: 1.2,
          }
        ]}
        reveal={FallInPlace}
      />
    </Box>
  );
};

const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard("yarn add @saas-ui/react");

  return (
    <Highlights>
      <HighlightsItem colSpan={[1, null, 2]} title="Core components">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
            Get started for free with <Em>30+ open source components</Em>.
            Including authentication screens with Clerk, Supabase and Magic.
            Fully functional forms with React Hook Form. Data tables with React
            Table.
          </Text>

          <Flex
            rounded="full"
            borderWidth="1px"
            flexDirection="row"
            alignItems="center"
            py="1"
            ps="8"
            pe="2"
            bg="primary.900"
            _dark={{ bg: "gray.900" }}
          >
            <Box>
              <Text color="yellow.400" display="inline">
                yarn add
              </Text>{" "}
              <Text color="cyan.300" display="inline">
                @saas-ui/react
              </Text>
            </Box>
            <IconButton
              icon={hasCopied ? <FiCheck /> : <FiCopy />}
              aria-label="Copy install command"
              onClick={onCopy}
              variant="ghost"
              ms="4"
              isRound
              color="white"
            />
          </Flex>
        </VStack>
      </HighlightsItem>
      <HighlightsItem title="Solid foundations">
        <Text color="muted" fontSize="lg">
          We don&apos;t like to re-invent the wheel, neither should you. We
          selected the most productive and established tools in the scene and
          build Saas UI on top of it.
        </Text>
      </HighlightsItem>
      <HighlightsTestimonialItem
        name="Renata Alink"
        description="Founder"
        avatar="/static/images/avatar.jpg"
        gradient={["pink.200", "purple.500"]}
      >
        “Saas UI helped us set up a beautiful modern UI in no time. It saved us
        hundreds of hours in development time and allowed us to focus on
        business logic for our specific use-case from the start.”
      </HighlightsTestimonialItem>
      <HighlightsItem
        colSpan={[1, null, 2]}
        title="Start your next idea two steps ahead"
      >
        <Text color="muted" fontSize="lg">
          We took care of all your basic frontend needs, so you can start
          building functionality that makes your product unique.
        </Text>
        <Wrap mt="8">
          {[
            "authentication",
            "navigation",
            "crud",
            "settings",
            "multi-tenancy",
            "layouts",
            "billing",
            "a11y testing",
            "server-side rendering",
            "documentation",
            "onboarding",
            "storybooks",
            "theming",
            "upselling",
            "unit testing",
            "feature flags",
            "responsiveness",
          ].map((value) => (
            <Tag
              key={value}
              variant="subtle"
              colorScheme="purple"
              rounded="full"
              px="3"
            >
              {value}
            </Tag>
          ))}
        </Wrap>
      </HighlightsItem>
    </Highlights>
  );
};

const FeaturesSection = () => {
  return (
    <FallInPlace>
    <Features
      id="features"
      title={
        <Heading
          lineHeight="short"
          fontSize={["2xl", null, "4xl"]}
          textAlign="left"
          as="p"
        >
          Not your standard
          <Br /> healthcare service.
        </Heading>
      }
      description={
        <>
          Our AI-Powered Traditional Medicine Advisor combines ancestral wisdom with cutting-edge technology.
          <Br />
          Experience healthcare that's rooted in your culture and powered by innovation.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
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
          title: "Cultural Preservation",
          icon: FiBook,
          className: "icon-badge",
          description:
            "Contribute to the preservation of traditional medical knowledge while benefiting from centuries of wisdom.",
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
        {
          title: "Healer Network",
          icon: FiUsers,
          className: "icon-badge",
          description:
            "Connect with verified local traditional healers for in-depth consultations and personalized treatment plans.",
          variant: "inline",
        },
        {
          title: "Health Tracking",
          icon: FiActivity,
          className: "icon-badge",
          description:
            "Monitor your health progress and get insights on the effectiveness of traditional remedies for your conditions.",
          variant: "inline",
        },
        {
          title: "Multilingual Support",
          icon: FiGlobe,
          className: "icon-badge",
          description:
            "Access the app in multiple languages including French, English, and major local Cameroonian languages.",
          variant: "inline",
        },
        {
          title: "Emergency Guidance",
          icon: FiAlertCircle,
          className: "icon-badge",
          description:
            "Receive clear instructions on when to seek immediate professional medical help, bridging traditional and modern healthcare.",
          variant: "inline",
        },
        {
          title: "Community Wisdom",
          icon: FiMessageCircle,
          className: "icon-badge",
          description: (
            <>
              Engage with a community of users and experts, sharing experiences and knowledge about traditional remedies and practices.
            </>
          ),
          variant: "inline",
        },
      ]}
    />
  </FallInPlace>
  );
};

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t);

        return columns;
      },
      [[], [], []]
    );
  }, []);

  return (
    <Testimonials
      title={testimonials.title}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  );
};

const PricingSection = () => {
  return (
    <Pricing {...pricing}>
      <Text p="8" textAlign="center" color="muted">
        * VAT may be applicable depending on your location.
      </Text>
    </Pricing>
  );
};

const FaqSection = () => {
  return <Faq {...faq} />;
};

export default Home;

export async function getStaticProps() {
  return {
    props: {
      announcement: {
        title: "✨ First version comming out very soon 🚀 ",
        description:
          '  ',
        href: "#",
        action: false,
      },
    },
  };
}
