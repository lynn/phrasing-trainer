const BE = "B are be am were was is being been/a";
const DO = "RP do did does doing done/it";
const HAVE = "T have had has having had/to";
const verbData = [
  "RB ask asked asks asking asked",
  BE,
  "RPBG become became becomes becoming become/a",
  "BL believe believed believes believing believed/that",
  "RBLG call called calls calling called",
  "BGS can could can * *",
  "RZ care cared cares caring cared",
  "PBGZ change changed changes changing changed",
  "BG come came comes coming come/to",
  "RBGZ consider considered considers considering considered",
  DO,
  "PGS expect expected expects expecting expected/that",
  "LT feel felt feels feeling felt/like",
  "PBLG find found finds finding found/that",
  "RG forget forgot forgets forgetting forgotten/to",
  "GS get got gets getting got/to",
  "GZ give gave gives giving given",
  "G go went goes going gone/to",
  HAVE,
  "PZ happen happened happens happening happened",
  "PG hear heard hears hearing heard/that",
  "RPS hope hoped hopes hoping hoped/to",
  "PLG imagine imagined imagines imagining imagined/that",
  "PBLGSZ just just just just just",
  "PBGS keep kept keeps keeping kept",
  "PB know knew knows knowing known/that",
  "RPBS learn learned learns learning learned/to",
  "LGZ leave left leaves leaving left",
  "LS let let lets letting let",
  "BLG like liked likes liking liked/to",
  "LZ live lived lives living lived",
  "L look looked looks looking looked",
  "LG love loved loves loving loved/to",
  "RPBL make made makes making made/a",
  "PL may might may may might/be",
  "PBL mean meant means meaning meant/to",
  "PLZ move moved moves moving moved",
  "PBLGS must must must * */be",
  "RPG need needed needs needing needed/to",
  "PS put put puts putting put/it",
  "RS read read reads reading read",
  "RLS realize realized realizes realizing realized/that",
  "RLG really really really really really",
  "RL recall recalled recalls recalling recalled",
  "RPL remember remembered remembers remembering remembered/that",
  "RPLS remain remained remains remaining remained",
  "R run ran runs running run",
  "BS say said says saying said/that",
  "S see saw sees seeing seen",
  "PLS seem seemed seems seeming seemed/to",
  "BLS set set sets setting set",
  "RBL shall should shall * *",
  "RBZ show showed shows showing shown",
  "RBT take took takes taking taken",
  "RLT tell told tells telling told",
  "PBG think thought thinks thinking thought/that",
  "RT try tried tries trying tried/to",
  "RPB understand understood understands understanding understood/the",
  "Z use used uses using used",
  "P want wanted wants wanting wanted/to",
  "RBGS will would will * *",
  "RBS wish wished wishes wishing wished/to",
  "RBG work worked works working worked/on",
];

const simpleStarters = [
  { stroke: "STHA", word: "that" },
  { stroke: "STPA", word: "if" },
  { stroke: "SWH", word: "when" },
  { stroke: "SWHA", word: "what" },
  { stroke: "SWHR", word: "where" },
  { stroke: "SWHO", word: "who" },
  { stroke: "SWHAO", word: "why" },
  { stroke: "SPWH", word: "but" },
  { stroke: "STPR", word: "for" },
  { stroke: "SKP", word: "and" },
];

const simplePronouns = [
  { stroke: "EU", word: "I", form: "am" },
  { stroke: "*EU", word: "we", form: "are" },
  { stroke: "E", word: "he", form: "is" },
  { stroke: "*E", word: "she", form: "is" },
  { stroke: "U", word: "you", form: "are" },
  { stroke: "*U", word: "they", form: "are" },
  { stroke: "*", word: "it", form: "is" },
];

