export const personal = {
  name: "Ashok Tippaluri",
  title: "Site Reliability Engineer 2 | DevOps Specialist",
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
    "My day-to-day work involves AWS multi-account infrastructure, Kubernetes/EKS, Elasticsearch cluster operations, Cloudflare edge management, and AI platform infrastructure (LiteLLM, Langfuse, Bedrock). I am comfortable owning incidents end-to-end, improving deployment pipelines, and making systems more resilient.",
  ],
};

export const learningTopics = [
  { term: "AWS", blurb: "Amazon's cloud platform offering compute, storage, networking, and managed services on demand." },
  { term: "Azure", blurb: "Microsoft's cloud platform, widely used for enterprise workloads and hybrid-cloud setups." },
  { term: "GCP", blurb: "Google Cloud Platform, known for strong data/analytics and Kubernetes-native tooling." },
  { term: "EC2", blurb: "AWS's virtual machine service for running workloads on resizable compute instances." },
  { term: "Serverless", blurb: "Running code (e.g. AWS Lambda) without provisioning or managing servers directly." },
  { term: "Auto Scaling", blurb: "Automatically adjusting compute capacity up or down based on load." },
  { term: "Load Balancer", blurb: "Distributes incoming traffic across multiple servers to improve availability and reliability." },
  { term: "Docker", blurb: "Packages an application and its dependencies into a portable, isolated container image." },
  { term: "Kubernetes", blurb: "An orchestration platform that automates deployment, scaling, and management of containers." },
  { term: "Pods", blurb: "The smallest deployable unit in Kubernetes, wrapping one or more tightly coupled containers." },
  { term: "Helm", blurb: "A package manager for Kubernetes that templates and versions manifests as reusable charts." },
  { term: "Service Mesh", blurb: "Infrastructure layer (e.g. Istio) that manages service-to-service traffic, retries, and security." },
  { term: "Ingress", blurb: "A Kubernetes resource that manages external HTTP/HTTPS access to services inside a cluster." },
  { term: "Terraform", blurb: "An infrastructure-as-code tool for declaratively provisioning cloud resources across providers." },
  { term: "Ansible", blurb: "An agentless automation tool for configuration management and application deployment." },
  { term: "CloudFormation", blurb: "AWS's native infrastructure-as-code service for defining resources as templates." },
  { term: "GitOps", blurb: "Using Git as the single source of truth for declarative infrastructure and app deployments." },
  { term: "Configuration Drift", blurb: "When a system's actual state diverges from its declared/intended configuration over time." },
  { term: "Jenkins", blurb: "An open-source automation server commonly used to build CI/CD pipelines." },
  { term: "CI/CD Pipeline", blurb: "An automated sequence of build, test, and deploy stages that ships code changes reliably." },
  { term: "Canary Deployment", blurb: "Rolling out a change to a small subset of traffic/users before a full release." },
  { term: "Blue-Green Deployment", blurb: "Running two identical environments and switching traffic to the new one instantly, enabling fast rollback." },
  { term: "Artifact Repository", blurb: "A storage system (e.g. Nexus, ECR) for versioned build outputs like container images or packages." },
  { term: "Prometheus", blurb: "An open-source metrics collection and alerting system built for dynamic, containerized environments." },
  { term: "Grafana", blurb: "A visualization tool for building dashboards on top of metrics, logs, and traces." },
  { term: "Metrics vs Logs vs Traces", blurb: "The three pillars of observability: numeric measurements, event records, and request-flow paths." },
  { term: "SLO / SLI / SLA", blurb: "Service Level Objective/Indicator/Agreement — the targets and measurements that define acceptable reliability." },
  { term: "Alerting", blurb: "Automatically notifying responders when a metric crosses a threshold indicating a problem." },
  { term: "ELK Stack", blurb: "Elasticsearch, Logstash, and Kibana — a common stack for centralized log storage and search." },
  { term: "DNS", blurb: "The system that translates human-readable domain names into IP addresses." },
  { term: "VPC", blurb: "A Virtual Private Cloud — an isolated, private network you control within a cloud provider." },
  { term: "CDN", blurb: "A Content Delivery Network that caches and serves content from locations close to users." },
  { term: "Reverse Proxy", blurb: "A server that sits in front of backend services, forwarding client requests and returning responses." },
  { term: "TLS/SSL", blurb: "Cryptographic protocols that encrypt traffic between clients and servers over a network." },
  { term: "IAM", blurb: "Identity and Access Management — controls who (or what) can do what within a cloud account." },
  { term: "Least Privilege", blurb: "A security principle: grant only the minimum permissions needed to perform a task." },
  { term: "Secrets Management", blurb: "Securely storing and rotating credentials, API keys, and tokens (e.g. Vault, AWS Secrets Manager)." },
  { term: "Zero Trust", blurb: "A security model that never implicitly trusts any request, verifying identity and context every time." },
  { term: "MTTR / MTTD", blurb: "Mean Time To Recovery / Detection — key metrics for how fast a team resolves or spots incidents." },
  { term: "Postmortem", blurb: "A structured writeup after an incident covering timeline, root cause, and follow-up actions." },
  { term: "Chaos Engineering", blurb: "Deliberately injecting failures into a system to test its resilience before real failures happen." },
  { term: "Error Budget", blurb: "The allowable amount of unreliability a service can spend before it violates its SLO." },
  { term: "On-Call", blurb: "A rotation where an engineer is responsible for responding to production alerts during a shift." },
  { term: "Runbook", blurb: "A documented, step-by-step procedure for diagnosing or resolving a specific operational issue." },
  { term: "Toil", blurb: "Manual, repetitive operational work that scales linearly with system size — a target for automation." },
  { term: "Object Storage", blurb: "Storage (e.g. S3) for unstructured data as objects, accessed over HTTP rather than a filesystem." },
  { term: "Caching", blurb: "Storing frequently accessed data in a faster layer to reduce latency and backend load." },
  { term: "Database Replication", blurb: "Keeping copies of a database in sync across nodes for availability and read scaling." },
  { term: "Git", blurb: "A distributed version control system for tracking changes to code over time." },
  { term: "Bash Scripting", blurb: "Writing shell scripts to automate command-line tasks on Linux/Unix systems." },
];

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
    category: "Edge & DNS",
    items: [
      { name: "Cloudflare", icon: "/assets/img/cloudflare-icon.svg" },
    ],
  },
  {
    category: "Languages & Data Stores",
    items: [
      { name: "Python", icon: "/assets/img/python-logo-1-300x300.jpg" },
      { name: "Shell", icon: "/assets/img/shell-logo-1-300x300.jpg" },
      { name: "Go", icon: "/assets/img/go-original.svg" },
      { name: "Terraform", icon: "/assets/img/terraform-svgrepo-com.svg" },
      { name: "Elasticsearch", icon: "/assets/img/elasticsearch-icon.svg" },
      { name: "ClickHouse", icon: "/assets/img/clickhouse-icon.svg" },
      { name: "Redis", icon: "/assets/img/redis-original-wordmark.svg" },
      { name: "MySQL", icon: "/assets/img/mysql-logo-1-300x300.jpg" },
      { name: "PostgreSQL", icon: "/assets/img/postgresql-logo.png" },
      { name: "MongoDB", icon: "/assets/img/mongodb-original-wordmark.svg" },
    ],
  },
  {
    category: "OS, Containers & Orchestration",
    items: [
      { name: "Linux", icon: "/assets/img/linux-original.svg" },
      { name: "Windows", icon: "/assets/img/windows.svg" },
      { name: "Kubernetes", icon: "/assets/img/kubernetes-icon.svg" },
      { name: "Docker", icon: "/assets/img/docker-original-wordmark.svg" },
      { name: "Helm", icon: "/assets/img/helmsh-icon.svg" },
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
      { name: "GitHub", icon: "/assets/img/github-original.svg" },
      { name: "Bitbucket", icon: "/assets/img/bitbucket-original.svg" },
      { name: "RabbitMQ", icon: "/assets/img/rabbitmq-icon.svg" },
      { name: "SonarQube", icon: "/assets/img/sonarqube-1.svg" },
      { name: "Maven", icon: "/assets/img/apache-maven-1.svg" },
      { name: "Zapier", icon: "/assets/img/zapier.svg" },
    ],
  },
  {
    category: "AI Tools",
    items: [
      { name: "LiteLLM", icon: "https://img.shields.io/badge/LiteLLM-000000?style=flat" },
      { name: "ChatGPT", icon: "https://img.shields.io/badge/ChatGPT-412991?style=flat" },
      { name: "Codex", icon: "/assets/img/ai-logos/codex.svg" },
      { name: "Claude", icon: "/assets/img/ai-logos/claude.svg" },
      { name: "Devin", icon: "/assets/img/ai-logos/devin.svg" },
      { name: "Kiro", icon: "/assets/img/ai-logos/kiro.svg" },
      { name: "Cursor", icon: "/assets/img/ai-logos/cursor.svg" },
      { name: "Windsurf", icon: "/assets/img/ai-logos/windsurf.svg" },
    ],
  },
];

