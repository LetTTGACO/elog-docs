// 如果需要返回带有front-matter的md字符串，则需要安装并引入此库
const { matterMarkdownAdapter } = require("@elog/cli");

/**
 * 自定义文档处理器
 * @param {DocDetail} doc doc的类型定义为 DocDetail
 * @return {string} 返回处理后的文档内容字符串
 */
const format = (doc) => {
  if (doc.properties && doc.properties.cover) {
    delete doc.properties.cover;
  }
  // 返回带有front-matter的md字符串
  return matterMarkdownAdapter(doc);
};

module.exports = {
  format,
};
