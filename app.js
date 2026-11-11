// Данные из вкладки «Общая схема (ЗНИ ПБиОТ)»
const RAW_DATA = [
  // Подготовительный
  { stage: "Подготовительный", name: "Построить/Скорректировать Vision продукта", duration: 3.0, optDuration: 0.0, importance: "Опциональный", parallel: true,
    speedup: "Можно данный шаг не делать в случае маленьких/понятных разработок." },
  { stage: "Подготовительный", name: "Сформировать драфт бэклога и дорожной карты. Оценка", duration: 1.0, optDuration: 0.1, importance: "—", parallel: false,
    speedup: "Автоматизировать построение дорожной карты. Подготовить шаблон дорожной карты с типовыми шагами, их длительностью и артефактами — команде останется оценить только написание кода/выполнение настроек." },
  { stage: "Подготовительный", name: "Выделение ресурсов", duration: 4.0, optDuration: 1.0, importance: "Обязательный", parallel: false,
    speedup: "Автоматизировать построение дорожной карты. Подготовить шаблон дорожной карты с типовыми шагами, их длительностью и артефактами." },

  // Проработка аналитики
  { stage: "Проработка аналитики", name: "Сформировать бизнес требования", duration: 3.0, optDuration: 1.5, importance: "Обязательный", parallel: false,
    speedup: "Использовать внутренний шаблон БТ. Проработка по показателям ПБиОТ заняла 2 очные встречи — около 1,5 недель. БТ делаем на основании готовых прототипов." },

  // Проработка реализации
  { stage: "Проработка реализации", name: "Согласовать инициативу с архитектурой", duration: 5.0, optDuration: 1.0, importance: "Обязательный", parallel: true,
    speedup: "Проанализировать реализованные за последний год решения, выделить типовые запросы (например, мобильный сервис ПБиОТ), проработать совместно с архитектурой деревья принятия решений. Это позволит выходить на арх. оценку быстрее." },
  { stage: "Проработка реализации", name: "Определить критичность данных. Согласовать лист ИКИА", duration: 3.0, optDuration: 0.5, importance: "Обязательный", parallel: true,
    speedup: "Проработать для типовых решений совместно с ИБ деревья принятия решений. Класс критичности данных и требования будут формироваться автоматически по итогам заполнения дерева." },
  { stage: "Проработка реализации", name: "Получить требования со стороны ИБ", duration: 2.0, optDuration: 1.0, importance: "Обязательный", parallel: true,
    speedup: "Использовать типовой опросный лист ИКИА и шаблон запроса в Отдел процессов информационной безопасности." },
  { stage: "Проработка реализации", name: "Проработка выделения инфраструктуры", duration: 12.0, optDuration: null, importance: "Опциональный", parallel: false,
    speedup: "За счёт подготовки дев-среды и автоматизации пайплайнов." },

  // Реализация
  { stage: "Реализация", name: "Создать ЗНИ на команду СЛ исполнителя", duration: 1.0, optDuration: 1.0, importance: "Обязательный", parallel: true,
    speedup: "Нет списка артефактов и их формата, которые в явном виде отражали бы потребность команды СЛ, на которую создаётся ЗНИ." },
  { stage: "Реализация", name: "Разработка макетов, UI/UX тестирование, согласование", duration: 2.5, optDuration: 1.0, importance: "Опциональный", parallel: false,
    speedup: "Автоматически формировать дизайн и кликабельный прототип от БТ." },
  { stage: "Реализация", name: "Разработка/настройка функционала, доработка интеграций", duration: 8.0, optDuration: 4.0, importance: "Обязательный", parallel: false,
    speedup: "Генерировать фронт и бэк на основании макетов и БТ." },
  { stage: "Реализация", name: "Внутреннее тестирование", duration: null, optDuration: null, importance: "Обязательный", parallel: false,
    speedup: null },

  // Документация
  { stage: "Документация", name: "Разработка ПР по ИБ", duration: 6.0, optDuration: 2.0, importance: "Обязательный", parallel: true,
    speedup: "Большая часть требований по ИБ типовая. Можно предзаполнять ПР автоматически." },
  { stage: "Документация", name: "Разработка ПР по интеграции", duration: 6.0, optDuration: 6.0, importance: "Опциональный", parallel: true,
    speedup: null },
  { stage: "Документация", name: "Спецификация на разработку", duration: 1.0, optDuration: 1.0, importance: "Обязательный", parallel: true,
    speedup: "Типовой документ. Можно генерировать на основании проекта — возможно, сорскрафт сможет сам писать спецификацию на основании реализуемого решения." },
  { stage: "Документация", name: "Разработка/обновление эксплуатационной документации", duration: 3.0, optDuration: 1.0, importance: "Обязательный", parallel: true,
    speedup: "Типовой документ. Можно генерировать на основании проекта — возможно, сорскрафт сможет сам писать спецификацию на основании реализуемого решения." },

  // Тестирование, исправление замечаний
  { stage: "Тестирование, исправление замечаний", name: "Внутреннее тестирование", duration: 2.0, optDuration: 2.0, importance: "Обязательный", parallel: false,
    speedup: null },
  { stage: "Тестирование, исправление замечаний", name: "ПСИ ИБ (подготовка)", duration: 3.0, optDuration: null, importance: "Обязательный", parallel: false,
    speedup: null },
  { stage: "Тестирование, исправление замечаний", name: "ПСИ ИБ (проведение и согласование)", duration: 1.0, optDuration: 1.0, importance: "Обязательный", parallel: true,
    speedup: null },
  { stage: "Тестирование, исправление замечаний", name: "ПСИ с бизнесом", duration: 1.0, optDuration: 1.0, importance: "Обязательный", parallel: true,
    speedup: null },

  // Внедрение
  { stage: "Внедрение", name: "Перенос в продуктив", duration: 1.0, optDuration: 1.0, importance: "Обязательный", parallel: true,
    speedup: null },
  { stage: "Внедрение", name: "Закрытие", duration: 1.0, optDuration: 1.0, importance: "Обязательный", parallel: true,
    speedup: null },
];

