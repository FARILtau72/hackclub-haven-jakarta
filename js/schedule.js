// ==========================================================================
// SCHEDULE DATA & INTERACTIVE TAB SWITCHER (Nov 14-15, 2026) - Max < 200 Lines
// ==========================================================================

const SCHEDULE_DAYS = {
  day1: {
    label: 'Hari 1 — 14 Nov',
    events: [
      { time: '09:00 WIB', text: 'Check-in, Registrasi & Sarapan Pagi' },
      { time: '10:00 WIB', text: 'Opening Ceremony & Pengumuman Tema Game' },
      { time: '10:30 WIB', text: 'Team Matching & Brainstorming Ide' },
      { time: '11:00 WIB', text: 'Game Jam Hacking Dimulai!' },
      { time: '13:00 WIB', text: 'Makan Siang Pizza Gratis & Mini Workshop' },
      { time: '18:00 WIB', text: 'Makan Malam & Sesi Debugging Bareng Mentor' },
      { time: '20:30 WIB', text: 'Mini Games & Fun Midnight Showcase' }
    ]
  },
  day2: {
    label: 'Hari 2 — 15 Nov',
    events: [
      { time: '09:00 WIB', text: 'Sarapan Pagi & Sesi Coding Terakhir' },
      { time: '10:00 WIB', text: 'Playtesting, Polish Sound & Art' },
      { time: '13:00 WIB', text: 'Batas Akhir Submission Game di Itch.io' },
      { time: '13:30 WIB', text: 'Makan Siang Pizza & Arcade Party' },
      { time: '15:00 WIB', text: 'Demo Game Terbuka & Voting Karya Favorit' },
      { time: '16:30 WIB', text: 'Penyerahan Hadiah, Swag & Closing Ceremony' }
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
