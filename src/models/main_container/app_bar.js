class AppBar {
  constructor(title = String, large_title = Boolean) {
    this.title = title;
    if (large_title != undefined) {
      this.large_title = large_title;
    }
  }
}

module.exports = AppBar;
