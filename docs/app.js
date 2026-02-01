const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const translations = {
  en: {
    "meta.title": "Pockex — cash desk and exchange in one screen",
    "meta.description": "Pockex — a cash desk and accounting for exchange operations: rates, trades, clients, and balances in one interface.",
    "nav.features": "Features",
    "nav.workflow": "Workflow",
    "nav.teams": "Who it's for",
    "nav.faq": "FAQ",
    "nav.download": "Download",
    "nav.menu": "Open menu",
    "nav.main": "Main menu",
    "lang.button": "Select language",
    "lang.menu": "Language selection",
    "hero.eyebrow": "Pockex · cash desk & exchange",
    "hero.title": "One screen for rates, trades, and cash",
    "hero.lead": "Speed up exchange desk work: rates, buy/sell, cross exchange, clients, and balances — all at hand, without switching or spreadsheet chaos.",
    "hero.badgePlay": "Get it on Google Play",
    "hero.badgeAppStore": "Download on the App Store",
    "hero.badgeSoon": "Coming soon",
    "hero.demo": "Request a demo",
    "hero.chip1": "Fast trade input",
    "hero.chip2": "Cash control",
    "hero.chip3": "Rates & cross exchange",
    "device.buySell": "Buy / Sell",
    "device.cashReg": "Cash Register",
    "device.active": "Active",
    "device.today": "Today",
    "device.lastUpdated": "Last update",
    "device.lastUpdatedTime": "less than a minute ago",
    "features.eyebrow": "Features",
    "features.title": "All key exchange desk operations in one app",
    "features.card1.title": "Rates & market",
    "features.card1.text": "Track current rates and quickly update your currency list.",
    "features.card2.title": "Buy / sell",
    "features.card2.text": "Process trades in a few taps, including client and notes.",
    "features.card3.title": "Cross exchange",
    "features.card3.text": "Automatic cross-rate calculation and control of both currencies.",
    "features.card4.title": "Cash control",
    "features.card4.text": "Balance by currency, opening amounts, and end-of-day totals—always visible.",
    "features.card5.title": "Client directory",
    "features.card5.text": "Quick client search, operation history, and notes right in the card.",
    "features.card6.title": "Backups & transfer",
    "features.card6.text": "Save data and share backups for reliability.",
    "workflow.eyebrow": "Workflow",
    "workflow.title": "From rate setup to end-of-day — one flow",
    "workflow.step1.title": "Set rates",
    "workflow.step1.text": "Add needed currencies and set buy/sell for each.",
    "workflow.step2.title": "Process a trade",
    "workflow.step2.text": "Choose currency and mode, then record amount, client, and note.",
    "workflow.step3.title": "Control cash",
    "workflow.step3.text": "See balances and dynamics by currency during the day.",
    "workflow.step4.title": "Save the day",
    "workflow.step4.text": "End-of-day totals and a backup — no manual spreadsheets.",
    "teams.eyebrow": "Who it's for",
    "teams.title": "For cashiers, operators, and exchange desk managers",
    "teams.lead": "Pockex helps the team speak one language: rates are clear, trades are transparent, balances are under control.",
    "teams.card1.title": "Operators",
    "teams.card1.text": "Fast transaction processing and rate hints.",
    "teams.card2.title": "Supervisors",
    "teams.card2.text": "Unified cash control and end-of-day reconciliation.",
    "teams.card3.title": "Managers",
    "teams.card3.text": "Transparent trade history and confidence in accounting.",
    "cta.eyebrow": "Demo",
    "cta.title": "Want to see Pockex in action?",
    "cta.lead": "Leave a contact — we'll share access and a short presentation.",
    "cta.name": "Name",
    "cta.email": "Email",
    "cta.submit": "Send request",
    "cta.note": "Placeholder form, submission disabled.",
    "faq.eyebrow": "FAQ",
    "faq.title": "Frequently asked questions",
    "faq.q1": "Can I work with multiple currencies at once?",
    "faq.a1": "Yes. Add the currencies you need and manage rates for each.",
    "faq.q2": "Is there client and notes tracking?",
    "faq.a2": "You can assign a client to a trade and keep history in the card.",
    "faq.q3": "How do I save data and share a backup?",
    "faq.a3": "Pockex supports backups to easily transfer and preserve the database.",
    "footer.tagline": "Cash desk and exchange in one interface.",
    "footer.contact": "Contact",
    "footer.developed": "Developed by QuantumBox."
  },
  ru: {
    "meta.title": "Pockex — касса и обмен в одном экране",
    "meta.description": "Pockex — касса и учет для обменных операций: курсы, сделки, клиенты, остатки в одном интерфейсе.",
    "nav.features": "Возможности",
    "nav.workflow": "Сценарий",
    "nav.teams": "Кому подходит",
    "nav.faq": "FAQ",
    "nav.download": "Скачать",
    "nav.menu": "Открыть меню",
    "nav.main": "Главное меню",
    "lang.button": "Выбор языка",
    "lang.menu": "Выбор языка",
    "hero.eyebrow": "Pockex · касса и обмен",
    "hero.title": "Единый экран для курсов, сделок и кассы",
    "hero.lead": "Ускорьте работу обменного пункта: курсы, покупка/продажа, кросс-обмен, клиенты и остатки — все под рукой, без переключений и хаоса в таблицах.",
    "hero.badgePlay": "Get it on Google Play",
    "hero.badgeAppStore": "Download on the App Store",
    "hero.badgeSoon": "Скоро",
    "hero.demo": "Запросить демо",
    "hero.chip1": "Быстрый ввод сделки",
    "hero.chip2": "Контроль кассы",
    "hero.chip3": "Курсы и кросс-обмен",
    "device.buySell": "Покупка / продажа",
    "device.cashReg": "Касса",
    "device.active": "Активно",
    "device.today": "Сегодня",
    "device.lastUpdated": "Последнее обновление",
    "device.lastUpdatedTime": "меньше минуты назад",
    "features.eyebrow": "Возможности",
    "features.title": "Все ключевые операции обменного пункта в одном приложении",
    "features.card1.title": "Курсы и рынок",
    "features.card1.text": "Отслеживайте актуальные курсы и быстро обновляйте список валют.",
    "features.card2.title": "Покупка / продажа",
    "features.card2.text": "Проводите сделки в пару касаний, с учетом клиента и заметок.",
    "features.card3.title": "Кросс-обмен",
    "features.card3.text": "Автоматический расчет кросс-курса и контроль расчета по двум валютам.",
    "features.card4.title": "Кассовый контроль",
    "features.card4.text": "Баланс по каждой валюте, стартовые остатки и итог дня — всегда видно.",
    "features.card5.title": "Справочник клиентов",
    "features.card5.text": "Быстрый поиск клиента, история операций и заметки прямо в карточке.",
    "features.card6.title": "Бэкапы и перенос",
    "features.card6.text": "Сохраняйте данные и делитесь резервными копиями для надежности.",
    "workflow.eyebrow": "Сценарий работы",
    "workflow.title": "От настройки курсов до закрытия смены — один поток",
    "workflow.step1.title": "Настройте курсы",
    "workflow.step1.text": "Добавьте нужные валюты и задайте buy/sell для каждой.",
    "workflow.step2.title": "Проведите сделку",
    "workflow.step2.text": "Выберите валюту, режим и сразу фиксируйте сумму, клиента, заметку.",
    "workflow.step3.title": "Контролируйте кассу",
    "workflow.step3.text": "Видите остатки и динамику по каждой валюте в течение дня.",
    "workflow.step4.title": "Сохраните день",
    "workflow.step4.text": "Итоги смены и резервная копия — без ручной выгрузки в таблицы.",
    "teams.eyebrow": "Кому подходит",
    "teams.title": "Для кассиров, операторов и руководителей обменных пунктов",
    "teams.lead": "Pockex помогает команде говорить на одном языке: курсы понятны, сделки прозрачны, остатки под контролем.",
    "teams.card1.title": "Операторы",
    "teams.card1.text": "Быстрое оформление операций и подсказки по курсам.",
    "teams.card2.title": "Супервайзеры",
    "teams.card2.text": "Единый контроль кассы и сверка итогов дня.",
    "teams.card3.title": "Руководители",
    "teams.card3.text": "Прозрачная история сделок и спокойствие за учет.",
    "cta.eyebrow": "Демо",
    "cta.title": "Хотите посмотреть Pockex в работе?",
    "cta.lead": "Оставьте контакт — пришлем доступ и короткую презентацию.",
    "cta.name": "Имя",
    "cta.email": "Email",
    "cta.submit": "Отправить заявку",
    "cta.note": "Форма-заглушка, отправка отключена.",
    "faq.eyebrow": "FAQ",
    "faq.title": "Частые вопросы",
    "faq.q1": "Можно ли работать с несколькими валютами одновременно?",
    "faq.a1": "Да. Добавляйте нужные валюты и управляйте курсами отдельно для каждой.",
    "faq.q2": "Есть ли учет клиентов и заметок?",
    "faq.a2": "В сделке можно указать клиента, а в карточке хранится история операций.",
    "faq.q3": "Как сохранить данные и передать бэкап?",
    "faq.a3": "Pockex поддерживает резервные копии, чтобы удобно переносить и сохранять базу.",
    "footer.tagline": "Касса и обмен в одном интерфейсе.",
    "footer.contact": "Контакт",
    "footer.developed": "Разработано QuantumBox."
  },
  de: {
    "meta.title": "Pockex — Kasse und Wechsel in einem Bildschirm",
    "meta.description": "Pockex — Kasse und Buchhaltung für Wechselgeschäfte: Kurse, Trades, Kunden und Bestände in einer Oberfläche.",
    "nav.features": "Funktionen",
    "nav.workflow": "Ablauf",
    "nav.teams": "Zielgruppe",
    "nav.faq": "FAQ",
    "nav.download": "Download",
    "nav.menu": "Menü öffnen",
    "nav.main": "Hauptmenü",
    "lang.button": "Sprache wählen",
    "lang.menu": "Sprachauswahl",
    "hero.eyebrow": "Pockex · Kasse & Wechsel",
    "hero.title": "Ein Bildschirm für Kurse, Trades und Kasse",
    "hero.lead": "Beschleunigen Sie den Betrieb: Kurse, Kauf/Verkauf, Cross-Exchange, Kunden und Bestände — alles im Griff, ohne Wechseln oder Tabellenchaos.",
    "hero.badgePlay": "Get it on Google Play",
    "hero.badgeAppStore": "Download on the App Store",
    "hero.badgeSoon": "Demnächst",
    "hero.demo": "Demo anfordern",
    "hero.chip1": "Schnelle Trade-Erfassung",
    "hero.chip2": "Kassenkontrolle",
    "hero.chip3": "Kurse & Cross-Exchange",
    "device.buySell": "Kauf / Verkauf",
    "device.cashReg": "Kasse",
    "device.active": "Aktiv",
    "device.today": "Heute",
    "device.lastUpdated": "Letzte Aktualisierung",
    "device.lastUpdatedTime": "vor weniger als einer Minute",
    "features.eyebrow": "Funktionen",
    "features.title": "Alle zentralen Wechselstuben-Prozesse in einer App",
    "features.card1.title": "Kurse & Markt",
    "features.card1.text": "Aktuelle Kurse verfolgen und Währungen schnell aktualisieren.",
    "features.card2.title": "Kauf / Verkauf",
    "features.card2.text": "Transaktionen in wenigen Schritten, inkl. Kunde und Notizen.",
    "features.card3.title": "Cross-Exchange",
    "features.card3.text": "Automatische Berechnung des Cross-Kurses und Kontrolle beider Währungen.",
    "features.card4.title": "Kassenkontrolle",
    "features.card4.text": "Bestände je Währung, Startbeträge und Tagesergebnis stets sichtbar.",
    "features.card5.title": "Kundenverzeichnis",
    "features.card5.text": "Schnelle Suche, Historie und Notizen direkt in der Karte.",
    "features.card6.title": "Backups & Transfer",
    "features.card6.text": "Daten sichern und Backups teilen für Zuverlässigkeit.",
    "workflow.eyebrow": "Ablauf",
    "workflow.title": "Von der Kurseinstellung bis zum Tagesabschluss — ein Ablauf",
    "workflow.step1.title": "Kurse einstellen",
    "workflow.step1.text": "Benötigte Währungen hinzufügen und Buy/Sell festlegen.",
    "workflow.step2.title": "Trade durchführen",
    "workflow.step2.text": "Währung und Modus wählen, Betrag, Kunde und Notiz erfassen.",
    "workflow.step3.title": "Kasse kontrollieren",
    "workflow.step3.text": "Bestände und Bewegungen je Währung während des Tages sehen.",
    "workflow.step4.title": "Tag sichern",
    "workflow.step4.text": "Tagesabschluss und Backup — ohne manuelle Tabellen.",
    "teams.eyebrow": "Zielgruppe",
    "teams.title": "Für Kassierer, Operatoren und Leiter von Wechselstuben",
    "teams.lead": "Pockex hilft dem Team, dieselbe Sprache zu sprechen: Kurse sind klar, Trades transparent, Bestände unter Kontrolle.",
    "teams.card1.title": "Operatoren",
    "teams.card1.text": "Schnelle Erfassung von Transaktionen und Kurshinweise.",
    "teams.card2.title": "Supervisoren",
    "teams.card2.text": "Einheitliche Kassenkontrolle und Tagesabgleich.",
    "teams.card3.title": "Leiter",
    "teams.card3.text": "Transparente Trade-Historie und Sicherheit in der Buchhaltung.",
    "cta.eyebrow": "Demo",
    "cta.title": "Pockex live sehen?",
    "cta.lead": "Kontakt hinterlassen — wir schicken Zugang und eine kurze Präsentation.",
    "cta.name": "Name",
    "cta.email": "E-Mail",
    "cta.submit": "Anfrage senden",
    "cta.note": "Platzhalter-Formular, Versand deaktiviert.",
    "faq.eyebrow": "FAQ",
    "faq.title": "Häufige Fragen",
    "faq.q1": "Kann ich mit mehreren Währungen gleichzeitig arbeiten?",
    "faq.a1": "Ja. Fügen Sie die benötigten Währungen hinzu und verwalten Sie die Kurse für jede.",
    "faq.q2": "Gibt es Kunden- und Notizverwaltung?",
    "faq.a2": "Sie können einen Kunden zuordnen und die Historie in der Karte speichern.",
    "faq.q3": "Wie speichere ich Daten und teile ein Backup?",
    "faq.a3": "Pockex unterstützt Backups, um die Datenbank zu übertragen und zu sichern.",
    "footer.tagline": "Kasse und Wechsel in einer Oberfläche.",
    "footer.contact": "Kontakt",
    "footer.developed": "Entwickelt von QuantumBox."
  },
  es: {
    "meta.title": "Pockex — caja y cambio en una sola pantalla",
    "meta.description": "Pockex — caja y contabilidad para operaciones de cambio: tipos, operaciones, clientes y saldos en una interfaz.",
    "nav.features": "Funciones",
    "nav.workflow": "Flujo",
    "nav.teams": "Para quién",
    "nav.faq": "FAQ",
    "nav.download": "Descargar",
    "nav.menu": "Abrir menú",
    "nav.main": "Menú principal",
    "lang.button": "Elegir idioma",
    "lang.menu": "Selección de idioma",
    "hero.eyebrow": "Pockex · caja y cambio",
    "hero.title": "Una pantalla para tipos, operaciones y caja",
    "hero.lead": "Acelera el trabajo del punto de cambio: tipos, compra/venta, cruce de divisas, clientes y saldos — todo a mano, sin cambiar ni caos de hojas de cálculo.",
    "hero.badgePlay": "Get it on Google Play",
    "hero.badgeAppStore": "Download on the App Store",
    "hero.badgeSoon": "Próximamente",
    "hero.demo": "Solicitar demo",
    "hero.chip1": "Entrada rápida de operación",
    "hero.chip2": "Control de caja",
    "hero.chip3": "Tipos y cruce de divisas",
    "device.buySell": "Compra / Venta",
    "device.cashReg": "Caja",
    "device.active": "Activo",
    "device.today": "Hoy",
    "device.lastUpdated": "Última actualización",
    "device.lastUpdatedTime": "hace menos de un minuto",
    "features.eyebrow": "Funciones",
    "features.title": "Todas las operaciones clave de una casa de cambio en una app",
    "features.card1.title": "Tipos y mercado",
    "features.card1.text": "Sigue los tipos actuales y actualiza rápido la lista de monedas.",
    "features.card2.title": "Compra / venta",
    "features.card2.text": "Procesa operaciones en pocos toques, con cliente y notas.",
    "features.card3.title": "Cruce de divisas",
    "features.card3.text": "Cálculo automático del tipo cruzado y control de ambas monedas.",
    "features.card4.title": "Control de caja",
    "features.card4.text": "Saldos por moneda, apertura y total del día siempre visibles.",
    "features.card5.title": "Directorio de clientes",
    "features.card5.text": "Búsqueda rápida, historial de operaciones y notas en la ficha.",
    "features.card6.title": "Backups y traslado",
    "features.card6.text": "Guarda datos y comparte copias de seguridad.",
    "workflow.eyebrow": "Flujo",
    "workflow.title": "De configurar tipos a cerrar el día — un solo flujo",
    "workflow.step1.title": "Configura los tipos",
    "workflow.step1.text": "Añade las monedas necesarias y fija compra/venta para cada una.",
    "workflow.step2.title": "Realiza una operación",
    "workflow.step2.text": "Elige moneda y modo, registra importe, cliente y nota.",
    "workflow.step3.title": "Controla la caja",
    "workflow.step3.text": "Ve saldos y movimientos por moneda durante el día.",
    "workflow.step4.title": "Guarda el día",
    "workflow.step4.text": "Totales de cierre y copia de seguridad — sin hojas manuales.",
    "teams.eyebrow": "Para quién",
    "teams.title": "Para cajeros, operadores y responsables de casas de cambio",
    "teams.lead": "Pockex ayuda al equipo a hablar un mismo idioma: tipos claros, operaciones transparentes, saldos bajo control.",
    "teams.card1.title": "Operadores",
    "teams.card1.text": "Procesamiento rápido de operaciones y sugerencias de tipos.",
    "teams.card2.title": "Supervisores",
    "teams.card2.text": "Control unificado de caja y conciliación diaria.",
    "teams.card3.title": "Responsables",
    "teams.card3.text": "Historial transparente de operaciones y tranquilidad contable.",
    "cta.eyebrow": "Demo",
    "cta.title": "¿Quieres ver Pockex en acción?",
    "cta.lead": "Deja un contacto — enviaremos acceso y una breve presentación.",
    "cta.name": "Nombre",
    "cta.email": "Email",
    "cta.submit": "Enviar solicitud",
    "cta.note": "Formulario de prueba, envío desactivado.",
    "faq.eyebrow": "FAQ",
    "faq.title": "Preguntas frecuentes",
    "faq.q1": "¿Puedo trabajar con varias monedas a la vez?",
    "faq.a1": "Sí. Añade las monedas necesarias y gestiona los tipos por cada una.",
    "faq.q2": "¿Hay seguimiento de clientes y notas?",
    "faq.a2": "Puedes asignar un cliente a la operación y guardar el historial en la ficha.",
    "faq.q3": "¿Cómo guardo datos y comparto un backup?",
    "faq.a3": "Pockex admite copias de seguridad para transferir y preservar la base.",
    "footer.tagline": "Caja y cambio en una sola interfaz.",
    "footer.contact": "Contacto",
    "footer.developed": "Desarrollado por QuantumBox."
  },
  zh: {
    "meta.title": "Pockex — 收银与兑换一屏搞定",
    "meta.description": "Pockex — 兑换业务的收银与记账：汇率、交易、客户与余额尽在一个界面。",
    "nav.features": "功能",
    "nav.workflow": "流程",
    "nav.teams": "适用人群",
    "nav.faq": "常见问题",
    "nav.download": "下载",
    "nav.menu": "打开菜单",
    "nav.main": "主菜单",
    "lang.button": "选择语言",
    "lang.menu": "语言选择",
    "hero.eyebrow": "Pockex · 收银与兑换",
    "hero.title": "汇率、交易、现金，一屏掌控",
    "hero.lead": "让兑换点更高效：汇率、买入/卖出、交叉兑换、客户与余额——无需切换或表格混乱。",
    "hero.badgePlay": "Get it on Google Play",
    "hero.badgeAppStore": "Download on the App Store",
    "hero.badgeSoon": "即将上线",
    "hero.demo": "申请演示",
    "hero.chip1": "快速录入交易",
    "hero.chip2": "现金控制",
    "hero.chip3": "汇率与交叉兑换",
    "device.buySell": "买入 / 卖出",
    "device.cashReg": "收银台",
    "device.active": "进行中",
    "device.today": "今天",
    "device.lastUpdated": "最近更新",
    "device.lastUpdatedTime": "不到一分钟前",
    "features.eyebrow": "功能",
    "features.title": "兑换点的核心操作，一款应用全部覆盖",
    "features.card1.title": "汇率与市场",
    "features.card1.text": "跟踪当前汇率，快速更新币种列表。",
    "features.card2.title": "买入 / 卖出",
    "features.card2.text": "几步完成交易，并记录客户与备注。",
    "features.card3.title": "交叉兑换",
    "features.card3.text": "自动计算交叉汇率，双币种金额可控。",
    "features.card4.title": "现金管理",
    "features.card4.text": "各币种余额、期初与日终合计一目了然。",
    "features.card5.title": "客户名录",
    "features.card5.text": "快速检索客户、查看历史与备注。",
    "features.card6.title": "备份与迁移",
    "features.card6.text": "保存数据并共享备份，确保可靠。",
    "workflow.eyebrow": "流程",
    "workflow.title": "从设置汇率到日终结算，一条流程",
    "workflow.step1.title": "设置汇率",
    "workflow.step1.text": "添加所需币种并设置买入/卖出。",
    "workflow.step2.title": "完成交易",
    "workflow.step2.text": "选择币种与模式，记录金额、客户和备注。",
    "workflow.step3.title": "掌控现金",
    "workflow.step3.text": "查看当日各币种余额与变化。",
    "workflow.step4.title": "保存当天",
    "workflow.step4.text": "日终汇总与备份，无需手工表格。",
    "teams.eyebrow": "适用人群",
    "teams.title": "适合收银员、操作员与兑换点负责人",
    "teams.lead": "Pockex 帮助团队统一口径：汇率清晰、交易透明、余额可控。",
    "teams.card1.title": "操作员",
    "teams.card1.text": "快速办理交易并提供汇率提示。",
    "teams.card2.title": "主管",
    "teams.card2.text": "统一现金控制与日终核对。",
    "teams.card3.title": "负责人",
    "teams.card3.text": "透明的交易历史与账务安心。",
    "cta.eyebrow": "演示",
    "cta.title": "想看看 Pockex 的实际效果？",
    "cta.lead": "留下联系方式—我们将提供访问和简短演示。",
    "cta.name": "姓名",
    "cta.email": "邮箱",
    "cta.submit": "提交申请",
    "cta.note": "表单为占位，提交已关闭。",
    "faq.eyebrow": "常见问题",
    "faq.title": "常见问题",
    "faq.q1": "可以同时处理多种货币吗？",
    "faq.a1": "可以。添加所需币种并分别管理汇率。",
    "faq.q2": "是否支持客户与备注记录？",
    "faq.a2": "交易中可指定客户，卡片内保留历史。",
    "faq.q3": "如何保存数据并分享备份？",
    "faq.a3": "Pockex 支持备份，便于迁移和保存数据库。",
    "footer.tagline": "收银与兑换一体化界面。",
    "footer.contact": "联系",
    "footer.developed": "由 QuantumBox 开发。"
  },
  ja: {
    "meta.title": "Pockex — 両替とレジを一画面で",
    "meta.description": "Pockex — 両替業務のレジと帳簿管理。レート、取引、顧客、残高を一つの画面に。",
    "nav.features": "機能",
    "nav.workflow": "フロー",
    "nav.teams": "対象",
    "nav.faq": "FAQ",
    "nav.download": "ダウンロード",
    "nav.menu": "メニューを開く",
    "nav.main": "メインメニュー",
    "lang.button": "言語を選択",
    "lang.menu": "言語選択",
    "hero.eyebrow": "Pockex · レジ & 両替",
    "hero.title": "レート・取引・レジを一画面で",
    "hero.lead": "両替所の業務を高速化：レート、売買、クロス両替、顧客、残高を一括管理。表の切替えは不要。",
    "hero.badgePlay": "Get it on Google Play",
    "hero.badgeAppStore": "Download on the App Store",
    "hero.badgeSoon": "近日公開",
    "hero.demo": "デモを依頼",
    "hero.chip1": "取引入力が速い",
    "hero.chip2": "レジ管理",
    "hero.chip3": "レート＆クロス両替",
    "device.buySell": "買い / 売り",
    "device.cashReg": "レジ",
    "device.active": "稼働中",
    "device.today": "今日",
    "device.lastUpdated": "最終更新",
    "device.lastUpdatedTime": "1分以内",
    "features.eyebrow": "機能",
    "features.title": "両替所の主要業務を一つのアプリに",
    "features.card1.title": "レートと市場",
    "features.card1.text": "最新レートを追跡し、通貨リストをすばやく更新。",
    "features.card2.title": "買い / 売り",
    "features.card2.text": "数タップで取引、顧客とメモも記録。",
    "features.card3.title": "クロス両替",
    "features.card3.text": "クロスレートを自動計算し、2通貨の金額を管理。",
    "features.card4.title": "レジ管理",
    "features.card4.text": "通貨別残高、期首残高、日計が常に見える。",
    "features.card5.title": "顧客リスト",
    "features.card5.text": "顧客検索、履歴、メモをカードで管理。",
    "features.card6.title": "バックアップと移行",
    "features.card6.text": "データを保存し、バックアップを共有。",
    "workflow.eyebrow": "フロー",
    "workflow.title": "レート設定から日締めまでワンフロー",
    "workflow.step1.title": "レートを設定",
    "workflow.step1.text": "必要な通貨を追加し、買い/売りを設定。",
    "workflow.step2.title": "取引を実行",
    "workflow.step2.text": "通貨とモードを選び、金額・顧客・メモを記録。",
    "workflow.step3.title": "レジを管理",
    "workflow.step3.text": "当日の通貨別残高と動きを確認。",
    "workflow.step4.title": "日を保存",
    "workflow.step4.text": "日次合計とバックアップ — 手作業の表は不要。",
    "teams.eyebrow": "対象",
    "teams.title": "両替所のスタッフ・オペレーター・責任者向け",
    "teams.lead": "Pockex でチームの共通言語を実現：レートは明確、取引は透明、残高は管理下。",
    "teams.card1.title": "オペレーター",
    "teams.card1.text": "取引処理が迅速でレートのヒント。",
    "teams.card2.title": "スーパーバイザー",
    "teams.card2.text": "レジ管理を一元化し日締めを確認。",
    "teams.card3.title": "管理者",
    "teams.card3.text": "取引履歴が透明で安心。",
    "cta.eyebrow": "デモ",
    "cta.title": "Pockex を実際に見たいですか？",
    "cta.lead": "連絡先を残してください。アクセスと短い紹介をお送りします。",
    "cta.name": "お名前",
    "cta.email": "メール",
    "cta.submit": "申し込む",
    "cta.note": "プレースホルダーのフォーム、送信は無効です。",
    "faq.eyebrow": "FAQ",
    "faq.title": "よくある質問",
    "faq.q1": "複数通貨を同時に扱えますか？",
    "faq.a1": "はい。必要な通貨を追加し、個別にレート管理できます。",
    "faq.q2": "顧客とメモの管理はできますか？",
    "faq.a2": "取引に顧客を紐付け、カードで履歴を保存します。",
    "faq.q3": "データ保存とバックアップ共有は？",
    "faq.a3": "Pockex はバックアップに対応し、移行と保存が簡単です。",
    "footer.tagline": "レジと両替を一つのインターフェースに。",
    "footer.contact": "お問い合わせ",
    "footer.developed": "QuantumBox が開発。"
  },
  ko: {
    "meta.title": "Pockex — 환전·금고를 한 화면에",
    "meta.description": "Pockex — 환전 업무의 금고/회계 관리: 환율, 거래, 고객, 잔액을 하나의 인터페이스에서.",
    "nav.features": "기능",
    "nav.workflow": "워크플로",
    "nav.teams": "대상",
    "nav.faq": "FAQ",
    "nav.download": "다운로드",
    "nav.menu": "메뉴 열기",
    "nav.main": "메인 메뉴",
    "lang.button": "언어 선택",
    "lang.menu": "언어 선택",
    "hero.eyebrow": "Pockex · 환전 & 금고",
    "hero.title": "환율, 거래, 금고를 한 화면에",
    "hero.lead": "환전소 업무를 빠르게: 환율, 매수/매도, 교차환전, 고객, 잔액을 한곳에서. 전환이나 스프레드시트 혼란 없이.",
    "hero.badgePlay": "Get it on Google Play",
    "hero.badgeAppStore": "Download on the App Store",
    "hero.badgeSoon": "곧 출시",
    "hero.demo": "데모 요청",
    "hero.chip1": "빠른 거래 입력",
    "hero.chip2": "금고 관리",
    "hero.chip3": "환율 & 교차환전",
    "device.buySell": "매수 / 매도",
    "device.cashReg": "금고",
    "device.active": "진행 중",
    "device.today": "오늘",
    "device.lastUpdated": "마지막 업데이트",
    "device.lastUpdatedTime": "1분 이내",
    "features.eyebrow": "기능",
    "features.title": "환전소 핵심 업무를 하나의 앱에",
    "features.card1.title": "환율 & 시장",
    "features.card1.text": "현재 환율을 추적하고 통화 목록을 빠르게 업데이트.",
    "features.card2.title": "매수 / 매도",
    "features.card2.text": "몇 번의 탭으로 거래 처리, 고객과 메모 포함.",
    "features.card3.title": "교차환전",
    "features.card3.text": "교차환율 자동 계산과 양통화 금액 관리.",
    "features.card4.title": "금고 관리",
    "features.card4.text": "통화별 잔액, 시작 잔액, 일일 합계가 항상 보임.",
    "features.card5.title": "고객 관리",
    "features.card5.text": "빠른 고객 검색, 거래 이력, 메모.",
    "features.card6.title": "백업 & 이전",
    "features.card6.text": "데이터 저장 및 백업 공유로 안정성 확보.",
    "workflow.eyebrow": "워크플로",
    "workflow.title": "환율 설정부터 마감까지 하나의 흐름",
    "workflow.step1.title": "환율 설정",
    "workflow.step1.text": "필요한 통화를 추가하고 매수/매도를 설정.",
    "workflow.step2.title": "거래 처리",
    "workflow.step2.text": "통화와 모드를 선택하고 금액, 고객, 메모를 기록.",
    "workflow.step3.title": "금고 관리",
    "workflow.step3.text": "당일 통화별 잔액과 흐름을 확인.",
    "workflow.step4.title": "하루 저장",
    "workflow.step4.text": "일일 합계와 백업 — 수기 표 없이.",
    "teams.eyebrow": "대상",
    "teams.title": "환전소의 캐셔, 오퍼레이터, 관리자용",
    "teams.lead": "Pockex는 팀이 같은 기준으로 일하게 합니다: 환율은 명확하고 거래는 투명하며 잔액은 통제됩니다.",
    "teams.card1.title": "오퍼레이터",
    "teams.card1.text": "거래 처리 속도와 환율 안내.",
    "teams.card2.title": "슈퍼바이저",
    "teams.card2.text": "금고를 통합 관리하고 일일 마감 확인.",
    "teams.card3.title": "매니저",
    "teams.card3.text": "투명한 거래 이력과 안정적인 회계.",
    "cta.eyebrow": "데모",
    "cta.title": "Pockex를 직접 보고 싶으신가요?",
    "cta.lead": "연락처를 남겨 주세요 — 접속과 간단한 소개를 드립니다.",
    "cta.name": "이름",
    "cta.email": "이메일",
    "cta.submit": "요청 보내기",
    "cta.note": "플레이스홀더 폼, 전송 비활성화.",
    "faq.eyebrow": "FAQ",
    "faq.title": "자주 묻는 질문",
    "faq.q1": "여러 통화를 동시에 처리할 수 있나요?",
    "faq.a1": "네. 필요한 통화를 추가하고 각 통화의 환율을 관리하세요.",
    "faq.q2": "고객과 메모 관리는 있나요?",
    "faq.a2": "거래에 고객을 지정하고 카드에 이력을 저장할 수 있습니다.",
    "faq.q3": "데이터 저장 및 백업 공유는 어떻게 하나요?",
    "faq.a3": "Pockex는 백업을 지원해 데이터베이스를 쉽게 이전하고 보존할 수 있습니다.",
    "footer.tagline": "환전과 금고를 하나의 인터페이스로.",
    "footer.contact": "문의",
    "footer.developed": "QuantumBox에서 개발."
  },
  hi: {
    "meta.title": "Pockex — एक स्क्रीन में कैश डेस्क और एक्सचेंज",
    "meta.description": "Pockex — मुद्रा विनिमय संचालन के लिए कैश डेस्क और लेखा: दरें, लेन-देन, ग्राहक और बैलेंस एक ही इंटरफ़ेस में।",
    "nav.features": "विशेषताएँ",
    "nav.workflow": "प्रवाह",
    "nav.teams": "किसके लिए",
    "nav.faq": "FAQ",
    "nav.download": "डाउनलोड",
    "nav.menu": "मेनू खोलें",
    "nav.main": "मुख्य मेनू",
    "lang.button": "भाषा चुनें",
    "lang.menu": "भाषा चयन",
    "hero.eyebrow": "Pockex · कैश डेस्क और एक्सचेंज",
    "hero.title": "दरें, लेन-देन और कैश — एक स्क्रीन पर",
    "hero.lead": "एक्सचेंज पॉइंट का काम तेज़ करें: दरें, खरीद/बिक्री, क्रॉस-एक्सचेंज, ग्राहक और बैलेंस — सब कुछ एक जगह, बिना बार-बार बदलने और स्प्रेडशीट की उलझन के।",
    "hero.badgePlay": "Get it on Google Play",
    "hero.badgeAppStore": "Download on the App Store",
    "hero.badgeSoon": "जल्द आ रहा है",
    "hero.demo": "डेमो अनुरोध करें",
    "hero.chip1": "तेज़ लेन-देन इनपुट",
    "hero.chip2": "कैश नियंत्रण",
    "hero.chip3": "दरें और क्रॉस-एक्सचेंज",
    "device.buySell": "खरीद / बिक्री",
    "device.cashReg": "कैश रजिस्टर",
    "device.active": "सक्रिय",
    "device.today": "आज",
    "device.lastUpdated": "अंतिम अपडेट",
    "device.lastUpdatedTime": "एक मिनट से कम पहले",
    "features.eyebrow": "विशेषताएँ",
    "features.title": "एक्सचेंज काउंटर के सभी मुख्य ऑपरेशन एक ऐप में",
    "features.card1.title": "दरें और बाजार",
    "features.card1.text": "वर्तमान दरों पर नज़र रखें और मुद्रा सूची जल्दी अपडेट करें।",
    "features.card2.title": "खरीद / बिक्री",
    "features.card2.text": "कुछ टैप में लेन-देन, ग्राहक और नोट्स के साथ।",
    "features.card3.title": "क्रॉस-एक्सचेंज",
    "features.card3.text": "क्रॉस-रेट की स्वचालित गणना और दोनों मुद्राओं का नियंत्रण।",
    "features.card4.title": "कैश नियंत्रण",
    "features.card4.text": "हर मुद्रा का बैलेंस, शुरुआती राशि और दिन का कुल हमेशा दिखे।",
    "features.card5.title": "ग्राहक सूची",
    "features.card5.text": "त्वरित खोज, इतिहास और नोट्स कार्ड में ही।",
    "features.card6.title": "बैकअप और ट्रांसफर",
    "features.card6.text": "डेटा सहेजें और बैकअप साझा करें।",
    "workflow.eyebrow": "प्रवाह",
    "workflow.title": "दरें सेट करने से लेकर दिन बंद करने तक — एक प्रवाह",
    "workflow.step1.title": "दरें सेट करें",
    "workflow.step1.text": "ज़रूरी मुद्राएँ जोड़ें और खरीद/बिक्री सेट करें।",
    "workflow.step2.title": "लेन-देन करें",
    "workflow.step2.text": "मुद्रा और मोड चुनें, राशि, ग्राहक और नोट दर्ज करें।",
    "workflow.step3.title": "कैश नियंत्रण",
    "workflow.step3.text": "दिन भर हर मुद्रा का बैलेंस और बदलाव देखें।",
    "workflow.step4.title": "दिन सहेजें",
    "workflow.step4.text": "दिन का कुल और बैकअप — बिना मैनुअल शीट्स।",
    "teams.eyebrow": "किसके लिए",
    "teams.title": "कैशियर, ऑपरेटर और एक्सचेंज मैनेजरों के लिए",
    "teams.lead": "Pockex टीम को एक ही भाषा में काम करने में मदद करता है: दरें स्पष्ट, लेन-देन पारदर्शी, बैलेंस नियंत्रण में।",
    "teams.card1.title": "ऑपरेटर",
    "teams.card1.text": "तेज़ लेन-देन प्रोसेसिंग और दरों के संकेत।",
    "teams.card2.title": "सुपरवाइज़र",
    "teams.card2.text": "एकीकृत कैश नियंत्रण और दिन का मिलान।",
    "teams.card3.title": "मैनेजर",
    "teams.card3.text": "पारदर्शी लेन-देन इतिहास और भरोसेमंद लेखा।",
    "cta.eyebrow": "डेमो",
    "cta.title": "Pockex को काम करते देखना चाहते हैं?",
    "cta.lead": "संपर्क छोड़ें — हम एक्सेस और छोटा प्रेजेंटेशन भेजेंगे।",
    "cta.name": "नाम",
    "cta.email": "ईमेल",
    "cta.submit": "अनुरोध भेजें",
    "cta.note": "प्लेसहोल्डर फ़ॉर्म, सबमिशन बंद है।",
    "faq.eyebrow": "FAQ",
    "faq.title": "अक्सर पूछे जाने वाले सवाल",
    "faq.q1": "क्या मैं कई मुद्राओं के साथ एक साथ काम कर सकता हूँ?",
    "faq.a1": "हाँ। ज़रूरी मुद्राएँ जोड़ें और हर एक के लिए दरें प्रबंधित करें।",
    "faq.q2": "क्या ग्राहक और नोट्स का हिसाब है?",
    "faq.a2": "आप लेन-देन में ग्राहक जोड़ सकते हैं और कार्ड में इतिहास रख सकते हैं।",
    "faq.q3": "डेटा कैसे सहेजें और बैकअप साझा करें?",
    "faq.a3": "Pockex बैकअप सपोर्ट करता है ताकि डेटाबेस आसानी से ट्रांसफर और सुरक्षित हो सके।",
    "footer.tagline": "एक इंटरफ़ेस में कैश डेस्क और एक्सचेंज।",
    "footer.contact": "संपर्क",
    "footer.developed": "QuantumBox द्वारा विकसित।"
  },
  tr: {
    "meta.title": "Pockex — tek ekranda kasa ve döviz",
    "meta.description": "Pockex — döviz işlemleri için kasa ve muhasebe: kurlar, işlemler, müşteriler ve bakiyeler tek arayüzde.",
    "nav.features": "Özellikler",
    "nav.workflow": "Akış",
    "nav.teams": "Kimler için",
    "nav.faq": "SSS",
    "nav.download": "İndir",
    "nav.menu": "Menüyü aç",
    "nav.main": "Ana menü",
    "lang.button": "Dil seç",
    "lang.menu": "Dil seçimi",
    "hero.eyebrow": "Pockex · kasa ve döviz",
    "hero.title": "Kurlar, işlemler ve kasa için tek ekran",
    "hero.lead": "Döviz bürosu işini hızlandırın: kurlar, alım/satım, çapraz işlem, müşteri ve bakiyeler — hepsi elinizin altında, geçiş ve tablo karmaşası olmadan.",
    "hero.badgePlay": "Get it on Google Play",
    "hero.badgeAppStore": "Download on the App Store",
    "hero.badgeSoon": "Yakında",
    "hero.demo": "Demo iste",
    "hero.chip1": "Hızlı işlem girişi",
    "hero.chip2": "Kasa kontrolü",
    "hero.chip3": "Kurlar ve çapraz işlem",
    "device.buySell": "Alım / Satım",
    "device.cashReg": "Kasa",
    "device.active": "Aktif",
    "device.today": "Bugün",
    "device.lastUpdated": "Son güncelleme",
    "device.lastUpdatedTime": "Bir dakikadan kısa süre önce",
    "features.eyebrow": "Özellikler",
    "features.title": "Döviz bürosunun tüm temel işlemleri tek uygulamada",
    "features.card1.title": "Kurlar ve piyasa",
    "features.card1.text": "Güncel kurları takip edin ve para birimi listesini hızlıca güncelleyin.",
    "features.card2.title": "Alım / Satım",
    "features.card2.text": "Birkaç dokunuşla işlem yapın, müşteri ve notları dahil edin.",
    "features.card3.title": "Çapraz işlem",
    "features.card3.text": "Çapraz kurun otomatik hesaplanması ve iki para biriminin kontrolü.",
    "features.card4.title": "Kasa kontrolü",
    "features.card4.text": "Her para birimi için bakiye, başlangıç ve gün sonu toplamı görünür.",
    "features.card5.title": "Müşteri rehberi",
    "features.card5.text": "Hızlı müşteri arama, işlem geçmişi ve notlar kartta.",
    "features.card6.title": "Yedekleme ve aktarım",
    "features.card6.text": "Verileri saklayın ve yedekleri paylaşın.",
    "workflow.eyebrow": "Akış",
    "workflow.title": "Kur ayarından gün sonuna — tek akış",
    "workflow.step1.title": "Kurları ayarla",
    "workflow.step1.text": "Gerekli para birimlerini ekleyin ve alım/satım belirleyin.",
    "workflow.step2.title": "İşlemi yap",
    "workflow.step2.text": "Para birimi ve modu seçin, tutar, müşteri ve notu kaydedin.",
    "workflow.step3.title": "Kasayı kontrol et",
    "workflow.step3.text": "Gün içinde para birimi bazında bakiye ve hareketleri görün.",
    "workflow.step4.title": "Günü kaydet",
    "workflow.step4.text": "Gün sonu toplamı ve yedek — manuel tablolar olmadan.",
    "teams.eyebrow": "Kimler için",
    "teams.title": "Kasiyerler, operatörler ve döviz bürosu yöneticileri için",
    "teams.lead": "Pockex ekibin aynı dili konuşmasına yardımcı olur: kurlar net, işlemler şeffaf, bakiyeler kontrol altında.",
    "teams.card1.title": "Operatörler",
    "teams.card1.text": "Hızlı işlem süreçleri ve kur ipuçları.",
    "teams.card2.title": "Süpervizörler",
    "teams.card2.text": "Kasanın tek noktadan kontrolü ve günlük mutabakat.",
    "teams.card3.title": "Yöneticiler",
    "teams.card3.text": "Şeffaf işlem geçmişi ve muhasebede güven.",
    "cta.eyebrow": "Demo",
    "cta.title": "Pockex'i çalışırken görmek ister misiniz?",
    "cta.lead": "İletişim bırakın — erişim ve kısa bir sunum paylaşalım.",
    "cta.name": "Ad",
    "cta.email": "E-posta",
    "cta.submit": "Talep gönder",
    "cta.note": "Yer tutucu form, gönderim devre dışı.",
    "faq.eyebrow": "SSS",
    "faq.title": "Sıkça sorulan sorular",
    "faq.q1": "Birden fazla para birimiyle aynı anda çalışabilir miyim?",
    "faq.a1": "Evet. Gerekli para birimlerini ekleyin ve her biri için kurları yönetin.",
    "faq.q2": "Müşteri ve not takibi var mı?",
    "faq.a2": "İşleme müşteri ekleyebilir, kartta geçmişi saklayabilirsiniz.",
    "faq.q3": "Verileri nasıl kaydeder ve yedeği paylaşırım?",
    "faq.a3": "Pockex yedeklemeyi destekler; veritabanını taşımak ve saklamak kolaydır.",
    "footer.tagline": "Tek arayüzde kasa ve döviz.",
    "footer.contact": "İletişim",
    "footer.developed": "QuantumBox tarafından geliştirildi."
  }
};

