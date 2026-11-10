// Данные из вкладки «Общая схема (ЗНИ ПБиОТ)»
// stage — этап, name — шаг, duration — колонка H (недели),
// importance — важность, parallel — колонка J ("Да" → true),
// speedup — колонка K «Как можно ускорить/автоматизировать»
const RAW_DATA = [
  // Подготовительный
  { stage: "Подготовительный", name: "Построить/Скорректировать Vision продукта", duration: 3.0, importance: "Опциональный", parallel: true,
    speedup: "Можно данный шаг не делать в случае маленьких/понятных разработок." },
  { stage: "Подготовительный", name: "Сформировать драфт бэклога и дорожной карты. Оценка", duration: 1.0, importance: "—", parallel: false,
    speedup: "Автоматизировать построение дорожной карты. Подготовить шаблон дорожной карты с типовыми шагами, их длительностью и артефактами — команде останется оценить только написание кода/выполнение настроек." },
  { stage: "Подготовительный", name: "Выделение ресурсов", duration: 4.0, importance: "Обязательный", parallel: false,
    speedup: "Автоматизировать построение дорожной карты. Подготовить шаблон дорожной карты с типовыми шагами, их длительностью и артефактами." },

  // Проработка аналитики
  { stage: "Проработка аналитики", name: "Сформировать бизнес требования", duration: 3.0, importance: "Обязательный", parallel: false,
    speedup: "Использовать внутренний шаблон БТ. Проработка по показателям ПБиОТ заняла 2 очные встречи — около 1,5 недель. БТ делаем на основании готовых прототипов." },

  // Проработка реализации
  { stage: "Проработка реализации", name: "Согласовать инициативу с архитектурой", duration: 5.0, importance: "Обязательный", parallel: true,
    speedup: "Проанализировать реализованные за последний год решения, выделить типовые запросы (например, мобильный сервис ПБиОТ), проработать совместно с архитектурой деревья принятия решений. Это позволит выходить на арх. оценку быстрее." },
  { stage: "Проработка реализации", name: "Определить критичность данных. Согласовать лист ИКИА", duration: 3.0, importance: "Обязательный", parallel: true,
    speedup: "Проработать для типовых решений совместно с ИБ деревья принятия решений. Класс критичности данных и требования будут формироваться автоматически по итогам заполнения дерева." },
  { stage: "Проработка реализации", name: "Получить требования со стороны ИБ", duration: 2.0, importance: "Обязательный", parallel: true,
    speedup: "Использовать типовой опросный лист ИКИА и шаблон запроса в Отдел процессов информационной безопасности." },
  { stage: "Проработка реализации", name: "Проработка выделения инфраструктуры", duration: 12.0, importance: "Опциональный", parallel: false,
    speedup: "За счёт подготовки дев-среды и автоматизации пайплайнов." },

  // Реализация
  { stage: "Реализация", name: "Создать ЗНИ на команду СЛ исполнителя", duration: 1.0, importance: "Обязательный", parallel: true,
    speedup: "Нет списка артефактов и их формата, которые в явном виде отражали бы потребность команды СЛ, на которую создаётся ЗНИ." },
  { stage: "Реализация", name: "Разработка макетов, UI/UX тестирование, согласование", duration: 2.5, importance: "Опциональный", parallel: false,
    speedup: "Автоматически формировать дизайн и кликабельный прототип от БТ." },
  { stage: "Реализация", name: "Разработка/настройка функционала, доработка интеграций", duration: 8.0, importance: "Обязательный", parallel: false,
    speedup: "Генерировать фронт и бэк на основании макетов и БТ." },
  { stage: "Реализация", name: "Внутреннее тестирование", duration: null, importance: "Обязательный", parallel: false,
    speedup: null },

  // Документация
  { stage: "Документация", name: "Разработка ПР по ИБ", duration: 6.0, importance: "Обязательный", parallel: true,
    speedup: "Большая часть требований по ИБ типовая. Можно предзаполнять ПР автоматически." },
  { stage: "Документация", name: "Разработка ПР по интеграции", duration: 6.0, importance: "Опциональный", parallel: true,
    speedup: null },
  { stage: "Документация", name: "Спецификация на разработку", duration: 1.0, importance: "Обязательный", parallel: true,
    speedup: "Типовой документ. Можно генерировать на основании проекта — возможно, сорскрафт сможет сам писать спецификацию на основании реализуемого решения." },
  { stage: "Документация", name: "Разработка/обновление эксплуатационной документации", duration: 3.0, importance: "Обязательный", parallel: true,
    speedup: "Типовой документ. Можно генерировать на основании проекта — возможно, сорскрафт сможет сам писать спецификацию на основании реализуемого решения." },

  // Тестирование, исправление замечаний
  { stage: "Тестирование, исправление замечаний", name: "Внутреннее тестирование", duration: 2.0, importance: "Обязательный", parallel: false,
    speedup: null },
  { stage: "Тестирование, исправление замечаний", name: "ПСИ ИБ (подготовка)", duration: 3.0, importance: "Обязательный", parallel: false,
    speedup: null },
  { stage: "Тестирование, исправление замечаний", name: "ПСИ ИБ (проведение и согласование)", duration: 1.0, importance: "Обязательный", parallel: true,
    speedup: null },
  { stage: "Тестирование, исправление замечаний", name: "ПСИ с бизнесом", duration: 1.0, importance: "Обязательный", parallel: true,
    speedup: null },

  // Внедрение
  { stage: "Внедрение", name: "Перенос в продуктив", duration: 1.0, importance: "Обязательный", parallel: true,
    speedup: null },
  { stage: "Внедрение", name: "Закрытие", duration: 1.0, importance: "Обязательный", parallel: true,
    speedup: null },
];

