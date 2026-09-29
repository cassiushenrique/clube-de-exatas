// TROQUE APENAS ESTES DOIS LINKS quando os formulários estiverem prontos.
const FORMULARIOS = {
  participantes: "https://forms.gle/V8P6cAPm72ESgXadA",
  extensionistas: ""
};

function configurarLink(selector, url) {
  document.querySelectorAll(selector).forEach(link => {
    const status = link.parentElement.querySelector(".form-status");
    if (url && url.startsWith("http")) {
      link.href = url;
      if (status) status.textContent = "Formulário disponível.";
    } else {
      link.href = "#";
      link.removeAttribute("target");
      link.addEventListener("click", e => e.preventDefault());
      if (status) status.textContent = "Inscrições em breve.";
    }
  });
}
configurarLink(".participant-link", FORMULARIOS.participantes);
configurarLink(".extension-link", FORMULARIOS.extensionistas);

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");
menuBtn.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(open));
});
document.querySelectorAll(".nav a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));
