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
import YogaClubLogo from "./logos/YogaClub.png";
import UBCCounsellingServiceLogo from "./logos/UBCCounsellingService.png";
import JackLogo from "./logos/Jack.png";
import UMCALogo from "./logos/UMCA.png";
import UBCStudentHealthLogo from "./logos/UBCStudentHealth.png";
import CentreForAccessibilityLogo from "./logos/CentreForAccessibility.png";
import VillageMedicalLogo from "./logos/UBCVillageMedical.png";
import WesbrookVillageMedicalLogo from "./logos/WesbrookVillageMedical.png";
import NursesLogo from "./logos/Nurses.png";
import PsychologyClinicLogo from "./logos/PsychologyClinic.png";
import WellnessCentreLogo from "./logos/WellnessCentre.png";
import AMSSpeakeasyLogo from "./logos/AMSSpeakeasy.png";
import SASCLogo from "./logos/SASC.png";
import VICELogo from "./logos/VICE.png";
import PrideLogo from "./logos/Pride.png";
import WomenCentreLogo from "./logos/WomenCentre.png";
import KaleidoscopeLogo from "./logos/Kaleidoscope.png";
import SHARELogo from "./logos/SHARE.png";
import MHACLogo from "./logos/MHAC.png";
import ZenLogo from "./logos/Zen.png";
import MeditationLogo from "./logos/Meditation.png";
import CrisisLogo from "./logos/Crisis.png";
import WomenViolenceLogo from "./logos/WomenViolence.png";
import AcademicLogo from "./logos/Academic.png";
import EnrollmentLogo from "./logos/Enrollment.png";
import SVPROLogo from "./logos/SVPRO.png";
import SRCLogo from "./logos/SRC_circle3.png";
import MHNLogo from "./logos/MHNLogo2.png";
import CounsellingBC from "./logos/counsellingbc.png";
import AnxietyCanada from "./logos/Anxiety_Canada.png";
import KeltysKey from "./logos/keltyskey.png";
import BCPA from "./logos/BCPA.png";
import Foundry from "./logos/Foundry.png";
import HealthLinkBC from "./logos/HealthLinkBC.png";
import YogaClubBG from "./logos/YogaClubBG.png";
import AcademicBG from "./logos/AcademicBG.jpg";
import EnrollmentBG from "./logos/EnrollmentBG.jpg";
import VillageMedicalBG from "./logos/UBCVillageMedicalBG.jpg";
import WesbrookVillageMedicalBG from "./logos/WesbrookVillageMedicalBG.jpg";
import UBCCounsellingServiceBG from "./logos/UBCCounsellingServiceBG.jpg";
import CentreForAccessibilityBG from "./logos/CentreForAccessibilityBG.jpg";
import UMCABG from "./logos/UMCABG.jpg";
import UBCStudentHealthBG from "./logos/UBCStudentHealthBG.jpg";
import NursesBG from "./logos/NursesBG.jpg";
import HeadsUpGuys from "./logos/headsupguys.png";
import UBCAthleteHub from "./logos/UBCAthleteHub2.png";
import MindHealthBC from "./logos/MindHealthBC.png";
import MHliteracy from "./logos/MHliteracy.png";
import HeretoHelp from "./logos/heretohelp.png";
import UBCScarfe from "./logos/ubcscarfe.jpg";
import UBCgeneral from "./logos/UBClogo.png";
import HenryChen from "./logos/HenryChen.png";
import UBCHospital from "./logos/UBCHospital.png";
import UBCwellbeing from "./logos/UBCwellbeing.png";
import UBCBodyBanter from "./logos/UBCBodyBanter.png";
import TAOapp from "./logos/TAOapp2.png";
import VCHLogo from "./logos/VCHlogo.jpg";
import PayFair from "./logos/PayFairLogo.png";
import Here2Talk from "./logos/hereTalkLogo.png";
import WellnessCan from "./logos/WellCanLogo.png";

