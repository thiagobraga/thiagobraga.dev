export interface TimelineRole {
  title: string;
  startDate: string;
  endDate: string;
  duration: string;
  location?: string;
  description: string[];
  skills: string[];
}

export interface TimelineCompany {
  company: string;
  startDate: string;
  endDate: string;
  roles: TimelineRole[];
}

export const TIMELINE_DATA: TimelineCompany[] = [
  {
    company: "Scaffold Education",
    startDate: "Oct 2020",
    endDate: "Jun 2025",
    roles: [
      {
        title: "DevOps Engineer",
        startDate: "Apr 2022",
        endDate: "Jun 2025",
        duration: "3 yrs 3 mos",
        location: "Hybrid · Bauru, SP",
        description: [
          "Maintained services in AWS and Infrastructure as Code with Terraform and Packer",
          "Helped company reduce costs migrating cloud from AWS to OCI",
          "Migrated from GitLab.com to GitLab self-hosted to avoid costs",
          "Maintained Kubernetes clusters, and wrote and maintained Docker images",
          "Configuration management with Ansible, Rundeck, and shell scripts",
          "Wrote CI/CD pipelines for projects on Gitlab CI",
          "Observability with Zabbix and Grafana"
        ],
        skills: ["Docker", "Kubernetes", "AWS", "OCI", "Terraform", "Ansible", "CI/CD"]
      },
      {
        title: "Full Stack Developer",
        startDate: "Oct 2020",
        endDate: "Apr 2022",
        duration: "1 yr 7 mos",
        location: "Remote",
        description: [
          "Created and maintained Vue applications and components, and Laravel applications and APIs",
          "Wrote MySQL queries and implemented page response optimizations",
          "Maintained and created Docker images for applications and APIs"
        ],
        skills: ["Laravel", "PHP", "Vue.js", "MySQL", "Docker"]
      }
    ]
  },
  {
    company: "Grupo Tesseract",
    startDate: "Aug 2017",
    endDate: "May 2025",
    roles: [
      {
        title: "DevOps Engineer",
        startDate: "Jan 2021",
        endDate: "May 2025",
        duration: "4 yrs 5 mos",
        location: "Remote",
        description: [
          "Configured and maintained AWS services and Linux servers",
          "Implemented and managed CI/CD pipelines for Laravel and React applications",
          "Wrote Docker images for production and development environments"
        ],
        skills: ["Docker", "AWS", "Linux", "CI/CD", "Laravel", "React"]
      },
      {
        title: "Mobile Developer",
        startDate: "Sep 2019",
        endDate: "Jan 2021",
        duration: "1 yr 5 mos",
        location: "Remote",
        description: [
          "Maintained PWAs written in React",
          "Built and maintained mobile applications written in React Native",
          "Skilled in CSS, Responsiveness, Material Design and Styled Components"
        ],
        skills: ["React Native", "React", "CSS", "Material Design"]
      },
      {
        title: "Full Stack Developer",
        startDate: "Aug 2017",
        endDate: "Sep 2019",
        duration: "2 yrs 2 mos",
        location: "Remote",
        description: [
          "Developed and maintained Laravel applications and APIs",
          "Skilled in JavaScript, jQuery, CSS, Bootstrap, PostgreSQL and shell scripting",
          "Built Docker development environments"
        ],
        skills: ["Laravel", "PHP", "JavaScript", "PostgreSQL", "Docker", "Bash"]
      }
    ]
  },
  {
    company: "JURID Publicações Eletrônicas",
    startDate: "Aug 2018",
    endDate: "Apr 2020",
    roles: [
      {
        title: "Full Stack Developer (PHP / Python / JS)",
        startDate: "Aug 2018",
        endDate: "Apr 2020",
        duration: "1 yr 9 mos",
        location: "On-site",
        description: [
          "Maintained and developed web applications using PHP, JavaScript, and CSS",
          "Maintained SQL and NoSQL databases like MySQL, Redis and Elasticsearch",
          "Scraped data using Python and cronjobs"
        ],
        skills: ["PHP", "Python", "JavaScript", "MySQL", "Redis", "Elasticsearch"]
      }
    ]
  },
  {
    company: "Instituto Soma",
    startDate: "Dec 2013",
    endDate: "May 2018",
    roles: [
      {
        title: "Full Stack Developer (PHP / JS)",
        startDate: "Dec 2013",
        endDate: "May 2018",
        duration: "4 yrs 6 mos",
        location: "Hybrid · Bauru, SP",
        description: [
          "Developed and maintained Laravel, CodeIgniter and native PHP applications",
          "Skilled in JavaScript, jQuery, CSS, Bootstrap, MySQL, PostgreSQL and SQL Server",
          "Became the go-to person for Git, Docker, and Linux questions",
          "Scripting to automate installation of dev environments and live VMs",
          "Implemented self-hosted GitLab and CI/CD pipelines at the company",
          "Worked with Ionic for some time, building and publishing Android apps"
        ],
        skills: ["PHP", "Laravel", "JavaScript", "MySQL", "Docker", "Linux", "GitLab CI"]
      }
    ]
  },
  {
    company: "MStech",
    startDate: "May 2011",
    endDate: "Nov 2012",
    roles: [
      {
        title: "Full Stack Developer (C#)",
        startDate: "May 2011",
        endDate: "Nov 2012",
        duration: "1 yr 7 mos",
        location: "Bauru, SP",
        description: [
          "Worked as a junior developer with C# and .NET architecture",
          "Developed internal web pages for client applications",
          "Wrote SQL Server queries and stored procedures for web applications"
        ],
        skills: ["C#", ".NET", "SQL Server"]
      }
    ]
  },
  {
    company: "LF Maia e Advogados Associados",
    startDate: "Jun 2009",
    endDate: "Feb 2011",
    roles: [
      {
        title: "IT Technician",
        startDate: "Jun 2009",
        endDate: "Feb 2011",
        duration: "1 yr 9 mos",
        location: "Bauru, SP",
        description: [
          "Provided technical support, troubleshooting hardware and printer issues, and assistance to employees",
          "First-hand experience with Active Directory, Windows Server, and server rack management",
          "Hands-on experience with MySQL, running simple queries and handling database backups",
          "Monitoring backup routines, troubleshooting issues, and storage cleanup"
        ],
        skills: ["Technical Support", "Active Directory", "Windows Server", "MySQL"]
      }
    ]
  }
];
