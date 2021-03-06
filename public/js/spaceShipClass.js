// 宇宙船オブジェクト
class SpaceShip extends GameObject {
  constructor(src, posX, posY){
    super(src, posX, posY, 64, 64)

    setInterval(() => {
      this.checkHit()
    }, 200)
  }

  // モンスターが当たってないかチェックする
  checkHit () {
    enemies.forEach(enemy => {
      let distX = enemy.position.x - this.position.x 
      let distY = enemy.position.y - this.position.y

      if ((distX < 30 && distX > -30) && (distY < 30 && distY > -30) && (!this.dead)) {
        this.dead = true
        new Explosion(this.position.x, this.position.y).explode(() => {
          endGame()
        })
      }
    })
  }
}
