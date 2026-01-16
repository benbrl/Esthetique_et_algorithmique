async function wikipedia_api() {
  const urlParams = new URLSearchParams(window.location.search);
  const url = urlParams.get("title");

  // si pas de paramètre, générer une lettre aléatoire
  if (!url) {
    const lettre = generer_lettre();
    text_background = lettre.texte;
    title = lettre.prenom;
  } else {
    //mettre en maj le texte
    title = url.toUpperCase();

    try {
      const response = await fetch(
        `https://fr.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
          url
        )}`
      );
      const wikipedia = await response.json();
      console.log(wikipedia);

      console.log(wikipedia.title);
      console.log(wikipedia.extract);
      if (wikipedia.extract) {
        text_background = wikipedia.extract;
      }
    } catch (error) {
      console.log(error);
    }
  }

  // mettre à jour le texte en majuscules et le répéter
  text_background = text_background.toUpperCase().repeat(20);

  // réinitialiser avec le nouveau texte
  initialize_grids();
  create_mask();
}
