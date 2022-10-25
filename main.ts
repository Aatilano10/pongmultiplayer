namespace SpriteKind {
    export const Ball = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Ball, function (sprite, otherSprite) {
    otherSprite.vx = 0 - otherSprite.vx
    if (sprite == Player_1) {
        otherSprite.left = sprite.right
        info.changeScoreBy(1)
    } else {
        otherSprite.right = sprite.left
        info.player2.changeScoreBy(1)
    }
})
function create_ball () {
    Ball = sprites.create(assets.image`Ball`, SpriteKind.Ball)
    Ball.setBounceOnWall(true)
    Ball.setVelocity(80, 80)
}
function Walls () {
    Player_1 = sprites.create(assets.image`Player 1`, SpriteKind.Player)
    controller.moveSprite(Player_1, 0, 100)
    Player_1.x = 0
    Player_1.setStayInScreen(true)
    info.setScore(0)
    Player_2 = sprites.create(assets.image`Player 2`, SpriteKind.Player)
    Player_2.x = scene.screenWidth()
    Player_2.setStayInScreen(true)
    controller.moveSprite(Player_2, 0, 100)
    info.player2.setScore(0)
}
let Player_2: Sprite = null
let Ball: Sprite = null
let Player_1: Sprite = null
create_ball()
Walls()
