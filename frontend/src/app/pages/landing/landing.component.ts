import {
  Component,
  HostListener,
  OnInit,
  AfterViewInit,
  OnDestroy,
  ViewEncapsulation,
  ViewChildren,
  ElementRef,
  QueryList
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  trigger,
  style,
  animate,
  transition,
  query,
  stagger,
} from '@angular/animations';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('fadeSlideUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate(
          '0.6s cubic-bezier(0.16, 1, 0.3, 1)',
          style({ opacity: 1, transform: 'translateY(0)' }),
        ),
      ]),
    ]),
    trigger('staggerContainer', [
      transition(':enter', [
        query(
          '@fadeSlideUp',
          [
            style({ opacity: 0, transform: 'translateY(30px)' }),
            stagger('100ms', [
              animate(
                '0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                style({ opacity: 1, transform: 'translateY(0)' }),
              ),
            ]),
          ],
          { optional: true },
        ),
      ]),
    ]),
  ],
})
export class LandingComponent implements OnInit, AfterViewInit, OnDestroy {
  isScrolled = false;
  isMobileMenuOpen = false;
  // View State (Scroll Animations)
  hasSeenSolutions = false;
  hasSeenStats = false;
  hasSeenFeaturesHeader = false;
  hasSeenTestimonials = false;
  hasSeenAbout = false;
  hasSeenCTA = false;
  activeFaqIndex: number | null = null;
  activeSection = 'home';
  sections = ['home', 'features', 'solutions', 'about', 'contact'];

  @ViewChildren('navItem') navItems!: QueryList<ElementRef>;
  indicatorStyle: any = { left: '0px', width: '0px' };

  // Auth Animation State
  isAuthAnimating = false;
  authActionType: 'login' | 'register' | null = null;

  // Feature Modal State
  activeFeatureModal: any = null;

  constructor(private router: Router) { }

  // Icons (removed for fallback)

  // Trusted Company Logos (Replace these URLs with your actual client logo image links)
  trustedCompanyLogos = [
    'https://res.cloudinary.com/b6pdv15b/image/upload/v1784236297/ChatGPT_Image_Jul_17_2026_02_35_27_AM_qvi6vt.png',
    'https://res.cloudinary.com/b6pdv15b/image/upload/v1784236296/ChatGPT_Image_Jul_17_2026_02_35_27_AM_-_Copy_3_fcox5y.png',
    'https://res.cloudinary.com/b6pdv15b/image/upload/v1784236296/ChatGPT_Image_Jul_17_2026_02_35_27_AM_-_Copy_2_bbjwpv.png',
    'https://res.cloudinary.com/b6pdv15b/image/upload/v1784236297/ChatGPT_Image_Jul_17_2026_02_38_41_AM_-_Copy_2_lt3npy.png',
    'https://res.cloudinary.com/b6pdv15b/image/upload/v1784236333/ChatGPT_Image_Jul_17_2026_02_38_41_AM_-_Copy_4_iextzv.png'
  ];

  // Features Data
  features = [
    {
      title: 'Project Planning & Management',
      description: 'Architect project timelines, track critical milestones, and orchestrate execution through a unified, centralized dashboard.',
      icon: 'Calendar',
      image: 'https://res.cloudinary.com/b6pdv15b/image/upload/v1784220747/i1_xhyw6f.jpg'
    },
    {
      title: 'Site Progress Monitoring',
      description: 'Monitor real-time site development, log daily activities, and maintain comprehensive compliance and progress records.',
      icon: 'Activity',
      image: 'https://res.cloudinary.com/b6pdv15b/image/upload/v1784220747/i2_rzxlue.png'
    },
    {
      title: 'Resource & Equipment Management',
      description: 'Optimize equipment allocation, track machinery utilization, and schedule preventative maintenance across your entire portfolio.',
      icon: 'Settings',
      image: 'https://res.cloudinary.com/b6pdv15b/image/upload/v1784220747/i3_nij5sx.jpg'
    },
    {
      title: 'Material & Inventory Management',
      description: 'Automate procurement workflows, track site inventory, and eliminate material shortages with real-time stock analytics.',
      icon: 'Package',
      image: 'https://res.cloudinary.com/b6pdv15b/image/upload/v1784220748/i4_lqyg84.jpg'
    },
    {
      title: 'Workforce Management',
      description: 'Coordinate distributed teams, track contractor attendance, and streamline shift scheduling for maximum workforce efficiency.',
      icon: 'Users',
      image: 'https://res.cloudinary.com/b6pdv15b/image/upload/v1784220747/i5_gaafq9.jpg'
    },
    {
      title: 'Analytics & Reporting',
      description: 'Generate executive-level reports, visualize budget utilization, and leverage actionable insights to drive strategic decision-making.',
      icon: 'BarChart2',
      image: 'https://res.cloudinary.com/b6pdv15b/image/upload/v1784220748/i6_totkq5.jpg'
    },
  ];

