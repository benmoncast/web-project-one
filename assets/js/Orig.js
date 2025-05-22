// Mobile Menu Toggle
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
        });
        
        // Back to Top Button
        const backToTopButton = document.getElementById('back-to-top');
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.remove('hidden');
            } else {
                backToTopButton.classList.add('hidden');
            }
        });
        
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        
        // Language Switcher
        const currentLangButton = document.getElementById('current-lang');
        const langOptionButtons = document.querySelectorAll('.lang-option-btn');
        const elementsToTranslate = document.querySelectorAll('[data-i18n]');
        
        // Translations
        const translations = {
            en: {
                // Navigation
                "home": "Home",
                "about": "About",
                "services": "Services",
                "products": "Products",
                "contact": "Contact",
                
                // Hero Section
                "hero-title": "Innovative Business Solutions",
                "hero-subtitle": "We help businesses grow with cutting-edge technology and strategic consulting services.",
                "hero-cta": "Get Started",
                "hero-learn": "Learn More",
                
                // About Section
                "about-title": "About Our Company",
                "about-description": "Founded in 2010, we've been providing exceptional business solutions to clients worldwide, helping them achieve their goals through innovation and expertise.",
                "about-subtitle": "Our Mission",
                "about-mission": "To empower businesses with innovative solutions that drive growth, efficiency, and competitive advantage in today's dynamic market environment.",
                "about-value1": "Innovation",
                "about-value1-desc": "We constantly explore new ideas and technologies to stay ahead of the curve.",
                "about-value2": "Integrity",
                "about-value2-desc": "We build trust through transparency, honesty, and ethical business practices.",
                "about-value3": "Collaboration",
                "about-value3-desc": "We work closely with our clients to understand their unique needs and challenges.",
                
                // Services Section
                "services-title": "Our Services",
                "services-description": "We offer a comprehensive range of services designed to meet your business needs at every stage of growth.",
                "service1-title": "Business Consulting",
                "service1-desc": "Strategic planning and expert advice to help your business navigate challenges and seize opportunities.",
                "service2-title": "Technology Solutions",
                "service2-desc": "Custom software development and IT infrastructure solutions tailored to your specific requirements.",
                "service3-title": "Marketing Strategy",
                "service3-desc": "Data-driven marketing campaigns and brand positioning to increase your market share.",
                "service4-title": "Global Expansion",
                "service4-desc": "Support for businesses looking to expand internationally with market research and localization.",
                "service5-title": "Data Analytics",
                "service5-desc": "Transform your data into actionable insights with our advanced analytics solutions.",
                "service6-title": "Customer Support",
                "service6-desc": "24/7 multilingual customer support services to enhance your customer experience.",
                "learn-more": "Learn More",
                
                // Products Section
                "products-title": "Our Products",
                "products-description": "Discover our innovative product suite designed to streamline your business operations.",
                "product1-title": "Business Analytics Pro",
                "product1-desc": "Comprehensive analytics platform with real-time dashboards, predictive modeling, and custom reporting.",
                "product2-title": "Marketing Automation Suite",
                "product2-desc": "All-in-one marketing platform with email automation, lead scoring, and campaign management.",
                "product3-title": "Enterprise CRM",
                "product3-desc": "Customer relationship management system with sales pipeline tracking and customer insights.",
                "product4-title": "HR Management Pro",
                "product4-desc": "Complete human resources solution with payroll, benefits administration, and performance tracking.",
                "feature1": "Real-time Data",
                "feature2": "Custom Reports",
                "feature3": "AI Predictions",
                "feature4": "Email Automation",
                "feature5": "Lead Scoring",
                "feature6": "ROI Tracking",
                "feature7": "Sales Pipeline",
                "feature8": "Customer Insights",
                "feature9": "Team Collaboration",
                "feature10": "Payroll Processing",
                "feature11": "Benefits Admin",
                "feature12": "Performance Tracking",
                "request-demo": "Request Demo",
                
                // Testimonials Section
                "testimonials-title": "What Our Clients Say",
                "testimonials-description": "Hear from businesses that have transformed their operations with our solutions.",
                "testimonial1": "\"The business analytics platform provided by Global Business Solutions has transformed how we make decisions. The insights are invaluable.\"",
                "testimonial2": "\"Their consulting services helped us identify new markets and expand internationally. The team is knowledgeable and responsive.\"",
                "testimonial3": "\"The marketing automation suite has saved us countless hours and increased our conversion rates significantly. Highly recommended!\"",
                "position1": "CEO, TechForward",
                "position2": "Director, Global Imports",
                "position3": "Marketing Director, Bright Ideas",
                
                // Contact Section
                "contact-title": "Get In Touch",
                "contact-description": "Have questions or ready to get started? Contact us today and our team will be happy to assist you.",
                "contact-info": "Contact Information",
                "address-title": "Address",
                "address": "123 Business Avenue, Suite 500<br>New York, NY 10001",
                "phone-title": "Phone",
                "email-title": "Email",
                "hours-title": "Business Hours",
                "hours": "Monday - Friday: 9:00 AM - 6:00 PM<br>Saturday - Sunday: Closed",
                "follow-us": "Follow Us",
                "form-name": "Name",
                "form-email": "Email",
                "form-subject": "Subject",
                "form-message": "Message",
                "form-submit": "Send Message",
                
                // Footer
                "footer-about": "Innovative solutions for your business growth and success.",
                "footer-links": "Quick Links",
                "footer-services": "Services",
                "footer-newsletter": "Newsletter",
                "newsletter-desc": "Subscribe to our newsletter for the latest updates and insights.",
                "subscribe": "Subscribe",
                "copyright": "© 2023 Global Business Solutions. All rights reserved."
            },
            el: {
                // Navigation
                "home": "Αρχική",
                "about": "Σχετικά",
                "services": "Υπηρεσίες",
                "products": "Προϊόντα",
                "contact": "Επικοινωνία",
                
                // Hero Section
                "hero-title": "Καινοτόμες Επιχειρηματικές Λύσεις",
                "hero-subtitle": "Βοηθάμε τις επιχειρήσεις να αναπτυχθούν με προηγμένη τεχνολογία και στρατηγικές συμβουλευτικές υπηρεσίες.",
                "hero-cta": "Ξεκινήστε",
                "hero-learn": "Μάθετε Περισσότερα",
                
                // About Section
                "about-title": "Σχετικά με την Εταιρεία μας",
                "about-description": "Ιδρυθείσα το 2010, παρέχουμε εξαιρετικές επιχειρηματικές λύσεις σε πελάτες παγκοσμίως, βοηθώντας τους να επιτύχουν τους στόχους τους μέσω καινοτομίας και εμπειρογνωμοσύνης.",
                "about-subtitle": "Η Αποστολή μας",
                "about-mission": "Να ενδυναμώσουμε τις επιχειρήσεις με καινοτόμες λύσεις που οδηγούν σε ανάπτυξη, αποδοτικότητα και ανταγωνιστικό πλεονέκτημα στο σημερινό δυναμικό εμπορικό περιβάλλον.",
                "about-value1": "Καινοτομία",
                "about-value1-desc": "Εξερευνούμε συνεχώς νέες ιδέες και τεχνολογίες για να παραμείνουμε μπροστά.",
                "about-value2": "Ακεραιότητα",
                "about-value2-desc": "Χτίζουμε εμπιστοσύνη μέσω διαφάνειας, ειλικρίνειας και ηθικών επιχειρηματικών πρακτικών.",
                "about-value3": "Συνεργασία",
                "about-value3-desc": "Συνεργαζόμαστε στενά με τους πελάτες μας για να κατανοήσουμε τις μοναδικές τους ανάγκες και προκλήσεις.",
                
                // Services Section
                "services-title": "Οι Υπηρεσίες μας",
                "services-description": "Προσφέρουμε ένα ευρύ φάσμα υπηρεσιών σχεδιασμένων να καλύψουν τις επιχειρηματικές σας ανάγκες σε κάθε στάδιο ανάπτυξης.",
                "service1-title": "Επιχειρηματική Συμβουλευτική",
                "service1-desc": "Στρατηγικός σχεδιασμός και εμπειρογνωμοσύνη για να βοηθήσει την επιχείρησή σας να αντιμετωπίσει προκλήσεις και να εκμεταλλευτεί ευκαιρίες.",
                "service2-title": "Τεχνολογικές Λύσεις",
                "service2-desc": "Προσαρμοσμένη ανάπτυξη λογισμικού και λύσεις IT υποδομής προσαρμοσμένες στις συγκεκριμένες σας απαιτήσεις.",
                "service3-title": "Στρατηγική Μάρκετινγκ",
                "service3-desc": "Στρατηγικές μάρκετινγκ βασισμένες σε δεδομένα και θέση εμπορικής μάρκας για να αυξήσετε το μερίδιο αγοράς σας.",
                "service4-title": "Διεθνής Επέκταση",
                "service4-desc": "Υποστήριξη για επιχειρήσεις που επιθυμούν να επεκταθούν διεθνώς με έρευνα αγοράς και τοπικοποίηση.",
                "service5-title": "Ανάλυση Δεδομένων",
                "service5-desc": "Μετατρέψτε τα δεδομένα σας σε χρήσιμες πληροφορίες με τις προηγμένες μας λύσεις ανάλυσης.",
                "service6-title": "Υποστήριξη Πελατών",
                "service6-desc": "Υπηρεσίες υποστήριξης πελατών πολλαπλών γλωσσών 24/7 για να ενισχύσετε την εμπειρία των πελατών σας.",
                "learn-more": "Μάθετε Περισσότερα",
                
                // Products Section
                "products-title": "Τα Προϊόντα μας",
                "products-description": "Ανακαλύψτε τη σουίτα καινοτόμων προϊόντων μας σχεδιασμένη να απλοποιήσει τις επιχειρηματικές σας διαδικασίες.",
                "product1-title": "Business Analytics Pro",
                "product1-desc": "Πλατφόρμα περιεκτικής ανάλυσης με πίνακες ελέγχου σε πραγματικό χρόνο, προγνωστικά μοντέλα και προσαρμοσμένες αναφορές.",
                "product2-title": "Σουίτα Αυτοματισμού Μάρκετινγκ",
                "product2-desc": "Ολοκληρωμένη πλατφόρμα μάρκετινγκ με αυτοματοποιημένα email, βαθμολόγηση ενδιαφερόμενων και διαχείριση καμπανιών.",
                "product3-title": "Επιχειρησιακό CRM",
                "product3-desc": "Σύστημα διαχείρισης σχέσεων πελατών με παρακολούθηση πιπλίνων πωλήσεων και πληροφορίες πελατών.",
                "product4-title": "HR Management Pro",
                "product4-desc": "Ολοκληρωμένη λύση ανθρώπινων πόρων με επεξεργασία μισθοδοσίας, διαχείριση παροχών και παρακολούθηση απόδοσης.",
                "feature1": "Δεδομένα σε Πραγματικό Χρόνο",
                "feature2": "Προσαρμοσμένες Αναφορές",
                "feature3": "AI Προβλέψεις",
                "feature4": "Αυτοματοποιημένα Email",
                "feature5": "Βαθμολόγηση Ενδιαφερόμενων",
                "feature6": "Παρακολούθηση ROI",
                "feature7": "Πιπλίνα Πωλήσεων",
                "feature8": "Πληροφορίες Πελατών",
                "feature9": "Συνεργασία Ομάδας",
                "feature10": "Επεξεργασία Μισθοδοσίας",
                "feature11": "Διαχείριση Παροχών",
                "feature12": "Παρακολούθηση Απόδοσης",
                "request-demo": "Ζητήστε Δείγμα",
                
                // Testimonials Section
                "testimonials-title": "Τι Λένε οι Πελάτες μας",
                "testimonials-description": "Ακούστε από επιχειρήσεις που έχουν μεταμορφώσει τις λειτουργίες τους με τις λύσεις μας.",
                "testimonial1": "\"Η πλατφόρμα επιχειρηματικής ανάλυσης της Global Business Solutions έχει μεταμορφώσει τον τρόπο που παίρνουμε αποφάσεις. Οι πληροφορίες είναι ανεκτίμητες.\"",
                "testimonial2": "\"Οι συμβουλευτικές τους υπηρεσίες μας βοήθησαν να εντοπίσουμε νέες αγορές και να επεκταθούμε διεθνώς. Η ομάδα είναι γνώστες και ανταποκρίνεται.\"",
                "testimonial3": "\"Η σουίτα αυτοματισμού μάρκετινγκ μας έχει εξοικονομήσει αμέτρητες ώρες και έχει αυξήσει σημαντικά τα ποσοστά μετατροπής. Συνιστάται ανεπιφύλακτα!\"",
                "position1": "CEO, TechForward",
                "position2": "Διευθυντής, Global Imports",
                "position3": "Διευθύντρια Μάρκετινγκ, Bright Ideas",
                
                // Contact Section
                "contact-title": "Επικοινωνήστε μαζί μας",
                "contact-description": "Έχετε ερωτήσεις ή είστε έτοιμοι να ξεκινήσετε; Επικοινωνήστε μαζί μας σήμερα και η ομάδα μας θα χαρούμε να σας βοηθήσει.",
                "contact-info": "Στοιχεία Επικοινωνίας",
                "address-title": "Διεύθυνση",
                "address": "123 Business Avenue, Suite 500<br>Νέα Υόρκη, NY 10001",
                "phone-title": "Τηλέφωνο",
                "email-title": "Email",
                "hours-title": "Ωράριο Λειτουργίας",
                "hours": "Δευτέρα - Παρασκευή: 9:00 π.μ. - 6:00 μ.μ.<br>Σάββατο - Κυριακή: Κλειστά",
                "follow-us": "Ακολουθήστε μας",
                "form-name": "Όνομα",
                "form-email": "Email",
                "form-subject": "Θέμα",
                "form-message": "Μήνυμα",
                "form-submit": "Αποστολή Μηνύματος",
                
                // Footer
                "footer-about": "Καινοτόμες λύσεις για την επιχειρηματική σας ανάπτυξη και επιτυχία.",
                "footer-links": "Γρήγοροι Σύνδεσμοι",
                "footer-services": "Υπηρεσίες",
                "footer-newsletter": "Ενημερωτικό Δελτίο",
                "newsletter-desc": "Εγγραφείτε στο ενημερωτικό μας δελτίο για τις τελευταίες ενημερώσεις και πληροφορίες.",
                "subscribe": "Εγγραφή",
                "copyright": "© 2023 Global Business Solutions. Με επιφύλαξη παντός δικαιώματος."
            }
        };
        
        // Set initial language
        let currentLang = 'en';
        
        // Function to translate the page
        function translatePage(lang) {
            currentLang = lang;
            elementsToTranslate.forEach(element => {
                const key = element.getAttribute('data-i18n');
                if (translations[lang] && translations[lang][key]) {
                    element.innerHTML = translations[lang][key];
                }
            });
            
            // Update language button text
            if (lang === 'en') {
                currentLangButton.innerHTML = '<span class="mr-2">EN</span><i class="fas fa-chevron-down text-xs"></i>';
            } else {
                currentLangButton.innerHTML = '<span class="mr-2">EL</span><i class="fas fa-chevron-down text-xs"></i>';
            }
        }
        
        // Add event listeners to language buttons
        langOptionButtons.forEach(button => {
            button.addEventListener('click', () => {
                const lang = button.getAttribute('data-lang');
                translatePage(lang);
            });
        });
        
        // Contact Form Submission
        const contactForm = document.getElementById('contact-form');
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the form data to a server
            // For this example, we'll just show an alert
            alert(currentLang === 'en' 
                ? `Thank you, ${name}! Your message has been sent. We'll contact you soon.` 
                : `Ευχαριστούμε, ${name}! Το μήνυμά σας έχει σταλεί. Θα επικοινωνήσουμε μαζί σας σύντομα.`);
            
            // Reset form
            contactForm.reset();
        });
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    if (mobileMenu.classList.contains('open')) {
                        mobileMenu.classList.remove('open');
                    }
                }
            });
        });