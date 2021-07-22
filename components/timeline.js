import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import { CustomIcon } from "@/chakra/icons/custom-icon";
import { ChNextLink } from "@/components/next-link";

export function Timeline() {
  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };

  return (
    <div>
      <Heading
        as='h1'
        className='title'
        color='light'
        textShadow='2px 1px 2px gray1'
      >
        History
      </Heading>
      <VerticalTimeline layout='2-columns'>
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              key={element.key || element.id}
              date={element.date}
              dateClassName='date'
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <CustomIcon /> : <CustomIcon />}
            >
              <Heading
                as='h3'
                className='vertical-timeline-element-title'
                fontSize='2xl'
                color='bg1'
              >
                {element.title}
              </Heading>
              <Heading
                as='h5'
                className='vertical-timeline-element-subtitle'
                fontSize='lg'
                py={2}
              >
                {element.location}
              </Heading>
              <Text id='description' color='bg2'>
                {element.description}
              </Text>
              {showButton && (
                <ChNextLink
                  className={`button ${
                    isWorkIcon ? "workButton" : "schoolButton"
                  }`}
                  href='/'
                >
                  {element.buttonText}
                </ChNextLink>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export const timelineElements = [
  {
    id: 1,
    title: "G. Shah Development",
    location: "Clifton, N.J.",
    description:
      "Integrated web, media, and advertising solutions for SMBs and Startups.",
    date: "March 2016 - present",
    icon: "work",
  },
  {
    id: 2,
    title: "Udacity",
    location: "Full Stack Developer - Nanodegree",
    description:
      "SQL and Data Modeling, API Development and Documentation, Identity Access Management, Server Deployment and Containerization",
    date: "Feburary 2020 - April 2020",
    icon: "school",
  },
  {
    id: 3,
    title: "MGMT, Int'l",
    location: "Brooklyn, N.Y.",
    description:
      "Talent management, booking, and placement services for artists and venues across several genres of the NYC Electronic Dance Music Scene.",
    date: "March 2015 - Jan 2019",
    icon: "work",
  },
  {
    id: 4,
    title: "Modus Relations",
    location: "E. Rutherfod, N.J.",
    description:
      "Web, media and advertising solutions for local businesses, municipalities, and non-profit organizations.",
    date: "September 2011 - June 2013",
    icon: "work",
  },
];