// Порядок этапов
const STAGE_ORDER = [
  "Подготовительный",
  "Проработка аналитики",
  "Проработка реализации",
  "Реализация",
  "Документация",
  "Тестирование, исправление замечаний",
  "Внедрение",
];

// Состояние
const state = {
  showOptional: true,
  viewMode: "step",   // "step" | "stage"
  sortMode: "stage",  // "stage" | "duration" | "importance"
  collapsed: new Set(),
};

const fmt = (n) => (n == null ? "—" : n.toFixed(1).replace(/\.0$/, ""));

// === Расчёт длительности этапа ===
function stageDuration(steps) {
  const valid = steps.filter(s => s.duration != null);
  if (!valid.length) return 0;
  const sequential = valid.filter(s => !s.parallel);
  const parallel   = valid.filter(s =>  s.parallel);
  const sumSeq = sequential.reduce((a, s) => a + s.duration, 0);
  const maxPar = parallel.length ? Math.max(...parallel.map(s => s.duration)) : 0;
  return sumSeq + maxPar;
}

function computeStageTotals() {
  const map = new Map();
  for (const r of RAW_DATA) {
    if (r.duration == null) continue;
    if (!map.has(r.stage)) map.set(r.stage, []);
    map.get(r.stage).push(r);
  }
  const totals = [];
  for (const [stage, steps] of map.entries()) {
    totals.push({ stage, steps: steps.length, duration: stageDuration(steps) });
  }
  totals.sort((a, b) => STAGE_ORDER.indexOf(a.stage) - STAGE_ORDER.indexOf(b.stage));
  return totals;
}

// === Сводка ===
function computeSummary() {
  const stageTotals = computeStageTotals();
  const totalByStages = stageTotals.reduce((a, s) => a + s.duration, 0);
  const valid = RAW_DATA.filter(r => r.duration != null);
  const totalSimple  = valid.reduce((s, r) => s + r.duration, 0);
  const obligatory   = valid.filter(r => r.importance === "Обязательный")
                             .reduce((s, r) => s + r.duration, 0);
  const parallelSum  = valid.filter(r => r.parallel)
                             .reduce((s, r) => s + r.duration, 0);
  return { totalByStages, totalSimple, obligatory, parallelSum, count: valid.length, stages: stageTotals.length };
}

