const siteData = window.SITE_DATA;

function createLink(link, className = "") {
  const anchor = document.createElement("a");
  anchor.href = link.href;
  anchor.textContent = link.label;
  applyLinkBehavior(anchor, link.href);

  if (className) {
    anchor.className = className;
  }

  return anchor;
}

function applyLinkBehavior(element, href) {
  const isExternal = /^https?:\/\//.test(href);
  if (isExternal) {
    element.target = "_blank";
    element.rel = "noreferrer";
  }
}

function createLinkedContainer(className, href) {
  const anchor = document.createElement("a");
  anchor.href = href;
  anchor.className = className;
  applyLinkBehavior(anchor, href);
  return anchor;
}

function createCardHint(text) {
  const hint = document.createElement("p");
  hint.className = "card-hint";
  hint.textContent = text;
  return hint;
}

function renderFooter() {
  const footerNote = document.getElementById("footer-note");
  if (footerNote) {
    if (siteData.footerNote) {
      footerNote.textContent = "";
      const lines = siteData.footerNote.split("\n");
      lines.forEach((line, index) => {
        const span = document.createElement("span");
        span.className = index === 0 ? "footer-note-line" : "footer-note-credit";
        span.textContent = line;
        footerNote.appendChild(span);
      });
    } else {
      footerNote.remove();
    }
  }
}

function renderPageHero(pageKey) {
  const meta = siteData.pages[pageKey];
  if (!meta) {
    return;
  }

  const title = document.getElementById("page-title");
  if (title) {
    title.textContent = meta.title;
  }
}

function renderHero() {
  document.getElementById("hero-name").textContent = siteData.hero.name;

  const heroRoles = document.getElementById("hero-roles");
  if (heroRoles && siteData.hero.roles) {
    heroRoles.textContent = "";
    siteData.hero.roles.forEach((role) => {
      const line = document.createElement("p");
      line.className = "hero-role";
      line.textContent = role;
      heroRoles.appendChild(line);
    });
  }

  const heroInterest = document.getElementById("hero-interest");
  if (heroInterest && siteData.hero.interest) {
    heroInterest.textContent = siteData.hero.interest;
  }

  const heroImage = document.getElementById("hero-image");
  if (heroImage && siteData.hero.image) {
    heroImage.src = siteData.hero.image.src;
    heroImage.alt = siteData.hero.image.alt;
  }

  const actionsRoot = document.getElementById("hero-actions");
  siteData.hero.actions.forEach((action) => {
    actionsRoot.appendChild(createLink(action, `button ${action.variant || "secondary"}`));
  });
}

function renderParagraphs(rootId, paragraphs) {
  const root = document.getElementById(rootId);
  paragraphs.forEach((paragraph) => {
    const p = document.createElement("p");
    p.textContent = paragraph;
    root.appendChild(p);
  });
}

async function fetchTextFile(path) {
  const response = await fetch(path, { cache: "no-store" });
  if (!response.ok) {
    throw new Error(`Failed to load ${path}: ${response.status}`);
  }
  return response.text();
}

function parseMarkdownPeople(markdown) {
  return markdown
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.startsWith("- "))
    .map((line) => line.slice(2).trim())
    .map((line) => {
      const parts = line.split("|").map((part) => part.trim());
      const primary = parts[0] || "";
      const note = parts[1] || "";
      const linkMatch = primary.match(/^\[([^\]]+)\]\(([^)]+)\)$/);

      if (linkMatch) {
        return { name: linkMatch[1], href: linkMatch[2], note };
      }

      return { name: primary, note };
    })
    .filter((person) => person.name);
}

function renderCardLinks(rootId, items) {
  const root = document.getElementById(rootId);
  items.forEach((item) => {
    const article = createLinkedContainer("link-card card-link-card", item.href);

    const title = document.createElement("h3");
    title.textContent = item.title;
    const description = document.createElement("p");
    description.textContent = item.description;

    article.append(title, description);
    root.appendChild(article);
  });
}

