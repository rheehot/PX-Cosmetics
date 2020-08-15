import { ProductDAO, Product } from 'src/models';
import { sortCoordClockwise } from 'src/utils';
import vertices from './vertices';

const productsDAO: ProductDAO[] = [
  {
    name: '하루홍삼 10ml x 30포',
    price: 24500,
    section: 0,
    area: [0, 1, 5, 4],
    realPrice: 16910,
  },
  {
    name: '한삼인 주머니 속 홍삼정스틱 10ml 30포',
    price: 26400,
    section: 0,
    area: [1, 2, 7, 5],
    realPrice: 77500,
  },
  {
    name: '6년근 로얄 고려 홍삼 스틱 32포',
    price: 15900,
    section: 0,
    area: [2, 3, 8, 7],
    realPrice: 22000,
  },
  {
    name: '발효홍삼홍칸똘이 20ml x 30포',
    price: 37600,
    section: 0,
    area: [4, 6, 10, 9],
    realPrice: 158000,
  },
  {
    name: '홍삼이랑쑥쑥 30ml * 28포',
    price: 31680,
    section: 0,
    area: [6, 8, 11, 10],
    realPrice: 45140,
  },
  {
    name: '홍삼원세트 50ml 60포',
    price: 30310,
    section: 0,
    area: [9, 10, 13, 12],
    realPrice: 37410,
  },
  {
    name: '홍삼보운 40ml 30포',
    price: 40000,
    section: 0,
    area: [10, 11, 14, 13],
    realPrice: 46660,
  },


  {
    name: '공진녹 원기녹용 10g 30포',
    price: 79800,
    section: 1,
    area: [0, 1, 5, 4],
  },
  {
    name: '한삼인 로얄홍삼캡슐정VIP 900ml 30캡슐 4개입',
    price: 20300,
    section: 1,
    area: [1, 2, 6, 5],
    realPrice: 57000,
  },
  {
    name: '한삼인 홍삼정심 100g',
    price: 12480,
    section: 1,
    area: [2, 3, 7, 6],
    realPrice: 49890,
  },
  {
    name: '홍삼원골드 100ml 24포',
    price: 29970,
    section: 1,
    area: [4, 7, 10, 8],
    realPrice: 21590,
  },
  {
    name: '활기력 20ml 16병',
    price: 24940,
    section: 1,
    area: [8, 9, 12, 11],
    realPrice: 38830,
  },
  {
    name: '뿌리의힘 산감배양근 20ml 30바이알',
    price: 44400,
    section: 1,
    area: [9, 10, 13, 12],
    realPrice: 42000,
  },
  {
    name: '홍천톤 골드 50ml 60포',
    price: 30000,
    section: 1,
    area: [11, 12, 15, 14],
    realPrice: 100000,
  },
  {
    name: '홍삼녹용진액 80ml 60포',
    price: 39600,
    section: 1,
    area: [12, 13, 16, 15],
    realPrice: 198000,
  },

  {
    name: '홍삼진고 250g',
    price: 42250,
    section: 2,
    area: [0, 1, 6, 5],
    realPrice: 39195,
  },
  {
    name: '진쎈흑삼력 120g',
    price: 66000,
    section: 2,
    area: [1, 2, 7, 6],
    realPrice: 84000,
  },
  {
    name: '황작홍삼정 240g',
    price: 93460,
    section: 2,
    area: [2, 3, 8, 7],
    realPrice: 157430,
  },
  {
    name: '액티브 프로바이오틱스 2g x 60포',
    price: 14850,
    section: 2,
    area: [3, 4, 10, 8],
    realPrice: 24570,
  },
  {
    name: '진품홍삼 120g 3병',
    price: 49200,
    section: 2,
    area: [5, 7, 12, 11],
    realPrice: 99000,
  },
  {
    name: '홍삼본가 홍삼녹용골드 250g 2병',
    price: 49700,
    section: 2,
    area: [7, 9, 14, 12],
    link: 'http://martlee21c.cafe24.com/product/%ED%99%8D%EC%82%BC%EB%B3%B8%EA%B0%80-%ED%99%8D%EC%82%BC%EB%85%B9%EC%9A%A9%EC%A0%95-%EA%B3%A8%EB%93%9C/42/',
    realPrice: 240000,
  },
  {
    name: '레모나에스산 1.5g 200포',
    price: 18150,
    section: 2,
    area: [9, 10, 15, 14],
    realPrice: 29440,
  },
  {
    name: '황제침향단 3.75g 60환',
    price: 45900,
    section: 2,
    area: [11, 13, 17, 16],
    realPrice: 49900,
  },
  {
    name: '배도라지스틱 10g 60포',
    price: 24900,
    section: 2,
    area: [13, 15, 18, 17],
    realPrice: 37000,
  },
  {
    name: '한삼인 백세홍삼플러스 70ml 60포',
    price: 35900,
    section: 2,
    area: [16, 17, 20, 19],
  },
  {
    name: '애플트리 순도라지배즙과산삼배양근 100ml 30포',
    price: 22000,
    section: 2,
    area: [17, 18, 21, 20],
    realPrice: 43610,
  },

  {
    name: '네이처셋 혈행에 좋은 오메가Q 1000mg x 30캡슐',
    price: 4700,
    section: 3,
    area: [0, 1, 6, 5],
    realPrice: 9310,
  },
  {
    name: '항산화 건강 프로폴리스 솔루션 180g',
    price: 20700,
    section: 3,
    area: [1, 2, 8, 6],
    realPrice: 49000,
  },
  {
    name: '테아닌과 밀크씨슬 활력 솔루션 60g',
    price: 12900,
    section: 3,
    area: [2, 3, 10, 8],
    realPrice: 23290,
  },
  {
    name: '슈퍼 장 건강 유산균 솔루션 30g',
    price: 13800,
    section: 3,
    area: [3, 4, 11, 10],
    realPrice: 23410,
  },
  {
    name: '레모나산 2g 10포',
    price: 1550,
    section: 3,
    area: [5, 7, 14, 12],
    realPrice: 1930,
  },
  {
    name: '생유산균 가득 냠냠 요구르트 15g',
    price: 860,
    section: 3,
    area: [7, 9, 16, 14],
    realPrice: 1640,
  },
  {
    name: '함소아오비타 1.43g x 15정',
    price: 1300,
    section: 3,
    area: [9, 11, 17, 16],
    realPrice: 1400,
  },
  {
    name: '레모나에스산 1.5g 200포',
    price: 18150,
    section: 3,
    area: [12, 13, 19, 18],
    realPrice: 29440,
  },
  {
    name: '내몸애 발란스 멀티비타민 앤 미네랄파워업(30정 X 3개입)',
    price: 9900,
    section: 3,
    area: [13, 15, 21, 19],
    realPrice: 29800,
  },
  {
    name: '내몸애 발란스 관절액션 MSM (30정 X 3개입)',
    price: 9900,
    section: 3,
    area: [15, 17, 23, 21],
    realPrice: 30000,
  },
  {
    name: '정관장 알파프로젝트 뉴트리팩 600mg 120캡슐',
    price: 28490,
    section: 3,
    area: [18, 20, 25, 24],
    realPrice: 69300,
  },
  {
    name: '관절살리도 610mg 42정',
    price: 34900,
    section: 3,
    area: [20, 22, 27, 25],
    realPrice: 58310,
  },
  {
    name: '롯데헬스원 오메가세트 194g',
    price: 28300,
    section: 3,
    area: [22, 23, 28, 27],
    realPrice: 34880,
  },
  {
    name: '애플트리 베리 석류 진액골드 유기농 석류즙100 (70ml x 30포)',
    price: 19500,
    section: 3,
    area: [24, 26, 30, 29],
    realPrice: 62100,
  },
  {
    name: '내몸애 생발란스 석류진액 70ml 30포',
    price: 22800,
    section: 3,
    area: [26, 28, 31, 30],
    realPrice: 62250,
  },

  {
    name: '멀티비타민 앤 미네랄 1500mg 180정',
    price: 9030,
    section: 4,
    area: [0, 1, 8, 5],
    realPrice: 25890,
  },
  {
    name: '애플트리김약사네 눈건강 비타민A 900mg x 150정',
    price: 13610,
    section: 4,
    area: [1, 2, 12, 8],
    realPrice: 28000,
  },
  {
    name: '우리아이쑥쑥 칼슘 비타민 미네랄 800mg x 180정',
    price: 13540,
    section: 4,
    area: [2, 3, 13, 12],
    realPrice: 29910,
  },
  {
    name: '난유백세 500mg 90정',
    price: 25840,
    section: 4,
    area: [3, 4, 15, 13],
    realPrice: 63890,
  },
  {
    name: '엘렌실라 그린 에너지 썬스틱 16g',
    price: 4700,
    section: 4,
    area: [5, 6, 18, 16],
    realPrice: 7100,
  },
  {
    name: '다슈 솔루션 시카 쉴드 선스틱 19g',
    price: 5200,
    section: 4,
    area: [6, 7, 20, 18],
    realPrice: 14960,
  },
  {
    name: '크레마카발로 에이지 어웨이 프리미엄 선 세럼 50ml',
    price: 6240,
    section: 4,
    area: [7, 8, 21, 20],
    realPrice: 30360,
  },
  {
    name: '자민경 크레마카라콜 울트라 프로텍션 썬크림 50ml',
    price: 8900,
    section: 4,
    area: [8, 9, 22, 21],
    realPrice: 23900,
  },
  {
    name: '미사 초보양 비비크림 21호 은은한 빛 50ml',
    price: 13500,
    section: 4,
    area: [9, 10, 23, 22],
    realPrice: 10800,
  },
  {
    name: '아이오페 UV쉴드 선 프로텍터 엑스피 60ml',
    price: 8480,
    section: 4,
    area: [10, 11, 25, 23],
    realPrice: 12290,
  },
  {
    name: '엔젤스코튼 룸앤패브릭 스프레이 155ml',
    price: 8900,
    section: 4,
    area: [11, 12, 26, 25],
    realPrice: 23800,
  },
  {
    name: '롤온 데오드란트 뱀부 50ml',
    price: 2270,
    section: 4,
    area: [12, 13, 27, 26],
    realPrice: 4350,
  },
  {
    name: '니베아 데오드란트 스프레이 드라이 콤포트 200ml',
    price: 4460,
    section: 4,
    area: [13, 14, 28, 27],
    realPrice: 6060,
  },
  {
    name: '니베아맨 데오드란트 스프레이 쿨킥 200ml',
    price: 4460,
    section: 4,
    area: [14, 15, 29, 28],
    realPrice: 6090,
  },
  {
    name: '바세린 리프팅 리페어 로션 450ml',
    price: 5000,
    section: 4,
    area: [16, 17, 31, 30],
    realPrice: 3560,
  },
  {
    name: '샤워메이트 글램 그린 크리스탈 퍼퓸 바디로션 400g',
    price: 5830,
    section: 4,
    area: [19, 17, 32, 31],
    realPrice: 10910,
  },
  {
    name: '닥터아토 에센셜 로션 350ml',
    price: 11200,
    section: 4,
    area: [19, 21, 33, 32],
    realPrice: 6700,
  },
  {
    name: '뉴트로지나 바디 에멀젼 310ml',
    price: 8320,
    section: 4,
    area: [21, 22, 34, 33],
    realPrice: 8420,
  },
  {
    name: '바난겐 뉴트리티브 바디 로션 400ml',
    price: 8710,
    section: 4,
    area: [22, 24, 35, 34],
    realPrice: 8710,
  },
  {
    name: '비욘드 C핸드크림 IN 토탈 리커버리 100ml',
    price: 3500,
    section: 4,
    area: [24, 25, 36, 35],
    realPrice: 6190,
  },
  {
    name: 'W.피부연구소 손주름 핸드크림 60g',
    price: 3830,
    section: 4,
    area: [25, 26, 37, 36],
    realPrice: 4990,
  },
  {
    name: '소피소피 너리싱 핸드크림 50ml',
    price: 2900,
    section: 4,
    area: [26, 27, 38, 37],
    realPrice: 5080,
  },
  {
    name: '엔젤스코튼 너리싱 핸드크림 50ml',
    price: 2900,
    section: 4,
    area: [27, 29, 39, 38],
    realPrice: 6900,
  },
  {
    name: '토종 흑마늘진액 70ml 30개입',
    price: 15990,
    section: 4,
    area: [30, 35, 42, 40],
  },
  {
    name: '휴족시간 쿨링시트 6매입',
    price: 2200,
    section: 4,
    area: [35, 37, 43, 42],
    realPrice: 2290,
  },
  {
    name: '휴족시간 지압자극시트 4매입',
    price: 2450,
    section: 4,
    area: [37, 39, 44, 43],
    realPrice: 3900,
  },
  {
    name: '내몸애 생발란스 아로니아진액 70ml 30포',
    price: 22800,
    section: 4,
    area: [40, 41, 46, 45],
    realPrice: 62100,
  },
  {
    name: '참 진한 흑마늘 진액 70ml 30포',
    price: 35400,
    section: 4,
    area: [41, 44, 47, 46],
    realPrice: 39800,
  },
];

const products: Product[] = productsDAO.map((v) => {
  const {
    price, realPrice, section, area,
  } = v;

  const verticesInSection = vertices[section];
  const newArea = area.map((v2) => verticesInSection[v2]);
  const rate = realPrice ? Math.floor((realPrice - price) / realPrice * 100) : undefined;
  sortCoordClockwise(newArea);

  return {
    ...v,
    area: newArea,
    link: v.link || `https://search.shopping.naver.com/search/all?query=${v.name}`,
    rate,
  };
});

export default products;