(async () => {
  const res = await fetch("https://ad-server.altice-net.workers.dev/ad"); // ←自分のURLに変更
  const ad = await res.json();

  const a = document.createElement("a");
  a.href = ad.url;
  a.target = "_blank";

  const img = document.createElement("img");
  img.src = ad.image;
  img.style.width = "300px";

  a.appendChild(img);
  document.body.appendChild(a);
})();