const STAGE_ORDER = [
  "Подготовительный",
  "Проработка аналитики",
  "Проработка реализации",
  "Реализация",
  "Документация",
  "Тестирование, исправление замечаний",
  "Внедрение",
];

const state = {
  showOptional: true,
  viewMode: "step",
  sortMode: "stage",
  collapsed: new Set(),
  currentChartSlide: 0,
};

const fmt = (n) => (n == null ? "—" : n.toFixed(1).replace(/\.0$/, ""));

function stepDuration(step, mode) {
  if (mode === "optimized") {
    if (step.optDuration != null) return step.optDuration;
    return step.duration;
  }
  return step.duration;
}

function isMandatory(step) {
  return step.importance === "Обязательный";
}

// === Логика расчёта: Критический путь (Обзор) ===
function stageDuration(steps, mode = "base") {
  const valid = steps
    .filter(isMandatory)
    .map(s => ({ ...s, _d: stepDuration(s, mode) }))
    .filter(s => s._d != null);

  if (!valid.length) return 0;

  const parallel   = valid.filter(s =>  s.parallel);
  const sequential = valid.filter(s => !s.parallel);

  if (parallel.length && !sequential.length) {
    return Math.max(...parallel.map(s => s._d));
  }
  return sequential.reduce((a, s) => a + s._d, 0);
}

// === Логика расчёта: Объём трудозатрат (Простая сумма) ===
function stageDurationEffort(steps, mode = "base") {
  const valid = steps
    .filter(isMandatory)
    .map(s => ({ ...s, _d: stepDuration(s, mode) }))
    .filter(s => s._d != null);

  return valid.reduce((a, s) => a + s._d, 0);
}

// === Сводка ===
function computeSummary() {
  const map = new Map();
  for (const r of RAW_DATA) {
    if (r.duration == null) continue;
    if (!map.has(r.stage)) map.set(r.stage, []);
    map.get(r.stage).push(r);
  }

  let totalBase = 0;
  let totalOpt = 0;
  for (const [stage, steps] of map.entries()) {
    totalBase += stageDuration(steps, "base");
    totalOpt += stageDuration(steps, "optimized");
  }

  const mandatory = RAW_DATA.filter(r => isMandatory(r) && r.duration != null);
  
  return {
    totalByStages: totalBase,
    totalOptByStages: totalOpt,
    mandatoryCount: mandatory.length,
    parallelMandatory: mandatory.filter(r => r.parallel).length,
    count: RAW_DATA.filter(r => r.duration != null).length,
    stages: map.size,
  };
}

