# Babylonjs - Bug reproduction for subject 37492
Link to the subject : https://forum.babylonjs.com/t/enginestore-lastcreatedengine-becoming-empty/37492

## Steps to reproduce the bug
### Installation
1. Clone this project (main-app) and its dependency (core-library) in different locations  

`git clone https://github.com/3D-Bear/37492-babylonjs-bug-repro-main-app.git`

`git clone https://github.com/3D-Bear/37492-Babylonjs-bug-repro-core-library.git`

2. Make 'core-library' available as a local package with 'npm link'  
`cd 37492-Babylonjs-bug-repro-core-library`  
`npm link` (you may need to run it with sudo)

3. Install 'core-library' in 'main-app' project with npm-link  
`cd ../37492-babylonjs-bug-repro-main-app`  
`npm link 37492-babylonjs-bug-repro-core-library`  
:warning: any new `npm install` will break the link and you will need to run this command again.

### Run the project
1. Simply serve the page 'index.html' from 'main-app' project (for exemple with Live Server in VSCode). It is supposed to work because dist files from webpack are available in the repo.

2. If things are working well, you should see a simple sphere in the scene, and some logs in the js console. 

### Encounter the bug to reproduce
1. To make the 'Invalid engine' error appear, you need to uncomment the two commented lines (11 - 12) in main-app-index.ts and rebuild the project.

2. To rebuild the project, just run `npx webpack` in 'main-app' folder

3. (Optional) if you need to make modifications in 'core-library' project, you can run `npx tsc` in 'core-library' project
