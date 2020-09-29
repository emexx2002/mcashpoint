init:
	nmp init

install:
	npm install
	
build:
	npm run build

test:
	npm test -- --coverage

analyze:
	${scannerHome}/bin/sonar-scanner

docker-image:
	docker build -t esettlement/images:mcash-admin-view .
	docker push esettlement/images:mcash-admin
