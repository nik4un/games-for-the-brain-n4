install: install-deps install-flow-typed

install-deps:
	npm install

install-flow-typed:
	npm run flow-typed install

build:
	rm -rf dist
	npm run build

start:
	npm run babel-node -- dist/bin/brain-even.js

check-types:
	npm run flow

lint:
	npm run eslint

publish:
	npm publish
