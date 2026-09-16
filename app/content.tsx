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
  title: "Bira Jakhadai",
  subtitle: "Professor of Economics | Labor Economics & Public Policy",
  description:
    "Bira Jakhadai is a Professor of Economics at the University of Washington, studying labor markets, automation, and public policy using applied econometrics.",
  publications: [
    {
      year: "2026",
      title: "The Local Labor Market Effects of Minimum Wage Increases: Evidence from U.S. Metropolitan Areas",
      authors: ["Bira Jakhadai", "Sarah Kim", "David Alvarez"],
      href: "#",
    },
    {
      year: "2025",
      title: "Algorithmic Hiring and Labor Market Discrimination",
      authors: ["Priya Nandakumar", "Bira Jakhadai"],
      href: "#",
    },
    {
      year: "2023",
      title: "Returns to Community College Education: Evidence from Administrative Data",
      authors: ["James O'Malley", "Wei Zhang", "Bira Jakhadai", "Laura Fitzgerald"],
      href: "#",
    },
    {
      year: "2021",
      title:
        "The Long-Run Effects of Universal Basic Income Pilots on Household Consumption and Labor Supply: Evidence from a Randomized Controlled Trial",
      authors: ["Bira Jakhadai", "Thomas Reiner", "Nadia Osei"],
      href: "#",
    },
    {
      year: "2020",
      title:
        "Automation, Trade, and the Decline of Manufacturing Employment in the United States: A Reassessment Using Firm-Level Data",
      authors: ["Marcus Huang", "Bira Jakhadai"],
      href: "#",
    },
    {
      year: "2019",
      title: "Gender Wage Gaps in the Gig Economy",
      authors: ["Bira Jakhadai", "Elena Petrova"],
      href: "#",
    },
  ] satisfies Publication[],
  courses: [
    {
      year: "2025",
      title: "ECON 200: Introduction to Microeconomics",
      href: "#",
      description:
        "A foundational survey of consumer and producer behavior, market equilibrium, and competition, with applications to real-world markets and public policy questions.",
    },
    {
      year: "2024",
      title: "ECON 483: Econometrics I",
      href: "#",
      description:
        "Covers regression analysis, causal inference, and identification strategies including instrumental variables, difference-in-differences, and regression discontinuity design.",
    },
    {
      year: "2023",
      title: "ECON 517: Labor Economics",
      href: "#",
      description:
        "A graduate seminar on labor supply and demand, human capital, wage determination, and the empirical methods used to study minimum wage and employment policy.",
    },
    {
      year: "2022",
      title: "ECON 550: Behavioral Economics and Public Policy",
      href: "#",
      description:
        "Examines how insights from psychology inform economic decision-making and explores behaviorally-informed policy design, from retirement savings to tax compliance.",
    },
  ] satisfies Course[],
  educations: [
    {
      startYear: "2015",
      endYear: "2020",
      degree: "PhD in Economics",
      school: "Massachusetts Institute of Technology",
      description:
        "Dissertation on labor market responses to minimum wage policy, advised by the Department of Economics. Focused on applied microeconometrics and causal inference.",
    },
    {
      startYear: "2013",
      endYear: "2015",
      degree: "MSc in Economics",
      school: "London School of Economics",
      description: "Coursework and research in econometrics, public economics, and international trade.",
    },
    {
      startYear: "2009",
      endYear: "2013",
      degree: "BA in Economics",
      school: "University of California, Berkeley",
      description: "Graduated with honors; senior thesis on the effects of trade liberalization on regional employment.",
    },
  ] satisfies Education[],
};
