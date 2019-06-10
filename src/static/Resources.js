/*
    ##last updated: May, 7, 2019##
    
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
import JackLogo from './logos/Jack.jpg';
import UMCALogo from './logos/UMCA.jpg';
import UBCStudentHealthLogo from './logos/UBCStudentHealth.jpg';
import CentreForAccessibilityLogo from './logos/CentreForAccessibility.jpg';
import VillageMedicalLogo from './logos/UBCVillageMedical.jpg';
import WesbrookVillageMedicalLogo from './logos/WesbrookVillageMedical.jpg';
import NursesLogo from './logos/Nurses.jpg';
import PsychologyClinicLogo from './logos/PsychologyClinic.jpg';
import WellnessCentreLogo from './logos/WellnessCentre.png';
import AMSSpeakeasyLogo from './logos/AMSSpeakeasy.jpeg';
import SASCLogo from './logos/SASC.png';
import VICELogo from './logos/VICE.png';
import PrideLogo from './logos/Pride.jpeg';
import WomenCentreLogo from './logos/WomenCentre.jpg';
import KaleidoscopeLogo from './logos/Kaleidoscope.png';
import SHARELogo from './logos/SHARE.png';
import MHACLogo from './logos/MHAC.png';
import ZenLogo from './logos/Zen.png';
import MeditationLogo from './logos/Meditation.png';
import CrisisLogo from './logos/Crisis.jpg';
import WomenViolenceLogo from './logos/WomenViolence.jpg';
import EmpowerLogo from './logos/Empower.png';
import AcademicLogo from './logos/Academic.jpg';
import EnrollmentLogo from './logos/Enrollment.jpg';

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
        logo: UMCALogo,
        tags: ["onCampus", "professional", "walkIn", "spiritual"],
        social: {
            "website": "https://students.ubc.ca/campus-life/religion-spirituality/chaplains",
            "facebook": "https://www.facebook.com/UMCAssociation/",
        },
        address: "University Multifaith Chaplains Association\nUBC Life Room 1303\n6000 Student Union Blvd\nVancouver, BC V6T 1Z1",
    },
    {
        name: "UBC Student Health Services", 
        description: "A wide range of health assessments and treatments provided by doctors, nurses, and specialists. ",
        logo: UBCStudentHealthLogo,
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
        logo: CentreForAccessibilityLogo,
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
        logo: VillageMedicalLogo,
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
        logo: WesbrookVillageMedicalLogo,
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
        logo: NursesLogo,
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
        logo: PsychologyClinicLogo,
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
        logo: WellnessCentreLogo,
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
        description: "Speakeasy provides free, confidential, one-on-one peer support for UBC students and staff facing a wide variety of challenges.",
        logo: AMSSpeakeasyLogo,
        tags: ["onCampus", "walkIn", "peer"],
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
        notes: "Schedule a private and confidential appointment at: calendly.com/speakeasyvice"
    },
    {
        name: "AMS Sexual Assault Support Centre (SASC)", 
        description: "Free and confidential emotional and crisis support, hospital, legal, and police accompaniment, education, and empowerment to people of all genders who are survivors of sexualized violence as well as their friends and family.",
        logo: SASCLogo,
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
        logo: VICELogo,
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
        logo: PrideLogo,
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
        logo: WomenCentreLogo,
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
        logo: KaleidoscopeLogo,
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
        logo: SHARELogo,
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
        logo: MHACLogo,
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
        logo: JackLogo,
        tags: ["onCampus", "generalAwareness", "events"],
        social: {
            "website": "http://legacy.jack.org/chapters/university-british-columbia",
        },
    },
    {
        name: "Zen at UBC", 
        description: "Zen meditation practice on campus. Individual advice & counsel on Zen Buddhist meditation and awakening to life.",
        logo: ZenLogo,
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
        logo: MeditationLogo,
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
        logo: CrisisLogo,
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
        logo: WomenViolenceLogo,
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
        logo: EmpowerLogo,
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
        logo: AcademicLogo,
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
        logo: EnrollmentLogo,
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