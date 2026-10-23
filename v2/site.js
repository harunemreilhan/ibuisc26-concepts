/* IBUISC'26: shared full-site sections for the hero concepts.
   Each concept keeps its own hero and skin (CSS variables in site.css + its own overrides);
   this file renders the content below the hero from data.js, with long lists kept compact:
   one faculty, one day and one committee at a time, sessions open on demand. */
window.IBUISC.site = function (target, opts = {}) {
  const D = window.IBUISC, U = D.util, esc = U.esc;
  const skip = new Set(opts.skip || []);
  const order = ["deadlines", "about", "topics", "agenda", "committees", "guidelines", "submit", "news"];
  const titles = {
    deadlines: ["Key dates", "Deadlines for the 2026 edition, counting down live."],
    about: ["About the congress", "Youth at the Crossroads: Artificial Intelligence, Sustainability, and the Future of Society."],
    topics: ["Topics", `${U.topicCount()} topics from ${D.faculties.length} faculties. Choose a faculty to read its topics.`],
    agenda: ["Agenda", "Two days in Skopje. Open a session to see who takes part."],
    committees: ["Committees", "The people behind IBUISC'26."],
    guidelines: ["Guidelines", D.guidelines.note],
    submit: ["Submit your work", ""],
    news: ["Announcements", "News from the congress office."]
  };
  Object.assign(titles, opts.titles || {});
  let n = opts.startN || 0;
  const head = key => { n++; const [t, p] = titles[key]; return `<div class="s-head"><span class="s-n" aria-hidden="true">${U.pad(n)}</span><h2>${t}</h2>${p ? `<p>${p}</p>` : key === "submit" ? `<p>Upload a Word document, or email it to <a href="mailto:${D.email}">${D.email}</a>.</p>` : ""}</div>`; };
  const person = ([a, b]) => `<li>${esc(a)}<span>${esc(b)}</span></li>`;

  const body = {
    deadlines: () => `<div class="s-dl">${D.deadlines.map(d => `<div class="s-dlc" data-k="${d.key}"><h3>${d.label}</h3><div class="s-date">${d.display}</div><div class="s-cd"></div></div>`).join("")}</div>`,
    about: () => `<div class="s-about"><p class="s-big">${esc(D.about[0])}</p><div>${D.about.slice(1).map(p => `<p>${esc(p)}</p>`).join("")}</div></div>
      <div class="s-stats">${[[D.stats.abstracts, "Abstracts in 2025"], [D.stats.countries, "Countries"], [D.stats.faculties, "Faculties"], [D.stats.days, "Days in Skopje"]].map(([v, l]) => `<div><b>${v}</b><span>${l}</span></div>`).join("")}</div>`,
    topics: () => `<div class="s-topics"><div class="s-tabs s-ftabs" id="sFac" aria-label="Faculty"></div><div class="s-panel" id="sFacP" role="tabpanel"></div></div>`,
    agenda: () => `<div class="s-tabs s-dtabs" id="sDay" aria-label="Day"></div><div class="s-sessions" id="sDayP" role="tabpanel"></div>`,
    committees: () => `<div class="s-tabs s-ctabs" id="sCom" aria-label="Committee"></div><div class="s-panel" id="sComP" role="tabpanel"></div>`,
    guidelines: () => { const G = D.guidelines; return `<div class="s-gl">${[G.abstract, G.paper].map(g => `<div class="s-card"><h3>${g.title}</h3><dl>${g.specs.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("")}</dl></div>`).join("")}
      <div class="s-card s-pub"><div><h3>Publication and proceedings</h3><p>${G.proceedings}</p></div><div><p>${G.journalsIntro}</p><ul>${G.journals.map(([a, nm, f]) => `<li><b>${a}</b><span>${nm}<small>${f}</small></span></li>`).join("")}</ul></div></div></div>`; },
    submit: () => `<form class="s-card s-form" id="sForm" novalidate>
      <div class="s-full"><div class="s-tabs s-kind" id="sKind" aria-label="Submission type"></div></div>
      <div class="s-full"><label for="sAu">Author full name(s)</label><input id="sAu" required><small>For multiple authors, separate with commas</small></div>
      <div><label for="sFa">Faculty</label><select id="sFa" required></select></div>
      <div><label for="sTo">Topic of interest</label><select id="sTo" required></select></div>
      <div><label for="sEm">Email address</label><input id="sEm" type="email" required></div>
      <div><label for="sPh">Phone number</label><input id="sPh" type="tel"><small>Optional, with country code</small></div>
      <div class="s-full"><label for="sTi">Paper title</label><input id="sTi" required></div>
      <div class="s-full"><label for="sFi" id="sFil">Abstract file</label><input id="sFi" type="file" accept=".doc,.docx" required><small>Microsoft Word document only (.doc or .docx)</small></div>
      <label class="s-full s-chk"><input type="checkbox" required> I have read the submission guidelines and understand my submission will be peer reviewed.</label>
      <div class="s-full"><button class="s-btn" id="sGo" type="submit">Submit abstract</button><span class="s-msg" id="sMsg" role="status"></span></div></form>`,
    news: () => `<div class="s-news">${D.announcements.map(a => `<article>${a.image ? `<img src="../images/${a.image}" alt="${esc(a.title)}" loading="lazy">` : ""}<time>${a.date}</time><h3>${esc(a.title)}</h3><p>${esc(a.body)}</p>${a.link ? `<a href="${a.link}" target="_blank" rel="noopener">${a.linkText}</a>` : ""}</article>`).join("")}</div>`
  };

  target.innerHTML = order.filter(k => !skip.has(k)).map((k, i) => `<section class="s-sec s-sec-${k}${i % 2 ? " s-alt" : ""}" id="${k}"><div class="s-wrap">${head(k)}${body[k]()}</div></section>`).join("") +
    `<div class="s-foot" role="contentinfo"><div class="s-wrap"><div class="s-fcols">
      <div class="s-sp"><img src="../images/${D.sponsor.logo}" alt=""><div><small>Congress sponsor</small><b>${D.sponsor.name}</b><span>${D.sponsor.line}</span></div></div>
      <div><b>Quick links</b><a href="#about">About</a><a href="#topics">Topics</a><a href="#agenda">Agenda</a><a href="#committees">Committees</a><a href="#submit">Submit</a></div>
      <div><b>Contact</b><a href="mailto:${D.email}">${D.email}</a><a href="https://www.ibu.edu.mk/" target="_blank" rel="noopener">ibu.edu.mk</a><a href="https://www.instagram.com/ibu.edu.mk/" target="_blank" rel="noopener">Instagram</a></div>
    </div><small class="s-copy">© 2026 International Balkan University, Skopje, North Macedonia. All rights reserved.</small></div></div>
    <dialog class="s-zoom" id="sZoom"><img alt=""></dialog>`;

  const $ = s => target.querySelector(s) || document.querySelector(s);

  // deadlines
  if (!skip.has("deadlines")) {
    const tick = () => D.deadlines.forEach(d => {
      const el = target.querySelector(`.s-dlc[data-k=${d.key}]`), c = U.countdown(d.date);
      el.classList.toggle("s-done", c.done);
      el.querySelector(".s-cd").innerHTML = c.done ? "Closed" : [[c.d, "days"], [U.pad(c.h), "hrs"], [U.pad(c.m), "min"], [U.pad(c.s), "sec"]].map(([v, l]) => `<span>${v}<small>${l}</small></span>`).join("");
    });
    tick(); setInterval(tick, 1000);
  }

  // topics: one faculty at a time
  if (!skip.has("topics")) U.tabs($("#sFac"), D.faculties.map(f => `<b>${f.short}</b><small>${f.topics.length} topics</small>`), i => {
    const f = D.faculties[i];
    $("#sFacP").innerHTML = `<h3>${f.name}</h3><ol class="s-list">${f.topics.map(t => `<li>${esc(t)}</li>`).join("")}</ol>`;
  });

  // agenda: one day at a time, sessions open on demand
  const session = it => {
    if (it.pause) return `<div class="s-ses s-pause"><div class="s-row"><span class="s-t">${it.time}</span><h4>${it.title}</h4></div></div>`;
    const hd = `<span class="s-t">${it.time}</span><div><h4>${esc(it.title)}</h4>${it.place ? `<span class="s-pl">${it.place}</span>` : ""}</div>`;
    const extra = U.sessionExtra(it);
    if (!extra) return `<div class="s-ses"><div class="s-row">${hd}</div></div>`;
    let b = it.note ? `<p class="s-note">${esc(it.note)}</p>` : "";
    if (it.people || it.list) b += `<ul>${(it.people || it.list).map(p => `<li>${esc(p)}</li>`).join("")}</ul>`;
    if (it.groups) b += it.groups.map(([t, m, ppl, room]) => `<div class="s-grp"><b>${esc(t)}</b><span>Moderator: ${esc(m)}${room ? ` · ${room}` : ""} · ${ppl.length} students</span><div class="s-names">${ppl.map(esc).join("<br>")}</div></div>`).join("");
    return `<details class="s-ses"><summary class="s-row">${hd}<span class="s-more">${extra}</span></summary><div class="s-body">${b}</div></details>`;
  };
  if (!skip.has("agenda")) U.tabs($("#sDay"), D.agenda.map(d => `<b>Day ${d.day}: ${d.title}</b><small>${d.weekday}, ${d.date}</small>`), i => { $("#sDayP").innerHTML = D.agenda[i].items.map(session).join(""); });

  // committees: one group at a time
  const groups = [
    [`Organization (${D.organization.length})`, () => `<ul class="s-people">${D.organization.map(person).join("")}</ul>`],
    [`Honorable (${D.honorable.length})`, () => `<ul class="s-people">${D.honorable.map(person).join("")}</ul>`],
    [`Scientific Board (${D.scientificBoard.length})`, () => `<div class="s-countries">${U.boardByCountry().map(([c, ppl]) => `<div><h4>${c}<span>${ppl.length}</span></h4><ul>${ppl.map(person).join("")}</ul></div>`).join("")}</div>`],
    [`Technical Team (${D.techTeam.reduce((s, t) => s + t[2].length, 0)})`, () => `<div class="s-tech">${D.techTeam.map(([c, nm, p]) => `<div><h4>${nm.replace("Faculty of ", "")}</h4><p>${p.join(", ")}</p></div>`).join("")}</div>`]
  ];
  if (!skip.has("committees")) U.tabs($("#sCom"), groups.map(g => g[0]), i => { $("#sComP").innerHTML = groups[i][1](); });

  // form
  if (!skip.has("submit")) {
    U.bindTopicSelect($("#sFa"), $("#sTo"));
    U.tabs($("#sKind"), ["Abstract", "Full paper"], i => {
      $("#sFil").textContent = i ? "Full paper file" : "Abstract file";
      $("#sGo").textContent = i ? "Submit full paper" : "Submit abstract";
    });
    $("#sForm").onsubmit = e => { e.preventDefault(); $("#sMsg").textContent = e.target.checkValidity() ? "Prototype: submission is not sent in this concept." : "Fill in every required field and attach a .doc or .docx file."; };
  }

  // news images open full size
  target.addEventListener("click", e => { if (e.target.matches(".s-news img")) { $("#sZoom img").src = e.target.src; $("#sZoom").showModal(); } });
  $("#sZoom").onclick = () => $("#sZoom").close();
};
