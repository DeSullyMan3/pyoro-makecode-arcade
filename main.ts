namespace SpriteKind {
    export const Bricks = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
let dir = 0
let x = 80
scene.setBackgroundImage(assets.image`bg`)
let pyoro = sprites.create(assets.image`pyoro_idle_l`, SpriteKind.Player)
let brick = sprites.create(assets.image`brick`, SpriteKind.Bricks)
brick.setPosition(4, 116)
forever(function () {
    pyoro.setPosition(x, 105)
    if (controller.left.isPressed()) {
        x += -2
        dir = 0
    } else if (controller.right.isPressed()) {
        x += 2
        dir = 1
    }
})
forever(function () {
    if (dir == 0) {
        if (controller.left.isPressed()) {
            animation.runImageAnimation(
            pyoro,
            assets.animation`pyoro_walk_l`,
            100,
            true
            )
            pauseUntil(() => !(controller.left.isPressed()))
        } else {
            animation.stopAnimation(animation.AnimationTypes.All, pyoro)
            pyoro.setImage(assets.image`pyoro_idle_l`)
        }
    } else {
        if (controller.right.isPressed()) {
            animation.runImageAnimation(
            pyoro,
            assets.animation`pyoro_walk_r`,
            100,
            true
            )
            pauseUntil(() => !(controller.right.isPressed()))
        } else {
            animation.stopAnimation(animation.AnimationTypes.All, pyoro)
            pyoro.setImage(assets.image`pyoro_idle_r`)
        }
    }
})
