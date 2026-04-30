// ─────────────────────────────────────────────
// ZADA PROJECT TRACKER — ENGINE
// Don't edit this file. Edit data.js instead.
// ─────────────────────────────────────────────

const STATUS_CYCLE = ["not-started", "active", "at-risk", "done"];

const STATUS_LABEL = {
  "active":      "Active",
  "at-risk":     "At risk",
  "not-started": "Not started",
  "done":        "Done"
};

const STATUS_CLASS = {
  "active":      "s-active",
  "at-risk":     "s-risk",
  "not-started": "s-open",
  "done":        "s-done"
};

// ── localStorage helpers ──────────────────────

function storageKey(betId) {
  return `zada-status-${betId}`;
}

function getStatus(bet) {
  return localStorage.getItem(storageKey(bet.id)) || bet.status;
}

function saveStatus(betId, status) {
  localStorage.setItem(storageKey(betId), status);
}

function cycleStatus(betId, defaultStatus) {
  const current = localStorage.getItem(storageKey(betId)) || defaultStatus;
  const idx = STATUS_CYCLE.indexOf(current);
  const next = STATUS_CYCLE[(idx + 1) % STATUS_CYCLE.length];
  saveStatus(betId, next);
  return next;
}

function getActiveRound() {
  return parseInt(localStorage.getItem("zada-active-round") || "0", 10);
}

function setActiveRound(idx) {
  localStorage.setItem("zada-active-round", String(idx));
}

// ── Renderers ─────────────────────────────────

function renderStatusPill(bet) {
  const status = getStatus(bet);
  const cls = STATUS_CLASS[status];
  const label = STATUS_LABEL[status];
  return `
    <button class="status-pill ${cls}" data-bet-id="${bet.id}" data-default="${bet.status}" title="Click to change status">
      <span class="status-dot"></span>${label}
    </button>`;
}

function renderBet(bet) {
  const noteHtml = bet.note
    ? `<div class="bet-note"><strong>Note:</strong> ${bet.note}</div>`
    : "";
  return `
    <div class="bet-row">
      <div class="bet-main">
        <div class="bet-title">${bet.title}</div>
        <span class="owner-label">${bet.owner}</span>
        ${renderStatusPill(bet)}
      </div>
      <div class="bet-sub">${bet.sub}</div>
      ${noteHtml}
    </div>`;
}

function renderEmptyChannel() {
  return `
    <div class="bet-row empty-bets">
      <div class="empty-msg">Bets for this round will be planned at the end of the previous round.</div>
    </div>`;
}

function renderChannel(channel) {
  const betsHtml = channel.bets.length > 0
    ? channel.bets.map(renderBet).join("")
    : renderEmptyChannel();
  return `
    <div class="channel-section">
      <div class="channel-header-row">
        <div class="ch-name">${channel.name}</div>
        <div class="ch-divider"></div>
        <div class="ch-meta">
          <div class="ch-tagline">${channel.tagline}</div>
          <div class="ch-desc">${channel.desc}</div>
        </div>
      </div>
      ${betsHtml}
    </div>`;
}

function renderBetsTable(round) {
  return `
    <div class="bets-table">
      <div class="bets-table-head">
        <div class="th">What we're doing</div>
        <div class="th">Owner</div>
        <div class="th right">Status <span class="th-hint">— click to update</span></div>
      </div>
      ${round.channels.map(renderChannel).join("")}
    </div>`;
}

function renderWeekRow(week) {
  const daysHtml = week.days.map(d => `
    <div class="day-cell${d.w ? " weekend" : ""}"${d.fade ? ' style="opacity:0.35"' : ""}>
      <div class="day-num">${d.n}</div>
      <div class="day-mo">${d.m}</div>
    </div>`).join("");

  const tagHtml = week.state === "now"
    ? `<div class="focus-tag">This week</div>`
    : "";

  return `
    <div class="cal-row ${week.state}">
      <div class="week-num-cell">Wk ${week.num}</div>
      ${daysHtml}
      <div class="focus-cell">
        <div class="focus-text">${week.focus}</div>
        ${tagHtml}
      </div>
    </div>`;
}

