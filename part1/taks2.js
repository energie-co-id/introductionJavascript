let ipa = 90;
let mtk = 80.7;
let indo = 68.4;
let ing = 70.2;
let num1 = parseFloat(ipa);
let num2 = parseFloat(mtk);
let num3 = parseFloat(indo);
let num4 = parseFloat(ing);
let nilai = (num1 + num2 + num3 + num4) / 4;
let grade = ["A", "B", "C", "D", "E", "Nilai belum lengkap"]
if (nilai >= 90) {
    grade = "A"
} else if (nilai >= 80) {
    grade = grade[1]
} else if (nilai >= 70) {
    grade = grade[2]
} else if (nilai >= 60) {
    grade = grade[3]
} else if (nilai >= 0) {
    grade = grade[4]
} else {
    grade = grade[5]
}

console.log("rata rata = " + nilai + "\n" + "grade = " + grade)