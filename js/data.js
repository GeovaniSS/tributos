function formatarData(data) {
  const day = data.getDate().toString().padStart(2, "0");
  const month = (data.getMonth() + 1).toString().padStart(2, "0");
  const year = data.getFullYear();

  return `${year}-${month}-${day}`;
}

function atualizarDataAtual() {
  const dataElements = document.getElementsByName("data");
  const dataElementVisible = [...document.getElementsByName("data")].find(
    (el) => {
      return window.getComputedStyle(el).display !== "none";
    }
  );

  dataElements.forEach((dataEl) => {
    dataEl.value = formatarData(new Date());
  });
  dataElementVisible.addEventListener("change", ({ target }) => {
    dataElements.forEach((dataEl) => {
      dataEl.value = target.value;
    });
  });
}

document.addEventListener("DOMContentLoaded", atualizarDataAtual);
