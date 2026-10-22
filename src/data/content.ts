export type Language = 'en' | 'vi';

export interface ProjectGalleryItem {
  src: string;
  alt: string;
  caption: string;
}

export interface ProjectContent {
  slug: string;
  index: string;
  title: string;
  label: string;
  summary: string;
  cover: string;
  coverAlt: string;
  sourceUrl: string;
  demoUrl?: string;
  demoLabel?: string;
  technologies: string[];
  contribution: string[];
  facts: Array<{ label: string; value: string }>;
  narrative: Array<{
    eyebrow: string;
    title: string;
    paragraphs: string[];
    points?: string[];
  }>;
  gallery: ProjectGalleryItem[];
  disclosure?: string;
}

export interface LocaleContent {
  nav: {
    work: string;
    experience: string;
    capabilities: string;
    notes: string;
    about: string;
    resume: string;
    menu: string;
    close: string;
    toLightTheme: string;
    toDarkTheme: string;
  };
  hero: {
    role: string;
    intro: string;
    primaryCta: string;
    secondaryCta: string;
    location: string;
    portraitAlt: string;
    ledgerTitle: string;
    /** Each claim names where a reader can check it; internal work has no link. */
    ledger: Array<{ claim: string; source: string; href?: string }>;
  };
  work: {
    title: string;
    intro: string;
    viewCaseStudy: string;
    sourceCode: string;
    watchDemo: string;
    oss: { title: string; text: string; linkLabel: string; href: string };
  };
  workflow: {
    title: string;
    intro: string;
    steps: Array<{ title: string; description: string }>;
    responsibilityTitle: string;
    responsibility: string;
  };
  experience: {
    title: string;
    items: Array<{
      company: string;
      role: string;
      period: string;
      summary: string;
      points: string[];
      link?: { label: string; to: string };
    }>;
  };
  capabilities: {
    title: string;
    intro: string;
    groups: Array<{ title: string; description: string; skills: string[] }>;
  };
  notes: {
    title: string;
    intro: string;
    viewAll: string;
    readNote: string;
    items: Array<{
      slug: string;
      title: string;
      summary: string;
      category: string;
      image: string;
      readTime: string;
      sourceUrl?: string;
    }>;
  };
  education: {
    title: string;
    school: string;
    degree: string;
    period: string;
    facts: Array<{ label: string; value: string }>;
  };
  about: {
    title: string;
    paragraphs: string[];
    cards: Array<{ label: string; value: string }>;
  };
  contact: {
    title: string;
    intro: string;
    emailCta: string;
    workLabel: string;
    contentLabel: string;
  };
  footer: {
    statement: string;
    domainNote: string;
    easterEgg: {
      ariaLabel: string;
      tooltipInactive: string;
      tooltipActive: string;
      toastActive: string;
      toastInactive: string;
      badgeText: string;
    };
  };
  resume: ResumeContent;
  common: {
    backHome: string;
    projectNotFound: string;
    viewSource: string;
    watchDemo: string;
    projectContribution: string;
    projectEvidence: string;
    nextProject: string;
    resumeTitle: string;
    resumeIntro: string;
    openResume: string;
    downloadResume: string;
    temporaryResume: string;
    notesTitle: string;
    notesIntro: string;
    notesStatus: string;
    readOriginal: string;
    visitBlog: string;
    blogIntro: string;
    noteNotFound: string;
    keyTakeaways: string;
    notFoundTitle: string;
    notFoundIntro: string;
    skipToContent: string;
    primaryNavigation: string;
    profileHighlights: string;
    caseStudy: string;
    transparencyNote: string;
    knowledgeBaseVersion: string;
    currentResumeVersion: string;
  };
  projects: ProjectContent[];
}

export interface ResumeSkillGroup {
  category: string;
  skills: string[];
}

export interface ResumeExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  points: string[];
  caseStudySlug?: string;
  caseStudyLabel?: string;
}

export interface ResumeProjectItem {
  title: string;
  role: string;
  period: string;
  tech: string[];
  points: string[];
  slug?: string;
  githubUrl?: string;
}

export interface ResumeEducationItem {
  school: string;
  degree: string;
  period: string;
  points: string[];
}

export interface ResumeCertificationItem {
  title: string;
  issuer: string;
  detail?: string;
}

export interface ResumeContent {
  badge: string;
  headline: string;
  intro: string;
  targetRole: string;
  fileLabel: string;
  fileSize: string;
  updatedDate: string;
  tabs: {
    pdf: string;
    interactive: string;
  };
  actions: {
    openPdf: string;
    downloadPdf: string;
    copyEmail: string;
    copiedEmail: string;
    contactMe: string;
  };
  quickFacts: Array<{ label: string; value: string }>;
  summaryTitle: string;
  summaryText: string;
  experienceTitle: string;
  experienceItems: ResumeExperienceItem[];
  projectsTitle: string;
  projectItems: ResumeProjectItem[];
  skillsTitle: string;
  skillGroups: ResumeSkillGroup[];
  educationTitle: string;
  educationItems: ResumeEducationItem[];
  certificationsTitle: string;
  certificationItems: ResumeCertificationItem[];
}

const sharedTechnologies = {
  eprocure: [
    'Java 17',
    'Spring Boot',
    'Angular',
    'PostgreSQL',
    'Kafka',
    'Redis',
    'Keycloak',
    'Docker',
  ],
  sneaker: ['ASP.NET Core 9', 'React', 'TypeScript', 'MySQL', 'Docker', 'VNPay Sandbox'],
  dormitory: ['Java 21', 'Spring Boot', 'PostgreSQL', 'PayOS', 'Jira'],
};

