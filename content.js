const observer = new MutationObserver(() => {
  const dialogs = document.querySelectorAll('[role="dialog"]');

  if (!dialogs) {return;}

  const parent = document.evaluate(
    "/html/body/div[1]/div[4]/main/div[3]/div[2]/div[3]/div/div[2]/div/div[3]/div/div/div/div",
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue;

  if (!parent) {return;}

  if (document.getElementById("ME-curl-button")) {return; }

  parent.insertAdjacentHTML("beforeend", `<div data-v-71fa7669="" class="btn-wrapper text-base" style="--_bg: var(--color-brand); --_text: var(--color-accent-contrast); --_hover-bg: var(--color-brand); --_hover-text: var(--color-accent-contrast); --_box-shadow: var(--shadow-button); --_height: 2.25rem; --_width: auto; --_radius: 0.75rem; --_padding-x: calc(0.75rem - 0.125rem); --_padding-y: 0.5rem; --_gap: 0.375rem; --_font-weight: 600; --_icon-size: 1.25rem;"><button data-v-71fa7669-s="" class="min-w-0" id="ME-curl-button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class=""><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg> cURL </button></div>`);

  parent.childNodes[3]?.remove();

  const curlButton = document.getElementById("ME-curl-button");

  curlButton.addEventListener("click", () => {
    const downloadButton = document.evaluate(
      "/html/body/div[1]/div[4]/main/div[3]/div[2]/div[3]/div/div[2]/div/div[3]/div/div/div/div/div[3]/a",
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
    ).singleNodeValue;

    navigator.clipboard.writeText("curl -O " + downloadButton.href);

    curlButton.textContent = "Copied!"
  })
});

observer.observe(document.body, {
  childList: true,
  subtree: true
})