  // Carousel Images
  carouselImages = [
    'https://res.cloudinary.com/b6pdv15b/image/upload/v1784295030/db111_ysyvoe.png',
    'https://res.cloudinary.com/b6pdv15b/image/upload/v1784295030/proj111_uzjl8t.png',
    'https://res.cloudinary.com/b6pdv15b/image/upload/v1784295030/mac111_v4ymna.png',
    'https://res.cloudinary.com/b6pdv15b/image/upload/v1784295030/mat111_mfdmoa.png',
    'https://res.cloudinary.com/b6pdv15b/image/upload/v1784295030/work111_qcxpxf.png'
  ];

  activeCarouselIndex = 2;
  carouselInterval: any;

  // Counters
  stats = [
    { label: 'Organizations Onboarded', value: 45, suffix: '+', description: 'Supporting construction businesses with centralized project management.' },
    { label: 'Projects Managed', value: 120, suffix: '+', description: 'Coordinating complex timelines and resource allocations seamlessly.' },
    { label: 'Workforce Members Connected', value: 850, suffix: '+', description: 'Empowering field teams and office staff with real-time data.' },
    { label: 'Customer Satisfaction', value: 96, suffix: '%', description: 'Delivering exceptional enterprise support and ROI globally.' },
  ];

  testimonials = [
    {
      quote: "BuildTrack has fundamentally transformed how we orchestrate our portfolio. The visibility into resource allocation and site progress is unparalleled.",
      author: "Marcus Chen",
      role: "VP of Operations",
      company: "Apex Construction Group"
    },
    {
      quote: "We've reduced project delays by 40% since standardizing on BuildTrack. The automated workflows and compliance tracking are enterprise-grade.",
      author: "Sarah Jenkins",
      role: "Project Director",
      company: "Elevate Builders"
    },
    {
      quote: "The financial forecasting and real-time inventory tracking allow our executive team to make critical decisions with absolute confidence.",
      author: "David Ross",
      role: "Chief Financial Officer",
      company: "Meridian Infrastructure"
    },
    {
      quote: "A remarkably robust platform. It seamlessly bridges the gap between our field operations and corporate oversight.",
      author: "Elena Rodriguez",
      role: "Head of Engineering",
      company: "Summit Contracting"
    }
  ];

  faqs = [
    {
      question: "Who is BuildTrack designed for?",
      answer: "BuildTrack is designed for construction companies, project managers, site engineers, contractors, supervisors, and clients who require a centralized platform to manage projects, monitor site progress, coordinate teams, and improve operational efficiency."
    },
    {
      question: "How does BuildTrack improve project management?",
      answer: "BuildTrack streamlines project planning, milestone tracking, workforce coordination, resource allocation, procurement, and real-time reporting, helping teams maintain complete visibility throughout the project lifecycle."
    },
    {
      question: "Can multiple teams collaborate on the same project?",
      answer: "Yes. BuildTrack supports role-based collaboration, allowing administrators, project managers, site engineers, contractors, and clients to securely access the information relevant to their responsibilities."
    },
    {
      question: "Does BuildTrack provide real-time project insights?",
      answer: "Absolutely. Interactive dashboards, progress tracking, resource monitoring, workforce updates, and analytics provide stakeholders with real-time visibility into project performance and site activities."
    },
    {
      question: "Is BuildTrack suitable for organizations of different sizes?",
      answer: "Yes. Whether managing a single construction project or multiple large-scale developments, BuildTrack is designed to scale with your organization's operational requirements."
    }
  ];


