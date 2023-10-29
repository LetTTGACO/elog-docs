const path = require("path");

/**
 * 自定义图片路径处理器
 * @param {DocDetail} doc doc的类型定义为 DocDetail
 * @param {string} outputDir
 * @return {dirPath: string, prefixKey: string} 返回处理后图片存放地址dirPath和文档中图片的前缀prefixKey
 */
const getImagePath = (doc, outputDir) => {
  // 当前文档文档的存在路径：docs/feishu-wiki/首页
  const docPath = doc.docPath
  // 当前文档标题
  const title = doc.properties.title
  // 当前文档其他属性
  // 具体可查看elog.cache.json文件的内容
  // const properties = doc.properties
  // console.log(doc.properties.title, properties)
  // 根据自己的计算，返回该文档中图片的存放位置
  // 图片存放根目录为：docs/images
  // 假设文档标题为【标题1】，文档存放路径为docs/feishu-wiki
  // 那么图片存放位置为:docs/images/标题1/
  // 文档图片前缀为./标题1

  // 假设文档标题为【标题2】，文档存放路径为docs/feishu-wiki/首页文件夹
  // 那么图片存放位置为:docs/images/标题2/
  // 文档图片前缀为../标题2

  // const dirPath = path.join(docPath, title)
  const dirPath = path.join(outputDir, title)
  const prefixKey = path.relative(docPath, dirPath)
  return {
    dirPath,
    prefixKey
  }
};

module.exports = {
  getImagePath,
};
