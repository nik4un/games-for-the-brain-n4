install: install-deps install-flow-typed

install-deps:
	npm install

build:
	rm -rf dist
	npm run build

check-types:
	npm run flow

lint:
	npm run eslint .

publish:
	npm publish
