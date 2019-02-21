
## Manual installation

npm install react-native-cz-reddot --save

	

## Usage
###  1.引入组件
```
import RedDot from "react-native-cz-reddot";
```

建议包一层，红点悬于右上角，也可以自己设置mainStyle
```
<View>
   <Text style={[{fontSize: 14}]}>红点测试</Text>
   <RedDot type={1} text={114}/>
</View>
```

###  2.属性:
```
type: 1.显示红点数 2.只显示一个红点，不显示数量
```
```
mainStyle: 总视图样式
```
```
width: 红点宽度
```
```
text: 红点数
```
###  3.属性方法:
```
evaluateView: 赋值当前视图对象
```
###  4.供外部调用的方法:
```
modifyCount(count): 修改红点数
```
```
getCount: 获取当前真实红点数
```