const fullStarters = [
  { stroke: "SWR", word: "I", form: "am" },
  { stroke: "KPWR", word: "you", form: "are" },
  { stroke: "KWHR", word: "he", form: "is" },
  { stroke: "SKWHR", word: "she", form: "is" },
  { stroke: "KPWH", word: "it", form: "is" },
  { stroke: "TWR", word: "we", form: "are" },
  { stroke: "TWH", word: "they", form: "are" },
  { stroke: "STKH", word: "this", form: "is" },
  { stroke: "STWH", word: "that", form: "is" },
  { stroke: "STHR", word: "there", form: "is" },
  { stroke: "STPHR", word: "there", form: "are" },
  { stroke: "STKPWHR", word: "", form: "is" },
  { stroke: "STWR", word: "", form: "are" },
];

const auxiliaries = [
  {
    stroke: "",
    positive: "x do did does x x",
    negative: "x don't didn't doesn't x x",
  },
  {
    stroke: "A",
    positive: "x can could can x x",
    negative: "x can't couldn't can't x x",
  },
  {
    stroke: "O",
    positive: "x shall should shall x x",
    negative: "x shall_not shouldn't shall_not x x",
  },
  {
    stroke: "AO",
    positive: "x will would will x x",
    negative: "x won't wouldn't won't x x",
  },
];

// prettier-ignore
const structures = [
  { stroke: "", do: "HE GOES", can: "HE CAN GO" },
  { stroke: "*", do: "HE DOESn't GO", can: "HE CAN'T GO" },
  { stroke: "U", do: "DOES HE GO", can: "CAN HE GO" },
  { stroke: "*U", do: "DOESn't HE GO", can: "CAN'T HE GO" },
  { stroke: "F", do: "HE HAS GONE", can: "HE CAN have GONE" },
  { stroke: "*F", do: "HE HASn't GONE", can: "HE CAN'T have GONE" },
  { stroke: "UF", do: "HE just GOES", can: "HE CAN just GO" },
  { stroke: "*UF", do: "HE just DOESn't GO", can: "HE just CAN'T GO" },
  { stroke: "E", do: "HE IS GOING", can: "HE CAN be GOING" },
  { stroke: "*E", do: "HE ISn't GOING", can: "HE CAN'T be GOING" },
  { stroke: "EU", do: "HE still GOES", can: "HE CAN still GO" },
  { stroke: "*EU", do: "HE still DOESn't GO", can: "HE still CAN'T GO" },
  { stroke: "EF", do: "HE HAS been GOING", can: "HE CAN have been GOING" },
  { stroke: "*EF", do: "HE HASn't been GOING", can: "HE CAN'T have been GOING" },
  { stroke: "EUF", do: "HE never GOES", can: "HE CAN never GO" },
  { stroke: "*EUF", do: "HE DOESn't even GO", can: "HE CAN'T even GO" },
];

const presets = [
  {
    name: "Basic Simple",
    options: "ss-STHA ss-STPA ss-SWH ss-SWHA sp-EU sp-E sp-U v-G",
  },
  {
    name: "Basic Full",
    options:
      "fs-SWR fs-KPWR fs-KWHR fs-SKWHR fs-TWH fs-TWR fs-KPWH fa- fst- fst-* v-G",
  },
  {
    name: "Lapwing",
    options:
      "fs-SWR fs-KWHR fs-SKWHR fs-TWH fs-TWR fs-KPWH fa- fa-A fa-O fa-AO fst- fst-* v-G v-PBLG v-P v-RPG v-past",
  },
  {
    name: "I + verbs",
    options:
      "fs-SWR fa-SWR fa- fst- " +
      verbData.map((v) => "v-" + v.split(" ")[0]).join(" "),
  },
];

function verbStroke(verb, past, hasSuffix) {
  const base = verb.split(" ")[0];
  const t = hasSuffix ? (/T/.test(base) ? "S" : "T") : "";
  const d = past ? (/S/.test(base + t) ? "Z" : "D") : "";
  return base + t + d;
}

