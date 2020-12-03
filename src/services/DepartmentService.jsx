import * as Department from '../data/Department';
import * as StringUtil from '../utils/StringUtil';
import * as CollectionUtil from '../utils/CollectionUtil';


/**
 * 保存
 *
 * @param department    
 * @param options 请求配置
 */
export function save(department, options) {
  if (CollectionUtil.isEmpty(department)) {
    return;
  }
  return Department.save(department, options);
}

export function findAll(options) {
  return Department.findAll(options);
}


export function findByName(name, options) {
  if (StringUtil.isBlank(name)) {
    return;
  }
  return Department.findByName(name, options);
}
/**
 * 删除
 *
 * @param id  编号
 * @param options 请求配置
 * @returns {*}
 */
export function deleteById(id, options) {
  if (StringUtil.isBlank(id)) {
    return;
  }
  return Department.deleteById(id, options);
}
