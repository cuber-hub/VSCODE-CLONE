// Comprehensive Emmet data for HTML, CSS, and JavaScript

export const htmlEmmetData = {
  // HTML5 Boilerplate
  "!": `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>\${1:Document}</title>
</head>
<body>
    \${2}
</body>
</html>`,

  // Basic HTML tags
  tags: {
    // Document structure
    html: '<html lang="${1:en}">${2}</html>',
    head: "<head>${1}</head>",
    body: "<body>${1}</body>",
    title: "<title>${1:Document}</title>",
    meta: "<meta ${1}/>",
    "meta:charset": '<meta charset="${1:UTF-8}"/>',
    "meta:utf": '<meta charset="UTF-8"/>',
    "meta:vp": '<meta name="viewport" content="width=device-width, initial-scale=1.0"/>',
    "meta:viewport": '<meta name="viewport" content="width=device-width, initial-scale=1.0"/>',
    "meta:compat": '<meta http-equiv="X-UA-Compatible" content="IE=edge"/>',
    "meta:edge": '<meta http-equiv="X-UA-Compatible" content="IE=edge"/>',
    "meta:ie": '<meta http-equiv="X-UA-Compatible" content="IE=edge"/>',
    "meta:refresh": '<meta http-equiv="refresh" content="${1:30}"/>',
    "meta:kw": '<meta name="keywords" content="${1}"/>',
    "meta:desc": '<meta name="description" content="${1}"/>',
    link: '<link rel="${1:stylesheet}" href="${2}"/>',
    "link:css": '<link rel="stylesheet" href="${1:style.css}"/>',
    "link:favicon": '<link rel="shortcut icon" type="image/x-icon" href="${1:favicon.ico}"/>',
    "link:touch": '<link rel="apple-touch-icon" href="${1:favicon.png}"/>',
    "link:rss": '<link rel="alternate" type="application/rss+xml" title="RSS" href="${1:rss.xml}"/>',
    "link:atom": '<link rel="alternate" type="application/atom+xml" title="Atom" href="${1:atom.xml}"/>',
    "link:import": '<link rel="import" href="${1:component.html}"/>',
    style: "<style>${1}</style>",
    script: "<script${1}>${2}</script>",
    "script:src": '<script src="${1}"></script>',
    base: '<base href="${1}"/>',

    // Content sectioning
    header: "<header>${1}</header>",
    nav: "<nav>${1}</nav>",
    main: "<main>${1}</main>",
    section: "<section>${1}</section>",
    article: "<article>${1}</article>",
    aside: "<aside>${1}</aside>",
    footer: "<footer>${1}</footer>",
    address: "<address>${1}</address>",
    hgroup: "<hgroup>${1}</hgroup>",

    // Text content
    div: "<div>${1}</div>",
    p: "<p>${1}</p>",
    hr: "<hr/>",
    pre: "<pre>${1}</pre>",
    blockquote: "<blockquote>${1}</blockquote>",
    ol: "<ol>${1}</ol>",
    ul: "<ul>${1}</ul>",
    li: "<li>${1}</li>",
    dl: "<dl>${1}</dl>",
    dt: "<dt>${1}</dt>",
    dd: "<dd>${1}</dd>",
    figure: "<figure>${1}</figure>",
    figcaption: "<figcaption>${1}</figcaption>",

    // Inline text semantics
    a: '<a href="${1}">${2}</a>',
    "a:link": '<a href="http://${1}">${2}</a>',
    "a:mail": '<a href="mailto:${1}">${2}</a>',
    "a:tel": '<a href="tel:${1}">${2}</a>',
    em: "<em>${1}</em>",
    strong: "<strong>${1}</strong>",
    small: "<small>${1}</small>",
    s: "<s>${1}</s>",
    cite: "<cite>${1}</cite>",
    q: "<q>${1}</q>",
    dfn: "<dfn>${1}</dfn>",
    abbr: '<abbr title="${1}">${2}</abbr>',
    ruby: "<ruby>${1}</ruby>",
    rt: "<rt>${1}</rt>",
    rp: "<rp>${1}</rp>",
    data: '<data value="${1}">${2}</data>',
    time: '<time datetime="${1}">${2}</time>',
    code: "<code>${1}</code>",
    var: "<var>${1}</var>",
    samp: "<samp>${1}</samp>",
    kbd: "<kbd>${1}</kbd>",
    sub: "<sub>${1}</sub>",
    sup: "<sup>${1}</sup>",
    i: "<i>${1}</i>",
    b: "<b>${1}</b>",
    u: "<u>${1}</u>",
    mark: "<mark>${1}</mark>",
    bdi: "<bdi>${1}</bdi>",
    bdo: '<bdo dir="${1:ltr}">${2}</bdo>',
    span: "<span>${1}</span>",
    br: "<br/>",
    wbr: "<wbr/>",

    // Image and multimedia
    img: '<img src="${1}" alt="${2}"/>',
    "img:s": '<img src="${1}" alt="${2}"/>',
    "img:d": '<img src="${1}" alt="${2}" width="${3}" height="${4}"/>',
    iframe: '<iframe src="${1}" frameborder="0">${2}</iframe>',
    embed: '<embed src="${1}" type="${2}"/>',
    object: '<object data="${1}" type="${2}">${3}</object>',
    param: '<param name="${1}" value="${2}"/>',
    video: "<video controls>${1}</video>",
    audio: "<audio controls>${1}</audio>",
    source: '<source src="${1}" type="${2}"/>',
    track: '<track src="${1}" kind="${2:subtitles}" srclang="${3:en}" label="${4}"/>',
    map: '<map name="${1}">${2}</map>',
    area: '<area shape="${1:rect}" coords="${2}" href="${3}" alt="${4}"/>',
    "area:d": '<area shape="default" href="${1}" alt="${2}"/>',
    "area:c": '<area shape="circle" coords="${1}" href="${2}" alt="${3}"/>',
    "area:r": '<area shape="rect" coords="${1}" href="${2}" alt="${3}"/>',
    "area:p": '<area shape="poly" coords="${1}" href="${2}" alt="${3}"/>',

    // Embedded content
    svg: '<svg xmlns="http://www.w3.org/2000/svg">${1}</svg>',
    math: "<math>${1}</math>",

    // Scripting
    canvas: "<canvas>${1}</canvas>",
    noscript: "<noscript>${1}</noscript>",

    // Demarcating edits
    del: "<del>${1}</del>",
    ins: "<ins>${1}</ins>",

    // Table content
    table: "<table>${1}</table>",
    caption: "<caption>${1}</caption>",
    colgroup: "<colgroup>${1}</colgroup>",
    col: "<col/>",
    tbody: "<tbody>${1}</tbody>",
    thead: "<thead>${1}</thead>",
    tfoot: "<tfoot>${1}</tfoot>",
    tr: "<tr>${1}</tr>",
    td: "<td>${1}</td>",
    th: "<th>${1}</th>",

    // Forms
    form: '<form action="${1}" method="${2:post}">${3}</form>',
    "form:get": '<form action="${1}" method="get">${2}</form>',
    "form:post": '<form action="${1}" method="post">${2}</form>',
    label: '<label for="${1}">${2}</label>',
    input: '<input type="${1:text}" name="${2}" id="${3}"/>',
    button: '<button type="${1:button}">${2}</button>',
    select: '<select name="${1}" id="${2}">${3}</select>',
    datalist: '<datalist id="${1}">${2}</datalist>',
    optgroup: '<optgroup label="${1}">${2}</optgroup>',
    option: '<option value="${1}">${2}</option>',
    textarea: '<textarea name="${1}" id="${2}" cols="${3:30}" rows="${4:10}">${5}</textarea>',
    keygen: '<keygen name="${1}" challenge="${2}" keytype="${3:rsa}"/>',
    output: '<output for="${1}" form="${2}" name="${3}">${4}</output>',
    progress: '<progress value="${1}" max="${2:100}">${3}</progress>',
    meter: '<meter value="${1}" min="${2:0}" max="${3:100}">${4}</meter>',
    fieldset: "<fieldset>${1}</fieldset>",
    legend: "<legend>${1}</legend>",

    // Interactive elements
    details: "<details>${1}</details>",
    summary: "<summary>${1}</summary>",
    dialog: "<dialog>${1}</dialog>",

    // Web Components
    slot: '<slot name="${1}">${2}</slot>',
    template: "<template>${1}</template>",

    // Headings
    h1: "<h1>${1}</h1>",
    h2: "<h2>${1}</h2>",
    h3: "<h3>${1}</h3>",
    h4: "<h4>${1}</h4>",
    h5: "<h5>${1}</h5>",
    h6: "<h6>${1}</h6>",

    // Document metadata
    "!DOCTYPE": "<!DOCTYPE html>",
    doc: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>\${1:Document}</title>
</head>
<body>
    \${2}
</body>
</html>`,
    doc4: `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <title>\${1:Document}</title>
</head>
<body>
    \${2}
</body>
</html>`,
    doc4t: `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <title>\${1:Document}</title>
</head>
<body>
    \${2}
</body>
</html>`,
  },

  // Input type variations
  inputTypes: {
    inp: '<input type="${1:text}" name="${2}" id="${3}"/>',
    input: '<input type="${1:text}" name="${2}" id="${3}"/>',
    "input:text": '<input type="text" name="${1}" id="${2}"/>',
    "input:t": '<input type="text" name="${1}" id="${2}"/>',
    "input:password": '<input type="password" name="${1}" id="${2}"/>',
    "input:p": '<input type="password" name="${1}" id="${2}"/>',
    "input:email": '<input type="email" name="${1}" id="${2}"/>',
    "input:e": '<input type="email" name="${1}" id="${2}"/>',
    "input:url": '<input type="url" name="${1}" id="${2}"/>',
    "input:u": '<input type="url" name="${1}" id="${2}"/>',
    "input:tel": '<input type="tel" name="${1}" id="${2}"/>',
    "input:number": '<input type="number" name="${1}" id="${2}"/>',
    "input:n": '<input type="number" name="${1}" id="${2}"/>',
    "input:range": '<input type="range" name="${1}" id="${2}" min="${3:0}" max="${4:100}"/>',
    "input:r": '<input type="range" name="${1}" id="${2}" min="${3:0}" max="${4:100}"/>',
    "input:date": '<input type="date" name="${1}" id="${2}"/>',
    "input:d": '<input type="date" name="${1}" id="${2}"/>',
    "input:time": '<input type="time" name="${1}" id="${2}"/>',
    "input:datetime": '<input type="datetime-local" name="${1}" id="${2}"/>',
    "input:dt": '<input type="datetime-local" name="${1}" id="${2}"/>',
    "input:datetime-local": '<input type="datetime-local" name="${1}" id="${2}"/>',
    "input:dtl": '<input type="datetime-local" name="${1}" id="${2}"/>',
    "input:month": '<input type="month" name="${1}" id="${2}"/>',
    "input:m": '<input type="month" name="${1}" id="${2}"/>',
    "input:week": '<input type="week" name="${1}" id="${2}"/>',
    "input:w": '<input type="week" name="${1}" id="${2}"/>',
    "input:color": '<input type="color" name="${1}" id="${2}"/>',
    "input:c": '<input type="color" name="${1}" id="${2}"/>',
    "input:checkbox": '<input type="checkbox" name="${1}" id="${2}"/>',
    "input:cb": '<input type="checkbox" name="${1}" id="${2}"/>',
    "input:radio": '<input type="radio" name="${1}" id="${2}"/>',
    "input:rb": '<input type="radio" name="${1}" id="${2}"/>',
    "input:file": '<input type="file" name="${1}" id="${2}"/>',
    "input:f": '<input type="file" name="${1}" id="${2}"/>',
    "input:submit": '<input type="submit" value="${1:Submit}"/>',
    "input:s": '<input type="submit" value="${1:Submit}"/>',
    "input:reset": '<input type="reset" value="${1:Reset}"/>',
    "input:button": '<input type="button" value="${1:Button}"/>',
    "input:b": '<input type="button" value="${1:Button}"/>',
    "input:hidden": '<input type="hidden" name="${1}" value="${2}"/>',
    "input:h": '<input type="hidden" name="${1}" value="${2}"/>',
    "input:search": '<input type="search" name="${1}" id="${2}"/>',
  },

  // Button type variations
  buttonTypes: {
    btn: '<button type="${1:button}">${2}</button>',
    "btn:b": '<button type="button">${1}</button>',
    "btn:s": '<button type="submit">${1}</button>',
    "btn:r": '<button type="reset">${1}</button>',
    "button:submit": '<button type="submit">${1}</button>',
    "button:reset": '<button type="reset">${1}</button>',
    "button:disabled": '<button type="button" disabled>${1}</button>',
  },

  // Common HTML structures
  structures: {
    "html:5": `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>\${1:Document}</title>
</head>
<body>
    \${2}
</body>
</html>`,
    "html:4t": `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <title>\${1:Document}</title>
</head>
<body>
    \${2}
</body>
</html>`,
    "html:4s": `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <title>\${1:Document}</title>
</head>
<body>
    \${2}
</body>
</html>`,
    "html:xt": `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
    <title>\${1:Document}</title>
</head>
<body>
    \${2}
</body>
</html>`,
    "html:xs": `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
    <title>\${1:Document}</title>
</head>
<body>
    \${2}
</body>
</html>`,
    "html:xxs": `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
    <title>\${1:Document}</title>
</head>
<body>
    \${2}
</body>
</html>`,
  },
}

export const cssEmmetData = {
  // Position
  pos: "position: $1;",
  "pos:s": "position: static;",
  "pos:a": "position: absolute;",
  "pos:r": "position: relative;",
  "pos:f": "position: fixed;",
  "pos:st": "position: sticky;",
  t: "top: $1;",
  r: "right: $1;",
  b: "bottom: $1;",
  l: "left: $1;",
  z: "z-index: $1;",

  // Display
  d: "display: $1;",
  "d:n": "display: none;",
  "d:b": "display: block;",
  "d:i": "display: inline;",
  "d:ib": "display: inline-block;",
  "d:f": "display: flex;",
  "d:if": "display: inline-flex;",
  "d:g": "display: grid;",
  "d:ig": "display: inline-grid;",
  "d:t": "display: table;",
  "d:tc": "display: table-cell;",
  "d:tr": "display: table-row;",

  // Visibility
  v: "visibility: $1;",
  "v:v": "visibility: visible;",
  "v:h": "visibility: hidden;",
  "v:c": "visibility: collapse;",

  // Overflow
  ov: "overflow: $1;",
  "ov:v": "overflow: visible;",
  "ov:h": "overflow: hidden;",
  "ov:s": "overflow: scroll;",
  "ov:a": "overflow: auto;",
  ovx: "overflow-x: $1;",
  ovy: "overflow-y: $1;",

  // Float
  fl: "float: $1;",
  "fl:n": "float: none;",
  "fl:l": "float: left;",
  "fl:r": "float: right;",
  cl: "clear: $1;",
  "cl:n": "clear: none;",
  "cl:l": "clear: left;",
  "cl:r": "clear: right;",
  "cl:b": "clear: both;",

  // Box Model
  w: "width: $1;",
  h: "height: $1;",
  maw: "max-width: $1;",
  mah: "max-height: $1;",
  miw: "min-width: $1;",
  mih: "min-height: $1;",

  // Margin
  m: "margin: $1;",
  mt: "margin-top: $1;",
  mr: "margin-right: $1;",
  mb: "margin-bottom: $1;",
  ml: "margin-left: $1;",
  mx: "margin-left: $1; margin-right: $1;",
  my: "margin-top: $1; margin-bottom: $1;",
  "m:a": "margin: auto;",

  // Padding
  p: "padding: $1;",
  pt: "padding-top: $1;",
  pr: "padding-right: $1;",
  pb: "padding-bottom: $1;",
  pl: "padding-left: $1;",
  px: "padding-left: $1; padding-right: $1;",
  py: "padding-top: $1; padding-bottom: $1;",

  // Border
  bd: "border: $1;",
  bdt: "border-top: $1;",
  bdr: "border-right: $1;",
  bdb: "border-bottom: $1;",
  bdl: "border-left: $1;",
  bdw: "border-width: $1;",
  bds: "border-style: $1;",
  "bds:n": "border-style: none;",
  "bds:h": "border-style: hidden;",
  "bds:dt": "border-style: dotted;",
  "bds:ds": "border-style: dashed;",
  "bds:s": "border-style: solid;",
  "bds:db": "border-style: double;",
  "bds:g": "border-style: groove;",
  "bds:r": "border-style: ridge;",
  "bds:i": "border-style: inset;",
  "bds:o": "border-style: outset;",
  bdc: "border-color: $1;",
  bdrs: "border-radius: $1;",

  // Background
  bg: "background: $1;",
  bgc: "background-color: $1;",
  bgi: "background-image: $1;",
  bgr: "background-repeat: $1;",
  "bgr:n": "background-repeat: no-repeat;",
  "bgr:x": "background-repeat: repeat-x;",
  "bgr:y": "background-repeat: repeat-y;",
  bga: "background-attachment: $1;",
  "bga:f": "background-attachment: fixed;",
  "bga:s": "background-attachment: scroll;",
  bgp: "background-position: $1;",
  bgs: "background-size: $1;",
  "bgs:a": "background-size: auto;",
  "bgs:ct": "background-size: contain;",
  "bgs:cv": "background-size: cover;",

  // Color
  c: "color: $1;",
  op: "opacity: $1;",

  // Font
  f: "font: $1;",
  ff: "font-family: $1;",
  fs: "font-size: $1;",
  fw: "font-weight: $1;",
  "fw:n": "font-weight: normal;",
  "fw:b": "font-weight: bold;",
  "fw:br": "font-weight: bolder;",
  "fw:lr": "font-weight: lighter;",
  fst: "font-style: $1;",
  "fst:n": "font-style: normal;",
  "fst:i": "font-style: italic;",
  "fst:o": "font-style: oblique;",
  fv: "font-variant: $1;",
  "fv:n": "font-variant: normal;",
  "fv:sc": "font-variant: small-caps;",

  // Text
  ta: "text-align: $1;",
  "ta:l": "text-align: left;",
  "ta:c": "text-align: center;",
  "ta:r": "text-align: right;",
  "ta:j": "text-align: justify;",
  td: "text-decoration: $1;",
  "td:n": "text-decoration: none;",
  "td:u": "text-decoration: underline;",
  "td:o": "text-decoration: overline;",
  "td:l": "text-decoration: line-through;",
  ti: "text-indent: $1;",
  tt: "text-transform: $1;",
  "tt:n": "text-transform: none;",
  "tt:c": "text-transform: capitalize;",
  "tt:u": "text-transform: uppercase;",
  "tt:l": "text-transform: lowercase;",
  lh: "line-height: $1;",
  ls: "letter-spacing: $1;",
  ws: "word-spacing: $1;",
  ww: "word-wrap: $1;",
  "ww:n": "word-wrap: normal;",
  "ww:bw": "word-wrap: break-word;",
  wb: "word-break: $1;",
  "wb:n": "word-break: normal;",
  "wb:k": "word-break: keep-all;",
  "wb:ba": "word-break: break-all;",

  // Flexbox
  fx: "flex: $1;",
  fxd: "flex-direction: $1;",
  "fxd:r": "flex-direction: row;",
  "fxd:rr": "flex-direction: row-reverse;",
  "fxd:c": "flex-direction: column;",
  "fxd:cr": "flex-direction: column-reverse;",
  fxw: "flex-wrap: $1;",
  "fxw:n": "flex-wrap: nowrap;",
  "fxw:w": "flex-wrap: wrap;",
  "fxw:wr": "flex-wrap: wrap-reverse;",
  jc: "justify-content: $1;",
  "jc:fs": "justify-content: flex-start;",
  "jc:fe": "justify-content: flex-end;",
  "jc:c": "justify-content: center;",
  "jc:sb": "justify-content: space-between;",
  "jc:sa": "justify-content: space-around;",
  "jc:se": "justify-content: space-evenly;",
  ai: "align-items: $1;",
  "ai:fs": "align-items: flex-start;",
  "ai:fe": "align-items: flex-end;",
  "ai:c": "align-items: center;",
  "ai:b": "align-items: baseline;",
  "ai:s": "align-items: stretch;",
  ac: "align-content: $1;",
  as: "align-self: $1;",
  fg: "flex-grow: $1;",
  fs: "flex-shrink: $1;",
  fb: "flex-basis: $1;",

  // Grid
  gtc: "grid-template-columns: $1;",
  gtr: "grid-template-rows: $1;",
  gta: "grid-template-areas: $1;",
  gt: "grid-template: $1;",
  gg: "grid-gap: $1;",
  gcg: "grid-column-gap: $1;",
  grg: "grid-row-gap: $1;",
  gc: "grid-column: $1;",
  gcs: "grid-column-start: $1;",
  gce: "grid-column-end: $1;",
  gr: "grid-row: $1;",
  grs: "grid-row-start: $1;",
  gre: "grid-row-end: $1;",
  ga: "grid-area: $1;",
  jis: "justify-items: $1;",
  acs: "align-content: $1;",
  js: "justify-self: $1;",
  as: "align-self: $1;",

  // Transform
  trf: "transform: $1;",
  trfo: "transform-origin: $1;",
  trfs: "transform-style: $1;",

  // Transition
  trs: "transition: $1;",
  trsp: "transition-property: $1;",
  trsd: "transition-duration: $1;",
  trstf: "transition-timing-function: $1;",
  trsdl: "transition-delay: $1;",

  // Animation
  anim: "animation: $1;",
  animn: "animation-name: $1;",
  animd: "animation-duration: $1;",
  animtf: "animation-timing-function: $1;",
  animdl: "animation-delay: $1;",
  animic: "animation-iteration-count: $1;",
  animdir: "animation-direction: $1;",
  animfm: "animation-fill-mode: $1;",
  animps: "animation-play-state: $1;",

  // Box Shadow
  bxsh: "box-shadow: $1;",
  "bxsh:n": "box-shadow: none;",
  "bxsh:i": "box-shadow: inset $1;",

  // Text Shadow
  tsh: "text-shadow: $1;",
  "tsh:n": "text-shadow: none;",

  // Cursor
  cur: "cursor: $1;",
  "cur:a": "cursor: auto;",
  "cur:d": "cursor: default;",
  "cur:p": "cursor: pointer;",
  "cur:t": "cursor: text;",
  "cur:m": "cursor: move;",
  "cur:h": "cursor: help;",
  "cur:w": "cursor: wait;",
  "cur:c": "cursor: crosshair;",
  "cur:nr": "cursor: not-allowed;",

  // List Style
  lis: "list-style: $1;",
  lisp: "list-style-position: $1;",
  "lisp:i": "list-style-position: inside;",
  "lisp:o": "list-style-position: outside;",
  list: "list-style-type: $1;",
  "list:n": "list-style-type: none;",
  "list:d": "list-style-type: disc;",
  "list:c": "list-style-type: circle;",
  "list:s": "list-style-type: square;",
  "list:dc": "list-style-type: decimal;",
  "list:dclz": "list-style-type: decimal-leading-zero;",
  "list:lr": "list-style-type: lower-roman;",
  "list:ur": "list-style-type: upper-roman;",
  lisi: "list-style-image: $1;",
  "lisi:n": "list-style-image: none;",

  // Table
  tbl: "table-layout: $1;",
  "tbl:a": "table-layout: auto;",
  "tbl:f": "table-layout: fixed;",
  cps: "caption-side: $1;",
  "cps:t": "caption-side: top;",
  "cps:b": "caption-side: bottom;",
  ec: "empty-cells: $1;",
  "ec:s": "empty-cells: show;",
  "ec:h": "empty-cells: hide;",

  // Content
  cnt: "content: $1;",
  "cnt:n": "content: normal;",
  "cnt:oq": "content: open-quote;",
  "cnt:noq": "content: no-open-quote;",
  "cnt:cq": "content: close-quote;",
  "cnt:ncq": "content: no-close-quote;",
  "cnt:a": "content: attr($1);",
  "cnt:c": "content: counter($1);",
  "cnt:cs": "content: counters($1);",

  // Quotes
  q: "quotes: $1;",
  "q:n": "quotes: none;",
  "q:ru": 'quotes: "\\201C" "\\201D" "\\2018" "\\2019";',
  "q:en": 'quotes: "\\201C" "\\201D" "\\2018" "\\2019";',

  // Counter
  coi: "counter-increment: $1;",
  cor: "counter-reset: $1;",

  // Resize
  rsz: "resize: $1;",
  "rsz:n": "resize: none;",
  "rsz:b": "resize: both;",
  "rsz:h": "resize: horizontal;",
  "rsz:v": "resize: vertical;",

  // User Select
  us: "user-select: $1;",
  "us:n": "user-select: none;",
  "us:t": "user-select: text;",
  "us:a": "user-select: all;",
  "us:auto": "user-select: auto;",
}

export const jsEmmetData = {
  // Console
  cl: "console.log($1);",
  ce: "console.error($1);",
  cw: "console.warn($1);",
  ci: "console.info($1);",
  cd: "console.debug($1);",
  ct: "console.table($1);",
  cg: "console.group($1);",
  cge: "console.groupEnd();",
  cc: "console.clear();",
  ca: "console.assert($1, $2);",
  cti: "console.time($1);",
  cte: "console.timeEnd($1);",
  ctr: "console.trace();",
  cco: "console.count($1);",
  ccr: "console.countReset($1);",

  // Variables
  v: "var $1 = $2;",
  l: "let $1 = $2;",
  c: "const $1 = $2;",

  // Functions
  f: "function $1($2) {\n\t$3\n}",
  fn: "function($1) {\n\t$2\n}",
  af: "($1) => {\n\t$2\n}",
  afn: "($1) => $2",
  iife: "(function($1) {\n\t$2\n})($3);",
  fa: "function $1($2) {\n\t$3\n}",
  fe: "function($1) {\n\t$2\n}",

  // Control Flow
  if: "if ($1) {\n\t$2\n}",
  ife: "if ($1) {\n\t$2\n} else {\n\t$3\n}",
  ei: "else if ($1) {\n\t$2\n}",
  el: "else {\n\t$1\n}",
  sw: "switch ($1) {\n\tcase $2:\n\t\t$3\n\t\tbreak;\n\tdefault:\n\t\t$4\n}",
  cs: "case $1:\n\t$2\n\tbreak;",
  df: "default:\n\t$1",

  // Loops
  for: "for (let $1 = 0; $1 < $2; $1++) {\n\t$3\n}",
  fori: "for (let $1 in $2) {\n\t$3\n}",
  foro: "for (let $1 of $2) {\n\t$3\n}",
  wh: "while ($1) {\n\t$2\n}",
  dw: "do {\n\t$1\n} while ($2);",

  // Try/Catch
  try: "try {\n\t$1\n} catch ($2) {\n\t$3\n}",
  tryf: "try {\n\t$1\n} catch ($2) {\n\t$3\n} finally {\n\t$4\n}",
  cat: "catch ($1) {\n\t$2\n}",
  fin: "finally {\n\t$1\n}",
  th: "throw new Error($1);",
  tn: "throw new $1($2);",

  // Objects
  o: "{\n\t$1\n}",
  oa: "Object.assign($1, $2)",
  ok: "Object.keys($1)",
  ov: "Object.values($1)",
  oe: "Object.entries($1)",
  of: "Object.freeze($1)",
  os: "Object.seal($1)",
  oc: "Object.create($1)",
  od: "Object.defineProperty($1, $2, $3)",
  ogpd: "Object.getOwnPropertyDescriptor($1, $2)",
  ogpn: "Object.getOwnPropertyNames($1)",

  // Arrays
  a: "[$1]",
  ap: "$1.push($2)",
  apo: "$1.pop()",
  as: "$1.shift()",
  au: "$1.unshift($2)",
  aj: "$1.join($2)",
  ar: "$1.reverse()",
  aso: "$1.sort($2)",
  asl: "$1.slice($2, $3)",
  asp: "$1.splice($2, $3, $4)",
  ac: "$1.concat($2)",
  ai: "$1.indexOf($2)",
  ali: "$1.lastIndexOf($2)",
  af: "$1.find($2)",
  afi: "$1.findIndex($2)",
  ain: "$1.includes($2)",
  afe: "$1.forEach($2)",
  am: "$1.map($2)",
  afl: "$1.filter($2)",
  ar: "$1.reduce($2, $3)",
  arr: "$1.reduceRight($2, $3)",
  ae: "$1.every($2)",
  aso: "$1.some($2)",
  afl: "$1.flat($2)",
  afm: "$1.flatMap($2)",

  // Strings
  s: '"$1"',
  st: "`$1`",
  sc: "$1.charAt($2)",
  scc: "$1.charCodeAt($2)",
  si: "$1.indexOf($2)",
  sli: "$1.lastIndexOf($2)",
  ssl: "$1.slice($2, $3)",
  ssu: "$1.substring($2, $3)",
  ssb: "$1.substr($2, $3)",
  ssp: "$1.split($2)",
  sr: "$1.replace($2, $3)",
  sra: "$1.replaceAll($2, $3)",
  sm: "$1.match($2)",
  sma: "$1.matchAll($2)",
  sse: "$1.search($2)",
  ste: "$1.test($2)",
  stu: "$1.toUpperCase()",
  stl: "$1.toLowerCase()",
  str: "$1.trim()",
  sts: "$1.trimStart()",
  ste: "$1.trimEnd()",
  spa: "$1.padStart($2, $3)",
  spe: "$1.padEnd($2, $3)",
  sst: "$1.startsWith($2)",
  sen: "$1.endsWith($2)",
  sin: "$1.includes($2)",
  sre: "$1.repeat($2)",

  // Promises
  p: "new Promise(($1, $2) => {\n\t$3\n})",
  pr: "Promise.resolve($1)",
  pj: "Promise.reject($1)",
  pa: "Promise.all([$1])",
  pas: "Promise.allSettled([$1])",
  pr: "Promise.race([$1])",
  pany: "Promise.any([$1])",
  th: "$1.then($2)",
  ca: "$1.catch($2)",
  fi: "$1.finally($2)",

  // Async/Await
  as: "async $1",
  aw: "await $1",
  asf: "async function $1($2) {\n\t$3\n}",
  asaf: "async ($1) => {\n\t$2\n}",

  // DOM
  dge: "document.getElementById($1)",
  dgc: "document.getElementsByClassName($1)",
  dgt: "document.getElementsByTagName($1)",
  dqs: "document.querySelector($1)",
  dqsa: "document.querySelectorAll($1)",
  dce: "document.createElement($1)",
  dct: "document.createTextNode($1)",
  dac: "$1.appendChild($2)",
  drc: "$1.removeChild($2)",
  dic: "$1.insertBefore($2, $3)",
  drp: "$1.replaceChild($2, $3)",
  dcl: "$1.cloneNode($2)",
  dsa: "$1.setAttribute($2, $3)",
  dga: "$1.getAttribute($2)",
  dra: "$1.removeAttribute($2)",
  dha: "$1.hasAttribute($2)",
  dih: "$1.innerHTML",
  doh: "$1.outerHTML",
  dtc: "$1.textContent",
  div: "$1.innerText",
  dcn: "$1.className",
  dcl: "$1.classList",
  dca: "$1.classList.add($2)",
  dcr: "$1.classList.remove($2)",
  dct: "$1.classList.toggle($2)",
  dcc: "$1.classList.contains($2)",
  dst: "$1.style",
  dv: "$1.value",
  dc: "$1.checked",
  dd: "$1.disabled",
  ds: "$1.selected",
  df: "$1.focus()",
  db: "$1.blur()",
  dcl: "$1.click()",
  dsc: "$1.scrollIntoView()",

  // Events
  ael: "$1.addEventListener($2, $3)",
  rel: "$1.removeEventListener($2, $3)",
  de: "$1.dispatchEvent($2)",
  pe: "$1.preventDefault()",
  sp: "$1.stopPropagation()",
  sip: "$1.stopImmediatePropagation()",

  // JSON
  jp: "JSON.parse($1)",
  js: "JSON.stringify($1)",
  jss: "JSON.stringify($1, null, 2)",

  // Math
  mr: "Math.random()",
  mf: "Math.floor($1)",
  mc: "Math.ceil($1)",
  mro: "Math.round($1)",
  mab: "Math.abs($1)",
  mmi: "Math.min($1)",
  mma: "Math.max($1)",
  mp: "Math.pow($1, $2)",
  msq: "Math.sqrt($1)",
  msi: "Math.sin($1)",
  mco: "Math.cos($1)",
  mta: "Math.tan($1)",
  mpi: "Math.PI",
  me: "Math.E",

  // Date
  dn: "new Date()",
  dno: "Date.now()",
  dgt: "$1.getTime()",
  dgy: "$1.getFullYear()",
  dgm: "$1.getMonth()",
  dgd: "$1.getDate()",
  dgh: "$1.getHours()",
  dgmi: "$1.getMinutes()",
  dgs: "$1.getSeconds()",
  dgms: "$1.getMilliseconds()",
  dsy: "$1.setFullYear($2)",
  dsm: "$1.setMonth($2)",
  dsd: "$1.setDate($2)",
  dsh: "$1.setHours($2)",
  dsmi: "$1.setMinutes($2)",
  dss: "$1.setSeconds($2)",
  dsms: "$1.setMilliseconds($2)",
  dts: "$1.toString()",
  dtis: "$1.toISOString()",
  dtls: "$1.toLocalString()",
  dtds: "$1.toDateString()",
  dtts: "$1.toTimeString()",

  // RegExp
  rn: "new RegExp($1, $2)",
  rt: "$1.test($2)",
  re: "$1.exec($2)",

  // Number
  ni: "Number.isInteger($1)",
  nn: "Number.isNaN($1)",
  nf: "Number.isFinite($1)",
  npi: "Number.parseInt($1, $2)",
  npf: "Number.parseFloat($1)",
  nms: "Number.MAX_SAFE_INTEGER",
  nmsi: "Number.MIN_SAFE_INTEGER",
  nmv: "Number.MAX_VALUE",
  nmiv: "Number.MIN_VALUE",
  npi: "Number.POSITIVE_INFINITY",
  nni: "Number.NEGATIVE_INFINITY",
  nna: "Number.NaN",
  nte: "$1.toExponential($2)",
  ntf: "$1.toFixed($2)",
  ntp: "$1.toPrecision($2)",
  nts: "$1.toString($2)",
  ntv: "$1.valueOf()",

  // Set
  sn: "new Set($1)",
  sa: "$1.add($2)",
  sd: "$1.delete($2)",
  sh: "$1.has($2)",
  sc: "$1.clear()",
  ss: "$1.size",
  sv: "$1.values()",
  sk: "$1.keys()",
  se: "$1.entries()",
  sfe: "$1.forEach($2)",

  // Map
  mn: "new Map($1)",
  ms: "$1.set($2, $3)",
  mg: "$1.get($2)",
  mh: "$1.has($2)",
  md: "$1.delete($2)",
  mc: "$1.clear()",
  msi: "$1.size",
  mk: "$1.keys()",
  mv: "$1.values()",
  me: "$1.entries()",
  mfe: "$1.forEach($2)",

  // WeakSet
  wsn: "new WeakSet($1)",
  wsa: "$1.add($2)",
  wsd: "$1.delete($2)",
  wsh: "$1.has($2)",

  // WeakMap
  wmn: "new WeakMap($1)",
  wms: "$1.set($2, $3)",
  wmg: "$1.get($2)",
  wmh: "$1.has($2)",
  wmd: "$1.delete($2)",

  // Symbol
  sy: "Symbol($1)",
  syf: "Symbol.for($1)",
  syk: "Symbol.keyFor($1)",
  syi: "Symbol.iterator",
  syas: "Symbol.asyncIterator",
  syhs: "Symbol.hasInstance",
  syic: "Symbol.isConcatSpreadable",
  sysp: "Symbol.species",
  syts: "Symbol.toStringTag",
  sytp: "Symbol.toPrimitive",

  // Error
  en: "new Error($1)",
  etn: "new TypeError($1)",
  ern: "new ReferenceError($1)",
  esn: "new SyntaxError($1)",
  ern: "new RangeError($1)",
  eun: "new URIError($1)",
  een: "new EvalError($1)",

  // Timeout/Interval
  st: "setTimeout($1, $2)",
  ct: "clearTimeout($1)",
  si: "setInterval($1, $2)",
  ci: "clearInterval($1)",
  raf: "requestAnimationFrame($1)",
  caf: "cancelAnimationFrame($1)",

  // Local Storage
  lss: "localStorage.setItem($1, $2)",
  lsg: "localStorage.getItem($1)",
  lsr: "localStorage.removeItem($1)",
  lsc: "localStorage.clear()",
  lsk: "localStorage.key($1)",
  lsl: "localStorage.length",

  // Session Storage
  sss: "sessionStorage.setItem($1, $2)",
  ssg: "sessionStorage.getItem($1)",
  ssr: "sessionStorage.removeItem($1)",
  ssc: "sessionStorage.clear()",
  ssk: "sessionStorage.key($1)",
  ssl: "sessionStorage.length",

  // Fetch API
  fe: "fetch($1)",
  fej: "fetch($1).then(response => response.json())",
  fet: "fetch($1).then(response => response.text())",
  feb: "fetch($1).then(response => response.blob())",
  fea: "fetch($1).then(response => response.arrayBuffer())",
  fef: "fetch($1).then(response => response.formData())",

  // Import/Export
  imp: 'import $1 from "$2"',
  impa: 'import * as $1 from "$2"',
  impd: 'import { $1 } from "$2"',
  impdd: 'import $1, { $2 } from "$3"',
  exp: "export $1",
  expd: "export default $1",
  expf: 'export { $1 } from "$2"',
  expa: 'export * from "$1"',
  expas: 'export * as $1 from "$2"',

  // Classes
  cl: "class $1 {\n\tconstructor($2) {\n\t\t$3\n\t}\n}",
  clx: "class $1 extends $2 {\n\tconstructor($3) {\n\t\tsuper($4);\n\t\t$5\n\t}\n}",
  con: "constructor($1) {\n\t$2\n}",
  met: "$1($2) {\n\t$3\n}",
  get: "get $1() {\n\treturn $2;\n}",
  set: "set $1($2) {\n\t$3\n}",
  sta: "static $1($2) {\n\t$3\n}",
  sup: "super($1)",

  // Destructuring
  da: "const [$1] = $2",
  dao: "const { $1 } = $2",
  daa: "const [$1, ...$2] = $3",
  daao: "const { $1, ...$2 } = $3",

  // Spread/Rest
  sp: "...$1",
  spa: "[$1, ...$2]",
  spo: "{ $1, ...$2 }",

  // Template Literals
  tl: "`$1`",
  tle: "`$1${$2}$3`",

  // Modules (CommonJS)
  req: 'const $1 = require("$2")',
  me: "module.exports = $1",
  mee: "module.exports.$1 = $2",
  ex: "exports.$1 = $2",
}