const englishProjects: ProjectContent[] = [
  {
    slug: 'eprocure',
    index: '01',
    title: 'eProcure Enterprise',
    label: 'Solo AI-first engineering project, FPT IS internship capstone',
    summary:
      'An enterprise procurement platform covering purchase requests, multi-level approvals, purchase orders, goods receipt, invoice matching and payment workflows.',
    cover: '/assets/projects/eprocure/DashBoard.png',
    coverAlt: 'eProcure role-aware procurement dashboard',
    sourceUrl: 'https://github.com/KLBMinhLong/E-Procurement',
    demoUrl: 'https://youtu.be/a2H5rima8uU',
    demoLabel: '3:06 system walkthrough',
    technologies: sharedTechnologies.eprocure,
    contribution: [
      'Defined architecture, coding constraints and business workflows for a nine-service system.',
      'Reviewed AI-generated implementations and iterated through automated and functional testing.',
      'Validated the Purchase Request, approval, procurement and invoice-matching journeys.',
    ],
    facts: [
      { label: 'Scope', value: '9 services' },
      { label: 'Architecture', value: 'Clean + event-driven' },
      { label: 'Primary flow', value: 'PR → Payment' },
      { label: 'Verification', value: 'Tests + functional QA' },
    ],
    narrative: [
      {
        eyebrow: 'The problem',
        title: 'Turning fragmented purchase approvals into one traceable workflow.',
        paragraphs: [
          'eProcure explores how a 200+ employee organization could replace email, spreadsheet and verbal approval paths with a consistent procurement lifecycle.',
          'The system follows a request from initial demand through approval, sourcing, purchase order, receipt, invoice matching and payment while preserving permissions and audit history.',
        ],
      },
      {
        eyebrow: 'System approach',
        title: 'Domain boundaries backed by explicit engineering constraints.',
        paragraphs: [
          'The platform is organized into nine domain-oriented services with Clean Architecture boundaries. Kafka carries business events, Redis supports sessions and caching, and Keycloak participates in identity flows.',
        ],
        points: [
          'Permission codes instead of hardcoded roles',
          'Idempotency keys for write operations',
          'Soft delete and complete audit trails',
          'Financial precision and timezone rules',
          'OpenAPI contracts and architecture decision records',
        ],
      },
      {
        eyebrow: 'Critical workflow',
        title: 'Three-way matching before an invoice moves toward payment.',
        paragraphs: [
          'The finance workflow compares the purchase order, goods receipt and vendor invoice. Quantity or amount differences are surfaced for review before approval and payment can continue.',
          'The system demo shows this end-to-end behavior alongside the broader procurement journey.',
        ],
      },
      {
        eyebrow: 'How AI was used',
        title: 'AI generated much of the implementation; verification remained my responsibility.',
        paragraphs: [
          'I used AI across research, planning, code generation, documentation and testing. I supplied architecture rules and business constraints, reviewed generated code and behavior, reproduced issues and requested corrections.',
          'The project demonstrates how I orchestrate a large AI-assisted build responsibly. It does not represent a production FPT IS system or measured production scale.',
        ],
      },
    ],
    gallery: [
      {
        src: '/assets/projects/eprocure/PurchaseRequest.png',
        alt: 'Purchase Request detail showing the current lifecycle stage',
        caption: 'A single request exposes its current stage, next states, amount and approval context.',
      },
      {
        src: '/assets/projects/eprocure/ApproveRule.png',
        alt: 'Approval rule management interface',
        caption: 'Approval chains are selected through value, category, department and priority rules.',
      },
      {
        src: '/assets/projects/eprocure/RBAC.png',
        alt: 'Permission-based RBAC matrix',
        caption: 'Permissions are assigned by capability rather than being embedded as hardcoded roles.',
      },
    ],
    disclosure:
      'Independently developed during the FPT IS internship as a learning capstone aligned with the banking unit’s technology focus. This is not a production FPT IS product; the screenshots and demo use learning/demo data only.',
  },
  {
    slug: 'your-sneaker',
    index: '02',
    title: 'YourSneaker',
    label: 'Solo full-stack product',
    summary:
      'A sneaker and streetwear commerce experience combining an ASP.NET Core backend, React storefront, administrative workflows and VNPay sandbox integration.',
    cover: '/assets/projects/yoursneaker/homePage.png',
    coverAlt: 'YourSneaker dark storefront home page',
    sourceUrl: 'https://github.com/KLBMinhLong/YourSneaker',
    demoUrl: 'https://youtu.be/_y9Tr9E2Dgs',
    demoLabel: '2:32 product demo',
    technologies: sharedTechnologies.sneaker,
    contribution: [
      'Built the project independently across backend, frontend, data and payment integration.',
      'Applied a four-layer Clean Architecture structure in ASP.NET Core.',
      'Connected storefront, checkout, order history and administration into one product flow.',
    ],
    facts: [
      { label: 'Role', value: 'Solo developer' },
      { label: 'Backend', value: '.NET 9' },
      { label: 'Frontend', value: 'React 18' },
      { label: 'Payment', value: 'VNPay sandbox' },
    ],
    narrative: [
      {
        eyebrow: 'Product goal',
        title: 'Learning a new stack by finishing a complete commerce journey.',
        paragraphs: [
          'YourSneaker was created to deepen my experience with MySQL, ASP.NET Core and React through a product that spans customer discovery and administrative operations.',
          'Customers can browse and filter products, manage a cart, check out through COD or VNPay sandbox and follow order progress.',
        ],
      },
      {
        eyebrow: 'Architecture',
        title: 'A full-stack product with clear backend boundaries.',
        paragraphs: [
          'The backend separates domain, application, infrastructure and API responsibilities. The React client centralizes API access, shared types and cart state while maintaining distinct storefront and admin routes.',
        ],
        points: [
          'JWT access and refresh token flow',
          'Product discovery and filtering',
          'Cart, checkout and order history',
          'VNPay HMAC-SHA512 sandbox integration',
          'Admin product, order and dashboard workflows',
        ],
      },
      {
        eyebrow: 'What I learned',
        title: 'Architecture matters only when it supports a coherent product.',
        paragraphs: [
          'Building both sides forced me to think beyond endpoints: loading states, checkout failure paths, data consistency and admin operations all shape the quality of the final experience.',
        ],
      },
    ],
    gallery: [
      {
        src: '/assets/projects/yoursneaker/productPage.png',
        alt: 'YourSneaker product discovery interface',
        caption: 'Product discovery combines category, brand and price filtering with a strong visual catalog.',
      },
      {
        src: '/assets/projects/yoursneaker/cartPage.png',
        alt: 'YourSneaker cart and checkout interface',
        caption: 'Cart and checkout connect product choices to COD or VNPay sandbox payment.',
      },
      {
        src: '/assets/projects/yoursneaker/adminPage.png',
        alt: 'YourSneaker administration dashboard',
        caption: 'The administration area brings sales indicators, products and orders into one workflow.',
      },
    ],
    disclosure: 'VNPay is integrated and demonstrated in its sandbox environment.',
  },
  {
    slug: 'student-dormitory',
    index: '03',
    title: 'Student Dormitory Management',
    label: 'Project Lead & Developer, 6-member team',
    summary:
      'A dormitory operations system covering room selection, registration, contracts, monthly utilities, invoices and payment workflows.',
    cover: '/assets/projects/dormitory/06-student-portal.png',
    coverAlt: 'Student portal showing available dormitory rooms',
    sourceUrl: 'https://github.com/KLBMinhLong/StudentDormitoryManagement',
    technologies: sharedTechnologies.dormitory,
    contribution: [
      'Managed Jira, task distribution and delivery coordination for six members.',
      'Contributed to room selection and the registration workflow.',
      'Worked on payment and monthly electricity/water operations.',
    ],
    facts: [
      { label: 'Team', value: '6 members' },
      { label: 'Role', value: 'Lead + developer' },
      { label: 'Core flow', value: 'Room → Payment' },
      { label: 'Delivery', value: 'Jira + Git' },
    ],
    narrative: [
      {
        eyebrow: 'Operations problem',
        title: 'Connecting the student journey with daily dormitory administration.',
        paragraphs: [
          'The system supports two connected viewpoints: students discover rooms, submit registration information and manage their contract, while administrators operate rooms, utilities, invoices and reports.',
        ],
      },
      {
        eyebrow: 'My contribution',
        title: 'Leading delivery while contributing to the highest-value workflow.',
        paragraphs: [
          'I organized Jira work, assigned tasks across six team members and helped coordinate integration. My development contribution focused on room selection, registration, payment and monthly electricity/water processing.',
        ],
        points: [
          'Available room and bed selection',
          'Registration and contract lifecycle',
          'Monthly electricity and water periods',
          'Invoice generation and payment flow',
          'Task coordination and feature integration',
        ],
      },
      {
        eyebrow: 'Team lesson',
        title: 'A usable workflow depends on coordination as much as implementation.',
        paragraphs: [
          'The project strengthened my ability to divide work, clarify dependencies and bring independently built modules back into a complete student and administrator journey.',
        ],
      },
    ],
    gallery: [
      {
        src: '/assets/projects/dormitory/06-student-portal.png',
        alt: 'Student portal for finding available rooms',
        caption: 'Students begin by filtering available rooms and beds that match their needs.',
      },
      {
        src: '/assets/projects/dormitory/04-contract-management.png',
        alt: 'Dormitory contract management interface',
        caption: 'Administrators review active contracts and student extension or cancellation requests.',
      },
      {
        src: '/assets/projects/dormitory/05-invoice-management.png',
        alt: 'Monthly utility and invoice operations',
        caption: 'Closed utility periods become invoices that can be tracked and paid.',
      },
    ],
  },
];

const vietnameseProjects: ProjectContent[] = englishProjects.map((project) => ({ ...project }));

