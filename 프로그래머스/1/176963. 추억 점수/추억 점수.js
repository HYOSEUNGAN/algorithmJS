function solution(name, yearning, photo) {
  return photo.map((eachPhoto) => {
    const sum = eachPhoto.reduce((acc, val) => {
      const point = yearning[name.indexOf(val)] ?? 0;
      return acc + point
    }, 0)

    return sum
  });
}