function renderSummary() {
  const s = computeSummary();
  const el = document.getElementById("summary");
  const saving = s.totalByStages - s.totalOptByStages;
  const savingPct = s.totalByStages > 0 ? (saving / s.totalByStages) * 100 : 0;

  el.innerHTML = `
    <div class="summary-card">
      <div class="label">Суммарная длительность</div>
      <div class="value">${fmt(s.totalByStages)} <small>нед.</small></div>
    </div>
    <div class="summary-card">
      <div class="label">Суммарная длительность (опт)</div>
      <div class="value">${fmt(s.totalOptByStages)} <small>нед.</small></div>
    </div>
    <div class="summary-card">
      <div class="label">Экономия при оптимизации</div>
      <div class="value">${fmt(saving)} <small>нед. (−${savingPct.toFixed(0)}%)</small></div>
    </div>
    <div class="summary-card">
      <div class="label">Обязательных шагов (из них параллельных)</div>
      <div class="value">${s.mandatoryCount} <small>(${s.parallelMandatory} паралл.)</small></div>
    </div>
  `;
}

// === Фильтрация / сортировка (для списка этапов) ===
function getProcessed() {
  let rows = RAW_DATA.filter(r => r.duration != null);
  if (!state.showOptional) rows = rows.filter(r => r.importance !== "Опциональный");
  return rows;
}

function groupByStage(rows) {
  const map = new Map();
  for (const r of rows) {
    if (!map.has(r.stage)) map.set(r.stage, []);
    map.get(r.stage).push(r);
  }
  return map;
}

function sortedStages(stages) {
  const arr = [...stages];
  if (state.sortMode === "duration") {
    arr.sort((a, b) => {
      const da = stageDuration(RAW_DATA.filter(r => r.stage === a), "base");
      const db = stageDuration(RAW_DATA.filter(r => r.stage === b), "base");
      return db - da;
    });
  } else if (state.sortMode === "importance") {
    const rank = (s) => {
      const steps = RAW_DATA.filter(r => r.stage === s && isMandatory(r) && r.duration != null);
      return steps.length ? 0 : 1;
    };
    arr.sort((a, b) => rank(a) - rank(b));
  } else {
    arr.sort((a, b) => STAGE_ORDER.indexOf(a) - STAGE_ORDER.indexOf(b));
  }
  return arr;
}

function sortSteps(steps) {
  const arr = [...steps];
  if (state.sortMode === "duration") arr.sort((a, b) => (b.duration ?? 0) - (a.duration ?? 0));
  if (state.sortMode === "importance") {
    const rank = (r) => (isMandatory(r) ? 0 : 1);
    arr.sort((a, b) => rank(a) - rank(b));
  }
  return arr;
}

