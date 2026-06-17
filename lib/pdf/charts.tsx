import React from 'react';
import { Svg, Circle, Line, Path, Text, G, Polygon } from '@react-pdf/renderer';
import { COLORS } from './colors';
import { FONTS } from './fonts';

export const RadarChart = ({ data, size = 300 }: { data: { label: string; value: number; color: string }[], size?: number }) => {
  const center = size / 2;
  const radius = size * 0.4;
  const angleStep = (Math.PI * 2) / data.length;

  const getCoordinates = (value: number, index: number) => {
    const angle = index * angleStep - Math.PI / 2;
    return {
      x: center + radius * (value / 100) * Math.cos(angle),
      y: center + radius * (value / 100) * Math.sin(angle),
    };
  };

  const gridLevels = [0.25, 0.5, 0.75, 1];
  
  const dataPoints = data.map((d, i) => getCoordinates(d.value, i));
  const dataPath = dataPoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ') + ' Z';

  return (
    <Svg width={size} height={size}>
      {/* Grid */}
      {gridLevels.map((level, levelIdx) => {
        const points = data.map((_, i) => {
          const { x, y } = getCoordinates(level * 100, i);
          return `${x},${y}`;
        }).join(' ');
        
        return (
          <Polygon
            key={`grid-${levelIdx}`}
            points={points}
            fill="none"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth={1}
          />
        );
      })}

      {/* Axes */}
      {data.map((_, i) => {
        const { x, y } = getCoordinates(100, i);
        return (
          <Line
            key={`axis-${i}`}
            x1={center}
            y1={center}
            x2={x}
            y2={y}
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth={1}
          />
        );
      })}

      {/* Data Area */}
      <Path
        d={dataPath}
        fill="rgba(6, 182, 212, 0.2)"
        stroke={COLORS.accent.cyan}
        strokeWidth={2}
      />

      {/* Data Points */}
      {dataPoints.map((p, i) => (
        <Circle
          key={`point-${i}`}
          cx={p.x}
          cy={p.y}
          r={4}
          fill={data[i].color}
        />
      ))}

      {/* Labels */}
      {data.map((d, i) => {
        const { x, y } = getCoordinates(115, i);
        return (
          <Text
            key={`label-${i}`}
            x={x}
            y={y}
            fill={COLORS.text.primaryDark}
            style={{ fontSize: 9, fontFamily: FONTS.body }}
            textAnchor="middle"
          >
            {d.label}
          </Text>
        );
      })}
    </Svg>
  );
};
