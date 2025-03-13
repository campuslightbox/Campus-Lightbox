import AMSPeerSupport from "./logos/ams2.png";
import AcademicBG from "./logos/AcademicBG.jpg";
import AcademicLogo from "./logos/Academic.png";
import AnxietyCanada from "./logos/Anxiety_Canada.png";
import BCPA from "./logos/BCPA.png";
import CentreForAccessibilityBG from "./logos/CentreForAccessibilityBG.jpg";
import CentreForAccessibilityLogo from "./logos/CentreForAccessibility.png";
import CounsellingBC from "./logos/counsellingbc.png";
import CrisisLogo from "./logos/Crisis.png";
import EnrollmentBG from "./logos/EnrollmentBG.jpg";
import EnrollmentLogo from "./logos/Enrollment.png";
import Foundry from "./logos/Foundry.png";
import HeadsUpGuys from "./logos/headsupguys.png";
import HealthLinkBC from "./logos/HealthLinkBC.png";
import HenryChen from "./logos/HenryChen.png";
import Here2Talk from "./logos/hereTalkLogo.png";
import HeretoHelp from "./logos/heretohelp.png";
import JackLogo from "./logos/Jack.png";
import KaleidoscopeLogo from "./logos/Kaleidoscope.png";
import KeltysKey from "./logos/keltyskey.png";
import MHACLogo from "./logos/MHAC.png";
import MHNLogo from "./logos/MHNLogo2.png";
import MeditationLogo from "./logos/Meditation.png";
import MindHealthBC from "./logos/MindHealthBC.png";
import NursesBG from "./logos/NursesBG.jpg";
import NursesLogo from "./logos/Nurses.png";
import PegasusLogo from "./logos/PegasusLogo.png";
import PrideLogo from "./logos/Pride.png";
import PsychologyClinicLogo from "./logos/PsychologyClinic.png";
import SASCLogo from "./logos/SASC.png";
import SHARELogo from "./logos/SHARE.png";
import SRCLogo from "./logos/SRC_circle3.png";
import SVPROLogo from "./logos/SVPRO.png";
import TAOapp from "./logos/TAOapp2.png";
import UBCAthleteHub from "./logos/UBCAthleteHub2.png";
import UBCCounsellingServiceBG from "./logos/UBCCounsellingServiceBG.jpg";
import UBCCounsellingServiceLogo from "./logos/UBCCounsellingService.png";
import UBCHospital from "./logos/UBCHospital.png";
import UBCScarfe from "./logos/ubcscarfe.jpg";
import UBCStudentHealthBG from "./logos/UBCStudentHealthBG.jpg";
import UBCStudentHealthLogo from "./logos/UBCStudentHealth.png";
import UBCgeneral from "./logos/UBClogo.png";
import UBCwellbeing from "./logos/UBCwellbeing.png";
import UMCABG from "./logos/UMCABG.jpg";
import UMCALogo from "./logos/UMCA.png";
import VCHLogo from "./logos/VCHlogo.jpg";
import VillageMedicalBG from "./logos/UBCVillageMedicalBG.jpg";
import VillageMedicalLogo from "./logos/UBCVillageMedical.png";
import WellnessCentreLogo from "./logos/WellnessCentre.png";
import WesbrookVillageMedicalBG from "./logos/WesbrookVillageMedicalBG.jpg";
import WesbrookVillageMedicalLogo from "./logos/WesbrookVillageMedical.png";
import WomenCentreLogo from "./logos/WomenCentre.png";
import SalalLogo from "./logos/Salal.png";
import YogaClubBG from "./logos/YogaClubBG.png";
/*
    ##last updated: May, 7, 2019##
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
import ZenLogo from "./logos/Zen.png";

const resources = [
  {
    name: "UBC Counselling Service",
    description:
      "Professional counselling for students feeling stressed, anxious, or sad.",
    logo: UBCCounsellingServiceLogo,
    background: UBCCounsellingServiceBG,
    tags: [
      "free",
      "free4UBC",
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
      monday: "8:30am-4:30pm",
      tuesday: "8:30am-4:30pm",
      wednesday: "8:30am-7:00pm",
      thursday: "8:30am-4:30pm",
      friday: "8:30am-4:30pm",
    },
    notes:
      "Counselling Services is offering virtual, phone (on weekdays from 8:00am to 4:30pm) and in-person appointments (as above) for initial and follow-up appointments. Note there is a second location (Counselling Services Annex)",
  },
    {
    name: "Access and Assessment Center (AAC) at VGH",
    description:
      "The AAC at Vancouver General Hospital serves City of Vancouver adult residents (17+) who are experiencing or identifying concerns related to Mental Health, Substance Use and/or Addictions with professional care.",
    logo: VCHLogo,
    background: "",
    tags: [
      "free",
      "free4UBC",
      "depressionAnxiety",
      "substanceAbuse",
      "selfHarm",
      "suicidal",
      "general",
      "immediate",
      "medium",
      "high",
      "walkIn",
      "professional",
      "medical",
    ],
    phone: "604-675-3700",
    social: {
      website: "http://www.vch.ca/locations-services/result?res_id=1186",
    },
    address: "803 West 12th Avenue\nLevel 1 East Entrance\nVancouver, BC V5Z 1N1",
    hours: {
      others: "Call between 7:30am-10pm.\nWalk in between 7:30am-9:30pm, 7 days a week. Phone assistance is available daily."
    },
    notes:
      "Eligible adults can self-refer to the AAC by calling or walking into the clinic. Families and friends concerned about a loved one can call the AAC to provide information.",
  },
  {
    name: "Pegasus Integrative Health",
    description: "Integrative health & wellness services including clinical counselling. 5 clinical counsellors who speak English, Punjabi, Cantonese, Mandarin, Hindi, Urdu. Accept student health insurance/benefits and some counsellors offer sliding scale rates as well. \nSee students experiencing emotional distress, interpersonal relationships issues, mental health issues, adjustment issues, etc.",
    logo: PegasusLogo,
    background: "",
    tags: [
      "paid",
      "depressionAnxiety",
      "general",
      "low",
      "medium",
      "walkIn",
      "professional",
      "medical",
      "appointment",
      "two3Days",
      "less1Week",
      "less1Month",
    ],
    phone: "604-232-8888",
    social: {
      website: "https://www.pegasusintegratedhealth.ca/",
      facebook: "https://www.facebook.com/people/Pegasus-Integrated-Health/100084661956008/",
      instagram: "https://www.instagram.com/pegasusintegratedhealth/",
    },
    address: "315 - 8171 Cook Rd, \nRichmond, BC V6Y 3T8",
    notes:
      "Offer 20% off for current UBC students.",
  },
  {
    name: "UBC Yoga Club",
    description:
      "A student-run club that provides affordable and accessible yoga to the UBC and greater Vancouver community to support mental and physical health",
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
    email: "president.ubcyogaclub@gmail.com",
    address: "AMS Student Nest\n6133 University Blvd\nVancouver, BC V6T 1Z1",
    /*hours: {
      others: "Classes cancelled for the rest of the school year.",
    },*/
  },
  {
    name: "University Multifaith Chaplains Association",
    description:
      "One-on-one pastoral/spiritual counselling and opportunities to engage in and explore the faith traditions chaplains represent (Buddhist, Muslim, Jewish, Christian, etc.)",
    logo: UMCALogo,
    background: UMCABG,
    tags: [
      "free",
      "free4UBC",
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
    email: "pastorcraigobrien@gmail.com",
    address:
      "University Multifaith Chaplains Association\nUBC Life Building 1303\n6138 Student Union Blvd\nVancouver, BC V6T 1Z1",
  },
  {
    name: "UBC Student Health Services",
    description:
      "A wide range of health assessments and treatments provided by doctors, nurses, and specialists for students by phone, video or in-person. ",
    logo: UBCStudentHealthLogo,
    background: UBCStudentHealthBG,
    tags: [
      "free4UBC",
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
      "Student Health Services\nUBC Hospital Room S267\n2211 Wesbrook Mall\nVancouver, BC V6T 2B5",
    hours: {
      monday: "8:00am-4:00pm",
      tuesday: "8:00am-4:00pm",
      wednesday: "8:00am-8:00pm",
      thursday: "9:00am-4:00pm",
      friday: "8:00am-4:00pm",
      saturday: "Closed",
    },
    notes:
      "Make an in-person, virtual/video or phone appointment through the online form found through the website. Can call in for procedures, nursing or urgent concerns. Other locations include Orchard Commons (West Mall and Agronomy Road)",
  },
  {
    name: "Centre for Accessibility",
    description:
      "Facilitates accommodations and programs to remove barriers for students with disabilities and medical conditions.",
    logo: CentreForAccessibilityLogo,
    background: CentreForAccessibilityBG,
    tags: [
      "free4UBC",
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
    address: "Brock Commons South\nRoom 3110\n6180 Walter Gage Road\nVancouver, BC V6T 1Z1",
    hours: {
      monday: "8:30am-4:30pm",
      tuesday: "8:30am-5:00pm",
      wednesday: "8:30am-4:30pm",
      thursday: "8:30am-4:00pm",
      friday: "8:30am-4:30pm",
      saturday: "Closed",
      sunday: "Closed",
    },
  },
  {
    name: "University Village Medical & Dental Clinic - UBC Village",
    description:
      "Walk-in medical clinic located on Allison Road in UBC Village.",
    logo: VillageMedicalLogo,
    background: VillageMedicalBG,
    tags: [
      "free4UBC",
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
      monday: "8:00am-5:00pm",
      tuesday: "8:00am-5:00pm",
      wednesday: "8:00am-5:00pm",
      thursday: "8:00am-5:00pm",
      friday: "8:00am-5:00pm",
      saturday: "Closed",
      sunday: "Closed",
    },
  },
  {
    name: "University Village Medical Clinic - Wesbrook Village",
    description:
      "Walk-in medical clinic located on Birney Avenue in Wesbrook Village.",
    logo: WesbrookVillageMedicalLogo,
    background: WesbrookVillageMedicalBG,
    tags: [
      "free4UBC",
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
      monday: "8:00am-5:00pm",
      tuesday: "8:00am-5:00pm",
      wednesday: "8:00am-5:00pm",
      thursday: "8:00am-5:00pm",
      friday: "8:00am-5:00pm",
      saturday: "Closed",
      sunday: "Closed",
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
      "free4UBC",
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
      monday: "3:00pm-6:00pm (G)",
      tuesday: "12:00pm-2:00pm (F), 3:00pm-6:00pm (V)",
      wednesday: "12:00pm-2:00pm (L), 3:00pm-6:00pm (Totem)",
      thursday: "3:00pm-6:00pm (O)",
      friday: "Closed",
      saturday: "Closed",
      sunday: "Closed",
    },
    notes:
      "Nurse on Campus service in Gage (G), Vanier (V), Totem (T), First Nations House of Learning (F), and in the Wellness Centre at the UBC Life Building (L).",
  },
  {
    name: "UBC Psychology Clinic",
    description:
      "The UBC Psychology Clinic offers professional outpatient psychological services mostly in the form of individual therapy. Group treatment may be offered depending on need.",
    logo: PsychologyClinicLogo,
    background: "",
    tags: ["low", "walkIn", "appointment", "professional"],
    phone: "604-822-3005",
    social: {
      website: "https://clinic.psych.ubc.ca/",
    },
    email: "clinic@psych.ubc.ca",
    address: "Douglas T. Kenny Building\n2136 West Mall\nVancouver, BC V6T 1Z4",
    notes:
      "Assessment and treatment services offered every weekday between September and April and may be offered on a limited basis from May to August.",
  },
  {
    name: "Wellness Centre",
    description:
      "A peer-hosted space that offers many wellbeing programs for students.",
    logo: WellnessCentreLogo,
    background: "",
    tags: [
      "free",
      "free4UBC",
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
      monday: "11:00am-4:00pm",
      tuesday: "11:00am-4:00pm",
      wednesday: "11:00am-4:00pm",
      thursday: "11:00am-4:00pm",
      friday: "11:00am-4:00pm",
    },
    notes:
      "In-person drop-in services are available.  You can also submit a question online and receive an email response within 3 to 5 business days.",
  },
  {
    name: "Wellness Workshops",
    description:
      "You can request a workshop for a group of students, staff, and/or faculty members. Choose from the workshop topics on the website.",
    logo: WellnessCentreLogo,
    background: "",
    tags: [
      "free",
      "free4UBC",
      "general",
      "less1Month",
      "low",
      "events",
      "generalAwareness",
    ],
    phone: "604-822-8450",
    social: {
      website:
        "https://students.ubc.ca/health/wellness-centre/wellbeing-training-education/",
    },
    email: "wellness.centre@ubc.ca",
    address:
      "Wellness Centre\nUBC Life Building\nRoom 1400\n6138 Student Union Blvd\nVancouver, BC V6T 1Z3",
  },
  {
    name: "AMS Peer Support",
    description:
      "Peer Support provides free, confidential, one-on-one  and group-style peer support (booked through the website) for UBC students and staff facing a wide variety of challenges. Peer Support also provides educational workshops on mental health and harm reduction for UBC student groups and community members free of charge.",
    logo: AMSPeerSupport,
    background: "",
    tags: [
      "free",
      "free4UBC",
      "academic",
      "substanceAbuse",
      "lgbt",
      "depressionAnxiety",
      "general",
      "less1Week",
      "less1Month",
      "low",
      "medium",
      "online",
      "peer",
    ],
    social: {
      website: "https://www.ams.ubc.ca/student-services/peer-support/",
      instagram: "https://www.instagram.com/ams_student_services/",
    },
    email: "peersupport@ams.ubc.ca",
  },
  {
    name: "AMS Sexual Assault Support Centre (SASC)",
    description:
      "Free and confidential emotional and crisis support, hospital, legal, and police accompaniment, education, and empowerment to people of all genders who are survivors of sexualized violence as well as their friends and family.",
    logo: SASCLogo,
    background: "",
    tags: [
      "free",
      "free4UBC",
      "sexualHealthAssault",
      "appointment",
      "walkIn",
      "professional",
    ],
    phone: "604-827-5180",
    social: {
      website: "https://amssasc.ca/",
      facebook: "https://www.facebook.com/AMSSASCUBC/",
      instagram: "https://www.facebook.com/AMSSASCUBC/",
    },
    email: "sasc@ams.ubc.ca",
    address: "UBC AMS Nest\nRoom 3130",
    hours: {
      monday: "9:00am-9:00pm",
      tuesday: "9:00am-9:00pm",
      wednesday: "9:00am-9:00pm",
      thursday: "9:00am-9:00pm",
      friday: "9:00am-9:00pm",
      saturday: "11:00am-7:00pm",
      sunday: "11:00am-7:00pm",
    },
    notes:
      "To schedule a session with a support worker at the SASC, you can phone the support line above. SASC now provides support over Signal (a free and end-to-end encrypted messaging app) at 604-729-5476.",
  },
  {
    name: "AMS The Pride Collective",
    description:
      "Support, guidance, and information for people who identify as LGBTQ+. Provides folks with assistance in coming out and more.",
    logo: PrideLogo,
    background: "",
    tags: ["free", "free4UBC", "lgbt", "walkIn", "recurring", "peer"],
    social: {
      website: "https://www.prideubc.com/",
      instagram: "https://www.instagram.com/prideubc/?hl=en",
    },
    email: "prideubc@gmail.com",
    address: "UBC AMS Nest\nRoom 2103",
  },
  {
    name: "Women’s Center",
    description:
      "Support and resources for women on campus, including informational brochures, menstrual products, safer sex products, pregnancy tests, and more.",
    logo: WomenCentreLogo,
    background: "",
    tags: [
      "free",
      "free4UBC",
      "womensHealth",
      "sameDay",
      "low",
      "walkIn",
      "generalAwareness",
    ],
    social: {
      website: "https://womenscentre.ams.ubc.ca/",
      facebook: "https://www.facebook.com/ubcwomenscentre/",
      instagram: "https://www.instagram.com/ubcwomenscentre/",
    },
    email: "ubcwomenscentre@gmail.com",
    address: "UBC AMS Nest\nRoom 2114",
  },
  {
    name: "The Kaleidoscope",
    description:
      "The Kaleidoscope provides a safe, confidential, and stigma-free support group for all individuals who have experienced mental health concerns/difficulties.",
    logo: KaleidoscopeLogo,
    background: "",
    tags: [
      "free",
      "free4UBC",
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
    },
    address: "Time and location varies by term",
    hours: {
      others:
        "Meetings are moving online! Check our webiste and Facebook page for more details. Use the contact form on their webpage to get in touch with Kaleidoscope.",
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
      "free4UBC",
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
      website: "https://blogs.ubc.ca/canshare/about/",
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
      "free4UBC",
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
    address: "6180 Walter Gage Road\nRoom 2110 \nVancouver, BC V6T 1Z1",
    hours: {
      monday: "8:30am-4:30pm",
      tuesday: "8:30am-4:30pm",
      wednesday: "8:30am-4:30pm",
      thursday: "8:30am-4:30pm",
      friday: "8:30am-4:30pm",
      saturday: "Closed",
      sunday: "Closed",
    },
  },
  {
    name: "Student Recovery Community at UBC",
    description:
      "Community of students in recovery or pursuing recovery from drugs, alcohol, and addictive behaviour. We recognize and support multiple pathways of recovery!",
    logo: SRCLogo,
    background: "",
    tags: [
      "free",
      "free4UBC",
      "substanceAbuse",
      "low",
      "medium",
      "less1Week",
      "less1Month",
      "walkIn",
      "peer",
    ],
    social: {
      website: "https://students.ubc.ca/health/ubc-student-recovery-community/",
      facebook: "https://www.facebook.com/RecoveryUBC/",
      instagram: "https://www.instagram.com/recovery_ubc/",
    },
    email: "src.recovery@ubc.ca",
  },
  {
    name: "UBC Mental Health Network",
    description:
      "We work to facilitate cross-collaboration and deliver mental health and wellness workshops across campus as well as in the lower mainland.",
    logo: MHNLogo,
    background: "",
    tags: [
      "free",
      "free4UBC",
      "general",
      "less1Week",
      "low",
      "events",
      "peer",
      "generalAwareness",
    ],
    social: {
      facebook: "https://www.facebook.com/ubcmhn/",
      twitter: "https://www.twitter.com/ubcmhn",
      instagram: "https://www.instagram.com/ubcmhn",
    },
    email: "info.ubcmhn@gmail.com ",
  },
  {
    name: "Mental Health Awareness Club",
    description:
      "Raises awareness for mental health and eliminates stigma by hosting events and writing blog posts with perspectives on mental health.",
    logo: MHACLogo,
    background: "",
    tags: [
      "free",
      "free4UBC",
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
      instagram: "https://www.instagram.com/ubcmhac/"
    },
    email: "ubcmhac@gmail.com",
    address: "6133 University Blvd\nVancouver, BC V6T1Z1",
  },
  {
    name: "UBC Jack Chapter",
    description:
      "Part of a national network of students working to shift negative attitudes, beliefs, and behaviours around mental health.",
    logo: JackLogo,
    background: "",
    tags: [
      "free",
      "free4UBC",
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
      instagram: "https://www.instagram.com/jack.orgubc/",
    },
    email: "ubcjackchapater@gmail.com",
  },
  {
    name: "Zen at UBC",
    description:
      "Zen meditation practice on campus. One-on-one/Individual advice & counsel on Zen Buddhist meditation and awakening to life.",
    logo: ZenLogo,
    background: "",
    tags: [
      "free",
      "free4UBC",
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
    email: "gareth.ubczen@gmail.com",
    hours: {
      others:
        "Zen Meditation sessions run in UBC Life Building (Room 2214) on Monday and Thursdays from 5:00pm - 6:00pm.",
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
      "free4UBC",
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
    phone: "310-6789",
    social: {
      website: "https://crisiscentre.bc.ca/",
    },
    hours: {
      others: "24/7, 365 days a year. You can call or text the National Suicide Crisis Helpline at 9-8-8.",
    },
  },
  {
    name: "Salal Sexual Violence Support Centre",
    description:
      "Support services for survivors of sexualized violence or gender marginalization: cis and trans women, Two-Spirit, trans and/or non-binary people.",
    logo: SalalLogo,
    background: "",
    tags: [
      "free",
      "free4UBC",
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
    phone: "604-255-6344",
    social: {
      website: "https://www.wavaw.ca/",
    },
    email: "admin@salalsvsc.ca",
    address: "2405 Pine Street\nP.O. Box 46851\nVancouver, BC V6J 5M4",
    hours: {
      others: "24/7",
    },
    notes: "24-hour crisis and information line is 604-255-6344 in BC and 1-877-392-7583 for the national toll-free line. Virtual (https://www.salalsvsc.ca/connect-chat/), phone, and in-person services available.",
  },
  {
    name: "Here2Talk",
    description:
      "Here2Talk offers free, 24/7 single-session, counselling by phone or online chat for all UBC students, no matter where you are in the world.",
    logo: Here2Talk,
    background: "",
    tags: [
      "free4UBC",
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
    name: "UBC Academic Advising",
    description:
      "Help with course planning, degree/graduation requirements, academic concession and credit tranfers.",
    logo: AcademicLogo,
    background: AcademicBG,
    tags: [
      "free",
      "free4UBC",
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
        "“For contact information, address, and hours, please refer to your faculty website. It can be found through the Academic Advising page linked above.",
    },
  },
  {
    name: "Enrollment Services",
    description:
      "Get help with loans, scholarships, tuition payment, understanding UBC processes and financial planning.",
    logo: EnrollmentLogo,
    background: EnrollmentBG,
    tags: [
      "free",
      "free4UBC",
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
      "Enrollment Services Advising Centre\nBrock Hall\n1874 East Mall\nVancouver, BC V6T 1Z1",
    hours: {
      monday: "9:30am-4:00pm",
      tuesday: "10:00am-4:00pm",
      wednesday: "9:30am-4:00pm",
      thursday: "9:30am-4:00pm",
      friday: "9:30am-4:00pm",
      saturday: "Closed",
      sunday: "Closed",
    },
  },
  {
    name: "CounsellingBC.com",
    description:
      "An online resource where you can find information regarding counselling, psychological services, art therapy and psychotherapy provided in British Columbia and professionals who can deliver such services.",
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
      "free4UBC",
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
      "free4UBC",
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
      "Kelty's Key is a free and confidential online cognitive behavioral therapy service that can provide you with the tailored or self-guided support that best suits your needs.",
    logo: KeltysKey,
    tags: [
      "free",
      "free4UBC",
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
    phone: "604-730-0501",
    social: {
      website: " https://psychologists.bc.ca/find-psychologist",
    },
    notes:
      "Please note the number above is for membership related purposes. Use the website above to access a directory of psychologists in British Columbia.",
  },
  {
    name: "Foundry",
    description:
      "Foundry offers health and wellness resources, services and supports – online and through integrated service centres for youth aged 12-24 in seventeen communities across BC",
    logo: Foundry,
    email: "webinfo@foundrybc.ca",
    tags: [
      "free",
      "free4UBC",
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
      "Free, confidential, multilingual information and referral regarding community resources for people in BC in need of any kind of substance use and addiction issues.",
    logo: HealthLinkBC,
    tags: [
      "free",
      "free4UBC",
      "substanceAbuse",
      "immediate",
      "low",
      "phone",
      "professional",
    ],
    phone: "604-660-9382",
    social: {
      website:
        "https://bc.211.ca/result/the-alcohol-and-drug-information-and-referral-service-adirs-9505601/",
    },
    email: "211-help@uwbc.ca",
    notes:
      "Contact ADIRS toll-free at 1-800-663-1441, or in the lower mainland at 604-660-9382. Free, multilingual telephone assistance is available 365 days a year",
  },
  {
    name: "UBC Athletes Hub",
    description:
      "We aim to increase awareness of mental health issues, reduce the stigma of help-seeking, and promote health and wellness among varsity athletes at UBC.",
    logo: UBCAthleteHub,
    email: "john.ogrodniczuk@ubc.ca",
    tags: [
      "free",
      "free4UBC",
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
      "A one stop shop developed by Vancouver Coastal Health and Providence Health that gathers the wealth of evidence based resources available in your community and combines them into one easy to use website.",
    logo: MindHealthBC,
    background: "",
    tags: [
      "free",
      "free4UBC",
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
    name: "HeretoHelp",
    description:
      "Find the information you need and explore strategies to better manage mental health and substance use challenges.",
    logo: HeretoHelp,
    background: "",
    tags: [
      "free",
      "free4UBC",
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
      "Counselling services offered by UBC Counselling Psychology Master’s and Doctoral students to support with stress-management (work, home, school stress), anxiety, depression, school or relationship issues.",
    logo: UBCScarfe,
    background: "",
    tags: [
      "paid",
      "depressionAnxiety",
      "general",
      "less1Month",
      "medium",
      "appointment",
      "professional",
    ],
    social: {
      website:
        "https://psctc.educ.ubc.ca/",
    },
    phone: "604-822-1364",
    email: "psctc.reception@ubc.ca",
    address: "Neville Scarfe Education Building\n1100-2125 Main Mall\nVancouver, BC V6T 1Z4",
    notes:
      "Clinics run from September to April with sessions offered primarily in person but with some opportunities for online counselling using Zoom/OWL. Contact office by phone to be added to the waitlist. All patients must complete a telephone intake prior to first visit.",
  },
  {
    name: "UBC Counsellor in Residence",
    description:
      "If you’re a student living in residence and you’re feeling persistently stressed, anxious, or sad, you can make an appointment to see one of UBC’s Counsellors in Residence.",
    logo: UBCgeneral,
    background: "",
    tags: [
      "free",
      "free4UBC",
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
      "Use the online booking form available on the website to make an appointment.",
  },
  {
    name: "Henry Chen Counselling",
    description:
      "Henry Chen is a level 1 certified CBT (Cognitive Behavioural Therapy) practitioner. Please check the website for a list of counselling programs offered by Henry",
    logo: HenryChen,
    background: "",
    tags: [
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
      website: "https://jcmed.ca/henrychen/",
    },
    phone: "604-261-6000",
    email: "office@jcmed.ca",
    address: "#360 - 650 West 41st Avenue \nVancouver,BC V5Z 2M9",
    notes:
      "UServices available in English, Mandarin and Taiwanese (Hokkien).",
  },
  {
    name: "UBC Hospital",
    description:
      "UBC Hospital offers specialized treatment for non-life-threatening, life-threatening emergencies and surgical care.",
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
      monday: "8:00am-8:00pm",
      tuesday: "8:00am-8:00pm",
      wednesday: "8:00am-8:00pm",
      thursday: "8:00am-8:00pm",
      friday: "8:00am-8:00pm",
      saturday: "8:00am-8:00pm",
      sunday: "8:00am-8:00pm",
    },
  },
  {
    name: "UBC Thrive",
    description:
      "Thrive is a campaign dedicated to shining a spotlight ton the incredible resources, groups, and departments at UBC that work year-round to support mental health and wellbeing for the UBC community.",
    logo: UBCwellbeing,
    background: "",
    tags: ["free", "free4UBC", "general", "low", "events", "generalAwareness"],
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
    name: "Therapy Assistance Online (TAO)",
    description:
      "A digital platform of tools and educational materials that help you feel happier, healthier, and more productive in hard times",
    logo: TAOapp,
    background: "",
    tags: [
      "free4UBC",
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
      "S.A.F.E.R. is a free, time-limited counselling service for individuals aged 19+ who have made a suicide attempt, are currently suicidal or have suicidal ideation.",
    logo: VCHLogo,
    background: "",
    tags: [
      "free",
      "free4UBC",
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
    address: "899 West 12th Avenue \n Vancouver,BC \n V5Z 1N1",
    /*hours: {
      monday: "7:30am-11:00pm",
      tuesday: "7:30am-11:00pm",
      wednesday: "7:30am-11:00pm",
      thursday: "7:30am-11:00pm",
      friday: "7:30am-11:00pm",
      saturday: "7:30am-11:00pm",
      sunday: "7:30am-11:00pm",
    },*/
    notes:
      "This service is offered at the Mental Health and Substance Use Outpatient Services at VGH. Intake is through the Access and Assessment Centre.",
  },
];

export default resources;
