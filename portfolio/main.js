// Mobile Navigation
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('fa-bars');
            hamburger.classList.toggle('fa-times');
        });
        
        // Close mobile nav when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.classList.add('fa-bars');
                hamburger.classList.remove('fa-times');
            });
        });
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if(targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Add animation to timeline items on scroll
        const timelineItems = document.querySelectorAll('.timeline-item');
        
        function checkScroll() {
            timelineItems.forEach(item => {
                const itemTop = item.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (itemTop < windowHeight * 0.85) {
                    item.style.opacity = 1;
                    item.style.transform = 'translateX(0)';
                }
            });
        }
        
        // Initialize timeline items
        timelineItems.forEach(item => {
            item.style.opacity = 0;
            item.style.transition = 'all 0.5s ease';
            
            if (item.classList.contains('timeline-item:nth-child(odd)')) {
                item.style.transform = 'translateX(-50px)';
            } else {
                item.style.transform = 'translateX(50px)';
            }
        });
        
        window.addEventListener('scroll', checkScroll);
        window.addEventListener('load', checkScroll);