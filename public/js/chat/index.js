// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer,
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== "undefined"
      ? globalThis
      : typeof self !== "undefined"
        ? self
        : typeof window !== "undefined"
          ? window
          : typeof global !== "undefined"
            ? global
            : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === "function" &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== "undefined" &&
    typeof module.require === "function" &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === "function" &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === "string") {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = "MODULE_NOT_FOUND";
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject,
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, "root", {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === "function" && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})(
  {
    kQu7H: [
      function (require, module, exports, __globalThis) {
        var global = arguments[3];
        var HMR_HOST = null;
        var HMR_PORT = 1234;
        var HMR_SERVER_PORT = 1234;
        var HMR_SECURE = false;
        var HMR_ENV_HASH = "d6ea1d42532a7575";
        var HMR_USE_SSE = false;
        module.bundle.HMR_BUNDLE_ID = "4619cfb1e77d6cb7";
        ("use strict");
        /* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
        var OldModule = module.bundle.Module;
        function Module(moduleName) {
          OldModule.call(this, moduleName);
          this.hot = {
            data: module.bundle.hotData[moduleName],
            _acceptCallbacks: [],
            _disposeCallbacks: [],
            accept: function (fn) {
              this._acceptCallbacks.push(fn || function () {});
            },
            dispose: function (fn) {
              this._disposeCallbacks.push(fn);
            },
          };
          module.bundle.hotData[moduleName] = undefined;
        }
        module.bundle.Module = Module;
        module.bundle.hotData = {};
        var checkedAssets /*: {|[string]: boolean|} */,
          disposedAssets /*: {|[string]: boolean|} */,
          assetsToDispose /*: Array<[ParcelRequire, string]> */,
          assetsToAccept /*: Array<[ParcelRequire, string]> */,
          bundleNotFound = false;
        function getHostname() {
          return (
            HMR_HOST ||
            (typeof location !== "undefined" &&
            location.protocol.indexOf("http") === 0
              ? location.hostname
              : "localhost")
          );
        }
        function getPort() {
          return (
            HMR_PORT ||
            (typeof location !== "undefined" ? location.port : HMR_SERVER_PORT)
          );
        }
        // eslint-disable-next-line no-redeclare
        let WebSocket = globalThis.WebSocket;
        if (!WebSocket && typeof module.bundle.root === "function")
          try {
            // eslint-disable-next-line no-global-assign
            WebSocket = module.bundle.root("ws");
          } catch {
            // ignore.
          }
        var hostname = getHostname();
        var port = getPort();
        var protocol =
          HMR_SECURE ||
          (typeof location !== "undefined" &&
            location.protocol === "https:" &&
            !["localhost", "127.0.0.1", "0.0.0.0"].includes(hostname))
            ? "wss"
            : "ws";
        // eslint-disable-next-line no-redeclare
        var parent = module.bundle.parent;
        if (!parent || !parent.isParcelRequire) {
          // Web extension context
          var extCtx =
            typeof browser === "undefined"
              ? typeof chrome === "undefined"
                ? null
                : chrome
              : browser;
          // Safari doesn't support sourceURL in error stacks.
          // eval may also be disabled via CSP, so do a quick check.
          var supportsSourceURL = false;
          try {
            (0, eval)('throw new Error("test"); //# sourceURL=test.js');
          } catch (err) {
            supportsSourceURL = err.stack.includes("test.js");
          }
          var ws;
          if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
          else
            try {
              // If we're running in the dev server's node runner, listen for messages on the parent port.
              let { workerData, parentPort } = module.bundle.root(
                "node:worker_threads",
              ); /*: any*/
              if (
                workerData !== null &&
                workerData !== void 0 &&
                workerData.__parcel
              ) {
                parentPort.on("message", async (message) => {
                  try {
                    await handleMessage(message);
                    parentPort.postMessage("updated");
                  } catch {
                    parentPort.postMessage("restart");
                  }
                });
                // After the bundle has finished running, notify the dev server that the HMR update is complete.
                queueMicrotask(() => parentPort.postMessage("ready"));
              }
            } catch {
              if (typeof WebSocket !== "undefined")
                try {
                  ws = new WebSocket(
                    protocol +
                      "://" +
                      hostname +
                      (port ? ":" + port : "") +
                      "/",
                  );
                } catch (err) {
                  // Ignore cloudflare workers error.
                  if (
                    err.message &&
                    !err.message.includes(
                      "Disallowed operation called within global scope",
                    )
                  )
                    console.error(err.message);
                }
            }
          if (ws) {
            // $FlowFixMe
            ws.onmessage = async function (event /*: {data: string, ...} */) {
              var data /*: HMRMessage */ = JSON.parse(event.data);
              await handleMessage(data);
            };
            if (ws instanceof WebSocket) {
              ws.onerror = function (e) {
                if (e.message) console.error(e.message);
              };
              ws.onclose = function () {
                console.warn(
                  "[parcel] \uD83D\uDEA8 Connection to the HMR server was lost",
                );
              };
            }
          }
        }
        async function handleMessage(data /*: HMRMessage */) {
          checkedAssets = {} /*: {|[string]: boolean|} */;
          disposedAssets = {} /*: {|[string]: boolean|} */;
          assetsToAccept = [];
          assetsToDispose = [];
          bundleNotFound = false;
          if (data.type === "reload") fullReload();
          else if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets;
            // Handle HMR Update
            let handled = assets.every((asset) => {
              return (
                asset.type === "css" ||
                (asset.type === "js" &&
                  hmrAcceptCheck(
                    module.bundle.root,
                    asset.id,
                    asset.depsByBundle,
                  ))
              );
            });
            // Dispatch a custom event in case a bundle was not found. This might mean
            // an asset on the server changed and we should reload the page. This event
            // gives the client an opportunity to refresh without losing state
            // (e.g. via React Server Components). If e.preventDefault() is not called,
            // we will trigger a full page reload.
            if (
              handled &&
              bundleNotFound &&
              assets.some((a) => a.envHash !== HMR_ENV_HASH) &&
              typeof window !== "undefined" &&
              typeof CustomEvent !== "undefined"
            )
              handled = !window.dispatchEvent(
                new CustomEvent("parcelhmrreload", {
                  cancelable: true,
                }),
              );
            if (handled) {
              console.clear();
              // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
              if (
                typeof window !== "undefined" &&
                typeof CustomEvent !== "undefined"
              )
                window.dispatchEvent(new CustomEvent("parcelhmraccept"));
              await hmrApplyUpdates(assets);
              hmrDisposeQueue();
              // Run accept callbacks. This will also re-execute other disposed assets in topological order.
              let processedAssets = {};
              for (let i = 0; i < assetsToAccept.length; i++) {
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                  hmrAccept(assetsToAccept[i][0], id);
                  processedAssets[id] = true;
                }
              }
            } else fullReload();
          }
          if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi) {
              let stack = ansiDiagnostic.codeframe
                ? ansiDiagnostic.codeframe
                : ansiDiagnostic.stack;
              console.error(
                "\uD83D\uDEA8 [parcel]: " +
                  ansiDiagnostic.message +
                  "\n" +
                  stack +
                  "\n\n" +
                  ansiDiagnostic.hints.join("\n"),
              );
            }
            if (typeof document !== "undefined") {
              // Render the fancy html overlay
              removeErrorOverlay();
              var overlay = createErrorOverlay(data.diagnostics.html);
              // $FlowFixMe
              document.body.appendChild(overlay);
            }
          }
        }
        function removeErrorOverlay() {
          var overlay = document.getElementById(OVERLAY_ID);
          if (overlay) {
            overlay.remove();
            console.log("[parcel] \u2728 Error resolved");
          }
        }
        function createErrorOverlay(diagnostics) {
          var overlay = document.createElement("div");
          overlay.id = OVERLAY_ID;
          let errorHTML =
            '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
          for (let diagnostic of diagnostics) {
            let stack = diagnostic.frames.length
              ? diagnostic.frames.reduce((p, frame) => {
                  return `${p}
<a href="${protocol === "wss" ? "https" : "http"}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
                }, "")
              : diagnostic.stack;
            errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint) => "<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
          }
          errorHTML += "</div>";
          overlay.innerHTML = errorHTML;
          return overlay;
        }
        function fullReload() {
          if (typeof location !== "undefined" && "reload" in location)
            location.reload();
          else if (
            typeof extCtx !== "undefined" &&
            extCtx &&
            extCtx.runtime &&
            extCtx.runtime.reload
          )
            extCtx.runtime.reload();
          else
            try {
              let { workerData, parentPort } = module.bundle.root(
                "node:worker_threads",
              ); /*: any*/
              if (
                workerData !== null &&
                workerData !== void 0 &&
                workerData.__parcel
              )
                parentPort.postMessage("restart");
            } catch (err) {
              console.error(
                "[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.",
              );
            }
        }
        function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
          var modules = bundle.modules;
          if (!modules) return [];
          var parents = [];
          var k, d, dep;
          for (k in modules)
            for (d in modules[k][1]) {
              dep = modules[k][1][d];
              if (
                dep === id ||
                (Array.isArray(dep) && dep[dep.length - 1] === id)
              )
                parents.push([bundle, k]);
            }
          if (bundle.parent)
            parents = parents.concat(getParents(bundle.parent, id));
          return parents;
        }
        function updateLink(link) {
          var href = link.getAttribute("href");
          if (!href) return;
          var newLink = link.cloneNode();
          newLink.onload = function () {
            if (link.parentNode !== null)
              // $FlowFixMe
              link.parentNode.removeChild(link);
          };
          newLink.setAttribute(
            "href", // $FlowFixMe
            href.split("?")[0] + "?" + Date.now(),
          );
          // $FlowFixMe
          link.parentNode.insertBefore(newLink, link.nextSibling);
        }
        var cssTimeout = null;
        function reloadCSS() {
          if (cssTimeout || typeof document === "undefined") return;
          cssTimeout = setTimeout(function () {
            var links = document.querySelectorAll('link[rel="stylesheet"]');
            for (var i = 0; i < links.length; i++) {
              // $FlowFixMe[incompatible-type]
              var href /*: string */ = links[i].getAttribute("href");
              var hostname = getHostname();
              var servedFromHMRServer =
                hostname === "localhost"
                  ? new RegExp(
                      "^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" +
                        getPort(),
                    ).test(href)
                  : href.indexOf(hostname + ":" + getPort());
              var absolute =
                /^https?:\/\//i.test(href) &&
                href.indexOf(location.origin) !== 0 &&
                !servedFromHMRServer;
              if (!absolute) updateLink(links[i]);
            }
            cssTimeout = null;
          }, 50);
        }
        function hmrDownload(asset) {
          if (asset.type === "js") {
            if (typeof document !== "undefined") {
              let script = document.createElement("script");
              script.src = asset.url + "?t=" + Date.now();
              if (asset.outputFormat === "esmodule") script.type = "module";
              return new Promise((resolve, reject) => {
                var _document$head;
                script.onload = () => resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null ||
                  _document$head === void 0 ||
                  _document$head.appendChild(script);
              });
            } else if (typeof importScripts === "function") {
              // Worker scripts
              if (asset.outputFormat === "esmodule")
                return import(asset.url + "?t=" + Date.now());
              else
                return new Promise((resolve, reject) => {
                  try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                  } catch (err) {
                    reject(err);
                  }
                });
            }
          }
        }
        async function hmrApplyUpdates(assets) {
          global.parcelHotUpdate = Object.create(null);
          let scriptsToRemove;
          try {
            // If sourceURL comments aren't supported in eval, we need to load
            // the update from the dev server over HTTP so that stack traces
            // are correct in errors/logs. This is much slower than eval, so
            // we only do it if needed (currently just Safari).
            // https://bugs.webkit.org/show_bug.cgi?id=137297
            // This path is also taken if a CSP disallows eval.
            if (!supportsSourceURL) {
              let promises = assets.map((asset) => {
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null ||
                  _hmrDownload === void 0
                  ? void 0
                  : _hmrDownload.catch((err) => {
                      // Web extension fix
                      if (
                        extCtx &&
                        extCtx.runtime &&
                        extCtx.runtime.getManifest().manifest_version == 3 &&
                        typeof ServiceWorkerGlobalScope != "undefined" &&
                        global instanceof ServiceWorkerGlobalScope
                      ) {
                        extCtx.runtime.reload();
                        return;
                      }
                      throw err;
                    });
              });
              scriptsToRemove = await Promise.all(promises);
            }
            assets.forEach(function (asset) {
              hmrApply(module.bundle.root, asset);
            });
          } finally {
            delete global.parcelHotUpdate;
            if (scriptsToRemove)
              scriptsToRemove.forEach((script) => {
                if (script) {
                  var _document$head2;
                  (_document$head2 = document.head) === null ||
                    _document$head2 === void 0 ||
                    _document$head2.removeChild(script);
                }
              });
          }
        }
        function hmrApply(bundle /*: ParcelRequire */, asset /*:  HMRAsset */) {
          var modules = bundle.modules;
          if (!modules) return;
          if (asset.type === "css") reloadCSS();
          else if (asset.type === "js") {
            let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
            if (deps) {
              if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for (let dep in oldDeps)
                  if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                  }
              }
              if (supportsSourceURL)
                // Global eval. We would use `new Function` here but browser
                // support for source maps is better with eval.
                (0, eval)(asset.output);
              // $FlowFixMe
              let fn = global.parcelHotUpdate[asset.id];
              modules[asset.id] = [fn, deps];
            }
            // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
            // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
            if (bundle.parent) hmrApply(bundle.parent, asset);
          }
        }
        function hmrDelete(bundle, id) {
          let modules = bundle.modules;
          if (!modules) return;
          if (modules[id]) {
            // Collect dependencies that will become orphaned when this module is deleted.
            let deps = modules[id][1];
            let orphans = [];
            for (let dep in deps) {
              let parents = getParents(module.bundle.root, deps[dep]);
              if (parents.length === 1) orphans.push(deps[dep]);
            }
            // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
            delete modules[id];
            delete bundle.cache[id];
            // Now delete the orphans.
            orphans.forEach((id) => {
              hmrDelete(module.bundle.root, id);
            });
          } else if (bundle.parent) hmrDelete(bundle.parent, id);
        }
        function hmrAcceptCheck(
          bundle /*: ParcelRequire */,
          id /*: string */,
          depsByBundle /*: ?{ [string]: { [string]: string } }*/,
        ) {
          checkedAssets = {};
          if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
          // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
          let parents = getParents(module.bundle.root, id);
          let accepted = false;
          while (parents.length > 0) {
            let v = parents.shift();
            let a = hmrAcceptCheckOne(v[0], v[1], null);
            if (a)
              // If this parent accepts, stop traversing upward, but still consider siblings.
              accepted = true;
            else if (a !== null) {
              // Otherwise, queue the parents in the next level upward.
              let p = getParents(module.bundle.root, v[1]);
              if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
              }
              parents.push(...p);
            }
          }
          return accepted;
        }
        function hmrAcceptCheckOne(
          bundle /*: ParcelRequire */,
          id /*: string */,
          depsByBundle /*: ?{ [string]: { [string]: string } }*/,
        ) {
          var modules = bundle.modules;
          if (!modules) return;
          if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
            // If we reached the root bundle without finding where the asset should go,
            // there's nothing to do. Mark as "accepted" so we don't reload the page.
            if (!bundle.parent) {
              bundleNotFound = true;
              return true;
            }
            return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
          }
          if (checkedAssets[id]) return null;
          checkedAssets[id] = true;
          var cached = bundle.cache[id];
          if (!cached) return true;
          assetsToDispose.push([bundle, id]);
          if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
            assetsToAccept.push([bundle, id]);
            return true;
          }
          return false;
        }
        function hmrDisposeQueue() {
          // Dispose all old assets.
          for (let i = 0; i < assetsToDispose.length; i++) {
            let id = assetsToDispose[i][1];
            if (!disposedAssets[id]) {
              hmrDispose(assetsToDispose[i][0], id);
              disposedAssets[id] = true;
            }
          }
          assetsToDispose = [];
        }
        function hmrDispose(bundle /*: ParcelRequire */, id /*: string */) {
          var cached = bundle.cache[id];
          bundle.hotData[id] = {};
          if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
          if (cached && cached.hot && cached.hot._disposeCallbacks.length)
            cached.hot._disposeCallbacks.forEach(function (cb) {
              cb(bundle.hotData[id]);
            });
          delete bundle.cache[id];
        }
        function hmrAccept(bundle /*: ParcelRequire */, id /*: string */) {
          // Execute the module.
          bundle(id);
          // Run the accept callbacks in the new version of the module.
          var cached = bundle.cache[id];
          if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
            let assetsToAlsoAccept = [];
            cached.hot._acceptCallbacks.forEach(function (cb) {
              let additionalAssets = cb(function () {
                return getParents(module.bundle.root, id);
              });
              if (Array.isArray(additionalAssets) && additionalAssets.length)
                assetsToAlsoAccept.push(...additionalAssets);
            });
            if (assetsToAlsoAccept.length) {
              let handled = assetsToAlsoAccept.every(function (a) {
                return hmrAcceptCheck(a[0], a[1]);
              });
              if (!handled) return fullReload();
              hmrDisposeQueue();
            }
          }
        }
      },
      {},
    ],
    "9YDZd": [
      function (require, module, exports, __globalThis) {
        var _socket = require("../socket");
        const roomId = document.querySelector("input#room-id")?.value;
        const parent = document.querySelector("section#chat div");
        const messageInput = document.querySelector(
          "section#chat form input[name=message]",
        );
        console.log({
          messageInput,
        });
        document
          .querySelector("section#chat form.chat-form")
          ?.addEventListener("submit", (event) => {
            event.preventDefault();
            const message = messageInput?.value;
            messageInput.value = "";
            if (message?.trim().length === 0) return;
            fetch(`/chat/${roomId}`, {
              method: "post",
              headers: {
                "Content-Type": "application/json",
              },
              credentials: "same-origin",
              body: JSON.stringify({
                message,
              }),
            });
          });
        // route the socket connection towards your chat message as roomId.
        // this identifier will let you see what you chat to everyone in that roomId, including yourself,
        // which is the format described below that is loaded into the DOM.
        (0, _socket.socket).on(
          `chat-message:${roomId}`,
          ({ message, sender, gravatar, timestamp }) => {
            const container = document
              .querySelector("template#chat-message-template")
              ?.content.cloneNode(true);
            const img = container.querySelector("img");
            img.src = `https://www.gravatar.com/avatar/${gravatar}?s=32&d=monsterid`;
            img.alt = `${sender}'s avatar`;
            const messageElement = container.querySelector("span.message");
            messageElement.innerText = message;
            const tiemstampElement = container.querySelector("span.timestamp");
            tiemstampElement.innerText = new Date(timestamp).toLocaleString();
            parent?.appendChild(container);
            parent?.scrollTo({
              top: parent.scrollHeight,
              behavior: "smooth",
            });
          },
        );
      },
      { "../socket": "kvDhO" },
    ],
    kvDhO: [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, "socket", () => socket);
        var _socketIoClient = require("socket.io-client");
        var _socketIoClientDefault =
          parcelHelpers.interopDefault(_socketIoClient);
        const socket = (0, _socketIoClientDefault.default)();
      },
      {
        "socket.io-client": "8HBJR",
        "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3",
      },
    ],
    "8HBJR": [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
        parcelHelpers.defineInteropFlag(exports);
        /**
         * Protocol version.
         *
         * @public
         */ parcelHelpers.export(
          exports,
          "protocol",
          () => (0, _socketIoParser.protocol),
        );
        parcelHelpers.export(
          exports,
          "Fetch",
          () => (0, _engineIoClient.Fetch),
        );
        parcelHelpers.export(
          exports,
          "NodeXHR",
          () => (0, _engineIoClient.NodeXHR),
        );
        parcelHelpers.export(exports, "XHR", () => (0, _engineIoClient.XHR));
        parcelHelpers.export(
          exports,
          "NodeWebSocket",
          () => (0, _engineIoClient.NodeWebSocket),
        );
        parcelHelpers.export(
          exports,
          "WebSocket",
          () => (0, _engineIoClient.WebSocket),
        );
        parcelHelpers.export(
          exports,
          "WebTransport",
          () => (0, _engineIoClient.WebTransport),
        );
        /**
         * Expose constructors for standalone build.
         *
         * @public
         */ parcelHelpers.export(
          exports,
          "Manager",
          () => (0, _managerJs.Manager),
        );
        parcelHelpers.export(exports, "Socket", () => (0, _socketJs.Socket));
        parcelHelpers.export(exports, "io", () => lookup);
        parcelHelpers.export(exports, "connect", () => lookup);
        parcelHelpers.export(exports, "default", () => lookup);
        var _urlJs = require("./url.js");
        var _managerJs = require("./manager.js");
        var _socketJs = require("./socket.js");
        var _socketIoParser = require("socket.io-parser");
        var _engineIoClient = require("engine.io-client");
        /**
         * Managers cache.
         */ const cache = {};
        function lookup(uri, opts) {
          if (typeof uri === "object") {
            opts = uri;
            uri = undefined;
          }
          opts = opts || {};
          const parsed = (0, _urlJs.url)(uri, opts.path || "/socket.io");
          const source = parsed.source;
          const id = parsed.id;
          const path = parsed.path;
          const sameNamespace = cache[id] && path in cache[id]["nsps"];
          const newConnection =
            opts.forceNew ||
            opts["force new connection"] ||
            false === opts.multiplex ||
            sameNamespace;
          let io;
          if (newConnection) io = new (0, _managerJs.Manager)(source, opts);
          else {
            if (!cache[id])
              cache[id] = new (0, _managerJs.Manager)(source, opts);
            io = cache[id];
          }
          if (parsed.query && !opts.query) opts.query = parsed.queryKey;
          return io.socket(parsed.path, opts);
        }
        // so that "lookup" can be used both as a function (e.g. `io(...)`) and as a
        // namespace (e.g. `io.connect(...)`), for backward compatibility
        Object.assign(lookup, {
          Manager: (0, _managerJs.Manager),
          Socket: (0, _socketJs.Socket),
          io: lookup,
          connect: lookup,
        });
      },
      {
        "./url.js": "9Ze3o",
        "./manager.js": "94vh9",
        "./socket.js": "kbWgu",
        "socket.io-parser": "2lQL3",
        "engine.io-client": "jBHFs",
        "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3",
      },
    ],
    "9Ze3o": [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
        parcelHelpers.defineInteropFlag(exports);
        /**
         * URL parser.
         *
         * @param uri - url
         * @param path - the request path of the connection
         * @param loc - An object meant to mimic window.location.
         *        Defaults to window.location.
         * @public
         */ parcelHelpers.export(exports, "url", () => url);
        var _engineIoClient = require("engine.io-client");
        function url(uri, path = "", loc) {
          let obj = uri;
          // default to window.location
          loc = loc || (typeof location !== "undefined" && location);
          if (null == uri) uri = loc.protocol + "//" + loc.host;
          // relative path support
          if (typeof uri === "string") {
            if ("/" === uri.charAt(0)) {
              if ("/" === uri.charAt(1)) uri = loc.protocol + uri;
              else uri = loc.host + uri;
            }
            if (!/^(https?|wss?):\/\//.test(uri)) {
              if ("undefined" !== typeof loc) uri = loc.protocol + "//" + uri;
              else uri = "https://" + uri;
            }
            // parse
            obj = (0, _engineIoClient.parse)(uri);
          }
          // make sure we treat `localhost:80` and `localhost` equally
          if (!obj.port) {
            if (/^(http|ws)$/.test(obj.protocol)) obj.port = "80";
            else if (/^(http|ws)s$/.test(obj.protocol)) obj.port = "443";
          }
          obj.path = obj.path || "/";
          const ipv6 = obj.host.indexOf(":") !== -1;
          const host = ipv6 ? "[" + obj.host + "]" : obj.host;
          // define unique id
          obj.id = obj.protocol + "://" + host + ":" + obj.port + path;
          // define href
          obj.href =
            obj.protocol +
            "://" +
            host +
            (loc && loc.port === obj.port ? "" : ":" + obj.port);
          return obj;
        }
      },
      {
        "engine.io-client": "jBHFs",
        "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3",
      },
    ],
    jBHFs: [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(
          exports,
          "SocketWithoutUpgrade",
          () => (0, _socketJs.SocketWithoutUpgrade),
        );
        parcelHelpers.export(
          exports,
          "SocketWithUpgrade",
          () => (0, _socketJs.SocketWithUpgrade),
        );
        parcelHelpers.export(
          exports,
          "Transport",
          () => (0, _transportJs.Transport),
        );
        parcelHelpers.export(
          exports,
          "TransportError",
          () => (0, _transportJs.TransportError),
        );
        parcelHelpers.export(
          exports,
          "transports",
          () => (0, _indexJs.transports),
        );
        parcelHelpers.export(
          exports,
          "installTimerFunctions",
          () => (0, _utilJs.installTimerFunctions),
        );
        parcelHelpers.export(exports, "parse", () => (0, _parseuriJs.parse));
        parcelHelpers.export(
          exports,
          "nextTick",
          () => (0, _globalsNodeJs.nextTick),
        );
        parcelHelpers.export(
          exports,
          "Fetch",
          () => (0, _pollingFetchJs.Fetch),
        );
        parcelHelpers.export(
          exports,
          "NodeXHR",
          () => (0, _pollingXhrNodeJs.XHR),
        );
        parcelHelpers.export(exports, "XHR", () => (0, _pollingXhrJs.XHR));
        parcelHelpers.export(
          exports,
          "NodeWebSocket",
          () => (0, _websocketNodeJs.WS),
        );
        parcelHelpers.export(exports, "WebSocket", () => (0, _websocketJs.WS));
        parcelHelpers.export(
          exports,
          "WebTransport",
          () => (0, _webtransportJs.WT),
        );
        parcelHelpers.export(exports, "Socket", () => (0, _socketJs.Socket));
        parcelHelpers.export(exports, "protocol", () => protocol);
        var _socketJs = require("./socket.js");
        var _transportJs = require("./transport.js");
        var _indexJs = require("./transports/index.js");
        var _utilJs = require("./util.js");
        var _parseuriJs = require("./contrib/parseuri.js");
        var _globalsNodeJs = require("./globals.node.js");
        var _pollingFetchJs = require("./transports/polling-fetch.js");
        var _pollingXhrNodeJs = require("./transports/polling-xhr.node.js");
        var _pollingXhrJs = require("./transports/polling-xhr.js");
        var _websocketNodeJs = require("./transports/websocket.node.js");
        var _websocketJs = require("./transports/websocket.js");
        var _webtransportJs = require("./transports/webtransport.js");
        const protocol = (0, _socketJs.Socket).protocol;
      },
      {
        "./socket.js": "kpkbh",
        "./transport.js": "kwKKC",
        "./transports/index.js": "2neV7",
        "./util.js": "d7eyH",
        "./contrib/parseuri.js": "5RFyz",
        "./globals.node.js": "itT4K",
        "./transports/polling-fetch.js": "1LdqT",
        "./transports/polling-xhr.node.js": "jXsG0",
        "./transports/polling-xhr.js": "jXsG0",
        "./transports/websocket.node.js": "8y2e2",
        "./transports/websocket.js": "8y2e2",
        "./transports/webtransport.js": "k7fng",
        "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3",
      },
    ],
    kpkbh: [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
        parcelHelpers.defineInteropFlag(exports);
        /**
         * This class provides a WebSocket-like interface to connect to an Engine.IO server. The connection will be established
         * with one of the available low-level transports, like HTTP long-polling, WebSocket or WebTransport.
         *
         * This class comes without upgrade mechanism, which means that it will keep the first low-level transport that
         * successfully establishes the connection.
         *
         * In order to allow tree-shaking, there are no transports included, that's why the `transports` option is mandatory.
         *
         * @example
         * import { SocketWithoutUpgrade, WebSocket } from "engine.io-client";
         *
         * const socket = new SocketWithoutUpgrade({
         *   transports: [WebSocket]
         * });
         *
         * socket.on("open", () => {
         *   socket.send("hello");
         * });
         *
         * @see SocketWithUpgrade
         * @see Socket
         */ parcelHelpers.export(
          exports,
          "SocketWithoutUpgrade",
          () => SocketWithoutUpgrade,
        );
        /**
         * This class provides a WebSocket-like interface to connect to an Engine.IO server. The connection will be established
         * with one of the available low-level transports, like HTTP long-polling, WebSocket or WebTransport.
         *
         * This class comes with an upgrade mechanism, which means that once the connection is established with the first
         * low-level transport, it will try to upgrade to a better transport.
         *
         * In order to allow tree-shaking, there are no transports included, that's why the `transports` option is mandatory.
         *
         * @example
         * import { SocketWithUpgrade, WebSocket } from "engine.io-client";
         *
         * const socket = new SocketWithUpgrade({
         *   transports: [WebSocket]
         * });
         *
         * socket.on("open", () => {
         *   socket.send("hello");
         * });
         *
         * @see SocketWithoutUpgrade
         * @see Socket
         */ parcelHelpers.export(
          exports,
          "SocketWithUpgrade",
          () => SocketWithUpgrade,
        );
        /**
         * This class provides a WebSocket-like interface to connect to an Engine.IO server. The connection will be established
         * with one of the available low-level transports, like HTTP long-polling, WebSocket or WebTransport.
         *
         * This class comes with an upgrade mechanism, which means that once the connection is established with the first
         * low-level transport, it will try to upgrade to a better transport.
         *
         * @example
         * import { Socket } from "engine.io-client";
         *
         * const socket = new Socket();
         *
         * socket.on("open", () => {
         *   socket.send("hello");
         * });
         *
         * @see SocketWithoutUpgrade
         * @see SocketWithUpgrade
         */ parcelHelpers.export(exports, "Socket", () => Socket);
        var _indexJs = require("./transports/index.js");
        var _utilJs = require("./util.js");
        var _parseqsJs = require("./contrib/parseqs.js");
        var _parseuriJs = require("./contrib/parseuri.js");
        var _componentEmitter = require("@socket.io/component-emitter");
        var _engineIoParser = require("engine.io-parser");
        var _globalsNodeJs = require("./globals.node.js");
        const withEventListeners =
          typeof addEventListener === "function" &&
          typeof removeEventListener === "function";
        const OFFLINE_EVENT_LISTENERS = [];
        if (withEventListeners)
          // within a ServiceWorker, any event handler for the 'offline' event must be added on the initial evaluation of the
          // script, so we create one single event listener here which will forward the event to the socket instances
          addEventListener(
            "offline",
            () => {
              OFFLINE_EVENT_LISTENERS.forEach((listener) => listener());
            },
            false,
          );
        class SocketWithoutUpgrade extends (0, _componentEmitter.Emitter) {
          /**
           * Socket constructor.
           *
           * @param {String|Object} uri - uri or options
           * @param {Object} opts - options
           */ constructor(uri, opts) {
            super();
            this.binaryType = (0, _globalsNodeJs.defaultBinaryType);
            this.writeBuffer = [];
            this._prevBufferLen = 0;
            this._pingInterval = -1;
            this._pingTimeout = -1;
            this._maxPayload = -1;
            /**
             * The expiration timestamp of the {@link _pingTimeoutTimer} object is tracked, in case the timer is throttled and the
             * callback is not fired on time. This can happen for example when a laptop is suspended or when a phone is locked.
             */ this._pingTimeoutTime = Infinity;
            if (uri && "object" === typeof uri) {
              opts = uri;
              uri = null;
            }
            if (uri) {
              const parsedUri = (0, _parseuriJs.parse)(uri);
              opts.hostname = parsedUri.host;
              opts.secure =
                parsedUri.protocol === "https" || parsedUri.protocol === "wss";
              opts.port = parsedUri.port;
              if (parsedUri.query) opts.query = parsedUri.query;
            } else if (opts.host)
              opts.hostname = (0, _parseuriJs.parse)(opts.host).host;
            (0, _utilJs.installTimerFunctions)(this, opts);
            this.secure =
              null != opts.secure
                ? opts.secure
                : typeof location !== "undefined" &&
                  "https:" === location.protocol;
            if (opts.hostname && !opts.port)
              // if no port is specified manually, use the protocol default
              opts.port = this.secure ? "443" : "80";
            this.hostname =
              opts.hostname ||
              (typeof location !== "undefined"
                ? location.hostname
                : "localhost");
            this.port =
              opts.port ||
              (typeof location !== "undefined" && location.port
                ? location.port
                : this.secure
                  ? "443"
                  : "80");
            this.transports = [];
            this._transportsByName = {};
            opts.transports.forEach((t) => {
              const transportName = t.prototype.name;
              this.transports.push(transportName);
              this._transportsByName[transportName] = t;
            });
            this.opts = Object.assign(
              {
                path: "/engine.io",
                agent: false,
                withCredentials: false,
                upgrade: true,
                timestampParam: "t",
                rememberUpgrade: false,
                addTrailingSlash: true,
                rejectUnauthorized: true,
                perMessageDeflate: {
                  threshold: 1024,
                },
                transportOptions: {},
                closeOnBeforeunload: false,
              },
              opts,
            );
            this.opts.path =
              this.opts.path.replace(/\/$/, "") +
              (this.opts.addTrailingSlash ? "/" : "");
            if (typeof this.opts.query === "string")
              this.opts.query = (0, _parseqsJs.decode)(this.opts.query);
            if (withEventListeners) {
              if (this.opts.closeOnBeforeunload) {
                // Firefox closes the connection when the "beforeunload" event is emitted but not Chrome. This event listener
                // ensures every browser behaves the same (no "disconnect" event at the Socket.IO level when the page is
                // closed/reloaded)
                this._beforeunloadEventListener = () => {
                  if (this.transport) {
                    // silently close the transport
                    this.transport.removeAllListeners();
                    this.transport.close();
                  }
                };
                addEventListener(
                  "beforeunload",
                  this._beforeunloadEventListener,
                  false,
                );
              }
              if (this.hostname !== "localhost") {
                this._offlineEventListener = () => {
                  this._onClose("transport close", {
                    description: "network connection lost",
                  });
                };
                OFFLINE_EVENT_LISTENERS.push(this._offlineEventListener);
              }
            }
            if (this.opts.withCredentials)
              this._cookieJar = (0, _globalsNodeJs.createCookieJar)();
            this._open();
          }
          /**
           * Creates transport of the given type.
           *
           * @param {String} name - transport name
           * @return {Transport}
           * @private
           */ createTransport(name) {
            const query = Object.assign({}, this.opts.query);
            // append engine.io protocol identifier
            query.EIO = (0, _engineIoParser.protocol);
            // transport name
            query.transport = name;
            // session id if we already have one
            if (this.id) query.sid = this.id;
            const opts = Object.assign(
              {},
              this.opts,
              {
                query,
                socket: this,
                hostname: this.hostname,
                secure: this.secure,
                port: this.port,
              },
              this.opts.transportOptions[name],
            );
            return new this._transportsByName[name](opts);
          }
          /**
           * Initializes transport to use and starts probe.
           *
           * @private
           */ _open() {
            if (this.transports.length === 0) {
              // Emit error on next tick so it can be listened to
              this.setTimeoutFn(() => {
                this.emitReserved("error", "No transports available");
              }, 0);
              return;
            }
            const transportName =
              this.opts.rememberUpgrade &&
              SocketWithoutUpgrade.priorWebsocketSuccess &&
              this.transports.indexOf("websocket") !== -1
                ? "websocket"
                : this.transports[0];
            this.readyState = "opening";
            const transport = this.createTransport(transportName);
            transport.open();
            this.setTransport(transport);
          }
          /**
           * Sets the current transport. Disables the existing one (if any).
           *
           * @private
           */ setTransport(transport) {
            if (this.transport) this.transport.removeAllListeners();
            // set up transport
            this.transport = transport;
            // set up transport listeners
            transport
              .on("drain", this._onDrain.bind(this))
              .on("packet", this._onPacket.bind(this))
              .on("error", this._onError.bind(this))
              .on("close", (reason) =>
                this._onClose("transport close", reason),
              );
          }
          /**
           * Called when connection is deemed open.
           *
           * @private
           */ onOpen() {
            this.readyState = "open";
            SocketWithoutUpgrade.priorWebsocketSuccess =
              "websocket" === this.transport.name;
            this.emitReserved("open");
            this.flush();
          }
          /**
           * Handles a packet.
           *
           * @private
           */ _onPacket(packet) {
            if (
              "opening" === this.readyState ||
              "open" === this.readyState ||
              "closing" === this.readyState
            ) {
              this.emitReserved("packet", packet);
              // Socket is live - any packet counts
              this.emitReserved("heartbeat");
              switch (packet.type) {
                case "open":
                  this.onHandshake(JSON.parse(packet.data));
                  break;
                case "ping":
                  this._sendPacket("pong");
                  this.emitReserved("ping");
                  this.emitReserved("pong");
                  this._resetPingTimeout();
                  break;
                case "error":
                  const err = new Error("server error");
                  // @ts-ignore
                  err.code = packet.data;
                  this._onError(err);
                  break;
                case "message":
                  this.emitReserved("data", packet.data);
                  this.emitReserved("message", packet.data);
                  break;
              }
            }
          }
          /**
           * Called upon handshake completion.
           *
           * @param {Object} data - handshake obj
           * @private
           */ onHandshake(data) {
            this.emitReserved("handshake", data);
            this.id = data.sid;
            this.transport.query.sid = data.sid;
            this._pingInterval = data.pingInterval;
            this._pingTimeout = data.pingTimeout;
            this._maxPayload = data.maxPayload;
            this.onOpen();
            // In case open handler closes socket
            if ("closed" === this.readyState) return;
            this._resetPingTimeout();
          }
          /**
           * Sets and resets ping timeout timer based on server pings.
           *
           * @private
           */ _resetPingTimeout() {
            this.clearTimeoutFn(this._pingTimeoutTimer);
            const delay = this._pingInterval + this._pingTimeout;
            this._pingTimeoutTime = Date.now() + delay;
            this._pingTimeoutTimer = this.setTimeoutFn(() => {
              this._onClose("ping timeout");
            }, delay);
            if (this.opts.autoUnref) this._pingTimeoutTimer.unref();
          }
          /**
           * Called on `drain` event
           *
           * @private
           */ _onDrain() {
            this.writeBuffer.splice(0, this._prevBufferLen);
            // setting prevBufferLen = 0 is very important
            // for example, when upgrading, upgrade packet is sent over,
            // and a nonzero prevBufferLen could cause problems on `drain`
            this._prevBufferLen = 0;
            if (0 === this.writeBuffer.length) this.emitReserved("drain");
            else this.flush();
          }
          /**
           * Flush write buffers.
           *
           * @private
           */ flush() {
            if (
              "closed" !== this.readyState &&
              this.transport.writable &&
              !this.upgrading &&
              this.writeBuffer.length
            ) {
              const packets = this._getWritablePackets();
              this.transport.send(packets);
              // keep track of current length of writeBuffer
              // splice writeBuffer and callbackBuffer on `drain`
              this._prevBufferLen = packets.length;
              this.emitReserved("flush");
            }
          }
          /**
           * Ensure the encoded size of the writeBuffer is below the maxPayload value sent by the server (only for HTTP
           * long-polling)
           *
           * @private
           */ _getWritablePackets() {
            const shouldCheckPayloadSize =
              this._maxPayload &&
              this.transport.name === "polling" &&
              this.writeBuffer.length > 1;
            if (!shouldCheckPayloadSize) return this.writeBuffer;
            let payloadSize = 1; // first packet type
            for (let i = 0; i < this.writeBuffer.length; i++) {
              const data = this.writeBuffer[i].data;
              if (data) payloadSize += (0, _utilJs.byteLength)(data);
              if (i > 0 && payloadSize > this._maxPayload)
                return this.writeBuffer.slice(0, i);
              payloadSize += 2; // separator + packet type
            }
            return this.writeBuffer;
          }
          /**
           * Checks whether the heartbeat timer has expired but the socket has not yet been notified.
           *
           * Note: this method is private for now because it does not really fit the WebSocket API, but if we put it in the
           * `write()` method then the message would not be buffered by the Socket.IO client.
           *
           * @return {boolean}
           * @private
           */ /* private */ _hasPingExpired() {
            if (!this._pingTimeoutTime) return true;
            const hasExpired = Date.now() > this._pingTimeoutTime;
            if (hasExpired) {
              this._pingTimeoutTime = 0;
              (0, _globalsNodeJs.nextTick)(() => {
                this._onClose("ping timeout");
              }, this.setTimeoutFn);
            }
            return hasExpired;
          }
          /**
           * Sends a message.
           *
           * @param {String} msg - message.
           * @param {Object} options.
           * @param {Function} fn - callback function.
           * @return {Socket} for chaining.
           */ write(msg, options, fn) {
            this._sendPacket("message", msg, options, fn);
            return this;
          }
          /**
           * Sends a message. Alias of {@link Socket#write}.
           *
           * @param {String} msg - message.
           * @param {Object} options.
           * @param {Function} fn - callback function.
           * @return {Socket} for chaining.
           */ send(msg, options, fn) {
            this._sendPacket("message", msg, options, fn);
            return this;
          }
          /**
           * Sends a packet.
           *
           * @param {String} type: packet type.
           * @param {String} data.
           * @param {Object} options.
           * @param {Function} fn - callback function.
           * @private
           */ _sendPacket(type, data, options, fn) {
            if ("function" === typeof data) {
              fn = data;
              data = undefined;
            }
            if ("function" === typeof options) {
              fn = options;
              options = null;
            }
            if ("closing" === this.readyState || "closed" === this.readyState)
              return;
            options = options || {};
            options.compress = false !== options.compress;
            const packet = {
              type: type,
              data: data,
              options: options,
            };
            this.emitReserved("packetCreate", packet);
            this.writeBuffer.push(packet);
            if (fn) this.once("flush", fn);
            this.flush();
          }
          /**
           * Closes the connection.
           */ close() {
            const close = () => {
              this._onClose("forced close");
              this.transport.close();
            };
            const cleanupAndClose = () => {
              this.off("upgrade", cleanupAndClose);
              this.off("upgradeError", cleanupAndClose);
              close();
            };
            const waitForUpgrade = () => {
              // wait for upgrade to finish since we can't send packets while pausing a transport
              this.once("upgrade", cleanupAndClose);
              this.once("upgradeError", cleanupAndClose);
            };
            if ("opening" === this.readyState || "open" === this.readyState) {
              this.readyState = "closing";
              if (this.writeBuffer.length)
                this.once("drain", () => {
                  if (this.upgrading) waitForUpgrade();
                  else close();
                });
              else if (this.upgrading) waitForUpgrade();
              else close();
            }
            return this;
          }
          /**
           * Called upon transport error
           *
           * @private
           */ _onError(err) {
            SocketWithoutUpgrade.priorWebsocketSuccess = false;
            if (
              this.opts.tryAllTransports &&
              this.transports.length > 1 &&
              this.readyState === "opening"
            ) {
              this.transports.shift();
              return this._open();
            }
            this.emitReserved("error", err);
            this._onClose("transport error", err);
          }
          /**
           * Called upon transport close.
           *
           * @private
           */ _onClose(reason, description) {
            if (
              "opening" === this.readyState ||
              "open" === this.readyState ||
              "closing" === this.readyState
            ) {
              // clear timers
              this.clearTimeoutFn(this._pingTimeoutTimer);
              // stop event from firing again for transport
              this.transport.removeAllListeners("close");
              // ensure transport won't stay open
              this.transport.close();
              // ignore further transport communication
              this.transport.removeAllListeners();
              if (withEventListeners) {
                if (this._beforeunloadEventListener)
                  removeEventListener(
                    "beforeunload",
                    this._beforeunloadEventListener,
                    false,
                  );
                if (this._offlineEventListener) {
                  const i = OFFLINE_EVENT_LISTENERS.indexOf(
                    this._offlineEventListener,
                  );
                  if (i !== -1) OFFLINE_EVENT_LISTENERS.splice(i, 1);
                }
              }
              // set ready state
              this.readyState = "closed";
              // clear session id
              this.id = null;
              // emit close event
              this.emitReserved("close", reason, description);
              // clean buffers after, so users can still
              // grab the buffers on `close` event
              this.writeBuffer = [];
              this._prevBufferLen = 0;
            }
          }
        }
        SocketWithoutUpgrade.protocol = (0, _engineIoParser.protocol);
        class SocketWithUpgrade extends SocketWithoutUpgrade {
          constructor() {
            super(...arguments);
            this._upgrades = [];
          }
          onOpen() {
            super.onOpen();
            if ("open" === this.readyState && this.opts.upgrade)
              for (let i = 0; i < this._upgrades.length; i++)
                this._probe(this._upgrades[i]);
          }
          /**
           * Probes a transport.
           *
           * @param {String} name - transport name
           * @private
           */ _probe(name) {
            let transport = this.createTransport(name);
            let failed = false;
            SocketWithoutUpgrade.priorWebsocketSuccess = false;
            const onTransportOpen = () => {
              if (failed) return;
              transport.send([
                {
                  type: "ping",
                  data: "probe",
                },
              ]);
              transport.once("packet", (msg) => {
                if (failed) return;
                if ("pong" === msg.type && "probe" === msg.data) {
                  this.upgrading = true;
                  this.emitReserved("upgrading", transport);
                  if (!transport) return;
                  SocketWithoutUpgrade.priorWebsocketSuccess =
                    "websocket" === transport.name;
                  this.transport.pause(() => {
                    if (failed) return;
                    if ("closed" === this.readyState) return;
                    cleanup();
                    this.setTransport(transport);
                    transport.send([
                      {
                        type: "upgrade",
                      },
                    ]);
                    this.emitReserved("upgrade", transport);
                    transport = null;
                    this.upgrading = false;
                    this.flush();
                  });
                } else {
                  const err = new Error("probe error");
                  // @ts-ignore
                  err.transport = transport.name;
                  this.emitReserved("upgradeError", err);
                }
              });
            };
            function freezeTransport() {
              if (failed) return;
              // Any callback called by transport should be ignored since now
              failed = true;
              cleanup();
              transport.close();
              transport = null;
            }
            // Handle any error that happens while probing
            const onerror = (err) => {
              const error = new Error("probe error: " + err);
              // @ts-ignore
              error.transport = transport.name;
              freezeTransport();
              this.emitReserved("upgradeError", error);
            };
            function onTransportClose() {
              onerror("transport closed");
            }
            // When the socket is closed while we're probing
            function onclose() {
              onerror("socket closed");
            }
            // When the socket is upgraded while we're probing
            function onupgrade(to) {
              if (transport && to.name !== transport.name) freezeTransport();
            }
            // Remove all listeners on the transport and on self
            const cleanup = () => {
              transport.removeListener("open", onTransportOpen);
              transport.removeListener("error", onerror);
              transport.removeListener("close", onTransportClose);
              this.off("close", onclose);
              this.off("upgrading", onupgrade);
            };
            transport.once("open", onTransportOpen);
            transport.once("error", onerror);
            transport.once("close", onTransportClose);
            this.once("close", onclose);
            this.once("upgrading", onupgrade);
            if (
              this._upgrades.indexOf("webtransport") !== -1 &&
              name !== "webtransport"
            )
              // favor WebTransport
              this.setTimeoutFn(() => {
                if (!failed) transport.open();
              }, 200);
            else transport.open();
          }
          onHandshake(data) {
            this._upgrades = this._filterUpgrades(data.upgrades);
            super.onHandshake(data);
          }
          /**
           * Filters upgrades, returning only those matching client transports.
           *
           * @param {Array} upgrades - server upgrades
           * @private
           */ _filterUpgrades(upgrades) {
            const filteredUpgrades = [];
            for (let i = 0; i < upgrades.length; i++)
              if (~this.transports.indexOf(upgrades[i]))
                filteredUpgrades.push(upgrades[i]);
            return filteredUpgrades;
          }
        }
        class Socket extends SocketWithUpgrade {
          constructor(uri, opts = {}) {
            const o = typeof uri === "object" ? uri : opts;
            if (
              !o.transports ||
              (o.transports && typeof o.transports[0] === "string")
            )
              o.transports = (
                o.transports || ["polling", "websocket", "webtransport"]
              )
                .map((transportName) => (0, _indexJs.transports)[transportName])
                .filter((t) => !!t);
            super(uri, o);
          }
        }
      },
      {
        "./transports/index.js": "2neV7",
        "./util.js": "d7eyH",
        "./contrib/parseqs.js": "aFNEN",
        "./contrib/parseuri.js": "5RFyz",
        "@socket.io/component-emitter": "3GA7L",
        "engine.io-parser": "2SHiP",
        "./globals.node.js": "itT4K",
        "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3",
      },
    ],
    "2neV7": [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, "transports", () => transports);
        var _pollingXhrNodeJs = require("./polling-xhr.node.js");
        var _websocketNodeJs = require("./websocket.node.js");
        var _webtransportJs = require("./webtransport.js");
        const transports = {
          websocket: (0, _websocketNodeJs.WS),
          webtransport: (0, _webtransportJs.WT),
          polling: (0, _pollingXhrNodeJs.XHR),
        };
      },
      {
        "./polling-xhr.node.js": "jXsG0",
        "./websocket.node.js": "8y2e2",
        "./webtransport.js": "k7fng",
        "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3",
      },
    ],
    jXsG0: [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, "BaseXHR", () => BaseXHR);
        parcelHelpers.export(exports, "Request", () => Request);
        /**
         * HTTP long-polling based on the built-in `XMLHttpRequest` object.
         *
         * Usage: browser
         *
         * @see https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
         */ parcelHelpers.export(exports, "XHR", () => XHR);
        var _pollingJs = require("./polling.js");
        var _componentEmitter = require("@socket.io/component-emitter");
        var _utilJs = require("../util.js");
        var _globalsNodeJs = require("../globals.node.js");
        var _hasCorsJs = require("../contrib/has-cors.js");
        function empty() {}
        class BaseXHR extends (0, _pollingJs.Polling) {
          /**
           * XHR Polling constructor.
           *
           * @param {Object} opts
           * @package
           */ constructor(opts) {
            super(opts);
            if (typeof location !== "undefined") {
              const isSSL = "https:" === location.protocol;
              let port = location.port;
              // some user agents have empty `location.port`
              if (!port) port = isSSL ? "443" : "80";
              this.xd =
                (typeof location !== "undefined" &&
                  opts.hostname !== location.hostname) ||
                port !== opts.port;
            }
          }
          /**
           * Sends data.
           *
           * @param {String} data to send.
           * @param {Function} called upon flush.
           * @private
           */ doWrite(data, fn) {
            const req = this.request({
              method: "POST",
              data: data,
            });
            req.on("success", fn);
            req.on("error", (xhrStatus, context) => {
              this.onError("xhr post error", xhrStatus, context);
            });
          }
          /**
           * Starts a poll cycle.
           *
           * @private
           */ doPoll() {
            const req = this.request();
            req.on("data", this.onData.bind(this));
            req.on("error", (xhrStatus, context) => {
              this.onError("xhr poll error", xhrStatus, context);
            });
            this.pollXhr = req;
          }
        }
        class Request extends (0, _componentEmitter.Emitter) {
          /**
           * Request constructor
           *
           * @param {Object} options
           * @package
           */ constructor(createRequest, uri, opts) {
            super();
            this.createRequest = createRequest;
            (0, _utilJs.installTimerFunctions)(this, opts);
            this._opts = opts;
            this._method = opts.method || "GET";
            this._uri = uri;
            this._data = undefined !== opts.data ? opts.data : null;
            this._create();
          }
          /**
           * Creates the XHR object and sends the request.
           *
           * @private
           */ _create() {
            var _a;
            const opts = (0, _utilJs.pick)(
              this._opts,
              "agent",
              "pfx",
              "key",
              "passphrase",
              "cert",
              "ca",
              "ciphers",
              "rejectUnauthorized",
              "autoUnref",
            );
            opts.xdomain = !!this._opts.xd;
            const xhr = (this._xhr = this.createRequest(opts));
            try {
              xhr.open(this._method, this._uri, true);
              try {
                if (this._opts.extraHeaders) {
                  // @ts-ignore
                  xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
                  for (let i in this._opts.extraHeaders)
                    if (this._opts.extraHeaders.hasOwnProperty(i))
                      xhr.setRequestHeader(i, this._opts.extraHeaders[i]);
                }
              } catch (e) {}
              if ("POST" === this._method)
                try {
                  xhr.setRequestHeader(
                    "Content-type",
                    "text/plain;charset=UTF-8",
                  );
                } catch (e) {}
              try {
                xhr.setRequestHeader("Accept", "*/*");
              } catch (e) {}
              (_a = this._opts.cookieJar) === null ||
                _a === void 0 ||
                _a.addCookies(xhr);
              // ie6 check
              if ("withCredentials" in xhr)
                xhr.withCredentials = this._opts.withCredentials;
              if (this._opts.requestTimeout)
                xhr.timeout = this._opts.requestTimeout;
              xhr.onreadystatechange = () => {
                var _a;
                if (xhr.readyState === 3)
                  (_a = this._opts.cookieJar) === null ||
                    _a === void 0 ||
                    _a.parseCookies(
                      // @ts-ignore
                      xhr.getResponseHeader("set-cookie"),
                    );
                if (4 !== xhr.readyState) return;
                if (200 === xhr.status || 1223 === xhr.status)
                  this._onLoad(); // make sure the `error` event handler that's user-set
                else
                  // does not throw in the same tick and gets caught here
                  this.setTimeoutFn(() => {
                    this._onError(
                      typeof xhr.status === "number" ? xhr.status : 0,
                    );
                  }, 0);
              };
              xhr.send(this._data);
            } catch (e) {
              // Need to defer since .create() is called directly from the constructor
              // and thus the 'error' event can only be only bound *after* this exception
              // occurs.  Therefore, also, we cannot throw here at all.
              this.setTimeoutFn(() => {
                this._onError(e);
              }, 0);
              return;
            }
            if (typeof document !== "undefined") {
              this._index = Request.requestsCount++;
              Request.requests[this._index] = this;
            }
          }
          /**
           * Called upon error.
           *
           * @private
           */ _onError(err) {
            this.emitReserved("error", err, this._xhr);
            this._cleanup(true);
          }
          /**
           * Cleans up house.
           *
           * @private
           */ _cleanup(fromError) {
            if ("undefined" === typeof this._xhr || null === this._xhr) return;
            this._xhr.onreadystatechange = empty;
            if (fromError)
              try {
                this._xhr.abort();
              } catch (e) {}
            if (typeof document !== "undefined")
              delete Request.requests[this._index];
            this._xhr = null;
          }
          /**
           * Called upon load.
           *
           * @private
           */ _onLoad() {
            const data = this._xhr.responseText;
            if (data !== null) {
              this.emitReserved("data", data);
              this.emitReserved("success");
              this._cleanup();
            }
          }
          /**
           * Aborts the request.
           *
           * @package
           */ abort() {
            this._cleanup();
          }
        }
        Request.requestsCount = 0;
        Request.requests = {};
        /**
         * Aborts pending requests when unloading the window. This is needed to prevent
         * memory leaks (e.g. when using IE) and to ensure that no spurious error is
         * emitted.
         */ if (typeof document !== "undefined") {
          // @ts-ignore
          if (typeof attachEvent === "function")
            // @ts-ignore
            attachEvent("onunload", unloadHandler);
          else if (typeof addEventListener === "function") {
            const terminationEvent =
              "onpagehide" in (0, _globalsNodeJs.globalThisShim)
                ? "pagehide"
                : "unload";
            addEventListener(terminationEvent, unloadHandler, false);
          }
        }
        function unloadHandler() {
          for (let i in Request.requests)
            if (Request.requests.hasOwnProperty(i)) Request.requests[i].abort();
        }
        const hasXHR2 = (function () {
          const xhr = newRequest({
            xdomain: false,
          });
          return xhr && xhr.responseType !== null;
        })();
        class XHR extends BaseXHR {
          constructor(opts) {
            super(opts);
            const forceBase64 = opts && opts.forceBase64;
            this.supportsBinary = hasXHR2 && !forceBase64;
          }
          request(opts = {}) {
            Object.assign(
              opts,
              {
                xd: this.xd,
              },
              this.opts,
            );
            return new Request(newRequest, this.uri(), opts);
          }
        }
        function newRequest(opts) {
          const xdomain = opts.xdomain;
          // XMLHttpRequest can be disabled on IE
          try {
            if (
              "undefined" !== typeof XMLHttpRequest &&
              (!xdomain || (0, _hasCorsJs.hasCORS))
            )
              return new XMLHttpRequest();
          } catch (e) {}
          if (!xdomain)
            try {
              return new (0, _globalsNodeJs.globalThisShim)[
                ["Active"].concat("Object").join("X")
              ]("Microsoft.XMLHTTP");
            } catch (e) {}
        }
      },
      {
        "./polling.js": "HgHsi",
        "@socket.io/component-emitter": "3GA7L",
        "../util.js": "d7eyH",
        "../globals.node.js": "itT4K",
        "../contrib/has-cors.js": "kPgMI",
        "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3",
      },
    ],
    HgHsi: [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, "Polling", () => Polling);
        var _transportJs = require("../transport.js");
        var _utilJs = require("../util.js");
        var _engineIoParser = require("engine.io-parser");
        class Polling extends (0, _transportJs.Transport) {
          constructor() {
            super(...arguments);
            this._polling = false;
          }
          get name() {
            return "polling";
          }
          /**
           * Opens the socket (triggers polling). We write a PING message to determine
           * when the transport is open.
           *
           * @protected
           */ doOpen() {
            this._poll();
          }
          /**
           * Pauses polling.
           *
           * @param {Function} onPause - callback upon buffers are flushed and transport is paused
           * @package
           */ pause(onPause) {
            this.readyState = "pausing";
            const pause = () => {
              this.readyState = "paused";
              onPause();
            };
            if (this._polling || !this.writable) {
              let total = 0;
              if (this._polling) {
                total++;
                this.once("pollComplete", function () {
                  --total || pause();
                });
              }
              if (!this.writable) {
                total++;
                this.once("drain", function () {
                  --total || pause();
                });
              }
            } else pause();
          }
          /**
           * Starts polling cycle.
           *
           * @private
           */ _poll() {
            this._polling = true;
            this.doPoll();
            this.emitReserved("poll");
          }
          /**
           * Overloads onData to detect payloads.
           *
           * @protected
           */ onData(data) {
            const callback = (packet) => {
              // if its the first message we consider the transport open
              if ("opening" === this.readyState && packet.type === "open")
                this.onOpen();
              // if its a close packet, we close the ongoing requests
              if ("close" === packet.type) {
                this.onClose({
                  description: "transport closed by the server",
                });
                return false;
              }
              // otherwise bypass onData and handle the message
              this.onPacket(packet);
            };
            // decode payload
            (0, _engineIoParser.decodePayload)(
              data,
              this.socket.binaryType,
            ).forEach(callback);
            // if an event did not trigger closing
            if ("closed" !== this.readyState) {
              // if we got data we're not polling
              this._polling = false;
              this.emitReserved("pollComplete");
              if ("open" === this.readyState) this._poll();
            }
          }
          /**
           * For polling, send a close packet.
           *
           * @protected
           */ doClose() {
            const close = () => {
              this.write([
                {
                  type: "close",
                },
              ]);
            };
            if ("open" === this.readyState)
              close(); // in case we're trying to close while
            else
              // handshaking is in progress (GH-164)
              this.once("open", close);
          }
          /**
           * Writes a packets payload.
           *
           * @param {Array} packets - data packets
           * @protected
           */ write(packets) {
            this.writable = false;
            (0, _engineIoParser.encodePayload)(packets, (data) => {
              this.doWrite(data, () => {
                this.writable = true;
                this.emitReserved("drain");
              });
            });
          }
          /**
           * Generates uri for connection.
           *
           * @private
           */ uri() {
            const schema = this.opts.secure ? "https" : "http";
            const query = this.query || {};
            // cache busting is forced
            if (false !== this.opts.timestampRequests)
              query[this.opts.timestampParam] = (0, _utilJs.randomString)();
            if (!this.supportsBinary && !query.sid) query.b64 = 1;
            return this.createUri(schema, query);
          }
        }
      },
      {
        "../transport.js": "kwKKC",
        "../util.js": "d7eyH",
        "engine.io-parser": "2SHiP",
        "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3",
      },
    ],
    kwKKC: [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, "TransportError", () => TransportError);
        parcelHelpers.export(exports, "Transport", () => Transport);
        var _engineIoParser = require("engine.io-parser");
        var _componentEmitter = require("@socket.io/component-emitter");
        var _utilJs = require("./util.js");
        var _parseqsJs = require("./contrib/parseqs.js");
        class TransportError extends Error {
          constructor(reason, description, context) {
            super(reason);
            this.description = description;
            this.context = context;
            this.type = "TransportError";
          }
        }
        class Transport extends (0, _componentEmitter.Emitter) {
          /**
           * Transport abstract constructor.
           *
           * @param {Object} opts - options
           * @protected
           */ constructor(opts) {
            super();
            this.writable = false;
            (0, _utilJs.installTimerFunctions)(this, opts);
            this.opts = opts;
            this.query = opts.query;
            this.socket = opts.socket;
            this.supportsBinary = !opts.forceBase64;
          }
          /**
           * Emits an error.
           *
           * @param {String} reason
           * @param description
           * @param context - the error context
           * @return {Transport} for chaining
           * @protected
           */ onError(reason, description, context) {
            super.emitReserved(
              "error",
              new TransportError(reason, description, context),
            );
            return this;
          }
          /**
           * Opens the transport.
           */ open() {
            this.readyState = "opening";
            this.doOpen();
            return this;
          }
          /**
           * Closes the transport.
           */ close() {
            if (this.readyState === "opening" || this.readyState === "open") {
              this.doClose();
              this.onClose();
            }
            return this;
          }
          /**
           * Sends multiple packets.
           *
           * @param {Array} packets
           */ send(packets) {
            if (this.readyState === "open") this.write(packets);
          }
          /**
           * Called upon open
           *
           * @protected
           */ onOpen() {
            this.readyState = "open";
            this.writable = true;
            super.emitReserved("open");
          }
          /**
           * Called with data.
           *
           * @param {String} data
           * @protected
           */ onData(data) {
            const packet = (0, _engineIoParser.decodePacket)(
              data,
              this.socket.binaryType,
            );
            this.onPacket(packet);
          }
          /**
           * Called with a decoded packet.
           *
           * @protected
           */ onPacket(packet) {
            super.emitReserved("packet", packet);
          }
          /**
           * Called upon close.
           *
           * @protected
           */ onClose(details) {
            this.readyState = "closed";
            super.emitReserved("close", details);
          }
          /**
           * Pauses the transport, in order not to lose packets during an upgrade.
           *
           * @param onPause
           */ pause(onPause) {}
          createUri(schema, query = {}) {
            return (
              schema +
              "://" +
              this._hostname() +
              this._port() +
              this.opts.path +
              this._query(query)
            );
          }
          _hostname() {
            const hostname = this.opts.hostname;
            return hostname.indexOf(":") === -1
              ? hostname
              : "[" + hostname + "]";
          }
          _port() {
            if (
              this.opts.port &&
              ((this.opts.secure && Number(this.opts.port !== 443)) ||
                (!this.opts.secure && Number(this.opts.port) !== 80))
            )
              return ":" + this.opts.port;
            else return "";
          }
          _query(query) {
            const encodedQuery = (0, _parseqsJs.encode)(query);
            return encodedQuery.length ? "?" + encodedQuery : "";
          }
        }
      },
      {
        "engine.io-parser": "2SHiP",
        "@socket.io/component-emitter": "3GA7L",
        "./util.js": "d7eyH",
        "./contrib/parseqs.js": "aFNEN",
        "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3",
      },
    ],
    "2SHiP": [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(
          exports,
          "createPacketEncoderStream",
          () => createPacketEncoderStream,
        );
        parcelHelpers.export(
          exports,
          "createPacketDecoderStream",
          () => createPacketDecoderStream,
        );
        parcelHelpers.export(exports, "protocol", () => protocol);
        parcelHelpers.export(
          exports,
          "encodePacket",
          () => (0, _encodePacketJs.encodePacket),
        );
        parcelHelpers.export(exports, "encodePayload", () => encodePayload);
        parcelHelpers.export(
          exports,
          "decodePacket",
          () => (0, _decodePacketJs.decodePacket),
        );
        parcelHelpers.export(exports, "decodePayload", () => decodePayload);
        var _encodePacketJs = require("./encodePacket.js");
        var _decodePacketJs = require("./decodePacket.js");
        var _commonsJs = require("./commons.js");
        const SEPARATOR = String.fromCharCode(30); // see https://en.wikipedia.org/wiki/Delimiter#ASCII_delimited_text
        const encodePayload = (packets, callback) => {
          // some packets may be added to the array while encoding, so the initial length must be saved
          const length = packets.length;
          const encodedPackets = new Array(length);
          let count = 0;
          packets.forEach((packet, i) => {
            // force base64 encoding for binary packets
            (0, _encodePacketJs.encodePacket)(
              packet,
              false,
              (encodedPacket) => {
                encodedPackets[i] = encodedPacket;
                if (++count === length)
                  callback(encodedPackets.join(SEPARATOR));
              },
            );
          });
        };
        const decodePayload = (encodedPayload, binaryType) => {
          const encodedPackets = encodedPayload.split(SEPARATOR);
          const packets = [];
          for (let i = 0; i < encodedPackets.length; i++) {
            const decodedPacket = (0, _decodePacketJs.decodePacket)(
              encodedPackets[i],
              binaryType,
            );
            packets.push(decodedPacket);
            if (decodedPacket.type === "error") break;
          }
          return packets;
        };
        function createPacketEncoderStream() {
          return new TransformStream({
            transform(packet, controller) {
              (0, _encodePacketJs.encodePacketToBinary)(
                packet,
                (encodedPacket) => {
                  const payloadLength = encodedPacket.length;
                  let header;
                  // inspired by the WebSocket format: https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#decoding_payload_length
                  if (payloadLength < 126) {
                    header = new Uint8Array(1);
                    new DataView(header.buffer).setUint8(0, payloadLength);
                  } else if (payloadLength < 65536) {
                    header = new Uint8Array(3);
                    const view = new DataView(header.buffer);
                    view.setUint8(0, 126);
                    view.setUint16(1, payloadLength);
                  } else {
                    header = new Uint8Array(9);
                    const view = new DataView(header.buffer);
                    view.setUint8(0, 127);
                    view.setBigUint64(1, BigInt(payloadLength));
                  }
                  // first bit indicates whether the payload is plain text (0) or binary (1)
                  if (packet.data && typeof packet.data !== "string")
                    header[0] |= 0x80;
                  controller.enqueue(header);
                  controller.enqueue(encodedPacket);
                },
              );
            },
          });
        }
        let TEXT_DECODER;
        function totalLength(chunks) {
          return chunks.reduce((acc, chunk) => acc + chunk.length, 0);
        }
        function concatChunks(chunks, size) {
          if (chunks[0].length === size) return chunks.shift();
          const buffer = new Uint8Array(size);
          let j = 0;
          for (let i = 0; i < size; i++) {
            buffer[i] = chunks[0][j++];
            if (j === chunks[0].length) {
              chunks.shift();
              j = 0;
            }
          }
          if (chunks.length && j < chunks[0].length)
            chunks[0] = chunks[0].slice(j);
          return buffer;
        }
        function createPacketDecoderStream(maxPayload, binaryType) {
          if (!TEXT_DECODER) TEXT_DECODER = new TextDecoder();
          const chunks = [];
          let state = 0; /* State.READ_HEADER */
          let expectedLength = -1;
          let isBinary = false;
          return new TransformStream({
            transform(chunk, controller) {
              chunks.push(chunk);
              while (true) {
                if (state === 0 /* State.READ_HEADER */) {
                  if (totalLength(chunks) < 1) break;
                  const header = concatChunks(chunks, 1);
                  isBinary = (header[0] & 0x80) === 0x80;
                  expectedLength = header[0] & 0x7f;
                  if (expectedLength < 126) state = 3 /* State.READ_PAYLOAD */;
                  else if (expectedLength === 126)
                    state = 1 /* State.READ_EXTENDED_LENGTH_16 */;
                  else state = 2 /* State.READ_EXTENDED_LENGTH_64 */;
                } else if (state === 1 /* State.READ_EXTENDED_LENGTH_16 */) {
                  if (totalLength(chunks) < 2) break;
                  const headerArray = concatChunks(chunks, 2);
                  expectedLength = new DataView(
                    headerArray.buffer,
                    headerArray.byteOffset,
                    headerArray.length,
                  ).getUint16(0);
                  state = 3 /* State.READ_PAYLOAD */;
                } else if (state === 2 /* State.READ_EXTENDED_LENGTH_64 */) {
                  if (totalLength(chunks) < 8) break;
                  const headerArray = concatChunks(chunks, 8);
                  const view = new DataView(
                    headerArray.buffer,
                    headerArray.byteOffset,
                    headerArray.length,
                  );
                  const n = view.getUint32(0);
                  if (n > Math.pow(2, 21) - 1) {
                    // the maximum safe integer in JavaScript is 2^53 - 1
                    controller.enqueue((0, _commonsJs.ERROR_PACKET));
                    break;
                  }
                  expectedLength = n * Math.pow(2, 32) + view.getUint32(4);
                  state = 3 /* State.READ_PAYLOAD */;
                } else {
                  if (totalLength(chunks) < expectedLength) break;
                  const data = concatChunks(chunks, expectedLength);
                  controller.enqueue(
                    (0, _decodePacketJs.decodePacket)(
                      isBinary ? data : TEXT_DECODER.decode(data),
                      binaryType,
                    ),
                  );
                  state = 0 /* State.READ_HEADER */;
                }
                if (expectedLength === 0 || expectedLength > maxPayload) {
                  controller.enqueue((0, _commonsJs.ERROR_PACKET));
                  break;
                }
              }
            },
          });
        }
        const protocol = 4;
      },
      {
        "./encodePacket.js": "lUiyb",
        "./decodePacket.js": "k0BCP",
        "./commons.js": "kLmJ7",
        "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3",
      },
    ],
    lUiyb: [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(
          exports,
          "encodePacketToBinary",
          () => encodePacketToBinary,
        );
        parcelHelpers.export(exports, "encodePacket", () => encodePacket);
        var _commonsJs = require("./commons.js");
        const withNativeBlob =
          typeof Blob === "function" ||
          (typeof Blob !== "undefined" &&
            Object.prototype.toString.call(Blob) ===
              "[object BlobConstructor]");
        const withNativeArrayBuffer = typeof ArrayBuffer === "function";
        // ArrayBuffer.isView method is not defined in IE10
        const isView = (obj) => {
          return typeof ArrayBuffer.isView === "function"
            ? ArrayBuffer.isView(obj)
            : obj && obj.buffer instanceof ArrayBuffer;
        };
        const encodePacket = ({ type, data }, supportsBinary, callback) => {
          if (withNativeBlob && data instanceof Blob) {
            if (supportsBinary) return callback(data);
            else return encodeBlobAsBase64(data, callback);
          } else if (
            withNativeArrayBuffer &&
            (data instanceof ArrayBuffer || isView(data))
          ) {
            if (supportsBinary) return callback(data);
            else return encodeBlobAsBase64(new Blob([data]), callback);
          }
          // plain string
          return callback((0, _commonsJs.PACKET_TYPES)[type] + (data || ""));
        };
        const encodeBlobAsBase64 = (data, callback) => {
          const fileReader = new FileReader();
          fileReader.onload = function () {
            const content = fileReader.result.split(",")[1];
            callback("b" + (content || ""));
          };
          return fileReader.readAsDataURL(data);
        };
        function toArray(data) {
          if (data instanceof Uint8Array) return data;
          else if (data instanceof ArrayBuffer) return new Uint8Array(data);
          else
            return new Uint8Array(
              data.buffer,
              data.byteOffset,
              data.byteLength,
            );
        }
        let TEXT_ENCODER;
        function encodePacketToBinary(packet, callback) {
          if (withNativeBlob && packet.data instanceof Blob)
            return packet.data.arrayBuffer().then(toArray).then(callback);
          else if (
            withNativeArrayBuffer &&
            (packet.data instanceof ArrayBuffer || isView(packet.data))
          )
            return callback(toArray(packet.data));
          encodePacket(packet, false, (encoded) => {
            if (!TEXT_ENCODER) TEXT_ENCODER = new TextEncoder();
            callback(TEXT_ENCODER.encode(encoded));
          });
        }
      },
      {
        "./commons.js": "kLmJ7",
        "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3",
      },
    ],
    kLmJ7: [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, "PACKET_TYPES", () => PACKET_TYPES);
        parcelHelpers.export(
          exports,
          "PACKET_TYPES_REVERSE",
          () => PACKET_TYPES_REVERSE,
        );
        parcelHelpers.export(exports, "ERROR_PACKET", () => ERROR_PACKET);
        const PACKET_TYPES = Object.create(null); // no Map = no polyfill
        PACKET_TYPES["open"] = "0";
        PACKET_TYPES["close"] = "1";
        PACKET_TYPES["ping"] = "2";
        PACKET_TYPES["pong"] = "3";
        PACKET_TYPES["message"] = "4";
        PACKET_TYPES["upgrade"] = "5";
        PACKET_TYPES["noop"] = "6";
        const PACKET_TYPES_REVERSE = Object.create(null);
        Object.keys(PACKET_TYPES).forEach((key) => {
          PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;
        });
        const ERROR_PACKET = {
          type: "error",
          data: "parser error",
        };
      },
      { "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3" },
    ],
    gkKU3: [
      function (require, module, exports, __globalThis) {
        exports.interopDefault = function (a) {
          return a && a.__esModule
            ? a
            : {
                default: a,
              };
        };
        exports.defineInteropFlag = function (a) {
          Object.defineProperty(a, "__esModule", {
            value: true,
          });
        };
        exports.exportAll = function (source, dest) {
          Object.keys(source).forEach(function (key) {
            if (
              key === "default" ||
              key === "__esModule" ||
              Object.prototype.hasOwnProperty.call(dest, key)
            )
              return;
            Object.defineProperty(dest, key, {
              enumerable: true,
              get: function () {
                return source[key];
              },
            });
          });
          return dest;
        };
        exports.export = function (dest, destName, get) {
          Object.defineProperty(dest, destName, {
            enumerable: true,
            get: get,
          });
        };
      },
      {},
    ],
    k0BCP: [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, "decodePacket", () => decodePacket);
        var _commonsJs = require("./commons.js");
        var _base64ArraybufferJs = require("./contrib/base64-arraybuffer.js");
        const withNativeArrayBuffer = typeof ArrayBuffer === "function";
        const decodePacket = (encodedPacket, binaryType) => {
          if (typeof encodedPacket !== "string")
            return {
              type: "message",
              data: mapBinary(encodedPacket, binaryType),
            };
          const type = encodedPacket.charAt(0);
          if (type === "b")
            return {
              type: "message",
              data: decodeBase64Packet(encodedPacket.substring(1), binaryType),
            };
          const packetType = (0, _commonsJs.PACKET_TYPES_REVERSE)[type];
          if (!packetType) return 0, _commonsJs.ERROR_PACKET;
          return encodedPacket.length > 1
            ? {
                type: (0, _commonsJs.PACKET_TYPES_REVERSE)[type],
                data: encodedPacket.substring(1),
              }
            : {
                type: (0, _commonsJs.PACKET_TYPES_REVERSE)[type],
              };
        };
        const decodeBase64Packet = (data, binaryType) => {
          if (withNativeArrayBuffer) {
            const decoded = (0, _base64ArraybufferJs.decode)(data);
            return mapBinary(decoded, binaryType);
          } else
            return {
              base64: true,
              data,
            }; // fallback for old browsers
        };
        const mapBinary = (data, binaryType) => {
          switch (binaryType) {
            case "blob":
              if (data instanceof Blob)
                // from WebSocket + binaryType "blob"
                return data; // from HTTP long-polling or WebTransport
              else return new Blob([data]);
            case "arraybuffer":
            default:
              if (data instanceof ArrayBuffer)
                // from HTTP long-polling (base64) or WebSocket + binaryType "arraybuffer"
                return data; // from WebTransport (Uint8Array)
              else return data.buffer;
          }
        };
      },
      {
        "./commons.js": "kLmJ7",
        "./contrib/base64-arraybuffer.js": "c3dDo",
        "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3",
      },
    ],
    c3dDo: [
      function (require, module, exports, __globalThis) {
        // imported from https://github.com/socketio/base64-arraybuffer
        var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, "encode", () => encode);
        parcelHelpers.export(exports, "decode", () => decode);
        const chars =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        // Use a lookup table to find the index.
        const lookup =
          typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
        for (let i = 0; i < chars.length; i++) lookup[chars.charCodeAt(i)] = i;
        const encode = (arraybuffer) => {
          let bytes = new Uint8Array(arraybuffer),
            i,
            len = bytes.length,
            base64 = "";
          for (i = 0; i < len; i += 3) {
            base64 += chars[bytes[i] >> 2];
            base64 += chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
            base64 += chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
            base64 += chars[bytes[i + 2] & 63];
          }
          if (len % 3 === 2)
            base64 = base64.substring(0, base64.length - 1) + "=";
          else if (len % 3 === 1)
            base64 = base64.substring(0, base64.length - 2) + "==";
          return base64;
        };
        const decode = (base64) => {
          let bufferLength = base64.length * 0.75,
            len = base64.length,
            i,
            p = 0,
            encoded1,
            encoded2,
            encoded3,
            encoded4;
          if (base64[base64.length - 1] === "=") {
            bufferLength--;
            if (base64[base64.length - 2] === "=") bufferLength--;
          }
          const arraybuffer = new ArrayBuffer(bufferLength),
            bytes = new Uint8Array(arraybuffer);
          for (i = 0; i < len; i += 4) {
            encoded1 = lookup[base64.charCodeAt(i)];
            encoded2 = lookup[base64.charCodeAt(i + 1)];
            encoded3 = lookup[base64.charCodeAt(i + 2)];
            encoded4 = lookup[base64.charCodeAt(i + 3)];
            bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
            bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
            bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
          }
          return arraybuffer;
        };
      },
      { "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3" },
    ],
    "3GA7L": [
      function (require, module, exports, __globalThis) {
        /**
         * Initialize a new `Emitter`.
         *
         * @api public
         */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, "Emitter", () => Emitter);
        function Emitter(obj) {
          if (obj) return mixin(obj);
        }
        /**
         * Mixin the emitter properties.
         *
         * @param {Object} obj
         * @return {Object}
         * @api private
         */ function mixin(obj) {
          for (var key in Emitter.prototype) obj[key] = Emitter.prototype[key];
          return obj;
        }
        /**
         * Listen on the given `event` with `fn`.
         *
         * @param {String} event
         * @param {Function} fn
         * @return {Emitter}
         * @api public
         */ Emitter.prototype.on = Emitter.prototype.addEventListener =
          function (event, fn) {
            this._callbacks = this._callbacks || {};
            (this._callbacks["$" + event] =
              this._callbacks["$" + event] || []).push(fn);
            return this;
          };
        /**
         * Adds an `event` listener that will be invoked a single
         * time then automatically removed.
         *
         * @param {String} event
         * @param {Function} fn
         * @return {Emitter}
         * @api public
         */ Emitter.prototype.once = function (event, fn) {
          function on() {
            this.off(event, on);
            fn.apply(this, arguments);
          }
          on.fn = fn;
          this.on(event, on);
          return this;
        };
        /**
         * Remove the given callback for `event` or all
         * registered callbacks.
         *
         * @param {String} event
         * @param {Function} fn
         * @return {Emitter}
         * @api public
         */ Emitter.prototype.off =
          Emitter.prototype.removeListener =
          Emitter.prototype.removeAllListeners =
          Emitter.prototype.removeEventListener =
            function (event, fn) {
              this._callbacks = this._callbacks || {};
              // all
              if (0 == arguments.length) {
                this._callbacks = {};
                return this;
              }
              // specific event
              var callbacks = this._callbacks["$" + event];
              if (!callbacks) return this;
              // remove all handlers
              if (1 == arguments.length) {
                delete this._callbacks["$" + event];
                return this;
              }
              // remove specific handler
              var cb;
              for (var i = 0; i < callbacks.length; i++) {
                cb = callbacks[i];
                if (cb === fn || cb.fn === fn) {
                  callbacks.splice(i, 1);
                  break;
                }
              }
              // Remove event specific arrays for event types that no
              // one is subscribed for to avoid memory leak.
              if (callbacks.length === 0) delete this._callbacks["$" + event];
              return this;
            };
        /**
         * Emit `event` with the given args.
         *
         * @param {String} event
         * @param {Mixed} ...
         * @return {Emitter}
         */ Emitter.prototype.emit = function (event) {
          this._callbacks = this._callbacks || {};
          var args = new Array(arguments.length - 1),
            callbacks = this._callbacks["$" + event];
          for (var i = 1; i < arguments.length; i++) args[i - 1] = arguments[i];
          if (callbacks) {
            callbacks = callbacks.slice(0);
            for (var i = 0, len = callbacks.length; i < len; ++i)
              callbacks[i].apply(this, args);
          }
          return this;
        };
        // alias used for reserved events (protected method)
        Emitter.prototype.emitReserved = Emitter.prototype.emit;
        /**
         * Return array of callbacks for `event`.
         *
         * @param {String} event
         * @return {Array}
         * @api public
         */ Emitter.prototype.listeners = function (event) {
          this._callbacks = this._callbacks || {};
          return this._callbacks["$" + event] || [];
        };
        /**
         * Check if this emitter has `event` handlers.
         *
         * @param {String} event
         * @return {Boolean}
         * @api public
         */ Emitter.prototype.hasListeners = function (event) {
          return !!this.listeners(event).length;
        };
      },
      { "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3" },
    ],
    d7eyH: [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, "pick", () => pick);
        parcelHelpers.export(
          exports,
          "installTimerFunctions",
          () => installTimerFunctions,
        );
        // we could also have used `new Blob([obj]).size`, but it isn't supported in IE9
        parcelHelpers.export(exports, "byteLength", () => byteLength);
        /**
         * Generates a random 8-characters string.
         */ parcelHelpers.export(exports, "randomString", () => randomString);
        var _globalsNodeJs = require("./globals.node.js");
        function pick(obj, ...attr) {
          return attr.reduce((acc, k) => {
            if (obj.hasOwnProperty(k)) acc[k] = obj[k];
            return acc;
          }, {});
        }
        // Keep a reference to the real timeout functions so they can be used when overridden
        const NATIVE_SET_TIMEOUT = (0, _globalsNodeJs.globalThisShim)
          .setTimeout;
        const NATIVE_CLEAR_TIMEOUT = (0, _globalsNodeJs.globalThisShim)
          .clearTimeout;
        function installTimerFunctions(obj, opts) {
          if (opts.useNativeTimers) {
            obj.setTimeoutFn = NATIVE_SET_TIMEOUT.bind(
              (0, _globalsNodeJs.globalThisShim),
            );
            obj.clearTimeoutFn = NATIVE_CLEAR_TIMEOUT.bind(
              (0, _globalsNodeJs.globalThisShim),
            );
          } else {
            obj.setTimeoutFn = (0,
            _globalsNodeJs.globalThisShim).setTimeout.bind(
              (0, _globalsNodeJs.globalThisShim),
            );
            obj.clearTimeoutFn = (0,
            _globalsNodeJs.globalThisShim).clearTimeout.bind(
              (0, _globalsNodeJs.globalThisShim),
            );
          }
        }
        // base64 encoded buffers are about 33% bigger (https://en.wikipedia.org/wiki/Base64)
        const BASE64_OVERHEAD = 1.33;
        function byteLength(obj) {
          if (typeof obj === "string") return utf8Length(obj);
          // arraybuffer or blob
          return Math.ceil((obj.byteLength || obj.size) * BASE64_OVERHEAD);
        }
        function utf8Length(str) {
          let c = 0,
            length = 0;
          for (let i = 0, l = str.length; i < l; i++) {
            c = str.charCodeAt(i);
            if (c < 0x80) length += 1;
            else if (c < 0x800) length += 2;
            else if (c < 0xd800 || c >= 0xe000) length += 3;
            else {
              i++;
              length += 4;
            }
          }
          return length;
        }
        function randomString() {
          return (
            Date.now().toString(36).substring(3) +
            Math.random().toString(36).substring(2, 5)
          );
        }
      },
      {
        "./globals.node.js": "itT4K",
        "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3",
      },
    ],
    itT4K: [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, "nextTick", () => nextTick);
        parcelHelpers.export(exports, "globalThisShim", () => globalThisShim);
        parcelHelpers.export(
          exports,
          "defaultBinaryType",
          () => defaultBinaryType,
        );
        parcelHelpers.export(exports, "createCookieJar", () => createCookieJar);
        const nextTick = (() => {
          const isPromiseAvailable =
            typeof Promise === "function" &&
            typeof Promise.resolve === "function";
          if (isPromiseAvailable) return (cb) => Promise.resolve().then(cb);
          else return (cb, setTimeoutFn) => setTimeoutFn(cb, 0);
        })();
        const globalThisShim = (() => {
          if (typeof self !== "undefined") return self;
          else if (typeof window !== "undefined") return window;
          else return Function("return this")();
        })();
        const defaultBinaryType = "arraybuffer";
        function createCookieJar() {}
      },
      { "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3" },
    ],
    aFNEN: [
      function (require, module, exports, __globalThis) {
        // imported from https://github.com/galkn/querystring
        /**
         * Compiles a querystring
         * Returns string representation of the object
         *
         * @param {Object}
         * @api private
         */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, "encode", () => encode);
        /**
         * Parses a simple querystring into an object
         *
         * @param {String} qs
         * @api private
         */ parcelHelpers.export(exports, "decode", () => decode);
        function encode(obj) {
          let str = "";
          for (let i in obj)
            if (obj.hasOwnProperty(i)) {
              if (str.length) str += "&";
              str += encodeURIComponent(i) + "=" + encodeURIComponent(obj[i]);
            }
          return str;
        }
        function decode(qs) {
          let qry = {};
          let pairs = qs.split("&");
          for (let i = 0, l = pairs.length; i < l; i++) {
            let pair = pairs[i].split("=");
            qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
          }
          return qry;
        }
      },
      { "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3" },
    ],
    kPgMI: [
      function (require, module, exports, __globalThis) {
        // imported from https://github.com/component/has-cors
        var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, "hasCORS", () => hasCORS);
        let value = false;
        try {
          value =
            typeof XMLHttpRequest !== "undefined" &&
            "withCredentials" in new XMLHttpRequest();
        } catch (err) {
          // if XMLHttp support is disabled in IE then it will throw
          // when trying to create
        }
        const hasCORS = value;
      },
      { "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3" },
    ],
    "8y2e2": [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, "BaseWS", () => BaseWS);
        /**
         * WebSocket transport based on the built-in `WebSocket` object.
         *
         * Usage: browser, Node.js (since v21), Deno, Bun
         *
         * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket
         * @see https://caniuse.com/mdn-api_websocket
         * @see https://nodejs.org/api/globals.html#websocket
         */ parcelHelpers.export(exports, "WS", () => WS);
        var _transportJs = require("../transport.js");
        var _utilJs = require("../util.js");
        var _engineIoParser = require("engine.io-parser");
        var _globalsNodeJs = require("../globals.node.js");
        // detect ReactNative environment
        const isReactNative =
          typeof navigator !== "undefined" &&
          typeof navigator.product === "string" &&
          navigator.product.toLowerCase() === "reactnative";
        class BaseWS extends (0, _transportJs.Transport) {
          get name() {
            return "websocket";
          }
          doOpen() {
            const uri = this.uri();
            const protocols = this.opts.protocols;
            // React Native only supports the 'headers' option, and will print a warning if anything else is passed
            const opts = isReactNative
              ? {}
              : (0, _utilJs.pick)(
                  this.opts,
                  "agent",
                  "perMessageDeflate",
                  "pfx",
                  "key",
                  "passphrase",
                  "cert",
                  "ca",
                  "ciphers",
                  "rejectUnauthorized",
                  "localAddress",
                  "protocolVersion",
                  "origin",
                  "maxPayload",
                  "family",
                  "checkServerIdentity",
                );
            if (this.opts.extraHeaders) opts.headers = this.opts.extraHeaders;
            try {
              this.ws = this.createSocket(uri, protocols, opts);
            } catch (err) {
              return this.emitReserved("error", err);
            }
            this.ws.binaryType = this.socket.binaryType;
            this.addEventListeners();
          }
          /**
           * Adds event listeners to the socket
           *
           * @private
           */ addEventListeners() {
            this.ws.onopen = () => {
              if (this.opts.autoUnref) this.ws._socket.unref();
              this.onOpen();
            };
            this.ws.onclose = (closeEvent) =>
              this.onClose({
                description: "websocket connection closed",
                context: closeEvent,
              });
            this.ws.onmessage = (ev) => this.onData(ev.data);
            this.ws.onerror = (e) => this.onError("websocket error", e);
          }
          write(packets) {
            this.writable = false;
            // encodePacket efficient as it uses WS framing
            // no need for encodePayload
            for (let i = 0; i < packets.length; i++) {
              const packet = packets[i];
              const lastPacket = i === packets.length - 1;
              (0, _engineIoParser.encodePacket)(
                packet,
                this.supportsBinary,
                (data) => {
                  // Sometimes the websocket has already been closed but the browser didn't
                  // have a chance of informing us about it yet, in that case send will
                  // throw an error
                  try {
                    this.doWrite(packet, data);
                  } catch (e) {}
                  if (lastPacket)
                    // fake drain
                    // defer to next tick to allow Socket to clear writeBuffer
                    (0, _globalsNodeJs.nextTick)(() => {
                      this.writable = true;
                      this.emitReserved("drain");
                    }, this.setTimeoutFn);
                },
              );
            }
          }
          doClose() {
            if (typeof this.ws !== "undefined") {
              this.ws.onerror = () => {};
              this.ws.close();
              this.ws = null;
            }
          }
          /**
           * Generates uri for connection.
           *
           * @private
           */ uri() {
            const schema = this.opts.secure ? "wss" : "ws";
            const query = this.query || {};
            // append timestamp to URI
            if (this.opts.timestampRequests)
              query[this.opts.timestampParam] = (0, _utilJs.randomString)();
            // communicate binary support capabilities
            if (!this.supportsBinary) query.b64 = 1;
            return this.createUri(schema, query);
          }
        }
        const WebSocketCtor =
          (0, _globalsNodeJs.globalThisShim).WebSocket ||
          (0, _globalsNodeJs.globalThisShim).MozWebSocket;
        class WS extends BaseWS {
          createSocket(uri, protocols, opts) {
            return !isReactNative
              ? protocols
                ? new WebSocketCtor(uri, protocols)
                : new WebSocketCtor(uri)
              : new WebSocketCtor(uri, protocols, opts);
          }
          doWrite(_packet, data) {
            this.ws.send(data);
          }
        }
      },
      {
        "../transport.js": "kwKKC",
        "../util.js": "d7eyH",
        "engine.io-parser": "2SHiP",
        "../globals.node.js": "itT4K",
        "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3",
      },
    ],
    k7fng: [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
        parcelHelpers.defineInteropFlag(exports);
        /**
         * WebTransport transport based on the built-in `WebTransport` object.
         *
         * Usage: browser, Node.js (with the `@fails-components/webtransport` package)
         *
         * @see https://developer.mozilla.org/en-US/docs/Web/API/WebTransport
         * @see https://caniuse.com/webtransport
         */ parcelHelpers.export(exports, "WT", () => WT);
        var _transportJs = require("../transport.js");
        var _globalsNodeJs = require("../globals.node.js");
        var _engineIoParser = require("engine.io-parser");
        class WT extends (0, _transportJs.Transport) {
          get name() {
            return "webtransport";
          }
          doOpen() {
            try {
              // @ts-ignore
              this._transport = new WebTransport(
                this.createUri("https"),
                this.opts.transportOptions[this.name],
              );
            } catch (err) {
              return this.emitReserved("error", err);
            }
            this._transport.closed
              .then(() => {
                this.onClose();
              })
              .catch((err) => {
                this.onError("webtransport error", err);
              });
            // note: we could have used async/await, but that would require some additional polyfills
            this._transport.ready.then(() => {
              this._transport.createBidirectionalStream().then((stream) => {
                const decoderStream = (0,
                _engineIoParser.createPacketDecoderStream)(
                  Number.MAX_SAFE_INTEGER,
                  this.socket.binaryType,
                );
                const reader = stream.readable
                  .pipeThrough(decoderStream)
                  .getReader();
                const encoderStream = (0,
                _engineIoParser.createPacketEncoderStream)();
                encoderStream.readable.pipeTo(stream.writable);
                this._writer = encoderStream.writable.getWriter();
                const read = () => {
                  reader
                    .read()
                    .then(({ done, value }) => {
                      if (done) return;
                      this.onPacket(value);
                      read();
                    })
                    .catch((err) => {});
                };
                read();
                const packet = {
                  type: "open",
                };
                if (this.query.sid) packet.data = `{"sid":"${this.query.sid}"}`;
                this._writer.write(packet).then(() => this.onOpen());
              });
            });
          }
          write(packets) {
            this.writable = false;
            for (let i = 0; i < packets.length; i++) {
              const packet = packets[i];
              const lastPacket = i === packets.length - 1;
              this._writer.write(packet).then(() => {
                if (lastPacket)
                  (0, _globalsNodeJs.nextTick)(() => {
                    this.writable = true;
                    this.emitReserved("drain");
                  }, this.setTimeoutFn);
              });
            }
          }
          doClose() {
            var _a;
            (_a = this._transport) === null || _a === void 0 || _a.close();
          }
        }
      },
      {
        "../transport.js": "kwKKC",
        "../globals.node.js": "itT4K",
        "engine.io-parser": "2SHiP",
        "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3",
      },
    ],
    "5RFyz": [
      function (require, module, exports, __globalThis) {
        // imported from https://github.com/galkn/parseuri
        /**
         * Parses a URI
         *
         * Note: we could also have used the built-in URL object, but it isn't supported on all platforms.
         *
         * See:
         * - https://developer.mozilla.org/en-US/docs/Web/API/URL
         * - https://caniuse.com/url
         * - https://www.rfc-editor.org/rfc/rfc3986#appendix-B
         *
         * History of the parse() method:
         * - first commit: https://github.com/socketio/socket.io-client/commit/4ee1d5d94b3906a9c052b459f1a818b15f38f91c
         * - export into its own module: https://github.com/socketio/engine.io-client/commit/de2c561e4564efeb78f1bdb1ba39ef81b2822cb3
         * - reimport: https://github.com/socketio/engine.io-client/commit/df32277c3f6d622eec5ed09f493cae3f3391d242
         *
         * @author Steven Levithan <stevenlevithan.com> (MIT license)
         * @api private
         */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, "parse", () => parse);
        const re =
          /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
        const parts = [
          "source",
          "protocol",
          "authority",
          "userInfo",
          "user",
          "password",
          "host",
          "port",
          "relative",
          "path",
          "directory",
          "file",
          "query",
          "anchor",
        ];
        function parse(str) {
          if (str.length > 8000) throw "URI too long";
          const src = str,
            b = str.indexOf("["),
            e = str.indexOf("]");
          if (b != -1 && e != -1)
            str =
              str.substring(0, b) +
              str.substring(b, e).replace(/:/g, ";") +
              str.substring(e, str.length);
          let m = re.exec(str || ""),
            uri = {},
            i = 14;
          while (i--) uri[parts[i]] = m[i] || "";
          if (b != -1 && e != -1) {
            uri.source = src;
            uri.host = uri.host
              .substring(1, uri.host.length - 1)
              .replace(/;/g, ":");
            uri.authority = uri.authority
              .replace("[", "")
              .replace("]", "")
              .replace(/;/g, ":");
            uri.ipv6uri = true;
          }
          uri.pathNames = pathNames(uri, uri["path"]);
          uri.queryKey = queryKey(uri, uri["query"]);
          return uri;
        }
        function pathNames(obj, path) {
          const regx = /\/{2,9}/g,
            names = path.replace(regx, "/").split("/");
          if (path.slice(0, 1) == "/" || path.length === 0) names.splice(0, 1);
          if (path.slice(-1) == "/") names.splice(names.length - 1, 1);
          return names;
        }
        function queryKey(uri, query) {
          const data = {};
          query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function ($0, $1, $2) {
            if ($1) data[$1] = $2;
          });
          return data;
        }
      },
      { "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3" },
    ],
    "1LdqT": [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
        parcelHelpers.defineInteropFlag(exports);
        /**
         * HTTP long-polling based on the built-in `fetch()` method.
         *
         * Usage: browser, Node.js (since v18), Deno, Bun
         *
         * @see https://developer.mozilla.org/en-US/docs/Web/API/fetch
         * @see https://caniuse.com/fetch
         * @see https://nodejs.org/api/globals.html#fetch
         */ parcelHelpers.export(exports, "Fetch", () => Fetch);
        var _pollingJs = require("./polling.js");
        class Fetch extends (0, _pollingJs.Polling) {
          doPoll() {
            this._fetch()
              .then((res) => {
                if (!res.ok)
                  return this.onError("fetch read error", res.status, res);
                res.text().then((data) => this.onData(data));
              })
              .catch((err) => {
                this.onError("fetch read error", err);
              });
          }
          doWrite(data, callback) {
            this._fetch(data)
              .then((res) => {
                if (!res.ok)
                  return this.onError("fetch write error", res.status, res);
                callback();
              })
              .catch((err) => {
                this.onError("fetch write error", err);
              });
          }
          _fetch(data) {
            var _a;
            const isPost = data !== undefined;
            const headers = new Headers(this.opts.extraHeaders);
            if (isPost) headers.set("content-type", "text/plain;charset=UTF-8");
            (_a = this.socket._cookieJar) === null ||
              _a === void 0 ||
              _a.appendCookies(headers);
            return fetch(this.uri(), {
              method: isPost ? "POST" : "GET",
              body: isPost ? data : null,
              headers,
              credentials: this.opts.withCredentials ? "include" : "omit",
            }).then((res) => {
              var _a;
              // @ts-ignore getSetCookie() was added in Node.js v19.7.0
              (_a = this.socket._cookieJar) === null ||
                _a === void 0 ||
                _a.parseCookies(res.headers.getSetCookie());
              return res;
            });
          }
        }
      },
      {
        "./polling.js": "HgHsi",
        "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3",
      },
    ],
    "94vh9": [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, "Manager", () => Manager);
        var _engineIoClient = require("engine.io-client");
        var _socketJs = require("./socket.js");
        var _socketIoParser = require("socket.io-parser");
        var _onJs = require("./on.js");
        var _backo2Js = require("./contrib/backo2.js");
        var _componentEmitter = require("@socket.io/component-emitter");
        class Manager extends (0, _componentEmitter.Emitter) {
          constructor(uri, opts) {
            var _a;
            super();
            this.nsps = {};
            this.subs = [];
            if (uri && "object" === typeof uri) {
              opts = uri;
              uri = undefined;
            }
            opts = opts || {};
            opts.path = opts.path || "/socket.io";
            this.opts = opts;
            (0, _engineIoClient.installTimerFunctions)(this, opts);
            this.reconnection(opts.reconnection !== false);
            this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
            this.reconnectionDelay(opts.reconnectionDelay || 1000);
            this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
            this.randomizationFactor(
              (_a = opts.randomizationFactor) !== null && _a !== void 0
                ? _a
                : 0.5,
            );
            this.backoff = new (0, _backo2Js.Backoff)({
              min: this.reconnectionDelay(),
              max: this.reconnectionDelayMax(),
              jitter: this.randomizationFactor(),
            });
            this.timeout(null == opts.timeout ? 20000 : opts.timeout);
            this._readyState = "closed";
            this.uri = uri;
            const _parser = opts.parser || _socketIoParser;
            this.encoder = new _parser.Encoder();
            this.decoder = new _parser.Decoder();
            this._autoConnect = opts.autoConnect !== false;
            if (this._autoConnect) this.open();
          }
          reconnection(v) {
            if (!arguments.length) return this._reconnection;
            this._reconnection = !!v;
            if (!v) this.skipReconnect = true;
            return this;
          }
          reconnectionAttempts(v) {
            if (v === undefined) return this._reconnectionAttempts;
            this._reconnectionAttempts = v;
            return this;
          }
          reconnectionDelay(v) {
            var _a;
            if (v === undefined) return this._reconnectionDelay;
            this._reconnectionDelay = v;
            (_a = this.backoff) === null || _a === void 0 || _a.setMin(v);
            return this;
          }
          randomizationFactor(v) {
            var _a;
            if (v === undefined) return this._randomizationFactor;
            this._randomizationFactor = v;
            (_a = this.backoff) === null || _a === void 0 || _a.setJitter(v);
            return this;
          }
          reconnectionDelayMax(v) {
            var _a;
            if (v === undefined) return this._reconnectionDelayMax;
            this._reconnectionDelayMax = v;
            (_a = this.backoff) === null || _a === void 0 || _a.setMax(v);
            return this;
          }
          timeout(v) {
            if (!arguments.length) return this._timeout;
            this._timeout = v;
            return this;
          }
          /**
           * Starts trying to reconnect if reconnection is enabled and we have not
           * started reconnecting yet
           *
           * @private
           */ maybeReconnectOnOpen() {
            // Only try to reconnect if it's the first time we're connecting
            if (
              !this._reconnecting &&
              this._reconnection &&
              this.backoff.attempts === 0
            )
              // keeps reconnection from firing twice for the same reconnection loop
              this.reconnect();
          }
          /**
           * Sets the current transport `socket`.
           *
           * @param {Function} fn - optional, callback
           * @return self
           * @public
           */ open(fn) {
            if (~this._readyState.indexOf("open")) return this;
            this.engine = new (0, _engineIoClient.Socket)(this.uri, this.opts);
            const socket = this.engine;
            const self = this;
            this._readyState = "opening";
            this.skipReconnect = false;
            // emit `open`
            const openSubDestroy = (0, _onJs.on)(socket, "open", function () {
              self.onopen();
              fn && fn();
            });
            const onError = (err) => {
              this.cleanup();
              this._readyState = "closed";
              this.emitReserved("error", err);
              if (fn)
                fn(err); // Only do this if there is no fn to handle the error
              else this.maybeReconnectOnOpen();
            };
            // emit `error`
            const errorSub = (0, _onJs.on)(socket, "error", onError);
            if (false !== this._timeout) {
              const timeout = this._timeout;
              // set timer
              const timer = this.setTimeoutFn(() => {
                openSubDestroy();
                onError(new Error("timeout"));
                socket.close();
              }, timeout);
              if (this.opts.autoUnref) timer.unref();
              this.subs.push(() => {
                this.clearTimeoutFn(timer);
              });
            }
            this.subs.push(openSubDestroy);
            this.subs.push(errorSub);
            return this;
          }
          /**
           * Alias for open()
           *
           * @return self
           * @public
           */ connect(fn) {
            return this.open(fn);
          }
          /**
           * Called upon transport open.
           *
           * @private
           */ onopen() {
            // clear old subs
            this.cleanup();
            // mark as open
            this._readyState = "open";
            this.emitReserved("open");
            // add new subs
            const socket = this.engine;
            this.subs.push(
              (0, _onJs.on)(socket, "ping", this.onping.bind(this)),
              (0, _onJs.on)(socket, "data", this.ondata.bind(this)),
              (0, _onJs.on)(socket, "error", this.onerror.bind(this)),
              (0, _onJs.on)(socket, "close", this.onclose.bind(this)), // @ts-ignore
              (0, _onJs.on)(this.decoder, "decoded", this.ondecoded.bind(this)),
            );
          }
          /**
           * Called upon a ping.
           *
           * @private
           */ onping() {
            this.emitReserved("ping");
          }
          /**
           * Called with data.
           *
           * @private
           */ ondata(data) {
            try {
              this.decoder.add(data);
            } catch (e) {
              this.onclose("parse error", e);
            }
          }
          /**
           * Called when parser fully decodes a packet.
           *
           * @private
           */ ondecoded(packet) {
            // the nextTick call prevents an exception in a user-provided event listener from triggering a disconnection due to a "parse error"
            (0, _engineIoClient.nextTick)(() => {
              this.emitReserved("packet", packet);
            }, this.setTimeoutFn);
          }
          /**
           * Called upon socket error.
           *
           * @private
           */ onerror(err) {
            this.emitReserved("error", err);
          }
          /**
           * Creates a new socket for the given `nsp`.
           *
           * @return {Socket}
           * @public
           */ socket(nsp, opts) {
            let socket = this.nsps[nsp];
            if (!socket) {
              socket = new (0, _socketJs.Socket)(this, nsp, opts);
              this.nsps[nsp] = socket;
            } else if (this._autoConnect && !socket.active) socket.connect();
            return socket;
          }
          /**
           * Called upon a socket close.
           *
           * @param socket
           * @private
           */ _destroy(socket) {
            const nsps = Object.keys(this.nsps);
            for (const nsp of nsps) {
              const socket = this.nsps[nsp];
              if (socket.active) return;
            }
            this._close();
          }
          /**
           * Writes a packet.
           *
           * @param packet
           * @private
           */ _packet(packet) {
            const encodedPackets = this.encoder.encode(packet);
            for (let i = 0; i < encodedPackets.length; i++)
              this.engine.write(encodedPackets[i], packet.options);
          }
          /**
           * Clean up transport subscriptions and packet buffer.
           *
           * @private
           */ cleanup() {
            this.subs.forEach((subDestroy) => subDestroy());
            this.subs.length = 0;
            this.decoder.destroy();
          }
          /**
           * Close the current socket.
           *
           * @private
           */ _close() {
            this.skipReconnect = true;
            this._reconnecting = false;
            this.onclose("forced close");
          }
          /**
           * Alias for close()
           *
           * @private
           */ disconnect() {
            return this._close();
          }
          /**
           * Called when:
           *
           * - the low-level engine is closed
           * - the parser encountered a badly formatted packet
           * - all sockets are disconnected
           *
           * @private
           */ onclose(reason, description) {
            var _a;
            this.cleanup();
            (_a = this.engine) === null || _a === void 0 || _a.close();
            this.backoff.reset();
            this._readyState = "closed";
            this.emitReserved("close", reason, description);
            if (this._reconnection && !this.skipReconnect) this.reconnect();
          }
          /**
           * Attempt a reconnection.
           *
           * @private
           */ reconnect() {
            if (this._reconnecting || this.skipReconnect) return this;
            const self = this;
            if (this.backoff.attempts >= this._reconnectionAttempts) {
              this.backoff.reset();
              this.emitReserved("reconnect_failed");
              this._reconnecting = false;
            } else {
              const delay = this.backoff.duration();
              this._reconnecting = true;
              const timer = this.setTimeoutFn(() => {
                if (self.skipReconnect) return;
                this.emitReserved("reconnect_attempt", self.backoff.attempts);
                // check again for the case socket closed in above events
                if (self.skipReconnect) return;
                self.open((err) => {
                  if (err) {
                    self._reconnecting = false;
                    self.reconnect();
                    this.emitReserved("reconnect_error", err);
                  } else self.onreconnect();
                });
              }, delay);
              if (this.opts.autoUnref) timer.unref();
              this.subs.push(() => {
                this.clearTimeoutFn(timer);
              });
            }
          }
          /**
           * Called upon successful reconnect.
           *
           * @private
           */ onreconnect() {
            const attempt = this.backoff.attempts;
            this._reconnecting = false;
            this.backoff.reset();
            this.emitReserved("reconnect", attempt);
          }
        }
      },
      {
        "engine.io-client": "jBHFs",
        "./socket.js": "kbWgu",
        "socket.io-parser": "2lQL3",
        "./on.js": "8FFT1",
        "./contrib/backo2.js": "cZLsm",
        "@socket.io/component-emitter": "3GA7L",
        "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3",
      },
    ],
    kbWgu: [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
        parcelHelpers.defineInteropFlag(exports);
        /**
         * A Socket is the fundamental class for interacting with the server.
         *
         * A Socket belongs to a certain Namespace (by default /) and uses an underlying {@link Manager} to communicate.
         *
         * @example
         * const socket = io();
         *
         * socket.on("connect", () => {
         *   console.log("connected");
         * });
         *
         * // send an event to the server
         * socket.emit("foo", "bar");
         *
         * socket.on("foobar", () => {
         *   // an event was received from the server
         * });
         *
         * // upon disconnection
         * socket.on("disconnect", (reason) => {
         *   console.log(`disconnected due to ${reason}`);
         * });
         */ parcelHelpers.export(exports, "Socket", () => Socket);
        var _socketIoParser = require("socket.io-parser");
        var _onJs = require("./on.js");
        var _componentEmitter = require("@socket.io/component-emitter");
        /**
         * Internal events.
         * These events can't be emitted by the user.
         */ const RESERVED_EVENTS = Object.freeze({
          connect: 1,
          connect_error: 1,
          disconnect: 1,
          disconnecting: 1,
          // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
          newListener: 1,
          removeListener: 1,
        });
        class Socket extends (0, _componentEmitter.Emitter) {
          /**
           * `Socket` constructor.
           */ constructor(io, nsp, opts) {
            super();
            /**
             * Whether the socket is currently connected to the server.
             *
             * @example
             * const socket = io();
             *
             * socket.on("connect", () => {
             *   console.log(socket.connected); // true
             * });
             *
             * socket.on("disconnect", () => {
             *   console.log(socket.connected); // false
             * });
             */ this.connected = false;
            /**
             * Whether the connection state was recovered after a temporary disconnection. In that case, any missed packets will
             * be transmitted by the server.
             */ this.recovered = false;
            /**
             * Buffer for packets received before the CONNECT packet
             */ this.receiveBuffer = [];
            /**
             * Buffer for packets that will be sent once the socket is connected
             */ this.sendBuffer = [];
            /**
             * The queue of packets to be sent with retry in case of failure.
             *
             * Packets are sent one by one, each waiting for the server acknowledgement, in order to guarantee the delivery order.
             * @private
             */ this._queue = [];
            /**
             * A sequence to generate the ID of the {@link QueuedPacket}.
             * @private
             */ this._queueSeq = 0;
            this.ids = 0;
            /**
             * A map containing acknowledgement handlers.
             *
             * The `withError` attribute is used to differentiate handlers that accept an error as first argument:
             *
             * - `socket.emit("test", (err, value) => { ... })` with `ackTimeout` option
             * - `socket.timeout(5000).emit("test", (err, value) => { ... })`
             * - `const value = await socket.emitWithAck("test")`
             *
             * From those that don't:
             *
             * - `socket.emit("test", (value) => { ... });`
             *
             * In the first case, the handlers will be called with an error when:
             *
             * - the timeout is reached
             * - the socket gets disconnected
             *
             * In the second case, the handlers will be simply discarded upon disconnection, since the client will never receive
             * an acknowledgement from the server.
             *
             * @private
             */ this.acks = {};
            this.flags = {};
            this.io = io;
            this.nsp = nsp;
            if (opts && opts.auth) this.auth = opts.auth;
            this._opts = Object.assign({}, opts);
            if (this.io._autoConnect) this.open();
          }
          /**
           * Whether the socket is currently disconnected
           *
           * @example
           * const socket = io();
           *
           * socket.on("connect", () => {
           *   console.log(socket.disconnected); // false
           * });
           *
           * socket.on("disconnect", () => {
           *   console.log(socket.disconnected); // true
           * });
           */ get disconnected() {
            return !this.connected;
          }
          /**
           * Subscribe to open, close and packet events
           *
           * @private
           */ subEvents() {
            if (this.subs) return;
            const io = this.io;
            this.subs = [
              (0, _onJs.on)(io, "open", this.onopen.bind(this)),
              (0, _onJs.on)(io, "packet", this.onpacket.bind(this)),
              (0, _onJs.on)(io, "error", this.onerror.bind(this)),
              (0, _onJs.on)(io, "close", this.onclose.bind(this)),
            ];
          }
          /**
           * Whether the Socket will try to reconnect when its Manager connects or reconnects.
           *
           * @example
           * const socket = io();
           *
           * console.log(socket.active); // true
           *
           * socket.on("disconnect", (reason) => {
           *   if (reason === "io server disconnect") {
           *     // the disconnection was initiated by the server, you need to manually reconnect
           *     console.log(socket.active); // false
           *   }
           *   // else the socket will automatically try to reconnect
           *   console.log(socket.active); // true
           * });
           */ get active() {
            return !!this.subs;
          }
          /**
           * "Opens" the socket.
           *
           * @example
           * const socket = io({
           *   autoConnect: false
           * });
           *
           * socket.connect();
           */ connect() {
            if (this.connected) return this;
            this.subEvents();
            if (!this.io["_reconnecting"]) this.io.open(); // ensure open
            if ("open" === this.io._readyState) this.onopen();
            return this;
          }
          /**
           * Alias for {@link connect()}.
           */ open() {
            return this.connect();
          }
          /**
           * Sends a `message` event.
           *
           * This method mimics the WebSocket.send() method.
           *
           * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send
           *
           * @example
           * socket.send("hello");
           *
           * // this is equivalent to
           * socket.emit("message", "hello");
           *
           * @return self
           */ send(...args) {
            args.unshift("message");
            this.emit.apply(this, args);
            return this;
          }
          /**
           * Override `emit`.
           * If the event is in `events`, it's emitted normally.
           *
           * @example
           * socket.emit("hello", "world");
           *
           * // all serializable datastructures are supported (no need to call JSON.stringify)
           * socket.emit("hello", 1, "2", { 3: ["4"], 5: Uint8Array.from([6]) });
           *
           * // with an acknowledgement from the server
           * socket.emit("hello", "world", (val) => {
           *   // ...
           * });
           *
           * @return self
           */ emit(ev, ...args) {
            var _a, _b, _c;
            if (RESERVED_EVENTS.hasOwnProperty(ev))
              throw new Error(
                '"' + ev.toString() + '" is a reserved event name',
              );
            args.unshift(ev);
            if (
              this._opts.retries &&
              !this.flags.fromQueue &&
              !this.flags.volatile
            ) {
              this._addToQueue(args);
              return this;
            }
            const packet = {
              type: (0, _socketIoParser.PacketType).EVENT,
              data: args,
            };
            packet.options = {};
            packet.options.compress = this.flags.compress !== false;
            // event ack callback
            if ("function" === typeof args[args.length - 1]) {
              const id = this.ids++;
              const ack = args.pop();
              this._registerAckCallback(id, ack);
              packet.id = id;
            }
            const isTransportWritable =
              (_b =
                (_a = this.io.engine) === null || _a === void 0
                  ? void 0
                  : _a.transport) === null || _b === void 0
                ? void 0
                : _b.writable;
            const isConnected =
              this.connected &&
              !((_c = this.io.engine) === null || _c === void 0
                ? void 0
                : _c._hasPingExpired());
            const discardPacket = this.flags.volatile && !isTransportWritable;
            if (discardPacket);
            else if (isConnected) {
              this.notifyOutgoingListeners(packet);
              this.packet(packet);
            } else this.sendBuffer.push(packet);
            this.flags = {};
            return this;
          }
          /**
           * @private
           */ _registerAckCallback(id, ack) {
            var _a;
            const timeout =
              (_a = this.flags.timeout) !== null && _a !== void 0
                ? _a
                : this._opts.ackTimeout;
            if (timeout === undefined) {
              this.acks[id] = ack;
              return;
            }
            // @ts-ignore
            const timer = this.io.setTimeoutFn(() => {
              delete this.acks[id];
              for (let i = 0; i < this.sendBuffer.length; i++)
                if (this.sendBuffer[i].id === id) this.sendBuffer.splice(i, 1);
              ack.call(this, new Error("operation has timed out"));
            }, timeout);
            const fn = (...args) => {
              // @ts-ignore
              this.io.clearTimeoutFn(timer);
              ack.apply(this, args);
            };
            fn.withError = true;
            this.acks[id] = fn;
          }
          /**
           * Emits an event and waits for an acknowledgement
           *
           * @example
           * // without timeout
           * const response = await socket.emitWithAck("hello", "world");
           *
           * // with a specific timeout
           * try {
           *   const response = await socket.timeout(1000).emitWithAck("hello", "world");
           * } catch (err) {
           *   // the server did not acknowledge the event in the given delay
           * }
           *
           * @return a Promise that will be fulfilled when the server acknowledges the event
           */ emitWithAck(ev, ...args) {
            return new Promise((resolve, reject) => {
              const fn = (arg1, arg2) => {
                return arg1 ? reject(arg1) : resolve(arg2);
              };
              fn.withError = true;
              args.push(fn);
              this.emit(ev, ...args);
            });
          }
          /**
           * Add the packet to the queue.
           * @param args
           * @private
           */ _addToQueue(args) {
            let ack;
            if (typeof args[args.length - 1] === "function") ack = args.pop();
            const packet = {
              id: this._queueSeq++,
              tryCount: 0,
              pending: false,
              args,
              flags: Object.assign(
                {
                  fromQueue: true,
                },
                this.flags,
              ),
            };
            args.push((err, ...responseArgs) => {
              if (packet !== this._queue[0])
                // the packet has already been acknowledged
                return;
              const hasError = err !== null;
              if (hasError) {
                if (packet.tryCount > this._opts.retries) {
                  this._queue.shift();
                  if (ack) ack(err);
                }
              } else {
                this._queue.shift();
                if (ack) ack(null, ...responseArgs);
              }
              packet.pending = false;
              return this._drainQueue();
            });
            this._queue.push(packet);
            this._drainQueue();
          }
          /**
           * Send the first packet of the queue, and wait for an acknowledgement from the server.
           * @param force - whether to resend a packet that has not been acknowledged yet
           *
           * @private
           */ _drainQueue(force = false) {
            if (!this.connected || this._queue.length === 0) return;
            const packet = this._queue[0];
            if (packet.pending && !force) return;
            packet.pending = true;
            packet.tryCount++;
            this.flags = packet.flags;
            this.emit.apply(this, packet.args);
          }
          /**
           * Sends a packet.
           *
           * @param packet
           * @private
           */ packet(packet) {
            packet.nsp = this.nsp;
            this.io._packet(packet);
          }
          /**
           * Called upon engine `open`.
           *
           * @private
           */ onopen() {
            if (typeof this.auth == "function")
              this.auth((data) => {
                this._sendConnectPacket(data);
              });
            else this._sendConnectPacket(this.auth);
          }
          /**
           * Sends a CONNECT packet to initiate the Socket.IO session.
           *
           * @param data
           * @private
           */ _sendConnectPacket(data) {
            this.packet({
              type: (0, _socketIoParser.PacketType).CONNECT,
              data: this._pid
                ? Object.assign(
                    {
                      pid: this._pid,
                      offset: this._lastOffset,
                    },
                    data,
                  )
                : data,
            });
          }
          /**
           * Called upon engine or manager `error`.
           *
           * @param err
           * @private
           */ onerror(err) {
            if (!this.connected) this.emitReserved("connect_error", err);
          }
          /**
           * Called upon engine `close`.
           *
           * @param reason
           * @param description
           * @private
           */ onclose(reason, description) {
            this.connected = false;
            delete this.id;
            this.emitReserved("disconnect", reason, description);
            this._clearAcks();
          }
          /**
           * Clears the acknowledgement handlers upon disconnection, since the client will never receive an acknowledgement from
           * the server.
           *
           * @private
           */ _clearAcks() {
            Object.keys(this.acks).forEach((id) => {
              const isBuffered = this.sendBuffer.some(
                (packet) => String(packet.id) === id,
              );
              if (!isBuffered) {
                // note: handlers that do not accept an error as first argument are ignored here
                const ack = this.acks[id];
                delete this.acks[id];
                if (ack.withError)
                  ack.call(this, new Error("socket has been disconnected"));
              }
            });
          }
          /**
           * Called with socket packet.
           *
           * @param packet
           * @private
           */ onpacket(packet) {
            const sameNamespace = packet.nsp === this.nsp;
            if (!sameNamespace) return;
            switch (packet.type) {
              case (0, _socketIoParser.PacketType).CONNECT:
                if (packet.data && packet.data.sid)
                  this.onconnect(packet.data.sid, packet.data.pid);
                else
                  this.emitReserved(
                    "connect_error",
                    new Error(
                      "It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)",
                    ),
                  );
                break;
              case (0, _socketIoParser.PacketType).EVENT:
              case (0, _socketIoParser.PacketType).BINARY_EVENT:
                this.onevent(packet);
                break;
              case (0, _socketIoParser.PacketType).ACK:
              case (0, _socketIoParser.PacketType).BINARY_ACK:
                this.onack(packet);
                break;
              case (0, _socketIoParser.PacketType).DISCONNECT:
                this.ondisconnect();
                break;
              case (0, _socketIoParser.PacketType).CONNECT_ERROR:
                this.destroy();
                const err = new Error(packet.data.message);
                // @ts-ignore
                err.data = packet.data.data;
                this.emitReserved("connect_error", err);
                break;
            }
          }
          /**
           * Called upon a server event.
           *
           * @param packet
           * @private
           */ onevent(packet) {
            const args = packet.data || [];
            if (null != packet.id) args.push(this.ack(packet.id));
            if (this.connected) this.emitEvent(args);
            else this.receiveBuffer.push(Object.freeze(args));
          }
          emitEvent(args) {
            if (this._anyListeners && this._anyListeners.length) {
              const listeners = this._anyListeners.slice();
              for (const listener of listeners) listener.apply(this, args);
            }
            super.emit.apply(this, args);
            if (
              this._pid &&
              args.length &&
              typeof args[args.length - 1] === "string"
            )
              this._lastOffset = args[args.length - 1];
          }
          /**
           * Produces an ack callback to emit with an event.
           *
           * @private
           */ ack(id) {
            const self = this;
            let sent = false;
            return function (...args) {
              // prevent double callbacks
              if (sent) return;
              sent = true;
              self.packet({
                type: (0, _socketIoParser.PacketType).ACK,
                id: id,
                data: args,
              });
            };
          }
          /**
           * Called upon a server acknowledgement.
           *
           * @param packet
           * @private
           */ onack(packet) {
            const ack = this.acks[packet.id];
            if (typeof ack !== "function") return;
            delete this.acks[packet.id];
            // @ts-ignore FIXME ack is incorrectly inferred as 'never'
            if (ack.withError) packet.data.unshift(null);
            // @ts-ignore
            ack.apply(this, packet.data);
          }
          /**
           * Called upon server connect.
           *
           * @private
           */ onconnect(id, pid) {
            this.id = id;
            this.recovered = pid && this._pid === pid;
            this._pid = pid; // defined only if connection state recovery is enabled
            this.connected = true;
            this.emitBuffered();
            this.emitReserved("connect");
            this._drainQueue(true);
          }
          /**
           * Emit buffered events (received and emitted).
           *
           * @private
           */ emitBuffered() {
            this.receiveBuffer.forEach((args) => this.emitEvent(args));
            this.receiveBuffer = [];
            this.sendBuffer.forEach((packet) => {
              this.notifyOutgoingListeners(packet);
              this.packet(packet);
            });
            this.sendBuffer = [];
          }
          /**
           * Called upon server disconnect.
           *
           * @private
           */ ondisconnect() {
            this.destroy();
            this.onclose("io server disconnect");
          }
          /**
           * Called upon forced client/server side disconnections,
           * this method ensures the manager stops tracking us and
           * that reconnections don't get triggered for this.
           *
           * @private
           */ destroy() {
            if (this.subs) {
              // clean subscriptions to avoid reconnections
              this.subs.forEach((subDestroy) => subDestroy());
              this.subs = undefined;
            }
            this.io["_destroy"](this);
          }
          /**
           * Disconnects the socket manually. In that case, the socket will not try to reconnect.
           *
           * If this is the last active Socket instance of the {@link Manager}, the low-level connection will be closed.
           *
           * @example
           * const socket = io();
           *
           * socket.on("disconnect", (reason) => {
           *   // console.log(reason); prints "io client disconnect"
           * });
           *
           * socket.disconnect();
           *
           * @return self
           */ disconnect() {
            if (this.connected)
              this.packet({
                type: (0, _socketIoParser.PacketType).DISCONNECT,
              });
            // remove socket from pool
            this.destroy();
            if (this.connected)
              // fire events
              this.onclose("io client disconnect");
            return this;
          }
          /**
           * Alias for {@link disconnect()}.
           *
           * @return self
           */ close() {
            return this.disconnect();
          }
          /**
           * Sets the compress flag.
           *
           * @example
           * socket.compress(false).emit("hello");
           *
           * @param compress - if `true`, compresses the sending data
           * @return self
           */ compress(compress) {
            this.flags.compress = compress;
            return this;
          }
          /**
           * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
           * ready to send messages.
           *
           * @example
           * socket.volatile.emit("hello"); // the server may or may not receive it
           *
           * @returns self
           */ get volatile() {
            this.flags.volatile = true;
            return this;
          }
          /**
           * Sets a modifier for a subsequent event emission that the callback will be called with an error when the
           * given number of milliseconds have elapsed without an acknowledgement from the server:
           *
           * @example
           * socket.timeout(5000).emit("my-event", (err) => {
           *   if (err) {
           *     // the server did not acknowledge the event in the given delay
           *   }
           * });
           *
           * @returns self
           */ timeout(timeout) {
            this.flags.timeout = timeout;
            return this;
          }
          /**
           * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
           * callback.
           *
           * @example
           * socket.onAny((event, ...args) => {
           *   console.log(`got ${event}`);
           * });
           *
           * @param listener
           */ onAny(listener) {
            this._anyListeners = this._anyListeners || [];
            this._anyListeners.push(listener);
            return this;
          }
          /**
           * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
           * callback. The listener is added to the beginning of the listeners array.
           *
           * @example
           * socket.prependAny((event, ...args) => {
           *   console.log(`got event ${event}`);
           * });
           *
           * @param listener
           */ prependAny(listener) {
            this._anyListeners = this._anyListeners || [];
            this._anyListeners.unshift(listener);
            return this;
          }
          /**
           * Removes the listener that will be fired when any event is emitted.
           *
           * @example
           * const catchAllListener = (event, ...args) => {
           *   console.log(`got event ${event}`);
           * }
           *
           * socket.onAny(catchAllListener);
           *
           * // remove a specific listener
           * socket.offAny(catchAllListener);
           *
           * // or remove all listeners
           * socket.offAny();
           *
           * @param listener
           */ offAny(listener) {
            if (!this._anyListeners) return this;
            if (listener) {
              const listeners = this._anyListeners;
              for (let i = 0; i < listeners.length; i++)
                if (listener === listeners[i]) {
                  listeners.splice(i, 1);
                  return this;
                }
            } else this._anyListeners = [];
            return this;
          }
          /**
           * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
           * e.g. to remove listeners.
           */ listenersAny() {
            return this._anyListeners || [];
          }
          /**
           * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
           * callback.
           *
           * Note: acknowledgements sent to the server are not included.
           *
           * @example
           * socket.onAnyOutgoing((event, ...args) => {
           *   console.log(`sent event ${event}`);
           * });
           *
           * @param listener
           */ onAnyOutgoing(listener) {
            this._anyOutgoingListeners = this._anyOutgoingListeners || [];
            this._anyOutgoingListeners.push(listener);
            return this;
          }
          /**
           * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
           * callback. The listener is added to the beginning of the listeners array.
           *
           * Note: acknowledgements sent to the server are not included.
           *
           * @example
           * socket.prependAnyOutgoing((event, ...args) => {
           *   console.log(`sent event ${event}`);
           * });
           *
           * @param listener
           */ prependAnyOutgoing(listener) {
            this._anyOutgoingListeners = this._anyOutgoingListeners || [];
            this._anyOutgoingListeners.unshift(listener);
            return this;
          }
          /**
           * Removes the listener that will be fired when any event is emitted.
           *
           * @example
           * const catchAllListener = (event, ...args) => {
           *   console.log(`sent event ${event}`);
           * }
           *
           * socket.onAnyOutgoing(catchAllListener);
           *
           * // remove a specific listener
           * socket.offAnyOutgoing(catchAllListener);
           *
           * // or remove all listeners
           * socket.offAnyOutgoing();
           *
           * @param [listener] - the catch-all listener (optional)
           */ offAnyOutgoing(listener) {
            if (!this._anyOutgoingListeners) return this;
            if (listener) {
              const listeners = this._anyOutgoingListeners;
              for (let i = 0; i < listeners.length; i++)
                if (listener === listeners[i]) {
                  listeners.splice(i, 1);
                  return this;
                }
            } else this._anyOutgoingListeners = [];
            return this;
          }
          /**
           * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
           * e.g. to remove listeners.
           */ listenersAnyOutgoing() {
            return this._anyOutgoingListeners || [];
          }
          /**
           * Notify the listeners for each packet sent
           *
           * @param packet
           *
           * @private
           */ notifyOutgoingListeners(packet) {
            if (
              this._anyOutgoingListeners &&
              this._anyOutgoingListeners.length
            ) {
              const listeners = this._anyOutgoingListeners.slice();
              for (const listener of listeners)
                listener.apply(this, packet.data);
            }
          }
        }
      },
      {
        "socket.io-parser": "2lQL3",
        "./on.js": "8FFT1",
        "@socket.io/component-emitter": "3GA7L",
        "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3",
      },
    ],
    "2lQL3": [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, "protocol", () => protocol);
        parcelHelpers.export(exports, "PacketType", () => PacketType);
        /**
         * A socket.io Encoder instance
         */ parcelHelpers.export(exports, "Encoder", () => Encoder);
        /**
         * A socket.io Decoder instance
         *
         * @return {Object} decoder
         */ parcelHelpers.export(exports, "Decoder", () => Decoder);
        var _componentEmitter = require("@socket.io/component-emitter");
        var _binaryJs = require("./binary.js");
        var _isBinaryJs = require("./is-binary.js");
        /**
         * These strings must not be used as event names, as they have a special meaning.
         */ const RESERVED_EVENTS = [
          "connect",
          "connect_error",
          "disconnect",
          "disconnecting",
          "newListener",
          "removeListener",
        ];
        const protocol = 5;
        var PacketType;
        (function (PacketType) {
          PacketType[(PacketType["CONNECT"] = 0)] = "CONNECT";
          PacketType[(PacketType["DISCONNECT"] = 1)] = "DISCONNECT";
          PacketType[(PacketType["EVENT"] = 2)] = "EVENT";
          PacketType[(PacketType["ACK"] = 3)] = "ACK";
          PacketType[(PacketType["CONNECT_ERROR"] = 4)] = "CONNECT_ERROR";
          PacketType[(PacketType["BINARY_EVENT"] = 5)] = "BINARY_EVENT";
          PacketType[(PacketType["BINARY_ACK"] = 6)] = "BINARY_ACK";
        })(PacketType || (PacketType = {}));
        class Encoder {
          /**
           * Encoder constructor
           *
           * @param {function} replacer - custom replacer to pass down to JSON.parse
           */ constructor(replacer) {
            this.replacer = replacer;
          }
          /**
           * Encode a packet as a single string if non-binary, or as a
           * buffer sequence, depending on packet type.
           *
           * @param {Object} obj - packet object
           */ encode(obj) {
            if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
              if ((0, _isBinaryJs.hasBinary)(obj))
                return this.encodeAsBinary({
                  type:
                    obj.type === PacketType.EVENT
                      ? PacketType.BINARY_EVENT
                      : PacketType.BINARY_ACK,
                  nsp: obj.nsp,
                  data: obj.data,
                  id: obj.id,
                });
            }
            return [this.encodeAsString(obj)];
          }
          /**
           * Encode packet as string.
           */ encodeAsString(obj) {
            // first is type
            let str = "" + obj.type;
            // attachments if we have them
            if (
              obj.type === PacketType.BINARY_EVENT ||
              obj.type === PacketType.BINARY_ACK
            )
              str += obj.attachments + "-";
            // if we have a namespace other than `/`
            // we append it followed by a comma `,`
            if (obj.nsp && "/" !== obj.nsp) str += obj.nsp + ",";
            // immediately followed by the id
            if (null != obj.id) str += obj.id;
            // json data
            if (null != obj.data)
              str += JSON.stringify(obj.data, this.replacer);
            return str;
          }
          /**
           * Encode packet as 'buffer sequence' by removing blobs, and
           * deconstructing packet into object with placeholders and
           * a list of buffers.
           */ encodeAsBinary(obj) {
            const deconstruction = (0, _binaryJs.deconstructPacket)(obj);
            const pack = this.encodeAsString(deconstruction.packet);
            const buffers = deconstruction.buffers;
            buffers.unshift(pack); // add packet info to beginning of data list
            return buffers; // write all the buffers
          }
        }
        // see https://stackoverflow.com/questions/8511281/check-if-a-value-is-an-object-in-javascript
        function isObject(value) {
          return Object.prototype.toString.call(value) === "[object Object]";
        }
        class Decoder extends (0, _componentEmitter.Emitter) {
          /**
           * Decoder constructor
           *
           * @param {function} reviver - custom reviver to pass down to JSON.stringify
           */ constructor(reviver) {
            super();
            this.reviver = reviver;
          }
          /**
           * Decodes an encoded packet string into packet JSON.
           *
           * @param {String} obj - encoded packet
           */ add(obj) {
            let packet;
            if (typeof obj === "string") {
              if (this.reconstructor)
                throw new Error(
                  "got plaintext data when reconstructing a packet",
                );
              packet = this.decodeString(obj);
              const isBinaryEvent = packet.type === PacketType.BINARY_EVENT;
              if (isBinaryEvent || packet.type === PacketType.BINARY_ACK) {
                packet.type = isBinaryEvent ? PacketType.EVENT : PacketType.ACK;
                // binary packet's json
                this.reconstructor = new BinaryReconstructor(packet);
                // no attachments, labeled binary but no binary data to follow
                if (packet.attachments === 0)
                  super.emitReserved("decoded", packet);
              } // non-binary full packet
              else super.emitReserved("decoded", packet);
            } else if ((0, _isBinaryJs.isBinary)(obj) || obj.base64) {
              // raw binary data
              if (!this.reconstructor)
                throw new Error(
                  "got binary data when not reconstructing a packet",
                );
              else {
                packet = this.reconstructor.takeBinaryData(obj);
                if (packet) {
                  // received final buffer
                  this.reconstructor = null;
                  super.emitReserved("decoded", packet);
                }
              }
            } else throw new Error("Unknown type: " + obj);
          }
          /**
           * Decode a packet String (JSON data)
           *
           * @param {String} str
           * @return {Object} packet
           */ decodeString(str) {
            let i = 0;
            // look up type
            const p = {
              type: Number(str.charAt(0)),
            };
            if (PacketType[p.type] === undefined)
              throw new Error("unknown packet type " + p.type);
            // look up attachments if type binary
            if (
              p.type === PacketType.BINARY_EVENT ||
              p.type === PacketType.BINARY_ACK
            ) {
              const start = i + 1;
              while (str.charAt(++i) !== "-" && i != str.length);
              const buf = str.substring(start, i);
              if (buf != Number(buf) || str.charAt(i) !== "-")
                throw new Error("Illegal attachments");
              p.attachments = Number(buf);
            }
            // look up namespace (if any)
            if ("/" === str.charAt(i + 1)) {
              const start = i + 1;
              while (++i) {
                const c = str.charAt(i);
                if ("," === c) break;
                if (i === str.length) break;
              }
              p.nsp = str.substring(start, i);
            } else p.nsp = "/";
            // look up id
            const next = str.charAt(i + 1);
            if ("" !== next && Number(next) == next) {
              const start = i + 1;
              while (++i) {
                const c = str.charAt(i);
                if (null == c || Number(c) != c) {
                  --i;
                  break;
                }
                if (i === str.length) break;
              }
              p.id = Number(str.substring(start, i + 1));
            }
            // look up json data
            if (str.charAt(++i)) {
              const payload = this.tryParse(str.substr(i));
              if (Decoder.isPayloadValid(p.type, payload)) p.data = payload;
              else throw new Error("invalid payload");
            }
            return p;
          }
          tryParse(str) {
            try {
              return JSON.parse(str, this.reviver);
            } catch (e) {
              return false;
            }
          }
          static isPayloadValid(type, payload) {
            switch (type) {
              case PacketType.CONNECT:
                return isObject(payload);
              case PacketType.DISCONNECT:
                return payload === undefined;
              case PacketType.CONNECT_ERROR:
                return typeof payload === "string" || isObject(payload);
              case PacketType.EVENT:
              case PacketType.BINARY_EVENT:
                return (
                  Array.isArray(payload) &&
                  (typeof payload[0] === "number" ||
                    (typeof payload[0] === "string" &&
                      RESERVED_EVENTS.indexOf(payload[0]) === -1))
                );
              case PacketType.ACK:
              case PacketType.BINARY_ACK:
                return Array.isArray(payload);
            }
          }
          /**
           * Deallocates a parser's resources
           */ destroy() {
            if (this.reconstructor) {
              this.reconstructor.finishedReconstruction();
              this.reconstructor = null;
            }
          }
        }
        /**
         * A manager of a binary event's 'buffer sequence'. Should
         * be constructed whenever a packet of type BINARY_EVENT is
         * decoded.
         *
         * @param {Object} packet
         * @return {BinaryReconstructor} initialized reconstructor
         */ class BinaryReconstructor {
          constructor(packet) {
            this.packet = packet;
            this.buffers = [];
            this.reconPack = packet;
          }
          /**
           * Method to be called when binary data received from connection
           * after a BINARY_EVENT packet.
           *
           * @param {Buffer | ArrayBuffer} binData - the raw binary data received
           * @return {null | Object} returns null if more binary data is expected or
           *   a reconstructed packet object if all buffers have been received.
           */ takeBinaryData(binData) {
            this.buffers.push(binData);
            if (this.buffers.length === this.reconPack.attachments) {
              // done with buffer list
              const packet = (0, _binaryJs.reconstructPacket)(
                this.reconPack,
                this.buffers,
              );
              this.finishedReconstruction();
              return packet;
            }
            return null;
          }
          /**
           * Cleans up binary packet reconstruction variables.
           */ finishedReconstruction() {
            this.reconPack = null;
            this.buffers = [];
          }
        }
      },
      {
        "@socket.io/component-emitter": "3GA7L",
        "./binary.js": "juaze",
        "./is-binary.js": "0mMso",
        "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3",
      },
    ],
    juaze: [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
        parcelHelpers.defineInteropFlag(exports);
        /**
         * Replaces every Buffer | ArrayBuffer | Blob | File in packet with a numbered placeholder.
         *
         * @param {Object} packet - socket.io event packet
         * @return {Object} with deconstructed packet and list of buffers
         * @public
         */ parcelHelpers.export(
          exports,
          "deconstructPacket",
          () => deconstructPacket,
        );
        /**
         * Reconstructs a binary packet from its placeholder packet and buffers
         *
         * @param {Object} packet - event packet with placeholders
         * @param {Array} buffers - binary buffers to put in placeholder positions
         * @return {Object} reconstructed packet
         * @public
         */ parcelHelpers.export(
          exports,
          "reconstructPacket",
          () => reconstructPacket,
        );
        var _isBinaryJs = require("./is-binary.js");
        function deconstructPacket(packet) {
          const buffers = [];
          const packetData = packet.data;
          const pack = packet;
          pack.data = _deconstructPacket(packetData, buffers);
          pack.attachments = buffers.length; // number of binary 'attachments'
          return {
            packet: pack,
            buffers: buffers,
          };
        }
        function _deconstructPacket(data, buffers) {
          if (!data) return data;
          if ((0, _isBinaryJs.isBinary)(data)) {
            const placeholder = {
              _placeholder: true,
              num: buffers.length,
            };
            buffers.push(data);
            return placeholder;
          } else if (Array.isArray(data)) {
            const newData = new Array(data.length);
            for (let i = 0; i < data.length; i++)
              newData[i] = _deconstructPacket(data[i], buffers);
            return newData;
          } else if (typeof data === "object" && !(data instanceof Date)) {
            const newData = {};
            for (const key in data)
              if (Object.prototype.hasOwnProperty.call(data, key))
                newData[key] = _deconstructPacket(data[key], buffers);
            return newData;
          }
          return data;
        }
        function reconstructPacket(packet, buffers) {
          packet.data = _reconstructPacket(packet.data, buffers);
          delete packet.attachments; // no longer useful
          return packet;
        }
        function _reconstructPacket(data, buffers) {
          if (!data) return data;
          if (data && data._placeholder === true) {
            const isIndexValid =
              typeof data.num === "number" &&
              data.num >= 0 &&
              data.num < buffers.length;
            if (isIndexValid)
              return buffers[data.num]; // appropriate buffer (should be natural order anyway)
            else throw new Error("illegal attachments");
          } else if (Array.isArray(data))
            for (let i = 0; i < data.length; i++)
              data[i] = _reconstructPacket(data[i], buffers);
          else if (typeof data === "object") {
            for (const key in data)
              if (Object.prototype.hasOwnProperty.call(data, key))
                data[key] = _reconstructPacket(data[key], buffers);
          }
          return data;
        }
      },
      {
        "./is-binary.js": "0mMso",
        "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3",
      },
    ],
    "0mMso": [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
        parcelHelpers.defineInteropFlag(exports);
        /**
         * Returns true if obj is a Buffer, an ArrayBuffer, a Blob or a File.
         *
         * @private
         */ parcelHelpers.export(exports, "isBinary", () => isBinary);
        parcelHelpers.export(exports, "hasBinary", () => hasBinary);
        const withNativeArrayBuffer = typeof ArrayBuffer === "function";
        const isView = (obj) => {
          return typeof ArrayBuffer.isView === "function"
            ? ArrayBuffer.isView(obj)
            : obj.buffer instanceof ArrayBuffer;
        };
        const toString = Object.prototype.toString;
        const withNativeBlob =
          typeof Blob === "function" ||
          (typeof Blob !== "undefined" &&
            toString.call(Blob) === "[object BlobConstructor]");
        const withNativeFile =
          typeof File === "function" ||
          (typeof File !== "undefined" &&
            toString.call(File) === "[object FileConstructor]");
        function isBinary(obj) {
          return (
            (withNativeArrayBuffer &&
              (obj instanceof ArrayBuffer || isView(obj))) ||
            (withNativeBlob && obj instanceof Blob) ||
            (withNativeFile && obj instanceof File)
          );
        }
        function hasBinary(obj, toJSON) {
          if (!obj || typeof obj !== "object") return false;
          if (Array.isArray(obj)) {
            for (let i = 0, l = obj.length; i < l; i++) {
              if (hasBinary(obj[i])) return true;
            }
            return false;
          }
          if (isBinary(obj)) return true;
          if (
            obj.toJSON &&
            typeof obj.toJSON === "function" &&
            arguments.length === 1
          )
            return hasBinary(obj.toJSON(), true);
          for (const key in obj) {
            if (
              Object.prototype.hasOwnProperty.call(obj, key) &&
              hasBinary(obj[key])
            )
              return true;
          }
          return false;
        }
      },
      { "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3" },
    ],
    "8FFT1": [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, "on", () => on);
        function on(obj, ev, fn) {
          obj.on(ev, fn);
          return function subDestroy() {
            obj.off(ev, fn);
          };
        }
      },
      { "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3" },
    ],
    cZLsm: [
      function (require, module, exports, __globalThis) {
        /**
         * Initialize backoff timer with `opts`.
         *
         * - `min` initial timeout in milliseconds [100]
         * - `max` max timeout [10000]
         * - `jitter` [0]
         * - `factor` [2]
         *
         * @param {Object} opts
         * @api public
         */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, "Backoff", () => Backoff);
        function Backoff(opts) {
          opts = opts || {};
          this.ms = opts.min || 100;
          this.max = opts.max || 10000;
          this.factor = opts.factor || 2;
          this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
          this.attempts = 0;
        }
        /**
         * Return the backoff duration.
         *
         * @return {Number}
         * @api public
         */ Backoff.prototype.duration = function () {
          var ms = this.ms * Math.pow(this.factor, this.attempts++);
          if (this.jitter) {
            var rand = Math.random();
            var deviation = Math.floor(rand * this.jitter * ms);
            ms =
              (Math.floor(rand * 10) & 1) == 0
                ? ms - deviation
                : ms + deviation;
          }
          return Math.min(ms, this.max) | 0;
        };
        /**
         * Reset the number of attempts.
         *
         * @api public
         */ Backoff.prototype.reset = function () {
          this.attempts = 0;
        };
        /**
         * Set the minimum duration
         *
         * @api public
         */ Backoff.prototype.setMin = function (min) {
          this.ms = min;
        };
        /**
         * Set the maximum duration
         *
         * @api public
         */ Backoff.prototype.setMax = function (max) {
          this.max = max;
        };
        /**
         * Set the jitter
         *
         * @api public
         */ Backoff.prototype.setJitter = function (jitter) {
          this.jitter = jitter;
        };
      },
      { "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3" },
    ],
  },
  ["kQu7H", "9YDZd"],
  "9YDZd",
  "parcelRequire3518",
  {},
);

//# sourceMappingURL=index.js.map
