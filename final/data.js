/* IBUISC'26: all site content in one place.
   Dates follow the 29 October 2026 meeting. Still to update when the lists arrive from Lejla:
   faculty subtopics (faculties[].topics) and the organization committee (organization). */
window.IBUISC = {
  edition: "IBUISC'26",
  year: 2026,
  title: "International Student Congress 2026",
  presenter: "International Balkan University presents",
  theme: "Youth at the Crossroads: Artificial Intelligence, Sustainability, and the Future of Society",
  themeHead: "Youth at the Crossroads",
  themeSub: "Artificial Intelligence, Sustainability, and the Future of Society",
  themeShort: ["Artificial Intelligence", "Sustainability", "Future of Society"],
  intro: "Join students, researchers, and academics from around the globe for an inspiring two-day congress featuring cutting-edge research presentations, keynote speeches, workshops, and networking opportunities that will shape the future of innovation and sustainability.",
  dates: "December 2–3, 2026",
  location: "International Balkan University, Skopje, North Macedonia",
  city: "Skopje",
  coords: "41.9981° N, 21.4254° E",
  email: "ibuisc@ibu.edu.mk",
  // Google Apps Script web apps (apps-script/Code.gs): the primary account first, the backup only if the primary fails
  endpoints: [
    "PASTE_PRIMARY_WEB_APP_URL",
    "PASTE_BACKUP_WEB_APP_URL"
  ],
  stats: { abstracts: 66, countries: 16, faculties: 6, days: 2 },

  deadlines: [
    { key: "abstract", label: "Abstract submission deadline", date: "2026-11-15T23:59:00", display: "November 15, 2026" },
    { key: "congress", label: "IBUISC'26 Congress", date: "2026-12-02T09:30:00", display: "December 2–3, 2026" },
    { key: "fullpaper", label: "Full paper submission deadline", date: "2026-12-15T23:59:00", display: "December 15, 2026" }
  ],

  about: [
    "The International Student Congress at the International Balkan University brings together students, researchers, and academics from around the globe to share ideas, present research, and collaborate on innovative solutions to global challenges.",
    "This year's congress theme, “Youth at the Crossroads: Artificial Intelligence, Sustainability, and the Future of Society”, explores the choices young people face today and how students can contribute to a more sustainable and equitable society through research and innovation.",
    "Join us for engaging discussions, keynote speeches, workshop sessions, and networking opportunities that will enhance your academic journey and connect you with peers from diverse backgrounds."
  ],

  scientificBoard: [
    ["Assoc. Prof. Dr. Liza Alili Sulejmani", "International Balkan University", "North Macedonia"],
    ["Prof. Hernan E. Gil Forleo", "Universidad de Buenos Aires", "Argentina"],
    ["Prof. Adriana Burlea – Schiopoiu", "University of Craiova", "Romania"],
    ["Prof. Dr. Aleksandra Ristovska", "International Balkan University", "North Macedonia"],
    ["Prof. Amir Emami", "Kharazmi University", "Iran"],
    ["Prof. Dr. Hiqmet Kamberaj", "International Balkan University", "North Macedonia"],
    ["Prof. Asena Boztaş", "Sakarya University of Applied Sciences", "Türkiye"],
    ["Prof. Dr. Llokman Turan", "International Balkan University", "North Macedonia"],
    ["Prof. Mohd Asif Shah", "Kebri Dehar University", "Ethiopia"],
    ["Assoc. Prof. Dr. Nikolla Dacev", "International Balkan University", "North Macedonia"],
    ["Prof. Candela Contero Urgal", "University of Cadiz", "Spain"],
    ["Prof. Dr. Aleksandar Andovski", "International Balkan University", "North Macedonia"],
    ["Prof. Meral Yurdagül", "Istanbul Medipol University", "Türkiye"],
    ["Assoc. Prof. Dr. Igballe Miftari Fetishi", "International Balkan University", "North Macedonia"],
    ["Prof. Rashmi Gujarati", "Tecnia Institute of Advanced Studies", "India"],
    ["Assoc. Prof. Dr. Delcho Leshkovski", "International Balkan University", "North Macedonia"],
    ["Prof. Tariq Rahim Soomro", "Institute of Business Management", "Pakistan"],
    ["Prof. Dr. Savica Dimitrieska", "International Balkan University", "North Macedonia"],
    ["Prof. Tetiana Paientko", "Kyiv National Economic University", "Ukraine"],
    ["Assoc. Prof. Dr. Sanja Adzaip Velickovski", "International Balkan University", "North Macedonia"],
    ["Assoc. Prof. Dr. Besime Ziberi", "AAB College", "Kosovo"],
    ["Dr. Abdulla Redzepi", "FHS, St.Gallen University of Applied Sciences", "Switzerland"],
    ["Prof. Dr. Dzemil Bektovich", "International Balkan University", "North Macedonia"],
    ["Dr. Donat Rexha", "AAB College", "Kosovo"],
    ["Prof. Dr. Emina Sadikovic", "International Balkan University", "North Macedonia"],
    ["Dr. Nawaz Ahmad", "Shaheed Benazir Bhutto University", "Pakistan"],
    ["Assoc. Prof. Dr. Luljeta Sadiku", "International Balkan University", "North Macedonia"],
    ["Dr. Nikolay Yavorov", "University of Chemical Technology and Metallurgy", "Bulgaria"],
    ["Prof. Dr. Ana Kechan", "International Balkan University", "North Macedonia"],
    ["Dr. Roberta Bajrami", "AAB College", "Kosovo"],
    ["Assoc. Prof. Dr. Ivan Ivanov", "International Balkan University", "North Macedonia"],
    ["Assoc. Prof. Dr. Egemen Sunal", "International Balkan University", "North Macedonia"],
    ["Asst. Prof. Dr. Sead Dzigal", "International Balkan University", "North Macedonia"],
    ["Asst. Prof. Dr. Xhemile Saliu", "International Balkan University", "North Macedonia"]
  ],

  honorable: [
    ["Prof. Dr. Lutfi Sunar", "Rector"],
    ["Asst. Prof. Dr. Ahmet Lokce", "Vice Rector"],
    ["Asst. Prof. Dr. Ebru Ibish", "Vice Rector"],
    ["Assoc. Prof. Dr. Katerina Mitevska Petrusheva", "Vice Rector"],
    ["Assoc. Prof. Dr. Seyhan Murtezan Ibrahimi", "Secretary General"]
  ],

  organization: [
    ["Assoc. Prof. Dr. Liza Alili Sulejmani", "General Coordinator"],
    ["Asst. Prof. Dr. Ceneta Telak Durmishi", "Chair"],
    ["Asst. Sani Saidi", "Co-Chair"],
    ["Std. Asst. Rijad Crnisanin", "President"],
    ["Asst. Seher Mustafa", "Vice President"],
    ["Std. Asst. Lejla Bilalli", "Secretary General"],
    ["Asst. Hatice Muci", "Member"],
    ["Std. Asst. Amina Rrahmani", "Member"],
    ["Asst. Lorik Limani", "Member"]
  ],

  techTeam: [
    ["FENG", "Faculty of Engineering", ["Harun Emre ILHAN", "Anisa Jakupi", "Ilajda Sejfulla", "Zafer Sezer Altun", "Beisa Kamberi", "Viktorija Angelovska"]],
    ["FHSS", "Faculty of Humanities and Social Sciences", ["Almira Saiti", "Arta Latifi", "Bushra Sinani", "Sandra Spasovska", "Menche Jovanovska"]],
    ["FEAS", "Faculty of Economics and Administrative Sciences", ["Emira Musliu", "Seminamera Ajdari", "Nasir Ismaili", "Reja Gjakova", "Ayet Rizmani", "Ibadete Sulejmani"]],
    ["FEDU", "Faculty of Education", ["Ajlin Bajram", "Melek Sarici", "Sara Ismaili", "Selin Suer", "Vasilij Zafirov"]],
    ["FLAW", "Faculty of Law", ["Berru Emin", "Dina Hasikj", "Simona Jakimovska", "Meribe Zulbehari", "Nurbanu Sila Uzun"]],
    ["FAD", "Faculty of Art and Design", ["Yllka Sopi", "Najda Crnisanin", "Yakup Seyfullahoglu", "Liza Azemi", "Rina Saliu", "Rafiz Tusha"]]
  ],

  faculties: [
    { code: "FLAW", value: "law", name: "Faculty of Law", short: "Law", topics: [
      "Regulating Artificial Intelligence: Challenges for Data Protection and Privacy Law",
      "Sustainable Development and Environmental Law: Legal Tools for Climate-Resilient Policies",
      "Ethical Dilemmas in AI and the Role of Human Rights Law",
      "Corporate Responsibility and Sustainability Reporting: From Voluntary Ethics to Legal Obligations",
      "Intellectual Property Rights in the Age of AI: Ownership and Protection of AI-Generated Innovations",
      "Artificial Intelligence and the Future of Democratic Governance",
      "Global Sustainability Policy: Bridging the Gap Between Climate Agreements and National Politics",
      "Green Politics in the Digital Age: The Role of Political Parties and Movements in Shaping a Sustainable Future",
      "Geopolitics of Artificial Intelligence: Competing Strategies Between Global Powers",
      "AI and Democratic Integrity: How Algorithms Impact Elections and Political Discourse"
    ]},
    { code: "FHSS", value: "humanities", name: "Faculty of Humanities and Social Sciences", short: "Humanities", topics: [
      "AI and Child Development: The Effects of Smart Technologies on Cognitive, Emotional, and Social Growth",
      "AI in the Workplace: Psychological Impacts on Employee Well-being, Motivation, and Job Identity",
      "Human-AI Interaction: Cognitive Bias, Trust, and Decision-Making in a Technologically Mediated Environment",
      "AI in Mental Health Care: Ethical and Therapeutic Implications of Chatbots and Digital Therapists",
      "AI in Education: Cognitive Load, Motivation, and Learning Outcomes in Intelligent Learning Environments",
      "AI-Driven Persuasion: Ethical Challenges and Psychological Effects of Algorithmic Messaging in Modern PR and Marketing"
    ]},
    { code: "FEAS", value: "economics", name: "Faculty of Economics and Administrative Sciences", short: "Economics", topics: [
      "AI-Driven Consumer Behavior & Ethical Digital Transformation in E-Commerce",
      "Blockchain, AI & Green Logistics: The Triple Revolution in E-Business",
      "AI and Global Trade: Disruptions, Opportunities, and Ethical Dilemmas",
      "Digital Colonialism or Development? AI's Role in Global Economic Equity",
      "AI-Enhanced Decision-Making: Ethical Leadership for a Sustainable Future",
      "Managing AI-Driven Change: Sustainability as a Strategic Imperative",
      "Green Fintech and AI: Ethical Innovation for Sustainable Finance",
      "Algorithmic Bias in Financial Decision-Making: A Threat to Inclusive Growth?"
    ]},
    { code: "FEDU", value: "education", name: "Faculty of Education", short: "Education", topics: [
      "AI-Powered Language Learning Tools",
      "Exploring Adaptive Learning Platforms and Chatbots",
      "Combining Text, Video, and AI-Generated Materials Responsibly",
      "Ethical Implications of AI-Mediated Therapy",
      "Confidentiality and Data Security in Tele-Counseling Platforms"
    ]},
    { code: "FAD", value: "art", name: "Faculty of Art and Design", short: "Art & Design", topics: [
      "Post-Human Aesthetics: How AI Shapes the Visual Language of Contemporary Art",
      "Ethics by Design: AI Tools and the Future of Sustainable Visual Communication",
      "Smart Textiles and AI: Designing the Future of Sustainable and Ethical Fashion",
      "AI-Driven Living: Designing Ethical and Sustainable Smart Spaces",
      "Synthetic Realities: The Ethics of AI in Filmmaking and Visual Storytelling",
      "Animating the Future: AI-Assisted 2D Animation for Ethical and Sustainable Storytelling"
    ]},
    { code: "FENG", value: "engineering", name: "Faculty of Engineering", short: "Engineering", topics: [
      "AI-Driven Edge Computing for Sustainable Smart Cities",
      "Ethical Decision-Making in AI-Powered Supply Chains",
      "Federated Learning for Sustainable Data Privacy in IoT Networks",
      "Ethical and Sustainable Practices in Generative Architectural AI"
    ]}
  ],

  guidelines: {
    abstract: {
      title: "Abstract submission",
      specs: [
        ["Length", "Maximum 350 words"],
        ["File format", "Microsoft Word document"],
        ["Language", "English only"],
        ["Font", "Times New Roman, 12 pt (title in 14 pt)"],
        ["Line spacing", "1.5"],
        ["Page format", "A4, 1 inch / 2.54 cm margins on all sides"],
        ["Content", "A clear outline of the theoretical framework, theme, or work in discussion"]
      ]
    },
    paper: {
      title: "Full paper submission",
      specs: [
        ["Length", "3,000–6,000 words"],
        ["Format", "A4, 1 inch / 2.54 cm margins on all sides"],
        ["Typography", "Times New Roman 12 pt, double-spaced"],
        ["File type", "Microsoft Word document"],
        ["Content", "A clear outline of the theoretical framework, theme, or work in discussion"]
      ]
    },
    note: "Submitting your abstract is your application. Accepted authors send the full paper by December 15, after the congress, for the proceedings.",
    proceedings: "All accepted papers will be published in the IBU International Student Congress Proceedings 2026 with an official ISBN number. The proceedings will be available in both digital and print formats.",
    journalsIntro: "Based on the congress theme, exceptional papers will be published in special editions of the journals of the respective faculties at International Balkan University:",
    journals: [
      ["TEFMJ", "Trends in Economics, Finance and Management", "Faculty of Economics and Administrative Sciences"],
      ["JLP", "Journal of Law and Politics", "Faculty of Law"],
      ["IJEP", "International Journal of Education and Philology", "Faculty of Education & Faculty of Humanities and Social Sciences"],
      ["IJTNS", "International Journal of Technical and Natural Science", "Faculty of Engineering"],
      ["IJAD", "International Journal of Art and Design", "Faculty of Art and Design"]
    ]
  },

  // The 2026 programme is published after the abstract review; until then the agenda section shows this note.
  agenda: [],
  agendaNote: "The two-day programme of keynotes, workshops and sessions is published after the abstract review. Accepted authors also receive it by email.",

  announcements: [
    { date: "November 2, 2026", title: "Call for papers is open", body: "Submit your abstract by November 15, 2026 on a topic from one of the six faculties. Submitting the abstract is your application.", link: "#submit", linkText: "Submit your abstract" },
    { date: "March 16, 2026", title: "IBUISC'25 Abstract Book published", body: "The abstract book of last year's congress is published on IBU Press.", image: "ibuisc-2025-abstract-book-cover.png", link: "https://press.ibu.edu.mk/", linkText: "Read on IBU Press" }
  ],

  sponsor: { name: "Macedonia Türkiye Chamber of Commerce", line: "Supporting international academic collaboration and student development", logo: "matto-logo.png" }

};

