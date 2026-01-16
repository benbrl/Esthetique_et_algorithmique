const micro = document.querySelector("#micro");

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
if (!SpeechRecognition) {
  alert("pas de reconnaissance vocale sur l'ordianteur");
  throw new Error("API non supportée.");
}

const recognition = new SpeechRecognition();
recognition.continuous = false;
recognition.lang = "fr-FR";
recognition.interimResults = false;
recognition.maxAlternatives = 1;

recognition.onstart = () => {
  console.log("micro activé");
};

recognition.onresult = (event) => {
  const response = event.results[0][0].transcript;
  console.log("reponse user", response);
  console.log("Confiance :", event.results[0][0].confidence);

  api_ollama_request(response);
};

recognition.onerror = (event) => {
  console.error("erreur SpeechRecognition :", event.error);
  console.error(event.error);
  if (event.error === "network") {
    alert("Vérifiez votre connexion Internet ou utilisez HTTPS.");
  }
};

micro.addEventListener("click", () => {
  console.log("Début de econnaissance...");
  recognition.start();
});

recognition.onend = () => {
  console.log("Reconnaissance terminée.");
};
