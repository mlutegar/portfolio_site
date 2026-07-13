export const formatFileSizeDisplay = value => {
  if (value < 1024) {
    return `${value} KB`;
  }
  return `${parseFloat((value / 1024).toFixed(1))} MB`;
};

/* Copy-to-clipboard helper (with legacy execCommand fallback). */
export async function copyText(value) {
  try {
    if (
      typeof navigator !== "undefined" &&
      navigator.clipboard &&
      navigator.clipboard.writeText
    ) {
      await navigator.clipboard.writeText(value);
      return true;
    }
    const el = document.createElement("textarea");
    el.value = value;
    el.setAttribute("readonly", "");
    el.style.position = "absolute";
    el.style.left = "-9999px";
    el.style.opacity = "0";
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    return true;
  } catch {
    return false;
  }
}

/* Normaliza um item do portfolio para o formato esperado pelo AchievementCard.
   Compartilhado entre as seções Conquistas e Publicações. */
export function toCardInfo(card) {
  return {
    title: card.title,
    titleLang: card.titleLang,
    category: card.category,
    categoryIcon: card.categoryIcon,
    date: card.date,
    description: card.subtitle,
    image: card.image,
    imageAlt: card.imageAlt,
    footer: card.footerLink,
    highlight: card.highlight,
    seal: card.seal,
    sealLabel: card.sealLabel,
    heroMetrics: card.heroMetrics,
    stats: card.stats,
    tags: card.tags,
    verified: card.verified,
    authorRole: card.authorRole,
    citation: card.citation
  };
}

/* Escapa acentos para chaves/valores BibTeX seguros não é necessário aqui —
   mantemos UTF-8 (suportado por BibLaTeX/Biber). Gera uma entrada @inproceedings
   a partir dos metadados de uma publicação. */
export function buildBibtex(pub) {
  const key =
    pub.bibtexKey ||
    `${(pub.authors && pub.authors[0]
      ? pub.authors[0].split(" ").pop()
      : "author"
    ).toLowerCase()}${pub.year || ""}`;
  const authors = (pub.authors || []).join(" and ");
  const lines = [
    `@inproceedings{${key},`,
    pub.title ? `  title = {${pub.title}},` : null,
    authors ? `  author = {${authors}},` : null,
    pub.venue ? `  booktitle = {${pub.venue}},` : null,
    pub.year ? `  year = {${pub.year}},` : null,
    pub.doi ? `  doi = {${pub.doi}},` : null,
    pub.url ? `  url = {${pub.url}}` : null
  ].filter(Boolean);
  // remove a vírgula final da última linha antes de fechar
  const body = lines.join("\n").replace(/,(\s*)$/, "$1");
  return `${body}\n}`;
}
