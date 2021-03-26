/**
 * Test 正则校验及验证器类
 * @author liyang 
 * 2021/03/24
 */

import type from './../../enhance/type'

class Test {
  public static readonly init = () => {
    const instance = new Test()
    return instance
  }
  private readonly rules = {
    phone: /^1[3456789]\d{9}$/,
    email: /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/
  }
  public isPhone(str: string): Boolean {
    if (!type.isString(str)) {
      return false
    }
    return this.rules.phone.test(str)
  }
  public isEmail(str: string): Boolean {
    if (!type.isString(str)) {
      return false
    }
    return this.rules.email.test(str)
  }
  public isJSON(str: string): Boolean {
    if (!type.isString(str)) {
      return false;
    }

    try {
      JSON.parse(str);
      return true;
    } catch (e) {
      return false;
    }
  }
}



export default Test.init()