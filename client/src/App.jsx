import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import AdminDashboard from './pages/AdminDashboard';
import TrackProgress from './pages/TrackProgress';
import FAQ from './pages/FAQ';
import LoginPage from './pages/auth/LoginPage'; 
import SignupPage from './pages/auth/SignupPage';
import PublicForm from './pages/PublicForm';
import Profile from './pages/profile';


const languageContent = {
  EN: {
    title: "Aawajkendra",
    paragraph:
      "Aawajkendra is a software application designed to receive, process, track, and resolve complaints submitted by users or customers. It helps organizations efficiently manage grievances by providing a platform for users to register complaints, view their status, and for administrators to monitor and respond to them. This system improves communication, accountability, and transparency in handling issues.",
    moreDetails: "More details",
    viewDemo: "View demo",
    servicesTitle: "Channels Available for Complaints",
    services: [
      { title: 'Website' },
      { title: 'Facebook' },
      { title: 'Mobile Phone' },
      { title: 'Whatsapp' },
    ],
    footerParagraph:"Aawajkendra is a system designed to address complaints based on the information and communication technology of the Nepalese government, and all rights related to this system .",
      welcome: "Welcome Back",
      create: "Create Account",
      signInPrompt: "Sign in to your account",
      signUpPrompt: "Join us today",
      fullName: "Full Name",
      email: "Email Address",
      password: "Password",
      namePlaceholder: "Enter your full name",
      emailPlaceholder: "Enter your email",
      passwordPlaceholder: "Enter your password",
      signInButton: "Sign In",
      createButton: "Create Account",
      loading: "Loading...",
      noAccount: "Don't have an account?",
      hasAccount: "Already have an account?",
      switchSignUp: "Sign Up",
      switchSignIn: "Sign In",
      error: "Something went wrong. Please try again.",
      invalidLogin: "Invalid email or password.",
      featuresTitle: "Features",
      loginParagraph: "Efficiently manage and track complaints with our comprehensive management system. Streamline your workflow and improve customer satisfaction.",
      text1: "Easy Complaint Submission",
      text2: "Real-time Tracking",
      text3: "Secure & Private",
       ourServices: "Our Services",
    service1Title: "Submit Complaint",
    service1Description: "Report issues easily using our online complaint form.",
    service2Title: "Track Process",
    service2Description: "Check the current status of your complaint using the tracking ID.",
    service3Title: "Frequently Asked Questions",
    service3Description: "Find answers to common questions about the system.",
    service4Title: "Manage Complaints (Admin Only)",
    service4Description: "Admins can view, update, and resolve complaints.",
     home: "Home",
    contact: "Contact",
    about: "About Us",
    service: "Service",
    otherServices: "Other Services",
    privacyPolicy: "Privacy Policy",
    madeWith: "Made with ❤️ by Team CMS",
    link: "Link",
    complaintManager: "complaint manager",
    aboutTitle: "About Our Complaint Management System",
    aboutSubtitle: "Empowering users with efficient complaint resolution through innovative technology and dedicated support.",
    ourMissionTitle: "Our Mission",
    ourMissionText: "We are dedicated to providing an efficient and transparent complaint management system that bridges the gap between customers and organizations. Our platform ensures that every complaint is heard, tracked, and resolved promptly.",
    whatWeDoTitle: "What We Do",
    whatWeDoText: "Our comprehensive complaint management system allows users to:",
    whatWeDoList: [
      "Submit complaints through multiple channels",
      "Track the progress of their complaints in real-time",
      "Receive updates and notifications",
      "Access a comprehensive FAQ section",
      "Get timely resolutions to their issues",
    ],
    ourValuesTitle: "Our Values",
    values: [
      { title: "Transparency", text: "Complete visibility into complaint status and resolution process" },
      { title: "Efficiency", text: "Quick response times and streamlined complaint handling" },
      { title: "Reliability", text: "Consistent and dependable service delivery" },
      { title: "User-Focused", text: "Designed with user experience and satisfaction in mind" },
    ],
    contactInfoTitle: "Contact Information",
    contactEmail: "Email:",
    contactPhone: "Phone:",
    contactAddress: "Address:",
    contactHours: "Hours:",
    address: "123 Complaint Street, City, State 12345",
    hoursText: "Monday - Friday, 9:00 AM - 6:00 PM",
    faqTitle: "Frequently Asked Questions",
    faqIntro: "Find answers to common questions about our complaint management system.",
    faqData: [
      {
        id: 1,
        question: "How do I submit a complaint?",
        answer: "You can submit a complaint by clicking on 'Submit Complaint' in the navigation menu or visiting the form page. Fill out the required information including your name, email, and complaint details, then click submit."
      },
      {
        id: 2,
        question: "How can I track my complaint?",
        answer: "To track your complaint, go to the 'Track Progress' page and enter your tracking ID and email address. You'll receive a tracking ID when you submit your complaint."
      },
      {
        id: 3,
        question: "How long does it take to resolve a complaint?",
        answer: "Resolution time varies depending on the complexity of the issue. Simple complaints are typically resolved within 3-5 business days, while more complex issues may take 1-2 weeks."
      },
      {
        id: 4,
        question: "Can I submit a complaint anonymously?",
        answer: "Currently, we require your name and email address to submit a complaint. This helps us communicate with you about the status and resolution of your complaint."
      },
      {
        id: 5,
        question: "What information should I include in my complaint?",
        answer: "Please include as much detail as possible: the date of the incident, names of people involved, specific issues, and any supporting documents or evidence you may have."
      },
      {
        id: 6,
        question: "How will I be notified about updates?",
        answer: "You will receive email notifications for all updates to your complaint. You can also check the status anytime by using the tracking feature on our website."
      },
      {
        id: 7,
        question: "Can I edit or withdraw my complaint?",
        answer: "You can request to edit or withdraw your complaint by contacting our support team. Please provide your tracking ID when making such requests."
      },
      {
        id: 8,
        question: "What if I'm not satisfied with the resolution?",
        answer: "If you're not satisfied with the initial resolution, you can request a review by contacting our support team. We'll investigate further and provide additional assistance."
      }
    ],
    questionsTitle: "Still Have Questions?",
    questionsText: "If you couldn't find the answer you're looking for, please don't hesitate to contact us.",
    emailSupport: "Email Support",
    phoneSupport: "Phone Support",
    liveChat: "Live Chat",
    emailAddress: "infobit078@gmail.com",
    phoneNumber: "+977-9813440031",
    chatHours: "Available during business hours",
    quickLinksTitle: "Quick Links",
    submitComplaint: "Submit a Complaint",
    trackComplaint: "Track Your Complaint",
    aboutSystem: "About Our System",
    formTitle: "Submit Your Complaint",
    formIntro: "Please fill out the form below to submit your complaint. You do not need to be logged in.",
    nameLabel: "Name *",
    emailLabel: "Email *",
    titleLabel: "Complaint Title *",
    descriptionLabel: "Description *",
    submitButton: "Submit Complaint",
    submittingButton: "Submitting...",
    successMessage: "Complaint submitted successfully! Your tracking ID is: ",
    errorMessage: "Failed to submit complaint. Please try again.",
    servicesIntro: "We provide comprehensive complaint management services to help you resolve issues efficiently.",
    submitComplaintTitle: "Submit Complaint",
    submitComplaintDesc: "Submit your complaints through our easy-to-use platform. Track progress and get updates in real-time.",
    trackProgressTitle: "Track Progress",
    trackProgressDesc: "Monitor the status of your complaints and receive notifications about updates and resolutions.",
    faqDesc: "Find answers to frequently asked questions and get help with common issues.",
    learnMore: "Learn More →",
    whyChooseTitle: "Why Choose Our Services?",
    fastResponseTitle: "Fast Response",
    fastResponseDesc: "Quick acknowledgment and response to all complaints",
    secureTitle: "Secure & Private",
    secureDesc: "Your information is protected with industry-standard security",
    multiChannelTitle: "Multi-Channel Access",
    multiChannelDesc: "Submit complaints through website, mobile, or other channels",
    realtimeTitle: "Real-time Tracking",
    realtimeDesc: "Monitor your complaint progress with live updates",
    formIntroduction: "Please fill out this form.",
    comingSoon: "Track Complaint Page: Coming Soon!",
    yourComplaints: "Your Complaints",
    noComplaints: "You have not submitted any complaints yet.",
    submitNewComplaint: "Submit a New Complaint",
    statusResolved: "Resolved",
    statusInProgress: "In Progress",
    statusRejected: "Rejected",
    statusPending: "Pending",
    getInTouch: "Get in Touch",
    emailMethod: "Email",
    emailResponse: "We'll respond within 24 hours",
    phoneMethod: "Phone",
    phoneHours: "Monday - Friday, 9:00 AM - 6:00 PM",
    officeMethod: "Office",
    officeAddress: "123 Complaint Street",
    officeCity: "Kathmandu City, Nepal",
    chatMethod: "Live Chat",
    chatAvailability: "Available on website",
    followUs: "Follow Us",
    sendMessage: "Send us a Message",
    emailAddressLabel: "Email Address *",
    subjectLabel: "Subject *",
    messageLabel: "Message *",
    formNamePlaceholder: "Enter your full name",
    formEmailPlaceholder: "Enter your email address",
    formSubjectPlaceholder: "What is this regarding?",
    formMessagePlaceholder: "Please describe your inquiry or concern...",
    sendButton: "Send Message",
    messageSentSuccess: "Thank you! Your message has been sent successfully. We'll get back to you soon.",
    faqPreviewText: "Can't find what you're looking for? Check out our comprehensive FAQ section for quick answers to common questions.",
    viewAllFAQs: "View All FAQs →",
    contactTitle: "Contact page",
    contactSubtitle: "Get in touch with us for any inquiries or support.",

  },


  NE: {
    title: "आवाजकेन्द्र",
    paragraph:
      "आवाजकेन्द्र भनेको एक सफ्टवेयर हो जसले प्रयोगकर्ता वा ग्राहकले दिएका गुनासोहरूलाई प्राप्त गर्ने, प्रक्रिया गर्ने, ट्र्याक गर्ने र समाधान गर्ने काम गर्छ। यसले संगठनहरूलाई गुनासोहरूको व्यवस्थापन सजिलो बनाउन सहयोग पुर्‍याउँछ। यस प्रणालीमार्फत प्रयोगकर्ताले आफ्नो गुनासो दर्ता गर्न, स्थिति हेर्न र प्रशासकहरूले ती गुनासोहरूको अनुगमन तथा जवाफ दिन सक्छन्। यसले समस्या समाधानमा सञ्चार, जवाफदेहिता र पारदर्शिता बढाउँछ।",
    moreDetails: "थप विवरण",
    viewDemo: "डेमो हेर्नुहोस्",
    servicesTitle: "गुनासोहरूका लागि उपलब्ध माध्यमहरू",
    services: [
      { title: 'वेबसाइट' },
      { title: 'फेसबुक' },
      { title: 'मोबाइल फोन' },
      { title: 'ह्वाट्सएप' },
    ],
    footerParagraph:" आवाजकेन्द्र भनेको एक सफ्टवेयर हो जसले प्रयोगकर्ता वा ग्राहकले दिएका गुनासोहरूलाई प्राप्त गर्ने, प्रक्रिया गर्ने, ट्र्याक गर्ने र समाधान गर्ने काम गर्छ। यसले संगठनहरूलाई गुनासोहरूको व्यवस्थापन सजिलो बनाउन सहयोग पुर्‍याउँछ। यस प्रणालीमार्फत प्रयोगकर्ताले आफ्नो गुनासो दर्ता गर्न, स्थिति हेर्न र प्रशासकहरूले ती गुनासोहरूको अनुगमन तथा जवाफ दिन सक्छन्।",
     welcome: "फेरि स्वागत छ",
      create: "खाता खोल्नुहोस्",
      signInPrompt: "आफ्नो खातामा लगइन गर्नुहोस्",
      signUpPrompt: "आजै हामीसँग जोडिनुहोस्",
      fullName: "पूरा नाम",
      email: "इमेल ठेगाना",
      password: "पासवर्ड",
      namePlaceholder: "आफ्नो पूरा नाम हाल्नुहोस्",
      emailPlaceholder: "आफ्नो इमेल हाल्नुहोस्",
      passwordPlaceholder: "आफ्नो पासवर्ड हाल्नुहोस्",
      signInButton: "लगइन",
      createButton: "खाता खोल्नुहोस्",
      loading: "लोड हुँदै...",
      noAccount: "खाता छैन?",
      hasAccount: "पहिल्यै खाता छ?",
      switchSignUp: "साइन अप",
      switchSignIn: "लगइन",
      error: "केही गल्ती भयो। कृपया फेरि प्रयास गर्नुहोस्।",
      invalidLogin: "गलत इमेल वा पासवर्ड।",
      featuresTitle: "विशेषताहरू",
      loginParagraph: "हाम्रो व्यापक व्यवस्थापन प्रणालीमार्फत गुनासोहरूलाई कुशलतापूर्वक व्यवस्थापन र ट्र्याक गर्नुहोस्। आफ्नो कार्यप्रवाहलाई सुव्यवस्थित गर्नुहोस् र ग्राहक सन्तुष्टिमा सुधार गर्नुहोस्।",
      text1: "गुनासो दर्ता गर्न सजिलो",
      text2: "रियल-टाइम ट्र्याकिङ",
      text3: "सुरक्षित र निजी",
      service1Title: "गुनासो पेश गर्नुहोस्",
    service1Description: "हाम्रो अनलाइन गुनासो फारम प्रयोग गरेर सजिलै समस्याहरू रिपोर्ट गर्नुहोस्।",
    service2Title: "प्रक्रिया ट्र्याक गर्नुहोस्",
    service2Description: "ट्र्याकिङ आईडी प्रयोग गरेर आफ्नो गुनासोको हालको स्थिति जाँच गर्नुहोस्।",
    service3Title: "बारम्बार सोधिने प्रश्नहरू",
    service3Description: "प्रणालीको बारेमा सामान्य प्रश्नहरूको उत्तरहरू फेला पार्नुहोस्।",
    service4Title: "गुनासोहरू व्यवस्थापन गर्नुहोस् (प्रशासकलाई मात्र)",
    service4Description: "प्रशासकहरूले गुनासोहरू हेर्न, अद्यावधिक गर्न र समाधान गर्न सक्छन्।",
    home: "गृह पृष्ठ",
    contact: "सम्पर्क",
    about: "हाम्रो बारेमा",
    service: "सेवा",
    otherServices: "अन्य सेवाहरू",
    privacyPolicy: "गोपनीयता नीति",
    madeWith: "Team CMS द्वारा मायाले बनाइएको",
    link: "लिङ्क",
    complaintManager: "गुनासो प्रबन्धक",
    aboutTitle: "हाम्रो गुनासो व्यवस्थापन प्रणालीको बारेमा",
    aboutSubtitle: "अभिनव प्रविधि र समर्पित सहयोगद्वारा कुशल गुनासो समाधानमार्फत प्रयोगकर्ताहरूलाई सशक्त बनाउँदै।",
    ourMissionTitle: "हाम्रो मिशन",
    ourMissionText: "हामी ग्राहक र संस्थाहरूबीचको दूरी कम गर्ने एक कुशल र पारदर्शी गुनासो व्यवस्थापन प्रणाली प्रदान गर्न समर्पित छौं। हाम्रो प्लेटफर्मले प्रत्येक गुनासोलाई सुनिएको, ट्र्याक गरिएको र तुरुन्तै समाधान गरिएको सुनिश्चित गर्दछ।",
    whatWeDoTitle: "हामी के गर्छौं",
    whatWeDoText: "हाम्रो व्यापक गुनासो व्यवस्थापन प्रणालीले प्रयोगकर्ताहरूलाई निम्न गर्न अनुमति दिन्छ:",
    whatWeDoList: [
      "धेरै माध्यमहरूबाट गुनासो पेश गर्नुहोस्",
      "आफ्नो गुनासोको प्रगति वास्तविक समयमा ट्र्याक गर्नुहोस्",
      "अपडेट र सूचनाहरू प्राप्त गर्नुहोस्",
      "एक व्यापक FAQ खण्डमा पहुँच गर्नुहोस्",
      "आफ्ना समस्याहरूको समयमै समाधान प्राप्त गर्नुहोस्",
    ],
    ourValuesTitle: "हाम्रा मूल्यहरू",
    values: [
      { title: "पारदर्शिता", text: "गुनासोको स्थिति र समाधान प्रक्रियामा पूर्ण पारदर्शिता" },
      { title: "दक्षता", text: "द्रुत प्रतिक्रिया समय र सुव्यवस्थित गुनासो ह्यान्डलिङ" },
      { title: "विश्वसनीयता", text: "निरन्तर र भरपर्दो सेवा वितरण" },
      { title: "प्रयोगकर्ता-केन्द्रित", text: "प्रयोगकर्ता अनुभव र सन्तुष्टिलाई ध्यानमा राखेर डिजाइन गरिएको" },
    ],
    contactInfoTitle: "सम्पर्क जानकारी",
    contactEmail: "इमेल:",
    contactPhone: "फोन:",
    contactAddress: "ठेगाना:",
    contactHours: "घण्टा:",
    emailAddress: "infobit078@gmail.com",
    phoneNumber: "+९७७-९८१३४४००३१",
    address: "१२३ कम्प्लेन्ट स्ट्रिट, सिटी, स्टेट १२३४५",
    hoursText: "सोमबार - शुक्रबार, बिहान ९:०० बजे - बेलुका ६:०० बजे",
    faqTitle: "बारम्बार सोधिने प्रश्नहरू",
    faqIntro: "हाम्रो गुनासो व्यवस्थापन प्रणालीको बारेमा सामान्य प्रश्नहरूको उत्तरहरू फेला पार्नुहोस्।",
    faqData: [
      {
        id: 1,
        question: "गुनासो कसरी दर्ता गर्ने?",
        answer: "तपाईं 'गुनासो दर्ता गर्नुहोस्' मा क्लिक गरेर वा गुनासो फारममा गएर गुनासो दर्ता गर्न सक्नुहुन्छ। तपाईंको नाम, इमेल र गुनासोका विवरणहरू सहित आवश्यक जानकारी भर्नुहोस्, त्यसपछि पेश गर्नुहोस् क्लिक गर्नुहोस्।"
      },
      {
        id: 2,
        question: "मेरो गुनासोको स्थिति कसरी थाहा पाउने?",
        answer: "आफ्नो गुनासोको स्थिति थाहा पाउन, 'प्रगति ट्र्याक गर्नुहोस्' पृष्ठमा जानुहोस् र आफ्नो ट्र्याकिङ आईडी र इमेल ठेगाना प्रविष्ट गर्नुहोस्। तपाईंले गुनासो दर्ता गर्दा एक ट्र्याकिङ आईडी प्राप्त गर्नुहुनेछ।"
      },
      {
        id: 3,
        question: "गुनासो समाधान हुन कति समय लाग्छ?",
        answer: "गुनासो समाधान हुन लाग्ने समय समस्याको जटिलतामा निर्भर गर्दछ। सामान्य गुनासोहरू सामान्यतया ३-५ कार्य दिनमा समाधान हुन्छन्, जबकि थप जटिल समस्याहरूलाई १-२ हप्ता लाग्न सक्छ।"
      },
      {
        id: 4,
        question: "के म गुमनाम रूपमा गुनासो दर्ता गर्न सक्छु?",
        answer: "हाल, गुनासो दर्ता गर्नका लागि हामीलाई तपाईंको नाम र इमेल ठेगाना चाहिन्छ। यसले हामीलाई तपाईंको गुनासोको स्थिति र समाधानको बारेमा तपाईंसँग कुराकानी गर्न मद्दत गर्छ।"
      },
      {
        id: 5,
        question: "मैले मेरो गुनासोमा के-कस्ता जानकारी समावेश गर्नुपर्छ?",
        answer: "कृपया सकेसम्म धेरै विवरणहरू समावेश गर्नुहोस्: घटनाको मिति, संलग्न व्यक्तिहरूको नाम, विशेष समस्याहरू, र तपाईंसँग भएका कुनै पनि सहायक कागजात वा प्रमाण।"
      },
      {
        id: 6,
        question: "मलाई अपडेटहरू बारे कसरी सूचित गरिनेछ?",
        answer: "तपाईंले आफ्नो गुनासोको सबै अपडेटहरूको लागि इमेल सूचनाहरू प्राप्त गर्नुहुनेछ। तपाईं हाम्रो वेबसाइटमा ट्र्याकिङ सुविधा प्रयोग गरेर कुनै पनि समय स्थिति जाँच गर्न सक्नुहुन्छ।"
      },
      {
        id: 7,
        question: "के म मेरो गुनासो सम्पादन वा फिर्ता लिन सक्छु?",
        answer: "तपाईं हाम्रो सहयोग टोलीसँग सम्पर्क गरेर आफ्नो गुनासो सम्पादन वा फिर्ता लिन अनुरोध गर्न सक्नुहुन्छ। यस्ता अनुरोधहरू गर्दा कृपया आफ्नो ट्र्याकिङ आईडी उपलब्ध गराउनुहोस्।"
      },
      {
        id: 8,
        question: "यदि म समाधानबाट सन्तुष्ट भएन भने के गर्ने?",
        answer: "यदि तपाईं प्रारम्भिक समाधानबाट सन्तुष्ट हुनुहुन्न भने, तपाईं हाम्रो सहयोग टोलीसँग सम्पर्क गरेर पुनरावलोकनको लागि अनुरोध गर्न सक्नुहुन्छ। हामी थप अनुसन्धान गर्नेछौं र थप सहयोग प्रदान गर्नेछौं।"
      }
    ],
    questionsTitle: "अझै प्रश्नहरू छन्?",
    questionsText: "यदि तपाईंले खोजिरहनुभएको जवाफ पाउनुभएन भने, कृपया हामीलाई सम्पर्क गर्न नहिचकिचाउनुहोस्।",
    emailSupport: "इमेल सहयोग",
    phoneSupport: "फोन सहयोग",
    liveChat: "लाइभ च्याट",
    chatHours: "व्यापार घण्टाको समयमा उपलब्ध",
    quickLinksTitle: "द्रुत लिङ्कहरू",
    submitComplaint: "गुनासो पेश गर्नुहोस्",
    trackComplaint: "आफ्नो गुनासो ट्र्याक गर्नुहोस्",
    aboutSystem: "हाम्रो प्रणालीको बारेमा",
    ourServices: "हाम्रो सेवाहरू",
    formTitle: "गुनासो दर्ता गर्नुहोस्",
    formIntro: "गुनासो दर्ता गर्नका लागि तलको फारम भर्नुहोस्। तपाईंलाई लग इन गर्न आवश्यक छैन।",
    nameLabel: "नाम *",
    emailLabel: "इमेल *",
    titleLabel: "गुनासोको शीर्षक *",
    descriptionLabel: "विवरण *",
    submitButton: "गुनासो पेश गर्नुहोस्",
    submittingButton: "पेश गर्दै...",
    successMessage: "गुनासो सफलतापूर्वक पेश गरिएको छ! तपाईंको ट्र्याकिङ आईडी हो: ",
    errorMessage: "गुनासो पेश गर्न असफल भयो। कृपया फेरि प्रयास गर्नुहोस्।",
    servicesIntro: "हामी तपाईंलाई कुशलतापूर्वक समस्या समाधान गर्न मद्दत गर्नको लागि व्यापक गुनासो व्यवस्थापन सेवाहरू प्रदान गर्दछौं।",
    submitComplaintTitle: "गुनासो पेश गर्नुहोस्",
    submitComplaintDesc: "हाम्रो सजिलो-प्रयोग गर्ने प्लेटफर्म मार्फत आफ्ना गुनासोहरू पेश गर्नुहोस्। प्रगति ट्र्याक गर्नुहोस् र वास्तविक समयमा अपडेटहरू प्राप्त गर्नुहोस्।",
    trackProgressTitle: "प्रगति ट्र्याक गर्नुहोस्",
    trackProgressDesc: "आफ्नो गुनासोहरूको स्थिति निगरानी गर्नुहोस् र अपडेट र समाधानहरूको बारेमा सूचनाहरू प्राप्त गर्नुहोस्।",
    faqDesc: "प्रायः सोधिने प्रश्नहरूको जवाफ फेला पार्नुहोस् र सामान्य समस्याहरूको लागि मद्दत प्राप्त गर्नुहोस्।",
    learnMore: "थप जान्नुहोस् →",
    whyChooseTitle: "हाम्रा सेवाहरू किन छनौट गर्ने?",
    fastResponseTitle: "द्रुत प्रतिक्रिया",
    fastResponseDesc: "सबै गुनासोहरूको लागि द्रुत स्वीकृति र प्रतिक्रिया",
    secureTitle: "सुरक्षित र निजी",
    secureDesc: "तपाईंको जानकारी उद्योग-मानक सुरक्षाको साथ सुरक्षित छ",
    multiChannelTitle: "बहु-च्यानल पहुँच",
    multiChannelDesc: "वेबसाइट, मोबाइल, वा अन्य च्यानलहरू मार्फत गुनासोहरू पेश गर्नुहोस्",
    realtimeTitle: "वास्तविक-समय ट्र्याकिङ",
    realtimeDesc: "प्रत्यक्ष अपडेटहरूको साथ तपाईंको गुनासो प्रगति निगरानी गर्नुहोस्",
    formIntroduction: "कृपया यो फारम भर्नुहोस्।",
    comingSoon: "गुनासो ट्र्याकिङ पृष्ठ: चाँडै आउँदैछ!",
    yourComplaints: "तपाईंका गुनासोहरू",
    noComplaints: "तपाईंले अहिलेसम्म कुनै गुनासो पेश गर्नुभएको छैन।",
    submitNewComplaint: "नयाँ गुनासो पेश गर्नुहोस्",
    statusResolved: "समाधान भयो",
    statusInProgress: "प्रगतिमा",
    statusRejected: "अस्वीकृत",
    statusPending: "बाँकी",
    getInTouch: "सम्पर्कमा रहनुहोस्",
    emailMethod: "इमेल",
    emailResponse: "हामी २४ घण्टाभित्र जवाफ दिनेछौं",
    phoneMethod: "फोन",
    phoneHours: "सोमबार - शुक्रबार, बिहान ९:०० - साँझ ६:००",
    officeMethod: "कार्यालय",
    officeAddress: "१२३ गुनासो मार्ग",
    officeCity: "काठमाडौं शहर, नेपाल",
    chatMethod: "लाइभ च्याट",
    chatAvailability: "वेबसाइटमा उपलब्ध छ",
    followUs: "हामीलाई पछ्याउनुहोस्",
    sendMessage: "हामीलाई सन्देश पठाउनुहोस्",
    emailAddressLabel: "इमेल ठेगाना *",
    subjectLabel: "विषय *",
    messageLabel: "सन्देश *",
    formNamePlaceholder: "आफ्नो पूरा नाम प्रविष्ट गर्नुहोस्",
    formEmailPlaceholder: "आफ्नो इमेल ठेगाना प्रविष्ट गर्नुहोस्",
    formSubjectPlaceholder: "यो के सम्बन्धित छ?",
    formMessagePlaceholder: "कृपया आफ्नो जिज्ञासा वा चिन्ताको बारेमा वर्णन गर्नुहोस्...",
    sendButton: "सन्देश पठाउनुहोस्",
    messageSentSuccess: "धन्यवाद! तपाईंको सन्देश सफलतापूर्वक पठाइएको छ। हामी तपाईंलाई छिट्टै सम्पर्क गर्नेछौं।",
    faqPreviewText: "तपाईंले खोजिरहनुभएको कुरा फेला पार्न सक्नुहुन्न? सामान्य प्रश्नहरूको द्रुत उत्तरहरूको लागि हाम्रो विस्तृत FAQ खण्ड जाँच गर्नुहोस्।",
    viewAllFAQs: "सबै FAQ हेर्नुहोस् →",
   contactTitle: "सम्पर्क पृष्ठ",
    contactSubtitle: "कुनै पनि जिज्ञासा वा सहयोगको लागि हामीसँग सम्पर्क गर्नुहोस्।",

  },
};

