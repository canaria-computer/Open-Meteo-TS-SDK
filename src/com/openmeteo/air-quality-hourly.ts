// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { TimeRange } from '../../com/openmeteo/time-range';
import { ValuesAndUnit } from '../../com/openmeteo/values-and-unit';


export class AirQualityHourly {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):AirQualityHourly {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsAirQualityHourly(bb:flatbuffers.ByteBuffer, obj?:AirQualityHourly):AirQualityHourly {
  return (obj || new AirQualityHourly()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsAirQualityHourly(bb:flatbuffers.ByteBuffer, obj?:AirQualityHourly):AirQualityHourly {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new AirQualityHourly()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

time(obj?:TimeRange):TimeRange|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new TimeRange()).__init(this.bb_pos + offset, this.bb!) : null;
}

pm10(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

pm25(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

dust(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

aerosolOpticalDepth(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

carbonMonoxide(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

nitrogenDioxide(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 16);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

ammonia(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 18);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

ozone(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 20);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

sulphurDioxide(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 22);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

uvIndex(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 24);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

uvIndexClearSky(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 26);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

alderPollen(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 28);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

birchPollen(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 30);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

grassPollen(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 32);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

mugwortPollen(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 34);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

olivePollen(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 36);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

ragweedPollen(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 38);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

europeanAqi(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 40);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

europeanAqiPm25(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 42);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

europeanAqiPm10(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 44);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

europeanAqiNo2(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 46);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

europeanAqiO3(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 48);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

europeanAqiSo2(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 50);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

usAqi(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 52);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

usAqiPm25(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 54);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

usAqiPm10(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 56);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

usAqiNo2(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 58);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

usAqiO3(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 60);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

usAqiSo2(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 62);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

usAqiCo(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 64);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

isDay(obj?:ValuesAndUnit):ValuesAndUnit|null {
  const offset = this.bb!.__offset(this.bb_pos, 66);
  return offset ? (obj || new ValuesAndUnit()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

static startAirQualityHourly(builder:flatbuffers.Builder) {
  builder.startObject(32);
}

static addTime(builder:flatbuffers.Builder, timeOffset:flatbuffers.Offset) {
  builder.addFieldStruct(0, timeOffset, 0);
}

static addPm10(builder:flatbuffers.Builder, pm10Offset:flatbuffers.Offset) {
  builder.addFieldOffset(1, pm10Offset, 0);
}

static addPm25(builder:flatbuffers.Builder, pm25Offset:flatbuffers.Offset) {
  builder.addFieldOffset(2, pm25Offset, 0);
}

static addDust(builder:flatbuffers.Builder, dustOffset:flatbuffers.Offset) {
  builder.addFieldOffset(3, dustOffset, 0);
}

static addAerosolOpticalDepth(builder:flatbuffers.Builder, aerosolOpticalDepthOffset:flatbuffers.Offset) {
  builder.addFieldOffset(4, aerosolOpticalDepthOffset, 0);
}

static addCarbonMonoxide(builder:flatbuffers.Builder, carbonMonoxideOffset:flatbuffers.Offset) {
  builder.addFieldOffset(5, carbonMonoxideOffset, 0);
}

static addNitrogenDioxide(builder:flatbuffers.Builder, nitrogenDioxideOffset:flatbuffers.Offset) {
  builder.addFieldOffset(6, nitrogenDioxideOffset, 0);
}

static addAmmonia(builder:flatbuffers.Builder, ammoniaOffset:flatbuffers.Offset) {
  builder.addFieldOffset(7, ammoniaOffset, 0);
}

static addOzone(builder:flatbuffers.Builder, ozoneOffset:flatbuffers.Offset) {
  builder.addFieldOffset(8, ozoneOffset, 0);
}

static addSulphurDioxide(builder:flatbuffers.Builder, sulphurDioxideOffset:flatbuffers.Offset) {
  builder.addFieldOffset(9, sulphurDioxideOffset, 0);
}

static addUvIndex(builder:flatbuffers.Builder, uvIndexOffset:flatbuffers.Offset) {
  builder.addFieldOffset(10, uvIndexOffset, 0);
}

static addUvIndexClearSky(builder:flatbuffers.Builder, uvIndexClearSkyOffset:flatbuffers.Offset) {
  builder.addFieldOffset(11, uvIndexClearSkyOffset, 0);
}

static addAlderPollen(builder:flatbuffers.Builder, alderPollenOffset:flatbuffers.Offset) {
  builder.addFieldOffset(12, alderPollenOffset, 0);
}

static addBirchPollen(builder:flatbuffers.Builder, birchPollenOffset:flatbuffers.Offset) {
  builder.addFieldOffset(13, birchPollenOffset, 0);
}

static addGrassPollen(builder:flatbuffers.Builder, grassPollenOffset:flatbuffers.Offset) {
  builder.addFieldOffset(14, grassPollenOffset, 0);
}

static addMugwortPollen(builder:flatbuffers.Builder, mugwortPollenOffset:flatbuffers.Offset) {
  builder.addFieldOffset(15, mugwortPollenOffset, 0);
}

static addOlivePollen(builder:flatbuffers.Builder, olivePollenOffset:flatbuffers.Offset) {
  builder.addFieldOffset(16, olivePollenOffset, 0);
}

static addRagweedPollen(builder:flatbuffers.Builder, ragweedPollenOffset:flatbuffers.Offset) {
  builder.addFieldOffset(17, ragweedPollenOffset, 0);
}

static addEuropeanAqi(builder:flatbuffers.Builder, europeanAqiOffset:flatbuffers.Offset) {
  builder.addFieldOffset(18, europeanAqiOffset, 0);
}

static addEuropeanAqiPm25(builder:flatbuffers.Builder, europeanAqiPm25Offset:flatbuffers.Offset) {
  builder.addFieldOffset(19, europeanAqiPm25Offset, 0);
}

static addEuropeanAqiPm10(builder:flatbuffers.Builder, europeanAqiPm10Offset:flatbuffers.Offset) {
  builder.addFieldOffset(20, europeanAqiPm10Offset, 0);
}

static addEuropeanAqiNo2(builder:flatbuffers.Builder, europeanAqiNo2Offset:flatbuffers.Offset) {
  builder.addFieldOffset(21, europeanAqiNo2Offset, 0);
}

static addEuropeanAqiO3(builder:flatbuffers.Builder, europeanAqiO3Offset:flatbuffers.Offset) {
  builder.addFieldOffset(22, europeanAqiO3Offset, 0);
}

static addEuropeanAqiSo2(builder:flatbuffers.Builder, europeanAqiSo2Offset:flatbuffers.Offset) {
  builder.addFieldOffset(23, europeanAqiSo2Offset, 0);
}

static addUsAqi(builder:flatbuffers.Builder, usAqiOffset:flatbuffers.Offset) {
  builder.addFieldOffset(24, usAqiOffset, 0);
}

static addUsAqiPm25(builder:flatbuffers.Builder, usAqiPm25Offset:flatbuffers.Offset) {
  builder.addFieldOffset(25, usAqiPm25Offset, 0);
}

static addUsAqiPm10(builder:flatbuffers.Builder, usAqiPm10Offset:flatbuffers.Offset) {
  builder.addFieldOffset(26, usAqiPm10Offset, 0);
}

static addUsAqiNo2(builder:flatbuffers.Builder, usAqiNo2Offset:flatbuffers.Offset) {
  builder.addFieldOffset(27, usAqiNo2Offset, 0);
}

static addUsAqiO3(builder:flatbuffers.Builder, usAqiO3Offset:flatbuffers.Offset) {
  builder.addFieldOffset(28, usAqiO3Offset, 0);
}

static addUsAqiSo2(builder:flatbuffers.Builder, usAqiSo2Offset:flatbuffers.Offset) {
  builder.addFieldOffset(29, usAqiSo2Offset, 0);
}

static addUsAqiCo(builder:flatbuffers.Builder, usAqiCoOffset:flatbuffers.Offset) {
  builder.addFieldOffset(30, usAqiCoOffset, 0);
}

static addIsDay(builder:flatbuffers.Builder, isDayOffset:flatbuffers.Offset) {
  builder.addFieldOffset(31, isDayOffset, 0);
}

static endAirQualityHourly(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  builder.requiredField(offset, 4) // time
  return offset;
}

}
