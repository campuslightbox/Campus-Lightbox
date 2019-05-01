/*
    Empty template:
    {
        name: "", 
        description: "",
        logo: "",
        tags: [],
        phone:"",
        social: {
            "website": "",
            "facebook": "",
            "twitter": "",
            "instagram": "",
        },
        email: "",
        address: "",
        hours: {
            "monday": "",
            "tuesday": "",
            "wednesday": "",
            "thursday": "",
            "friday": "",
            "saturday": "",
            "sunday": "",
            "others": "",
        },
        notes: ""
    }
*/
import YogaClubLogo from './logos/YogaClub.png';
import UBCCounsellingServiceLogo from './logos/UBCCounsellingService.jpg';
export default [
    {
        name: "UBC Counselling Service", 
        description: "Professional counselling for students feeling  persistently stressed, anxious, or sad.",
        logo: UBCCounsellingServiceLogo,
        tags: ["onCampus", "professional", "appointment", "walkIn"],
        phone:"604-822-3811",
        social: {
            "website": "https://students.ubc.ca/health/counselling-services",
        },
        address: "Brock Hall Room 1040\n1874 East Mall\nVancouver, BC V6T 1Z1",
        hours: {
            "monday": "8:30am-3:30pm",
            "tuesday": "8:30am-3:30pm",
            "wednesday": "8:30am-6:00pm",
            "thursday": "10:00am-3:30pm",
            "friday": "8:30am-3:30pm",
        }
    },
    {
        name: "UBC Yoga Club", 
        description: "We provide affordable and accessible yoga to the UBC and greater Vancouver community to support mental health and physical health", 
        logo: YogaClubLogo,
        tags: ["onCampus", "generalAwareness"], 
        social: {
            "website": "https://www.ubcyogaclub.com",
            "facebook": "https://www.facebook.com/theubcyogaclub",
        }, 
        email: "info.ubcyogaclub@gmail.com",
        address: "AMS Student Nest\n6133 University Blvd\nVancouver, BC V6T 1Z1", 
        hours:{
            "others": "Our class schedule is available at ubcyogaclub.com/schedule with the most current times and class locations",
        }
    },
    {
        name: "University Multifaith Chaplains Association", 
        description: "One-on-one pastoral/spiritual counselling and opportunities to engage in exploring in the faith tradition they represent (Buddhist, Muslim, Jewish, Christian, and Bahá'í).",
        logo: "https://scontent.fyvr3-1.fna.fbcdn.net/v/t1.0-9/11173354_939496622751482_114544511837677719_n.jpg?_nc_cat=108&_nc_ht=scontent.fyvr3-1.fna&oh=1eb4418bec882fffd6fd47326e0353a6&oe=5D04DB48",
        tags: ["onCampus", "professional", "walkIn", "spiritual"],
        social: {
            "website": "https://students.ubc.ca/campus-life/religion-spirituality/chaplains",
            "facebook": "https://www.facebook.com/UMCAssociation/",
        },
        address: "University Multifaith Chaplains Association\nUBC Life Room 1303\n6000 Student Union Blvd\nVancouver, BC V6T 1Z1",
    },
    {
        name: "UBC Student Health Service", 
        description: "A wide range of health assessments and treatments provided by doctors, nurses, and specialists. ",
        logo: "https://thethunderbird.ca/wp-content/uploads//2016/11/StudentHealth1-1-1024x680.jpg",
        tags: ["onCampus", "medical", "appointment", "walkIn"],
        phone:"604-822-7011",
        social: {
            "website": "https://students.ubc.ca/health/student-health-service",
        },
        email: "student.health@ubc.ca",
        address: "Student Health Services\nUBC Hospital Room M334\n2211 Wesbrook Mall\nVancouver, BC V6T 2A1",
        hours: {
            "monday": "8:00am-4:00pm",
            "tuesday": "8:00am-4:00pm",
            "wednesday": "8:00am-8:00pm",
            "thursday": "9:00am-4:00pm",
            "friday": "8:00am-4:00pm",
            "saturday": "8:00am-4:00pm",
        },
        notes: "No Saturday service May 1 - Aug 31"
    },
    {
        name: "Centre for Accessibility", 
        description: "Facilitates accommodations and programs to remove barriers for students with disabilities and medical conditions.",
        logo: "https://ubyssey.storage.googleapis.com/media/images/2016/10/20161026Cherihan_Hassun-medium.jpg",
        tags: ["onCampus", "professional", "appointment", "walkIn", "disability"],
        phone:"604-822-5844",
        social: {
            "website": "https://students.ubc.ca/about-student-services/centre-for-accessibility",
        },
        email: "info.accessibility@ubc.ca",
        address: "Brock Hall\nRoom 1203\n1874 East Mall\nVancouver, BC V6T 1Z1",
        hours: {
            "monday": "8:30am-4:30pm",
            "tuesday": "8:30am-5:00pm",
            "wednesday": "8:30am-4:30pm",
            "thursday": "8:30am-4:00pm",
            "friday": "8:30am-4:30pm",
            "saturday": "closed",
            "sunday": "closed",
        },
    },
    {
        name: "University Village Medical & Dental Clinic - UBC Village", 
        description: "Walk-in medical clinic located on Allison Road in UBC Village.",
        logo: "http://www.universityvillageclinic.com/DSC_0206resize.jpg",
        tags: ["onCampus", "medical", "walkIn"],
        phone:"604-222-2273 (ext. 2)",
        social: {
            "website": "http://www.universityvillageclinic.com/",
        },
        address: "#228 2155 Allison Road\nVancouver, BC V6T 1T5",
        hours: {
            "monday": "8:00am-6:00pm",
            "tuesday": "8:00am-6:00pm",
            "wednesday": "8:00am-6:00pm",
            "thursday": "8:00am-6:00pm",
            "friday": "8:00am-6:00pm",
            "saturday": "10:00am-4:00pm",
            "sunday": "closed",
        },
    },
    {
        name: "University Village Medical Clinic - Wesbrook Village", 
        description: "Walk-in medical clinic located on Birney Avenue in Wesbrook Village.",
        logo: "http://www.universityvillageclinic.com/DSC_0226resize.jpg",
        tags: ["onCampus", "medical", "walkIn"],
        phone:"604-222-2273 (ext. 1)",
        social: {
            "website": "http://www.universityvillageclinic.com/",
        },
        address: "5933 Birney Avenue\nVancouver, BC V6T 1W5",
        hours: {
            "monday": "8:00am-6:00pm",
            "tuesday": "8:00am-4:00pm",
            "wednesday": "8:00am-4:00pm",
            "thursday": "8:00am-4:00pm",
            "friday": "8:00am-4:00pm",
            "saturday": "closed",
            "sunday": "closed",
        },
    },
    {
        name: "Nurses on Campus", 
        description: "Booths around campus where you can get personalized tips, resources, and health advice from registered nurses.",
        logo: "http://robstef.com/wrk/uploads/2018/03/IMG_2794_2opt.jpg",
        tags: ["onCampus", "medical", "walkIn"],
        phone:"604-822-7011",
        social: {
            "website": "https://students.ubc.ca/health/student-health-service/nurse-campus",
        },
        email: "student.health@ubc.ca",
        hours: {
            "monday": "12:00pm-6:00pm",
            "tuesday": "10:00am-6:00pm",
            "wednesday": "12:00pm-6:00pm",
            "thursday": "12:00pm-6:00pm",
            "friday": "closed",
            "saturday": "closed",
            "sunday": "closed",
        },
        notes: "Address depends on schedule - refer to website"
    },
    {
        name: "UBC Psychology Clinic", 
        description: "The UBC Psychology Clinic offers professional psychological services in the form of (mostly) individual therapy and group treatment.",
        logo: "https://www.indstate.edu/cas/sites/arts.indstate.edu/files/Psych-Clinic/Psych1_0.jpg",
        tags: ["onCampus", "professional", "appointment"],
        phone:"604-822-3005",
        social: {
            "website": "https://clinic.psych.ubc.ca/",
        },
        email: "clinic@psych.ubc.ca",
        address: "Douglas T. Kenny Building\n2136 West Mall\nVancouver, BC V6T 1Z4",
    },
    {
        name: "Wellness Centre", 
        description: "Speak with a Wellness Peer Educator about everyday concerns related to health, relationships, and workload.",
        logo: "https://imgur.com/dwgqJR2.png",
        tags: ["onCampus", "peer", "walkIn"],
        phone:"604-822-8450",
        social: {
            "website": "https://students.ubc.ca/health/wellness-centre",
            "facebook": "https://www.facebook.com/UBCWellnessCentre/",
        },
        email: "wellness.centre@ubc.ca",
        address: "Wellness Centre\nUBC Life Building\nRoom 1400\n6138 Student Union Blvd\nVancouver, BC V6T 1Z3",
        hours: {
            "monday": "closed",
            "tuesday": "11:00am-3:00pm",
            "wednesday": "11:00am-3:00pm",
            "thursday": "11:00am-3:00pm",
            "friday": "closed",
            "saturday": "closed",
            "sunday": "closed",
        },
        notes: "Hours may vary based on time of year, double check our website for more details. Closed June 3-7th, 2019, August 19-23, 2019 and Re-opening for the academic year August 26th, hours TBC"
    },
    {
        name: "AMS Speakeasy", 
        description: "Speakeasy provides free, confidential, one-on-one peer support for UBC students and staff and helps connect students to other resources.",
        logo: "https://cdn-az.allevents.in/banners/81acff4f3843844b6f526bf5ca6ee7af",
        tags: ["onCampus", "walkIn"],
        phone:"604-822-9246",
        social: {
            "website": "https://www.ams.ubc.ca/student-services/speakeasy/",
        },
        email: "speak@ams.ubc.ca",
        address: "UBC AMS Nest\nRoom 3125",
        hours: {
            "monday": "10:00am-6:00pm",
            "tuesday": "10:00am-6:00pm",
            "wednesday": "10:00am-6:00pm",
            "thursday": "10:00am-6:00pm",
            "friday": "10:00am-6:00pm",
            "saturday": "closed",
            "sunday": "closed",
        },
    },
    {
        name: "AMS Sexual Assault Support Centre (SASC)", 
        description: "Free and confidential emotional and crisis support, hospital, legal, and police accompaniment, education, and empowerment to people of all genders who are survivors of sexualized violence as well as their friends and family.",
        logo: "http://amssasc.ca/wp-content/uploads/2015/08/logo.png",
        tags: ["onCampus", "professional", "appointment", "walkIn", "sexualHealthAssault"],
        phone:"604-827-5180",
        social: {
            "website": "https://amssasc.ca/",
            "facebook": "https://www.facebook.com/AMSSASCUBC/",
        },
        email: "sasc@ams.ubc.ca",
        address: "UBC AMS Nest\nRoom 3127",
        hours: {
            "monday": "8:00am-10:00pm",
            "tuesday": "8:00am-10:00pm",
            "wednesday": "8:00am-10:00pm",
            "thursday": "8:00am-10:00pm",
            "friday": "8:00am-10:00pm",
            "saturday": "8:00am-10:00pm",
            "sunday": "8:00am-10:00pm",
        },
        notes: "Open on most holidays, drop ins available, appointments for support prefered if possible."
    },
    {
        name: "AMS VICE", 
        description: "Free, confidential peer dialogue sessions or mentorship to provide guidance on addiction/substance abuse challenges.",
        logo: "https://scontent.fyvr3-1.fna.fbcdn.net/v/t1.0-9/17021860_100910457107461_488025490832043254_n.png?_nc_cat=106&_nc_ht=scontent.fyvr3-1.fna&oh=d9d7b240caa7db4bf74865e18af22bf8&oe=5D33684F",
        tags: ["onCampus", "peer", "recurring", "walkIn", "substanceAbuse"],
        phone:"604-827-1728",
        social: {
            "website": "https://www.ams.ubc.ca/student-services/vice/",
            "facebook": "https://www.facebook.com/UBC.AMS.Vice/",
        },
        email: "vice@ams.ubc.ca",
        address: "UBC AMS Nest\nRoom 3107",
    },
    {
        name: "AMS The Pride Collective", 
        description: "Support, guidance, and information for people who identify as LGBTQ+. Provides folks with assistance in coming out and more.",
        logo: "https://static.wixstatic.com/media/f781ec_124a33daa3f74bc1b5df27c0f6718405.jpeg",
        tags: ["onCampus", "recurring", "lgbt"],
        social: {
            "website": "https://www.prideubc.com/",
            "facebook": "https://www.facebook.com/prideubc/",
        },
        email: "prideubc@gmail.com",
        address: "UBC AMS Nest\nRoom 2103",
    },
    {
        name: "Women’s Center", 
        description: "Support and resources for women on campus, including informational brochures, menstrual products, safer sex products, pregnancy tests, and more.",
        logo: "https://scontent.fyvr3-1.fna.fbcdn.net/v/t1.0-9/947350_691791094293185_3385537979808396418_n.jpg?_nc_cat=108&_nc_ht=scontent.fyvr3-1.fna&oh=d4c2ef5b46dfce60eda2b55fdaa64ebb&oe=5D36A399",
        tags: ["onCampus", "walkIn", "womensHealth"],
        social: {
            "website": "http://www.ubcwomenscentre.com",
            "facebook": "https://www.facebook.com/ubcwomenscentre/",
        },
        email: "ubcwomenscentre@gmail.com",
        address: "UBC AMS Nest\nRoom 2113",
    },
    {
        name: "The Kaleidoscope", 
        description: "The Kaleidoscope provides a safe, confidential, and stigma-free support group for all individuals who have experienced mental health concerns/difficulties.",
        logo: "https://imgur.com/JlTjfNK.png",
        tags: ["onCampus", "peer", "recurring"],
        social: {
            "website": "http://the-kaleidoscope.com/",
            "facebook": "https://www.facebook.com/kaleidoscopeUBC",
        },
        email: "info@the-kaleidoscope.com",
        address: "Time and location varies by term",
        hours: {
            "others": "Email or message us on Facebook to receive a response within 24 hours.",
        },
    },
    {
        name: "SHARE UBC", 
        description: "Support group for individuals who are struggling with/have struggled with self harm. Confidential, peer-to-peer, recovery oriented, safe space.",
        logo: "https://pbs.twimg.com/profile_images/603349697504227328/G301mIfo_400x400.png",
        tags: ["onCampus", "peer", "recurring", "selfHarm"],
        social: {
            "website": "https://vivreshare.org/support-group/",
            "facebook": "https://www.facebook.com/vivreSHARE",
        },
        email: "info@vivreshare.org",
        address: "Buchanan D304\n1866 Main Mall\nVancouver, BC V6T 1Z1",
        hours: {
            "others": "Check website for more info",
        },
    },
    {
        name: "Mental Health Awareness Club", 
        description: "Raises awareness for mental health and eliminates stigma by hosting events and writing blog posts with perspectives on mental health.",
        logo: "https://imgur.com/2JnBmrV.png",
        tags: ["onCampus", "generalAwareness", "events"],
        social: {
            "website": "http://blogs.ubc.ca/ubcmhac/",
            "facebook": "https://www.facebook.com/UBCMHAC/",
        },
        email: "ubcmhac@gmail.com",
        address: "NEST Room 3302G\n6133 University Blvd\nVancouver, BC V6T1Z1",
    },
    {
        name: "UBC Jack Chapter", 
        description: "Part of a national network of students working to shift negative attitudes, beliefs, and behaviours around mental health.",
        logo: "https://jack.org/getattachment/d7c13f45-be16-4bda-9550-567ea206dc55/og-img.aspx",
        tags: ["onCampus", "generalAwareness", "events"],
        social: {
            "website": "http://legacy.jack.org/chapters/university-british-columbia",
        },
    },
    {
        name: "Zen at UBC", 
        description: "Zen meditation practice on campus. Individual advice & counsel on Zen Buddhist meditation and awakening to life.",
        logo: "https://scontent.fyvr3-1.fna.fbcdn.net/v/t31.0-8/11951669_953683761359332_8598845998263703923_o.png?_nc_cat=111&_nc_ht=scontent.fyvr3-1.fna&oh=4eae0a61171e45dd6964962772080219&oe=5D48FA18",
        tags: ["onCampus", "generalAwareness", "recurring"],
        social: {
            "website": "https://students.ubc.ca/campus-life/religion-spirituality/chaplains/zen-buddhist-chaplain",
            "facebook": "https://www.facebook.com/UBCZen/",
        },
        email: "gareth@zen.ca",
        hours: {
            "others": "Check Facebook page for times & locations",
        },
    },
    {
        name: "UBC Meditation Community", 
        description: "Helps members learn and develop a formal meditation practice to promote well-being and overall health.",
        logo: "https://scontent.fyvr3-1.fna.fbcdn.net/v/t31.0-8/14242253_513839475493343_1512661762216198297_o.png?_nc_cat=108&_nc_ht=scontent.fyvr3-1.fna&oh=bfa7077d728c835546de79b61c090e16&oe=5D075F2E",
        tags: ["onCampus", "generalAwareness", "recurring"],
        social: {
            "website": "http://blogs.ubc.ca/meditation/",
            "facebook": "https://www.facebook.com/UBCMeditationCommunity/",
        },
        email: "ubcmeditation@gmail.com",
        hours: {
            "others": "Refer to website for a schedule of locations and times",
        },
    },
    {
        name: "Crisis Centre", 
        description: "Emotional support for people in crisis/distress. ",
        logo: "https://www.thekeltyfoundation.org/uploads/image_CCBC_logo_positive_alt%20cropped.jpg",
        tags: ["hotline", "professional", "allday"],
        phone:"1-800-784-2433",
        social: {
            "website": "https://crisiscentre.bc.ca/",
        },
        hours: {
            "others": "24/7, 365 days a year",
        },
    },
    {
        name: "Women Against Violence Against Women", 
        description: "Support services for survivors of sexualized violence or gender marginalization.",
        logo: "https://i.imgur.com/yEtXB1X.jpg",
        tags: ["hotline", "professional", "allday", "sexualHealthAssault", "womensHealth"],
        phone:"1-877-392-7583",
        social: {
            "website": "https://www.wavaw.ca/",
        },
        email: "admin@wavaw.ca",
        address: "WAVAW Rape Crisis Centre\n1476 BC-7\nVancouver, BC V6H 4E8",
        hours: {
            "others": "24/7",
        },
    },
    {
        name: "Empower Me", 
        description: "Connect with counsellors and life coaches for mental health, social, financial, nutritional problems. Online chat & phone options.",
        logo: "https://i.imgur.com/tgSZPd4.png",
        tags: ["online", "hotline", "professional", "allday"],
        phone:"1-844-741-6389",
        social: {
            "website": "http://www.studentcare.ca/rte/en/UniversityofBritishColumbiaAMSGSS_EmpowerMe_EmpowerMe",
        },
        hours: {
            "others": "24/7",
        },
    },
    {
        name: "UBC Academic Advising", 
        description: "Help with program planning, degree requirements, and other course-related questions.",
        logo: "https://i.imgur.com/CQajm70.jpg",
        tags: ["onCampus", "online", "professional", "appointment", "academic"],
        social: {
            "website": "https://students.ubc.ca/enrolment/academic-supports/academic-advising",
        },
        hours: {
            "others": "For contact information, address, and hours please refer to your faculty website",
        },
    },
    {
        name: "Enrollment Services", 
        description: "Get help with budgeting, loans, understanding UBC processes, financial planning.",
        logo: "https://i.imgur.com/V3UEw2R.jpg",
        tags: ["onCampus", "online", "professional", "walkIn", "financial"],
        phone:"1-877-272-1422",
        social: {
            "website": "https://students.ubc.ca/about-student-services/enrolment-services-advisors",
        },
        address: "Enrolment Services Advising Centre\nBrock Hall\n1874 East Mall\nVancouver, BC V6T 1Z1",
        hours: {
            "monday": "9:30am-4:00pm",
            "tuesday": "10:00am-4:00pm",
            "wednesday": "9:30am-4:00pm",
            "thursday": "9:30am-4:00pm",
            "friday": "9:30am-4:00pm",
            "saturday": "closed",
            "sunday": "closed",
        },
        notes: "See your faculty website for email"
    }
];