function redirectTo(page, params) {
    document.body.style.opacity = 0;

    let paramsString = "";

    if (params) {
      for (const [key, value] of Object.entries(params)) {
        paramsString += `${key}=${value}&`;
      }
      paramsString = paramsString.slice(0, -1);
    }

    setTimeout(() => {
      window.location.href =
        page + (paramsString ? "?" + paramsString : "");
    }, 300);
  }