function renderCalendar(round) {
  return `
    <div class="calendar-section">
      <div class="section-label">Week by week</div>
      <div class="cal-wrap">
        <div class="cal-head">
          <div class="cal-th left"></div>
          <div class="cal-th">Mon</div>
          <div class="cal-th">Tue</div>
          <div class="cal-th">Wed</div>
          <div class="cal-th">Thu</div>
          <div class="cal-th">Fri</div>
          <div class="cal-th">Sat</div>
          <div class="cal-th">Sun</div>
          <div class="cal-th right">Focus</div>
        </div>
        ${round.weeks.map(renderWeekRow).join("")}
      </div>
    </div>`;
}

function renderRoadmap(activeIdx) {
  const rounds = TRACKER_DATA.rounds;
  const stepsHtml = rounds.map((r, i) => {
    const isCurrent = i === activeIdx;
    const tagHtml = isCurrent
      ? `<div class="r-tag">Now</div>`
      : "";
    return `
      <div class="r-step ${isCurrent ? "current" : "future"}" data-round-idx="${i}" role="button" tabindex="0" title="Switch to Round ${r.id}">
        ${tagHtml}
        <div class="r-num">Round ${r.id}</div>
        <div class="r-goal">${r.title}</div>
        <div class="r-dates">${r.dateRange}</div>
      </div>`;
  });

  // Interleave arrows
  const trackHtml = stepsHtml.reduce((acc, step, i) => {
    acc.push(step);
    if (i < stepsHtml.length - 1) acc.push(`<div class="r-arrow">→</div>`);
    return acc;
  }, []).join("");

  return `
    <div class="roadmap">
      <div class="section-label">The bigger picture</div>
      <div class="roadmap-track">${trackHtml}</div>
    </div>`;
}

function renderRound(idx) {
  const round = TRACKER_DATA.rounds[idx];
  document.getElementById("round-content").innerHTML = `
    <div class="round-header">
      <div class="round-meta">6-week plan</div>
      <h1>${round.title}</h1>
      <div class="round-dates">${round.dateRange}</div>
    </div>
    <div class="section-label">Bets we're making this round</div>
    ${renderBetsTable(round)}
    ${renderCalendar(round)}`;

  document.getElementById("roadmap-section").innerHTML = renderRoadmap(idx);

  // Update round badge
  document.getElementById("round-badge").textContent = `Round ${round.id} of ${TRACKER_DATA.rounds.length}`;

  // Bind status pill clicks
  document.querySelectorAll(".status-pill[data-bet-id]").forEach(btn => {
    btn.addEventListener("click", () => {
      const betId = btn.dataset.betId;
      const defaultStatus = btn.dataset.default;
      const newStatus = cycleStatus(betId, defaultStatus);
      btn.className = `status-pill ${STATUS_CLASS[newStatus]}`;
      btn.querySelector(".status-dot").className = "status-dot";
      btn.childNodes[btn.childNodes.length - 1].textContent = STATUS_LABEL[newStatus];
    });
  });

  // Bind roadmap round-switch clicks
  document.querySelectorAll(".r-step[data-round-idx]").forEach(el => {
    el.addEventListener("click", () => {
      const newIdx = parseInt(el.dataset.roundIdx, 10);
      if (newIdx !== getActiveRound()) {
        setActiveRound(newIdx);
        renderRound(newIdx);
      }
    });
    el.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") el.click();
    });
  });
}

// ── Boot ──────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  // KPI section (static)
  document.getElementById("kpi-body").innerHTML =
    `The one number that matters: <strong>${TRACKER_DATA.kpi}</strong>`;
  document.getElementById("kpi-sub").textContent = TRACKER_DATA.kpiSub;

  renderRound(getActiveRound());
});