const defaultLang = "en";

const i18nElements = document.querySelectorAll("[data-i18n]");
const i18nPlaceholders = document.querySelectorAll("[data-i18n-placeholder]");
const i18nAttrs = document.querySelectorAll("[data-i18n-attr]");
const metaDescription = document.querySelector('meta[name="description"]');

const langSwitch = document.querySelector(".lang-switch");
const langButton = document.querySelector(".lang-button");
const langMenu = document.querySelector(".lang-menu");
const langOptions = document.querySelectorAll("[data-lang]");
const langCurrent = document.querySelector("[data-lang-current]");
const langCode = document.querySelector("[data-lang-code]");

const applyTranslations = (code) => {
  const dict = translations[code] || translations[defaultLang];

  if (dict["meta.title"]) {
    document.title = dict["meta.title"];
  }
  if (metaDescription && dict["meta.description"]) {
    metaDescription.setAttribute("content", dict["meta.description"]);
  }

  i18nElements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (key && dict[key]) {
      el.textContent = dict[key];
    }
  });

  i18nPlaceholders.forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (key && dict[key]) {
      el.setAttribute("placeholder", dict[key]);
    }
  });

  i18nAttrs.forEach((el) => {
    const spec = el.getAttribute("data-i18n-attr");
    if (!spec) return;
    spec.split(",").forEach((pair) => {
      const parts = pair.split(":").map((item) => item.trim());
      if (parts.length !== 2) return;
      const [attr, key] = parts;
      if (dict[key]) {
        el.setAttribute(attr, dict[key]);
      }
    });
  });
};

