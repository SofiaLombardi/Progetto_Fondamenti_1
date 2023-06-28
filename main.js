
// 1. Define route components

const Home = {
  data() {
  return {
        
  }
},template: 
`<h1>Progressive Web App</h1>
<p>Una Progressive Web App (PWA) è un'applicazione web che utilizza le tecnologie web moderne per fornire un'esperienza utente simile a quella delle applicazioni native, senza richiedere l'installazione di un'applicazione separata. Gli utenti possono semplicemente accedere all'applicazione tramite il browser web sul loro dispositivo e salvare l'applicazione sul loro schermo home per un facile accesso.<br><br>

Le PWA sono progettate per funzionare su qualsiasi dispositivo e su qualsiasi browser moderno, senza richiedere l'installazione di un'applicazione separata. Sono costruite utilizzando tecnologie come HTML, CSS e JavaScript, e utilizzano i servizi worker per consentire il caching offline e migliorare le prestazioni dell'applicazione.  sono progettate per essere sicure, affidabili e veloci, e possono essere facilmente installate dall'utente sul dispositivo come un'applicazione normale.<br><br>
<br>

Ci sono molti vantaggi e svantaggi nell'utilizzo delle Progressive Web App (PWA), di seguito ne elenco alcuni:<br><br></p>
<h2>Vantaggi</h2>
<ol>
  <li><strong>Esperienza utente migliore</strong>: <br>Le PWA offrono un'esperienza utente simile a quella delle applicazioni native, con transizioni fluide e un design intuitivo.</li>
  
  <li><strong>Accessibilità</strong>: <br>Le PWA possono essere utilizzate su qualsiasi dispositivo, senza richiedere l'installazione di un'applicazione separata.</li>
 
  <li><strong>Connettività limitata</strong>: <br>Le PWA funzionano anche offline grazie alla tecnologia di caching che consente all'utente di accedere ai contenuti anche in assenza di connessione internet</li>
  
  <li><strong>Installazione rapida</strong>: <br>Le PWA possono essere installate in modo rapido e facile senza passare attraverso un app store.</li>
  
  <li><strong>Aggiornamenti automatici</strong>: <br>Le PWA si aggiornano automaticamente, garantendo che gli utenti sempre utilizzino l'ultima versione dell'applicazione.</li>
  
  <li><strong>Sicurezza</strong>: <br>Le PWA sono altamente sicure grazie all'uso del protocollo HTTPS che garantisce la privacy dell'utente e la sicurezza dei dati.</li>
  
  <li><strong>Costi ridotti</strong>: <br>Creare una PWA costa meno rispetto allo sviluppo di un'applicazione nativa per diverse piattaforme.</li>
</ol>

<h2>Svantaggi</h2>
<ol>
  <li><strong>Limitazioni hardware</strong>:<br>Alcune funzioni delle applicazioni native potrebbero non essere supportate dalle PWA a causa delle limitazioni hardware del dispositivo</li>
  <br>
  <li><strong>Requisiti di connettività</strong>:<br> Le PWA funzionano meglio quando sono supportate da una connessione di rete affidabile</li>
  <br>
  <li><strong>Limitazioni API</strong>:<br> Alcune API possono non essere supportate dalle PWA.</li>
  <br>
  <li><strong>Esperienza utente inferiore</strong>:<br>Non tutte le funzionalità delle applicazioni native possono essere riprodotte nelle PWA, il che potrebbe portare a un'esperienza utente inferiore</li>
  <br>
  <li><strong>Visibilità</strong>:<br> Non tutti gli utenti sanno che le PWA esistono e come installarle, il che potrebbe portare a una minore visibilità dell'applicazione</li>
</ol>

<p>In generale, le PWA offrono molti vantaggi rispetto alle applicazioni web e alle applicazioni native, ma possono presentare alcune limitazioni a seconda del caso d'uso specifico. Prima di scegliere di sviluppare una PWA, è importante valutare attentamente i vantaggi e gli svantaggi in base alle esigenze del progetto. Inoltre utilizzano una combinazione di tecnologie web moderne per offrire un'esperienza utente simile a quella di un'applicazione mobile nativa.<br><br></p>

<h3>Tecnologie maggiormente utilizzate</h3>
<ul>
  <li><strong>HTML, CSS e JavaScript</strong>: <br>Queste sono le lingue di programmazione di base per la creazione di siti web e applicazioni web. Le PWA utilizzano queste tecnologie per creare l'interfaccia utente e le funzionalità dell'applicazione</li>
  <br>
  <li><strong>Service Worker</strong>: <br>Un Service Worker è un script JavaScript che viene eseguito in background per gestire la gestione della cache, la notifica push e altre funzionalità di background delle PWA. I service worker sono fondamentali per consentire alle PWA di funzionare offline e migliorare le prestazioni dell'applicazione</li>
  <br>
  <li><strong>App manifest</strong>:<br> L'app manifest è un file JSON che descrive l'applicazione e viene utilizzato per installare l'applicazione sul dispositivo dell'utente. L'app manifest definisce il nome dell'applicazione, l'icona dell'applicazione, il colore dell'interfaccia utente e altre informazioni sulla PWA</li>
  <br>
  <li><strong>HTTPS</strong>:<br>Poiché le PWA gestiscono dati sensibili e interagiscono con l'utente, è importante garantire la sicurezza dell'applicazione. L'uso del protocollo HTTPS garantisce la crittografia dei dati e la sicurezza dell'utente.</li>
  <br>
  <li><strong>API web</strong>:<br> Le PWA utilizzano le API web per interagire con il dispositivo dell'utente e offrire funzionalità avanzate come l'accesso alla fotocamera, al microfono, alla geolocalizzazione e ai sensori</li>
  <br>
  <li><strong>Framework e librerie</strong>:<br> Esistono numerosi framework e librerie JavaScript come React, Angular e Vue.js che semplificano lo sviluppo di PWA</li>
</ul>

<p>In sintesi, le PWA utilizzano le tecnologie web moderne per offrire un'esperienza utente simile a quella di un'applicazione mobile nativa. La combinazione di HTML, CSS e JavaScript con i Service Worker, l'app manifest e l'uso di API web garantiscono l'affidabilità, la sicurezza e le prestazioni delle PWA</p>` ,

mounted(){}
};

