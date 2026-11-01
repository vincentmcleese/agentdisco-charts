/* AgentDisco charts: AgentDiscoCharts.render(elementOrId, data). MIT. */
(function (root) {
  "use strict";
  var LOGOS = {"claude": "data:image/png;base64,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", "chatgpt": "data:image/png;base64,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", "Brek": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACshmLzAAADtklEQVRIDbVWO2ycRRCe2f0fdz77SGzHlq0kxJKNSZQEEpKYgoBELAoKkCiQKKkRQlRUNAgEDYKGiAIJUVMgJZFShERBoUA8TIKEgqJE9gUITvy+s+/uf+wOs+fY6HZ/36Ng9Pvudvaf79ud/WbWODk+Dv+neTuBK6CEyJoNUAjL1W6YTRCTHhLBmVz/QdnjITII/1VIfVG7t6wTYUadWgYBo5/0ix/1jY95Pc0wOJNULkZLYYOyeWrHkU3AmRmR4Sd9E6NeHkg3x3UDvBVppzQmejkczELfiujy2ybg7B72ersEafW6TcDvpmCLpxVAu7kMgp+ScruoLuZtAlb6+WjxOnOgdGG6kOdWsE3A44pWb5VvfRctapVA0xNXtYo1JBpUx1nEzFaR6CSQ4amRqcf7J0NhpIyAK3HlSunc/nA90mK+DgsRJARBu6qz64CxSKf54t7dU2+XRo7PCZ+IODMEGBOezt/+YNf3EQRrCdyswDf/4JUHmBJ4O+fOISAtg96BZ97NDT9Bad2kaMsQPF8GmvkQdgfw3CCcHqSrC/DhLfyzaraSababVFI48Hxu+CilNbPuZqOGh72aIGocxvQQnX1SjxVMujLNJuBkB0NHMl/NdNYUPNYL7x3UBWlYXXMImIFP1WnUbuS2p65gqh9e3UssMNccAqJ46Q/osq2xcF8ZJT4YdxM2AUq/OvttslZCGbrL2cnDQnq0Bw4XgX9YZhMAinRjcfHa+8nKHUCftMey2n5apC5AmOgldweOTLmmpF+f/+3ehTf2PP3SrkMnhdcoNBRqZam+dBMe8R1xmUVzUgfCjJkMAlI6KPYden163/RE0BdzhTXisRb7A8v9VF8Az9l3Iy+RyrhLHQIi4cmn3nlt/wsnVJ1vz4fKYFmJXC4oFqjmpLmBzsnhcnMr2l6LitPRZ4/uO3Msrda30RsIXHbGHv5u/mLccgq/V1DaeOA4gIZPTHYr01DAjys4u5HRlBwCRL+Qa6GW5qWbkUBYV/DlHGb2cIdAU7k03/n/VxzvI3x2B39eze53NoHw5d1Lv9QWVvmo3cVaHu6gfCaf3sav7mKn3RSlrMzdn/n467i84eVDGXCH9vgR5vGlMECc8bwEiXB9Dd68gZ/PImfJ1c/mahyZck4D76/Lv5bn7h948VRxbMQow9wBWF2PHtz4+1pebhCWqvDDMs6sQlUZvhaWfWVygE4VVxyjM/RmvBEpIgnBWuXz5FX77e5LDszYwSacOYPmY/gvCQy9+VIHn/8CFy1r9nPHz0UAAAAASUVORK5CYII=", "Expedia": "data:image/png;base64,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"};
  var PLATFORM = { claude: "Claude", chatgpt: "ChatGPT" };
  var BASE = (typeof document !== "undefined" && document.currentScript && document.currentScript.src || "").replace(/[^/]*$/, "");
  var LOGO_FILES = { ashby: "ashby.png", manatal: "manatal.png", greenhouse: "greenhouse.png", teamtailor: "teamtailor.svg", workable: "workable.png" };
  function logoFor(logos, key) {
    if (!key) return null;
    if (logos[key]) return logos[key];
    var k = String(key).toLowerCase();
    return LOGO_FILES[k] && BASE ? BASE + "logos/" + LOGO_FILES[k] : null;
  }
  var BANDS = [[80, "Winning", "#0B6B3A", "#0B6B3A"], [60, "Competitive", "#14A070", "#0A6E4B"], [40, "Emerging", "#F4BE21", "#8A6700"], [10, "Buried", "#E8792E", "#A4501A"], [0, "Invisible", "#D84A3A", "#B03324"]];
  var MON = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var CSS = '.adc{--ink:#101010;--soft:#535b57;--muted:#6c746f;--faint:#a3aba6;--line:#e0e6e2;--grid:#e5e7eb;--rest:#c4cbc7;--you:#003580;--green:#14a070;--green-ink:#0e7a55;--mint:#e4f8ee;'
    + 'box-sizing:border-box;width:100%;background:#fff;color:var(--ink);border-radius:12px;padding:16px;color-scheme:light;'
    + 'font-family:"Manrope","PP Neue Montreal",Inter,system-ui,-apple-system,"Segoe UI",sans-serif;font-variant-numeric:tabular-nums;line-height:1.4}'
    + '.adc *{box-sizing:border-box}.adc h3{font-size:17px;font-weight:500;letter-spacing:-.02em;margin:0 0 2px;color:var(--ink)}'
    + '.adc .sub{font-size:12px;color:var(--muted);margin:0 0 12px}'
    + '.adc .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(340px,1fr));gap:12px}'
    + '.adc .card{background:#fff;border:1px solid var(--line);border-radius:12px;padding:14px 14px 8px;box-shadow:0 6px 24px rgb(18 73 51 / .04);min-width:0}'
    + '.adc .head{display:flex;align-items:center;gap:8px;font-size:13.5px;font-weight:600;margin-bottom:4px;flex-wrap:wrap}'
    + '.adc .head img{width:16px;height:16px;border-radius:3px}'
    + '.adc .note{margin-left:auto;font-weight:600;font-size:12px;color:var(--green-ink);background:var(--mint);border-radius:999px;padding:2px 8px}'
    + '.adc svg{width:100%;height:auto;display:block;overflow:visible}.adc svg text{font-family:inherit;font-variant-numeric:tabular-nums}'
    + '.adc .legend{display:flex;flex-wrap:wrap;gap:14px;font-size:12px;color:var(--soft);margin-top:10px}'
    + '.adc .legend i{display:inline-block;width:16px;height:0;border-top:2.5px solid var(--you);vertical-align:middle;margin-right:6px}';

  function band(v) { for (var i = 0; i < BANDS.length; i++) if (Math.round(v) >= BANDS[i][0]) return BANDS[i]; return BANDS[4]; }
  function day(s) { return new Date(s + "T00:00:00Z").getTime(); }
  function lab(s) { var d = new Date(s + "T00:00:00Z"); return MON[d.getUTCMonth()] + " " + d.getUTCDate(); }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function last(a) { return a[a.length - 1]; }

  function frame(weeks) {
    var W = 560, H = 290, m = { t: 34, r: 128, b: 26, l: 34 };
    var x0 = day(weeks[0]), x1 = day(last(weeks));
    var c = { W: W, H: H, m: m };
    c.X = function (d) { return m.l + 8 + (day(d) - x0) / (x1 - x0) * (W - m.l - m.r - 16); };
    c.Y = function (v) { return m.t + (1 - v / 100) * (H - m.t - m.b); };
    c.path = function (ws, vs) { return ws.map(function (w, i) { return (i ? "L" : "M") + c.X(w).toFixed(1) + " " + c.Y(vs[i]).toFixed(1); }).join(" "); };
    var g = "";
    for (var v = 0; v <= 100; v += 20) g += '<line x1="' + m.l + '" x2="' + (W - m.r) + '" y1="' + c.Y(v) + '" y2="' + c.Y(v) + '" stroke="var(--grid)" stroke-dasharray="3 3"/><text x="' + (m.l - 8) + '" y="' + (c.Y(v) + 4) + '" text-anchor="end" font-size="11" fill="var(--muted)">' + v + '%</text>';
    var every = weeks.length > 9 ? 2 : 1;
    weeks.forEach(function (w, i) { if (i % every === (weeks.length - 1) % every) g += '<text x="' + c.X(w) + '" y="' + (H - 6) + '" text-anchor="middle" font-size="11" fill="var(--muted)">' + lab(w) + '</text>'; });
    c.g = g;
    return c;
  }

  function marker(c, date, label, logo, color) {
    var x = c.X(date), col = color || "var(--muted)", top = 6;
    return '<line x1="' + x + '" x2="' + x + '" y1="' + c.m.t + '" y2="' + (c.H - c.m.b) + '" stroke="' + col + '" stroke-opacity=".7" stroke-dasharray="4 3" stroke-width="1.25"/>'
      + '<circle cx="' + x + '" cy="' + c.m.t + '" r="3.5" fill="#fff" stroke="' + col + '" stroke-width="1.5"/>'
      + (logo ? '<image href="' + logo + '" x="' + (x - 8) + '" y="' + (top - 2) + '" width="16" height="16"/>' : "")
      + '<text x="' + (x + (logo ? 11 : 6)) + '" y="' + (top + 10) + '" font-size="11" font-weight="600" fill="var(--soft)">' + esc(label) + '</text>';
  }

  function endLabels(c, items) {
    items.sort(function (a, b) { return a.y - b.y; });
    for (var i = 1; i < items.length; i++) if (items[i].y - items[i - 1].y < 30) items[i].y = items[i - 1].y + 30;
    return items.map(function (it) { return '<g transform="translate(' + (c.W - c.m.r + 10) + ',' + (it.y + 4) + ')">' + it.html + '</g>'; }).join("");
  }

  function chip(v, x) {
    var b = band(v);
    return '<rect x="' + x + '" y="-11" rx="7" width="' + (b[1].length * 6.2 + 12) + '" height="15" fill="' + b[2] + '" fill-opacity=".14"/><text x="' + (x + 6) + '" y="0" font-size="10.5" font-weight="600" fill="' + b[3] + '">' + b[1] + '</text>';
  }

  function dots(c, ws, vs, fill, stroke, r) {
    return vs.map(function (v, i) { return '<circle cx="' + c.X(ws[i]) + '" cy="' + c.Y(v) + '" r="' + r + '" fill="' + fill + '" stroke="' + stroke + '" stroke-width="1.5"/>'; }).join("");
  }

  function losing(d, p, logos) {
    var c = frame(d.weeks), s = c.g;
    var stable = p.series.filter(function (x) { return x.role !== "losing"; }), lose = p.series.filter(function (x) { return x.role === "losing"; });
    stable.forEach(function (x) { s += '<path d="' + c.path(d.weeks, x.values) + '" fill="none" stroke="var(--rest)" stroke-width="1.25"/>'; });
    (p.markers || []).forEach(function (k) { s += marker(c, k.date, k.brand + " · " + lab(k.date), logoFor(logos, k.logo || k.brand)); });
    var labels = [];
    lose.forEach(function (x, j) {
      s += '<path d="' + c.path(d.weeks, x.values) + '" fill="none" stroke="var(--you)" stroke-width="2.5" stroke-linejoin="round" stroke-dasharray="' + (j % 2 ? "6 4" : "") + '"/>';
      s += dots(c, d.weeks, x.values, "var(--you)", "#fff", 2.5);
      var v = last(x.values);
      labels.push({ y: c.Y(v), html: '<text font-size="12" font-weight="600" fill="var(--ink)">' + Math.round(v) + '%</text>' + chip(v, 34) + '<text y="13" font-size="10.5" fill="var(--soft)">' + esc(x.name) + '</text>' });
    });
    if (stable.length) {
      var vs = stable.map(function (x) { return last(x.values); });
      labels.push({ y: c.Y(Math.max.apply(null, vs)), html: '<text font-size="11" fill="var(--muted)">Other Intents</text><text y="13" font-size="10.5" fill="var(--faint)">' + Math.round(Math.min.apply(null, vs)) + '-' + Math.round(Math.max.apply(null, vs)) + '%</text>' });
    }
    return '<svg viewBox="0 0 ' + c.W + ' ' + c.H + '" role="img">' + s + endLabels(c, labels) + '</svg>';
  }

  function uplift(d, p) {
    var lw = last(d.weeks), now = last(p.actual);
    // The projection starts at the fix, on the last actual point: forecast points on or before it are dropped.
    var fut = p.forecast.weeks.filter(function (w) { return day(w.week) > day(lw); }), fwk = fut.map(function (w) { return w.week; });
    var c = frame(d.weeks.concat(fwk)), s = c.g, ws = [lw].concat(fwk);
    var hi = [now].concat(fut.map(function (w) { return w.high; })), lo = [now].concat(fut.map(function (w) { return w.low; })), ex = [now].concat(fut.map(function (w) { return w.expected; }));
    var back = ws.map(function (w, i) { return "L" + c.X(w).toFixed(1) + " " + c.Y(lo[i]).toFixed(1); }).reverse().join(" ");
    s += '<path d="' + c.path(ws, hi) + " " + back + ' Z" fill="var(--green)" fill-opacity=".14"/>';
    s += marker(c, d.fix_on || lw, d.fix_label || "Proposed fix", null, "var(--ink)");
    s += '<path d="' + c.path(d.weeks, p.actual) + '" fill="none" stroke="var(--you)" stroke-width="2.5" stroke-linejoin="round"/>' + dots(c, d.weeks, p.actual, "var(--you)", "#fff", 2.5);
    s += '<path d="' + c.path(ws, ex) + '" fill="none" stroke="var(--green)" stroke-width="2.5" stroke-dasharray="6 4" stroke-linejoin="round"/>' + dots(c, fwk, ex.slice(1), "#fff", "var(--green)", 2.5);
    var end = last(ex);
    return '<svg viewBox="0 0 ' + c.W + ' ' + c.H + '" role="img">' + s + endLabels(c, [
      { y: c.Y(end), html: '<text font-size="12" font-weight="600" fill="var(--green-ink)">' + Math.round(end) + '%</text>' + chip(end, 34) + '<text y="13" font-size="10.5" fill="var(--soft)">Projected</text>' },
      { y: c.Y(now), html: '<text font-size="12" font-weight="600" fill="var(--ink)">' + Math.round(now) + '%</text>' + chip(now, 34) + '<text y="13" font-size="10.5" fill="var(--soft)">Now</text>' }
    ]) + '</svg>';
  }

  function render(el, d) {
    if (typeof el === "string") el = document.getElementById(el);
    if (!document.getElementById("adc-css")) { var st = document.createElement("style"); st.id = "adc-css"; st.textContent = CSS; document.head.appendChild(st); }
    var logos = Object.assign({}, LOGOS, d.logos || {});
    var up = d.chart === "uplift";
    var cards = d.panels.map(function (p) {
      return '<div class="card"><div class="head">' + (logoFor(logos, p.harness) ? '<img src="' + logoFor(logos, p.harness) + '" alt="">' : "") + esc(PLATFORM[p.harness] || p.harness)
        + (p.forecast && p.forecast.label ? '<span class="note">' + esc(p.forecast.label) + '</span>' : "") + '</div>' + (up ? uplift(d, p) : losing(d, p, logos)) + '</div>';
    }).join("");
    var legend = up
      ? '<span><i></i>' + esc(d.actual_label || "Actual") + '</span><span><i style="border-top:2.5px dashed var(--green)"></i>Projected if you ship</span><span><i style="border-top:8px solid rgba(20,160,112,.14)"></i>Likely range</span>'
      : '<span><i></i>' + esc(d.losing_label || "Losing Intents") + '</span><span><i style="border-top:1.25px solid var(--rest)"></i>Other Intents</span><span><i style="border-top:1.25px dashed var(--muted);width:10px"></i>Competitor first offered</span>';
    var wrap = document.createElement("div");
    wrap.className = "adc";
    if (d.color && /^#[0-9a-f]{3,8}$/i.test(d.color)) wrap.style.setProperty("--you", d.color);
    wrap.innerHTML = (d.title ? '<h3>' + esc(d.title) + '</h3>' : "") + (d.subtitle ? '<p class="sub">' + esc(d.subtitle) + '</p>' : "") + '<div class="grid">' + cards + '</div><div class="legend">' + legend + '</div>';
    el.innerHTML = "";
    el.appendChild(wrap);
    return wrap;
  }

  root.AgentDiscoCharts = { render: render, version: "1.1.1" };
})(typeof window !== "undefined" ? window : this);
