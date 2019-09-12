import faker from "faker";

const
  germline_array = ["unclassified", "path", "lpath", "vus", "lben", "ben"],
  somatic_array = ["unclassified", "tier1", "tier2", "tier3", "tier4"];

export const generateHistoryTableMockData = amount =>
  Array.from(new Array(amount), () => {
    let id = faker.random.alphaNumeric(25);
    const result = {
      id: id,
      gene: faker.random.arrayElement([
        "A1BG",
        "A1BG-AS1",
        "A1CF",
        "A2M",
        "A2M-AS1",
        "A2ML1",
        "A2ML1-AS1",
        "A2ML1-AS2",
        "A2MP1",
        "A3GALT2",
        "A4GALT",
        "A4GNT",
        "A12M1",
        "A12M2",
        "A12M3",
        "A12M4",
        "AAAS",
        "AABT",
        "AACS",
        "AACSP1",
        "AADAC",
        "AADACL2",
        "AADACL2-AS1",
        "AADACL3",
        "AADACL4",
        "AADACP1",
        "AADAT",
        "AAGAB",
        "AAK1",
        "AAMDC",
        "AAMP",
        "AANAT",
        "AAR2",
        "AARD",
        "AARS",
        "AARS2",
        "AARSD1",
        "AARSP1",
        "AASDH",
        "AASDHPPT",
        "AASS",
        "AATBC",
        "AATF",
        "AATK",
        "AAVS1",
        "ABALON",
        "ABAT",
        "ABCA1",
        "ABCA2",
        "ABCA3",
        "ABCA4",
        "ABCA5",
        "ABCA6",
        "ABCA7",
        "ABCA8",
        "ABCA9",
        "ABCA9-AS1",
        "ABCA10",
        "ABCA11P",
        "ABCA12",
        "ABCA13",
        "ABCA17P",
        "ABCB1",
        "ABCB4",
        "ABCB5",
        "ABCB6",
        "ABCB7",
        "ABCB8",
        "ABCB9",
        "ABCB10",
        "ABCB10P1",
        "ABCB10P3",
        "ABCB10P4",
        "ABCB11",
        "ABCC1",
        "ABCC2",
        "ABCC3",
        "ABCC4",
        "ABCC5",
        "ABCC5-AS1",
        "ABCC6",
        "ABCC6P1",
        "ABCC6P2",
        "ABCC8",
        "ABCC9",
        "ABCC10",
        "ABCC11",
        "ABCC12",
        "ABCC13",
        "ABCD1",
        "ABCD1P1",
        "ABCD1P2",
        "ABCD1P3",
        "ABCD1P4",
        "ABCD1P5",
        "ABCD2",
        "ABCD3",
        "ABCD4",
        "ABCE1",
        "ABCF1",
        "ABCF1-DT",
        "ABCF2",
        "ABCF2P1",
        "ABCF2P2",
        "ABCF3",
        "ABCG1",
        "ABCG2",
        "ABCG4",
        "ABCG5",
        "ABCG8",
        "ABHD1",
        "ABHD2",
        "ABHD3",
        "ABHD4",
        "ABHD5",
        "ABHD6",
        "ABHD8",
        "ABHD10",
        "ABHD11",
        "ABHD11-AS1",
        "ABHD11-AS2",
        "ABHD12",
        "ABHD12B",
        "ABHD13",
        "ABHD14A",
        "ABHD14A-ACY1",
        "ABHD14B",
        "ABHD15",
        "ABHD15-AS1",
        "ABHD16A",
        "ABHD16B",
        "ABHD17A",
        "ABHD17AP1",
        "ABHD17AP3",
        "ABHD17AP4",
        "ABHD17AP5",
        "ABHD17AP6",
        "ABHD17AP7",
        "ABHD17AP8",
        "ABHD17AP9",
        "ABHD17B",
        "ABHD17C",
        "ABHD18",
        "ABI1",
        "ABI1P1",
        "ABI2",
        "ABI3",
        "ABI3BP",
        "ABITRAM",
        "ABITRAMP1",
        "ABL1",
        "ABL2",
        "ABLIM1",
        "ABLIM2",
        "ABLIM3",
        "ABO",
        "ABR",
        "ABRA",
        "ABRACL",
        "ABRAXAS1",
        "ABRAXAS2",
        "ABT1",
        "ABT1P1",
        "ABTB1",
        "ABTB2",
        "ACAA1",
        "ACAA2",
        "ACACA",
        "ACACB",
        "ACAD",
        "ACAD8",
        "ACAD9",
        "ACAD10",
        "ACAD11",
        "ACADL",
        "ACADM",
        "ACADS",
        "ACADSB",
        "ACADVL",
        "ACAN",
        "ACAP1",
        "ACAP2",
        "ACAP2-IT1",
        "ACAP3",
        "ACAT1",
        "ACAT2",
        "ACBD3",
        "ACBD3-AS1",
        "ACBD4",
        "ACBD5",
        "ACBD6",
        "ACBD7",
        "ACCS",
        "ACCSL",
        "ACD",
        "ACE",
        "ACE2",
        "ACE3P",
        "ACER1",
        "ACER2",
        "ACER3",
        "ACHE",
        "ACIN1",
        "ACKR1",
        "ACKR2",
        "ACKR3",
        "ACKR4",
        "ACKR4P1",
        "ACLS",
        "ACLY",
        "ACMG",
        "ACMSD",
        "ACNATP",
        "ACO1",
        "ACO2",
        "ACOD1",
        "ACOT1",
        "ACOT2",
        "ACOT4",
        "ACOT6",
        "ACOT7",
        "ACOT8",
        "ACOT9",
        "ACOT11",
        "ACOT12",
        "ACOT13",
        "ACOX1",
        "ACOX2",
        "ACOX3",
        "ACOXL",
        "ACOXL-AS1",
        "ACP1",
        "ACP2",
        "ACP4",
        "ACP5",
        "ACP6",
        "ACP7",
        "ACPP",
        "ACR",
        "ACRBP",
        "ACRV1",
        "ACSBG1",
        "ACSBG2",
        "ACSF2",
        "ACSF3",
        "ACSL1",
        "ACSL3",
        "ACSL4",
        "ACSL5",
        "ACSL6",
        "ACSM1",
        "ACSM2A",
        "ACSM2B",
        "ACSM3",
        "ACSM4",
        "ACSM5",
        "ACSM5P1",
        "ACSM6",
        "ACSS1",
        "ACSS2",
        "ACSS3",
        "ACTA1",
        "ACTA2",
        "ACTA2-AS1",
        "ACTB",
        "ACTBL2",
        "ACTBP1",
        "ACTBP2",
        "ACTBP3",
        "ACTBP4",
        "ACTBP5",
        "ACTBP6",
        "ACTBP7",
        "ACTBP8",
        "ACTBP9",
        "ACTBP10",
        "ACTBP11",
        "ACTBP12",
        "ACTBP13",
        "ACTBP14",
        "ACTC1",
        "ACTG1",
        "ACTG1P1",
        "ACTG1P2",
        "ACTG1P3",
        "ACTG1P4",
        "ACTG1P6",
        "ACTG1P7",
        "ACTG1P8",
        "ACTG1P9",
        "ACTG1P10",
        "ACTG1P11",
        "ACTG1P12",
        "ACTG1P13",
        "ACTG1P14",
        "ACTG1P15",
        "ACTG1P16",
        "ACTG1P17",
        "ACTG1P18",
        "ACTG1P19",
        "ACTG1P20",
        "ACTG1P21",
        "ACTG1P22",
        "ACTG1P23",
        "ACTG1P24",
        "ACTG2",
        "ACTL4",
        "ACTL5",
        "ACTL6A",
        "ACTL6B",
        "ACTL7A",
        "ACTL7B",
        "ACTL8",
        "ACTL9",
        "ACTL10",
        "ACTN1",
        "ACTN1-AS1",
        "ACTN2",
        "ACTN3",
        "ACTN4",
        "ACTN4P1",
        "ACTN4P2",
        "ACTP1",
        "ACTR1A",
        "ACTR1B",
        "ACTR2",
        "ACTR3",
        "ACTR3-AS1",
        "ACTR3B",
        "ACTR3BP1",
        "ACTR3BP2",
        "ACTR3BP3",
        "ACTR3BP4",
        "ACTR3BP5",
        "ACTR3BP6",
        "ACTR3C",
        "ACTR3P1",
        "ACTR3P2",
        "ACTR3P3",
        "ACTR5",
        "ACTR6",
        "ACTR6P1",
        "ACTR8",
        "ACTR10",
        "ACTRT1",
        "ACTRT2",
        "ACTRT3",
        "ACVR1",
        "ACVR1B",
        "ACVR1C",
        "ACVR2A",
        "ACVR2B",
        "ACVR2B-AS1",
        "ACVRL1",
        "ACY1",
        "ACY3",
        "ACYP1",
        "ACYP2",
        "AD5",
        "ADA",
        "ADA2",
        "ADAD1",
        "ADAD1P1",
        "ADAD1P2",
        "ADAD2",
        "ADAL",
        "ADAM1A",
        "ADAM1B",
        "ADAM2",
        "ADAM3A",
        "ADAM3B",
        "ADAM5",
        "ADAM6",
        "ADAM7",
        "ADAM8",
        "ADAM9",
        "ADAM10",
        "ADAM11",
        "ADAM12",
        "ADAM12-OT1",
        "ADAM15",
        "ADAM17",
        "ADAM18",
        "ADAM19",
        "ADAM20",
        "ADAM20P1",
        "ADAM20P2",
        "ADAM20P3",
        "ADAM21",
        "ADAM21P1",
        "ADAM22",
        "ADAM23",
        "ADAM24P",
        "ADAM28",
        "ADAM29",
        "ADAM30",
        "ADAM32",
        "ADAM33",
        "ADAMDEC1",
        "ADAMTS1",
        "ADAMTS2",
        "ADAMTS3",
        "ADAMTS4",
        "ADAMTS5",
        "ADAMTS6",
        "ADAMTS7",
        "ADAMTS7P1",
        "ADAMTS7P3",
        "ADAMTS7P4",
        "ADAMTS8",
        "ADAMTS9",
        "ADAMTS9-AS1",
        "ADAMTS9-AS2",
        "ADAMTS10",
        "ADAMTS12",
        "ADAMTS13",
        "ADAMTS14",
        "ADAMTS15",
        "ADAMTS16",
        "ADAMTS17",
        "ADAMTS18",
        "ADAMTS19",
        "ADAMTS19-AS1",
        "ADAMTS20",
        "ADAMTSL1",
        "ADAMTSL2",
        "ADAMTSL3",
        "ADAMTSL4",
        "ADAMTSL4-AS1",
        "ADAMTSL5",
        "ADAP1",
        "ADAP2",
        "ADAR",
        "ADARB1",
        "ADARB2",
        "ADARB2-AS1",
        "ADAT1",
        "ADAT2",
        "ADAT3",
        "ADCK1",
        "ADCK2",
        "ADCK5",
        "ADCP1",
        "ADCY1",
        "ADCY2",
        "ADCY3",
        "ADCY4",
        "ADCY5",
        "ADCY6",
        "ADCY7",
        "ADCY8",
        "ADCY9",
        "ADCY10",
        "ADCY10P1",
        "ADCYAP1",
        "ADCYAP1R1",
        "ADD1",
        "ADD2",
        "ADD3",
        "ADD3-AS1",
        "ADFN",
        "ADGB",
        "ADGRA1",
        "ADGRA1-AS1",
        "ADGRA2",
        "ADGRA3",
        "ADGRB1",
        "ADGRB2",
        "ADGRB3",
        "ADGRD1",
        "ADGRD1-AS1",
        "ADGRD2",
        "ADGRE1",
        "ADGRE2",
        "ADGRE3",
        "ADGRE4P",
        "ADGRE5",
        "ADGRF1",
        "ADGRF2",
        "ADGRF3",
        "ADGRF4",
        "ADGRF5",
        "ADGRF5P1",
        "ADGRF5P2",
        "ADGRG1",
        "ADGRG2",
        "ADGRG3",
        "ADGRG4",
        "ADGRG5",
        "ADGRG6",
        "ADGRG7",
        "ADGRL1",
        "ADGRL2",
        "ADGRL3",
        "ADGRL3-AS1",
        "ADGRL4",
        "ADGRV1",
        "ADH1A",
        "ADH1B",
        "ADH1C"
      ]),
      alt: faker.random.arrayElement([
        "C.sdsff",
        "T.DFGvb",
        "GADER.css11",
        "AdfR45"
      ]),
      ref: faker.random.arrayElement([
        "C.sdsff",
        "T.DFGvb",
        "GADER.css11",
        "AdfR45"
      ]),
      chr: `chr${faker.random.number({
        min: 1,
        max: 5
      })}`,
      position: faker.random.number({ min: 100000, max: 350000 }),
      test_id: faker.random.alphaNumeric(25),
      gsid: faker.random.alphaNumeric(25),
      user: {
        user_id: faker.random.alphaNumeric(25),
        name: `${faker.name.firstName("1")} ${faker.name.lastName("1")}`,
        pic_url: null
      },
      zygosity_type: faker.random.arrayElement(["somatic", "germline"]),
      created_at: `${faker.date.past(3).toISOString()}`
    };
  
    result.zygosity_type === "somatic" ?
      result.class = faker.random.arrayElement(somatic_array) :
      result.class = faker.random.arrayElement(germline_array);
  
    return result;
  });