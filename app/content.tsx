export type Publication = {
  year: string;
  title: string;
  authors: string[];
  href: string;
};

export type Course = {
  year: string;
  title: string;
  description: string;
  href: string;
};

export type Education = {
  startYear: string;
  endYear: string;
  degree: string;
  school: string;
  description: string;
};

export const metadata = {
  title: "Bira Zhahadai",
  subtitle: "Assistant Professor of Economics | Macroeconomics & International Economics",
  description:
    "Bira Zhahadai is an Assistant Professor of Economics at Illinois Wesleyan University, studying business cycles, financial frictions, and macroeconomic policy in emerging market economies using applied time series and dynamic equilibrium models.",
  publications: [
    {
      year: "2026",
      title: "Chicago Boys",
      authors: ["Bira Zhahadai", "Bryan McCannon"],
      href: "#",
    },
    {
      year: "2026",
      title: "Private Equity and Macroeconomy",
      authors: ["Bira Zhahadai", "Xi Zhou", "Ernesto F. Reyes"],
      href: "#",
    },
    {
      year: "2023",
      title: "Are Business Cycles in Emerging Market Economies Alike?",
      authors: ["Bira Zhahadai"],
      href: "#",
    },
    {
      year: "2023",
      title: "Natural Disaster Clause for Sovereign Debt in Emerging Market Economies",
      authors: ["Bira Zhahadai", "Olivier Mahul"],
      href: "#",
    },
    {
      year: "2022",
      title: "Productivity Shocks, Financial Frictions, and Business Cycles in Emerging Market Economies",
      authors: ["Bira Zhahadai"],
      href: "#",
    },
  ] satisfies Publication[],
  courses: [
    {
      year: "2026",
      title: "Intermediate Macroeconomics",
      href: "#",
      description:
        "Develops the IS-LM, AD-AS, and Solow growth frameworks used to analyze output, inflation, unemployment, and monetary and fiscal policy.",
    },
    {
      year: "2026",
      title: "International Finance",
      href: "#",
      description:
        "Studies exchange rate determination, balance of payments, and international capital markets, with emphasis on macroeconomic policy in open economies.",
    },
    {
      year: "2026",
      title: "Introduction to Economics",
      href: "#",
      description:
        "A survey introduction to microeconomic and macroeconomic principles, covering markets, prices, and the forces shaping national economies.",
    },
    {
      year: "2025",
      title: "Money and Banking",
      href: "#",
      description:
        "Covers the role of money, financial intermediaries, and central banks in the macroeconomy, including how monetary policy is transmitted through the banking system.",
    },
    {
      year: "2024",
      title: "Statistics for Business and Economics",
      href: "#",
      description: "Introduces probability, sampling, and statistical inference with applications to business and economic decision-making.",
    },
    {
      year: "2023",
      title: "International Trade",
      href: "#",
      description:
        "Examines the theory and evidence behind why nations trade, and analyzes the welfare effects of tariffs, trade agreements, and globalization.",
    },
  ] satisfies Course[],
  educations: [
    {
      startYear: "2015",
      endYear: "2022",
      degree: "Ph.D. in Economics (Field in Macroeconomics)",
      school: "North Carolina State University",
      description: 'Dissertation: "Essays on Business Cycles in Emerging Market Economies."',
    },
    {
      startYear: "2015",
      endYear: "2017",
      degree: "M.A. in Economics",
      school: "North Carolina State University",
      description: "Coursework and research in macroeconomics and applied time series methods.",
    },
    {
      startYear: "2009",
      endYear: "2013",
      degree: "B.S. in Economics",
      school: "Northeastern University",
      description: "Undergraduate studies in economics, Boston, Massachusetts.",
    },
  ] satisfies Education[],
};
