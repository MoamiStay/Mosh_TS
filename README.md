# Mosh_TS

Learning Typescript with Mosh 2022

Typescript is a programming language created by microsoft to address shortcomings of javascript.

Benefits of TS:

- Static typing
- Code completion
- Refactoring
- Shorthand notations

Drawbacks:

- Compilation
- Diciplined code writing

Compile file: tsc index.ts  
Generate config file: tsc --init

CONFIG FILE:
"target": "ES2016" -> change with "Ctr + Space"  
"rootDir": "./src" -> index.ts file location  
"outDir": "./" -> "outDir": "./dist"
"removeComments": true = Remove comments in compiler
"noEmitOnError": true =
"sourceMap": true

DEBUGGING:
write code  
add breakpoint (red dot)
Debug panel -> "Launch Program" (f5)
Use toolbar to navigate code

TYPES:

- any
- unknown
- never
- enum
- tuple
