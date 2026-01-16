async function api_ollama_request(microphone) {
  const raw = JSON.stringify({
    model: model,
    prompt: `
Tu es une intelligence artificielle conversationnelle nommée Ily.
Réponds toujours par au moins une phrase complète, même courte.
Réponds de manière claire, naturelle et bienveillante.

Phrase de l'utilisateur : "${microphone}"
`,
    stream: false,
    options: {
      temperature: 0.5,
      top_p: 0.8,
    },
  });

  const response = await fetch(`${url_ollama}api/generate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: raw,
  });

  const data = await response.json();

  console.log("réponse ily :", data.response);

  // découper en mots pour l'animation et le TTS
  const words = data.response.split(" ");
  displayWordsSequentially(words);

  return data.response;
}
