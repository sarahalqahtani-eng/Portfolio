// Reusable project data structure.
// Each project: slug, title, category, year, role, shortDescription, cover,
// metrics, technologies, features, githubUrl, liveUrl, externalUrl, sections.
// `sections` is an ordered list of narrative blocks rendered on the case-study page.

export const projects = [
  {
    slug: 'ecg-monitoring',
    title: 'AI-Powered ECG Monitoring & Arrhythmia Detection',
    category: 'AI · Healthcare · Mobile — Graduation Project',
    year: '2027',
    role: 'AI Engineering & Mobile Development',
    shortDescription:
      'An AI-powered ECG monitoring system designed for real-time cardiac monitoring and arrhythmia detection.',
    cover: 'ecg',
    metrics: [
      { value: '95%', label: 'Classification Accuracy' },
      { value: '<2s', label: 'Response Time' },
    ],
    technologies: ['PyTorch', 'Machine Learning', 'Real-Time Inference', 'Mobile Development'],
    features: [
      'Continuous, real-time ECG signal monitoring',
      'Arrhythmia classification from ECG signal data',
      'Real-time inference pipeline with sub-2-second response time',
      'Mobile interface for monitoring and alerts',
    ],
    githubUrl: null,
    liveUrl: null,
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          'An end-to-end, AI-based arrhythmia detection system built as my graduation project. The system combines a trained machine learning model with a real-time data processing and inference pipeline to support continuous cardiac monitoring.',
        ],
      },
      {
        heading: 'Problem',
        paragraphs: [
          'Arrhythmias can develop and go unnoticed between clinical checkups, and manual ECG review does not scale to continuous monitoring. The project set out to detect abnormal heart rhythms automatically and quickly enough to be useful in a real-time setting.',
        ],
      },
      {
        heading: 'My Role',
        paragraphs: [
          'I was responsible for the AI component and the mobile development side of the system — training and integrating the classification model, and building the mobile interface that surfaces its results.',
        ],
      },
      {
        heading: 'AI / ML Approach',
        paragraphs: [
          'The classification model was trained using PyTorch on ECG signal data to distinguish between normal and arrhythmic patterns. The trained model reached approximately 95% classification accuracy on the evaluation set.',
        ],
      },
      {
        heading: 'System Architecture',
        paragraphs: [
          'The system is structured as a real-time data processing and inference pipeline: incoming ECG signal data is processed and passed to the model, which returns a classification with a response time under 2 seconds, fast enough to support real-time use.',
        ],
      },
      {
        heading: 'Results',
        paragraphs: [
          'The model achieved approximately 95% classification accuracy with real-time inference under 2 seconds — the two verified results from this project.',
        ],
      },
    ],
  },
  {
    slug: 'rafiq',
    title: 'Rafiq — AI-Powered Islamic Companion',
    category: 'Full-Stack Mobile · AI',
    year: '2026',
    role: 'Full-Stack Mobile Development',
    shortDescription:
      'A full-stack mobile application combining daily Islamic tools and content with an AI conversational assistant.',
    cover: 'rafiq',
    metrics: [],
    technologies: ['Flutter', 'Dart', 'Riverpod', 'OpenAI', 'RAG', 'Figma', 'Claude Code'],
    features: [],
    githubUrl: null,
    liveUrl: null,
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          'Rafiq brings together the daily tools Muslims reach for — adhkar, prayer times, Quran, and dua — with a conversational AI assistant, in a single full-stack Flutter application.',
        ],
      },
      {
        heading: 'Problem',
        paragraphs: [
          'Daily Islamic practice is often spread across several separate apps for prayer times, Quran reading, adhkar, and asking questions. Rafiq is built to hold these in one coherent, well-designed companion app.',
        ],
      },
      {
        heading: 'My Role',
        paragraphs: [
          'I built the application end to end as a full-stack mobile project: the Flutter client, its state management, the bundled Islamic content, and the integration with an AI backend for the conversational assistant.',
        ],
      },
      {
        heading: 'Core Features',
        paragraphs: [],
        bullets: [
          'Adhkar categories and a dedicated dhikr counter flow',
          'Prayer times and a live Qibla compass, using device location',
          'A Quran (mushaf) reader with a searchable index, plus a dua library',
          'Hijri calendar support and local notifications for reminders',
        ],
      },
      {
        heading: 'AI Chat / RAG',
        paragraphs: [
          'The in-app assistant first classifies the intent behind a user’s message (asking for adhkar, tafsir, hadith, general guidance, or an out-of-scope question), then answers using a lightweight retrieval-augmented approach: relevant tafsir, hadith, and dua entries are pulled from a bundled local knowledge base and injected into the prompt alongside a guardrail system prompt, so responses stay grounded in the app’s own reference content rather than the model’s open-ended output.',
        ],
      },
      {
        heading: 'Full-Stack Architecture',
        paragraphs: [
          'The Flutter client uses Riverpod for state management and calls a backend AI chat service for the assistant’s responses. Islamic reference content (tafsir, hadith, dua, adhkar, Quran text) ships as bundled local data so the core app works offline, while the AI assistant calls out to an OpenAI-based chat backend for generation.',
        ],
      },
      {
        heading: 'Development Workflow',
        paragraphs: [
          'I used Claude Code as part of the day-to-day development workflow for building and iterating on the app alongside Figma for interface design — AI-assisted development sped up implementation, but the architecture and feature decisions were mine.',
        ],
      },
    ],
  },
  {
    slug: 'sehatak',
    title: 'Sehatak — AI-Driven Health Monitoring App',
    category: 'Hackathon · Health AI — Tuwaiqthon, Tuwaiq Academy',
    year: '2026',
    role: 'Database Architecture & AI Integration',
    shortDescription:
      'An AI-driven health application that analyzes wearable-device and medical-test data to generate personalized health insights and early warning indicators.',
    cover: 'sehatak',
    metrics: [],
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'Supabase', 'OpenAI API'],
    features: [],
    githubUrl: 'https://github.com/sarahalqahtani-eng/sehatek',
    liveUrl: null,
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          'Sehatak (صحتك) is an Arabic-language web app built during the Tuwaiqthon national hackathon at Tuwaiq Academy in 2026. It brings together wearable-style vitals, uploaded lab results, and AI-generated reports into one personal health view.',
        ],
      },
      {
        heading: 'Problem',
        paragraphs: [
          'Health data from wearables and lab tests is often disconnected and hard for a non-specialist to interpret on their own. Sehatak aims to combine both into readable, personalized insight.',
        ],
      },
      {
        heading: 'My Role',
        paragraphs: [
          'My work focused on designing and managing the database architecture used to store and retrieve health information — the schema behind patient profiles, vitals readings, lab results, and AI-generated reports — alongside the AI integration for report generation.',
        ],
      },
      {
        heading: 'Core Features',
        paragraphs: [],
        bullets: [
          'Signup captures health data (height, weight, blood type, goal) and computes BMI/BMR automatically',
          'A wearable vitals dashboard streaming heart rate, glucose, blood pressure, and stress indicators',
          'CSV lab-result uploads, auto-classified as normal, high, or low against reference ranges',
          'AI-generated daily health reports (via an OpenAI-backed edge function) summarizing status and risk level',
          'A calendar assistant that parses Arabic natural-language input to schedule appointments and medication reminders',
        ],
      },
      {
        heading: 'Data Architecture',
        paragraphs: [
          'The Supabase schema centers on five tables: patient_profile (demographics, BMI, BMR), wearable_data (vitals readings), lab_reports and lab_results (uploaded files and parsed values), and ai_daily_reports (generated summaries and risk levels) — designed so the AI reporting layer and the dashboard both read from a consistent, well-typed source of truth.',
        ],
      },
      {
        heading: 'Technology',
        paragraphs: [
          'Built with vanilla HTML5, CSS3, and JavaScript on the frontend, with Supabase providing authentication, the Postgres database, storage for uploaded files, and edge functions, and the OpenAI API powering the AI-generated health reports.',
        ],
      },
    ],
  },
  {
    slug: 'fraud-detection',
    title: 'Financial Fraud / AML Detection',
    category: 'Machine Learning · Independent Project',
    year: '2026',
    role: 'Machine Learning Engineer',
    shortDescription:
      'A machine learning model for detecting suspicious financial transactions, trained on a subset of the IBM AML dataset.',
    cover: 'fraud',
    metrics: [],
    technologies: ['Python', 'Machine Learning'],
    features: [],
    githubUrl: null,
    liveUrl: null,
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          'A financial transaction / anti-money-laundering (AML) fraud detection model, trained to distinguish suspicious transactions from normal ones using the IBM AML dataset sourced from Kaggle.',
        ],
      },
      {
        heading: 'Dataset',
        paragraphs: [
          'The source dataset is IBM’s AML dataset from Kaggle. For training, I used a subset of approximately 50,000 normal transactions and 5,000 suspicious transactions, rather than the full multi-million-record dataset.',
        ],
      },
      {
        heading: 'What the Model Detects',
        paragraphs: [
          'The model classifies financial transactions as normal or suspicious, in line with anti-money-laundering (AML) detection patterns.',
        ],
      },
      {
        heading: 'A Note on This Page',
        paragraphs: [
          'The detailed data preparation, training methodology, and evaluation metrics for this project live in a Colab notebook. This page currently reflects only the facts I can verify; the full technical breakdown (model architecture, preprocessing, class-imbalance handling, and evaluation metrics) will be added once the notebook is reviewed directly, so the numbers shown are accurate rather than estimated.',
        ],
      },
    ],
  },
  {
    slug: 'smart-parking',
    title: 'Smart Parking System',
    category: 'Computer Vision · IoT — Google Developer Group Hackathon',
    year: '2026',
    role: 'Computer Vision & IoT Systems',
    shortDescription:
      'A hybrid computer-vision and IoT smart parking system built for Al Yamamah University students and staff.',
    cover: 'parking',
    metrics: [{ value: '97.5%', label: 'Parking Occupancy Model Accuracy' }],
    technologies: [
      'Computer Vision',
      'Machine Learning',
      'TensorFlow / Keras',
      'Python (Flask)',
      'IoT',
      'ESP32',
      'HC-SR04',
      'Servo Motor',
      'C++',
      'Supabase',
    ],
    features: [
      'Camera-based occupancy detection shown live on the parking map',
      'ESP32 + ultrasonic sensing for per-spot presence detection',
      'Reservation flow with remote gate open/lock control',
      'Bilingual (Arabic/English) web interface',
    ],
    githubUrl: 'https://github.com/sarahalqahtani-eng/Smart-Parking-System-',
    liveUrl: null,
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          'A smart parking solution built at a Google Developer Group hackathon for Al Yamamah University students and staff, combining computer vision, IoT, and a web/app interface to show which parking spaces are available before or while entering the lot.',
        ],
      },
      {
        heading: 'Problem',
        paragraphs: [
          'Drivers can’t tell which spaces are free until they’re already circling the lot, and instrumenting every single space with a dedicated hardware sensor is expensive to deploy at scale.',
        ],
      },
      {
        heading: 'Solution',
        paragraphs: [
          'The system pairs a camera-based computer-vision model — which classifies parking spaces as vacant or occupied without needing a sensor in every spot — with an ESP32-based IoT unit for reserved/gated spaces, so occupancy is visible in the app in real time and reserved spaces can be opened or locked remotely.',
        ],
      },
      {
        heading: 'Computer Vision',
        paragraphs: [
          'A binary image classifier (built on a MobileNetV2-based architecture, served through a Flask API) takes a photo of a parking space and returns Empty or Occupied with a confidence score. Because it works from a shared camera view rather than a sensor per space, it reduces the hardware cost of covering a full lot.',
        ],
      },
      {
        heading: 'IoT Architecture',
        paragraphs: [
          'An ESP32 runs a small WiFi web server exposing status and control endpoints. An HC-SR04 ultrasonic sensor measures distance to detect vehicle presence at a monitored spot, and an SG90 servo motor drives the physical gate mechanism.',
        ],
        bullets: [
          'GET /status — current occupancy status and sensor distance reading',
          'GET /gate-status — whether the gate is open or locked',
          'GET /open / GET /lock — remotely actuate the servo-driven gate',
        ],
      },
      {
        heading: 'Parking Lock',
        paragraphs: [
          'For reserved spaces, a user submits a reservation (name, phone, plate, and duration) through the app. Once confirmed, the app exposes Open Parking and Lock Parking controls that send the corresponding command to the ESP32, which drives the servo to open or lock the gate, with the ultrasonic sensor used to confirm vehicle presence at the spot.',
        ],
      },
      {
        heading: 'User Flow',
        paragraphs: [
          'A student or staff member opens the app, sees live availability across the mapped spots (driven by the camera-based detection and sensor status), reserves a spot with their details, and can then remotely open or lock the gate for that reservation.',
        ],
      },
      {
        heading: 'Results',
        paragraphs: [
          'The computer-vision occupancy model reached approximately 97.5% accuracy classifying parking spaces as vacant or occupied.',
        ],
      },
    ],
  },
]

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug)
}
