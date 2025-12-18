
import { DayItinerary, GuideItem } from './types';

export const EXCHANGE_RATE = 0.0058;

export const ITINERARY_DATA: DayItinerary[] = [
  {
    day: 1,
    title: "首爾抵達 — 弘大電競首部曲",
    events: [
      { time: "10:30", desc: "抵達仁川機場，搭乘 AREX 快線。", icon: "Plane" },
      { time: "14:00", desc: "【T1 Base Camp】電競網咖體驗", icon: "Gamepad2", highlight: true },
      { time: "17:30", desc: "【明洞購物與換錢】", icon: "ShoppingBag" },
      { time: "20:00", desc: "【N首爾塔】夜景", icon: "Mountain" }
    ],
    details: "10:30 - 12:00 抵達仁川機場，搭乘 AREX 機場快線前往 弘大入口站。\n14:00 - 17:00 【T1 Base Camp】電競網咖體驗\n地鐵： 2號線 弘大入口站 (Hongik Univ.) 1號出口，步行3分鐘。\n亮點： T1 主題旗艦網咖、Faker 巨大立牌、T1 限定拍貼機。\n17:30 - 19:30 【明洞購物與換錢】\n地鐵： 4號線 明洞站 (Myeongdong) 5/6號出口。\n20:00 - 21:30 【N首爾塔】俯瞰首爾夜景\n交通： 明洞站3號出口直走步行至纜車站，或搭乘 01 路循環公車。"
  },
  {
    day: 2,
    title: "鐘路區 — LCK 職業賽場與傳統美學",
    events: [
      { time: "11:00", desc: "【LCK LoL PARK】", icon: "Trophy", highlight: true },
      { time: "13:30", desc: "【景福宮 & 北村韓屋村】", icon: "Castle" },
      { time: "17:00", desc: "【益善洞韓屋村】", icon: "Coffee" },
      { time: "19:00", desc: "晚餐：土俗村蔘雞湯", icon: "Utensils" }
    ],
    details: "11:00 - 13:00 【LCK LoL PARK】\n地鐵： 1號線 鐘閣站 (Jonggak) 1號出口直達 (Gran Seoul 3樓)。\n亮點： 參觀 LCK Arena 賽場、Riot Store 官方商店。\n13:30 - 16:30 【景福宮 & 北村韓屋村】\n地鐵： 3號線 景福宮站 或 安國站。\n建議： 穿韓服進入景福宮可免門票。\n17:00 - 19:30 【益善洞韓屋村】\n地鐵： 1/3/5號線 鐘路三街站 (Jongno 3-ga) 4或6號出口。\n亮點： 在老建築改建的時尚咖啡廳（如：小夏鹽田）享用晚餐前甜點。"
  },
  {
    day: 3,
    title: "江南/聖水 — T1 總部與時尚工業風",
    events: [
      { time: "10:30", desc: "【T1 HQ Shop & T1 Cafe】", icon: "Coffee", highlight: true },
      { time: "13:00", desc: "【聖水洞潮流巡禮】", icon: "Shirt" },
      { time: "18:00", desc: "【首爾林公園】", icon: "Leaf" }
    ],
    details: "10:30 - 12:30 【T1 HQ Shop & T1 Cafe】\n地鐵： 2號線 / 水仁·盆唐線 宣陵站 (Seolleung) 8號出口直走，步行10分鐘。\n亮點： 總部大樓 1F 冠軍獎盃牆、T1 Cafe 簽名應援牆。 (註：Cafe 週日、一公休)\n13:00 - 17:30 【聖水洞 (Seongsu-dong) 潮流巡禮】\n交通： 建議從宣陵站搭計程車 (Kakao Taxi) 往聖水洞（約15-20分車程）或搭地鐵 2 號線至 聖水站 4 號出口。\n亮點： Dior Seongsu (拍照必去)、大林倉庫、Tamburins 旗艦店。"
  },
  {
    day: 4,
    title: "移動日 — 首爾 ➔ 釜山海港城",
    events: [
      { time: "09:30", desc: "【KTX 高鐵移動】", icon: "Train", highlight: true },
      { time: "12:30", desc: "午餐：本錢豬肉湯飯", icon: "Utensils" },
      { time: "14:30", desc: "【甘川洞文化村】", icon: "Palette" },
      { time: "18:00", desc: "【南浦洞 & 札嘎其市場】", icon: "Fish" }
    ],
    details: "09:30 - 12:00 【KTX 高鐵移動】\n地點： 首爾站 (Seoul Station) ➔ 釜山站 (Busan Station)。\n12:30 - 13:30 【釜山美食第一站】\n午餐： 釜山站旁的「本錢豬肉湯飯」。\n14:30 - 17:00 【甘川洞文化村】\n交通： 1號線 土城站 (Toseong) 6號出口，轉搭小巴士 (1-1/2/2-2) 上山。"
  },
  {
    day: 5,
    title: "海雲台 — 絕美海岸線之旅",
    events: [
      { time: "10:00", desc: "【海雲台藍線公園膠囊列車】", icon: "Train", highlight: true },
      { time: "12:30", desc: "【海雲台沙灘 & X the SKY】", icon: "Building2" },
      { time: "18:00", desc: "【The Bay 101 & 廣安里】", icon: "Moon" }
    ],
    details: "10:00 - 12:00 【海雲台藍線公園膠囊列車】\n地鐵： 2號線 中洞站，步行至尾浦站 (Mipo Station)。\n提醒： 此行程必須提前網上預約。\n12:30 - 15:30 【海雲台沙灘 & X the SKY】\n地鐵： 2號線 海雲台站。\n亮點： 登上 100 樓喝全球最高星巴克。"
  },
  {
    day: 6,
    title: "釜山放鬆 — 海邊寺廟與奢華汗蒸幕",
    events: [
      { time: "10:00", desc: "【海東龍宮寺】", icon: "Castle" },
      { time: "14:00", desc: "【Centum City Spa Land】", icon: "Waves", highlight: true },
      { time: "19:00", desc: "【廣安里沙灘】無人機秀", icon: "Plane" }
    ],
    details: "10:00 - 12:30 【海東龍宮寺】\n交通： 2號線 海雲台站 7號出口搭乘 181 路公車，或直接搭計程車前往。\n14:00 - 18:00 【Centum City Spa Land】\n地鐵： 2號線 Centum City 站 直達新世界百貨。\n亮點： 釜山最頂級的汗蒸幕，緩解全身疲累。"
  },
  {
    day: 7,
    title: "最後採購 — 釜山 ➔ 香港",
    events: [
      { time: "10:00", desc: "【西面地下街】最後補貨", icon: "ShoppingCart" },
      { time: "13:30", desc: "前往金海機場 (PUS)", icon: "Plane" }
    ],
    details: "10:00 - 13:00 【西面地下街】最後補貨\n地鐵： 1/2號線 西面站 (Seomyeon)。\n亮點： 釜山最好逛的地下街，集中採購衣服與化妝品。\n13:30 - 15:00 前往 金海國際機場 (PUS)。"
  }
];

