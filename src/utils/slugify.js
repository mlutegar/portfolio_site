/**
 * Turns a project name into a URL-safe slug.
 * "UFRJ - Pesquisa" -> "ufrj-pesquisa"
 * "IBMEC Empréstimos" -> "ibmec-emprestimos"
 */
export default function slugify(text = "") {
  return text
    .toString()
    .normalize("NFD") // split accented chars into base + diacritic
    .replace(/[̀-ͯ]/g, "") // strip diacritics
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-") // non-alphanumerics -> hyphen
    .replace(/^-+|-+$/g, ""); // trim leading/trailing hyphens
}
