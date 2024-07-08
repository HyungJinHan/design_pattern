### [↩︎ Main으로 돌아가기](../../README.md)

# Sorting Algorithm

> [정렬 알고리즘 위키](https://ko.wikipedia.org/wiki/%EC%A0%95%EB%A0%AC_%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98)

## 정렬 방식에 따른 분리

> 컴퓨터 과학 분야에서, 주어진 알고리즘의 <b><u>최선</u></b>, <b><u>최악</u></b> 그리고 <b><u>평균의 경우</u></b>는 각 <b><u>최소</u></b>, <b><u>최대</u></b>, <b><u>평균</u></b> 자원의 사용량을 의미함

### 교환 정렬 ⭐️

- [버블 정렬 `📄 bubble_sort.ts`](./ExchangeSort/bubble_sort.ts)

  | 복잡도          | 수학식                       |
  | --------------- | ---------------------------- |
  | 최악 시간복잡도 | $O(n^2)$ 비교, $O(n^2)$ 교환 |
  | 최선 시간복잡도 | $O(n)$ 비교, $O(1)$ 교환     |
  | 평균 시간복잡도 | $O(n^2)$ 비교, $O(n^2)$ 교환 |
  | 공간복잡도      | $O(1)$ 보조                  |

  <details>
  <summary>정렬 이미지</summary>

    <img src="../../image/sort/img/bubble_sort.svg" width="30%" />
    <img src="../../image/sort/gif/bubble_sort.gif" width="30%" />

  </details>

- [칵테일(양방향 거품) 정렬 `📄 shaker_sort.ts`](./ExchangeSort/shaker_sort.ts)

  | 복잡도          | 수학식   |
  | --------------- | -------- |
  | 최악 시간복잡도 | $O(n^2)$ |
  | 최선 시간복잡도 | $O(n)$   |
  | 평균 시간복잡도 | $O(n^2)$ |
  | 공간복잡도      | $O(1)$   |

  <details>
  <summary>정렬 이미지</summary>

    <img src="../../image/sort/gif/shaker_sort.gif" width="30%" />

  </details>

- [홀짝 정렬 `📄 odd-even_sort.ts`](./ExchangeSort/odd-even_sort.ts)

  | 복잡도          | 수학식   |
  | --------------- | -------- |
  | 최악 시간복잡도 | $O(n^2)$ |
  | 최선 시간복잡도 | $O(n)$   |
  | 공간복잡도      | $O(1)$   |

  <details>
  <summary>정렬 이미지</summary>

    <img src="../../image/sort/gif/odd_even_sort.gif" width="30%" />

  </details>

- [빗질 정렬 `📄 comb_sort.ts`](./ExchangeSort/comb_sort.ts)

  | 복잡도          | 수학식                                     |
  | --------------- | ------------------------------------------ |
  | 최악 시간복잡도 | $O(n^2)$                                   |
  | 최선 시간복잡도 | $\Theta(n \ log(n))$                       |
  | 평균 시간복잡도 | $\Omega(n^2 / 2^p)$ : 여기서 $p$는 증가 수 |
  | 공간복잡도      | $O(1)$                                     |

  <details>
  <summary>정렬 이미지</summary>

    <img src="../../image/sort/gif/comb_sort.gif" width="30%" />

  </details>

- [난쟁이 정렬 `📄 gnome_sort.ts`](./ExchangeSort/gnome_sort.ts)

  | 복잡도          | 수학식      |
  | --------------- | ----------- |
  | 최악 시간복잡도 | $O(n^2)$    |
  | 최선 시간복잡도 | $O(n)$      |
  | 평균 시간복잡도 | $O(n^2)$    |
  | 공간복잡도      | $O(1)$ 보조 |

  <details>
  <summary>정렬 이미지</summary>

    <img src="../../image/sort/gif/gnome_sort.gif" width="30%" />

  </details>

- [퀵 정렬](./) → 추가 예정
- [느린 정렬](./) → 추가 예정
- [꼭두각시 정렬](./) → 추가 예정
- [보고 정렬](./) → 추가 예정

### 각 알고리즘의 최선, 최악, 그리고 평균의 경우

| 복잡도                                       | 자료 구조 | 최악 시간복잡도 | 최선 시간복잡도      | 평균 시간복잡도     | 공간복잡도 |
| -------------------------------------------- | --------- | --------------- | -------------------- | ------------------- | ---------- |
| [버블 정렬](./ExchangeSort/bubble_sort.ts)   | 배열      | $O(n^2)$        | $O(n^2)$             | $O(n^2)$            | $O(1)$     |
| [칵테일 정렬](./ExchangeSort/shaker_sort.ts) | 배열      | $O(n^2)$        | $O(n)$               | $O(n^2)$            | $O(1)$     |
| [홀짝 정렬](./ExchangeSort/odd-even_sort.ts) | 배열      | $O(n^2)$        | $O(n)$               | $O(1)$              | -          |
| [빗질 정렬](./ExchangeSort/comb_sort.ts)     | 배열      | $O(n^2)$        | $\Theta(n \ log(n))$ | $\Omega(n^2 / 2^p)$ | $O(1)$     |
| [난쟁이 정렬](./ExchangeSort/gnome_sort.ts)  | 배열      | $O(n^2)$        | $O(n)$               | $O(n^2)$            | $O(1)$보조 |
| [퀵 정렬](./)                                | 배열      | $O(n^2)$        | $O(n \ log(n))$      | $O(n \ log(n))$     | $O(1)$     |
| [느린 정렬](./)                              | 배열      |                 |                      |                     |            |
| [꼭두각시 정렬](./)                          | 배열      |                 |                      |                     |            |
| [보고 정렬](./)                              | 배열      |                 |                      |                     |            |
