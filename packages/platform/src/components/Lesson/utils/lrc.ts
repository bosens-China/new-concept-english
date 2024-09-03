interface LrcStructure {
  time: number;
  content: string;
}
export const analysis = (str: string) => {
  let arr: LrcStructure[] = [];
  const reg = /\[(.+?)\]/;
  str.split('\n').forEach((f) => {
    // 删除所有不必要的空白元素
    const s = f.replace(/^[\s\r]|[\s\r]$/g, '');
    const content = s.replace(reg, '');
    if (!content) {
      return;
    }
    const time = f.match(reg)?.at(1);

    if (!time) {
      return;
    }
    const [second = 0, minute = 0, hour = 0] = time
      .split(':')
      .reverse()
      .map((f) => Number.parseFloat(f) || 0);

    const total = second + minute * 60 + hour * 60 * 60;
    arr.push({
      time: total,
      content,
    });
  });

  /*
   * 对异常数据进行剔除，过滤掉一开始数字很大的值
   */

  for (let i = 0, len = arr.length; i < len; i++) {
    arr = arr.filter((current, index) => {
      const next = arr.at(index + 1);
      if (next && current.time > next.time) {
        return false;
      }
      return true;
    });
  }

  return arr;
};
