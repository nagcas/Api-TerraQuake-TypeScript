# 🌍 Interfaccia TerraQuake

Un'interfaccia elegante e responsiva costruita con **React** e **Bootstrap 5**, progettata per visualizzare i dati sismici dalla **TerraQuake API**.  
Questa interfaccia permette agli utenti di esplorare in tempo reale gli eventi sismici con un layout pulito, feedback di caricamento e strumenti opzionali per sviluppatori.

---

## 🚀 Caratteristiche

- ⚡ **Dati sismici in tempo reale** recuperati dalla TerraQuake API  
- 🎨 **UI moderna con Bootstrap 5** e griglia responsiva
- 🔁 **Pulsante di aggiornamento manuale** con stato di caricamento dinamico
- 🧭 **Sezione introduttiva** con titolo e descrizione dell'API
- 🧩 **Modalità JSON espandibile** per sviluppatori
- 📱 **Layout completamente responsivo** (mobile-first)

---

## 🛠️ Tecnologie Utilizzate

| Tecnologia | Descrizione |
|------------|-------------|
| **React.js** | Framework per il frontend |
| **Bootstrap 5** | Stile e layout |
| **Vite / CRA** | Strumento di build |

---

## ⚙️ Installazione

1. **Clona il repository**
   ```bash
   git clone https://github.com/tuo-username/terraquake-interface.git
   cd terraquake-interface
   ```

2. **Installa le dipendenze**
   ```bash
   npm install
   ```

3. **Avvia il server di sviluppo**
   ```bash
   npm run dev
   ```

4. **Apri nel browser**
   ```
   http://localhost:5173
   ```

---

## 🌐 API Reference

Questo progetto si connette alla **[TerraQuake API](https://terraquakeapi.com/)**.  
Endpoint di esempio:
```bash
GET https://api.terraquakeapi.com/v1/earthquakes/recent
```

Risposta:
```json
 {
    "type": "Feature",
    "properties": {
      "eventId": 44643462,
      "originId": 141229461,
      "time": "2025-11-12T19:55:30.780000",
      "author": "SURVEY-INGV",
      "magType": "ML",
      "mag": 1.7,
      "magAuthor": "--",
      "type": "earthquake",
      "place": "Costa Garganica (Foggia)",
      "version": 100,
      "geojson_creationTime": "2025-11-12T21:12:03"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        15.4133,
        41.9347,
        9.2
      ]
    }
  },
```

---

## 📄 Licenza

Questo progetto è rilasciato sotto **MIT License**.  
Sentiti libero di usarlo e adattarlo per i tuoi progetti.

---

## 👤 Autore

**Gianluca Chiaravalloti**  
💻 Full Stack Developer | 🌋 Geologo | Founder di SafeGuard  
🔗 [Portfolio](https://portfolio-gianluca-phi.vercel.app/) • [LinkedIn](https://www.linkedin.com/in/gianluca-chiaravalloti-5694081a2/) • [GitHub](https://github.com/nagcas)

---
