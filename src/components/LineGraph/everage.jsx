const calculateAverage = (dataPoints) => {
  const sum = dataPoints.reduce((acc, point) => acc + point.y, 0);
  return sum / dataPoints.length;
};
// const min = 0;
// const max = Math.max(...data.map(d=> d.points.length));

export default function everage({ data, pointsInInterval = 24 }) {
  const newData = data.map((sensor) => {
    const averagedPoints = [];
    const numPointsInitial = sensor.points.length;
    const numPointsPerInterval =
      Math.floor(numPointsInitial / pointsInInterval) || 1;
    for (let i = 0; i < numPointsInitial; i += numPointsPerInterval) {
      const pointsSlice = sensor.points.slice(i, i + numPointsPerInterval);
      console.log({
        p: pointsSlice[0],
        numPointsInitial,
        i,
        numPointsPerInterval,
      });
      const avgY = calculateAverage(pointsSlice);
      averagedPoints.push({ x: pointsSlice[0]?.x, y: avgY });
    }
    return { ...sensor, points: averagedPoints };
  });

  console.log("newData", newData);

  return newData;
}