function renderSummary() {
  const s = computeSummary();
  const el = document.getElementById("summary");
  el.innerHTML = `
    <div class="summary-card">
      <div class="label">Суммарная длительность (по этапам)</div>
      <div class="value">${fmt(s.totalByStages)} <small>нед.</small></div>
    </div>
    <div class="summary-card">
      <div class="label">Простая сумма всех шагов</div>
      <div class="value">${fmt(s.totalSimple)} <small>нед.</small></div>
    </div>
    <div class="summary-card">
      <div class="label">Обязательные шаги</div>
      <div class="value">${fmt(s.obligatory)} <small>нед.</small></div>
    </div>
    <div class="summary-card">
      <div class="label">Шагов с параллельностью</div>
      <div class="value">${fmt(s.parallelSum)} <small>нед. (в сумме)</small></div>
    </div>
    <div class="summary-card">
      <div class="label">Этапов / шагов</div>
      <div class="value">${s.stages} / ${s.count}</div>
    </div>
  `;
}

// === Фильтрация / сортировка ===
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
      const da = stageDuration(RAW_DATA.filter(r => r.stage === a && r.duration != null));
      const db = stageDuration(RAW_DATA.filter(r => r.stage === b && r.duration != null));
      return db - da;
    });
    return arr;
  }
  if (state.sortMode === "importance") {
    const rank = (s) => {
      const steps = RAW_DATA.filter(r => r.stage === s && r.duration != null);
      return steps.every(r => r.importance === "Обязательный") ? 0 : 1;
    };
    arr.sort((a, b) => rank(a) - rank(b));
    return arr;
  }
  arr.sort((a, b) => STAGE_ORDER.indexOf(a) - STAGE_ORDER.indexOf(b));
  return arr;
}