function renderResearchCards() {
  const root = document.getElementById("research-cards");
  siteData.research.forEach((item) => {
    const primaryLink = item.links && item.links.length === 1 ? item.links[0] : null;
    const article = primaryLink
      ? createLinkedContainer("card research-card card-link-card", primaryLink.href)
      : document.createElement("article");

    if (!primaryLink) {
      article.className = "card research-card";
    }

    const title = document.createElement("h3");
    title.textContent = item.title;
    const description = document.createElement("p");
    description.textContent = item.description;

    article.append(title, description);

    if (primaryLink) {
      article.appendChild(createCardHint(primaryLink.label));
    } else {
      const links = document.createElement("div");
      links.className = "inline-links";
      item.links.forEach((link) => links.appendChild(createLink(link)));
      article.appendChild(links);
    }

    root.appendChild(article);
  });
}

function renderStackedList(rootId, items, withLinks = true) {
  const root = document.getElementById(rootId);
  items.forEach((item) => {
    const singleLink = withLinks && item.links && item.links.length === 1 ? item.links[0] : null;
    const destination = item.href || (singleLink ? singleLink.href : "");
    const useWholeCardLink = Boolean(destination && (!withLinks || !item.links || item.links.length <= 1));
    const article = useWholeCardLink
      ? createLinkedContainer("list-card card-link-card", destination)
      : document.createElement("article");

    if (!useWholeCardLink) {
      article.className = "list-card";
    }

    const title = document.createElement("h3");
    title.textContent = item.title;
    const description = document.createElement("p");
    description.textContent = item.description;

    article.append(title, description);

    if (useWholeCardLink && singleLink) {
      article.appendChild(createCardHint(singleLink.label));
    }

    if (withLinks && item.links && item.links.length > 0) {
      if (item.links.length > 1) {
        const links = document.createElement("div");
        links.className = "inline-links";
        item.links.forEach((link) => links.appendChild(createLink(link)));
        article.appendChild(links);
      }
    }

    if (item.href && !useWholeCardLink) {
      article.appendChild(createLink({ label: "Visit page", href: item.href }, "inline-link"));
    }

    root.appendChild(article);
  });
}

function renderTimeline(rootId, items) {
  const root = document.getElementById(rootId);
  items.forEach((item) => {
    const article = document.createElement("article");
    article.className = "timeline-item";

    const year = document.createElement("p");
    year.className = "timeline-year";
    year.textContent = item.year;

    const text = document.createElement("p");
    text.className = "timeline-text";
    text.textContent = item.text;

    article.append(year, text);
    root.appendChild(article);
  });
}

function renderPersonList(rootId, people) {
  const root = document.getElementById(rootId);
  if (!root || !people) {
    return;
  }

  people.forEach((person) => {
    const article = document.createElement("article");
    article.className = "person-item";

    const name = person.href
      ? createLink({ label: person.name, href: person.href }, "person-name")
      : (() => {
          const span = document.createElement("span");
          span.className = "person-name";
          span.textContent = person.name;
          return span;
        })();

    article.appendChild(name);

    if (person.note) {
      const note = document.createElement("p");
      note.className = "person-note";
      note.textContent = person.note;
      article.appendChild(note);
    }

    root.appendChild(article);
  });
}

function renderAdvisingCount(rootId, count) {
  const root = document.getElementById(rootId);
  if (!root) {
    return;
  }

  root.textContent = `${count} ${count === 1 ? "person" : "people"}`;
}

function renderAdvisingError(rootId) {
  const root = document.getElementById(rootId);
  if (!root) {
    return;
  }

  const message = document.createElement("p");
  message.className = "person-note";
  message.textContent = "This list could not be loaded.";
  root.appendChild(message);
}

function renderProfiles() {
  const root = document.getElementById("profiles-list");
  siteData.profiles.forEach((item) => {
    const article = createLinkedContainer("list-card card-link-card", item.href);

    const title = document.createElement("h3");
    title.textContent = item.title;
    const description = document.createElement("p");
    description.textContent = item.description;

    article.append(title, description);
    root.appendChild(article);
  });
}

function renderContact() {
  const root = document.getElementById("contact-grid");
  siteData.contact.forEach((item) => {
    const article = document.createElement("article");
    article.className = "contact-card";

    const label = document.createElement("p");
    label.className = "contact-label";
    label.textContent = item.label;

    let value;
    if (item.kind === "link") {
      value = createLink({ label: item.value, href: item.href }, "contact-value contact-link");
    } else if (item.kind === "obfuscated-email") {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "contact-value contact-reveal";
      button.textContent = item.revealLabel || "Click to reveal";
      button.addEventListener("click", () => {
        const address = `${item.user}@${item.domain.join(".")}`;
        const anchor = document.createElement("a");
        anchor.className = "contact-value contact-link";
        anchor.href = `mailto:${address}`;
        anchor.textContent = address;
        button.replaceWith(anchor);
      });
      value = button;
    } else {
      value = document.createElement("p");
      value.className = "contact-value";
      value.textContent = item.value;
    }

    article.append(label, value);
    root.appendChild(article);
  });
}

