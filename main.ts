namespace SpriteKind {
    export const Bricks = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
let dir = 0
let x = 80
scene.setBackgroundImage(assets.image`bg`)
let pyoro = sprites.create(assets.image`pyoro_idle_l`, SpriteKind.Player)
let brick01 = sprites.create(assets.image`brick`, SpriteKind.Bricks)
let brick02 = sprites.create(assets.image`brick`, SpriteKind.Bricks)
let brick03 = sprites.create(assets.image`brick`, SpriteKind.Bricks)
let brick04 = sprites.create(assets.image`brick`, SpriteKind.Bricks)
let brick05 = sprites.create(assets.image`brick`, SpriteKind.Bricks)
let brick06 = sprites.create(assets.image`brick`, SpriteKind.Bricks)
let brick07 = sprites.create(assets.image`brick`, SpriteKind.Bricks)
let brick08 = sprites.create(assets.image`brick`, SpriteKind.Bricks)
let brick09 = sprites.create(assets.image`brick`, SpriteKind.Bricks)
let brick10 = sprites.create(assets.image`brick`, SpriteKind.Bricks)
let brick11 = sprites.create(assets.image`brick`, SpriteKind.Bricks)
let brick12 = sprites.create(assets.image`brick`, SpriteKind.Bricks)
let brick13 = sprites.create(assets.image`brick`, SpriteKind.Bricks)
let brick14 = sprites.create(assets.image`brick`, SpriteKind.Bricks)
let brick15 = sprites.create(assets.image`brick`, SpriteKind.Bricks)
let brick16 = sprites.create(assets.image`brick`, SpriteKind.Bricks)
let brick17 = sprites.create(assets.image`brick`, SpriteKind.Bricks)
let brick18 = sprites.create(assets.image`brick`, SpriteKind.Bricks)
let brick19 = sprites.create(assets.image`brick`, SpriteKind.Bricks)
let brick20 = sprites.create(assets.image`brick`, SpriteKind.Bricks)
brick01.setPosition(4, 116)
brick02.setPosition(12, 116)
brick03.setPosition(20, 116)
brick04.setPosition(28, 116)
brick05.setPosition(36, 116)
brick06.setPosition(44, 116)
brick07.setPosition(52, 116)
brick08.setPosition(60, 116)
brick09.setPosition(68, 116)
brick10.setPosition(76, 116)
brick11.setPosition(84, 116)
brick12.setPosition(92, 116)
brick13.setPosition(100, 116)
brick14.setPosition(108, 116)
brick15.setPosition(116, 116)
brick16.setPosition(124, 116)
brick17.setPosition(132, 116)
brick18.setPosition(140, 116)
brick19.setPosition(148, 116)
brick20.setPosition(156, 116)
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
