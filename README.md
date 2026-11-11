# DOT — Design Engineering Portfolio

Node.js를 사용하지 않는 정적 사이트입니다. HTML 페이지와 CSS, 브라우저 JavaScript로 구성되어 있고, 로컬 미리보기는 Python 표준 라이브러리만 있으면 실행할 수 있습니다.

## 로컬에서 보기

PowerShell에서 저장소 폴더로 이동한 뒤 실행합니다.

```powershell
python -m http.server 8000
```

브라우저에서 `http://localhost:8000`을 엽니다. 서버를 종료하려면 PowerShell에서 `Ctrl+C`를 누릅니다. `python` 명령을 찾지 못하면 Windows에서는 `py -m http.server 8000`도 시도할 수 있습니다.

## 사이트 구조

- `index.html`: 언어 선택 화면
- `ko/`, `en/`: 한국어와 영어 페이지
- `assets/site.css`: 디자인과 반응형 레이아웃
- `assets/site.js`: 프로젝트 데이터, 페이지 콘텐츠, 카테고리 필터

새 프로젝트를 추가할 때는 `assets/site.js` 상단의 `projects` 배열에 항목을 추가하고, `ko/projects/`와 `en/projects/`에 상세 페이지 껍데기 HTML 파일을 하나씩 추가합니다. 이미지 시안은 현재 SVG로 그려지며 실제 프로젝트 렌더링, 도면, 사진으로 교체할 수 있습니다.

## GitHub Pages

사이트는 정적 파일이므로 Node 빌드 단계 없이 호스팅할 수 있습니다. GitHub 저장소의 **Settings → Pages**에서 배포 소스를 설정하고 이 저장소의 웹 파일을 게시합니다. 저장소가 프로젝트 페이지라면 `/assets/...` 같은 루트 절대 경로 대신 현재 문서 기준 상대 경로를 사용해야 하는데, 이 사이트는 상대 경로를 사용합니다.

## 실제 공개 전에 바꿀 항목

- `assets/site.js`의 예시 프로젝트 설명과 데이터를 실제 작업에 맞게 수정
- `hello@dot.design` 연락처를 실제 이메일로 교체
- 상세 페이지 메타 설명과 실제 프로젝트 이미지 추가
- GitHub Pages 주소로 제목, 공유 이미지, 설명을 최종 점검
