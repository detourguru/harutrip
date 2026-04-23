# Harutrip

> 발걸음을 색으로 기록하고, 안목을 점수화한다.

하루트립은 러닝, 등산, 여행의 순간을 지도 위의 시각적 자산으로 남기는 로컬 퍼스트 여정 아카이빙 웹앱입니다. 단순히 하루 단위로 일기를 쓰는 대신, 하나의 여정을 여러 세션과 지점으로 나누어 기록합니다.

이 프로젝트는 개인 사용을 위한 도구이자, 제품 사고와 프론트엔드 구현 역량을 보여주기 위한 포트폴리오 프로젝트입니다.

## Product Concept

하루트립은 사용자가 어디를 갔는지뿐 아니라 왜 그 장소를 선택했는지, 그 시간이 얼마나 만족스러웠는지, 어떤 감각으로 기억되는지를 함께 기록합니다.

핵심 경험은 세 가지입니다.

- 지도 위에서 이동과 체류를 함께 읽는다.
- 사진, 메모, 점수로 장소의 맥락을 남긴다.
- 좋은 여정은 색과 빛으로 다시 보고 싶게 만든다.

## Domain Model

하루트립은 `Journey > Session > Spot`의 3단계 구조를 사용합니다.

### Journey

하나의 큰 테마를 가진 기록 단위입니다.

예시:

- 1박 2일 춘천 여행
- 북한산 백운대 산행
- 한강 10km 러닝

### Session

여정 안에서 연속적으로 경험한 움직임 또는 체류 단위입니다.

세션은 두 타입으로 나뉩니다.

- `Move`: 러닝, 산행, 산책처럼 경로가 중요한 활동
- `Stay`: 숙소, 카페, 전망대, 휴식 지점처럼 머문 시간이 중요한 활동

`Stay` 세션은 지도 위에서 원형 하이라이트로 표현해, 이동이 없는 시간도 여정의 일부로 남깁니다.

### Spot

세션 중 남기는 구체적인 지점입니다.

Spot에는 사진, 메모, 위치, 시간, 발굴 점수, 방문 계기 등을 연결할 수 있습니다.

## Key Features

### Local First Archive

로그인과 서버 저장 없이 기기의 로컬 DB를 중심으로 동작합니다. MVP에서는 기록의 소유권과 빠른 사용성을 우선합니다.

### EXIF Based Import

사진의 EXIF 좌표와 촬영 시간을 활용해 지도 위에 지점을 자동 배치하는 흐름을 목표로 합니다.

### Discovery Score

장소를 얼마나 잘 발견했는지, 얼마나 만족스러웠는지를 점수화합니다. 사용자의 취향과 안목을 기록 가능한 데이터로 바꾸는 장치입니다.

### Trigger

장소를 방문하게 된 계기를 기록합니다.

예시:

- 우연히 발견
- 친구 추천
- 블로그 검색
- 지도 저장 목록
- SNS
- 예전부터 가고 싶던 곳

### Gold Polyline

만족도가 높은 여정이나 세션은 지도 위 경로에 금빛 효과를 적용합니다. 기록 자체가 작은 보상이 되도록 만드는 시각적 피드백입니다.

## Tech Stack

- Frontend: React, Vite, TypeScript
- Styling: Tailwind CSS
- Mobile Runtime: Capacitor
- Local DB: `@capacitor-community/sqlite`
- State: Zustand
- Map: `react-kakao-maps-sdk`
- Icons: Lucide React

## Design Direction

하루트립의 시각 언어는 아메카지와 미니멀리스트 감성을 섞습니다.

- Olive Khaki: 이동 경로, 기본 액션
- Warm Cream: 앱 배경, 기록의 종이 같은 질감
- Warm Gold: 높은 만족도와 보상
- Muted Brown: 체류와 장소감

지도와 기록이 주인공이므로 UI는 조용하고 기능적으로 유지합니다.

## MVP Scope

첫 MVP는 서버, 로그인, 공유 기능을 제외하고 `기록하기`와 `다시 읽기`에 집중합니다.

포함할 기능:

- Journey, Session, Spot 타입 모델링
- 지도 위 Move 경로 표시
- 지도 위 Stay 원형 하이라이트 표시
- Spot 마커와 기본 상세 정보 표시
- Discovery Score 입력
- Trigger 입력
- 로컬 DB 저장과 조회
- 샘플 데이터 기반 기록 보기 화면

제외할 기능:

- 서버 동기화
- 사용자 계정
- 소셜 공유
- 추천 알고리즘
- 복잡한 통계 대시보드

## Development Roadmap

### 1. Domain First

- Journey, Session, Spot 타입 정리
- Move와 Stay 세션 분리
- Discovery Score와 Trigger 타입 정의
- 샘플 데이터 구조 확장

### 2. Read Mode

- 샘플 여정을 지도에 렌더링
- Move 세션은 폴리라인으로 표시
- Stay 세션은 원형 하이라이트로 표시
- Spot 선택 시 하단 패널에 정보 표시

### 3. Record Mode

- 새 Journey 생성
- Session 추가
- Spot 추가
- 점수와 방문 계기 입력

### 4. Local Persistence

- Capacitor SQLite 연결
- Journey, Session, Spot 테이블 설계
- 앱 시작 시 로컬 데이터 로드
- 기록 생성 후 로컬 저장

### 5. Portfolio Polish

- README 업데이트
- 시행착오 기반 블로그 초안 작성
- 주요 의사결정 문서화
- 모바일 화면 기준 사용성 정리

## Current Status

현재 앱은 초기 지도 화면과 목업 세션 데이터를 기반으로 한 폴리라인, 마커 렌더링 단계입니다.

다음 작업은 도메인 타입을 실제 기획에 맞게 확장하고, `Move`와 `Stay`를 지도에서 다르게 표현하는 것입니다.

## Blog Notes

블로그 포스팅 후보:

- 하루 단위 일기에서 여정 단위 아카이브로 바꾼 이유
- Move와 Stay를 분리한 지도 기록 모델링
- 로컬 퍼스트 앱에서 SQLite를 선택한 이유
- 사진 EXIF로 여행 기록을 자동화하는 방법
- 포트폴리오 프로젝트를 제품처럼 설계하기
