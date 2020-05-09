const js = import("./node_modules/@easychessanimations/chessengine-wasm/chessengine_wasm.js");
js.then(js => {
  js.greet("chessengine-wasm");
});
