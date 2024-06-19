import { Button, CheckBox, TextEdit } from "./Component";
import {
  ButtonFactory,
  CheckBoxFactory,
  ComponentFactoryMethod,
  TextEditFactory,
} from "./FactoryMethod";

type Type = "Mac" | "Window";

class FactoryMethodClient {
  public static main(type: Type, _args?: string[]): void {
    let factory: ComponentFactoryMethod;
    let btn: Button;
    let chkBox: CheckBox;
    let textEdit: TextEdit;

    // 버튼 생성
    factory = new ButtonFactory();
    btn = factory.createOperation(type);
    btn.render();

    // 체크 박스 생성
    factory = new CheckBoxFactory();
    chkBox = factory.createOperation(type);
    chkBox.render();

    // 체크 박스 생성
    factory = new TextEditFactory();
    textEdit = factory.createOperation(type);
    textEdit.render();
  }
}

FactoryMethodClient.main("Mac");
// 맥 버튼 생성 완료
// 맥 체크 박스 생성 완료
// 맥 텍스트 박스 생성 완료

console.log("");

FactoryMethodClient.main("Window");
// 윈도우 버튼 생성 완료
// 윈도우 체크 박스 생성 완료
// 윈도우 텍스트 박스 생성 완료
