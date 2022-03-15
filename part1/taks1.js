const name = "Jauhar Maknun Adib"
let age = 22
let hobbies = ["bermain game", "nonton film", "jalan jalan"]
let ismarried = false
const SD = {
    schoolname: "SDIT Assabar",
    yearin: "2005",
    yearout: "2011",
    major: null
}
const SMP = {
    schoolname: "SMP A.Wahid Hasyim",
    yearin: "2011",
    yearout: "2014",
    major: null
}
let SMA = {
    schoolname: "SMA Trensains",
    yearin: "2014",
    yearout: "2017",
    major: "IPA"
}
const Kuliah = {
    schoolname: "Universitas Indonesia",
    yearin: "2017",
    yearout: "2022",
    major: "Geofisika"
}

let schoollist = [SD, SMP, SMA, Kuliah]
let skill = [{ skillname: "python", level: "intermediate" }, { skillname: "arcgis", level: "intermediate" }, { skillname: "JavaScript", level: "beginer" }]
let interestincoding = true

const biodata = { name, age, hobbies, ismarried, schoollist, skill, interestincoding }

console.log(biodata)