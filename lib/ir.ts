export function toggleIR(force?: boolean) {
  const root = document.documentElement;
  const on = force ?? !root.hasAttribute("data-ir");
  if (on) root.setAttribute("data-ir", "");
  else root.removeAttribute("data-ir");
}
