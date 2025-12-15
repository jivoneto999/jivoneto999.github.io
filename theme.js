// theme.js
(() => {
  const STORAGE_KEY = "ivo_portfolio_theme";
  const btn = document.getElementById("themeToggle");
  if (!btn) return;

  const getInitialTheme = () => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "dark" || saved === "light") return saved;

    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    return prefersDark ? "dark" : "light";
  };

  const applyTheme = (theme) => {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      btn.textContent = "☀️";
      btn.setAttribute("aria-label", "Alternar para tema claro");
    } else {
      document.documentElement.removeAttribute("data-theme");
      btn.textContent = "🌙";
      btn.setAttribute("aria-label", "Alternar para tema escuro");
    }
    localStorage.setItem(STORAGE_KEY, theme);
  };

  applyTheme(getInitialTheme());

  btn.addEventListener("click", () => {
    const isDark =
      document.documentElement.getAttribute("data-theme") === "dark";
    applyTheme(isDark ? "light" : "dark");
  });
})();
