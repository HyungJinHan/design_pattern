### [↩︎ Main으로 돌아가기](../../README.md)

## Abstract Factory VS Factory Method

- 둘 다 패고리 객체를 통해 구체적인 타입을 감추고 객체 생성에 관여하는 패턴 임에는 동일함

  - 또한, 공장 클래스가 각각 나뉘어 느슨한 결합 구조를 구성하는 모습 역시 유사함

- 주의할 것은 추상 팩토리 패턴이 팩토리 메서드 패턴의 상위 호환이 아니라는 점

  - 두 패턴의 차이는 명확하기 때문에 상황에 따라 적절한 선택을 해야 함

- 예를 들어 팩토리 메서드 패턴은 <b><u>객체 생성 이후 해야 할 일</u></b>의 공통점을 정의하는데 초점을 맞추는 반면,
  추상 팩토리 패턴은 생성해야 할 <b><u>객체 집합 군</u></b>의 공통점에 초점을 맞춤

- 이 둘의 유사점과 차이점을 조합하여 복합 패턴을 구성하는 것도 가능

  <table>
    <tr>
      <td></td>
      <td style='text-align: center;'>팩토리 메서드 패턴</td>
      <td style='text-align: center;'>추상 팩토리 패턴</td>
    </tr>

    <tr>
      <td style='text-align: center;'>공통점</td>
      <td colspan="2" style='text-align: center;'>
      객체 생성 과정을 추상화한 인터페이스를 제공
      <br/>
      객체 생성을 캡슐화함으로써 구체적인 타입을 감추고 느슨한 결합 구조를 표방
      </td>
    </tr>
    
    <tr>
      <td rowspan="4" style='text-align: center;'>차이점</td>
      <td>구체적인 객체 생성 과정을 하위 또는 구체적인 클래스로 옮기는 것이 목적</td>
      <td>관련 있는 여러 객체를 구체적인 클래스에 의존하지 않고 만들 수 있게 해주는 것이 목적</td>
    </tr>

    <tr>
      <td>한 Factory 당, 한 종류의 객체 생성 지원</td>
      <td>한 Factory에서 서로 연관된 여러 종류의 객체 생성을 지원 (제품군 생성 지원)</td>
    </tr>
    
    <tr>
      <td>메소드 레벨에서 포커스를 맞춤으로써, 클라이언트의 ConcreteProduct 인스턴스의 생성 및 구성에 대한 의존을 감소</td>
      <td>클래스(Factory) 레벨에서 포커스를 맞춤으로써, 클라이언트의 ConcreteProduct 인스턴스 군의 생성 및 구성에 대한 의존을 감소</td>
    </tr>
  </table>

### 두 패턴 비교 예제

- [버튼 만들기 예제](./ButtonExample/)
