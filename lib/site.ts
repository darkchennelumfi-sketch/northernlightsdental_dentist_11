export type ServiceCategory =
  | "Preventive"
  | "Restorative"
  | "Cosmetic"
  | "Family";

export type Service = {
  slug: string;
  title: string;
  navTitle: string;
  category: ServiceCategory[];
  icon:
    | "shield"
    | "sparkles"
    | "smile"
    | "crown"
    | "implant"
    | "gum"
    | "whitening"
    | "kids";
  excerpt: string;
  description: string;
  includes: string[];
  process: { title: string; text: string }[];
  note: string;
  faqs: { q: string; a: string }[];
  related: string[];
};

export type Doctor = {
  slug: string;
  name: string;
  role: string;
  photo: string;
  short: string;
  credentials: string[];
  bio: string[];
  outside: string[];
  focus: string[];
};

export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[] }
  | { type: "image"; src: string; alt: string; caption?: string };

export type Post = {
  slug: string;
  title: string;
  date: string;
  displayDate: string;
  category: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  author: string;
  readTime: string;
  content: ContentBlock[];
};

export const site = {
  name: "Northern Lights Dental",
  shortName: "NLD",
  tagline: "Professional dental care for the entire family.",
  description:
    "Northern Lights Dental offers professional dental care in a warm, welcoming environment for ages 1 to 101+ in Fargo, North Dakota.",
  phone: "701-551-2000",
  phoneHref: "tel:+17015512000",
  email: "info@nldentalfargo.com",
  emailHref: "mailto:info@nldentalfargo.com",
  address: {
    street: "4150 19th Ave S, Suite 301",
    city: "Fargo",
    state: "ND",
    zip: "58103",
    full: "4150 19th Ave S Suite 301, Fargo, ND 58103",
  },
  hours: [
    { days: "Monday – Thursday", time: "8:00 am – 5:00 pm" },
    { days: "Friday", time: "8:00 am – 12:00 pm" },
    { days: "Saturday – Sunday", time: "Closed" },
  ],
  hoursShort: "M–Th 8–5 · Fri 8–12",
  socials: [
    {
      label: "Facebook",
      href: "https://fb.me/NLDentalFargo",
      handle: "NLDentalFargo",
    },
    {
      label: "Instagram",
      href: "https://instagram.com/NLDentalFargo",
      handle: "NLDentalFargo",
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/channel/UCACX0VWprDiWl7NtI_BJCrw/featured",
      handle: "Northern Lights Dental",
    },
  ],
  mapEmbed:
    "https://maps.google.com/maps?q=4150%2019th%20Ave%20S%20Suite%20301%20Fargo%20ND%2058103&t=&z=15&ie=UTF8&iwloc=&output=embed",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=4150+19th+Ave+S+Suite+301+Fargo+ND+58103",
  payOnline: "https://bcpay.online/?Profile=cschmaltzWEB",
};