export const GUIDE_DATA: GuideItem[] = [
  {
    title: "T1 Base Camp: 電競文化的縮影",
    subtitle: "The Sanctuary for Gamers",
    content: "位於弘大的 T1 Base Camp 不僅僅是一間網咖，它是韓國電競強權 T1 俱樂部打造的沈浸式空間。韓國的「PC Bang」(網咖) 文化始於 90 年代末，最初是為了應對亞洲金融風暴後的失業潮與寬頻網路的普及。如今，這裡不僅提供最高規格的硬體，還有專屬的精品店展示 Faker 等傳奇選手的周邊。\n\n**冷知識：** 在韓國網咖點餐（如：辛拉麵加蛋）是必備行程，這裡的食物美味程度往往不輸餐廳！",
    map: "https://www.openstreetmap.org/export/embed.html?bbox=126.919%2C37.553%2C126.925%2C37.558&layer=mapnik&marker=37.5558%2C126.9221"
  },
  {
    title: "景福宮: 王者的威嚴與美學",
    subtitle: "The Palace of Great Blessings",
    content: "建於 1395 年，是朝鮮王朝五大宮闕中規模最大、最宏偉的。其建築風格強調與自然的和諧。景福宮曾多次因戰爭毀損，現存建築多為 19 世紀重建。\n\n**穿衣小筆記：** 穿著全套韓服進入景福宮可獲得免門票優惠！這不僅是為了推廣傳統文化，也讓古建築群在遊客的點綴下更有穿越感。\n\n**冷知識：** 景福宮的屋簷角落常有小石雕（雜像），是用來驅邪與守護國王的象徵。",
    map: "https://www.openstreetmap.org/export/embed.html?bbox=126.974%2C37.576%2C126.980%2C37.581&layer=mapnik&marker=37.5785%2C126.9770"
  },
  {
    title: "聖水洞: 鋼鐵森林裡的時尚溫床",
    subtitle: "Brooklyn of Seoul",
    content: "聖水洞曾是手工製鞋廠與修車廠的集散地。隨著工業轉型，這些大紅磚房被改造成咖啡廳與精品店，形成了極致的「廢墟美學」。\n\n**必讀：** 這裡的 Dior Seongsu 建築外牆靈感來自巴黎蒙田大道 30 號。而「大林倉庫」則是將舊工廠原封不動改裝成複合式藝文空間，是聖水洞轉型的標誌性地點。\n\n**冷知識：** 許多時尚品牌會在聖水洞開設「期間限定 Pop-up Store」，通常為期僅兩週，是捕捉韓國最新趨勢的最佳窗口。",
    map: "https://www.openstreetmap.org/export/embed.html?bbox=127.048%2C37.539%2C127.058%2C37.548&layer=mapnik&marker=37.5445%2C127.0541"
  }
];
