[].forEach.call(document.querySelectorAll("a[data-go-url]"), (alink) => {
  ((showLink, goLink) => {
    alink.addEventListener("click", () => {
      alink.href = goLink;
    });
    alink.addEventListener("mouseover", () => {
      alink.href = showLink;
    });
    alink.addEventListener("contextmenu", () => {
      alink.href = goLink;
    });
    if (alink.innerText === showLink) {
      alink.addEventListener("copy", (e) => {
        e.clipboardData.setData("text/plain", goLink);
        e.preventDefault();
      });
    }
  })(alink.href, alink.getAttribute("data-go-url"));
});

[].forEach.call(document.querySelectorAll("span[data-copy-text]"), (span) => {
  ((goText) => {
    span.addEventListener("copy", (e) => {
      e.clipboardData.setData("text/plain", goText);
      e.preventDefault();
    });
  })(span.getAttribute("data-copy-text"));
});