const Esempi = { 
  data() {
    return {}
}, template: 
  `<h1>Esempi di <abbr title="Progressive Web App">PWA</abbr></h1>
    <p>Ecco alcuni esempi di progressive web app (PWA):</p>
    
      <ul>
        <h2><strong>Twitter Lite:</strong></h2>
        <li>È una versione leggera dell'applicazione Twitter per dispositivi mobili, che consente agli utenti di accedere alle funzionalità principali dell'applicazione senza scaricare l'app completa.</li>
        
        <h2><strong>Starbucks:</strong></h2>
        <li>La PWA di Starbucks offre un'esperienza di pagamento mobile rapida e sicura, permettendo agli utenti di ordinare e pagare il loro caffè preferito in pochi click.</li>
        
        <h2>Trivago:</h2>
        <li>È una PWA che aiuta gli utenti a trovare le migliori offerte per le prenotazioni di hotel.
        <br> La PWA offre una navigazione veloce e una funzione di ricerca avanzata.</li>
        
        <h2><strong>Uber:</strong></h2>
        <li>La PWA di Uber consente agli utenti di richiedere un'auto con un clic, senza dover scaricare l'app completa.</li>
        
    </ul>
  

    <p>Questi sono solo alcuni esempi di progressive web app. Le PWA stanno diventando sempre più popolari grazie alla loro flessibilità, velocità e compatibilità con una vasta gamma di dispositivi.
    <br> In conclusione, le Progressive Web App sono un'ottima soluzione per gli sviluppatori che desiderano creare un'applicazione che funzioni su tutti i dispositivi e che offra un'esperienza utente simile a quella di un'applicazione nativa, senza richiedere l'installazione di un'applicazione separata.</p>  `,

    mounted(){}
  };
  

 const Film_Serie = { 
  data() {
    return {
        datiFilm:null   
    }
  },template: 
  `
<section>
  <div class="table-container">
    <table>
      <caption>Lista film</caption>
      <tr class="prima-riga">
              <th id="Titolo">Titolo</th>
              <th id="Anno">Anno</th>
              <th id="Trama">Trama</th>
              <th id="Tipologia">Tipologia</th>
              <th id="Stagionitotali">Stagioni</th>
          </tr>
          <tr v-for="dato in datiFilm">
            <td>{{dato.Titolo}}</td>
            <td>{{dato.Anno}}</td>
            <td>{{dato.Trama}}</td>
            <td>{{dato.Tipologia}}</td>
            <td>{{dato.StagioniTotali}}</td>
          </tr>
      </table>
  </div>
</section>`,
 methods: {
    getFilm: function(){
      axios.get('./lista-film.json')
        .then(response => {
          this.datiFilm = response.data
        });
  }
},
  mounted(){
    this.getFilm();
  }
};

const box_commenti ={ 
data() {
  return {
    comments: [
      { name: "Mario", text: "Questo è un commento." },
      { name: "Luigi", text: "Questo è un altro commento." },
    ],
    newComment: { name: "", text: "" },
    editingIndex: null,
  };
},
  template: `
  <div>
    <h2>Commenti</h2>
    <div v-for="(comment, index) in comments":key="index">
      <h3>{{ comment.name }}</h3>
      <p>{{ comment.text }}</p>
      <button @click="editComment(index)">Modifica</button>
      <button @click="deleteComment(index)">Rimuovi</button>
    </div>
    <form v-if="editingIndex === null" @submit.prevent="addComment">
      <ul>
        <li>
          <label for="name">Nome</label>
          <input type="text" id="name" v-model="newComment.name" required>
        </li>
        <li>
          <label for="comment">Commento</label>
          <textarea id="comment" v-model="newComment.text" required></textarea>
        </li>
        <li>
        <button type="submit">Aggiungi commento</button>
        </li>
      </ul>
    </form>
    
    <form v-if="editingIndex !== null" @submit.prevent="updateComment">
      <div>
        <label for="name">Nome</label>
        <input type="text" id="name" v-model="comments[editingIndex].name" required>
      </div>
      <div>
        <label for="comment">Commento</label>
        <textarea id="comment" v-model="comments[editingIndex].text" required></textarea>
      </div>
      <button type="submit">Salva modifica</button>
    </form>
  </div>
  `,
  methods: {
    addComment() {
      if (!this.newComment.name || !this.newComment.text) return;
      this.comments.push({ ...this.newComment });
      this.newComment.name = "";
      this.newComment.text = "";
    },
    editComment(index) {
      this.editingIndex = index;
    },
    updateComment() {
      if (!this.comments[this.editingIndex].name || !this.comments[this.editingIndex].text) return;
      this.editingIndex = null;
    },
    deleteComment(index) {
      this.comments.splice(index, 1);
    },
  },
};

const routes = [
  { path: '/', component: Home },
  { path: '/esempi', component: Esempi },
  { path: '/film_serie', component: Film_Serie },
  { path: '/box_commenti', component: box_commenti },
]
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: routes, 
})
const app = Vue.createApp({})

app.use(router)

app.mount('#app')