function sortSteps(steps) {
  const arr = [...steps];
  if (state.sortMode === "duration") arr.sort((a, b) => b.duration - a.duration);
  if (state.sortMode === "importance") {
    const rank = (r) => (r.importance === "Обязательный" ? 0 : 1);
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
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function showTooltip(target, data) {
  const el = ensureTooltip();

  const parts = [];
  parts.push(`<div class="tooltip-title">${escapeHtml(data.name)}</div>`);
  parts.push(`<div class="tooltip-meta">
    <span>Этап: ${escapeHtml(data.stage)}</span>
    <span>Длительность: <b>${fmt(data.duration)} нед.</b></span>
    <span>Важность: ${escapeHtml(data.importance || "—")}</span>
    <span>Параллельно: ${data.parallel ? "да" : "нет"}</span>
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

  // Если не помещается справа — прижимаем к правому краю
  if (left + tooltipRect.width > window.innerWidth - 12) {
    left = window.innerWidth - tooltipRect.width - 12 + window.scrollX;
  }
  if (left < 12) left = 12 + window.scrollX;

  // Если не помещается снизу — показываем сверху
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

  // Для мобильных — тап по строке
  rowEl.addEventListener("touchstart", (e) => {
    if (e.touches.length === 1) showTooltip(rowEl, data);
  }, { passive: true });
}

window.addEventListener("scroll", () => { if (tooltipEl) hideTooltip(); }, { passive: true });
window.addEventListener("resize", () => { if (tooltipEl) hideTooltip(); });

// === Рендер диаграммы ===
function renderGantt() {
  const el = document.getElementById("gantt");
  el.innerHTML = "";
  hideTooltip();

  const rows = getProcessed();
  if (!rows.length) {
    el.innerHTML = `<div class="stage-block"><div class="stage-body" style="padding:20px;color:#64748b">Нет шагов для отображения с текущими фильтрами.</div></div>`;
    return;
  }

  const map = groupByStage(rows);
  const stages = sortedStages(map.keys());

  let maxScale;
  if (state.viewMode === "stage") {
    maxScale = Math.max(...stages.map(s => stageDuration(map.get(s))), 0.1);
  } else {
    maxScale = Math.max(...rows.map(r => r.duration), 0.1);
  }

  if (state.viewMode === "stage") {
    el.innerHTML = stages.map(stage => {
      const steps = map.get(stage);
      const dur = stageDuration(steps);
      const hasParallel = steps.some(s => s.parallel);
      const hasOptional = steps.some(s => s.importance === "Опциональный");
      const barClass = hasParallel ? "parallel" : (hasOptional ? "опциональный" : "");
      const pct = (dur / maxScale) * 100;
      const seq = steps.filter(s => !s.parallel).reduce((a, s) => a + s.duration, 0);
      const par = steps.filter(s =>  s.parallel).reduce((a, s) => Math.max(a, s.duration), 0);
      const breakdown = hasParallel
        ? `посл. ${fmt(seq)} + пар. ${fmt(par)}`
        : `сумма ${fmt(seq)}`;

      return `
        <div class="stage-block">
          <div class="stage-header" style="cursor:default">
            <span class="stage-title">${stage} <small>(${steps.length} шагов)</small></span>
            <span class="stage-total">${fmt(dur)} <small>нед.</small></span>
          </div>
          <div class="stage-body">
            <div class="step-row" style="grid-template-columns:1fr 90px">
              <div class="bar-container" style="height:28px">
                <div class="bar ${barClass}" style="width:${pct}%">
                  ${pct > 12 ? `<span class="bar-label">${fmt(dur)}</span>` : ""}
                </div>
              </div>
              <div class="step-duration">${fmt(dur)} <small>нед.</small></div>
            </div>
            <div class="step-row" style="grid-template-columns:1fr; border-bottom:none; padding-top:0">
              <div class="note" style="font-size:0.9rem; border-left-color:#ff6b35">${breakdown}</div>
            </div>
          </div>
        </div>
      `;
    }).join("");
    return;
  }

  for (const stage of stages) {
    const steps = sortSteps(map.get(stage));
    const dur = stageDuration(steps);
    const collapsed = state.collapsed.has(stage);

    const block = document.createElement("div");
    block.className = "stage-block" + (collapsed ? " collapsed" : "");

    const header = document.createElement("div");
    header.className = "stage-header";
    header.innerHTML = `
      <span class="stage-title">${collapsed ? "▶" : "▼"} ${stage} <small>(${steps.length} шагов)</small></span>
      <span class="stage-total">${fmt(dur)} <small>нед.</small></span>
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
      const pct = (r.duration / maxScale) * 100;

      row.innerHTML = `
        <div class="step-name">
          <span>${r.name}</span>
          ${r.importance === "Опциональный" ? `<span class="badge ${badgeClass}">опц.</span>` : ""}
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

    const seq = steps.filter(s => !s.parallel).reduce((a, s) => a + s.duration, 0);
    const par = steps.filter(s =>  s.parallel).reduce((a, s) => Math.max(a, s.duration), 0);
    const hasParallel = steps.some(s => s.parallel);
    const footer = document.createElement("div");
    footer.className = "step-row";
    footer.style.gridTemplateColumns = "1fr";
    footer.style.background = "#e8d5a8";
    footer.innerHTML = `
      <div class="note" style="border-left-color:#ff6b35; font-size:0.95rem">
        <b>Длительность этапа:</b> ${fmt(dur)} нед. —
        ${hasParallel
          ? `последовательные ${fmt(seq)} + макс. из параллельных ${fmt(par)}`
          : `сумма последовательных шагов`}
      </div>
    `;
    body.appendChild(footer);

    block.appendChild(body);
    el.appendChild(block);
  }
}

// === Инициализация ===
function init() {
  renderSummary();
  renderGantt();

  document.getElementById("filterOptional").addEventListener("change", (e) => {
    state.showOptional = e.target.checked;
    renderSummary();
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