vietnameseProjects[0] = {
  ...englishProjects[0],
  label: 'Dự án kỹ thuật AI-first cá nhân, Capstone trong kỳ thực tập FPT IS',
  summary:
    'Nền tảng quản lý mua sắm doanh nghiệp bao phủ yêu cầu mua sắm, phê duyệt nhiều cấp, đơn mua hàng, nhận hàng, đối soát hóa đơn và thanh toán.',
  contribution: [
    'Xác định kiến trúc, quy tắc coding và luồng nghiệp vụ cho hệ thống chín service.',
    'Đọc lại phần triển khai do AI tạo và lặp lại qua kiểm thử tự động lẫn kiểm thử chức năng.',
    'Xác minh hành trình từ yêu cầu mua sắm, phê duyệt đến procurement và đối soát hóa đơn.',
  ],
  facts: [
    { label: 'Phạm vi', value: '9 service' },
    { label: 'Kiến trúc', value: 'Clean + event-driven' },
    { label: 'Luồng chính', value: 'PR → Thanh toán' },
    { label: 'Xác minh', value: 'Test + functional QA' },
  ],
  narrative: [
    {
      eyebrow: 'Bài toán',
      title: 'Đưa các bước mua sắm rời rạc về một quy trình có thể truy vết.',
      paragraphs: [
        'eProcure mô phỏng cách một doanh nghiệp hơn 200 nhân viên có thể thay thế email, bảng tính và phê duyệt miệng bằng một vòng đời procurement nhất quán.',
        'Hệ thống theo dõi nhu cầu từ lúc tạo yêu cầu, phê duyệt, chọn nhà cung cấp, lập đơn mua, nhận hàng, đối soát hóa đơn đến thanh toán, đồng thời giữ quyền hạn và lịch sử audit.',
      ],
    },
    {
      eyebrow: 'Cách tiếp cận',
      title: 'Ranh giới nghiệp vụ được bảo vệ bởi các quy tắc kỹ thuật rõ ràng.',
      paragraphs: [
        'Nền tảng được tổ chức thành chín service theo miền nghiệp vụ với Clean Architecture. Kafka truyền business event, Redis hỗ trợ session/cache và Keycloak tham gia luồng định danh.',
      ],
      points: [
        'Permission code thay cho hardcoded role',
        'Idempotency key cho thao tác ghi',
        'Soft delete và audit trail',
        'Quy tắc precision tiền tệ và timezone',
        'OpenAPI contract và Architecture Decision Record',
      ],
    },
    {
      eyebrow: 'Luồng quan trọng',
      title: 'Đối soát ba bên trước khi hóa đơn đi tiếp đến thanh toán.',
      paragraphs: [
        'Luồng finance so sánh Purchase Order, Goods Receipt và Invoice. Chênh lệch số lượng hoặc giá trị được đưa ra kiểm tra trước khi tiếp tục duyệt và thanh toán.',
        'Video demo thể hiện hành vi này cùng hành trình procurement tổng thể.',
      ],
    },
    {
      eyebrow: 'Cách dùng AI',
      title: 'AI tạo phần lớn implementation; trách nhiệm xác minh vẫn thuộc về mình.',
      paragraphs: [
        'Mình dùng AI trong nghiên cứu, lập kế hoạch, sinh code, viết tài liệu và kiểm thử. Mình cung cấp quy tắc kiến trúc, ràng buộc nghiệp vụ, đọc code/hành vi được tạo, tái hiện lỗi và yêu cầu sửa.',
        'Dự án thể hiện cách mình điều phối một hệ thống AI-assisted có phạm vi lớn. Đây không phải sản phẩm production của FPT IS và không đại diện cho quy mô production đã đo lường.',
      ],
    },
  ],
  gallery: [
    {
      src: '/assets/projects/eprocure/PurchaseRequest.png',
      alt: 'Chi tiết yêu cầu mua sắm và giai đoạn vòng đời hiện tại',
      caption: 'Một yêu cầu hiển thị giai đoạn hiện tại, bước tiếp theo, giá trị và ngữ cảnh duyệt.',
    },
    {
      src: '/assets/projects/eprocure/ApproveRule.png',
      alt: 'Giao diện quản lý quy tắc phê duyệt',
      caption: 'Chuỗi duyệt được chọn theo giá trị, danh mục, phòng ban và mức độ ưu tiên.',
    },
    {
      src: '/assets/projects/eprocure/RBAC.png',
      alt: 'Ma trận phân quyền theo permission',
      caption: 'Quyền được gán theo năng lực thay vì nhúng role cứng trong code.',
    },
  ],
  disclosure:
    'Được phát triển độc lập trong kỳ thực tập FPT IS như một capstone học tập theo định hướng công nghệ của phòng ban ngân hàng. Đây không phải sản phẩm production của FPT IS; ảnh và video demo chỉ sử dụng dữ liệu học tập/minh họa.',
};

vietnameseProjects[1] = {
  ...englishProjects[1],
  label: 'Sản phẩm full-stack cá nhân',
  summary:
    'Trải nghiệm thương mại điện tử sneaker kết hợp backend ASP.NET Core, storefront React, vận hành quản trị và thanh toán VNPay sandbox.',
  contribution: [
    'Tự phát triển backend, frontend, dữ liệu và tích hợp thanh toán.',
    'Áp dụng cấu trúc Clean Architecture bốn tầng trong ASP.NET Core.',
    'Kết nối storefront, checkout, lịch sử đơn và admin thành một product flow.',
  ],
  narrative: [
    {
      eyebrow: 'Mục tiêu sản phẩm',
      title: 'Học stack mới bằng cách hoàn thiện một hành trình thương mại điện tử.',
      paragraphs: [
        'YourSneaker được tạo để nâng cao trải nghiệm với MySQL, ASP.NET Core và React qua một sản phẩm bao phủ cả khách hàng lẫn vận hành quản trị.',
        'Người dùng có thể tìm/lọc sản phẩm, quản lý giỏ hàng, checkout bằng COD hoặc VNPay sandbox và theo dõi tiến độ đơn.',
      ],
    },
    {
      eyebrow: 'Kiến trúc',
      title: 'Sản phẩm full-stack với ranh giới backend rõ ràng.',
      paragraphs: [
        'Backend tách domain, application, infrastructure và API. React client tập trung API access, shared type và cart state, đồng thời tách storefront khỏi admin route.',
      ],
      points: [
        'JWT access và refresh token',
        'Tìm kiếm, lọc sản phẩm',
        'Giỏ hàng, checkout và lịch sử đơn',
        'Tích hợp VNPay HMAC-SHA512 sandbox',
        'Quản lý sản phẩm, đơn hàng và dashboard',
      ],
    },
    {
      eyebrow: 'Điều học được',
      title: 'Kiến trúc chỉ có ý nghĩa khi hỗ trợ một sản phẩm mạch lạc.',
      paragraphs: [
        'Làm cả hai phía buộc mình nghĩ xa hơn endpoint: trạng thái loading, luồng checkout lỗi, tính nhất quán dữ liệu và vận hành admin đều ảnh hưởng chất lượng trải nghiệm.',
      ],
    },
  ],
  disclosure: 'VNPay được tích hợp và trình diễn trong môi trường sandbox.',
};

vietnameseProjects[2] = {
  ...englishProjects[2],
  label: 'Project Lead & Developer, Nhóm 6 thành viên',
  summary:
    'Hệ thống vận hành ký túc xá bao phủ chọn phòng, đăng ký, hợp đồng, điện nước hàng tháng, hóa đơn và thanh toán.',
  contribution: [
    'Quản lý Jira, phân chia công việc và điều phối tiến độ cho sáu thành viên.',
    'Tham gia luồng chọn phòng và đăng ký.',
    'Tham gia chức năng thanh toán và quản lý điện nước hàng tháng.',
  ],
  narrative: [
    {
      eyebrow: 'Bài toán vận hành',
      title: 'Kết nối hành trình sinh viên với công việc quản trị ký túc xá.',
      paragraphs: [
        'Hệ thống hỗ trợ hai góc nhìn liên kết: sinh viên tìm phòng, gửi thông tin đăng ký và quản lý hợp đồng; quản trị viên vận hành phòng, điện nước, hóa đơn và báo cáo.',
      ],
    },
    {
      eyebrow: 'Đóng góp của mình',
      title: 'Điều phối delivery và tham gia vào workflow có giá trị cao nhất.',
      paragraphs: [
        'Mình tổ chức Jira, phân chia task cho sáu thành viên và hỗ trợ tích hợp. Phần code tập trung vào chọn phòng, đăng ký, thanh toán và xử lý điện nước hàng tháng.',
      ],
      points: [
        'Tìm phòng và giường còn trống',
        'Đăng ký và vòng đời hợp đồng',
        'Kỳ điện nước hàng tháng',
        'Sinh hóa đơn và thanh toán',
        'Điều phối task và tích hợp feature',
      ],
    },
    {
      eyebrow: 'Bài học teamwork',
      title: 'Một workflow dùng được phụ thuộc vào phối hợp nhiều như implementation.',
      paragraphs: [
        'Dự án giúp mình cải thiện khả năng chia việc, làm rõ dependency và đưa các module được phát triển độc lập trở lại thành một hành trình hoàn chỉnh.',
      ],
    },
  ],
  gallery: [
    {
      src: '/assets/projects/dormitory/06-student-portal.png',
      alt: 'Trang sinh viên tìm phòng ký túc xá còn trống',
      caption: 'Sinh viên bắt đầu bằng cách lọc phòng và giường còn trống phù hợp.',
    },
    {
      src: '/assets/projects/dormitory/04-contract-management.png',
      alt: 'Giao diện quản lý hợp đồng nội trú',
      caption: 'Quản trị viên theo dõi hợp đồng và xử lý yêu cầu gia hạn/hủy từ sinh viên.',
    },
    {
      src: '/assets/projects/dormitory/05-invoice-management.png',
      alt: 'Vận hành điện nước và hóa đơn theo tháng',
      caption: 'Kỳ điện nước đã chốt được chuyển thành hóa đơn để theo dõi và thanh toán.',
    },
  ],
};

