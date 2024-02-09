import section19 from "../../../public/map/section19.png";
import section20 from "../../../public/map/section20.png";
import section21 from "../../../public/map/section21.png";
import section22 from "../../../public/map/section22.png";
import section23 from "../../../public/map/section23.png";
import section24 from "../../../public/map/section24.png";
import section25 from "../../../public/map/section25.png";
import section26 from "../../../public/map/section26.png";
import section27 from "../../../public/map/section27.png";
import section28 from "../../../public/map/section28.png";
import section29 from "../../../public/map/section29.png";
import section30 from "../../../public/map/section30.png";
import section31 from "../../../public/map/section31.png";
import section32 from "../../../public/map/section32.png";
import section33 from "../../../public/map/section33.png";
import section34 from "../../../public/map/section34.png";

export interface ISectionMap {
  name: string;
  position: number;
  src: string;
  height: number;
  width: number;
  x: number;
  y: number;
}

const percentSize = 100;

function calcWithPercent(width: number) {
  return (width * percentSize) / 100;
}

export const SECTIONS_MAP: ISectionMap[] = [
  {
    name: "section19",
    position: 19,
    src: section19.src,
    height: calcWithPercent(section19.height),
    width: calcWithPercent(section19.width),
    x: calcWithPercent(446.9),
    y: calcWithPercent(355),
  },
  {
    name: "section20",
    position: 20,
    src: section20.src,
    height: calcWithPercent(section20.height),
    width: calcWithPercent(section20.width),
    x: calcWithPercent(562.2),
    y: calcWithPercent(328),
  },
  {
    name: "section21",
    position: 21,
    src: section21.src,
    height: calcWithPercent(section21.height),
    width: calcWithPercent(section21.width),
    x: calcWithPercent(634),
    y: calcWithPercent(298),
  },
  {
    name: "section22",
    position: 22,
    src: section22.src,
    height: calcWithPercent(section22.height),
    width: calcWithPercent(section22.width),
    x: calcWithPercent(547),
    y: calcWithPercent(148),
  },
  {
    name: "section23",
    position: 23,
    src: section23.src,
    height: calcWithPercent(section23.height),
    width: calcWithPercent(section23.width),
    x: calcWithPercent(541),
    y: calcWithPercent(149),
  },
  {
    name: "section24",
    position: 24,
    src: section24.src,
    height: calcWithPercent(section24.height),
    width: calcWithPercent(section24.width),
    x: calcWithPercent(485),
    y: calcWithPercent(111.8),
  },
  {
    name: "section25",
    position: 25,
    src: section25.src,
    height: calcWithPercent(section25.height),
    width: calcWithPercent(section25.width),
    x: calcWithPercent(446.9),
    y: calcWithPercent(251),
  },
  {
    name: "section26",
    position: 26,
    src: section26.src,
    height: calcWithPercent(section26.height),
    width: calcWithPercent(section26.width),
    x: calcWithPercent(350),
    y: calcWithPercent(250),
  },
  {
    name: "section27",
    position: 27,
    src: section27.src,
    height: calcWithPercent(section27.height),
    width: calcWithPercent(section27.width),
    x: calcWithPercent(380),
    y: calcWithPercent(410),
  },
  {
    name: "section28",
    position: 28,
    src: section28.src,
    height: calcWithPercent(section28.height),
    width: calcWithPercent(section28.width),
    x: calcWithPercent(376.8),
    y: calcWithPercent(445),
  },
  {
    name: "section29",
    position: 29,
    src: section29.src,
    height: calcWithPercent(section29.height),
    width: calcWithPercent(section29.width),
    x: calcWithPercent(292),
    y: calcWithPercent(383),
  },
  {
    name: "section30",
    position: 30,
    src: section30.src,
    height: calcWithPercent(section30.height),
    width: calcWithPercent(section30.width),
    x: calcWithPercent(320),
    y: calcWithPercent(355),
  },
  {
    name: "section31",
    position: 31,
    src: section31.src,
    height: calcWithPercent(section31.height),
    width: calcWithPercent(section31.width),
    x: calcWithPercent(214),
    y: calcWithPercent(303),
  },
  {
    name: "section32",
    position: 32,
    src: section32.src,
    height: calcWithPercent(section32.height),
    width: calcWithPercent(section32.width),
    x: calcWithPercent(146),
    y: calcWithPercent(341),
  },
  {
    name: "section33",
    position: 33,
    src: section33.src,
    height: calcWithPercent(section33.height),
    width: calcWithPercent(section33.width),
    x: calcWithPercent(226),
    y: calcWithPercent(429),
  },
  {
    name: "section34",
    position: 34,
    src: section34.src,
    height: calcWithPercent(section34.height),
    width: calcWithPercent(section34.width),
    x: calcWithPercent(250),
    y: calcWithPercent(504),
  },
];
