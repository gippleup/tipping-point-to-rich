import React from 'react'
import styled from 'styled-components'
import chroma from 'chroma-js'

export const mapJson = {
  daegu: require("./json/daegu.json"),
  daejeon: require("./json/daejeon.json"),
  gyeonggi: require("./json/gyeonggi.json"),
  jeollabukdo: require("./json/jeollabukdo.json"),
  jeollanamdo: require("./json/jeollanamdo.json"),
  korea: require("./json/korea.json"),
  sejong: require("./json/sejong.json"),
  seoul: require("./json/seoul.json"),
} as const;

type SupportedArea = keyof typeof mapJson;

const viewBox: {[T in SupportedArea]: string} = {
  daegu: "0 0 800 1000",
  daejeon: "0 0 800 1000",
  gyeonggi: "70 50 660 760",
  jeollabukdo: "0 0 800 520",
  jeollanamdo: "0 0 1000 900",
  korea: "-100 -100 1000 1100",
  sejong: "0 0 800 1200",
  seoul: "10 0 780 670",
}

type AreaJson = {
  d: string;
  tag: {
    name: string;
    x: string;
    y: string;
  }
}

const FitSvg = styled.svg`
  background: #eaeaea;
  /* overflow:visible; */
  height: 100%;
  width: 100%;
`;

type SvgMapProps = {
  area: SupportedArea;
}

const SvgMap: React.FC<SvgMapProps> = (props) => {
  const {area} = props;
  const blocks = Object.values(mapJson[area]) as AreaJson[];
  const accIndex = 3;
  return (
    <FitSvg viewBox={viewBox[area]}>
      <defs>
        <filter id="f1" x="0" y="0">
          <feGaussianBlur stdDeviation="10" />
        </filter>
        <filter id="f2" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="20" />
        </filter>
      </defs>
      <g>
        {blocks.map((area, i) => (
          <path
            d={area.d}
            id={i === accIndex ? "importantArea" : undefined}
            fill={i === accIndex ? chroma.random().hex() : "grey"}
          />
        ))}
      </g>
      <g id="stroke">
        {blocks.map((area, i) => (
          <path
            d={area.d}
            fill="transparent"
            id={i === accIndex ? "importantStroke" : undefined}
            strokeWidth={i === accIndex ? "2" : "0.5"}
            stroke={i === accIndex ? "white" : "lightgrey"}
          />
        ))}
      </g>
      <use opacity="1" xlinkHref="#importantArea" filter="url(#f2)" />
      <use xlinkHref="#importantStroke" filter="url(#f1)" />
      <use xlinkHref="#importantStroke" style={{mixBlendMode: "screen"}} />
    </FitSvg>
  )
}

SvgMap.defaultProps = {
  area: "seoul",
}

export default SvgMap
