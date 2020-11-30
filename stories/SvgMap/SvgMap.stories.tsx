import { defineModule, defineTemplate } from "../../utils/story";
import SvgMap from "./SvgMap";

export default {
  title: "SvgMap",
  component: SvgMap,
}

const Template = defineTemplate(SvgMap);

export const SeoulMap = defineModule(Template, {area: "seoul"})
export const DaeguMap = defineModule(Template, {area: "daegu"})
export const DaejeonMap = defineModule(Template, {area: "daejeon"})
export const GyeonggiMap = defineModule(Template, {area: "gyeonggi"})
export const JeollabukdoMap = defineModule(Template, {area: "jeollabukdo"})
export const JeollanamdoMap = defineModule(Template, {area: "jeollanamdo"})
export const KoreaMap = defineModule(Template, {area: "korea"})
export const SejongMap = defineModule(Template, {area: "sejong"})
