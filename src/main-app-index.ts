import { SceneLayoutBuilder, SceneManager } from '37492-babylonjs-bug-repro-core-library'
import { Camera, MeshBuilder } from 'babylonjs';
import { Scene } from 'babylonjs';
import { AdvancedDynamicTexture, Button } from 'babylonjs-gui';

export class CustomLayoutBuilder extends SceneLayoutBuilder {
    public initRooms(scene: Scene, mainCamera: Camera): void {
        console.log("Init from custom layout builder")
        MeshBuilder.CreateSphere('sphere', undefined, scene)

        // const advancedTexture = AdvancedDynamicTexture.CreateFullscreenUI("myUI", true, scene);
        // var button1 = Button.CreateSimpleButton("but1", "Click Me"); advancedTexture.addControl(button1);
    }

}

function initApp() {
    const canvas = document.getElementById("renderCanvas") as HTMLCanvasElement;
    if (canvas) {
        const customLayoutBuilder: CustomLayoutBuilder = new CustomLayoutBuilder()
        const sceneManager: SceneManager = new SceneManager(customLayoutBuilder, canvas)

        sceneManager.initScene()
    }
}

initApp()