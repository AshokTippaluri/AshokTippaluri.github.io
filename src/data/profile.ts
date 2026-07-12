export const personal = {
  name: "Ashok Tippaluri",
  title: "Site Reliability Engineer | DevOps Specialist",
  tagline: "SRE",
  location: "Bangalore, India",
  email: "ashokchandrareddy5@gmail.com",
  phone: "+91 9640332686",
  linkedin: "https://linkedin.com/in/ashoktippaluri",
  github: "https://github.com/ashoktippaluri",
  resume: "https://ashoktippaluri.github.io/assets/resume/AshokTippaluriResume.pdf",
  avatar: "/assets/img/passport.jpg",
  summary:
    "Self-driven SRE / DevOps engineer passionate about building reliable, scalable infrastructure. I enjoy solving complex operational problems, automating repetitive work, and enabling teams to ship confidently.",
  about: [
    "I am a graduate of a JNTUH-affiliated engineering college with a strong passion for problem-solving and continuous learning. Over the past several years I have worked across monitoring, cloud infrastructure, CI/CD, and container orchestration.",
    "My day-to-day work involves AWS, Kubernetes, Terraform, Jenkins, and observability tooling. I am comfortable owning incidents end-to-end, improving deployment pipelines, and making systems more resilient.",
  ],
};

