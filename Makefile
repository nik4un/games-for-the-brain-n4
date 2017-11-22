install: install-deps install-flow-typed

install-deps:
	npm install

install-flow-typed:
	npm run flow-typed install

build:
	rm -rf dist
	npm run build

go:
	npm run babel-node -- src/bin/brain-games.js

check-types:
	npm run flow

lint:
	npm run eslint

publish:
	npm publish
