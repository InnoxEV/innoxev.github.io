async function loadApps() {
  const containers = document.querySelectorAll("[data-apps-container]");

  if (!containers.length) {
    return;
  }

  await Promise.all(
    Array.from(containers, async (container) => {
      const source = container.dataset.appsSrc;

      if (!source) {
        container.innerHTML = `
          <div class="empty-state">
            <p>App data source is not configured.</p>
          </div>
        `;
        return;
      }

      try {
        const response = await fetch(source);

        if (!response.ok) {
          throw new Error("Unable to load app data.");
        }

        const apps = await response.json();

        container.innerHTML = apps
          .map(
            (app) => `
              <article class="app-card">
                <div class="app-card-header">
                  <h3>${app.name}</h3>
                  <span class="tag">${app.tag ?? "App"}</span>
                </div>
                <p>${app.description}</p>
                <a class="btn btn-primary" href="${app.downloadLink}">${app.downloadLabel ?? "Download"}</a>
              </article>
            `
          )
          .join("");
      } catch (error) {
        container.innerHTML = `
          <div class="empty-state">
            <p>${container.dataset.errorMessage ?? "App data could not be loaded right now. Please try again later."}</p>
          </div>
        `;
      }
    })
  );
}

document.addEventListener("DOMContentLoaded", loadApps);
