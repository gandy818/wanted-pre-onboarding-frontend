# 원티드 프리온보딩 프론트엔드 선발 과제

- 프로젝트의 실행 방법

1. 프로젝트의 setup을 위해 `npm install`을 입력합니다.
2. 설치 후 `npm start`를 입력하면 로컬서버 3000번에서 실행이 됩니다.

<br />

- 배포주소

https://gandy818.github.io/wanted-pre-onboarding-frontend/

<br />
<br />

## 1. 로그인 / 회원가입

<br />

이메일은 반드시 "@"를 포함해야 하고 비밀번호는 8자 이상이 되어야 버튼이 활성화가 됩니다.

<br />

![signup](https://user-images.githubusercontent.com/67881881/207073845-4542732f-9ba5-4ead-ab5f-663cac274568.gif)

<br />

이미 가입이 되어있는 이메일로 회원가입을 시도할 시, 동일한 이메일이 존재한다는 에러창이 나옵니다.

회원가입이 완료되면 해당 이메일과 비밀번호로 로그인을 할 수 있습니다.

<br />
<br />

![signin](https://user-images.githubusercontent.com/67881881/207103299-600794b1-4604-48fd-8bf3-19ab140e612e.gif)

<br />

가입되어 있지 않은 이메일로 로그인을 하거나 이메일과 비밀번호가 일치하지 않을 경우 각각의 에러창이 나옵니다.

로그인에 성공하면 JWT 토큰을 받고, 이 토큰은 로컬스토리지에 저장됩니다.

화면은 `/todo` 경로로 이동합니다.

<br />
<br />

![redirect](https://user-images.githubusercontent.com/67881881/207103367-ba554aeb-eb5b-4df1-a34b-ddb9d194d428.gif)

<br />

로컬스토리지에 토큰이 있는 상태로 `/` 페이지에 접근하면 `/todo` 경로로 이동합니다.

반대로 토큰이 없는 경우 `/todo` 페이지에 접근하면 `/` 경로로 이동합니다.

<br />
<br />

## 2. 투두 리스트

<br />

`/todo` 경로에 접근하면 투두리스트의 목록을 볼 수 있습니다.

상단에는 새로운 할일을 추가 할 수 있는 입력창과 추가하기 버튼이 있습니다.

내용 입력 후 추가 버튼을 누르면 새로운 투두 리스트로 추가됩니다.

<br />

![addTodo](https://user-images.githubusercontent.com/67881881/207103396-d0802211-4a38-457a-996f-b52a45781a38.gif)

<br />

완료한 투두리스트라면, 왼쪽 체크박스에 완료 표시가 되며 배경색이 회색으로 바뀌고 완료선이 그어집니다.

<br />

![updateTodo](https://user-images.githubusercontent.com/67881881/207103445-6f4ea53b-f034-41cc-bba1-dce4ab3b6b2e.gif)

<br />

투두 리스트의 개별 아이템을 자유롭게 수정 할 수 있습니다.

수정 버튼을 클릭시 수정모드로 전환이 되며 투두리스트의 내용과 완료여부를 수정할 수 있습니다.

수정을 완료한 경우 완료 버튼을 누르면 수정된 투두리스트의 내용으로 업데이트 되어 보여집니다.

취소 버튼을 누를 시 수정중이던 내용은 저장이 되지 않고 기존의 투두리스트 내용으로 돌아갑니다.

<br />

![deleteTodo](https://user-images.githubusercontent.com/67881881/207103501-613db354-10ed-473f-b0ed-664c932144e9.gif)

<br />

삭제버튼을 통해 투두리스트의 개별 아이템을 삭제할 수 있습니다.