  toggleFaq(index: number): void {
    if (this.activeFaqIndex === index) {
      this.activeFaqIndex = null;
    } else {
      this.activeFaqIndex = index;
    }
  }


  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;

    let currentSection = 'home';
    for (const section of this.sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 250) {
          currentSection = section;
        }
      }
    }

    if (currentSection === 'solutions' && !this.hasSeenSolutions) {
      this.hasSeenSolutions = true;
    }

    const trustedEl = document.getElementById('trusted');
    if (trustedEl && !this.hasSeenStats) {
      if (trustedEl.getBoundingClientRect().top <= window.innerHeight - 100) {
        this.hasSeenStats = true;
      }
    }

    const featuresEl = document.getElementById('features');
    if (featuresEl && !this.hasSeenFeaturesHeader) {
      if (featuresEl.getBoundingClientRect().top <= window.innerHeight - 100) {
        this.hasSeenFeaturesHeader = true;
      }
    }

    const testimonialsEl = document.getElementById('testimonials');
    if (testimonialsEl && !this.hasSeenTestimonials) {
      if (testimonialsEl.getBoundingClientRect().top <= window.innerHeight - 100) {
        this.hasSeenTestimonials = true;
      }
    }

    const aboutEl = document.getElementById('about');
    if (aboutEl && !this.hasSeenAbout) {
      if (aboutEl.getBoundingClientRect().top <= window.innerHeight - 100) {
        this.hasSeenAbout = true;
      }
    }

    const ctaEl = document.getElementById('contact');
    if (ctaEl && !this.hasSeenCTA) {
      if (ctaEl.getBoundingClientRect().top <= window.innerHeight - 100) {
        this.hasSeenCTA = true;
      }
    }

    if (this.activeSection !== currentSection) {
      this.activeSection = currentSection;
      this.updateIndicator();
    }
  }

  updateIndicator() {
    if (!this.navItems) return;
    const index = this.sections.indexOf(this.activeSection);
    if (index >= 0 && this.navItems.length > index) {
      const item = this.navItems.toArray()[index].nativeElement;
      this.indicatorStyle = {
        left: `${item.offsetLeft}px`,
        width: `${item.offsetWidth}px`
      };
    }
  }

  ngOnInit(): void {
    this.startCarousel();
  }

  ngAfterViewInit(): void {
    // Initialize indicator position
    setTimeout(() => {
      this.updateIndicator();
    }, 100);
  }

  ngOnDestroy(): void {
    this.pauseCarousel();
  }

  // Feature Modal Logic
  openFeatureModal(feature: any): void {
    this.activeFeatureModal = feature;
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }

  closeFeatureModal(): void {
    this.activeFeatureModal = null;
    document.body.style.overflow = '';
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEscapeKey(event: KeyboardEvent): void {
    if (this.activeFeatureModal) {
      this.closeFeatureModal();
    }
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  // Auth Animation Logic
  handleAuthClick(action: 'login' | 'register') {
    if (this.isAuthAnimating) return; // Prevent multiple clicks

    this.isAuthAnimating = true;
    this.authActionType = action;

    // Total animation duration: Color transition (300ms) + Excavator travel (2800ms) + Delay (50ms)
    setTimeout(() => {
      this.router.navigate(['/' + action]);
      this.router.navigate(['/login']);
    }, 3150);
  }

  // Coverflow Carousel Methods
  startCarousel() {
    this.carouselInterval = setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  pauseCarousel() {
    if (this.carouselInterval) {
      clearInterval(this.carouselInterval);
      this.carouselInterval = null;
    }
  }

  nextSlide() {
    this.activeCarouselIndex = (this.activeCarouselIndex + 1) % this.carouselImages.length;
  }

  setSlide(index: number) {
    this.activeCarouselIndex = index;
  }
}
