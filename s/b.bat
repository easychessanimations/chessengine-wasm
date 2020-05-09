
wasm-pack build --scope easychessanimations

copy pkg\*.* site\node_modules\@easychessanimations\chessengine-wasm

cd site

call npm run build

cd ..
