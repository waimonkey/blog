//接口详情
var InterfaceDetails = [{
  name: "helloWorld",
  label: "Hello World",
  isHaveChildren: "true",
  children: [{
    name: "viewMap",
    label: "hello world",
    isHaveChildren: "false",
    exampleUrl: "./Rmap/Examples/helloWorld.html",
    interfaceUrl: "./Rmap/Interface/helloWorld.htm"
  }]
}, {
  name: "view",
  label: "地图浏览",
  isHaveChildren: "true",
  children: [{
    name: "viewMap",
    label: "地图浏览",
    isHaveChildren: "false",
    exampleUrl: "./Rmap/Examples/View/viewMap.html",
    interfaceUrl: "./Rmap/Interface/View/viewMap.htm"
  }]
}, {
  name: "graphic",
  label: "添加图形",
  isHaveChildren: "true",
  children: [{
    name: "addPoint",
    label: "添加图片点",
    isHaveChildren: "false",
    exampleUrl: "./Rmap/Examples/Graphic/addPoint.html",
    interfaceUrl: "./Rmap/Interface/Graphic/addPoint.htm"
  }, {
    name: "addPointList",
    label: "添加一组图片点",
    isHaveChildren: "false",
    exampleUrl: "./Rmap/Examples/Graphic/addPointList.html",
    interfaceUrl: "./Rmap/Interface/Graphic/addPointList.htm"
  }, {
    name: "addTextPoint",
    label: "添加文字点",
    isHaveChildren: "false",
    exampleUrl: "./Rmap/Examples/Graphic/addTextPoint.html",
    interfaceUrl: "./Rmap/Interface/Graphic/addTextPoint.htm"
  }, {
    name: "addLine",
    label: "添加折线",
    isHaveChildren: "false",
    exampleUrl: "./Rmap/Examples/Graphic/addLine.html",
    interfaceUrl: "./Rmap/Interface/Graphic/addLine.htm"
  }, {
    name: "addPolygon",
    label: "添加面",
    isHaveChildren: "false",
    exampleUrl: "./Rmap/Examples/Graphic/addPolygon.html",
    interfaceUrl: "./Rmap/Interface/Graphic/addPolygon.htm"
  }]
}, {
  name: "infowindow",
  label: "气泡窗口",
  isHaveChildren: "true",
  children: [{
    name: "showPopWindow",
    label: "显示气泡窗口",
    isHaveChildren: "false",
    exampleUrl: "./Rmap/Examples/InfoWindow/showPopWindow.html",
    interfaceUrl: "./Rmap/Interface/InfoWindow/showPopWindow.htm"
  }]
}, {
  name: "draw",
  label: "手绘图形",
  isHaveChildren: "true",
  children: [{
    name: "drawRect",
    label: "绘制矩形",
    isHaveChildren: "false",
    exampleUrl: "./Rmap/Examples/Draw/drawRect.html",
    interfaceUrl: "./Rmap/Interface/Draw/drawRect.htm"
  }, {
    name: "drawCircle",
    label: "绘制圆",
    isHaveChildren: "false",
    exampleUrl: "./Rmap/Examples/Draw/drawCircle.html",
    interfaceUrl: "./Rmap/Interface/Draw/drawCircle.htm"
  }, {
    name: "drawLine",
    label: "绘制线",
    isHaveChildren: "false",
    exampleUrl: "./Rmap/Examples/Draw/drawLine.html",
    interfaceUrl: "./Rmap/Interface/Draw/drawLine.htm"
  }, {
    name: "drawPolygon",
    label: "绘制折线",
    isHaveChildren: "false",
    exampleUrl: "./Rmap/Examples/Draw/drawPolygon.html",
    interfaceUrl: "./Rmap/Interface/Draw/drawPolygon.htm"
  }]
}, {
  name: "layer",
  label: "图层",
  isHaveChildren: "true",
  children: [{
    name: "switchMap",
    label: "切换底图",
    isHaveChildren: "false",
    exampleUrl: "./Rmap/Examples/Layer/switchMap.html",
    interfaceUrl: "./Rmap/Interface/Layer/switchMap.htm"
  }, {
    name: "addLayer",
    label: "添加可叠加图层",
    isHaveChildren: "false",
    exampleUrl: "./Rmap/Examples/Layer/addLayer.html",
    interfaceUrl: "./Rmap/Interface/Layer/addLayer.htm"
  }]
}, {
  name: "query",
  label: "查询",
  isHaveChildren: "true",
  children: [{
    name: "queryLayer",
    label: "查询图层",
    isHaveChildren: "false",
    exampleUrl: "./Rmap/Examples/Query/queryLayer.html",
    interfaceUrl: "./Rmap/Interface/Query/queryLayer.htm"
  }, {
    name: "queryLayerByRect",
    label: "拉框查询",
    isHaveChildren: "false",
    exampleUrl: "./Rmap/Examples/Query/queryLayerByRect.html",
    interfaceUrl: "./Rmap/Interface/Query/queryLayerByRect.htm"
  }, {
    name: "queryLayerByPointBuffer",
    label: "点缓冲查询",
    isHaveChildren: "false",
    exampleUrl: "./Rmap/Examples/Query/queryLayerByPointBuffer.html",
    interfaceUrl: "./Rmap/Interface/Query/queryLayerByPointBuffer.htm"
  }]
}, {
  name: "control",
  label: "控件",
  isHaveChildren: "true",
  children: [{
    name: "trackPlay",
    label: "切换底图",
    isHaveChildren: "false",
    exampleUrl: "./Rmap/Examples/Control/trackPlay.html",
    interfaceUrl: "./Rmap/Interface/Control/trackPlay.htm"
  }]
}, {
  name: "measure",
  label: "测量",
  isHaveChildren: "true",
  children: [{
    name: "measure",
    label: "测量",
    isHaveChildren: "false",
    exampleUrl: "./Rmap/Examples/Measure/measure.html",
    interfaceUrl: "./Rmap/Interface/Measure/measure.htm"
  }]
}, {
  name: "tools",
  label: "工具",
  isHaveChildren: "true",
  children: [{
    name: "convertCoord",
    label: "坐标转换",
    isHaveChildren: "false",
    exampleUrl: "./Rmap/Examples/Tools/convertCoord.html",
    interfaceUrl: "./Rmap/Interface/Tools/convertCoord.htm"
  }, {
    name: "convertEncryptCoord",
    label: "加密坐标转换",
    isHaveChildren: "false",
    exampleUrl: "./Rmap/Examples/Tools/convertEncryptCoord.html",
    interfaceUrl: "./Rmap/Interface/Tools/convertEncryptCoord.htm"
  }, {
    name: "getMapInformation",
    label: "获取地图信息",
    isHaveChildren: "false",
    exampleUrl: "./Rmap/Examples/Tools/getMapInformation.html",
    interfaceUrl: "./Rmap/Interface/Tools/getMapInformation.htm"
  }, {
    name: "showCoordinate",
    label: "显示坐标",
    isHaveChildren: "false",
    exampleUrl: "./Rmap/Examples/Tools/showCoordinate.html",
    interfaceUrl: "./Rmap/Interface/Tools/showCoordinate.htm"
  }, {
    name: "clearMap",
    label: "清空地图",
    isHaveChildren: "false",
    exampleUrl: "./Rmap/Examples/Tools/clearMap.html",
    interfaceUrl: "./Rmap/Interface/Tools/clearMap.htm"
  }]
}]