// === Тултип ===
let tooltipEl = null;
function ensureTooltip() {
  if (tooltipEl) return tooltipEl;
  tooltipEl = document.createElement("div");
  tooltipEl.className = "tooltip";
  tooltipEl.setAttribute("role", "tooltip");
  document.body.appendChild(tooltipEl);
  return tooltipEl;
}
function escapeHtml(str) {
  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function showTooltip(target, data) {
  const el = ensureTooltip();
  const parts = [];
  parts.push(`<div class="tooltip-title">${escapeHtml(data.name)}</div>`);
  parts.push(`<div class="tooltip-meta">
    <span>Этап: ${escapeHtml(data.stage)}</span>
    <span>Длительность (H): <b>${fmt(data.duration)} нед.</b></span>
    <span>Оптимизированная (M): <b>${data.optDuration != null ? fmt(data.optDuration) : "— (берётся из H)"} нед.</b></span>
    <span>Важность: ${escapeHtml(data.importance || "—")}</span>
    <span>Параллельно: ${data.parallel ? "да" : "нет"}</span>
    <span>Учитывается в расчёте: <b>${isMandatory(data) ? "да" : "нет (только обязательные)"}</b></span>
  </div>`);

  if (data.speedup && data.speedup.trim()) {
    parts.push(`<div class="tooltip-section">
      <div class="tooltip-section-title">⚡ Как можно ускорить / автоматизировать</div>
      <div class="tooltip-text">${escapeHtml(data.speedup)}</div>
    </div>`);
  } else {
    parts.push(`<div class="tooltip-section tooltip-empty">
      <div class="tooltip-section-title">⚡ Как можно ускорить / автоматизировать</div>
      <div class="tooltip-text">Для этого шага предложений по ускорению в исходной таблице нет.</div>
    </div>`);
  }
  el.innerHTML = parts.join("");
  el.classList.add("visible");
  positionTooltip(target);
}
function positionTooltip(target) {
  const el = tooltipEl;
  if (!el) return;
  const rect = target.getBoundingClientRect();
  const tooltipRect = el.getBoundingClientRect();
  const gap = 12;
  let top = rect.bottom + gap + window.scrollY;
  let left = rect.left + window.scrollX;
  if (left + tooltipRect.width > window.innerWidth - 12) left = window.innerWidth - tooltipRect.width - 12 + window.scrollX;
  if (left < 12) left = 12 + window.scrollX;
  if (rect.bottom + gap + tooltipRect.height > window.innerHeight) {
    top = rect.top - tooltipRect.height - gap + window.scrollY;
    el.classList.add("above");
  } else {
    el.classList.remove("above");
  }
  el.style.top = top + "px";
  el.style.left = left + "px";
}
function hideTooltip() {
  if (tooltipEl) tooltipEl.classList.remove("visible");
}
function attachTooltip(rowEl, data) {
  rowEl.addEventListener("mouseenter", () => showTooltip(rowEl, data));
  rowEl.addEventListener("mouseleave", hideTooltip);
  rowEl.addEventListener("focus", () => showTooltip(rowEl, data));
  rowEl.addEventListener("blur", hideTooltip);
  rowEl.addEventListener("touchstart", (e) => {
    if (e.touches.length === 1) showTooltip(rowEl, data);
  }, { passive: true });
}
window.addEventListener("scroll", () => { if (tooltipEl) hideTooltip(); }, { passive: true });
window.addEventListener("resize", () => { if (tooltipEl) hideTooltip(); });

// === ДИАГРАММЫ ГАНТА (карусель) ===
function renderGanttCharts() {
  const map = new Map();
  for (const r of RAW_DATA) {
    if (r.duration == null) continue;
    if (!map.has(r.stage)) map.set(r.stage, []);
    map.get(r.stage).push(r);
  }
  const stages = STAGE_ORDER.filter(s => map.has(s));

  // 1. Данные для Обзора
  const overviewRows = stages.map(stage => {
    const steps = map.get(stage);
    return {
      stage,
      steps,
      durBase: stageDuration(steps, "base"),
      durOpt: stageDuration(steps, "optimized"),
      hasParallel: steps.filter(isMandatory).some(s => s.parallel),
      hasOnlyOptional: !steps.some(isMandatory)
    };
  });

  // 2. Данные для Объема трудозатрат
  const effortRows = stages.map(stage => {
    const steps = map.get(stage);
    return {
      stage,
      steps,
      durBase: stageDurationEffort(steps, "base"),
      durOpt: stageDurationEffort(steps, "optimized")
    };
  });

  const buildChartHTML = (rows, totalBase, totalOpt, isEffort) => {
    const totalSafe = totalBase || 1;
    let cumulative = 0;
    
    const bars = rows.map(r => {
      const leftPct = (cumulative / totalSafe) * 100;
      const widthPct = (r.durBase / totalSafe) * 100;
      cumulative += r.durBase;
      return { ...r, leftPct, widthPct };
    });

    const tickCount = 10;
    const ticks = [];
    for (let i = 0; i <= tickCount; i++) {
      ticks.push((totalBase / tickCount * i).toFixed(1).replace(/\.0$/, ""));
    }

    return `
      <div class="gantt-scale">
        <div class="gantt-scale-label">Этап / недели</div>
        <div class="gantt-scale-ticks">${ticks.map(t => `<span>${t}</span>`).join("")}</div>
      </div>
      ${bars.map(b => `
        <div class="gantt-chart-row">
          <div class="gantt-chart-row-label">
            <span>${b.stage}</span>
            <small>${fmt(b.durBase)} нед.${Math.abs(b.durBase - b.durOpt) > 0.001 ? ` → ${fmt(b.durOpt)} (опт.)` : ""}</small>
          </div>
          <div class="gantt-chart-row-track">
            <div class="gantt-chart-bar ${isEffort ? 'effort' : (b.hasParallel ? 'parallel' : '')} ${b.hasOnlyOptional ? 'optional' : ''}" 
                 style="left:${b.leftPct}%; width:${Math.max(b.widthPct, 0.5)}%;"
                 title="${b.stage}: ${fmt(b.durBase)} нед.">
              ${b.widthPct > 6 ? `<span class="gantt-chart-bar-label">${fmt(b.durBase)}</span>` : ""}
            </div>
          </div>
        </div>
      `).join("")}
      <div class="gantt-chart-total">
        <span>Итого по всем этапам</span>
        <span class="gantt-chart-total-value">${fmt(totalBase)} нед.${Math.abs(totalBase - totalOpt) > 0.001 ? ` (опт. ${fmt(totalOpt)})` : ""}</span>
      </div>
    `;
  };

  const sumOverviewBase = overviewRows.reduce((a, r) => a + r.durBase, 0);
  const sumOverviewOpt = overviewRows.reduce((a, r) => a + r.durOpt, 0);
  const sumEffortBase = effortRows.reduce((a, r) => a + r.durBase, 0);
  const sumEffortOpt = effortRows.reduce((a, r) => a + r.durOpt, 0);

  document.getElementById("ganttChartOverview").innerHTML = buildChartHTML(overviewRows, sumOverviewBase, sumOverviewOpt, false);
  document.getElementById("ganttChartEffort").innerHTML = buildChartHTML(effortRows, sumEffortBase, sumEffortOpt, true);

  initCarousel();
}

function initCarousel() {
  const slider = document.getElementById("chartSlider");
  const prevBtn = document.getElementById("chartPrev");
  const nextBtn = document.getElementById("chartNext");
  const dotsContainer = document.getElementById("chartDots");
  if (!slider || !dotsContainer) return;

  const slides = slider.querySelectorAll(".gantt-chart-slide");
  dotsContainer.innerHTML = "";

  slides.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.className = "gantt-chart-dot" + (i === state.currentChartSlide ? " active" : "");
    dot.setAttribute("aria-label", `Слайд ${i + 1}`);
    dot.addEventListener("click", () => {
      slider.scrollTo({ left: slider.clientWidth * i, behavior: "smooth" });
    });
    dotsContainer.appendChild(dot);
  });

  const updateNav = () => {
    // Вычисляем текущий слайд на основе скролла
    const slideWidth = slider.clientWidth;
    if (slideWidth === 0) return;
    const index = Math.round(slider.scrollLeft / slideWidth);
    
    state.currentChartSlide = index;
    
    dotsContainer.querySelectorAll(".gantt-chart-dot").forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
    
    if (prevBtn) prevBtn.disabled = index === 0;
    if (nextBtn) nextBtn.disabled = index === slides.length - 1;
  };

  slider.addEventListener("scroll", updateNav, { passive: true });
  
  if (prevBtn) {
    prevBtn.onclick = () => {
      const index = Math.max(0, state.currentChartSlide - 1);
      slider.scrollTo({ left: slider.clientWidth * index, behavior: "smooth" });
    };
  }
  if (nextBtn) {
    nextBtn.onclick = () => {
      const index = Math.min(slides.length - 1, state.currentChartSlide + 1);
      slider.scrollTo({ left: slider.clientWidth * index, behavior: "smooth" });
    };
  }

  setTimeout(updateNav, 100);
}

