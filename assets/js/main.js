/*
 * Excellence Academy — site interactivity.
 * Vanilla JS: navigation, search, reveal animations, counters, accordions,
 * course filtering, WhatsApp forms, floating actions, countdown, and the
 * home-page score chart.
 */
(function () {
  'use strict';

  var html = document.documentElement;
  html.classList.add('js');

  var SITE = {
    name: 'Excellence Academy',
    whatsapp: '919876543210',
    phone: '+91 98765 43210'
  };

  var SEARCH_INDEX = {
    courses: [
      { label: 'Class 6 Foundation', href: '/courses/class-6' },
      { label: 'Class 7 Foundation', href: '/courses/class-7' },
      { label: 'Class 8 Foundation', href: '/courses/class-8' },
      { label: 'Class 9 Board Prep', href: '/courses/class-9' },
      { label: 'Class 10 Board Excellence', href: '/courses/class-10' },
      { label: 'Class 11 Science', href: '/courses/class-11-science' },
      { label: 'Class 11 Commerce', href: '/courses/class-11-commerce' },
      { label: 'Class 12 Science', href: '/courses/class-12-science' },
      { label: 'Class 12 Commerce', href: '/courses/class-12-commerce' },
      { label: 'Foundation Courses', href: '/courses/foundation-courses' },
      { label: 'Olympiad Preparation', href: '/courses/olympiad-preparation' },
      { label: 'NTSE Coaching', href: '/courses/ntse' },
      { label: 'CUET Preparation', href: '/courses/cuet' },
      { label: 'NEET Foundation', href: '/courses/neet-foundation' },
      { label: 'JEE Foundation', href: '/courses/jee-foundation' },
      { label: 'Competitive Exams', href: '/courses/competitive-exams' }
    ],
    faculty: [
      { label: 'Rajesh Mehta', href: '/faculty' },
      { label: 'Priya Sharma', href: '/faculty' },
      { label: 'Amit Joshi', href: '/faculty' },
      { label: 'Neha Rathore', href: '/faculty' },
      { label: 'Suresh Goyal', href: '/faculty' },
      { label: 'Kavita Singh', href: '/faculty' }
    ],
    blogs: [
      { label: '10 Study Tips for Board Exam Success', href: '/blog/10-study-tips-for-board-exams' },
      { label: 'Time Management for School Students', href: '/blog/time-management-for-students' },
      { label: 'Board Exam Preparation Roadmap', href: '/blog/board-exam-preparation-roadmap' },
      { label: 'Career Guidance After Class 10', href: '/blog/career-guidance-after-class-10' },
      { label: 'NEET Preparation Tips for Beginners', href: '/blog/neet-preparation-tips' },
      { label: 'JEE Problem-Solving Habits That Work', href: '/blog/jee-problem-solving-habits' }
    ]
  };

  var ATTENDANCE_DEMO = {
    EA2024001: {
      name: 'Rahul Verma',
      classLabel: 'Class 10',
      rows: [
        { date: '2026-03-03', subject: 'Mathematics', status: 'Present' },
        { date: '2026-03-04', subject: 'Science', status: 'Present' },
        { date: '2026-03-05', subject: 'English', status: 'Late' },
        { date: '2026-03-06', subject: 'Mathematics', status: 'Present' },
        { date: '2026-03-07', subject: 'Weekly Test', status: 'Present' },
        { date: '2026-03-10', subject: 'Science', status: 'Absent' }
      ]
    },
    EA2024012: {
      name: 'Priya Singh',
      classLabel: 'Class 12 Science',
      rows: [
        { date: '2026-03-03', subject: 'Physics', status: 'Present' },
        { date: '2026-03-04', subject: 'Chemistry', status: 'Present' },
        { date: '2026-03-05', subject: 'Mathematics', status: 'Present' },
        { date: '2026-03-06', subject: 'Physics', status: 'Present' }
      ]
    }
  };

  function whatsappLink(message) {
    return 'https://wa.me/' + SITE.whatsapp + (message ? '?text=' + encodeURIComponent(message) : '');
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  /* ---------------- Theme ---------------- */
  function initTheme() {
    var stored = null;
    try { stored = localStorage.getItem('theme'); } catch (e) { /* ignore */ }
    var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    var dark = stored ? stored === 'dark' : prefersDark;
    html.classList.toggle('dark', dark);

    var placeholder = document.querySelector('header .size-10:not(button)');
    if (!placeholder) return;
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Toggle theme');
    btn.className = 'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring hover:bg-muted hover:text-foreground h-10 w-10 [&_svg]:size-4 [&_svg]:shrink-0';
    var sun = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>';
    var moon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon" aria-hidden="true"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>';
    function paint() { btn.innerHTML = html.classList.contains('dark') ? sun : moon; }
    paint();
    btn.addEventListener('click', function () {
      var nowDark = !html.classList.contains('dark');
      html.classList.toggle('dark', nowDark);
      try { localStorage.setItem('theme', nowDark ? 'dark' : 'light'); } catch (e) { /* ignore */ }
      paint();
    });
    placeholder.replaceWith(btn);
  }

  /* ---------------- Navbar ---------------- */
  function initNavbar() {
    var header = document.querySelector('header.sticky');
    if (!header) return;

    function onScroll() {
      var scrolled = window.scrollY > 12;
      header.classList.toggle('glass', scrolled);
      header.classList.toggle('shadow-md', scrolled);
      header.classList.toggle('bg-transparent', !scrolled);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Mobile menu
    var menuBtn = header.querySelector('button[aria-label="Menu"]');
    var mobilePanel = null;
    if (menuBtn) {
      menuBtn.addEventListener('click', function () {
        closeSearch();
        if (mobilePanel) {
          mobilePanel.remove();
          mobilePanel = null;
          return;
        }
        var links = [];
        header.querySelectorAll('nav[aria-label="Main"] a').forEach(function (a) {
          links.push('<a href="' + a.getAttribute('href') + '" class="rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-secondary">' + a.textContent.trim() + '</a>');
        });
        mobilePanel = document.createElement('div');
        mobilePanel.className = 'border-t border-border bg-background xl:hidden';
        mobilePanel.innerHTML =
          '<nav class="container-premium flex flex-col gap-1 px-4 py-4" aria-label="Mobile">' +
          links.join('') +
          '<a href="/admission" class="mt-2"><button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all bg-accent text-accent-foreground shadow-md hover:brightness-105 h-11 px-5 py-2 w-full">Admission Open</button></a>' +
          '</nav>';
        header.appendChild(mobilePanel);
      });
    }

    // Search
    var searchBtn = header.querySelector('button[aria-label="Search"]');
    var searchPanel = null;

    function closeSearch() {
      if (searchPanel) { searchPanel.remove(); searchPanel = null; }
    }

    if (searchBtn) {
      searchBtn.addEventListener('click', function () {
        if (mobilePanel) { mobilePanel.remove(); mobilePanel = null; }
        if (searchPanel) { closeSearch(); return; }
        searchPanel = document.createElement('div');
        searchPanel.className = 'border-t border-border bg-background/95 px-4 py-3 backdrop-blur';
        searchPanel.innerHTML =
          '<div class="container-premium relative">' +
          '<input aria-label="Site search" placeholder="Search courses, faculty, blogs..." class="flex h-11 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"/>' +
          '<ul class="absolute z-20 mt-2 w-full overflow-hidden rounded-xl border border-border bg-card shadow-xl hidden"></ul>' +
          '</div>';
        header.appendChild(searchPanel);
        var input = searchPanel.querySelector('input');
        var list = searchPanel.querySelector('ul');
        input.focus();
        input.addEventListener('input', function () {
          var q = input.value.trim().toLowerCase();
          if (!q) { list.classList.add('hidden'); list.innerHTML = ''; return; }
          var results = []
            .concat(SEARCH_INDEX.courses.filter(function (c) { return c.label.toLowerCase().indexOf(q) !== -1; }).slice(0, 4).map(function (c) { return { label: c.label, href: c.href, type: 'Course' }; }))
            .concat(SEARCH_INDEX.faculty.filter(function (c) { return c.label.toLowerCase().indexOf(q) !== -1; }).slice(0, 3).map(function (c) { return { label: c.label, href: c.href, type: 'Faculty' }; }))
            .concat(SEARCH_INDEX.blogs.filter(function (c) { return c.label.toLowerCase().indexOf(q) !== -1; }).slice(0, 3).map(function (c) { return { label: c.label, href: c.href, type: 'Blog' }; }));
          if (!results.length) { list.classList.add('hidden'); list.innerHTML = ''; return; }
          list.innerHTML = results.map(function (r) {
            return '<li><a href="' + r.href + '" class="flex items-center justify-between px-4 py-3 text-sm hover:bg-muted"><span>' + escapeHtml(r.label) + '</span><span class="text-xs text-muted-foreground">' + r.type + '</span></a></li>';
          }).join('');
          list.classList.remove('hidden');
        });
      });
    }
  }

  /* ---------------- Reveal animations ---------------- */
  function initReveal() {
    var items = document.querySelectorAll('[data-reveal]');
    if (!items.length) return;
    if (!('IntersectionObserver' in window)) {
      items.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' });
    items.forEach(function (el) { io.observe(el); });
  }

  /* ---------------- Animated counters ---------------- */
  function animateCounter(el) {
    var target = parseInt(el.getAttribute('data-count-to'), 10) || 0;
    var suffix = el.getAttribute('data-count-suffix') || '';
    var duration = 1400;
    var start = null;
    function step(ts) {
      if (start === null) start = ts;
      var p = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  function initCounters() {
    var counters = document.querySelectorAll('[data-count-to]');
    if (!counters.length) return;
    if (!('IntersectionObserver' in window)) {
      counters.forEach(function (el) {
        el.textContent = el.getAttribute('data-count-to') + (el.getAttribute('data-count-suffix') || '');
      });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    counters.forEach(function (el) { io.observe(el); });
  }

  /* ---------------- FAQ-style accordions ---------------- */
  function initAccordions() {
    document.querySelectorAll('button[aria-expanded]').forEach(function (btn) {
      var panel = btn.nextElementSibling;
      if (!panel || panel.className.indexOf('grid-rows-[0fr]') === -1) return;
      btn.addEventListener('click', function () {
        var open = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', open ? 'false' : 'true');
        panel.classList.toggle('grid-rows-[0fr]', open);
        panel.classList.toggle('grid-rows-[1fr]', !open);
        panel.classList.toggle('opacity-0', open);
        panel.classList.toggle('opacity-100', !open);
        var chevron = btn.querySelector('svg');
        if (chevron) chevron.classList.toggle('rotate-180', !open);
      });
    });
  }

  /* ---------------- Filter button groups (visual toggle) ---------------- */
  var FILTER_ACTIVE = 'bg-primary text-primary-foreground shadow-md hover:bg-[var(--blue-deep)] hover:shadow-lg'.split(' ');
  var FILTER_INACTIVE = 'border-2 border-primary/20 bg-transparent text-primary hover:bg-secondary'.split(' ');

  function setFilterActive(buttons, active) {
    buttons.forEach(function (b) {
      var isActive = b === active;
      FILTER_ACTIVE.forEach(function (c) { b.classList.toggle(c, isActive); });
      FILTER_INACTIVE.forEach(function (c) { b.classList.toggle(c, !isActive); });
    });
  }

  function initGalleryFilters() {
    if (document.querySelector('[data-course-filter]')) return; // courses page handled separately
    document.querySelectorAll('main .flex.flex-wrap.gap-2').forEach(function (group) {
      var buttons = Array.prototype.filter.call(group.children, function (el) {
        return el.tagName === 'BUTTON';
      });
      if (buttons.length < 2) return;
      buttons.forEach(function (b) {
        b.addEventListener('click', function () { setFilterActive(buttons, b); });
      });
    });
  }

  /* ---------------- Courses page filter + search ---------------- */
  function initCoursesPage() {
    var grid = document.querySelector('[data-course-grid]');
    if (!grid) return;
    var cards = Array.prototype.slice.call(grid.querySelectorAll('[data-course-card]'));
    var buttons = Array.prototype.slice.call(document.querySelectorAll('[data-course-filter]'));
    var searchInput = document.querySelector('[data-course-search]');
    var countEl = document.querySelector('[data-course-count]');
    var countLabelEl = document.querySelector('[data-course-count-label]');
    var emptyEl = document.querySelector('[data-course-empty]');
    var category = new URLSearchParams(location.search).get('category') || 'all';
    if (!buttons.some(function (b) { return b.getAttribute('data-course-filter') === category; })) category = 'all';
    var query = '';

    function apply() {
      var shown = 0;
      cards.forEach(function (card) {
        var okCat = category === 'all' || card.getAttribute('data-category') === category;
        var okQuery = !query || card.getAttribute('data-search').indexOf(query) !== -1;
        var show = okCat && okQuery;
        card.classList.toggle('hidden', !show);
        if (show) shown++;
      });
      if (countEl) countEl.textContent = shown;
      if (countLabelEl) countLabelEl.textContent = shown === 1 ? 'course' : 'courses';
      if (emptyEl) emptyEl.classList.toggle('hidden', shown !== 0);
      grid.classList.toggle('hidden', shown === 0);
      var activeBtn = buttons.filter(function (b) { return b.getAttribute('data-course-filter') === category; })[0];
      setFilterActive(buttons, activeBtn);
    }

    buttons.forEach(function (b) {
      b.addEventListener('click', function () {
        category = b.getAttribute('data-course-filter');
        apply();
      });
    });
    if (searchInput) {
      searchInput.addEventListener('input', function () {
        query = searchInput.value.trim().toLowerCase();
        apply();
      });
    }
    apply();
  }

  /* ---------------- Floating actions ---------------- */
  function initFloatingActions() {
    var wrap = document.querySelector('button[aria-label="Ask on WhatsApp"]');
    if (wrap) {
      var container = wrap.parentElement;
      var popup = null;
      wrap.addEventListener('click', function () {
        if (popup) { popup.remove(); popup = null; return; }
        popup = document.createElement('div');
        popup.className = 'mb-1 w-72 rounded-2xl border border-border bg-card p-4 shadow-2xl';
        popup.innerHTML =
          '<p class="mb-1 flex items-center gap-2 text-sm font-semibold"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles size-4 text-accent" aria-hidden="true"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg> Ask on WhatsApp</p>' +
          '<p class="mb-3 text-xs text-muted-foreground">Admissions, demo class, fees — we reply quickly during business hours.</p>' +
          '<a href="' + whatsappLink('Hi Excellence Academy! I have a question about admissions.') + '" target="_blank" rel="noopener noreferrer"><button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all bg-primary text-primary-foreground shadow-md hover:bg-[var(--blue-deep)] hover:shadow-lg h-11 px-5 py-2 w-full">Start WhatsApp Chat</button></a>';
        container.insertBefore(popup, container.firstChild);
      });
    }

    var topBtn = document.querySelector('button[aria-label="Back to top"]');
    if (topBtn) {
      topBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
      function onScroll() {
        var show = window.scrollY > 400;
        topBtn.classList.toggle('pointer-events-none', !show);
        topBtn.classList.toggle('opacity-0', !show);
        topBtn.classList.toggle('opacity-100', show);
      }
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }
  }

  /* ---------------- Forms ---------------- */
  function fieldValue(id) {
    var el = document.getElementById(id);
    return el ? el.value.trim() : '';
  }

  function initAdmissionForm() {
    var nameInput = document.getElementById('studentName');
    if (!nameInput) return;
    var form = nameInput.closest('form');
    if (!form) return;
    form.querySelectorAll('input, select').forEach(function (el) {
      if (el.id && el.id !== 'message') el.required = true;
    });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;
      var select = document.getElementById('preferredCourse');
      var courseName = select && select.selectedIndex > 0 ? select.options[select.selectedIndex].text : fieldValue('preferredCourse');
      var lines = [
        '*Admission Enquiry — ' + SITE.name + '*',
        '',
        '*Student Name:* ' + fieldValue('studentName'),
        "*Father's Name:* " + fieldValue('fatherName'),
        "*Mother's Name:* " + fieldValue('motherName'),
        '*Class:* ' + fieldValue('classLabel'),
        '*School:* ' + fieldValue('school'),
        '*Phone:* ' + fieldValue('phone'),
        '*WhatsApp:* ' + fieldValue('whatsapp'),
        '*Email:* ' + fieldValue('email'),
        '*Address:* ' + fieldValue('address'),
        '*Preferred Course:* ' + courseName
      ];
      var message = fieldValue('message');
      if (message) lines.push('*Message:* ' + message);
      window.open(whatsappLink(lines.join('\n')), '_blank');
    });
  }

  function initContactForm() {
    var nameInput = document.getElementById('contact-name');
    if (!nameInput) return;
    var form = nameInput.closest('form');
    if (!form) return;
    ['contact-name', 'contact-phone', 'contact-message'].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) el.required = true;
    });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;
      var lines = [
        'Hi ' + SITE.name + '!',
        'I would like to get in touch.',
        'Name: ' + fieldValue('contact-name'),
        'Phone: ' + fieldValue('contact-phone')
      ];
      var email = fieldValue('contact-email');
      if (email) lines.push('Email: ' + email);
      lines.push('Message: ' + fieldValue('contact-message'));
      window.open(whatsappLink(lines.join('\n')), '_blank');
    });
  }

  function initDemoBooking() {
    var buttons = document.querySelectorAll('button');
    Array.prototype.forEach.call(buttons, function (btn) {
      if (btn.textContent.trim() !== 'Confirm Demo Booking') return;
      btn.addEventListener('click', function () {
        var card = btn.closest('div');
        var inputs = card ? card.querySelectorAll('input') : [];
        if (inputs.length < 4) return;
        var msg = 'Free Demo Booking\nName: ' + inputs[0].value + '\nPhone: ' + inputs[1].value +
          '\nDate: ' + inputs[2].value + '\nTime: ' + inputs[3].value;
        window.open(whatsappLink(msg), '_blank');
      });
    });
  }

  function initNewsletter() {
    document.querySelectorAll('footer form').forEach(function (form) {
      var email = form.querySelector('input[type="email"]');
      if (!email) return;
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (!email.value.trim()) return;
        var done = document.createElement('p');
        done.className = 'rounded-xl bg-white/10 px-3 py-3 text-sm text-accent';
        done.textContent = 'Thanks for subscribing!';
        form.replaceWith(done);
      });
    });
  }

  function initAttendance() {
    var input = document.getElementById('studentId');
    if (!input) return;
    var form = input.closest('form');
    if (!form) return;
    var resultWrap = document.createElement('div');
    form.insertAdjacentElement('afterend', resultWrap);
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var id = input.value.trim().toUpperCase();
      if (!id) { resultWrap.innerHTML = ''; return; }
      var record = ATTENDANCE_DEMO[id];
      if (!record) {
        resultWrap.innerHTML = '<p class="mt-6 text-center text-muted-foreground">No record found for &quot;' + escapeHtml(input.value.trim()) + '&quot;. Use a sample ID above.</p>';
        return;
      }
      var present = record.rows.filter(function (r) { return r.status === 'Present'; }).length;
      var rowsHtml = record.rows.map(function (r) {
        var cls = r.status === 'Present'
          ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-400'
          : r.status === 'Late'
            ? 'bg-amber-500/15 text-amber-700 dark:text-amber-400'
            : 'bg-destructive/15 text-destructive';
        var dateText = new Date(r.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
        return '<tr class="border-b border-border last:border-0">' +
          '<td class="px-4 py-3">' + dateText + '</td>' +
          '<td class="px-4 py-3">' + r.subject + '</td>' +
          '<td class="px-4 py-3"><span class="inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ' + cls + '">' + r.status + '</span></td>' +
          '</tr>';
      }).join('');
      resultWrap.innerHTML =
        '<div class="mt-8">' +
        '<div class="mb-4 flex flex-wrap items-center justify-between gap-2">' +
        '<div><h2 class="font-display text-xl font-semibold">' + record.name + '</h2>' +
        '<p class="text-sm text-muted-foreground">' + record.classLabel + ' · ID ' + id + '</p></div>' +
        '<div class="inline-flex items-center rounded-full border border-gold/30 bg-gold-soft px-2.5 py-0.5 text-xs font-semibold text-accent-foreground">' + present + ' / ' + record.rows.length + ' present</div>' +
        '</div>' +
        '<div class="overflow-x-auto rounded-2xl border border-border">' +
        '<table class="w-full min-w-[480px] text-left text-sm">' +
        '<thead class="border-b border-border bg-muted/50"><tr>' +
        '<th class="px-4 py-3 font-semibold">Date</th><th class="px-4 py-3 font-semibold">Subject</th><th class="px-4 py-3 font-semibold">Status</th>' +
        '</tr></thead><tbody>' + rowsHtml + '</tbody></table></div></div>';
    });
  }

  function initLoginForms() {
    var mobile = document.getElementById('mobile');
    if (!mobile) return;
    var form = mobile.closest('form');
    if (!form) return;
    var isParent = location.pathname.indexOf('/login/parent') !== -1;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert(isParent
        ? 'Parent portal is not connected yet. Monthly reports are shared via WhatsApp and email for enrolled students.'
        : 'Student portal login is not connected yet. Use the Attendance demo or contact the institute for credentials.');
    });
  }

  /* ---------------- Batch countdown ---------------- */
  function initCountdown() {
    var labels = { Days: null, Hours: null, Mins: null, Secs: null };
    var found = 0;
    document.querySelectorAll('.min-w-20').forEach(function (tile) {
      var label = tile.querySelector('.text-xs');
      var value = tile.querySelector('.font-display');
      if (label && value && labels.hasOwnProperty(label.textContent.trim())) {
        labels[label.textContent.trim()] = value;
        found++;
      }
    });
    if (found < 4) return;
    var target = new Date('2026-04-01T00:00:00+05:30').getTime();
    function tick() {
      var diff = Math.max(0, target - Date.now());
      var days = Math.floor(diff / 86400000);
      var hours = Math.floor(diff / 3600000) % 24;
      var mins = Math.floor(diff / 60000) % 60;
      var secs = Math.floor(diff / 1000) % 60;
      labels.Days.textContent = days;
      labels.Hours.textContent = hours;
      labels.Mins.textContent = mins;
      labels.Secs.textContent = secs;
    }
    tick();
    setInterval(tick, 1000);
  }

  /* ---------------- Home score chart ---------------- */
  function initChart() {
    var container = document.querySelector('.recharts-responsive-container');
    if (!container) return;
    var data = [
      { month: 'Jul', score: 62 },
      { month: 'Aug', score: 68 },
      { month: 'Sep', score: 74 },
      { month: 'Oct', score: 79 },
      { month: 'Nov', score: 85 },
      { month: 'Dec', score: 91 }
    ];
    var w = 800;
    var h = 220;
    var pad = { top: 10, right: 16, bottom: 26, left: 36 };
    var minY = 50;
    var maxY = 100;
    function x(i) { return pad.left + (i * (w - pad.left - pad.right)) / (data.length - 1); }
    function y(v) { return pad.top + (h - pad.top - pad.bottom) * (1 - (v - minY) / (maxY - minY)); }
    var points = data.map(function (d, i) { return x(i) + ',' + y(d.score); }).join(' ');
    var area = pad.left + ',' + y(minY) + ' ' + points + ' ' + x(data.length - 1) + ',' + y(minY);
    var gridLines = [50, 60, 70, 80, 90, 100].map(function (v) {
      return '<line x1="' + pad.left + '" y1="' + y(v) + '" x2="' + (w - pad.right) + '" y2="' + y(v) + '" stroke="currentColor" stroke-opacity="0.15" stroke-dasharray="3 3"/>' +
        '<text x="' + (pad.left - 8) + '" y="' + (y(v) + 4) + '" text-anchor="end" font-size="11" fill="currentColor" fill-opacity="0.55">' + v + '</text>';
    }).join('');
    var monthLabels = data.map(function (d, i) {
      return '<text x="' + x(i) + '" y="' + (h - 6) + '" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.55">' + d.month + '</text>';
    }).join('');
    var dots = data.map(function (d, i) {
      return '<circle cx="' + x(i) + '" cy="' + y(d.score) + '" r="3" fill="#0b4f9c"/>';
    }).join('');
    container.innerHTML =
      '<svg viewBox="0 0 ' + w + ' ' + h + '" preserveAspectRatio="none" style="width:100%;height:100%" role="img" aria-label="Average batch score progression chart">' +
      '<defs><linearGradient id="scoreFill" x1="0" y1="0" x2="0" y2="1">' +
      '<stop offset="0%" stop-color="#0b4f9c" stop-opacity="0.35"/><stop offset="100%" stop-color="#0b4f9c" stop-opacity="0"/>' +
      '</linearGradient></defs>' +
      gridLines + monthLabels +
      '<polygon points="' + area + '" fill="url(#scoreFill)"/>' +
      '<polyline points="' + points + '" fill="none" stroke="#0b4f9c" stroke-width="2"/>' +
      dots +
      '</svg>';
  }

  /* ---------------- Boot ---------------- */
  function boot() {
    initTheme();
    initNavbar();
    initReveal();
    initCounters();
    initAccordions();
    initGalleryFilters();
    initCoursesPage();
    initFloatingActions();
    initAdmissionForm();
    initContactForm();
    initDemoBooking();
    initNewsletter();
    initAttendance();
    initLoginForms();
    initCountdown();
    initChart();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