function setupNavToggle() {
  const button = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");
  if (!button || !nav) {
    return;
  }

  const closeNav = () => {
    button.setAttribute("aria-expanded", "false");
    nav.classList.remove("open");
  };

  button.addEventListener("click", () => {
    const expanded = button.getAttribute("aria-expanded") === "true";
    if (expanded) {
      closeNav();
      return;
    }

    button.setAttribute("aria-expanded", "true");
    nav.classList.add("open");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNav);
  });

  document.addEventListener("click", (event) => {
    if (nav.classList.contains("open") && !nav.contains(event.target) && !button.contains(event.target)) {
      closeNav();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeNav();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 860) {
      closeNav();
    }
  });
}

function markCurrentNav() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("#site-nav a").forEach((link) => {
    const linkPage = new URL(link.href, window.location.href).pathname.split("/").pop();
    if (linkPage === currentPage) {
      link.setAttribute("aria-current", "page");
    }
  });
}

function renderHome() {
  renderHero();
  renderCardLinks("home-links", siteData.homeLinks);
}

function renderResearchPage() {
  renderPageHero("research");
  renderResearchCards();
}

function renderTeachingPage() {
  renderPageHero("teaching");
  renderStackedList("teaching-list", siteData.teaching);
}

function renderArchiveCoursesPage() {
  renderPageHero("archived-courses");
  renderStackedList("archive-courses-list", siteData.archiveCourses, false);
}

function renderBioPage() {
  renderPageHero("bio");

  const root = document.getElementById("bio-sections");
  siteData.bioSections.forEach((section) => {
    const wrapper = document.createElement("section");
    wrapper.className = "content-section bio-section-card";

    const heading = document.createElement("h2");
    heading.className = "bio-section-title";
    heading.textContent = section.title;

    const list = document.createElement("ul");
    list.className = "bio-list";

    section.items.forEach((item) => {
      const li = document.createElement("li");
      if (item.html) {
        li.innerHTML = item.html;
      } else {
        li.textContent = item.text;
      }
      list.appendChild(li);
    });

    wrapper.append(heading, list);
    root.appendChild(wrapper);
  });
}

function renderHonorsPage() {
  renderPageHero("honors");
  renderTimeline("honors-timeline", siteData.honors);
  renderStackedList("service-list", siteData.service, false);
  renderTimeline("appointments-timeline", siteData.appointments);
}

async function renderAdvisingPage() {
  renderPageHero("advising");

  try {
    const [currentMarkdown, alumniMarkdown] = await Promise.all([
      fetchTextFile(siteData.advisingFiles.currentStudents),
      fetchTextFile(siteData.advisingFiles.alumni),
    ]);

    const currentPeople = parseMarkdownPeople(currentMarkdown);
    const alumniPeople = parseMarkdownPeople(alumniMarkdown);

    renderPersonList("current-students-list", currentPeople);
    renderPersonList("alumni-list", alumniPeople);
    renderAdvisingCount("current-students-count", currentPeople.length);
    renderAdvisingCount("alumni-count", alumniPeople.length);
  } catch (error) {
    console.error(error);
    renderAdvisingError("current-students-list");
    renderAdvisingError("alumni-list");
  }
}

function renderContactPage() {
  renderPageHero("contact");
  renderContact();
}

function init() {
  const page = document.body.dataset.page;

  setupNavToggle();
  markCurrentNav();
  renderFooter();

  const pageRenderers = {
    home: renderHome,
    bio: renderBioPage,
    research: renderResearchPage,
    teaching: renderTeachingPage,
    "archived-courses": renderArchiveCoursesPage,
    honors: renderHonorsPage,
    advising: renderAdvisingPage,
    contact: renderContactPage,
  };

  const renderPage = pageRenderers[page];
  if (renderPage) {
    Promise.resolve(renderPage()).catch((error) => console.error(error));
  }
}

init();
