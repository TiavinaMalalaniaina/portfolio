# Portfolio — Tiavina Ramiandrisoa

Portfolio en français, en HTML, CSS et JavaScript natifs. Aucune dépendance ni compilation. Les captures WebP et le CV d’origine sont conservés.

## Ouvrir le site

Ouvrir `index.html` dans un navigateur. Pour les vérifications, servir de préférence le dossier via un serveur HTTP local, par exemple avec Live Server dans VS Code.

## Fonctionnalités

- Présentation FullStack, projets, études de cas, compétences, parcours et contact.
- NaturaLodge et SPAT en tête, avec leurs captures réelles.
- Galeries : agrandissement, boutons précédent/suivant, flèches du clavier, Échap et retour du focus. Sans JavaScript, les liens ouvrent les images originales.
- Mode clair et sombre : préférence du système au premier accès, puis choix mémorisé dans le navigateur. Si le stockage est bloqué, la bascule fonctionne pour la visite en cours.
- Bascule du thème avec icônes soleil/lune et libellés accessibles. Logos des technologies en SVG locaux (sources et licences dans `assets/technologies/`).
- En-tête fixe avec menu mobile repliable, fermeture avec Échap ou après sélection et décalage automatique des ancres sous la navigation.
- Projet SPAT : application décisionnelle et pipeline ELT avec Python et dbt.
- Logos locaux de la SPAT, de RNA Dev, d’IT University et de l’Université Côte d’Azur, avec leurs sources dans `assets/entities/SOURCES.md`.
- CV PDF téléchargeable, e-mail et GitHub.
- Démo publique NaturaLodge : https://naturalodge.onrender.com.
- Images chargées progressivement, dimensions réservées et animations réduites selon les préférences d’accessibilité.

## Fichiers

- `index.html` : accueil, résumés des projets, compétences, parcours et contact.
- `naturalodge.html` : étude de cas NaturaLodge, galerie et démo publique.
- `spat.html` : étude de cas SPAT, pipeline ELT Python/dbt et galerie avec données fictives.
- `asako.html` : étude de cas Asa’ko, contribution web/mobile et usages hors ligne.
- `style.css` : palette, typographie, responsive et deux thèmes.
- `theme.js` : choix initial du thème avant affichage.
- `script.js` : bascule des thèmes et visualisation des captures.
- `assets/` : portrait et neuf captures WebP.
- `cv-tiavina-ramiandrisoa.pdf` : CV original.

Les pages des projets partagent les styles et scripts de l’accueil. Elles sont accessibles directement, sans routeur ni compilation, et possèdent chacune un titre et une description pour le référencement. Le thème mémorisé est commun aux quatre pages sur le même domaine. Les liens « Retour aux projets » et « Projet suivant » permettent de poursuivre la navigation.

## GitHub Pages

1. Ajouter ces fichiers à un dépôt GitHub, en préservant leur structure.
2. Dans **Settings → Pages**, choisir **Deploy from a branch**.
3. Sélectionner la branche contenant le site et le dossier **/(root)**, puis enregistrer.

Les chemins relatifs conviennent aussi à une publication sous `/nom-du-depot/`. `.nojekyll` désactive le traitement Jekyll. Aucun workflow ni build n’est nécessaire.

## Vercel

1. Importer le dépôt dans Vercel.
2. Choisir le preset **Other**, sans commande de build ni installation.
3. Garder la racine comme dossier de sortie (`.`), puis lancer le déploiement.

`vercel.json` fournit les réglages statiques et deux en-têtes HTTP. Aucun secret ni variable d’environnement n’est requis. Aucun déploiement n’est effectué automatiquement depuis ce dossier.

## Vérifications avant publication

- Vérifier les dates et les intitulés conservés du portfolio initial, ainsi que le contenu du CV.
- Vérifier les autorisations de diffusion des captures. Les captures SPAT sont présentées avec des données fictives ; ne pas y substituer de données réelles confidentielles.
- Tester la démo NaturaLodge, le téléchargement du CV, l’e-mail et le profil GitHub.
- Tester les deux thèmes sur mobile, tablette et ordinateur, ainsi que la navigation au clavier et la galerie.
- Ajouter les métadonnées d’URL canonique et de partage absolues une fois le domaine public choisi. Aucune URL de portfolio n’a été inventée.

La police Manrope est chargée via Google Fonts ; la police sans-serif du système prend le relais si son chargement échoue. Aucun outil de suivi n’est intégré. Aucun code source privé des projets n’est inclus.
