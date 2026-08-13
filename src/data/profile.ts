export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ProfileData {
  name: string;
  title: string;
  avatar: string;
  cvUrl: string;
  email: string;
  phone: string;
  location: string;
  university: string;
  major: string;
  gpa: string;
  gradYear: string;
  domain: string;
  socials: SocialLink[];
}

export const profileData: ProfileData = {
  name: "Nguyễn Minh Long",
  title: "Software Developer",
  avatar: "/avatar.png",
  cvUrl: "/CV_Nguyen_Minh_Long.pdf",
  email: "nguyenminhlongcntt@gmail.com",
  phone: "0377241808",
  location: "Thu Duc City, Ho Chi Minh City",
  university: "Ho Chi Minh City University of Technology (HUTECH)",
  major: "Software Engineering (CNTT)",
  gpa: "3.53 / 4.00",
  gradYear: "10/2026",
  domain: "minhlongdev.id.vn",
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/KLBMinhLong",
      icon: "Github"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/minh-long-nguy%E1%BB%85n-09984a333",
      icon: "Linkedin"
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@KLB-MinhLong",
      icon: "Youtube"
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/long.nguyen.601773/",
      icon: "Facebook"
    }
  ]
};
