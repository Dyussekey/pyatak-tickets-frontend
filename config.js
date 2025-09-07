// Общие настройки фронта
const CONFIG = {
  API_URL: "https://pyatak-tickets-api.onrender.com", // без завершающего слеша

  clubs: {
    pyatak:   { key:"pyatak",   title:"Пятак",          pcs:76, extras:["Кассовый ПК"],             hotel:[] },
    premium:  { key:"premium",  title:"Пятак Premium",  pcs:40, extras:["Кибер-отель 1","Кибер-отель 2","Кассовый ПК"], hotel:[] },
    level:    { key:"level",    title:"Пятак Level",    pcs:30, extras:["Кассовый ПК"],             hotel:[] },
  },

  // ВРЕМЕННЫЕ ПРИМЕРЫ — ПОМЕНЯЙ!
  tariffs: {
    pyatak: {
      "Обычный ПК": 500,      // тг/час
      "VIP зал":    750,
      "Дуо комната":1000
    },
    premium: {
      "Обычный ПК": 600,
      "Кибер-отель": 900
    },
    level: {
      "Обычный ПК": 450
    }
  }
};

// Вспомогательные функции
const StatusMap = { new:"Новая", in_progress:"В работе", done:"Выполнено" };
const pad = n => String(n).padStart(2,"0");
const localIsoNoZ = d => `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
const fmtShort = dt => { try{const d=new Date(dt);return d.toLocaleString("ru-RU",{day:'2-digit',month:'2-digit',hour:'2-digit',minute:'2-digit'});}catch{return dt;} };


