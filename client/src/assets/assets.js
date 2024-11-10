import logo from "./AppointMD.png";
import logoTransparent from "./AppointMDTransparent.png";
import user from "./User.avif";
import group_people from "./Group-people.png";
import Doctors_banner from "./NewDocGRP.png";
import group_DOCS from "./header_img.png";
import General_Physician from "./General_Physician.avif";
import Cardiologist from "./Cardiologist.avif";
import Dermatologist from "./Dermatologist.avif";
import Neurologist from "./Nephrologist.jpg";
import Orthopedic_Surgeon from "./Orthopedic_Surgeon.avif";
import Pediatrician from "./Pediatrician.jpg";
import Psychiatrist from "./Psychiatrist.avif";
import Endocrinologist from "./Endocrinologist.avif";
import Gastroenterologist from "./Gastroenterologist.jpg";
import Oncologist from "./Oncologist.avif";
import Pulmonologist from "./Pulmonologist.jpg";
import Nephrologist from "./Nephrologist.jpg";
import Rheumatologist from "./Rheumatologist.jpg";
import Urologist from "./Urologist.avif";
import Hematologist from "./Hematologist.jpg";
import Ophthalmologist from "./Ophthalmologist.avif";
import Obstetrician_Gynecologist from "./Obstetrician_Gynecologist.jpg";
import Radiologist from "./Radiologist.jpg";
import Allergist_Immunologist from "./Allergist_Immunologist.avif";
import ENT_Specialist from "./ENT_Specialist.jpg";
import Radio_Icon from "./Radio_Icon.png";
import General_Icon from "./Gen_Phys_Icon.png";
import Gayno_Icon from "./Gyno_Icon.png";
import Derma_Icom from "./Derma_icon.png";
import Pedia_Icon from "./Pedia_Icon.png";
import Neuro_Icon from "./Neuro_Icon.png";
import Banner_Doc from "./appointment_img.png";

export const assets = {
  logo,
  logoTransparent,
  user,
  group_people,
  Doctors_banner,
  group_DOCS,
  Banner_Doc,
};

export const specialityData = [
  {
    speciality: "General Physician",
    image: General_Icon,
  },
  {
    speciality: "Gynecologist",
    image: Gayno_Icon,
  },
  {
    speciality: "Pediatrician",
    image: Pedia_Icon,
  },
  {
    speciality: "Radiologist",
    image: Radio_Icon,
  },

  {
    speciality: "Dermatologist",
    image: Derma_Icom,
  },
  {
    speciality: "Neurologist",
    image: Neuro_Icon,
  },
];