const setLanguage = (code) => {
  const normalized = translations[code] ? code : defaultLang;
  document.documentElement.lang = normalized;
  localStorage.setItem("pockexLang", normalized);
  applyTranslations(normalized);

  if (langOptions.length > 0) {
    langOptions.forEach((option) => {
      const active = option.getAttribute("data-lang") === normalized;
      option.classList.toggle("is-active", active);
      option.setAttribute("aria-selected", String(active));
      if (active && langCurrent) {
        langCurrent.textContent = option.textContent.trim();
      }
    });
  }

  if (langCode) {
    langCode.textContent = normalized.toUpperCase();
  }
};

if (langButton && langMenu && langSwitch) {
  langButton.addEventListener("click", (event) => {
    event.stopPropagation();
    const isOpen = langSwitch.classList.toggle("is-open");
    langButton.setAttribute("aria-expanded", String(isOpen));
  });

  langOptions.forEach((option) => {
    option.addEventListener("click", (event) => {
      event.stopPropagation();
      const code = option.getAttribute("data-lang");
      if (code) {
        setLanguage(code);
      }
      langSwitch.classList.remove("is-open");
      langButton.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("click", () => {
    langSwitch.classList.remove("is-open");
    langButton.setAttribute("aria-expanded", "false");
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      langSwitch.classList.remove("is-open");
      langButton.setAttribute("aria-expanded", "false");
    }
  });
}

const storedLang = localStorage.getItem("pockexLang");
const initialLang = storedLang && translations[storedLang] ? storedLang : defaultLang;
setLanguage(initialLang);

const revealElements = document.querySelectorAll(".reveal");

if (revealElements.length > 0 && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  revealElements.forEach((el, index) => {
    if (!el.style.getPropertyValue("--i")) {
      el.style.setProperty("--i", String(index % 6));
    }
    observer.observe(el);
  });
} else {
  revealElements.forEach((el) => el.classList.add("is-visible"));
}

const placeholders = document.querySelectorAll("[data-placeholder]");
placeholders.forEach((el) => {
  if (el.tagName.toLowerCase() === "a") {
    el.addEventListener("click", (event) => event.preventDefault());
  }
  if (el.tagName.toLowerCase() === "form") {
    el.addEventListener("submit", (event) => event.preventDefault());
  }
});

const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}
