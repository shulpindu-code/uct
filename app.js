// Данные из вкладки «Общая схема (ЗНИ ПБиОТ)»
// Поле stage — этап, name — шаг, duration — колонка H (недели),
// importance — важность, parallel — можно делать параллельно
const RAW_DATA = [
  // Подготовительный
  { stage: "Подготовительный", name: "Построить/Скорректировать Vision продукта", duration: 3.0, importance: "Опциональный", parallel: true },
  { stage: "Подготовительный", name: "Сформировать драфт бэклога и дорожной карты. Оценка", duration: 1.0, importance: "—", parallel: false },
  { stage: "Подготовительный", name: "Выделение ресурсов", duration: 4.0, importance: "Обязательный", parallel: false },

  // Проработка аналитики
  { stage: "Проработка аналитики", name: "Сформировать бизнес требования", duration: 3.0, importance: "Обязательный", parallel: false },

  // Проработка реализации
  { stage: "Проработка реализации", name: "Согласовать инициативу с архитектурой", duration: 5.0, importance: "Обязательный", parallel: true },
  { stage: "Проработка реализации", name: "Определить критичность данных. Согласовать лист ИКИА", duration: 3.0, importance: "Обязательный", parallel: true },
  { stage: "Проработка реализации", name: "Получить требования со стороны ИБ", duration: 2.0, importance: "Обязательный", parallel: true },
  { stage: "Проработка реализации", name: "Проработка выделения инфраструктуры", duration: 12.0, importance: "Опциональный", parallel: false },

  // Реализация
  { stage: "Реализация", name: "Создать ЗНИ на команду СЛ исполнителя", duration: 1.0, importance: "Обязательный", parallel: true },
  { stage: "Реализация", name: "Разработка макетов, UI/UX тестирование, согласование", duration: 2.5, importance: "Опциональный", parallel: false },
  { stage: "Реализация", name: "Разработка/настройка функционала, доработка интеграций", duration: 8.0, importance: "Обязательный", parallel: false },
  { stage: "Реализация", name: "Внутреннее тестирование", duration: null, importance: "Обязательный", parallel: false },

  // Документация
  { stage: "Документация", name: "Разработка ПР по ИБ", duration: 6.0, importance: "Обязательный", parallel: true },
  { stage: "Документация", name: "Разработка ПР по интеграции", duration: 6.0, importance: "Опциональный", parallel: true },
  { stage: "Документация", name: "Спецификация на разработку", duration: 1.0, importance: "Обязательный", parallel: true },
  { stage: "Документация", name: "Разработка/обновление эксплуатационной документации", duration: 3.0, importance: "Обязательный", parallel: true },

  // Тестирование, исправление замечаний
  { stage: "Тестирование, исправление замечаний", name: "Внутреннее тестирование", duration: 2.0, importance: "Обязательный", parallel: false },
  { stage: "Тестирование, исправление замечаний", name: "ПСИ ИБ (подготовка)", duration: 3.0, importance: "Обязательный", parallel: false },
  { stage: "Тестирование, исправление замечаний", name: "ПСИ ИБ (проведение и согласование)", duration: 1.0, importance: "Обязательный", parallel: true },
  { stage: "Тестирование, исправление замечаний", name: "ПСИ с бизнесом", duration: 1.0, importance: "Обязательный", parallel: true },

  // Внедрение
  { stage: "Внедрение", name: "Перенос в продуктив", duration: 1.0, importance: "Обязательный", parallel: true },
  { stage: "Внедрение", name: "Закрытие", duration: 1.0, importance: "Обязательный", parallel: true },
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

// === Расчёт сводки ===
function computeSummary() {
  const valid = RAW_DATA.filter(r => r.duration != null);
  const total = valid.reduce((s, r) => s + r.duration, 0);
  const obligatory = valid.filter(r => r.importance === "Обязательный").reduce((s, r) => s + r.duration, 0);
  const optional = valid.filter(r => r.importance === "Опциональный").reduce((s, r) => s + r.duration, 0);
  const parallel = valid.filter(r => r.parallel).reduce((s, r) => s + r.duration, 0);
  return { total, obligatory, optional, parallel, count: valid.length };
}

// === Рендер сводки ===
function renderSummary() {
  const s = computeSummary();
  const el = document.getElementById("summary");
  el.innerHTML = `
    <div class="summary-card">
      <div class="label">Суммарная длительность</div>
      <div class="value">${fmt(s.total)} <small>нед.</small></div>
    </div>
    <div class="summary-card" style="border-left-color:#2563eb">
      <div class="label">Обязательные шаги</div>
      <div class="value">${fmt(s.obligatory)} <small>нед.</small></div>
    </div>
    <div class="summary-card" style="border-left-color:#f59e0b">
      <div class="label">Опциональные шаги</div>
      <div class="value">${fmt(s.optional)} <small>нед.</small></div>
    </div>
    <div class="summary-card" style="border-left-color:#10b981">
      <div class="label">Можно параллелить</div>
      <div class="value">${fmt(s.parallel)} <small>нед.</small></div>
    </div>
    <div class="summary-card" style="border-left-color:#64748b">
      <div class="label">Шагов с длительностью</div>
      <div class="value">${s.count} <small>из ${RAW_DATA.length}</small></div>
    </div>
  `;
}

// === Фильтрация и сортировка ===
function getProcessed() {
  let rows = RAW_DATA.filter(r => r.duration != null);
  if (!state.showOptional) {
    rows = rows.filter(r => r.importance !== "Опциональный");
  }
  return rows;
}

// Группировка по этапам
function groupByStage(rows) {
  const map = new Map();
  for (const r of rows) {
    if (!map.has(r.stage)) map.set(r.stage, []);
    map.get(r.stage).push(r);
  }
  return map;
}

// Сортировка этапов
function sortedStages(stages) {
  const arr = [...stages];
  if (state.sortMode === "duration") {
    const sums = arr.map(s => ({
      s,
      sum: RAW_DATA.filter(r => r.stage === s && r.duration != null)
        .reduce((a, r) => a + r.duration, 0)
    }));
    sums.sort((a, b) => b.sum - a.sum);
    return sums.map(x => x.s);
  }
  if (state.sortMode === "importance") {
    const rank = (s) => {
      const steps = RAW_DATA.filter(r => r.stage === s && r.duration != null);
      return steps.every(r => r.importance === "Обязательный") ? 0 : 1;
    };
    arr.sort((a, b) => rank(a) - rank(b));
    return arr;
  }
  // По порядку этапов
  arr.sort((a, b) => STAGE_ORDER.indexOf(a) - STAGE_ORDER.indexOf(b));
  return arr;
}

// Сортировка шагов внутри этапа
function sortSteps(steps) {
  const arr = [...steps];
  if (state.sortMode === "duration") arr.sort((a, b) => b.duration - a.duration);
  if (state.sortMode === "importance") {
    const rank = (r) => (r.importance === "Обязательный" ? 0 : 1);
    arr.sort((a, b) => rank(a) - rank(b));
  }
  return arr;
}

// === Рендер диаграммы ===
function renderGantt() {
  const el = document.getElementById("gantt");
  el.innerHTML = "";

  const rows = getProcessed();
  if (!rows.length) {
    el.innerHTML = `<div class="stage-block"><div class="stage-body" style="padding:20px;color:#64748b">Нет шагов для отображения с текущими фильтрами.</div></div>`;
    return;
  }

  const maxDuration = Math.max(...rows.map(r => r.duration));

  const map = groupByStage(rows);
  const stages = sortedStages(map.keys());

  // Режим «по этапам» — показываем только агрегаты
  if (state.viewMode === "stage") {
    const stageSums = stages.map(s => ({
      stage: s,
      sum: map.get(s).reduce((a, r) => a + r.duration, 0),
      count: map.get(s).length,
    }));
    const maxSum = Math.max(...stageSums.map(x => x.sum));
    el.innerHTML = stageSums.map(x => `
      <div class="stage-block">
        <div class="stage-header" style="cursor:default">
          <span class="stage-title">${x.stage} <small>(${x.count} шагов)</small></span>
          <span class="stage-total">${fmt(x.sum)} <small>нед.</small></span>
        </div>
        <div class="stage-body">
          <div class="step-row" style="grid-template-columns:1fr 70px">
            <div class="bar-container" style="height:26px">
              <div class="bar" style="width:${(x.sum / maxSum) * 100}%"></div>
            </div>
            <div class="step-duration">${fmt(x.sum)} <small>нед.</small></div>
          </div>
        </div>
      </div>
    `).join("");
    return;
  }

  // Режим «по шагам»
  for (const stage of stages) {
    const steps = sortSteps(map.get(stage));
    const stageSum = steps.reduce((a, r) => a + r.duration, 0);
    const collapsed = state.collapsed.has(stage);

    const block = document.createElement("div");
    block.className = "stage-block" + (collapsed ? " collapsed" : "");

    const header = document.createElement("div");
    header.className = "stage-header";
    header.innerHTML = `
      <span class="stage-title">${collapsed ? "▶" : "▼"} ${stage} <small>(${steps.length} шагов)</small></span>
      <span class="stage-total">${fmt(stageSum)} <small>нед.</small></span>
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

      const badgeClass = r.importance === "Опциональный" ? "опциональный" : "обязательный";
      const barClass = r.parallel ? "parallel" : (r.importance === "Опциональный" ? "опциональный" : "");
      const pct = (r.duration / maxDuration) * 100;

      row.innerHTML = `
        <div class="step-name">
          <span>${r.name}</span>
          ${r.importance === "Опциональный" ? `<span class="badge ${badgeClass}">опц.</span>` : ""}
          ${r.parallel ? `<span class="badge" style="background:#d1fae5;color:#065f46">∥</span>` : ""}
        </div>
        <div class="bar-container">
          <div class="bar ${barClass}" style="width:${pct}%">
            ${pct > 15 ? `<span class="bar-label">${fmt(r.duration)}</span>` : ""}
          </div>
        </div>
        <div class="step-duration">${fmt(r.duration)} <small>нед.</small></div>
      `;
      body.appendChild(row);
    }

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