// === СПИСОК ЭТАПОВ ===
function renderGantt() {
  const el = document.getElementById("gantt");
  el.innerHTML = "";
  hideTooltip();

  const rows = getProcessed();
  if (!rows.length) {
    el.innerHTML = `<div class="stage-block"><div class="stage-body" style="padding:20px;color:#64748b">Нет шагов для отображения.</div></div>`;
    return;
  }

  const map = groupByStage(rows);
  const stages = sortedStages(map.keys());
  const maxScale = state.viewMode === "stage" 
    ? Math.max(...stages.map(s => stageDuration(map.get(s), "base")), 0.1)
    : Math.max(...rows.map(r => r.duration ?? 0), 0.1);

  if (state.viewMode === "stage") {
    el.innerHTML = stages.map(stage => {
      const steps = map.get(stage);
      const durBase = stageDuration(steps, "base");
      const durOpt  = stageDuration(steps, "optimized");
      const mandatory = steps.filter(isMandatory);
      const hasParallelMandatory = mandatory.some(s => s.parallel);
      const pct = (durBase / maxScale) * 100;
      const pctOpt = (durOpt / maxScale) * 100;
      const hasOptDiff = Math.abs(durBase - durOpt) > 0.001;

      return `
        <div class="stage-block">
          <div class="stage-header" style="cursor:default">
            <span class="stage-title">${stage} <small>(${mandatory.length} обяз. из ${steps.length})</small></span>
            <span class="stage-total">${fmt(durBase)} <small>нед.</small></span>
          </div>
          <div class="stage-body">
            <div class="step-row" style="grid-template-columns:1fr 90px">
              <div class="bar-container" style="height:28px">
                <div class="bar ${hasParallelMandatory ? "parallel" : ""}" style="width:${pct}%">
                  ${pct > 12 ? `<span class="bar-label">${fmt(durBase)}</span>` : ""}
                </div>
              </div>
              <div class="step-duration">${fmt(durBase)} <small>нед.</small></div>
            </div>
            ${hasOptDiff ? `
            <div class="step-row" style="grid-template-columns:1fr 90px">
              <div class="bar-container" style="height:28px">
                <div class="bar" style="width:${pctOpt}%; background:var(--teal)">
                  ${pctOpt > 12 ? `<span class="bar-label">${fmt(durOpt)}</span>` : ""}
                </div>
              </div>
              <div class="step-duration">${fmt(durOpt)} <small>нед. (опт.)</small></div>
            </div>` : ""}
          </div>
        </div>
      `;
    }).join("");
    return;
  }

  for (const stage of stages) {
    const steps = sortSteps(map.get(stage));
    const durBase = stageDuration(steps, "base");
    const collapsed = state.collapsed.has(stage);
    const mandatorySteps = steps.filter(isMandatory);

    const block = document.createElement("div");
    block.className = "stage-block" + (collapsed ? " collapsed" : "");

    const header = document.createElement("div");
    header.className = "stage-header";
    header.innerHTML = `
      <span class="stage-title">${collapsed ? "▶" : "▼"} ${stage} <small>(${mandatorySteps.length} обяз. из ${steps.length})</small></span>
      <span class="stage-total">${fmt(durBase)} <small>нед.</small></span>
    `;
    header.addEventListener("click", () => {
      if (state.collapsed.has(stage)) state.collapsed.delete(stage);
      else state.collapsed.add(stage);
      renderGantt();
    });
    block.appendChild(header);

    const body = document.createElement("div");
    body.className = "stage-body";

    for (const r of steps) {
      const row = document.createElement("div");
      row.className = "step-row";
      row.tabIndex = 0;
      if (r.speedup && r.speedup.trim()) row.classList.add("has-speedup");

      const badgeClass = r.importance === "Опциональный" ? "опциональный" : "обязательный";
      const barClass = r.parallel ? "parallel" : (r.importance === "Опциональный" ? "опциональный" : "");
      const pct = ((r.duration ?? 0) / maxScale) * 100;

      row.innerHTML = `
        <div class="step-name">
          <span>${r.name}</span>
          ${r.importance === "Опциональный" ? `<span class="badge ${badgeClass}">опц.</span>` : ""}
          ${r.importance === "—" ? `<span class="badge" style="background:#b8a888;color:#2b1d0e">—</span>` : ""}
          ${r.parallel ? `<span class="badge" style="background:#2a9d8f;color:#f4e4c1">∥ паралл.</span>` : ""}
          ${r.speedup && r.speedup.trim() ? `<span class="speedup-icon" title="Есть предложение по ускорению">⚡</span>` : ""}
        </div>
        <div class="bar-container">
          <div class="bar ${barClass}" style="width:${pct}%">
            ${pct > 15 ? `<span class="bar-label">${fmt(r.duration)}</span>` : ""}
          </div>
        </div>
        <div class="step-duration">${fmt(r.duration)} <small>нед.</small></div>
      `;
      attachTooltip(row, r);
      body.appendChild(row);
    }
    block.appendChild(body);
    el.appendChild(block);
  }
}

// === Инициализация ===
function init() {
  renderSummary();
  renderGanttCharts();
  renderGantt();

  document.getElementById("filterOptional").addEventListener("change", (e) => {
    state.showOptional = e.target.checked;
    renderGantt();
  });

  document.getElementById("viewMode").addEventListener("change", (e) => {
    state.viewMode = e.target.value;
    renderGantt();
  });

  document.getElementById("sortMode").addEventListener("change", (e) => {
    state.sortMode = e.target.value;
    renderGantt();
  });
}

document.addEventListener("DOMContentLoaded", init);