export const navigation = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "New Patients", href: "/new-patients" },
  { label: "Smile Gallery", href: "/smile-gallery" },
  { label: "Journal", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const services: Service[] = [
  {
    slug: "general-exams-cleanings",
    title: "General Exams & Cleanings",
    navTitle: "Exams & Cleanings",
    category: ["Preventive", "Family"],
    icon: "shield",
    excerpt:
      "Preventive visits that keep small issues small — and your smile feeling fresh.",
    description:
      "Routine exams and professional cleanings are the foundation of a healthy smile. We look at the whole picture: your teeth, gums, bite, and the habits that shape them. When we find something early, we have more options and more conservative ways to help.",
    includes: [
      "Comprehensive exam and health history review",
      "Professional cleaning and polish",
      "Fluoride and preventive guidance",
      "A clear conversation about what we see and what comes next",
    ],
    process: [
      {
        title: "We listen first",
        text: "Your concerns, your goals, and your history guide the visit before we ever pick up an instrument.",
      },
      {
        title: "We look closely",
        text: "We examine your teeth, gums, and bite, and use modern diagnostics to understand what is happening beneath the surface.",
      },
      {
        title: "We plan together",
        text: "You leave with a clear picture of your oral health and a plan that fits your priorities.",
      },
    ],
    note: "Most patients visit every six months, but the right rhythm depends on your needs. We will talk through a schedule that makes sense for you.",
    faqs: [
      {
        q: "How often should I have a cleaning?",
        a: "Many patients benefit from a cleaning every six months. Some need more frequent visits, and others can safely go longer. We will recommend a schedule based on your gums, decay risk, and health history.",
      },
      {
        q: "What happens at a new-patient exam?",
        a: "We review your health history, examine your teeth and gums, take any images we need, and talk through what we find. You will have time to ask questions before we settle on next steps.",
      },
      {
        q: "Do you see children?",
        a: "Yes. We care for ages 1 to 101+, and we love helping children build a positive relationship with dental care early.",
      },
    ],
    related: ["sealants-fillings", "gum-disease-treatment", "kid-friendly-dentistry"],
  },
  {
    slug: "sealants-fillings",
    title: "Sealants & Fillings",
    navTitle: "Sealants & Fillings",
    category: ["Preventive", "Restorative", "Family"],
    icon: "sparkles",
    excerpt:
      "Tooth-colored fillings and protective sealants that stop decay from taking hold.",
    description:
      "When decay is caught early, treatment can be small, comfortable, and nearly invisible. We use tooth-colored fillings to restore areas of decay and sealants to protect the deep grooves of teeth where brushing is hardest.",
    includes: [
      "Tooth-colored composite fillings",
      "Protective sealants for vulnerable grooves",
      "Careful shade matching for a natural look",
      "Prevention coaching for the whole family",
    ],
    process: [
      {
        title: "Assess",
        text: "We confirm what is decay and what is not, so we only treat what needs treatment.",
      },
      {
        title: "Restore",
        text: "The area is gently cleaned and rebuilt with tooth-colored material shaped to your bite.",
      },
      {
        title: "Protect",
        text: "We finish by talking through the habits and preventive steps that help you avoid a repeat visit.",
      },
    ],
    note: "Sealants are especially helpful for children and teenagers, but they can benefit adults too. We will let you know if they make sense for your teeth.",
    faqs: [
      {
        q: "Are tooth-colored fillings as strong as silver fillings?",
        a: "Modern composite fillings are strong, conservative, and blend in with your natural tooth. We will recommend the right material for the location and size of the repair.",
      },
      {
        q: "Do sealants hurt?",
        a: "No. Sealants are painted onto the chewing surface and cured with a light. There is no drilling involved.",
      },
      {
        q: "How long do fillings last?",
        a: "With good home care and regular visits, tooth-colored fillings can last many years. We will check them at each exam.",
      },
    ],
    related: ["general-exams-cleanings", "kid-friendly-dentistry", "crowns-bridges-veneers"],
  },
  {
    slug: "dentures",
    title: "Denture Fabrication & Fittings",
    navTitle: "Dentures",
    category: ["Restorative"],
    icon: "smile",
    excerpt:
      "Custom dentures designed for comfort, function, and a natural look.",
    description:
      "Missing teeth affect more than your smile — they can change how you eat, speak, and feel. We create custom dentures and handle the fittings with patience, adjusting until the fit feels right for you.",
    includes: [
      "Custom denture fabrication",
      "Careful fittings and adjustments",
      "Guidance on cleaning and daily wear",
      "A natural-looking, comfortable result",
    ],
    process: [
      {
        title: "Understand your needs",
        text: "We talk about what you want from your smile, your diet, and your daily routine.",
      },
      {
        title: "Design and fit",
        text: "Impressions and measurements guide a denture shaped to your mouth, with fittings along the way.",
      },
      {
        title: "Refine the fit",
        text: "Small adjustments can make a big difference. We stay with you until the fit feels comfortable.",
      },
    ],
    note: "New dentures can feel unfamiliar at first. We will give you time to adapt and are here for adjustments as your mouth changes.",
    faqs: [
      {
        q: "How long does it take to get dentures?",
        a: "The timeline depends on the type of denture and how many fittings are needed. We will outline the steps and expected timing at your consultation.",
      },
      {
        q: "Will dentures look natural?",
        a: "We shape and shade your denture to complement your face and smile. The goal is a result that looks like you — not like a set of teeth.",
      },
      {
        q: "Can you repair or adjust my current dentures?",
        a: "Often, yes. Call us to talk about what is happening with your denture and we will let you know the best next step.",
      },
    ],
    related: ["crowns-bridges-veneers", "implants-root-canals", "general-exams-cleanings"],
  },
  {
    slug: "crowns-bridges-veneers",
    title: "Same-Day Crowns, Bridges & Veneers",
    navTitle: "Crowns, Bridges & Veneers",
    category: ["Restorative", "Cosmetic"],
    icon: "crown",
    excerpt:
      "Restore strength or refine your smile with same-day crowns, bridges, and veneers.",
    description:
      "Sometimes a tooth needs more than a filling. Crowns, bridges, and veneers can restore damaged teeth, replace missing ones, or refine the shape and color of your smile. Our same-day crowns let many patients leave with a finished restoration in a single visit.",
    includes: [
      "Same-day crowns",
      "Bridges for missing teeth",
      "Veneers for shape and color refinement",
      "Careful shaping and shade matching",
    ],
    process: [
      {
        title: "Plan the result",
        text: "We look at your bite, your smile, and your goals before choosing a restoration.",
      },
      {
        title: "Prepare and capture",
        text: "The tooth is prepared and scanned so the restoration can be designed precisely.",
      },
      {
        title: "Place and refine",
        text: "Your restoration is placed, checked for fit and bite, and polished.",
      },
    ],
    note: "Not every tooth is a candidate for a same-day restoration. We will explain your options and help you choose what is best for the long term.",
    faqs: [
      {
        q: "What is a same-day crown?",
        a: "A same-day crown is designed and placed in a single visit using digital scanning and in-office fabrication. Many patients appreciate not needing a temporary crown or a second appointment.",
      },
      {
        q: "How long do veneers last?",
        a: "Veneers can last many years with good care. We will talk through material choices, home care, and what to expect.",
      },
      {
        q: "Will my crown match my other teeth?",
        a: "Yes. We match the shade and shape to your natural teeth so the restoration fits your smile.",
      },
    ],
    related: ["tooth-whitening", "dentures", "implants-root-canals"],
  },
  {
    slug: "implants-root-canals",
    title: "Implants & Root Canal Treatment",
    navTitle: "Implants & Root Canals",
    category: ["Restorative"],
    icon: "implant",
    excerpt:
      "Comfort-first care for teeth that need more than a filling.",
    description:
      "When a tooth is deeply damaged or missing, we look for the most predictable, conservative way forward. That may mean root canal treatment to save a natural tooth, or an implant to replace one that cannot be saved.",
    includes: [
      "Root canal treatment",
      "Implant planning and restoration",
      "Comfort-focused appointments",
      "Clear options for replacing a missing tooth",
    ],
    process: [
      {
        title: "Diagnose",
        text: "We determine what is happening with the tooth and whether it can be saved.",
      },
      {
        title: "Treat",
        text: "The tooth is treated with careful anesthesia and a focus on your comfort throughout.",
      },
      {
        title: "Restore",
        text: "We rebuild function and appearance, then check that your bite feels right.",
      },
    ],
    note: "Most root canals do not fail. When one does, an implant can be a reliable option. We will walk you through the tradeoffs without pressure.",
    faqs: [
      {
        q: "Is a root canal painful?",
        a: "Modern root canal treatment is done with local anesthesia and is generally comfortable. Most patients are surprised by how normal the appointment feels.",
      },
      {
        q: "How long does an implant take?",
        a: "Implant treatment happens in stages, and the timeline depends on healing and bone health. We will map out the process for your specific case.",
      },
      {
        q: "Can I eat normally after treatment?",
        a: "We will give you instructions based on the treatment you receive. Most patients return to normal eating within a short time.",
      },
    ],
    related: ["crowns-bridges-veneers", "dentures", "gum-disease-treatment"],
  },
  {
    slug: "gum-disease-treatment",
    title: "Gum Disease Treatment",
    navTitle: "Gum Disease Treatment",
    category: ["Preventive", "Restorative"],
    icon: "gum",
    excerpt:
      "Healthy gums are the foundation of a healthy smile.",
    description:
      "Gum disease can be quiet at first, which is why regular exams matter. We check the health of your gums at every visit and, when needed, create a treatment plan that addresses inflammation and protects the support around your teeth.",
    includes: [
      "Gum health assessment",
      "Personalized treatment planning",
      "Guidance for home care",
      "Follow-up to track progress",
    ],
    process: [
      {
        title: "Measure",
        text: "We assess your gums and identify areas of inflammation or concern.",
      },
      {
        title: "Treat",
        text: "Treatment is tailored to the stage of gum disease and your comfort.",
      },
      {
        title: "Maintain",
        text: "We help you build a maintenance rhythm that keeps your gums stable.",
      },
    ],
    note: "Gum disease is often manageable when caught early. If your gums bleed when you brush or floss, that is a good reason to come in.",
    faqs: [
      {
        q: "What are the signs of gum disease?",
        a: "Bleeding, swelling, tenderness, persistent bad breath, and gum recession can all be signs. Sometimes there are no obvious symptoms, which is why regular exams matter.",
      },
      {
        q: "Can gum disease be reversed?",
        a: "Early gum disease can often be improved with treatment and good home care. More advanced disease can be managed and monitored. We will be honest about what to expect.",
      },
      {
        q: "Will treatment hurt?",
        a: "We use anesthesia when needed and plan appointments around your comfort. Let us know if you are nervous so we can adjust.",
      },
    ],
    related: ["general-exams-cleanings", "implants-root-canals", "sealants-fillings"],
  },
  {
    slug: "tooth-whitening",
    title: "Professional Tooth Whitening",
    navTitle: "Tooth Whitening",
    category: ["Cosmetic"],
    icon: "whitening",
    excerpt:
      "A brighter smile, guided by our team so your results look natural.",
    description:
      "Professional whitening can lift stains and brighten your smile, but the best results come from a plan made for your teeth. We evaluate your starting point, talk through sensitivity, and guide you through whitening that looks like you.",
    includes: [
      "Smile and shade assessment",
      "Professional whitening guidance",
      "Sensitivity-conscious planning",
      "Advice for keeping results bright",
    ],
    process: [
      {
        title: "Assess",
        text: "We look at your enamel, existing restorations, and the kind of staining you have.",
      },
      {
        title: "Whiten",
        text: "We choose an approach and pace that fits your sensitivity and goals.",
      },
      {
        title: "Maintain",
        text: "We share simple habits that help your results last.",
      },
    ],
    note: "Whitening does not change the color of fillings or crowns. If you are planning both whitening and restorative work, we will help you sequence them well.",
    faqs: [
      {
        q: "Is professional whitening safe?",
        a: "When guided by a dental professional, whitening is a safe and well-established cosmetic treatment. We will review your enamel and sensitivity before starting.",
      },
      {
        q: "How long do results last?",
        a: "Results vary with diet and home care. Many patients enjoy a brighter smile for months to years before considering a touch-up.",
      },
      {
        q: "Will it make my teeth sensitive?",
        a: "Some temporary sensitivity is common. We plan around your comfort and can adjust the strength or pace of treatment.",
      },
    ],
    related: ["crowns-bridges-veneers", "general-exams-cleanings", "sealants-fillings"],
  },
  {
    slug: "kid-friendly-dentistry",
    title: "Kid-Friendly Dentistry",
    navTitle: "Kid-Friendly Dentistry",
    category: ["Family", "Preventive"],
    icon: "kids",
    excerpt:
      "Gentle, positive visits for ages 1 to 101+ — because a good first experience can last a lifetime.",
    description:
      "We love kids and look forward to helping them achieve a shiny, cavity-free, healthy smile. Our team meets children where they are, explains things in a way that makes sense, and keeps visits positive from the first hello.",
    includes: [
      "Gentle first visits",
      "Cleanings, sealants, and fillings for kids",
      "Prevention and brushing guidance",
      "A welcoming space for parents and little ones",
    ],
    process: [
      {
        title: "Say hello",
        text: "We start with a conversation and let your child get comfortable before anything else.",
      },
      {
        title: "Keep it simple",
        text: "We explain each step in kid-friendly language and move at a pace that feels safe.",
      },
      {
        title: "Celebrate",
        text: "We praise cooperation and give families practical tips for home.",
      },
    ],
    note: "Starting dental visits early — and keeping them positive — helps children build habits that last. We are happy to see the whole family together.",
    faqs: [
      {
        q: "When should my child first see a dentist?",
        a: "As soon as a tooth breaks through the gums is a great time to start. Early visits help your child get comfortable and let us support prevention from the beginning.",
      },
      {
        q: "What if my child is nervous?",
        a: "That is normal. We move slowly, explain what we are doing, and give your child choices where we can. Parents are welcome to stay close.",
      },
      {
        q: "Do you treat the whole family?",
        a: "Yes. We care for ages 1 to 101+, and we love seeing generations of the same family.",
      },
    ],
    related: ["general-exams-cleanings", "sealants-fillings", "dentures"],
  },
];

export const doctors: Doctor[] = [
  {
    slug: "dr-chris-schmaltz",
    name: "Dr. Chris Schmaltz",
    role: "Owner",
    photo: "/images/dr-chris.jpg",
    short:
      "Fargo-Moorhead dentist since 2013, with a love for learning, the outdoors, and helping people feel at home in the chair.",
    credentials: [
      "Doctor of Dental Surgery, University of Minnesota",
      "Bachelor's degree in Exercise Science, North Dakota State University",
      "Practicing in the Fargo-Moorhead area since 2013",
    ],
    bio: [
      "I take great pride in growing up on a farm outside of Rugby, ND where many of my values in life were established. I attended North Dakota State University for five years and graduated with a bachelor's degree in Exercise Science as well as taking many electives that prepared me for my career. I obtained my Doctor of Dental Surgery degree from University of Minnesota in 2013 and have practiced in the Fargo-Moorhead area ever since. I lived in two other cities and have known early on that I wanted to make the F-M area my home. My wife and I enjoy staying active in the community as we strive to leave our positive impact on society.",
      "I make an effort to try everything once. Some of my favorite hobbies are photography, guitar, gardening, assisting on the family farm, hunting, fishing, running (I've only missed two Fargo marathons so far!), strength training, following just about every sport, and traveling. I have a strong desire to learn and will likely ask you about areas in which you are knowledgeable.",
    ],
    outside: [
      "Photography",
      "Guitar",
      "Gardening",
      "Hunting and fishing",
      "Fargo marathons",
      "Travel",
    ],
    focus: ["General dentistry", "Same-day restorations", "Implant care", "Family care"],
  },
  {
    slug: "dr-neha-patel",
    name: "Dr. Neha Patel",
    role: "Dentist",
    photo: "/images/dr-neha.jpg",
    short:
      "More than 15 years of care in the Fargo-Moorhead area, with a focus on innovative diagnostics and less invasive treatment.",
    credentials: [
      "Dental degree earned in India, 1993",
      "Licensed to practice dentistry in California",
      "Providing dental care in the Fargo-Moorhead area for over 15 years",
    ],
    bio: [
      "I was born and raised in India. In 1993, after graduating from a dental school in India, I immigrated to California where I was licensed to practice dentistry and so began my career. After practicing dentistry in California for a couple of years, I moved to North Dakota when my husband started a business in Fargo.",
      "I have been providing dental care in the Fargo-Moorhead area for over 15 years. I bring small town values and ensure my patients' dental needs are fully taken care of. I believe my strength is in using innovative diagnostics with less invasive procedures. This produces more reliable results while achieving high patient comfort. It also reduces the individual's recovery time, resulting in very satisfied patients. I enjoy getting to know my patients and meeting their dental needs.",
      "When away from the office, I enjoy being with my family and following my son's life at college. I also enjoy reading, cooking and learning saxophone.",
    ],
    outside: ["Family", "Reading", "Cooking", "Learning saxophone"],
    focus: ["General dentistry", "Preventive care", "Comfort-focused treatment", "Family care"],
  },
  {
    slug: "dr-courtney-gieseke",
    name: "Dr. Courtney Gieseke",
    role: "Dentist",
    photo: "/images/dr-courtney.jpg",
    short:
      "University of Minnesota graduate, public-health advocate, and lifelong North Dakotan who values relationships as much as results.",
    credentials: [
      "Graduated from the University of Minnesota",
      "Practicing dentistry in the FM area since 2009",
      "Volunteer at the Red River Dental Access clinic and an access clinic in Halstad, MN",
    ],
    bio: [
      "I have practiced dentistry in the FM area since 2009 after graduating from the University of Minnesota. My first eight years in the field were dedicated to public health, and I continue to volunteer at the Red River Dental Access clinic and work at an access clinic in Halstad, MN. I believe we best help ourselves by helping others. Involving and educating patients in making treatment decisions is a focus of my daily practice. Developing relationships as I care for patients and their families is what makes my career so enjoyable.",
      "I have been a lifelong North Dakota resident and was raised on a farm about an hour north of Fargo. My husband and I live in West Fargo and fill our days raising two energetic young boys and a sweet and spicy little girl. In the winter, we love visiting grandparents in Arizona and heading west to Montana to downhill ski. We spend the warm weather weekends with our extended family at our Minnesota lake home enjoying water sports and nature. I am grateful to have a very close-knit family who values hard work and time together.",
      "BC (before children), I was an avid reader, loved traveling and had a variety of hobbies. If you have list of book titles other than Goodnight Goodnight Construction Site or Scorpions vs Tarantulas, please share your suggestions!",
    ],
    outside: [
      "Family",
      "Reading",
      "Travel",
      "Downhill skiing",
      "Lake weekends",
      "Water sports",
    ],
    focus: ["General dentistry", "Public health", "Patient education", "Family care"],
  },
];

export const posts: Post[] = [
  {
    slug: "your-childs-dental-health-the-early-years",
    title:
      "Your Child's Dental Health — The Early Years by a dentist and a mental health professional",
    date: "2020-04-17",
    displayDate: "April 17, 2020",
    category: "Family",
    excerpt:
      "A general dentist and a licensed marriage and family therapist — who are also parents — share practical guidance for the early years of your child's dental health.",
    image: "/images/journal-child-health.jpg",
    imageAlt:
      "A parent and child brushing their teeth together in a bright bathroom",
    author: "Chris Schmaltz, DDS & Christina Smestad-Schmaltz, MS",
    readTime: "9 min read",
    content: [
      {
        type: "p",
        text: "This informal post offers guidance given from the perspective of a general dentist and a mental health professional that specializes with children. It also offers an empathetic perspective from these professionals who are married and navigating the challenges of caring for their own child's dental health.",
      },
      {
        type: "p",
        text: "As a dentist, I am frequently asked the same questions and receive texts almost monthly from friends asking good questions like “What toothpaste should I use?” and “What should I do since my child isn't brushing?” Providing adequate structure with dental hygiene can save hours worth of pain and inconveniences. Being engaged can also help your child potentially save thousands of dollars from the cost of dental care. My wife and I have learned a great deal from our respective professions and from being first-time parents. We hope our skill sets and experience can help you out also!",
      },
      {
        type: "image",
        src: "/images/journal-brushing.jpg",
        alt: "A child brushing their teeth",
        caption: "Starting early makes the habit feel familiar.",
      },
      {
        type: "h2",
        text: "When should I start brushing my child's teeth and what toothpaste should I use?",
      },
      {
        type: "p",
        text: "This is a fairly simple answer but as soon as a tooth breaks through the gingiva (gums) is a great time to start! The American Academy of Pediatric Dentistry has recommended children use toothpaste with fluoride in the amount of a grain of rice (compared to a pea-size amount for those over the age of 3). Brushing twice per day is the general recommendation. A tip I suggest is smearing the toothpaste into the brush bristles to reduce the ease of your child sucking the toothpaste off immediately. Flossing daily is also something that can be introduced at a young age, especially in areas the bristles of the toothbrush are unable to access. Lastly, we recommend parents be very mindful of dietary habits that could increase risk for caries (cavities).",
      },
      {
        type: "p",
        text: "It is important to start these hygiene practices in infancy in an effort for your child to offer a smoother transition for the new habit. This early introduction can yield much less headache for caregivers in the future. Babies are typically more open to new experiences than toddlers and tend to be more tolerant of caregivers having control over the brushing practices.",
      },
      {
        type: "h2",
        text: "My child fights brushing. What do I do?",
      },
      {
        type: "p",
        text: "There will undoubtedly be those times when a child has no interest in letting the caregiver use a toothbrush. For those times, it is best to use a two-person technique in which one individual keeps the child's hands occupied while the other individual brushes. There are other strategies to utilize and work towards those more pleasant brushing experiences. Sometimes offering some control over the situation will help improve compliance. Examples may include:",
      },
      {
        type: "list",
        items: [
          "Having two different options for a toothbrush",
          "Allowing the child to choose where to sit while brushing",
          "Allowing child to select the song to listen to while brushing",
        ],
      },
      {
        type: "p",
        text: "Labeled praise (positive reinforcement) is strongly recommended before, during and after brushing. Examples (as silly as they sound) include:",
      },
      {
        type: "quote",
        text: "“You're doing such a great job walking to the bathroom to brush your teeth!”",
      },
      {
        type: "quote",
        text: "“I love the way you're moving your toothbrush up and down while tickling your teeth!”",
      },
      {
        type: "quote",
        text: "“Look at the way you brushed your teeth and how clean they look, great job!”",
      },
      {
        type: "p",
        text: "Essentially, you want to add a lot of positivity and excitement to reinforce the behavior as well as be consistent. Children respond far better to positive reinforcement versus disciplinary techniques. As is with many things in child development, we want to give more energy into the behavior we want to see (through positive reinforcement) vs the behaviors we want to see less of (through scolding). One of the examples I use is from the Nurtured Heart Approach which demonstrates how children are drawn to the toys that light up and make noise. Thinking of ourselves as a toy, we want to light up and be excited when our child engages in behaviors we want to see. The alternative is to give less energy to the behaviors that are negative. Pairing a preferred activity after a non-preferred activity can also be a useful strategy. For example,",
      },
      {
        type: "quote",
        text: "“First we brush our teeth then we get to read a book.”",
      },
      {
        type: "p",
        text: "Stubborn behaviors are a challenge and the child may not understand the importance of maintaining good dental hygiene. The parent must continue to explore creative options that each child may respond to. I frequently emphasize we can't always control every aspect of dental hygiene, but we can often control dietary habits since we are the ones buying the groceries. Minimizing high risk foods (sticky fruit snacks, crackers or chips) or beverages (soda, sports drinks or juices) is an important component of minimizing caries (cavities). We want to condense the exposure of the high risk foods into short time frames around meals and avoid frequent exposure throughout the day (snacking or going to bed with milk in a bottle). Please don't feed your infant juices or soda! Nothing beats milk or water when it comes to beverages (as recommended by your pediatrician). Many city water treatment facilities fortify fluoride (about .7 mg/L) which helps with development and protection of enamel. Yes, fluoride is a naturally occurring element in water! In dental school I used a sample of the well water from our farm to get tested. Although the concentration isn't deemed as adequate, it contained .5 mg/L fluoride level. Integrating proper diet and dental hygiene will set your child up for a bright future!",
      },
      {
        type: "image",
        src: "/images/journal-family.jpg",
        alt: "A family spending time together",
        caption: "The habits we build early tend to stay with us.",
      },
      {
        type: "h2",
        text: "From both of us…",
      },
      {
        type: "p",
        text: "We have experienced the same challenges many parents face with our child fighting brushing. There were some nights one of us would hold our child's hands while the other brushed. Eventually, we learned to utilize songs or videos he loves to play while he brushes which creates a more positive experience along with distraction. Caring for children's oral health can be difficult and inconvenient, but it is incredibly important. We hope you find some useful tips from this article and wish you the best of luck!",
      },
    ],
  },
  {
    slug: "star-discount-plan-for-patients-without-dental-insurance",
    title: "Introducing the NLD Star Discount Plan",
    date: "2020-03-02",
    displayDate: "March 2, 2020",
    category: "New Patients",
    excerpt:
      "Dental insurance can be a hassle and confusing for patients. We have made this as straight forward and as affordable as possible.",
    image: "/images/star-plan.jpg",
    imageAlt: "Northern Lights Dental Star Discount Plan information",
    author: "Northern Lights Dental",
    readTime: "3 min read",
    content: [
      {
        type: "p",
        text: "Dental insurance can be a hassle and confusing for patients. We have made this as straight forward and as affordable as possible so take a look below and see how you can save by being a loyal patient of Northern Lights Dental!",
      },
      {
        type: "p",
        text: "Ask our staff about your 1st visit Trial Run to evaluate your risk at a substantially discounted rate and see if you like our clinic!",
      },
      {
        type: "image",
        src: "/images/star-plan-card.jpg",
        alt: "NLD Star Discount Plan details",
        caption: "Ask our team about the NLD Star Discount Plan at your next visit.",
      },
    ],
  },
  {
    slug: "some-of-our-favorite-cases",
    title: "Some of our favorite cases…",
    date: "2018-12-18",
    displayDate: "December 18, 2018",
    category: "Smile Gallery",
    excerpt:
      "A look at some of our favorite cases — and the thoughtful, conservative care behind them.",
    image: "/images/journal-favorite-cases.jpg",
    imageAlt: "A before-and-after view of a restored smile",
    author: "Northern Lights Dental",
    readTime: "4 min read",
    content: [
      {
        type: "p",
        text: "The dental clinic is understandably an avoided place for many people. The vast majority of our patients have simple and straightforward appointments but once in awhile we are able to demonstrate our skills and help our patients drastically improve their health and smile. Make no mistake in our clinic as we don't set out to create insecurities in a person's smile. In fact, we believe the perception of an individual comes from many other things than the appearance of teeth. However, healthy teeth and a healthy smile are desired by just about everyone which is why people come to visit us. We invite you to take a look at some of our favorite examples of these improvements that can offer a sense of peace and confidence to our patients!",
      },
      {
        type: "h2",
        text: "Spaces",
      },
      {
        type: "p",
        text: "Spaces between teeth can be an annoying thing to deal with for some people. This particular individual just finished shifting teeth with braces and wanted an acceptable esthetic result to keep the teeth in place until growth is finished. The treatment was performed using tooth-colored fillings!",
      },
      {
        type: "h2",
        text: "Implants",
      },
      {
        type: "p",
        text: "The loss of a tooth can be devastating especially when it's a front tooth. There are a number of options available to replace a missing tooth and one of the most popular currently is an implant. Implants provide predictable results but can sometimes present their own challenges. Managing the gingiva (gums) around an implant is one of those big challenges. Without proper gum display, an implant won't look natural in an esthetic area. This particular case was treated with an implant after a root canal failed (most root canals do not fail). In addition, the natural tooth was out of alignment so part of our objective was to re-align the new crown. We actually used the crown from the natural tooth to guide the tissue into place during the healing process after the tooth was removed. The last picture you see is the day we delivered the final crown. As a result, the gums were slightly inflamed from the seating process. This individual was very satisfied with the results!",
      },
    ],
  },
];

export const patientForms = [
  {
    title: "Medical History Form",
    description: "Your health history helps us care for you safely.",
    href: "https://www.nldentalfargo.com/wp-content/uploads/2018/03/Patient-Medical-History.pdf",
  },
  {
    title: "Patient Registration",
    description: "New-patient registration and contact details.",
    href: "https://www.nldentalfargo.com/wp-content/uploads/2018/03/Patient-Registration.pdf",
  },
  {
    title: "Release of Records Form",
    description: "Request that records be shared with another office.",
    href: "https://nldentalfargo.com/wp-content/uploads/2022/12/Release-of-Records.pdf",
  },
  {
    title: "Consent for Treatment",
    description: "Treatment consent for your dental care.",
    href: "https://www.nldentalfargo.com/wp-content/uploads/2019/09/CONSENT-FOR-TREATMENT.pdf",
  },
  {
    title: "Financial Agreement",
    description: "Our financial agreement for patient care.",
    href: "https://www.nldentalfargo.com/wp-content/uploads/2019/09/Financial-Agreement.pdf",
  },
  {
    title: "How Dental Insurance Works",
    description: "A plain-language guide to dental insurance.",
    href: "https://www.nldentalfargo.com/wp-content/uploads/2019/09/How-Dental-Insurance-Works.pdf",
  },
];

export const faqs = [
  {
    q: "Are you accepting new patients?",
    a: "Yes — we are accepting new patients. We would love to welcome you and your family to Northern Lights Dental.",
  },
  {
    q: "What ages do you treat?",
    a: "We offer professional dental care in a warm, welcoming environment for ages 1 to 101+. We love seeing the whole family.",
  },
  {
    q: "Where are you located?",
    a: "We are at 4150 19th Ave S, Suite 301, Fargo, ND 58103. Our phone number is 701-551-2000.",
  },
  {
    q: "What are your office hours?",
    a: "Monday through Thursday from 8:00 am to 5:00 pm, and Friday from 8:00 am to noon. We are closed Saturday and Sunday.",
  },
  {
    q: "How do I make an appointment?",
    a: "Call us at 701-551-2000 or fill out the appointment form on our contact page. Scheduling a visit is the first step toward a healthy smile.",
  },
  {
    q: "Do you offer same-day crowns?",
    a: "Yes. Same-day crowns, bridges, and veneers are among the services we offer. We will confirm whether a same-day restoration is right for your tooth at your visit.",
  },
  {
    q: "Do you have options for patients without dental insurance?",
    a: "Yes. Ask our staff about the NLD Star Discount Plan and your 1st visit Trial Run to evaluate your risk at a substantially discounted rate and see if you like our clinic.",
  },
  {
    q: "Can I complete patient forms before my visit?",
    a: "Yes. Download and print the forms on our Patient Forms page, including medical history, registration, release of records, consent for treatment, and our financial agreement.",
  },
  {
    q: "How do I pay my bill online?",
    a: "Use our secure online payment portal. If you have a question about a payment, call our office at 701-551-2000 and we will be glad to help.",
  },
  {
    q: "I am nervous about the dentist. Can you help?",
    a: "We treat our patients with the utmost compassion and work to create a comfortable, friendly environment. Let us know what would help you feel at ease, and we will move at a pace that feels right.",
  },
];

export const values = [
  {
    title: "See the whole picture",
    text: "We view each visit from the mind of our patients. By staying up to date on research and education, we can correctly diagnose, assess risk, and thoroughly consider options with the patient.",
    icon: "eye",
  },
  {
    title: "Choose conservative care",
    text: "We strongly believe in electing for conservative approaches whenever possible. When we find something early, we have more options and more ways to help.",
    icon: "leaf",
  },
  {
    title: "Care for the whole family",
    text: "From a child's first tooth to care for grandparents, we offer professional dental care in a warm, welcoming environment for ages 1 to 101+.",
    icon: "heart",
  },
];

export const galleryCases = [
  {
    title: "Closing the spaces",
    description:
      "This patient had just finished shifting teeth with braces and wanted an acceptable esthetic result to keep the teeth in place until growth was finished. The treatment was performed using tooth-colored fillings.",
    images: [
      { src: "/images/gallery-spaces-before.jpg", alt: "Before tooth-colored fillings", label: "Before" },
      { src: "/images/gallery-spaces-progress.jpg", alt: "During treatment with tooth-colored fillings", label: "During" },
      { src: "/images/gallery-spaces-after.jpg", alt: "After tooth-colored fillings", label: "After" },
    ],
    before: "/images/gallery-spaces-before.jpg",
    after: "/images/gallery-spaces-after.jpg",
  },
  {
    title: "Restoring a front tooth",
    description:
      "This case was treated with an implant after a root canal failed. The natural tooth was out of alignment, so part of the objective was to re-align the new crown. The final photo was taken the day the final crown was delivered.",
    images: [
      { src: "/images/gallery-implant-before.jpg", alt: "Before implant restoration", label: "Before" },
      { src: "/images/gallery-implant-progress.jpg", alt: "During implant treatment", label: "During" },
      { src: "/images/gallery-implant-after.jpg", alt: "After implant restoration", label: "After" },
    ],
    before: "/images/gallery-implant-before.jpg",
    after: "/images/gallery-implant-after.jpg",
  },
];
