import { Component, HostListener, OnDestroy, OnInit, AfterViewInit, ElementRef,computed, signal } from '@angular/core';
import {
  EDUCATION,
  EXPERIENCE,
  INTERESTS,
  PROFILE,
  PROJECTS,
  SKILL_GROUPS,
  STATS,
  TECH_TAGS
} from './portfolio.data';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit, AfterViewInit, OnDestroy {
  readonly profile = PROFILE;
  readonly stats = STATS;
  readonly skillGroups = SKILL_GROUPS;
  readonly techTags = TECH_TAGS;
  readonly experience = EXPERIENCE;
  readonly projects = PROJECTS;
  readonly education = EDUCATION;
  readonly interests = INTERESTS;
  readonly year = new Date().getFullYear();

    // ----- Skills section -----
  private readonly skillCodes: Record<string, string> = {
    'Angular': 'NG', 'TypeScript': 'TS', 'HTML & CSS': '</>', 'Bootstrap': 'B', 'React': 'Re',
    'C#': 'C#', 'ASP.NET Core Web API': '.NET', 'Dapper': 'Dp', 'JWT & OTP Auth': 'JWT', 'RESTful API Design': 'API',
    'MySQL': 'SQL', 'SQL & Database Design': 'DB', 'Git': 'Git', 'Azure': 'Az', 'Debugging & Production Fixes': 'Fix'
  };
    // ----- Icons for the tech tags (About card) -----
  private readonly tagIcons: Record<string, string> = {
    'C#': 'devicon-csharp-plain colored',
    'ASP.NET Core': 'devicon-dotnetcore-plain colored',
    'Angular': 'devicon-angularjs-plain colored',
    'TypeScript': 'devicon-typescript-plain colored',
    'Dapper': 'bi bi-lightning-charge-fill',
    'MySQL': 'devicon-mysql-plain colored',
    'JWT': 'bi bi-key-fill',
    'Bootstrap': 'devicon-bootstrap-plain colored',
    'REST APIs': 'bi bi-diagram-3-fill',
    'Git': 'devicon-git-plain colored',
    'Azure': 'devicon-azure-plain colored',
    'React': 'devicon-react-original colored'
  };
  tagIcon(tag: string): string {
    return this.tagIcons[tag] ?? 'bi bi-code-slash';
  }
  readonly skillTabs = ['All', ...SKILL_GROUPS.map(g => g.title)];
  readonly skillTab = signal('All');
  readonly allSkills = SKILL_GROUPS.flatMap(g =>
    g.items.map(s => ({
      ...s,
      group: g.title,
      code: this.skillCodes[s.name] ?? s.name.slice(0, 2),
      label: s.level >= 85 ? 'Advanced' : s.level >= 70 ? 'Proficient' : s.level >= 50 ? 'Intermediate' : 'Learning'
    }))
  );
  readonly visibleSkills = computed(() =>
    this.skillTab() === 'All' ? this.allSkills : this.allSkills.filter(s => s.group === this.skillTab())
  );
  skillCount(tab: string): number {
    return tab === 'All' ? this.allSkills.length : this.allSkills.filter(s => s.group === tab).length;
  }
  readonly navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  typed = signal('');
  scrolled = signal(false);
  menuOpen = signal(false);
  activeSection = signal('home');
  progress = signal(0);
  showTop = signal(false);

  private roleIndex = 0;
  private charIndex = 0;
  private deleting = false;
  private typingTimer?: ReturnType<typeof setTimeout>;
  private revealObserver?: IntersectionObserver;
  private sectionObserver?: IntersectionObserver;

  constructor(private host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    this.type();
  }

  ngAfterViewInit(): void {
    const root = this.host.nativeElement;

    this.revealObserver = new IntersectionObserver(
      entries => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('in-view');
            this.revealObserver?.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12 }
    );
    root.querySelectorAll('.reveal').forEach(el => this.revealObserver!.observe(el));

    this.sectionObserver = new IntersectionObserver(
      entries => {
        for (const e of entries) {
          if (e.isIntersecting) this.activeSection.set(e.target.id);
        }
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    root.querySelectorAll('section[id]').forEach(el => this.sectionObserver!.observe(el));
  }
  readonly statIcons = ['bi-briefcase', 'bi-folder2-open', 'bi-mortarboard', 'bi-globe2'];
  ngOnDestroy(): void {
    clearTimeout(this.typingTimer);
    this.revealObserver?.disconnect();
    this.sectionObserver?.disconnect();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    const y = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    this.scrolled.set(y > 30);
    this.showTop.set(y > 600);
    this.progress.set(max > 0 ? (y / max) * 100 : 0);
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(ev: MouseEvent): void {
    const el = this.host.nativeElement;
    el.style.setProperty('--mx', ev.clientX + 'px');
    el.style.setProperty('--my', ev.clientY + 'px');
  }

  go(id: string, ev?: Event): void {
    ev?.preventDefault();
    this.menuOpen.set(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  toggleMenu(): void {
    this.menuOpen.update(v => !v);
  }

  private type(): void {
    const word = PROFILE.roles[this.roleIndex];
    if (!this.deleting) {
      this.charIndex++;
      this.typed.set(word.slice(0, this.charIndex));
      if (this.charIndex === word.length) {
        this.deleting = true;
        this.typingTimer = setTimeout(() => this.type(), 1600);
        return;
      }
    } else {
      this.charIndex--;
      this.typed.set(word.slice(0, this.charIndex));
      if (this.charIndex === 0) {
        this.deleting = false;
        this.roleIndex = (this.roleIndex + 1) % PROFILE.roles.length;
      }
    }
    this.typingTimer = setTimeout(() => this.type(), this.deleting ? 40 : 80);
  }
}
