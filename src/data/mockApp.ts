export const overviewData = {
  cards: [
    { id: 'o1', title: 'Income Forecast', value: '$12,450', sub: '+18% vs last month', color: '#DFFF00', progress: [20, 15, 30, 25, 50, 20, 70, 15, 80, 5, 100, 0] },
    { id: 'o2', title: 'Active Projects', value: '4', sub: '2 due this week', color: '#DFFF00', progress: [30, 20, 40, 25, 60, 15, 80, 5, 90, 10, 100, 5] },
    { id: 'o3', title: 'Monthly Goal', value: '$15,000', sub: '83% reached', color: '#111827', percent: 83 }
  ],
  activities: [
    { id: 'a1', title: 'Invoice #089 Paid by Acme Corp', time: 'Today at 2:45 PM', status: 'PAID' },
    { id: 'a2', title: 'New Lead: TechFlow Redesign', time: 'Yesterday', status: 'PENDING' },
    { id: 'a3', title: 'Milestone 2 Approved', time: 'Mon, 10:00 AM', status: 'COMPLETED' },
    { id: 'a4', title: 'Contract Sent: Globalize', time: 'Sun, 4:30 PM', status: 'SENT' },
  ]
};

export const pipelineData = {
  columns: [
    {
      id: 'c1',
      title: 'PITCHING',
      value: '$24,000',
      cards: [
        { id: 'p1', client: 'Nexus Industries', project: 'Brand Identity', amount: '$12,000', probability: 40 },
        { id: 'p2', client: 'Velocity App', project: 'UX Audit', amount: '$12,000', probability: 60 }
      ]
    },
    {
      id: 'c2',
      title: 'NEGOTIATING',
      value: '$18,500',
      cards: [
        { id: 'p3', client: 'Studio G', project: 'Web Dev Retainer', amount: '$8,500', probability: 80 },
        { id: 'p4', client: 'Alpha Corp', project: 'Design System', amount: '$10,000', probability: 90 }
      ]
    },
    {
      id: 'c3',
      title: 'SIGNED / ACTIVE',
      value: '$32,000',
      cards: [
        { id: 'p5', client: 'Acme Corp', project: 'E-commerce Platform', amount: '$25,000', probability: 100 },
        { id: 'p6', client: 'Beta LLC', project: 'Marketing Site', amount: '$7,000', probability: 100 }
      ]
    }
  ]
};

export const financeData = {
  invoices: [
    { id: 'INV-089', client: 'Acme Corp', amount: '$12,500', date: 'May 12, 2026', status: 'PAID' },
    { id: 'INV-090', client: 'Beta LLC', amount: '$3,500', date: 'May 15, 2026', status: 'DUE IN 3 DAYS' },
    { id: 'INV-091', client: 'Studio G', amount: '$4,250', date: 'May 20, 2026', status: 'SENT' },
    { id: 'INV-092', client: 'Velocity App', amount: '$1,200', date: 'May 25, 2026', status: 'DRAFT' }
  ],
  metrics: [
    { label: 'YTD Earnings', value: '$84,500', trend: '+12%' },
    { label: 'Awaiting Payout', value: '$7,750', trend: '-5%' },
    { label: 'Tax Reserved (30%)', value: '$25,350', trend: 'SAFE' }
  ]
};

export const projectsData = {
  active: [
    { id: 'pr1', name: 'E-commerce Platform', client: 'Acme Corp', deadline: 'Jun 15', progress: 65, status: 'ON TRACK' },
    { id: 'pr2', name: 'Marketing Site', client: 'Beta LLC', deadline: 'May 20', progress: 90, status: 'AT RISK' },
    { id: 'pr3', name: 'Design System', client: 'Alpha Corp', deadline: 'Jul 01', progress: 15, status: 'JUST STARTED' },
  ]
};

export const clientsData = [
  { id: 'cl1', name: 'Acme Corp', contact: 'sarah@acme.co', ltv: '$45,000', status: 'ACTIVE' },
  { id: 'cl2', name: 'Beta LLC', contact: 'tom@beta.io', ltv: '$12,500', status: 'ACTIVE' },
  { id: 'cl3', name: 'Studio G', contact: 'greg@studiog.com', ltv: '$8,500', status: 'ONBOARDING' },
  { id: 'cl4', name: 'Nexus Industries', contact: 'jane@nexus.net', ltv: '$0', status: 'PROSPECT' },
];

export const plannerData = {
  today: [
    { id: 't1', time: '09:00 AM', title: 'Deep Work: Acme Dev', type: 'WORK' },
    { id: 't2', time: '01:00 PM', title: 'Sync with Studio G', type: 'MEETING' },
    { id: 't3', time: '03:30 PM', title: 'Draft Proposals', type: 'ADMIN' },
  ]
};

export const reportsData = {
  monthlyIncome: [12000, 15000, 11000, 18000, 14000, 22000],
  months: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN'],
  breakdown: [
    { category: 'Development', percentage: 60 },
    { category: 'Design', percentage: 25 },
    { category: 'Consulting', percentage: 15 }
  ]
};

export const settingsData = {
  profile: {
    name: 'Alex Developer',
    role: 'Full Stack Engineer',
    rate: '$150/hr',
    email: 'alex@brutal.dev'
  },
  preferences: {
    theme: 'Dark Graphite',
    currency: 'USD',
    taxRate: '30%',
    notifications: 'Enabled'
  }
};
