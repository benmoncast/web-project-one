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
                "hero-title": "Innovative Cleaning Solutions",
                "hero-subtitle": "We provide professional cleaning services with eco-friendly products and exceptional attention to detail.",
                "hero-cta": "Call Us",
                "hero-learn": "Learn More",
                
                // About Section
                "about-title": "About Our Company",
                "about-description": "We've been providing exceptional cleaning services to homes and businesses, helping them maintain pristine environments through eco-friendly practices.",
                "about-subtitle": "Our Mission",
                "about-mission": "To be the most trusted and innovative cleaning service provider, delivering exceptional cleanliness and peace of mind to homes and businesses while promoting sustainable and responsible practices.",
                "about-value1": "Innovation",
                "about-value1-desc": "We constantly exploring new ideas and technology to make our service of cleaning more efficient and productive.",
                "about-value2": "Integrity",
                "about-value2-desc": "We build trust and Good Relationship with our client, truth, honesty and dedication to work in all our Cleaning Services.",
                "about-value3": "Collaboration",
                "about-value3-desc": "We work closely with our clients unique need and demand in there cleaning preferences.",
                
                // Services Section
                "services-title": "Our Services",
                "services-description": "We offer a comprehensive range of services designed to deliver satisfaction through quality, consistency, and personalized care.",
                "service1-title": "Cleaning of Hotels",
                "service1-desc": "Premium cleanliness that leaves lasting impressions.Maintain a spotless and welcoming environment that exceeds guest expectations and enhances your hotel’s reputation.",
                "service2-title": "AirBnb",
                "service2-desc": "Every stay begins with a pristine welcome. Provide guests with a fresh, clean, and five-star experience every time they check in. ",
                "service3-title": "Store",
                "service3-desc": "Spotless spaces that invite customers in.Enhance your retail experience with a clean, polished environment that boosts customer trust and satisfaction. ",
                "service4-title": "Apartments",
                "service4-desc": "Clean homes. Happy residents. Reliable apartment cleaning services that promote comfort, hygiene, and peace of mind for residents.",
                "service5-title": "Offices",
                "service5-desc": "A clean workspace is a productive workspace.Professional office cleaning that fosters health, focus, and professionalism. ",
                "service6-title": "Yacht",
                "service6-desc": "Luxury cleaning for life at sea. Meticulous cleaning services to maintain the elegance and hygiene of your yacht — inside and out. ",
                
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
                "testimonial1": "\"I am very satisfied with the outcome, they really know what they're doing, it exceeds my expectation. Definitely, I would recommend this to my friends and our clients and looking forward to book you again.\"",
                "testimonial2": "\"10/10 ratings for their dedication and hardwork. They rarely talk to each other because they are so busy doing such a great job at cleaning our hostel. We can’t help but to compare them and our cleaning experience to other cleaners we’ve hired before.\"",
                "testimonial3": "\"I am very very very satisfied!! I will make this as a monthly appointment for my shop and would also get the service for my other shops.\"",
                "testimonial4": "\"The marketing automation suite has saved us countless hours and increased our conversion rates significantly. Highly recommended!\"",
                "position1": "Sp Residents General Manager",
                "position2": "Sahostelgrupp Operational Manager",
                "position3": "Shop Owner",
                "position4": "",
                
                // Contact Section
                "contact-title": "Get In Touch",
                "contact-description": "Have questions or ready to get started? Contact us today and our team will be happy to assist you.",
                "contact-info": "Contact Information",
                "contact-location": "Our Location",
                "address-title": "Address",
                "address": "Menelaou 87 adios Dinitrios Athens,<br>Greece. Tk 17342",
                "phone-title": "Phone",

                "email-title": "Email",
                "hours-title": "Business Hours",
                "hours": "24/7 Service – Monday to Sunday<br>",
                "follow-us": "Follow Us",
                "form-name": "Name",
                "form-email": "Email",
                "form-subject": "Subject",
                "form-message": "Message",
                "form-submit": "Send Message",
                
                // Footer
                "footer-about": "We provide professional cleaning services with eco-friendly products and exceptional attention to detail.",
                "footer-links": "Quick Links",
                "footer-services": "Services",
                "footer-newsletter": "Services",
                "newsletter-desc": "Subscribe to our newsletter for the latest updates and insights.",
                "subscribe": "Subscribe",
                "copyright": "© 2025 All2be Clean. All rights reserved."
            },
            el: {
                // Navigation
                "home": "Αρχική",
                "about": "Σχετικά",
                "services": "Υπηρεσίες",
                "products": "Προϊόντα",
                "contact": "Επικοινωνία",
                
                // Hero Section
                "hero-title": "Καινοτόμες Λύσεις Καθαρισμού",
                "hero-subtitle": "Προσφέρουμε επαγγελματικές υπηρεσίες καθαρισμού με οικολογικά προϊόντα και εξαιρετική προσοχή στη λεπτομέρεια.",
                "hero-cta": "Καλέστε μας ",
                "hero-learn": "Μάθετε Περισσότερα",
                
                // About Section
                "about-title": "Σχετικά με την Εταιρεία μας",
                "about-description": "Προσφέρουμε εξαιρετικές υπηρεσίες καθαρισμού σε κατοικίες και επιχειρήσεις, βοηθώντας στη διατήρηση καθαρών χώρων μέσω οικολογικών πρακτικών.",
                "about-subtitle": "Η Αποστολή μας",
                "about-mission": "Να ενδυναμώσουμε τις επιχειρήσεις με καινοτόμες λύσεις που οδηγούν σε ανάπτυξη, αποδοτικότητα και ανταγωνιστικό πλεονέκτημα στο σημερινό δυναμικό εμπορικό περιβάλλον.",
                "about-value1": "Καινοτομία",
                "about-value1-desc": "Εξερευνούμε συνεχώς νέες ιδέες και τεχνολογίες για να κάνουμε τις υπηρεσίες καθαρισμού μας πιο αποδοτικές και παραγωγικές.",
                "about-value2": "Ακεραιότητα",
                "about-value2-desc": "Χτίζουμε εμπιστοσύνη και καλή σχέση με τον πελάτη μας, με αλήθεια, ειλικρίνεια και αφοσίωση στη δουλειά σε όλες τις Υπηρεσίες Καθαρισμού μας.",
                "about-value3": "Συνεργασία",
                "about-value3-desc": "Εργαζόμαστε στενά με τους πελάτες μας, λαμβάνοντας υπόψη τις μοναδικές τους ανάγκες και προτιμήσεις στον καθαρισμό.",
                
                // Services Section
                "services-title": "Οι Υπηρεσίες μας",
                "services-description": "Προσφέρουμε ένα ολοκληρωμένο φάσμα υπηρεσιών σχεδιασμένων να προσφέρουν ικανοποίηση μέσω ποιότητας, συνέπειας και εξατομικευμένης φροντίδας.",
                "service1-title": "Καθαρισμός Ξενοδοχείων",
                "service1-desc": "Ποιοτική καθαριότητα που αφήνει ανεξίτηλες εντυπώσεις. Διατηρήστε ένα άψογο και φιλόξενο περιβάλλον που υπερβαίνει τις προσδοκίες των επισκεπτών και ενισχύει τη φήμη του ξενοδοχείου σας.",
                "service2-title": "Airbnb",
                "service2-desc": "Κάθε διαμονή ξεκινά με μια καθαρή και φιλόξενη υποδοχή. Προσφέρετε στους επισκέπτες μια φρέσκια, καθαρή και πεντάστερη εμπειρία κάθε φορά που κάνουν check-in.",
                "service3-title": "Κατάστημα",
                "service3-desc": "Άψογοι χώροι που προσκαλούν τους πελάτες. Αναβαθμίστε την εμπειρία λιανικής με ένα καθαρό, περιποιημένο περιβάλλον που ενισχύει την εμπιστοσύνη και την ικανοποίηση των πελατών.",
                "service4-title": "Διαμερίσματα",
                "service4-desc": "Καθαρά σπίτια. Ευτυχισμένοι κάτοικοι. Αξιόπιστες υπηρεσίες καθαρισμού διαμερισμάτων που προάγουν την άνεση, την υγιεινή και την ηρεμία των κατοίκων.",
                "service5-title": "Γραφεία",
                "service5-desc": "Ένας καθαρός χώρος εργασίας είναι ένας παραγωγικός χώρος εργασίας. Επαγγελματικός καθαρισμός γραφείων που προάγει την υγεία, τη συγκέντρωση και τον επαγγελματισμό.",
                
                "service6-title": "Γιοτ",
                "service6-desc": "Πολυτελής καθαρισμός για τη ζωή στη θάλασσα. Επιμελείς υπηρεσίες καθαρισμού για τη διατήρηση της κομψότητας και της υγιεινής του γιοτ σας — εσωτερικά και εξωτερικά.",
                
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
                "testimonials-description": "Ακούστε τις επιχειρήσεις που έχουν μεταμορφώσει τις λειτουργίες τους με τις λύσεις μας.",
                "testimonial1": "\"Είμαι πολύ ικανοποιημένος από το αποτέλεσμα, πραγματικά ξέρουν τι κάνουν, ξεπέρασε τις προσδοκίες μου. Σίγουρα θα το πρότεινα στους φίλους μου και στους πελάτες μας, και ανυπομονώ να σας ξανακλείσω.\"",
                "testimonial2": "\"Βαθμολογίες 10/10 για την αφοσίωση και τη σκληρή δουλειά τους. Σπάνια μιλάνε μεταξύ τους επειδή είναι τόσο απασχολημένοι με το να κάνουν τόσο καλή δουλειά καθαρίζοντας τον ξενώνα μας. Δεν μπορούμε παρά να συγκρίνουμε αυτούς και την εμπειρία μας στον καθαρισμό με άλλους καθαριστές που έχουμε προσλάβει στο παρελθόν.\"",
                "testimonial3": "\"Είμαι πάρα πάρα πάρα πολύ ικανοποιημένος!! Θα κλείνω αυτό το ραντεβού ως μηνιαίο ραντεβού για το κατάστημά μου και θα εξυπηρετούμαι και από τα άλλα καταστήματά μου.\"",
                "testimonial4": "\"Η σουίτα αυτοματισμού μάρκετινγκ μας έχει εξοικονομήσει αμέτρητες ώρες και έχει αυξήσει σημαντικά τα ποσοστά μετατροπής. Συνιστάται ανεπιφύλακτα!\"",
               
                "position1": "Γενικός Διευθυντής Sp Residents",
                "position2": "Διευθυντής Λειτουργιών Sahostelgrupp",
                "position3": "Ιδιοκτήτης καταστήματος",
                "position4": "",
                
                // Contact Section
                "contact-title": "Επικοινωνήστε μαζί μας",
                "contact-description": "Έχετε ερωτήσεις ή είστε έτοιμοι να ξεκινήσετε; Επικοινωνήστε μαζί μας σήμερα και η ομάδα μας θα χαρούμε να σας βοηθήσει.",
                "contact-info": "Στοιχεία Επικοινωνίας",
                "contact-location": "Η Τοποθεσία μας",
                "address-title": "Διεύθυνση",
                "address": "Μενελάου 87, Άγιος Δημήτριος, Αθήνα,<br>Ελλάδα, Τ.Κ. 17342",
                "phone-title": "Τηλέφωνο",
                "email-title": "Email",
                "hours-title": "Ωράριο Λειτουργίας",
                "hours": "24/7 Εξυπηρέτηση – Δευτέρα έως Κυριακή<br>", 

                "follow-us": "Ακολουθήστε μας",
                "form-name": "Όνομα",
                "form-email": "Email",
                "form-subject": "Θέμα",
                "form-message": "Μήνυμα",
                "form-submit": "Αποστολή Μηνύματος",
                
                // Footer
                "footer-about": "Προσφέρουμε επαγγελματικές υπηρεσίες καθαρισμού με οικολογικά προϊόντα και εξαιρετική προσοχή στη λεπτομέρεια.",
                "footer-links": "Γρήγοροι Σύνδεσμοι",
                "footer-services": "Υπηρεσίες",
                "footer-newsletter": "Υπηρεσίες",
                "newsletter-desc": "Εγγραφείτε στο ενημερωτικό μας δελτίο για τις τελευταίες ενημερώσεις και πληροφορίες.",
                "subscribe": "Εγγραφή",
                "copyright": "© 2025 All2be Clean. Όλα τα δικαιώματα κατοχυρωμένα."
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