function conjugate(verb, form, past, hasSuffix) {
  const suffix = hasSuffix ? verb.split("/")[1] : "";
  verb = verb.split("/")[0];
  let [stroke, ...forms] = verb.split(" ");
  if (forms.length === 5) {
    const [sing, sang, sings, singing, sung] = forms;
    forms = [sing, sing, sing, sang, sang, sings, singing, sung];
  }
  if (forms.length !== 8) {
    throw new Error("bad forms.length: " + forms);
  }
  const [are, be, am, were, was, is, being, been] = forms;
  let conjugation;
  switch (form) {
    case "am":
      conjugation = past ? was : am;
      break;
    case "be":
      conjugation = be;
      break;
    case "are":
      conjugation = past ? were : are;
      break;
    case "is":
      conjugation = past ? was : is;
      break;
    case "being":
      conjugation = being;
      break;
    case "been":
      conjugation = been;
      break;
    default:
      throw new Error("unknown form: " + form);
  }
  const total = suffix ? conjugation + " " + suffix : conjugation;
  return total.replaceAll("_", " ");
}

function makeSimple(starter, pronoun, have, verb, past, suffix) {
  const vp = have
    ? conjugate(HAVE, pronoun.form, past, false) +
      " " +
      conjugate(verb, "been", false, suffix)
    : conjugate(verb, pronoun.form, past, suffix);
  const stroke = (
    starter.stroke +
    "-" +
    pronoun.stroke +
    (have ? "F" : "") +
    verbStroke(verb, past, suffix)
  ).replace(/(?<=[AO])-|-(?=[*EU])/, "");
  return [stroke, starter.word + " " + pronoun.word + " " + vp];
}

function makeFull(starter, aux, structure, verb, past, hasSuffix) {
  const does = conjugate(DO, starter.form, past, false);
  const has = conjugate(HAVE, starter.form, past, false);
  const is = conjugate(BE, starter.form, past, false);
  const have = conjugate(HAVE, "be", false, false);
  const can = conjugate(aux.positive, starter.form, past, false);
  const cant = conjugate(aux.negative, starter.form, past, false);
  const s = (aux.stroke ? structure.can : structure.do)
    .replace("HE", starter.word)
    .replace("DOES", does)
    .replace("IS", is)
    .replace("HAS", has)
    .replace("HAVE", have)
    .replace("CAN'T", cant)
    .replace("CAN", can)
    .replace("GOING", conjugate(verb, "being", false, false))
    .replace("GONE", conjugate(verb, "been", false, false))
    .replace("GOES", conjugate(verb, starter.form, past, hasSuffix))
    .replace("GO", conjugate(verb, "be", false, false));
  const stroke = (
    starter.stroke +
    aux.stroke +
    "-" +
    structure.stroke +
    verbStroke(verb, past, hasSuffix)
  ).replace(/(?<=[AO])-|-(?=[*EU])/, "");
  return [stroke, s];
}

const options = [
  {
    selector: ".simple-starters",
    data: simpleStarters,
    name: (x) => "ss-" + x.stroke,
    render: (x) => x.word,
  },
  {
    selector: ".simple-pronouns",
    data: simplePronouns,
    name: (x) => "sp-" + x.stroke,
    render: (x) => x.word,
  },
  {
    selector: ".full-starters",
    data: fullStarters,
    name: (x) => "fs-" + x.stroke,
    render: (x) => x.word || "∅ " + x.form,
  },
  {
    selector: ".full-auxiliaries",
    data: auxiliaries,
    name: (x) => "fa-" + x.stroke,
    render: (x) => x.positive.split(" ")[1],
  },
  {
    selector: ".full-structures",
    data: structures,
    name: (x) => "fst-" + x.stroke,
    render: (x) => x.do.toLowerCase(),
  },
  {
    selector: ".verbs",
    data: verbData,
    name: (x) => "v-" + x.split(" ")[0],
    render: (x) => x.split(" ")[1],
  },
];

function setAll(selector, value) {
  for (const el of document.querySelectorAll(
    selector + " input[type=checkbox]"
  )) {
    el.checked = value;
  }
}

function pick(a) {
  return a[(a.length * Math.random()) | 0];
}

function coin() {
  return Math.random() > 0.5;
}

