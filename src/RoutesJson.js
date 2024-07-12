import WelcomeText from "./publicView/Components/WelcomeText";
import DynamicComponent from "./publicView/DynamicComponent";
// import { PDFjson } from "./publicView/JsonFiles/PDFjson";
import { TableJson } from "./publicView/JsonFiles/TableJson";
import About from "./publicView/Pages/About";
import ActionPlanRiverStretches from "./publicView/Pages/ActionPlanRiverStretches";
import ContactUs from "./publicView/Pages/ContactUs";
import PhotoGallery from "./publicView/Pages/Photogallery";
import PublicHearing from "./publicView/Pages/PublicHearing";
import RelatedLinks from "./publicView/Pages/RelatedLinks";
import Pdf_ListContainer from "./publicView/Pdf_ListContainer";
import TableContent from "./publicView/TableContent";
import Enquiry from "./publicView/Enquiry";
import Complain from "./publicView/Complain";
import Events from "./publicView/Pages/Events";
import EventGallery from "./publicView/Pages/EventGallery";

export const RoutesJson = [
  {
    id: 1,
    name: "Home",
    path: "/",
    hasSubItem: false,
    parent_id: null,
    component: WelcomeText,
    componentProps: { parentMenu: null, currentMenu: "Home" },
  },
  {
    id: 2,
    name: "About Us",
    path: "/about-us",
    hasSubItem: true,
    parent_id: null,
    component: About,
    componentProps: { parentMenu: null, currentMenu: "About Us" },
  },
  {
    id: 3,
    name: "Constitution of Board",
    path: "/about-us/constitution-of-board",
    hasSubItem: false,
    parent_id: 2,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "About Us",
      currentMenu: "Constitution of Board",
    },
  },
  {
    id: 4,
    name: "Duties & Function of Board",
    path: "/about-us/duties-function-of-board",
    hasSubItem: false,
    parent_id: 2,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "About Us",
      currentMenu: "Duties & Function of Board",
    },
  },
  {
    id: 5,
    name: "Board Members",
    path: "/about-us/board-members",
    hasSubItem: false,
    parent_id: 2,
    component: DynamicComponent,
    componentProps: { parentMenu: "About Us", currentMenu: "Board Members" },
  },
  {
    id: 6,
    name: "Board Offices",
    path: "/about-us/board-offices",
    hasSubItem: false,
    parent_id: 2,
    component: DynamicComponent,
    componentProps: { parentMenu: "About Us", currentMenu: "Board Offices" },
  },
  {
    id: 7,
    name: "Employee",
    path: "/about-us/employee",
    hasSubItem: false,
    parent_id: 2,
    component: DynamicComponent,
    componentProps: { parentMenu: "About Us", currentMenu: "Employee" },
  },
  {
    id: 8,
    name: "Organizational Structure",
    path: "/about-us/organizational-structure",
    hasSubItem: false,
    parent_id: 2,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "About Us",
      currentMenu: "Organizational Structure",
    },
  },
  {
    id: 9,
    name: "Messages",
    path: "/about-us/messages",
    hasSubItem: true,
    parent_id: 2,
    component: DynamicComponent,
    componentProps: { parentMenu: "About Us", currentMenu: "Messages" },
  },
  {
    id: 10,
    name: "Message from Chairman",
    path: "/about-us/messages/message-from-chairman",
    hasSubItem: false,
    parent_id: 9,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "About Us/Messages",
      currentMenu: "Message from Chairman",
    },
  },
  {
    id: 11,
    name: "Message from Member Secretary",
    path: "/about-us/messages/message-from-member-secretary",
    hasSubItem: false,
    parent_id: 9,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "About Us/Messages",
      currentMenu: "Message from Member Secretary",
    },
  },
  {
    id: 12,
    name: "Environmental Data Bank",
    path: "/environmental-data-bank",
    hasSubItem: true,
    parent_id: null,
    component: DynamicComponent,
    componentProps: {
      parentMenu: null,
      currentMenu: "Environmental Data Bank",
    },
  },
  {
    id: 13,
    name: "Air Data",
    path: "/environmental-data-bank/air-data",
    hasSubItem: true,
    parent_id: 12,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Environmental Data Bank",
      currentMenu: "Air Data",
    },
  },
  {
    id: 14,
    name: "AQI Data",
    path: "/environmental-data-bank/air-data/aqi-data",
    hasSubItem: false,
    parent_id: 13,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Environmental Data Bank/Air Data",
      currentMenu: "AQI Data",
    },
  },
  {
    id: 15,
    name: "Ambient Air Quality Data",
    path: "/environmental-data-bank/air-data/ambient-air-quality-data",
    hasSubItem: false,
    parent_id: 13,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Environmental Data Bank/Air Data",
      currentMenu: "Ambient Air Quality Data",
    },
  },
  {
    id: 16,
    name: "Water Data",
    path: "/environmental-data-bank/water-data",
    hasSubItem: false,
    parent_id: 12,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Environmental Data Bank",
      currentMenu: "Water Data",
    },
  },
  {
    id: 17,
    name: "Noise Data",
    path: "/environmental-data-bank/noise-data",
    hasSubItem: false,
    parent_id: 12,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Environmental Data Bank",
      currentMenu: "Noise Data",
    },
  },
  {
    id: 18,
    name: "STP Data",
    path: "/environmental-data-bank/stp-data",
    hasSubItem: false,
    parent_id: 12,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Environmental Data Bank",
      currentMenu: "STP Data",
    },
  },
  {
    id: 19,
    name: "Ground Water",
    path: "/environmental-data-bank/ground-water",
    hasSubItem: false,
    parent_id: 12,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Environmental Data Bank",
      currentMenu: "Ground Water",
    },
  },
  {
    id: 20,
    name: "Diwali Monitoring Report",
    path: "/environmental-data-bank/diwali-monitoring-report",
    hasSubItem: false,
    parent_id: 12,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Environmental Data Bank",
      currentMenu: "Diwali Monitoring Report",
    },
  },
  {
    id: 21,
    name: "CETP",
    path: "/environmental-data-bank/cetp",
    hasSubItem: false,
    parent_id: 12,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Environmental Data Bank",
      currentMenu: "CETP",
    },
  },
  {
    id: 22,
    name: "Board Meetings",
    path: "/board-meetings",
    hasSubItem: true,
    parent_id: null,
    component: DynamicComponent,
    componentProps: { parentMenu: null, currentMenu: "Board Meetings" },
  },
  {
    id: 23,
    name: "Minutes",
    path: "/board-meetings/minutes",
    hasSubItem: false,
    parent_id: 22,
    component: DynamicComponent,
    componentProps: { parentMenu: "Board Meetings", currentMenu: "Minutes" },
  },
  {
    id: 24,
    name: "Orders",
    path: "/board-meetings/orders",
    hasSubItem: false,
    parent_id: 22,
    component: DynamicComponent,
    componentProps: { parentMenu: "Board Meetings", currentMenu: "Orders" },
  },
  {
    id: 25,
    name: "Court Cases | Directions",
    path: "/court-cases-directions",
    hasSubItem: true,
    parent_id: null,
    component: DynamicComponent,
    componentProps: {
      parentMenu: null,
      currentMenu: "Court Cases | Directions",
    },
  },
  {
    id: 26,
    name: "Court Cases",
    path: "/court-cases-directions/court-cases",
    hasSubItem: true,
    parent_id: 25,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Court Cases | Directions",
      currentMenu: "Court Cases",
    },
  },
  {
    id: 27,
    name: "Supreme Court",
    path: "/court-cases-directions/court-cases/supreme-court-cases",
    hasSubItem: false,
    parent_id: 26,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Court Cases | Directions/Court Cases",
      currentMenu: "Supreme Court",
    },
  },
  {
    id: 28,
    name: "High Court",
    path: "/court-cases-directions/court-cases/high-court-cases",
    hasSubItem: false,
    parent_id: 26,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Court Cases | Directions/Court Cases",
      currentMenu: "High Court",
    },
  },
  {
    id: 29,
    name: "NGT Cases",
    path: "/court-cases-directions/court-cases/ngt-cases",
    hasSubItem: false,
    parent_id: 26,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Court Cases | Directions/Court Cases",
      currentMenu: "NGT Cases",
    },
  },
  {
    id: 30,
    name: "Compliance Case",
    path: "/court-cases-directions/court-cases/compliance-case",
    hasSubItem: false,
    parent_id: 26,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Court Cases | Directions/Court Cases",
      currentMenu: "Compliance Case",
    },
  },
  {
    id: 31,
    name: "Designated Court",
    path: "/court-cases-directions/court-cases/designated-court",
    hasSubItem: false,
    parent_id: 26,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Court Cases | Directions/Court Cases",
      currentMenu: "Designated Court",
    },
  },
  {
    id: 32,
    name: "Action Taken Report by PCB’s",
    path: "/court-cases-directions/court-cases/action-taken-report-pcbs",
    hasSubItem: false,
    parent_id: 26,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Court Cases | Directions/Court Cases",
      currentMenu: "Action Taken Report by PCB’s",
    },
  },
  {
    id: 33,
    name: "Directions",
    path: "/court-cases-directions/directions",
    hasSubItem: true,
    parent_id: 25,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Court Cases | Directions",
      currentMenu: "Directions",
    },
  },
  {
    id: 34,
    name: "Issued by CPCB",
    path: "/court-cases-directions/directions/issued-cpcb",
    hasSubItem: false,
    parent_id: 33,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Court Cases | Directions/Directions",
      currentMenu: "Issued by CPCB",
    },
  },
  {
    id: 35,
    name: "Issued by SPCB",
    path: "/court-cases-directions/directions/issued-spcb",
    hasSubItem: false,
    parent_id: 33,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Court Cases | Directions/Directions",
      currentMenu: "Issued by SPCB",
    },
  },
  {
    id: 36,
    name: "To Authorities",
    path: "/court-cases-directions/directions/to-authorities",
    hasSubItem: false,
    parent_id: 33,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Court Cases | Directions/Directions",
      currentMenu: "To Authorities",
    },
  },
  {
    id: 37,
    name: "Compliances | Corrective Measures",
    path: "/court-cases-directions/directions/compliances-corrective-measures",
    hasSubItem: false,
    parent_id: 25,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Court Cases | Directions/Directions",
      currentMenu: "Compliances | Corrective Measures",
    },
  },
  {
    id: 38,
    name: "Show Cause Notices",
    path: "/court-cases-directions/directions/show-cause-notices",
    hasSubItem: false,
    parent_id: 25,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Court Cases | Directions/Directions",
      currentMenu: "Show Cause Notices",
    },
  },
  {
    id: 39,
    name: "For Environment Clearance",
    path: "/court-cases-directions/directions/for-environment-clearance",
    hasSubItem: false,
    parent_id: 25,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Court Cases | Directions/Directions",
      currentMenu: "For Environment Clearance",
    },
  },
  {
    id: 40,
    name: "Closure",
    path: "/court-cases-directions/directions/closure",
    hasSubItem: false,
    parent_id: 25,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Court Cases | Directions/Directions",
      currentMenu: "Closure",
    },
  },
  {
    id: 41,
    name: "Consent Management",
    path: "/consent-management",
    hasSubItem: true,
    parent_id: null,
    component: DynamicComponent,
    componentProps: { parentMenu: null, currentMenu: "Consent Management" },
  },
  {
    id: 42,
    name: "Consent Status",
    path: "/consent-management/consent-status",
    hasSubItem: false,
    parent_id: 41,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Consent Management",
      currentMenu: "Consent Status",
    },
  },
  {
    id: 43,
    name: "SOP’s for Processing & Filing Applications",
    path: "/consent-management/sops-processing-filing-applications",
    hasSubItem: false,
    parent_id: 41,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Consent Management",
      currentMenu: "SOP’s for Processing & Filing Applications",
    },
  },
  {
    id: 44,
    name: "Application Form",
    path: "/consent-management/application-form",
    hasSubItem: false,
    parent_id: 41,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Consent Management",
      currentMenu: "Application Form",
    },
  },
  {
    id: 45,
    name: "Fee Structure",
    path: "/consent-management/fee-structure",
    hasSubItem: false,
    parent_id: 41,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Consent Management",
      currentMenu: "Fee Structure",
    },
  },
  {
    id: 46,
    name: "Classification of Industries | Categorization of Industries (R,O,G)",
    path: "/consent-management/classification-industries-categorization",
    hasSubItem: false,
    parent_id: 41,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Consent Management",
      currentMenu:
        "Classification of Industries | Categorization of Industries (R,O,G)",
    },
  },
  {
    id: 47,
    name: "Public Hearing",
    path: "/public-hearings",
    hasSubItem: true,
    parent_id: null,
    component: DynamicComponent,
    componentProps: { parentMenu: null, currentMenu: "Public Hearing" },
  },
  {
    id: 48,
    name: "Old EC (before 31.12.2021)",
    path: "/public-hearings/old-ec",
    hasSubItem: false,
    parent_id: 47,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Public Hearing",
      currentMenu: "Old EC (before 31.12.2021)",
    },
  },
  {
    id: 49,
    name: "Undergoing EC",
    path: "/public-hearings/undergoing-ec",
    hasSubItem: false,
    parent_id: 47,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Public Hearing",
      currentMenu: "Undergoing EC",
    },
  },
  {
    id: 50,
    name: "Environmental Standards",
    path: "/environmental-standards",
    hasSubItem: true,
    parent_id: null,
    component: DynamicComponent,
    componentProps: {
      parentMenu: null,
      currentMenu: "Environmental Standards",
    },
  },
  {
    id: 51,
    name: "Industries Specific Standards",
    path: "/environmental-standards/industries-specific-standards",
    hasSubItem: true,
    parent_id: 50,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Environmental Standards",
      currentMenu: "Industries Specific Standards",
    },
  },
  {
    id: 52,
    name: "Effluent | Emission- Schedule 1 of EP Rules",
    path: "/environmental-standards/industries-specific-standards/effluent-emission-schedule1",
    hasSubItem: false,
    parent_id: 51,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Environmental Standards/Industries Specific Standards",
      currentMenu: "Effluent | Emission- Schedule 1 of EP Rules",
    },
  },
  {
    id: 53,
    name: "General Standard",
    path: "/environmental-standards/industries-specific-standards/general-standard",
    hasSubItem: false,
    parent_id: 51,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Environmental Standards/Industries Specific Standards",
      currentMenu: "General Standard",
    },
  },
  {
    id: 54,
    name: "Air Quality Standards",
    path: "/environmental-standards/air-quality-standards",
    hasSubItem: true,
    parent_id: 50,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Environmental Standards",
      currentMenu: "Air Quality Standards",
    },
  },
  {
    id: 55,
    name: "NAAQM Standards",
    path: "/environmental-standards/air-quality-standards/naaqm-standards",
    hasSubItem: false,
    parent_id: 54,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Environmental Standards/Air Quality Standards",
      currentMenu: "NAAQM Standards",
    },
  },
  {
    id: 56,
    name: "Water Quality Standards",
    path: "/environmental-standards/water-quality-standards",
    hasSubItem: true,
    parent_id: 50,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Environmental Standards",
      currentMenu: "Water Quality Standards",
    },
  },
  {
    id: 57,
    name: "Designated Best Use Standards",
    path: "/environmental-standards/water-quality-standards/designated-best-use-standards",
    hasSubItem: false,
    parent_id: 56,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Environmental Standards/Water Quality Standards",
      currentMenu: "Designated Best Use Standards",
    },
  },
  {
    id: 58,
    name: "Noise",
    path: "/environmental-standards/noise-standards",
    hasSubItem: true,
    parent_id: 50,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Environmental Standards",
      currentMenu: "Noise",
    },
  },
  {
    id: 59,
    name: "General Noise Standards",
    path: "/environmental-standards/noise-standards/general-noise-standards",
    hasSubItem: false,
    parent_id: 58,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Environmental Standards/Noise",
      currentMenu: "General Noise Standards",
    },
  },
  {
    id: 60,
    name: "Noise Limits for Vehicles & Airport",
    path: "/environmental-standards/noise-standards/noise-limits-vehicles-airport",
    hasSubItem: false,
    parent_id: 58,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Environmental Standards/Noise",
      currentMenu: "Noise Limits for Vehicles & Airport",
    },
  },
  {
    id: 61,
    name: "Noise Limits for Generator Set",
    path: "/environmental-standards/noise-standards/noise-limits-generator-set",
    hasSubItem: false,
    parent_id: 58,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Environmental Standards/Noise",
      currentMenu: "Noise Limits for Generator Set",
    },
  },
  {
    id: 62,
    name: "Fire Cracker Noise Rules",
    path: "/environmental-standards/noise-standards/fire-cracker-noise-rules",
    hasSubItem: false,
    parent_id: 58,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Environmental Standards/Noise",
      currentMenu: "Fire Cracker Noise Rules",
    },
  },
  {
    id: 63,
    name: "Vehicular",
    path: "/environmental-standards/vehicular-standards",
    hasSubItem: false,
    parent_id: 50,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Environmental Standards",
      currentMenu: "Vehicular",
    },
  },
  {
    id: 64,
    name: "CETP-Inlet Standards",
    path: "/environmental-standards/cetp-inlet-standards",
    hasSubItem: false,
    parent_id: 50,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Environmental Standards",
      currentMenu: "CETP-Inlet Standards",
    },
  },
  {
    id: 66,
    name: "RTI",
    path: "/rti",
    hasSubItem: false,
    parent_id: null,
    component: DynamicComponent,
    componentProps: { parentMenu: null, currentMenu: "RTI" },
  },
  {
    id: 67,
    name: "Contact Us",
    path: "/contact-us",
    hasSubItem: false,
    parent_id: null,
    component: ContactUs,
    componentProps: { parentMenu: null, currentMenu: "Contact Us" },
  },
  {
    id: 68,
    name: "Environmental Acts & Rules",
    path: "/environmental-acts-rules",
    hasSubItem: true,
    parent_id: null,
    component: DynamicComponent,
    componentProps: {
      parentMenu: null,
      currentMenu: "Environmental Acts & Rules",
    },
  },
  {
    id: 69,
    name: "Environment Protection",
    path: "/environmental-acts-rules/environment-protection",
    hasSubItem: true,
    parent_id: 68,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Environmental Acts & Rules",
      currentMenu: "Environment Protection",
    },
  },
  {
    id: 70,
    name: "Acts",
    path: "/environmental-acts-rules/environment-protection/acts",
    hasSubItem: false,
    parent_id: 69,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Environmental Acts & Rules/Environment Protection",
      currentMenu: "Acts",
    },
  },
  {
    id: 71,
    name: "Rules",
    path: "/environmental-acts-rules/environment-protection/rules",
    hasSubItem: false,
    parent_id: 69,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Environmental Acts & Rules/Environment Protection",
      currentMenu: "Rules",
    },
  },
  {
    id: 72,
    name: "Water Pollution",
    path: "/environmental-acts-rules/water-pollution",
    hasSubItem: true,
    parent_id: 68,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Environmental Acts & Rules",
      currentMenu: "Water Pollution",
    },
  },
  {
    id: 73,
    name: "Acts",
    path: "/environmental-acts-rules/water-pollution/acts",
    hasSubItem: false,
    parent_id: 72,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Environmental Acts & Rules/Water Pollution",
      currentMenu: "Acts",
    },
  },
  {
    id: 74,
    name: "U.P. Water Rules",
    path: "/environmental-acts-rules/water-pollution/up-water-rules",
    hasSubItem: false,
    parent_id: 72,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Environmental Acts & Rules/Water Pollution",
      currentMenu: "U.P. Water Rules",
    },
  },
  {
    id: 75,
    name: "Air Pollution",
    path: "/environmental-acts-rules/air-pollution",
    hasSubItem: true,
    parent_id: 68,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Environmental Acts & Rules",
      currentMenu: "Air Pollution",
    },
  },
  {
    id: 76,
    name: "Acts",
    path: "/environmental-acts-rules/air-pollution/acts",
    hasSubItem: false,
    parent_id: 75,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Environmental Acts & Rules/Air Pollution",
      currentMenu: "Acts",
    },
  },
  {
    id: 77,
    name: "U.P. Air Rules",
    path: "/environmental-acts-rules/air-pollution/up-air-rules",
    hasSubItem: false,
    parent_id: 75,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Environmental Acts & Rules/Air Pollution",
      currentMenu: "U.P. Air Rules",
    },
  },
  {
    id: 78,
    name: "Noise Pollution",
    path: "/environmental-acts-rules/noise-pollution",
    hasSubItem: true,
    parent_id: 68,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Environmental Acts & Rules",
      currentMenu: "Noise Pollution",
    },
  },

  {
    id: 79,
    name: "Rules 2000",
    path: "/environmental-acts-rules/noise-pollution/rules-2000",
    hasSubItem: false,
    parent_id: 78,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Environmental Acts & Rules/Noise Pollution",
      currentMenu: "Rules 2000",
    },
  },
  {
    id: 80,
    name: "Waste Management",
    path: "/environmental-acts-rules/waste-management",
    hasSubItem: true,
    parent_id: 68,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Environmental Acts & Rules",
      currentMenu: "Waste Management",
    },
  },
  {
    id: 81,
    name: "Hazardous Waste",
    path: "/environmental-acts-rules/waste-management/hazardous-waste",
    hasSubItem: false,
    parent_id: 80,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Environmental Acts & Rules/Waste Management",
      currentMenu: "Hazardous Waste",
    },
  },
  {
    id: 82,
    name: "Municipal Solid Waste",
    path: "/environmental-acts-rules/waste-management/municipal-solid-waste",
    hasSubItem: false,
    parent_id: 80,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Environmental Acts & Rules/Waste Management",
      currentMenu: "Municipal Solid Waste",
    },
  },
  {
    id: 83,
    name: "Bio-medical Waste",
    path: "/environmental-acts-rules/waste-management/bio-medical-waste",
    hasSubItem: false,
    parent_id: 80,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Environmental Acts & Rules/Waste Management",
      currentMenu: "Bio-medical Waste",
    },
  },
  {
    id: 84,
    name: "E-Waste",
    path: "/environmental-acts-rules/waste-management/e-waste",
    hasSubItem: false,
    parent_id: 80,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Environmental Acts & Rules/Waste Management",
      currentMenu: "E-Waste",
    },
  },
  {
    id: 85,
    name: "Plastic Waste",
    path: "/environmental-acts-rules/waste-management/plastic-waste",
    hasSubItem: false,
    parent_id: 80,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Environmental Acts & Rules/Waste Management",
      currentMenu: "Plastic Waste",
    },
  },
  {
    id: 86,
    name: "Construction & Demolition Waste",
    path: "/environmental-acts-rules/waste-management/construction-demolition-waste",
    hasSubItem: false,
    parent_id: 80,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Environmental Acts & Rules/Waste Management",
      currentMenu: "Construction & Demolition Waste",
    },
  },
  {
    id: 87,
    name: "Guidelines by CPCB",
    path: "/environmental-acts-rules/guidelines-cpcb",
    hasSubItem: false,
    parent_id: 68,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Environmental Acts & Rules",
      currentMenu: "Guidelines by CPCB",
    },
  },
  {
    id: 88,
    name: "State Rules",
    path: "/environmental-acts-rules/state-rules",
    hasSubItem: false,
    parent_id: 68,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Environmental Acts & Rules",
      currentMenu: "State Rules",
    },
  },
  {
    id: 89,
    name: "SOP’s for Waste Processing",
    path: "/environmental-acts-rules/sops-waste-processing",
    hasSubItem: false,
    parent_id: 68,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Environmental Acts & Rules",
      currentMenu: "SOP’s for Waste Processing",
    },
  },
  {
    id: 90,
    name: "For Entrepreneur & Industries",
    path: "/for-entrepreneur-industries",
    hasSubItem: false,
    parent_id: null,
    component: DynamicComponent,
    componentProps: {
      parentMenu: null,
      currentMenu: "For Entrepreneur & Industries",
    },
  },
  {
    id: 91,
    name: "Citizens",
    path: "/citizens",
    hasSubItem: false,
    parent_id: null,
    component: DynamicComponent,
    componentProps: {
      parentMenu: null,
      currentMenu: "Citizens",
    },
  },
  {
    id: 92,
    name: "Reports & Publications",
    path: "/reports-publications",
    hasSubItem: true,
    parent_id: null,
    component: DynamicComponent,
    componentProps: {
      parentMenu: null,
      currentMenu: "Reports & Publications",
    },
  },
  {
    id: 93,
    name: "Reports",
    path: "/reports-publications/reports",
    hasSubItem: true,
    parent_id: 92,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Reports & Publications",
      currentMenu: "Reports",
    },
  },
  {
    id: 94,
    name: "Annual Reports",
    path: "/reports-publications/reports/annual-reports",
    hasSubItem: false,
    parent_id: 93,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Reports & Publications/Reports",
      currentMenu: "Annual Reports",
    },
  },
  {
    id: 95,
    name: "Technical Reports",
    path: "/reports-publications/reports/technical-reports",
    hasSubItem: false,
    parent_id: 93,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Reports & Publications/Reports",
      currentMenu: "Technical Reports",
    },
  },
  {
    id: 96,
    name: "SOE Report",
    path: "/reports-publications/reports/soe-report",
    hasSubItem: false,
    parent_id: 93,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Reports & Publications/Reports",
      currentMenu: "SOE Report",
    },
  },
  {
    id: 97,
    name: "Publications",
    path: "/reports-publications/publications",
    hasSubItem: true,
    parent_id: 92,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Reports & Publications",
      currentMenu: "Publications",
    },
  },
  {
    id: 98,
    name: "Research Publication",
    path: "/reports-publications/publications/research-publication",
    hasSubItem: false,
    parent_id: 97,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Reports & Publications/Publications",
      currentMenu: "Research Publication",
    },
  },
  {
    id: 99,
    name: "Newsletters",
    path: "/reports-publications/publications/newsletters",
    hasSubItem: false,
    parent_id: 97,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Reports & Publications/Publications",
      currentMenu: "Newsletters",
    },
  },
  {
    id: 100,
    name: "NCAP Portal",
    path: "/ncap-portal",
    hasSubItem: false,
    parent_id: null,
    component: DynamicComponent,
    componentProps: {
      parentMenu: null,
      currentMenu: "NCAP Portal",
    },
  },
  {
    id: 101,
    name: "OCEMS Portal",
    path: "/ocems-portal",
    hasSubItem: false,
    parent_id: null,
    component: DynamicComponent,
    componentProps: {
      parentMenu: null,
      currentMenu: "OCEMS Portal",
    },
  },
  {
    id: 102,
    name: "Related Links",
    path: "/related-links",
    hasSubItem: false,
    parent_id: null,
    component: RelatedLinks,
  },

  // {
  //   id: 103,
  //   name: "River Rejuvenation",
  //   path: "/river-rejuvenation",
  //   hasSubItem: true,
  //   parent_id: null,
  //   component: DynamicComponent,
  //   componentProps: {
  //     parentMenu: null,
  //     currentMenu: "River Rejuvenation",
  //   },
  // },
  {
    id: 103,
    name: "River Rejuvenation & Pollution",
    path: "/river-rejuvenation-pollution",
    hasSubItem: true,
    parent_id: null,
    component: DynamicComponent,
    componentProps: {
      parentMenu: null,
      currentMenu: "River Rejuvenation & Pollution",
    },
  },
  {
    id: 104,
    name: "Action Plan for Rejuvenation of Polluted River Stretch",
    path: "/river-rejuvenation-pollution/action-plan-rejuvenation-polluted-river",
    hasSubItem: false,
    parent_id: 103,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "River Rejuvenation & Pollution",
      currentMenu: "Action Plan for Rejuvenation of Polluted River Stretch",
    },
  },
  {
    id: 105,
    name: "Water Quality of Polluted River Stretch",
    path: "/river-rejuvenation-pollution/water-quality-polluted-river",
    hasSubItem: false,
    parent_id: 103,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "River Rejuvenation & Pollution",
      currentMenu: "Water Quality of Polluted River Stretch",
    },
  },
  {
    id: 106,
    name: "Order of Hon’ble NGT",
    path: "/river-rejuvenation-pollution/order-honble-ngt",
    hasSubItem: false,
    parent_id: 103,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "River Rejuvenation & Pollution",
      currentMenu: "Order of Hon’ble NGT",
    },
  },
  {
    id: 107,
    name: "Letter | Notices etc",
    path: "/river-rejuvenation-pollution/letters-notices",
    hasSubItem: false,
    parent_id: 103,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "River Rejuvenation & Pollution",
      currentMenu: "Letter | Notices etc",
    },
  },
  {
    id: 108,
    name: "Act & Rules | Guidelines",
    path: "/act-rules-guidelines",
    hasSubItem: false,
    parent_id: null,
    component: DynamicComponent,
    componentProps: {
      parentMenu: null,
      currentMenu: "Act & Rules | Guidelines",
    },
  },
  {
    id: 109,
    name: "Important Office Orders",
    path: "/important-office-orders",
    hasSubItem: false,
    parent_id: null,
    component: DynamicComponent,
    componentProps: {
      parentMenu: null,
      currentMenu: "Important Office Orders",
    },
  },
  {
    id: 110,
    name: "Projects",
    path: "/projects",
    hasSubItem: false,
    parent_id: null,
    component: DynamicComponent,
    componentProps: {
      parentMenu: null,
      currentMenu: "Projects",
    },
  },
  {
    id: 111,
    name: "Tenders",
    path: "/tenders",
    hasSubItem: false,
    parent_id: null,
    component: DynamicComponent,
    componentProps: {
      parentMenu: null,
      currentMenu: "Tenders",
    },
  },
  {
    id: 112,
    name: "Media",
    path: "/media",
    hasSubItem: true,
    parent_id: null,
    component: DynamicComponent,
    componentProps: {
      parentMenu: null,
      currentMenu: "Media",
    },
  },
  {
    id: 113,
    name: "Events",
    path: "/media/events",
    hasSubItem: false,
    parent_id: 112,
    component: Events,
  },
  {
    id: 114,
    name: "Event Gallery",
    path: "/media/event-gallery/:id", 
    hasSubItem: false,
    parent_id: 112,
    component: EventGallery,
  },
  {
    id: 115,
    name: "News",
    path: "/media/news",
    hasSubItem: false,
    parent_id: 112,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Media",
      currentMenu: "News",
    },
  },
  {
    id: 116,
    name: "Press Release",
    path: "/media/press-release",
    hasSubItem: false,
    parent_id: 112,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Media",
      currentMenu: "Press Release",
    },
  },
  {
    id: 117,
    name: "Upcoming Plan & State Initiative Plan",
    path: "/upcoming-plan-state-initiative-plan",
    hasSubItem: false,
    parent_id: null,
    component: DynamicComponent,
    componentProps: {
      parentMenu: null,
      currentMenu: "Upcoming Plan & State Initiative Plan",
    },
  },
  {
    id: 118,
    name: "AQI Plan & Statistics",
    path: "/aqi-plan-statistics",
    hasSubItem: false,
    parent_id: null,
    component: DynamicComponent,
    componentProps: {
      parentMenu: null,
      currentMenu: "AQI Plan & Statistics",
    },
  },
  {
    id: 119,
    name: "Registered Recyclers",
    path: "/registered-recyclers",
    hasSubItem: false,
    parent_id: null,
    component: DynamicComponent,
    componentProps: {
      parentMenu: null,
      currentMenu: "Registered Recyclers",
    },
  },
  {
    id: 120,
    name: "Waste Management",
    path: "/waste-management",
    hasSubItem: true,
    parent_id: null,
    component: DynamicComponent,
    componentProps: {
      parentMenu: null,
      currentMenu: "Waste Management",
    },
  },
  {
    id: 121,
    name: "Municipal Solid Waste",
    path: "/waste-management/municipal-solid-waste",
    hasSubItem: false,
    parent_id: 120,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Waste Management",
      currentMenu: "Municipal Solid Waste",
    },
  },
  {
    id: 122,
    name: "Bio-Medical Waste",
    path: "/waste-management/bio-medical-waste",
    hasSubItem: false,
    parent_id: 120,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Waste Management",
      currentMenu: "Bio-Medical Waste",
    },
  },
  {
    id: 123,
    name: "Hazardous Waste",
    path: "/waste-management/hazardous-waste",
    hasSubItem: false,
    parent_id: 120,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Waste Management",
      currentMenu: "Hazardous Waste",
    },
  },
  {
    id: 125,
    name: "E-Waste",
    path: "/waste-management/e-waste",
    hasSubItem: false,
    parent_id: 120,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Waste Management",
      currentMenu: "E-Waste",
    },
  },
  {
    id: 126,
    name: "Plastic Waste",
    path: "/waste-management/plastic-waste",
    hasSubItem: false,
    parent_id: 120,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Waste Management",
      currentMenu: "Plastic Waste",
    },
  },
  {
    id: 127,
    name: "Battery Waste",
    path: "/waste-management/battery-waste",
    hasSubItem: false,
    parent_id: 1210,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Waste Management",
      currentMenu: "Battery Waste",
    },
  },
  {
    id: 128,
    name: "C&D Waste",
    path: "/waste-management/c-and-d-waste",
    hasSubItem: false,
    parent_id: 120,
    component: DynamicComponent,
    componentProps: {
      parentMenu: "Waste Management",
      currentMenu: "C&D Waste",
    },
  },
  {
    id: 129,
    name: "Enquiry",
    path: "/enquiry",
    hasSubItem: null,
    parent_id: null,
    component: Enquiry,
    componentProps: {
      parentMenu: "Enquiry",
      currentMenu: "Enquiry",
    },
  },
  {
    id: 130,
    name: "Complain",
    path: "/complain",
    hasSubItem: null,
    parent_id: null,
    component: Complain,
    componentProps: {
      parentMenu: "Complain",
      currentMenu: "Complain",
    },
  },
];
