help:
	@echo ""
	@echo "install    intall asc command-line"
	@echo "build      build a assemblyscript file"
	@echo "run        run the node fib program"
	@echo ""


install:
	@git clone https://github.com/AssemblyScript/assemblyscript.git
	@cd assemblyscript && npm install && npm run clean

compile:
	@asc fib.ts -b build/fib.wasm -O3

run:
	@node ./index