export const skills = [
  {
    category: "Cloud Platforms",
    items: [
      { name: "AWS", icon: "/assets/img/aws.png" },
      { name: "Azure", icon: "/assets/img/microsoft_azure-icon.svg" },
      { name: "GCP", icon: "/assets/img/google_cloud-icon.svg" },
    ],
  },
  {
    category: "Languages & Databases",
    items: [
      { name: "Python", icon: "/assets/img/python-logo-1-300x300.jpg" },
      { name: "Shell", icon: "/assets/img/shell-logo-1-300x300.jpg" },
      { name: "Go", icon: "/assets/img/go-original.svg" },
      { name: "Terraform", icon: "/assets/img/terraform-svgrepo-com.svg" },
      { name: "MySQL", icon: "/assets/img/mysql-logo-1-300x300.jpg" },
      { name: "PostgreSQL", icon: "/assets/img/postgresql-logo.png" },
    ],
  },
  {
    category: "OS, Containers & Orchestration",
    items: [
      { name: "Linux", icon: "/assets/img/linux-original.svg" },
      { name: "Windows", icon: "/assets/img/windows.svg" },
      { name: "Kubernetes", icon: "/assets/img/kubernetes-icon.svg" },
      { name: "Docker", icon: "/assets/img/docker-original-wordmark.svg" },
      { name: "Vagrant", icon: "/assets/img/vagrantup-icon.svg" },
    ],
  },
  {
    category: "Monitoring & Logging",
    items: [
      { name: "Zabbix", icon: "/assets/img/Zabbix_logo.svg" },
      { name: "Grafana", icon: "/assets/img/grafana-icon.svg" },
      { name: "CloudWatch", icon: "/assets/img/CloudWatch.svg" },
      { name: "Nagios", icon: "/assets/img/Nagios_logo.svg" },
      { name: "Sensu", icon: "/assets/img/sensu.svg" },
      { name: "Kibana", icon: "/assets/img/elasticco_kibana-icon.svg" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Jenkins", icon: "/assets/img/jenkins-icon.svg" },
      { name: "Git", icon: "/assets/img/git-scm-icon.svg" },
      { name: "RabbitMQ", icon: "/assets/img/rabbitmq-icon.svg" },
      { name: "SonarQube", icon: "/assets/img/sonarqube-1.svg" },
      { name: "Maven", icon: "/assets/img/apache-maven-1.svg" },
      { name: "Zapier", icon: "/assets/img/zapier.svg" },
    ],
  },
];

export const experiences = [
  {
    company: "Dotdash Meredith",
    role: "Technical Analyst — SRE / DevOps",
    location: "Bangalore, India",
    period: "July 2022 - Present",
    logo: "/assets/img/Dotdash-Meredith-Logo-Color.png-3-8-22-2.webp",
    website: "https://www.dotdashmeredith.com/",
    highlights: [
      "Support and improve cloud infrastructure on AWS for high-traffic media platforms.",
      "Build and maintain CI/CD pipelines using Jenkins and Git for reliable, repeatable deployments.",
      "Automate infrastructure provisioning with Terraform and manage containerized workloads on Kubernetes / EKS.",
      "Troubleshoot production issues, tune monitoring, and participate in incident response using Grafana, CloudWatch, and PagerDuty-style workflows.",
    ],
    tools: ["AWS", "Terraform", "Jenkins", "Kubernetes", "Docker", "Grafana", "Python", "Git"],
  },
  {
    company: "Tanla",
    role: "NOC Analyst",
    location: "Hyderabad, India",
    period: "June 2021 - July 2022",
    logo: "/assets/img/TANLA.NS_BIG.png",
    website: "https://www.tanla.com/",
    highlights: [
      "Monitored critical communication infrastructure and responded to alerts using Zabbix, Nagios, and Grafana.",
      "Coordinated incident triage, performed root-cause analysis, and reduced mean time to detect recurring issues.",
      "Collaborated with platform teams to automate checks and improve overall system reliability.",
    ],
    tools: ["Zabbix", "Nagios", "Grafana", "Linux", "Shell", "Python"],
  },
];

export const education = [
  {
    institution: "St. Peter's Engineering College",
    location: "Telangana, India",
    degree: "Bachelor of Technology",
    period: "2018 - 2022",
    score: "CGPA 8.0 / 10",
  },
];

export const projects = [
  {
    title: "Music Player Web App",
    description: "A Django-based music streaming web application with playlists, search, and OAuth login.",
    image: "/assets/img/project-music-player.png",
    tags: ["Django", "HTML", "CSS", "SQLite", "AWS S3", "Heroku"],
    liveUrl: "https://galvanic-music.herokuapp.com/",
    repoUrl: "https://github.com/ashoktippaluri/music-player",
  },
  {
    title: "Quiz Web App",
    description: "A quiz platform built with Django, featuring leaderboards and Google OAuth sign-in.",
    image: "/assets/img/project-quizup-logo-1.png",
    tags: ["Django", "HTML", "CSS", "SQLite", "Heroku"],
    liveUrl: "https://quiz-up-app.herokuapp.com/",
    repoUrl: "https://github.com/ashoktippaluri/QuizUp",
  },
  {
    title: "Blog Web App",
    description: "A simple and extensible blog built with Flask and SQLAlchemy.",
    image: "/assets/img/project-blog-logo.jpg",
    tags: ["HTML", "CSS", "Flask", "SQLAlchemy", "PostgreSQL", "Python"],
    liveUrl: "https://flask-heroku-blog.herokuapp.com/",
    repoUrl: "https://github.com/ashoktippaluri/flask-blog",
  },
  {
    title: "Visual Question Answering",
    description: "An attention-based classification model that generates answers for input images using CNN and LSTM.",
    image: "/assets/img/project-aim_bert-bias.png",
    tags: ["Python", "CNN", "LSTM", "VQA"],
    repoUrl: "https://github.com/ashoktippaluri/visual-question-answering",
  },
  {
    title: "Video Summarizer",
    description: "A sequence-to-sequence model that generates short summaries from input videos.",
    image: "/assets/img/computer-vision-v2-04.png",
    tags: ["Python", "CNN", "LSTM", "Computer Vision"],
    repoUrl: "https://github.com/ashoktippaluri/",
  },
  {
    title: "Image Generator",
    description: "An image generator based on Generative Adversarial Networks (GANs).",
    image: "/assets/img/gan.jpg",
    tags: ["Python", "GANs", "Deep Learning"],
    repoUrl: "https://github.com/ashoktippaluri/",
  },
];
