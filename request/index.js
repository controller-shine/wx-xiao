export const request=(params)=>{
  //定义公共的url
  const baseUrl="http://49.234.18.144/jx/public";
  return new  Promise((resolve,reject)=>{
  wx.request({
      ...params,
      url:baseUrl+params.url,
      success:(result)=>{
        resolve(result);
      },
      fail:(err)=>{
        reject(err);
      }
    });
  })
}