// Placeholder components for user pages
// const Profile = () => (
//   <ProtectedRoute>
//     <div className="form-page-container">
//       <div className="form-content">
//         <h2>User Profile</h2>
//         <p>This is the user profile page. Add your profile management features here.</p>
//       </div>
//     </div>
//   </ProtectedRoute>
// );

const Dashboard = () => (
  <ProtectedRoute>
    <div className="form-page-container">
      <div className="form-content">
        <h2>Dashboard</h2>
        <p>This is the user dashboard page. Add your dashboard features here.</p>
      </div>
    </div>
  </ProtectedRoute>
);

function App() {
  const [language, setLanguage] = useState('EN');
  const [mode, setMode] = useState('light');

  const toggleMode = () => setMode(mode === 'light' ? 'dark' : 'light');

  return (
    <Router>
      <AuthProvider>
        <div className="app-container">
          <Navbar
            language={language}
            setLanguage={setLanguage}
            mode={mode}
            toggleMode={toggleMode}
          />

          <main className="main-content">
            <Routes>
              <Route
                path="/"
                element={<Home mode={mode} content={languageContent[language]} />}
              />
              <Route path="/about" element={<About content={languageContent[language]} />} />
              <Route path="/services" element={<Services content={languageContent[language]}/>} />
              <Route path="/contact" element={<Contact content={languageContent[language]}/>} />
              {/* <Route path="/track" element={<TrackProgress content={languageContent[language]}/>} /> */}
              <Route path="/faq" element={<FAQ content={languageContent[language]}/>} />
              <Route path='/public-form' element={<PublicForm content={languageContent[language]}/>} />
              <Route path="/profile" element={
  <ProtectedRoute>
    <Profile />
  </ProtectedRoute>
} />

              <Route 
                path="/track" 
                element={
                  <ProtectedRoute>
                    <TrackProgress content={languageContent[language]}/>
                  </ProtectedRoute>
                  
                } 
              />

               <Route 
                path="/admin" 
                element={
                  <ProtectedRoute requiredRole="admin"> {/* <-- New usage here */}
                    <AdminDashboard />
                  </ProtectedRoute>
                } 
              />

              <Route path="/login" element={<LoginPage content={languageContent[language]}/>} />
              <Route path="/signup" element={<SignupPage content={languageContent[language]}/>} />
              <Route path="/profile" element={<Profile content={languageContent[language]}/>} />
              <Route path="/dashboard" element={<Dashboard content={languageContent[language]}/>} />
            </Routes>
          </main>

          <Footer content={languageContent[language]}/>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
