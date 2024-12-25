# zashboard

### Online zashboard

1. For localhost、127.0.0.1: https://board.zash.run.place
2. For others like router in LAN: http://board.zash.run.place

### Download zashboard

1. dist.zip (about 8MB): https://github.com/Zephyruso/zashboard/releases/latest/download/dist.zip
2. dist-cdn-fonts.zip (about 2MB): https://github.com/Zephyruso/zashboard/releases/latest/download/dist-cdn-fonts.zip

## Tips

1. The connection page has two layout styles: cards and customizable tables. It is recommended to use tables on PC and cards on mobile devices.
2. There are many customizable options in the panel settings, be sure to check them out.
3. The release contains two types of packages, The dist-cdn-fonts.zip package is more friendly to devices with limited storage space, while the dist.zip package provides a better font loading experience.
4. Using Docker

```
docker run -d -p 80:80 ghcr.io/zephyruso/zashboard:latest
```

## 提示

1. 连接页面有两种布局样式：卡片和可自定义表格。建议在 PC 上使用表格，在移动设备上使用卡片。
2. 在面板设置中有很多可自定义的选项，请务必去看看
3. release中存在两种包，dist-cdn-fonts.zip对小储存空间设备更友好，dist.zip则能带来更好的字体加载体验
4. 使用Docker

```
docker run -d -p 80:80 ghcr.io/zephyruso/zashboard:latest
```
