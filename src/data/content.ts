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
  };
  hero: {
    eyebrow: string;
    role: string;
    headline: string;
    intro: string;
    availability: string;
    primaryCta: string;
    secondaryCta: string;
    location: string;
    graduation: string;
    portraitAlt: string;
    systemMap: {
      eyebrow: string;
      title: string;
      nodes: string[];
      footer: string;
    };
  };
  proof: Array<{ label: string; value: string }>;
  work: {
    eyebrow: string;
    title: string;
    intro: string;
    viewCaseStudy: string;
    sourceCode: string;
    watchDemo: string;
    featured: string;
    preview: string;
  };
  workflow: {
    eyebrow: string;
    title: string;
    intro: string;
    steps: Array<{ title: string; description: string }>;
    responsibilityTitle: string;
    responsibility: string;
  };
  experience: {
    eyebrow: string;
    title: string;
    role: string;
    company: string;
    period: string;
    summary: string;
    points: string[];
    caseStudyLink: string;
  };
  capabilities: {
    eyebrow: string;
    title: string;
    intro: string;
    groups: Array<{ title: string; description: string; skills: string[] }>;
  };
  notes: {
    eyebrow: string;
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
    eyebrow: string;
    title: string;
    school: string;
    degree: string;
    period: string;
    facts: Array<{ label: string; value: string }>;
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    cards: Array<{ label: string; value: string }>;
  };
  contact: {
    eyebrow: string;
    title: string;
    intro: string;
    emailCta: string;
    socialLabel: string;
  };
  footer: {
    statement: string;
    domainNote: string;
  };
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
    label: 'Solo AI-first engineering project · FPT IS internship capstone',
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
      'Independently developed during the FPT IS internship as a learning capstone aligned with the banking unit’s technology focus. This is not a production FPT IS product.',
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
    label: 'Project Lead & Developer · 6-member team',
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
  label: 'Dự án kỹ thuật AI-first cá nhân · Capstone trong kỳ thực tập FPT IS',
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
    'Được phát triển độc lập trong kỳ thực tập FPT IS như một capstone học tập theo định hướng công nghệ của phòng ban ngân hàng. Đây không phải sản phẩm production của FPT IS.',
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
  label: 'Project Lead & Developer · Nhóm 6 thành viên',
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
    },
    hero: {
      eyebrow: 'Software Developer · Ho Chi Minh City',
      role: 'Backend systems. Full-stack products.',
      headline: 'Building reliable systems, from backend logic to complete product experiences.',
      intro:
        'I’m Nguyễn Minh Long, a final-year Software Engineering student with internship experience at FPT IS. I build with Java/Spring Boot, .NET, Angular and React through an AI-first, verification-driven workflow.',
      availability: 'Open to Software Developer Intern & Fresher opportunities.',
      primaryCta: 'Explore my work',
      secondaryCta: 'View résumé',
      location: 'Thu Duc, Ho Chi Minh City',
      graduation: 'Expected graduation · Oct 2026',
      portraitAlt: 'Portrait of Nguyễn Minh Long',
      systemMap: {
        eyebrow: 'Engineering system map',
        title: 'From intent to verified software',
        nodes: ['Backend API', 'Product UI', 'AI assist', 'Test gate'],
        footer: 'Human-reviewed · Evidence-driven',
      },
    },
    proof: [
      { label: 'Experience', value: 'FPT IS · Development Intern' },
      { label: 'Academic', value: 'GPA 3.53 / 4.00' },
      { label: 'Selected work', value: '3 complete project stories' },
      { label: 'Recognition', value: 'Outstanding Student · 2023–2026' },
      { label: 'English', value: 'Aptis ESOL · CEFR B2' },
    ],
    work: {
      eyebrow: '01 · Selected work',
      title: 'Proof over promises.',
      intro:
        'Three projects, three different kinds of responsibility: orchestrating an AI-assisted enterprise build, shipping a solo full-stack product and leading a six-person team.',
      viewCaseStudy: 'View case study',
      sourceCode: 'Source code',
      watchDemo: 'Watch demo',
      featured: 'Featured',
      preview: 'Interface preview',
    },
    workflow: {
      eyebrow: '02 · How I work',
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
      eyebrow: '03 · Experience',
      title: 'Applied learning inside a real engineering environment.',
      role: 'Development Intern',
      company: 'FPT IS',
      period: 'April 2026 — July 2026',
      summary:
        'Completed a backend-focused internship and independently developed an AI-assisted e-procurement capstone aligned with technologies relevant to the banking unit.',
      points: [
        'Applied Java, Spring Boot, Angular, PostgreSQL and containerized infrastructure to a multi-service procurement system.',
        'Defined architecture and coding constraints, reviewed AI-generated implementations and iterated through automated and functional testing.',
        'Validated purchase request, approval, procurement and invoice-matching workflows.',
        'Documented architecture decisions, API conventions and project workflows.',
      ],
      caseStudyLink: 'See the eProcure evidence',
    },
    capabilities: {
      eyebrow: '04 · Capabilities',
      title: 'A balanced backend and product toolkit.',
      intro: 'Grouped by how I use the technology, not by arbitrary proficiency percentages.',
      groups: [
        {
          title: 'Backend & systems',
          description: 'API design, business rules, security and data.',
          skills: ['Java', 'Spring Boot', 'ASP.NET Core', 'REST API', 'Spring Security', 'MyBatis / JPA', 'PostgreSQL', 'MySQL'],
        },
        {
          title: 'Frontend & product',
          description: 'Turning backend capability into usable workflows.',
          skills: ['Angular', 'React', 'TypeScript', 'HTML', 'CSS / SCSS', 'Responsive UI', 'API integration'],
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
      eyebrow: '05 · Engineering notes',
      title: 'Learning by explaining.',
      intro:
        'A curated set of foundational notes from my earlier networking and web studies. The library will grow with project lessons.',
      viewAll: 'Explore all notes',
      readNote: 'Read note',
      items: [
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
        {
          slug: 'git-basics',
          title: 'Git basics for a dependable developer workflow',
          summary: 'A practical path from status and staging to branches, merges, undo decisions and safer commits.',
          category: 'Version control',
          image: '/assets/notes/git-basics.jpg',
          readTime: '9 min',
          sourceUrl: 'https://klbminhlong.github.io/posts/git-13-git-co-ban/',
        },
      ],
    },
    education: {
      eyebrow: '06 · Education & recognition',
      title: 'A strong academic foundation, still in progress.',
      school: 'Ho Chi Minh City University of Technology (HUTECH)',
      degree: 'Software Engineering',
      period: 'October 2022 — Expected October 2026',
      facts: [
        { label: 'Current GPA', value: '3.53 / 4.00' },
        { label: 'Recognition', value: 'Outstanding Student, awarded annually 2023–2026' },
        { label: 'English', value: 'Aptis ESOL B2 · British Council' },
      ],
    },
    about: {
      eyebrow: '07 · Outside the code',
      title: 'Curious in systems. Competitive on the court.',
      paragraphs: [
        'I enjoy working across backend systems and full-stack product development, from designing APIs and business workflows to building the interface users interact with.',
        'Outside software, films help me slow down, badminton keeps me moving and games give me another kind of system to understand.',
      ],
      cards: [
        { label: 'Current role', value: 'Software Developer' },
        { label: 'Current quest', value: 'First Intern / Fresher opportunity' },
        { label: 'Off-screen', value: 'Badminton · Films · Games' },
        { label: 'Based in', value: 'Ho Chi Minh City' },
      ],
    },
    contact: {
      eyebrow: '08 · Contact',
      title: 'Have a role, project or engineering problem in mind?',
      intro:
        'I’m open to Intern and Fresher Software Developer opportunities where I can contribute, learn quickly and grow across backend and full-stack work.',
      emailCta: 'Start a conversation',
      socialLabel: 'Find me elsewhere',
    },
    footer: {
      statement: 'Designed as an engineering story, built with React and TypeScript.',
      domainNote: 'KLB.dev is the personal brand of Nguyễn Minh Long.',
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
      resumeIntro: 'A concise snapshot of my education, internship and selected project work.',
      openResume: 'Open résumé',
      downloadResume: 'Download PDF',
      temporaryResume: 'This is the current résumé and will be replaced with a revised one-page version.',
      notesTitle: 'Engineering Notes',
      notesIntro: 'Selected foundational writing from my networking and web studies.',
      notesStatus: 'The complete notes library is being curated for the next release.',
      readOriginal: 'Read the original article',
      visitBlog: 'Visit MLBlog archive',
      blogIntro: 'Want the wider networking and web-study archive? Visit my original MLBlog.',
      noteNotFound: 'This note is not in the current library.',
      keyTakeaways: 'Key takeaways',
      notFoundTitle: 'This route left the system map.',
      notFoundIntro: 'The page may have moved, or it was never part of this build.',
      skipToContent: 'Skip to content',
      primaryNavigation: 'Primary navigation',
      profileHighlights: 'Profile highlights',
      caseStudy: 'Case study',
      transparencyNote: 'Transparency note',
      knowledgeBaseVersion: 'Knowledge base · v0.1',
      currentResumeVersion: 'PDF · Current version',
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
    },
    hero: {
      eyebrow: 'Software Developer · TP. Hồ Chí Minh',
      role: 'Backend system. Sản phẩm full-stack.',
      headline: 'Xây dựng hệ thống đáng tin cậy, từ logic backend đến trải nghiệm sản phẩm hoàn chỉnh.',
      intro:
        'Mình là Nguyễn Minh Long, sinh viên năm cuối ngành Kỹ thuật Phần mềm, vừa hoàn thành kỳ thực tập tại FPT IS. Mình phát triển với Java/Spring Boot, .NET, Angular và React theo quy trình AI-first, verification-driven.',
      availability: 'Sẵn sàng cho cơ hội Software Developer Intern và Fresher.',
      primaryCta: 'Khám phá dự án',
      secondaryCta: 'Xem CV',
      location: 'Thủ Đức, TP. Hồ Chí Minh',
      graduation: 'Dự kiến tốt nghiệp · 10/2026',
      portraitAlt: 'Chân dung Nguyễn Minh Long',
      systemMap: {
        eyebrow: 'Bản đồ kỹ thuật',
        title: 'Từ yêu cầu đến phần mềm đã kiểm chứng',
        nodes: ['Backend API', 'Product UI', 'AI hỗ trợ', 'Cổng kiểm thử'],
        footer: 'Con người kiểm duyệt · Dựa trên bằng chứng',
      },
    },
    proof: [
      { label: 'Kinh nghiệm', value: 'FPT IS · Development Intern' },
      { label: 'Học tập', value: 'GPA 3.53 / 4.00' },
      { label: 'Dự án chọn lọc', value: '3 câu chuyện sản phẩm' },
      { label: 'Thành tích', value: 'Sinh viên xuất sắc · 2023–2026' },
      { label: 'Tiếng Anh', value: 'Aptis ESOL · CEFR B2' },
    ],
    work: {
      eyebrow: '01 · Dự án chọn lọc',
      title: 'Bằng chứng thay cho lời hứa.',
      intro:
        'Ba dự án, ba loại trách nhiệm: điều phối một enterprise build có AI hỗ trợ, tự hoàn thiện sản phẩm full-stack và dẫn dắt nhóm sáu người.',
      viewCaseStudy: 'Xem case study',
      sourceCode: 'Mã nguồn',
      watchDemo: 'Xem demo',
      featured: 'N\u1ed5i b\u1eadt',
      preview: 'Xem tr\u01b0\u1edbc giao di\u1ec7n',
    },
    workflow: {
      eyebrow: '02 · Cách mình làm việc',
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
      eyebrow: '03 · Kinh nghiệm',
      title: 'Học và áp dụng trong môi trường kỹ thuật thực tế.',
      role: 'Development Intern',
      company: 'FPT IS',
      period: 'Tháng 04/2026 — Tháng 07/2026',
      summary:
        'Hoàn thành kỳ thực tập tập trung vào backend và độc lập phát triển capstone e-procurement có AI hỗ trợ, bám theo nhóm công nghệ liên quan đến định hướng của phòng ban ngân hàng.',
      points: [
        'Ứng dụng Java, Spring Boot, Angular, PostgreSQL và hạ tầng container vào hệ thống procurement gồm nhiều service.',
        'Xác định ràng buộc kiến trúc/coding, đọc lại phần triển khai do AI tạo và lặp qua kiểm thử tự động lẫn chức năng.',
        'Xác minh luồng yêu cầu mua sắm, phê duyệt, procurement và đối soát hóa đơn.',
        'Tài liệu hóa quyết định kiến trúc, quy ước API và quy trình dự án.',
      ],
      caseStudyLink: 'Xem bằng chứng eProcure',
    },
    capabilities: {
      eyebrow: '04 · Năng lực',
      title: 'Bộ công cụ cân bằng giữa backend và sản phẩm.',
      intro: 'Được nhóm theo cách mình áp dụng, không theo phần trăm năng lực tự đánh giá.',
      groups: [
        {
          title: 'Backend & systems',
          description: 'Thiết kế API, nghiệp vụ, bảo mật và dữ liệu.',
          skills: ['Java', 'Spring Boot', 'ASP.NET Core', 'REST API', 'Spring Security', 'MyBatis / JPA', 'PostgreSQL', 'MySQL'],
        },
        {
          title: 'Frontend & product',
          description: 'Biến năng lực backend thành workflow sử dụng được.',
          skills: ['Angular', 'React', 'TypeScript', 'HTML', 'CSS / SCSS', 'Responsive UI', 'API integration'],
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
      eyebrow: '05 · Engineering notes',
      title: 'Học bằng cách giải thích.',
      intro:
        'Một số ghi chú nền tảng từ quá trình học lập trình mạng và web. Thư viện sẽ tiếp tục bổ sung bằng bài học từ dự án.',
      viewAll: 'Xem tất cả ghi chú',
      readNote: 'Đọc bài',
      items: [
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
        {
          slug: 'git-basics',
          title: 'Git căn bản cho quy trình làm việc đáng tin cậy',
          summary: 'Lộ trình thực tế từ status và staging đến branch, merge, quyết định undo và commit an toàn hơn.',
          category: 'Quản lý phiên bản',
          image: '/assets/notes/git-basics.jpg',
          readTime: '9 phút',
          sourceUrl: 'https://klbminhlong.github.io/posts/git-13-git-co-ban/',
        },
      ],
    },
    education: {
      eyebrow: '06 · Học vấn & thành tích',
      title: 'Nền tảng học tập tốt và vẫn đang tiếp tục.',
      school: 'Đại học Công nghệ TP.HCM (HUTECH)',
      degree: 'Kỹ thuật Phần mềm',
      period: '10/2022 — Dự kiến 10/2026',
      facts: [
        { label: 'GPA hiện tại', value: '3.53 / 4.00' },
        { label: 'Thành tích', value: 'Sinh viên xuất sắc, nhận hàng năm 2023–2026' },
        { label: 'Tiếng Anh', value: 'Aptis ESOL B2 · British Council' },
      ],
    },
    about: {
      eyebrow: '07 · Ngoài code',
      title: 'Tò mò với hệ thống. Cạnh tranh trên sân cầu.',
      paragraphs: [
        'Mình thích làm việc với cả backend system và phát triển sản phẩm full-stack, từ thiết kế API, workflow nghiệp vụ đến giao diện người dùng trực tiếp tương tác.',
        'Ngoài phần mềm, phim giúp mình chậm lại, cầu lông giúp mình vận động và game cho mình một kiểu hệ thống khác để khám phá.',
      ],
      cards: [
        { label: 'Vai trò hiện tại', value: 'Software Developer' },
        { label: 'Nhiệm vụ hiện tại', value: 'Cơ hội Intern / Fresher đầu tiên' },
        { label: 'Ngoài màn hình', value: 'Cầu lông · Phim · Game' },
        { label: 'Đang ở', value: 'TP. Hồ Chí Minh' },
      ],
    },
    contact: {
      eyebrow: '08 · Liên hệ',
      title: 'Bạn có vị trí, dự án hay bài toán kỹ thuật phù hợp?',
      intro:
        'Mình đang tìm cơ hội Software Developer Intern và Fresher để đóng góp, học nhanh và phát triển ở cả backend lẫn full-stack.',
      emailCta: 'Bắt đầu trò chuyện',
      socialLabel: 'Kết nối ở nền tảng khác',
    },
    footer: {
      statement: 'Thiết kế như một câu chuyện kỹ thuật, xây dựng bằng React và TypeScript.',
      domainNote: 'KLB.dev là thương hiệu cá nhân của Nguyễn Minh Long.',
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
      resumeIntro: 'Bản tóm tắt ngắn về học vấn, kỳ thực tập và các dự án chọn lọc.',
      openResume: 'Mở CV',
      downloadResume: 'Tải PDF',
      temporaryResume: 'Đây là CV hiện tại và sẽ được thay bằng phiên bản một trang được viết lại.',
      notesTitle: 'Engineering Notes',
      notesIntro: 'Các bài viết nền tảng chọn lọc từ quá trình học lập trình mạng và web.',
      notesStatus: 'Thư viện ghi chú đầy đủ đang được chọn lọc cho phiên bản tiếp theo.',
      readOriginal: 'Đọc bài viết gốc',
      visitBlog: 'Xem kho bài viết MLBlog',
      blogIntro: 'Muốn xem kho bài viết về mạng và web đầy đủ hơn? Hãy ghé MLBlog cũ của mình.',
      noteNotFound: 'Không tìm thấy ghi chú này trong thư viện hiện tại.',
      keyTakeaways: 'Điểm chính cần nhớ',
      notFoundTitle: 'Route này đã ra ngoài system map.',
      notFoundIntro: 'Trang có thể đã được di chuyển hoặc chưa từng thuộc bản build này.',
      skipToContent: 'Bỏ qua đến nội dung chính',
      primaryNavigation: 'Điều hướng chính',
      profileHighlights: 'Thông tin nổi bật',
      caseStudy: 'Case study',
      transparencyNote: 'Ghi chú minh bạch',
      knowledgeBaseVersion: 'Kho kiến thức · v0.1',
      currentResumeVersion: 'PDF · Phiên bản hiện tại',
    },
    projects: vietnameseProjects,
  },
};