export const content: Record<Language, LocaleContent> = {
  en: {
    nav: {
      work: 'Work',
      experience: 'Experience',
      capabilities: 'Capabilities',
      notes: 'Notes',
      about: 'About',
      resume: 'Résumé',
      menu: 'Open menu',
      close: 'Close menu',
      toLightTheme: 'Switch to light theme',
      toDarkTheme: 'Switch to dark theme',
    },
    hero: {
      role: 'Software Engineer, backend and full-stack',
      intro:
        'I build internal tools and AI-agent integrations with TypeScript on Cloudflare Workers at Viemind. Before that, during my FPT IS internship, I built a nine-service procurement platform with Java and Spring Boot.',
      primaryCta: 'See my work',
      secondaryCta: 'Open résumé',
      location: 'Ho Chi Minh City',
      portraitAlt: 'Portrait of Nguyễn Minh Long',
      ledgerTitle: 'Things you can check',
      ledger: [
        {
          claim: 'Nine Spring Boot services, 13 architecture decision records and 104 backend test files',
          source: 'E-Procurement on GitHub',
          href: 'https://github.com/KLBMinhLong/E-Procurement',
        },
        {
          claim: 'A pull request merged into PhotoCraft, an open-source photo editor with more than 70,000 stars',
          source: 'storytold/photocraft#7478',
          href: 'https://github.com/storytold/photocraft/pull/7478',
        },
        {
          claim: '1,341 backend and 637 frontend tests on an AI comment-handling system at Viemind, now in pilot',
          source: 'Internal project, happy to walk through it in an interview',
        },
        {
          claim: 'Graduated in Software Engineering from HUTECH with a GPA of 3.54 / 4.00',
          source: 'October 2026',
        },
      ],
    },
    work: {
      title: 'Selected work',
      intro:
        'Two projects with public source code and one merged open-source contribution. My work at Viemind is internal, so it is described under experience without screenshots.',
      viewCaseStudy: 'Read the case study',
      sourceCode: 'Source code',
      watchDemo: 'Watch demo',
      oss: {
        title: 'Open-source contribution',
        text: 'Fixed the Enable Gestures preference in PhotoCraft so that turning it off also ignores touch-screen pinch and twist, with three unit tests. Merged on 18 October 2026.',
        linkLabel: 'View pull request #7478',
        href: 'https://github.com/storytold/photocraft/pull/7478',
      },
    },
    workflow: {
      title: 'AI-first. Verification-driven.',
      intro:
        'I use AI across the engineering lifecycle, but I do not delegate responsibility for the result.',
      steps: [
        { title: 'Define', description: 'Clarify the problem, users and acceptance boundary.' },
        { title: 'Constrain', description: 'Set architecture, security and coding rules.' },
        { title: 'Generate', description: 'Use AI for research, planning and implementation.' },
        { title: 'Review', description: 'Read code and compare behavior with the intended flow.' },
        { title: 'Verify', description: 'Run automated checks and functional journeys.' },
        { title: 'Iterate', description: 'Reproduce defects, correct assumptions and test again.' },
      ],
      responsibilityTitle: 'The accountability stays human.',
      responsibility:
        'My responsibility is to define the constraints, challenge generated solutions and keep iterating until the architecture and business behavior agree.',
    },
    experience: {
      title: 'Where I have worked',
      items: [
        {
          company: 'Viemind',
          role: 'Fresher Software Engineer',
          period: 'Sep 2026 – present',
          summary:
            'Internal tools and AI-agent integrations for the company’s e-commerce business, built with TypeScript, Hono, React and Cloudflare Workers.',
          points: [
            'Built a product catalog tool on my own, from the product requirements to version 1.14: a web app, a CLI and an MCP server with 28 tools that keep 379 products in sync with the production CMS.',
            'Every write to the CMS is read back and checked, with snapshots for rollback. A full audit of 313 products runs at a median of 0.5–0.6 s against a 15 s target.',
            'Building an AI system that classifies and drafts replies to Facebook and TikTok comments, with a nine-rule safety gate, PII masking and human approval of every reply. It is in pilot, with 1,341 backend and 637 frontend tests.',
            'Contributed to the company’s live storefront (Astro 5 on Cloudflare Workers): mobile layout, a Vietnamese and English interface, the product variant picker and structured data for search.',
          ],
        },
        {
          company: 'FPT IS',
          role: 'Development Intern',
          period: 'Apr 2026 – Jul 2026',
          summary:
            'Completed a backend-focused internship and independently developed an AI-assisted e-procurement capstone aligned with technologies relevant to the banking unit.',
          points: [
            'Applied Java, Spring Boot, Angular, PostgreSQL and containerized infrastructure to a multi-service procurement system.',
            'Defined architecture and coding constraints, reviewed AI-generated implementations and iterated through automated and functional testing.',
            'Validated purchase request, approval, procurement and invoice-matching workflows.',
            'Documented architecture decisions, API conventions and project workflows.',
          ],
          link: { label: 'Read the eProcure case study', to: '/work/eprocure' },
        },
      ],
    },
    capabilities: {
      title: 'Tools I use, grouped by how I use them',
      intro: 'No percentages or star ratings. Each group lists what I have used in the work above.',
      groups: [
        {
          title: 'Backend & systems',
          description: 'API design, business rules, security and data.',
          skills: ['Java', 'Spring Boot', 'TypeScript (Node.js)', 'ASP.NET Core', 'REST API', 'Spring Security', 'MyBatis / JPA', 'PostgreSQL', 'MySQL', 'SQLite'],
        },
        {
          title: 'Frontend & product',
          description: 'Turning backend capability into usable workflows.',
          skills: ['React', 'Angular', 'Astro', 'TypeScript', 'TanStack Query', 'HTML', 'CSS / SCSS', 'Responsive UI'],
        },
        {
          title: 'Edge, AI & automation',
          description: 'Running services at the edge and putting language models behind safety checks.',
          skills: ['Cloudflare Workers', 'D1 / R2 / Cron', 'Hono', 'MCP servers', 'LLM integration (Gemini, OpenAI-compatible APIs)', 'Chrome DevTools Protocol', 'Vitest', 'Playwright'],
        },
        {
          title: 'Architecture & delivery',
          description: 'Keeping larger systems understandable and operable.',
          skills: ['Clean Architecture', 'Microservices', 'Docker', 'Kafka', 'Redis', 'Keycloak', 'Flyway', 'Git', 'Jira'],
        },
        {
          title: 'Working knowledge',
          description: 'Technologies applied in supporting project roles.',
          skills: ['Camunda BPMN', 'OpenTelemetry', 'Prometheus / Grafana', 'JasperReports', 'MongoDB', 'Node.js / Express', 'SQL Server'],
        },
      ],
    },
    notes: {
      title: 'Learning by explaining.',
      intro:
        'A curated set of foundational notes from my earlier networking and web studies. The library will grow with project lessons.',
      viewAll: 'Explore all notes',
      readNote: 'Read note',
      items: [
        {
          slug: 'git-basics',
          title: 'Git basics for a dependable developer workflow',
          summary: 'A practical guide to essential Git commands: staging, branching, merging, remote sync and safe undo workflows.',
          category: 'Version control',
          image: '/assets/notes/git-basics.jpg',
          readTime: '10 min',
          sourceUrl: 'https://klbminhlong.github.io/posts/git-13-git-co-ban/',
        },
        {
          slug: 'tcp-vs-udp',
          title: 'TCP vs UDP through an interactive simulation',
          summary: 'Visualizing connection setup, reliability and delivery trade-offs.',
          category: 'Networking',
          image: '/assets/notes/tcp-vs-udp.jpg',
          readTime: '6 min',
        },
        {
          slug: 'http-rest-java',
          title: 'HTTP and REST with Java',
          summary: 'From request structure to a small Java-backed API flow.',
          category: 'Web fundamentals',
          image: '/assets/notes/http-rest-api.jpg',
          readTime: '8 min',
        },
        {
          slug: 'docker-fundamentals',
          title: 'Docker fundamentals',
          summary: 'Why containers help create predictable development environments.',
          category: 'Delivery',
          image: '/assets/notes/docker-basics.jpg',
          readTime: '5 min',
        },
      ],
    },
    education: {
      title: 'Education',
      school: 'Ho Chi Minh City University of Technology (HUTECH)',
      degree: 'Software Engineering',
      period: 'October 2022 – October 2026, graduated',
      facts: [
        { label: 'Final GPA', value: '3.54 / 4.00' },
        { label: 'Recognition', value: 'Outstanding Student, awarded every year from 2023 to 2026' },
        { label: 'English', value: 'CEFR B1, Center of Informatics, Foreign Languages & Skills' },
      ],
    },
    about: {
      title: 'Curious in systems. Competitive on the court.',
      paragraphs: [
        'I enjoy working across backend systems and full-stack product development, from designing APIs and business workflows to building the interface users interact with.',
        'Outside software, films help me slow down, badminton keeps me moving and games give me another kind of system to understand.',
      ],
      cards: [
        { label: 'Current role', value: 'Software Engineer at Viemind' },
        { label: 'Next goal', value: 'Grow into a backend engineer strong in system design and automated testing' },
        { label: 'Off-screen', value: 'Badminton, films and games' },
        { label: 'Based in', value: 'Ho Chi Minh City' },
      ],
    },
    contact: {
      title: 'Have a role, project or engineering problem in mind?',
      intro:
        'Email reaches me fastest. I am glad to talk about backend, full-stack and AI-agent work.',
      emailCta: 'Write an email',
      workLabel: 'Work profiles',
      contentLabel: 'Where I post',
    },
    footer: {
      statement: 'Built with React and TypeScript, set in Be Vietnam Pro.',
      domainNote: 'KLB.dev is the personal brand of Nguyễn Minh Long.',
      easterEgg: {
        ariaLabel: 'Toggle Electric Blue pixel cursor Easter Egg',
        tooltipInactive: 'Easter Egg: Switch to Electric Blue pixel cursor',
        tooltipActive: 'Pixel cursor active · Click to return to default',
        toastActive: '⚡ Electric Blue Pixel Cursor Activated!',
        toastInactive: 'Standard cursor restored',
        badgeText: 'Pixel Mode',
      },
    },
    resume: {
      badge: 'Software Engineer, backend and full-stack',
      headline: 'Résumé',
      intro: 'A one-page résumé in Vietnamese covering my work at Viemind, the FPT IS internship, selected projects and education. The interactive tab has the same content in English.',
      targetRole: 'Software Engineer (Backend / Full-stack)',
      fileLabel: 'Nguyen-Minh-Long-Resume.pdf',
      fileSize: '1 page, Vietnamese',
      updatedDate: 'October 2026',
      tabs: {
        pdf: 'PDF Document Preview',
        interactive: 'Interactive Breakdown',
      },
      actions: {
        openPdf: 'Open PDF in new tab',
        downloadPdf: 'Download PDF',
        copyEmail: 'Copy email',
        copiedEmail: 'Email copied!',
        contactMe: 'Get in touch',
      },
      quickFacts: [
        { label: 'Role', value: 'Software Engineer (Backend / Full-stack)' },
        { label: 'Now', value: 'Fresher Software Engineer at Viemind' },
        { label: 'Before', value: 'Development Intern at FPT IS' },
        { label: 'Education', value: 'HUTECH, graduated with GPA 3.54 / 4.00' },
        { label: 'English', value: 'CEFR B1' },
        { label: 'Location', value: 'Ho Chi Minh City, Vietnam' },
      ],
      summaryTitle: 'Summary',
      summaryText: 'Software Engineer focused on backend and full-stack work. At Viemind I build internal tools and AI-agent integrations with TypeScript on Cloudflare Workers; during my FPT IS internship I built a nine-service procurement capstone with Java and Spring Boot. I use AI throughout development and stay responsible for code review, automated tests and functional checks. Next goal: grow into a backend engineer strong in system design and automated testing.',
      experienceTitle: 'Work experience',
      experienceItems: [
        {
          company: 'Viemind',
          role: 'Fresher Software Engineer',
          period: 'Sep 2026 – present',
          location: 'Ho Chi Minh City, Vietnam',
          points: [
            'Built a product catalog tool from requirements to version 1.14 (web app, CLI and an MCP server with 28 tools) that keeps 379 products in sync with the production CMS; every write is read back and checked, with snapshots for rollback.',
            'Building an AI system that classifies and drafts replies to Facebook and TikTok comments, with a nine-rule safety gate, PII masking and human approval of every reply (in pilot; 1,341 backend and 637 frontend tests).',
            'Contributed to the company’s live storefront on Astro 5 and Cloudflare Workers: mobile layout, Vietnamese and English interface, product variant picker and structured data.',
          ],
        },
        {
          company: 'FPT IS',
          role: 'Development Intern',
          period: 'Apr 2026 – Jul 2026',
          location: 'Ho Chi Minh City, Vietnam',
          points: [
            'Independently built eProcure Enterprise, a nine-service procurement capstone covering the purchase-to-pay workflow.',
            'Worked with a technical mentor on system architecture, coding standards and procurement business workflows.',
            'Used AI tools for research, implementation and documentation, while keeping responsibility for code review, automated checks and functional testing.',
          ],
          caseStudySlug: 'eprocure',
          caseStudyLabel: 'Read the eProcure case study',
        },
      ],
      projectsTitle: 'Selected projects',
      projectItems: [
        {
          title: 'eProcure Enterprise',
          role: 'Solo AI-assisted internship capstone',
          period: '2026',
          tech: ['Java 17', 'Spring Boot', 'Angular', 'PostgreSQL', 'Kafka', 'Redis', 'Keycloak', 'Docker'],
          points: [
            'Nine services covering purchase requests, multi-level approvals, purchase orders, goods receipt, invoice matching and payment.',
            'Clean Architecture, event-driven service boundaries, permission-based authorization and idempotent writes; 56 Flyway migrations, 13 ADRs, 9 OpenAPI specs and 104 backend test files.',
          ],
          slug: 'eprocure',
          githubUrl: 'https://github.com/KLBMinhLong/E-Procurement',
        },
        {
          title: 'Student Dormitory Management',
          role: 'Team lead, six-member team',
          period: 'Feb 2026 – Apr 2026',
          tech: ['Java 21', 'Spring Boot', 'PostgreSQL', 'JWT', 'PayOS', 'Jira'],
          points: [
            'Split and tracked the team’s work in Jira and integrated features; built room and bed selection, registration, PayOS payment links and webhooks, and monthly utilities (81 of the repository’s 89 commits).',
          ],
          slug: 'student-dormitory',
          githubUrl: 'https://github.com/KLBMinhLong/StudentDormitoryManagement',
        },
        {
          title: 'PhotoCraft (open source)',
          role: 'Contributor',
          period: 'Oct 2026',
          tech: ['Rust'],
          points: [
            'Pull request #7478 merged: the Enable Gestures preference now also ignores touch-screen pinch and twist when turned off, with three unit tests.',
          ],
          githubUrl: 'https://github.com/storytold/photocraft/pull/7478',
        },
      ],
      skillsTitle: 'Technical skills',
      skillGroups: [
        {
          category: 'Backend',
          skills: ['Java', 'Spring Boot', 'TypeScript (Node.js, Hono)', 'ASP.NET Core', 'REST API', 'Kafka', 'Redis', 'Keycloak'],
        },
        {
          category: 'Frontend',
          skills: ['React', 'Angular', 'Astro', 'TanStack Query', 'HTML / CSS'],
        },
        {
          category: 'Data',
          skills: ['PostgreSQL', 'MySQL', 'SQLite', 'Cloudflare D1'],
        },
        {
          category: 'Edge, AI & testing',
          skills: ['Cloudflare Workers', 'MCP servers', 'LLM integration', 'Chrome DevTools Protocol', 'Vitest', 'Playwright', 'Docker', 'Git'],
        },
      ],
      educationTitle: 'Education & honors',
      educationItems: [
        {
          school: 'Ho Chi Minh City University of Technology (HUTECH)',
          degree: 'Bachelor of Engineering in Software Engineering',
          period: 'Oct 2022 – Oct 2026, graduated',
          points: [
            'Final GPA: 3.54 / 4.00',
            'Outstanding Student Award every academic year from 2023 to 2026',
          ],
        },
      ],
      certificationsTitle: 'Certifications & Languages',
      certificationItems: [
        {
          title: 'CEFR B1 English Certificate',
          issuer: 'Center of Informatics, Foreign Languages & Skills',
          detail: 'CEFR B1 Level in English Proficiency',
        },
      ],
    },
    common: {
      backHome: 'Back to portfolio',
      projectNotFound: 'This project story does not exist.',
      viewSource: 'View source',
      watchDemo: 'Watch demo',
      projectContribution: 'My contribution',
      projectEvidence: 'Product evidence',
      nextProject: 'Next project',
      resumeTitle: 'Résumé',
      resumeIntro: 'A one-page résumé covering my work experience, selected projects, technical skills and education.',
      openResume: 'Open PDF in new tab',
      downloadResume: 'Download PDF',
      temporaryResume: 'Software Engineer (Backend / Full-stack), one-page PDF',
      notesTitle: 'Engineering Notes',
      notesIntro: 'Selected personal learning notes from my networking and web studies, updated as I turn project lessons into clear explanations.',
      notesStatus: 'Personal learning notes, updated August 2026',
      readOriginal: 'Read the original article',
      visitBlog: 'Visit MLBlog archive',
      blogIntro: 'Want the wider networking and web-study archive? Visit my original MLBlog.',
      noteNotFound: 'This note is not in the current library.',
      keyTakeaways: 'Key takeaways',
      notFoundTitle: 'This page is not here.',
      notFoundIntro: 'It may have moved, or it was never part of this site.',
      skipToContent: 'Skip to content',
      primaryNavigation: 'Primary navigation',
      profileHighlights: 'Things you can check',
      caseStudy: 'Case study',
      transparencyNote: 'Transparency note',
      knowledgeBaseVersion: 'Personal learning notes, updated August 2026',
      currentResumeVersion: 'PDF, updated October 2026',
    },
    projects: englishProjects,
  },
  vi: {
    nav: {
      work: 'Dự án',
      experience: 'Kinh nghiệm',
      capabilities: 'Năng lực',
      notes: 'Ghi chú',
      about: 'Về mình',
      resume: 'CV',
      menu: 'Mở menu',
      close: 'Đóng menu',
      toLightTheme: 'Chuyển sang giao diện sáng',
      toDarkTheme: 'Chuyển sang giao diện tối',
    },
    hero: {
      role: 'Software Engineer, backend và full-stack',
      intro:
        'Mình xây công cụ nội bộ và tích hợp AI agent bằng TypeScript trên Cloudflare Workers tại Viemind. Trước đó, trong kỳ thực tập ở FPT IS, mình làm một nền tảng mua sắm gồm 9 service bằng Java và Spring Boot.',
      primaryCta: 'Xem việc mình đã làm',
      secondaryCta: 'Mở CV',
      location: 'TP. Hồ Chí Minh',
      portraitAlt: 'Chân dung Nguyễn Minh Long',
      ledgerTitle: 'Những điều bạn có thể kiểm chứng',
      ledger: [
        {
          claim: '9 service Spring Boot, 13 bản ghi quyết định kiến trúc (ADR) và 104 file test backend',
          source: 'E-Procurement trên GitHub',
          href: 'https://github.com/KLBMinhLong/E-Procurement',
        },
        {
          claim: 'Pull request được merge vào PhotoCraft, trình sửa ảnh mã nguồn mở hơn 70 nghìn sao',
          source: 'storytold/photocraft#7478',
          href: 'https://github.com/storytold/photocraft/pull/7478',
        },
        {
          claim: '1.341 test backend và 637 test frontend cho hệ thống AI xử lý bình luận tại Viemind, đang pilot',
          source: 'Dự án nội bộ, mình sẵn sàng trình bày khi phỏng vấn',
        },
        {
          claim: 'Tốt nghiệp Kỹ thuật Phần mềm tại HUTECH với GPA 3.54 / 4.00',
          source: 'Tháng 10/2026',
        },
      ],
    },
    work: {
      title: 'Dự án chọn lọc',
      intro:
        'Hai dự án có mã nguồn công khai và một đóng góp mã nguồn mở đã được merge. Việc ở Viemind là dự án nội bộ nên chỉ được mô tả ở phần kinh nghiệm, không kèm ảnh.',
      viewCaseStudy: 'Đọc case study',
      sourceCode: 'Mã nguồn',
      watchDemo: 'Xem demo',
      oss: {
        title: 'Đóng góp mã nguồn mở',
        text: 'Sửa tùy chọn Enable Gestures của PhotoCraft để khi tắt thì cử chỉ pinch và twist trên màn hình cảm ứng cũng bị bỏ qua, kèm 3 unit test. Được merge ngày 18/10/2026.',
        linkLabel: 'Xem pull request #7478',
        href: 'https://github.com/storytold/photocraft/pull/7478',
      },
    },
    workflow: {
      title: 'AI-first. Xác minh đến cùng.',
      intro:
        'Mình sử dụng AI trong toàn bộ engineering lifecycle nhưng không chuyển giao trách nhiệm về kết quả.',
      steps: [
        { title: 'Xác định', description: 'Làm rõ bài toán, người dùng và ranh giới nghiệm thu.' },
        { title: 'Ràng buộc', description: 'Đặt quy tắc kiến trúc, bảo mật và coding.' },
        { title: 'Tạo', description: 'Dùng AI cho nghiên cứu, lập kế hoạch và triển khai.' },
        { title: 'Đọc lại', description: 'Đọc code và so sánh hành vi với luồng mong muốn.' },
        { title: 'Xác minh', description: 'Chạy kiểm tra tự động và hành trình chức năng.' },
        { title: 'Lặp lại', description: 'Tái hiện lỗi, sửa giả định và kiểm thử lại.' },
      ],
      responsibilityTitle: 'Trách nhiệm vẫn thuộc về con người.',
      responsibility:
        'Vai trò của mình là đặt ràng buộc, phản biện giải pháp được tạo và tiếp tục lặp cho đến khi kiến trúc khớp với hành vi nghiệp vụ.',
    },
    experience: {
      title: 'Nơi mình đã làm việc',
      items: [
        {
          company: 'Viemind',
          role: 'Fresher Software Engineer',
          period: '09/2026 – nay',
          summary:
            'Công cụ nội bộ và tích hợp AI agent cho mảng thương mại điện tử của công ty, viết bằng TypeScript, Hono, React trên Cloudflare Workers.',
          points: [
            'Tự xây công cụ quản lý catalog sản phẩm từ PRD đến bản 1.14: web app, CLI và MCP server 28 tool, giữ 379 sản phẩm đồng bộ với CMS production.',
            'Mọi lần ghi lên CMS đều được đọc lại để xác minh, có snapshot để khôi phục. Kiểm toàn kho 313 sản phẩm đạt p50 0,5–0,6 s so với mục tiêu 15 s.',
            'Đang xây hệ thống AI phân loại và soạn trả lời bình luận Facebook, TikTok, có cổng an toàn 9 luật, che PII và người duyệt từng câu trả lời. Hệ thống đang pilot, có 1.341 test backend và 637 test frontend.',
            'Tham gia website thương mại điện tử đang chạy của công ty (Astro 5 trên Cloudflare Workers): giao diện mobile, song ngữ Việt và Anh, bộ chọn biến thể sản phẩm và structured data cho SEO.',
          ],
        },
        {
          company: 'FPT IS',
          role: 'Development Intern',
          period: '04/2026 – 07/2026',
          summary:
            'Hoàn thành kỳ thực tập tập trung vào backend và độc lập phát triển capstone e-procurement có AI hỗ trợ, bám theo nhóm công nghệ liên quan đến định hướng của phòng ban ngân hàng.',
          points: [
            'Ứng dụng Java, Spring Boot, Angular, PostgreSQL và hạ tầng container vào hệ thống procurement gồm nhiều service.',
            'Xác định ràng buộc kiến trúc và coding, đọc lại phần triển khai do AI tạo và lặp qua kiểm thử tự động lẫn kiểm thử chức năng.',
            'Xác minh luồng yêu cầu mua sắm, phê duyệt, procurement và đối soát hóa đơn.',
            'Tài liệu hóa quyết định kiến trúc, quy ước API và quy trình dự án.',
          ],
          link: { label: 'Đọc case study eProcure', to: '/work/eprocure' },
        },
      ],
    },
    capabilities: {
      title: 'Công cụ mình dùng, nhóm theo cách dùng',
      intro: 'Không có phần trăm hay số sao. Mỗi nhóm chỉ ghi những gì mình đã dùng trong các việc ở trên.',
      groups: [
        {
          title: 'Backend & systems',
          description: 'Thiết kế API, nghiệp vụ, bảo mật và dữ liệu.',
          skills: ['Java', 'Spring Boot', 'TypeScript (Node.js)', 'ASP.NET Core', 'REST API', 'Spring Security', 'MyBatis / JPA', 'PostgreSQL', 'MySQL', 'SQLite'],
        },
        {
          title: 'Frontend & product',
          description: 'Biến năng lực backend thành workflow sử dụng được.',
          skills: ['React', 'Angular', 'Astro', 'TypeScript', 'TanStack Query', 'HTML', 'CSS / SCSS', 'Responsive UI'],
        },
        {
          title: 'Edge, AI & tự động hóa',
          description: 'Chạy dịch vụ ở edge và đặt mô hình ngôn ngữ sau các lớp kiểm tra an toàn.',
          skills: ['Cloudflare Workers', 'D1 / R2 / Cron', 'Hono', 'MCP server', 'Tích hợp LLM (Gemini, API tương thích OpenAI)', 'Chrome DevTools Protocol', 'Vitest', 'Playwright'],
        },
        {
          title: 'Architecture & delivery',
          description: 'Giữ hệ thống lớn dễ hiểu và dễ vận hành.',
          skills: ['Clean Architecture', 'Microservices', 'Docker', 'Kafka', 'Redis', 'Keycloak', 'Flyway', 'Git', 'Jira'],
        },
        {
          title: 'Working knowledge',
          description: 'Công nghệ đã áp dụng ở vai trò hỗ trợ trong dự án.',
          skills: ['Camunda BPMN', 'OpenTelemetry', 'Prometheus / Grafana', 'JasperReports', 'MongoDB', 'Node.js / Express', 'SQL Server'],
        },
      ],
    },
    notes: {
      title: 'Học bằng cách giải thích.',
      intro:
        'Các ghi chú học tập cá nhân được chọn lọc từ quá trình học lập trình mạng và web, rồi tiếp tục cập nhật bằng bài học rút ra từ dự án.',
      viewAll: 'Xem tất cả ghi chú',
      readNote: 'Đọc bài',
      items: [
        {
          slug: 'git-basics',
          title: 'Git căn bản cho quy trình phát triển chuyên nghiệp',
          summary: 'Tổng hợp các câu lệnh Git thông dụng: staging, phân nhánh, đồng bộ remote và kỹ thuật hoàn tác an toàn.',
          category: 'Quản lý phiên bản',
          image: '/assets/notes/git-basics.jpg',
          readTime: '10 phút',
          sourceUrl: 'https://klbminhlong.github.io/posts/git-13-git-co-ban/',
        },
        {
          slug: 'tcp-vs-udp',
          title: 'TCP và UDP qua mô phỏng tương tác',
          summary: 'Trực quan hóa kết nối, độ tin cậy và sự đánh đổi khi truyền dữ liệu.',
          category: 'Lập trình mạng',
          image: '/assets/notes/tcp-vs-udp.jpg',
          readTime: '6 phút',
        },
        {
          slug: 'http-rest-java',
          title: 'HTTP và REST với Java',
          summary: 'Từ cấu trúc request đến một luồng API nhỏ sử dụng Java.',
          category: 'Web căn bản',
          image: '/assets/notes/http-rest-api.jpg',
          readTime: '8 phút',
        },
        {
          slug: 'docker-fundamentals',
          title: 'Docker căn bản',
          summary: 'Vì sao container giúp môi trường phát triển nhất quán hơn.',
          category: 'Delivery',
          image: '/assets/notes/docker-basics.jpg',
          readTime: '5 phút',
        },
      ],
    },
    education: {
      title: 'Học vấn',
      school: 'Đại học Công nghệ TP.HCM (HUTECH)',
      degree: 'Kỹ thuật Phần mềm',
      period: '10/2022 – 10/2026, đã tốt nghiệp',
      facts: [
        { label: 'GPA tốt nghiệp', value: '3.54 / 4.00' },
        { label: 'Thành tích', value: 'Sinh viên Xuất sắc các năm 2023–2026' },
        { label: 'Tiếng Anh', value: 'CEFR B1, Trung tâm Tin học - Ngoại ngữ - Kỹ năng' },
      ],
    },
    about: {
      title: 'Tò mò với hệ thống. Cạnh tranh trên sân cầu.',
      paragraphs: [
        'Mình thích làm việc với cả backend system và phát triển sản phẩm full-stack, từ thiết kế API, workflow nghiệp vụ đến giao diện người dùng trực tiếp tương tác.',
        'Ngoài phần mềm, phim giúp mình chậm lại, cầu lông giúp mình vận động và game cho mình một kiểu hệ thống khác để khám phá.',
      ],
      cards: [
        { label: 'Vai trò hiện tại', value: 'Software Engineer tại Viemind' },
        { label: 'Mục tiêu tiếp theo', value: 'Trở thành Backend Engineer vững về thiết kế hệ thống và kiểm thử tự động' },
        { label: 'Ngoài màn hình', value: 'Cầu lông, phim và game' },
        { label: 'Đang ở', value: 'TP. Hồ Chí Minh' },
      ],
    },
    contact: {
      title: 'Bạn có vị trí, dự án hay bài toán kỹ thuật cần trao đổi?',
      intro:
        'Email là cách nhanh nhất để liên hệ với mình. Mình sẵn lòng trao đổi về backend, full-stack và tích hợp AI agent.',
      emailCta: 'Viết email',
      workLabel: 'Hồ sơ công việc',
      contentLabel: 'Kênh mình đăng nội dung',
    },
    footer: {
      statement: 'Xây bằng React và TypeScript, dùng font Be Vietnam Pro.',
      domainNote: 'KLB.dev là thương hiệu cá nhân của Nguyễn Minh Long.',
      easterEgg: {
        ariaLabel: 'Bật/tắt Easter Egg con trỏ pixel Electric Blue',
        tooltipInactive: 'Easter Egg: Chuyển sang con trỏ pixel Electric Blue',
        tooltipActive: 'Đang bật con trỏ pixel · Bấm để quay về mặc định',
        toastActive: '⚡ Đã kích hoạt con trỏ Electric Blue Pixel!',
        toastInactive: 'Đã khôi phục con trỏ mặc định',
        badgeText: 'Chế độ Pixel',
      },
    },
    resume: {
      badge: 'Software Engineer, backend và full-stack',
      headline: 'CV',
      intro: 'CV một trang bằng tiếng Việt: công việc tại Viemind, kỳ thực tập FPT IS, dự án tiêu biểu và học vấn.',
      targetRole: 'Software Engineer (Backend / Full-stack)',
      fileLabel: 'Nguyen-Minh-Long-Resume.pdf',
      fileSize: '1 trang, tiếng Việt',
      updatedDate: 'Tháng 10/2026',
      tabs: {
        pdf: 'Xem file PDF',
        interactive: 'Bản chi tiết tương tác',
      },
      actions: {
        openPdf: 'Mở PDF trong tab mới',
        downloadPdf: 'Tải file PDF',
        copyEmail: 'Sao chép email',
        copiedEmail: 'Đã sao chép email',
        contactMe: 'Liên hệ trực tiếp',
      },
      quickFacts: [
        { label: 'Vị trí', value: 'Software Engineer (Backend / Full-stack)' },
        { label: 'Hiện tại', value: 'Fresher Software Engineer tại Viemind' },
        { label: 'Trước đó', value: 'Thực tập sinh phát triển phần mềm tại FPT IS' },
        { label: 'Học vấn', value: 'HUTECH, tốt nghiệp với GPA 3.54 / 4.00' },
        { label: 'Tiếng Anh', value: 'CEFR B1' },
        { label: 'Khu vực', value: 'TP. Hồ Chí Minh, Việt Nam' },
      ],
      summaryTitle: 'Mục tiêu nghề nghiệp',
      summaryText: 'Hiện xây công cụ nội bộ và tích hợp AI agent bằng TypeScript trên Cloudflare Workers tại Viemind, có nền tảng Java Spring Boot từ kỳ thực tập tại FPT IS. Mình dùng AI trong suốt quá trình phát triển và tự chịu trách nhiệm review code, test tự động và kiểm thử chức năng. Mục tiêu 1–2 năm tới: trở thành Backend Engineer vững về thiết kế hệ thống và kiểm thử tự động.',
      experienceTitle: 'Kinh nghiệm làm việc',
      experienceItems: [
        {
          company: 'Viemind',
          role: 'Fresher Software Engineer',
          period: '09/2026 – nay',
          location: 'TP. Hồ Chí Minh, Việt Nam',
          points: [
            'Tự xây công cụ quản lý catalog sản phẩm từ PRD đến bản 1.14 (web app, CLI và MCP server 28 tool), giữ 379 sản phẩm đồng bộ với CMS production; mọi lần ghi đều được đọc lại để xác minh, có snapshot để khôi phục.',
            'Đang xây hệ thống AI phân loại và soạn trả lời bình luận Facebook, TikTok, có cổng an toàn 9 luật, che PII và người duyệt từng câu (đang pilot; 1.341 test backend, 637 test frontend).',
            'Tham gia website thương mại điện tử đang chạy của công ty trên Astro 5 và Cloudflare Workers: giao diện mobile, song ngữ Việt và Anh, bộ chọn biến thể sản phẩm, structured data.',
          ],
        },
        {
          company: 'FPT IS',
          role: 'Thực tập sinh phát triển phần mềm',
          period: '04/2026 – 07/2026',
          location: 'TP. Hồ Chí Minh, Việt Nam',
          points: [
            'Độc lập xây eProcure Enterprise, capstone mua sắm gồm 9 service bao trọn quy trình từ đề nghị mua hàng đến thanh toán.',
            'Trao đổi với mentor kỹ thuật về kiến trúc hệ thống, coding convention và nghiệp vụ mua sắm.',
            'Dùng công cụ AI cho nghiên cứu, triển khai và viết tài liệu, đồng thời tự chịu trách nhiệm review code, kiểm tra tự động và kiểm thử chức năng.',
          ],
          caseStudySlug: 'eprocure',
          caseStudyLabel: 'Đọc case study eProcure',
        },
      ],
      projectsTitle: 'Dự án tiêu biểu',
      projectItems: [
        {
          title: 'eProcure Enterprise',
          role: 'Capstone thực tập, làm một mình theo quy trình AI-assisted',
          period: '2026',
          tech: ['Java 17', 'Spring Boot', 'Angular', 'PostgreSQL', 'Kafka', 'Redis', 'Keycloak', 'Docker'],
          points: [
            '9 service bao trọn đề nghị mua hàng, duyệt nhiều cấp, đơn đặt hàng, nhận hàng, đối chiếu hóa đơn và thanh toán.',
            'Clean Architecture, giao tiếp event-driven, phân quyền theo permission, ghi idempotent; 56 Flyway migration, 13 ADR, 9 đặc tả OpenAPI và 104 file test backend.',
          ],
          slug: 'eprocure',
          githubUrl: 'https://github.com/KLBMinhLong/E-Procurement',
        },
        {
          title: 'Student Dormitory Management',
          role: 'Trưởng nhóm, nhóm 6 người',
          period: '02/2026 – 04/2026',
          tech: ['Java 21', 'Spring Boot', 'PostgreSQL', 'JWT', 'PayOS', 'Jira'],
          points: [
            'Chia việc và theo dõi tiến độ qua Jira, tích hợp tính năng; trực tiếp viết luồng chọn phòng/giường, đăng ký, thanh toán PayOS (payment link và webhook) và tiện ích hàng tháng (81/89 commit của repo).',
          ],
          slug: 'student-dormitory',
          githubUrl: 'https://github.com/KLBMinhLong/StudentDormitoryManagement',
        },
        {
          title: 'PhotoCraft (mã nguồn mở)',
          role: 'Người đóng góp',
          period: '10/2026',
          tech: ['Rust'],
          points: [
            'Pull request #7478 đã được merge: khi tắt Enable Gestures thì cử chỉ pinch và twist trên màn hình cảm ứng cũng bị bỏ qua, kèm 3 unit test.',
          ],
          githubUrl: 'https://github.com/storytold/photocraft/pull/7478',
        },
      ],
      skillsTitle: 'Kỹ năng kỹ thuật',
      skillGroups: [
        {
          category: 'Backend',
          skills: ['Java', 'Spring Boot', 'TypeScript (Node.js, Hono)', 'ASP.NET Core', 'REST API', 'Kafka', 'Redis', 'Keycloak'],
        },
        {
          category: 'Frontend',
          skills: ['React', 'Angular', 'Astro', 'TanStack Query', 'HTML / CSS'],
        },
        {
          category: 'Dữ liệu',
          skills: ['PostgreSQL', 'MySQL', 'SQLite', 'Cloudflare D1'],
        },
        {
          category: 'Edge, AI & kiểm thử',
          skills: ['Cloudflare Workers', 'MCP server', 'Tích hợp LLM', 'Chrome DevTools Protocol', 'Vitest', 'Playwright', 'Docker', 'Git'],
        },
      ],
      educationTitle: 'Học vấn & khen thưởng',
      educationItems: [
        {
          school: 'Trường Đại học Công nghệ TP.HCM (HUTECH)',
          degree: 'Kỹ sư Kỹ thuật Phần mềm',
          period: '10/2022 – 10/2026, đã tốt nghiệp',
          points: [
            'GPA tốt nghiệp: 3.54 / 4.00',
            'Sinh viên Xuất sắc các năm học 2023–2026',
          ],
        },
      ],
      certificationsTitle: 'Chứng chỉ & Ngoại ngữ',
      certificationItems: [
        {
          title: 'Chứng chỉ Tiếng Anh CEFR B1',
          issuer: 'Trung tâm Tin học - Ngoại ngữ - Kĩ năng',
          detail: 'Trình độ Tiếng Anh B1 chuẩn CEFR',
        },
      ],
    },
    common: {
      backHome: 'Về portfolio',
      projectNotFound: 'Không tìm thấy câu chuyện dự án này.',
      viewSource: 'Xem mã nguồn',
      watchDemo: 'Xem demo',
      projectContribution: 'Đóng góp của mình',
      projectEvidence: 'Bằng chứng sản phẩm',
      nextProject: 'Dự án tiếp theo',
      resumeTitle: 'CV',
      resumeIntro: 'CV một trang về kinh nghiệm làm việc, dự án tiêu biểu, kỹ năng kỹ thuật và học vấn.',
      openResume: 'Mở PDF trong tab mới',
      downloadResume: 'Tải PDF',
      temporaryResume: 'Software Engineer (Backend / Full-stack), PDF một trang',
      notesTitle: 'Engineering Notes',
      notesIntro: 'Các bài viết nền tảng chọn lọc từ quá trình học lập trình mạng và web.',
      notesStatus: 'Ghi chú học tập cá nhân, cập nhật tháng 08/2026',
      readOriginal: 'Đọc bài viết gốc',
      visitBlog: 'Xem kho bài viết MLBlog',
      blogIntro: 'Muốn xem kho bài viết về mạng và web đầy đủ hơn? Hãy ghé MLBlog cũ của mình.',
      noteNotFound: 'Không tìm thấy ghi chú này trong thư viện hiện tại.',
      keyTakeaways: 'Điểm chính cần nhớ',
      notFoundTitle: 'Trang này không có ở đây.',
      notFoundIntro: 'Có thể trang đã được chuyển đi, hoặc chưa từng có trên site này.',
      skipToContent: 'Bỏ qua đến nội dung chính',
      primaryNavigation: 'Điều hướng chính',
      profileHighlights: 'Những điều bạn có thể kiểm chứng',
      caseStudy: 'Case study',
      transparencyNote: 'Ghi chú minh bạch',
      knowledgeBaseVersion: 'Ghi chú học tập cá nhân, cập nhật tháng 08/2026',
      currentResumeVersion: 'PDF, cập nhật tháng 10/2026',
    },
    projects: vietnameseProjects,
  },
};
