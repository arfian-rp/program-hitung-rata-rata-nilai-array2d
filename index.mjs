for (let rata of getRataRata([
  [88, 67, 95, 77, 74, 93],
  [88, 76, 72],
  [74, 66, 88, 24, 55, 68],
  [85, 77, 74, 85, 84],
  [77, 88, 84, 77, 65],
])) {
  console.info(rata);
}

function* getRataRata(nilai) {
  let totalNilai = 0;
  for (let i = 0; i <= nilai.length - 1; i++) {
    let totalNilaiSemester = 0;
    for (let j = 0; j <= nilai[i].length - 1; j++) {
      totalNilaiSemester += nilai[i][j];
    }
    let rataSms = totalNilaiSemester / nilai[i].length;
    yield `SEMESTER KE ${i + 1} : ${rataSms}`;
    totalNilai += rataSms;
  }
  yield `RATA RATA : ${totalNilai / nilai.length}`;
}