function generatePrompt() {
  const on = (n) => document.getElementsByName(n)[0]?.checked;
  const ss = simpleStarters.filter((x) => on("ss-" + x.stroke));
  const sp = simplePronouns.filter((x) => on("sp-" + x.stroke));
  const fs = fullStarters.filter((x) => on("fs-" + x.stroke));
  const fa = auxiliaries.filter((x) => on("fa-" + x.stroke));
  const fst = structures.filter((x) => on("fst-" + x.stroke));
  const v = verbData.filter((x) => on("v-" + x.split(" ")[0]));
  if (!v.length) {
    return ["", "(No verbs selected.)"];
  }
  const verb = pick(v);
  const have = on("s-have") ? coin() : false;
  const past = on("v-past") ? coin() : false;
  const suffix = on("v-suffix") && verb.includes("/") ? coin() : false;
  const simple = ss.length * sp.length > 0;
  const full = fs.length * fa.length * fst.length > 0;
  if (!simple && !full) {
    return ["", "(No phrases available.)"];
  }
  const isFull = simple && full ? coin() : full;
  const [stroke, phrase] = isFull
    ? makeFull(pick(fs), pick(fa), pick(fst), pick(v), past, suffix)
    : makeSimple(pick(ss), pick(sp), have, pick(v), past, suffix);
  return [stroke, phrase];
}

function showHint() {
  document.querySelector(".hint").style.visibility = "visible";
}

score = 0;
function nextPrompt() {
  let hint, prompt;
  let tries = 0;
  do {
    [hint, prompt] = generatePrompt();
  } while (prompt.includes("*") && tries++ < 100);
  if (prompt.includes("*")) {
    [hint, prompt] = ["", "(No phrases available.)"];
  }
  document.querySelector(".hint").innerText = hint;
  document.querySelector(".hint").style.visibility = "hidden";
  document.querySelector(".prompt").innerText = prompt;
  document.querySelector(".score").innerText = "Correct answers: " + score;
  if (document.querySelector("#h-on:checked")) {
    showHint();
  }
}

function checkAnswer(input) {
  const answer = document.querySelector(".prompt").innerText;
  if (input.value.trim().toLowerCase() === answer.trim().toLowerCase()) {
    input.value = "";
    score++;
    nextPrompt();
  } else if (document.querySelector("#h-after:checked")) {
    showHint();
  }
}

function applyPreset(preset) {
  const names = preset.options.split(" ");
  for (const c of document.querySelectorAll(`input[type=checkbox]`)) {
    c.checked = names.includes(c.name);
  }
  nextPrompt();
}

for (const o of options) {
  const el = document.querySelector(o.selector);
  for (const d of o.data) {
    const name = o.name(d);
    const input = document.createElement("input");
    const label = document.createElement("label");
    const stroke = (d.stroke ?? d.split(" ")[0]) || "∅";
    input.type = "checkbox";
    input.id = input.name = label.htmlFor = name;
    input.onchange = () => nextPrompt();
    label.innerHTML = `<span class=stroke>${stroke}</span> <span class=writeout>${o.render(
      d
    )}</span>`;
    input.title = label.title = stroke;
    el.appendChild(input);
    el.appendChild(label);
  }
  const allButton = document.createElement("button");
  allButton.innerText = "All";
  el.appendChild(allButton);
  allButton.onclick = () => setAll(o.selector, true);
  const noneButton = document.createElement("button");
  noneButton.innerText = "None";
  noneButton.onclick = () => setAll(o.selector, false);
  el.appendChild(noneButton);
}

for (const preset of presets) {
  const button = document.createElement("button");
  button.onclick = () => applyPreset(preset);
  button.innerText = preset.name;
  document.querySelector(".presets").appendChild(button);
}

applyPreset(presets[0]);

for (const i of [...document.querySelectorAll("input")]) {
  i.addEventListener("change", () => {
    document.querySelector(".hint").style.visibility = "hidden";
    if (document.querySelector("#h-on:checked")) {
      showHint();
    }
  });
}
