/**
 * 记忆播放组件
 */
export default class MemoryPlayComponent {
  /**
   * @constructor 记忆播放组件构造函数
   */
  constructor(getTime) {
    this.getTime = getTime
    this.hasMemoryDisplay = false
  }

  ready(player) {
    let memoryTime = this.getTime()
    memoryTime = memoryTime ? parseInt(memoryTime) : 0
    if (memoryTime !== null && memoryTime !== 0 && !this.hasMemoryDisplay) {
      // 标识记忆播放是否有触发, 解决清晰度切换也会触发记忆播放的问题
      this.hasMemoryDisplay = true
      player.seek(memoryTime)
      if (player.getStatus() !== 'playing') {
        player.play()
      }
    }
  }
}
