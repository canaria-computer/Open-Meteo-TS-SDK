// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { TimeRange } from '../../com/openmeteo/time-range';
import { ValuesAndLevelAndMember } from '../../com/openmeteo/values-and-level-and-member';
import { ValuesUnitAndMember } from '../../com/openmeteo/values-unit-and-member';
import { ValuesUnitPressureLevelAndMember } from '../../com/openmeteo/values-unit-pressure-level-and-member';


export class EnsembleHourly {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):EnsembleHourly {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsEnsembleHourly(bb:flatbuffers.ByteBuffer, obj?:EnsembleHourly):EnsembleHourly {
  return (obj || new EnsembleHourly()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsEnsembleHourly(bb:flatbuffers.ByteBuffer, obj?:EnsembleHourly):EnsembleHourly {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new EnsembleHourly()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

time(obj?:TimeRange):TimeRange|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new TimeRange()).__init(this.bb_pos + offset, this.bb!) : null;
}

apparentTemperature(obj?:ValuesUnitAndMember):ValuesUnitAndMember|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? (obj || new ValuesUnitAndMember()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

cape(obj?:ValuesUnitAndMember):ValuesUnitAndMember|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? (obj || new ValuesUnitAndMember()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

cloudcover(obj?:ValuesUnitAndMember):ValuesUnitAndMember|null {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? (obj || new ValuesUnitAndMember()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

dewpoint2m(obj?:ValuesUnitAndMember):ValuesUnitAndMember|null {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? (obj || new ValuesUnitAndMember()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

diffuseRadiation(obj?:ValuesUnitAndMember):ValuesUnitAndMember|null {
  const offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? (obj || new ValuesUnitAndMember()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

diffuseRadiationInstant(obj?:ValuesUnitAndMember):ValuesUnitAndMember|null {
  const offset = this.bb!.__offset(this.bb_pos, 16);
  return offset ? (obj || new ValuesUnitAndMember()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

directNormalIrradiance(obj?:ValuesUnitAndMember):ValuesUnitAndMember|null {
  const offset = this.bb!.__offset(this.bb_pos, 18);
  return offset ? (obj || new ValuesUnitAndMember()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

directNormalIrradianceInstant(obj?:ValuesUnitAndMember):ValuesUnitAndMember|null {
  const offset = this.bb!.__offset(this.bb_pos, 20);
  return offset ? (obj || new ValuesUnitAndMember()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

directRadiation(obj?:ValuesUnitAndMember):ValuesUnitAndMember|null {
  const offset = this.bb!.__offset(this.bb_pos, 22);
  return offset ? (obj || new ValuesUnitAndMember()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

directRadiationInstant(obj?:ValuesUnitAndMember):ValuesUnitAndMember|null {
  const offset = this.bb!.__offset(this.bb_pos, 24);
  return offset ? (obj || new ValuesUnitAndMember()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

et0FaoEvapotranspiration(obj?:ValuesUnitAndMember):ValuesUnitAndMember|null {
  const offset = this.bb!.__offset(this.bb_pos, 26);
  return offset ? (obj || new ValuesUnitAndMember()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

freezinglevelHeight(obj?:ValuesUnitAndMember):ValuesUnitAndMember|null {
  const offset = this.bb!.__offset(this.bb_pos, 28);
  return offset ? (obj || new ValuesUnitAndMember()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

isDay(obj?:ValuesUnitAndMember):ValuesUnitAndMember|null {
  const offset = this.bb!.__offset(this.bb_pos, 30);
  return offset ? (obj || new ValuesUnitAndMember()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

precipitation(obj?:ValuesUnitAndMember):ValuesUnitAndMember|null {
  const offset = this.bb!.__offset(this.bb_pos, 32);
  return offset ? (obj || new ValuesUnitAndMember()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

pressureMsl(obj?:ValuesUnitAndMember):ValuesUnitAndMember|null {
  const offset = this.bb!.__offset(this.bb_pos, 34);
  return offset ? (obj || new ValuesUnitAndMember()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

rain(obj?:ValuesUnitAndMember):ValuesUnitAndMember|null {
  const offset = this.bb!.__offset(this.bb_pos, 36);
  return offset ? (obj || new ValuesUnitAndMember()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

relativehumidity2m(obj?:ValuesUnitAndMember):ValuesUnitAndMember|null {
  const offset = this.bb!.__offset(this.bb_pos, 38);
  return offset ? (obj || new ValuesUnitAndMember()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

shortwaveRadiation(obj?:ValuesUnitAndMember):ValuesUnitAndMember|null {
  const offset = this.bb!.__offset(this.bb_pos, 40);
  return offset ? (obj || new ValuesUnitAndMember()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

shortwaveRadiationInstant(obj?:ValuesUnitAndMember):ValuesUnitAndMember|null {
  const offset = this.bb!.__offset(this.bb_pos, 42);
  return offset ? (obj || new ValuesUnitAndMember()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

showers(obj?:ValuesAndLevelAndMember):ValuesAndLevelAndMember|null {
  const offset = this.bb!.__offset(this.bb_pos, 44);
  return offset ? (obj || new ValuesAndLevelAndMember()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

snowDepth(obj?:ValuesUnitAndMember):ValuesUnitAndMember|null {
  const offset = this.bb!.__offset(this.bb_pos, 46);
  return offset ? (obj || new ValuesUnitAndMember()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

snowfall(obj?:ValuesUnitAndMember):ValuesUnitAndMember|null {
  const offset = this.bb!.__offset(this.bb_pos, 48);
  return offset ? (obj || new ValuesUnitAndMember()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

soilMoisture0To10cm(obj?:ValuesUnitAndMember):ValuesUnitAndMember|null {
  const offset = this.bb!.__offset(this.bb_pos, 50);
  return offset ? (obj || new ValuesUnitAndMember()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

soilMoisture100To200cm(obj?:ValuesUnitAndMember):ValuesUnitAndMember|null {
  const offset = this.bb!.__offset(this.bb_pos, 52);
  return offset ? (obj || new ValuesUnitAndMember()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

soilMoisture10To40cm(obj?:ValuesUnitAndMember):ValuesUnitAndMember|null {
  const offset = this.bb!.__offset(this.bb_pos, 54);
  return offset ? (obj || new ValuesUnitAndMember()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

soilMoisture40To100cm(obj?:ValuesUnitAndMember):ValuesUnitAndMember|null {
  const offset = this.bb!.__offset(this.bb_pos, 56);
  return offset ? (obj || new ValuesUnitAndMember()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

soilTemperature0To10cm(obj?:ValuesUnitAndMember):ValuesUnitAndMember|null {
  const offset = this.bb!.__offset(this.bb_pos, 58);
  return offset ? (obj || new ValuesUnitAndMember()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

soilTemperature100To200cm(obj?:ValuesUnitAndMember):ValuesUnitAndMember|null {
  const offset = this.bb!.__offset(this.bb_pos, 60);
  return offset ? (obj || new ValuesUnitAndMember()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

soilTemperature10To40cm(obj?:ValuesUnitAndMember):ValuesUnitAndMember|null {
  const offset = this.bb!.__offset(this.bb_pos, 62);
  return offset ? (obj || new ValuesUnitAndMember()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

soilTemperature40To100cm(obj?:ValuesUnitAndMember):ValuesUnitAndMember|null {
  const offset = this.bb!.__offset(this.bb_pos, 64);
  return offset ? (obj || new ValuesUnitAndMember()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

surfacePressure(obj?:ValuesUnitAndMember):ValuesUnitAndMember|null {
  const offset = this.bb!.__offset(this.bb_pos, 66);
  return offset ? (obj || new ValuesUnitAndMember()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

surfaceTemperature(obj?:ValuesUnitAndMember):ValuesUnitAndMember|null {
  const offset = this.bb!.__offset(this.bb_pos, 68);
  return offset ? (obj || new ValuesUnitAndMember()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

temperature120m(obj?:ValuesUnitAndMember):ValuesUnitAndMember|null {
  const offset = this.bb!.__offset(this.bb_pos, 70);
  return offset ? (obj || new ValuesUnitAndMember()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

temperature2m(obj?:ValuesUnitAndMember):ValuesUnitAndMember|null {
  const offset = this.bb!.__offset(this.bb_pos, 72);
  return offset ? (obj || new ValuesUnitAndMember()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

temperature2mMax(obj?:ValuesUnitAndMember):ValuesUnitAndMember|null {
  const offset = this.bb!.__offset(this.bb_pos, 74);
  return offset ? (obj || new ValuesUnitAndMember()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

temperature2mMin(obj?:ValuesUnitAndMember):ValuesUnitAndMember|null {
  const offset = this.bb!.__offset(this.bb_pos, 76);
  return offset ? (obj || new ValuesUnitAndMember()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

temperature80m(obj?:ValuesUnitAndMember):ValuesUnitAndMember|null {
  const offset = this.bb!.__offset(this.bb_pos, 78);
  return offset ? (obj || new ValuesUnitAndMember()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

uvIndex(obj?:ValuesUnitAndMember):ValuesUnitAndMember|null {
  const offset = this.bb!.__offset(this.bb_pos, 80);
  return offset ? (obj || new ValuesUnitAndMember()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

uvIndexClearSky(obj?:ValuesUnitAndMember):ValuesUnitAndMember|null {
  const offset = this.bb!.__offset(this.bb_pos, 82);
  return offset ? (obj || new ValuesUnitAndMember()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

vaporPressureDeficit(obj?:ValuesUnitAndMember):ValuesUnitAndMember|null {
  const offset = this.bb!.__offset(this.bb_pos, 84);
  return offset ? (obj || new ValuesUnitAndMember()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

visibility(obj?:ValuesUnitAndMember):ValuesUnitAndMember|null {
  const offset = this.bb!.__offset(this.bb_pos, 86);
  return offset ? (obj || new ValuesUnitAndMember()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

winddirection10m(obj?:ValuesUnitAndMember):ValuesUnitAndMember|null {
  const offset = this.bb!.__offset(this.bb_pos, 88);
  return offset ? (obj || new ValuesUnitAndMember()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

winddirection120m(obj?:ValuesUnitAndMember):ValuesUnitAndMember|null {
  const offset = this.bb!.__offset(this.bb_pos, 90);
  return offset ? (obj || new ValuesUnitAndMember()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

winddirection80m(obj?:ValuesUnitAndMember):ValuesUnitAndMember|null {
  const offset = this.bb!.__offset(this.bb_pos, 92);
  return offset ? (obj || new ValuesUnitAndMember()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

windgusts10m(obj?:ValuesUnitAndMember):ValuesUnitAndMember|null {
  const offset = this.bb!.__offset(this.bb_pos, 94);
  return offset ? (obj || new ValuesUnitAndMember()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

windspeed10m(obj?:ValuesUnitAndMember):ValuesUnitAndMember|null {
  const offset = this.bb!.__offset(this.bb_pos, 96);
  return offset ? (obj || new ValuesUnitAndMember()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

windspeed120m(obj?:ValuesUnitAndMember):ValuesUnitAndMember|null {
  const offset = this.bb!.__offset(this.bb_pos, 98);
  return offset ? (obj || new ValuesUnitAndMember()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

windspeed80m(obj?:ValuesUnitAndMember):ValuesUnitAndMember|null {
  const offset = this.bb!.__offset(this.bb_pos, 100);
  return offset ? (obj || new ValuesUnitAndMember()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

weathercode(obj?:ValuesUnitAndMember):ValuesUnitAndMember|null {
  const offset = this.bb!.__offset(this.bb_pos, 102);
  return offset ? (obj || new ValuesUnitAndMember()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

pressureLevelTemperature(obj?:ValuesUnitPressureLevelAndMember):ValuesUnitPressureLevelAndMember|null {
  const offset = this.bb!.__offset(this.bb_pos, 104);
  return offset ? (obj || new ValuesUnitPressureLevelAndMember()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

pressureLevelDewpoint(obj?:ValuesUnitPressureLevelAndMember):ValuesUnitPressureLevelAndMember|null {
  const offset = this.bb!.__offset(this.bb_pos, 106);
  return offset ? (obj || new ValuesUnitPressureLevelAndMember()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

pressureLevelRelativehumidity(obj?:ValuesUnitPressureLevelAndMember):ValuesUnitPressureLevelAndMember|null {
  const offset = this.bb!.__offset(this.bb_pos, 108);
  return offset ? (obj || new ValuesUnitPressureLevelAndMember()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

pressureLevelCloudcover(obj?:ValuesUnitPressureLevelAndMember):ValuesUnitPressureLevelAndMember|null {
  const offset = this.bb!.__offset(this.bb_pos, 110);
  return offset ? (obj || new ValuesUnitPressureLevelAndMember()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

pressureLevelWindspeed(obj?:ValuesUnitPressureLevelAndMember):ValuesUnitPressureLevelAndMember|null {
  const offset = this.bb!.__offset(this.bb_pos, 112);
  return offset ? (obj || new ValuesUnitPressureLevelAndMember()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

pressureLevelWinddirection(obj?:ValuesUnitPressureLevelAndMember):ValuesUnitPressureLevelAndMember|null {
  const offset = this.bb!.__offset(this.bb_pos, 114);
  return offset ? (obj || new ValuesUnitPressureLevelAndMember()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

pressureLevelVerticalVelocity(obj?:ValuesUnitPressureLevelAndMember):ValuesUnitPressureLevelAndMember|null {
  const offset = this.bb!.__offset(this.bb_pos, 116);
  return offset ? (obj || new ValuesUnitPressureLevelAndMember()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

pressureLevelGeopotentialHeight(obj?:ValuesUnitPressureLevelAndMember):ValuesUnitPressureLevelAndMember|null {
  const offset = this.bb!.__offset(this.bb_pos, 118);
  return offset ? (obj || new ValuesUnitPressureLevelAndMember()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

static startEnsembleHourly(builder:flatbuffers.Builder) {
  builder.startObject(58);
}

static addTime(builder:flatbuffers.Builder, timeOffset:flatbuffers.Offset) {
  builder.addFieldStruct(0, timeOffset, 0);
}

static addApparentTemperature(builder:flatbuffers.Builder, apparentTemperatureOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, apparentTemperatureOffset, 0);
}

static addCape(builder:flatbuffers.Builder, capeOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, capeOffset, 0);
}

static addCloudcover(builder:flatbuffers.Builder, cloudcoverOffset:flatbuffers.Offset) {
  builder.addFieldOffset(3, cloudcoverOffset, 0);
}

static addDewpoint2m(builder:flatbuffers.Builder, dewpoint2mOffset:flatbuffers.Offset) {
  builder.addFieldOffset(4, dewpoint2mOffset, 0);
}

static addDiffuseRadiation(builder:flatbuffers.Builder, diffuseRadiationOffset:flatbuffers.Offset) {
  builder.addFieldOffset(5, diffuseRadiationOffset, 0);
}

static addDiffuseRadiationInstant(builder:flatbuffers.Builder, diffuseRadiationInstantOffset:flatbuffers.Offset) {
  builder.addFieldOffset(6, diffuseRadiationInstantOffset, 0);
}

static addDirectNormalIrradiance(builder:flatbuffers.Builder, directNormalIrradianceOffset:flatbuffers.Offset) {
  builder.addFieldOffset(7, directNormalIrradianceOffset, 0);
}

static addDirectNormalIrradianceInstant(builder:flatbuffers.Builder, directNormalIrradianceInstantOffset:flatbuffers.Offset) {
  builder.addFieldOffset(8, directNormalIrradianceInstantOffset, 0);
}

static addDirectRadiation(builder:flatbuffers.Builder, directRadiationOffset:flatbuffers.Offset) {
  builder.addFieldOffset(9, directRadiationOffset, 0);
}

static addDirectRadiationInstant(builder:flatbuffers.Builder, directRadiationInstantOffset:flatbuffers.Offset) {
  builder.addFieldOffset(10, directRadiationInstantOffset, 0);
}

static addEt0FaoEvapotranspiration(builder:flatbuffers.Builder, et0FaoEvapotranspirationOffset:flatbuffers.Offset) {
  builder.addFieldOffset(11, et0FaoEvapotranspirationOffset, 0);
}

static addFreezinglevelHeight(builder:flatbuffers.Builder, freezinglevelHeightOffset:flatbuffers.Offset) {
  builder.addFieldOffset(12, freezinglevelHeightOffset, 0);
}

static addIsDay(builder:flatbuffers.Builder, isDayOffset:flatbuffers.Offset) {
  builder.addFieldOffset(13, isDayOffset, 0);
}

static addPrecipitation(builder:flatbuffers.Builder, precipitationOffset:flatbuffers.Offset) {
  builder.addFieldOffset(14, precipitationOffset, 0);
}

static addPressureMsl(builder:flatbuffers.Builder, pressureMslOffset:flatbuffers.Offset) {
  builder.addFieldOffset(15, pressureMslOffset, 0);
}

static addRain(builder:flatbuffers.Builder, rainOffset:flatbuffers.Offset) {
  builder.addFieldOffset(16, rainOffset, 0);
}

static addRelativehumidity2m(builder:flatbuffers.Builder, relativehumidity2mOffset:flatbuffers.Offset) {
  builder.addFieldOffset(17, relativehumidity2mOffset, 0);
}

static addShortwaveRadiation(builder:flatbuffers.Builder, shortwaveRadiationOffset:flatbuffers.Offset) {
  builder.addFieldOffset(18, shortwaveRadiationOffset, 0);
}

static addShortwaveRadiationInstant(builder:flatbuffers.Builder, shortwaveRadiationInstantOffset:flatbuffers.Offset) {
  builder.addFieldOffset(19, shortwaveRadiationInstantOffset, 0);
}

static addShowers(builder:flatbuffers.Builder, showersOffset:flatbuffers.Offset) {
  builder.addFieldOffset(20, showersOffset, 0);
}

static addSnowDepth(builder:flatbuffers.Builder, snowDepthOffset:flatbuffers.Offset) {
  builder.addFieldOffset(21, snowDepthOffset, 0);
}

static addSnowfall(builder:flatbuffers.Builder, snowfallOffset:flatbuffers.Offset) {
  builder.addFieldOffset(22, snowfallOffset, 0);
}

static addSoilMoisture0To10cm(builder:flatbuffers.Builder, soilMoisture0To10cmOffset:flatbuffers.Offset) {
  builder.addFieldOffset(23, soilMoisture0To10cmOffset, 0);
}

static addSoilMoisture100To200cm(builder:flatbuffers.Builder, soilMoisture100To200cmOffset:flatbuffers.Offset) {
  builder.addFieldOffset(24, soilMoisture100To200cmOffset, 0);
}

static addSoilMoisture10To40cm(builder:flatbuffers.Builder, soilMoisture10To40cmOffset:flatbuffers.Offset) {
  builder.addFieldOffset(25, soilMoisture10To40cmOffset, 0);
}

static addSoilMoisture40To100cm(builder:flatbuffers.Builder, soilMoisture40To100cmOffset:flatbuffers.Offset) {
  builder.addFieldOffset(26, soilMoisture40To100cmOffset, 0);
}

static addSoilTemperature0To10cm(builder:flatbuffers.Builder, soilTemperature0To10cmOffset:flatbuffers.Offset) {
  builder.addFieldOffset(27, soilTemperature0To10cmOffset, 0);
}

static addSoilTemperature100To200cm(builder:flatbuffers.Builder, soilTemperature100To200cmOffset:flatbuffers.Offset) {
  builder.addFieldOffset(28, soilTemperature100To200cmOffset, 0);
}

static addSoilTemperature10To40cm(builder:flatbuffers.Builder, soilTemperature10To40cmOffset:flatbuffers.Offset) {
  builder.addFieldOffset(29, soilTemperature10To40cmOffset, 0);
}

static addSoilTemperature40To100cm(builder:flatbuffers.Builder, soilTemperature40To100cmOffset:flatbuffers.Offset) {
  builder.addFieldOffset(30, soilTemperature40To100cmOffset, 0);
}

static addSurfacePressure(builder:flatbuffers.Builder, surfacePressureOffset:flatbuffers.Offset) {
  builder.addFieldOffset(31, surfacePressureOffset, 0);
}

static addSurfaceTemperature(builder:flatbuffers.Builder, surfaceTemperatureOffset:flatbuffers.Offset) {
  builder.addFieldOffset(32, surfaceTemperatureOffset, 0);
}

static addTemperature120m(builder:flatbuffers.Builder, temperature120mOffset:flatbuffers.Offset) {
  builder.addFieldOffset(33, temperature120mOffset, 0);
}

static addTemperature2m(builder:flatbuffers.Builder, temperature2mOffset:flatbuffers.Offset) {
  builder.addFieldOffset(34, temperature2mOffset, 0);
}

static addTemperature2mMax(builder:flatbuffers.Builder, temperature2mMaxOffset:flatbuffers.Offset) {
  builder.addFieldOffset(35, temperature2mMaxOffset, 0);
}

static addTemperature2mMin(builder:flatbuffers.Builder, temperature2mMinOffset:flatbuffers.Offset) {
  builder.addFieldOffset(36, temperature2mMinOffset, 0);
}

static addTemperature80m(builder:flatbuffers.Builder, temperature80mOffset:flatbuffers.Offset) {
  builder.addFieldOffset(37, temperature80mOffset, 0);
}

static addUvIndex(builder:flatbuffers.Builder, uvIndexOffset:flatbuffers.Offset) {
  builder.addFieldOffset(38, uvIndexOffset, 0);
}

static addUvIndexClearSky(builder:flatbuffers.Builder, uvIndexClearSkyOffset:flatbuffers.Offset) {
  builder.addFieldOffset(39, uvIndexClearSkyOffset, 0);
}

static addVaporPressureDeficit(builder:flatbuffers.Builder, vaporPressureDeficitOffset:flatbuffers.Offset) {
  builder.addFieldOffset(40, vaporPressureDeficitOffset, 0);
}

static addVisibility(builder:flatbuffers.Builder, visibilityOffset:flatbuffers.Offset) {
  builder.addFieldOffset(41, visibilityOffset, 0);
}

static addWinddirection10m(builder:flatbuffers.Builder, winddirection10mOffset:flatbuffers.Offset) {
  builder.addFieldOffset(42, winddirection10mOffset, 0);
}

static addWinddirection120m(builder:flatbuffers.Builder, winddirection120mOffset:flatbuffers.Offset) {
  builder.addFieldOffset(43, winddirection120mOffset, 0);
}

static addWinddirection80m(builder:flatbuffers.Builder, winddirection80mOffset:flatbuffers.Offset) {
  builder.addFieldOffset(44, winddirection80mOffset, 0);
}

static addWindgusts10m(builder:flatbuffers.Builder, windgusts10mOffset:flatbuffers.Offset) {
  builder.addFieldOffset(45, windgusts10mOffset, 0);
}

static addWindspeed10m(builder:flatbuffers.Builder, windspeed10mOffset:flatbuffers.Offset) {
  builder.addFieldOffset(46, windspeed10mOffset, 0);
}

static addWindspeed120m(builder:flatbuffers.Builder, windspeed120mOffset:flatbuffers.Offset) {
  builder.addFieldOffset(47, windspeed120mOffset, 0);
}

static addWindspeed80m(builder:flatbuffers.Builder, windspeed80mOffset:flatbuffers.Offset) {
  builder.addFieldOffset(48, windspeed80mOffset, 0);
}

static addWeathercode(builder:flatbuffers.Builder, weathercodeOffset:flatbuffers.Offset) {
  builder.addFieldOffset(49, weathercodeOffset, 0);
}

static addPressureLevelTemperature(builder:flatbuffers.Builder, pressureLevelTemperatureOffset:flatbuffers.Offset) {
  builder.addFieldOffset(50, pressureLevelTemperatureOffset, 0);
}

static addPressureLevelDewpoint(builder:flatbuffers.Builder, pressureLevelDewpointOffset:flatbuffers.Offset) {
  builder.addFieldOffset(51, pressureLevelDewpointOffset, 0);
}

static addPressureLevelRelativehumidity(builder:flatbuffers.Builder, pressureLevelRelativehumidityOffset:flatbuffers.Offset) {
  builder.addFieldOffset(52, pressureLevelRelativehumidityOffset, 0);
}

static addPressureLevelCloudcover(builder:flatbuffers.Builder, pressureLevelCloudcoverOffset:flatbuffers.Offset) {
  builder.addFieldOffset(53, pressureLevelCloudcoverOffset, 0);
}

static addPressureLevelWindspeed(builder:flatbuffers.Builder, pressureLevelWindspeedOffset:flatbuffers.Offset) {
  builder.addFieldOffset(54, pressureLevelWindspeedOffset, 0);
}

static addPressureLevelWinddirection(builder:flatbuffers.Builder, pressureLevelWinddirectionOffset:flatbuffers.Offset) {
  builder.addFieldOffset(55, pressureLevelWinddirectionOffset, 0);
}

static addPressureLevelVerticalVelocity(builder:flatbuffers.Builder, pressureLevelVerticalVelocityOffset:flatbuffers.Offset) {
  builder.addFieldOffset(56, pressureLevelVerticalVelocityOffset, 0);
}

static addPressureLevelGeopotentialHeight(builder:flatbuffers.Builder, pressureLevelGeopotentialHeightOffset:flatbuffers.Offset) {
  builder.addFieldOffset(57, pressureLevelGeopotentialHeightOffset, 0);
}

static endEnsembleHourly(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  builder.requiredField(offset, 4) // time
  return offset;
}

}