export default [
  {
    name: "UBC Counselling Service",
    description:
      "Professional counselling for students feeling  persistently stressed, anxious, or sad.",
    logo: UBCCounsellingServiceLogo,
    background: UBCCounsellingServiceBG,
    tags: [
      "free",
      "depressionAnxiety",
      "selfHarm",
      "suicidal",
      // wait time unsure
      "low",
      "medium",
      "high",
      "appointment",
      "walkIn",
      "professional",
    ],
    phone: "604-822-3811",
    social: {
      website: "https://students.ubc.ca/health/counselling-services",
    },
    address: "Brock Hall Room 1040\n1874 East Mall\nVancouver, BC V6T 1Z1",
    hours: {
      monday: "8:30am-3:30pm",
      tuesday: "8:30am-3:30pm",
      wednesday: "8:30am-6:00pm",
      thursday: "10:00am-3:30pm",
      friday: "8:30am-3:30pm",
    },
    notes:
      "You can call to schedule an appointment by phone during the COVID-19 outbreak.",
  },
  {
    name: "UBC Yoga Club",
    description:
      "We provide affordable and accessible yoga to the UBC and greater Vancouver community to support mental health and physical health",
    logo: YogaClubLogo,
    background: YogaClubBG,
    tags: [
      "paid",
      "less50",
      "general",
      "less1Week",
      "two3Days",
      "low",
      "walkIn",
      "generalAwareness",
      "peer",
    ],
    social: {
      website: "https://www.ubcyogaclub.com",
      facebook: "https://www.facebook.com/theubcyogaclub",
    },
    email: "info.ubcyogaclub@gmail.com",
    address: "AMS Student Nest\n6133 University Blvd\nVancouver, BC V6T 1Z1",
    hours: {
      others: "Classes cancelled for the rest of the school year.",
    },
  },
  {
    name: "University Multifaith Chaplains Association",
    description:
      "One-on-one pastoral/spiritual counselling and opportunities to engage in exploring in the faith tradition they represent (Buddhist, Muslim, Jewish, Christian, and Bahá'í).",
    logo: UMCALogo,
    background: UMCABG,
    tags: [
      "free",
      "spiritual",
      "less1Week",
      "two3Days",
      "low",
      "medium",
      "walkIn",
      "professional",
    ],
    social: {
      website:
        "https://students.ubc.ca/campus-life/religion-spirituality/chaplains",
      facebook: "https://www.facebook.com/UMCAssociation/",
    },
    address:
      "University Multifaith Chaplains Association\nUBC Life Room 1303\n6000 Student Union Blvd\nVancouver, BC V6T 1Z1",
  },
  {
    name: "UBC Student Health Services",
    description:
      "A wide range of health assessments and treatments provided by doctors, nurses, and specialists. ",
    logo: UBCStudentHealthLogo,
    background: UBCStudentHealthBG,
    tags: [
      "free",
      "general",
      "sameDay",
      "low",
      "appointment",
      "walkIn",
      "professional",
      "medical",
    ],
    phone: "604-822-7011",
    social: {
      website: "https://students.ubc.ca/health/student-health-service",
    },
    email: "student.health@ubc.ca",
    address:
      "Student Health Services\nUBC Hospital Room M334\n2211 Wesbrook Mall\nVancouver, BC V6T 2A1",
    hours: {
      monday: "8:00am-4:00pm",
      tuesday: "8:00am-4:00pm",
      wednesday: "8:00am-8:00pm",
      thursday: "9:00am-4:00pm",
      friday: "8:00am-4:00pm",
      saturday: "8:00am-3:30pm",
    },
    notes:
      "All appointments must now be booked by calling 604-822-7011. You can arrange a video or phone appointment. A follow up appointment will be arranged in-person if needed.",
  },
  {
    name: "Centre for Accessibility",
    description:
      "Facilitates accommodations and programs to remove barriers for students with disabilities and medical conditions.",
    logo: CentreForAccessibilityLogo,
    background: CentreForAccessibilityBG,
    tags: [
      "free",
      "academic",
      "disability",
      "sameDay",
      "low",
      "medium",
      "professional",
      "appointment",
      "walkIn",
    ],
    phone: "604-822-5844",
    social: {
      website:
        "https://students.ubc.ca/about-student-services/centre-for-accessibility",
    },
    email: "info.accessibility@ubc.ca",
    address: "Brock Hall\nRoom 1203\n1874 East Mall\nVancouver, BC V6T 1Z1",
    hours: {
      monday: "8:30am-4:30pm",
      tuesday: "8:30am-5:00pm",
      wednesday: "8:30am-4:30pm",
      thursday: "8:30am-4:00pm",
      friday: "8:30am-4:30pm",
      saturday: "closed",
      sunday: "closed",
    },
    notes:
      "All in-person services have been suspended, but we are conducting appointments over the phone or via Skype. Please email or call us directly to book an appointment.",
  },
  {
    name: "University Village Medical & Dental Clinic - UBC Village",
    description:
      "Walk-in medical clinic located on Allison Road in UBC Village.",
    logo: VillageMedicalLogo,
    background: VillageMedicalBG,
    tags: [
      "free",
      "general",
      "sameDay",
      "less1Week",
      "less1Month",
      "low",
      "walkIn",
      "appointment",
      "medical",
      "professional",
    ],
    phone: "604-222-2273 (ext. 2)",
    social: {
      website: "http://www.universityvillageclinic.com/",
    },
    address: "#228 2155 Allison Road\nVancouver, BC V6T 1T5",
    hours: {
      monday: "8:00am-4:00pm",
      tuesday: "8:00am-4:00pm",
      wednesday: "8:00am-4:00pm",
      thursday: "8:00am-4:00pm",
      friday: "8:00am-4:00pm",
      saturday: "10:00am-4:00pm",
      sunday: "closed",
    },
  },
  {
    name: "University Village Medical Clinic - Wesbrook Village",
    description:
      "Walk-in medical clinic located on Birney Avenue in Wesbrook Village.",
    logo: WesbrookVillageMedicalLogo,
    background: WesbrookVillageMedicalBG,
    tags: [
      "free",
      "general",
      "sameDay",
      "less1Week",
      "less1Month",
      "low",
      "walkIn",
      "appointment",
      "medical",
      "professional",
    ],
    phone: "604-222-2273 (ext. 1)",
    social: {
      website: "http://www.universityvillageclinic.com/",
    },
    address: "5933 Birney Avenue\nVancouver, BC V6T 1W5",
    hours: {
      monday: "8:00am-4:00pm",
      tuesday: "8:00am-4:00pm",
      wednesday: "8:00am-4:00pm",
      thursday: "8:00am-4:00pm",
      friday: "8:00am-4:00pm",
      saturday: "10:00am-4:00pm",
      sunday: "closed",
    },
  },
  {
    name: "Nurses on Campus",
    description:
      "Booths around campus where you can get personalized tips, resources, and health advice from registered nurses.",
    logo: NursesLogo,
    background: NursesBG,
    tags: [
      "free",
      "depressionAnxiety",
      "general",
      "immediate",
      "sameDay",
      "low",
      "walkIn",
      "professional",
      "medical",
    ],
    phone: "604-822-7011",
    social: {
      website:
        "https://students.ubc.ca/health/student-health-service/nurse-campus",
    },
    email: "student.health@ubc.ca",
    hours: {
      monday: "12:00pm-6:00pm",
      tuesday: "10:00am-6:00pm",
      wednesday: "12:00pm-6:00pm",
      thursday: "12:00pm-6:00pm",
      friday: "closed",
      saturday: "closed",
      sunday: "closed",
    },
    notes: "Nurse on Campus booths have been cancelled until further notice.",
  },
  {
    name: "UBC Psychology Clinic",
    description:
      "The UBC Psychology Clinic offers professional psychological services in the form of (mostly) individual therapy and group treatment.",
    logo: PsychologyClinicLogo,
    background: "",
    tags: ["low", "walkIn", "appointment", "professional"],
    phone: "604-822-3005",
    social: {
      website: "https://clinic.psych.ubc.ca/",
    },
    email: "clinic@psych.ubc.ca",
    address: "Douglas T. Kenny Building\n2136 West Mall\nVancouver, BC V6T 1Z4",
  },
  {
    name: "Wellness Centre",
    description:
      "Speak with a Wellness Peer Educator about everyday concerns related to health, relationships, and workload.",
    logo: WellnessCentreLogo,
    background: "",
    tags: [
      "free",
      "academic",
      "financial",
      "sexualHealthAssault",
      "depressionAnxiety",
      "general",
      "two3Days",
      "less1Week",
      "less1Month",
      "low",
      "walkIn",
      "peer",
    ],
    phone: "604-822-8450",
    social: {
      website: "https://students.ubc.ca/health/wellness-centre",
      facebook: "https://www.facebook.com/UBCWellnessCentre/",
    },
    email: "wellness.centre@ubc.ca",
    address:
      "Wellness Centre\nUBC Life Building\nRoom 1400\n6138 Student Union Blvd\nVancouver, BC V6T 1Z3",
    hours: {
      monday: "11:00am-1:00pm",
      tuesday: "11:00am-3:00pm",
      wednesday: "11:00am-3:00pm",
      thursday: "11:00am-3:00pm",
    },
    notes:
      "Our office is temporarily closed, but you can engage in topics relevant to your wellbeing through Canvas! Check the link below to enroll: https://canvas.ubc.ca/enroll/PCNEN4.",
  },
  {
    name: "Wellness Workshops",
    description:
      "You can request a workshop for a group of students, staff, and/or faculty members. Choose from the workshop topics on this page.",
    logo: WellnessCentreLogo,
    background: "",
    tags: [
      "free",
      "general",
      "less1Month",
      "low",
      "events",
      "generalAwareness",
    ],
    phone: "604-822-8450",
    social: {
      website:
        "https://students.ubc.ca/health/wellness-centre/wellness-workshops#how-to-participate",
    },
    email: "wellness.centre@ubc.ca",
    address:
      "Wellness Centre\nUBC Life Building\nRoom 1400\n6138 Student Union Blvd\nVancouver, BC V6T 1Z3",
    notes: "Wellness workshops have been cancelled until further notice",
  },
  {
    name: "AMS Speakeasy",
    description:
      "Speakeasy provides free, confidential, one-on-one peer support for UBC students and staff facing a wide variety of challenges.",
    logo: AMSSpeakeasyLogo,
    background: "",
    tags: [
      "free",
      "academic",
      "financial",
      "sexualHealthAssault",
      "depressionAnxiety",
      "general",
      "two3Days",
      "less1Week",
      "less1Month",
      "low",
      "medium",
      "walkIn",
      "peer",
    ],
    phone: "604-822-9246",
    social: {
      website: "https://www.ams.ubc.ca/student-services/speakeasy/",
    },
    email: "speak@ams.ubc.ca",
    address: "UBC AMS Nest\nRoom 3125",
    hours: {
      monday: "10:00am-6:00pm",
      tuesday: "10:00am-6:00pm",
      wednesday: "10:00am-6:00pm",
      thursday: "10:00am-6:00pm",
      friday: "10:00am-6:00pm",
      saturday: "closed",
      sunday: "closed",
    },
    notes: "Speakeasy & Vice will be closed until further notice.",
  },
  {
    name: "AMS Sexual Assault Support Centre (SASC)",
    description:
      "Free and confidential emotional and crisis support, hospital, legal, and police accompaniment, education, and empowerment to people of all genders who are survivors of sexualized violence as well as their friends and family.",
    logo: SASCLogo,
    background: "",
    tags: [
      "free",
      "sexualHealthAssault",
      "appointment",
      "walkIn",
      "professional",
    ],
    phone: "604-827-5180",
    social: {
      website: "https://amssasc.ca/",
      facebook: "https://www.facebook.com/AMSSASCUBC/",
    },
    email: "sasc@ams.ubc.ca",
    address: "UBC AMS Nest\nRoom 3127",
    hours: {
      monday: "8:00am-10:00pm",
      tuesday: "8:00am-10:00pm",
      wednesday: "8:00am-10:00pm",
      thursday: "8:00am-10:00pm",
      friday: "8:00am-10:00pm",
      saturday: "11:00am-7:00pm",
      sunday: "11:00am-7:00pm",
    },
    notes:
      "All in-person services and events will be suspended until April 15th. On-call support or phone appointments will still be available.",
  },
  {
    name: "AMS VICE",
    description:
      "Free, confidential peer dialogue sessions or mentorship to provide guidance on addiction/substance abuse challenges.",
    logo: VICELogo,
    background: "",
    tags: [
      "free",
      "depressionAnxiety",
      "general",
      "substanceAbuse",
      "low",
      "medium",
      "less1Week",
      "less1Month",
      "walkIn",
      "recurring",
      "peer",
    ],
    phone: "604-827-1728",
    social: {
      website: "https://www.ams.ubc.ca/student-services/vice/",
      facebook: "https://www.facebook.com/UBC.AMS.Vice/",
    },
    email: "vice@ams.ubc.ca",
    address: "UBC AMS Nest\nRoom 3107",
    notes: "Speakeasy & Vice will be closed until further notice.",
  },
  {
    name: "AMS The Pride Collective",
    description:
      "Support, guidance, and information for people who identify as LGBTQ+. Provides folks with assistance in coming out and more.",
    logo: PrideLogo,
    background: "",
    tags: ["free", "lgbt", "walkIn", "recurring", "peer"],
    social: {
      website: "https://www.prideubc.com/",
      facebook: "https://www.facebook.com/prideubc/",
    },
    email: "prideubc@gmail.com",
    address: "UBC AMS Nest\nRoom 2103",
    notes:
      "All in-person activities and meetings are cancelled for the rest of the school year.",
  },
  {
    name: "Women’s Center",
    description:
      "Support and resources for women on campus, including informational brochures, menstrual products, safer sex products, pregnancy tests, and more.",
    logo: WomenCentreLogo,
    background: "",
    tags: [
      "free",
      "womensHealth",
      "sameDay",
      "low",
      "walkIn",
      "generalAwareness",
    ],
    social: {
      facebook: "https://www.facebook.com/ubcwomenscentre/",
    },
    email: "ubcwomenscentre@gmail.com",
    address: "UBC AMS Nest\nRoom 2113",
    notes: "Women's Center will be closed until further notice.",
  },
  {
    name: "The Kaleidoscope",
    description:
      "The Kaleidoscope provides a safe, confidential, and stigma-free support group for all individuals who have experienced mental health concerns/difficulties.",
    logo: KaleidoscopeLogo,
    background: "",
    tags: [
      "free",
      "depressionAnxiety",
      "selfHarm",
      "suicidal",
      "general",
      "academic",
      "less1Week",
      "less1Month",
      "low",
      "medium",
      "walkIn",
      "recurring",
      "peer",
    ],
    social: {
      website: "http://the-kaleidoscope.com/",
      facebook: "https://www.facebook.com/kaleidoscopeUBC",
    },
    email: "info@the-kaleidoscope.com",
    address: "Time and location varies by term",
    hours: {
      others:
        "Meetings are moving online! Check Facebook page for more details.",
    },
  },
  {
    name: "SHARE UBC",
    description:
      "Support group for individuals who are struggling with/have struggled with self harm. Confidential, peer-to-peer, recovery oriented, safe space.",
    logo: SHARELogo,
    background: "",
    tags: [
      "free",
      "selfHarm",
      "suicidal",
      "depressionAnxiety",
      "less1Month",
      "low",
      "medium",
      "recurring",
      "walkIn",
      "peer",
    ],
    social: {
      website: "https://vivreshare.org/support-group/",
      facebook: "https://www.facebook.com/vivreSHARE",
    },
    email: "info@vivreshare.org",
    address: "IBLC Room 461\nVancouver, BC V6T 1Z1",
  },
  {
    name: "Sexual Violence Prevention & Response (SVPRO)",
    description:
      "Creating a safe space to help explore the available, most suitable options for anyone who has experienced sexual violence regardless of where it took place.",
    logo: SVPROLogo,
    background: "",
    tags: [
      "free",
      "sexualHealthAssault",
      "immediate",
      "sameDay",
      "high",
      "phone",
      "online",
      "professional",
    ],
    phone: "604-822-1588",
    social: {
      website: "https://svpro.ubc.ca/",
    },
    email: "svpro.vancouver@ubc.ca",
    address: "6363 Agronomy Road\nRoom 4071 \nVancouver, BC V6T 1T2",
    hours: {
      monday: "8:30am-4:30pm",
      tuesday: "8:30am-4:30pm",
      wednesday: "8:30am-4:30pm",
      thursday: "8:30am-4:30pm",
      friday: "8:30am-4:30pm",
      saturday: "closed",
      sunday: "closed",
    },
    notes:
      "Services are only available online or over the phone.If you have a scheduled appointment, we will contact you to arrange a phone or online meeting.",
  },
  {
    name: "Student Recovery Community at UBC",
    description:
      "Community of students in recovery or pursuing recovery from drugs, alcohol, and addictive behaviour. We recognize and support multiple pathways of recovery!",
    logo: SRCLogo,
    background: "",
    tags: [
      "free",
      "substanceAbuse",
      "low",
      "medium",
      "less1Week",
      "less1Month",
      "walkIn",
      "peer",
    ],
    social: {
      facebook: "https://www.facebook.com/RecoveryUBC/",
      instagram: "https://www.instagram.com/recovery_ubc/",
    },
    email: "sfudjack@alumni.ubc.ca",
  },
  {
    name: "UBC Mental Health Network",
    description:
      "We work to facilitate cross-collaboration and deliver mental health and wellness workshops across campus as well as in the lower mainland.",
    logo: MHNLogo,
    background: "",
    tags: [
      "free",
      "general",
      "less1Week",
      "low",
      "events",
      "peer",
      "generalAwareness",
    ],
    social: {
      website: "http://blogs.ubc.ca/ubcmhn",
      facebook: "https://www.facebook.com/mentalhealthnetworkubc/",
      twitter: "https://www.twitter.com/ubcmhn",
    },
    email: "mhnubc@gmail.com",
  },
  {
    name: "Mental Health Awareness Club",
    description:
      "Raises awareness for mental health and eliminates stigma by hosting events and writing blog posts with perspectives on mental health.",
    logo: MHACLogo,
    background: "",
    tags: [
      "free",
      "general",
      "depressionAnxiety",
      "less1Week",
      "low",
      "walkIn",
      "events",
      "peer",
      "generalAwareness",
    ],
    social: {
      website: "http://blogs.ubc.ca/ubcmhac/",
      facebook: "https://www.facebook.com/UBCMHAC/",
    },
    email: "ubcmhac@gmail.com",
    address: "NEST Room 3302G\n6133 University Blvd\nVancouver, BC V6T1Z1",
  },
  {
    name: "UBC Jack Chapter",
    description:
      "Part of a national network of students working to shift negative attitudes, beliefs, and behaviours around mental health.",
    logo: JackLogo,
    background: "",
    tags: [
      "free",
      "general",
      "depressionAnxiety",
      "less1Week",
      "low",
      "walkIn",
      "events",
      "peer",
      "generalAwareness",
    ],
    social: {
      website: "http://legacy.jack.org/chapters/university-british-columbia",
    },
  },
  {
    name: "Zen at UBC",
    description:
      "Zen meditation practice on campus. One-on-one/Individual advice & counsel on Zen Buddhist meditation and awakening to life.",
    logo: ZenLogo,
    background: "",
    tags: [
      "free",
      "depressionAnxiety",
      "spiritual",
      "general",
      "low",
      "medium",
      "less1Week",
      "less1Month",
      "walkIn",
      "recurring",
      "generalAwareness",
      "professional",
    ],
    social: {
      website:
        "https://students.ubc.ca/campus-life/religion-spirituality/chaplains/zen-buddhist-chaplain",
      facebook: "https://www.facebook.com/UBCZen/",
    },
    email: "gareth@zen.ca",
    hours: {
      others:
        "Meetings are moving online! Check Facebook page for more details.",
    },
  },
  {
    name: "UBC Meditation Community",
    description:
      "Helps members learn and develop a formal meditation practice to promote well-being and overall health.",
    logo: MeditationLogo,
    background: "",
    tags: [
      "paid",
      "less50",
      "generalAwareness",
      "spiritual",
      "depressionAnxiety",
      "less1Week",
      "less1Month",
      "low",
      "medium",
      "walkIn",
      "recurring",
      "professional",
    ],
    social: {
      website: "http://blogs.ubc.ca/meditation/",
      facebook: "https://www.facebook.com/UBCMeditationCommunity/",
    },
    email: "ubcmeditation@gmail.com",
    hours: {
      others: "Refer to website for a schedule of locations and times",
    },
  },
  {
    name: "Crisis Centre",
    description: "Emotional support for people in crisis/distress. ",
    logo: CrisisLogo,
    background: "",
    tags: [
      "free",
      "depressionAnxiety",
      "suicidal",
      "selfHarm",
      "general",
      "immediate",
      "sameDay",
      "low",
      "medium",
      "high",
      "phone",
      "allday",
      "professional",
    ],
    phone: "1-800-784-2433",
    social: {
      website: "https://crisiscentre.bc.ca/",
    },
    hours: {
      others: "24/7, 365 days a year",
    },
  },
  {
    name: "WAVAW Rape Crisis Centre",
    description:
      "Support services for survivors of sexualized violence or gender marginalization: cis and trans women, Two-Spirit, trans and/or non-binary people.",
    logo: WomenViolenceLogo,
    background: "",
    tags: [
      "free",
      "sexualHealthAssault",
      "womensHealth",
      "lgbt",
      "immediate",
      "medium",
      "high",
      "phone",
      "professional",
      "allday",
    ],
    phone: "1-877-392-7583",
    social: {
      website: "https://www.wavaw.ca/",
    },
    email: "admin@wavaw.ca",
    address: "WAVAW Rape Crisis Centre\n1476 BC-7\nVancouver, BC V6H 4E8",
    hours: {
      others: "24/7",
    },
  },
  {
    name: "Wellness Together Canada",
    description:
      "Free mental health online assessment, self-guided mental health resources, and free access to counsellors by phone, text or video.",
    logo: WellnessCan,
    background: "",
    tags: [
      "free",
      "general",
      "substanceAbuse",
      "depressionAnxiety",
      "immediate",
      "sameDay",
      "low",
      "medium",
      "high",
      "online",
      "phone",
      "professional",
      "allday",
    ],

    social: {
      website: "https://ca.portal.gs/",
    },
    hours: {
      others: "24/7",
    },
    notes: "Text WELLNESS to 741741 for immediate crisis support",
  },
  {
    name: "Here2Talk",
    description:
      "Here2Talk offers free, 24/7 single-session, counselling by phone or online chat for all UBC students, no matter where you are in the world.",
    logo: Here2Talk,
    background: "",
    tags: [
      "free",
      "academic",
      "depressionAnxiety",
      "general",
      "immediate",
      "low",
      "medium",
      "online",
      "phone",
      "professional",
      "allday",
    ],
    phone: "604-642-5212",
    social: {
      website: "https://here2talk.ca/home",
    },
    hours: {
      others: "24/7",
    },
    notes: "For Canada-wide toll free, please dial: 1-877-857-3397",
  },

  {
    name: "Pay What Feels Fair",
    description:
      "We connect those who want affordable counseling to counselors who offer it.",
    logo: PayFair,
    background: "",
    tags: [
      "paid",
      "general",
      "depressionAnxiety",
      "substanceAbuse",
      "eatingDisorder",
      "lgbt",
      "less1Month",
      "low",
      "medium",
      "high",
      "appointment",
      "professional",
    ],
    phone: "604-351-4989",
    social: {
      twitter: "https://twitter.com/pwffBC",
      website: "https://kevinkokoska.com",
    },
    email: "kevinkokoska@gmail.com",
  },

  {
    name: "UBC Academic Advising",
    description:
      "Help with program planning, degree requirements, and other course-related questions.",
    logo: AcademicLogo,
    background: AcademicBG,
    tags: [
      "free",
      "academic",
      "less1Week",
      "low",
      "medium",
      "walkIn",
      "online",
      "appointment",
      "professional",
    ],
    social: {
      website:
        "https://students.ubc.ca/enrolment/academic-supports/academic-advising",
    },
    hours: {
      others:
        "For contact information, address, and hours please refer to your faculty website",
    },
  },
  {
    name: "Enrollment Services",
    description:
      "Get help with budgeting, loans, understanding UBC processes, financial planning.",
    logo: EnrollmentLogo,
    background: EnrollmentBG,
    tags: [
      "free",
      "financial",
      "sameDay",
      "low",
      "online",
      "walkIn",
      "professional",
    ],
    phone: "604-822-9836",
    social: {
      website:
        "https://students.ubc.ca/about-student-services/enrolment-services-advisors",
    },
    address:
      "Enrolment Services Advising Centre\nBrock Hall\n1874 East Mall\nVancouver, BC V6T 1Z1",
    hours: {
      monday: "9:30am-4:00pm",
      tuesday: "10:00am-4:00pm",
      wednesday: "9:30am-4:00pm",
      thursday: "9:30am-4:00pm",
      friday: "9:30am-4:00pm",
      saturday: "closed",
      sunday: "closed",
    },
    notes:
      "Enrolment Services will not be providing in-person services until further notice. Please contact Enrolment Services Advisors by email.",
  },
  {
    name: "CounsellingBC.com",
    description:
      "We provide individuals, couples, and families in BC with the counselling assistance via up-to-date information about resources that promote healing and recovery.",
    logo: CounsellingBC,
    background: "",
    tags: [
      "paid",
      "more100",
      "less1Month",
      "medium",
      "high",
      "appointment",
      "walkIn",
      "online",
      "professional",
      "medical",
    ],
    social: {
      website: "https://counsellingbc.com/",
      facebook: "https://www.facebook.com/CounsellingBC/",
      instagram: "https://www.instagram.com/counsellingbc/",
    },
  },
  {
    name: "HeadsUpGuys",
    description:
      "HeadsUpGuys is a resource for supporting men in their fight against depression by providing tips, tools, information about professional services, and stories of success.",
    logo: HeadsUpGuys,
    email: "info@headsupguys.org",
    tags: [
      "free",
      "depressionAnxiety",
      "immediate",
      "low",
      "medium",
      "online",
      "allday",
      "professional",
      "generalAwareness",
    ],
    social: {
      website: "https://headsupguys.org/",
      facebook: "https://www.facebook.com/HeadsUpGuys",
      twitter: "https://twitter.com/headsupguys",
      instagram: "https://www.instagram.com/headsupguys/",
    },
  },
  {
    name: "Anxiety Canada",
    description:
      "The association’s mission is to promote awareness of anxiety disorders and support access to proven resources and treatment.",
    logo: AnxietyCanada,
    background: "",
    tags: [
      "free",
      "depressionAnxiety",
      "immediate",
      "sameDay",
      "online",
      "professional",
      "medical",
    ],
    phone: "604-620-0744",
    social: {
      website: "https://anxietycanada.com/resources/find-help/",
      facebook: "https://www.facebook.com/AnxietyCanada/",
      instagram: "https://www.instagram.com/anxiety_canada/",
    },
    email: "info@anxietycanada.com",
    notes:
      "Please note that we do not have dedicated psychologists to answer your telephone calls and provide counselling. We also do not provide direct referrals to specific mental health providers and specialists.",
  },
  {
    name: "Kelty's Key",
    description:
      "Kelty's Key is a free and confidential online cognitive behavioral therapy service that can provide you with the support you need to feel better.",
    logo: KeltysKey,
    tags: [
      "free",
      "general",
      "depressionAnxiety",
      "substanceAbuse",
      "immediate",
      "low",
      "medium",
      "online",
      "allday",
      "professional",
    ],
    social: {
      website: "https://www.keltyskey.com/",
    },
  },
  {
    name: "BC Psychological Association",
    description:
      "Search through hundreds of mental health professionals to help address your specific concern.",
    logo: BCPA,
    tags: [
      "paid",
      "more100",
      "less1Month",
      "medium",
      "high",
      "appointment",
      "professional",
      "medical",
    ],
    phone: "604-730-0522",
    social: {
      website: " https://www.psychologists.bc.ca/find_psychologist",
      facebook: "https://www.facebook.com/bcpsychologists/",
    },
    notes:
      "604-730-0522 or 1-800-730-0522 are BCPA Referral Line, where you can find names and contact information for psychologists in your area. Please call between 9:30 AM and 4:30 PM.",
  },
  {
    name: "Foundry",
    description:
      "Foundry offers health and wellness resources, services and supports – online and through integrated service centres in eight communities across BC.",
    logo: Foundry,
    email: "webinfo@foundrybc.ca",
    tags: [
      "free",
      "general",
      "substanceAbuse",
      "sameDay",
      "low",
      "online",
      "walkIn",
      "professional",
    ],
    social: {
      website: "https://foundrybc.ca",
      facebook: "https://www.facebook.com/Foundrybc/",
      instagram: "https://www.instagram.com/foundry_bc/",
    },
    notes:
      "To find a Foundry centre near you, please visit the website for more information.",
  },
  {
    name: "Alcohol & Drug Information Referral Service (ADIRS)",
    description:
      "Free, confidential information and referral services to British Columbians in need of support with any kind of substance use issue.",
    logo: HealthLinkBC,
    tags: [
      "free",
      "substanceAbuse",
      "immediate",
      "low",
      "phone",
      "professional",
    ],
    phone: "604-660-9382",
    social: {
      website:
        "https://www.healthlinkbc.ca/mental-health-substance-use/resources/adirs",
    },
    notes:
      "Contact ADIRS toll-free at 1-800-663-1441, or in the lower mainland at 604-660-9382. Free, multilingual telephone assistance is available.",
  },
  {
    name: "UBC Athletes Hub",
    description:
      "We aim to increase awareness of mental health issues, reduce the stigma of help-seeking, and promote health and wellness among varsity athletes at UBC.",
    logo: UBCAthleteHub,
    email: "john.ogrodniczuk@ubc.ca",
    tags: [
      "free",
      "depressionAnxiety",
      "general",
      "immediate",
      "low",
      "medium",
      "online",
      "allday",
      "professional",
      "generalAwareness",
    ],
    social: {
      website: "https://ubcathleteshub.ca/",
    },
  },
  {
    name: "MindHealthBC",
    description:
      "A one stop shop that gathers the wealth of evidence based resources available in your community and combines them into one easy to use website.",
    logo: MindHealthBC,
    background: "",
    tags: [
      "free",
      "depressionAnxiety",
      "substanceAbuse",
      "eatingDisorder",
      "selfHarm",
      "suicidal",
      "general",
      "medium",
      "low",
      "online",
      "allday",
      "professional",
      "medical",
    ],
    social: {
      website: "http://www.mindhealthbc.ca/about-us",
      facebook: "https://www.facebook.com/mindhealthbc/",
      instagram: "https://www.instagram.com/mindhealthbc/",
    },
  },
  {
    name: "UBC Mental Health Literacy",
    description:
      "This online modular-based resource can be used as a self-guided course or in individual modules by those wishing to develop their mental health literacy.",
    logo: MHliteracy,
    background: "",
    tags: ["online", "generalAwareness", "allday", "free"],
    phone: "",
    social: {
      website: "https://www.teachmentalhealth.org/",
    },
    email: "tmentalhealth@gmail.com",
    notes: "Participation in this online course is FREE.",
  },
  {
    name: "HeretoHelp",
    description:
      "Find the information you need and explore strategies to manage mental health and substance use problems.",
    logo: HeretoHelp,
    background: "",
    tags: [
      "free",
      "depressionAnxiety",
      "substanceAbuse",
      "eatingDisorder",
      "womensHealth",
      "suicidal",
      "general",
      "immediate",
      "online",
      "allday",
      "generalAwareness",
      "professional",
    ],
    social: {
      website: "https://www.heretohelp.bc.ca/",
    },
    email: "bcpartners@heretohelp.bc.ca",
  },
  {
    name: "UBC Scarfe Free Counselling Clinic",
    description:
      "We offer help with stress-management (work, home, school stress), anxiety, depression, school and relationship issues.",
    logo: UBCScarfe,
    background: "",
    tags: [
      "free",
      "depressionAnxiety",
      "general",
      "less1Month",
      "medium",
      "appointment",
      "professional",
    ],
    social: {
      website:
        "https://ecps.educ.ubc.ca/counselling-centres/scarfe-free-counselling-clinic/",
    },
    phone: "604-827-1523",
    address: "6174 University Blvd - 3F\nVancouver, BC V6T 1Z4",
    notes:
      "Clinics run from September to April. Daytime and evening appointments available. Please note that all patients must complete a telephone intake prior to first visit.",
  },
  {
    name: "UBC Counsellor in Residence",
    description:
      "If you’re a student living in residence and you’re feeling persistently stressed, anxious, or sad, you can email us to make an appointment to see one of UBC’s Counsellors in Residence.",
    logo: UBCgeneral,
    background: "",
    tags: [
      "free",
      "depressionAnxiety",
      "general",
      "less1Week",
      "medium",
      "walkIn",
      "appointment",
      "professional",
    ],
    social: {
      website: "https://vancouver.housing.ubc.ca/counsellor-in-residence/",
    },
    email: "counsellor.residence@ubc.ca",
    notes:
      "Please include your full name, student number, class schedule and residence/building in your email.",
  },
  {
    name: "Henry Chen Counselling",
    description:
      "Henry Chen is a level 1 certified CBT (Cognitive Behavioural Therapy) practitioner. Please check the website for a list of counselling programs offered by Henry",
    logo: HenryChen,
    background: "",
    tags: [
      "free",
      "paid",
      "depressionAnxiety",
      "eatingDisorder",
      "less1Month",
      "high",
      "walkIn",
      "appointment",
      "professional",
    ],
    social: {
      website: "https://jcmed.ca/counselling/",
    },
    phone: "604-261-6000",
    address: "#360 - 650 West 41st Avenue \nVancouver,BC V5Z 2M9",
    notes: " UBC students are free of charge at Henry's clinic.",
  },
  {
    name: "UBC Hospital - Koerner Pavilion",
    description:
      "UBC Hospital offers specialized treatment for non-life-threatening emergencies and surgical care.",
    logo: UBCHospital,
    background: "",
    tags: [
      "paid",
      "general",
      "sameDay",
      "high",
      "walkIn",
      "professional",
      "medical",
    ],
    social: {
      website: "http://www.vch.ca/Locations-Services/result?res_id=991",
    },
    phone: "604-822-7121",
    address: "2211 Wesbrook Mall \n Vancouver,BC \n V6T 2B5",
    hours: {
      monday: "8:00am-10:00pm",
      tuesday: "8:00am-10:00pm",
      wednesday: "8:00am-10:00pm",
      thursday: "8:00am-10:00pm",
      friday: "8:00am-10:00pm",
      saturday: "8:00am-10:00pm",
      sunday: "8:00am-10:00pm",
    },
  },
  {
    name: "UBC Thrive",
    description:
      "Thrive is a mindset and a month-long series of events focused on helping everyone at UBC explore their path to mental health.",
    logo: UBCwellbeing,
    background: "",
    tags: ["free", "general", "low", "events", "generalAwareness"],
    social: {
      website:
        "https://wellbeing.ubc.ca/wellbeing-campaigns-and-initiatives/thrive",
    },
    address:
      "UBC Wellbeing Design Lab \n 2321 - 2260 West Mall \n Vancouver, BC V6T 1Z4",
    notes:
      "Be sure to check out the Thrive calendar for lots of great events and initiatives throughout November!",
  },
  {
    name: "UBC Body Banter",
    description:
      "Empower students to change the conversation about body image through self-reflection, open communication, and collaborative action.",
    logo: UBCBodyBanter,
    background: "",
    tags: [
      "free",
      "general",
      "less1Week",
      "less1Month",
      "low",
      "recurring",
      "walkIn",
      "peer",
    ],
    social: {
      website: "http://bodybanter.com/",
      facebook: "https://www.facebook.com/ubcbodybanter",
      instagram: "https://www.instagram.com/ubcbodybanter",
    },
    address: "IKB Room 193 \nVancouver, BC V6T 1Z1",
    hours: {
      others: "Weekly meetings are cancelled for the rest of the school year.",
    },
    //notes:"These meetings are ideal for students who struggle with body image related mental health issues. Everyone is welcome!"
  },
  {
    name: "Therapy Assistance Online (TAO)",
    description:
      "A digital platform of tools and educational materials that help you feel happier, healthier, and more productive in hard times",
    logo: TAOapp,
    background: "",
    tags: [
      "free",
      "general",
      "immediate",
      "low",
      "online",
      "allday",
      "generalAwareness",
    ],
    social: {
      website: "https://www.taoconnect.org/",
    },
    notes:
      "UBC students have FREE access to the tools if you sign up with your UBC email!",
  },
  {
    name: "Suicide Attempt Follow-up, Education & Research ",
    description:
      "S.A.F.E.R. is a free, time-limited counselling service offered at Mental Health and Substance Use Outpatient Services. Intake is through the Access and Assessment Centre.",
    logo: VCHLogo,
    background: "",
    tags: [
      "free",
      "general",
      "suicidal",
      "depressionAnxiety",
      "low",
      "medium",
      "high",
      "appointment",
      "walkIn",
      "phone",
      "professional",
    ],
    social: {
      website:
        "http://www.vch.ca/Pages/Suicide-Attempt-Follow-up,-Education---Research-SAFER.aspx",
    },
    phone: "604-675-3700",
    address: "803 West 12th Avenue \n Vancouver,BC \n V5Z 1N1",
    hours: {
      monday: "7:30am-11:00pm",
      tuesday: "7:30am-11:00pm",
      wednesday: "7:30am-11:00pm",
      thursday: "7:30am-11:00pm",
      friday: "7:30am-11:00pm",
      saturday: "7:30am-11:00pm",
      sunday: "7:30am-11:00pm",
    },
    notes:
      "Due to the COVID-19 pandemic, the service may be operating at reduced or adjusted hours. Please contact 604-675-3700 for further details.",
  },
];
