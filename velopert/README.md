# 타입스크립트와 리액트 함께 사용하기

1. `yarn init -y`
2. `yarn add typescript ts-node`

```js
"dependencies": {
    // 타입스크립트를 콘솔에서 바로 실행하게 해주는 모듈
    // 실행 명령어: yarn run ts-node ./src/practice.ts
    "ts-node": "^9.1.1",
    // 타입스크립트 사용 시 필수로 설치해야 하는 모듈
    "typescript": "^4.2.4"
}
```

3. `yarn run tsc --init`
