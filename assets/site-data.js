// Most day-to-day updates happen in this file.
window.SITE_DATA = {
  hero: {
    eyebrow: "Computer Science",
    name: "Sanjeev Arora",
    roles: [
      "Charles C. Fitzmorris Professor of Computer Science",
      "Director, Princeton Language and Intelligence",
    ],
    interest:
      "Research interest: Developing mathematical and conceptual understanding to enable better and safer AI.",
    image: {
      src: "./images/sanjeevPLI.jpg",
      alt: "Portrait of Sanjeev Arora",
    },
    actions: [
      { label: "Research Group", href: "https://aroraresearch-princeton.github.io/", variant: "primary" },
      { label: "CV / Bio", href: "./bio.html", variant: "secondary" },
      { label: "Google Scholar", href: "https://scholar.google.com/citations?user=RUP4S68AAAAJ&hl=en&oi=ao", variant: "secondary" },
    ],
  },
  pages: {
    bio: {
      eyebrow: "Bio",
      title: "Bio",
      summary: "",
    },
    research: {
      eyebrow: "Research",
      title: "Research",
      summary: "The research group, PLI, and computational complexity",
    },
    teaching: {
      eyebrow: "Teaching",
      title: "Teaching",
      summary: "Current and archival course links.",
    },
    "archived-courses": {
      eyebrow: "Archived Courses",
      title: "Archived Courses",
      summary: "",
    },
    honors: {
      eyebrow: "Honors and Service",
      title: "Honors and Service",
      summary: "Selected awards, professional service, and academic appointments.",
    },
    advising: {
      eyebrow: "Advising",
      title: "Advising",
      summary: "Current students and alumni.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Contact",
      summary: "Office details.",
    },
  },
  bioSections: [
    {
      title: "Profiles",
      items: [
        {
          html: '<a href="https://cacm.acm.org/news/148772-an-influential-theoretician/fulltext">An Influential Theoretician.</a> Paul Hyman, Communications of the ACM, 2012.',
        },
      ],
    },
    {
      title: "Education",
      items: [
        { text: "SB in Mathematics with Computer Science, MIT, 1990. Also attended IIT Kanpur, India, 1986-88 before transfer." },
        {
          html: 'PhD in Computer Science, UC Berkeley, 1994. Dissertation: <a href="https://www.cs.princeton.edu/~arora/pubs/thesis.pdf">Probabilistic checking of proofs and the hardness of approximation problems.</a> Advisor: Umesh Vazirani.',
        },
      ],
    },
    {
      title: "Professional Appointments",
      items: [
        { text: "Assistant Professor, Princeton University, 1994" },
        { text: "Associate Professor, Princeton University, 1999" },
        { text: "Professor, Princeton University, 2003" },
        { text: "Charles C. Fitzmorris Professor, 2011" },
        { text: "Distinguished Visiting Professor, Institute for Advanced Study, 2017-2020" },
        { text: "Visiting appointments at UC Berkeley, Microsoft Research, Weizmann Institute, Kyoto University, EPFL, ETH, and DeepMind London" },
        { text: "Founding Director, Princeton Language and Intelligence, 2023" },
      ],
    },
    {
      title: "Awards and Honors",
      items: [
        { text: "30-year Test of Time Award for FOCS 1993, 2023" },
        { text: "Bell Labs Innovation Prize 2020, runner-up team" },
        { text: "Plenary Speaker, International Congress of Mathematicians, 2018" },
        { text: "Member, National Academy of Sciences, 2018" },
        { text: "American Academy of Arts and Sciences, 2015" },
        { text: "Simons Investigator, 2012-present" },
        { text: "AMS-MOS D. R. Fulkerson Prize, 2012" },
        { text: "ACM - Infosys Foundation Award in the Computing Sciences, 2011" },
        { text: "Best Paper, IEEE Foundations of Computer Science, 2010" },
        { text: "Goedel Prize, 2010 and 2001" },
        { text: "ACM Fellow, 2009" },
        { text: "Engineering Council Teaching Award, Princeton University, 2008" },
        { text: "Graduate Mentoring Award, Princeton University, 2005" },
        { text: "Best Paper, ACM Symposium on Theory of Computing, 2004" },
        { text: "Semiplenary speaker, International Symposium on Math Programming, 2003" },
        { text: "Distinguished Alumnus Award, UC Berkeley Computer Science, 2003" },
        { text: "Invited speaker in Math Aspects of Computer Science session, International Congress of Mathematicians, 2002" },
        { text: "Plenary speaker, ACM Symposium on Theory of Computing, 1998" },
        { text: "David and Lucile Packard Foundation Fellowship, 1997-2002" },
        { text: "Alfred P. Sloan Fellowship, 1996" },
        { text: "NSF CAREER Award, 1995" },
        { html: '<a href="https://awards.acm.org/doctoral-dissertation/1990s">ACM Doctoral Dissertation Award</a>, co-winner, 1995' },
        { text: "IBM Graduate Fellowship, 1993" },
        { text: "Ranked first in India, IIT Joint Entrance Exam, 1986" },
      ],
    },
    {
      title: "Professional Service",
      items: [
        { html: 'Founding director and lead PI, <a href="https://intractability.princeton.edu/">Center for Computational Intractability</a>, Princeton, 2008' },
        { text: "SIGACT Committee for Advancement of Theoretical CS: member 2005-07, chair 2007-2010" },
        { text: "Served on editorial boards for Computational Complexity, Theory of Computing, SIAM Journal on Discrete Mathematics, Journal of Combinatorial Optimization, and Information and Computation" },
        { text: "Program chair for IEEE FOCS 2006 and APPROX 2003; program committee service for STOC, FOCS, and Computational Complexity" },
        { html: 'Coauthor, with Boaz Barak, of <a href="https://theory.cs.princeton.edu/complexity/">Computational Complexity: A Modern Approach</a>' },
      ],
    },
    {
      title: "PhD Students",
      items: [
        { html: 'See <a href="./advising.html">Advising page</a>.' },
        { text: "Postdoctoral advisees: many over the years." },
      ],
    },
    {
      title: "Personal Info",
      items: [
        { text: "US citizen. Born January 1968 in Jodhpur, India." },
      ],
    },
    {
      title: "Links to news articles that mention my work",
      items: [
        { html: '<a href="https://www.nytimes.com/1992/04/07/science/new-short-cut-found-for-long-math-proofs.html">New short cut found for long math proofs</a>, by Gina Kolata. New York Times, April 7, 1992.' },
        { html: '<a href="https://www.nature.com/articles/444265a">Proof at a Roll of the Dice</a>, by Bernard Chazelle. Nature, December 2006.' },
        { html: '<a href="https://dl.acm.org/doi/10.1145/1409360.1409371">Limits of computability</a>, by David Lindley. Communications of the ACM, November 2008.' },
        { html: '<a href="https://www.boston.com/news/education/k_12/articles/2009/02/09/great_unknowns/">Great unknowns</a>, by Carolyn Johnson. Boston Globe, February 9, 2009.' },
        { html: '<a href="https://newsroom-magazine.com/?p=2835">Princeton study questions derivative computational model</a>, by Robert Butche. News Magazine, May 5, 2010.' },
        { html: '<a href="https://www.ams.org/publicoutreach/math-imagery/sales-and-chips">Sales and Chips</a>, by Joe Malkevitch. American Mathematical Society, 2012.' },
        { html: '<a href="https://www.simonsfoundation.org/2012/09/20/approximately-hard-the-unique-games-conjecture/">Approximately hard: the Unique Games Conjecture</a>.' },
      ],
    },
  ],
  homeIntro: [
    "Sanjeev Arora’s work spans algorithms, complexity theory, machine learning, and mathematically grounded approaches to AI.",
  ],
  homeLinks: [
    {
      title: "Research",
      description: "Research themes, related initiatives, and selected external resources.",
      label: "View page",
      href: "./research.html",
    },
    {
      title: "Teaching",
      description: "Current and archived course pages.",
      label: "View page",
      href: "./teaching.html",
    },
    {
      title: "Honors and Service",
      description: "Selected awards, professional service, and academic appointments.",
      label: "View page",
      href: "./honors.html",
    },
    {
      title: "Advising",
      description: "Current students and alumni.",
      label: "View page",
      href: "./advising.html",
    },
    {
      title: "Contact",
      description: "Office details.",
      label: "View page",
      href: "./contact.html",
    },
  ],
  researchIntro: [
    "Sanjeev Arora’s research has helped shape modern theoretical computer science and increasingly focuses on the mathematical foundations needed to understand contemporary machine learning and AI systems.",
  ],
  research: [
    {
      title: "Arora Research Group",
      description:
      "Developing conceptual understanding of AI models, including training techniques, datasets, model interpretability and model evaluations. ",
      links: [{ label: "Research Group Site", href: "https://aroraresearch-princeton.github.io/" }],
    },
    {
      title: "Foundations of AI",
      description:
        "Mathematical and conceptual tools for understanding modern AI systems, with emphasis on capability, reliability, and safety.",
      links: [{ label: "Princeton Language and Intelligence", href: "https://pli.princeton.edu/" }],
    },
    {
      title: "Algorithms and Complexity",
      description:
        "Work on approximation algorithms, probabilistically checkable proofs, hardness of approximation, and computational complexity.",
      links: [{ label: "Computational Complexity: A Modern Approach", href: "https://theory.cs.princeton.edu/complexity/" }],
    },
  ],
  researchLinks: [
    {
      title: "Google Scholar",
      description: "Complete publication list and citation profile.",
      href: "https://scholar.google.com/citations?user=RUP4S68AAAAJ&hl=en",
    },
    {
      title: "Research Group",
      description: "Projects, group members, and related activity.",
      href: "https://aroraresearch-princeton.github.io/",
    },
    {
      title: "Princeton Language and Intelligence",
      description: "Current interdisciplinary institute for language and AI.",
      href: "https://pli.princeton.edu/",
    },
  ],
  teaching: [
    {
      title: "COS 324: Introduction to Machine Learning",
      description: "Core undergraduate machine learning course with public materials available online.",
      links: [{ label: "Course Site", href: "https://princeton-introml.github.io/" }],
    },
    {
      title: "COS 514: Fundamentals of Deep Learning",
      description: "Graduate-level deep learning course listed on the current teaching page.",
      links: [{ label: "Course Notes", href: "https://www.cs.princeton.edu/~arora/TheoryDL.pdf" }],
    },
    {
      title: "Archived course pages",
      description:
        "Earlier materials in algorithms, complexity theory, machine learning, and seminar courses remain available for reference.",
      links: [{ label: "Browse archive", href: "./archived-courses.html" }],
    },
  ],
  archiveCourses: [
    { title: "Fall 2015: COS 521", description: "Graduate Algorithms", href: "https://www.cs.princeton.edu/courses/archive/fall15/cos521/" },
    { title: "Spring 2015: COS 598D", description: "Overcoming Intractability in Machine Learning", href: "https://www.cs.princeton.edu/courses/archive/spring15/cos598D/" },
    { title: "Fall 2014: COS 521", description: "Graduate Algorithms", href: "https://www.cs.princeton.edu/courses/archive/fall14/cos521/" },
    { title: "Spring 2014: COS 522", description: "Advanced Computational Complexity", href: "https://www.cs.princeton.edu/courses/archive/spr14/cos522/" },
    { title: "Fall 2013: COS 521", description: "Advanced Algorithm Design", href: "https://www.cs.princeton.edu/courses/archive/fall13/cos521/" },
    { title: "Spring 2012: COS 521", description: "Advanced Algorithms", href: "https://www.cs.princeton.edu/courses/archive/spring12/cos521/index.html" },
    { title: "Spring 2012: COS 598C", description: "Is Learning Easy?", href: "https://www.cs.princeton.edu/courses/archive/spring12/cos598C/index.html" },
    { title: "Fall 2011: COS 522", description: "Advanced Complexity Theory" },
    { title: "Spring 2011: COS 116", description: "Computational Universe", href: "https://www.cs.princeton.edu/courses/archive/spring11/cos116/" },
    { title: "Fall 2010: COS 487", description: "Theory of Computation", href: "https://www.cs.princeton.edu/courses/archive/fall10/cos487/" },
    { title: "Spring 2010: COS 522", description: "Advanced Complexity Theory" },
    { title: "Fall 2009: COS 597C", description: "How to Solve It", href: "https://www.cs.princeton.edu/courses/archive/fall09/cos597C/" },
    { title: "Spring 2009", description: "Course archive entry" },
    { title: "Fall 2008", description: "COS 487 and COS 521" },
    { title: "Spring 2008", description: "COS 116" },
    { title: "Fall 2007: COS 597D", description: "How to Think Like a Theorist", href: "https://www.cs.princeton.edu/courses/archive/fall07/cos597D/Site/coursepage.html" },
    { title: "Spring 2006: COS 116", description: "The Computational Universe", href: "https://www.cs.princeton.edu/courses/archive/spring06/cos116/" },
    { title: "Fall 2005: COS 521", description: "Advanced Algorithm Design", href: "https://www.cs.princeton.edu/courses/archive/fall05/cos521/" },
    { title: "Spring 2005: COS 598B", description: "Seminar in Algorithms and Complexity", href: "https://www.cs.princeton.edu/courses/archive/spring05/cos598B/" },
    { title: "Fall 2004: COS 522", description: "Computational Complexity Theory", href: "https://www.cs.princeton.edu/courses/archive/fall04/cos522/" },
    { title: "Spring 2004: COS 111", description: "Computers and Computing", href: "https://www.cs.princeton.edu/courses/archive/spring04/cos111/" },
    { title: "Spring 2003: COS 522", description: "Advanced Complexity Theory", href: "https://www.cs.princeton.edu/courses/archive/spring03/cs522/" },
    { title: "Fall 2002: COS 597D", description: "Theorist's Toolkit", href: "https://www.cs.princeton.edu/courses/archive/fall02/cs597D/" },
    { title: "COS 487", description: "Theory of Computation", href: "https://www.cs.princeton.edu/courses/archive/fall00/cs487/" },
    { title: "COS 522", description: "Advanced Complexity Theory" },
    { title: "COS 594", description: "Advanced Topics: Algorithms and Complexity" },
  ],
  honors: [
    { year: "2023", text: "30-year Test of Time Award for FOCS 1993" },
    { year: "2020", text: "Bell Labs Innovation Prize, runner-up team" },
    { year: "2018", text: "Plenary Speaker, International Congress of Mathematicians" },
    { year: "2018", text: "Elected to the National Academy of Sciences" },
    { year: "2015", text: "Elected to the American Academy of Arts and Sciences" },
    { year: "2012", text: "Simons Investigator" },
    { year: "2012", text: "AMS-MOS D. R. Fulkerson Prize" },
    { year: "2011", text: "ACM-Infosys Foundation Award in the Computing Sciences" },
    { year: "2010", text: "Goedel Prize" },
    { year: "2009", text: "Elected ACM Fellow" },
    { year: "2001", text: "Goedel Prize" },
  ],
  service: [
    {
      title: "Princeton Language and Intelligence",
      description: "Founding Director of Princeton Language and Intelligence, launched in 2023.",
    },
    {
      title: "Center for Computational Intractability",
      description: "Founding director and lead PI for Princeton’s Center for Computational Intractability.",
    },
    {
      title: "Conference leadership",
      description: "Program chair for IEEE FOCS 2006 and APPROX 2003; multiple STOC, FOCS, and CCC program committees.",
    },
    {
      title: "Editorial service",
      description:
        "Served on editorial boards including Computational Complexity, Theory of Computing, SIAM Journal on Discrete Mathematics, and Information and Computation.",
    },
  ],
  appointments: [
    { year: "2023", text: "Founding Director, Princeton Language and Intelligence" },
    { year: "2017-2020", text: "Distinguished Visiting Professor, Institute for Advanced Study" },
    { year: "2011", text: "Charles C. Fitzmorris Professor, Princeton University" },
    { year: "2003", text: "Professor, Princeton University" },
    { year: "1999", text: "Associate Professor, Princeton University" },
    { year: "1994", text: "Assistant Professor, Princeton University" },
  ],
  advisingFiles: {
    currentStudents: "./content/advising/current-students.md",
    alumni: "./content/advising/alumni.md",
  },
  profiles: [
    {
      title: "CV / Bio",
      description: "Biography, appointments, honors, and professional background.",
      href: "./bio.html",
    },
    {
      title: "Google Scholar",
      description: "Complete publications and citation profile.",
      href: "https://scholar.google.com/citations?user=RUP4S68AAAAJ&hl=en&oi=ao",
    },
    {
      title: "Research Group",
      description: "Lab members, projects, and related research activity.",
      href: "https://aroraresearch-princeton.github.io/",
    },
    {
      title: "Teaching Archive",
      description: "Current and archival course pages.",
      href: "https://www.cs.princeton.edu/~arora/courses.html",
    },
    {
      title: "Princeton Language and Intelligence",
      description: "Institute website for current interdisciplinary AI initiatives.",
      href: "https://pli.princeton.edu/",
    },
  ],
  contact: [
    { label: "Office", value: "35 Olden St,\nPrinceton NJ 08540" },
    { label: "Phone", value: "(609) 258-3869" },
    { label: "Admin Assistant", value: "(609) 258-4562 (Ms Mitra Kelly, Admin Assistant)" },
    { label: "Fax", value: "(609) 258-1771 (Fax)" },
    {
      label: "Email",
      kind: "obfuscated-email",
      user: "arora",
      domain: ["cs", "princeton", "edu"],
      revealLabel: "Click to reveal",
    },
    {
      label: "Email (Rec Letters Only)",
      kind: "obfuscated-email",
      user: "mitraforsanjeev",
      domain: ["gmail", "com"],
      revealLabel: "Click to reveal",
    },
    {
      label: "Twitter",
      kind: "link",
      value: "@prfsanjeevarora",
      href: "https://twitter.com/prfsanjeevarora",
    },
  ],
  footerContactLine: "Department of Computer Science, Princeton University",
  footerNote: "Copyright © 2026 Sanjeev Arora.\nDesigned by Xingyu Zhu with Codex.",
};
