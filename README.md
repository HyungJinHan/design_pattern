# Design Pattern

> [한글 설명 참고사이트](https://m.hanbit.co.kr/channel/category/category_view.html?cms_code=CMS8616098823)
>
> [JS 버전 디자인 패턴 GitHub](https://github.com/fbeline/design-patterns-JS)
>
> [Refactoring GURU](https://refactoring.guru/ko/design-patterns)
>
> [Inpa Dev Blog (디자인 패턴)](https://inpa.tistory.com/category/%EB%94%94%EC%9E%90%EC%9D%B8%20%ED%8C%A8%ED%84%B4)

## 디자인 패턴 용도에 따른 구분

<table>
  <tr>
    <th scope="col" style='text-align: center;'>구분</th>
    <th scope="col" style='text-align: center;'>생성 패턴</th>
    <th scope="col" style='text-align: center;'>구조 패턴</th>
    <th scope="col" style='text-align: center;'>행위 패턴</th>
  </tr>

  <tr>
    <th scope="row" style='text-align: center;'>클래스 (Class)</th>
    <td>
      <li style="list-style: none;">Factory</li>
    </td>
    <td>
      <li style="list-style: none;">Adapter (Class)</li>
    </td>
    <td>
      <li style="list-style: none;">Interpreter</li>
      <li style="list-style: none;">Template Method</li>
    </td>
  </tr>
  
  <tr>
    <th scope="row" style='text-align: center;'>객체 (Object)</th>
    <td>
      <li style="list-style: none;">Prototype</li>
      <li style="list-style: none;">Builder</li>
      <li style="list-style: none;">Abstract Factory</li>
      <li style="list-style: none;">Singleton</li>
    </td>
    <td>
      <li style="list-style: none;">Adapter (Object)</li>
      <li style="list-style: none;">Bridge</li>
      <li style="list-style: none;">Composite</li>
      <li style="list-style: none;">Decorator</li>
      <li style="list-style: none;">Facade</li>
      <li style="list-style: none;">Flyweight</li>
      <li style="list-style: none;">Proxy</li>
    </td>
    <td>
      <li style="list-style: none;">Chain of Responsibility</li>
      <li style="list-style: none;">Command</li>
      <li style="list-style: none;">Mediator</li>
      <li style="list-style: none;">Memento</li>
      <li style="list-style: none;">Iterator</li>
      <li style="list-style: none;">Observer</li>
      <li style="list-style: none;">State</li>
      <li style="list-style: none;">Strategy</li>
      <li style="list-style: none;">Visitor</li>
    </td>
  </tr>
</table>

### 1. 생성 패턴

> 객체 인스턴스를 생성하는 패턴으로, 클라이언트와 그 클라이언트가 생성해야 하는 객체 인스턴스 사이의 연결을 끊어주는 패턴

- [싱글턴](./CreationalPattern/Singleton/README.md)
- [추상 팩토리](./CreationalPattern/AbstractFactory/README.md)
- [팩토리 메소드](./CreationalPattern/FactoryMethod/README.md)
- [빌더](./CreationalPattern/Builder/README.md)
- [프로토타입](./CreationalPattern/Prototype/README.md)

> [추상 팩토리 VS 팩토리 메소드](./CreationalPattern/AbstractVSFactoryMethod/README.md)

### 2. 행동 패턴

> 클래스와 객체들이 상호작용하는 방법과 역할을 분담하는 방법을 다루는 패턴

- [템플릿 메소드](./BehavioralPattern/TemplateMethod/README.md)
- [반복자 (Iterator)](./BehavioralPattern/Iterator/README.md)
- [옵저버](./BehavioralPattern/Observer/README.md)
- [상태 (State)](./BehavioralPattern/State/README.md)
- [전략 (Strategy)](./BehavioralPattern/Strategy/README.md)
- [인터프리터](./BehavioralPattern/Interpreter/README.md)
- [책임 연쇄 (Chain of Responsibility)](./BehavioralPattern/ChainOfResponsibility/README.md)
- [방문자 (Visitor)](./BehavioralPattern/Visitor/README.md)
- [중재자 (Mediator)](./BehavioralPattern/Mediator/README.md)
- [메멘토](./BehavioralPattern/Memento/README.md) → 예제 사이트 有
- [커맨드](./BehavioralPattern/Command/README.md)

### 3. 구조 패턴

> 클래스와 객체를 더 큰 구조로 만들 수 있게 구성을 사용하는 패턴

- [데코레이터](./StructuralPattern/Decorator/README.md)
- [복합체 (Composite)](./StructuralPattern/Composite/README.md)
- [프록시 ⭐️](./StructuralPattern/Proxy/README.md)
- [퍼사드](./StructuralPattern/Facade/README.md)
- [어댑터](./StructuralPattern/Adapter/README.md)
- [브릿지](./StructuralPattern/Bridge/README.md)
- [경량 (Flyweight)](./StructuralPattern/Flyweight/README.md)

### 4. 같이보기

> 디자인 패턴 공부하다가 알게 된 것들

- [객체 지향 설계의 5원칙 `S.O.L.I.D`](./NonePattern/SOLID/README.md) -> ⚠️ 추가 중
- [정렬 알고리즘](./NonePattern/SortingAlgorithm/) → 추가 예정
