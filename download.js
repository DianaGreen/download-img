function downimg(url){
var xhr = new XMLHttpRequest();    
xhr.open("get", url, true);
xhr.responseType = "blob";
xhr.onload = function() {
  if (this.status == 200) {
     var blob = this.response;
     var downloadElement = document.createElement('a');
     var href = window.URL.createObjectURL(blob); //创建下载的链接
     downloadElement.href = href;
     downloadElement.download = name; //下载后文件名
     document.body.appendChild(downloadElement);
     downloadElement.click(); //点击下载
     document.body.removeChild(downloadElement); //下载完成移除元素
     window.URL.revokeObjectURL(href); //释放掉blob对象
  }
}
xhr.send();
}

downimg("https://dss2.bdstatic.com/6Ot1bjeh1BF3odCf/it/u=2747835453,3022923261&fm=74&app=80&f=PNG&size=f121,121?sec=1880279984&t=c81c9e6efbb1cf71d75581869e063823")