/* Small helpers shared by concepts */
window.IBUISC.util = {
  countdown(iso) {
    const ms = Math.max(0, new Date(iso).getTime() - Date.now());
    const s = Math.floor(ms / 1000);
    return { done: ms === 0, d: Math.floor(s / 86400), h: Math.floor(s / 3600) % 24, m: Math.floor(s / 60) % 60, s: s % 60 };
  },
  pad(n, l = 2) { return String(n).padStart(l, "0"); },
  esc(s) { return String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); },
  topicCount() { return window.IBUISC.faculties.reduce((n, f) => n + f.topics.length, 0); },
  // Tab row: one panel visible at a time. Arrow keys move between tabs.
  tabs(bar, labels, render, start = 0) {
    bar.setAttribute("role", "tablist");
    bar.innerHTML = labels.map((l, i) => `<button type="button" role="tab" data-i="${i}">${l}</button>`).join("");
    const btns = [...bar.children];
    const go = i => { btns.forEach((b, k) => { b.setAttribute("aria-selected", k === i); b.tabIndex = k === i ? 0 : -1; }); render(i); };
    bar.addEventListener("click", e => { const b = e.target.closest("button"); if (b) go(+b.dataset.i); });
    bar.addEventListener("keydown", e => {
      const k = btns.indexOf(document.activeElement), d = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
      if (k < 0 || !d) return;
      e.preventDefault(); const n = (k + d + btns.length) % btns.length; btns[n].focus(); go(n);
    });
    go(start);
  },
  // Short summary of what opens under a session, e.g. "3 groups · 59 students"
  sessionExtra(it) {
    if (it.groups) return `${it.groups.length} groups · ${it.groups.reduce((s, g) => s + g[2].length, 0)} students`;
    if (it.people) return `${it.people.length} ${it.people.length === 1 ? "speaker" : "speakers"}`;
    if (it.list) return `${it.list.length} talks`;
    return it.note ? "Details" : "";
  },
  // Scientific board grouped by country, largest group first
  boardByCountry() {
    const m = new Map();
    window.IBUISC.scientificBoard.forEach(([n, u, c]) => { if (!m.has(c)) m.set(c, []); m.get(c).push([n, u]); });
    return [...m].sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]));
  },
  // Sends the submission to the Apps Script web app; if the primary does not answer, the same submission goes to the backup.
  // type is "abstract" or "fullpaper". The reference lets the server recognise a repeated send of the same submission.
  async submit(form, type, file, btn, msg) {
    const D = window.IBUISC, what = type === "abstract" ? "abstract" : "full paper";
    const say = (t, ok) => { msg.textContent = t; msg.classList.toggle("s-ok", !!ok); };
    if (!form.checkValidity() || !file) return say("Fill in every required field and attach your Word file.");
    if (!/\.docx?$/i.test(file.name)) return say("Attach a Microsoft Word document (.doc or .docx).");
    if (file.size > 12 * 1048576) return say(`The file is ${Math.round(file.size / 1048576)} MB. Attach a file smaller than 12 MB.`);
    const f = new FormData(form);
    if (f.get("website")) return say("Refresh the page and try again.");
    const label = btn.textContent;
    btn.disabled = true; btn.textContent = "Sending…"; say("");
    try {
      const b64 = await new Promise((res, rej) => { const r = new FileReader(); r.onload = () => res(r.result.split(",")[1]); r.onerror = rej; r.readAsDataURL(file); });
      const body = JSON.stringify({
        type, ref: Date.now().toString(36) + Math.random().toString(36).slice(2, 10),
        author_names: f.get("author_names").trim(), faculty: f.get("faculty"), topic: f.get("topic"), email: f.get("email").trim(),
        phone: f.get("phone").trim(), paper_title: f.get("paper_title").trim(), agreement: f.get("agreement"),
        file_name: file.name, file_base64: b64, website: f.get("website")
      });
      let j = null;
      for (const url of D.endpoints.filter(u => u.startsWith("https://"))) {
        try {
          // text/plain keeps this a simple request, which Apps Script accepts from any site
          const r = await fetch(url, { method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" }, body, signal: AbortSignal.timeout ? AbortSignal.timeout(60000) : undefined });
          j = await r.json();
          if (j.success || !j.retry) break; // a clear answer (even "check your email address") is final; silence or a server fault moves on to the backup
        } catch (e) { j = null; }
      }
      if (!j) throw new Error("");
      if (!j.success) throw new Error(j.error);
      form.reset(); form.querySelector("select[name=faculty]").dispatchEvent(new Event("change"));
      say(`Your ${what} is sent. Your submission ID is ${j.submissionId}. A confirmation email is on its way to you.`, true);
    } catch (err) {
      say(err.message ? err.message : `Your ${what} could not be sent right now. Try again in a few minutes, or email it to ${D.email}.`);
    } finally { btn.disabled = false; btn.textContent = label; }
  },
  // Wires a faculty <select> to a topic <select>
  bindTopicSelect(facultySel, topicSel) {
    const D = window.IBUISC;
    facultySel.innerHTML = '<option value="">Select faculty</option>' + D.faculties.map(f => `<option value="${f.value}">${f.name}</option>`).join("");
    topicSel.innerHTML = '<option value="">Select a faculty first</option>';
    topicSel.disabled = true;
    facultySel.addEventListener("change", () => {
      const f = D.faculties.find(x => x.value === facultySel.value);
      topicSel.disabled = !f;
      topicSel.innerHTML = f ? '<option value="">Select topic</option>' + f.topics.map(t => `<option>${window.IBUISC.util.esc(t)}</option>`).join("") : '<option value="">Select a faculty first</option>';
    });
  }
};
