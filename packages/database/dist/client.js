"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to2, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to2, key) && key !== except)
        __defProp(to2, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to2;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// generated/client/runtime/library.js
var require_library = __commonJS({
  "generated/client/runtime/library.js"(exports, module) {
    "use strict";
    var pu = Object.create;
    var Fr = Object.defineProperty;
    var du = Object.getOwnPropertyDescriptor;
    var mu = Object.getOwnPropertyNames;
    var fu = Object.getPrototypeOf;
    var gu = Object.prototype.hasOwnProperty;
    var H = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
    var Gt = (e, t) => {
      for (var r in t) Fr(e, r, { get: t[r], enumerable: true });
    };
    var To = (e, t, r, n) => {
      if (t && typeof t == "object" || typeof t == "function") for (let i of mu(t)) !gu.call(e, i) && i !== r && Fr(e, i, { get: () => t[i], enumerable: !(n = du(t, i)) || n.enumerable });
      return e;
    };
    var _ = (e, t, r) => (r = e != null ? pu(fu(e)) : {}, To(t || !e || !e.__esModule ? Fr(r, "default", { value: e, enumerable: true }) : r, e));
    var hu = (e) => To(Fr({}, "__esModule", { value: true }), e);
    var Ho = H((Ff, si) => {
      "use strict";
      var P = si.exports;
      si.exports.default = P;
      var D = "\x1B[", Yt = "\x1B]", mt = "\x07", Jr = ";", Wo = process.env.TERM_PROGRAM === "Apple_Terminal";
      P.cursorTo = (e, t) => {
        if (typeof e != "number") throw new TypeError("The `x` argument is required");
        return typeof t != "number" ? D + (e + 1) + "G" : D + (t + 1) + ";" + (e + 1) + "H";
      };
      P.cursorMove = (e, t) => {
        if (typeof e != "number") throw new TypeError("The `x` argument is required");
        let r = "";
        return e < 0 ? r += D + -e + "D" : e > 0 && (r += D + e + "C"), t < 0 ? r += D + -t + "A" : t > 0 && (r += D + t + "B"), r;
      };
      P.cursorUp = (e = 1) => D + e + "A";
      P.cursorDown = (e = 1) => D + e + "B";
      P.cursorForward = (e = 1) => D + e + "C";
      P.cursorBackward = (e = 1) => D + e + "D";
      P.cursorLeft = D + "G";
      P.cursorSavePosition = Wo ? "\x1B7" : D + "s";
      P.cursorRestorePosition = Wo ? "\x1B8" : D + "u";
      P.cursorGetPosition = D + "6n";
      P.cursorNextLine = D + "E";
      P.cursorPrevLine = D + "F";
      P.cursorHide = D + "?25l";
      P.cursorShow = D + "?25h";
      P.eraseLines = (e) => {
        let t = "";
        for (let r = 0; r < e; r++) t += P.eraseLine + (r < e - 1 ? P.cursorUp() : "");
        return e && (t += P.cursorLeft), t;
      };
      P.eraseEndLine = D + "K";
      P.eraseStartLine = D + "1K";
      P.eraseLine = D + "2K";
      P.eraseDown = D + "J";
      P.eraseUp = D + "1J";
      P.eraseScreen = D + "2J";
      P.scrollUp = D + "S";
      P.scrollDown = D + "T";
      P.clearScreen = "\x1Bc";
      P.clearTerminal = process.platform === "win32" ? `${P.eraseScreen}${D}0f` : `${P.eraseScreen}${D}3J${D}H`;
      P.beep = mt;
      P.link = (e, t) => [Yt, "8", Jr, Jr, t, mt, e, Yt, "8", Jr, Jr, mt].join("");
      P.image = (e, t = {}) => {
        let r = `${Yt}1337;File=inline=1`;
        return t.width && (r += `;width=${t.width}`), t.height && (r += `;height=${t.height}`), t.preserveAspectRatio === false && (r += ";preserveAspectRatio=0"), r + ":" + e.toString("base64") + mt;
      };
      P.iTerm = { setCwd: (e = process.cwd()) => `${Yt}50;CurrentDir=${e}${mt}`, annotation: (e, t = {}) => {
        let r = `${Yt}1337;`, n = typeof t.x < "u", i = typeof t.y < "u";
        if ((n || i) && !(n && i && typeof t.length < "u")) throw new Error("`x`, `y` and `length` must be defined when `x` or `y` is defined");
        return e = e.replace(/\|/g, ""), r += t.isHidden ? "AddHiddenAnnotation=" : "AddAnnotation=", t.length > 0 ? r += (n ? [e, t.length, t.x, t.y] : [t.length, e]).join("|") : r += e, r + mt;
      } };
    });
    var ai = H((Mf, Ko) => {
      "use strict";
      Ko.exports = (e, t = process.argv) => {
        let r = e.startsWith("-") ? "" : e.length === 1 ? "-" : "--", n = t.indexOf(r + e), i = t.indexOf("--");
        return n !== -1 && (i === -1 || n < i);
      };
    });
    var Zo = H(($f, zo) => {
      "use strict";
      var ic = require("os"), Yo = require("tty"), fe = ai(), { env: J } = process, Je;
      fe("no-color") || fe("no-colors") || fe("color=false") || fe("color=never") ? Je = 0 : (fe("color") || fe("colors") || fe("color=true") || fe("color=always")) && (Je = 1);
      "FORCE_COLOR" in J && (J.FORCE_COLOR === "true" ? Je = 1 : J.FORCE_COLOR === "false" ? Je = 0 : Je = J.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(J.FORCE_COLOR, 10), 3));
      function li(e) {
        return e === 0 ? false : { level: e, hasBasic: true, has256: e >= 2, has16m: e >= 3 };
      }
      function ui(e, t) {
        if (Je === 0) return 0;
        if (fe("color=16m") || fe("color=full") || fe("color=truecolor")) return 3;
        if (fe("color=256")) return 2;
        if (e && !t && Je === void 0) return 0;
        let r = Je || 0;
        if (J.TERM === "dumb") return r;
        if (process.platform === "win32") {
          let n = ic.release().split(".");
          return Number(n[0]) >= 10 && Number(n[2]) >= 10586 ? Number(n[2]) >= 14931 ? 3 : 2 : 1;
        }
        if ("CI" in J) return ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE"].some((n) => n in J) || J.CI_NAME === "codeship" ? 1 : r;
        if ("TEAMCITY_VERSION" in J) return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(J.TEAMCITY_VERSION) ? 1 : 0;
        if (J.COLORTERM === "truecolor") return 3;
        if ("TERM_PROGRAM" in J) {
          let n = parseInt((J.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
          switch (J.TERM_PROGRAM) {
            case "iTerm.app":
              return n >= 3 ? 3 : 2;
            case "Apple_Terminal":
              return 2;
          }
        }
        return /-256(color)?$/i.test(J.TERM) ? 2 : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(J.TERM) || "COLORTERM" in J ? 1 : r;
      }
      function oc(e) {
        let t = ui(e, e && e.isTTY);
        return li(t);
      }
      zo.exports = { supportsColor: oc, stdout: li(ui(true, Yo.isatty(1))), stderr: li(ui(true, Yo.isatty(2))) };
    });
    var ts = H((qf, es) => {
      "use strict";
      var sc = Zo(), ft = ai();
      function Xo(e) {
        if (/^\d{3,4}$/.test(e)) {
          let r = /(\d{1,2})(\d{2})/.exec(e);
          return { major: 0, minor: parseInt(r[1], 10), patch: parseInt(r[2], 10) };
        }
        let t = (e || "").split(".").map((r) => parseInt(r, 10));
        return { major: t[0], minor: t[1], patch: t[2] };
      }
      function ci(e) {
        let { env: t } = process;
        if ("FORCE_HYPERLINK" in t) return !(t.FORCE_HYPERLINK.length > 0 && parseInt(t.FORCE_HYPERLINK, 10) === 0);
        if (ft("no-hyperlink") || ft("no-hyperlinks") || ft("hyperlink=false") || ft("hyperlink=never")) return false;
        if (ft("hyperlink=true") || ft("hyperlink=always") || "NETLIFY" in t) return true;
        if (!sc.supportsColor(e) || e && !e.isTTY || process.platform === "win32" || "CI" in t || "TEAMCITY_VERSION" in t) return false;
        if ("TERM_PROGRAM" in t) {
          let r = Xo(t.TERM_PROGRAM_VERSION);
          switch (t.TERM_PROGRAM) {
            case "iTerm.app":
              return r.major === 3 ? r.minor >= 1 : r.major > 3;
            case "WezTerm":
              return r.major >= 20200620;
            case "vscode":
              return r.major > 1 || r.major === 1 && r.minor >= 72;
          }
        }
        if ("VTE_VERSION" in t) {
          if (t.VTE_VERSION === "0.50.0") return false;
          let r = Xo(t.VTE_VERSION);
          return r.major > 0 || r.minor >= 50;
        }
        return false;
      }
      es.exports = { supportsHyperlink: ci, stdout: ci(process.stdout), stderr: ci(process.stderr) };
    });
    var ns = H((Vf, zt) => {
      "use strict";
      var ac = Ho(), pi = ts(), rs = (e, t, { target: r = "stdout", ...n } = {}) => pi[r] ? ac.link(e, t) : n.fallback === false ? e : typeof n.fallback == "function" ? n.fallback(e, t) : `${e} (\u200B${t}\u200B)`;
      zt.exports = (e, t, r = {}) => rs(e, t, r);
      zt.exports.stderr = (e, t, r = {}) => rs(e, t, { target: "stderr", ...r });
      zt.exports.isSupported = pi.stdout;
      zt.exports.stderr.isSupported = pi.stderr;
    });
    var os = H((Yf, lc) => {
      lc.exports = { name: "@prisma/internals", version: "6.4.1", description: "This package is intended for Prisma's internal use", main: "dist/index.js", types: "dist/index.d.ts", repository: { type: "git", url: "https://github.com/prisma/prisma.git", directory: "packages/internals" }, homepage: "https://www.prisma.io", author: "Tim Suchanek <suchanek@prisma.io>", bugs: "https://github.com/prisma/prisma/issues", license: "Apache-2.0", scripts: { dev: "DEV=true tsx helpers/build.ts", build: "tsx helpers/build.ts", test: "dotenv -e ../../.db.env -- jest --silent", prepublishOnly: "pnpm run build" }, files: ["README.md", "dist", "!**/libquery_engine*", "!dist/get-generators/engines/*", "scripts"], devDependencies: { "@antfu/ni": "0.21.12", "@babel/helper-validator-identifier": "7.24.7", "@opentelemetry/api": "1.9.0", "@swc/core": "1.2.204", "@swc/jest": "0.2.37", "@types/babel__helper-validator-identifier": "7.15.2", "@types/jest": "29.5.14", "@types/node": "18.19.31", "@types/resolve": "1.20.6", archiver: "6.0.2", "checkpoint-client": "1.1.33", "cli-truncate": "2.1.0", dotenv: "16.4.7", esbuild: "0.24.2", "escape-string-regexp": "4.0.0", execa: "5.1.1", "fast-glob": "3.3.3", "find-up": "5.0.0", "fp-ts": "2.16.9", "fs-extra": "11.1.1", "fs-jetpack": "5.1.0", "global-dirs": "4.0.0", globby: "11.1.0", "identifier-regex": "1.0.0", "indent-string": "4.0.0", "is-windows": "1.0.2", "is-wsl": "3.1.0", jest: "29.7.0", "jest-junit": "16.0.0", kleur: "4.1.5", "mock-stdin": "1.0.0", "new-github-issue-url": "0.2.1", "node-fetch": "3.3.2", "npm-packlist": "5.1.3", open: "7.4.2", "p-map": "4.0.0", "read-package-up": "11.0.0", "replace-string": "3.1.0", resolve: "1.22.10", "string-width": "4.2.3", "strip-ansi": "6.0.1", "strip-indent": "3.0.0", "temp-dir": "2.0.0", tempy: "1.0.1", "terminal-link": "2.1.1", tmp: "0.2.3", "ts-node": "10.9.2", "ts-pattern": "5.6.2", "ts-toolbelt": "9.6.0", typescript: "5.4.5", yarn: "1.22.22" }, dependencies: { "@prisma/config": "workspace:*", "@prisma/debug": "workspace:*", "@prisma/engines": "workspace:*", "@prisma/fetch-engine": "workspace:*", "@prisma/generator-helper": "workspace:*", "@prisma/get-platform": "workspace:*", "@prisma/prisma-schema-wasm": "6.4.0-29.a9055b89e58b4b5bfb59600785423b1db3d0e75d", "@prisma/schema-files-loader": "workspace:*", arg: "5.0.2", prompts: "2.4.2" }, peerDependencies: { typescript: ">=5.1.0" }, peerDependenciesMeta: { typescript: { optional: true } }, sideEffects: false };
    });
    var fi = H((Zf, cc) => {
      cc.exports = { name: "@prisma/engines-version", version: "6.4.0-29.a9055b89e58b4b5bfb59600785423b1db3d0e75d", main: "index.js", types: "index.d.ts", license: "Apache-2.0", author: "Tim Suchanek <suchanek@prisma.io>", prisma: { enginesVersion: "a9055b89e58b4b5bfb59600785423b1db3d0e75d" }, repository: { type: "git", url: "https://github.com/prisma/engines-wrapper.git", directory: "packages/engines-version" }, devDependencies: { "@types/node": "18.19.76", typescript: "4.9.5" }, files: ["index.js", "index.d.ts"], scripts: { build: "tsc -d" } };
    });
    var gi = H((Wr) => {
      "use strict";
      Object.defineProperty(Wr, "__esModule", { value: true });
      Wr.enginesVersion = void 0;
      Wr.enginesVersion = fi().prisma.enginesVersion;
    });
    var ls = H((yg, mc) => {
      mc.exports = { name: "dotenv", version: "16.4.7", description: "Loads environment variables from .env file", main: "lib/main.js", types: "lib/main.d.ts", exports: { ".": { types: "./lib/main.d.ts", require: "./lib/main.js", default: "./lib/main.js" }, "./config": "./config.js", "./config.js": "./config.js", "./lib/env-options": "./lib/env-options.js", "./lib/env-options.js": "./lib/env-options.js", "./lib/cli-options": "./lib/cli-options.js", "./lib/cli-options.js": "./lib/cli-options.js", "./package.json": "./package.json" }, scripts: { "dts-check": "tsc --project tests/types/tsconfig.json", lint: "standard", pretest: "npm run lint && npm run dts-check", test: "tap run --allow-empty-coverage --disable-coverage --timeout=60000", "test:coverage": "tap run --show-full-coverage --timeout=60000 --coverage-report=lcov", prerelease: "npm test", release: "standard-version" }, repository: { type: "git", url: "git://github.com/motdotla/dotenv.git" }, funding: "https://dotenvx.com", keywords: ["dotenv", "env", ".env", "environment", "variables", "config", "settings"], readmeFilename: "README.md", license: "BSD-2-Clause", devDependencies: { "@types/node": "^18.11.3", decache: "^4.6.2", sinon: "^14.0.1", standard: "^17.0.0", "standard-version": "^9.5.0", tap: "^19.2.0", typescript: "^4.8.4" }, engines: { node: ">=12" }, browser: { fs: false } };
    });
    var ds = H((bg, Le) => {
      "use strict";
      var Ei = require("fs"), wi = require("path"), fc = require("os"), gc = require("crypto"), hc = ls(), xi = hc.version, yc = /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;
      function bc(e) {
        let t = {}, r = e.toString();
        r = r.replace(/\r\n?/mg, `
`);
        let n;
        for (; (n = yc.exec(r)) != null; ) {
          let i = n[1], o = n[2] || "";
          o = o.trim();
          let s = o[0];
          o = o.replace(/^(['"`])([\s\S]*)\1$/mg, "$2"), s === '"' && (o = o.replace(/\\n/g, `
`), o = o.replace(/\\r/g, "\r")), t[i] = o;
        }
        return t;
      }
      function Ec(e) {
        let t = ps(e), r = G.configDotenv({ path: t });
        if (!r.parsed) {
          let s = new Error(`MISSING_DATA: Cannot parse ${t} for an unknown reason`);
          throw s.code = "MISSING_DATA", s;
        }
        let n = cs(e).split(","), i = n.length, o;
        for (let s = 0; s < i; s++) try {
          let a = n[s].trim(), l = Pc(r, a);
          o = G.decrypt(l.ciphertext, l.key);
          break;
        } catch (a) {
          if (s + 1 >= i) throw a;
        }
        return G.parse(o);
      }
      function wc(e) {
        console.log(`[dotenv@${xi}][INFO] ${e}`);
      }
      function xc(e) {
        console.log(`[dotenv@${xi}][WARN] ${e}`);
      }
      function Hr(e) {
        console.log(`[dotenv@${xi}][DEBUG] ${e}`);
      }
      function cs(e) {
        return e && e.DOTENV_KEY && e.DOTENV_KEY.length > 0 ? e.DOTENV_KEY : process.env.DOTENV_KEY && process.env.DOTENV_KEY.length > 0 ? process.env.DOTENV_KEY : "";
      }
      function Pc(e, t) {
        let r;
        try {
          r = new URL(t);
        } catch (a) {
          if (a.code === "ERR_INVALID_URL") {
            let l = new Error("INVALID_DOTENV_KEY: Wrong format. Must be in valid uri format like dotenv://:key_1234@dotenvx.com/vault/.env.vault?environment=development");
            throw l.code = "INVALID_DOTENV_KEY", l;
          }
          throw a;
        }
        let n = r.password;
        if (!n) {
          let a = new Error("INVALID_DOTENV_KEY: Missing key part");
          throw a.code = "INVALID_DOTENV_KEY", a;
        }
        let i = r.searchParams.get("environment");
        if (!i) {
          let a = new Error("INVALID_DOTENV_KEY: Missing environment part");
          throw a.code = "INVALID_DOTENV_KEY", a;
        }
        let o = `DOTENV_VAULT_${i.toUpperCase()}`, s = e.parsed[o];
        if (!s) {
          let a = new Error(`NOT_FOUND_DOTENV_ENVIRONMENT: Cannot locate environment ${o} in your .env.vault file.`);
          throw a.code = "NOT_FOUND_DOTENV_ENVIRONMENT", a;
        }
        return { ciphertext: s, key: n };
      }
      function ps(e) {
        let t = null;
        if (e && e.path && e.path.length > 0) if (Array.isArray(e.path)) for (let r of e.path) Ei.existsSync(r) && (t = r.endsWith(".vault") ? r : `${r}.vault`);
        else t = e.path.endsWith(".vault") ? e.path : `${e.path}.vault`;
        else t = wi.resolve(process.cwd(), ".env.vault");
        return Ei.existsSync(t) ? t : null;
      }
      function us(e) {
        return e[0] === "~" ? wi.join(fc.homedir(), e.slice(1)) : e;
      }
      function vc(e) {
        wc("Loading env from encrypted .env.vault");
        let t = G._parseVault(e), r = process.env;
        return e && e.processEnv != null && (r = e.processEnv), G.populate(r, t, e), { parsed: t };
      }
      function Tc(e) {
        let t = wi.resolve(process.cwd(), ".env"), r = "utf8", n = !!(e && e.debug);
        e && e.encoding ? r = e.encoding : n && Hr("No encoding is specified. UTF-8 is used by default");
        let i = [t];
        if (e && e.path) if (!Array.isArray(e.path)) i = [us(e.path)];
        else {
          i = [];
          for (let l of e.path) i.push(us(l));
        }
        let o, s = {};
        for (let l of i) try {
          let u = G.parse(Ei.readFileSync(l, { encoding: r }));
          G.populate(s, u, e);
        } catch (u) {
          n && Hr(`Failed to load ${l} ${u.message}`), o = u;
        }
        let a = process.env;
        return e && e.processEnv != null && (a = e.processEnv), G.populate(a, s, e), o ? { parsed: s, error: o } : { parsed: s };
      }
      function Rc(e) {
        if (cs(e).length === 0) return G.configDotenv(e);
        let t = ps(e);
        return t ? G._configVault(e) : (xc(`You set DOTENV_KEY but you are missing a .env.vault file at ${t}. Did you forget to build it?`), G.configDotenv(e));
      }
      function Cc(e, t) {
        let r = Buffer.from(t.slice(-64), "hex"), n = Buffer.from(e, "base64"), i = n.subarray(0, 12), o = n.subarray(-16);
        n = n.subarray(12, -16);
        try {
          let s = gc.createDecipheriv("aes-256-gcm", r, i);
          return s.setAuthTag(o), `${s.update(n)}${s.final()}`;
        } catch (s) {
          let a = s instanceof RangeError, l = s.message === "Invalid key length", u = s.message === "Unsupported state or unable to authenticate data";
          if (a || l) {
            let c = new Error("INVALID_DOTENV_KEY: It must be 64 characters long (or more)");
            throw c.code = "INVALID_DOTENV_KEY", c;
          } else if (u) {
            let c = new Error("DECRYPTION_FAILED: Please check your DOTENV_KEY");
            throw c.code = "DECRYPTION_FAILED", c;
          } else throw s;
        }
      }
      function Sc(e, t, r = {}) {
        let n = !!(r && r.debug), i = !!(r && r.override);
        if (typeof t != "object") {
          let o = new Error("OBJECT_REQUIRED: Please check the processEnv argument being passed to populate");
          throw o.code = "OBJECT_REQUIRED", o;
        }
        for (let o of Object.keys(t)) Object.prototype.hasOwnProperty.call(e, o) ? (i === true && (e[o] = t[o]), n && Hr(i === true ? `"${o}" is already defined and WAS overwritten` : `"${o}" is already defined and was NOT overwritten`)) : e[o] = t[o];
      }
      var G = { configDotenv: Tc, _configVault: vc, _parseVault: Ec, config: Rc, decrypt: Cc, parse: bc, populate: Sc };
      Le.exports.configDotenv = G.configDotenv;
      Le.exports._configVault = G._configVault;
      Le.exports._parseVault = G._parseVault;
      Le.exports.config = G.config;
      Le.exports.decrypt = G.decrypt;
      Le.exports.parse = G.parse;
      Le.exports.populate = G.populate;
      Le.exports = G;
    });
    var bs = H((Rg, ys) => {
      "use strict";
      ys.exports = (e) => {
        let t = e.match(/^[ \t]*(?=\S)/gm);
        return t ? t.reduce((r, n) => Math.min(r, n.length), 1 / 0) : 0;
      };
    });
    var ws = H((Cg, Es) => {
      "use strict";
      var kc = bs();
      Es.exports = (e) => {
        let t = kc(e);
        if (t === 0) return e;
        let r = new RegExp(`^[ \\t]{${t}}`, "gm");
        return e.replace(r, "");
      };
    });
    var Ci = H((Dg, Ps) => {
      "use strict";
      Ps.exports = (e, t = 1, r) => {
        if (r = { indent: " ", includeEmptyLines: false, ...r }, typeof e != "string") throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e}\``);
        if (typeof t != "number") throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof t}\``);
        if (typeof r.indent != "string") throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof r.indent}\``);
        if (t === 0) return e;
        let n = r.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
        return e.replace(n, r.indent.repeat(t));
      };
    });
    var Cs = H((Fg, Rs) => {
      "use strict";
      Rs.exports = ({ onlyFirst: e = false } = {}) => {
        let t = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");
        return new RegExp(t, e ? void 0 : "g");
      };
    });
    var Oi = H((Mg, Ss) => {
      "use strict";
      var qc = Cs();
      Ss.exports = (e) => typeof e == "string" ? e.replace(qc(), "") : e;
    });
    var As = H((Vg, Zr) => {
      "use strict";
      Zr.exports = (e = {}) => {
        let t;
        if (e.repoUrl) t = e.repoUrl;
        else if (e.user && e.repo) t = `https://github.com/${e.user}/${e.repo}`;
        else throw new Error("You need to specify either the `repoUrl` option or both the `user` and `repo` options");
        let r = new URL(`${t}/issues/new`), n = ["body", "title", "labels", "template", "milestone", "assignee", "projects"];
        for (let i of n) {
          let o = e[i];
          if (o !== void 0) {
            if (i === "labels" || i === "projects") {
              if (!Array.isArray(o)) throw new TypeError(`The \`${i}\` option should be an array`);
              o = o.join(",");
            }
            r.searchParams.set(i, o);
          }
        }
        return r.toString();
      };
      Zr.exports.default = Zr.exports;
    });
    var qi = H((zh, Ys) => {
      "use strict";
      Ys.exports = /* @__PURE__ */ function() {
        function e(t, r, n, i, o) {
          return t < r || n < r ? t > n ? n + 1 : t + 1 : i === o ? r : r + 1;
        }
        return function(t, r) {
          if (t === r) return 0;
          if (t.length > r.length) {
            var n = t;
            t = r, r = n;
          }
          for (var i = t.length, o = r.length; i > 0 && t.charCodeAt(i - 1) === r.charCodeAt(o - 1); ) i--, o--;
          for (var s = 0; s < i && t.charCodeAt(s) === r.charCodeAt(s); ) s++;
          if (i -= s, o -= s, i === 0 || o < 3) return o;
          var a = 0, l, u, c, p, d, f, g, h, O, v, C, R, k = [];
          for (l = 0; l < i; l++) k.push(l + 1), k.push(t.charCodeAt(s + l));
          for (var A = k.length - 1; a < o - 3; ) for (O = r.charCodeAt(s + (u = a)), v = r.charCodeAt(s + (c = a + 1)), C = r.charCodeAt(s + (p = a + 2)), R = r.charCodeAt(s + (d = a + 3)), f = a += 4, l = 0; l < A; l += 2) g = k[l], h = k[l + 1], u = e(g, u, c, O, h), c = e(u, c, p, v, h), p = e(c, p, d, C, h), f = e(p, d, f, R, h), k[l] = f, d = p, p = c, c = u, u = g;
          for (; a < o; ) for (O = r.charCodeAt(s + (u = a)), f = ++a, l = 0; l < A; l += 2) g = k[l], k[l] = f = e(g, u, f, O, k[l + 1]), u = g;
          return f;
        };
      }();
    });
    var tf = {};
    Gt(tf, { Debug: () => zn, Decimal: () => Te, Extensions: () => Qn, MetricsClient: () => kt, PrismaClientInitializationError: () => T, PrismaClientKnownRequestError: () => ee, PrismaClientRustPanicError: () => ce, PrismaClientUnknownRequestError: () => B, PrismaClientValidationError: () => te, Public: () => Jn, Sql: () => ae, createParam: () => ya, defineDmmfProperty: () => Ta, deserializeJsonResponse: () => wt, deserializeRawResult: () => Bn, dmmfToRuntimeDataModel: () => va, empty: () => Aa, getPrismaClient: () => lu, getRuntime: () => _n, join: () => Sa, makeStrictEnum: () => uu, makeTypedQueryFactory: () => Ra, objectEnumValues: () => En, raw: () => Ki, serializeJsonQuery: () => Cn, skip: () => Rn, sqltag: () => Yi, warnEnvConflicts: () => cu, warnOnce: () => nr });
    module.exports = hu(tf);
    var Qn = {};
    Gt(Qn, { defineExtension: () => Ro, getExtensionContext: () => Co });
    function Ro(e) {
      return typeof e == "function" ? e : (t) => t.$extends(e);
    }
    function Co(e) {
      return e;
    }
    var Jn = {};
    Gt(Jn, { validator: () => So });
    function So(...e) {
      return (t) => t;
    }
    function Qt(e) {
      return { ok: false, error: e, map() {
        return Qt(e);
      }, flatMap() {
        return Qt(e);
      } };
    }
    var Wn = class {
      constructor() {
        this.registeredErrors = [];
      }
      consumeError(t) {
        return this.registeredErrors[t];
      }
      registerNewError(t) {
        let r = 0;
        for (; this.registeredErrors[r] !== void 0; ) r++;
        return this.registeredErrors[r] = { error: t }, r;
      }
    };
    var Hn = (e) => {
      let t = new Wn(), r = be(t, e.transactionContext.bind(e)), n = { adapterName: e.adapterName, errorRegistry: t, queryRaw: be(t, e.queryRaw.bind(e)), executeRaw: be(t, e.executeRaw.bind(e)), provider: e.provider, transactionContext: async (...i) => (await r(...i)).map((s) => yu(t, s)) };
      return e.getConnectionInfo && (n.getConnectionInfo = Eu(t, e.getConnectionInfo.bind(e))), n;
    };
    var yu = (e, t) => {
      let r = be(e, t.startTransaction.bind(t));
      return { adapterName: t.adapterName, provider: t.provider, queryRaw: be(e, t.queryRaw.bind(t)), executeRaw: be(e, t.executeRaw.bind(t)), startTransaction: async (...n) => (await r(...n)).map((o) => bu(e, o)) };
    };
    var bu = (e, t) => ({ adapterName: t.adapterName, provider: t.provider, options: t.options, queryRaw: be(e, t.queryRaw.bind(t)), executeRaw: be(e, t.executeRaw.bind(t)), commit: be(e, t.commit.bind(t)), rollback: be(e, t.rollback.bind(t)) });
    function be(e, t) {
      return async (...r) => {
        try {
          return await t(...r);
        } catch (n) {
          let i = e.registerNewError(n);
          return Qt({ kind: "GenericJs", id: i });
        }
      };
    }
    function Eu(e, t) {
      return (...r) => {
        try {
          return t(...r);
        } catch (n) {
          let i = e.registerNewError(n);
          return Qt({ kind: "GenericJs", id: i });
        }
      };
    }
    var Mr = {};
    Gt(Mr, { $: () => _o, bgBlack: () => Iu, bgBlue: () => Du, bgCyan: () => Lu, bgGreen: () => ku, bgMagenta: () => Nu, bgRed: () => Ou, bgWhite: () => Fu, bgYellow: () => _u, black: () => Ru, blue: () => rt, bold: () => K, cyan: () => De, dim: () => ke, gray: () => Jt, green: () => Ve, grey: () => Au, hidden: () => vu, inverse: () => Pu, italic: () => xu, magenta: () => Cu, red: () => de, reset: () => wu, strikethrough: () => Tu, underline: () => X, white: () => Su, yellow: () => _e });
    var Kn;
    var Ao;
    var Io;
    var Oo;
    var ko = true;
    typeof process < "u" && ({ FORCE_COLOR: Kn, NODE_DISABLE_COLORS: Ao, NO_COLOR: Io, TERM: Oo } = process.env || {}, ko = process.stdout && process.stdout.isTTY);
    var _o = { enabled: !Ao && Io == null && Oo !== "dumb" && (Kn != null && Kn !== "0" || ko) };
    function $(e, t) {
      let r = new RegExp(`\\x1b\\[${t}m`, "g"), n = `\x1B[${e}m`, i = `\x1B[${t}m`;
      return function(o) {
        return !_o.enabled || o == null ? o : n + (~("" + o).indexOf(i) ? o.replace(r, i + n) : o) + i;
      };
    }
    var wu = $(0, 0);
    var K = $(1, 22);
    var ke = $(2, 22);
    var xu = $(3, 23);
    var X = $(4, 24);
    var Pu = $(7, 27);
    var vu = $(8, 28);
    var Tu = $(9, 29);
    var Ru = $(30, 39);
    var de = $(31, 39);
    var Ve = $(32, 39);
    var _e = $(33, 39);
    var rt = $(34, 39);
    var Cu = $(35, 39);
    var De = $(36, 39);
    var Su = $(37, 39);
    var Jt = $(90, 39);
    var Au = $(90, 39);
    var Iu = $(40, 49);
    var Ou = $(41, 49);
    var ku = $(42, 49);
    var _u = $(43, 49);
    var Du = $(44, 49);
    var Nu = $(45, 49);
    var Lu = $(46, 49);
    var Fu = $(47, 49);
    var Mu = 100;
    var Do = ["green", "yellow", "blue", "magenta", "cyan", "red"];
    var Wt = [];
    var No = Date.now();
    var $u = 0;
    var Yn = typeof process < "u" ? process.env : {};
    globalThis.DEBUG ??= Yn.DEBUG ?? "";
    globalThis.DEBUG_COLORS ??= Yn.DEBUG_COLORS ? Yn.DEBUG_COLORS === "true" : true;
    var Ht = { enable(e) {
      typeof e == "string" && (globalThis.DEBUG = e);
    }, disable() {
      let e = globalThis.DEBUG;
      return globalThis.DEBUG = "", e;
    }, enabled(e) {
      let t = globalThis.DEBUG.split(",").map((i) => i.replace(/[.+?^${}()|[\]\\]/g, "\\$&")), r = t.some((i) => i === "" || i[0] === "-" ? false : e.match(RegExp(i.split("*").join(".*") + "$"))), n = t.some((i) => i === "" || i[0] !== "-" ? false : e.match(RegExp(i.slice(1).split("*").join(".*") + "$")));
      return r && !n;
    }, log: (...e) => {
      let [t, r, ...n] = e;
      (console.warn ?? console.log)(`${t} ${r}`, ...n);
    }, formatters: {} };
    function qu(e) {
      let t = { color: Do[$u++ % Do.length], enabled: Ht.enabled(e), namespace: e, log: Ht.log, extend: () => {
      } }, r = (...n) => {
        let { enabled: i, namespace: o, color: s, log: a } = t;
        if (n.length !== 0 && Wt.push([o, ...n]), Wt.length > Mu && Wt.shift(), Ht.enabled(o) || i) {
          let l = n.map((c) => typeof c == "string" ? c : Vu(c)), u = `+${Date.now() - No}ms`;
          No = Date.now(), globalThis.DEBUG_COLORS ? a(Mr[s](K(o)), ...l, Mr[s](u)) : a(o, ...l, u);
        }
      };
      return new Proxy(r, { get: (n, i) => t[i], set: (n, i, o) => t[i] = o });
    }
    var zn = new Proxy(qu, { get: (e, t) => Ht[t], set: (e, t, r) => Ht[t] = r });
    function Vu(e, t = 2) {
      let r = /* @__PURE__ */ new Set();
      return JSON.stringify(e, (n, i) => {
        if (typeof i == "object" && i !== null) {
          if (r.has(i)) return "[Circular *]";
          r.add(i);
        } else if (typeof i == "bigint") return i.toString();
        return i;
      }, t);
    }
    function Lo(e = 7500) {
      let t = Wt.map(([r, ...n]) => `${r} ${n.map((i) => typeof i == "string" ? i : JSON.stringify(i)).join(" ")}`).join(`
`);
      return t.length < e ? t : t.slice(-e);
    }
    function Fo() {
      Wt.length = 0;
    }
    var F = zn;
    var Mo = _(require("fs"));
    function Zn() {
      let e = process.env.PRISMA_QUERY_ENGINE_LIBRARY;
      if (!(e && Mo.default.existsSync(e)) && process.arch === "ia32") throw new Error('The default query engine type (Node-API, "library") is currently not supported for 32bit Node. Please set `engineType = "binary"` in the "generator" block of your "schema.prisma" file (or use the environment variables "PRISMA_CLIENT_ENGINE_TYPE=binary" and/or "PRISMA_CLI_QUERY_ENGINE_TYPE=binary".)');
    }
    var Xn = ["darwin", "darwin-arm64", "debian-openssl-1.0.x", "debian-openssl-1.1.x", "debian-openssl-3.0.x", "rhel-openssl-1.0.x", "rhel-openssl-1.1.x", "rhel-openssl-3.0.x", "linux-arm64-openssl-1.1.x", "linux-arm64-openssl-1.0.x", "linux-arm64-openssl-3.0.x", "linux-arm-openssl-1.1.x", "linux-arm-openssl-1.0.x", "linux-arm-openssl-3.0.x", "linux-musl", "linux-musl-openssl-3.0.x", "linux-musl-arm64-openssl-1.1.x", "linux-musl-arm64-openssl-3.0.x", "linux-nixos", "linux-static-x64", "linux-static-arm64", "windows", "freebsd11", "freebsd12", "freebsd13", "freebsd14", "freebsd15", "openbsd", "netbsd", "arm"];
    var $r = "libquery_engine";
    function qr(e, t) {
      let r = t === "url";
      return e.includes("windows") ? r ? "query_engine.dll.node" : `query_engine-${e}.dll.node` : e.includes("darwin") ? r ? `${$r}.dylib.node` : `${$r}-${e}.dylib.node` : r ? `${$r}.so.node` : `${$r}-${e}.so.node`;
    }
    var jo = _(require("child_process"));
    var ii = _(require("fs/promises"));
    var Gr = _(require("os"));
    var Ne = Symbol.for("@ts-pattern/matcher");
    var ju = Symbol.for("@ts-pattern/isVariadic");
    var jr = "@ts-pattern/anonymous-select-key";
    var ei = (e) => !!(e && typeof e == "object");
    var Vr = (e) => e && !!e[Ne];
    var xe = (e, t, r) => {
      if (Vr(e)) {
        let n = e[Ne](), { matched: i, selections: o } = n.match(t);
        return i && o && Object.keys(o).forEach((s) => r(s, o[s])), i;
      }
      if (ei(e)) {
        if (!ei(t)) return false;
        if (Array.isArray(e)) {
          if (!Array.isArray(t)) return false;
          let n = [], i = [], o = [];
          for (let s of e.keys()) {
            let a = e[s];
            Vr(a) && a[ju] ? o.push(a) : o.length ? i.push(a) : n.push(a);
          }
          if (o.length) {
            if (o.length > 1) throw new Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
            if (t.length < n.length + i.length) return false;
            let s = t.slice(0, n.length), a = i.length === 0 ? [] : t.slice(-i.length), l = t.slice(n.length, i.length === 0 ? 1 / 0 : -i.length);
            return n.every((u, c) => xe(u, s[c], r)) && i.every((u, c) => xe(u, a[c], r)) && (o.length === 0 || xe(o[0], l, r));
          }
          return e.length === t.length && e.every((s, a) => xe(s, t[a], r));
        }
        return Reflect.ownKeys(e).every((n) => {
          let i = e[n];
          return (n in t || Vr(o = i) && o[Ne]().matcherType === "optional") && xe(i, t[n], r);
          var o;
        });
      }
      return Object.is(t, e);
    };
    var Qe = (e) => {
      var t, r, n;
      return ei(e) ? Vr(e) ? (t = (r = (n = e[Ne]()).getSelectionKeys) == null ? void 0 : r.call(n)) != null ? t : [] : Array.isArray(e) ? Kt(e, Qe) : Kt(Object.values(e), Qe) : [];
    };
    var Kt = (e, t) => e.reduce((r, n) => r.concat(t(n)), []);
    function me(e) {
      return Object.assign(e, { optional: () => Bu(e), and: (t) => j(e, t), or: (t) => Uu(e, t), select: (t) => t === void 0 ? $o(e) : $o(t, e) });
    }
    function Bu(e) {
      return me({ [Ne]: () => ({ match: (t) => {
        let r = {}, n = (i, o) => {
          r[i] = o;
        };
        return t === void 0 ? (Qe(e).forEach((i) => n(i, void 0)), { matched: true, selections: r }) : { matched: xe(e, t, n), selections: r };
      }, getSelectionKeys: () => Qe(e), matcherType: "optional" }) });
    }
    function j(...e) {
      return me({ [Ne]: () => ({ match: (t) => {
        let r = {}, n = (i, o) => {
          r[i] = o;
        };
        return { matched: e.every((i) => xe(i, t, n)), selections: r };
      }, getSelectionKeys: () => Kt(e, Qe), matcherType: "and" }) });
    }
    function Uu(...e) {
      return me({ [Ne]: () => ({ match: (t) => {
        let r = {}, n = (i, o) => {
          r[i] = o;
        };
        return Kt(e, Qe).forEach((i) => n(i, void 0)), { matched: e.some((i) => xe(i, t, n)), selections: r };
      }, getSelectionKeys: () => Kt(e, Qe), matcherType: "or" }) });
    }
    function I(e) {
      return { [Ne]: () => ({ match: (t) => ({ matched: !!e(t) }) }) };
    }
    function $o(...e) {
      let t = typeof e[0] == "string" ? e[0] : void 0, r = e.length === 2 ? e[1] : typeof e[0] == "string" ? void 0 : e[0];
      return me({ [Ne]: () => ({ match: (n) => {
        let i = { [t ?? jr]: n };
        return { matched: r === void 0 || xe(r, n, (o, s) => {
          i[o] = s;
        }), selections: i };
      }, getSelectionKeys: () => [t ?? jr].concat(r === void 0 ? [] : Qe(r)) }) });
    }
    function Ee(e) {
      return typeof e == "number";
    }
    function je(e) {
      return typeof e == "string";
    }
    function Be(e) {
      return typeof e == "bigint";
    }
    var xf = me(I(function(e) {
      return true;
    }));
    var Ue = (e) => Object.assign(me(e), { startsWith: (t) => {
      return Ue(j(e, (r = t, I((n) => je(n) && n.startsWith(r)))));
      var r;
    }, endsWith: (t) => {
      return Ue(j(e, (r = t, I((n) => je(n) && n.endsWith(r)))));
      var r;
    }, minLength: (t) => Ue(j(e, ((r) => I((n) => je(n) && n.length >= r))(t))), length: (t) => Ue(j(e, ((r) => I((n) => je(n) && n.length === r))(t))), maxLength: (t) => Ue(j(e, ((r) => I((n) => je(n) && n.length <= r))(t))), includes: (t) => {
      return Ue(j(e, (r = t, I((n) => je(n) && n.includes(r)))));
      var r;
    }, regex: (t) => {
      return Ue(j(e, (r = t, I((n) => je(n) && !!n.match(r)))));
      var r;
    } });
    var Pf = Ue(I(je));
    var we = (e) => Object.assign(me(e), { between: (t, r) => we(j(e, ((n, i) => I((o) => Ee(o) && n <= o && i >= o))(t, r))), lt: (t) => we(j(e, ((r) => I((n) => Ee(n) && n < r))(t))), gt: (t) => we(j(e, ((r) => I((n) => Ee(n) && n > r))(t))), lte: (t) => we(j(e, ((r) => I((n) => Ee(n) && n <= r))(t))), gte: (t) => we(j(e, ((r) => I((n) => Ee(n) && n >= r))(t))), int: () => we(j(e, I((t) => Ee(t) && Number.isInteger(t)))), finite: () => we(j(e, I((t) => Ee(t) && Number.isFinite(t)))), positive: () => we(j(e, I((t) => Ee(t) && t > 0))), negative: () => we(j(e, I((t) => Ee(t) && t < 0))) });
    var vf = we(I(Ee));
    var Ge = (e) => Object.assign(me(e), { between: (t, r) => Ge(j(e, ((n, i) => I((o) => Be(o) && n <= o && i >= o))(t, r))), lt: (t) => Ge(j(e, ((r) => I((n) => Be(n) && n < r))(t))), gt: (t) => Ge(j(e, ((r) => I((n) => Be(n) && n > r))(t))), lte: (t) => Ge(j(e, ((r) => I((n) => Be(n) && n <= r))(t))), gte: (t) => Ge(j(e, ((r) => I((n) => Be(n) && n >= r))(t))), positive: () => Ge(j(e, I((t) => Be(t) && t > 0))), negative: () => Ge(j(e, I((t) => Be(t) && t < 0))) });
    var Tf = Ge(I(Be));
    var Rf = me(I(function(e) {
      return typeof e == "boolean";
    }));
    var Cf = me(I(function(e) {
      return typeof e == "symbol";
    }));
    var Sf = me(I(function(e) {
      return e == null;
    }));
    var Af = me(I(function(e) {
      return e != null;
    }));
    var ti = class extends Error {
      constructor(t) {
        let r;
        try {
          r = JSON.stringify(t);
        } catch {
          r = t;
        }
        super(`Pattern matching error: no pattern matches value ${r}`), this.input = void 0, this.input = t;
      }
    };
    var ri = { matched: false, value: void 0 };
    function dt(e) {
      return new ni(e, ri);
    }
    var ni = class e {
      constructor(t, r) {
        this.input = void 0, this.state = void 0, this.input = t, this.state = r;
      }
      with(...t) {
        if (this.state.matched) return this;
        let r = t[t.length - 1], n = [t[0]], i;
        t.length === 3 && typeof t[1] == "function" ? i = t[1] : t.length > 2 && n.push(...t.slice(1, t.length - 1));
        let o = false, s = {}, a = (u, c) => {
          o = true, s[u] = c;
        }, l = !n.some((u) => xe(u, this.input, a)) || i && !i(this.input) ? ri : { matched: true, value: r(o ? jr in s ? s[jr] : s : this.input, this.input) };
        return new e(this.input, l);
      }
      when(t, r) {
        if (this.state.matched) return this;
        let n = !!t(this.input);
        return new e(this.input, n ? { matched: true, value: r(this.input, this.input) } : ri);
      }
      otherwise(t) {
        return this.state.matched ? this.state.value : t(this.input);
      }
      exhaustive() {
        if (this.state.matched) return this.state.value;
        throw new ti(this.input);
      }
      run() {
        return this.exhaustive();
      }
      returnType() {
        return this;
      }
    };
    var Bo = require("util");
    var Gu = { warn: _e("prisma:warn") };
    var Qu = { warn: () => !process.env.PRISMA_DISABLE_WARNINGS };
    function Br(e, ...t) {
      Qu.warn() && console.warn(`${Gu.warn} ${e}`, ...t);
    }
    var Ju = (0, Bo.promisify)(jo.default.exec);
    var ne = F("prisma:get-platform");
    var Wu = ["1.0.x", "1.1.x", "3.0.x"];
    async function Uo() {
      let e = Gr.default.platform(), t = process.arch;
      if (e === "freebsd") {
        let s = await Qr("freebsd-version");
        if (s && s.trim().length > 0) {
          let l = /^(\d+)\.?/.exec(s);
          if (l) return { platform: "freebsd", targetDistro: `freebsd${l[1]}`, arch: t };
        }
      }
      if (e !== "linux") return { platform: e, arch: t };
      let r = await Ku(), n = await nc(), i = zu({ arch: t, archFromUname: n, familyDistro: r.familyDistro }), { libssl: o } = await Zu(i);
      return { platform: "linux", libssl: o, arch: t, archFromUname: n, ...r };
    }
    function Hu(e) {
      let t = /^ID="?([^"\n]*)"?$/im, r = /^ID_LIKE="?([^"\n]*)"?$/im, n = t.exec(e), i = n && n[1] && n[1].toLowerCase() || "", o = r.exec(e), s = o && o[1] && o[1].toLowerCase() || "", a = dt({ id: i, idLike: s }).with({ id: "alpine" }, ({ id: l }) => ({ targetDistro: "musl", familyDistro: l, originalDistro: l })).with({ id: "raspbian" }, ({ id: l }) => ({ targetDistro: "arm", familyDistro: "debian", originalDistro: l })).with({ id: "nixos" }, ({ id: l }) => ({ targetDistro: "nixos", originalDistro: l, familyDistro: "nixos" })).with({ id: "debian" }, { id: "ubuntu" }, ({ id: l }) => ({ targetDistro: "debian", familyDistro: "debian", originalDistro: l })).with({ id: "rhel" }, { id: "centos" }, { id: "fedora" }, ({ id: l }) => ({ targetDistro: "rhel", familyDistro: "rhel", originalDistro: l })).when(({ idLike: l }) => l.includes("debian") || l.includes("ubuntu"), ({ id: l }) => ({ targetDistro: "debian", familyDistro: "debian", originalDistro: l })).when(({ idLike: l }) => i === "arch" || l.includes("arch"), ({ id: l }) => ({ targetDistro: "debian", familyDistro: "arch", originalDistro: l })).when(({ idLike: l }) => l.includes("centos") || l.includes("fedora") || l.includes("rhel") || l.includes("suse"), ({ id: l }) => ({ targetDistro: "rhel", familyDistro: "rhel", originalDistro: l })).otherwise(({ id: l }) => ({ targetDistro: void 0, familyDistro: void 0, originalDistro: l }));
      return ne(`Found distro info:
${JSON.stringify(a, null, 2)}`), a;
    }
    async function Ku() {
      let e = "/etc/os-release";
      try {
        let t = await ii.default.readFile(e, { encoding: "utf-8" });
        return Hu(t);
      } catch {
        return { targetDistro: void 0, familyDistro: void 0, originalDistro: void 0 };
      }
    }
    function Yu(e) {
      let t = /^OpenSSL\s(\d+\.\d+)\.\d+/.exec(e);
      if (t) {
        let r = `${t[1]}.x`;
        return Go(r);
      }
    }
    function qo(e) {
      let t = /libssl\.so\.(\d)(\.\d)?/.exec(e);
      if (t) {
        let r = `${t[1]}${t[2] ?? ".0"}.x`;
        return Go(r);
      }
    }
    function Go(e) {
      let t = (() => {
        if (Jo(e)) return e;
        let r = e.split(".");
        return r[1] = "0", r.join(".");
      })();
      if (Wu.includes(t)) return t;
    }
    function zu(e) {
      return dt(e).with({ familyDistro: "musl" }, () => (ne('Trying platform-specific paths for "alpine"'), ["/lib", "/usr/lib"])).with({ familyDistro: "debian" }, ({ archFromUname: t }) => (ne('Trying platform-specific paths for "debian" (and "ubuntu")'), [`/usr/lib/${t}-linux-gnu`, `/lib/${t}-linux-gnu`])).with({ familyDistro: "rhel" }, () => (ne('Trying platform-specific paths for "rhel"'), ["/lib64", "/usr/lib64"])).otherwise(({ familyDistro: t, arch: r, archFromUname: n }) => (ne(`Don't know any platform-specific paths for "${t}" on ${r} (${n})`), []));
    }
    async function Zu(e) {
      let t = 'grep -v "libssl.so.0"', r = await Vo(e);
      if (r) {
        ne(`Found libssl.so file using platform-specific paths: ${r}`);
        let o = qo(r);
        if (ne(`The parsed libssl version is: ${o}`), o) return { libssl: o, strategy: "libssl-specific-path" };
      }
      ne('Falling back to "ldconfig" and other generic paths');
      let n = await Qr(`ldconfig -p | sed "s/.*=>s*//" | sed "s|.*/||" | grep libssl | sort | ${t}`);
      if (n || (n = await Vo(["/lib64", "/usr/lib64", "/lib", "/usr/lib"])), n) {
        ne(`Found libssl.so file using "ldconfig" or other generic paths: ${n}`);
        let o = qo(n);
        if (ne(`The parsed libssl version is: ${o}`), o) return { libssl: o, strategy: "ldconfig" };
      }
      let i = await Qr("openssl version -v");
      if (i) {
        ne(`Found openssl binary with version: ${i}`);
        let o = Yu(i);
        if (ne(`The parsed openssl version is: ${o}`), o) return { libssl: o, strategy: "openssl-binary" };
      }
      return ne("Couldn't find any version of libssl or OpenSSL in the system"), {};
    }
    async function Vo(e) {
      for (let t of e) {
        let r = await Xu(t);
        if (r) return r;
      }
    }
    async function Xu(e) {
      try {
        return (await ii.default.readdir(e)).find((r) => r.startsWith("libssl.so.") && !r.startsWith("libssl.so.0"));
      } catch (t) {
        if (t.code === "ENOENT") return;
        throw t;
      }
    }
    async function nt() {
      let { binaryTarget: e } = await Qo();
      return e;
    }
    function ec(e) {
      return e.binaryTarget !== void 0;
    }
    async function oi() {
      let { memoized: e, ...t } = await Qo();
      return t;
    }
    var Ur = {};
    async function Qo() {
      if (ec(Ur)) return Promise.resolve({ ...Ur, memoized: true });
      let e = await Uo(), t = tc(e);
      return Ur = { ...e, binaryTarget: t }, { ...Ur, memoized: false };
    }
    function tc(e) {
      let { platform: t, arch: r, archFromUname: n, libssl: i, targetDistro: o, familyDistro: s, originalDistro: a } = e;
      t === "linux" && !["x64", "arm64"].includes(r) && Br(`Prisma only officially supports Linux on amd64 (x86_64) and arm64 (aarch64) system architectures (detected "${r}" instead). If you are using your own custom Prisma engines, you can ignore this warning, as long as you've compiled the engines for your system architecture "${n}".`);
      let l = "1.1.x";
      if (t === "linux" && i === void 0) {
        let c = dt({ familyDistro: s }).with({ familyDistro: "debian" }, () => "Please manually install OpenSSL via `apt-get update -y && apt-get install -y openssl` and try installing Prisma again. If you're running Prisma on Docker, add this command to your Dockerfile, or switch to an image that already has OpenSSL installed.").otherwise(() => "Please manually install OpenSSL and try installing Prisma again.");
        Br(`Prisma failed to detect the libssl/openssl version to use, and may not work as expected. Defaulting to "openssl-${l}".
${c}`);
      }
      let u = "debian";
      if (t === "linux" && o === void 0 && ne(`Distro is "${a}". Falling back to Prisma engines built for "${u}".`), t === "darwin" && r === "arm64") return "darwin-arm64";
      if (t === "darwin") return "darwin";
      if (t === "win32") return "windows";
      if (t === "freebsd") return o;
      if (t === "openbsd") return "openbsd";
      if (t === "netbsd") return "netbsd";
      if (t === "linux" && o === "nixos") return "linux-nixos";
      if (t === "linux" && r === "arm64") return `${o === "musl" ? "linux-musl-arm64" : "linux-arm64"}-openssl-${i || l}`;
      if (t === "linux" && r === "arm") return `linux-arm-openssl-${i || l}`;
      if (t === "linux" && o === "musl") {
        let c = "linux-musl";
        return !i || Jo(i) ? c : `${c}-openssl-${i}`;
      }
      return t === "linux" && o && i ? `${o}-openssl-${i}` : (t !== "linux" && Br(`Prisma detected unknown OS "${t}" and may not work as expected. Defaulting to "linux".`), i ? `${u}-openssl-${i}` : o ? `${o}-openssl-${l}` : `${u}-openssl-${l}`);
    }
    async function rc(e) {
      try {
        return await e();
      } catch {
        return;
      }
    }
    function Qr(e) {
      return rc(async () => {
        let t = await Ju(e);
        return ne(`Command "${e}" successfully returned "${t.stdout}"`), t.stdout;
      });
    }
    async function nc() {
      var _a2;
      return typeof Gr.default.machine == "function" ? Gr.default.machine() : (_a2 = await Qr("uname -m")) == null ? void 0 : _a2.trim();
    }
    function Jo(e) {
      return e.startsWith("1.");
    }
    var is = _(ns());
    function di(e) {
      return (0, is.default)(e, e, { fallback: X });
    }
    var uc = os();
    var mi = uc.version;
    var pc = _(gi());
    var q = _(require("path"));
    var dc = _(gi());
    var lg = F("prisma:engines");
    function ss() {
      return q.default.join(__dirname, "../");
    }
    var ug = "libquery-engine";
    q.default.join(__dirname, "../query-engine-darwin");
    q.default.join(__dirname, "../query-engine-darwin-arm64");
    q.default.join(__dirname, "../query-engine-debian-openssl-1.0.x");
    q.default.join(__dirname, "../query-engine-debian-openssl-1.1.x");
    q.default.join(__dirname, "../query-engine-debian-openssl-3.0.x");
    q.default.join(__dirname, "../query-engine-linux-static-x64");
    q.default.join(__dirname, "../query-engine-linux-static-arm64");
    q.default.join(__dirname, "../query-engine-rhel-openssl-1.0.x");
    q.default.join(__dirname, "../query-engine-rhel-openssl-1.1.x");
    q.default.join(__dirname, "../query-engine-rhel-openssl-3.0.x");
    q.default.join(__dirname, "../libquery_engine-darwin.dylib.node");
    q.default.join(__dirname, "../libquery_engine-darwin-arm64.dylib.node");
    q.default.join(__dirname, "../libquery_engine-debian-openssl-1.0.x.so.node");
    q.default.join(__dirname, "../libquery_engine-debian-openssl-1.1.x.so.node");
    q.default.join(__dirname, "../libquery_engine-debian-openssl-3.0.x.so.node");
    q.default.join(__dirname, "../libquery_engine-linux-arm64-openssl-1.0.x.so.node");
    q.default.join(__dirname, "../libquery_engine-linux-arm64-openssl-1.1.x.so.node");
    q.default.join(__dirname, "../libquery_engine-linux-arm64-openssl-3.0.x.so.node");
    q.default.join(__dirname, "../libquery_engine-linux-musl.so.node");
    q.default.join(__dirname, "../libquery_engine-linux-musl-openssl-3.0.x.so.node");
    q.default.join(__dirname, "../libquery_engine-rhel-openssl-1.0.x.so.node");
    q.default.join(__dirname, "../libquery_engine-rhel-openssl-1.1.x.so.node");
    q.default.join(__dirname, "../libquery_engine-rhel-openssl-3.0.x.so.node");
    q.default.join(__dirname, "../query_engine-windows.dll.node");
    var hi = _(require("fs"));
    var as = F("chmodPlusX");
    function yi(e) {
      if (process.platform === "win32") return;
      let t = hi.default.statSync(e), r = t.mode | 64 | 8 | 1;
      if (t.mode === r) {
        as(`Execution permissions of ${e} are fine`);
        return;
      }
      let n = r.toString(8).slice(-3);
      as(`Have to call chmodPlusX on ${e}`), hi.default.chmodSync(e, n);
    }
    function bi(e) {
      let t = e.e, r = (a) => `Prisma cannot find the required \`${a}\` system library in your system`, n = t.message.includes("cannot open shared object file"), i = `Please refer to the documentation about Prisma's system requirements: ${di("https://pris.ly/d/system-requirements")}`, o = `Unable to require(\`${ke(e.id)}\`).`, s = dt({ message: t.message, code: t.code }).with({ code: "ENOENT" }, () => "File does not exist.").when(({ message: a }) => n && a.includes("libz"), () => `${r("libz")}. Please install it and try again.`).when(({ message: a }) => n && a.includes("libgcc_s"), () => `${r("libgcc_s")}. Please install it and try again.`).when(({ message: a }) => n && a.includes("libssl"), () => {
        let a = e.platformInfo.libssl ? `openssl-${e.platformInfo.libssl}` : "openssl";
        return `${r("libssl")}. Please install ${a} and try again.`;
      }).when(({ message: a }) => a.includes("GLIBC"), () => `Prisma has detected an incompatible version of the \`glibc\` C standard library installed in your system. This probably means your system may be too old to run Prisma. ${i}`).when(({ message: a }) => e.platformInfo.platform === "linux" && a.includes("symbol not found"), () => `The Prisma engines are not compatible with your system ${e.platformInfo.originalDistro} on (${e.platformInfo.archFromUname}) which uses the \`${e.platformInfo.binaryTarget}\` binaryTarget by default. ${i}`).otherwise(() => `The Prisma engines do not seem to be compatible with your system. ${i}`);
      return `${o}
${s}

Details: ${t.message}`;
    }
    var vi = _(ds());
    var Kr = _(require("fs"));
    var gt = _(require("path"));
    function ms(e) {
      let t = e.ignoreProcessEnv ? {} : process.env, r = (n) => {
        var _a2;
        return ((_a2 = n.match(/(.?\${(?:[a-zA-Z0-9_]+)?})/g)) == null ? void 0 : _a2.reduce(function(o, s) {
          let a = /(.?)\${([a-zA-Z0-9_]+)?}/g.exec(s);
          if (!a) return o;
          let l = a[1], u, c;
          if (l === "\\") c = a[0], u = c.replace("\\$", "$");
          else {
            let p = a[2];
            c = a[0].substring(l.length), u = Object.hasOwnProperty.call(t, p) ? t[p] : e.parsed[p] || "", u = r(u);
          }
          return o.replace(c, u);
        }, n)) ?? n;
      };
      for (let n in e.parsed) {
        let i = Object.hasOwnProperty.call(t, n) ? t[n] : e.parsed[n];
        e.parsed[n] = r(i);
      }
      for (let n in e.parsed) t[n] = e.parsed[n];
      return e;
    }
    var Pi = F("prisma:tryLoadEnv");
    function Zt({ rootEnvPath: e, schemaEnvPath: t }, r = { conflictCheck: "none" }) {
      var _a2, _b;
      let n = fs(e);
      r.conflictCheck !== "none" && Ac(n, t, r.conflictCheck);
      let i = null;
      return gs(n == null ? void 0 : n.path, t) || (i = fs(t)), !n && !i && Pi("No Environment variables loaded"), (i == null ? void 0 : i.dotenvResult.error) ? console.error(de(K("Schema Env Error: ")) + i.dotenvResult.error) : { message: [n == null ? void 0 : n.message, i == null ? void 0 : i.message].filter(Boolean).join(`
`), parsed: { ...(_a2 = n == null ? void 0 : n.dotenvResult) == null ? void 0 : _a2.parsed, ...(_b = i == null ? void 0 : i.dotenvResult) == null ? void 0 : _b.parsed } };
    }
    function Ac(e, t, r) {
      let n = e == null ? void 0 : e.dotenvResult.parsed, i = !gs(e == null ? void 0 : e.path, t);
      if (n && t && i && Kr.default.existsSync(t)) {
        let o = vi.default.parse(Kr.default.readFileSync(t)), s = [];
        for (let a in o) n[a] === o[a] && s.push(a);
        if (s.length > 0) {
          let a = gt.default.relative(process.cwd(), e.path), l = gt.default.relative(process.cwd(), t);
          if (r === "error") {
            let u = `There is a conflict between env var${s.length > 1 ? "s" : ""} in ${X(a)} and ${X(l)}
Conflicting env vars:
${s.map((c) => `  ${K(c)}`).join(`
`)}

We suggest to move the contents of ${X(l)} to ${X(a)} to consolidate your env vars.
`;
            throw new Error(u);
          } else if (r === "warn") {
            let u = `Conflict for env var${s.length > 1 ? "s" : ""} ${s.map((c) => K(c)).join(", ")} in ${X(a)} and ${X(l)}
Env vars from ${X(l)} overwrite the ones from ${X(a)}
      `;
            console.warn(`${_e("warn(prisma)")} ${u}`);
          }
        }
      }
    }
    function fs(e) {
      if (Ic(e)) {
        Pi(`Environment variables loaded from ${e}`);
        let t = vi.default.config({ path: e, debug: process.env.DOTENV_CONFIG_DEBUG ? true : void 0 });
        return { dotenvResult: ms(t), message: ke(`Environment variables loaded from ${gt.default.relative(process.cwd(), e)}`), path: e };
      } else Pi(`Environment variables not found at ${e}`);
      return null;
    }
    function gs(e, t) {
      return e && t && gt.default.resolve(e) === gt.default.resolve(t);
    }
    function Ic(e) {
      return !!(e && Kr.default.existsSync(e));
    }
    var hs = "library";
    function ht(e) {
      let t = Oc();
      return t || ((e == null ? void 0 : e.config.engineType) === "library" ? "library" : (e == null ? void 0 : e.config.engineType) === "binary" ? "binary" : (e == null ? void 0 : e.config.engineType) === "client" ? "client" : hs);
    }
    function Oc() {
      let e = process.env.PRISMA_CLIENT_ENGINE_TYPE;
      return e === "library" ? "library" : e === "binary" ? "binary" : e === "client" ? "client" : void 0;
    }
    var xs = "prisma+postgres";
    var Yr = `${xs}:`;
    function Ti(e) {
      return (e == null ? void 0 : e.startsWith(`${Yr}//`)) ?? false;
    }
    var Xt;
    ((t) => {
      let e;
      ((A) => (A.findUnique = "findUnique", A.findUniqueOrThrow = "findUniqueOrThrow", A.findFirst = "findFirst", A.findFirstOrThrow = "findFirstOrThrow", A.findMany = "findMany", A.create = "create", A.createMany = "createMany", A.createManyAndReturn = "createManyAndReturn", A.update = "update", A.updateMany = "updateMany", A.updateManyAndReturn = "updateManyAndReturn", A.upsert = "upsert", A.delete = "delete", A.deleteMany = "deleteMany", A.groupBy = "groupBy", A.count = "count", A.aggregate = "aggregate", A.findRaw = "findRaw", A.aggregateRaw = "aggregateRaw"))(e = t.ModelAction ||= {});
    })(Xt ||= {});
    var er = _(require("path"));
    function Ri(e) {
      return er.default.sep === er.default.posix.sep ? e : e.split(er.default.sep).join(er.default.posix.sep);
    }
    var vs = _(Ci());
    function Ai(e) {
      return String(new Si(e));
    }
    var Si = class {
      constructor(t) {
        this.config = t;
      }
      toString() {
        let { config: t } = this, r = t.provider.fromEnvVar ? `env("${t.provider.fromEnvVar}")` : t.provider.value, n = JSON.parse(JSON.stringify({ provider: r, binaryTargets: _c(t.binaryTargets) }));
        return `generator ${t.name} {
${(0, vs.default)(Dc(n), 2)}
}`;
      }
    };
    function _c(e) {
      let t;
      if (e.length > 0) {
        let r = e.find((n) => n.fromEnvVar !== null);
        r ? t = `env("${r.fromEnvVar}")` : t = e.map((n) => n.native ? "native" : n.value);
      } else t = void 0;
      return t;
    }
    function Dc(e) {
      let t = Object.keys(e).reduce((r, n) => Math.max(r, n.length), 0);
      return Object.entries(e).map(([r, n]) => `${r.padEnd(t)} = ${Nc(n)}`).join(`
`);
    }
    function Nc(e) {
      return JSON.parse(JSON.stringify(e, (t, r) => Array.isArray(r) ? `[${r.map((n) => JSON.stringify(n)).join(", ")}]` : JSON.stringify(r)));
    }
    var rr = {};
    Gt(rr, { error: () => Mc, info: () => Fc, log: () => Lc, query: () => $c, should: () => Ts, tags: () => tr, warn: () => Ii });
    var tr = { error: de("prisma:error"), warn: _e("prisma:warn"), info: De("prisma:info"), query: rt("prisma:query") };
    var Ts = { warn: () => !process.env.PRISMA_DISABLE_WARNINGS };
    function Lc(...e) {
      console.log(...e);
    }
    function Ii(e, ...t) {
      Ts.warn() && console.warn(`${tr.warn} ${e}`, ...t);
    }
    function Fc(e, ...t) {
      console.info(`${tr.info} ${e}`, ...t);
    }
    function Mc(e, ...t) {
      console.error(`${tr.error} ${e}`, ...t);
    }
    function $c(e, ...t) {
      console.log(`${tr.query} ${e}`, ...t);
    }
    function zr(e, t) {
      if (!e) throw new Error(`${t}. This should never happen. If you see this error, please, open an issue at https://pris.ly/prisma-prisma-bug-report`);
    }
    function Fe(e, t) {
      throw new Error(t);
    }
    function ki(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }
    var _i = (e, t) => e.reduce((r, n) => (r[t(n)] = n, r), {});
    function yt(e, t) {
      let r = {};
      for (let n of Object.keys(e)) r[n] = t(e[n], n);
      return r;
    }
    function Di(e, t) {
      if (e.length === 0) return;
      let r = e[0];
      for (let n = 1; n < e.length; n++) t(r, e[n]) < 0 && (r = e[n]);
      return r;
    }
    function w(e, t) {
      Object.defineProperty(e, "name", { value: t, configurable: true });
    }
    var Is = /* @__PURE__ */ new Set();
    var nr = (e, t, ...r) => {
      Is.has(e) || (Is.add(e), Ii(t, ...r));
    };
    var T = class e extends Error {
      constructor(t, r, n) {
        super(t), this.name = "PrismaClientInitializationError", this.clientVersion = r, this.errorCode = n, Error.captureStackTrace(e);
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientInitializationError";
      }
    };
    w(T, "PrismaClientInitializationError");
    var ee = class extends Error {
      constructor(t, { code: r, clientVersion: n, meta: i, batchRequestIdx: o }) {
        super(t), this.name = "PrismaClientKnownRequestError", this.code = r, this.clientVersion = n, this.meta = i, Object.defineProperty(this, "batchRequestIdx", { value: o, enumerable: false, writable: true });
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientKnownRequestError";
      }
    };
    w(ee, "PrismaClientKnownRequestError");
    var ce = class extends Error {
      constructor(t, r) {
        super(t), this.name = "PrismaClientRustPanicError", this.clientVersion = r;
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientRustPanicError";
      }
    };
    w(ce, "PrismaClientRustPanicError");
    var B = class extends Error {
      constructor(t, { clientVersion: r, batchRequestIdx: n }) {
        super(t), this.name = "PrismaClientUnknownRequestError", this.clientVersion = r, Object.defineProperty(this, "batchRequestIdx", { value: n, writable: true, enumerable: false });
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientUnknownRequestError";
      }
    };
    w(B, "PrismaClientUnknownRequestError");
    var te = class extends Error {
      constructor(r, { clientVersion: n }) {
        super(r);
        this.name = "PrismaClientValidationError";
        this.clientVersion = n;
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientValidationError";
      }
    };
    w(te, "PrismaClientValidationError");
    var bt = 9e15;
    var Ye = 1e9;
    var Ni = "0123456789abcdef";
    var rn = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058";
    var nn = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789";
    var Li = { precision: 20, rounding: 4, modulo: 1, toExpNeg: -7, toExpPos: 21, minE: -bt, maxE: bt, crypto: false };
    var Ds;
    var Me;
    var E = true;
    var sn = "[DecimalError] ";
    var Ke = sn + "Invalid argument: ";
    var Ns = sn + "Precision limit exceeded";
    var Ls = sn + "crypto unavailable";
    var Fs = "[object Decimal]";
    var re = Math.floor;
    var Q = Math.pow;
    var Vc = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i;
    var jc = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i;
    var Bc = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i;
    var Ms = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
    var ge = 1e7;
    var b = 7;
    var Uc = 9007199254740991;
    var Gc = rn.length - 1;
    var Fi = nn.length - 1;
    var m = { toStringTag: Fs };
    m.absoluteValue = m.abs = function() {
      var e = new this.constructor(this);
      return e.s < 0 && (e.s = 1), y(e);
    };
    m.ceil = function() {
      return y(new this.constructor(this), this.e + 1, 2);
    };
    m.clampedTo = m.clamp = function(e, t) {
      var r, n = this, i = n.constructor;
      if (e = new i(e), t = new i(t), !e.s || !t.s) return new i(NaN);
      if (e.gt(t)) throw Error(Ke + t);
      return r = n.cmp(e), r < 0 ? e : n.cmp(t) > 0 ? t : new i(n);
    };
    m.comparedTo = m.cmp = function(e) {
      var t, r, n, i, o = this, s = o.d, a = (e = new o.constructor(e)).d, l = o.s, u = e.s;
      if (!s || !a) return !l || !u ? NaN : l !== u ? l : s === a ? 0 : !s ^ l < 0 ? 1 : -1;
      if (!s[0] || !a[0]) return s[0] ? l : a[0] ? -u : 0;
      if (l !== u) return l;
      if (o.e !== e.e) return o.e > e.e ^ l < 0 ? 1 : -1;
      for (n = s.length, i = a.length, t = 0, r = n < i ? n : i; t < r; ++t) if (s[t] !== a[t]) return s[t] > a[t] ^ l < 0 ? 1 : -1;
      return n === i ? 0 : n > i ^ l < 0 ? 1 : -1;
    };
    m.cosine = m.cos = function() {
      var e, t, r = this, n = r.constructor;
      return r.d ? r.d[0] ? (e = n.precision, t = n.rounding, n.precision = e + Math.max(r.e, r.sd()) + b, n.rounding = 1, r = Qc(n, Bs(n, r)), n.precision = e, n.rounding = t, y(Me == 2 || Me == 3 ? r.neg() : r, e, t, true)) : new n(1) : new n(NaN);
    };
    m.cubeRoot = m.cbrt = function() {
      var e, t, r, n, i, o, s, a, l, u, c = this, p = c.constructor;
      if (!c.isFinite() || c.isZero()) return new p(c);
      for (E = false, o = c.s * Q(c.s * c, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (r = Y(c.d), e = c.e, (o = (e - r.length + 1) % 3) && (r += o == 1 || o == -2 ? "0" : "00"), o = Q(r, 1 / 3), e = re((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? r = "5e" + e : (r = o.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e), n = new p(r), n.s = c.s) : n = new p(o.toString()), s = (e = p.precision) + 3; ; ) if (a = n, l = a.times(a).times(a), u = l.plus(c), n = M(u.plus(c).times(a), u.plus(l), s + 2, 1), Y(a.d).slice(0, s) === (r = Y(n.d)).slice(0, s)) if (r = r.slice(s - 3, s + 1), r == "9999" || !i && r == "4999") {
        if (!i && (y(a, e + 1, 0), a.times(a).times(a).eq(c))) {
          n = a;
          break;
        }
        s += 4, i = 1;
      } else {
        (!+r || !+r.slice(1) && r.charAt(0) == "5") && (y(n, e + 1, 1), t = !n.times(n).times(n).eq(c));
        break;
      }
      return E = true, y(n, e, p.rounding, t);
    };
    m.decimalPlaces = m.dp = function() {
      var e, t = this.d, r = NaN;
      if (t) {
        if (e = t.length - 1, r = (e - re(this.e / b)) * b, e = t[e], e) for (; e % 10 == 0; e /= 10) r--;
        r < 0 && (r = 0);
      }
      return r;
    };
    m.dividedBy = m.div = function(e) {
      return M(this, new this.constructor(e));
    };
    m.dividedToIntegerBy = m.divToInt = function(e) {
      var t = this, r = t.constructor;
      return y(M(t, new r(e), 0, 1, 1), r.precision, r.rounding);
    };
    m.equals = m.eq = function(e) {
      return this.cmp(e) === 0;
    };
    m.floor = function() {
      return y(new this.constructor(this), this.e + 1, 3);
    };
    m.greaterThan = m.gt = function(e) {
      return this.cmp(e) > 0;
    };
    m.greaterThanOrEqualTo = m.gte = function(e) {
      var t = this.cmp(e);
      return t == 1 || t === 0;
    };
    m.hyperbolicCosine = m.cosh = function() {
      var e, t, r, n, i, o = this, s = o.constructor, a = new s(1);
      if (!o.isFinite()) return new s(o.s ? 1 / 0 : NaN);
      if (o.isZero()) return a;
      r = s.precision, n = s.rounding, s.precision = r + Math.max(o.e, o.sd()) + 4, s.rounding = 1, i = o.d.length, i < 32 ? (e = Math.ceil(i / 3), t = (1 / ln(4, e)).toString()) : (e = 16, t = "2.3283064365386962890625e-10"), o = Et(s, 1, o.times(t), new s(1), true);
      for (var l, u = e, c = new s(8); u--; ) l = o.times(o), o = a.minus(l.times(c.minus(l.times(c))));
      return y(o, s.precision = r, s.rounding = n, true);
    };
    m.hyperbolicSine = m.sinh = function() {
      var e, t, r, n, i = this, o = i.constructor;
      if (!i.isFinite() || i.isZero()) return new o(i);
      if (t = o.precision, r = o.rounding, o.precision = t + Math.max(i.e, i.sd()) + 4, o.rounding = 1, n = i.d.length, n < 3) i = Et(o, 2, i, i, true);
      else {
        e = 1.4 * Math.sqrt(n), e = e > 16 ? 16 : e | 0, i = i.times(1 / ln(5, e)), i = Et(o, 2, i, i, true);
        for (var s, a = new o(5), l = new o(16), u = new o(20); e--; ) s = i.times(i), i = i.times(a.plus(s.times(l.times(s).plus(u))));
      }
      return o.precision = t, o.rounding = r, y(i, t, r, true);
    };
    m.hyperbolicTangent = m.tanh = function() {
      var e, t, r = this, n = r.constructor;
      return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 7, n.rounding = 1, M(r.sinh(), r.cosh(), n.precision = e, n.rounding = t)) : new n(r.s);
    };
    m.inverseCosine = m.acos = function() {
      var e = this, t = e.constructor, r = e.abs().cmp(1), n = t.precision, i = t.rounding;
      return r !== -1 ? r === 0 ? e.isNeg() ? Pe(t, n, i) : new t(0) : new t(NaN) : e.isZero() ? Pe(t, n + 4, i).times(0.5) : (t.precision = n + 6, t.rounding = 1, e = new t(1).minus(e).div(e.plus(1)).sqrt().atan(), t.precision = n, t.rounding = i, e.times(2));
    };
    m.inverseHyperbolicCosine = m.acosh = function() {
      var e, t, r = this, n = r.constructor;
      return r.lte(1) ? new n(r.eq(1) ? 0 : NaN) : r.isFinite() ? (e = n.precision, t = n.rounding, n.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4, n.rounding = 1, E = false, r = r.times(r).minus(1).sqrt().plus(r), E = true, n.precision = e, n.rounding = t, r.ln()) : new n(r);
    };
    m.inverseHyperbolicSine = m.asinh = function() {
      var e, t, r = this, n = r.constructor;
      return !r.isFinite() || r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6, n.rounding = 1, E = false, r = r.times(r).plus(1).sqrt().plus(r), E = true, n.precision = e, n.rounding = t, r.ln());
    };
    m.inverseHyperbolicTangent = m.atanh = function() {
      var e, t, r, n, i = this, o = i.constructor;
      return i.isFinite() ? i.e >= 0 ? new o(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN) : (e = o.precision, t = o.rounding, n = i.sd(), Math.max(n, e) < 2 * -i.e - 1 ? y(new o(i), e, t, true) : (o.precision = r = n - i.e, i = M(i.plus(1), new o(1).minus(i), r + e, 1), o.precision = e + 4, o.rounding = 1, i = i.ln(), o.precision = e, o.rounding = t, i.times(0.5))) : new o(NaN);
    };
    m.inverseSine = m.asin = function() {
      var e, t, r, n, i = this, o = i.constructor;
      return i.isZero() ? new o(i) : (t = i.abs().cmp(1), r = o.precision, n = o.rounding, t !== -1 ? t === 0 ? (e = Pe(o, r + 4, n).times(0.5), e.s = i.s, e) : new o(NaN) : (o.precision = r + 6, o.rounding = 1, i = i.div(new o(1).minus(i.times(i)).sqrt().plus(1)).atan(), o.precision = r, o.rounding = n, i.times(2)));
    };
    m.inverseTangent = m.atan = function() {
      var e, t, r, n, i, o, s, a, l, u = this, c = u.constructor, p = c.precision, d = c.rounding;
      if (u.isFinite()) {
        if (u.isZero()) return new c(u);
        if (u.abs().eq(1) && p + 4 <= Fi) return s = Pe(c, p + 4, d).times(0.25), s.s = u.s, s;
      } else {
        if (!u.s) return new c(NaN);
        if (p + 4 <= Fi) return s = Pe(c, p + 4, d).times(0.5), s.s = u.s, s;
      }
      for (c.precision = a = p + 10, c.rounding = 1, r = Math.min(28, a / b + 2 | 0), e = r; e; --e) u = u.div(u.times(u).plus(1).sqrt().plus(1));
      for (E = false, t = Math.ceil(a / b), n = 1, l = u.times(u), s = new c(u), i = u; e !== -1; ) if (i = i.times(l), o = s.minus(i.div(n += 2)), i = i.times(l), s = o.plus(i.div(n += 2)), s.d[t] !== void 0) for (e = t; s.d[e] === o.d[e] && e--; ) ;
      return r && (s = s.times(2 << r - 1)), E = true, y(s, c.precision = p, c.rounding = d, true);
    };
    m.isFinite = function() {
      return !!this.d;
    };
    m.isInteger = m.isInt = function() {
      return !!this.d && re(this.e / b) > this.d.length - 2;
    };
    m.isNaN = function() {
      return !this.s;
    };
    m.isNegative = m.isNeg = function() {
      return this.s < 0;
    };
    m.isPositive = m.isPos = function() {
      return this.s > 0;
    };
    m.isZero = function() {
      return !!this.d && this.d[0] === 0;
    };
    m.lessThan = m.lt = function(e) {
      return this.cmp(e) < 0;
    };
    m.lessThanOrEqualTo = m.lte = function(e) {
      return this.cmp(e) < 1;
    };
    m.logarithm = m.log = function(e) {
      var t, r, n, i, o, s, a, l, u = this, c = u.constructor, p = c.precision, d = c.rounding, f = 5;
      if (e == null) e = new c(10), t = true;
      else {
        if (e = new c(e), r = e.d, e.s < 0 || !r || !r[0] || e.eq(1)) return new c(NaN);
        t = e.eq(10);
      }
      if (r = u.d, u.s < 0 || !r || !r[0] || u.eq(1)) return new c(r && !r[0] ? -1 / 0 : u.s != 1 ? NaN : r ? 0 : 1 / 0);
      if (t) if (r.length > 1) o = true;
      else {
        for (i = r[0]; i % 10 === 0; ) i /= 10;
        o = i !== 1;
      }
      if (E = false, a = p + f, s = He(u, a), n = t ? on(c, a + 10) : He(e, a), l = M(s, n, a, 1), ir(l.d, i = p, d)) do
        if (a += 10, s = He(u, a), n = t ? on(c, a + 10) : He(e, a), l = M(s, n, a, 1), !o) {
          +Y(l.d).slice(i + 1, i + 15) + 1 == 1e14 && (l = y(l, p + 1, 0));
          break;
        }
      while (ir(l.d, i += 10, d));
      return E = true, y(l, p, d);
    };
    m.minus = m.sub = function(e) {
      var t, r, n, i, o, s, a, l, u, c, p, d, f = this, g = f.constructor;
      if (e = new g(e), !f.d || !e.d) return !f.s || !e.s ? e = new g(NaN) : f.d ? e.s = -e.s : e = new g(e.d || f.s !== e.s ? f : NaN), e;
      if (f.s != e.s) return e.s = -e.s, f.plus(e);
      if (u = f.d, d = e.d, a = g.precision, l = g.rounding, !u[0] || !d[0]) {
        if (d[0]) e.s = -e.s;
        else if (u[0]) e = new g(f);
        else return new g(l === 3 ? -0 : 0);
        return E ? y(e, a, l) : e;
      }
      if (r = re(e.e / b), c = re(f.e / b), u = u.slice(), o = c - r, o) {
        for (p = o < 0, p ? (t = u, o = -o, s = d.length) : (t = d, r = c, s = u.length), n = Math.max(Math.ceil(a / b), s) + 2, o > n && (o = n, t.length = 1), t.reverse(), n = o; n--; ) t.push(0);
        t.reverse();
      } else {
        for (n = u.length, s = d.length, p = n < s, p && (s = n), n = 0; n < s; n++) if (u[n] != d[n]) {
          p = u[n] < d[n];
          break;
        }
        o = 0;
      }
      for (p && (t = u, u = d, d = t, e.s = -e.s), s = u.length, n = d.length - s; n > 0; --n) u[s++] = 0;
      for (n = d.length; n > o; ) {
        if (u[--n] < d[n]) {
          for (i = n; i && u[--i] === 0; ) u[i] = ge - 1;
          --u[i], u[n] += ge;
        }
        u[n] -= d[n];
      }
      for (; u[--s] === 0; ) u.pop();
      for (; u[0] === 0; u.shift()) --r;
      return u[0] ? (e.d = u, e.e = an(u, r), E ? y(e, a, l) : e) : new g(l === 3 ? -0 : 0);
    };
    m.modulo = m.mod = function(e) {
      var t, r = this, n = r.constructor;
      return e = new n(e), !r.d || !e.s || e.d && !e.d[0] ? new n(NaN) : !e.d || r.d && !r.d[0] ? y(new n(r), n.precision, n.rounding) : (E = false, n.modulo == 9 ? (t = M(r, e.abs(), 0, 3, 1), t.s *= e.s) : t = M(r, e, 0, n.modulo, 1), t = t.times(e), E = true, r.minus(t));
    };
    m.naturalExponential = m.exp = function() {
      return Mi(this);
    };
    m.naturalLogarithm = m.ln = function() {
      return He(this);
    };
    m.negated = m.neg = function() {
      var e = new this.constructor(this);
      return e.s = -e.s, y(e);
    };
    m.plus = m.add = function(e) {
      var t, r, n, i, o, s, a, l, u, c, p = this, d = p.constructor;
      if (e = new d(e), !p.d || !e.d) return !p.s || !e.s ? e = new d(NaN) : p.d || (e = new d(e.d || p.s === e.s ? p : NaN)), e;
      if (p.s != e.s) return e.s = -e.s, p.minus(e);
      if (u = p.d, c = e.d, a = d.precision, l = d.rounding, !u[0] || !c[0]) return c[0] || (e = new d(p)), E ? y(e, a, l) : e;
      if (o = re(p.e / b), n = re(e.e / b), u = u.slice(), i = o - n, i) {
        for (i < 0 ? (r = u, i = -i, s = c.length) : (r = c, n = o, s = u.length), o = Math.ceil(a / b), s = o > s ? o + 1 : s + 1, i > s && (i = s, r.length = 1), r.reverse(); i--; ) r.push(0);
        r.reverse();
      }
      for (s = u.length, i = c.length, s - i < 0 && (i = s, r = c, c = u, u = r), t = 0; i; ) t = (u[--i] = u[i] + c[i] + t) / ge | 0, u[i] %= ge;
      for (t && (u.unshift(t), ++n), s = u.length; u[--s] == 0; ) u.pop();
      return e.d = u, e.e = an(u, n), E ? y(e, a, l) : e;
    };
    m.precision = m.sd = function(e) {
      var t, r = this;
      if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(Ke + e);
      return r.d ? (t = $s(r.d), e && r.e + 1 > t && (t = r.e + 1)) : t = NaN, t;
    };
    m.round = function() {
      var e = this, t = e.constructor;
      return y(new t(e), e.e + 1, t.rounding);
    };
    m.sine = m.sin = function() {
      var e, t, r = this, n = r.constructor;
      return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + Math.max(r.e, r.sd()) + b, n.rounding = 1, r = Wc(n, Bs(n, r)), n.precision = e, n.rounding = t, y(Me > 2 ? r.neg() : r, e, t, true)) : new n(NaN);
    };
    m.squareRoot = m.sqrt = function() {
      var e, t, r, n, i, o, s = this, a = s.d, l = s.e, u = s.s, c = s.constructor;
      if (u !== 1 || !a || !a[0]) return new c(!u || u < 0 && (!a || a[0]) ? NaN : a ? s : 1 / 0);
      for (E = false, u = Math.sqrt(+s), u == 0 || u == 1 / 0 ? (t = Y(a), (t.length + l) % 2 == 0 && (t += "0"), u = Math.sqrt(t), l = re((l + 1) / 2) - (l < 0 || l % 2), u == 1 / 0 ? t = "5e" + l : (t = u.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + l), n = new c(t)) : n = new c(u.toString()), r = (l = c.precision) + 3; ; ) if (o = n, n = o.plus(M(s, o, r + 2, 1)).times(0.5), Y(o.d).slice(0, r) === (t = Y(n.d)).slice(0, r)) if (t = t.slice(r - 3, r + 1), t == "9999" || !i && t == "4999") {
        if (!i && (y(o, l + 1, 0), o.times(o).eq(s))) {
          n = o;
          break;
        }
        r += 4, i = 1;
      } else {
        (!+t || !+t.slice(1) && t.charAt(0) == "5") && (y(n, l + 1, 1), e = !n.times(n).eq(s));
        break;
      }
      return E = true, y(n, l, c.rounding, e);
    };
    m.tangent = m.tan = function() {
      var e, t, r = this, n = r.constructor;
      return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 10, n.rounding = 1, r = r.sin(), r.s = 1, r = M(r, new n(1).minus(r.times(r)).sqrt(), e + 10, 0), n.precision = e, n.rounding = t, y(Me == 2 || Me == 4 ? r.neg() : r, e, t, true)) : new n(NaN);
    };
    m.times = m.mul = function(e) {
      var t, r, n, i, o, s, a, l, u, c = this, p = c.constructor, d = c.d, f = (e = new p(e)).d;
      if (e.s *= c.s, !d || !d[0] || !f || !f[0]) return new p(!e.s || d && !d[0] && !f || f && !f[0] && !d ? NaN : !d || !f ? e.s / 0 : e.s * 0);
      for (r = re(c.e / b) + re(e.e / b), l = d.length, u = f.length, l < u && (o = d, d = f, f = o, s = l, l = u, u = s), o = [], s = l + u, n = s; n--; ) o.push(0);
      for (n = u; --n >= 0; ) {
        for (t = 0, i = l + n; i > n; ) a = o[i] + f[n] * d[i - n - 1] + t, o[i--] = a % ge | 0, t = a / ge | 0;
        o[i] = (o[i] + t) % ge | 0;
      }
      for (; !o[--s]; ) o.pop();
      return t ? ++r : o.shift(), e.d = o, e.e = an(o, r), E ? y(e, p.precision, p.rounding) : e;
    };
    m.toBinary = function(e, t) {
      return $i(this, 2, e, t);
    };
    m.toDecimalPlaces = m.toDP = function(e, t) {
      var r = this, n = r.constructor;
      return r = new n(r), e === void 0 ? r : (se(e, 0, Ye), t === void 0 ? t = n.rounding : se(t, 0, 8), y(r, e + r.e + 1, t));
    };
    m.toExponential = function(e, t) {
      var r, n = this, i = n.constructor;
      return e === void 0 ? r = ve(n, true) : (se(e, 0, Ye), t === void 0 ? t = i.rounding : se(t, 0, 8), n = y(new i(n), e + 1, t), r = ve(n, true, e + 1)), n.isNeg() && !n.isZero() ? "-" + r : r;
    };
    m.toFixed = function(e, t) {
      var r, n, i = this, o = i.constructor;
      return e === void 0 ? r = ve(i) : (se(e, 0, Ye), t === void 0 ? t = o.rounding : se(t, 0, 8), n = y(new o(i), e + i.e + 1, t), r = ve(n, false, e + n.e + 1)), i.isNeg() && !i.isZero() ? "-" + r : r;
    };
    m.toFraction = function(e) {
      var t, r, n, i, o, s, a, l, u, c, p, d, f = this, g = f.d, h = f.constructor;
      if (!g) return new h(f);
      if (u = r = new h(1), n = l = new h(0), t = new h(n), o = t.e = $s(g) - f.e - 1, s = o % b, t.d[0] = Q(10, s < 0 ? b + s : s), e == null) e = o > 0 ? t : u;
      else {
        if (a = new h(e), !a.isInt() || a.lt(u)) throw Error(Ke + a);
        e = a.gt(t) ? o > 0 ? t : u : a;
      }
      for (E = false, a = new h(Y(g)), c = h.precision, h.precision = o = g.length * b * 2; p = M(a, t, 0, 1, 1), i = r.plus(p.times(n)), i.cmp(e) != 1; ) r = n, n = i, i = u, u = l.plus(p.times(i)), l = i, i = t, t = a.minus(p.times(i)), a = i;
      return i = M(e.minus(r), n, 0, 1, 1), l = l.plus(i.times(u)), r = r.plus(i.times(n)), l.s = u.s = f.s, d = M(u, n, o, 1).minus(f).abs().cmp(M(l, r, o, 1).minus(f).abs()) < 1 ? [u, n] : [l, r], h.precision = c, E = true, d;
    };
    m.toHexadecimal = m.toHex = function(e, t) {
      return $i(this, 16, e, t);
    };
    m.toNearest = function(e, t) {
      var r = this, n = r.constructor;
      if (r = new n(r), e == null) {
        if (!r.d) return r;
        e = new n(1), t = n.rounding;
      } else {
        if (e = new n(e), t === void 0 ? t = n.rounding : se(t, 0, 8), !r.d) return e.s ? r : e;
        if (!e.d) return e.s && (e.s = r.s), e;
      }
      return e.d[0] ? (E = false, r = M(r, e, 0, t, 1).times(e), E = true, y(r)) : (e.s = r.s, r = e), r;
    };
    m.toNumber = function() {
      return +this;
    };
    m.toOctal = function(e, t) {
      return $i(this, 8, e, t);
    };
    m.toPower = m.pow = function(e) {
      var t, r, n, i, o, s, a = this, l = a.constructor, u = +(e = new l(e));
      if (!a.d || !e.d || !a.d[0] || !e.d[0]) return new l(Q(+a, u));
      if (a = new l(a), a.eq(1)) return a;
      if (n = l.precision, o = l.rounding, e.eq(1)) return y(a, n, o);
      if (t = re(e.e / b), t >= e.d.length - 1 && (r = u < 0 ? -u : u) <= Uc) return i = qs(l, a, r, n), e.s < 0 ? new l(1).div(i) : y(i, n, o);
      if (s = a.s, s < 0) {
        if (t < e.d.length - 1) return new l(NaN);
        if (e.d[t] & 1 || (s = 1), a.e == 0 && a.d[0] == 1 && a.d.length == 1) return a.s = s, a;
      }
      return r = Q(+a, u), t = r == 0 || !isFinite(r) ? re(u * (Math.log("0." + Y(a.d)) / Math.LN10 + a.e + 1)) : new l(r + "").e, t > l.maxE + 1 || t < l.minE - 1 ? new l(t > 0 ? s / 0 : 0) : (E = false, l.rounding = a.s = 1, r = Math.min(12, (t + "").length), i = Mi(e.times(He(a, n + r)), n), i.d && (i = y(i, n + 5, 1), ir(i.d, n, o) && (t = n + 10, i = y(Mi(e.times(He(a, t + r)), t), t + 5, 1), +Y(i.d).slice(n + 1, n + 15) + 1 == 1e14 && (i = y(i, n + 1, 0)))), i.s = s, E = true, l.rounding = o, y(i, n, o));
    };
    m.toPrecision = function(e, t) {
      var r, n = this, i = n.constructor;
      return e === void 0 ? r = ve(n, n.e <= i.toExpNeg || n.e >= i.toExpPos) : (se(e, 1, Ye), t === void 0 ? t = i.rounding : se(t, 0, 8), n = y(new i(n), e, t), r = ve(n, e <= n.e || n.e <= i.toExpNeg, e)), n.isNeg() && !n.isZero() ? "-" + r : r;
    };
    m.toSignificantDigits = m.toSD = function(e, t) {
      var r = this, n = r.constructor;
      return e === void 0 ? (e = n.precision, t = n.rounding) : (se(e, 1, Ye), t === void 0 ? t = n.rounding : se(t, 0, 8)), y(new n(r), e, t);
    };
    m.toString = function() {
      var e = this, t = e.constructor, r = ve(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
      return e.isNeg() && !e.isZero() ? "-" + r : r;
    };
    m.truncated = m.trunc = function() {
      return y(new this.constructor(this), this.e + 1, 1);
    };
    m.valueOf = m.toJSON = function() {
      var e = this, t = e.constructor, r = ve(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
      return e.isNeg() ? "-" + r : r;
    };
    function Y(e) {
      var t, r, n, i = e.length - 1, o = "", s = e[0];
      if (i > 0) {
        for (o += s, t = 1; t < i; t++) n = e[t] + "", r = b - n.length, r && (o += We(r)), o += n;
        s = e[t], n = s + "", r = b - n.length, r && (o += We(r));
      } else if (s === 0) return "0";
      for (; s % 10 === 0; ) s /= 10;
      return o + s;
    }
    function se(e, t, r) {
      if (e !== ~~e || e < t || e > r) throw Error(Ke + e);
    }
    function ir(e, t, r, n) {
      var i, o, s, a;
      for (o = e[0]; o >= 10; o /= 10) --t;
      return --t < 0 ? (t += b, i = 0) : (i = Math.ceil((t + 1) / b), t %= b), o = Q(10, b - t), a = e[i] % o | 0, n == null ? t < 3 ? (t == 0 ? a = a / 100 | 0 : t == 1 && (a = a / 10 | 0), s = r < 4 && a == 99999 || r > 3 && a == 49999 || a == 5e4 || a == 0) : s = (r < 4 && a + 1 == o || r > 3 && a + 1 == o / 2) && (e[i + 1] / o / 100 | 0) == Q(10, t - 2) - 1 || (a == o / 2 || a == 0) && (e[i + 1] / o / 100 | 0) == 0 : t < 4 ? (t == 0 ? a = a / 1e3 | 0 : t == 1 ? a = a / 100 | 0 : t == 2 && (a = a / 10 | 0), s = (n || r < 4) && a == 9999 || !n && r > 3 && a == 4999) : s = ((n || r < 4) && a + 1 == o || !n && r > 3 && a + 1 == o / 2) && (e[i + 1] / o / 1e3 | 0) == Q(10, t - 3) - 1, s;
    }
    function en(e, t, r) {
      for (var n, i = [0], o, s = 0, a = e.length; s < a; ) {
        for (o = i.length; o--; ) i[o] *= t;
        for (i[0] += Ni.indexOf(e.charAt(s++)), n = 0; n < i.length; n++) i[n] > r - 1 && (i[n + 1] === void 0 && (i[n + 1] = 0), i[n + 1] += i[n] / r | 0, i[n] %= r);
      }
      return i.reverse();
    }
    function Qc(e, t) {
      var r, n, i;
      if (t.isZero()) return t;
      n = t.d.length, n < 32 ? (r = Math.ceil(n / 3), i = (1 / ln(4, r)).toString()) : (r = 16, i = "2.3283064365386962890625e-10"), e.precision += r, t = Et(e, 1, t.times(i), new e(1));
      for (var o = r; o--; ) {
        var s = t.times(t);
        t = s.times(s).minus(s).times(8).plus(1);
      }
      return e.precision -= r, t;
    }
    var M = /* @__PURE__ */ function() {
      function e(n, i, o) {
        var s, a = 0, l = n.length;
        for (n = n.slice(); l--; ) s = n[l] * i + a, n[l] = s % o | 0, a = s / o | 0;
        return a && n.unshift(a), n;
      }
      function t(n, i, o, s) {
        var a, l;
        if (o != s) l = o > s ? 1 : -1;
        else for (a = l = 0; a < o; a++) if (n[a] != i[a]) {
          l = n[a] > i[a] ? 1 : -1;
          break;
        }
        return l;
      }
      function r(n, i, o, s) {
        for (var a = 0; o--; ) n[o] -= a, a = n[o] < i[o] ? 1 : 0, n[o] = a * s + n[o] - i[o];
        for (; !n[0] && n.length > 1; ) n.shift();
      }
      return function(n, i, o, s, a, l) {
        var u, c, p, d, f, g, h, O, v, C, R, k, A, ue, Ut, U, oe, Oe, z, pt, Lr = n.constructor, Gn = n.s == i.s ? 1 : -1, Z = n.d, L = i.d;
        if (!Z || !Z[0] || !L || !L[0]) return new Lr(!n.s || !i.s || (Z ? L && Z[0] == L[0] : !L) ? NaN : Z && Z[0] == 0 || !L ? Gn * 0 : Gn / 0);
        for (l ? (f = 1, c = n.e - i.e) : (l = ge, f = b, c = re(n.e / f) - re(i.e / f)), z = L.length, oe = Z.length, v = new Lr(Gn), C = v.d = [], p = 0; L[p] == (Z[p] || 0); p++) ;
        if (L[p] > (Z[p] || 0) && c--, o == null ? (ue = o = Lr.precision, s = Lr.rounding) : a ? ue = o + (n.e - i.e) + 1 : ue = o, ue < 0) C.push(1), g = true;
        else {
          if (ue = ue / f + 2 | 0, p = 0, z == 1) {
            for (d = 0, L = L[0], ue++; (p < oe || d) && ue--; p++) Ut = d * l + (Z[p] || 0), C[p] = Ut / L | 0, d = Ut % L | 0;
            g = d || p < oe;
          } else {
            for (d = l / (L[0] + 1) | 0, d > 1 && (L = e(L, d, l), Z = e(Z, d, l), z = L.length, oe = Z.length), U = z, R = Z.slice(0, z), k = R.length; k < z; ) R[k++] = 0;
            pt = L.slice(), pt.unshift(0), Oe = L[0], L[1] >= l / 2 && ++Oe;
            do
              d = 0, u = t(L, R, z, k), u < 0 ? (A = R[0], z != k && (A = A * l + (R[1] || 0)), d = A / Oe | 0, d > 1 ? (d >= l && (d = l - 1), h = e(L, d, l), O = h.length, k = R.length, u = t(h, R, O, k), u == 1 && (d--, r(h, z < O ? pt : L, O, l))) : (d == 0 && (u = d = 1), h = L.slice()), O = h.length, O < k && h.unshift(0), r(R, h, k, l), u == -1 && (k = R.length, u = t(L, R, z, k), u < 1 && (d++, r(R, z < k ? pt : L, k, l))), k = R.length) : u === 0 && (d++, R = [0]), C[p++] = d, u && R[0] ? R[k++] = Z[U] || 0 : (R = [Z[U]], k = 1);
            while ((U++ < oe || R[0] !== void 0) && ue--);
            g = R[0] !== void 0;
          }
          C[0] || C.shift();
        }
        if (f == 1) v.e = c, Ds = g;
        else {
          for (p = 1, d = C[0]; d >= 10; d /= 10) p++;
          v.e = p + c * f - 1, y(v, a ? o + v.e + 1 : o, s, g);
        }
        return v;
      };
    }();
    function y(e, t, r, n) {
      var i, o, s, a, l, u, c, p, d, f = e.constructor;
      e: if (t != null) {
        if (p = e.d, !p) return e;
        for (i = 1, a = p[0]; a >= 10; a /= 10) i++;
        if (o = t - i, o < 0) o += b, s = t, c = p[d = 0], l = c / Q(10, i - s - 1) % 10 | 0;
        else if (d = Math.ceil((o + 1) / b), a = p.length, d >= a) if (n) {
          for (; a++ <= d; ) p.push(0);
          c = l = 0, i = 1, o %= b, s = o - b + 1;
        } else break e;
        else {
          for (c = a = p[d], i = 1; a >= 10; a /= 10) i++;
          o %= b, s = o - b + i, l = s < 0 ? 0 : c / Q(10, i - s - 1) % 10 | 0;
        }
        if (n = n || t < 0 || p[d + 1] !== void 0 || (s < 0 ? c : c % Q(10, i - s - 1)), u = r < 4 ? (l || n) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : l > 5 || l == 5 && (r == 4 || n || r == 6 && (o > 0 ? s > 0 ? c / Q(10, i - s) : 0 : p[d - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), t < 1 || !p[0]) return p.length = 0, u ? (t -= e.e + 1, p[0] = Q(10, (b - t % b) % b), e.e = -t || 0) : p[0] = e.e = 0, e;
        if (o == 0 ? (p.length = d, a = 1, d--) : (p.length = d + 1, a = Q(10, b - o), p[d] = s > 0 ? (c / Q(10, i - s) % Q(10, s) | 0) * a : 0), u) for (; ; ) if (d == 0) {
          for (o = 1, s = p[0]; s >= 10; s /= 10) o++;
          for (s = p[0] += a, a = 1; s >= 10; s /= 10) a++;
          o != a && (e.e++, p[0] == ge && (p[0] = 1));
          break;
        } else {
          if (p[d] += a, p[d] != ge) break;
          p[d--] = 0, a = 1;
        }
        for (o = p.length; p[--o] === 0; ) p.pop();
      }
      return E && (e.e > f.maxE ? (e.d = null, e.e = NaN) : e.e < f.minE && (e.e = 0, e.d = [0])), e;
    }
    function ve(e, t, r) {
      if (!e.isFinite()) return js(e);
      var n, i = e.e, o = Y(e.d), s = o.length;
      return t ? (r && (n = r - s) > 0 ? o = o.charAt(0) + "." + o.slice(1) + We(n) : s > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : i < 0 ? (o = "0." + We(-i - 1) + o, r && (n = r - s) > 0 && (o += We(n))) : i >= s ? (o += We(i + 1 - s), r && (n = r - i - 1) > 0 && (o = o + "." + We(n))) : ((n = i + 1) < s && (o = o.slice(0, n) + "." + o.slice(n)), r && (n = r - s) > 0 && (i + 1 === s && (o += "."), o += We(n))), o;
    }
    function an(e, t) {
      var r = e[0];
      for (t *= b; r >= 10; r /= 10) t++;
      return t;
    }
    function on(e, t, r) {
      if (t > Gc) throw E = true, r && (e.precision = r), Error(Ns);
      return y(new e(rn), t, 1, true);
    }
    function Pe(e, t, r) {
      if (t > Fi) throw Error(Ns);
      return y(new e(nn), t, r, true);
    }
    function $s(e) {
      var t = e.length - 1, r = t * b + 1;
      if (t = e[t], t) {
        for (; t % 10 == 0; t /= 10) r--;
        for (t = e[0]; t >= 10; t /= 10) r++;
      }
      return r;
    }
    function We(e) {
      for (var t = ""; e--; ) t += "0";
      return t;
    }
    function qs(e, t, r, n) {
      var i, o = new e(1), s = Math.ceil(n / b + 4);
      for (E = false; ; ) {
        if (r % 2 && (o = o.times(t), ks(o.d, s) && (i = true)), r = re(r / 2), r === 0) {
          r = o.d.length - 1, i && o.d[r] === 0 && ++o.d[r];
          break;
        }
        t = t.times(t), ks(t.d, s);
      }
      return E = true, o;
    }
    function Os(e) {
      return e.d[e.d.length - 1] & 1;
    }
    function Vs(e, t, r) {
      for (var n, i, o = new e(t[0]), s = 0; ++s < t.length; ) {
        if (i = new e(t[s]), !i.s) {
          o = i;
          break;
        }
        n = o.cmp(i), (n === r || n === 0 && o.s === r) && (o = i);
      }
      return o;
    }
    function Mi(e, t) {
      var r, n, i, o, s, a, l, u = 0, c = 0, p = 0, d = e.constructor, f = d.rounding, g = d.precision;
      if (!e.d || !e.d[0] || e.e > 17) return new d(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : NaN);
      for (t == null ? (E = false, l = g) : l = t, a = new d(0.03125); e.e > -2; ) e = e.times(a), p += 5;
      for (n = Math.log(Q(2, p)) / Math.LN10 * 2 + 5 | 0, l += n, r = o = s = new d(1), d.precision = l; ; ) {
        if (o = y(o.times(e), l, 1), r = r.times(++c), a = s.plus(M(o, r, l, 1)), Y(a.d).slice(0, l) === Y(s.d).slice(0, l)) {
          for (i = p; i--; ) s = y(s.times(s), l, 1);
          if (t == null) if (u < 3 && ir(s.d, l - n, f, u)) d.precision = l += 10, r = o = a = new d(1), c = 0, u++;
          else return y(s, d.precision = g, f, E = true);
          else return d.precision = g, s;
        }
        s = a;
      }
    }
    function He(e, t) {
      var r, n, i, o, s, a, l, u, c, p, d, f = 1, g = 10, h = e, O = h.d, v = h.constructor, C = v.rounding, R = v.precision;
      if (h.s < 0 || !O || !O[0] || !h.e && O[0] == 1 && O.length == 1) return new v(O && !O[0] ? -1 / 0 : h.s != 1 ? NaN : O ? 0 : h);
      if (t == null ? (E = false, c = R) : c = t, v.precision = c += g, r = Y(O), n = r.charAt(0), Math.abs(o = h.e) < 15e14) {
        for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; ) h = h.times(e), r = Y(h.d), n = r.charAt(0), f++;
        o = h.e, n > 1 ? (h = new v("0." + r), o++) : h = new v(n + "." + r.slice(1));
      } else return u = on(v, c + 2, R).times(o + ""), h = He(new v(n + "." + r.slice(1)), c - g).plus(u), v.precision = R, t == null ? y(h, R, C, E = true) : h;
      for (p = h, l = s = h = M(h.minus(1), h.plus(1), c, 1), d = y(h.times(h), c, 1), i = 3; ; ) {
        if (s = y(s.times(d), c, 1), u = l.plus(M(s, new v(i), c, 1)), Y(u.d).slice(0, c) === Y(l.d).slice(0, c)) if (l = l.times(2), o !== 0 && (l = l.plus(on(v, c + 2, R).times(o + ""))), l = M(l, new v(f), c, 1), t == null) if (ir(l.d, c - g, C, a)) v.precision = c += g, u = s = h = M(p.minus(1), p.plus(1), c, 1), d = y(h.times(h), c, 1), i = a = 1;
        else return y(l, v.precision = R, C, E = true);
        else return v.precision = R, l;
        l = u, i += 2;
      }
    }
    function js(e) {
      return String(e.s * e.s / 0);
    }
    function tn(e, t) {
      var r, n, i;
      for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; n++) ;
      for (i = t.length; t.charCodeAt(i - 1) === 48; --i) ;
      if (t = t.slice(n, i), t) {
        if (i -= n, e.e = r = r - n - 1, e.d = [], n = (r + 1) % b, r < 0 && (n += b), n < i) {
          for (n && e.d.push(+t.slice(0, n)), i -= b; n < i; ) e.d.push(+t.slice(n, n += b));
          t = t.slice(n), n = b - t.length;
        } else n -= i;
        for (; n--; ) t += "0";
        e.d.push(+t), E && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
      } else e.e = 0, e.d = [0];
      return e;
    }
    function Jc(e, t) {
      var r, n, i, o, s, a, l, u, c;
      if (t.indexOf("_") > -1) {
        if (t = t.replace(/(\d)_(?=\d)/g, "$1"), Ms.test(t)) return tn(e, t);
      } else if (t === "Infinity" || t === "NaN") return +t || (e.s = NaN), e.e = NaN, e.d = null, e;
      if (jc.test(t)) r = 16, t = t.toLowerCase();
      else if (Vc.test(t)) r = 2;
      else if (Bc.test(t)) r = 8;
      else throw Error(Ke + t);
      for (o = t.search(/p/i), o > 0 ? (l = +t.slice(o + 1), t = t.substring(2, o)) : t = t.slice(2), o = t.indexOf("."), s = o >= 0, n = e.constructor, s && (t = t.replace(".", ""), a = t.length, o = a - o, i = qs(n, new n(r), o, o * 2)), u = en(t, r, ge), c = u.length - 1, o = c; u[o] === 0; --o) u.pop();
      return o < 0 ? new n(e.s * 0) : (e.e = an(u, c), e.d = u, E = false, s && (e = M(e, i, a * 4)), l && (e = e.times(Math.abs(l) < 54 ? Q(2, l) : it.pow(2, l))), E = true, e);
    }
    function Wc(e, t) {
      var r, n = t.d.length;
      if (n < 3) return t.isZero() ? t : Et(e, 2, t, t);
      r = 1.4 * Math.sqrt(n), r = r > 16 ? 16 : r | 0, t = t.times(1 / ln(5, r)), t = Et(e, 2, t, t);
      for (var i, o = new e(5), s = new e(16), a = new e(20); r--; ) i = t.times(t), t = t.times(o.plus(i.times(s.times(i).minus(a))));
      return t;
    }
    function Et(e, t, r, n, i) {
      var o, s, a, l, u = 1, c = e.precision, p = Math.ceil(c / b);
      for (E = false, l = r.times(r), a = new e(n); ; ) {
        if (s = M(a.times(l), new e(t++ * t++), c, 1), a = i ? n.plus(s) : n.minus(s), n = M(s.times(l), new e(t++ * t++), c, 1), s = a.plus(n), s.d[p] !== void 0) {
          for (o = p; s.d[o] === a.d[o] && o--; ) ;
          if (o == -1) break;
        }
        o = a, a = n, n = s, s = o, u++;
      }
      return E = true, s.d.length = p + 1, s;
    }
    function ln(e, t) {
      for (var r = e; --t; ) r *= e;
      return r;
    }
    function Bs(e, t) {
      var r, n = t.s < 0, i = Pe(e, e.precision, 1), o = i.times(0.5);
      if (t = t.abs(), t.lte(o)) return Me = n ? 4 : 1, t;
      if (r = t.divToInt(i), r.isZero()) Me = n ? 3 : 2;
      else {
        if (t = t.minus(r.times(i)), t.lte(o)) return Me = Os(r) ? n ? 2 : 3 : n ? 4 : 1, t;
        Me = Os(r) ? n ? 1 : 4 : n ? 3 : 2;
      }
      return t.minus(i).abs();
    }
    function $i(e, t, r, n) {
      var i, o, s, a, l, u, c, p, d, f = e.constructor, g = r !== void 0;
      if (g ? (se(r, 1, Ye), n === void 0 ? n = f.rounding : se(n, 0, 8)) : (r = f.precision, n = f.rounding), !e.isFinite()) c = js(e);
      else {
        for (c = ve(e), s = c.indexOf("."), g ? (i = 2, t == 16 ? r = r * 4 - 3 : t == 8 && (r = r * 3 - 2)) : i = t, s >= 0 && (c = c.replace(".", ""), d = new f(1), d.e = c.length - s, d.d = en(ve(d), 10, i), d.e = d.d.length), p = en(c, 10, i), o = l = p.length; p[--l] == 0; ) p.pop();
        if (!p[0]) c = g ? "0p+0" : "0";
        else {
          if (s < 0 ? o-- : (e = new f(e), e.d = p, e.e = o, e = M(e, d, r, n, 0, i), p = e.d, o = e.e, u = Ds), s = p[r], a = i / 2, u = u || p[r + 1] !== void 0, u = n < 4 ? (s !== void 0 || u) && (n === 0 || n === (e.s < 0 ? 3 : 2)) : s > a || s === a && (n === 4 || u || n === 6 && p[r - 1] & 1 || n === (e.s < 0 ? 8 : 7)), p.length = r, u) for (; ++p[--r] > i - 1; ) p[r] = 0, r || (++o, p.unshift(1));
          for (l = p.length; !p[l - 1]; --l) ;
          for (s = 0, c = ""; s < l; s++) c += Ni.charAt(p[s]);
          if (g) {
            if (l > 1) if (t == 16 || t == 8) {
              for (s = t == 16 ? 4 : 3, --l; l % s; l++) c += "0";
              for (p = en(c, i, t), l = p.length; !p[l - 1]; --l) ;
              for (s = 1, c = "1."; s < l; s++) c += Ni.charAt(p[s]);
            } else c = c.charAt(0) + "." + c.slice(1);
            c = c + (o < 0 ? "p" : "p+") + o;
          } else if (o < 0) {
            for (; ++o; ) c = "0" + c;
            c = "0." + c;
          } else if (++o > l) for (o -= l; o--; ) c += "0";
          else o < l && (c = c.slice(0, o) + "." + c.slice(o));
        }
        c = (t == 16 ? "0x" : t == 2 ? "0b" : t == 8 ? "0o" : "") + c;
      }
      return e.s < 0 ? "-" + c : c;
    }
    function ks(e, t) {
      if (e.length > t) return e.length = t, true;
    }
    function Hc(e) {
      return new this(e).abs();
    }
    function Kc(e) {
      return new this(e).acos();
    }
    function Yc(e) {
      return new this(e).acosh();
    }
    function zc(e, t) {
      return new this(e).plus(t);
    }
    function Zc(e) {
      return new this(e).asin();
    }
    function Xc(e) {
      return new this(e).asinh();
    }
    function ep(e) {
      return new this(e).atan();
    }
    function tp(e) {
      return new this(e).atanh();
    }
    function rp(e, t) {
      e = new this(e), t = new this(t);
      var r, n = this.precision, i = this.rounding, o = n + 4;
      return !e.s || !t.s ? r = new this(NaN) : !e.d && !t.d ? (r = Pe(this, o, 1).times(t.s > 0 ? 0.25 : 0.75), r.s = e.s) : !t.d || e.isZero() ? (r = t.s < 0 ? Pe(this, n, i) : new this(0), r.s = e.s) : !e.d || t.isZero() ? (r = Pe(this, o, 1).times(0.5), r.s = e.s) : t.s < 0 ? (this.precision = o, this.rounding = 1, r = this.atan(M(e, t, o, 1)), t = Pe(this, o, 1), this.precision = n, this.rounding = i, r = e.s < 0 ? r.minus(t) : r.plus(t)) : r = this.atan(M(e, t, o, 1)), r;
    }
    function np(e) {
      return new this(e).cbrt();
    }
    function ip(e) {
      return y(e = new this(e), e.e + 1, 2);
    }
    function op(e, t, r) {
      return new this(e).clamp(t, r);
    }
    function sp(e) {
      if (!e || typeof e != "object") throw Error(sn + "Object expected");
      var t, r, n, i = e.defaults === true, o = ["precision", 1, Ye, "rounding", 0, 8, "toExpNeg", -bt, 0, "toExpPos", 0, bt, "maxE", 0, bt, "minE", -bt, 0, "modulo", 0, 9];
      for (t = 0; t < o.length; t += 3) if (r = o[t], i && (this[r] = Li[r]), (n = e[r]) !== void 0) if (re(n) === n && n >= o[t + 1] && n <= o[t + 2]) this[r] = n;
      else throw Error(Ke + r + ": " + n);
      if (r = "crypto", i && (this[r] = Li[r]), (n = e[r]) !== void 0) if (n === true || n === false || n === 0 || n === 1) if (n) if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes)) this[r] = true;
      else throw Error(Ls);
      else this[r] = false;
      else throw Error(Ke + r + ": " + n);
      return this;
    }
    function ap(e) {
      return new this(e).cos();
    }
    function lp(e) {
      return new this(e).cosh();
    }
    function Us(e) {
      var t, r, n;
      function i(o) {
        var s, a, l, u = this;
        if (!(u instanceof i)) return new i(o);
        if (u.constructor = i, _s(o)) {
          u.s = o.s, E ? !o.d || o.e > i.maxE ? (u.e = NaN, u.d = null) : o.e < i.minE ? (u.e = 0, u.d = [0]) : (u.e = o.e, u.d = o.d.slice()) : (u.e = o.e, u.d = o.d ? o.d.slice() : o.d);
          return;
        }
        if (l = typeof o, l === "number") {
          if (o === 0) {
            u.s = 1 / o < 0 ? -1 : 1, u.e = 0, u.d = [0];
            return;
          }
          if (o < 0 ? (o = -o, u.s = -1) : u.s = 1, o === ~~o && o < 1e7) {
            for (s = 0, a = o; a >= 10; a /= 10) s++;
            E ? s > i.maxE ? (u.e = NaN, u.d = null) : s < i.minE ? (u.e = 0, u.d = [0]) : (u.e = s, u.d = [o]) : (u.e = s, u.d = [o]);
            return;
          }
          if (o * 0 !== 0) {
            o || (u.s = NaN), u.e = NaN, u.d = null;
            return;
          }
          return tn(u, o.toString());
        }
        if (l === "string") return (a = o.charCodeAt(0)) === 45 ? (o = o.slice(1), u.s = -1) : (a === 43 && (o = o.slice(1)), u.s = 1), Ms.test(o) ? tn(u, o) : Jc(u, o);
        if (l === "bigint") return o < 0 ? (o = -o, u.s = -1) : u.s = 1, tn(u, o.toString());
        throw Error(Ke + o);
      }
      if (i.prototype = m, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.EUCLID = 9, i.config = i.set = sp, i.clone = Us, i.isDecimal = _s, i.abs = Hc, i.acos = Kc, i.acosh = Yc, i.add = zc, i.asin = Zc, i.asinh = Xc, i.atan = ep, i.atanh = tp, i.atan2 = rp, i.cbrt = np, i.ceil = ip, i.clamp = op, i.cos = ap, i.cosh = lp, i.div = up, i.exp = cp, i.floor = pp, i.hypot = dp, i.ln = mp, i.log = fp, i.log10 = hp, i.log2 = gp, i.max = yp, i.min = bp, i.mod = Ep, i.mul = wp, i.pow = xp, i.random = Pp, i.round = vp, i.sign = Tp, i.sin = Rp, i.sinh = Cp, i.sqrt = Sp, i.sub = Ap, i.sum = Ip, i.tan = Op, i.tanh = kp, i.trunc = _p, e === void 0 && (e = {}), e && e.defaults !== true) for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], t = 0; t < n.length; ) e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
      return i.config(e), i;
    }
    function up(e, t) {
      return new this(e).div(t);
    }
    function cp(e) {
      return new this(e).exp();
    }
    function pp(e) {
      return y(e = new this(e), e.e + 1, 3);
    }
    function dp() {
      var e, t, r = new this(0);
      for (E = false, e = 0; e < arguments.length; ) if (t = new this(arguments[e++]), t.d) r.d && (r = r.plus(t.times(t)));
      else {
        if (t.s) return E = true, new this(1 / 0);
        r = t;
      }
      return E = true, r.sqrt();
    }
    function _s(e) {
      return e instanceof it || e && e.toStringTag === Fs || false;
    }
    function mp(e) {
      return new this(e).ln();
    }
    function fp(e, t) {
      return new this(e).log(t);
    }
    function gp(e) {
      return new this(e).log(2);
    }
    function hp(e) {
      return new this(e).log(10);
    }
    function yp() {
      return Vs(this, arguments, -1);
    }
    function bp() {
      return Vs(this, arguments, 1);
    }
    function Ep(e, t) {
      return new this(e).mod(t);
    }
    function wp(e, t) {
      return new this(e).mul(t);
    }
    function xp(e, t) {
      return new this(e).pow(t);
    }
    function Pp(e) {
      var t, r, n, i, o = 0, s = new this(1), a = [];
      if (e === void 0 ? e = this.precision : se(e, 1, Ye), n = Math.ceil(e / b), this.crypto) if (crypto.getRandomValues) for (t = crypto.getRandomValues(new Uint32Array(n)); o < n; ) i = t[o], i >= 429e7 ? t[o] = crypto.getRandomValues(new Uint32Array(1))[0] : a[o++] = i % 1e7;
      else if (crypto.randomBytes) {
        for (t = crypto.randomBytes(n *= 4); o < n; ) i = t[o] + (t[o + 1] << 8) + (t[o + 2] << 16) + ((t[o + 3] & 127) << 24), i >= 214e7 ? crypto.randomBytes(4).copy(t, o) : (a.push(i % 1e7), o += 4);
        o = n / 4;
      } else throw Error(Ls);
      else for (; o < n; ) a[o++] = Math.random() * 1e7 | 0;
      for (n = a[--o], e %= b, n && e && (i = Q(10, b - e), a[o] = (n / i | 0) * i); a[o] === 0; o--) a.pop();
      if (o < 0) r = 0, a = [0];
      else {
        for (r = -1; a[0] === 0; r -= b) a.shift();
        for (n = 1, i = a[0]; i >= 10; i /= 10) n++;
        n < b && (r -= b - n);
      }
      return s.e = r, s.d = a, s;
    }
    function vp(e) {
      return y(e = new this(e), e.e + 1, this.rounding);
    }
    function Tp(e) {
      return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
    }
    function Rp(e) {
      return new this(e).sin();
    }
    function Cp(e) {
      return new this(e).sinh();
    }
    function Sp(e) {
      return new this(e).sqrt();
    }
    function Ap(e, t) {
      return new this(e).sub(t);
    }
    function Ip() {
      var e = 0, t = arguments, r = new this(t[e]);
      for (E = false; r.s && ++e < t.length; ) r = r.plus(t[e]);
      return E = true, y(r, this.precision, this.rounding);
    }
    function Op(e) {
      return new this(e).tan();
    }
    function kp(e) {
      return new this(e).tanh();
    }
    function _p(e) {
      return y(e = new this(e), e.e + 1, 1);
    }
    m[Symbol.for("nodejs.util.inspect.custom")] = m.toString;
    m[Symbol.toStringTag] = "Decimal";
    var it = m.constructor = Us(Li);
    rn = new it(rn);
    nn = new it(nn);
    var Te = it;
    function wt(e) {
      return e === null ? e : Array.isArray(e) ? e.map(wt) : typeof e == "object" ? Dp(e) ? Np(e) : yt(e, wt) : e;
    }
    function Dp(e) {
      return e !== null && typeof e == "object" && typeof e.$type == "string";
    }
    function Np({ $type: e, value: t }) {
      switch (e) {
        case "BigInt":
          return BigInt(t);
        case "Bytes": {
          let { buffer: r, byteOffset: n, byteLength: i } = Buffer.from(t, "base64");
          return new Uint8Array(r, n, i);
        }
        case "DateTime":
          return new Date(t);
        case "Decimal":
          return new Te(t);
        case "Json":
          return JSON.parse(t);
        default:
          Fe(t, "Unknown tagged value");
      }
    }
    function xt(e) {
      return e.substring(0, 1).toLowerCase() + e.substring(1);
    }
    function Pt(e) {
      return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
    }
    function un(e) {
      return e.toString() !== "Invalid Date";
    }
    function vt(e) {
      return it.isDecimal(e) ? true : e !== null && typeof e == "object" && typeof e.s == "number" && typeof e.e == "number" && typeof e.toFixed == "function" && Array.isArray(e.d);
    }
    var Ks = _(Ci());
    var Hs = _(require("fs"));
    var Gs = { keyword: De, entity: De, value: (e) => K(rt(e)), punctuation: rt, directive: De, function: De, variable: (e) => K(rt(e)), string: (e) => K(Ve(e)), boolean: _e, number: De, comment: Jt };
    var Lp = (e) => e;
    var cn = {};
    var Fp = 0;
    var x = { manual: cn.Prism && cn.Prism.manual, disableWorkerMessageHandler: cn.Prism && cn.Prism.disableWorkerMessageHandler, util: { encode: function(e) {
      if (e instanceof he) {
        let t = e;
        return new he(t.type, x.util.encode(t.content), t.alias);
      } else return Array.isArray(e) ? e.map(x.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
    }, type: function(e) {
      return Object.prototype.toString.call(e).slice(8, -1);
    }, objId: function(e) {
      return e.__id || Object.defineProperty(e, "__id", { value: ++Fp }), e.__id;
    }, clone: function e(t, r) {
      let n, i, o = x.util.type(t);
      switch (r = r || {}, o) {
        case "Object":
          if (i = x.util.objId(t), r[i]) return r[i];
          n = {}, r[i] = n;
          for (let s in t) t.hasOwnProperty(s) && (n[s] = e(t[s], r));
          return n;
        case "Array":
          return i = x.util.objId(t), r[i] ? r[i] : (n = [], r[i] = n, t.forEach(function(s, a) {
            n[a] = e(s, r);
          }), n);
        default:
          return t;
      }
    } }, languages: { extend: function(e, t) {
      let r = x.util.clone(x.languages[e]);
      for (let n in t) r[n] = t[n];
      return r;
    }, insertBefore: function(e, t, r, n) {
      n = n || x.languages;
      let i = n[e], o = {};
      for (let a in i) if (i.hasOwnProperty(a)) {
        if (a == t) for (let l in r) r.hasOwnProperty(l) && (o[l] = r[l]);
        r.hasOwnProperty(a) || (o[a] = i[a]);
      }
      let s = n[e];
      return n[e] = o, x.languages.DFS(x.languages, function(a, l) {
        l === s && a != e && (this[a] = o);
      }), o;
    }, DFS: function e(t, r, n, i) {
      i = i || {};
      let o = x.util.objId;
      for (let s in t) if (t.hasOwnProperty(s)) {
        r.call(t, s, t[s], n || s);
        let a = t[s], l = x.util.type(a);
        l === "Object" && !i[o(a)] ? (i[o(a)] = true, e(a, r, null, i)) : l === "Array" && !i[o(a)] && (i[o(a)] = true, e(a, r, s, i));
      }
    } }, plugins: {}, highlight: function(e, t, r) {
      let n = { code: e, grammar: t, language: r };
      return x.hooks.run("before-tokenize", n), n.tokens = x.tokenize(n.code, n.grammar), x.hooks.run("after-tokenize", n), he.stringify(x.util.encode(n.tokens), n.language);
    }, matchGrammar: function(e, t, r, n, i, o, s) {
      for (let h in r) {
        if (!r.hasOwnProperty(h) || !r[h]) continue;
        if (h == s) return;
        let O = r[h];
        O = x.util.type(O) === "Array" ? O : [O];
        for (let v = 0; v < O.length; ++v) {
          let C = O[v], R = C.inside, k = !!C.lookbehind, A = !!C.greedy, ue = 0, Ut = C.alias;
          if (A && !C.pattern.global) {
            let U = C.pattern.toString().match(/[imuy]*$/)[0];
            C.pattern = RegExp(C.pattern.source, U + "g");
          }
          C = C.pattern || C;
          for (let U = n, oe = i; U < t.length; oe += t[U].length, ++U) {
            let Oe = t[U];
            if (t.length > e.length) return;
            if (Oe instanceof he) continue;
            if (A && U != t.length - 1) {
              C.lastIndex = oe;
              var p = C.exec(e);
              if (!p) break;
              var c = p.index + (k ? p[1].length : 0), d = p.index + p[0].length, a = U, l = oe;
              for (let L = t.length; a < L && (l < d || !t[a].type && !t[a - 1].greedy); ++a) l += t[a].length, c >= l && (++U, oe = l);
              if (t[U] instanceof he) continue;
              u = a - U, Oe = e.slice(oe, l), p.index -= oe;
            } else {
              C.lastIndex = 0;
              var p = C.exec(Oe), u = 1;
            }
            if (!p) {
              if (o) break;
              continue;
            }
            k && (ue = p[1] ? p[1].length : 0);
            var c = p.index + ue, p = p[0].slice(ue), d = c + p.length, f = Oe.slice(0, c), g = Oe.slice(d);
            let z = [U, u];
            f && (++U, oe += f.length, z.push(f));
            let pt = new he(h, R ? x.tokenize(p, R) : p, Ut, p, A);
            if (z.push(pt), g && z.push(g), Array.prototype.splice.apply(t, z), u != 1 && x.matchGrammar(e, t, r, U, oe, true, h), o) break;
          }
        }
      }
    }, tokenize: function(e, t) {
      let r = [e], n = t.rest;
      if (n) {
        for (let i in n) t[i] = n[i];
        delete t.rest;
      }
      return x.matchGrammar(e, r, t, 0, 0, false), r;
    }, hooks: { all: {}, add: function(e, t) {
      let r = x.hooks.all;
      r[e] = r[e] || [], r[e].push(t);
    }, run: function(e, t) {
      let r = x.hooks.all[e];
      if (!(!r || !r.length)) for (var n = 0, i; i = r[n++]; ) i(t);
    } }, Token: he };
    x.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: true }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: true, greedy: true }], string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: true }, "class-name": { pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i, lookbehind: true, inside: { punctuation: /[.\\]/ } }, keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/, boolean: /\b(?:true|false)\b/, function: /\w+(?=\()/, number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i, operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/, punctuation: /[{}[\];(),.:]/ };
    x.languages.javascript = x.languages.extend("clike", { "class-name": [x.languages.clike["class-name"], { pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/, lookbehind: true }], keyword: [{ pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: true }, { pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/, lookbehind: true }], number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/, function: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/, operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/ });
    x.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;
    x.languages.insertBefore("javascript", "keyword", { regex: { pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/, lookbehind: true, greedy: true }, "function-variable": { pattern: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/, alias: "function" }, parameter: [{ pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/, lookbehind: true, inside: x.languages.javascript }, { pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i, inside: x.languages.javascript }, { pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/, lookbehind: true, inside: x.languages.javascript }, { pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/, lookbehind: true, inside: x.languages.javascript }], constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/ });
    x.languages.markup && x.languages.markup.tag.addInlined("script", "javascript");
    x.languages.js = x.languages.javascript;
    x.languages.typescript = x.languages.extend("javascript", { keyword: /\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/, builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/ });
    x.languages.ts = x.languages.typescript;
    function he(e, t, r, n, i) {
      this.type = e, this.content = t, this.alias = r, this.length = (n || "").length | 0, this.greedy = !!i;
    }
    he.stringify = function(e, t) {
      return typeof e == "string" ? e : Array.isArray(e) ? e.map(function(r) {
        return he.stringify(r, t);
      }).join("") : Mp(e.type)(e.content);
    };
    function Mp(e) {
      return Gs[e] || Lp;
    }
    function Qs(e) {
      return $p(e, x.languages.javascript);
    }
    function $p(e, t) {
      return x.tokenize(e, t).map((n) => he.stringify(n)).join("");
    }
    var Js = _(ws());
    function Ws(e) {
      return (0, Js.default)(e);
    }
    var pn = class e {
      static read(t) {
        let r;
        try {
          r = Hs.default.readFileSync(t, "utf-8");
        } catch {
          return null;
        }
        return e.fromContent(r);
      }
      static fromContent(t) {
        let r = t.split(/\r?\n/);
        return new e(1, r);
      }
      constructor(t, r) {
        this.firstLineNumber = t, this.lines = r;
      }
      get lastLineNumber() {
        return this.firstLineNumber + this.lines.length - 1;
      }
      mapLineAt(t, r) {
        if (t < this.firstLineNumber || t > this.lines.length + this.firstLineNumber) return this;
        let n = t - this.firstLineNumber, i = [...this.lines];
        return i[n] = r(i[n]), new e(this.firstLineNumber, i);
      }
      mapLines(t) {
        return new e(this.firstLineNumber, this.lines.map((r, n) => t(r, this.firstLineNumber + n)));
      }
      lineAt(t) {
        return this.lines[t - this.firstLineNumber];
      }
      prependSymbolAt(t, r) {
        return this.mapLines((n, i) => i === t ? `${r} ${n}` : `  ${n}`);
      }
      slice(t, r) {
        let n = this.lines.slice(t - 1, r).join(`
`);
        return new e(t, Ws(n).split(`
`));
      }
      highlight() {
        let t = Qs(this.toString());
        return new e(this.firstLineNumber, t.split(`
`));
      }
      toString() {
        return this.lines.join(`
`);
      }
    };
    var qp = { red: de, gray: Jt, dim: ke, bold: K, underline: X, highlightSource: (e) => e.highlight() };
    var Vp = { red: (e) => e, gray: (e) => e, dim: (e) => e, bold: (e) => e, underline: (e) => e, highlightSource: (e) => e };
    function jp({ message: e, originalMethod: t, isPanic: r, callArguments: n }) {
      return { functionName: `prisma.${t}()`, message: e, isPanic: r ?? false, callArguments: n };
    }
    function Bp({ callsite: e, message: t, originalMethod: r, isPanic: n, callArguments: i }, o) {
      var _a2;
      let s = jp({ message: t, originalMethod: r, isPanic: n, callArguments: i });
      if (!e || typeof window < "u" || process.env.NODE_ENV === "production") return s;
      let a = e.getLocation();
      if (!a || !a.lineNumber || !a.columnNumber) return s;
      let l = Math.max(1, a.lineNumber - 3), u = (_a2 = pn.read(a.fileName)) == null ? void 0 : _a2.slice(l, a.lineNumber), c = u == null ? void 0 : u.lineAt(a.lineNumber);
      if (u && c) {
        let p = Gp(c), d = Up(c);
        if (!d) return s;
        s.functionName = `${d.code})`, s.location = a, n || (u = u.mapLineAt(a.lineNumber, (g) => g.slice(0, d.openingBraceIndex))), u = o.highlightSource(u);
        let f = String(u.lastLineNumber).length;
        if (s.contextLines = u.mapLines((g, h) => o.gray(String(h).padStart(f)) + " " + g).mapLines((g) => o.dim(g)).prependSymbolAt(a.lineNumber, o.bold(o.red("\u2192"))), i) {
          let g = p + f + 1;
          g += 2, s.callArguments = (0, Ks.default)(i, g).slice(g);
        }
      }
      return s;
    }
    function Up(e) {
      let t = Object.keys(Xt.ModelAction).join("|"), n = new RegExp(String.raw`\.(${t})\(`).exec(e);
      if (n) {
        let i = n.index + n[0].length, o = e.lastIndexOf(" ", n.index) + 1;
        return { code: e.slice(o, i), openingBraceIndex: i };
      }
      return null;
    }
    function Gp(e) {
      let t = 0;
      for (let r = 0; r < e.length; r++) {
        if (e.charAt(r) !== " ") return t;
        t++;
      }
      return t;
    }
    function Qp({ functionName: e, location: t, message: r, isPanic: n, contextLines: i, callArguments: o }, s) {
      let a = [""], l = t ? " in" : ":";
      if (n ? (a.push(s.red(`Oops, an unknown error occurred! This is ${s.bold("on us")}, you did nothing wrong.`)), a.push(s.red(`It occurred in the ${s.bold(`\`${e}\``)} invocation${l}`))) : a.push(s.red(`Invalid ${s.bold(`\`${e}\``)} invocation${l}`)), t && a.push(s.underline(Jp(t))), i) {
        a.push("");
        let u = [i.toString()];
        o && (u.push(o), u.push(s.dim(")"))), a.push(u.join("")), o && a.push("");
      } else a.push(""), o && a.push(o), a.push("");
      return a.push(r), a.join(`
`);
    }
    function Jp(e) {
      let t = [e.fileName];
      return e.lineNumber && t.push(String(e.lineNumber)), e.columnNumber && t.push(String(e.columnNumber)), t.join(":");
    }
    function dn(e) {
      let t = e.showColors ? qp : Vp, r;
      return r = Bp(e, t), Qp(r, t);
    }
    var ra = _(qi());
    function Xs(e, t, r) {
      let n = ea(e), i = Wp(n), o = Kp(i);
      o ? mn(o, t, r) : t.addErrorMessage(() => "Unknown error");
    }
    function ea(e) {
      return e.errors.flatMap((t) => t.kind === "Union" ? ea(t) : [t]);
    }
    function Wp(e) {
      let t = /* @__PURE__ */ new Map(), r = [];
      for (let n of e) {
        if (n.kind !== "InvalidArgumentType") {
          r.push(n);
          continue;
        }
        let i = `${n.selectionPath.join(".")}:${n.argumentPath.join(".")}`, o = t.get(i);
        o ? t.set(i, { ...n, argument: { ...n.argument, typeNames: Hp(o.argument.typeNames, n.argument.typeNames) } }) : t.set(i, n);
      }
      return r.push(...t.values()), r;
    }
    function Hp(e, t) {
      return [...new Set(e.concat(t))];
    }
    function Kp(e) {
      return Di(e, (t, r) => {
        let n = zs(t), i = zs(r);
        return n !== i ? n - i : Zs(t) - Zs(r);
      });
    }
    function zs(e) {
      let t = 0;
      return Array.isArray(e.selectionPath) && (t += e.selectionPath.length), Array.isArray(e.argumentPath) && (t += e.argumentPath.length), t;
    }
    function Zs(e) {
      switch (e.kind) {
        case "InvalidArgumentValue":
        case "ValueTooLarge":
          return 20;
        case "InvalidArgumentType":
          return 10;
        case "RequiredArgumentMissing":
          return -10;
        default:
          return 0;
      }
    }
    var pe = class {
      constructor(t, r) {
        this.name = t;
        this.value = r;
        this.isRequired = false;
      }
      makeRequired() {
        return this.isRequired = true, this;
      }
      write(t) {
        let { colors: { green: r } } = t.context;
        t.addMarginSymbol(r(this.isRequired ? "+" : "?")), t.write(r(this.name)), this.isRequired || t.write(r("?")), t.write(r(": ")), typeof this.value == "string" ? t.write(r(this.value)) : t.write(this.value);
      }
    };
    var Tt = class {
      constructor(t = 0, r) {
        this.context = r;
        this.lines = [];
        this.currentLine = "";
        this.currentIndent = 0;
        this.currentIndent = t;
      }
      write(t) {
        return typeof t == "string" ? this.currentLine += t : t.write(this), this;
      }
      writeJoined(t, r, n = (i, o) => o.write(i)) {
        let i = r.length - 1;
        for (let o = 0; o < r.length; o++) n(r[o], this), o !== i && this.write(t);
        return this;
      }
      writeLine(t) {
        return this.write(t).newLine();
      }
      newLine() {
        this.lines.push(this.indentedCurrentLine()), this.currentLine = "", this.marginSymbol = void 0;
        let t = this.afterNextNewLineCallback;
        return this.afterNextNewLineCallback = void 0, t == null ? void 0 : t(), this;
      }
      withIndent(t) {
        return this.indent(), t(this), this.unindent(), this;
      }
      afterNextNewline(t) {
        return this.afterNextNewLineCallback = t, this;
      }
      indent() {
        return this.currentIndent++, this;
      }
      unindent() {
        return this.currentIndent > 0 && this.currentIndent--, this;
      }
      addMarginSymbol(t) {
        return this.marginSymbol = t, this;
      }
      toString() {
        return this.lines.concat(this.indentedCurrentLine()).join(`
`);
      }
      getCurrentLineLength() {
        return this.currentLine.length;
      }
      indentedCurrentLine() {
        let t = this.currentLine.padStart(this.currentLine.length + 2 * this.currentIndent);
        return this.marginSymbol ? this.marginSymbol + t.slice(1) : t;
      }
    };
    var fn = class {
      constructor(t) {
        this.value = t;
      }
      write(t) {
        t.write(this.value);
      }
      markAsError() {
        this.value.markAsError();
      }
    };
    var gn = (e) => e;
    var hn = { bold: gn, red: gn, green: gn, dim: gn, enabled: false };
    var ta = { bold: K, red: de, green: Ve, dim: ke, enabled: true };
    var Rt = { write(e) {
      e.writeLine(",");
    } };
    var Re = class {
      constructor(t) {
        this.contents = t;
        this.isUnderlined = false;
        this.color = (t2) => t2;
      }
      underline() {
        return this.isUnderlined = true, this;
      }
      setColor(t) {
        return this.color = t, this;
      }
      write(t) {
        let r = t.getCurrentLineLength();
        t.write(this.color(this.contents)), this.isUnderlined && t.afterNextNewline(() => {
          t.write(" ".repeat(r)).writeLine(this.color("~".repeat(this.contents.length)));
        });
      }
    };
    var ze = class {
      constructor() {
        this.hasError = false;
      }
      markAsError() {
        return this.hasError = true, this;
      }
    };
    var Ct = class extends ze {
      constructor() {
        super(...arguments);
        this.items = [];
      }
      addItem(r) {
        return this.items.push(new fn(r)), this;
      }
      getField(r) {
        return this.items[r];
      }
      getPrintWidth() {
        return this.items.length === 0 ? 2 : Math.max(...this.items.map((n) => n.value.getPrintWidth())) + 2;
      }
      write(r) {
        if (this.items.length === 0) {
          this.writeEmpty(r);
          return;
        }
        this.writeWithItems(r);
      }
      writeEmpty(r) {
        let n = new Re("[]");
        this.hasError && n.setColor(r.context.colors.red).underline(), r.write(n);
      }
      writeWithItems(r) {
        let { colors: n } = r.context;
        r.writeLine("[").withIndent(() => r.writeJoined(Rt, this.items).newLine()).write("]"), this.hasError && r.afterNextNewline(() => {
          r.writeLine(n.red("~".repeat(this.getPrintWidth())));
        });
      }
      asObject() {
      }
    };
    var St = class e extends ze {
      constructor() {
        super(...arguments);
        this.fields = {};
        this.suggestions = [];
      }
      addField(r) {
        this.fields[r.name] = r;
      }
      addSuggestion(r) {
        this.suggestions.push(r);
      }
      getField(r) {
        return this.fields[r];
      }
      getDeepField(r) {
        let [n, ...i] = r, o = this.getField(n);
        if (!o) return;
        let s = o;
        for (let a of i) {
          let l;
          if (s.value instanceof e ? l = s.value.getField(a) : s.value instanceof Ct && (l = s.value.getField(Number(a))), !l) return;
          s = l;
        }
        return s;
      }
      getDeepFieldValue(r) {
        var _a2;
        return r.length === 0 ? this : (_a2 = this.getDeepField(r)) == null ? void 0 : _a2.value;
      }
      hasField(r) {
        return !!this.getField(r);
      }
      removeAllFields() {
        this.fields = {};
      }
      removeField(r) {
        delete this.fields[r];
      }
      getFields() {
        return this.fields;
      }
      isEmpty() {
        return Object.keys(this.fields).length === 0;
      }
      getFieldValue(r) {
        var _a2;
        return (_a2 = this.getField(r)) == null ? void 0 : _a2.value;
      }
      getDeepSubSelectionValue(r) {
        let n = this;
        for (let i of r) {
          if (!(n instanceof e)) return;
          let o = n.getSubSelectionValue(i);
          if (!o) return;
          n = o;
        }
        return n;
      }
      getDeepSelectionParent(r) {
        let n = this.getSelectionParent();
        if (!n) return;
        let i = n;
        for (let o of r) {
          let s = i.value.getFieldValue(o);
          if (!s || !(s instanceof e)) return;
          let a = s.getSelectionParent();
          if (!a) return;
          i = a;
        }
        return i;
      }
      getSelectionParent() {
        var _a2, _b;
        let r = (_a2 = this.getField("select")) == null ? void 0 : _a2.value.asObject();
        if (r) return { kind: "select", value: r };
        let n = (_b = this.getField("include")) == null ? void 0 : _b.value.asObject();
        if (n) return { kind: "include", value: n };
      }
      getSubSelectionValue(r) {
        var _a2;
        return (_a2 = this.getSelectionParent()) == null ? void 0 : _a2.value.fields[r].value;
      }
      getPrintWidth() {
        let r = Object.values(this.fields);
        return r.length == 0 ? 2 : Math.max(...r.map((i) => i.getPrintWidth())) + 2;
      }
      write(r) {
        let n = Object.values(this.fields);
        if (n.length === 0 && this.suggestions.length === 0) {
          this.writeEmpty(r);
          return;
        }
        this.writeWithContents(r, n);
      }
      asObject() {
        return this;
      }
      writeEmpty(r) {
        let n = new Re("{}");
        this.hasError && n.setColor(r.context.colors.red).underline(), r.write(n);
      }
      writeWithContents(r, n) {
        r.writeLine("{").withIndent(() => {
          r.writeJoined(Rt, [...n, ...this.suggestions]).newLine();
        }), r.write("}"), this.hasError && r.afterNextNewline(() => {
          r.writeLine(r.context.colors.red("~".repeat(this.getPrintWidth())));
        });
      }
    };
    var W = class extends ze {
      constructor(r) {
        super();
        this.text = r;
      }
      getPrintWidth() {
        return this.text.length;
      }
      write(r) {
        let n = new Re(this.text);
        this.hasError && n.underline().setColor(r.context.colors.red), r.write(n);
      }
      asObject() {
      }
    };
    var or = class {
      constructor() {
        this.fields = [];
      }
      addField(t, r) {
        return this.fields.push({ write(n) {
          let { green: i, dim: o } = n.context.colors;
          n.write(i(o(`${t}: ${r}`))).addMarginSymbol(i(o("+")));
        } }), this;
      }
      write(t) {
        let { colors: { green: r } } = t.context;
        t.writeLine(r("{")).withIndent(() => {
          t.writeJoined(Rt, this.fields).newLine();
        }).write(r("}")).addMarginSymbol(r("+"));
      }
    };
    function mn(e, t, r) {
      switch (e.kind) {
        case "MutuallyExclusiveFields":
          zp(e, t);
          break;
        case "IncludeOnScalar":
          Zp(e, t);
          break;
        case "EmptySelection":
          Xp(e, t, r);
          break;
        case "UnknownSelectionField":
          nd(e, t);
          break;
        case "InvalidSelectionValue":
          id(e, t);
          break;
        case "UnknownArgument":
          od(e, t);
          break;
        case "UnknownInputField":
          sd(e, t);
          break;
        case "RequiredArgumentMissing":
          ad(e, t);
          break;
        case "InvalidArgumentType":
          ld(e, t);
          break;
        case "InvalidArgumentValue":
          ud(e, t);
          break;
        case "ValueTooLarge":
          cd(e, t);
          break;
        case "SomeFieldsMissing":
          pd(e, t);
          break;
        case "TooManyFieldsGiven":
          dd(e, t);
          break;
        case "Union":
          Xs(e, t, r);
          break;
        default:
          throw new Error("not implemented: " + e.kind);
      }
    }
    function zp(e, t) {
      var _a2, _b, _c2;
      let r = (_a2 = t.arguments.getDeepSubSelectionValue(e.selectionPath)) == null ? void 0 : _a2.asObject();
      r && ((_b = r.getField(e.firstField)) == null ? void 0 : _b.markAsError(), (_c2 = r.getField(e.secondField)) == null ? void 0 : _c2.markAsError()), t.addErrorMessage((n) => `Please ${n.bold("either")} use ${n.green(`\`${e.firstField}\``)} or ${n.green(`\`${e.secondField}\``)}, but ${n.red("not both")} at the same time.`);
    }
    function Zp(e, t) {
      var _a2, _b;
      let [r, n] = sr(e.selectionPath), i = e.outputType, o = (_a2 = t.arguments.getDeepSelectionParent(r)) == null ? void 0 : _a2.value;
      if (o && ((_b = o.getField(n)) == null ? void 0 : _b.markAsError(), i)) for (let s of i.fields) s.isRelation && o.addSuggestion(new pe(s.name, "true"));
      t.addErrorMessage((s) => {
        let a = `Invalid scalar field ${s.red(`\`${n}\``)} for ${s.bold("include")} statement`;
        return i ? a += ` on model ${s.bold(i.name)}. ${ar(s)}` : a += ".", a += `
Note that ${s.bold("include")} statements only accept relation fields.`, a;
      });
    }
    function Xp(e, t, r) {
      var _a2, _b;
      let n = (_a2 = t.arguments.getDeepSubSelectionValue(e.selectionPath)) == null ? void 0 : _a2.asObject();
      if (n) {
        let i = (_b = n.getField("omit")) == null ? void 0 : _b.value.asObject();
        if (i) {
          ed(e, t, i);
          return;
        }
        if (n.hasField("select")) {
          td(e, t);
          return;
        }
      }
      if (r == null ? void 0 : r[xt(e.outputType.name)]) {
        rd(e, t);
        return;
      }
      t.addErrorMessage(() => `Unknown field at "${e.selectionPath.join(".")} selection"`);
    }
    function ed(e, t, r) {
      r.removeAllFields();
      for (let n of e.outputType.fields) r.addSuggestion(new pe(n.name, "false"));
      t.addErrorMessage((n) => `The ${n.red("omit")} statement includes every field of the model ${n.bold(e.outputType.name)}. At least one field must be included in the result`);
    }
    function td(e, t) {
      var _a2;
      let r = e.outputType, n = (_a2 = t.arguments.getDeepSelectionParent(e.selectionPath)) == null ? void 0 : _a2.value, i = (n == null ? void 0 : n.isEmpty()) ?? false;
      n && (n.removeAllFields(), oa(n, r)), t.addErrorMessage((o) => i ? `The ${o.red("`select`")} statement for type ${o.bold(r.name)} must not be empty. ${ar(o)}` : `The ${o.red("`select`")} statement for type ${o.bold(r.name)} needs ${o.bold("at least one truthy value")}.`);
    }
    function rd(e, t) {
      var _a2, _b;
      let r = new or();
      for (let i of e.outputType.fields) i.isRelation || r.addField(i.name, "false");
      let n = new pe("omit", r).makeRequired();
      if (e.selectionPath.length === 0) t.arguments.addSuggestion(n);
      else {
        let [i, o] = sr(e.selectionPath), a = (_b = (_a2 = t.arguments.getDeepSelectionParent(i)) == null ? void 0 : _a2.value.asObject()) == null ? void 0 : _b.getField(o);
        if (a) {
          let l = (a == null ? void 0 : a.value.asObject()) ?? new St();
          l.addSuggestion(n), a.value = l;
        }
      }
      t.addErrorMessage((i) => `The global ${i.red("omit")} configuration excludes every field of the model ${i.bold(e.outputType.name)}. At least one field must be included in the result`);
    }
    function nd(e, t) {
      let r = sa(e.selectionPath, t);
      if (r.parentKind !== "unknown") {
        r.field.markAsError();
        let n = r.parent;
        switch (r.parentKind) {
          case "select":
            oa(n, e.outputType);
            break;
          case "include":
            md(n, e.outputType);
            break;
          case "omit":
            fd(n, e.outputType);
            break;
        }
      }
      t.addErrorMessage((n) => {
        let i = [`Unknown field ${n.red(`\`${r.fieldName}\``)}`];
        return r.parentKind !== "unknown" && i.push(`for ${n.bold(r.parentKind)} statement`), i.push(`on model ${n.bold(`\`${e.outputType.name}\``)}.`), i.push(ar(n)), i.join(" ");
      });
    }
    function id(e, t) {
      let r = sa(e.selectionPath, t);
      r.parentKind !== "unknown" && r.field.value.markAsError(), t.addErrorMessage((n) => `Invalid value for selection field \`${n.red(r.fieldName)}\`: ${e.underlyingError}`);
    }
    function od(e, t) {
      var _a2, _b;
      let r = e.argumentPath[0], n = (_a2 = t.arguments.getDeepSubSelectionValue(e.selectionPath)) == null ? void 0 : _a2.asObject();
      n && ((_b = n.getField(r)) == null ? void 0 : _b.markAsError(), gd(n, e.arguments)), t.addErrorMessage((i) => na(i, r, e.arguments.map((o) => o.name)));
    }
    function sd(e, t) {
      var _a2, _b, _c2;
      let [r, n] = sr(e.argumentPath), i = (_a2 = t.arguments.getDeepSubSelectionValue(e.selectionPath)) == null ? void 0 : _a2.asObject();
      if (i) {
        (_b = i.getDeepField(e.argumentPath)) == null ? void 0 : _b.markAsError();
        let o = (_c2 = i.getDeepFieldValue(r)) == null ? void 0 : _c2.asObject();
        o && aa(o, e.inputType);
      }
      t.addErrorMessage((o) => na(o, n, e.inputType.fields.map((s) => s.name)));
    }
    function na(e, t, r) {
      let n = [`Unknown argument \`${e.red(t)}\`.`], i = yd(t, r);
      return i && n.push(`Did you mean \`${e.green(i)}\`?`), r.length > 0 && n.push(ar(e)), n.join(" ");
    }
    function ad(e, t) {
      var _a2, _b;
      let r;
      t.addErrorMessage((l) => (r == null ? void 0 : r.value) instanceof W && r.value.text === "null" ? `Argument \`${l.green(o)}\` must not be ${l.red("null")}.` : `Argument \`${l.green(o)}\` is missing.`);
      let n = (_a2 = t.arguments.getDeepSubSelectionValue(e.selectionPath)) == null ? void 0 : _a2.asObject();
      if (!n) return;
      let [i, o] = sr(e.argumentPath), s = new or(), a = (_b = n.getDeepFieldValue(i)) == null ? void 0 : _b.asObject();
      if (a) if (r = a.getField(o), r && a.removeField(o), e.inputTypes.length === 1 && e.inputTypes[0].kind === "object") {
        for (let l of e.inputTypes[0].fields) s.addField(l.name, l.typeNames.join(" | "));
        a.addSuggestion(new pe(o, s).makeRequired());
      } else {
        let l = e.inputTypes.map(ia).join(" | ");
        a.addSuggestion(new pe(o, l).makeRequired());
      }
    }
    function ia(e) {
      return e.kind === "list" ? `${ia(e.elementType)}[]` : e.name;
    }
    function ld(e, t) {
      var _a2, _b;
      let r = e.argument.name, n = (_a2 = t.arguments.getDeepSubSelectionValue(e.selectionPath)) == null ? void 0 : _a2.asObject();
      n && ((_b = n.getDeepFieldValue(e.argumentPath)) == null ? void 0 : _b.markAsError()), t.addErrorMessage((i) => {
        let o = yn("or", e.argument.typeNames.map((s) => i.green(s)));
        return `Argument \`${i.bold(r)}\`: Invalid value provided. Expected ${o}, provided ${i.red(e.inferredType)}.`;
      });
    }
    function ud(e, t) {
      var _a2, _b;
      let r = e.argument.name, n = (_a2 = t.arguments.getDeepSubSelectionValue(e.selectionPath)) == null ? void 0 : _a2.asObject();
      n && ((_b = n.getDeepFieldValue(e.argumentPath)) == null ? void 0 : _b.markAsError()), t.addErrorMessage((i) => {
        let o = [`Invalid value for argument \`${i.bold(r)}\``];
        if (e.underlyingError && o.push(`: ${e.underlyingError}`), o.push("."), e.argument.typeNames.length > 0) {
          let s = yn("or", e.argument.typeNames.map((a) => i.green(a)));
          o.push(` Expected ${s}.`);
        }
        return o.join("");
      });
    }
    function cd(e, t) {
      var _a2, _b;
      let r = e.argument.name, n = (_a2 = t.arguments.getDeepSubSelectionValue(e.selectionPath)) == null ? void 0 : _a2.asObject(), i;
      if (n) {
        let s = (_b = n.getDeepField(e.argumentPath)) == null ? void 0 : _b.value;
        s == null ? void 0 : s.markAsError(), s instanceof W && (i = s.text);
      }
      t.addErrorMessage((o) => {
        let s = ["Unable to fit value"];
        return i && s.push(o.red(i)), s.push(`into a 64-bit signed integer for field \`${o.bold(r)}\``), s.join(" ");
      });
    }
    function pd(e, t) {
      var _a2, _b;
      let r = e.argumentPath[e.argumentPath.length - 1], n = (_a2 = t.arguments.getDeepSubSelectionValue(e.selectionPath)) == null ? void 0 : _a2.asObject();
      if (n) {
        let i = (_b = n.getDeepFieldValue(e.argumentPath)) == null ? void 0 : _b.asObject();
        i && aa(i, e.inputType);
      }
      t.addErrorMessage((i) => {
        let o = [`Argument \`${i.bold(r)}\` of type ${i.bold(e.inputType.name)} needs`];
        return e.constraints.minFieldCount === 1 ? e.constraints.requiredFields ? o.push(`${i.green("at least one of")} ${yn("or", e.constraints.requiredFields.map((s) => `\`${i.bold(s)}\``))} arguments.`) : o.push(`${i.green("at least one")} argument.`) : o.push(`${i.green(`at least ${e.constraints.minFieldCount}`)} arguments.`), o.push(ar(i)), o.join(" ");
      });
    }
    function dd(e, t) {
      var _a2, _b;
      let r = e.argumentPath[e.argumentPath.length - 1], n = (_a2 = t.arguments.getDeepSubSelectionValue(e.selectionPath)) == null ? void 0 : _a2.asObject(), i = [];
      if (n) {
        let o = (_b = n.getDeepFieldValue(e.argumentPath)) == null ? void 0 : _b.asObject();
        o && (o.markAsError(), i = Object.keys(o.getFields()));
      }
      t.addErrorMessage((o) => {
        let s = [`Argument \`${o.bold(r)}\` of type ${o.bold(e.inputType.name)} needs`];
        return e.constraints.minFieldCount === 1 && e.constraints.maxFieldCount == 1 ? s.push(`${o.green("exactly one")} argument,`) : e.constraints.maxFieldCount == 1 ? s.push(`${o.green("at most one")} argument,`) : s.push(`${o.green(`at most ${e.constraints.maxFieldCount}`)} arguments,`), s.push(`but you provided ${yn("and", i.map((a) => o.red(a)))}. Please choose`), e.constraints.maxFieldCount === 1 ? s.push("one.") : s.push(`${e.constraints.maxFieldCount}.`), s.join(" ");
      });
    }
    function oa(e, t) {
      for (let r of t.fields) e.hasField(r.name) || e.addSuggestion(new pe(r.name, "true"));
    }
    function md(e, t) {
      for (let r of t.fields) r.isRelation && !e.hasField(r.name) && e.addSuggestion(new pe(r.name, "true"));
    }
    function fd(e, t) {
      for (let r of t.fields) !e.hasField(r.name) && !r.isRelation && e.addSuggestion(new pe(r.name, "true"));
    }
    function gd(e, t) {
      for (let r of t) e.hasField(r.name) || e.addSuggestion(new pe(r.name, r.typeNames.join(" | ")));
    }
    function sa(e, t) {
      var _a2, _b, _c2, _d2;
      let [r, n] = sr(e), i = (_a2 = t.arguments.getDeepSubSelectionValue(r)) == null ? void 0 : _a2.asObject();
      if (!i) return { parentKind: "unknown", fieldName: n };
      let o = (_b = i.getFieldValue("select")) == null ? void 0 : _b.asObject(), s = (_c2 = i.getFieldValue("include")) == null ? void 0 : _c2.asObject(), a = (_d2 = i.getFieldValue("omit")) == null ? void 0 : _d2.asObject(), l = o == null ? void 0 : o.getField(n);
      return o && l ? { parentKind: "select", parent: o, field: l, fieldName: n } : (l = s == null ? void 0 : s.getField(n), s && l ? { parentKind: "include", field: l, parent: s, fieldName: n } : (l = a == null ? void 0 : a.getField(n), a && l ? { parentKind: "omit", field: l, parent: a, fieldName: n } : { parentKind: "unknown", fieldName: n }));
    }
    function aa(e, t) {
      if (t.kind === "object") for (let r of t.fields) e.hasField(r.name) || e.addSuggestion(new pe(r.name, r.typeNames.join(" | ")));
    }
    function sr(e) {
      let t = [...e], r = t.pop();
      if (!r) throw new Error("unexpected empty path");
      return [t, r];
    }
    function ar({ green: e, enabled: t }) {
      return "Available options are " + (t ? `listed in ${e("green")}` : "marked with ?") + ".";
    }
    function yn(e, t) {
      if (t.length === 1) return t[0];
      let r = [...t], n = r.pop();
      return `${r.join(", ")} ${e} ${n}`;
    }
    var hd = 3;
    function yd(e, t) {
      let r = 1 / 0, n;
      for (let i of t) {
        let o = (0, ra.default)(e, i);
        o > hd || o < r && (r = o, n = i);
      }
      return n;
    }
    function la(e) {
      return e.substring(0, 1).toLowerCase() + e.substring(1);
    }
    var lr = class {
      constructor(t, r, n, i, o) {
        this.modelName = t, this.name = r, this.typeName = n, this.isList = i, this.isEnum = o;
      }
      _toGraphQLInputType() {
        let t = this.isList ? "List" : "", r = this.isEnum ? "Enum" : "";
        return `${t}${r}${this.typeName}FieldRefInput<${this.modelName}>`;
      }
    };
    function At(e) {
      return e instanceof lr;
    }
    var bn = Symbol();
    var Vi = /* @__PURE__ */ new WeakMap();
    var $e = class {
      constructor(t) {
        t === bn ? Vi.set(this, `Prisma.${this._getName()}`) : Vi.set(this, `new Prisma.${this._getNamespace()}.${this._getName()}()`);
      }
      _getName() {
        return this.constructor.name;
      }
      toString() {
        return Vi.get(this);
      }
    };
    var ur = class extends $e {
      _getNamespace() {
        return "NullTypes";
      }
    };
    var cr = class extends ur {
    };
    ji(cr, "DbNull");
    var pr = class extends ur {
    };
    ji(pr, "JsonNull");
    var dr = class extends ur {
    };
    ji(dr, "AnyNull");
    var En = { classes: { DbNull: cr, JsonNull: pr, AnyNull: dr }, instances: { DbNull: new cr(bn), JsonNull: new pr(bn), AnyNull: new dr(bn) } };
    function ji(e, t) {
      Object.defineProperty(e, "name", { value: t, configurable: true });
    }
    var ua = ": ";
    var wn = class {
      constructor(t, r) {
        this.name = t;
        this.value = r;
        this.hasError = false;
      }
      markAsError() {
        this.hasError = true;
      }
      getPrintWidth() {
        return this.name.length + this.value.getPrintWidth() + ua.length;
      }
      write(t) {
        let r = new Re(this.name);
        this.hasError && r.underline().setColor(t.context.colors.red), t.write(r).write(ua).write(this.value);
      }
    };
    var Bi = class {
      constructor(t) {
        this.errorMessages = [];
        this.arguments = t;
      }
      write(t) {
        t.write(this.arguments);
      }
      addErrorMessage(t) {
        this.errorMessages.push(t);
      }
      renderAllMessages(t) {
        return this.errorMessages.map((r) => r(t)).join(`
`);
      }
    };
    function It(e) {
      return new Bi(ca(e));
    }
    function ca(e) {
      let t = new St();
      for (let [r, n] of Object.entries(e)) {
        let i = new wn(r, pa(n));
        t.addField(i);
      }
      return t;
    }
    function pa(e) {
      if (typeof e == "string") return new W(JSON.stringify(e));
      if (typeof e == "number" || typeof e == "boolean") return new W(String(e));
      if (typeof e == "bigint") return new W(`${e}n`);
      if (e === null) return new W("null");
      if (e === void 0) return new W("undefined");
      if (vt(e)) return new W(`new Prisma.Decimal("${e.toFixed()}")`);
      if (e instanceof Uint8Array) return Buffer.isBuffer(e) ? new W(`Buffer.alloc(${e.byteLength})`) : new W(`new Uint8Array(${e.byteLength})`);
      if (e instanceof Date) {
        let t = un(e) ? e.toISOString() : "Invalid Date";
        return new W(`new Date("${t}")`);
      }
      return e instanceof $e ? new W(`Prisma.${e._getName()}`) : At(e) ? new W(`prisma.${la(e.modelName)}.$fields.${e.name}`) : Array.isArray(e) ? bd(e) : typeof e == "object" ? ca(e) : new W(Object.prototype.toString.call(e));
    }
    function bd(e) {
      let t = new Ct();
      for (let r of e) t.addItem(pa(r));
      return t;
    }
    function xn(e, t) {
      let r = t === "pretty" ? ta : hn, n = e.renderAllMessages(r), i = new Tt(0, { colors: r }).write(e).toString();
      return { message: n, args: i };
    }
    function Pn({ args: e, errors: t, errorFormat: r, callsite: n, originalMethod: i, clientVersion: o, globalOmit: s }) {
      let a = It(e);
      for (let p of t) mn(p, a, s);
      let { message: l, args: u } = xn(a, r), c = dn({ message: l, callsite: n, originalMethod: i, showColors: r === "pretty", callArguments: u });
      throw new te(c, { clientVersion: o });
    }
    var Ce = class {
      constructor() {
        this._map = /* @__PURE__ */ new Map();
      }
      get(t) {
        var _a2;
        return (_a2 = this._map.get(t)) == null ? void 0 : _a2.value;
      }
      set(t, r) {
        this._map.set(t, { value: r });
      }
      getOrCreate(t, r) {
        let n = this._map.get(t);
        if (n) return n.value;
        let i = r();
        return this.set(t, i), i;
      }
    };
    function mr(e) {
      let t;
      return { get() {
        return t || (t = { value: e() }), t.value;
      } };
    }
    function Se(e) {
      return e.replace(/^./, (t) => t.toLowerCase());
    }
    function ma(e, t, r) {
      let n = Se(r);
      return !t.result || !(t.result.$allModels || t.result[n]) ? e : Ed({ ...e, ...da(t.name, e, t.result.$allModels), ...da(t.name, e, t.result[n]) });
    }
    function Ed(e) {
      let t = new Ce(), r = (n, i) => t.getOrCreate(n, () => i.has(n) ? [n] : (i.add(n), e[n] ? e[n].needs.flatMap((o) => r(o, i)) : [n]));
      return yt(e, (n) => ({ ...n, needs: r(n.name, /* @__PURE__ */ new Set()) }));
    }
    function da(e, t, r) {
      return r ? yt(r, ({ needs: n, compute: i }, o) => ({ name: o, needs: n ? Object.keys(n).filter((s) => n[s]) : [], compute: wd(t, o, i) })) : {};
    }
    function wd(e, t, r) {
      var _a2;
      let n = (_a2 = e == null ? void 0 : e[t]) == null ? void 0 : _a2.compute;
      return n ? (i) => r({ ...i, [t]: n(i) }) : r;
    }
    function fa(e, t) {
      if (!t) return e;
      let r = { ...e };
      for (let n of Object.values(t)) if (e[n.name]) for (let i of n.needs) r[i] = true;
      return r;
    }
    function ga(e, t) {
      if (!t) return e;
      let r = { ...e };
      for (let n of Object.values(t)) if (!e[n.name]) for (let i of n.needs) delete r[i];
      return r;
    }
    var vn = class {
      constructor(t, r) {
        this.extension = t;
        this.previous = r;
        this.computedFieldsCache = new Ce();
        this.modelExtensionsCache = new Ce();
        this.queryCallbacksCache = new Ce();
        this.clientExtensions = mr(() => {
          var _a2, _b;
          return this.extension.client ? { ...(_a2 = this.previous) == null ? void 0 : _a2.getAllClientExtensions(), ...this.extension.client } : (_b = this.previous) == null ? void 0 : _b.getAllClientExtensions();
        });
        this.batchCallbacks = mr(() => {
          var _a2, _b;
          let t2 = ((_a2 = this.previous) == null ? void 0 : _a2.getAllBatchQueryCallbacks()) ?? [], r2 = (_b = this.extension.query) == null ? void 0 : _b.$__internalBatch;
          return r2 ? t2.concat(r2) : t2;
        });
      }
      getAllComputedFields(t) {
        return this.computedFieldsCache.getOrCreate(t, () => {
          var _a2;
          return ma((_a2 = this.previous) == null ? void 0 : _a2.getAllComputedFields(t), this.extension, t);
        });
      }
      getAllClientExtensions() {
        return this.clientExtensions.get();
      }
      getAllModelExtensions(t) {
        return this.modelExtensionsCache.getOrCreate(t, () => {
          var _a2, _b;
          let r = Se(t);
          return !this.extension.model || !(this.extension.model[r] || this.extension.model.$allModels) ? (_a2 = this.previous) == null ? void 0 : _a2.getAllModelExtensions(t) : { ...(_b = this.previous) == null ? void 0 : _b.getAllModelExtensions(t), ...this.extension.model.$allModels, ...this.extension.model[r] };
        });
      }
      getAllQueryCallbacks(t, r) {
        return this.queryCallbacksCache.getOrCreate(`${t}:${r}`, () => {
          var _a2;
          let n = ((_a2 = this.previous) == null ? void 0 : _a2.getAllQueryCallbacks(t, r)) ?? [], i = [], o = this.extension.query;
          return !o || !(o[t] || o.$allModels || o[r] || o.$allOperations) ? n : (o[t] !== void 0 && (o[t][r] !== void 0 && i.push(o[t][r]), o[t].$allOperations !== void 0 && i.push(o[t].$allOperations)), t !== "$none" && o.$allModels !== void 0 && (o.$allModels[r] !== void 0 && i.push(o.$allModels[r]), o.$allModels.$allOperations !== void 0 && i.push(o.$allModels.$allOperations)), o[r] !== void 0 && i.push(o[r]), o.$allOperations !== void 0 && i.push(o.$allOperations), n.concat(i));
        });
      }
      getAllBatchQueryCallbacks() {
        return this.batchCallbacks.get();
      }
    };
    var Ot = class e {
      constructor(t) {
        this.head = t;
      }
      static empty() {
        return new e();
      }
      static single(t) {
        return new e(new vn(t));
      }
      isEmpty() {
        return this.head === void 0;
      }
      append(t) {
        return new e(new vn(t, this.head));
      }
      getAllComputedFields(t) {
        var _a2;
        return (_a2 = this.head) == null ? void 0 : _a2.getAllComputedFields(t);
      }
      getAllClientExtensions() {
        var _a2;
        return (_a2 = this.head) == null ? void 0 : _a2.getAllClientExtensions();
      }
      getAllModelExtensions(t) {
        var _a2;
        return (_a2 = this.head) == null ? void 0 : _a2.getAllModelExtensions(t);
      }
      getAllQueryCallbacks(t, r) {
        var _a2;
        return ((_a2 = this.head) == null ? void 0 : _a2.getAllQueryCallbacks(t, r)) ?? [];
      }
      getAllBatchQueryCallbacks() {
        var _a2;
        return ((_a2 = this.head) == null ? void 0 : _a2.getAllBatchQueryCallbacks()) ?? [];
      }
    };
    var Tn = class {
      constructor(t) {
        this.name = t;
      }
    };
    function ha(e) {
      return e instanceof Tn;
    }
    function ya(e) {
      return new Tn(e);
    }
    var ba = Symbol();
    var fr = class {
      constructor(t) {
        if (t !== ba) throw new Error("Skip instance can not be constructed directly");
      }
      ifUndefined(t) {
        return t === void 0 ? Rn : t;
      }
    };
    var Rn = new fr(ba);
    function Ae(e) {
      return e instanceof fr;
    }
    var xd = { findUnique: "findUnique", findUniqueOrThrow: "findUniqueOrThrow", findFirst: "findFirst", findFirstOrThrow: "findFirstOrThrow", findMany: "findMany", count: "aggregate", create: "createOne", createMany: "createMany", createManyAndReturn: "createManyAndReturn", update: "updateOne", updateMany: "updateMany", updateManyAndReturn: "updateManyAndReturn", upsert: "upsertOne", delete: "deleteOne", deleteMany: "deleteMany", executeRaw: "executeRaw", queryRaw: "queryRaw", aggregate: "aggregate", groupBy: "groupBy", runCommandRaw: "runCommandRaw", findRaw: "findRaw", aggregateRaw: "aggregateRaw" };
    var Ea = "explicitly `undefined` values are not allowed";
    function Cn({ modelName: e, action: t, args: r, runtimeDataModel: n, extensions: i = Ot.empty(), callsite: o, clientMethod: s, errorFormat: a, clientVersion: l, previewFeatures: u, globalOmit: c }) {
      let p = new Ui({ runtimeDataModel: n, modelName: e, action: t, rootArgs: r, callsite: o, extensions: i, selectionPath: [], argumentPath: [], originalMethod: s, errorFormat: a, clientVersion: l, previewFeatures: u, globalOmit: c });
      return { modelName: e, action: xd[t], query: gr(r, p) };
    }
    function gr({ select: e, include: t, ...r } = {}, n) {
      let i = r.omit;
      return delete r.omit, { arguments: xa(r, n), selection: Pd(e, t, i, n) };
    }
    function Pd(e, t, r, n) {
      return e ? (t ? n.throwValidationError({ kind: "MutuallyExclusiveFields", firstField: "include", secondField: "select", selectionPath: n.getSelectionPath() }) : r && n.throwValidationError({ kind: "MutuallyExclusiveFields", firstField: "omit", secondField: "select", selectionPath: n.getSelectionPath() }), Cd(e, n)) : vd(n, t, r);
    }
    function vd(e, t, r) {
      let n = {};
      return e.modelOrType && !e.isRawAction() && (n.$composites = true, n.$scalars = true), t && Td(n, t, e), Rd(n, r, e), n;
    }
    function Td(e, t, r) {
      for (let [n, i] of Object.entries(t)) {
        if (Ae(i)) continue;
        let o = r.nestSelection(n);
        if (Gi(i, o), i === false || i === void 0) {
          e[n] = false;
          continue;
        }
        let s = r.findField(n);
        if (s && s.kind !== "object" && r.throwValidationError({ kind: "IncludeOnScalar", selectionPath: r.getSelectionPath().concat(n), outputType: r.getOutputTypeDescription() }), s) {
          e[n] = gr(i === true ? {} : i, o);
          continue;
        }
        if (i === true) {
          e[n] = true;
          continue;
        }
        e[n] = gr(i, o);
      }
    }
    function Rd(e, t, r) {
      let n = r.getComputedFields(), i = { ...r.getGlobalOmit(), ...t }, o = ga(i, n);
      for (let [s, a] of Object.entries(o)) {
        if (Ae(a)) continue;
        Gi(a, r.nestSelection(s));
        let l = r.findField(s);
        (n == null ? void 0 : n[s]) && !l || (e[s] = !a);
      }
    }
    function Cd(e, t) {
      let r = {}, n = t.getComputedFields(), i = fa(e, n);
      for (let [o, s] of Object.entries(i)) {
        if (Ae(s)) continue;
        let a = t.nestSelection(o);
        Gi(s, a);
        let l = t.findField(o);
        if (!((n == null ? void 0 : n[o]) && !l)) {
          if (s === false || s === void 0 || Ae(s)) {
            r[o] = false;
            continue;
          }
          if (s === true) {
            (l == null ? void 0 : l.kind) === "object" ? r[o] = gr({}, a) : r[o] = true;
            continue;
          }
          r[o] = gr(s, a);
        }
      }
      return r;
    }
    function wa(e, t) {
      if (e === null) return null;
      if (typeof e == "string" || typeof e == "number" || typeof e == "boolean") return e;
      if (typeof e == "bigint") return { $type: "BigInt", value: String(e) };
      if (Pt(e)) {
        if (un(e)) return { $type: "DateTime", value: e.toISOString() };
        t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: t.getSelectionPath(), argumentPath: t.getArgumentPath(), argument: { name: t.getArgumentName(), typeNames: ["Date"] }, underlyingError: "Provided Date object is invalid" });
      }
      if (ha(e)) return { $type: "Param", value: e.name };
      if (At(e)) return { $type: "FieldRef", value: { _ref: e.name, _container: e.modelName } };
      if (Array.isArray(e)) return Sd(e, t);
      if (ArrayBuffer.isView(e)) {
        let { buffer: r, byteOffset: n, byteLength: i } = e;
        return { $type: "Bytes", value: Buffer.from(r, n, i).toString("base64") };
      }
      if (Ad(e)) return e.values;
      if (vt(e)) return { $type: "Decimal", value: e.toFixed() };
      if (e instanceof $e) {
        if (e !== En.instances[e._getName()]) throw new Error("Invalid ObjectEnumValue");
        return { $type: "Enum", value: e._getName() };
      }
      if (Id(e)) return e.toJSON();
      if (typeof e == "object") return xa(e, t);
      t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: t.getSelectionPath(), argumentPath: t.getArgumentPath(), argument: { name: t.getArgumentName(), typeNames: [] }, underlyingError: `We could not serialize ${Object.prototype.toString.call(e)} value. Serialize the object to JSON or implement a ".toJSON()" method on it` });
    }
    function xa(e, t) {
      if (e.$type) return { $type: "Raw", value: e };
      let r = {};
      for (let n in e) {
        let i = e[n], o = t.nestArgument(n);
        Ae(i) || (i !== void 0 ? r[n] = wa(i, o) : t.isPreviewFeatureOn("strictUndefinedChecks") && t.throwValidationError({ kind: "InvalidArgumentValue", argumentPath: o.getArgumentPath(), selectionPath: t.getSelectionPath(), argument: { name: t.getArgumentName(), typeNames: [] }, underlyingError: Ea }));
      }
      return r;
    }
    function Sd(e, t) {
      let r = [];
      for (let n = 0; n < e.length; n++) {
        let i = t.nestArgument(String(n)), o = e[n];
        if (o === void 0 || Ae(o)) {
          let s = o === void 0 ? "undefined" : "Prisma.skip";
          t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: i.getSelectionPath(), argumentPath: i.getArgumentPath(), argument: { name: `${t.getArgumentName()}[${n}]`, typeNames: [] }, underlyingError: `Can not use \`${s}\` value within array. Use \`null\` or filter out \`${s}\` values` });
        }
        r.push(wa(o, i));
      }
      return r;
    }
    function Ad(e) {
      return typeof e == "object" && e !== null && e.__prismaRawParameters__ === true;
    }
    function Id(e) {
      return typeof e == "object" && e !== null && typeof e.toJSON == "function";
    }
    function Gi(e, t) {
      e === void 0 && t.isPreviewFeatureOn("strictUndefinedChecks") && t.throwValidationError({ kind: "InvalidSelectionValue", selectionPath: t.getSelectionPath(), underlyingError: Ea });
    }
    var Ui = class e {
      constructor(t) {
        this.params = t;
        this.params.modelName && (this.modelOrType = this.params.runtimeDataModel.models[this.params.modelName] ?? this.params.runtimeDataModel.types[this.params.modelName]);
      }
      throwValidationError(t) {
        Pn({ errors: [t], originalMethod: this.params.originalMethod, args: this.params.rootArgs ?? {}, callsite: this.params.callsite, errorFormat: this.params.errorFormat, clientVersion: this.params.clientVersion, globalOmit: this.params.globalOmit });
      }
      getSelectionPath() {
        return this.params.selectionPath;
      }
      getArgumentPath() {
        return this.params.argumentPath;
      }
      getArgumentName() {
        return this.params.argumentPath[this.params.argumentPath.length - 1];
      }
      getOutputTypeDescription() {
        if (!(!this.params.modelName || !this.modelOrType)) return { name: this.params.modelName, fields: this.modelOrType.fields.map((t) => ({ name: t.name, typeName: "boolean", isRelation: t.kind === "object" })) };
      }
      isRawAction() {
        return ["executeRaw", "queryRaw", "runCommandRaw", "findRaw", "aggregateRaw"].includes(this.params.action);
      }
      isPreviewFeatureOn(t) {
        return this.params.previewFeatures.includes(t);
      }
      getComputedFields() {
        if (this.params.modelName) return this.params.extensions.getAllComputedFields(this.params.modelName);
      }
      findField(t) {
        var _a2;
        return (_a2 = this.modelOrType) == null ? void 0 : _a2.fields.find((r) => r.name === t);
      }
      nestSelection(t) {
        let r = this.findField(t), n = (r == null ? void 0 : r.kind) === "object" ? r.type : void 0;
        return new e({ ...this.params, modelName: n, selectionPath: this.params.selectionPath.concat(t) });
      }
      getGlobalOmit() {
        var _a2;
        return this.params.modelName && this.shouldApplyGlobalOmit() ? ((_a2 = this.params.globalOmit) == null ? void 0 : _a2[xt(this.params.modelName)]) ?? {} : {};
      }
      shouldApplyGlobalOmit() {
        switch (this.params.action) {
          case "findFirst":
          case "findFirstOrThrow":
          case "findUniqueOrThrow":
          case "findMany":
          case "upsert":
          case "findUnique":
          case "createManyAndReturn":
          case "create":
          case "update":
          case "updateManyAndReturn":
          case "delete":
            return true;
          case "executeRaw":
          case "aggregateRaw":
          case "runCommandRaw":
          case "findRaw":
          case "createMany":
          case "deleteMany":
          case "groupBy":
          case "updateMany":
          case "count":
          case "aggregate":
          case "queryRaw":
            return false;
          default:
            Fe(this.params.action, "Unknown action");
        }
      }
      nestArgument(t) {
        return new e({ ...this.params, argumentPath: this.params.argumentPath.concat(t) });
      }
    };
    function Pa(e) {
      if (!e._hasPreviewFlag("metrics")) throw new te("`metrics` preview feature must be enabled in order to access metrics API", { clientVersion: e._clientVersion });
    }
    var kt = class {
      constructor(t) {
        this._client = t;
      }
      prometheus(t) {
        return Pa(this._client), this._client._engine.metrics({ format: "prometheus", ...t });
      }
      json(t) {
        return Pa(this._client), this._client._engine.metrics({ format: "json", ...t });
      }
    };
    function va(e) {
      return { models: Qi(e.models), enums: Qi(e.enums), types: Qi(e.types) };
    }
    function Qi(e) {
      let t = {};
      for (let { name: r, ...n } of e) t[r] = n;
      return t;
    }
    function Ta(e, t) {
      let r = mr(() => Od(t));
      Object.defineProperty(e, "dmmf", { get: () => r.get() });
    }
    function Od(e) {
      return { datamodel: { models: Ji(e.models), enums: Ji(e.enums), types: Ji(e.types) } };
    }
    function Ji(e) {
      return Object.entries(e).map(([t, r]) => ({ name: t, ...r }));
    }
    var Wi = /* @__PURE__ */ new WeakMap();
    var Sn = "$$PrismaTypedSql";
    var Hi = class {
      constructor(t, r) {
        Wi.set(this, { sql: t, values: r }), Object.defineProperty(this, Sn, { value: Sn });
      }
      get sql() {
        return Wi.get(this).sql;
      }
      get values() {
        return Wi.get(this).values;
      }
    };
    function Ra(e) {
      return (...t) => new Hi(e, t);
    }
    function Ca(e) {
      return e != null && e[Sn] === Sn;
    }
    var iu = _(fi());
    var ou = require("async_hooks");
    var su = require("events");
    var au = _(require("fs"));
    var Nr = _(require("path"));
    var ae = class e {
      constructor(t, r) {
        if (t.length - 1 !== r.length) throw t.length === 0 ? new TypeError("Expected at least 1 string") : new TypeError(`Expected ${t.length} strings to have ${t.length - 1} values`);
        let n = r.reduce((s, a) => s + (a instanceof e ? a.values.length : 1), 0);
        this.values = new Array(n), this.strings = new Array(n + 1), this.strings[0] = t[0];
        let i = 0, o = 0;
        for (; i < r.length; ) {
          let s = r[i++], a = t[i];
          if (s instanceof e) {
            this.strings[o] += s.strings[0];
            let l = 0;
            for (; l < s.values.length; ) this.values[o++] = s.values[l++], this.strings[o] = s.strings[l];
            this.strings[o] += a;
          } else this.values[o++] = s, this.strings[o] = a;
        }
      }
      get sql() {
        let t = this.strings.length, r = 1, n = this.strings[0];
        for (; r < t; ) n += `?${this.strings[r++]}`;
        return n;
      }
      get statement() {
        let t = this.strings.length, r = 1, n = this.strings[0];
        for (; r < t; ) n += `:${r}${this.strings[r++]}`;
        return n;
      }
      get text() {
        let t = this.strings.length, r = 1, n = this.strings[0];
        for (; r < t; ) n += `$${r}${this.strings[r++]}`;
        return n;
      }
      inspect() {
        return { sql: this.sql, statement: this.statement, text: this.text, values: this.values };
      }
    };
    function Sa(e, t = ",", r = "", n = "") {
      if (e.length === 0) throw new TypeError("Expected `join([])` to be called with an array of multiple elements, but got an empty array");
      return new ae([r, ...Array(e.length - 1).fill(t), n], e);
    }
    function Ki(e) {
      return new ae([e], []);
    }
    var Aa = Ki("");
    function Yi(e, ...t) {
      return new ae(e, t);
    }
    function hr(e) {
      return { getKeys() {
        return Object.keys(e);
      }, getPropertyValue(t) {
        return e[t];
      } };
    }
    function ie(e, t) {
      return { getKeys() {
        return [e];
      }, getPropertyValue() {
        return t();
      } };
    }
    function ot(e) {
      let t = new Ce();
      return { getKeys() {
        return e.getKeys();
      }, getPropertyValue(r) {
        return t.getOrCreate(r, () => e.getPropertyValue(r));
      }, getPropertyDescriptor(r) {
        var _a2;
        return (_a2 = e.getPropertyDescriptor) == null ? void 0 : _a2.call(e, r);
      } };
    }
    var An = { enumerable: true, configurable: true, writable: true };
    function In(e) {
      let t = new Set(e);
      return { getPrototypeOf: () => Object.prototype, getOwnPropertyDescriptor: () => An, has: (r, n) => t.has(n), set: (r, n, i) => t.add(n) && Reflect.set(r, n, i), ownKeys: () => [...t] };
    }
    var Ia = Symbol.for("nodejs.util.inspect.custom");
    function ye(e, t) {
      let r = kd(t), n = /* @__PURE__ */ new Set(), i = new Proxy(e, { get(o, s) {
        if (n.has(s)) return o[s];
        let a = r.get(s);
        return a ? a.getPropertyValue(s) : o[s];
      }, has(o, s) {
        var _a2;
        if (n.has(s)) return true;
        let a = r.get(s);
        return a ? ((_a2 = a.has) == null ? void 0 : _a2.call(a, s)) ?? true : Reflect.has(o, s);
      }, ownKeys(o) {
        let s = Oa(Reflect.ownKeys(o), r), a = Oa(Array.from(r.keys()), r);
        return [.../* @__PURE__ */ new Set([...s, ...a, ...n])];
      }, set(o, s, a) {
        var _a2, _b, _c2;
        return ((_c2 = (_b = (_a2 = r.get(s)) == null ? void 0 : _a2.getPropertyDescriptor) == null ? void 0 : _b.call(_a2, s)) == null ? void 0 : _c2.writable) === false ? false : (n.add(s), Reflect.set(o, s, a));
      }, getOwnPropertyDescriptor(o, s) {
        let a = Reflect.getOwnPropertyDescriptor(o, s);
        if (a && !a.configurable) return a;
        let l = r.get(s);
        return l ? l.getPropertyDescriptor ? { ...An, ...l == null ? void 0 : l.getPropertyDescriptor(s) } : An : a;
      }, defineProperty(o, s, a) {
        return n.add(s), Reflect.defineProperty(o, s, a);
      }, getPrototypeOf: () => Object.prototype });
      return i[Ia] = function() {
        let o = { ...this };
        return delete o[Ia], o;
      }, i;
    }
    function kd(e) {
      let t = /* @__PURE__ */ new Map();
      for (let r of e) {
        let n = r.getKeys();
        for (let i of n) t.set(i, r);
      }
      return t;
    }
    function Oa(e, t) {
      return e.filter((r) => {
        var _a2, _b;
        return ((_b = (_a2 = t.get(r)) == null ? void 0 : _a2.has) == null ? void 0 : _b.call(_a2, r)) ?? true;
      });
    }
    function _t(e) {
      return { getKeys() {
        return e;
      }, has() {
        return false;
      }, getPropertyValue() {
      } };
    }
    function Dt(e, t) {
      return { batch: e, transaction: (t == null ? void 0 : t.kind) === "batch" ? { isolationLevel: t.options.isolationLevel } : void 0 };
    }
    function ka(e) {
      if (e === void 0) return "";
      let t = It(e);
      return new Tt(0, { colors: hn }).write(t).toString();
    }
    var _d = "P2037";
    function Nt({ error: e, user_facing_error: t }, r, n) {
      return t.error_code ? new ee(Dd(t, n), { code: t.error_code, clientVersion: r, meta: t.meta, batchRequestIdx: t.batch_request_idx }) : new B(e, { clientVersion: r, batchRequestIdx: t.batch_request_idx });
    }
    function Dd(e, t) {
      let r = e.message;
      return (t === "postgresql" || t === "postgres" || t === "mysql") && e.error_code === _d && (r += `
Prisma Accelerate has built-in connection pooling to prevent such errors: https://pris.ly/client/error-accelerate`), r;
    }
    var yr = "<unknown>";
    function _a(e) {
      var t = e.split(`
`);
      return t.reduce(function(r, n) {
        var i = Fd(n) || $d(n) || jd(n) || Qd(n) || Ud(n);
        return i && r.push(i), r;
      }, []);
    }
    var Nd = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
    var Ld = /\((\S*)(?::(\d+))(?::(\d+))\)/;
    function Fd(e) {
      var t = Nd.exec(e);
      if (!t) return null;
      var r = t[2] && t[2].indexOf("native") === 0, n = t[2] && t[2].indexOf("eval") === 0, i = Ld.exec(t[2]);
      return n && i != null && (t[2] = i[1], t[3] = i[2], t[4] = i[3]), { file: r ? null : t[2], methodName: t[1] || yr, arguments: r ? [t[2]] : [], lineNumber: t[3] ? +t[3] : null, column: t[4] ? +t[4] : null };
    }
    var Md = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
    function $d(e) {
      var t = Md.exec(e);
      return t ? { file: t[2], methodName: t[1] || yr, arguments: [], lineNumber: +t[3], column: t[4] ? +t[4] : null } : null;
    }
    var qd = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i;
    var Vd = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
    function jd(e) {
      var t = qd.exec(e);
      if (!t) return null;
      var r = t[3] && t[3].indexOf(" > eval") > -1, n = Vd.exec(t[3]);
      return r && n != null && (t[3] = n[1], t[4] = n[2], t[5] = null), { file: t[3], methodName: t[1] || yr, arguments: t[2] ? t[2].split(",") : [], lineNumber: t[4] ? +t[4] : null, column: t[5] ? +t[5] : null };
    }
    var Bd = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;
    function Ud(e) {
      var t = Bd.exec(e);
      return t ? { file: t[3], methodName: t[1] || yr, arguments: [], lineNumber: +t[4], column: t[5] ? +t[5] : null } : null;
    }
    var Gd = /^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;
    function Qd(e) {
      var t = Gd.exec(e);
      return t ? { file: t[2], methodName: t[1] || yr, arguments: [], lineNumber: +t[3], column: t[4] ? +t[4] : null } : null;
    }
    var zi = class {
      getLocation() {
        return null;
      }
    };
    var Zi = class {
      constructor() {
        this._error = new Error();
      }
      getLocation() {
        let t = this._error.stack;
        if (!t) return null;
        let n = _a(t).find((i) => {
          if (!i.file) return false;
          let o = Ri(i.file);
          return o !== "<anonymous>" && !o.includes("@prisma") && !o.includes("/packages/client/src/runtime/") && !o.endsWith("/runtime/binary.js") && !o.endsWith("/runtime/library.js") && !o.endsWith("/runtime/edge.js") && !o.endsWith("/runtime/edge-esm.js") && !o.startsWith("internal/") && !i.methodName.includes("new ") && !i.methodName.includes("getCallSite") && !i.methodName.includes("Proxy.") && i.methodName.split(".").length < 4;
        });
        return !n || !n.file ? null : { fileName: n.file, lineNumber: n.lineNumber, columnNumber: n.column };
      }
    };
    function Ze(e) {
      return e === "minimal" ? typeof $EnabledCallSite == "function" && e !== "minimal" ? new $EnabledCallSite() : new zi() : new Zi();
    }
    var Da = { _avg: true, _count: true, _sum: true, _min: true, _max: true };
    function Lt(e = {}) {
      let t = Wd(e);
      return Object.entries(t).reduce((n, [i, o]) => (Da[i] !== void 0 ? n.select[i] = { select: o } : n[i] = o, n), { select: {} });
    }
    function Wd(e = {}) {
      return typeof e._count == "boolean" ? { ...e, _count: { _all: e._count } } : e;
    }
    function On(e = {}) {
      return (t) => (typeof e._count == "boolean" && (t._count = t._count._all), t);
    }
    function Na(e, t) {
      let r = On(e);
      return t({ action: "aggregate", unpacker: r, argsMapper: Lt })(e);
    }
    function Hd(e = {}) {
      let { select: t, ...r } = e;
      return typeof t == "object" ? Lt({ ...r, _count: t }) : Lt({ ...r, _count: { _all: true } });
    }
    function Kd(e = {}) {
      return typeof e.select == "object" ? (t) => On(e)(t)._count : (t) => On(e)(t)._count._all;
    }
    function La(e, t) {
      return t({ action: "count", unpacker: Kd(e), argsMapper: Hd })(e);
    }
    function Yd(e = {}) {
      let t = Lt(e);
      if (Array.isArray(t.by)) for (let r of t.by) typeof r == "string" && (t.select[r] = true);
      else typeof t.by == "string" && (t.select[t.by] = true);
      return t;
    }
    function zd(e = {}) {
      return (t) => (typeof (e == null ? void 0 : e._count) == "boolean" && t.forEach((r) => {
        r._count = r._count._all;
      }), t);
    }
    function Fa(e, t) {
      return t({ action: "groupBy", unpacker: zd(e), argsMapper: Yd })(e);
    }
    function Ma(e, t, r) {
      if (t === "aggregate") return (n) => Na(n, r);
      if (t === "count") return (n) => La(n, r);
      if (t === "groupBy") return (n) => Fa(n, r);
    }
    function $a(e, t) {
      let r = t.fields.filter((i) => !i.relationName), n = _i(r, (i) => i.name);
      return new Proxy({}, { get(i, o) {
        if (o in i || typeof o == "symbol") return i[o];
        let s = n[o];
        if (s) return new lr(e, o, s.type, s.isList, s.kind === "enum");
      }, ...In(Object.keys(n)) });
    }
    var qa = (e) => Array.isArray(e) ? e : e.split(".");
    var Xi = (e, t) => qa(t).reduce((r, n) => r && r[n], e);
    var Va = (e, t, r) => qa(t).reduceRight((n, i, o, s) => Object.assign({}, Xi(e, s.slice(0, o)), { [i]: n }), r);
    function Zd(e, t) {
      return e === void 0 || t === void 0 ? [] : [...t, "select", e];
    }
    function Xd(e, t, r) {
      return t === void 0 ? e ?? {} : Va(t, r, e || true);
    }
    function eo(e, t, r, n, i, o) {
      let a = e._runtimeDataModel.models[t].fields.reduce((l, u) => ({ ...l, [u.name]: u }), {});
      return (l) => {
        let u = Ze(e._errorFormat), c = Zd(n, i), p = Xd(l, o, c), d = r({ dataPath: c, callsite: u })(p), f = em(e, t);
        return new Proxy(d, { get(g, h) {
          if (!f.includes(h)) return g[h];
          let v = [a[h].type, r, h], C = [c, p];
          return eo(e, ...v, ...C);
        }, ...In([...f, ...Object.getOwnPropertyNames(d)]) });
      };
    }
    function em(e, t) {
      return e._runtimeDataModel.models[t].fields.filter((r) => r.kind === "object").map((r) => r.name);
    }
    var tm = ["findUnique", "findUniqueOrThrow", "findFirst", "findFirstOrThrow", "create", "update", "upsert", "delete"];
    var rm = ["aggregate", "count", "groupBy"];
    function to(e, t) {
      let r = e._extensions.getAllModelExtensions(t) ?? {}, n = [nm(e, t), om(e, t), hr(r), ie("name", () => t), ie("$name", () => t), ie("$parent", () => e._appliedParent)];
      return ye({}, n);
    }
    function nm(e, t) {
      let r = Se(t), n = Object.keys(Xt.ModelAction).concat("count");
      return { getKeys() {
        return n;
      }, getPropertyValue(i) {
        let o = i, s = (a) => (l) => {
          let u = Ze(e._errorFormat);
          return e._createPrismaPromise((c) => {
            let p = { args: l, dataPath: [], action: o, model: t, clientMethod: `${r}.${i}`, jsModelName: r, transaction: c, callsite: u };
            return e._request({ ...p, ...a });
          }, { action: o, args: l, model: t });
        };
        return tm.includes(o) ? eo(e, t, s) : im(i) ? Ma(e, i, s) : s({});
      } };
    }
    function im(e) {
      return rm.includes(e);
    }
    function om(e, t) {
      return ot(ie("fields", () => {
        let r = e._runtimeDataModel.models[t];
        return $a(t, r);
      }));
    }
    function ja(e) {
      return e.replace(/^./, (t) => t.toUpperCase());
    }
    var ro = Symbol();
    function br(e) {
      let t = [sm(e), am(e), ie(ro, () => e), ie("$parent", () => e._appliedParent)], r = e._extensions.getAllClientExtensions();
      return r && t.push(hr(r)), ye(e, t);
    }
    function sm(e) {
      let t = Object.getPrototypeOf(e._originalClient), r = [...new Set(Object.getOwnPropertyNames(t))];
      return { getKeys() {
        return r;
      }, getPropertyValue(n) {
        return e[n];
      } };
    }
    function am(e) {
      let t = Object.keys(e._runtimeDataModel.models), r = t.map(Se), n = [...new Set(t.concat(r))];
      return ot({ getKeys() {
        return n;
      }, getPropertyValue(i) {
        let o = ja(i);
        if (e._runtimeDataModel.models[o] !== void 0) return to(e, o);
        if (e._runtimeDataModel.models[i] !== void 0) return to(e, i);
      }, getPropertyDescriptor(i) {
        if (!r.includes(i)) return { enumerable: false };
      } });
    }
    function Ba(e) {
      return e[ro] ? e[ro] : e;
    }
    function Ua(e) {
      var _a2;
      if (typeof e == "function") return e(this);
      if ((_a2 = e.client) == null ? void 0 : _a2.__AccelerateEngine) {
        let r = e.client.__AccelerateEngine;
        this._originalClient._engine = new r(this._originalClient._accelerateEngineConfig);
      }
      let t = Object.create(this._originalClient, { _extensions: { value: this._extensions.append(e) }, _appliedParent: { value: this, configurable: true }, $use: { value: void 0 }, $on: { value: void 0 } });
      return br(t);
    }
    function Ga({ result: e, modelName: t, select: r, omit: n, extensions: i }) {
      let o = i.getAllComputedFields(t);
      if (!o) return e;
      let s = [], a = [];
      for (let l of Object.values(o)) {
        if (n) {
          if (n[l.name]) continue;
          let u = l.needs.filter((c) => n[c]);
          u.length > 0 && a.push(_t(u));
        } else if (r) {
          if (!r[l.name]) continue;
          let u = l.needs.filter((c) => !r[c]);
          u.length > 0 && a.push(_t(u));
        }
        lm(e, l.needs) && s.push(um(l, ye(e, s)));
      }
      return s.length > 0 || a.length > 0 ? ye(e, [...s, ...a]) : e;
    }
    function lm(e, t) {
      return t.every((r) => ki(e, r));
    }
    function um(e, t) {
      return ot(ie(e.name, () => e.compute(t)));
    }
    function kn({ visitor: e, result: t, args: r, runtimeDataModel: n, modelName: i }) {
      if (Array.isArray(t)) {
        for (let s = 0; s < t.length; s++) t[s] = kn({ result: t[s], args: r, modelName: i, runtimeDataModel: n, visitor: e });
        return t;
      }
      let o = e(t, i, r) ?? t;
      return r.include && Qa({ includeOrSelect: r.include, result: o, parentModelName: i, runtimeDataModel: n, visitor: e }), r.select && Qa({ includeOrSelect: r.select, result: o, parentModelName: i, runtimeDataModel: n, visitor: e }), o;
    }
    function Qa({ includeOrSelect: e, result: t, parentModelName: r, runtimeDataModel: n, visitor: i }) {
      for (let [o, s] of Object.entries(e)) {
        if (!s || t[o] == null || Ae(s)) continue;
        let l = n.models[r].fields.find((c) => c.name === o);
        if (!l || l.kind !== "object" || !l.relationName) continue;
        let u = typeof s == "object" ? s : {};
        t[o] = kn({ visitor: i, result: t[o], args: u, modelName: l.type, runtimeDataModel: n });
      }
    }
    function Ja({ result: e, modelName: t, args: r, extensions: n, runtimeDataModel: i, globalOmit: o }) {
      return n.isEmpty() || e == null || typeof e != "object" || !i.models[t] ? e : kn({ result: e, args: r ?? {}, modelName: t, runtimeDataModel: i, visitor: (a, l, u) => {
        let c = Se(l);
        return Ga({ result: a, modelName: c, select: u.select, omit: u.select ? void 0 : { ...o == null ? void 0 : o[c], ...u.omit }, extensions: n });
      } });
    }
    function Wa(e) {
      if (e instanceof ae) return cm(e);
      if (Array.isArray(e)) {
        let r = [e[0]];
        for (let n = 1; n < e.length; n++) r[n] = Er(e[n]);
        return r;
      }
      let t = {};
      for (let r in e) t[r] = Er(e[r]);
      return t;
    }
    function cm(e) {
      return new ae(e.strings, e.values);
    }
    function Er(e) {
      if (typeof e != "object" || e == null || e instanceof $e || At(e)) return e;
      if (vt(e)) return new Te(e.toFixed());
      if (Pt(e)) return /* @__PURE__ */ new Date(+e);
      if (ArrayBuffer.isView(e)) return e.slice(0);
      if (Array.isArray(e)) {
        let t = e.length, r;
        for (r = Array(t); t--; ) r[t] = Er(e[t]);
        return r;
      }
      if (typeof e == "object") {
        let t = {};
        for (let r in e) r === "__proto__" ? Object.defineProperty(t, r, { value: Er(e[r]), configurable: true, enumerable: true, writable: true }) : t[r] = Er(e[r]);
        return t;
      }
      Fe(e, "Unknown value");
    }
    function Ka(e, t, r, n = 0) {
      return e._createPrismaPromise((i) => {
        var _a2;
        let o = t.customDataProxyFetch;
        return "transaction" in t && i !== void 0 && (((_a2 = t.transaction) == null ? void 0 : _a2.kind) === "batch" && t.transaction.lock.then(), t.transaction = i), n === r.length ? e._executeRequest(t) : r[n]({ model: t.model, operation: t.model ? t.action : t.clientMethod, args: Wa(t.args ?? {}), __internalParams: t, query: (s, a = t) => {
          let l = a.customDataProxyFetch;
          return a.customDataProxyFetch = Xa(o, l), a.args = s, Ka(e, a, r, n + 1);
        } });
      });
    }
    function Ya(e, t) {
      let { jsModelName: r, action: n, clientMethod: i } = t, o = r ? n : i;
      if (e._extensions.isEmpty()) return e._executeRequest(t);
      let s = e._extensions.getAllQueryCallbacks(r ?? "$none", o);
      return Ka(e, t, s);
    }
    function za(e) {
      return (t) => {
        let r = { requests: t }, n = t[0].extensions.getAllBatchQueryCallbacks();
        return n.length ? Za(r, n, 0, e) : e(r);
      };
    }
    function Za(e, t, r, n) {
      if (r === t.length) return n(e);
      let i = e.customDataProxyFetch, o = e.requests[0].transaction;
      return t[r]({ args: { queries: e.requests.map((s) => ({ model: s.modelName, operation: s.action, args: s.args })), transaction: o ? { isolationLevel: o.kind === "batch" ? o.isolationLevel : void 0 } : void 0 }, __internalParams: e, query(s, a = e) {
        let l = a.customDataProxyFetch;
        return a.customDataProxyFetch = Xa(i, l), Za(a, t, r + 1, n);
      } });
    }
    var Ha = (e) => e;
    function Xa(e = Ha, t = Ha) {
      return (r) => e(t(r));
    }
    var el = F("prisma:client");
    var tl = { Vercel: "vercel", "Netlify CI": "netlify" };
    function rl({ postinstall: e, ciName: t, clientVersion: r }) {
      if (el("checkPlatformCaching:postinstall", e), el("checkPlatformCaching:ciName", t), e === true && t && t in tl) {
        let n = `Prisma has detected that this project was built on ${t}, which caches dependencies. This leads to an outdated Prisma Client because Prisma's auto-generation isn't triggered. To fix this, make sure to run the \`prisma generate\` command during the build process.

Learn how: https://pris.ly/d/${tl[t]}-build`;
        throw console.error(n), new T(n, r);
      }
    }
    function nl(e, t) {
      return e ? e.datasources ? e.datasources : e.datasourceUrl ? { [t[0]]: { url: e.datasourceUrl } } : {} : {};
    }
    var pm = "Cloudflare-Workers";
    var dm = "node";
    function il() {
      var _a2, _b, _c2;
      return typeof Netlify == "object" ? "netlify" : typeof EdgeRuntime == "string" ? "edge-light" : ((_a2 = globalThis.navigator) == null ? void 0 : _a2.userAgent) === pm ? "workerd" : globalThis.Deno ? "deno" : globalThis.__lagon__ ? "lagon" : ((_c2 = (_b = globalThis.process) == null ? void 0 : _b.release) == null ? void 0 : _c2.name) === dm ? "node" : globalThis.Bun ? "bun" : globalThis.fastly ? "fastly" : "unknown";
    }
    var mm = { node: "Node.js", workerd: "Cloudflare Workers", deno: "Deno and Deno Deploy", netlify: "Netlify Edge Functions", "edge-light": "Edge Runtime (Vercel Edge Functions, Vercel Edge Middleware, Next.js (Pages Router) Edge API Routes, Next.js (App Router) Edge Route Handlers or Next.js Middleware)" };
    function _n() {
      let e = il();
      return { id: e, prettyName: mm[e] || e, isEdge: ["workerd", "deno", "netlify", "edge-light"].includes(e) };
    }
    var ul = _(require("fs"));
    var wr = _(require("path"));
    function Dn(e) {
      let { runtimeBinaryTarget: t } = e;
      return `Add "${t}" to \`binaryTargets\` in the "schema.prisma" file and run \`prisma generate\` after saving it:

${fm(e)}`;
    }
    function fm(e) {
      let { generator: t, generatorBinaryTargets: r, runtimeBinaryTarget: n } = e, i = { fromEnvVar: null, value: n }, o = [...r, i];
      return Ai({ ...t, binaryTargets: o });
    }
    function Xe(e) {
      let { runtimeBinaryTarget: t } = e;
      return `Prisma Client could not locate the Query Engine for runtime "${t}".`;
    }
    function et(e) {
      let { searchedLocations: t } = e;
      return `The following locations have been searched:
${[...new Set(t)].map((i) => `  ${i}`).join(`
`)}`;
    }
    function ol(e) {
      let { runtimeBinaryTarget: t } = e;
      return `${Xe(e)}

This happened because \`binaryTargets\` have been pinned, but the actual deployment also required "${t}".
${Dn(e)}

${et(e)}`;
    }
    function Nn(e) {
      return `We would appreciate if you could take the time to share some information with us.
Please help us by answering a few questions: https://pris.ly/${e}`;
    }
    function Ln(e) {
      let { errorStack: t } = e;
      return (t == null ? void 0 : t.match(/\/\.next|\/next@|\/next\//)) ? `

We detected that you are using Next.js, learn how to fix this: https://pris.ly/d/engine-not-found-nextjs.` : "";
    }
    function sl(e) {
      let { queryEngineName: t } = e;
      return `${Xe(e)}${Ln(e)}

This is likely caused by a bundler that has not copied "${t}" next to the resulting bundle.
Ensure that "${t}" has been copied next to the bundle or in "${e.expectedLocation}".

${Nn("engine-not-found-bundler-investigation")}

${et(e)}`;
    }
    function al(e) {
      let { runtimeBinaryTarget: t, generatorBinaryTargets: r } = e, n = r.find((i) => i.native);
      return `${Xe(e)}

This happened because Prisma Client was generated for "${(n == null ? void 0 : n.value) ?? "unknown"}", but the actual deployment required "${t}".
${Dn(e)}

${et(e)}`;
    }
    function ll(e) {
      let { queryEngineName: t } = e;
      return `${Xe(e)}${Ln(e)}

This is likely caused by tooling that has not copied "${t}" to the deployment folder.
Ensure that you ran \`prisma generate\` and that "${t}" has been copied to "${e.expectedLocation}".

${Nn("engine-not-found-tooling-investigation")}

${et(e)}`;
    }
    var gm = F("prisma:client:engines:resolveEnginePath");
    var hm = () => new RegExp("runtime[\\\\/]library\\.m?js$");
    async function cl(e, t) {
      var _a2;
      let r = { binary: process.env.PRISMA_QUERY_ENGINE_BINARY, library: process.env.PRISMA_QUERY_ENGINE_LIBRARY }[e] ?? t.prismaPath;
      if (r !== void 0) return r;
      let { enginePath: n, searchedLocations: i } = await ym(e, t);
      if (gm("enginePath", n), n !== void 0 && e === "binary" && yi(n), n !== void 0) return t.prismaPath = n;
      let o = await nt(), s = ((_a2 = t.generator) == null ? void 0 : _a2.binaryTargets) ?? [], a = s.some((d) => d.native), l = !s.some((d) => d.value === o), u = __filename.match(hm()) === null, c = { searchedLocations: i, generatorBinaryTargets: s, generator: t.generator, runtimeBinaryTarget: o, queryEngineName: pl(e, o), expectedLocation: wr.default.relative(process.cwd(), t.dirname), errorStack: new Error().stack }, p;
      throw a && l ? p = al(c) : l ? p = ol(c) : u ? p = sl(c) : p = ll(c), new T(p, t.clientVersion);
    }
    async function ym(engineType, config) {
      var _a2, _b;
      let binaryTarget = await nt(), searchedLocations = [], dirname = eval("__dirname"), searchLocations = [config.dirname, wr.default.resolve(dirname, ".."), ((_b = (_a2 = config.generator) == null ? void 0 : _a2.output) == null ? void 0 : _b.value) ?? dirname, wr.default.resolve(dirname, "../../../.prisma/client"), "/tmp/prisma-engines", config.cwd];
      __filename.includes("resolveEnginePath") && searchLocations.push(ss());
      for (let e of searchLocations) {
        let t = pl(engineType, binaryTarget), r = wr.default.join(e, t);
        if (searchedLocations.push(e), ul.default.existsSync(r)) return { enginePath: r, searchedLocations };
      }
      return { enginePath: void 0, searchedLocations };
    }
    function pl(e, t) {
      return e === "library" ? qr(t, "fs") : `query-engine-${t}${t === "windows" ? ".exe" : ""}`;
    }
    var no = _(Oi());
    function dl(e) {
      return e ? e.replace(/".*"/g, '"X"').replace(/[\s:\[]([+-]?([0-9]*[.])?[0-9]+)/g, (t) => `${t[0]}5`) : "";
    }
    function ml(e) {
      return e.split(`
`).map((t) => t.replace(/^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)\s*/, "").replace(/\+\d+\s*ms$/, "")).join(`
`);
    }
    var fl = _(As());
    function gl({ title: e, user: t = "prisma", repo: r = "prisma", template: n = "bug_report.yml", body: i }) {
      return (0, fl.default)({ user: t, repo: r, template: n, title: e, body: i });
    }
    function hl({ version: e, binaryTarget: t, title: r, description: n, engineVersion: i, database: o, query: s }) {
      var _a2;
      let a = Lo(6e3 - ((s == null ? void 0 : s.length) ?? 0)), l = ml((0, no.default)(a)), u = n ? `# Description
\`\`\`
${n}
\`\`\`` : "", c = (0, no.default)(`Hi Prisma Team! My Prisma Client just crashed. This is the report:
## Versions

| Name            | Version            |
|-----------------|--------------------|
| Node            | ${(_a2 = process.version) == null ? void 0 : _a2.padEnd(19)}| 
| OS              | ${t == null ? void 0 : t.padEnd(19)}|
| Prisma Client   | ${e == null ? void 0 : e.padEnd(19)}|
| Query Engine    | ${i == null ? void 0 : i.padEnd(19)}|
| Database        | ${o == null ? void 0 : o.padEnd(19)}|

${u}

## Logs
\`\`\`
${l}
\`\`\`

## Client Snippet
\`\`\`ts
// PLEASE FILL YOUR CODE SNIPPET HERE
\`\`\`

## Schema
\`\`\`prisma
// PLEASE ADD YOUR SCHEMA HERE IF POSSIBLE
\`\`\`

## Prisma Engine Query
\`\`\`
${s ? dl(s) : ""}
\`\`\`
`), p = gl({ title: r, body: c });
      return `${r}

This is a non-recoverable error which probably happens when the Prisma Query Engine has a panic.

${X(p)}

If you want the Prisma team to look into it, please open the link above \u{1F64F}
To increase the chance of success, please post your schema and a snippet of
how you used Prisma Client in the issue. 
`;
    }
    function Ft({ inlineDatasources: e, overrideDatasources: t, env: r, clientVersion: n }) {
      var _a2, _b;
      let i, o = Object.keys(e)[0], s = (_a2 = e[o]) == null ? void 0 : _a2.url, a = (_b = t[o]) == null ? void 0 : _b.url;
      if (o === void 0 ? i = void 0 : a ? i = a : (s == null ? void 0 : s.value) ? i = s.value : (s == null ? void 0 : s.fromEnvVar) && (i = r[s.fromEnvVar]), (s == null ? void 0 : s.fromEnvVar) !== void 0 && i === void 0) throw new T(`error: Environment variable not found: ${s.fromEnvVar}.`, n);
      if (i === void 0) throw new T("error: Missing URL environment variable, value, or override.", n);
      return i;
    }
    var Fn = class extends Error {
      constructor(t, r) {
        super(t), this.clientVersion = r.clientVersion, this.cause = r.cause;
      }
      get [Symbol.toStringTag]() {
        return this.name;
      }
    };
    var le = class extends Fn {
      constructor(t, r) {
        super(t, r), this.isRetryable = r.isRetryable ?? true;
      }
    };
    function S(e, t) {
      return { ...e, isRetryable: t };
    }
    var Mt = class extends le {
      constructor(r) {
        super("This request must be retried", S(r, true));
        this.name = "ForcedRetryError";
        this.code = "P5001";
      }
    };
    w(Mt, "ForcedRetryError");
    var st = class extends le {
      constructor(r, n) {
        super(r, S(n, false));
        this.name = "InvalidDatasourceError";
        this.code = "P6001";
      }
    };
    w(st, "InvalidDatasourceError");
    var at = class extends le {
      constructor(r, n) {
        super(r, S(n, false));
        this.name = "NotImplementedYetError";
        this.code = "P5004";
      }
    };
    w(at, "NotImplementedYetError");
    var V = class extends le {
      constructor(t, r) {
        super(t, r), this.response = r.response;
        let n = this.response.headers.get("prisma-request-id");
        if (n) {
          let i = `(The request id was: ${n})`;
          this.message = this.message + " " + i;
        }
      }
    };
    var lt = class extends V {
      constructor(r) {
        super("Schema needs to be uploaded", S(r, true));
        this.name = "SchemaMissingError";
        this.code = "P5005";
      }
    };
    w(lt, "SchemaMissingError");
    var io = "This request could not be understood by the server";
    var xr = class extends V {
      constructor(r, n, i) {
        super(n || io, S(r, false));
        this.name = "BadRequestError";
        this.code = "P5000";
        i && (this.code = i);
      }
    };
    w(xr, "BadRequestError");
    var Pr = class extends V {
      constructor(r, n) {
        super("Engine not started: healthcheck timeout", S(r, true));
        this.name = "HealthcheckTimeoutError";
        this.code = "P5013";
        this.logs = n;
      }
    };
    w(Pr, "HealthcheckTimeoutError");
    var vr = class extends V {
      constructor(r, n, i) {
        super(n, S(r, true));
        this.name = "EngineStartupError";
        this.code = "P5014";
        this.logs = i;
      }
    };
    w(vr, "EngineStartupError");
    var Tr = class extends V {
      constructor(r) {
        super("Engine version is not supported", S(r, false));
        this.name = "EngineVersionNotSupportedError";
        this.code = "P5012";
      }
    };
    w(Tr, "EngineVersionNotSupportedError");
    var oo = "Request timed out";
    var Rr = class extends V {
      constructor(r, n = oo) {
        super(n, S(r, false));
        this.name = "GatewayTimeoutError";
        this.code = "P5009";
      }
    };
    w(Rr, "GatewayTimeoutError");
    var bm = "Interactive transaction error";
    var Cr = class extends V {
      constructor(r, n = bm) {
        super(n, S(r, false));
        this.name = "InteractiveTransactionError";
        this.code = "P5015";
      }
    };
    w(Cr, "InteractiveTransactionError");
    var Em = "Request parameters are invalid";
    var Sr = class extends V {
      constructor(r, n = Em) {
        super(n, S(r, false));
        this.name = "InvalidRequestError";
        this.code = "P5011";
      }
    };
    w(Sr, "InvalidRequestError");
    var so = "Requested resource does not exist";
    var Ar = class extends V {
      constructor(r, n = so) {
        super(n, S(r, false));
        this.name = "NotFoundError";
        this.code = "P5003";
      }
    };
    w(Ar, "NotFoundError");
    var ao = "Unknown server error";
    var $t = class extends V {
      constructor(r, n, i) {
        super(n || ao, S(r, true));
        this.name = "ServerError";
        this.code = "P5006";
        this.logs = i;
      }
    };
    w($t, "ServerError");
    var lo = "Unauthorized, check your connection string";
    var Ir = class extends V {
      constructor(r, n = lo) {
        super(n, S(r, false));
        this.name = "UnauthorizedError";
        this.code = "P5007";
      }
    };
    w(Ir, "UnauthorizedError");
    var uo = "Usage exceeded, retry again later";
    var Or = class extends V {
      constructor(r, n = uo) {
        super(n, S(r, true));
        this.name = "UsageExceededError";
        this.code = "P5008";
      }
    };
    w(Or, "UsageExceededError");
    async function wm(e) {
      let t;
      try {
        t = await e.text();
      } catch {
        return { type: "EmptyError" };
      }
      try {
        let r = JSON.parse(t);
        if (typeof r == "string") switch (r) {
          case "InternalDataProxyError":
            return { type: "DataProxyError", body: r };
          default:
            return { type: "UnknownTextError", body: r };
        }
        if (typeof r == "object" && r !== null) {
          if ("is_panic" in r && "message" in r && "error_code" in r) return { type: "QueryEngineError", body: r };
          if ("EngineNotStarted" in r || "InteractiveTransactionMisrouted" in r || "InvalidRequestError" in r) {
            let n = Object.values(r)[0].reason;
            return typeof n == "string" && !["SchemaMissing", "EngineVersionNotSupported"].includes(n) ? { type: "UnknownJsonError", body: r } : { type: "DataProxyError", body: r };
          }
        }
        return { type: "UnknownJsonError", body: r };
      } catch {
        return t === "" ? { type: "EmptyError" } : { type: "UnknownTextError", body: t };
      }
    }
    async function kr(e, t) {
      if (e.ok) return;
      let r = { clientVersion: t, response: e }, n = await wm(e);
      if (n.type === "QueryEngineError") throw new ee(n.body.message, { code: n.body.error_code, clientVersion: t });
      if (n.type === "DataProxyError") {
        if (n.body === "InternalDataProxyError") throw new $t(r, "Internal Data Proxy error");
        if ("EngineNotStarted" in n.body) {
          if (n.body.EngineNotStarted.reason === "SchemaMissing") return new lt(r);
          if (n.body.EngineNotStarted.reason === "EngineVersionNotSupported") throw new Tr(r);
          if ("EngineStartupError" in n.body.EngineNotStarted.reason) {
            let { msg: i, logs: o } = n.body.EngineNotStarted.reason.EngineStartupError;
            throw new vr(r, i, o);
          }
          if ("KnownEngineStartupError" in n.body.EngineNotStarted.reason) {
            let { msg: i, error_code: o } = n.body.EngineNotStarted.reason.KnownEngineStartupError;
            throw new T(i, t, o);
          }
          if ("HealthcheckTimeout" in n.body.EngineNotStarted.reason) {
            let { logs: i } = n.body.EngineNotStarted.reason.HealthcheckTimeout;
            throw new Pr(r, i);
          }
        }
        if ("InteractiveTransactionMisrouted" in n.body) {
          let i = { IDParseError: "Could not parse interactive transaction ID", NoQueryEngineFoundError: "Could not find Query Engine for the specified host and transaction ID", TransactionStartError: "Could not start interactive transaction" };
          throw new Cr(r, i[n.body.InteractiveTransactionMisrouted.reason]);
        }
        if ("InvalidRequestError" in n.body) throw new Sr(r, n.body.InvalidRequestError.reason);
      }
      if (e.status === 401 || e.status === 403) throw new Ir(r, qt(lo, n));
      if (e.status === 404) return new Ar(r, qt(so, n));
      if (e.status === 429) throw new Or(r, qt(uo, n));
      if (e.status === 504) throw new Rr(r, qt(oo, n));
      if (e.status >= 500) throw new $t(r, qt(ao, n));
      if (e.status >= 400) throw new xr(r, qt(io, n));
    }
    function qt(e, t) {
      return t.type === "EmptyError" ? e : `${e}: ${JSON.stringify(t)}`;
    }
    function yl(e) {
      let t = Math.pow(2, e) * 50, r = Math.ceil(Math.random() * t) - Math.ceil(t / 2), n = t + r;
      return new Promise((i) => setTimeout(() => i(n), n));
    }
    var qe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    function bl(e) {
      let t = new TextEncoder().encode(e), r = "", n = t.byteLength, i = n % 3, o = n - i, s, a, l, u, c;
      for (let p = 0; p < o; p = p + 3) c = t[p] << 16 | t[p + 1] << 8 | t[p + 2], s = (c & 16515072) >> 18, a = (c & 258048) >> 12, l = (c & 4032) >> 6, u = c & 63, r += qe[s] + qe[a] + qe[l] + qe[u];
      return i == 1 ? (c = t[o], s = (c & 252) >> 2, a = (c & 3) << 4, r += qe[s] + qe[a] + "==") : i == 2 && (c = t[o] << 8 | t[o + 1], s = (c & 64512) >> 10, a = (c & 1008) >> 4, l = (c & 15) << 2, r += qe[s] + qe[a] + qe[l] + "="), r;
    }
    function El(e) {
      var _a2;
      if (!!((_a2 = e.generator) == null ? void 0 : _a2.previewFeatures.some((r) => r.toLowerCase().includes("metrics")))) throw new T("The `metrics` preview feature is not yet available with Accelerate.\nPlease remove `metrics` from the `previewFeatures` in your schema.\n\nMore information about Accelerate: https://pris.ly/d/accelerate", e.clientVersion);
    }
    function xm(e) {
      return e[0] * 1e3 + e[1] / 1e6;
    }
    function co(e) {
      return new Date(xm(e));
    }
    var wl = { "@prisma/debug": "workspace:*", "@prisma/engines-version": "6.4.0-29.a9055b89e58b4b5bfb59600785423b1db3d0e75d", "@prisma/fetch-engine": "workspace:*", "@prisma/get-platform": "workspace:*" };
    var _r = class extends le {
      constructor(r, n) {
        super(`Cannot fetch data from service:
${r}`, S(n, true));
        this.name = "RequestError";
        this.code = "P5010";
      }
    };
    w(_r, "RequestError");
    async function ut(e, t, r = (n) => n) {
      let { clientVersion: n, ...i } = t, o = r(fetch);
      try {
        return await o(e, i);
      } catch (s) {
        let a = s.message ?? "Unknown error";
        throw new _r(a, { clientVersion: n, cause: s });
      }
    }
    var vm = /^[1-9][0-9]*\.[0-9]+\.[0-9]+$/;
    var xl = F("prisma:client:dataproxyEngine");
    async function Tm(e, t) {
      let r = wl["@prisma/engines-version"], n = t.clientVersion ?? "unknown";
      if (process.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION) return process.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION;
      if (e.includes("accelerate") && n !== "0.0.0" && n !== "in-memory") return n;
      let [i, o] = (n == null ? void 0 : n.split("-")) ?? [];
      if (o === void 0 && vm.test(i)) return i;
      if (o !== void 0 || n === "0.0.0" || n === "in-memory") {
        if (e.startsWith("localhost") || e.startsWith("127.0.0.1")) return "0.0.0";
        let [s] = r.split("-") ?? [], [a, l, u] = s.split("."), c = Rm(`<=${a}.${l}.${u}`), p = await ut(c, { clientVersion: n });
        if (!p.ok) throw new Error(`Failed to fetch stable Prisma version, unpkg.com status ${p.status} ${p.statusText}, response body: ${await p.text() || "<empty body>"}`);
        let d = await p.text();
        xl("length of body fetched from unpkg.com", d.length);
        let f;
        try {
          f = JSON.parse(d);
        } catch (g) {
          throw console.error("JSON.parse error: body fetched from unpkg.com: ", d), g;
        }
        return f.version;
      }
      throw new at("Only `major.minor.patch` versions are supported by Accelerate.", { clientVersion: n });
    }
    async function Pl(e, t) {
      let r = await Tm(e, t);
      return xl("version", r), r;
    }
    function Rm(e) {
      return encodeURI(`https://unpkg.com/prisma@${e}/package.json`);
    }
    var vl = 3;
    var Mn = F("prisma:client:dataproxyEngine");
    var po = class {
      constructor({ apiKey: t, tracingHelper: r, logLevel: n, logQueries: i, engineHash: o }) {
        this.apiKey = t, this.tracingHelper = r, this.logLevel = n, this.logQueries = i, this.engineHash = o;
      }
      build({ traceparent: t, interactiveTransaction: r } = {}) {
        let n = { Authorization: `Bearer ${this.apiKey}`, "Prisma-Engine-Hash": this.engineHash };
        this.tracingHelper.isEnabled() && (n.traceparent = t ?? this.tracingHelper.getTraceParent()), r && (n["X-transaction-id"] = r.id);
        let i = this.buildCaptureSettings();
        return i.length > 0 && (n["X-capture-telemetry"] = i.join(", ")), n;
      }
      buildCaptureSettings() {
        let t = [];
        return this.tracingHelper.isEnabled() && t.push("tracing"), this.logLevel && t.push(this.logLevel), this.logQueries && t.push("query"), t;
      }
    };
    var Dr = class {
      constructor(t) {
        this.name = "DataProxyEngine";
        El(t), this.config = t, this.env = { ...t.env, ...typeof process < "u" ? process.env : {} }, this.inlineSchema = bl(t.inlineSchema), this.inlineDatasources = t.inlineDatasources, this.inlineSchemaHash = t.inlineSchemaHash, this.clientVersion = t.clientVersion, this.engineHash = t.engineVersion, this.logEmitter = t.logEmitter, this.tracingHelper = t.tracingHelper;
      }
      apiKey() {
        return this.headerBuilder.apiKey;
      }
      version() {
        return this.engineHash;
      }
      async start() {
        this.startPromise !== void 0 && await this.startPromise, this.startPromise = (async () => {
          let [t, r] = this.extractHostAndApiKey();
          this.host = t, this.headerBuilder = new po({ apiKey: r, tracingHelper: this.tracingHelper, logLevel: this.config.logLevel, logQueries: this.config.logQueries, engineHash: this.engineHash }), this.remoteClientVersion = await Pl(t, this.config), Mn("host", this.host);
        })(), await this.startPromise;
      }
      async stop() {
      }
      propagateResponseExtensions(t) {
        var _a2, _b;
        ((_a2 = t == null ? void 0 : t.logs) == null ? void 0 : _a2.length) && t.logs.forEach((r) => {
          switch (r.level) {
            case "debug":
            case "trace":
              Mn(r);
              break;
            case "error":
            case "warn":
            case "info": {
              this.logEmitter.emit(r.level, { timestamp: co(r.timestamp), message: r.attributes.message ?? "", target: r.target });
              break;
            }
            case "query": {
              this.logEmitter.emit("query", { query: r.attributes.query ?? "", timestamp: co(r.timestamp), duration: r.attributes.duration_ms ?? 0, params: r.attributes.params ?? "", target: r.target });
              break;
            }
            default:
              r.level;
          }
        }), ((_b = t == null ? void 0 : t.traces) == null ? void 0 : _b.length) && this.tracingHelper.dispatchEngineSpans(t.traces);
      }
      onBeforeExit() {
        throw new Error('"beforeExit" hook is not applicable to the remote query engine');
      }
      async url(t) {
        return await this.start(), `https://${this.host}/${this.remoteClientVersion}/${this.inlineSchemaHash}/${t}`;
      }
      async uploadSchema() {
        let t = { name: "schemaUpload", internal: true };
        return this.tracingHelper.runInChildSpan(t, async () => {
          let r = await ut(await this.url("schema"), { method: "PUT", headers: this.headerBuilder.build(), body: this.inlineSchema, clientVersion: this.clientVersion });
          r.ok || Mn("schema response status", r.status);
          let n = await kr(r, this.clientVersion);
          if (n) throw this.logEmitter.emit("warn", { message: `Error while uploading schema: ${n.message}`, timestamp: /* @__PURE__ */ new Date(), target: "" }), n;
          this.logEmitter.emit("info", { message: `Schema (re)uploaded (hash: ${this.inlineSchemaHash})`, timestamp: /* @__PURE__ */ new Date(), target: "" });
        });
      }
      request(t, { traceparent: r, interactiveTransaction: n, customDataProxyFetch: i }) {
        return this.requestInternal({ body: t, traceparent: r, interactiveTransaction: n, customDataProxyFetch: i });
      }
      async requestBatch(t, { traceparent: r, transaction: n, customDataProxyFetch: i }) {
        let o = (n == null ? void 0 : n.kind) === "itx" ? n.options : void 0, s = Dt(t, n);
        return (await this.requestInternal({ body: s, customDataProxyFetch: i, interactiveTransaction: o, traceparent: r })).map((l) => (l.extensions && this.propagateResponseExtensions(l.extensions), "errors" in l ? this.convertProtocolErrorsToClientError(l.errors) : l));
      }
      requestInternal({ body: t, traceparent: r, customDataProxyFetch: n, interactiveTransaction: i }) {
        return this.withRetry({ actionGerund: "querying", callback: async ({ logHttpCall: o }) => {
          let s = i ? `${i.payload.endpoint}/graphql` : await this.url("graphql");
          o(s);
          let a = await ut(s, { method: "POST", headers: this.headerBuilder.build({ traceparent: r, interactiveTransaction: i }), body: JSON.stringify(t), clientVersion: this.clientVersion }, n);
          a.ok || Mn("graphql response status", a.status), await this.handleError(await kr(a, this.clientVersion));
          let l = await a.json();
          if (l.extensions && this.propagateResponseExtensions(l.extensions), "errors" in l) throw this.convertProtocolErrorsToClientError(l.errors);
          return "batchResult" in l ? l.batchResult : l;
        } });
      }
      async transaction(t, r, n) {
        let i = { start: "starting", commit: "committing", rollback: "rolling back" };
        return this.withRetry({ actionGerund: `${i[t]} transaction`, callback: async ({ logHttpCall: o }) => {
          if (t === "start") {
            let s = JSON.stringify({ max_wait: n.maxWait, timeout: n.timeout, isolation_level: n.isolationLevel }), a = await this.url("transaction/start");
            o(a);
            let l = await ut(a, { method: "POST", headers: this.headerBuilder.build({ traceparent: r.traceparent }), body: s, clientVersion: this.clientVersion });
            await this.handleError(await kr(l, this.clientVersion));
            let u = await l.json(), { extensions: c } = u;
            c && this.propagateResponseExtensions(c);
            let p = u.id, d = u["data-proxy"].endpoint;
            return { id: p, payload: { endpoint: d } };
          } else {
            let s = `${n.payload.endpoint}/${t}`;
            o(s);
            let a = await ut(s, { method: "POST", headers: this.headerBuilder.build({ traceparent: r.traceparent }), clientVersion: this.clientVersion });
            await this.handleError(await kr(a, this.clientVersion));
            let l = await a.json(), { extensions: u } = l;
            u && this.propagateResponseExtensions(u);
            return;
          }
        } });
      }
      extractHostAndApiKey() {
        let t = { clientVersion: this.clientVersion }, r = Object.keys(this.inlineDatasources)[0], n = Ft({ inlineDatasources: this.inlineDatasources, overrideDatasources: this.config.overrideDatasources, clientVersion: this.clientVersion, env: this.env }), i;
        try {
          i = new URL(n);
        } catch {
          throw new st(`Error validating datasource \`${r}\`: the URL must start with the protocol \`prisma://\``, t);
        }
        let { protocol: o, host: s, searchParams: a } = i;
        if (o !== "prisma:" && o !== Yr) throw new st(`Error validating datasource \`${r}\`: the URL must start with the protocol \`prisma://\``, t);
        let l = a.get("api_key");
        if (l === null || l.length < 1) throw new st(`Error validating datasource \`${r}\`: the URL must contain a valid API key`, t);
        return [s, l];
      }
      metrics() {
        throw new at("Metrics are not yet supported for Accelerate", { clientVersion: this.clientVersion });
      }
      async withRetry(t) {
        for (let r = 0; ; r++) {
          let n = (i) => {
            this.logEmitter.emit("info", { message: `Calling ${i} (n=${r})`, timestamp: /* @__PURE__ */ new Date(), target: "" });
          };
          try {
            return await t.callback({ logHttpCall: n });
          } catch (i) {
            if (!(i instanceof le) || !i.isRetryable) throw i;
            if (r >= vl) throw i instanceof Mt ? i.cause : i;
            this.logEmitter.emit("warn", { message: `Attempt ${r + 1}/${vl} failed for ${t.actionGerund}: ${i.message ?? "(unknown)"}`, timestamp: /* @__PURE__ */ new Date(), target: "" });
            let o = await yl(r);
            this.logEmitter.emit("warn", { message: `Retrying after ${o}ms`, timestamp: /* @__PURE__ */ new Date(), target: "" });
          }
        }
      }
      async handleError(t) {
        if (t instanceof lt) throw await this.uploadSchema(), new Mt({ clientVersion: this.clientVersion, cause: t });
        if (t) throw t;
      }
      convertProtocolErrorsToClientError(t) {
        return t.length === 1 ? Nt(t[0], this.config.clientVersion, this.config.activeProvider) : new B(JSON.stringify(t), { clientVersion: this.config.clientVersion });
      }
      applyPendingMigrations() {
        throw new Error("Method not implemented.");
      }
    };
    function Tl(e) {
      if ((e == null ? void 0 : e.kind) === "itx") return e.options.id;
    }
    var fo = _(require("os"));
    var Rl = _(require("path"));
    var mo = Symbol("PrismaLibraryEngineCache");
    function Cm() {
      let e = globalThis;
      return e[mo] === void 0 && (e[mo] = {}), e[mo];
    }
    function Sm(e) {
      let t = Cm();
      if (t[e] !== void 0) return t[e];
      let r = Rl.default.toNamespacedPath(e), n = { exports: {} }, i = 0;
      return process.platform !== "win32" && (i = fo.default.constants.dlopen.RTLD_LAZY | fo.default.constants.dlopen.RTLD_DEEPBIND), process.dlopen(n, r, i), t[e] = n.exports, n.exports;
    }
    var Cl = { async loadLibrary(e) {
      let t = await oi(), r = await cl("library", e);
      try {
        return e.tracingHelper.runInChildSpan({ name: "loadLibrary", internal: true }, () => Sm(r));
      } catch (n) {
        let i = bi({ e: n, platformInfo: t, id: r });
        throw new T(i, e.clientVersion);
      }
    } };
    var go;
    var Sl = { async loadLibrary(e) {
      let { clientVersion: t, adapter: r, engineWasm: n } = e;
      if (r === void 0) throw new T(`The \`adapter\` option for \`PrismaClient\` is required in this context (${_n().prettyName})`, t);
      if (n === void 0) throw new T("WASM engine was unexpectedly `undefined`", t);
      go === void 0 && (go = (async () => {
        let o = n.getRuntime(), s = await n.getQueryEngineWasmModule();
        if (s == null) throw new T("The loaded wasm module was unexpectedly `undefined` or `null` once loaded", t);
        let a = { "./query_engine_bg.js": o }, l = new WebAssembly.Instance(s, a);
        return o.__wbg_set_wasm(l.exports), o.QueryEngine;
      })());
      let i = await go;
      return { debugPanic() {
        return Promise.reject("{}");
      }, dmmf() {
        return Promise.resolve("{}");
      }, version() {
        return { commit: "unknown", version: "unknown" };
      }, QueryEngine: i };
    } };
    var Am = "P2036";
    var Ie = F("prisma:client:libraryEngine");
    function Im(e) {
      return e.item_type === "query" && "query" in e;
    }
    function Om(e) {
      return "level" in e ? e.level === "error" && e.message === "PANIC" : false;
    }
    var Al = [...Xn, "native"];
    var km = 0xffffffffffffffffn;
    var ho = 1n;
    function _m() {
      let e = ho++;
      return ho > km && (ho = 1n), e;
    }
    var Vt = class {
      constructor(t, r) {
        var _a2;
        this.name = "LibraryEngine";
        this.libraryLoader = r ?? Cl, t.engineWasm !== void 0 && (this.libraryLoader = r ?? Sl), this.config = t, this.libraryStarted = false, this.logQueries = t.logQueries ?? false, this.logLevel = t.logLevel ?? "error", this.logEmitter = t.logEmitter, this.datamodel = t.inlineSchema, this.tracingHelper = t.tracingHelper, t.enableDebugLogs && (this.logLevel = "debug");
        let n = Object.keys(t.overrideDatasources)[0], i = (_a2 = t.overrideDatasources[n]) == null ? void 0 : _a2.url;
        n !== void 0 && i !== void 0 && (this.datasourceOverrides = { [n]: i }), this.libraryInstantiationPromise = this.instantiateLibrary();
      }
      wrapEngine(t) {
        var _a2, _b, _c2;
        return { applyPendingMigrations: (_a2 = t.applyPendingMigrations) == null ? void 0 : _a2.bind(t), commitTransaction: this.withRequestId(t.commitTransaction.bind(t)), connect: this.withRequestId(t.connect.bind(t)), disconnect: this.withRequestId(t.disconnect.bind(t)), metrics: (_b = t.metrics) == null ? void 0 : _b.bind(t), query: this.withRequestId(t.query.bind(t)), rollbackTransaction: this.withRequestId(t.rollbackTransaction.bind(t)), sdlSchema: (_c2 = t.sdlSchema) == null ? void 0 : _c2.bind(t), startTransaction: this.withRequestId(t.startTransaction.bind(t)), trace: t.trace.bind(t) };
      }
      withRequestId(t) {
        return async (...r) => {
          var _a2;
          let n = _m().toString();
          try {
            return await t(...r, n);
          } finally {
            if (this.tracingHelper.isEnabled()) {
              let i = await ((_a2 = this.engine) == null ? void 0 : _a2.trace(n));
              if (i) {
                let o = JSON.parse(i);
                this.tracingHelper.dispatchEngineSpans(o.spans);
              }
            }
          }
        };
      }
      async applyPendingMigrations() {
        throw new Error("Cannot call this method from this type of engine instance");
      }
      async transaction(t, r, n) {
        var _a2, _b, _c2;
        await this.start();
        let i = JSON.stringify(r), o;
        if (t === "start") {
          let a = JSON.stringify({ max_wait: n.maxWait, timeout: n.timeout, isolation_level: n.isolationLevel });
          o = await ((_a2 = this.engine) == null ? void 0 : _a2.startTransaction(a, i));
        } else t === "commit" ? o = await ((_b = this.engine) == null ? void 0 : _b.commitTransaction(n.id, i)) : t === "rollback" && (o = await ((_c2 = this.engine) == null ? void 0 : _c2.rollbackTransaction(n.id, i)));
        let s = this.parseEngineResponse(o);
        if (Dm(s)) {
          let a = this.getExternalAdapterError(s);
          throw a ? a.error : new ee(s.message, { code: s.error_code, clientVersion: this.config.clientVersion, meta: s.meta });
        } else if (typeof s.message == "string") throw new B(s.message, { clientVersion: this.config.clientVersion });
        return s;
      }
      async instantiateLibrary() {
        if (Ie("internalSetup"), this.libraryInstantiationPromise) return this.libraryInstantiationPromise;
        Zn(), this.binaryTarget = await this.getCurrentBinaryTarget(), await this.tracingHelper.runInChildSpan("load_engine", () => this.loadEngine()), this.version();
      }
      async getCurrentBinaryTarget() {
        {
          if (this.binaryTarget) return this.binaryTarget;
          let t = await this.tracingHelper.runInChildSpan("detect_platform", () => nt());
          if (!Al.includes(t)) throw new T(`Unknown ${de("PRISMA_QUERY_ENGINE_LIBRARY")} ${de(K(t))}. Possible binaryTargets: ${Ve(Al.join(", "))} or a path to the query engine library.
You may have to run ${Ve("prisma generate")} for your changes to take effect.`, this.config.clientVersion);
          return t;
        }
      }
      parseEngineResponse(t) {
        if (!t) throw new B("Response from the Engine was empty", { clientVersion: this.config.clientVersion });
        try {
          return JSON.parse(t);
        } catch {
          throw new B("Unable to JSON.parse response from engine", { clientVersion: this.config.clientVersion });
        }
      }
      async loadEngine() {
        if (!this.engine) {
          this.QueryEngineConstructor || (this.library = await this.libraryLoader.loadLibrary(this.config), this.QueryEngineConstructor = this.library.QueryEngine);
          try {
            let t = new WeakRef(this), { adapter: r } = this.config;
            r && Ie("Using driver adapter: %O", r), this.engine = this.wrapEngine(new this.QueryEngineConstructor({ datamodel: this.datamodel, env: process.env, logQueries: this.config.logQueries ?? false, ignoreEnvVarErrors: true, datasourceOverrides: this.datasourceOverrides ?? {}, logLevel: this.logLevel, configDir: this.config.cwd, engineProtocol: "json", enableTracing: this.tracingHelper.isEnabled() }, (n) => {
              var _a2;
              (_a2 = t.deref()) == null ? void 0 : _a2.logger(n);
            }, r));
          } catch (t) {
            let r = t, n = this.parseInitError(r.message);
            throw typeof n == "string" ? r : new T(n.message, this.config.clientVersion, n.error_code);
          }
        }
      }
      logger(t) {
        let r = this.parseEngineResponse(t);
        r && (r.level = (r == null ? void 0 : r.level.toLowerCase()) ?? "unknown", Im(r) ? this.logEmitter.emit("query", { timestamp: /* @__PURE__ */ new Date(), query: r.query, params: r.params, duration: Number(r.duration_ms), target: r.module_path }) : Om(r) ? this.loggerRustPanic = new ce(yo(this, `${r.message}: ${r.reason} in ${r.file}:${r.line}:${r.column}`), this.config.clientVersion) : this.logEmitter.emit(r.level, { timestamp: /* @__PURE__ */ new Date(), message: r.message, target: r.module_path }));
      }
      parseInitError(t) {
        try {
          return JSON.parse(t);
        } catch {
        }
        return t;
      }
      parseRequestError(t) {
        try {
          return JSON.parse(t);
        } catch {
        }
        return t;
      }
      onBeforeExit() {
        throw new Error('"beforeExit" hook is not applicable to the library engine since Prisma 5.0.0, it is only relevant and implemented for the binary engine. Please add your event listener to the `process` object directly instead.');
      }
      async start() {
        if (await this.libraryInstantiationPromise, await this.libraryStoppingPromise, this.libraryStartingPromise) return Ie(`library already starting, this.libraryStarted: ${this.libraryStarted}`), this.libraryStartingPromise;
        if (this.libraryStarted) return;
        let t = async () => {
          var _a2;
          Ie("library starting");
          try {
            let r = { traceparent: this.tracingHelper.getTraceParent() };
            await ((_a2 = this.engine) == null ? void 0 : _a2.connect(JSON.stringify(r))), this.libraryStarted = true, Ie("library started");
          } catch (r) {
            let n = this.parseInitError(r.message);
            throw typeof n == "string" ? r : new T(n.message, this.config.clientVersion, n.error_code);
          } finally {
            this.libraryStartingPromise = void 0;
          }
        };
        return this.libraryStartingPromise = this.tracingHelper.runInChildSpan("connect", t), this.libraryStartingPromise;
      }
      async stop() {
        if (await this.libraryStartingPromise, await this.executingQueryPromise, this.libraryStoppingPromise) return Ie("library is already stopping"), this.libraryStoppingPromise;
        if (!this.libraryStarted) return;
        let t = async () => {
          var _a2;
          await new Promise((n) => setTimeout(n, 5)), Ie("library stopping");
          let r = { traceparent: this.tracingHelper.getTraceParent() };
          await ((_a2 = this.engine) == null ? void 0 : _a2.disconnect(JSON.stringify(r))), this.libraryStarted = false, this.libraryStoppingPromise = void 0, Ie("library stopped");
        };
        return this.libraryStoppingPromise = this.tracingHelper.runInChildSpan("disconnect", t), this.libraryStoppingPromise;
      }
      version() {
        var _a2, _b;
        return this.versionInfo = (_a2 = this.library) == null ? void 0 : _a2.version(), ((_b = this.versionInfo) == null ? void 0 : _b.version) ?? "unknown";
      }
      debugPanic(t) {
        var _a2;
        return (_a2 = this.library) == null ? void 0 : _a2.debugPanic(t);
      }
      async request(t, { traceparent: r, interactiveTransaction: n }) {
        var _a2, _b;
        Ie(`sending request, this.libraryStarted: ${this.libraryStarted}`);
        let i = JSON.stringify({ traceparent: r }), o = JSON.stringify(t);
        try {
          await this.start(), this.executingQueryPromise = (_a2 = this.engine) == null ? void 0 : _a2.query(o, i, n == null ? void 0 : n.id), this.lastQuery = o;
          let s = this.parseEngineResponse(await this.executingQueryPromise);
          if (s.errors) throw s.errors.length === 1 ? this.buildQueryError(s.errors[0]) : new B(JSON.stringify(s.errors), { clientVersion: this.config.clientVersion });
          if (this.loggerRustPanic) throw this.loggerRustPanic;
          return { data: s };
        } catch (s) {
          if (s instanceof T) throw s;
          if (s.code === "GenericFailure" && ((_b = s.message) == null ? void 0 : _b.startsWith("PANIC:"))) throw new ce(yo(this, s.message), this.config.clientVersion);
          let a = this.parseRequestError(s.message);
          throw typeof a == "string" ? s : new B(`${a.message}
${a.backtrace}`, { clientVersion: this.config.clientVersion });
        }
      }
      async requestBatch(t, { transaction: r, traceparent: n }) {
        Ie("requestBatch");
        let i = Dt(t, r);
        await this.start(), this.lastQuery = JSON.stringify(i), this.executingQueryPromise = this.engine.query(this.lastQuery, JSON.stringify({ traceparent: n }), Tl(r));
        let o = await this.executingQueryPromise, s = this.parseEngineResponse(o);
        if (s.errors) throw s.errors.length === 1 ? this.buildQueryError(s.errors[0]) : new B(JSON.stringify(s.errors), { clientVersion: this.config.clientVersion });
        let { batchResult: a, errors: l } = s;
        if (Array.isArray(a)) return a.map((u) => u.errors && u.errors.length > 0 ? this.loggerRustPanic ?? this.buildQueryError(u.errors[0]) : { data: u });
        throw l && l.length === 1 ? new Error(l[0].error) : new Error(JSON.stringify(s));
      }
      buildQueryError(t) {
        if (t.user_facing_error.is_panic) return new ce(yo(this, t.user_facing_error.message), this.config.clientVersion);
        let r = this.getExternalAdapterError(t.user_facing_error);
        return r ? r.error : Nt(t, this.config.clientVersion, this.config.activeProvider);
      }
      getExternalAdapterError(t) {
        var _a2;
        if (t.error_code === Am && this.config.adapter) {
          let r = (_a2 = t.meta) == null ? void 0 : _a2.id;
          zr(typeof r == "number", "Malformed external JS error received from the engine");
          let n = this.config.adapter.errorRegistry.consumeError(r);
          return zr(n, "External error with reported id was not registered"), n;
        }
      }
      async metrics(t) {
        await this.start();
        let r = await this.engine.metrics(JSON.stringify(t));
        return t.format === "prometheus" ? r : this.parseEngineResponse(r);
      }
    };
    function Dm(e) {
      return typeof e == "object" && e !== null && e.error_code !== void 0;
    }
    function yo(e, t) {
      var _a2;
      return hl({ binaryTarget: e.binaryTarget, title: t, version: e.config.clientVersion, engineVersion: (_a2 = e.versionInfo) == null ? void 0 : _a2.commit, database: e.config.activeProvider, query: e.lastQuery });
    }
    function Il({ copyEngine: e = true }, t) {
      let r;
      try {
        r = Ft({ inlineDatasources: t.inlineDatasources, overrideDatasources: t.overrideDatasources, env: { ...t.env, ...process.env }, clientVersion: t.clientVersion });
      } catch {
      }
      let n = !!((r == null ? void 0 : r.startsWith("prisma://")) || Ti(r));
      e && n && nr("recommend--no-engine", "In production, we recommend using `prisma generate --no-engine` (See: `prisma generate --help`)");
      let i = ht(t.generator), o = n || !e, s = !!t.adapter, a = i === "library", l = i === "binary", u = i === "client";
      if (o && s || s && false) {
        let c;
        throw e ? (r == null ? void 0 : r.startsWith("prisma://")) ? c = ["Prisma Client was configured to use the `adapter` option but the URL was a `prisma://` URL.", "Please either use the `prisma://` URL or remove the `adapter` from the Prisma Client constructor."] : c = ["Prisma Client was configured to use both the `adapter` and Accelerate, please chose one."] : c = ["Prisma Client was configured to use the `adapter` option but `prisma generate` was run with `--no-engine`.", "Please run `prisma generate` without `--no-engine` to be able to use Prisma Client with the adapter."], new te(c.join(`
`), { clientVersion: t.clientVersion });
      }
      return o ? new Dr(t) : a ? new Vt(t) : new Vt(t);
    }
    function $n({ generator: e }) {
      return (e == null ? void 0 : e.previewFeatures) ?? [];
    }
    var Ol = (e) => ({ command: e });
    var kl = (e) => e.strings.reduce((t, r, n) => `${t}@P${n}${r}`);
    function jt(e) {
      try {
        return _l(e, "fast");
      } catch {
        return _l(e, "slow");
      }
    }
    function _l(e, t) {
      return JSON.stringify(e.map((r) => Nl(r, t)));
    }
    function Nl(e, t) {
      if (Array.isArray(e)) return e.map((r) => Nl(r, t));
      if (typeof e == "bigint") return { prisma__type: "bigint", prisma__value: e.toString() };
      if (Pt(e)) return { prisma__type: "date", prisma__value: e.toJSON() };
      if (Te.isDecimal(e)) return { prisma__type: "decimal", prisma__value: e.toJSON() };
      if (Buffer.isBuffer(e)) return { prisma__type: "bytes", prisma__value: e.toString("base64") };
      if (Nm(e)) return { prisma__type: "bytes", prisma__value: Buffer.from(e).toString("base64") };
      if (ArrayBuffer.isView(e)) {
        let { buffer: r, byteOffset: n, byteLength: i } = e;
        return { prisma__type: "bytes", prisma__value: Buffer.from(r, n, i).toString("base64") };
      }
      return typeof e == "object" && t === "slow" ? Ll(e) : e;
    }
    function Nm(e) {
      return e instanceof ArrayBuffer || e instanceof SharedArrayBuffer ? true : typeof e == "object" && e !== null ? e[Symbol.toStringTag] === "ArrayBuffer" || e[Symbol.toStringTag] === "SharedArrayBuffer" : false;
    }
    function Ll(e) {
      if (typeof e != "object" || e === null) return e;
      if (typeof e.toJSON == "function") return e.toJSON();
      if (Array.isArray(e)) return e.map(Dl);
      let t = {};
      for (let r of Object.keys(e)) t[r] = Dl(e[r]);
      return t;
    }
    function Dl(e) {
      return typeof e == "bigint" ? e.toString() : Ll(e);
    }
    var Lm = ["$connect", "$disconnect", "$on", "$transaction", "$use", "$extends"];
    var Fl = Lm;
    var Fm = /^(\s*alter\s)/i;
    var Ml = F("prisma:client");
    function bo(e, t, r, n) {
      if (!(e !== "postgresql" && e !== "cockroachdb") && r.length > 0 && Fm.exec(t)) throw new Error(`Running ALTER using ${n} is not supported
Using the example below you can still execute your query with Prisma, but please note that it is vulnerable to SQL injection attacks and requires you to take care of input sanitization.

Example:
  await prisma.$executeRawUnsafe(\`ALTER USER prisma WITH PASSWORD '\${password}'\`)

More Information: https://pris.ly/d/execute-raw
`);
    }
    var Eo = ({ clientMethod: e, activeProvider: t }) => (r) => {
      let n = "", i;
      if (Ca(r)) n = r.sql, i = { values: jt(r.values), __prismaRawParameters__: true };
      else if (Array.isArray(r)) {
        let [o, ...s] = r;
        n = o, i = { values: jt(s || []), __prismaRawParameters__: true };
      } else switch (t) {
        case "sqlite":
        case "mysql": {
          n = r.sql, i = { values: jt(r.values), __prismaRawParameters__: true };
          break;
        }
        case "cockroachdb":
        case "postgresql":
        case "postgres": {
          n = r.text, i = { values: jt(r.values), __prismaRawParameters__: true };
          break;
        }
        case "sqlserver": {
          n = kl(r), i = { values: jt(r.values), __prismaRawParameters__: true };
          break;
        }
        default:
          throw new Error(`The ${t} provider does not support ${e}`);
      }
      return (i == null ? void 0 : i.values) ? Ml(`prisma.${e}(${n}, ${i.values})`) : Ml(`prisma.${e}(${n})`), { query: n, parameters: i };
    };
    var $l = { requestArgsToMiddlewareArgs(e) {
      return [e.strings, ...e.values];
    }, middlewareArgsToRequestArgs(e) {
      let [t, ...r] = e;
      return new ae(t, r);
    } };
    var ql = { requestArgsToMiddlewareArgs(e) {
      return [e];
    }, middlewareArgsToRequestArgs(e) {
      return e[0];
    } };
    function wo(e) {
      return function(r, n) {
        let i, o = (s = e) => {
          try {
            return s === void 0 || (s == null ? void 0 : s.kind) === "itx" ? i ??= Vl(r(s)) : Vl(r(s));
          } catch (a) {
            return Promise.reject(a);
          }
        };
        return { get spec() {
          return n;
        }, then(s, a) {
          return o().then(s, a);
        }, catch(s) {
          return o().catch(s);
        }, finally(s) {
          return o().finally(s);
        }, requestTransaction(s) {
          let a = o(s);
          return a.requestTransaction ? a.requestTransaction(s) : a;
        }, [Symbol.toStringTag]: "PrismaPromise" };
      };
    }
    function Vl(e) {
      return typeof e.then == "function" ? e : Promise.resolve(e);
    }
    var Mm = mi.split(".")[0];
    var $m = { isEnabled() {
      return false;
    }, getTraceParent() {
      return "00-10-10-00";
    }, dispatchEngineSpans() {
    }, getActiveContext() {
    }, runInChildSpan(e, t) {
      return t();
    } };
    var xo = class {
      isEnabled() {
        return this.getGlobalTracingHelper().isEnabled();
      }
      getTraceParent(t) {
        return this.getGlobalTracingHelper().getTraceParent(t);
      }
      dispatchEngineSpans(t) {
        return this.getGlobalTracingHelper().dispatchEngineSpans(t);
      }
      getActiveContext() {
        return this.getGlobalTracingHelper().getActiveContext();
      }
      runInChildSpan(t, r) {
        return this.getGlobalTracingHelper().runInChildSpan(t, r);
      }
      getGlobalTracingHelper() {
        let t = globalThis[`V${Mm}_PRISMA_INSTRUMENTATION`], r = globalThis.PRISMA_INSTRUMENTATION;
        return (t == null ? void 0 : t.helper) ?? (r == null ? void 0 : r.helper) ?? $m;
      }
    };
    function jl() {
      return new xo();
    }
    function Bl(e, t = () => {
    }) {
      let r, n = new Promise((i) => r = i);
      return { then(i) {
        return --e === 0 && r(t()), i == null ? void 0 : i(n);
      } };
    }
    function Ul(e) {
      return typeof e == "string" ? e : e.reduce((t, r) => {
        let n = typeof r == "string" ? r : r.level;
        return n === "query" ? t : t && (r === "info" || t === "info") ? "info" : n;
      }, void 0);
    }
    var qn = class {
      constructor() {
        this._middlewares = [];
      }
      use(t) {
        this._middlewares.push(t);
      }
      get(t) {
        return this._middlewares[t];
      }
      has(t) {
        return !!this._middlewares[t];
      }
      length() {
        return this._middlewares.length;
      }
    };
    var Ql = _(Oi());
    function Vn(e) {
      return typeof e.batchRequestIdx == "number";
    }
    function Gl(e) {
      if (e.action !== "findUnique" && e.action !== "findUniqueOrThrow") return;
      let t = [];
      return e.modelName && t.push(e.modelName), e.query.arguments && t.push(Po(e.query.arguments)), t.push(Po(e.query.selection)), t.join("");
    }
    function Po(e) {
      return `(${Object.keys(e).sort().map((r) => {
        let n = e[r];
        return typeof n == "object" && n !== null ? `(${r} ${Po(n)})` : r;
      }).join(" ")})`;
    }
    var qm = { aggregate: false, aggregateRaw: false, createMany: true, createManyAndReturn: true, createOne: true, deleteMany: true, deleteOne: true, executeRaw: true, findFirst: false, findFirstOrThrow: false, findMany: false, findRaw: false, findUnique: false, findUniqueOrThrow: false, groupBy: false, queryRaw: false, runCommandRaw: true, updateMany: true, updateManyAndReturn: true, updateOne: true, upsertOne: true };
    function vo(e) {
      return qm[e];
    }
    var jn = class {
      constructor(t) {
        this.options = t;
        this.tickActive = false;
        this.batches = {};
      }
      request(t) {
        let r = this.options.batchBy(t);
        return r ? (this.batches[r] || (this.batches[r] = [], this.tickActive || (this.tickActive = true, process.nextTick(() => {
          this.dispatchBatches(), this.tickActive = false;
        }))), new Promise((n, i) => {
          this.batches[r].push({ request: t, resolve: n, reject: i });
        })) : this.options.singleLoader(t);
      }
      dispatchBatches() {
        for (let t in this.batches) {
          let r = this.batches[t];
          delete this.batches[t], r.length === 1 ? this.options.singleLoader(r[0].request).then((n) => {
            n instanceof Error ? r[0].reject(n) : r[0].resolve(n);
          }).catch((n) => {
            r[0].reject(n);
          }) : (r.sort((n, i) => this.options.batchOrder(n.request, i.request)), this.options.batchLoader(r.map((n) => n.request)).then((n) => {
            if (n instanceof Error) for (let i = 0; i < r.length; i++) r[i].reject(n);
            else for (let i = 0; i < r.length; i++) {
              let o = n[i];
              o instanceof Error ? r[i].reject(o) : r[i].resolve(o);
            }
          }).catch((n) => {
            for (let i = 0; i < r.length; i++) r[i].reject(n);
          }));
        }
      }
      get [Symbol.toStringTag]() {
        return "DataLoader";
      }
    };
    function ct(e, t) {
      if (t === null) return t;
      switch (e) {
        case "bigint":
          return BigInt(t);
        case "bytes": {
          let { buffer: r, byteOffset: n, byteLength: i } = Buffer.from(t, "base64");
          return new Uint8Array(r, n, i);
        }
        case "decimal":
          return new Te(t);
        case "datetime":
        case "date":
          return new Date(t);
        case "time":
          return /* @__PURE__ */ new Date(`1970-01-01T${t}Z`);
        case "bigint-array":
          return t.map((r) => ct("bigint", r));
        case "bytes-array":
          return t.map((r) => ct("bytes", r));
        case "decimal-array":
          return t.map((r) => ct("decimal", r));
        case "datetime-array":
          return t.map((r) => ct("datetime", r));
        case "date-array":
          return t.map((r) => ct("date", r));
        case "time-array":
          return t.map((r) => ct("time", r));
        default:
          return t;
      }
    }
    function Bn(e) {
      let t = [], r = Vm(e);
      for (let n = 0; n < e.rows.length; n++) {
        let i = e.rows[n], o = { ...r };
        for (let s = 0; s < i.length; s++) o[e.columns[s]] = ct(e.types[s], i[s]);
        t.push(o);
      }
      return t;
    }
    function Vm(e) {
      let t = {};
      for (let r = 0; r < e.columns.length; r++) t[e.columns[r]] = null;
      return t;
    }
    var jm = F("prisma:client:request_handler");
    var Un = class {
      constructor(t, r) {
        this.logEmitter = r, this.client = t, this.dataloader = new jn({ batchLoader: za(async ({ requests: n, customDataProxyFetch: i }) => {
          let { transaction: o, otelParentCtx: s } = n[0], a = n.map((p) => p.protocolQuery), l = this.client._tracingHelper.getTraceParent(s), u = n.some((p) => vo(p.protocolQuery.action));
          return (await this.client._engine.requestBatch(a, { traceparent: l, transaction: Bm(o), containsWrite: u, customDataProxyFetch: i })).map((p, d) => {
            if (p instanceof Error) return p;
            try {
              return this.mapQueryEngineResult(n[d], p);
            } catch (f) {
              return f;
            }
          });
        }), singleLoader: async (n) => {
          var _a2;
          let i = ((_a2 = n.transaction) == null ? void 0 : _a2.kind) === "itx" ? Jl(n.transaction) : void 0, o = await this.client._engine.request(n.protocolQuery, { traceparent: this.client._tracingHelper.getTraceParent(), interactiveTransaction: i, isWrite: vo(n.protocolQuery.action), customDataProxyFetch: n.customDataProxyFetch });
          return this.mapQueryEngineResult(n, o);
        }, batchBy: (n) => {
          var _a2;
          return ((_a2 = n.transaction) == null ? void 0 : _a2.id) ? `transaction-${n.transaction.id}` : Gl(n.protocolQuery);
        }, batchOrder(n, i) {
          var _a2, _b;
          return ((_a2 = n.transaction) == null ? void 0 : _a2.kind) === "batch" && ((_b = i.transaction) == null ? void 0 : _b.kind) === "batch" ? n.transaction.index - i.transaction.index : 0;
        } });
      }
      async request(t) {
        try {
          return await this.dataloader.request(t);
        } catch (r) {
          let { clientMethod: n, callsite: i, transaction: o, args: s, modelName: a } = t;
          this.handleAndLogRequestError({ error: r, clientMethod: n, callsite: i, transaction: o, args: s, modelName: a, globalOmit: t.globalOmit });
        }
      }
      mapQueryEngineResult({ dataPath: t, unpacker: r }, n) {
        let i = n == null ? void 0 : n.data, o = this.unpack(i, t, r);
        return process.env.PRISMA_CLIENT_GET_TIME ? { data: o } : o;
      }
      handleAndLogRequestError(t) {
        try {
          this.handleRequestError(t);
        } catch (r) {
          throw this.logEmitter && this.logEmitter.emit("error", { message: r.message, target: t.clientMethod, timestamp: /* @__PURE__ */ new Date() }), r;
        }
      }
      handleRequestError({ error: t, clientMethod: r, callsite: n, transaction: i, args: o, modelName: s, globalOmit: a }) {
        if (jm(t), Um(t, i)) throw t;
        if (t instanceof ee && Gm(t)) {
          let u = Wl(t.meta);
          Pn({ args: o, errors: [u], callsite: n, errorFormat: this.client._errorFormat, originalMethod: r, clientVersion: this.client._clientVersion, globalOmit: a });
        }
        let l = t.message;
        if (n && (l = dn({ callsite: n, originalMethod: r, isPanic: t.isPanic, showColors: this.client._errorFormat === "pretty", message: l })), l = this.sanitizeMessage(l), t.code) {
          let u = s ? { modelName: s, ...t.meta } : t.meta;
          throw new ee(l, { code: t.code, clientVersion: this.client._clientVersion, meta: u, batchRequestIdx: t.batchRequestIdx });
        } else {
          if (t.isPanic) throw new ce(l, this.client._clientVersion);
          if (t instanceof B) throw new B(l, { clientVersion: this.client._clientVersion, batchRequestIdx: t.batchRequestIdx });
          if (t instanceof T) throw new T(l, this.client._clientVersion);
          if (t instanceof ce) throw new ce(l, this.client._clientVersion);
        }
        throw t.clientVersion = this.client._clientVersion, t;
      }
      sanitizeMessage(t) {
        return this.client._errorFormat && this.client._errorFormat !== "pretty" ? (0, Ql.default)(t) : t;
      }
      unpack(t, r, n) {
        if (!t || (t.data && (t = t.data), !t)) return t;
        let i = Object.keys(t)[0], o = Object.values(t)[0], s = r.filter((u) => u !== "select" && u !== "include"), a = Xi(o, s), l = i === "queryRaw" ? Bn(a) : wt(a);
        return n ? n(l) : l;
      }
      get [Symbol.toStringTag]() {
        return "RequestHandler";
      }
    };
    function Bm(e) {
      if (e) {
        if (e.kind === "batch") return { kind: "batch", options: { isolationLevel: e.isolationLevel } };
        if (e.kind === "itx") return { kind: "itx", options: Jl(e) };
        Fe(e, "Unknown transaction kind");
      }
    }
    function Jl(e) {
      return { id: e.id, payload: e.payload };
    }
    function Um(e, t) {
      return Vn(e) && (t == null ? void 0 : t.kind) === "batch" && e.batchRequestIdx !== t.index;
    }
    function Gm(e) {
      return e.code === "P2009" || e.code === "P2012";
    }
    function Wl(e) {
      if (e.kind === "Union") return { kind: "Union", errors: e.errors.map(Wl) };
      if (Array.isArray(e.selectionPath)) {
        let [, ...t] = e.selectionPath;
        return { ...e, selectionPath: t };
      }
      return e;
    }
    var Hl = "6.4.1";
    var Kl = Hl;
    var eu = _(qi());
    var N = class extends Error {
      constructor(t) {
        super(t + `
Read more at https://pris.ly/d/client-constructor`), this.name = "PrismaClientConstructorValidationError";
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientConstructorValidationError";
      }
    };
    w(N, "PrismaClientConstructorValidationError");
    var Yl = ["datasources", "datasourceUrl", "errorFormat", "adapter", "log", "transactionOptions", "omit", "__internal"];
    var zl = ["pretty", "colorless", "minimal"];
    var Zl = ["info", "query", "warn", "error"];
    var Jm = { datasources: (e, { datasourceNames: t }) => {
      if (e) {
        if (typeof e != "object" || Array.isArray(e)) throw new N(`Invalid value ${JSON.stringify(e)} for "datasources" provided to PrismaClient constructor`);
        for (let [r, n] of Object.entries(e)) {
          if (!t.includes(r)) {
            let i = Bt(r, t) || ` Available datasources: ${t.join(", ")}`;
            throw new N(`Unknown datasource ${r} provided to PrismaClient constructor.${i}`);
          }
          if (typeof n != "object" || Array.isArray(n)) throw new N(`Invalid value ${JSON.stringify(e)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
          if (n && typeof n == "object") for (let [i, o] of Object.entries(n)) {
            if (i !== "url") throw new N(`Invalid value ${JSON.stringify(e)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
            if (typeof o != "string") throw new N(`Invalid value ${JSON.stringify(o)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
          }
        }
      }
    }, adapter: (e, t) => {
      if (!e && ht(t.generator) === "client") throw new N('Using engine type "client" requires a driver adapter to be provided to PrismaClient constructor.');
      if (e === null) return;
      if (e === void 0) throw new N('"adapter" property must not be undefined, use null to conditionally disable driver adapters.');
      if (!$n(t).includes("driverAdapters")) throw new N('"adapter" property can only be provided to PrismaClient constructor when "driverAdapters" preview feature is enabled.');
      if (ht(t.generator) === "binary") throw new N('Cannot use a driver adapter with the "binary" Query Engine. Please use the "library" Query Engine.');
    }, datasourceUrl: (e) => {
      if (typeof e < "u" && typeof e != "string") throw new N(`Invalid value ${JSON.stringify(e)} for "datasourceUrl" provided to PrismaClient constructor.
Expected string or undefined.`);
    }, errorFormat: (e) => {
      if (e) {
        if (typeof e != "string") throw new N(`Invalid value ${JSON.stringify(e)} for "errorFormat" provided to PrismaClient constructor.`);
        if (!zl.includes(e)) {
          let t = Bt(e, zl);
          throw new N(`Invalid errorFormat ${e} provided to PrismaClient constructor.${t}`);
        }
      }
    }, log: (e) => {
      if (!e) return;
      if (!Array.isArray(e)) throw new N(`Invalid value ${JSON.stringify(e)} for "log" provided to PrismaClient constructor.`);
      function t(r) {
        if (typeof r == "string" && !Zl.includes(r)) {
          let n = Bt(r, Zl);
          throw new N(`Invalid log level "${r}" provided to PrismaClient constructor.${n}`);
        }
      }
      for (let r of e) {
        t(r);
        let n = { level: t, emit: (i) => {
          let o = ["stdout", "event"];
          if (!o.includes(i)) {
            let s = Bt(i, o);
            throw new N(`Invalid value ${JSON.stringify(i)} for "emit" in logLevel provided to PrismaClient constructor.${s}`);
          }
        } };
        if (r && typeof r == "object") for (let [i, o] of Object.entries(r)) if (n[i]) n[i](o);
        else throw new N(`Invalid property ${i} for "log" provided to PrismaClient constructor`);
      }
    }, transactionOptions: (e) => {
      if (!e) return;
      let t = e.maxWait;
      if (t != null && t <= 0) throw new N(`Invalid value ${t} for maxWait in "transactionOptions" provided to PrismaClient constructor. maxWait needs to be greater than 0`);
      let r = e.timeout;
      if (r != null && r <= 0) throw new N(`Invalid value ${r} for timeout in "transactionOptions" provided to PrismaClient constructor. timeout needs to be greater than 0`);
    }, omit: (e, t) => {
      if (typeof e != "object") throw new N('"omit" option is expected to be an object.');
      if (e === null) throw new N('"omit" option can not be `null`');
      let r = [];
      for (let [n, i] of Object.entries(e)) {
        let o = Hm(n, t.runtimeDataModel);
        if (!o) {
          r.push({ kind: "UnknownModel", modelKey: n });
          continue;
        }
        for (let [s, a] of Object.entries(i)) {
          let l = o.fields.find((u) => u.name === s);
          if (!l) {
            r.push({ kind: "UnknownField", modelKey: n, fieldName: s });
            continue;
          }
          if (l.relationName) {
            r.push({ kind: "RelationInOmit", modelKey: n, fieldName: s });
            continue;
          }
          typeof a != "boolean" && r.push({ kind: "InvalidFieldValue", modelKey: n, fieldName: s });
        }
      }
      if (r.length > 0) throw new N(Km(e, r));
    }, __internal: (e) => {
      if (!e) return;
      let t = ["debug", "engine", "configOverride"];
      if (typeof e != "object") throw new N(`Invalid value ${JSON.stringify(e)} for "__internal" to PrismaClient constructor`);
      for (let [r] of Object.entries(e)) if (!t.includes(r)) {
        let n = Bt(r, t);
        throw new N(`Invalid property ${JSON.stringify(r)} for "__internal" provided to PrismaClient constructor.${n}`);
      }
    } };
    function tu(e, t) {
      for (let [r, n] of Object.entries(e)) {
        if (!Yl.includes(r)) {
          let i = Bt(r, Yl);
          throw new N(`Unknown property ${r} provided to PrismaClient constructor.${i}`);
        }
        Jm[r](n, t);
      }
      if (e.datasourceUrl && e.datasources) throw new N('Can not use "datasourceUrl" and "datasources" options at the same time. Pick one of them');
    }
    function Bt(e, t) {
      if (t.length === 0 || typeof e != "string") return "";
      let r = Wm(e, t);
      return r ? ` Did you mean "${r}"?` : "";
    }
    function Wm(e, t) {
      if (t.length === 0) return null;
      let r = t.map((i) => ({ value: i, distance: (0, eu.default)(e, i) }));
      r.sort((i, o) => i.distance < o.distance ? -1 : 1);
      let n = r[0];
      return n.distance < 3 ? n.value : null;
    }
    function Hm(e, t) {
      return Xl(t.models, e) ?? Xl(t.types, e);
    }
    function Xl(e, t) {
      let r = Object.keys(e).find((n) => xt(n) === t);
      if (r) return e[r];
    }
    function Km(e, t) {
      var _a2, _b, _c2, _d2;
      let r = It(e);
      for (let o of t) switch (o.kind) {
        case "UnknownModel":
          (_a2 = r.arguments.getField(o.modelKey)) == null ? void 0 : _a2.markAsError(), r.addErrorMessage(() => `Unknown model name: ${o.modelKey}.`);
          break;
        case "UnknownField":
          (_b = r.arguments.getDeepField([o.modelKey, o.fieldName])) == null ? void 0 : _b.markAsError(), r.addErrorMessage(() => `Model "${o.modelKey}" does not have a field named "${o.fieldName}".`);
          break;
        case "RelationInOmit":
          (_c2 = r.arguments.getDeepField([o.modelKey, o.fieldName])) == null ? void 0 : _c2.markAsError(), r.addErrorMessage(() => 'Relations are already excluded by default and can not be specified in "omit".');
          break;
        case "InvalidFieldValue":
          (_d2 = r.arguments.getDeepFieldValue([o.modelKey, o.fieldName])) == null ? void 0 : _d2.markAsError(), r.addErrorMessage(() => "Omit field option value must be a boolean.");
          break;
      }
      let { message: n, args: i } = xn(r, "colorless");
      return `Error validating "omit" option:

${i}

${n}`;
    }
    function ru(e) {
      return e.length === 0 ? Promise.resolve([]) : new Promise((t, r) => {
        let n = new Array(e.length), i = null, o = false, s = 0, a = () => {
          o || (s++, s === e.length && (o = true, i ? r(i) : t(n)));
        }, l = (u) => {
          o || (o = true, r(u));
        };
        for (let u = 0; u < e.length; u++) e[u].then((c) => {
          n[u] = c, a();
        }, (c) => {
          if (!Vn(c)) {
            l(c);
            return;
          }
          c.batchRequestIdx === u ? l(c) : (i || (i = c), a());
        });
      });
    }
    var tt = F("prisma:client");
    typeof globalThis == "object" && (globalThis.NODE_CLIENT = true);
    var Ym = { requestArgsToMiddlewareArgs: (e) => e, middlewareArgsToRequestArgs: (e) => e };
    var zm = Symbol.for("prisma.client.transaction.id");
    var Zm = { id: 0, nextId() {
      return ++this.id;
    } };
    function lu(e) {
      class t {
        constructor(n) {
          var _a2, _b, _c2, _d2, _e2, _f;
          this._originalClient = this;
          this._middlewares = new qn();
          this._createPrismaPromise = wo();
          this.$metrics = new kt(this);
          this.$extends = Ua;
          e = ((_b = (_a2 = n == null ? void 0 : n.__internal) == null ? void 0 : _a2.configOverride) == null ? void 0 : _b.call(_a2, e)) ?? e, rl(e), n && tu(n, e);
          let i = new su.EventEmitter().on("error", () => {
          });
          this._extensions = Ot.empty(), this._previewFeatures = $n(e), this._clientVersion = e.clientVersion ?? Kl, this._activeProvider = e.activeProvider, this._globalOmit = n == null ? void 0 : n.omit, this._tracingHelper = jl();
          let o = { rootEnvPath: e.relativeEnvPaths.rootEnvPath && Nr.default.resolve(e.dirname, e.relativeEnvPaths.rootEnvPath), schemaEnvPath: e.relativeEnvPaths.schemaEnvPath && Nr.default.resolve(e.dirname, e.relativeEnvPaths.schemaEnvPath) }, s;
          if (n == null ? void 0 : n.adapter) {
            s = Hn(n.adapter);
            let l = e.activeProvider === "postgresql" ? "postgres" : e.activeProvider;
            if (s.provider !== l) throw new T(`The Driver Adapter \`${s.adapterName}\`, based on \`${s.provider}\`, is not compatible with the provider \`${l}\` specified in the Prisma schema.`, this._clientVersion);
            if (n.datasources || n.datasourceUrl !== void 0) throw new T("Custom datasource configuration is not compatible with Prisma Driver Adapters. Please define the database connection string directly in the Driver Adapter configuration.", this._clientVersion);
          }
          let a = !s && Zt(o, { conflictCheck: "none" }) || ((_c2 = e.injectableEdgeEnv) == null ? void 0 : _c2.call(e));
          try {
            let l = n ?? {}, u = l.__internal ?? {}, c = u.debug === true;
            c && F.enable("prisma:client");
            let p = Nr.default.resolve(e.dirname, e.relativePath);
            au.default.existsSync(p) || (p = e.dirname), tt("dirname", e.dirname), tt("relativePath", e.relativePath), tt("cwd", p);
            let d = u.engine || {};
            if (l.errorFormat ? this._errorFormat = l.errorFormat : process.env.NODE_ENV === "production" ? this._errorFormat = "minimal" : process.env.NO_COLOR ? this._errorFormat = "colorless" : this._errorFormat = "colorless", this._runtimeDataModel = e.runtimeDataModel, this._engineConfig = { cwd: p, dirname: e.dirname, enableDebugLogs: c, allowTriggerPanic: d.allowTriggerPanic, datamodelPath: Nr.default.join(e.dirname, e.filename ?? "schema.prisma"), prismaPath: d.binaryPath ?? void 0, engineEndpoint: d.endpoint, generator: e.generator, showColors: this._errorFormat === "pretty", logLevel: l.log && Ul(l.log), logQueries: l.log && !!(typeof l.log == "string" ? l.log === "query" : l.log.find((f) => typeof f == "string" ? f === "query" : f.level === "query")), env: (a == null ? void 0 : a.parsed) ?? {}, flags: [], engineWasm: e.engineWasm, compilerWasm: e.compilerWasm, clientVersion: e.clientVersion, engineVersion: e.engineVersion, previewFeatures: this._previewFeatures, activeProvider: e.activeProvider, inlineSchema: e.inlineSchema, overrideDatasources: nl(l, e.datasourceNames), inlineDatasources: e.inlineDatasources, inlineSchemaHash: e.inlineSchemaHash, tracingHelper: this._tracingHelper, transactionOptions: { maxWait: ((_d2 = l.transactionOptions) == null ? void 0 : _d2.maxWait) ?? 2e3, timeout: ((_e2 = l.transactionOptions) == null ? void 0 : _e2.timeout) ?? 5e3, isolationLevel: (_f = l.transactionOptions) == null ? void 0 : _f.isolationLevel }, logEmitter: i, isBundled: e.isBundled, adapter: s }, this._accelerateEngineConfig = { ...this._engineConfig, accelerateUtils: { resolveDatasourceUrl: Ft, getBatchRequestPayload: Dt, prismaGraphQLToJSError: Nt, PrismaClientUnknownRequestError: B, PrismaClientInitializationError: T, PrismaClientKnownRequestError: ee, debug: F("prisma:client:accelerateEngine"), engineVersion: iu.version, clientVersion: e.clientVersion } }, tt("clientVersion", e.clientVersion), this._engine = Il(e, this._engineConfig), this._requestHandler = new Un(this, i), l.log) for (let f of l.log) {
              let g = typeof f == "string" ? f : f.emit === "stdout" ? f.level : null;
              g && this.$on(g, (h) => {
                rr.log(`${rr.tags[g] ?? ""}`, h.message || h.query);
              });
            }
          } catch (l) {
            throw l.clientVersion = this._clientVersion, l;
          }
          return this._appliedParent = br(this);
        }
        get [Symbol.toStringTag]() {
          return "PrismaClient";
        }
        $use(n) {
          this._middlewares.use(n);
        }
        $on(n, i) {
          n === "beforeExit" ? this._engine.onBeforeExit(i) : n && this._engineConfig.logEmitter.on(n, i);
        }
        $connect() {
          try {
            return this._engine.start();
          } catch (n) {
            throw n.clientVersion = this._clientVersion, n;
          }
        }
        async $disconnect() {
          try {
            await this._engine.stop();
          } catch (n) {
            throw n.clientVersion = this._clientVersion, n;
          } finally {
            Fo();
          }
        }
        $executeRawInternal(n, i, o, s) {
          let a = this._activeProvider;
          return this._request({ action: "executeRaw", args: o, transaction: n, clientMethod: i, argsMapper: Eo({ clientMethod: i, activeProvider: a }), callsite: Ze(this._errorFormat), dataPath: [], middlewareArgsMapper: s });
        }
        $executeRaw(n, ...i) {
          return this._createPrismaPromise((o) => {
            if (n.raw !== void 0 || n.sql !== void 0) {
              let [s, a] = nu(n, i);
              return bo(this._activeProvider, s.text, s.values, Array.isArray(n) ? "prisma.$executeRaw`<SQL>`" : "prisma.$executeRaw(sql`<SQL>`)"), this.$executeRawInternal(o, "$executeRaw", s, a);
            }
            throw new te("`$executeRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#executeraw\n", { clientVersion: this._clientVersion });
          });
        }
        $executeRawUnsafe(n, ...i) {
          return this._createPrismaPromise((o) => (bo(this._activeProvider, n, i, "prisma.$executeRawUnsafe(<SQL>, [...values])"), this.$executeRawInternal(o, "$executeRawUnsafe", [n, ...i])));
        }
        $runCommandRaw(n) {
          if (e.activeProvider !== "mongodb") throw new te(`The ${e.activeProvider} provider does not support $runCommandRaw. Use the mongodb provider.`, { clientVersion: this._clientVersion });
          return this._createPrismaPromise((i) => this._request({ args: n, clientMethod: "$runCommandRaw", dataPath: [], action: "runCommandRaw", argsMapper: Ol, callsite: Ze(this._errorFormat), transaction: i }));
        }
        async $queryRawInternal(n, i, o, s) {
          let a = this._activeProvider;
          return this._request({ action: "queryRaw", args: o, transaction: n, clientMethod: i, argsMapper: Eo({ clientMethod: i, activeProvider: a }), callsite: Ze(this._errorFormat), dataPath: [], middlewareArgsMapper: s });
        }
        $queryRaw(n, ...i) {
          return this._createPrismaPromise((o) => {
            if (n.raw !== void 0 || n.sql !== void 0) return this.$queryRawInternal(o, "$queryRaw", ...nu(n, i));
            throw new te("`$queryRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#queryraw\n", { clientVersion: this._clientVersion });
          });
        }
        $queryRawTyped(n) {
          return this._createPrismaPromise((i) => {
            if (!this._hasPreviewFlag("typedSql")) throw new te("`typedSql` preview feature must be enabled in order to access $queryRawTyped API", { clientVersion: this._clientVersion });
            return this.$queryRawInternal(i, "$queryRawTyped", n);
          });
        }
        $queryRawUnsafe(n, ...i) {
          return this._createPrismaPromise((o) => this.$queryRawInternal(o, "$queryRawUnsafe", [n, ...i]));
        }
        _transactionWithArray({ promises: n, options: i }) {
          let o = Zm.nextId(), s = Bl(n.length), a = n.map((l, u) => {
            var _a2;
            if ((l == null ? void 0 : l[Symbol.toStringTag]) !== "PrismaPromise") throw new Error("All elements of the array need to be Prisma Client promises. Hint: Please make sure you are not awaiting the Prisma client calls you intended to pass in the $transaction function.");
            let c = (i == null ? void 0 : i.isolationLevel) ?? this._engineConfig.transactionOptions.isolationLevel, p = { kind: "batch", id: o, index: u, isolationLevel: c, lock: s };
            return ((_a2 = l.requestTransaction) == null ? void 0 : _a2.call(l, p)) ?? l;
          });
          return ru(a);
        }
        async _transactionWithCallback({ callback: n, options: i }) {
          let o = { traceparent: this._tracingHelper.getTraceParent() }, s = { maxWait: (i == null ? void 0 : i.maxWait) ?? this._engineConfig.transactionOptions.maxWait, timeout: (i == null ? void 0 : i.timeout) ?? this._engineConfig.transactionOptions.timeout, isolationLevel: (i == null ? void 0 : i.isolationLevel) ?? this._engineConfig.transactionOptions.isolationLevel }, a = await this._engine.transaction("start", o, s), l;
          try {
            let u = { kind: "itx", ...a };
            l = await n(this._createItxClient(u)), await this._engine.transaction("commit", o, a);
          } catch (u) {
            throw await this._engine.transaction("rollback", o, a).catch(() => {
            }), u;
          }
          return l;
        }
        _createItxClient(n) {
          return ye(br(ye(Ba(this), [ie("_appliedParent", () => this._appliedParent._createItxClient(n)), ie("_createPrismaPromise", () => wo(n)), ie(zm, () => n.id)])), [_t(Fl)]);
        }
        $transaction(n, i) {
          var _a2;
          let o;
          typeof n == "function" ? ((_a2 = this._engineConfig.adapter) == null ? void 0 : _a2.adapterName) === "@prisma/adapter-d1" ? o = () => {
            throw new Error("Cloudflare D1 does not support interactive transactions. We recommend you to refactor your queries with that limitation in mind, and use batch transactions with `prisma.$transactions([])` where applicable.");
          } : o = () => this._transactionWithCallback({ callback: n, options: i }) : o = () => this._transactionWithArray({ promises: n, options: i });
          let s = { name: "transaction", attributes: { method: "$transaction" } };
          return this._tracingHelper.runInChildSpan(s, o);
        }
        _request(n) {
          n.otelParentCtx = this._tracingHelper.getActiveContext();
          let i = n.middlewareArgsMapper ?? Ym, o = { args: i.requestArgsToMiddlewareArgs(n.args), dataPath: n.dataPath, runInTransaction: !!n.transaction, action: n.action, model: n.model }, s = { middleware: { name: "middleware", middleware: true, attributes: { method: "$use" }, active: false }, operation: { name: "operation", attributes: { method: o.action, model: o.model, name: o.model ? `${o.model}.${o.action}` : o.action } } }, a = -1, l = async (u) => {
            let c = this._middlewares.get(++a);
            if (c) return this._tracingHelper.runInChildSpan(s.middleware, (O) => c(u, (v) => (O == null ? void 0 : O.end(), l(v))));
            let { runInTransaction: p, args: d, ...f } = u, g = { ...n, ...f };
            d && (g.args = i.middlewareArgsToRequestArgs(d)), n.transaction !== void 0 && p === false && delete g.transaction;
            let h = await Ya(this, g);
            return g.model ? Ja({ result: h, modelName: g.model, args: g.args, extensions: this._extensions, runtimeDataModel: this._runtimeDataModel, globalOmit: this._globalOmit }) : h;
          };
          return this._tracingHelper.runInChildSpan(s.operation, () => new ou.AsyncResource("prisma-client-request").runInAsyncScope(() => l(o)));
        }
        async _executeRequest({ args: n, clientMethod: i, dataPath: o, callsite: s, action: a, model: l, argsMapper: u, transaction: c, unpacker: p, otelParentCtx: d, customDataProxyFetch: f }) {
          try {
            n = u ? u(n) : n;
            let g = { name: "serialize" }, h = this._tracingHelper.runInChildSpan(g, () => Cn({ modelName: l, runtimeDataModel: this._runtimeDataModel, action: a, args: n, clientMethod: i, callsite: s, extensions: this._extensions, errorFormat: this._errorFormat, clientVersion: this._clientVersion, previewFeatures: this._previewFeatures, globalOmit: this._globalOmit }));
            return F.enabled("prisma:client") && (tt("Prisma Client call:"), tt(`prisma.${i}(${ka(n)})`), tt("Generated request:"), tt(JSON.stringify(h, null, 2) + `
`)), (c == null ? void 0 : c.kind) === "batch" && await c.lock, this._requestHandler.request({ protocolQuery: h, modelName: l, action: a, clientMethod: i, dataPath: o, callsite: s, args: n, extensions: this._extensions, transaction: c, unpacker: p, otelParentCtx: d, otelChildCtx: this._tracingHelper.getActiveContext(), globalOmit: this._globalOmit, customDataProxyFetch: f });
          } catch (g) {
            throw g.clientVersion = this._clientVersion, g;
          }
        }
        _hasPreviewFlag(n) {
          var _a2;
          return !!((_a2 = this._engineConfig.previewFeatures) == null ? void 0 : _a2.includes(n));
        }
        $applyPendingMigrations() {
          return this._engine.applyPendingMigrations();
        }
      }
      return t;
    }
    function nu(e, t) {
      return Xm(e) ? [new ae(e, t), $l] : [e, ql];
    }
    function Xm(e) {
      return Array.isArray(e) && Array.isArray(e.raw);
    }
    var ef = /* @__PURE__ */ new Set(["toJSON", "$$typeof", "asymmetricMatch", Symbol.iterator, Symbol.toStringTag, Symbol.isConcatSpreadable, Symbol.toPrimitive]);
    function uu(e) {
      return new Proxy(e, { get(t, r) {
        if (r in t) return t[r];
        if (!ef.has(r)) throw new TypeError(`Invalid enum value: ${String(r)}`);
      } });
    }
    function cu(e) {
      Zt(e, { conflictCheck: "warn" });
    }
  }
});

// generated/client/index.js
var require_client = __commonJS({
  "generated/client/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var {
      PrismaClientKnownRequestError: PrismaClientKnownRequestError2,
      PrismaClientUnknownRequestError: PrismaClientUnknownRequestError2,
      PrismaClientRustPanicError: PrismaClientRustPanicError2,
      PrismaClientInitializationError: PrismaClientInitializationError2,
      PrismaClientValidationError: PrismaClientValidationError2,
      getPrismaClient: getPrismaClient2,
      sqltag: sqltag2,
      empty: empty2,
      join: join2,
      raw: raw2,
      skip: skip2,
      Decimal: Decimal2,
      Debug: Debug2,
      objectEnumValues: objectEnumValues2,
      makeStrictEnum: makeStrictEnum2,
      Extensions: Extensions2,
      warnOnce: warnOnce2,
      defineDmmfProperty: defineDmmfProperty2,
      Public: Public2,
      getRuntime: getRuntime2,
      createParam: createParam2
    } = require_library();
    var Prisma = {};
    exports2.Prisma = Prisma;
    exports2.$Enums = {};
    Prisma.prismaVersion = {
      client: "6.4.1",
      engine: "a9055b89e58b4b5bfb59600785423b1db3d0e75d"
    };
    Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError2;
    Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError2;
    Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError2;
    Prisma.PrismaClientInitializationError = PrismaClientInitializationError2;
    Prisma.PrismaClientValidationError = PrismaClientValidationError2;
    Prisma.Decimal = Decimal2;
    Prisma.sql = sqltag2;
    Prisma.empty = empty2;
    Prisma.join = join2;
    Prisma.raw = raw2;
    Prisma.validator = Public2.validator;
    Prisma.getExtensionContext = Extensions2.getExtensionContext;
    Prisma.defineExtension = Extensions2.defineExtension;
    Prisma.DbNull = objectEnumValues2.instances.DbNull;
    Prisma.JsonNull = objectEnumValues2.instances.JsonNull;
    Prisma.AnyNull = objectEnumValues2.instances.AnyNull;
    Prisma.NullTypes = {
      DbNull: objectEnumValues2.classes.DbNull,
      JsonNull: objectEnumValues2.classes.JsonNull,
      AnyNull: objectEnumValues2.classes.AnyNull
    };
    var path = require("path");
    exports2.Prisma.TransactionIsolationLevel = makeStrictEnum2({
      ReadUncommitted: "ReadUncommitted",
      ReadCommitted: "ReadCommitted",
      RepeatableRead: "RepeatableRead",
      Serializable: "Serializable"
    });
    exports2.Prisma.UserScalarFieldEnum = {
      id: "id",
      email: "email",
      password: "password",
      createdAt: "createdAt"
    };
    exports2.Prisma.SortOrder = {
      asc: "asc",
      desc: "desc"
    };
    exports2.Prisma.UserOrderByRelevanceFieldEnum = {
      id: "id",
      email: "email",
      password: "password"
    };
    exports2.Prisma.ModelName = {
      User: "User"
    };
    var config2 = {
      "generator": {
        "name": "client",
        "provider": {
          "fromEnvVar": null,
          "value": "prisma-client-js"
        },
        "output": {
          "value": "C:\\Users\\jesus\\work\\lemon-fullstack\\packages\\database\\generated\\client",
          "fromEnvVar": null
        },
        "config": {
          "engineType": "library"
        },
        "binaryTargets": [
          {
            "fromEnvVar": null,
            "value": "windows",
            "native": true
          }
        ],
        "previewFeatures": [],
        "sourceFilePath": "C:\\Users\\jesus\\work\\lemon-fullstack\\packages\\database\\prisma\\schema.prisma",
        "isCustomOutput": true
      },
      "relativeEnvPaths": {
        "rootEnvPath": null,
        "schemaEnvPath": "../../.env"
      },
      "relativePath": "../../prisma",
      "clientVersion": "6.4.1",
      "engineVersion": "a9055b89e58b4b5bfb59600785423b1db3d0e75d",
      "datasourceNames": [
        "db"
      ],
      "activeProvider": "mysql",
      "inlineDatasources": {
        "db": {
          "url": {
            "fromEnvVar": "DATABASE_URL",
            "value": null
          }
        }
      },
      "inlineSchema": '// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\ndatasource db {\n  provider = "mysql"\n  url      = env("DATABASE_URL")\n}\n\ngenerator client {\n  provider = "prisma-client-js"\n  output   = "../generated/client"\n}\n\nmodel User {\n  id        String   @id @default(uuid())\n  email     String   @unique\n  password  String\n  createdAt DateTime @default(now())\n}\n',
      "inlineSchemaHash": "0d49522fffa995f21377045090838b84eac3507734357e3212c00b1a5ee00738",
      "copyEngine": true
    };
    var fs2 = require("fs");
    config2.dirname = __dirname;
    if (!fs2.existsSync(path.join(__dirname, "schema.prisma"))) {
      const alternativePaths = [
        "generated/client",
        "client"
      ];
      const alternativePath = alternativePaths.find((altPath) => {
        return fs2.existsSync(path.join(process.cwd(), altPath, "schema.prisma"));
      }) ?? alternativePaths[0];
      config2.dirname = path.join(process.cwd(), alternativePath);
      config2.isBundled = true;
    }
    config2.runtimeDataModel = JSON.parse('{"models":{"User":{"dbName":null,"schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","nativeType":null,"default":{"name":"uuid","args":[4]},"isGenerated":false,"isUpdatedAt":false},{"name":"email","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"password","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","nativeType":null,"default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false}},"enums":{},"types":{}}');
    defineDmmfProperty2(exports2.Prisma, config2.runtimeDataModel);
    config2.engineWasm = void 0;
    config2.compilerWasm = void 0;
    var { warnEnvConflicts: warnEnvConflicts2 } = require_library();
    warnEnvConflicts2({
      rootEnvPath: config2.relativeEnvPaths.rootEnvPath && path.resolve(config2.dirname, config2.relativeEnvPaths.rootEnvPath),
      schemaEnvPath: config2.relativeEnvPaths.schemaEnvPath && path.resolve(config2.dirname, config2.relativeEnvPaths.schemaEnvPath)
    });
    var PrismaClient2 = getPrismaClient2(config2);
    exports2.PrismaClient = PrismaClient2;
    Object.assign(exports2, Prisma);
    path.join(__dirname, "query_engine-windows.dll.node");
    path.join(process.cwd(), "generated/client/query_engine-windows.dll.node");
    path.join(__dirname, "schema.prisma");
    path.join(process.cwd(), "generated/client/schema.prisma");
  }
});

// src/client.ts
var client_exports = {};
__export(client_exports, {
  prisma: () => prisma
});
module.exports = __toCommonJS(client_exports);
var import_client = __toESM(require_client());
__reExport(client_exports, __toESM(require_client()), module.exports);
var globalForPrisma = global;
var prisma = globalForPrisma.prisma || new import_client.PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  prisma
});
/*! Bundled license information:

decimal.js/decimal.mjs:
  (*!
   *  decimal.js v10.5.0
   *  An arbitrary-precision Decimal type for JavaScript.
   *  https://github.com/MikeMcl/decimal.js
   *  Copyright (c) 2025 Michael Mclaughlin <M8ch88l@gmail.com>
   *  MIT Licence
   *)
*/
