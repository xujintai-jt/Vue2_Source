export default class Scanner {
  constructor(template) {
    this.templateStr = template;
    //尾巴字符串
    this.tail = template;
    this.pos = 0;
  }


  scan(Tag) {
    if (this.tail.indexOf(Tag) === 0) {
      this.pos += Tag.length
      this.tail = this.templateStr.substring(this.pos);
    }
  }

  //让指针进行扫描，遇到stopTag结束，并且返回结束之前路过的文字。
  scanUtil(stopTag) {
    const pos_backup = this.pos
    while (this.tail.indexOf(stopTag) !== 0 && this.pos < this.templateStr.length) {
      this.pos++;
      this.tail = this.templateStr.substring(this.pos);
    }
    return this.templateStr.substring(pos_backup,this.pos)
  }


}