export const doctorData = [
  {
    id: "doc1",
    name: "Dr. Richard James",
    image: General_Physician,
    speciality: "General Physician",
    degree: "MBBS",
    experience: "4 years",
    about:
      "Dr. James has a strong commitment to delivering comprehensive medical care.",
    fees: 50,
    address: {
      Line1: "1/10th Cross, Richmond",
      Line2: "Circle, Ring Road, London",
    },
  },
  {
    id: "doc2",
    name: "Dr. Sarah Williams",
    image: Cardiologist,
    speciality: "Cardiologist",
    degree: "MBBS, DM Cardiology",
    experience: "8 years",
    about:
      "Dr. Williams is dedicated to providing excellent cardiovascular care with the latest treatments.",
    fees: 80,
    address: {
      Line1: "45 Harley Street",
      Line2: "Marylebone, London",
    },
  },
  {
    id: "doc3",
    name: "Dr. Michael Chen",
    image: Dermatologist,
    speciality: "Dermatologist",
    degree: "MBBS, MD Dermatology",
    experience: "6 years",
    about:
      "Dr. Chen specializes in both medical and cosmetic dermatology with a patient-centered approach.",
    fees: 65,
    address: {
      Line1: "27 Baker Street",
      Line2: "Westminster, London",
    },
  },
  {
    id: "doc4",
    name: "Dr. Emma Thompson",
    image: Neurologist,
    speciality: "Neurologist",
    degree: "MBBS, MD Neurology",
    experience: "10 years",
    about:
      "Dr. Thompson brings extensive experience in treating complex neurological conditions.",
    fees: 90,
    address: {
      Line1: "15 Queen's Gate",
      Line2: "Kensington, London",
    },
  },
  {
    id: "doc5",
    name: "Dr. Robert Wilson",
    image: Orthopedic_Surgeon,
    speciality: "Orthopedic Surgeon",
    degree: "MBBS, MS Orthopedics",
    experience: "12 years",
    about:
      "Dr. Wilson is known for his expertise in joint replacement and sports injuries.",
    fees: 95,
    address: {
      Line1: "33 Portland Place",
      Line2: "Marylebone, London",
    },
  },
  {
    id: "doc6",
    name: "Dr. Lisa Anderson",
    image: Pediatrician,
    speciality: "Pediatrician",
    degree: "MBBS, MD Pediatrics",
    experience: "7 years",
    about: "Dr. Anderson provides compassionate care for children of all ages.",
    fees: 60,
    address: {
      Line1: "8 Chelsea Manor Street",
      Line2: "Chelsea, London",
    },
  },
  {
    id: "doc7",
    name: "Dr. David Brown",
    image: Psychiatrist,
    speciality: "Psychiatrist",
    degree: "MBBS, MD Psychiatry",
    experience: "9 years",
    about:
      "Dr. Brown offers comprehensive mental health care with a holistic approach.",
    fees: 85,
    address: {
      Line1: "52 Wimpole Street",
      Line2: "Marylebone, London",
    },
  },
  {
    id: "doc8",
    name: "Dr. Jessica Martinez",
    image: Endocrinologist,
    speciality: "Endocrinologist",
    degree: "MBBS, DM Endocrinology",
    experience: "5 years",
    about:
      "Dr. Martinez specializes in hormone-related disorders and diabetes management.",
    fees: 75,
    address: {
      Line1: "19 Devonshire Place",
      Line2: "Marylebone, London",
    },
  },
  {
    id: "doc9",
    name: "Dr. Andrew Clark",
    image: Gastroenterologist,
    speciality: "Gastroenterologist",
    degree: "MBBS, DM Gastroenterology",
    experience: "11 years",
    about:
      "Dr. Clark is experienced in treating various digestive system disorders.",
    fees: 80,
    address: {
      Line1: "64 Harley Street",
      Line2: "Marylebone, London",
    },
  },
  {
    id: "doc10",
    name: "Dr. Maria Rodriguez",
    image: Oncologist,
    speciality: "Oncologist",
    degree: "MBBS, DM Oncology",
    experience: "15 years",
    about:
      "Dr. Rodriguez provides comprehensive cancer care with the latest treatments.",
    fees: 100,
    address: {
      Line1: "88 Crawford Street",
      Line2: "Marylebone, London",
    },
  },
  {
    id: "doc11",
    name: "Dr. Thomas Lee",
    image: Pulmonologist,
    speciality: "Pulmonologist",
    degree: "MBBS, DM Pulmonology",
    experience: "8 years",
    about: "Dr. Lee specializes in respiratory conditions and sleep disorders.",
    fees: 70,
    address: {
      Line1: "25 Welbeck Street",
      Line2: "Marylebone, London",
    },
  },
  {
    id: "doc12",
    name: "Dr. Rachel Green",
    image: Nephrologist,
    speciality: "Nephrologist",
    degree: "MBBS, DM Nephrology",
    experience: "6 years",
    about: "Dr. Green focuses on kidney diseases and hypertension management.",
    fees: 75,
    address: {
      Line1: "71 Park Lane",
      Line2: "Mayfair, London",
    },
  },
  {
    id: "doc13",
    name: "Dr. James Wilson",
    image: Rheumatologist,
    speciality: "Rheumatologist",
    degree: "MBBS, DM Rheumatology",
    experience: "9 years",
    about: "Dr. Wilson treats various autoimmune and joint conditions.",
    fees: 80,
    address: {
      Line1: "39 Harley Street",
      Line2: "Marylebone, London",
    },
  },
  {
    id: "doc14",
    name: "Dr. Christopher Davis",
    image: Urologist,
    speciality: "Urologist",
    degree: "MBBS, MS Urology",
    experience: "7 years",
    about: "Dr. Davis provides comprehensive urological care for all ages.",
    fees: 85,
    address: {
      Line1: "12 Harley Street",
      Line2: "Marylebone, London",
    },
  },
  {
    id: "doc15",
    name: "Dr. Elizabeth Taylor",
    image: Hematologist,
    speciality: "Hematologist",
    degree: "MBBS, DM Hematology",
    experience: "10 years",
    about: "Dr. Taylor specializes in blood disorders and related conditions.",
    fees: 90,
    address: {
      Line1: "55 Queen Anne Street",
      Line2: "Marylebone, London",
    },
  },
  {
    id: "doc16",
    name: "Dr. William Parker",
    image: Ophthalmologist,
    speciality: "Ophthalmologist",
    degree: "MBBS, MS Ophthalmology",
    experience: "13 years",
    about:
      "Dr. Parker provides comprehensive eye care and surgical treatments.",
    fees: 70,
    address: {
      Line1: "92 Harley Street",
      Line2: "Marylebone, London",
    },
  },
  {
    id: "doc17",
    name: "Dr. Victoria Smith",
    image: Obstetrician_Gynecologist,
    speciality: "Obstetrician/Gynecologist",
    degree: "MBBS, MD Obstetrics & Gynecology",
    experience: "11 years",
    about: "Dr. Smith specializes in women's health and pregnancy care.",
    fees: 85,
    address: {
      Line1: "28 Wimpole Street",
      Line2: "Marylebone, London",
    },
  },
  {
    id: "doc18",
    name: "Dr. Alexander White",
    image: Radiologist,
    speciality: "Radiologist",
    degree: "MBBS, MD Radiology",
    experience: "8 years",
    about:
      "Dr. White is experienced in various imaging techniques and interventional procedures.",
    fees: 75,
    address: {
      Line1: "47 Queen Anne Street",
      Line2: "Marylebone, London",
    },
  },
  {
    id: "doc19",
    name: "Dr. Sophie Turner",
    image: Allergist_Immunologist,
    speciality: "Allergist/Immunologist",
    degree: "MBBS, MD Immunology",
    experience: "5 years",
    about: "Dr. Turner specializes in allergies and immune system disorders.",
    fees: 65,
    address: {
      Line1: "31 Weymouth Street",
      Line2: "Marylebone, London",
    },
  },
  {
    id: "doc20",
    name: "Dr. Benjamin Harris",
    image: ENT_Specialist,
    speciality: "ENT Specialist",
    degree: "MBBS, MS ENT",
    experience: "9 years",
    about:
      "Dr. Harris provides comprehensive care for ear, nose, and throat conditions.",
    fees: 70,
    address: {
      Line1: "83 Harley Street",
      Line2: "Marylebone, London",
    },
  },
];