export const experiences = [
  {
    company: "Dotdash Meredith",
    role: "Site Reliability Engineer 2",
    location: "Bangalore, India",
    period: "July 2022 - Present",
    logo: "/assets/img/Dotdash-Meredith-Logo-Color.png-3-8-22-2.webp",
    website: "https://www.dotdashmeredith.com/",
    highlights: [
      "Operate and scale production Elasticsearch clusters — provisioning, 8.x to 9.x upgrades, blue/green migrations, and ECK operator management via Helm.",
      "Manage multi-account, multi-region AWS infrastructure — region decommissions, RDS snapshot/backup strategies, cross-account S3 and IAM access.",
      "Own edge traffic on Cloudflare — DNS, domain migrations, vanity URLs, and redirect pipelines for high-traffic media brands.",
      "Run AI platform infrastructure — LiteLLM gateways, Langfuse observability (ClickHouse, Redis), and AWS Bedrock service launches.",
      "Remediate cloud security findings and decommission legacy services safely, cutting cost and attack surface.",
    ],
    tools: ["AWS", "Elasticsearch", "Cloudflare", "Kubernetes", "Helm", "Terraform", "Jenkins", "Docker", "LiteLLM", "Grafana", "Python", "Git"],
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

export const incidents = [
  {
    title: "Elasticsearch snapshot repo registration failing deploys (S3 cross-region redirect)",
    date: "2026",
    severity: "SEV-3",
    summary:
      "Post-deployment registration of an Elasticsearch snapshot repository kept failing, causing Jenkins to mark the whole deployment as failed.",
    detection:
      "Jenkins deployment failed at the post-deploy stage; the registration script retried 10 times and exited non-zero.",
    rootCause:
      "Elasticsearch sent the repository verification request to the ap-south-1 S3 endpoint, but the bucket lived in us-east-1. S3 returned HTTP 301 redirects that the registration never followed.",
    resolution:
      "Corrected the repository configuration to use the bucket's actual region endpoint and re-ran the deployment successfully.",
    lessons: [
      "Always pin the S3 endpoint/region explicitly in snapshot repository settings.",
      "Cross-region S3 calls fail as silent 301 redirects — check HTTP status, not just connectivity.",
      "Post-deploy verification scripts should fail fast with the underlying error surfaced.",
    ],
    tools: ["Elasticsearch", "AWS S3", "Jenkins"],
  },
  {
    title: "ECK upgrade breaking CI RBAC permissions",
    date: "2026",
    severity: "SEV-3",
    summary:
      "After an Elastic Cloud on Kubernetes operator upgrade, PR-test pipeline jobs began failing with RBAC 'forbidden' errors on the new Elastic CRDs.",
    detection:
      "CI jobs failed during cluster rolebinding with errors like 'attempting to grant RBAC permissions not currently held' for autoops.k8s.elastic.co resources.",
    rootCause:
      "The ECK upgrade introduced new CRDs (autoopsagentpolicies, packageregistries) that the deployer's cluster role had no permissions for, so RBAC escalation checks rejected the grants.",
    resolution:
      "Extended the deployer cluster role with the new API groups/resources and re-ran the pipeline tests to green.",
    lessons: [
      "Operator upgrades can add CRDs — review release notes for new API groups before upgrading.",
      "CI deployer roles need wildcard or updated rules for operator-managed CRDs.",
    ],
    tools: ["Kubernetes", "ECK", "RBAC", "Jenkins"],
  },
  {
    title: "AWS S3 egress cost spike investigated as possible security incident",
    date: "2025",
    severity: "SEV-3",
    summary:
      "An unusual spike in S3 data-egress spend triggered a security review for possible data exfiltration or misconfigured public access.",
    detection:
      "Cost anomaly flagged in billing review; raised as a potential security incident ticket.",
    rootCause:
      "Traced egress to a legitimate but inefficient access pattern rather than a breach — a workload pulling large objects across boundaries.",
    resolution:
      "Confirmed no unauthorized access via IAM/CloudTrail review, then reduced cost by fixing the access pattern and tightening bucket policies.",
    lessons: [
      "Cost anomalies are worth treating as security signals until ruled out.",
      "CloudTrail + IAM access analysis is the fastest way to separate exfiltration from waste.",
      "Bucket policies and VPC endpoints prevent both exposure and unnecessary egress cost.",
    ],
    tools: ["AWS S3", "IAM", "CloudTrail", "CloudWatch"],
  },
];

export const quizQuestions = [
  {
    question: "In Kubernetes, what does a Liveness Probe determine?",
    options: [
      "Whether a container should be restarted",
      "Whether a pod should receive traffic",
      "Whether a node has enough resources",
      "Whether a deployment is complete",
    ],
    answer: 0,
  },
  {
    question: "Which AWS service provides object storage?",
    options: ["EBS", "S3", "EFS", "RDS"],
    answer: 1,
  },
  {
    question: "What does the Linux command `chmod 755` grant to the file owner?",
    options: ["Read only", "Read and write", "Read, write, and execute", "Execute only"],
    answer: 2,
  },
  {
    question: "In Terraform, what command shows planned changes without applying them?",
    options: ["terraform apply", "terraform plan", "terraform validate", "terraform state show"],
    answer: 1,
  },
  {
    question: "Which HTTP status code indicates a successful request with no response body?",
    options: ["200", "201", "204", "304"],
    answer: 2,
  },
  {
    question: "What is the primary purpose of a load balancer's health check?",
    options: [
      "To encrypt traffic between servers",
      "To detect and route around unhealthy backend instances",
      "To cache static assets",
      "To compress response payloads",
    ],
    answer: 1,
  },
  {
    question: "In Git, which command creates a new branch and switches to it in one step?",
    options: ["git branch -m", "git checkout -b", "git merge -b", "git switch --new"],
    answer: 1,
  },
  {
    question: "What does DNS TTL control?",
    options: [
      "How long a DNS record is cached before re-querying",
      "The maximum number of DNS hops allowed",
      "The encryption strength of a DNS query",
      "The number of retries for a failed lookup",
    ],
    answer: 0,
  },
  {
    question: "Which Kubernetes object is used to expose a set of pods as a network service?",
    options: ["Deployment", "Service", "ConfigMap", "Ingress"],
    answer: 1,
  },
  {
    question: "What is the time complexity of binary search on a sorted array of n elements?",
    options: ["O(n)", "O(n log n)", "O(log n)", "O(1)"],
    answer: 2,
  },
  {
    question: "In CI/CD, what is a 'canary deployment'?",
    options: [
      "Deploying to a small subset of users/servers before a full rollout",
      "Automatically rolling back every failed deploy",
      "Running tests only on the main branch",
      "Deploying directly to production without staging",
    ],
    answer: 0,
  },
  {
    question: "Which of these is NOT one of the three pillars of observability?",
    options: ["Metrics", "Logs", "Traces", "Backups"],
    answer: 3,
  },
  {
    question: "What does the acronym 'IOPS' stand for in storage performance?",
    options: [
      "Input/Output Operations Per Second",
      "Internal Object Processing Speed",
      "Indexed Operations Per Session",
      "I/O Parallel Streams",
    ],
    answer: 0,
  },
  {
    question: "In networking, what does NAT stand for?",
    options: ["Network Access Token", "Network Address Translation", "Node Allocation Table", "Network Automation Tool"],
    answer: 1,
  },
  {
    question: "Which command lists running Docker containers?",
    options: ["docker list", "docker ps", "docker containers", "docker show"],
    answer: 1,
  },
  {
    question: "What is the purpose of an SLO (Service Level Objective)?",
    options: [
      "A legal contract between a company and its customers",
      "An internal target for a service's reliability, used to guide engineering decisions",
      "A billing metric for cloud usage",
      "A security compliance certification",
    ],
    answer: 1,
  },
  {
    question: "Which data structure uses LIFO (Last In, First Out) ordering?",
    options: ["Queue", "Stack", "Linked List", "Heap"],
    answer: 1,
  },
  {
    question: "What does the `kubectl rollout undo` command do?",
    options: [
      "Deletes a deployment permanently",
      "Reverts a deployment to its previous revision",
      "Pauses an in-progress rollout",
      "Scales a deployment to zero replicas",
    ],
    answer: 1,
  },
  {
    question: "In AWS IAM, what is the principle of least privilege?",
    options: [
      "Granting all users admin access for simplicity",
      "Granting only the permissions needed to perform a task, nothing more",
      "Requiring MFA for every action",
      "Rotating credentials every 24 hours",
    ],
    answer: 1,
  },
  {
    question: "Which of these best describes 'idempotency' in API design?",
    options: [
      "An operation that can be called multiple times with the same result as calling it once",
      "An operation that always returns a different result each time",
      "An operation that requires authentication",
      "An operation that is asynchronous",
    ],
    answer: 0,
  },
  {
    question: "What is the default port for HTTPS traffic?",
    options: ["80", "443", "8080", "22"],
    answer: 1,
  },
  {
    question: "In Python, what does a list comprehension like `[x*2 for x in range(5)]` produce?",
    options: ["[0, 2, 4, 6, 8]", "[1, 2, 3, 4, 5]", "[2, 4, 6, 8, 10]", "[0, 1, 2, 3, 4]"],
    answer: 0,
  },
  {
    question: "What does 'MTTR' stand for in incident management?",
    options: ["Mean Time To Respond", "Mean Time To Recovery", "Maximum Time To Resolve", "Mean Time To Report"],
    answer: 1,
  },
  {
    question: "Which of these is a NoSQL database?",
    options: ["PostgreSQL", "MySQL", "MongoDB", "SQLite"],
    answer: 2,
  },
  {
    question: "What is the purpose of a reverse proxy?",
    options: [
      "To forward client requests to backend servers and return the response",
      "To block all outbound network traffic",
      "To convert HTTP requests into database queries",
      "To compress a codebase before deployment",
    ],
    answer: 0,
  },
  {
    question: "In Kubernetes, what is a 'namespace' used for?",
    options: [
      "Encrypting secrets at rest",
      "Logically isolating groups of resources within a cluster",
      "Defining container resource limits",
      "Load balancing across pods",
    ],
    answer: 1,
  },
  {
    question: "Which sorting algorithm has an average time complexity of O(n log n)?",
    options: ["Bubble sort", "Insertion sort", "Merge sort", "Selection sort"],
    answer: 2,
  },
  {
    question: "What does 'infrastructure as code' primarily aim to achieve?",
    options: [
      "Writing infrastructure documentation in Markdown",
      "Managing and provisioning infrastructure through versioned, declarative config instead of manual steps",
      "Running infrastructure entirely inside containers",
      "Replacing all infrastructure with serverless functions",
    ],
    answer: 1,
  },
  {
    question: "In a REST API, which HTTP method is idempotent and used to fully replace a resource?",
    options: ["POST", "PATCH", "PUT", "DELETE"],
    answer: 2,
  },
  {
    question: "What is the main advantage of horizontal scaling over vertical scaling?",
    options: [
      "It requires no code changes",
      "It adds more capacity by adding more machines rather than upgrading one machine's resources",
      "It always costs less than vertical scaling",
      "It eliminates the need for load balancing",
    ],
    answer: 1,
  },
];

export const projects = [
  {
    title: "Terraform AWS Infrastructure",
    description: "Modular Terraform code for provisioning AWS infrastructure — launching a web server with networking and security configured as code.",
    image: "/assets/img/terraform-svgrepo-com.svg",
    tags: ["Terraform", "AWS", "IaC", "HCL"],
    repoUrl: "https://github.com/AshokTippaluri/Terraform_project",
  },
  {
    title: "Jenkins Shared Pipeline Library",
    description: "Reusable Groovy shared library for Jenkins pipelines — standardized build, test, and deploy stages consumed across teams' CI jobs.",
    image: "/assets/img/jenkins-icon.svg",
    tags: ["Jenkins", "Groovy", "CI/CD"],
    repoUrl: "https://github.com/AshokTippaluri/ashok-shared-library",
  },
  {
    title: "SRE Deep Dive",
    description: "Hands-on notes and scripts from production SRE work — reliability patterns, incident handling, and operational runbooks.",
    image: "/assets/img/shell-logo-1-300x300.jpg",
    tags: ["SRE", "Shell", "Runbooks", "Reliability"],
    repoUrl: "https://github.com/AshokTippaluri/sre-deepdrive",
  },
  {
    title: "Linux Deep Dive",
    description: "Linux internals and shell scripting deep-dive — system administration, troubleshooting, and automation notes.",
    image: "/assets/img/linux-original.svg",
    tags: ["Linux", "Bash", "Shell"],
    repoUrl: "https://github.com/AshokTippaluri/linux-deepdrive",
  },
  {
    title: "Kubernetes Labs",
    description: "Kubernetes learning labs — manifests, workloads, and cluster configuration exercises.",
    image: "/assets/img/kubernetes-icon.svg",
    tags: ["Kubernetes", "YAML", "Containers"],
    repoUrl: "https://github.com/AshokTippaluri/k8_ashok",
  },
  {
    title: "Docker Project",
    description: "Containerization hands-on project — building, shipping, and running containerized applications with Docker.",
    image: "/assets/img/docker-original-wordmark.svg",
    tags: ["Docker", "Containers"],
    repoUrl: "https://github.com/AshokTippaluri/Docker_project",
  },
];
