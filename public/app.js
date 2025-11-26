const sectionIds = {
  purpose: document.getElementById("purpose-list"),
  activities: document.getElementById("activities-list"),
  gallery: document.getElementById("gallery-grid"),
  eligibility: document.getElementById("eligibility-list"),
  convener: document.getElementById("convener-card"),
  coConvener: document.getElementById("co-convener-card"),
  studentTeam: document.getElementById("student-team"),
  purposeHero: document.getElementById("purpose-hero"),
};

const heroTitle = document.getElementById("hero-title");
const heroIntro = document.getElementById("hero-intro");
const heroDate = document.getElementById("hero-date");
const heroVenue = document.getElementById("hero-venue");
const aboutIntro = document.getElementById("about-intro");
const feeEl = document.querySelector("#registration .fee");
const deadlineEl = document.querySelector("#registration .deadline");
const googleFormBtn = document.getElementById("google-form");
const whatsappBtn = document.getElementById("whatsapp-link");
const footerYear = document.getElementById("year");

async function loadEvent() {
  try {
    const resp = await fetch("/api/event");
    if (!resp.ok) throw new Error("Unable to load event data");
    const data = await resp.json();
    hydratePage(data);
  } catch (error) {
    console.error(error);
    heroIntro.textContent =
      "We are refreshing the Alumni Meet experience. Please check back shortly.";
  }
}

function hydratePage({
  title,
  intro,
  gallery,
  purpose,
  activities,
  eligibility,
  registration,
  convener,
  coConvener,
  studentTeam,
  tagline,
  date,
  venue,
}) {
  heroTitle.textContent = title;
  heroIntro.textContent = tagline;
  heroDate.textContent = `${date} • ${venue}`;
  heroVenue.textContent = venue;
  aboutIntro.textContent = intro;

  sectionIds.purposeHero.innerHTML = purpose
    .slice(0, 3)
    .map((point) => `<li>${point}</li>`)
    .join("");

  sectionIds.purpose.innerHTML = purpose
    .map(
      (item) => `
        <article class="purpose-card">
          <p>${item}</p>
        </article>
      `
    )
    .join("");

  sectionIds.activities.innerHTML = activities
    .map(
      (activity) => `
        <article class="initiative-card">
          <h3>${activity.title}</h3>
          <p>${activity.description}</p>
        </article>
      `
    )
    .join("");

  sectionIds.gallery.innerHTML = gallery
    .map((src, idx) => `<img src="${src}" alt="Gallery item ${idx + 1}" />`)
    .join("");

  sectionIds.eligibility.innerHTML = eligibility
    .map((rule) => `<li>${rule}</li>`)
    .join("");

  feeEl.textContent = `Registration Fee: ${registration.fee}`;
  deadlineEl.textContent = `Early bird deadline: ${registration.deadline}`;
  googleFormBtn.href = registration.googleForm;
  whatsappBtn.href = registration.whatsappGroup;

  sectionIds.convener.innerHTML = renderLeader(convener, "Convener");
  sectionIds.coConvener.innerHTML = renderLeader(coConvener, "Co-Convener");

  sectionIds.studentTeam.innerHTML = studentTeam
    .map(
      (member) => `
        <article class="member-card">
          <img src="${member.photo}" alt="${member.name}" />
          <h3>${member.name}</h3>
          <p>${member.role}</p>
          <p>${member.department}</p>
        </article>
      `
    )
    .join("");
}

function renderLeader(person, title) {
  return `
    <img src="${person.photo}" alt="${person.name}" />
    <p class="eyebrow">${title}</p>
    <h3>${person.name}</h3>
    <p>${person.role}</p>
    <p>${person.email}</p>
    <p>${person.phone}</p>
    <p>${person.bio}</p>
  `;
}

footerYear.textContent = new Date().getFullYear();
loadEvent();
