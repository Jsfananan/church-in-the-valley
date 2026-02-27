import type { NavLink, ServiceTime, MinistryCard, ChurchEvent, LeadershipMember } from "./types";

export const SITE_NAME = "The Church In The Valley";
export const SITE_TAGLINE = "Where Every Soul Belongs";
export const SITE_DESCRIPTION =
  "A welcoming church family in Milton, West Virginia with a large vision for the lost and a passion to help every believer achieve their God-given purpose.";

export const CONTACT = {
  phone: "304-743-4300",
  address: "1173 James River Turnpike",
  city: "Milton",
  state: "WV",
  zip: "25541",
  fullAddress: "1173 James River Turnpike, Milton, WV 25541",
  mapQuery: "1173+James+River+Turnpike+Milton+WV+25541",
  facebook: "https://www.facebook.com/churchinthevalley.info/",
  giving: "https://onrealm.org/ChurchintheValley/-/form/give/UTHXBTACNH?fundId=0864d98e-f7c1-465b-a7ab-a59c00fe5c38",
  vimeo: "https://vimeo.com/churchinthevalley",
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/events" },
  { label: "Our Pastor", href: "/our-pastor" },
  { label: "Past Services", href: "/past-services" },
  { label: "Ordinances", href: "/church-ordinances" },
  { label: "Salvation", href: "/salvation-plan" },
  { label: "Visit Us", href: "/visit" },
];

export const SERVICE_TIMES: ServiceTime[] = [
  { day: "Sunday", service: "Adult Sunday School", time: "10:10 AM" },
  { day: "Sunday", service: "Main Service", time: "11:00 AM" },
  { day: "Wednesday", service: "Youth Group & Adult Bible Study", time: "6:00 PM" },
];

export const MINISTRY_CARDS: MinistryCard[] = [
  {
    title: "Worship",
    description:
      "Experience the presence of God through Spirit-filled praise and worship every Sunday.",
    icon: "music",
    href: "/past-services",
  },
  {
    title: "Community",
    description:
      "We are a family. Find your place among people who will walk with you through life.",
    icon: "users",
    href: "/visit",
  },
  {
    title: "Purpose",
    description:
      "Discover and activate the God-given purpose inside you. We are here to help you grow.",
    icon: "compass",
    href: "/salvation-plan",
  },
];

export const MISSION_TEXT = {
  intro:
    "The Church In The Valley is a small church in Milton, West Virginia with a large vision for the lost and a passion to assist every believer to achieve their God-given purpose in life.",
  mission:
    "It is the mission of our church to lift the name of Jesus and praise Him. We invite everyone to visit and feel the love that only God's people can share.",
  belief:
    "The members of the Church In The Valley believe that we are the earthen vessels filled with God's Holy Spirit. We are His voice, hands, arms, and feet. We are honored to speak, touch, hold, and work for God with every talent we possess.",
  closing:
    "As you come to know the members of The Church In The Valley you will see people commissioned to serve God whenever, wherever, and for as long as necessary to tell people everywhere that a loving and living God is calling them to His eternal home.",
} as const;

export const PLACEHOLDER_EVENTS: ChurchEvent[] = [
  {
    title: "Sunday Main Service",
    date: "Every Sunday",
    time: "11:00 AM",
    description: "Join us for a time of praise, worship, and the preaching of God's Word.",
    location: "Main Sanctuary",
  },
  {
    title: "Adult Sunday School",
    date: "Every Sunday",
    time: "10:10 AM",
    description: "Study the Bible together in a welcoming small group setting.",
    location: "Fellowship Hall",
  },
  {
    title: "Wednesday Night",
    date: "Every Wednesday",
    time: "6:00 PM",
    description: "Youth Group and Adult Bible Study — something for the whole family.",
    location: "Main Sanctuary & Youth Room",
  },
];

export const PLACEHOLDER_LEADERS: LeadershipMember[] = [
  {
    name: "Troy Nicely",
    title: "Head Pastor",
    bio: "Pastor Troy leads our church family with a heart for God's Word and a deep passion for the Milton community.",
  },
  {
    name: "Deacon Board",
    title: "Deacons",
    bio: "Serving the church body and supporting the ministry of The Church In The Valley.",
  },
  {
    name: "Music Ministry",
    title: "Worship Team",
    bio: "Leading our congregation in Spirit-filled praise and worship every service.",
  },
];
