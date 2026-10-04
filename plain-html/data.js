window.portfolioData = {
  profile: {
    name: 'Kishan Nigam',
    title: 'DevOps Engineer',
    summary: 'Results-driven DevOps Engineer with 5+ years of IT experience, including 2+ years of hands-on DevOps engineering and 3 years of L1/L2 enterprise production support.',
    headline: 'Building reliable delivery pipelines, automating production operations, and supporting critical enterprise systems in cloud and support environments.',
    email: 'enigam281098@gmail.com',
    phone: '+91 9120231512',
    linkedinUrl: '',
    githubUrl: '',
    location: 'Gurugram, India'
  },
  metrics: [
    { label: 'Years in IT', value: '5+', description: 'Across support, automation, and DevOps roles' },
    { label: 'Hands-on DevOps', value: '2+', description: 'Focused engineering experience' },
    { label: 'Automation delivered', value: '8+', description: 'Enterprise automation solutions' },
    { label: 'Production jobs managed', value: '70+', description: 'Job orchestration and scheduling reliability' },
    { label: 'VisualCron workflows', value: '50+', description: 'Production dependencies and operational automation' },
    { label: 'Files processed daily', value: '200+', description: 'BFSI file workflows and automation' }
  ],
  terminalLines: ['$ whoami', '> DevOps Engineer', '$ toolkit', '> Linux · Git · Jenkins · Docker', '> AWS EC2 & S3 · CI/CD', '> Python · Bash · SQL Server', '> Grafana · Kibana · Azure DevOps', '$ uptime', '> 5+ years in production support and automation'],
  skillGroups: [
    { title: 'Operating Systems', items: ['Linux', 'Windows', 'Windows Server'] },
    { title: 'Version Control', items: ['Git', 'GitHub'] },
    { title: 'CI/CD', items: ['Jenkins', 'CI/CD Pipelines', 'Azure DevOps', 'Build Automation', 'Deployment Automation'] },
    { title: 'Containers', items: ['Docker', 'Dockerfiles', 'Container Image Creation'] },
    { title: 'Cloud', items: ['AWS EC2', 'AWS IAM', 'AWS S3', 'Cloud Operations'] },
    { title: 'Infrastructure & Delivery', items: ['Application Deployment', 'Environment Management', 'Release Management', 'Production Health Checks'] },
    { title: 'Scripting & Automation', items: ['Python', 'Bash', 'Shell Scripting', 'VBScript', 'Batch Script', 'PowerShell'] },
    { title: 'Monitoring & Observability', items: ['Grafana', 'Kibana', 'ELK Stack', 'AlertManager', 'Log Analysis'] },
    { title: 'Databases', items: ['SQL Server', 'SSMS', 'MySQL', 'SQL', 'Stored Procedures', 'Views', 'Functions', 'Triggers'] },
    { title: 'Enterprise Tools', items: ['VisualCron', 'Windows Task Scheduler', 'ServiceNow', 'Jira', 'Confluence', 'SFTP', 'PGP'] }
  ],
  experiences: [
    {
      title: 'DevOps Engineer', company: 'Xceedance Consulting India Pvt Ltd', period: 'Aug 2024 – Present', location: 'Gurugram, India', type: 'DevOps Projects',
      highlights: [
        'Worked as a DevOps Engineer across two enterprise application projects, focusing on CI/CD, deployment automation, Docker containerization, and AWS cloud operations.',
        'Designed, configured, and maintained CI/CD pipelines for automated source code checkout, application build, validation, Docker image creation, and deployment.',
        'Implemented CI/CD workflows for .NET, Angular, SQL Server, React, Node.js, and MongoDB based enterprise applications supporting repeatable delivery across environments.',
        'Created and maintained Dockerfiles and built application images for containerized deployments and automated delivery pipelines.',
        'Worked with AWS EC2, IAM, and S3 for deployment, access management, environment operations, and production support activities.',
        'Troubleshot pipeline, build, Docker, and deployment failures by analyzing logs and collaborating with development and QA teams.'
      ],
      stack: ['Jenkins', 'GitHub', 'Docker', 'AWS EC2', 'AWS IAM', 'AWS S3', 'CI/CD', 'React', 'Node.js', 'MongoDB', '.NET', 'Angular', 'SQL Server']
    },
    {
      title: 'Production Support Engineer (L2)', company: 'Xceedance Consulting India Pvt Ltd', period: 'Aug 2022 – Jul 2024', location: 'Gurugram, India', type: 'EAS - Enterprise Application System',
      highlights: [
        'Provided L2 application and production support for 3+ mission-critical enterprise applications across Linux and Windows environments.',
        'Managed 70+ production jobs and 50+ VisualCron workflows, resolving scheduling failures, dependency issues, and execution problems while maintaining service continuity.',
        'Performed RCA for high-severity incidents and implemented corrective and preventive actions to reduce recurring production issues.',
        'Developed and supported 8+ enterprise automation solutions using Python, Bash, Shell Scripting, VBScript, Batch Script, SQL Server, and VisualCron.',
        'Supported application deployment and release activities using Git, GitHub, Jenkins, and Azure DevOps, including validation and post-deployment checks.',
        'Worked with AWS EC2, IAM, and S3 for cloud operations, access validation, and production support activities.'
      ],
      stack: ['Linux', 'Windows', 'Python', 'Bash', 'VBScript', 'VisualCron', 'SQL Server', 'Git', 'GitHub', 'Jenkins', 'Azure DevOps', 'AWS EC2', 'AWS IAM', 'AWS S3']
    },
    {
      title: 'Junior Production Support Engineer (L1)', company: 'Xceedance Consulting India Pvt Ltd', period: 'Sept 2021 – Jul 2022', location: 'Gurugram, India', type: 'Party Central – Enterprise System (BHSI)',
      highlights: [
        'Provided L1 application support by monitoring enterprise applications, analyzing logs, and escalating critical incidents to L2 teams.',
        'Performed SQL data validation, log analysis, and functional verification to troubleshoot application issues and maintain application stability.',
        'Supported application development, bug fixing, deployment, and production release activities including post-release verification.',
        'Developed and maintained application modules using Angular, HTML, CSS, and JavaScript, gaining hands-on understanding of frontend and backend integrations.',
        'Collaborated with development, QA, and L2 support teams to investigate issues, validate fixes, and resolve production incidents.'
      ],
      stack: ['Angular', 'HTML', 'CSS', 'JavaScript', 'SQL', 'Log Analysis', 'Application Support', 'Production Releases']
    }
  ],
  projectCases: [
    {
      name: 'Enterprise Application Delivery Automation',
      summary: 'A DevOps-driven delivery model for enterprise application releases across production and development environments.',
      problem: 'Reduce manual deployment effort, improve release consistency, and accelerate issue resolution for critical enterprise applications.',
      architecture: ['Source code in GitHub', 'CI/CD orchestration through Jenkins and Azure DevOps', 'Build validation and packaging', 'Docker image creation', 'AWS-based deployment and environment operations'],
      technologies: ['Git', 'GitHub', 'Jenkins', 'Docker', 'AWS EC2', 'AWS IAM', 'AWS S3', 'Azure DevOps', 'SQL Server'],
      outcomes: ['Standardized application build and deployment workflows', 'Improved release consistency across environments', 'Reduced manual operational effort in deployment and verification tasks']
    },
    {
      name: 'Production Automation & Incident Reduction',
      summary: 'Enterprise automation for scheduling, validation, and operational support of critical business processes.',
      problem: 'Manage recurring production jobs, resolve workflow failures, and reduce dependency-driven operational issues in a high-volume BFSI environment.',
      architecture: ['Job orchestration via VisualCron and Windows scheduling', 'SQL validation and file-processing workflows', 'Log review and production monitoring', 'RCA and corrective actions'],
      technologies: ['VisualCron', 'Python', 'Bash', 'VBScript', 'Batch Script', 'SQL Server', 'SFTP', 'PGP', 'Grafana', 'Kibana'],
      outcomes: ['Managed 70+ production jobs and 50+ VisualCron workflows', 'Reduced manual effort by approximately 70%', 'Improved production stability through automation and preventive actions']
    },
    {
      name: 'BFSI Secure File Processing Automation',
      summary: 'Automated secure processing of daily production files across banking formats and validation pipelines.',
      problem: 'Handle high-volume production file processing securely and reliably while reducing repetitive manual validation work.',
      architecture: ['File intake via SFTP', 'Data validation through SQL and scripting', 'PGP encryption and decryption', 'Automated reporting and workflow execution'],
      technologies: ['SFTP', 'PGP', 'SQL Server', 'Python', 'Bash', 'VBScript', 'CSV', 'XML', 'BAI2', 'ISO20022'],
      outcomes: ['Processed 200+ production files daily', 'Improved file-processing reliability and operational efficiency', 'Automated validation and secure transfer workflows']
    }
  ],
  journeyStages: ['Application Support', 'Production Operations', 'L1 / L2 Troubleshooting', 'Automation Engineering', 'CI/CD & Docker', 'AWS Cloud Operations', 'DevOps Engineering'],
  githubHighlights: [
    'GitHub used as the source-control foundation for delivery workflows and release automation.',
    'Repository integration was part of the CI/CD pipeline for build and deployment orchestration.',
    'Public repo activity was not available in the provided sources, so this section is structured for profile linking and repository discovery.'
  ]
};