// ==========================================================================
// SCHEDULE DATA & INTERACTIVE TAB SWITCHER (Nov 14-15, 2026) - Max < 200 Lines
// ==========================================================================

const SCHEDULE_DAYS = {
  day1: {
    label: 'Day 1 — Nov 14',
    events: [
      { time: '09:00 AM', text: 'Check-in, Registration & Breakfast' },
      { time: '10:00 AM', text: 'Opening Ceremony & Theme Reveal' },
      { time: '10:30 AM', text: 'Team Matching & Brainstorming' },
      { time: '11:00 AM', text: 'Game Jam Hacking Begins!' },
      { time: '01:00 PM', text: 'Free Pizza Lunch & Mini Workshop' },
      { time: '06:00 PM', text: 'Dinner & Mentor Debugging Session' },
      { time: '08:30 PM', text: 'Mini Games & Fun Midnight Showcase' }
    ]
  },
  day2: {
    label: 'Day 2 — Nov 15',
    events: [
      { time: '09:00 AM', text: 'Breakfast & Final Coding Sprint' },
      { time: '10:00 AM', text: 'Playtesting, Sound & Art Polish' },
      { time: '01:00 PM', text: 'Game Submission Deadline on Itch.io' },
      { time: '01:30 PM', text: 'Pizza Lunch & Arcade Party' },
      { time: '03:00 PM', text: 'Open Game Demos & Community Voting' },
      { time: '04:30 PM', text: 'Awards, Swag Distribution & Closing Ceremony' }
    ]
  }
};

function renderSchedule(dayKey) {
  const board = document.getElementById('scheduleBoard');
  if (!board) return;

  const data = SCHEDULE_DAYS[dayKey] || SCHEDULE_DAYS.day1;
  const rowsHtml = data.events.map((e) => `
    <div class="schedule-row">
      <span class="sched-time">${e.time}</span>
      <span class="sched-line"></span>
      <span class="sched-event">${e.text}</span>
    </div>
  `).join('');

  board.innerHTML = rowsHtml + '<div class="schedule-amber-filler" aria-hidden="true"></div>';
}

function initSchedule() {
  const tabs = document.querySelectorAll('.day-tab-pill');
  if (!tabs.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
      const dayKey = tab.getAttribute('data-day');
      renderSchedule(dayKey);
    });
  });

  renderSchedule('day1');
}

window.initSchedule = initSchedule;
