import { PoolType } from 'types';
import isMobile from 'ismobilejs';
import parseToDate from 'utils/parseToDate';

export const DEVICE = isMobile(window.navigator);

export const ISMOBILE = DEVICE.any;

export const SHOW_DATA_ALL_KEY = '总览';

export const FONT_FAMILY = 'HYWenHei-65W';
export const FONT_FAMILY_BOLD = 'HYWenHei-85W';

export const COLOR = {
  FOUR_STAR: '#A65FE2',
  FIVE_STAR: '#C0713D',
  THREE_STAR: '#4D8DF7',
};
// fix: canvas-datagrid have error when filter number
const numberFilter = function (value: number, filterFor: string | undefined) {
  if (!filterFor) {
    return true;
  }
  return value.toString() === filterFor;
};
export const SCHEMA = [
  { name: '时间', type: 'string', width: 200 },
  { name: '编号', type: 'number', hidden: true, width: 120, filter: numberFilter },
  { name: '名称', type: 'string', width: 130 },
  { name: '类别', type: 'string', width: 50 },
  { name: '星级', type: 'number', width: 50, filter: numberFilter },
  { name: '总次数', type: 'number', hidden: true, width: 100, filter: numberFilter },
  { name: '保底内', type: 'number', width: 80, filter: numberFilter },
];

export const SCHEMA_ALL = (SCHEMA as any).concat({
  name: 'pool',
  title: '池子名称',
  type: 'string',
  width: 120,
});

export const CHARACTER_POOLS: PoolType[] = [
  {
    from: '2020-9-28 06:00:00',
    to: '2020-10-18 17:59:59',
    five: ['温迪'],
    four: ['芭芭拉', '菲谢尔', '香菱'],
    name: '杯装之诗',
  },
  {
    from: '2020-10-20 18:00:00',
    to: '2020-11-10 14:59:59',
    five: ['可莉'],
    four: ['行秋', '诺艾尔', '砂糖'],
    name: '闪焰的驻足',
  },
  {
    from: '2020-11-11 06:00:00',
    to: '2020-12-01 15:59:59',
    five: ['达达利亚'],
    four: ['迪奥娜', '北斗', '凝光'],
    name: '暂别冬都',
  },
  {
    from: '2020-12-01 18:00:00',
    to: ' 2020-12-22 14:59:59',
    five: ['钟离'],
    four: ['辛焱', '雷泽', '重云'],
    name: '陵薮市朝',
  },
  {
    from: '2020-12-23 06:00:00',
    to: '2021-01-12 15:59:59',
    five: ['阿贝多'],
    four: ['菲谢尔', '砂糖', '班尼特'],
    name: '深秘之息',
  },
  {
    from: '2021-01-12 18:00:00',
    to: '2021-02-02 14:59:59',
    five: ['甘雨'],
    four: ['香菱', '行秋', '诺艾尔'],
    name: '浮生孰来',
  },
  {
    from: '2021-02-03 06:00:00',
    to: '2021-02-17 15:59:59',
    five: ['魈'],
    four: ['迪奥娜', '北斗', '辛焱'],
    name: '烟火之邀',
  },
  {
    from: '2021-02-17 18:00:00',
    to: '2021-03-02 15:59:59',
    five: ['刻晴'],
    four: ['凝光', '班尼特', '芭芭拉'],
    name: '鱼龙灯昼',
  },
  {
    from: '2021-03-02 18:00:00',
    to: '2021-03-16 14:59:59',
    five: ['胡桃'],
    four: ['行秋', '香菱', '重云'],
    name: '赤团开时',
  },
  {
    from: '2021-03-17 06:00:00',
    to: '2021-04-06 15:59:59',
    five: ['温迪'],
    four: ['砂糖', '雷泽', '诺艾尔'],
    name: '杯装之诗',
  },
].map((v) => {
  const o: PoolType = v as any;
  o.from = +parseToDate(v.from);
  o.to = +parseToDate(v.to);
  o.type = 'character';
  return o;
});
export const WEAPON_POOLS: PoolType[] = [
  {
    from: '2020-10-20 18:00:00',
    to: '2020-11-10 14:59:59',
    five: ['四风原典', '狼的末路'],
    four: ['祭礼剑', '祭礼大剑', '祭礼残章', '祭礼弓', '匣里灭辰'],
    name: '神铸赋形',
  },
  {
    from: '2020-11-11 06:00:00',
    to: '2020-12-01 15:59:59',
    five: ['天空之翼', '尘世之锁'],
    four: ['笛剑', '雨裁', '昭心', '弓藏', '西风长枪'],
    name: '神铸赋形',
  },
  {
    from: '2020-12-01 18:00:00',
    to: ' 2020-12-22 14:59:59',
    five: ['贯虹之槊', '无工之剑'],
    four: ['匣里龙吟', '钟剑', '西风秘典', '西风猎弓', '匣里灭辰'],
    name: '神铸赋形',
  },
  {
    from: '2020-12-23 06:00:00',
    to: '2021-01-12 15:59:59',
    five: ['斫峰之刃', '天空之卷'],
    four: ['西风剑', '西风大剑', '西风长枪', '祭礼残章', '绝弦'],
    name: '神铸赋形',
  },

  {
    from: '2021-01-12 18:00:00',
    to: '2021-02-02 14:59:59',
    five: ['阿莫斯之弓', '天空之傲'],
    four: ['祭礼剑', '钟剑', '匣里灭辰', '昭心', '西风猎弓'],
    name: '神铸赋形',
  },
  {
    from: '2021-02-03 06:00:00',
    to: '2021-02-23 15:59:59',
    five: ['磐岩结绿', '和璞鸢'],
    four: ['笛剑', '祭礼大剑', '弓藏', '昭心', '西风长枪'],
    name: '神铸赋形',
  },
  {
    from: '2021-02-23 18:00:00',
    to: '2021-03-16 14:59:59',
    five: ['护摩之杖', '狼的末路'],
    four: ['匣里龙吟', '千岩古剑', '祭礼弓', '流浪乐章', '千岩长枪'],
    name: '神铸赋形',
  },
  {
    from: '2021-03-17 06:00:00',
    to: '2021-04-06 15:59:59',
    five: ['终末嗟叹之诗', '天空之刃'],
    four: ['暗巷闪光', '西风大剑', '西风猎弓', '暗巷的酒与诗', '匣里灭辰'],
    name: '神铸赋形',
  },
].map((v) => {
  const o: PoolType = v as any;
  o.from = +parseToDate(v.from);
  o.to = +parseToDate(v.to);
  o.type = 'weapon';
  return o;
});
