import createReducer from "./createReducer";
import actionsTypes from "../actionsTypes";
// import { generateCoverageTableMockData } from "Utils/coverage-data-generator";
import { TEXTS } from "Utils/constants";

const initialState = {
  data: [],
  uncheckConfirmationData: null,
  isLoading: false
};

const coveragePageReducer = createReducer(initialState, {

  [actionsTypes.SET_COVERAGE_TABLE_REDUCER_LOADING]: (state, { payload }) => {
    return {
      ...state,
      isLoading: payload
    };
  },

  [actionsTypes.FETCH_COVERAGE_TABLE_DATA]: (state) => {
    return {
      ...state,
      data: [
        {
          "Gene": "MTOR",
          "Chr": "chr1",
          "Start": "11167437",
          "End": "11167617",
          "MinCoverage": "131",
          "MaxCoverage": "2892",
          "TotCoverage": "58383",
          "MeanCoverage": "324.35"
        },
        {
          "Gene": "MTOR",
          "Chr": "chr1",
          "Start": "11168170",
          "End": "11168410",
          "MinCoverage": "171",
          "MaxCoverage": "7248",
          "TotCoverage": "117475",
          "MeanCoverage": "489.4791666666667"
        },
        {
          "Gene": "MTOR",
          "Chr": "chr1",
          "Start": "11169296",
          "End": "11169476",
          "MinCoverage": "152",
          "MaxCoverage": "5385",
          "TotCoverage": "85755",
          "MeanCoverage": "476.4166666666667"
        },
        {
          "Gene": "MTOR",
          "Chr": "chr1",
          "Start": "11169655",
          "End": "11169835",
          "MinCoverage": "91",
          "MaxCoverage": "3464",
          "TotCoverage": "62712",
          "MeanCoverage": "348.4"
        },
        {
          "Gene": "MTOR",
          "Chr": "chr1",
          "Start": "11172851",
          "End": "11173031",
          "MinCoverage": "377",
          "MaxCoverage": "5136",
          "TotCoverage": "208562",
          "MeanCoverage": "1158.6777777777777"
        },
        {
          "Gene": "MTOR",
          "Chr": "chr1",
          "Start": "11174331",
          "End": "11174571",
          "MinCoverage": "188",
          "MaxCoverage": "4890",
          "TotCoverage": "94538",
          "MeanCoverage": "393.90833333333336"
        },
        {
          "Gene": "MTOR",
          "Chr": "chr1",
          "Start": "11174816",
          "End": "11174996",
          "MinCoverage": "233",
          "MaxCoverage": "3751",
          "TotCoverage": "53325",
          "MeanCoverage": "296.25"
        },
        {
          "Gene": "MTOR",
          "Chr": "chr1",
          "Start": "11175398",
          "End": "11175578",
          "MinCoverage": "134",
          "MaxCoverage": "3267",
          "TotCoverage": "67083",
          "MeanCoverage": "372.68333333333334"
        },
        {
          "Gene": "MTOR",
          "Chr": "chr1",
          "Start": "11177011",
          "End": "11177191",
          "MinCoverage": "231",
          "MaxCoverage": "4650",
          "TotCoverage": "124917",
          "MeanCoverage": "693.9833333333333"
        },
        {
          "Gene": "MTOR",
          "Chr": "chr1",
          "Start": "11181243",
          "End": "11181483",
          "MinCoverage": "395",
          "MaxCoverage": "6555",
          "TotCoverage": "233995",
          "MeanCoverage": "974.9791666666666"
        },
        {
          "Gene": "MTOR",
          "Chr": "chr1",
          "Start": "11181989",
          "End": "11182229",
          "MinCoverage": "212",
          "MaxCoverage": "2920",
          "TotCoverage": "123986",
          "MeanCoverage": "516.6083333333333"
        },
        {
          "Gene": "MTOR",
          "Chr": "chr1",
          "Start": "11184502",
          "End": "11184742",
          "MinCoverage": "225",
          "MaxCoverage": "4740",
          "TotCoverage": "70206",
          "MeanCoverage": "292.525"
        },
        {
          "Gene": "MTOR",
          "Chr": "chr1",
          "Start": "11186645",
          "End": "11186885",
          "MinCoverage": "138",
          "MaxCoverage": "6000",
          "TotCoverage": "98743",
          "MeanCoverage": "411.4291666666667"
        },
        {
          "Gene": "MTOR",
          "Chr": "chr1",
          "Start": "11187013",
          "End": "11187253",
          "MinCoverage": "406",
          "MaxCoverage": "5958",
          "TotCoverage": "147117",
          "MeanCoverage": "612.9875"
        },
        {
          "Gene": "MTOR",
          "Chr": "chr1",
          "Start": "11187651",
          "End": "11187891",
          "MinCoverage": "168",
          "MaxCoverage": "5949",
          "TotCoverage": "102125",
          "MeanCoverage": "425.5208333333333"
        },
        {
          "Gene": "MTOR",
          "Chr": "chr1",
          "Start": "11188001",
          "End": "11188241",
          "MinCoverage": "214",
          "MaxCoverage": "5139",
          "TotCoverage": "106938",
          "MeanCoverage": "445.575"
        },
        {
          "Gene": "MTOR",
          "Chr": "chr1",
          "Start": "11188469",
          "End": "11188649",
          "MinCoverage": "226",
          "MaxCoverage": "7073",
          "TotCoverage": "133109",
          "MeanCoverage": "739.4944444444444"
        },
        {
          "Gene": "MTOR",
          "Chr": "chr1",
          "Start": "11188869",
          "End": "11189049",
          "MinCoverage": "66",
          "MaxCoverage": "4560",
          "TotCoverage": "36883",
          "MeanCoverage": "204.90555555555557"
        },
        {
          "Gene": "MTOR",
          "Chr": "chr1",
          "Start": "11189702",
          "End": "11189942",
          "MinCoverage": "82",
          "MaxCoverage": "5396",
          "TotCoverage": "56083",
          "MeanCoverage": "233.67916666666667"
        },
        {
          "Gene": "MTOR",
          "Chr": "chr1",
          "Start": "11190505",
          "End": "11190685",
          "MinCoverage": "420",
          "MaxCoverage": "2994",
          "TotCoverage": "161907",
          "MeanCoverage": "899.4833333333333"
        },
        {
          "Gene": "MTOR",
          "Chr": "chr1",
          "Start": "11190712",
          "End": "11190892",
          "MinCoverage": "407",
          "MaxCoverage": "4700",
          "TotCoverage": "179867",
          "MeanCoverage": "999.2611111111111"
        },
        {
          "Gene": "MTOR",
          "Chr": "chr1",
          "Start": "11193075",
          "End": "11193315",
          "MinCoverage": "595",
          "MaxCoverage": "4990",
          "TotCoverage": "196092",
          "MeanCoverage": "817.05"
        },
        {
          "Gene": "MTOR",
          "Chr": "chr1",
          "Start": "11194345",
          "End": "11194585",
          "MinCoverage": "139",
          "MaxCoverage": "1636",
          "TotCoverage": "64088",
          "MeanCoverage": "267.03333333333336"
        },
        {
          "Gene": "MTOR",
          "Chr": "chr1",
          "Start": "11199306",
          "End": "11199772",
          "MinCoverage": "280",
          "MaxCoverage": "5089",
          "TotCoverage": "260334",
          "MeanCoverage": "558.6566523605151"
        },
        {
          "Gene": "MTOR",
          "Chr": "chr1",
          "Start": "11204638",
          "End": "11204878",
          "MinCoverage": "354",
          "MaxCoverage": "6235",
          "TotCoverage": "197242",
          "MeanCoverage": "821.8416666666667"
        },
        {
          "Gene": "MTOR",
          "Chr": "chr1",
          "Start": "11204973",
          "End": "11205153",
          "MinCoverage": "252",
          "MaxCoverage": "9320",
          "TotCoverage": "147919",
          "MeanCoverage": "821.7722222222222"
        },
        {
          "Gene": "MTOR",
          "Chr": "chr1",
          "Start": "11206670",
          "End": "11206910",
          "MinCoverage": "136",
          "MaxCoverage": "6798",
          "TotCoverage": "109987",
          "MeanCoverage": "458.27916666666664"
        },
        {
          "Gene": "MTOR",
          "Chr": "chr1",
          "Start": "11210112",
          "End": "11210352",
          "MinCoverage": "168",
          "MaxCoverage": "3825",
          "TotCoverage": "70118",
          "MeanCoverage": "292.15833333333336"
        },
        {
          "Gene": "MTOR",
          "Chr": "chr1",
          "Start": "11217158",
          "End": "11217398",
          "MinCoverage": "326",
          "MaxCoverage": "4956",
          "TotCoverage": "164846",
          "MeanCoverage": "686.8583333333333"
        },
        {
          "Gene": "MTOR",
          "Chr": "chr1",
          "Start": "11227446",
          "End": "11227626",
          "MinCoverage": "249",
          "MaxCoverage": "7794",
          "TotCoverage": "113420",
          "MeanCoverage": "630.1111111111111"
        },
        {
          "Gene": "MTOR",
          "Chr": "chr1",
          "Start": "11259267",
          "End": "11259507",
          "MinCoverage": "262",
          "MaxCoverage": "4550",
          "TotCoverage": "98101",
          "MeanCoverage": "408.75416666666666"
        },
        {
          "Gene": "MTOR",
          "Chr": "chr1",
          "Start": "11259558",
          "End": "11259798",
          "MinCoverage": "215",
          "MaxCoverage": "4158",
          "TotCoverage": "76803",
          "MeanCoverage": "320.0125"
        },
        {
          "Gene": "MTOR",
          "Chr": "chr1",
          "Start": "11264568",
          "End": "11264808",
          "MinCoverage": "600",
          "MaxCoverage": "6987",
          "TotCoverage": "404550",
          "MeanCoverage": "1685.625"
        },
        {
          "Gene": "MTOR",
          "Chr": "chr1",
          "Start": "11269321",
          "End": "11269561",
          "MinCoverage": "266",
          "MaxCoverage": "13904",
          "TotCoverage": "131481",
          "MeanCoverage": "547.8375"
        },
        {
          "Gene": "MTOR",
          "Chr": "chr1",
          "Start": "11270826",
          "End": "11271006",
          "MinCoverage": "87",
          "MaxCoverage": "4284",
          "TotCoverage": "43682",
          "MeanCoverage": "242.67777777777778"
        },
        {
          "Gene": "MTOR",
          "Chr": "chr1",
          "Start": "11272329",
          "End": "11272569",
          "MinCoverage": "297",
          "MaxCoverage": "4392",
          "TotCoverage": "97434",
          "MeanCoverage": "405.975"
        },
        {
          "Gene": "MTOR",
          "Chr": "chr1",
          "Start": "11272788",
          "End": "11273028",
          "MinCoverage": "152",
          "MaxCoverage": "3816",
          "TotCoverage": "85901",
          "MeanCoverage": "357.92083333333335"
        },
        {
          "Gene": "MTOR",
          "Chr": "chr1",
          "Start": "11273419",
          "End": "11273659",
          "MinCoverage": "263",
          "MaxCoverage": "7065",
          "TotCoverage": "89195",
          "MeanCoverage": "371.6458333333333"
        },
        {
          "Gene": "MTOR",
          "Chr": "chr1",
          "Start": "11276157",
          "End": "11276337",
          "MinCoverage": "180",
          "MaxCoverage": "2695",
          "TotCoverage": "52745",
          "MeanCoverage": "293.02777777777777"
        },
        {
          "Gene": "MTOR",
          "Chr": "chr1",
          "Start": "11288699",
          "End": "11288999",
          "MinCoverage": "132",
          "MaxCoverage": "5525",
          "TotCoverage": "72658",
          "MeanCoverage": "242.19333333333333"
        },
        {
          "Gene": "MTOR",
          "Chr": "chr1",
          "Start": "11290926",
          "End": "11291166",
          "MinCoverage": "142",
          "MaxCoverage": "7752",
          "TotCoverage": "124872",
          "MeanCoverage": "520.3"
        },
        {
          "Gene": "MTOR",
          "Chr": "chr1",
          "Start": "11291303",
          "End": "11291543",
          "MinCoverage": "119",
          "MaxCoverage": "6064",
          "TotCoverage": "73372",
          "MeanCoverage": "305.71666666666664"
        },
        {
          "Gene": "MTOR",
          "Chr": "chr1",
          "Start": "11292448",
          "End": "11292628",
          "MinCoverage": "105",
          "MaxCoverage": "5434",
          "TotCoverage": "49869",
          "MeanCoverage": "277.05"
        },
        {
          "Gene": "MTOR",
          "Chr": "chr1",
          "Start": "11293409",
          "End": "11293589",
          "MinCoverage": "242",
          "MaxCoverage": "4732",
          "TotCoverage": "88272",
          "MeanCoverage": "490.4"
        },
        {
          "Gene": "MTOR",
          "Chr": "chr1",
          "Start": "11294140",
          "End": "11294380",
          "MinCoverage": "128",
          "MaxCoverage": "2592",
          "TotCoverage": "52560",
          "MeanCoverage": "219.0"
        },
        {
          "Gene": "MTOR",
          "Chr": "chr1",
          "Start": "11297882",
          "End": "11298122",
          "MinCoverage": "416",
          "MaxCoverage": "3840",
          "TotCoverage": "198345",
          "MeanCoverage": "826.4375"
        },
        {
          "Gene": "MTOR",
          "Chr": "chr1",
          "Start": "11298446",
          "End": "11298686",
          "MinCoverage": "181",
          "MaxCoverage": "5036",
          "TotCoverage": "181811",
          "MeanCoverage": "757.5458333333333"
        },
        {
          "Gene": "MTOR",
          "Chr": "chr1",
          "Start": "11300331",
          "End": "11300631",
          "MinCoverage": "171",
          "MaxCoverage": "3448",
          "TotCoverage": "231402",
          "MeanCoverage": "771.34"
        },
        {
          "Gene": "MTOR",
          "Chr": "chr1",
          "Start": "11301553",
          "End": "11301793",
          "MinCoverage": "318",
          "MaxCoverage": "5934",
          "TotCoverage": "199580",
          "MeanCoverage": "831.5833333333334"
        },
        {
          "Gene": "MTOR",
          "Chr": "chr1",
          "Start": "11303143",
          "End": "11303383",
          "MinCoverage": "313",
          "MaxCoverage": "6864",
          "TotCoverage": "108678",
          "MeanCoverage": "452.825"
        },
        {
          "Gene": "MTOR",
          "Chr": "chr1",
          "Start": "11307615",
          "End": "11307855",
          "MinCoverage": "266",
          "MaxCoverage": "8144",
          "TotCoverage": "152277",
          "MeanCoverage": "634.4875"
        },
        {
          "Gene": "MTOR",
          "Chr": "chr1",
          "Start": "11307863",
          "End": "11308163",
          "MinCoverage": "338",
          "MaxCoverage": "6650",
          "TotCoverage": "174551",
          "MeanCoverage": "581.8366666666667"
        },
        {
          "Gene": "MTOR",
          "Chr": "chr1",
          "Start": "11313842",
          "End": "11314082",
          "MinCoverage": "393",
          "MaxCoverage": "9630",
          "TotCoverage": "189881",
          "MeanCoverage": "791.1708333333333"
        },
        {
          "Gene": "MTOR",
          "Chr": "chr1",
          "Start": "11316028",
          "End": "11316268",
          "MinCoverage": "233",
          "MaxCoverage": "6501",
          "TotCoverage": "107906",
          "MeanCoverage": "449.60833333333335"
        },
        {
          "Gene": "MTOR",
          "Chr": "chr1",
          "Start": "11316955",
          "End": "11317255",
          "MinCoverage": "93",
          "MaxCoverage": "7900",
          "TotCoverage": "288201",
          "MeanCoverage": "960.67"
        },
        {
          "Gene": "MTOR",
          "Chr": "chr1",
          "Start": "11318475",
          "End": "11318715",
          "MinCoverage": "294",
          "MaxCoverage": "5646",
          "TotCoverage": "164153",
          "MeanCoverage": "683.9708333333333"
        },
        {
          "Gene": "MTOR",
          "Chr": "chr1",
          "Start": "11319265",
          "End": "11319505",
          "MinCoverage": "521",
          "MaxCoverage": "7020",
          "TotCoverage": "316343",
          "MeanCoverage": "1318.0958333333333"
        },
        {
          "Gene": "CAPZB",
          "Chr": "chr1",
          "Start": "19683194",
          "End": "19683374",
          "MinCoverage": "137",
          "MaxCoverage": "3520",
          "TotCoverage": "54593",
          "MeanCoverage": "303.2944444444444"
        },
        {
          "Gene": "MINOS1-NBL1",
          "Chr": "chr1",
          "Start": "19956958",
          "End": "19957284",
          "MinCoverage": "24",
          "MaxCoverage": "1928",
          "TotCoverage": "35737",
          "MeanCoverage": "109.62269938650307"
        },
        {
          "Gene": "ECE1",
          "Chr": "chr1",
          "Start": "21628454",
          "End": "21628634",
          "MinCoverage": "48",
          "MaxCoverage": "2574",
          "TotCoverage": "39359",
          "MeanCoverage": "218.6611111111111"
        },
        {
          "Gene": "WNT4",
          "Chr": "chr1",
          "Start": "22459079",
          "End": "22459259",
          "MinCoverage": "51",
          "MaxCoverage": "1239",
          "TotCoverage": "47688",
          "MeanCoverage": "264.93333333333334"
        },
        {
          "Gene": "EPHB2",
          "Chr": "chr1",
          "Start": "23210509",
          "End": "23210689",
          "MinCoverage": "288",
          "MaxCoverage": "4179",
          "TotCoverage": "99146",
          "MeanCoverage": "550.8111111111111"
        },
        {
          "Gene": "chr1:24867980-24868159",
          "Chr": "chr1",
          "Start": "24867979",
          "End": "24868159",
          "MinCoverage": "169",
          "MaxCoverage": "2954",
          "TotCoverage": "64118",
          "MeanCoverage": "356.2111111111111"
        },
        {
          "Gene": "CLIC4",
          "Chr": "chr1",
          "Start": "25168033",
          "End": "25168213",
          "MinCoverage": "352",
          "MaxCoverage": "4662",
          "TotCoverage": "100953",
          "MeanCoverage": "560.85"
        },
        {
          "Gene": "LDLRAP1",
          "Chr": "chr1",
          "Start": "25895147",
          "End": "25895327",
          "MinCoverage": "156",
          "MaxCoverage": "3605",
          "TotCoverage": "78664",
          "MeanCoverage": "437.02222222222224"
        },
        {
          "Gene": "STMN1",
          "Chr": "chr1",
          "Start": "26213900",
          "End": "26214080",
          "MinCoverage": "139",
          "MaxCoverage": "3201",
          "TotCoverage": "48910",
          "MeanCoverage": "271.72222222222223"
        },
        {
          "Gene": "NR0B2",
          "Chr": "chr1",
          "Start": "27238059",
          "End": "27238239",
          "MinCoverage": "196",
          "MaxCoverage": "5510",
          "TotCoverage": "69403",
          "MeanCoverage": "385.5722222222222"
        },
        {
          "Gene": "THEMIS2",
          "Chr": "chr1",
          "Start": "28212884",
          "End": "28213064",
          "MinCoverage": "107",
          "MaxCoverage": "5076",
          "TotCoverage": "109647",
          "MeanCoverage": "609.15"
        },
        {
          "Gene": "EPB41",
          "Chr": "chr1",
          "Start": "29245315",
          "End": "29245495",
          "MinCoverage": "132",
          "MaxCoverage": "4014",
          "TotCoverage": "70865",
          "MeanCoverage": "393.69444444444446"
        },
        {
          "Gene": "chr1:31331631-31332053",
          "Chr": "chr1",
          "Start": "31331630",
          "End": "31332053",
          "MinCoverage": "197",
          "MaxCoverage": "3912",
          "TotCoverage": "206125",
          "MeanCoverage": "487.2931442080378"
        },
        {
          "Gene": "chr1:36167883-36168242",
          "Chr": "chr1",
          "Start": "36167882",
          "End": "36168242",
          "MinCoverage": "4",
          "MaxCoverage": "4203",
          "TotCoverage": "74040",
          "MeanCoverage": "205.66666666666666"
        },
        {
          "Gene": "YRDC",
          "Chr": "chr1",
          "Start": "38268827",
          "End": "38269007",
          "MinCoverage": "114",
          "MaxCoverage": "4323",
          "TotCoverage": "69228",
          "MeanCoverage": "384.6"
        },
        {
          "Gene": "TRIT1",
          "Chr": "chr1",
          "Start": "40306807",
          "End": "40306987",
          "MinCoverage": "255",
          "MaxCoverage": "5564",
          "TotCoverage": "109574",
          "MeanCoverage": "608.7444444444444"
        },
        {
          "Gene": "MUTYH",
          "Chr": "chr1",
          "Start": "45794923",
          "End": "45795163",
          "MinCoverage": "13",
          "MaxCoverage": "3393",
          "TotCoverage": "44677",
          "MeanCoverage": "186.15416666666667"
        },
        {
          "Gene": "MUTYH",
          "Chr": "chr1",
          "Start": "45796118",
          "End": "45796298",
          "MinCoverage": "267",
          "MaxCoverage": "6560",
          "TotCoverage": "79749",
          "MeanCoverage": "443.05"
        },
        {
          "Gene": "MUTYH",
          "Chr": "chr1",
          "Start": "45796809",
          "End": "45797279",
          "MinCoverage": "259",
          "MaxCoverage": "4781",
          "TotCoverage": "281067",
          "MeanCoverage": "598.0148936170212"
        },
        {
          "Gene": "MUTYH",
          "Chr": "chr1",
          "Start": "45797318",
          "End": "45797558",
          "MinCoverage": "384",
          "MaxCoverage": "3904",
          "TotCoverage": "196496",
          "MeanCoverage": "818.7333333333333"
        },
        {
          "Gene": "MUTYH",
          "Chr": "chr1",
          "Start": "45797636",
          "End": "45798700",
          "MinCoverage": "307",
          "MaxCoverage": "6774",
          "TotCoverage": "1083783",
          "MeanCoverage": "1018.593045112782"
        },
        {
          "Gene": "MUTYH",
          "Chr": "chr1",
          "Start": "45798715",
          "End": "45799299",
          "MinCoverage": "139",
          "MaxCoverage": "6875",
          "TotCoverage": "660160",
          "MeanCoverage": "1130.4109589041095"
        },
        {
          "Gene": "MUTYH",
          "Chr": "chr1",
          "Start": "45800002",
          "End": "45800242",
          "MinCoverage": "177",
          "MaxCoverage": "4068",
          "TotCoverage": "61638",
          "MeanCoverage": "256.825"
        },
        {
          "Gene": "MUTYH,TOE1",
          "Chr": "chr1",
          "Start": "45805540",
          "End": "45805720",
          "MinCoverage": "605",
          "MaxCoverage": "8016",
          "TotCoverage": "311431",
          "MeanCoverage": "1730.1722222222222"
        },
        {
          "Gene": "MUTYH,TOE1",
          "Chr": "chr1",
          "Start": "45805810",
          "End": "45805990",
          "MinCoverage": "1641",
          "MaxCoverage": "11820",
          "TotCoverage": "474785",
          "MeanCoverage": "2637.6944444444443"
        },
        {
          "Gene": "MMACHC",
          "Chr": "chr1",
          "Start": "45976381",
          "End": "45976561",
          "MinCoverage": "247",
          "MaxCoverage": "7599",
          "TotCoverage": "64228",
          "MeanCoverage": "356.8222222222222"
        },
        {
          "Gene": "chr1:50750389-50750758",
          "Chr": "chr1",
          "Start": "50750388",
          "End": "50750758",
          "MinCoverage": "31",
          "MaxCoverage": "3426",
          "TotCoverage": "86568",
          "MeanCoverage": "233.96756756756756"
        },
        {
          "Gene": "CDKN2C",
          "Chr": "chr1",
          "Start": "51439486",
          "End": "51440386",
          "MinCoverage": "377",
          "MaxCoverage": "12064",
          "TotCoverage": "896076",
          "MeanCoverage": "995.64"
        },
        {
          "Gene": "chr1:53307867-53308046",
          "Chr": "chr1",
          "Start": "53307866",
          "End": "53308046",
          "MinCoverage": "141",
          "MaxCoverage": "1958",
          "TotCoverage": "38070",
          "MeanCoverage": "211.5"
        },
        {
          "Gene": "chr1:60594890-60595069",
          "Chr": "chr1",
          "Start": "60594889",
          "End": "60595069",
          "MinCoverage": "116",
          "MaxCoverage": "4128",
          "TotCoverage": "48689",
          "MeanCoverage": "270.49444444444447"
        },
        {
          "Gene": "JAK1",
          "Chr": "chr1",
          "Start": "65301013",
          "End": "65301253",
          "MinCoverage": "152",
          "MaxCoverage": "4240",
          "TotCoverage": "90069",
          "MeanCoverage": "375.2875"
        },
        {
          "Gene": "JAK1",
          "Chr": "chr1",
          "Start": "65301719",
          "End": "65301959",
          "MinCoverage": "176",
          "MaxCoverage": "5082",
          "TotCoverage": "86384",
          "MeanCoverage": "359.93333333333334"
        },
        {
          "Gene": "JAK1",
          "Chr": "chr1",
          "Start": "65303550",
          "End": "65303850",
          "MinCoverage": "134",
          "MaxCoverage": "13116",
          "TotCoverage": "219155",
          "MeanCoverage": "730.5166666666667"
        },
        {
          "Gene": "JAK1",
          "Chr": "chr1",
          "Start": "65304089",
          "End": "65304329",
          "MinCoverage": "245",
          "MaxCoverage": "12016",
          "TotCoverage": "159848",
          "MeanCoverage": "666.0333333333333"
        },
        {
          "Gene": "JAK1",
          "Chr": "chr1",
          "Start": "65305231",
          "End": "65305531",
          "MinCoverage": "199",
          "MaxCoverage": "7482",
          "TotCoverage": "284314",
          "MeanCoverage": "947.7133333333334"
        },
        {
          "Gene": "JAK1",
          "Chr": "chr1",
          "Start": "65306854",
          "End": "65307358",
          "MinCoverage": "127",
          "MaxCoverage": "4998",
          "TotCoverage": "265506",
          "MeanCoverage": "526.797619047619"
        },
        {
          "Gene": "JAK1",
          "Chr": "chr1",
          "Start": "65309672",
          "End": "65309972",
          "MinCoverage": "677",
          "MaxCoverage": "16760",
          "TotCoverage": "428264",
          "MeanCoverage": "1427.5466666666666"
        },
        {
          "Gene": "JAK1",
          "Chr": "chr1",
          "Start": "65310384",
          "End": "65310624",
          "MinCoverage": "235",
          "MaxCoverage": "4948",
          "TotCoverage": "212752",
          "MeanCoverage": "886.4666666666667"
        },
        {
          "Gene": "JAK1",
          "Chr": "chr1",
          "Start": "65311139",
          "End": "65311379",
          "MinCoverage": "87",
          "MaxCoverage": "5004",
          "TotCoverage": "73045",
          "MeanCoverage": "304.3541666666667"
        },
        {
          "Gene": "JAK1",
          "Chr": "chr1",
          "Start": "65312255",
          "End": "65312495",
          "MinCoverage": "323",
          "MaxCoverage": "6470",
          "TotCoverage": "204246",
          "MeanCoverage": "851.025"
        },
        {
          "Gene": "JAK1",
          "Chr": "chr1",
          "Start": "65313136",
          "End": "65313436",
          "MinCoverage": "112",
          "MaxCoverage": "3272",
          "TotCoverage": "86181",
          "MeanCoverage": "287.27"
        },
        {
          "Gene": "JAK1",
          "Chr": "chr1",
          "Start": "65316419",
          "End": "65316659",
          "MinCoverage": "547",
          "MaxCoverage": "4865",
          "TotCoverage": "273413",
          "MeanCoverage": "1139.2208333333333"
        },
        {
          "Gene": "JAK1",
          "Chr": "chr1",
          "Start": "65321134",
          "End": "65321434",
          "MinCoverage": "394",
          "MaxCoverage": "4415",
          "TotCoverage": "257339",
          "MeanCoverage": "857.7966666666666"
        },
        {
          "Gene": "JAK1",
          "Chr": "chr1",
          "Start": "65323280",
          "End": "65323520",
          "MinCoverage": "179",
          "MaxCoverage": "8176",
          "TotCoverage": "153113",
          "MeanCoverage": "637.9708333333333"
        },
        {
          "Gene": "JAK1",
          "Chr": "chr1",
          "Start": "65325716",
          "End": "65326016",
          "MinCoverage": "67",
          "MaxCoverage": "8433",
          "TotCoverage": "202526",
          "MeanCoverage": "675.0866666666667"
        },
        {
          "Gene": "JAK1",
          "Chr": "chr1",
          "Start": "65330412",
          "End": "65330712",
          "MinCoverage": "153",
          "MaxCoverage": "3972",
          "TotCoverage": "143946",
          "MeanCoverage": "479.82"
        },
        {
          "Gene": "JAK1",
          "Chr": "chr1",
          "Start": "65332479",
          "End": "65332959",
          "MinCoverage": "144",
          "MaxCoverage": "11496",
          "TotCoverage": "329471",
          "MeanCoverage": "686.3979166666667"
        },
        {
          "Gene": "JAK1",
          "Chr": "chr1",
          "Start": "65334925",
          "End": "65335225",
          "MinCoverage": "201",
          "MaxCoverage": "5552",
          "TotCoverage": "162966",
          "MeanCoverage": "543.22"
        },
        {
          "Gene": "JAK1",
          "Chr": "chr1",
          "Start": "65344649",
          "End": "65344889",
          "MinCoverage": "70",
          "MaxCoverage": "3366",
          "TotCoverage": "65617",
          "MeanCoverage": "273.40416666666664"
        },
        {
          "Gene": "JAK1",
          "Chr": "chr1",
          "Start": "65348908",
          "End": "65349208",
          "MinCoverage": "342",
          "MaxCoverage": "7720",
          "TotCoverage": "300321",
          "MeanCoverage": "1001.07"
        },
        {
          "Gene": "LEPR",
          "Chr": "chr1",
          "Start": "65952337",
          "End": "65952517",
          "MinCoverage": "270",
          "MaxCoverage": "3564",
          "TotCoverage": "73447",
          "MeanCoverage": "408.0388888888889"
        },
        {
          "Gene": "chr1:67868076-67868395",
          "Chr": "chr1",
          "Start": "67868075",
          "End": "67868395",
          "MinCoverage": "22",
          "MaxCoverage": "11888",
          "TotCoverage": "107311",
          "MeanCoverage": "335.346875"
        },
        {
          "Gene": "PTGER3",
          "Chr": "chr1",
          "Start": "71477224",
          "End": "71477404",
          "MinCoverage": "211",
          "MaxCoverage": "4470",
          "TotCoverage": "80728",
          "MeanCoverage": "448.4888888888889"
        },
        {
          "Gene": "ST6GALNAC3",
          "Chr": "chr1",
          "Start": "76990771",
          "End": "76990951",
          "MinCoverage": "211",
          "MaxCoverage": "2880",
          "TotCoverage": "67338",
          "MeanCoverage": "374.1"
        },
        {
          "Gene": "chr1:85462881-85463060",
          "Chr": "chr1",
          "Start": "85462880",
          "End": "85463060",
          "MinCoverage": "0",
          "MaxCoverage": "252",
          "TotCoverage": "1863",
          "MeanCoverage": "10.35"
        },
        {
          "Gene": "chr1:88776188-88776367",
          "Chr": "chr1",
          "Start": "88776187",
          "End": "88776367",
          "MinCoverage": "122",
          "MaxCoverage": "4548",
          "TotCoverage": "50072",
          "MeanCoverage": "278.1777777777778"
        },
        {
          "Gene": "chr1:91604432-91604611",
          "Chr": "chr1",
          "Start": "91604431",
          "End": "91604611",
          "MinCoverage": "100",
          "MaxCoverage": "4040",
          "TotCoverage": "46988",
          "MeanCoverage": "261.0444444444444"
        },
        {
          "Gene": "chr1:95394262-95394441",
          "Chr": "chr1",
          "Start": "95394261",
          "End": "95394441",
          "MinCoverage": "170",
          "MaxCoverage": "4563",
          "TotCoverage": "68370",
          "MeanCoverage": "379.8333333333333"
        },
        {
          "Gene": "EXTL2",
          "Chr": "chr1",
          "Start": "101338269",
          "End": "101338449",
          "MinCoverage": "266",
          "MaxCoverage": "9171",
          "TotCoverage": "127031",
          "MeanCoverage": "705.7277777777778"
        },
        {
          "Gene": "chr1:102561250-102561838",
          "Chr": "chr1",
          "Start": "102561249",
          "End": "102561838",
          "MinCoverage": "130",
          "MaxCoverage": "8703",
          "TotCoverage": "314035",
          "MeanCoverage": "533.1663837011885"
        },
        {
          "Gene": "STXBP3",
          "Chr": "chr1",
          "Start": "109289396",
          "End": "109289576",
          "MinCoverage": "30",
          "MaxCoverage": "516",
          "TotCoverage": "12250",
          "MeanCoverage": "68.05555555555556"
        },
        {
          "Gene": "BCAS2",
          "Chr": "chr1",
          "Start": "115110592",
          "End": "115110772",
          "MinCoverage": "393",
          "MaxCoverage": "8671",
          "TotCoverage": "139724",
          "MeanCoverage": "776.2444444444444"
        },
        {
          "Gene": "NRAS",
          "Chr": "chr1",
          "Start": "115251093",
          "End": "115251333",
          "MinCoverage": "195",
          "MaxCoverage": "10308",
          "TotCoverage": "231329",
          "MeanCoverage": "963.8708333333333"
        },
        {
          "Gene": "NRAS",
          "Chr": "chr1",
          "Start": "115252113",
          "End": "115252413",
          "MinCoverage": "256",
          "MaxCoverage": "8358",
          "TotCoverage": "326440",
          "MeanCoverage": "1088.1333333333334"
        },
        {
          "Gene": "NRAS",
          "Chr": "chr1",
          "Start": "115256359",
          "End": "115256660",
          "MinCoverage": "301",
          "MaxCoverage": "11340",
          "TotCoverage": "480030",
          "MeanCoverage": "1594.7840531561462"
        },
        {
          "Gene": "NRAS",
          "Chr": "chr1",
          "Start": "115258608",
          "End": "115258872",
          "MinCoverage": "372",
          "MaxCoverage": "15088",
          "TotCoverage": "285958",
          "MeanCoverage": "1083.1742424242425"
        },
        {
          "Gene": "NOTCH2",
          "Chr": "chr1",
          "Start": "120460216",
          "End": "120460456",
          "MinCoverage": "170",
          "MaxCoverage": "5796",
          "TotCoverage": "136932",
          "MeanCoverage": "570.55"
        },
        {
          "Gene": "NOTCH2",
          "Chr": "chr1",
          "Start": "120460952",
          "End": "120461252",
          "MinCoverage": "224",
          "MaxCoverage": "8448",
          "TotCoverage": "145668",
          "MeanCoverage": "485.56"
        },
        {
          "Gene": "NOTCH2",
          "Chr": "chr1",
          "Start": "120461856",
          "End": "120462309",
          "MinCoverage": "116",
          "MaxCoverage": "4671",
          "TotCoverage": "397586",
          "MeanCoverage": "877.673289183223"
        },
        {
          "Gene": "NOTCH2",
          "Chr": "chr1",
          "Start": "120462785",
          "End": "120463085",
          "MinCoverage": "297",
          "MaxCoverage": "6576",
          "TotCoverage": "224938",
          "MeanCoverage": "749.7933333333333"
        },
        {
          "Gene": "NOTCH2",
          "Chr": "chr1",
          "Start": "120464263",
          "End": "120464503",
          "MinCoverage": "242",
          "MaxCoverage": "9090",
          "TotCoverage": "134447",
          "MeanCoverage": "560.1958333333333"
        },
        {
          "Gene": "NOTCH2",
          "Chr": "chr1",
          "Start": "120464783",
          "End": "120465143",
          "MinCoverage": "193",
          "MaxCoverage": "6777",
          "TotCoverage": "201897",
          "MeanCoverage": "560.825"
        },
        {
          "Gene": "NOTCH2",
          "Chr": "chr1",
          "Start": "120465179",
          "End": "120465479",
          "MinCoverage": "157",
          "MaxCoverage": "12077",
          "TotCoverage": "156628",
          "MeanCoverage": "522.0933333333334"
        },
        {
          "Gene": "NOTCH2",
          "Chr": "chr1",
          "Start": "120466193",
          "End": "120466673",
          "MinCoverage": "297",
          "MaxCoverage": "11858",
          "TotCoverage": "361803",
          "MeanCoverage": "753.75625"
        },
        {
          "Gene": "NOTCH2",
          "Chr": "chr1",
          "Start": "120467850",
          "End": "120468510",
          "MinCoverage": "459",
          "MaxCoverage": "8157",
          "TotCoverage": "1016223",
          "MeanCoverage": "1539.7318181818182"
        },
        {
          "Gene": "NOTCH2",
          "Chr": "chr1",
          "Start": "120471536",
          "End": "120471896",
          "MinCoverage": "326",
          "MaxCoverage": "7672",
          "TotCoverage": "343193",
          "MeanCoverage": "953.3138888888889"
        },
        {
          "Gene": "NOTCH2",
          "Chr": "chr1",
          "Start": "120477681",
          "End": "120478281",
          "MinCoverage": "299",
          "MaxCoverage": "9086",
          "TotCoverage": "375730",
          "MeanCoverage": "626.2166666666667"
        },
        {
          "Gene": "NOTCH2",
          "Chr": "chr1",
          "Start": "120479846",
          "End": "120480146",
          "MinCoverage": "259",
          "MaxCoverage": "3033",
          "TotCoverage": "115949",
          "MeanCoverage": "386.49666666666667"
        },
        {
          "Gene": "NOTCH2",
          "Chr": "chr1",
          "Start": "120480406",
          "End": "120480706",
          "MinCoverage": "208",
          "MaxCoverage": "5736",
          "TotCoverage": "136259",
          "MeanCoverage": "454.19666666666666"
        },
        {
          "Gene": "NOTCH2",
          "Chr": "chr1",
          "Start": "120483098",
          "End": "120483458",
          "MinCoverage": "96",
          "MaxCoverage": "8660",
          "TotCoverage": "169793",
          "MeanCoverage": "471.64722222222224"
        },
        {
          "Gene": "NOTCH2",
          "Chr": "chr1",
          "Start": "120484082",
          "End": "120484442",
          "MinCoverage": "210",
          "MaxCoverage": "6787",
          "TotCoverage": "180185",
          "MeanCoverage": "500.5138888888889"
        },
        {
          "Gene": "NOTCH2",
          "Chr": "chr1",
          "Start": "120490962",
          "End": "120491262",
          "MinCoverage": "144",
          "MaxCoverage": "5168",
          "TotCoverage": "147257",
          "MeanCoverage": "490.8566666666667"
        },
        {
          "Gene": "NOTCH2",
          "Chr": "chr1",
          "Start": "120491569",
          "End": "120491809",
          "MinCoverage": "223",
          "MaxCoverage": "3860",
          "TotCoverage": "87799",
          "MeanCoverage": "365.82916666666665"
        },
        {
          "Gene": "NOTCH2",
          "Chr": "chr1",
          "Start": "120492627",
          "End": "120493535",
          "MinCoverage": "326",
          "MaxCoverage": "10456",
          "TotCoverage": "746545",
          "MeanCoverage": "822.1861233480176"
        },
        {
          "Gene": "NOTCH2",
          "Chr": "chr1",
          "Start": "120496088",
          "End": "120496388",
          "MinCoverage": "342",
          "MaxCoverage": "8760",
          "TotCoverage": "162338",
          "MeanCoverage": "541.1266666666667"
        },
        {
          "Gene": "NOTCH2",
          "Chr": "chr1",
          "Start": "120497608",
          "End": "120497908",
          "MinCoverage": "197",
          "MaxCoverage": "4144",
          "TotCoverage": "118159",
          "MeanCoverage": "393.86333333333334"
        },
        {
          "Gene": "NOTCH2",
          "Chr": "chr1",
          "Start": "120501949",
          "End": "120502189",
          "MinCoverage": "286",
          "MaxCoverage": "19260",
          "TotCoverage": "160629",
          "MeanCoverage": "669.2875"
        },
        {
          "Gene": "NOTCH2",
          "Chr": "chr1",
          "Start": "120506133",
          "End": "120506493",
          "MinCoverage": "218",
          "MaxCoverage": "10050",
          "TotCoverage": "193892",
          "MeanCoverage": "538.5888888888888"
        },
        {
          "Gene": "NOTCH2",
          "Chr": "chr1",
          "Start": "120508012",
          "End": "120508252",
          "MinCoverage": "185",
          "MaxCoverage": "4150",
          "TotCoverage": "76712",
          "MeanCoverage": "319.6333333333333"
        },
        {
          "Gene": "NOTCH2",
          "Chr": "chr1",
          "Start": "120508935",
          "End": "120509175",
          "MinCoverage": "238",
          "MaxCoverage": "4496",
          "TotCoverage": "91135",
          "MeanCoverage": "379.7291666666667"
        },
        {
          "Gene": "NOTCH2",
          "Chr": "chr1",
          "Start": "120509999",
          "End": "120510299",
          "MinCoverage": "245",
          "MaxCoverage": "10644",
          "TotCoverage": "231793",
          "MeanCoverage": "772.6433333333333"
        },
        {
          "Gene": "NOTCH2",
          "Chr": "chr1",
          "Start": "120510627",
          "End": "120510927",
          "MinCoverage": "169",
          "MaxCoverage": "7470",
          "TotCoverage": "108485",
          "MeanCoverage": "361.6166666666667"
        },
        {
          "Gene": "NOTCH2",
          "Chr": "chr1",
          "Start": "120512070",
          "End": "120512430",
          "MinCoverage": "333",
          "MaxCoverage": "8856",
          "TotCoverage": "377451",
          "MeanCoverage": "1048.475"
        },
        {
          "Gene": "NOTCH2",
          "Chr": "chr1",
          "Start": "120529523",
          "End": "120529763",
          "MinCoverage": "191",
          "MaxCoverage": "5362",
          "TotCoverage": "109485",
          "MeanCoverage": "456.1875"
        },
        {
          "Gene": "NOTCH2",
          "Chr": "chr1",
          "Start": "120539547",
          "End": "120540027",
          "MinCoverage": "192",
          "MaxCoverage": "3010",
          "TotCoverage": "169185",
          "MeanCoverage": "352.46875"
        },
        {
          "Gene": "NOTCH2",
          "Chr": "chr1",
          "Start": "120611819",
          "End": "120612401",
          "MinCoverage": "285",
          "MaxCoverage": "18552",
          "TotCoverage": "2250058",
          "MeanCoverage": "3866.0790378006873"
        },
        {
          "Gene": "ARNT",
          "Chr": "chr1",
          "Start": "150814762",
          "End": "150815075",
          "MinCoverage": "72",
          "MaxCoverage": "5795",
          "TotCoverage": "280130",
          "MeanCoverage": "894.9840255591055"
        },
        {
          "Gene": "PIP5K1A",
          "Chr": "chr1",
          "Start": "151196619",
          "End": "151196799",
          "MinCoverage": "169",
          "MaxCoverage": "5440",
          "TotCoverage": "71909",
          "MeanCoverage": "399.49444444444447"
        },
        {
          "Gene": "NTRK1,SH2D2A",
          "Chr": "chr1",
          "Start": "156785535",
          "End": "156785715",
          "MinCoverage": "86",
          "MaxCoverage": "3104",
          "TotCoverage": "51710",
          "MeanCoverage": "287.27777777777777"
        },
        {
          "Gene": "INSRR,NTRK1",
          "Chr": "chr1",
          "Start": "156811847",
          "End": "156812087",
          "MinCoverage": "211",
          "MaxCoverage": "2976",
          "TotCoverage": "142016",
          "MeanCoverage": "591.7333333333333"
        },
        {
          "Gene": "NTRK1",
          "Chr": "chr1",
          "Start": "156830712",
          "End": "156830952",
          "MinCoverage": "74",
          "MaxCoverage": "2598",
          "TotCoverage": "157775",
          "MeanCoverage": "657.3958333333334"
        },
        {
          "Gene": "NTRK1",
          "Chr": "chr1",
          "Start": "156834092",
          "End": "156834272",
          "MinCoverage": "278",
          "MaxCoverage": "3360",
          "TotCoverage": "106436",
          "MeanCoverage": "591.3111111111111"
        },
        {
          "Gene": "NTRK1",
          "Chr": "chr1",
          "Start": "156834465",
          "End": "156834645",
          "MinCoverage": "161",
          "MaxCoverage": "1341",
          "TotCoverage": "62347",
          "MeanCoverage": "346.3722222222222"
        },
        {
          "Gene": "NTRK1",
          "Chr": "chr1",
          "Start": "156836645",
          "End": "156836825",
          "MinCoverage": "235",
          "MaxCoverage": "3227",
          "TotCoverage": "82832",
          "MeanCoverage": "460.1777777777778"
        },
        {
          "Gene": "NTRK1",
          "Chr": "chr1",
          "Start": "156837848",
          "End": "156838088",
          "MinCoverage": "138",
          "MaxCoverage": "4571",
          "TotCoverage": "158645",
          "MeanCoverage": "661.0208333333334"
        },
        {
          "Gene": "NTRK1",
          "Chr": "chr1",
          "Start": "156838247",
          "End": "156838487",
          "MinCoverage": "270",
          "MaxCoverage": "2091",
          "TotCoverage": "130895",
          "MeanCoverage": "545.3958333333334"
        },
        {
          "Gene": "NTRK1",
          "Chr": "chr1",
          "Start": "156841360",
          "End": "156841600",
          "MinCoverage": "406",
          "MaxCoverage": "5905",
          "TotCoverage": "215750",
          "MeanCoverage": "898.9583333333334"
        },
        {
          "Gene": "NTRK1",
          "Chr": "chr1",
          "Start": "156843407",
          "End": "156843767",
          "MinCoverage": "296",
          "MaxCoverage": "4740",
          "TotCoverage": "419291",
          "MeanCoverage": "1164.6972222222223"
        },
        {
          "Gene": "NTRK1",
          "Chr": "chr1",
          "Start": "156844093",
          "End": "156844273",
          "MinCoverage": "396",
          "MaxCoverage": "5920",
          "TotCoverage": "157149",
          "MeanCoverage": "873.05"
        },
        {
          "Gene": "NTRK1",
          "Chr": "chr1",
          "Start": "156844300",
          "End": "156844480",
          "MinCoverage": "260",
          "MaxCoverage": "3025",
          "TotCoverage": "81336",
          "MeanCoverage": "451.8666666666667"
        },
        {
          "Gene": "NTRK1",
          "Chr": "chr1",
          "Start": "156844628",
          "End": "156844868",
          "MinCoverage": "349",
          "MaxCoverage": "6008",
          "TotCoverage": "271977",
          "MeanCoverage": "1133.2375"
        },
        {
          "Gene": "NTRK1",
          "Chr": "chr1",
          "Start": "156845264",
          "End": "156845504",
          "MinCoverage": "515",
          "MaxCoverage": "4410",
          "TotCoverage": "275102",
          "MeanCoverage": "1146.2583333333334"
        },
        {
          "Gene": "NTRK1",
          "Chr": "chr1",
          "Start": "156845812",
          "End": "156846052",
          "MinCoverage": "481",
          "MaxCoverage": "4944",
          "TotCoverage": "249585",
          "MeanCoverage": "1039.9375"
        },
        {
          "Gene": "NTRK1",
          "Chr": "chr1",
          "Start": "156846157",
          "End": "156846397",
          "MinCoverage": "750",
          "MaxCoverage": "5812",
          "TotCoverage": "485172",
          "MeanCoverage": "2021.55"
        },
        {
          "Gene": "NTRK1",
          "Chr": "chr1",
          "Start": "156848883",
          "End": "156849183",
          "MinCoverage": "200",
          "MaxCoverage": "3290",
          "TotCoverage": "185866",
          "MeanCoverage": "619.5533333333333"
        },
        {
          "Gene": "NTRK1",
          "Chr": "chr1",
          "Start": "156849749",
          "End": "156849989",
          "MinCoverage": "721",
          "MaxCoverage": "7434",
          "TotCoverage": "565487",
          "MeanCoverage": "2356.195833333333"
        },
        {
          "Gene": "NTRK1",
          "Chr": "chr1",
          "Start": "156851221",
          "End": "156851461",
          "MinCoverage": "564",
          "MaxCoverage": "6021",
          "TotCoverage": "426606",
          "MeanCoverage": "1777.525"
        },
        {
          "Gene": "DDR2",
          "Chr": "chr1",
          "Start": "162688804",
          "End": "162688984",
          "MinCoverage": "378",
          "MaxCoverage": "9776",
          "TotCoverage": "160857",
          "MeanCoverage": "893.65"
        },
        {
          "Gene": "DDR2",
          "Chr": "chr1",
          "Start": "162722815",
          "End": "162723055",
          "MinCoverage": "165",
          "MaxCoverage": "5632",
          "TotCoverage": "73200",
          "MeanCoverage": "305.0"
        },
        {
          "Gene": "DDR2",
          "Chr": "chr1",
          "Start": "162724379",
          "End": "162724679",
          "MinCoverage": "84",
          "MaxCoverage": "4088",
          "TotCoverage": "68961",
          "MeanCoverage": "229.87"
        },
        {
          "Gene": "DDR2",
          "Chr": "chr1",
          "Start": "162724899",
          "End": "162725139",
          "MinCoverage": "49",
          "MaxCoverage": "4403",
          "TotCoverage": "99237",
          "MeanCoverage": "413.4875"
        },
        {
          "Gene": "DDR2",
          "Chr": "chr1",
          "Start": "162725386",
          "End": "162725626",
          "MinCoverage": "231",
          "MaxCoverage": "6010",
          "TotCoverage": "109697",
          "MeanCoverage": "457.0708333333333"
        },
        {
          "Gene": "DDR2",
          "Chr": "chr1",
          "Start": "162729557",
          "End": "162729797",
          "MinCoverage": "271",
          "MaxCoverage": "4598",
          "TotCoverage": "132650",
          "MeanCoverage": "552.7083333333334"
        },
        {
          "Gene": "DDR2",
          "Chr": "chr1",
          "Start": "162730972",
          "End": "162731272",
          "MinCoverage": "250",
          "MaxCoverage": "10368",
          "TotCoverage": "163864",
          "MeanCoverage": "546.2133333333334"
        },
        {
          "Gene": "DDR2",
          "Chr": "chr1",
          "Start": "162735731",
          "End": "162735911",
          "MinCoverage": "301",
          "MaxCoverage": "6062",
          "TotCoverage": "119921",
          "MeanCoverage": "666.2277777777778"
        },
        {
          "Gene": "DDR2",
          "Chr": "chr1",
          "Start": "162736963",
          "End": "162737203",
          "MinCoverage": "107",
          "MaxCoverage": "3516",
          "TotCoverage": "57962",
          "MeanCoverage": "241.50833333333333"
        },
        {
          "Gene": "DDR2",
          "Chr": "chr1",
          "Start": "162740070",
          "End": "162740490",
          "MinCoverage": "281",
          "MaxCoverage": "14135",
          "TotCoverage": "329149",
          "MeanCoverage": "783.6880952380952"
        },
        {
          "Gene": "DDR2",
          "Chr": "chr1",
          "Start": "162741779",
          "End": "162742079",
          "MinCoverage": "170",
          "MaxCoverage": "2844",
          "TotCoverage": "102698",
          "MeanCoverage": "342.32666666666665"
        },
        {
          "Gene": "DDR2",
          "Chr": "chr1",
          "Start": "162743202",
          "End": "162743442",
          "MinCoverage": "176",
          "MaxCoverage": "5256",
          "TotCoverage": "118332",
          "MeanCoverage": "493.05"
        },
        {
          "Gene": "DDR2",
          "Chr": "chr1",
          "Start": "162745417",
          "End": "162745657",
          "MinCoverage": "560",
          "MaxCoverage": "7641",
          "TotCoverage": "188109",
          "MeanCoverage": "783.7875"
        },
        {
          "Gene": "DDR2",
          "Chr": "chr1",
          "Start": "162745892",
          "End": "162746192",
          "MinCoverage": "114",
          "MaxCoverage": "7623",
          "TotCoverage": "190642",
          "MeanCoverage": "635.4733333333334"
        },
        {
          "Gene": "DDR2",
          "Chr": "chr1",
          "Start": "162748324",
          "End": "162748564",
          "MinCoverage": "216",
          "MaxCoverage": "12870",
          "TotCoverage": "149621",
          "MeanCoverage": "623.4208333333333"
        },
        {
          "Gene": "DDR2",
          "Chr": "chr1",
          "Start": "162749848",
          "End": "162750088",
          "MinCoverage": "188",
          "MaxCoverage": "9752",
          "TotCoverage": "184294",
          "MeanCoverage": "767.8916666666667"
        },
        {
          "Gene": "ABL2",
          "Chr": "chr1",
          "Start": "179079353",
          "End": "179080113",
          "MinCoverage": "143",
          "MaxCoverage": "8528",
          "TotCoverage": "484520",
          "MeanCoverage": "637.5263157894736"
        },
        {
          "Gene": "ABL2",
          "Chr": "chr1",
          "Start": "179081368",
          "End": "179081608",
          "MinCoverage": "152",
          "MaxCoverage": "4960",
          "TotCoverage": "143631",
          "MeanCoverage": "598.4625"
        },
        {
          "Gene": "ABL2",
          "Chr": "chr1",
          "Start": "179083938",
          "End": "179084238",
          "MinCoverage": "286",
          "MaxCoverage": "5161",
          "TotCoverage": "175148",
          "MeanCoverage": "583.8266666666667"
        },
        {
          "Gene": "ABL2",
          "Chr": "chr1",
          "Start": "179086034",
          "End": "179086154",
          "MinCoverage": "223",
          "MaxCoverage": "1690",
          "TotCoverage": "44039",
          "MeanCoverage": "366.9916666666667"
        },
        {
          "Gene": "ABL2",
          "Chr": "chr1",
          "Start": "179086167",
          "End": "179086718",
          "MinCoverage": "298",
          "MaxCoverage": "11594",
          "TotCoverage": "500475",
          "MeanCoverage": "908.3030852994556"
        },
        {
          "Gene": "ABL2",
          "Chr": "chr1",
          "Start": "179087660",
          "End": "179087960",
          "MinCoverage": "371",
          "MaxCoverage": "6237",
          "TotCoverage": "226971",
          "MeanCoverage": "756.57"
        },
        {
          "Gene": "ABL2",
          "Chr": "chr1",
          "Start": "179089246",
          "End": "179089486",
          "MinCoverage": "209",
          "MaxCoverage": "6264",
          "TotCoverage": "103666",
          "MeanCoverage": "431.94166666666666"
        },
        {
          "Gene": "ABL2",
          "Chr": "chr1",
          "Start": "179090649",
          "End": "179091069",
          "MinCoverage": "62",
          "MaxCoverage": "7854",
          "TotCoverage": "205459",
          "MeanCoverage": "489.18809523809523"
        },
        {
          "Gene": "ABL2",
          "Chr": "chr1",
          "Start": "179095449",
          "End": "179095869",
          "MinCoverage": "237",
          "MaxCoverage": "4820",
          "TotCoverage": "177380",
          "MeanCoverage": "422.3333333333333"
        },
        {
          "Gene": "ABL2",
          "Chr": "chr1",
          "Start": "179100380",
          "End": "179100680",
          "MinCoverage": "201",
          "MaxCoverage": "6534",
          "TotCoverage": "166035",
          "MeanCoverage": "553.45"
        },
        {
          "Gene": "ABL2",
          "Chr": "chr1",
          "Start": "179102364",
          "End": "179102693",
          "MinCoverage": "134",
          "MaxCoverage": "18730",
          "TotCoverage": "503817",
          "MeanCoverage": "1531.3586626139818"
        },
        {
          "Gene": "ABL2",
          "Chr": "chr1",
          "Start": "179111995",
          "End": "179112295",
          "MinCoverage": "168",
          "MaxCoverage": "6426",
          "TotCoverage": "160710",
          "MeanCoverage": "535.7"
        },
        {
          "Gene": "DDX59",
          "Chr": "chr1",
          "Start": "200593955",
          "End": "200594135",
          "MinCoverage": "374",
          "MaxCoverage": "6021",
          "TotCoverage": "104482",
          "MeanCoverage": "580.4555555555555"
        },
        {
          "Gene": "USH2A",
          "Chr": "chr1",
          "Start": "215799077",
          "End": "215799257",
          "MinCoverage": "301",
          "MaxCoverage": "4293",
          "TotCoverage": "74745",
          "MeanCoverage": "415.25"
        },
        {
          "Gene": "USH2A",
          "Chr": "chr1",
          "Start": "215802116",
          "End": "215802416",
          "MinCoverage": "193",
          "MaxCoverage": "5278",
          "TotCoverage": "151763",
          "MeanCoverage": "505.87666666666667"
        },
        {
          "Gene": "USH2A",
          "Chr": "chr1",
          "Start": "215803476",
          "End": "215803656",
          "MinCoverage": "560",
          "MaxCoverage": "7408",
          "TotCoverage": "210408",
          "MeanCoverage": "1168.9333333333334"
        },
        {
          "Gene": "USH2A",
          "Chr": "chr1",
          "Start": "215807772",
          "End": "215808072",
          "MinCoverage": "186",
          "MaxCoverage": "7224",
          "TotCoverage": "142142",
          "MeanCoverage": "473.8066666666667"
        },
        {
          "Gene": "USH2A",
          "Chr": "chr1",
          "Start": "215812448",
          "End": "215812628",
          "MinCoverage": "302",
          "MaxCoverage": "4416",
          "TotCoverage": "96671",
          "MeanCoverage": "537.0611111111111"
        },
        {
          "Gene": "USH2A",
          "Chr": "chr1",
          "Start": "215813867",
          "End": "215814107",
          "MinCoverage": "252",
          "MaxCoverage": "7152",
          "TotCoverage": "173361",
          "MeanCoverage": "722.3375"
        },
        {
          "Gene": "USH2A",
          "Chr": "chr1",
          "Start": "215820847",
          "End": "215821087",
          "MinCoverage": "119",
          "MaxCoverage": "2750",
          "TotCoverage": "51577",
          "MeanCoverage": "214.90416666666667"
        },
        {
          "Gene": "USH2A",
          "Chr": "chr1",
          "Start": "215821838",
          "End": "215822138",
          "MinCoverage": "130",
          "MaxCoverage": "3864",
          "TotCoverage": "168092",
          "MeanCoverage": "560.3066666666666"
        },
        {
          "Gene": "USH2A",
          "Chr": "chr1",
          "Start": "215823918",
          "End": "215824158",
          "MinCoverage": "226",
          "MaxCoverage": "4725",
          "TotCoverage": "107274",
          "MeanCoverage": "446.975"
        },
        {
          "Gene": "USH2A",
          "Chr": "chr1",
          "Start": "215844294",
          "End": "215844654",
          "MinCoverage": "267",
          "MaxCoverage": "7542",
          "TotCoverage": "229722",
          "MeanCoverage": "638.1166666666667"
        },
        {
          "Gene": "USH2A",
          "Chr": "chr1",
          "Start": "215847415",
          "End": "215848435",
          "MinCoverage": "215",
          "MaxCoverage": "6760",
          "TotCoverage": "592672",
          "MeanCoverage": "581.0509803921568"
        },
        {
          "Gene": "USH2A",
          "Chr": "chr1",
          "Start": "215848445",
          "End": "215848985",
          "MinCoverage": "377",
          "MaxCoverage": "8844",
          "TotCoverage": "459214",
          "MeanCoverage": "850.3962962962963"
        },
        {
          "Gene": "USH2A",
          "Chr": "chr1",
          "Start": "215853454",
          "End": "215853754",
          "MinCoverage": "145",
          "MaxCoverage": "6072",
          "TotCoverage": "187084",
          "MeanCoverage": "623.6133333333333"
        },
        {
          "Gene": "USH2A",
          "Chr": "chr1",
          "Start": "215901338",
          "End": "215901758",
          "MinCoverage": "127",
          "MaxCoverage": "6146",
          "TotCoverage": "240834",
          "MeanCoverage": "573.4142857142857"
        },
        {
          "Gene": "USH2A",
          "Chr": "chr1",
          "Start": "215914677",
          "End": "215914917",
          "MinCoverage": "189",
          "MaxCoverage": "8140",
          "TotCoverage": "135998",
          "MeanCoverage": "566.6583333333333"
        },
        {
          "Gene": "USH2A",
          "Chr": "chr1",
          "Start": "215916477",
          "End": "215916732",
          "MinCoverage": "169",
          "MaxCoverage": "10944",
          "TotCoverage": "181194",
          "MeanCoverage": "710.564705882353"
        },
        {
          "Gene": "USH2A",
          "Chr": "chr1",
          "Start": "215931895",
          "End": "215932135",
          "MinCoverage": "331",
          "MaxCoverage": "8316",
          "TotCoverage": "213547",
          "MeanCoverage": "889.7791666666667"
        },
        {
          "Gene": "USH2A",
          "Chr": "chr1",
          "Start": "215932973",
          "End": "215933213",
          "MinCoverage": "628",
          "MaxCoverage": "7920",
          "TotCoverage": "239631",
          "MeanCoverage": "998.4625"
        },
        {
          "Gene": "USH2A",
          "Chr": "chr1",
          "Start": "215939956",
          "End": "215940196",
          "MinCoverage": "194",
          "MaxCoverage": "5285",
          "TotCoverage": "135944",
          "MeanCoverage": "566.4333333333333"
        },
        {
          "Gene": "USH2A",
          "Chr": "chr1",
          "Start": "215953163",
          "End": "215953403",
          "MinCoverage": "123",
          "MaxCoverage": "7472",
          "TotCoverage": "97229",
          "MeanCoverage": "405.12083333333334"
        },
        {
          "Gene": "USH2A",
          "Chr": "chr1",
          "Start": "215955340",
          "End": "215955596",
          "MinCoverage": "636",
          "MaxCoverage": "12492",
          "TotCoverage": "377901",
          "MeanCoverage": "1476.17578125"
        },
        {
          "Gene": "USH2A",
          "Chr": "chr1",
          "Start": "215956058",
          "End": "215956298",
          "MinCoverage": "171",
          "MaxCoverage": "4445",
          "TotCoverage": "110554",
          "MeanCoverage": "460.64166666666665"
        },
        {
          "Gene": "USH2A",
          "Chr": "chr1",
          "Start": "215959946",
          "End": "215960233",
          "MinCoverage": "280",
          "MaxCoverage": "5552",
          "TotCoverage": "240062",
          "MeanCoverage": "836.4529616724739"
        },
        {
          "Gene": "USH2A",
          "Chr": "chr1",
          "Start": "215963362",
          "End": "215963662",
          "MinCoverage": "267",
          "MaxCoverage": "10467",
          "TotCoverage": "244115",
          "MeanCoverage": "813.7166666666667"
        },
        {
          "Gene": "USH2A",
          "Chr": "chr1",
          "Start": "215972237",
          "End": "215972477",
          "MinCoverage": "185",
          "MaxCoverage": "5434",
          "TotCoverage": "117000",
          "MeanCoverage": "487.5"
        },
        {
          "Gene": "USH2A",
          "Chr": "chr1",
          "Start": "215987038",
          "End": "215987278",
          "MinCoverage": "366",
          "MaxCoverage": "10186",
          "TotCoverage": "175729",
          "MeanCoverage": "732.2041666666667"
        },
        {
          "Gene": "USH2A",
          "Chr": "chr1",
          "Start": "215990317",
          "End": "215990557",
          "MinCoverage": "323",
          "MaxCoverage": "5928",
          "TotCoverage": "147191",
          "MeanCoverage": "613.2958333333333"
        },
        {
          "Gene": "USH2A",
          "Chr": "chr1",
          "Start": "216011268",
          "End": "216011508",
          "MinCoverage": "377",
          "MaxCoverage": "3795",
          "TotCoverage": "164891",
          "MeanCoverage": "687.0458333333333"
        },
        {
          "Gene": "USH2A",
          "Chr": "chr1",
          "Start": "216017616",
          "End": "216017856",
          "MinCoverage": "263",
          "MaxCoverage": "6347",
          "TotCoverage": "125860",
          "MeanCoverage": "524.4166666666666"
        },
        {
          "Gene": "USH2A",
          "Chr": "chr1",
          "Start": "216019150",
          "End": "216019390",
          "MinCoverage": "142",
          "MaxCoverage": "6948",
          "TotCoverage": "118870",
          "MeanCoverage": "495.2916666666667"
        },
        {
          "Gene": "USH2A",
          "Chr": "chr1",
          "Start": "216040310",
          "End": "216040550",
          "MinCoverage": "142",
          "MaxCoverage": "5600",
          "TotCoverage": "80080",
          "MeanCoverage": "333.6666666666667"
        },
        {
          "Gene": "USH2A",
          "Chr": "chr1",
          "Start": "216051040",
          "End": "216051280",
          "MinCoverage": "309",
          "MaxCoverage": "6748",
          "TotCoverage": "178982",
          "MeanCoverage": "745.7583333333333"
        },
        {
          "Gene": "USH2A",
          "Chr": "chr1",
          "Start": "216052092",
          "End": "216052452",
          "MinCoverage": "141",
          "MaxCoverage": "8388",
          "TotCoverage": "229505",
          "MeanCoverage": "637.5138888888889"
        },
        {
          "Gene": "USH2A",
          "Chr": "chr1",
          "Start": "216061751",
          "End": "216062411",
          "MinCoverage": "129",
          "MaxCoverage": "7590",
          "TotCoverage": "390962",
          "MeanCoverage": "592.3666666666667"
        },
        {
          "Gene": "USH2A",
          "Chr": "chr1",
          "Start": "216073367",
          "End": "216073607",
          "MinCoverage": "134",
          "MaxCoverage": "5523",
          "TotCoverage": "106918",
          "MeanCoverage": "445.4916666666667"
        },
        {
          "Gene": "USH2A",
          "Chr": "chr1",
          "Start": "216074051",
          "End": "216074291",
          "MinCoverage": "127",
          "MaxCoverage": "2415",
          "TotCoverage": "71285",
          "MeanCoverage": "297.0208333333333"
        },
        {
          "Gene": "USH2A",
          "Chr": "chr1",
          "Start": "216107919",
          "End": "216108159",
          "MinCoverage": "292",
          "MaxCoverage": "7344",
          "TotCoverage": "210389",
          "MeanCoverage": "876.6208333333333"
        },
        {
          "Gene": "USH2A",
          "Chr": "chr1",
          "Start": "216138619",
          "End": "216138859",
          "MinCoverage": "92",
          "MaxCoverage": "2821",
          "TotCoverage": "64731",
          "MeanCoverage": "269.7125"
        },
        {
          "Gene": "USH2A",
          "Chr": "chr1",
          "Start": "216143922",
          "End": "216144162",
          "MinCoverage": "188",
          "MaxCoverage": "3960",
          "TotCoverage": "105593",
          "MeanCoverage": "439.97083333333336"
        },
        {
          "Gene": "USH2A",
          "Chr": "chr1",
          "Start": "216166315",
          "End": "216166555",
          "MinCoverage": "343",
          "MaxCoverage": "6192",
          "TotCoverage": "129918",
          "MeanCoverage": "541.325"
        },
        {
          "Gene": "USH2A",
          "Chr": "chr1",
          "Start": "216172194",
          "End": "216172434",
          "MinCoverage": "239",
          "MaxCoverage": "5508",
          "TotCoverage": "158600",
          "MeanCoverage": "660.8333333333334"
        },
        {
          "Gene": "USH2A",
          "Chr": "chr1",
          "Start": "216173704",
          "End": "216173944",
          "MinCoverage": "169",
          "MaxCoverage": "3654",
          "TotCoverage": "98773",
          "MeanCoverage": "411.5541666666667"
        },
        {
          "Gene": "USH2A",
          "Chr": "chr1",
          "Start": "216219733",
          "End": "216219973",
          "MinCoverage": "239",
          "MaxCoverage": "6636",
          "TotCoverage": "172406",
          "MeanCoverage": "718.3583333333333"
        },
        {
          "Gene": "USH2A",
          "Chr": "chr1",
          "Start": "216221812",
          "End": "216222052",
          "MinCoverage": "303",
          "MaxCoverage": "6032",
          "TotCoverage": "113653",
          "MeanCoverage": "473.5541666666667"
        },
        {
          "Gene": "USH2A",
          "Chr": "chr1",
          "Start": "216243418",
          "End": "216243658",
          "MinCoverage": "222",
          "MaxCoverage": "4207",
          "TotCoverage": "100765",
          "MeanCoverage": "419.8541666666667"
        },
        {
          "Gene": "USH2A",
          "Chr": "chr1",
          "Start": "216246180",
          "End": "216246360",
          "MinCoverage": "318",
          "MaxCoverage": "4383",
          "TotCoverage": "95986",
          "MeanCoverage": "533.2555555555556"
        },
        {
          "Gene": "USH2A",
          "Chr": "chr1",
          "Start": "216246420",
          "End": "216246660",
          "MinCoverage": "211",
          "MaxCoverage": "10868",
          "TotCoverage": "144585",
          "MeanCoverage": "602.4375"
        },
        {
          "Gene": "USH2A",
          "Chr": "chr1",
          "Start": "216251417",
          "End": "216251717",
          "MinCoverage": "143",
          "MaxCoverage": "10296",
          "TotCoverage": "186418",
          "MeanCoverage": "621.3933333333333"
        },
        {
          "Gene": "USH2A",
          "Chr": "chr1",
          "Start": "216256742",
          "End": "216256982",
          "MinCoverage": "293",
          "MaxCoverage": "7839",
          "TotCoverage": "196233",
          "MeanCoverage": "817.6375"
        },
        {
          "Gene": "USH2A",
          "Chr": "chr1",
          "Start": "216258009",
          "End": "216258249",
          "MinCoverage": "493",
          "MaxCoverage": "7889",
          "TotCoverage": "224604",
          "MeanCoverage": "935.85"
        },
        {
          "Gene": "USH2A",
          "Chr": "chr1",
          "Start": "216259991",
          "End": "216260231",
          "MinCoverage": "265",
          "MaxCoverage": "6040",
          "TotCoverage": "141465",
          "MeanCoverage": "589.4375"
        },
        {
          "Gene": "USH2A",
          "Chr": "chr1",
          "Start": "216262297",
          "End": "216262537",
          "MinCoverage": "297",
          "MaxCoverage": "8085",
          "TotCoverage": "259381",
          "MeanCoverage": "1080.7541666666666"
        },
        {
          "Gene": "USH2A",
          "Chr": "chr1",
          "Start": "216270395",
          "End": "216270635",
          "MinCoverage": "173",
          "MaxCoverage": "10500",
          "TotCoverage": "163501",
          "MeanCoverage": "681.2541666666667"
        },
        {
          "Gene": "USH2A",
          "Chr": "chr1",
          "Start": "216348551",
          "End": "216348851",
          "MinCoverage": "69",
          "MaxCoverage": "2744",
          "TotCoverage": "54251",
          "MeanCoverage": "180.83666666666667"
        },
        {
          "Gene": "USH2A",
          "Chr": "chr1",
          "Start": "216363497",
          "End": "216363737",
          "MinCoverage": "127",
          "MaxCoverage": "8485",
          "TotCoverage": "232689",
          "MeanCoverage": "969.5375"
        },
        {
          "Gene": "USH2A",
          "Chr": "chr1",
          "Start": "216369859",
          "End": "216370099",
          "MinCoverage": "248",
          "MaxCoverage": "7416",
          "TotCoverage": "214990",
          "MeanCoverage": "895.7916666666666"
        },
        {
          "Gene": "USH2A",
          "Chr": "chr1",
          "Start": "216371641",
          "End": "216371941",
          "MinCoverage": "74",
          "MaxCoverage": "8921",
          "TotCoverage": "179167",
          "MeanCoverage": "597.2233333333334"
        },
        {
          "Gene": "USH2A",
          "Chr": "chr1",
          "Start": "216372945",
          "End": "216373485",
          "MinCoverage": "119",
          "MaxCoverage": "7712",
          "TotCoverage": "346129",
          "MeanCoverage": "640.9796296296296"
        },
        {
          "Gene": "USH2A",
          "Chr": "chr1",
          "Start": "216380573",
          "End": "216380813",
          "MinCoverage": "111",
          "MaxCoverage": "7217",
          "TotCoverage": "170898",
          "MeanCoverage": "712.075"
        },
        {
          "Gene": "USH2A",
          "Chr": "chr1",
          "Start": "216390690",
          "End": "216390930",
          "MinCoverage": "495",
          "MaxCoverage": "7056",
          "TotCoverage": "175774",
          "MeanCoverage": "732.3916666666667"
        },
        {
          "Gene": "USH2A",
          "Chr": "chr1",
          "Start": "216405266",
          "End": "216405506",
          "MinCoverage": "131",
          "MaxCoverage": "6633",
          "TotCoverage": "127584",
          "MeanCoverage": "531.6"
        },
        {
          "Gene": "USH2A",
          "Chr": "chr1",
          "Start": "216419887",
          "End": "216420617",
          "MinCoverage": "249",
          "MaxCoverage": "12012",
          "TotCoverage": "642645",
          "MeanCoverage": "880.3356164383562"
        },
        {
          "Gene": "USH2A",
          "Chr": "chr1",
          "Start": "216424222",
          "End": "216424462",
          "MinCoverage": "263",
          "MaxCoverage": "9504",
          "TotCoverage": "209601",
          "MeanCoverage": "873.3375"
        },
        {
          "Gene": "USH2A",
          "Chr": "chr1",
          "Start": "216462566",
          "End": "216462806",
          "MinCoverage": "414",
          "MaxCoverage": "7168",
          "TotCoverage": "164913",
          "MeanCoverage": "687.1375"
        },
        {
          "Gene": "USH2A",
          "Chr": "chr1",
          "Start": "216465494",
          "End": "216465734",
          "MinCoverage": "405",
          "MaxCoverage": "10026",
          "TotCoverage": "167055",
          "MeanCoverage": "696.0625"
        },
        {
          "Gene": "USH2A",
          "Chr": "chr1",
          "Start": "216495181",
          "End": "216495361",
          "MinCoverage": "391",
          "MaxCoverage": "7784",
          "TotCoverage": "141098",
          "MeanCoverage": "783.8777777777777"
        },
        {
          "Gene": "USH2A",
          "Chr": "chr1",
          "Start": "216496744",
          "End": "216497076",
          "MinCoverage": "299",
          "MaxCoverage": "9548",
          "TotCoverage": "297161",
          "MeanCoverage": "895.0632530120482"
        },
        {
          "Gene": "USH2A",
          "Chr": "chr1",
          "Start": "216497481",
          "End": "216497721",
          "MinCoverage": "340",
          "MaxCoverage": "11781",
          "TotCoverage": "281981",
          "MeanCoverage": "1174.9208333333333"
        },
        {
          "Gene": "USH2A",
          "Chr": "chr1",
          "Start": "216498613",
          "End": "216498973",
          "MinCoverage": "196",
          "MaxCoverage": "4208",
          "TotCoverage": "194442",
          "MeanCoverage": "540.1166666666667"
        },
        {
          "Gene": "USH2A",
          "Chr": "chr1",
          "Start": "216500874",
          "End": "216501063",
          "MinCoverage": "948",
          "MaxCoverage": "9870",
          "TotCoverage": "226773",
          "MeanCoverage": "1199.857142857143"
        },
        {
          "Gene": "USH2A",
          "Chr": "chr1",
          "Start": "216538240",
          "End": "216538480",
          "MinCoverage": "410",
          "MaxCoverage": "8442",
          "TotCoverage": "183353",
          "MeanCoverage": "763.9708333333333"
        },
        {
          "Gene": "USH2A",
          "Chr": "chr1",
          "Start": "216591818",
          "End": "216592058",
          "MinCoverage": "389",
          "MaxCoverage": "7590",
          "TotCoverage": "161627",
          "MeanCoverage": "673.4458333333333"
        },
        {
          "Gene": "USH2A",
          "Chr": "chr1",
          "Start": "216595165",
          "End": "216595705",
          "MinCoverage": "102",
          "MaxCoverage": "11640",
          "TotCoverage": "372930",
          "MeanCoverage": "690.6111111111111"
        },
        {
          "Gene": "FH",
          "Chr": "chr1",
          "Start": "241660757",
          "End": "241661343",
          "MinCoverage": "267",
          "MaxCoverage": "8632",
          "TotCoverage": "401946",
          "MeanCoverage": "685.9146757679181"
        },
        {
          "Gene": "FH",
          "Chr": "chr1",
          "Start": "241663670",
          "End": "241664015",
          "MinCoverage": "89",
          "MaxCoverage": "6170",
          "TotCoverage": "129697",
          "MeanCoverage": "375.93333333333334"
        },
        {
          "Gene": "FH",
          "Chr": "chr1",
          "Start": "241665686",
          "End": "241665926",
          "MinCoverage": "439",
          "MaxCoverage": "5764",
          "TotCoverage": "158646",
          "MeanCoverage": "661.025"
        },
        {
          "Gene": "FH",
          "Chr": "chr1",
          "Start": "241667157",
          "End": "241667603",
          "MinCoverage": "138",
          "MaxCoverage": "12166",
          "TotCoverage": "341920",
          "MeanCoverage": "766.6367713004485"
        },
        {
          "Gene": "FH",
          "Chr": "chr1",
          "Start": "241669235",
          "End": "241669535",
          "MinCoverage": "329",
          "MaxCoverage": "9399",
          "TotCoverage": "192153",
          "MeanCoverage": "640.51"
        },
        {
          "Gene": "FH",
          "Chr": "chr1",
          "Start": "241675204",
          "End": "241675504",
          "MinCoverage": "319",
          "MaxCoverage": "10557",
          "TotCoverage": "274568",
          "MeanCoverage": "915.2266666666667"
        },
        {
          "Gene": "FH",
          "Chr": "chr1",
          "Start": "241676837",
          "End": "241677077",
          "MinCoverage": "219",
          "MaxCoverage": "7497",
          "TotCoverage": "195669",
          "MeanCoverage": "815.2875"
        },
        {
          "Gene": "FH",
          "Chr": "chr1",
          "Start": "241680428",
          "End": "241680668",
          "MinCoverage": "362",
          "MaxCoverage": "6948",
          "TotCoverage": "110844",
          "MeanCoverage": "461.85"
        },
        {
          "Gene": "GATA3",
          "Chr": "chr10",
          "Start": "8097194",
          "End": "8097914",
          "MinCoverage": "938",
          "MaxCoverage": "13160",
          "TotCoverage": "1956496",
          "MeanCoverage": "2717.3555555555554"
        },
        {
          "Gene": "GATA3",
          "Chr": "chr10",
          "Start": "8100205",
          "End": "8100865",
          "MinCoverage": "898",
          "MaxCoverage": "16548",
          "TotCoverage": "2732151",
          "MeanCoverage": "4139.622727272727"
        },
        {
          "Gene": "GATA3",
          "Chr": "chr10",
          "Start": "8105878",
          "End": "8106178",
          "MinCoverage": "426",
          "MaxCoverage": "6975",
          "TotCoverage": "344640",
          "MeanCoverage": "1148.8"
        },
        {
          "Gene": "GATA3",
          "Chr": "chr10",
          "Start": "8111378",
          "End": "8111618",
          "MinCoverage": "122",
          "MaxCoverage": "4545",
          "TotCoverage": "83895",
          "MeanCoverage": "349.5625"
        },
        {
          "Gene": "GATA3",
          "Chr": "chr10",
          "Start": "8115499",
          "End": "8117221",
          "MinCoverage": "164",
          "MaxCoverage": "14778",
          "TotCoverage": "3520233",
          "MeanCoverage": "2044.2700348432056"
        },
        {
          "Gene": "CREM",
          "Chr": "chr10",
          "Start": "35437237",
          "End": "35437477",
          "MinCoverage": "329",
          "MaxCoverage": "7980",
          "TotCoverage": "142250",
          "MeanCoverage": "592.7083333333334"
        },
        {
          "Gene": "CREM",
          "Chr": "chr10",
          "Start": "35456388",
          "End": "35456808",
          "MinCoverage": "247",
          "MaxCoverage": "6472",
          "TotCoverage": "289054",
          "MeanCoverage": "688.2238095238096"
        },
        {
          "Gene": "CREM",
          "Chr": "chr10",
          "Start": "35467736",
          "End": "35467976",
          "MinCoverage": "47",
          "MaxCoverage": "3366",
          "TotCoverage": "55297",
          "MeanCoverage": "230.40416666666667"
        },
        {
          "Gene": "CREM",
          "Chr": "chr10",
          "Start": "35467998",
          "End": "35468838",
          "MinCoverage": "281",
          "MaxCoverage": "6456",
          "TotCoverage": "494800",
          "MeanCoverage": "589.047619047619"
        },
        {
          "Gene": "CREM",
          "Chr": "chr10",
          "Start": "35484769",
          "End": "35485129",
          "MinCoverage": "177",
          "MaxCoverage": "8140",
          "TotCoverage": "169321",
          "MeanCoverage": "470.3361111111111"
        },
        {
          "Gene": "CREM",
          "Chr": "chr10",
          "Start": "35495750",
          "End": "35496050",
          "MinCoverage": "384",
          "MaxCoverage": "7848",
          "TotCoverage": "209225",
          "MeanCoverage": "697.4166666666666"
        },
        {
          "Gene": "CREM",
          "Chr": "chr10",
          "Start": "35500103",
          "End": "35501963",
          "MinCoverage": "143",
          "MaxCoverage": "10260",
          "TotCoverage": "1288312",
          "MeanCoverage": "692.6408602150537"
        },
        {
          "Gene": "RET",
          "Chr": "chr10",
          "Start": "43595831",
          "End": "43596251",
          "MinCoverage": "302",
          "MaxCoverage": "7194",
          "TotCoverage": "766740",
          "MeanCoverage": "1825.5714285714287"
        },
        {
          "Gene": "RET",
          "Chr": "chr10",
          "Start": "43597723",
          "End": "43598143",
          "MinCoverage": "1056",
          "MaxCoverage": "25020",
          "TotCoverage": "1543176",
          "MeanCoverage": "3674.2285714285713"
        },
        {
          "Gene": "RET",
          "Chr": "chr10",
          "Start": "43600292",
          "End": "43600712",
          "MinCoverage": "151",
          "MaxCoverage": "6237",
          "TotCoverage": "443523",
          "MeanCoverage": "1056.0071428571428"
        },
        {
          "Gene": "RET",
          "Chr": "chr10",
          "Start": "43601771",
          "End": "43602071",
          "MinCoverage": "185",
          "MaxCoverage": "3460",
          "TotCoverage": "183713",
          "MeanCoverage": "612.3766666666667"
        },
        {
          "Gene": "RET",
          "Chr": "chr10",
          "Start": "43604428",
          "End": "43604728",
          "MinCoverage": "250",
          "MaxCoverage": "7276",
          "TotCoverage": "417616",
          "MeanCoverage": "1392.0533333333333"
        },
        {
          "Gene": "RET",
          "Chr": "chr10",
          "Start": "43606603",
          "End": "43606963",
          "MinCoverage": "311",
          "MaxCoverage": "4444",
          "TotCoverage": "435457",
          "MeanCoverage": "1209.6027777777779"
        },
        {
          "Gene": "RET",
          "Chr": "chr10",
          "Start": "43607388",
          "End": "43607748",
          "MinCoverage": "191",
          "MaxCoverage": "2844",
          "TotCoverage": "269415",
          "MeanCoverage": "748.375"
        },
        {
          "Gene": "RET",
          "Chr": "chr10",
          "Start": "43608235",
          "End": "43608475",
          "MinCoverage": "204",
          "MaxCoverage": "5544",
          "TotCoverage": "218486",
          "MeanCoverage": "910.3583333333333"
        },
        {
          "Gene": "RET",
          "Chr": "chr10",
          "Start": "43608864",
          "End": "43609233",
          "MinCoverage": "128",
          "MaxCoverage": "5577",
          "TotCoverage": "379079",
          "MeanCoverage": "1027.3143631436315"
        },
        {
          "Gene": "RET",
          "Chr": "chr10",
          "Start": "43609827",
          "End": "43610235",
          "MinCoverage": "553",
          "MaxCoverage": "17952",
          "TotCoverage": "1632602",
          "MeanCoverage": "4001.475490196078"
        },
        {
          "Gene": "RET",
          "Chr": "chr10",
          "Start": "43611955",
          "End": "43612255",
          "MinCoverage": "297",
          "MaxCoverage": "4800",
          "TotCoverage": "294789",
          "MeanCoverage": "982.63"
        },
        {
          "Gene": "RET",
          "Chr": "chr10",
          "Start": "43613713",
          "End": "43613994",
          "MinCoverage": "494",
          "MaxCoverage": "12540",
          "TotCoverage": "569378",
          "MeanCoverage": "2026.256227758007"
        },
        {
          "Gene": "RET",
          "Chr": "chr10",
          "Start": "43614928",
          "End": "43615325",
          "MinCoverage": "593",
          "MaxCoverage": "8940",
          "TotCoverage": "503126",
          "MeanCoverage": "1267.3198992443324"
        },
        {
          "Gene": "RET",
          "Chr": "chr10",
          "Start": "43615469",
          "End": "43615711",
          "MinCoverage": "338",
          "MaxCoverage": "6832",
          "TotCoverage": "306677",
          "MeanCoverage": "1267.2603305785124"
        },
        {
          "Gene": "RET",
          "Chr": "chr10",
          "Start": "43617297",
          "End": "43617561",
          "MinCoverage": "871",
          "MaxCoverage": "11585",
          "TotCoverage": "546806",
          "MeanCoverage": "2071.2348484848485"
        },
        {
          "Gene": "RET",
          "Chr": "chr10",
          "Start": "43619067",
          "End": "43619307",
          "MinCoverage": "212",
          "MaxCoverage": "4782",
          "TotCoverage": "155232",
          "MeanCoverage": "646.8"
        },
        {
          "Gene": "RET",
          "Chr": "chr10",
          "Start": "43620260",
          "End": "43620500",
          "MinCoverage": "122",
          "MaxCoverage": "6768",
          "TotCoverage": "143403",
          "MeanCoverage": "597.5125"
        },
        {
          "Gene": "RET",
          "Chr": "chr10",
          "Start": "43621947",
          "End": "43623027",
          "MinCoverage": "120",
          "MaxCoverage": "9423",
          "TotCoverage": "1454963",
          "MeanCoverage": "1347.187962962963"
        },
        {
          "Gene": "ERCC6",
          "Chr": "chr10",
          "Start": "50666830",
          "End": "50667310",
          "MinCoverage": "197",
          "MaxCoverage": "5677",
          "TotCoverage": "276004",
          "MeanCoverage": "575.0083333333333"
        },
        {
          "Gene": "ERCC6",
          "Chr": "chr10",
          "Start": "50668367",
          "End": "50668547",
          "MinCoverage": "269",
          "MaxCoverage": "4250",
          "TotCoverage": "93893",
          "MeanCoverage": "521.6277777777777"
        },
        {
          "Gene": "ERCC6",
          "Chr": "chr10",
          "Start": "50669379",
          "End": "50669619",
          "MinCoverage": "363",
          "MaxCoverage": "5454",
          "TotCoverage": "164460",
          "MeanCoverage": "685.25"
        },
        {
          "Gene": "ERCC6",
          "Chr": "chr10",
          "Start": "50678191",
          "End": "50678971",
          "MinCoverage": "193",
          "MaxCoverage": "10272",
          "TotCoverage": "750267",
          "MeanCoverage": "961.8807692307693"
        },
        {
          "Gene": "ERCC6",
          "Chr": "chr10",
          "Start": "50678973",
          "End": "50679213",
          "MinCoverage": "283",
          "MaxCoverage": "8225",
          "TotCoverage": "170116",
          "MeanCoverage": "708.8166666666667"
        },
        {
          "Gene": "ERCC6",
          "Chr": "chr10",
          "Start": "50680378",
          "End": "50680558",
          "MinCoverage": "84",
          "MaxCoverage": "1876",
          "TotCoverage": "31140",
          "MeanCoverage": "173.0"
        },
        {
          "Gene": "ERCC6",
          "Chr": "chr10",
          "Start": "50680894",
          "End": "50681134",
          "MinCoverage": "258",
          "MaxCoverage": "5247",
          "TotCoverage": "103738",
          "MeanCoverage": "432.2416666666667"
        },
        {
          "Gene": "ERCC6",
          "Chr": "chr10",
          "Start": "50681457",
          "End": "50681697",
          "MinCoverage": "184",
          "MaxCoverage": "5782",
          "TotCoverage": "148436",
          "MeanCoverage": "618.4833333333333"
        },
        {
          "Gene": "ERCC6",
          "Chr": "chr10",
          "Start": "50682060",
          "End": "50682300",
          "MinCoverage": "257",
          "MaxCoverage": "6055",
          "TotCoverage": "177687",
          "MeanCoverage": "740.3625"
        },
        {
          "Gene": "ERCC6",
          "Chr": "chr10",
          "Start": "50684218",
          "End": "50684398",
          "MinCoverage": "139",
          "MaxCoverage": "5632",
          "TotCoverage": "87583",
          "MeanCoverage": "486.5722222222222"
        },
        {
          "Gene": "ERCC6",
          "Chr": "chr10",
          "Start": "50686337",
          "End": "50686577",
          "MinCoverage": "355",
          "MaxCoverage": "7816",
          "TotCoverage": "206589",
          "MeanCoverage": "860.7875"
        },
        {
          "Gene": "ERCC6",
          "Chr": "chr10",
          "Start": "50690700",
          "End": "50690940",
          "MinCoverage": "205",
          "MaxCoverage": "4168",
          "TotCoverage": "94420",
          "MeanCoverage": "393.4166666666667"
        },
        {
          "Gene": "ERCC6",
          "Chr": "chr10",
          "Start": "50691356",
          "End": "50691596",
          "MinCoverage": "337",
          "MaxCoverage": "5706",
          "TotCoverage": "155280",
          "MeanCoverage": "647.0"
        },
        {
          "Gene": "ERCC6",
          "Chr": "chr10",
          "Start": "50701110",
          "End": "50701350",
          "MinCoverage": "342",
          "MaxCoverage": "10528",
          "TotCoverage": "187980",
          "MeanCoverage": "783.25"
        },
        {
          "Gene": "ERCC6",
          "Chr": "chr10",
          "Start": "50708542",
          "End": "50708782",
          "MinCoverage": "423",
          "MaxCoverage": "6391",
          "TotCoverage": "181933",
          "MeanCoverage": "758.0541666666667"
        },
        {
          "Gene": "ERCC6",
          "Chr": "chr10",
          "Start": "50713873",
          "End": "50714113",
          "MinCoverage": "173",
          "MaxCoverage": "8960",
          "TotCoverage": "136649",
          "MeanCoverage": "569.3708333333333"
        },
        {
          "Gene": "ERCC6,PGBD3",
          "Chr": "chr10",
          "Start": "50723342",
          "End": "50725202",
          "MinCoverage": "142",
          "MaxCoverage": "16908",
          "TotCoverage": "1477432",
          "MeanCoverage": "794.3182795698925"
        },
        {
          "Gene": "ERCC6,PGBD3",
          "Chr": "chr10",
          "Start": "50732061",
          "End": "50732301",
          "MinCoverage": "309",
          "MaxCoverage": "7542",
          "TotCoverage": "217215",
          "MeanCoverage": "905.0625"
        },
        {
          "Gene": "ERCC6,PGBD3",
          "Chr": "chr10",
          "Start": "50732325",
          "End": "50732865",
          "MinCoverage": "135",
          "MaxCoverage": "6496",
          "TotCoverage": "326835",
          "MeanCoverage": "605.25"
        },
        {
          "Gene": "ERCC6",
          "Chr": "chr10",
          "Start": "50736396",
          "End": "50736636",
          "MinCoverage": "76",
          "MaxCoverage": "8892",
          "TotCoverage": "130087",
          "MeanCoverage": "542.0291666666667"
        },
        {
          "Gene": "ERCC6",
          "Chr": "chr10",
          "Start": "50738705",
          "End": "50738945",
          "MinCoverage": "175",
          "MaxCoverage": "6818",
          "TotCoverage": "141678",
          "MeanCoverage": "590.325"
        },
        {
          "Gene": "ERCC6",
          "Chr": "chr10",
          "Start": "50740559",
          "End": "50741039",
          "MinCoverage": "440",
          "MaxCoverage": "8244",
          "TotCoverage": "1002542",
          "MeanCoverage": "2088.6291666666666"
        },
        {
          "Gene": "BMPR1A",
          "Chr": "chr10",
          "Start": "88649749",
          "End": "88650049",
          "MinCoverage": "261",
          "MaxCoverage": "11506",
          "TotCoverage": "211633",
          "MeanCoverage": "705.4433333333334"
        },
        {
          "Gene": "BMPR1A",
          "Chr": "chr10",
          "Start": "88651689",
          "End": "88652102",
          "MinCoverage": "55",
          "MaxCoverage": "5736",
          "TotCoverage": "211807",
          "MeanCoverage": "512.8498789346247"
        },
        {
          "Gene": "BMPR1A",
          "Chr": "chr10",
          "Start": "88659478",
          "End": "88659953",
          "MinCoverage": "169",
          "MaxCoverage": "9064",
          "TotCoverage": "311987",
          "MeanCoverage": "656.8147368421053"
        },
        {
          "Gene": "BMPR1A",
          "Chr": "chr10",
          "Start": "88671918",
          "End": "88672218",
          "MinCoverage": "183",
          "MaxCoverage": "7110",
          "TotCoverage": "137212",
          "MeanCoverage": "457.37333333333333"
        },
        {
          "Gene": "BMPR1A",
          "Chr": "chr10",
          "Start": "88676836",
          "End": "88677136",
          "MinCoverage": "269",
          "MaxCoverage": "7210",
          "TotCoverage": "164454",
          "MeanCoverage": "548.18"
        },
        {
          "Gene": "BMPR1A",
          "Chr": "chr10",
          "Start": "88678867",
          "End": "88679287",
          "MinCoverage": "96",
          "MaxCoverage": "16497",
          "TotCoverage": "268781",
          "MeanCoverage": "639.9547619047619"
        },
        {
          "Gene": "BMPR1A",
          "Chr": "chr10",
          "Start": "88681214",
          "End": "88681514",
          "MinCoverage": "110",
          "MaxCoverage": "5616",
          "TotCoverage": "102986",
          "MeanCoverage": "343.2866666666667"
        },
        {
          "Gene": "PTEN",
          "Chr": "chr10",
          "Start": "89624135",
          "End": "89624401",
          "MinCoverage": "590",
          "MaxCoverage": "22110",
          "TotCoverage": "616720",
          "MeanCoverage": "2318.496240601504"
        },
        {
          "Gene": "PTEN",
          "Chr": "chr10",
          "Start": "89685160",
          "End": "89685424",
          "MinCoverage": "405",
          "MaxCoverage": "7155",
          "TotCoverage": "312507",
          "MeanCoverage": "1183.7386363636363"
        },
        {
          "Gene": "PTEN",
          "Chr": "chr10",
          "Start": "89711774",
          "End": "89712038",
          "MinCoverage": "297",
          "MaxCoverage": "13034",
          "TotCoverage": "290491",
          "MeanCoverage": "1100.344696969697"
        },
        {
          "Gene": "PTEN",
          "Chr": "chr10",
          "Start": "89717543",
          "End": "89717831",
          "MinCoverage": "428",
          "MaxCoverage": "11871",
          "TotCoverage": "300994",
          "MeanCoverage": "1045.1180555555557"
        },
        {
          "Gene": "PTEN",
          "Chr": "chr10",
          "Start": "89720553",
          "End": "89720941",
          "MinCoverage": "70",
          "MaxCoverage": "8694",
          "TotCoverage": "304962",
          "MeanCoverage": "785.9845360824743"
        },
        {
          "Gene": "FGFR2",
          "Chr": "chr10",
          "Start": "123243144",
          "End": "123243384",
          "MinCoverage": "158",
          "MaxCoverage": "5382",
          "TotCoverage": "72671",
          "MeanCoverage": "302.79583333333335"
        },
        {
          "Gene": "FGFR2",
          "Chr": "chr10",
          "Start": "123244857",
          "End": "123245097",
          "MinCoverage": "294",
          "MaxCoverage": "5247",
          "TotCoverage": "107057",
          "MeanCoverage": "446.0708333333333"
        },
        {
          "Gene": "FGFR2",
          "Chr": "chr10",
          "Start": "123246782",
          "End": "123247022",
          "MinCoverage": "119",
          "MaxCoverage": "5832",
          "TotCoverage": "85474",
          "MeanCoverage": "356.14166666666665"
        },
        {
          "Gene": "FGFR2",
          "Chr": "chr10",
          "Start": "123247445",
          "End": "123247685",
          "MinCoverage": "263",
          "MaxCoverage": "5020",
          "TotCoverage": "125372",
          "MeanCoverage": "522.3833333333333"
        },
        {
          "Gene": "FGFR2",
          "Chr": "chr10",
          "Start": "123255990",
          "End": "123256290",
          "MinCoverage": "133",
          "MaxCoverage": "6182",
          "TotCoverage": "88808",
          "MeanCoverage": "296.02666666666664"
        },
        {
          "Gene": "FGFR2",
          "Chr": "chr10",
          "Start": "123257900",
          "End": "123258183",
          "MinCoverage": "614",
          "MaxCoverage": "16011",
          "TotCoverage": "406010",
          "MeanCoverage": "1434.6643109540637"
        },
        {
          "Gene": "FGFR2",
          "Chr": "chr10",
          "Start": "123260280",
          "End": "123260520",
          "MinCoverage": "634",
          "MaxCoverage": "10755",
          "TotCoverage": "412278",
          "MeanCoverage": "1717.825"
        },
        {
          "Gene": "FGFR2",
          "Chr": "chr10",
          "Start": "123263229",
          "End": "123263529",
          "MinCoverage": "112",
          "MaxCoverage": "3896",
          "TotCoverage": "75784",
          "MeanCoverage": "252.61333333333334"
        },
        {
          "Gene": "FGFR2",
          "Chr": "chr10",
          "Start": "123274551",
          "End": "123274920",
          "MinCoverage": "457",
          "MaxCoverage": "20772",
          "TotCoverage": "509995",
          "MeanCoverage": "1382.10027100271"
        },
        {
          "Gene": "FGFR2",
          "Chr": "chr10",
          "Start": "123276645",
          "End": "123277065",
          "MinCoverage": "80",
          "MaxCoverage": "7928",
          "TotCoverage": "371139",
          "MeanCoverage": "883.6642857142857"
        },
        {
          "Gene": "FGFR2",
          "Chr": "chr10",
          "Start": "123278119",
          "End": "123278419",
          "MinCoverage": "274",
          "MaxCoverage": "10008",
          "TotCoverage": "167677",
          "MeanCoverage": "558.9233333333333"
        },
        {
          "Gene": "FGFR2",
          "Chr": "chr10",
          "Start": "123279395",
          "End": "123279785",
          "MinCoverage": "412",
          "MaxCoverage": "16488",
          "TotCoverage": "1068396",
          "MeanCoverage": "2739.476923076923"
        },
        {
          "Gene": "FGFR2",
          "Chr": "chr10",
          "Start": "123297990",
          "End": "123298290",
          "MinCoverage": "190",
          "MaxCoverage": "5976",
          "TotCoverage": "175573",
          "MeanCoverage": "585.2433333333333"
        },
        {
          "Gene": "FGFR2",
          "Chr": "chr10",
          "Start": "123310747",
          "End": "123311047",
          "MinCoverage": "314",
          "MaxCoverage": "6268",
          "TotCoverage": "274986",
          "MeanCoverage": "916.62"
        },
        {
          "Gene": "FGFR2",
          "Chr": "chr10",
          "Start": "123324874",
          "End": "123325294",
          "MinCoverage": "166",
          "MaxCoverage": "7830",
          "TotCoverage": "401953",
          "MeanCoverage": "957.0309523809524"
        },
        {
          "Gene": "FGFR2",
          "Chr": "chr10",
          "Start": "123353167",
          "End": "123353827",
          "MinCoverage": "618",
          "MaxCoverage": "12945",
          "TotCoverage": "1221421",
          "MeanCoverage": "1850.637878787879"
        },
        {
          "Gene": "DMBT1",
          "Chr": "chr10",
          "Start": "124331733",
          "End": "124331973",
          "MinCoverage": "148",
          "MaxCoverage": "3852",
          "TotCoverage": "92798",
          "MeanCoverage": "386.65833333333336"
        },
        {
          "Gene": "DMBT1",
          "Chr": "chr10",
          "Start": "124333134",
          "End": "124333374",
          "MinCoverage": "184",
          "MaxCoverage": "5715",
          "TotCoverage": "98712",
          "MeanCoverage": "411.3"
        },
        {
          "Gene": "DMBT1",
          "Chr": "chr10",
          "Start": "124335852",
          "End": "124336370",
          "MinCoverage": "170",
          "MaxCoverage": "10185",
          "TotCoverage": "698457",
          "MeanCoverage": "1348.372586872587"
        },
        {
          "Gene": "DMBT1",
          "Chr": "chr10",
          "Start": "124337221",
          "End": "124337461",
          "MinCoverage": "326",
          "MaxCoverage": "8272",
          "TotCoverage": "224256",
          "MeanCoverage": "934.4"
        },
        {
          "Gene": "DMBT1",
          "Chr": "chr10",
          "Start": "124339015",
          "End": "124339495",
          "MinCoverage": "434",
          "MaxCoverage": "10344",
          "TotCoverage": "1077269",
          "MeanCoverage": "2244.3104166666667"
        },
        {
          "Gene": "DMBT1",
          "Chr": "chr10",
          "Start": "124340276",
          "End": "124340516",
          "MinCoverage": "417",
          "MaxCoverage": "9460",
          "TotCoverage": "266881",
          "MeanCoverage": "1112.0041666666666"
        },
        {
          "Gene": "DMBT1",
          "Chr": "chr10",
          "Start": "124342037",
          "End": "124342517",
          "MinCoverage": "621",
          "MaxCoverage": "6021",
          "TotCoverage": "1152635",
          "MeanCoverage": "2401.3229166666665"
        },
        {
          "Gene": "DMBT1",
          "Chr": "chr10",
          "Start": "124345497",
          "End": "124345977",
          "MinCoverage": "564",
          "MaxCoverage": "15354",
          "TotCoverage": "1063914",
          "MeanCoverage": "2216.4875"
        },
        {
          "Gene": "DMBT1",
          "Chr": "chr10",
          "Start": "124348381",
          "End": "124348861",
          "MinCoverage": "767",
          "MaxCoverage": "12684",
          "TotCoverage": "1166972",
          "MeanCoverage": "2431.1916666666666"
        },
        {
          "Gene": "DMBT1",
          "Chr": "chr10",
          "Start": "124350075",
          "End": "124350315",
          "MinCoverage": "246",
          "MaxCoverage": "5706",
          "TotCoverage": "144691",
          "MeanCoverage": "602.8791666666667"
        },
        {
          "Gene": "DMBT1",
          "Chr": "chr10",
          "Start": "124351709",
          "End": "124352189",
          "MinCoverage": "356",
          "MaxCoverage": "17076",
          "TotCoverage": "1189126",
          "MeanCoverage": "2477.3458333333333"
        },
        {
          "Gene": "DMBT1",
          "Chr": "chr10",
          "Start": "124352979",
          "End": "124353219",
          "MinCoverage": "537",
          "MaxCoverage": "11480",
          "TotCoverage": "306075",
          "MeanCoverage": "1275.3125"
        },
        {
          "Gene": "DMBT1",
          "Chr": "chr10",
          "Start": "124358211",
          "End": "124358691",
          "MinCoverage": "468",
          "MaxCoverage": "11116",
          "TotCoverage": "1036094",
          "MeanCoverage": "2158.5291666666667"
        },
        {
          "Gene": "DMBT1",
          "Chr": "chr10",
          "Start": "124359474",
          "End": "124359714",
          "MinCoverage": "310",
          "MaxCoverage": "8406",
          "TotCoverage": "269024",
          "MeanCoverage": "1120.9333333333334"
        },
        {
          "Gene": "DMBT1",
          "Chr": "chr10",
          "Start": "124361234",
          "End": "124361714",
          "MinCoverage": "503",
          "MaxCoverage": "10005",
          "TotCoverage": "895872",
          "MeanCoverage": "1866.4"
        },
        {
          "Gene": "DMBT1",
          "Chr": "chr10",
          "Start": "124376639",
          "End": "124376879",
          "MinCoverage": "337",
          "MaxCoverage": "7452",
          "TotCoverage": "142483",
          "MeanCoverage": "593.6791666666667"
        },
        {
          "Gene": "DMBT1",
          "Chr": "chr10",
          "Start": "124377454",
          "End": "124377934",
          "MinCoverage": "557",
          "MaxCoverage": "10005",
          "TotCoverage": "1157824",
          "MeanCoverage": "2412.133333333333"
        },
        {
          "Gene": "DMBT1",
          "Chr": "chr10",
          "Start": "124378718",
          "End": "124378958",
          "MinCoverage": "517",
          "MaxCoverage": "7173",
          "TotCoverage": "198019",
          "MeanCoverage": "825.0791666666667"
        },
        {
          "Gene": "DMBT1",
          "Chr": "chr10",
          "Start": "124380494",
          "End": "124380974",
          "MinCoverage": "472",
          "MaxCoverage": "9636",
          "TotCoverage": "1088830",
          "MeanCoverage": "2268.3958333333335"
        },
        {
          "Gene": "DMBT1",
          "Chr": "chr10",
          "Start": "124384685",
          "End": "124384925",
          "MinCoverage": "317",
          "MaxCoverage": "4935",
          "TotCoverage": "127644",
          "MeanCoverage": "531.85"
        },
        {
          "Gene": "DMBT1",
          "Chr": "chr10",
          "Start": "124389282",
          "End": "124389582",
          "MinCoverage": "53",
          "MaxCoverage": "9336",
          "TotCoverage": "177766",
          "MeanCoverage": "592.5533333333333"
        },
        {
          "Gene": "DMBT1",
          "Chr": "chr10",
          "Start": "124389724",
          "End": "124390084",
          "MinCoverage": "268",
          "MaxCoverage": "11997",
          "TotCoverage": "311867",
          "MeanCoverage": "866.2972222222222"
        },
        {
          "Gene": "DMBT1",
          "Chr": "chr10",
          "Start": "124390396",
          "End": "124390876",
          "MinCoverage": "430",
          "MaxCoverage": "5616",
          "TotCoverage": "323160",
          "MeanCoverage": "673.25"
        },
        {
          "Gene": "DMBT1",
          "Chr": "chr10",
          "Start": "124391260",
          "End": "124391500",
          "MinCoverage": "116",
          "MaxCoverage": "4176",
          "TotCoverage": "98659",
          "MeanCoverage": "411.07916666666665"
        },
        {
          "Gene": "DMBT1",
          "Chr": "chr10",
          "Start": "124395430",
          "End": "124395790",
          "MinCoverage": "78",
          "MaxCoverage": "6019",
          "TotCoverage": "128137",
          "MeanCoverage": "355.93611111111113"
        },
        {
          "Gene": "DMBT1",
          "Chr": "chr10",
          "Start": "124396585",
          "End": "124396885",
          "MinCoverage": "254",
          "MaxCoverage": "6589",
          "TotCoverage": "136959",
          "MeanCoverage": "456.53"
        },
        {
          "Gene": "DMBT1",
          "Chr": "chr10",
          "Start": "124399490",
          "End": "124400030",
          "MinCoverage": "215",
          "MaxCoverage": "7080",
          "TotCoverage": "428732",
          "MeanCoverage": "793.9481481481481"
        },
        {
          "Gene": "DMBT1",
          "Chr": "chr10",
          "Start": "124402574",
          "End": "124403355",
          "MinCoverage": "666",
          "MaxCoverage": "8349",
          "TotCoverage": "1080871",
          "MeanCoverage": "1383.9577464788733"
        },
        {
          "Gene": "HRAS",
          "Chr": "chr11",
          "Start": "533204",
          "End": "533684",
          "MinCoverage": "43",
          "MaxCoverage": "8127",
          "TotCoverage": "588540",
          "MeanCoverage": "1226.125"
        },
        {
          "Gene": "HRAS",
          "Chr": "chr11",
          "Start": "533704",
          "End": "534009",
          "MinCoverage": "1339",
          "MaxCoverage": "17808",
          "TotCoverage": "1215809",
          "MeanCoverage": "3986.259016393443"
        },
        {
          "Gene": "HRAS",
          "Chr": "chr11",
          "Start": "534143",
          "End": "534443",
          "MinCoverage": "805",
          "MaxCoverage": "12333",
          "TotCoverage": "803061",
          "MeanCoverage": "2676.87"
        },
        {
          "Gene": "NUP98",
          "Chr": "chr11",
          "Start": "3696092",
          "End": "3697662",
          "MinCoverage": "321",
          "MaxCoverage": "14383",
          "TotCoverage": "2338981",
          "MeanCoverage": "1489.7968152866242"
        },
        {
          "Gene": "NUP98",
          "Chr": "chr11",
          "Start": "3697674",
          "End": "3697914",
          "MinCoverage": "847",
          "MaxCoverage": "13041",
          "TotCoverage": "371286",
          "MeanCoverage": "1547.025"
        },
        {
          "Gene": "NUP98",
          "Chr": "chr11",
          "Start": "3700710",
          "End": "3701010",
          "MinCoverage": "278",
          "MaxCoverage": "11550",
          "TotCoverage": "269687",
          "MeanCoverage": "898.9566666666667"
        },
        {
          "Gene": "NUP98",
          "Chr": "chr11",
          "Start": "3704370",
          "End": "3704730",
          "MinCoverage": "255",
          "MaxCoverage": "11950",
          "TotCoverage": "393976",
          "MeanCoverage": "1094.3777777777777"
        },
        {
          "Gene": "NUP98",
          "Chr": "chr11",
          "Start": "3707133",
          "End": "3707493",
          "MinCoverage": "224",
          "MaxCoverage": "9564",
          "TotCoverage": "219537",
          "MeanCoverage": "609.825"
        },
        {
          "Gene": "NUP98",
          "Chr": "chr11",
          "Start": "3712497",
          "End": "3712797",
          "MinCoverage": "272",
          "MaxCoverage": "8734",
          "TotCoverage": "156921",
          "MeanCoverage": "523.07"
        },
        {
          "Gene": "NUP98",
          "Chr": "chr11",
          "Start": "3714383",
          "End": "3714683",
          "MinCoverage": "498",
          "MaxCoverage": "8512",
          "TotCoverage": "291904",
          "MeanCoverage": "973.0133333333333"
        },
        {
          "Gene": "NUP98",
          "Chr": "chr11",
          "Start": "3716607",
          "End": "3716907",
          "MinCoverage": "447",
          "MaxCoverage": "11221",
          "TotCoverage": "304102",
          "MeanCoverage": "1013.6733333333333"
        },
        {
          "Gene": "NUP98",
          "Chr": "chr11",
          "Start": "3720246",
          "End": "3720768",
          "MinCoverage": "216",
          "MaxCoverage": "9210",
          "TotCoverage": "426225",
          "MeanCoverage": "816.5229885057471"
        },
        {
          "Gene": "NUP98",
          "Chr": "chr11",
          "Start": "3721774",
          "End": "3722134",
          "MinCoverage": "495",
          "MaxCoverage": "7905",
          "TotCoverage": "295463",
          "MeanCoverage": "820.7305555555556"
        },
        {
          "Gene": "NUP98",
          "Chr": "chr11",
          "Start": "3723637",
          "End": "3724177",
          "MinCoverage": "202",
          "MaxCoverage": "10880",
          "TotCoverage": "498120",
          "MeanCoverage": "922.4444444444445"
        },
        {
          "Gene": "NUP98",
          "Chr": "chr11",
          "Start": "3727615",
          "End": "3727915",
          "MinCoverage": "510",
          "MaxCoverage": "12480",
          "TotCoverage": "364991",
          "MeanCoverage": "1216.6366666666668"
        },
        {
          "Gene": "NUP98",
          "Chr": "chr11",
          "Start": "3734986",
          "End": "3735286",
          "MinCoverage": "217",
          "MaxCoverage": "9361",
          "TotCoverage": "218386",
          "MeanCoverage": "727.9533333333334"
        },
        {
          "Gene": "NUP98",
          "Chr": "chr11",
          "Start": "3740590",
          "End": "3740830",
          "MinCoverage": "507",
          "MaxCoverage": "12460",
          "TotCoverage": "303266",
          "MeanCoverage": "1263.6083333333333"
        },
        {
          "Gene": "NUP98",
          "Chr": "chr11",
          "Start": "3744325",
          "End": "3744745",
          "MinCoverage": "320",
          "MaxCoverage": "7216",
          "TotCoverage": "317683",
          "MeanCoverage": "756.3880952380953"
        },
        {
          "Gene": "NUP98",
          "Chr": "chr11",
          "Start": "3746270",
          "End": "3746510",
          "MinCoverage": "357",
          "MaxCoverage": "10584",
          "TotCoverage": "199449",
          "MeanCoverage": "831.0375"
        },
        {
          "Gene": "NUP98",
          "Chr": "chr11",
          "Start": "3752568",
          "End": "3752868",
          "MinCoverage": "147",
          "MaxCoverage": "6288",
          "TotCoverage": "171733",
          "MeanCoverage": "572.4433333333334"
        },
        {
          "Gene": "NUP98",
          "Chr": "chr11",
          "Start": "3756334",
          "End": "3756762",
          "MinCoverage": "102",
          "MaxCoverage": "6640",
          "TotCoverage": "210694",
          "MeanCoverage": "492.27570093457945"
        },
        {
          "Gene": "NUP98",
          "Chr": "chr11",
          "Start": "3765658",
          "End": "3765958",
          "MinCoverage": "96",
          "MaxCoverage": "4768",
          "TotCoverage": "97085",
          "MeanCoverage": "323.6166666666667"
        },
        {
          "Gene": "NUP98",
          "Chr": "chr11",
          "Start": "3774471",
          "End": "3774711",
          "MinCoverage": "685",
          "MaxCoverage": "7520",
          "TotCoverage": "224103",
          "MeanCoverage": "933.7625"
        },
        {
          "Gene": "NUP98",
          "Chr": "chr11",
          "Start": "3789751",
          "End": "3790182",
          "MinCoverage": "189",
          "MaxCoverage": "10829",
          "TotCoverage": "442668",
          "MeanCoverage": "1027.0719257540604"
        },
        {
          "Gene": "NUP98",
          "Chr": "chr11",
          "Start": "3794795",
          "End": "3795035",
          "MinCoverage": "196",
          "MaxCoverage": "6713",
          "TotCoverage": "174974",
          "MeanCoverage": "729.0583333333333"
        },
        {
          "Gene": "NUP98",
          "Chr": "chr11",
          "Start": "3797061",
          "End": "3797301",
          "MinCoverage": "143",
          "MaxCoverage": "4620",
          "TotCoverage": "120081",
          "MeanCoverage": "500.3375"
        },
        {
          "Gene": "NUP98",
          "Chr": "chr11",
          "Start": "3800040",
          "End": "3800340",
          "MinCoverage": "295",
          "MaxCoverage": "10680",
          "TotCoverage": "227472",
          "MeanCoverage": "758.24"
        },
        {
          "Gene": "NUP98",
          "Chr": "chr11",
          "Start": "3803203",
          "End": "3803443",
          "MinCoverage": "273",
          "MaxCoverage": "9889",
          "TotCoverage": "149229",
          "MeanCoverage": "621.7875"
        },
        {
          "Gene": "FANCF",
          "Chr": "chr11",
          "Start": "22646193",
          "End": "22647418",
          "MinCoverage": "324",
          "MaxCoverage": "12412",
          "TotCoverage": "2470780",
          "MeanCoverage": "2016.9632653061224"
        },
        {
          "Gene": "WT1",
          "Chr": "chr11",
          "Start": "32456012",
          "End": "32457299",
          "MinCoverage": "3",
          "MaxCoverage": "1386",
          "TotCoverage": "177500",
          "MeanCoverage": "137.9176379176379"
        },
        {
          "Gene": "DDB2",
          "Chr": "chr11",
          "Start": "47236584",
          "End": "47238084",
          "MinCoverage": "249",
          "MaxCoverage": "7248",
          "TotCoverage": "1158028",
          "MeanCoverage": "772.0186666666667"
        },
        {
          "Gene": "DDB2",
          "Chr": "chr11",
          "Start": "47238351",
          "End": "47238651",
          "MinCoverage": "150",
          "MaxCoverage": "5436",
          "TotCoverage": "118693",
          "MeanCoverage": "395.6433333333333"
        },
        {
          "Gene": "DDB2",
          "Chr": "chr11",
          "Start": "47254287",
          "End": "47254587",
          "MinCoverage": "195",
          "MaxCoverage": "11864",
          "TotCoverage": "284711",
          "MeanCoverage": "949.0366666666666"
        },
        {
          "Gene": "DDB2",
          "Chr": "chr11",
          "Start": "47256017",
          "End": "47256544",
          "MinCoverage": "105",
          "MaxCoverage": "11935",
          "TotCoverage": "386847",
          "MeanCoverage": "734.055028462998"
        },
        {
          "Gene": "DDB2",
          "Chr": "chr11",
          "Start": "47256741",
          "End": "47257041",
          "MinCoverage": "108",
          "MaxCoverage": "3580",
          "TotCoverage": "162621",
          "MeanCoverage": "542.07"
        },
        {
          "Gene": "DDB2",
          "Chr": "chr11",
          "Start": "47259319",
          "End": "47259831",
          "MinCoverage": "87",
          "MaxCoverage": "8515",
          "TotCoverage": "341973",
          "MeanCoverage": "667.916015625"
        },
        {
          "Gene": "DDB2",
          "Chr": "chr11",
          "Start": "47260289",
          "End": "47260829",
          "MinCoverage": "127",
          "MaxCoverage": "3871",
          "TotCoverage": "173114",
          "MeanCoverage": "320.5814814814815"
        },
        {
          "Gene": "MRE11",
          "Chr": "chr11",
          "Start": "94163024",
          "End": "94163204",
          "MinCoverage": "334",
          "MaxCoverage": "9924",
          "TotCoverage": "199949",
          "MeanCoverage": "1110.8277777777778"
        },
        {
          "Gene": "BIRC3",
          "Chr": "chr11",
          "Start": "102193347",
          "End": "102193695",
          "MinCoverage": "112",
          "MaxCoverage": "5240",
          "TotCoverage": "113232",
          "MeanCoverage": "325.37931034482756"
        },
        {
          "Gene": "ATM",
          "Chr": "chr11",
          "Start": "108093495",
          "End": "108093975",
          "MinCoverage": "206",
          "MaxCoverage": "8330",
          "TotCoverage": "417164",
          "MeanCoverage": "869.0916666666667"
        },
        {
          "Gene": "ATM",
          "Chr": "chr11",
          "Start": "108098199",
          "End": "108098667",
          "MinCoverage": "372",
          "MaxCoverage": "9756",
          "TotCoverage": "493243",
          "MeanCoverage": "1053.9380341880342"
        },
        {
          "Gene": "ATM",
          "Chr": "chr11",
          "Start": "108099847",
          "End": "108100147",
          "MinCoverage": "140",
          "MaxCoverage": "7315",
          "TotCoverage": "287479",
          "MeanCoverage": "958.2633333333333"
        },
        {
          "Gene": "ATM",
          "Chr": "chr11",
          "Start": "108106328",
          "End": "108106628",
          "MinCoverage": "254",
          "MaxCoverage": "9493",
          "TotCoverage": "251416",
          "MeanCoverage": "838.0533333333333"
        },
        {
          "Gene": "ATM",
          "Chr": "chr11",
          "Start": "108114494",
          "End": "108114906",
          "MinCoverage": "127",
          "MaxCoverage": "9810",
          "TotCoverage": "286638",
          "MeanCoverage": "695.7233009708738"
        },
        {
          "Gene": "ATM",
          "Chr": "chr11",
          "Start": "108115453",
          "End": "108115813",
          "MinCoverage": "291",
          "MaxCoverage": "10112",
          "TotCoverage": "390274",
          "MeanCoverage": "1084.0944444444444"
        },
        {
          "Gene": "ATM",
          "Chr": "chr11",
          "Start": "108117622",
          "End": "108117960",
          "MinCoverage": "247",
          "MaxCoverage": "8706",
          "TotCoverage": "305959",
          "MeanCoverage": "905.2041420118343"
        },
        {
          "Gene": "ATM",
          "Chr": "chr11",
          "Start": "108119523",
          "End": "108119936",
          "MinCoverage": "238",
          "MaxCoverage": "11388",
          "TotCoverage": "418229",
          "MeanCoverage": "1012.6610169491526"
        },
        {
          "Gene": "ATM",
          "Chr": "chr11",
          "Start": "108121362",
          "End": "108121935",
          "MinCoverage": "154",
          "MaxCoverage": "13590",
          "TotCoverage": "739933",
          "MeanCoverage": "1291.3315881326353"
        },
        {
          "Gene": "ATM",
          "Chr": "chr11",
          "Start": "108122510",
          "End": "108122810",
          "MinCoverage": "485",
          "MaxCoverage": "13743",
          "TotCoverage": "384386",
          "MeanCoverage": "1281.2866666666666"
        },
        {
          "Gene": "ATM",
          "Chr": "chr11",
          "Start": "108123424",
          "End": "108123711",
          "MinCoverage": "253",
          "MaxCoverage": "7020",
          "TotCoverage": "294310",
          "MeanCoverage": "1025.4703832752614"
        },
        {
          "Gene": "ATM",
          "Chr": "chr11",
          "Start": "108124473",
          "End": "108124833",
          "MinCoverage": "368",
          "MaxCoverage": "10311",
          "TotCoverage": "337965",
          "MeanCoverage": "938.7916666666666"
        },
        {
          "Gene": "ATM",
          "Chr": "chr11",
          "Start": "108126732",
          "End": "108127147",
          "MinCoverage": "385",
          "MaxCoverage": "10233",
          "TotCoverage": "344545",
          "MeanCoverage": "830.2289156626506"
        },
        {
          "Gene": "ATM",
          "Chr": "chr11",
          "Start": "108128118",
          "End": "108128460",
          "MinCoverage": "385",
          "MaxCoverage": "11538",
          "TotCoverage": "369039",
          "MeanCoverage": "1079.061403508772"
        },
        {
          "Gene": "ATM",
          "Chr": "chr11",
          "Start": "108129606",
          "End": "108129939",
          "MinCoverage": "350",
          "MaxCoverage": "17210",
          "TotCoverage": "501527",
          "MeanCoverage": "1506.0870870870872"
        },
        {
          "Gene": "ATM",
          "Chr": "chr11",
          "Start": "108137833",
          "End": "108138133",
          "MinCoverage": "498",
          "MaxCoverage": "17269",
          "TotCoverage": "515600",
          "MeanCoverage": "1718.6666666666667"
        },
        {
          "Gene": "ATM",
          "Chr": "chr11",
          "Start": "108139086",
          "End": "108139386",
          "MinCoverage": "622",
          "MaxCoverage": "13630",
          "TotCoverage": "331632",
          "MeanCoverage": "1105.44"
        },
        {
          "Gene": "ATM",
          "Chr": "chr11",
          "Start": "108141711",
          "End": "108142205",
          "MinCoverage": "251",
          "MaxCoverage": "11892",
          "TotCoverage": "385544",
          "MeanCoverage": "780.4534412955466"
        },
        {
          "Gene": "ATM",
          "Chr": "chr11",
          "Start": "108143176",
          "End": "108143633",
          "MinCoverage": "479",
          "MaxCoverage": "12880",
          "TotCoverage": "616477",
          "MeanCoverage": "1348.964989059081"
        },
        {
          "Gene": "ATM",
          "Chr": "chr11",
          "Start": "108150025",
          "End": "108150434",
          "MinCoverage": "341",
          "MaxCoverage": "8388",
          "TotCoverage": "391482",
          "MeanCoverage": "957.1687041564792"
        },
        {
          "Gene": "ATM",
          "Chr": "chr11",
          "Start": "108151658",
          "End": "108151958",
          "MinCoverage": "151",
          "MaxCoverage": "7280",
          "TotCoverage": "193032",
          "MeanCoverage": "643.44"
        },
        {
          "Gene": "ATM",
          "Chr": "chr11",
          "Start": "108153371",
          "End": "108153671",
          "MinCoverage": "474",
          "MaxCoverage": "13222",
          "TotCoverage": "354260",
          "MeanCoverage": "1180.8666666666666"
        },
        {
          "Gene": "ATM",
          "Chr": "chr11",
          "Start": "108154896",
          "End": "108155284",
          "MinCoverage": "42",
          "MaxCoverage": "12025",
          "TotCoverage": "651712",
          "MeanCoverage": "1679.6701030927834"
        },
        {
          "Gene": "ATM",
          "Chr": "chr11",
          "Start": "108157824",
          "End": "108158535",
          "MinCoverage": "305",
          "MaxCoverage": "6270",
          "TotCoverage": "489378",
          "MeanCoverage": "688.295358649789"
        },
        {
          "Gene": "ATM",
          "Chr": "chr11",
          "Start": "108159646",
          "End": "108159886",
          "MinCoverage": "599",
          "MaxCoverage": "8900",
          "TotCoverage": "377588",
          "MeanCoverage": "1573.2833333333333"
        },
        {
          "Gene": "ATM",
          "Chr": "chr11",
          "Start": "108160245",
          "End": "108161097",
          "MinCoverage": "349",
          "MaxCoverage": "14840",
          "TotCoverage": "737099",
          "MeanCoverage": "865.1396713615023"
        },
        {
          "Gene": "ATM",
          "Chr": "chr11",
          "Start": "108161119",
          "End": "108161299",
          "MinCoverage": "146",
          "MaxCoverage": "2664",
          "TotCoverage": "82304",
          "MeanCoverage": "457.24444444444447"
        },
        {
          "Gene": "ATM",
          "Chr": "chr11",
          "Start": "108161410",
          "End": "108161530",
          "MinCoverage": "296",
          "MaxCoverage": "2898",
          "TotCoverage": "48316",
          "MeanCoverage": "402.6333333333333"
        },
        {
          "Gene": "ATM",
          "Chr": "chr11",
          "Start": "108163282",
          "End": "108163582",
          "MinCoverage": "486",
          "MaxCoverage": "10830",
          "TotCoverage": "364855",
          "MeanCoverage": "1216.1833333333334"
        },
        {
          "Gene": "ATM",
          "Chr": "chr11",
          "Start": "108163847",
          "End": "108164266",
          "MinCoverage": "272",
          "MaxCoverage": "9592",
          "TotCoverage": "278020",
          "MeanCoverage": "663.5322195704057"
        },
        {
          "Gene": "ATM",
          "Chr": "chr11",
          "Start": "108165595",
          "End": "108166462",
          "MinCoverage": "369",
          "MaxCoverage": "12493",
          "TotCoverage": "766046",
          "MeanCoverage": "883.5594002306805"
        },
        {
          "Gene": "ATM",
          "Chr": "chr11",
          "Start": "108166632",
          "End": "108166845",
          "MinCoverage": "510",
          "MaxCoverage": "9348",
          "TotCoverage": "252326",
          "MeanCoverage": "1184.6291079812206"
        },
        {
          "Gene": "ATM",
          "Chr": "chr11",
          "Start": "108167643",
          "End": "108168184",
          "MinCoverage": "321",
          "MaxCoverage": "11112",
          "TotCoverage": "458164",
          "MeanCoverage": "846.8835489833641"
        },
        {
          "Gene": "ATM",
          "Chr": "chr11",
          "Start": "108170352",
          "End": "108170676",
          "MinCoverage": "367",
          "MaxCoverage": "13460",
          "TotCoverage": "330534",
          "MeanCoverage": "1020.1666666666666"
        },
        {
          "Gene": "ATM",
          "Chr": "chr11",
          "Start": "108172288",
          "End": "108172595",
          "MinCoverage": "676",
          "MaxCoverage": "21890",
          "TotCoverage": "489242",
          "MeanCoverage": "1593.6221498371335"
        },
        {
          "Gene": "ATM",
          "Chr": "chr11",
          "Start": "108173507",
          "End": "108173817",
          "MinCoverage": "395",
          "MaxCoverage": "12250",
          "TotCoverage": "319208",
          "MeanCoverage": "1029.7032258064517"
        },
        {
          "Gene": "ATM",
          "Chr": "chr11",
          "Start": "108175340",
          "End": "108175640",
          "MinCoverage": "191",
          "MaxCoverage": "11670",
          "TotCoverage": "220347",
          "MeanCoverage": "734.49"
        },
        {
          "Gene": "ATM",
          "Chr": "chr11",
          "Start": "108178547",
          "End": "108178787",
          "MinCoverage": "321",
          "MaxCoverage": "9360",
          "TotCoverage": "219210",
          "MeanCoverage": "913.375"
        },
        {
          "Gene": "ATM,C11orf65",
          "Chr": "chr11",
          "Start": "108180814",
          "End": "108181114",
          "MinCoverage": "529",
          "MaxCoverage": "13230",
          "TotCoverage": "474897",
          "MeanCoverage": "1582.99"
        },
        {
          "Gene": "ATM,C11orf65",
          "Chr": "chr11",
          "Start": "108183061",
          "End": "108183301",
          "MinCoverage": "251",
          "MaxCoverage": "7338",
          "TotCoverage": "244303",
          "MeanCoverage": "1017.9291666666667"
        },
        {
          "Gene": "ATM,C11orf65",
          "Chr": "chr11",
          "Start": "108186484",
          "End": "108186904",
          "MinCoverage": "441",
          "MaxCoverage": "11781",
          "TotCoverage": "332029",
          "MeanCoverage": "790.5452380952381"
        },
        {
          "Gene": "ATM,C11orf65",
          "Chr": "chr11",
          "Start": "108188023",
          "End": "108188323",
          "MinCoverage": "266",
          "MaxCoverage": "12780",
          "TotCoverage": "312895",
          "MeanCoverage": "1042.9833333333333"
        },
        {
          "Gene": "ATM,C11orf65",
          "Chr": "chr11",
          "Start": "108190612",
          "End": "108190852",
          "MinCoverage": "484",
          "MaxCoverage": "8496",
          "TotCoverage": "200020",
          "MeanCoverage": "833.4166666666666"
        },
        {
          "Gene": "ATM,C11orf65",
          "Chr": "chr11",
          "Start": "108191967",
          "End": "108192207",
          "MinCoverage": "351",
          "MaxCoverage": "8310",
          "TotCoverage": "223919",
          "MeanCoverage": "932.9958333333333"
        },
        {
          "Gene": "ATM,C11orf65",
          "Chr": "chr11",
          "Start": "108195973",
          "End": "108196333",
          "MinCoverage": "221",
          "MaxCoverage": "10612",
          "TotCoverage": "452793",
          "MeanCoverage": "1257.7583333333334"
        },
        {
          "Gene": "ATM,C11orf65",
          "Chr": "chr11",
          "Start": "108196718",
          "End": "108197018",
          "MinCoverage": "332",
          "MaxCoverage": "6644",
          "TotCoverage": "218959",
          "MeanCoverage": "729.8633333333333"
        },
        {
          "Gene": "ATM,C11orf65",
          "Chr": "chr11",
          "Start": "108198308",
          "End": "108198548",
          "MinCoverage": "400",
          "MaxCoverage": "6682",
          "TotCoverage": "151183",
          "MeanCoverage": "629.9291666666667"
        },
        {
          "Gene": "ATM,C11orf65",
          "Chr": "chr11",
          "Start": "108199676",
          "End": "108200036",
          "MinCoverage": "278",
          "MaxCoverage": "6773",
          "TotCoverage": "308979",
          "MeanCoverage": "858.275"
        },
        {
          "Gene": "ATM,C11orf65",
          "Chr": "chr11",
          "Start": "108200827",
          "End": "108201212",
          "MinCoverage": "576",
          "MaxCoverage": "9933",
          "TotCoverage": "438002",
          "MeanCoverage": "1137.6675324675325"
        },
        {
          "Gene": "ATM,C11orf65",
          "Chr": "chr11",
          "Start": "108201849",
          "End": "108202426",
          "MinCoverage": "279",
          "MaxCoverage": "13110",
          "TotCoverage": "555540",
          "MeanCoverage": "962.8076256499133"
        },
        {
          "Gene": "ATM,C11orf65",
          "Chr": "chr11",
          "Start": "108202534",
          "End": "108202834",
          "MinCoverage": "698",
          "MaxCoverage": "15688",
          "TotCoverage": "407751",
          "MeanCoverage": "1359.17"
        },
        {
          "Gene": "ATM,C11orf65",
          "Chr": "chr11",
          "Start": "108203437",
          "End": "108203677",
          "MinCoverage": "344",
          "MaxCoverage": "10920",
          "TotCoverage": "220193",
          "MeanCoverage": "917.4708333333333"
        },
        {
          "Gene": "ATM,C11orf65",
          "Chr": "chr11",
          "Start": "108204521",
          "End": "108204790",
          "MinCoverage": "225",
          "MaxCoverage": "6840",
          "TotCoverage": "182646",
          "MeanCoverage": "678.9814126394052"
        },
        {
          "Gene": "ATM,C11orf65",
          "Chr": "chr11",
          "Start": "108205615",
          "End": "108206102",
          "MinCoverage": "391",
          "MaxCoverage": "12150",
          "TotCoverage": "579312",
          "MeanCoverage": "1189.552361396304"
        },
        {
          "Gene": "ATM,C11orf65",
          "Chr": "chr11",
          "Start": "108206476",
          "End": "108206749",
          "MinCoverage": "117",
          "MaxCoverage": "10983",
          "TotCoverage": "263323",
          "MeanCoverage": "964.5531135531136"
        },
        {
          "Gene": "ATM,C11orf65",
          "Chr": "chr11",
          "Start": "108213873",
          "End": "108214173",
          "MinCoverage": "171",
          "MaxCoverage": "8631",
          "TotCoverage": "248076",
          "MeanCoverage": "826.92"
        },
        {
          "Gene": "ATM,C11orf65",
          "Chr": "chr11",
          "Start": "108216402",
          "End": "108216702",
          "MinCoverage": "151",
          "MaxCoverage": "7225",
          "TotCoverage": "300805",
          "MeanCoverage": "1002.6833333333333"
        },
        {
          "Gene": "ATM,C11orf65",
          "Chr": "chr11",
          "Start": "108217928",
          "End": "108218168",
          "MinCoverage": "456",
          "MaxCoverage": "11440",
          "TotCoverage": "258981",
          "MeanCoverage": "1079.0875"
        },
        {
          "Gene": "ATM,C11orf65",
          "Chr": "chr11",
          "Start": "108224429",
          "End": "108224669",
          "MinCoverage": "430",
          "MaxCoverage": "21120",
          "TotCoverage": "262940",
          "MeanCoverage": "1095.5833333333333"
        },
        {
          "Gene": "ATM,C11orf65",
          "Chr": "chr11",
          "Start": "108225453",
          "End": "108226915",
          "MinCoverage": "587",
          "MaxCoverage": "13300",
          "TotCoverage": "1530579",
          "MeanCoverage": "1046.9076607387142"
        },
        {
          "Gene": "ATM,C11orf65",
          "Chr": "chr11",
          "Start": "108235756",
          "End": "108236311",
          "MinCoverage": "540",
          "MaxCoverage": "13380",
          "TotCoverage": "868120",
          "MeanCoverage": "1564.1801801801803"
        },
        {
          "Gene": "KMT2A",
          "Chr": "chr11",
          "Start": "118307112",
          "End": "118307719",
          "MinCoverage": "90",
          "MaxCoverage": "7708",
          "TotCoverage": "375514",
          "MeanCoverage": "618.6392092257001"
        },
        {
          "Gene": "KMT2A",
          "Chr": "chr11",
          "Start": "118347458",
          "End": "118347758",
          "MinCoverage": "77",
          "MaxCoverage": "6498",
          "TotCoverage": "123934",
          "MeanCoverage": "413.11333333333334"
        },
        {
          "Gene": "KMT2A",
          "Chr": "chr11",
          "Start": "118348618",
          "End": "118348978",
          "MinCoverage": "99",
          "MaxCoverage": "9758",
          "TotCoverage": "234870",
          "MeanCoverage": "652.4166666666666"
        },
        {
          "Gene": "KMT2A",
          "Chr": "chr11",
          "Start": "118352378",
          "End": "118352858",
          "MinCoverage": "319",
          "MaxCoverage": "11767",
          "TotCoverage": "417122",
          "MeanCoverage": "869.0041666666667"
        },
        {
          "Gene": "KMT2A",
          "Chr": "chr11",
          "Start": "118354843",
          "End": "118355743",
          "MinCoverage": "174",
          "MaxCoverage": "9450",
          "TotCoverage": "605671",
          "MeanCoverage": "672.9677777777778"
        },
        {
          "Gene": "KMT2A",
          "Chr": "chr11",
          "Start": "118359268",
          "End": "118359606",
          "MinCoverage": "282",
          "MaxCoverage": "10634",
          "TotCoverage": "204917",
          "MeanCoverage": "606.2633136094674"
        },
        {
          "Gene": "KMT2A",
          "Chr": "chr11",
          "Start": "118361851",
          "End": "118362091",
          "MinCoverage": "286",
          "MaxCoverage": "8775",
          "TotCoverage": "136155",
          "MeanCoverage": "567.3125"
        },
        {
          "Gene": "KMT2A",
          "Chr": "chr11",
          "Start": "118362400",
          "End": "118362700",
          "MinCoverage": "99",
          "MaxCoverage": "8952",
          "TotCoverage": "200191",
          "MeanCoverage": "667.3033333333333"
        },
        {
          "Gene": "KMT2A",
          "Chr": "chr11",
          "Start": "118363708",
          "End": "118364008",
          "MinCoverage": "264",
          "MaxCoverage": "7422",
          "TotCoverage": "265724",
          "MeanCoverage": "885.7466666666667"
        },
        {
          "Gene": "KMT2A",
          "Chr": "chr11",
          "Start": "118366216",
          "End": "118366686",
          "MinCoverage": "283",
          "MaxCoverage": "17760",
          "TotCoverage": "406038",
          "MeanCoverage": "863.9106382978723"
        },
        {
          "Gene": "KMT2A",
          "Chr": "chr11",
          "Start": "118366908",
          "End": "118367148",
          "MinCoverage": "570",
          "MaxCoverage": "11056",
          "TotCoverage": "272662",
          "MeanCoverage": "1136.0916666666667"
        },
        {
          "Gene": "KMT2A",
          "Chr": "chr11",
          "Start": "118368599",
          "End": "118368839",
          "MinCoverage": "203",
          "MaxCoverage": "13176",
          "TotCoverage": "206260",
          "MeanCoverage": "859.4166666666666"
        },
        {
          "Gene": "KMT2A",
          "Chr": "chr11",
          "Start": "118368994",
          "End": "118369294",
          "MinCoverage": "83",
          "MaxCoverage": "4360",
          "TotCoverage": "177398",
          "MeanCoverage": "591.3266666666667"
        },
        {
          "Gene": "KMT2A",
          "Chr": "chr11",
          "Start": "118369956",
          "End": "118370196",
          "MinCoverage": "118",
          "MaxCoverage": "5810",
          "TotCoverage": "106024",
          "MeanCoverage": "441.76666666666665"
        },
        {
          "Gene": "KMT2A",
          "Chr": "chr11",
          "Start": "118370485",
          "End": "118370725",
          "MinCoverage": "283",
          "MaxCoverage": "4956",
          "TotCoverage": "130982",
          "MeanCoverage": "545.7583333333333"
        },
        {
          "Gene": "KMT2A",
          "Chr": "chr11",
          "Start": "118371650",
          "End": "118371890",
          "MinCoverage": "58",
          "MaxCoverage": "4008",
          "TotCoverage": "48869",
          "MeanCoverage": "203.62083333333334"
        },
        {
          "Gene": "KMT2A",
          "Chr": "chr11",
          "Start": "118372329",
          "End": "118372629",
          "MinCoverage": "301",
          "MaxCoverage": "10017",
          "TotCoverage": "214521",
          "MeanCoverage": "715.07"
        },
        {
          "Gene": "KMT2A",
          "Chr": "chr11",
          "Start": "118373046",
          "End": "118377426",
          "MinCoverage": "175",
          "MaxCoverage": "16144",
          "TotCoverage": "3619792",
          "MeanCoverage": "826.4365296803653"
        },
        {
          "Gene": "KMT2A",
          "Chr": "chr11",
          "Start": "118379715",
          "End": "118380009",
          "MinCoverage": "138",
          "MaxCoverage": "7584",
          "TotCoverage": "157440",
          "MeanCoverage": "535.5102040816327"
        },
        {
          "Gene": "KMT2A",
          "Chr": "chr11",
          "Start": "118390269",
          "End": "118390569",
          "MinCoverage": "314",
          "MaxCoverage": "7030",
          "TotCoverage": "233204",
          "MeanCoverage": "777.3466666666667"
        },
        {
          "Gene": "KMT2A",
          "Chr": "chr11",
          "Start": "118390605",
          "End": "118390845",
          "MinCoverage": "171",
          "MaxCoverage": "4440",
          "TotCoverage": "116362",
          "MeanCoverage": "484.84166666666664"
        },
        {
          "Gene": "KMT2A",
          "Chr": "chr11",
          "Start": "118391438",
          "End": "118391678",
          "MinCoverage": "228",
          "MaxCoverage": "6650",
          "TotCoverage": "137506",
          "MeanCoverage": "572.9416666666667"
        },
        {
          "Gene": "KMT2A",
          "Chr": "chr11",
          "Start": "118391947",
          "End": "118392187",
          "MinCoverage": "148",
          "MaxCoverage": "4620",
          "TotCoverage": "124013",
          "MeanCoverage": "516.7208333333333"
        },
        {
          "Gene": "ARHGEF12",
          "Chr": "chr11",
          "Start": "120350552",
          "End": "120350732",
          "MinCoverage": "232",
          "MaxCoverage": "10104",
          "TotCoverage": "103384",
          "MeanCoverage": "574.3555555555556"
        },
        {
          "Gene": "CDKN1B",
          "Chr": "chr12",
          "Start": "12870123",
          "End": "12871323",
          "MinCoverage": "101",
          "MaxCoverage": "6025",
          "TotCoverage": "775594",
          "MeanCoverage": "646.3283333333334"
        },
        {
          "Gene": "CDKN1B",
          "Chr": "chr12",
          "Start": "12871703",
          "End": "12871943",
          "MinCoverage": "105",
          "MaxCoverage": "3588",
          "TotCoverage": "78225",
          "MeanCoverage": "325.9375"
        },
        {
          "Gene": "KRAS",
          "Chr": "chr12",
          "Start": "25378431",
          "End": "25378777",
          "MinCoverage": "383",
          "MaxCoverage": "11205",
          "TotCoverage": "431139",
          "MeanCoverage": "1246.0664739884394"
        },
        {
          "Gene": "KRAS",
          "Chr": "chr12",
          "Start": "25380106",
          "End": "25380441",
          "MinCoverage": "188",
          "MaxCoverage": "7392",
          "TotCoverage": "282880",
          "MeanCoverage": "844.4179104477612"
        },
        {
          "Gene": "KRAS",
          "Chr": "chr12",
          "Start": "25398138",
          "End": "25398402",
          "MinCoverage": "490",
          "MaxCoverage": "15050",
          "TotCoverage": "324528",
          "MeanCoverage": "1229.2727272727273"
        },
        {
          "Gene": "ARID2",
          "Chr": "chr12",
          "Start": "46123545",
          "End": "46123993",
          "MinCoverage": "234",
          "MaxCoverage": "9632",
          "TotCoverage": "346483",
          "MeanCoverage": "773.3995535714286"
        },
        {
          "Gene": "ARID2",
          "Chr": "chr12",
          "Start": "46124928",
          "End": "46125168",
          "MinCoverage": "151",
          "MaxCoverage": "5868",
          "TotCoverage": "85513",
          "MeanCoverage": "356.3041666666667"
        },
        {
          "Gene": "ARID2",
          "Chr": "chr12",
          "Start": "46205147",
          "End": "46205387",
          "MinCoverage": "338",
          "MaxCoverage": "7852",
          "TotCoverage": "163361",
          "MeanCoverage": "680.6708333333333"
        },
        {
          "Gene": "ARID2",
          "Chr": "chr12",
          "Start": "46211381",
          "End": "46211741",
          "MinCoverage": "159",
          "MaxCoverage": "7020",
          "TotCoverage": "177229",
          "MeanCoverage": "492.3027777777778"
        },
        {
          "Gene": "ARID2",
          "Chr": "chr12",
          "Start": "46215116",
          "End": "46215356",
          "MinCoverage": "53",
          "MaxCoverage": "3834",
          "TotCoverage": "81798",
          "MeanCoverage": "340.825"
        },
        {
          "Gene": "ARID2",
          "Chr": "chr12",
          "Start": "46230302",
          "End": "46230842",
          "MinCoverage": "252",
          "MaxCoverage": "7447",
          "TotCoverage": "366549",
          "MeanCoverage": "678.7944444444445"
        },
        {
          "Gene": "ARID2",
          "Chr": "chr12",
          "Start": "46231027",
          "End": "46231567",
          "MinCoverage": "334",
          "MaxCoverage": "7680",
          "TotCoverage": "377723",
          "MeanCoverage": "699.487037037037"
        },
        {
          "Gene": "ARID2",
          "Chr": "chr12",
          "Start": "46240559",
          "End": "46240799",
          "MinCoverage": "220",
          "MaxCoverage": "6692",
          "TotCoverage": "118621",
          "MeanCoverage": "494.25416666666666"
        },
        {
          "Gene": "ARID2",
          "Chr": "chr12",
          "Start": "46242565",
          "End": "46242805",
          "MinCoverage": "210",
          "MaxCoverage": "4496",
          "TotCoverage": "86506",
          "MeanCoverage": "360.44166666666666"
        },
        {
          "Gene": "ARID2",
          "Chr": "chr12",
          "Start": "46243310",
          "End": "46243610",
          "MinCoverage": "128",
          "MaxCoverage": "5856",
          "TotCoverage": "169438",
          "MeanCoverage": "564.7933333333333"
        },
        {
          "Gene": "ARID2",
          "Chr": "chr12",
          "Start": "46243748",
          "End": "46246748",
          "MinCoverage": "139",
          "MaxCoverage": "12464",
          "TotCoverage": "2565042",
          "MeanCoverage": "855.014"
        },
        {
          "Gene": "ARID2",
          "Chr": "chr12",
          "Start": "46254507",
          "End": "46254807",
          "MinCoverage": "185",
          "MaxCoverage": "8800",
          "TotCoverage": "259499",
          "MeanCoverage": "864.9966666666667"
        },
        {
          "Gene": "ARID2",
          "Chr": "chr12",
          "Start": "46285510",
          "End": "46285930",
          "MinCoverage": "131",
          "MaxCoverage": "6048",
          "TotCoverage": "219632",
          "MeanCoverage": "522.9333333333333"
        },
        {
          "Gene": "ARID2",
          "Chr": "chr12",
          "Start": "46287009",
          "End": "46287797",
          "MinCoverage": "245",
          "MaxCoverage": "8256",
          "TotCoverage": "419501",
          "MeanCoverage": "532.3616751269036"
        },
        {
          "Gene": "KMT2D",
          "Chr": "chr12",
          "Start": "49415759",
          "End": "49416219",
          "MinCoverage": "175",
          "MaxCoverage": "4060",
          "TotCoverage": "269748",
          "MeanCoverage": "586.408695652174"
        },
        {
          "Gene": "KMT2D",
          "Chr": "chr12",
          "Start": "49416305",
          "End": "49416725",
          "MinCoverage": "313",
          "MaxCoverage": "9030",
          "TotCoverage": "412155",
          "MeanCoverage": "981.3214285714286"
        },
        {
          "Gene": "KMT2D",
          "Chr": "chr12",
          "Start": "49418305",
          "End": "49418780",
          "MinCoverage": "225",
          "MaxCoverage": "8805",
          "TotCoverage": "423545",
          "MeanCoverage": "891.6736842105263"
        },
        {
          "Gene": "KMT2D",
          "Chr": "chr12",
          "Start": "49419904",
          "End": "49421164",
          "MinCoverage": "47",
          "MaxCoverage": "11541",
          "TotCoverage": "2412150",
          "MeanCoverage": "1914.404761904762"
        },
        {
          "Gene": "KMT2D",
          "Chr": "chr12",
          "Start": "49421517",
          "End": "49421997",
          "MinCoverage": "403",
          "MaxCoverage": "12915",
          "TotCoverage": "705948",
          "MeanCoverage": "1470.725"
        },
        {
          "Gene": "KMT2D",
          "Chr": "chr12",
          "Start": "49422555",
          "End": "49423081",
          "MinCoverage": "442",
          "MaxCoverage": "7140",
          "TotCoverage": "523244",
          "MeanCoverage": "994.7604562737642"
        },
        {
          "Gene": "KMT2D",
          "Chr": "chr12",
          "Start": "49423101",
          "End": "49423341",
          "MinCoverage": "96",
          "MaxCoverage": "3360",
          "TotCoverage": "64465",
          "MeanCoverage": "268.6041666666667"
        },
        {
          "Gene": "KMT2D",
          "Chr": "chr12",
          "Start": "49423992",
          "End": "49424292",
          "MinCoverage": "187",
          "MaxCoverage": "3185",
          "TotCoverage": "160820",
          "MeanCoverage": "536.0666666666667"
        },
        {
          "Gene": "KMT2D",
          "Chr": "chr12",
          "Start": "49424317",
          "End": "49428526",
          "MinCoverage": "146",
          "MaxCoverage": "11643",
          "TotCoverage": "5403478",
          "MeanCoverage": "1283.791399382276"
        },
        {
          "Gene": "KMT2D",
          "Chr": "chr12",
          "Start": "49428536",
          "End": "49428776",
          "MinCoverage": "184",
          "MaxCoverage": "4734",
          "TotCoverage": "112641",
          "MeanCoverage": "469.3375"
        },
        {
          "Gene": "KMT2D",
          "Chr": "chr12",
          "Start": "49430829",
          "End": "49432869",
          "MinCoverage": "182",
          "MaxCoverage": "11300",
          "TotCoverage": "2825553",
          "MeanCoverage": "1385.075"
        },
        {
          "Gene": "KMT2D",
          "Chr": "chr12",
          "Start": "49432932",
          "End": "49435582",
          "MinCoverage": "164",
          "MaxCoverage": "6156",
          "TotCoverage": "2008045",
          "MeanCoverage": "757.7528301886792"
        },
        {
          "Gene": "KMT2D",
          "Chr": "chr12",
          "Start": "49435636",
          "End": "49436176",
          "MinCoverage": "301",
          "MaxCoverage": "8592",
          "TotCoverage": "457884",
          "MeanCoverage": "847.9333333333333"
        },
        {
          "Gene": "KMT2D",
          "Chr": "chr12",
          "Start": "49436292",
          "End": "49436712",
          "MinCoverage": "239",
          "MaxCoverage": "11010",
          "TotCoverage": "279901",
          "MeanCoverage": "666.4309523809524"
        },
        {
          "Gene": "KMT2D",
          "Chr": "chr12",
          "Start": "49436793",
          "End": "49437033",
          "MinCoverage": "290",
          "MaxCoverage": "6850",
          "TotCoverage": "136368",
          "MeanCoverage": "568.2"
        },
        {
          "Gene": "KMT2D",
          "Chr": "chr12",
          "Start": "49437058",
          "End": "49437298",
          "MinCoverage": "1025",
          "MaxCoverage": "9540",
          "TotCoverage": "319701",
          "MeanCoverage": "1332.0875"
        },
        {
          "Gene": "KMT2D",
          "Chr": "chr12",
          "Start": "49437359",
          "End": "49437839",
          "MinCoverage": "471",
          "MaxCoverage": "5850",
          "TotCoverage": "345743",
          "MeanCoverage": "720.2979166666667"
        },
        {
          "Gene": "KMT2D",
          "Chr": "chr12",
          "Start": "49437903",
          "End": "49438383",
          "MinCoverage": "833",
          "MaxCoverage": "12585",
          "TotCoverage": "1126244",
          "MeanCoverage": "2346.3416666666667"
        },
        {
          "Gene": "KMT2D",
          "Chr": "chr12",
          "Start": "49438457",
          "End": "49438817",
          "MinCoverage": "507",
          "MaxCoverage": "8150",
          "TotCoverage": "938280",
          "MeanCoverage": "2606.3333333333335"
        },
        {
          "Gene": "KMT2D",
          "Chr": "chr12",
          "Start": "49439576",
          "End": "49440281",
          "MinCoverage": "645",
          "MaxCoverage": "9336",
          "TotCoverage": "716702",
          "MeanCoverage": "1016.5985815602837"
        },
        {
          "Gene": "KMT2D",
          "Chr": "chr12",
          "Start": "49440332",
          "End": "49440632",
          "MinCoverage": "150",
          "MaxCoverage": "6736",
          "TotCoverage": "179290",
          "MeanCoverage": "597.6333333333333"
        },
        {
          "Gene": "KMT2D",
          "Chr": "chr12",
          "Start": "49441679",
          "End": "49441919",
          "MinCoverage": "181",
          "MaxCoverage": "4005",
          "TotCoverage": "79319",
          "MeanCoverage": "330.49583333333334"
        },
        {
          "Gene": "KMT2D",
          "Chr": "chr12",
          "Start": "49442376",
          "End": "49442616",
          "MinCoverage": "329",
          "MaxCoverage": "4858",
          "TotCoverage": "113343",
          "MeanCoverage": "472.2625"
        },
        {
          "Gene": "KMT2D",
          "Chr": "chr12",
          "Start": "49442824",
          "End": "49443064",
          "MinCoverage": "461",
          "MaxCoverage": "4968",
          "TotCoverage": "204787",
          "MeanCoverage": "853.2791666666667"
        },
        {
          "Gene": "KMT2D",
          "Chr": "chr12",
          "Start": "49443395",
          "End": "49446569",
          "MinCoverage": "175",
          "MaxCoverage": "10776",
          "TotCoverage": "2759914",
          "MeanCoverage": "869.5381222432262"
        },
        {
          "Gene": "KMT2D",
          "Chr": "chr12",
          "Start": "49446626",
          "End": "49447166",
          "MinCoverage": "497",
          "MaxCoverage": "7134",
          "TotCoverage": "660402",
          "MeanCoverage": "1222.9666666666667"
        },
        {
          "Gene": "KMT2D",
          "Chr": "chr12",
          "Start": "49447191",
          "End": "49447491",
          "MinCoverage": "786",
          "MaxCoverage": "7768",
          "TotCoverage": "524388",
          "MeanCoverage": "1747.96"
        },
        {
          "Gene": "KMT2D",
          "Chr": "chr12",
          "Start": "49447691",
          "End": "49447991",
          "MinCoverage": "500",
          "MaxCoverage": "5795",
          "TotCoverage": "291174",
          "MeanCoverage": "970.58"
        },
        {
          "Gene": "KMT2D",
          "Chr": "chr12",
          "Start": "49448024",
          "End": "49448602",
          "MinCoverage": "659",
          "MaxCoverage": "11570",
          "TotCoverage": "1019711",
          "MeanCoverage": "1764.2058823529412"
        },
        {
          "Gene": "KMT2D",
          "Chr": "chr12",
          "Start": "49448625",
          "End": "49448865",
          "MinCoverage": "363",
          "MaxCoverage": "6080",
          "TotCoverage": "231626",
          "MeanCoverage": "965.1083333333333"
        },
        {
          "Gene": "KMT2D",
          "Chr": "chr12",
          "Start": "49448962",
          "End": "49449202",
          "MinCoverage": "226",
          "MaxCoverage": "6496",
          "TotCoverage": "85830",
          "MeanCoverage": "357.625"
        },
        {
          "Gene": "HOXC13",
          "Chr": "chr12",
          "Start": "54332372",
          "End": "54333555",
          "MinCoverage": "82",
          "MaxCoverage": "12312",
          "TotCoverage": "1821175",
          "MeanCoverage": "1539.4547759932375"
        },
        {
          "Gene": "ERBB3",
          "Chr": "chr12",
          "Start": "56474035",
          "End": "56474215",
          "MinCoverage": "93",
          "MaxCoverage": "978",
          "TotCoverage": "42501",
          "MeanCoverage": "236.11666666666667"
        },
        {
          "Gene": "ERBB3",
          "Chr": "chr12",
          "Start": "56477490",
          "End": "56477730",
          "MinCoverage": "203",
          "MaxCoverage": "5952",
          "TotCoverage": "84459",
          "MeanCoverage": "351.9125"
        },
        {
          "Gene": "ERBB3",
          "Chr": "chr12",
          "Start": "56478757",
          "End": "56479117",
          "MinCoverage": "336",
          "MaxCoverage": "13818",
          "TotCoverage": "487036",
          "MeanCoverage": "1352.8777777777777"
        },
        {
          "Gene": "ERBB3",
          "Chr": "chr12",
          "Start": "56480257",
          "End": "56480497",
          "MinCoverage": "166",
          "MaxCoverage": "6286",
          "TotCoverage": "82955",
          "MeanCoverage": "345.6458333333333"
        },
        {
          "Gene": "ERBB3",
          "Chr": "chr12",
          "Start": "56481303",
          "End": "56481483",
          "MinCoverage": "435",
          "MaxCoverage": "4884",
          "TotCoverage": "118711",
          "MeanCoverage": "659.5055555555556"
        },
        {
          "Gene": "ERBB3",
          "Chr": "chr12",
          "Start": "56481517",
          "End": "56481995",
          "MinCoverage": "81",
          "MaxCoverage": "4384",
          "TotCoverage": "227066",
          "MeanCoverage": "475.0334728033473"
        },
        {
          "Gene": "ERBB3",
          "Chr": "chr12",
          "Start": "56482263",
          "End": "56482711",
          "MinCoverage": "326",
          "MaxCoverage": "5760",
          "TotCoverage": "251898",
          "MeanCoverage": "562.2723214285714"
        },
        {
          "Gene": "ERBB3",
          "Chr": "chr12",
          "Start": "56486477",
          "End": "56486657",
          "MinCoverage": "220",
          "MaxCoverage": "4450",
          "TotCoverage": "61419",
          "MeanCoverage": "341.21666666666664"
        },
        {
          "Gene": "ERBB3",
          "Chr": "chr12",
          "Start": "56486724",
          "End": "56486904",
          "MinCoverage": "182",
          "MaxCoverage": "3400",
          "TotCoverage": "60673",
          "MeanCoverage": "337.0722222222222"
        },
        {
          "Gene": "ERBB3",
          "Chr": "chr12",
          "Start": "56487111",
          "End": "56487351",
          "MinCoverage": "224",
          "MaxCoverage": "6696",
          "TotCoverage": "114548",
          "MeanCoverage": "477.28333333333336"
        },
        {
          "Gene": "ERBB3",
          "Chr": "chr12",
          "Start": "56487493",
          "End": "56487733",
          "MinCoverage": "155",
          "MaxCoverage": "6084",
          "TotCoverage": "76481",
          "MeanCoverage": "318.67083333333335"
        },
        {
          "Gene": "ERBB3",
          "Chr": "chr12",
          "Start": "56487837",
          "End": "56488017",
          "MinCoverage": "542",
          "MaxCoverage": "8150",
          "TotCoverage": "194943",
          "MeanCoverage": "1083.0166666666667"
        },
        {
          "Gene": "ERBB3",
          "Chr": "chr12",
          "Start": "56488142",
          "End": "56488382",
          "MinCoverage": "192",
          "MaxCoverage": "3978",
          "TotCoverage": "77439",
          "MeanCoverage": "322.6625"
        },
        {
          "Gene": "ERBB3",
          "Chr": "chr12",
          "Start": "56488977",
          "End": "56489157",
          "MinCoverage": "184",
          "MaxCoverage": "3303",
          "TotCoverage": "74700",
          "MeanCoverage": "415.0"
        },
        {
          "Gene": "ERBB3",
          "Chr": "chr12",
          "Start": "56489399",
          "End": "56489639",
          "MinCoverage": "189",
          "MaxCoverage": "9394",
          "TotCoverage": "121334",
          "MeanCoverage": "505.55833333333334"
        },
        {
          "Gene": "ERBB3",
          "Chr": "chr12",
          "Start": "56490226",
          "End": "56490466",
          "MinCoverage": "100",
          "MaxCoverage": "2460",
          "TotCoverage": "38154",
          "MeanCoverage": "158.975"
        },
        {
          "Gene": "ERBB3",
          "Chr": "chr12",
          "Start": "56490490",
          "End": "56490670",
          "MinCoverage": "194",
          "MaxCoverage": "5870",
          "TotCoverage": "72602",
          "MeanCoverage": "403.34444444444443"
        },
        {
          "Gene": "ERBB3",
          "Chr": "chr12",
          "Start": "56490801",
          "End": "56491041",
          "MinCoverage": "101",
          "MaxCoverage": "2184",
          "TotCoverage": "70483",
          "MeanCoverage": "293.6791666666667"
        },
        {
          "Gene": "ERBB3",
          "Chr": "chr12",
          "Start": "56491526",
          "End": "56491766",
          "MinCoverage": "49",
          "MaxCoverage": "4624",
          "TotCoverage": "90881",
          "MeanCoverage": "378.67083333333335"
        },
        {
          "Gene": "ERBB3",
          "Chr": "chr12",
          "Start": "56492238",
          "End": "56492709",
          "MinCoverage": "244",
          "MaxCoverage": "7055",
          "TotCoverage": "354924",
          "MeanCoverage": "753.5541401273886"
        },
        {
          "Gene": "ERBB3",
          "Chr": "chr12",
          "Start": "56493390",
          "End": "56493570",
          "MinCoverage": "229",
          "MaxCoverage": "3234",
          "TotCoverage": "72988",
          "MeanCoverage": "405.4888888888889"
        },
        {
          "Gene": "ERBB3",
          "Chr": "chr12",
          "Start": "56493597",
          "End": "56493837",
          "MinCoverage": "110",
          "MaxCoverage": "6228",
          "TotCoverage": "55904",
          "MeanCoverage": "232.93333333333334"
        },
        {
          "Gene": "ERBB3",
          "Chr": "chr12",
          "Start": "56493903",
          "End": "56494083",
          "MinCoverage": "244",
          "MaxCoverage": "7763",
          "TotCoverage": "141813",
          "MeanCoverage": "787.85"
        },
        {
          "Gene": "ERBB3",
          "Chr": "chr12",
          "Start": "56494814",
          "End": "56495174",
          "MinCoverage": "300",
          "MaxCoverage": "5364",
          "TotCoverage": "284727",
          "MeanCoverage": "790.9083333333333"
        },
        {
          "Gene": "ERBB3",
          "Chr": "chr12",
          "Start": "56495275",
          "End": "56495875",
          "MinCoverage": "201",
          "MaxCoverage": "5668",
          "TotCoverage": "303578",
          "MeanCoverage": "505.9633333333333"
        },
        {
          "Gene": "CDK4,TSPAN31",
          "Chr": "chr12",
          "Start": "58141366",
          "End": "58141546",
          "MinCoverage": "146",
          "MaxCoverage": "5352",
          "TotCoverage": "77735",
          "MeanCoverage": "431.8611111111111"
        },
        {
          "Gene": "CDK4,TSPAN31",
          "Chr": "chr12",
          "Start": "58141793",
          "End": "58142467",
          "MinCoverage": "102",
          "MaxCoverage": "15534",
          "TotCoverage": "633818",
          "MeanCoverage": "940.3827893175074"
        },
        {
          "Gene": "CDK4",
          "Chr": "chr12",
          "Start": "58142912",
          "End": "58143381",
          "MinCoverage": "633",
          "MaxCoverage": "14310",
          "TotCoverage": "882791",
          "MeanCoverage": "1882.2835820895523"
        },
        {
          "Gene": "CDK4",
          "Chr": "chr12",
          "Start": "58144373",
          "End": "58144613",
          "MinCoverage": "275",
          "MaxCoverage": "5464",
          "TotCoverage": "122961",
          "MeanCoverage": "512.3375"
        },
        {
          "Gene": "CDK4",
          "Chr": "chr12",
          "Start": "58144639",
          "End": "58145177",
          "MinCoverage": "391",
          "MaxCoverage": "8450",
          "TotCoverage": "379797",
          "MeanCoverage": "705.9423791821562"
        },
        {
          "Gene": "CDK4",
          "Chr": "chr12",
          "Start": "58145220",
          "End": "58145580",
          "MinCoverage": "338",
          "MaxCoverage": "12915",
          "TotCoverage": "463675",
          "MeanCoverage": "1287.986111111111"
        },
        {
          "Gene": "CDK4",
          "Chr": "chr12",
          "Start": "58145943",
          "End": "58146243",
          "MinCoverage": "102",
          "MaxCoverage": "1482",
          "TotCoverage": "84411",
          "MeanCoverage": "281.37"
        },
        {
          "Gene": "MDM2",
          "Chr": "chr12",
          "Start": "69202174",
          "End": "69202354",
          "MinCoverage": "359",
          "MaxCoverage": "3345",
          "TotCoverage": "151908",
          "MeanCoverage": "843.9333333333333"
        },
        {
          "Gene": "MDM2",
          "Chr": "chr12",
          "Start": "69202942",
          "End": "69203122",
          "MinCoverage": "198",
          "MaxCoverage": "3978",
          "TotCoverage": "66597",
          "MeanCoverage": "369.98333333333335"
        },
        {
          "Gene": "MDM2",
          "Chr": "chr12",
          "Start": "69207280",
          "End": "69207460",
          "MinCoverage": "239",
          "MaxCoverage": "5220",
          "TotCoverage": "87649",
          "MeanCoverage": "486.93888888888887"
        },
        {
          "Gene": "MDM2",
          "Chr": "chr12",
          "Start": "69208404",
          "End": "69208584",
          "MinCoverage": "240",
          "MaxCoverage": "5250",
          "TotCoverage": "91555",
          "MeanCoverage": "508.6388888888889"
        },
        {
          "Gene": "MDM2",
          "Chr": "chr12",
          "Start": "69210538",
          "End": "69210778",
          "MinCoverage": "328",
          "MaxCoverage": "5090",
          "TotCoverage": "163367",
          "MeanCoverage": "680.6958333333333"
        },
        {
          "Gene": "MDM2",
          "Chr": "chr12",
          "Start": "69214039",
          "End": "69214219",
          "MinCoverage": "99",
          "MaxCoverage": "3430",
          "TotCoverage": "62868",
          "MeanCoverage": "349.26666666666665"
        },
        {
          "Gene": "MDM2",
          "Chr": "chr12",
          "Start": "69218087",
          "End": "69218267",
          "MinCoverage": "161",
          "MaxCoverage": "2016",
          "TotCoverage": "38620",
          "MeanCoverage": "214.55555555555554"
        },
        {
          "Gene": "MDM2",
          "Chr": "chr12",
          "Start": "69218292",
          "End": "69218472",
          "MinCoverage": "290",
          "MaxCoverage": "4304",
          "TotCoverage": "95363",
          "MeanCoverage": "529.7944444444445"
        },
        {
          "Gene": "MDM2",
          "Chr": "chr12",
          "Start": "69222510",
          "End": "69222750",
          "MinCoverage": "351",
          "MaxCoverage": "7623",
          "TotCoverage": "169828",
          "MeanCoverage": "707.6166666666667"
        },
        {
          "Gene": "MDM2",
          "Chr": "chr12",
          "Start": "69229566",
          "End": "69229806",
          "MinCoverage": "99",
          "MaxCoverage": "5026",
          "TotCoverage": "160306",
          "MeanCoverage": "667.9416666666667"
        },
        {
          "Gene": "MDM2",
          "Chr": "chr12",
          "Start": "69230400",
          "End": "69230580",
          "MinCoverage": "73",
          "MaxCoverage": "1596",
          "TotCoverage": "30988",
          "MeanCoverage": "172.15555555555557"
        },
        {
          "Gene": "MDM2",
          "Chr": "chr12",
          "Start": "69233041",
          "End": "69233641",
          "MinCoverage": "311",
          "MaxCoverage": "8496",
          "TotCoverage": "423766",
          "MeanCoverage": "706.2766666666666"
        },
        {
          "Gene": "PTPN11,RPL6",
          "Chr": "chr12",
          "Start": "112856364",
          "End": "112856964",
          "MinCoverage": "11",
          "MaxCoverage": "3380",
          "TotCoverage": "118474",
          "MeanCoverage": "197.45666666666668"
        },
        {
          "Gene": "PTPN11",
          "Chr": "chr12",
          "Start": "112884020",
          "End": "112884260",
          "MinCoverage": "278",
          "MaxCoverage": "7900",
          "TotCoverage": "155373",
          "MeanCoverage": "647.3875"
        },
        {
          "Gene": "PTPN11",
          "Chr": "chr12",
          "Start": "112888098",
          "End": "112888338",
          "MinCoverage": "270",
          "MaxCoverage": "7980",
          "TotCoverage": "91674",
          "MeanCoverage": "381.975"
        },
        {
          "Gene": "PTPN11",
          "Chr": "chr12",
          "Start": "112890974",
          "End": "112891214",
          "MinCoverage": "88",
          "MaxCoverage": "8551",
          "TotCoverage": "68843",
          "MeanCoverage": "286.84583333333336"
        },
        {
          "Gene": "PTPN11",
          "Chr": "chr12",
          "Start": "112892335",
          "End": "112892515",
          "MinCoverage": "235",
          "MaxCoverage": "6192",
          "TotCoverage": "94846",
          "MeanCoverage": "526.9222222222222"
        },
        {
          "Gene": "PTPN11",
          "Chr": "chr12",
          "Start": "112893720",
          "End": "112893900",
          "MinCoverage": "206",
          "MaxCoverage": "4340",
          "TotCoverage": "65692",
          "MeanCoverage": "364.9555555555556"
        },
        {
          "Gene": "PTPN11",
          "Chr": "chr12",
          "Start": "112910644",
          "End": "112910996",
          "MinCoverage": "157",
          "MaxCoverage": "5031",
          "TotCoverage": "140397",
          "MeanCoverage": "398.8551136363636"
        },
        {
          "Gene": "PTPN11",
          "Chr": "chr12",
          "Start": "112915404",
          "End": "112915584",
          "MinCoverage": "189",
          "MaxCoverage": "5632",
          "TotCoverage": "69342",
          "MeanCoverage": "385.23333333333335"
        },
        {
          "Gene": "PTPN11",
          "Chr": "chr12",
          "Start": "112915619",
          "End": "112915859",
          "MinCoverage": "257",
          "MaxCoverage": "7272",
          "TotCoverage": "158601",
          "MeanCoverage": "660.8375"
        },
        {
          "Gene": "PTPN11",
          "Chr": "chr12",
          "Start": "112919823",
          "End": "112920063",
          "MinCoverage": "272",
          "MaxCoverage": "4248",
          "TotCoverage": "103001",
          "MeanCoverage": "429.17083333333335"
        },
        {
          "Gene": "PTPN11",
          "Chr": "chr12",
          "Start": "112924262",
          "End": "112924742",
          "MinCoverage": "140",
          "MaxCoverage": "9400",
          "TotCoverage": "460990",
          "MeanCoverage": "960.3958333333334"
        },
        {
          "Gene": "PTPN11",
          "Chr": "chr12",
          "Start": "112926190",
          "End": "112926370",
          "MinCoverage": "230",
          "MaxCoverage": "5275",
          "TotCoverage": "49753",
          "MeanCoverage": "276.40555555555557"
        },
        {
          "Gene": "PTPN11",
          "Chr": "chr12",
          "Start": "112926783",
          "End": "112927023",
          "MinCoverage": "363",
          "MaxCoverage": "6522",
          "TotCoverage": "216230",
          "MeanCoverage": "900.9583333333334"
        },
        {
          "Gene": "PTPN11",
          "Chr": "chr12",
          "Start": "112939913",
          "End": "112940093",
          "MinCoverage": "183",
          "MaxCoverage": "4120",
          "TotCoverage": "72311",
          "MeanCoverage": "401.72777777777776"
        },
        {
          "Gene": "PTPN11",
          "Chr": "chr12",
          "Start": "112942459",
          "End": "112942639",
          "MinCoverage": "124",
          "MaxCoverage": "3928",
          "TotCoverage": "78161",
          "MeanCoverage": "434.22777777777776"
        },
        {
          "Gene": "PTPN11",
          "Chr": "chr12",
          "Start": "112943603",
          "End": "112944435",
          "MinCoverage": "260",
          "MaxCoverage": "9441",
          "TotCoverage": "519668",
          "MeanCoverage": "624.6009615384615"
        },
        {
          "Gene": "PTPN11",
          "Chr": "chr12",
          "Start": "112944603",
          "End": "112944723",
          "MinCoverage": "149",
          "MaxCoverage": "1358",
          "TotCoverage": "22115",
          "MeanCoverage": "184.29166666666666"
        },
        {
          "Gene": "PTPN11",
          "Chr": "chr12",
          "Start": "112944787",
          "End": "112947727",
          "MinCoverage": "138",
          "MaxCoverage": "14432",
          "TotCoverage": "1826476",
          "MeanCoverage": "621.2503401360544"
        },
        {
          "Gene": "TBX3",
          "Chr": "chr12",
          "Start": "115109606",
          "End": "115110146",
          "MinCoverage": "272",
          "MaxCoverage": "3898",
          "TotCoverage": "532771",
          "MeanCoverage": "986.6129629629629"
        },
        {
          "Gene": "TBX3",
          "Chr": "chr12",
          "Start": "115111880",
          "End": "115112712",
          "MinCoverage": "106",
          "MaxCoverage": "5682",
          "TotCoverage": "710929",
          "MeanCoverage": "854.4819711538462"
        },
        {
          "Gene": "TBX3",
          "Chr": "chr12",
          "Start": "115114035",
          "End": "115114316",
          "MinCoverage": "141",
          "MaxCoverage": "5760",
          "TotCoverage": "77199",
          "MeanCoverage": "274.729537366548"
        },
        {
          "Gene": "TBX3",
          "Chr": "chr12",
          "Start": "115115326",
          "End": "115115512",
          "MinCoverage": "567",
          "MaxCoverage": "7518",
          "TotCoverage": "143921",
          "MeanCoverage": "773.7688172043011"
        },
        {
          "Gene": "TBX3",
          "Chr": "chr12",
          "Start": "115117262",
          "End": "115117502",
          "MinCoverage": "408",
          "MaxCoverage": "8176",
          "TotCoverage": "185844",
          "MeanCoverage": "774.35"
        },
        {
          "Gene": "TBX3",
          "Chr": "chr12",
          "Start": "115117657",
          "End": "115117837",
          "MinCoverage": "207",
          "MaxCoverage": "5090",
          "TotCoverage": "75314",
          "MeanCoverage": "418.4111111111111"
        },
        {
          "Gene": "TBX3",
          "Chr": "chr12",
          "Start": "115118667",
          "End": "115119035",
          "MinCoverage": "233",
          "MaxCoverage": "12640",
          "TotCoverage": "289016",
          "MeanCoverage": "785.3695652173913"
        },
        {
          "Gene": "TBX3",
          "Chr": "chr12",
          "Start": "115120577",
          "End": "115121020",
          "MinCoverage": "369",
          "MaxCoverage": "6295",
          "TotCoverage": "419008",
          "MeanCoverage": "945.8419864559819"
        },
        {
          "Gene": "POLE",
          "Chr": "chr12",
          "Start": "133201219",
          "End": "133201625",
          "MinCoverage": "233",
          "MaxCoverage": "7059",
          "TotCoverage": "479742",
          "MeanCoverage": "1181.6305418719212"
        },
        {
          "Gene": "POLE",
          "Chr": "chr12",
          "Start": "133202173",
          "End": "133202413",
          "MinCoverage": "991",
          "MaxCoverage": "7020",
          "TotCoverage": "554717",
          "MeanCoverage": "2311.320833333333"
        },
        {
          "Gene": "POLE",
          "Chr": "chr12",
          "Start": "133202682",
          "End": "133202922",
          "MinCoverage": "416",
          "MaxCoverage": "5004",
          "TotCoverage": "300108",
          "MeanCoverage": "1250.45"
        },
        {
          "Gene": "POLE",
          "Chr": "chr12",
          "Start": "133208877",
          "End": "133209117",
          "MinCoverage": "85",
          "MaxCoverage": "3912",
          "TotCoverage": "124115",
          "MeanCoverage": "517.1458333333334"
        },
        {
          "Gene": "POLE",
          "Chr": "chr12",
          "Start": "133209195",
          "End": "133209435",
          "MinCoverage": "1057",
          "MaxCoverage": "5760",
          "TotCoverage": "468076",
          "MeanCoverage": "1950.3166666666666"
        },
        {
          "Gene": "POLE",
          "Chr": "chr12",
          "Start": "133210708",
          "End": "133211098",
          "MinCoverage": "419",
          "MaxCoverage": "10136",
          "TotCoverage": "630003",
          "MeanCoverage": "1615.3923076923077"
        },
        {
          "Gene": "POLE",
          "Chr": "chr12",
          "Start": "133212423",
          "End": "133212663",
          "MinCoverage": "746",
          "MaxCoverage": "7525",
          "TotCoverage": "307372",
          "MeanCoverage": "1280.7166666666667"
        },
        {
          "Gene": "POLE",
          "Chr": "chr12",
          "Start": "133214542",
          "End": "133214782",
          "MinCoverage": "545",
          "MaxCoverage": "5690",
          "TotCoverage": "301394",
          "MeanCoverage": "1255.8083333333334"
        },
        {
          "Gene": "POLE",
          "Chr": "chr12",
          "Start": "133215677",
          "End": "133215917",
          "MinCoverage": "254",
          "MaxCoverage": "3899",
          "TotCoverage": "117887",
          "MeanCoverage": "491.1958333333333"
        },
        {
          "Gene": "POLE",
          "Chr": "chr12",
          "Start": "133218214",
          "End": "133218454",
          "MinCoverage": "578",
          "MaxCoverage": "5968",
          "TotCoverage": "279110",
          "MeanCoverage": "1162.9583333333333"
        },
        {
          "Gene": "POLE",
          "Chr": "chr12",
          "Start": "133218722",
          "End": "133219022",
          "MinCoverage": "364",
          "MaxCoverage": "4041",
          "TotCoverage": "292791",
          "MeanCoverage": "975.97"
        },
        {
          "Gene": "POLE",
          "Chr": "chr12",
          "Start": "133219053",
          "End": "133219353",
          "MinCoverage": "396",
          "MaxCoverage": "6987",
          "TotCoverage": "461153",
          "MeanCoverage": "1537.1766666666667"
        },
        {
          "Gene": "POLE",
          "Chr": "chr12",
          "Start": "133219373",
          "End": "133219613",
          "MinCoverage": "542",
          "MaxCoverage": "3880",
          "TotCoverage": "239499",
          "MeanCoverage": "997.9125"
        },
        {
          "Gene": "POLE",
          "Chr": "chr12",
          "Start": "133219742",
          "End": "133220189",
          "MinCoverage": "621",
          "MaxCoverage": "6096",
          "TotCoverage": "475744",
          "MeanCoverage": "1064.3042505592841"
        },
        {
          "Gene": "POLE",
          "Chr": "chr12",
          "Start": "133220372",
          "End": "133220612",
          "MinCoverage": "455",
          "MaxCoverage": "8022",
          "TotCoverage": "251829",
          "MeanCoverage": "1049.2875"
        },
        {
          "Gene": "POLE",
          "Chr": "chr12",
          "Start": "133225465",
          "End": "133225705",
          "MinCoverage": "870",
          "MaxCoverage": "8588",
          "TotCoverage": "470323",
          "MeanCoverage": "1959.6791666666666"
        },
        {
          "Gene": "POLE",
          "Chr": "chr12",
          "Start": "133225876",
          "End": "133226116",
          "MinCoverage": "911",
          "MaxCoverage": "7320",
          "TotCoverage": "564372",
          "MeanCoverage": "2351.55"
        },
        {
          "Gene": "POLE",
          "Chr": "chr12",
          "Start": "133226248",
          "End": "133226488",
          "MinCoverage": "505",
          "MaxCoverage": "6512",
          "TotCoverage": "374126",
          "MeanCoverage": "1558.8583333333333"
        },
        {
          "Gene": "POLE",
          "Chr": "chr12",
          "Start": "133233662",
          "End": "133234064",
          "MinCoverage": "582",
          "MaxCoverage": "6628",
          "TotCoverage": "545669",
          "MeanCoverage": "1357.3855721393036"
        },
        {
          "Gene": "POLE",
          "Chr": "chr12",
          "Start": "133234384",
          "End": "133234624",
          "MinCoverage": "222",
          "MaxCoverage": "2849",
          "TotCoverage": "79450",
          "MeanCoverage": "331.0416666666667"
        },
        {
          "Gene": "POLE",
          "Chr": "chr12",
          "Start": "133235867",
          "End": "133236107",
          "MinCoverage": "377",
          "MaxCoverage": "5056",
          "TotCoverage": "254373",
          "MeanCoverage": "1059.8875"
        },
        {
          "Gene": "POLE",
          "Chr": "chr12",
          "Start": "133237532",
          "End": "133237772",
          "MinCoverage": "141",
          "MaxCoverage": "2065",
          "TotCoverage": "82005",
          "MeanCoverage": "341.6875"
        },
        {
          "Gene": "POLE",
          "Chr": "chr12",
          "Start": "133238071",
          "End": "133238311",
          "MinCoverage": "138",
          "MaxCoverage": "3933",
          "TotCoverage": "61593",
          "MeanCoverage": "256.6375"
        },
        {
          "Gene": "POLE",
          "Chr": "chr12",
          "Start": "133240541",
          "End": "133240781",
          "MinCoverage": "295",
          "MaxCoverage": "2620",
          "TotCoverage": "121324",
          "MeanCoverage": "505.51666666666665"
        },
        {
          "Gene": "POLE",
          "Chr": "chr12",
          "Start": "133240911",
          "End": "133241091",
          "MinCoverage": "860",
          "MaxCoverage": "8913",
          "TotCoverage": "463318",
          "MeanCoverage": "2573.988888888889"
        },
        {
          "Gene": "POLE",
          "Chr": "chr12",
          "Start": "133241841",
          "End": "133242081",
          "MinCoverage": "612",
          "MaxCoverage": "11196",
          "TotCoverage": "515213",
          "MeanCoverage": "2146.7208333333333"
        },
        {
          "Gene": "POLE",
          "Chr": "chr12",
          "Start": "133244041",
          "End": "133244281",
          "MinCoverage": "428",
          "MaxCoverage": "4584",
          "TotCoverage": "280388",
          "MeanCoverage": "1168.2833333333333"
        },
        {
          "Gene": "POLE",
          "Chr": "chr12",
          "Start": "133244894",
          "End": "133245134",
          "MinCoverage": "687",
          "MaxCoverage": "5236",
          "TotCoverage": "219226",
          "MeanCoverage": "913.4416666666667"
        },
        {
          "Gene": "POLE",
          "Chr": "chr12",
          "Start": "133245151",
          "End": "133245580",
          "MinCoverage": "258",
          "MaxCoverage": "5716",
          "TotCoverage": "614112",
          "MeanCoverage": "1431.4965034965035"
        },
        {
          "Gene": "POLE",
          "Chr": "chr12",
          "Start": "133248734",
          "End": "133248974",
          "MinCoverage": "592",
          "MaxCoverage": "4584",
          "TotCoverage": "277338",
          "MeanCoverage": "1155.575"
        },
        {
          "Gene": "POLE",
          "Chr": "chr12",
          "Start": "133249198",
          "End": "133249438",
          "MinCoverage": "418",
          "MaxCoverage": "8592",
          "TotCoverage": "432657",
          "MeanCoverage": "1802.7375"
        },
        {
          "Gene": "POLE",
          "Chr": "chr12",
          "Start": "133249686",
          "End": "133249926",
          "MinCoverage": "287",
          "MaxCoverage": "4806",
          "TotCoverage": "214287",
          "MeanCoverage": "892.8625"
        },
        {
          "Gene": "POLE",
          "Chr": "chr12",
          "Start": "133250106",
          "End": "133250346",
          "MinCoverage": "459",
          "MaxCoverage": "6292",
          "TotCoverage": "286375",
          "MeanCoverage": "1193.2291666666667"
        },
        {
          "Gene": "POLE",
          "Chr": "chr12",
          "Start": "133251923",
          "End": "133252163",
          "MinCoverage": "382",
          "MaxCoverage": "6100",
          "TotCoverage": "267003",
          "MeanCoverage": "1112.5125"
        },
        {
          "Gene": "POLE",
          "Chr": "chr12",
          "Start": "133252273",
          "End": "133252453",
          "MinCoverage": "134",
          "MaxCoverage": "3720",
          "TotCoverage": "104321",
          "MeanCoverage": "579.5611111111111"
        },
        {
          "Gene": "POLE",
          "Chr": "chr12",
          "Start": "133252614",
          "End": "133252854",
          "MinCoverage": "94",
          "MaxCoverage": "4599",
          "TotCoverage": "109429",
          "MeanCoverage": "455.95416666666665"
        },
        {
          "Gene": "POLE",
          "Chr": "chr12",
          "Start": "133253065",
          "End": "133253305",
          "MinCoverage": "162",
          "MaxCoverage": "4272",
          "TotCoverage": "84923",
          "MeanCoverage": "353.84583333333336"
        },
        {
          "Gene": "POLE",
          "Chr": "chr12",
          "Start": "133253898",
          "End": "133254078",
          "MinCoverage": "339",
          "MaxCoverage": "6340",
          "TotCoverage": "84806",
          "MeanCoverage": "471.14444444444445"
        },
        {
          "Gene": "POLE",
          "Chr": "chr12",
          "Start": "133254114",
          "End": "133254354",
          "MinCoverage": "395",
          "MaxCoverage": "5157",
          "TotCoverage": "138737",
          "MeanCoverage": "578.0708333333333"
        },
        {
          "Gene": "POLE",
          "Chr": "chr12",
          "Start": "133256039",
          "End": "133256279",
          "MinCoverage": "95",
          "MaxCoverage": "6520",
          "TotCoverage": "86276",
          "MeanCoverage": "359.48333333333335"
        },
        {
          "Gene": "POLE",
          "Chr": "chr12",
          "Start": "133256495",
          "End": "133256675",
          "MinCoverage": "174",
          "MaxCoverage": "3620",
          "TotCoverage": "47653",
          "MeanCoverage": "264.7388888888889"
        },
        {
          "Gene": "POLE",
          "Chr": "chr12",
          "Start": "133256695",
          "End": "133256875",
          "MinCoverage": "145",
          "MaxCoverage": "2700",
          "TotCoverage": "59113",
          "MeanCoverage": "328.40555555555557"
        },
        {
          "Gene": "POLE",
          "Chr": "chr12",
          "Start": "133257142",
          "End": "133257322",
          "MinCoverage": "162",
          "MaxCoverage": "11640",
          "TotCoverage": "143922",
          "MeanCoverage": "799.5666666666667"
        },
        {
          "Gene": "POLE",
          "Chr": "chr12",
          "Start": "133257674",
          "End": "133257914",
          "MinCoverage": "277",
          "MaxCoverage": "4512",
          "TotCoverage": "137470",
          "MeanCoverage": "572.7916666666666"
        },
        {
          "Gene": "POLE",
          "Chr": "chr12",
          "Start": "133263706",
          "End": "133264049",
          "MinCoverage": "31",
          "MaxCoverage": "6240",
          "TotCoverage": "218091",
          "MeanCoverage": "635.8338192419825"
        },
        {
          "Gene": "FLT3",
          "Chr": "chr13",
          "Start": "28577278",
          "End": "28578378",
          "MinCoverage": "111",
          "MaxCoverage": "9120",
          "TotCoverage": "485977",
          "MeanCoverage": "441.79727272727274"
        },
        {
          "Gene": "FLT3",
          "Chr": "chr13",
          "Start": "28588521",
          "End": "28588761",
          "MinCoverage": "391",
          "MaxCoverage": "8868",
          "TotCoverage": "208378",
          "MeanCoverage": "868.2416666666667"
        },
        {
          "Gene": "FLT3",
          "Chr": "chr13",
          "Start": "28589223",
          "End": "28589463",
          "MinCoverage": "145",
          "MaxCoverage": "5579",
          "TotCoverage": "112543",
          "MeanCoverage": "468.9291666666667"
        },
        {
          "Gene": "FLT3",
          "Chr": "chr13",
          "Start": "28589662",
          "End": "28589902",
          "MinCoverage": "82",
          "MaxCoverage": "4176",
          "TotCoverage": "92851",
          "MeanCoverage": "386.87916666666666"
        },
        {
          "Gene": "FLT3",
          "Chr": "chr13",
          "Start": "28592502",
          "End": "28592784",
          "MinCoverage": "407",
          "MaxCoverage": "8896",
          "TotCoverage": "248738",
          "MeanCoverage": "882.049645390071"
        },
        {
          "Gene": "FLT3",
          "Chr": "chr13",
          "Start": "28597430",
          "End": "28597670",
          "MinCoverage": "158",
          "MaxCoverage": "6450",
          "TotCoverage": "176010",
          "MeanCoverage": "733.375"
        },
        {
          "Gene": "FLT3",
          "Chr": "chr13",
          "Start": "28598918",
          "End": "28599158",
          "MinCoverage": "194",
          "MaxCoverage": "6327",
          "TotCoverage": "110330",
          "MeanCoverage": "459.7083333333333"
        },
        {
          "Gene": "FLT3",
          "Chr": "chr13",
          "Start": "28601151",
          "End": "28601451",
          "MinCoverage": "274",
          "MaxCoverage": "4400",
          "TotCoverage": "109953",
          "MeanCoverage": "366.51"
        },
        {
          "Gene": "FLT3",
          "Chr": "chr13",
          "Start": "28602221",
          "End": "28602489",
          "MinCoverage": "146",
          "MaxCoverage": "12792",
          "TotCoverage": "239630",
          "MeanCoverage": "894.1417910447761"
        },
        {
          "Gene": "FLT3",
          "Chr": "chr13",
          "Start": "28607953",
          "End": "28608613",
          "MinCoverage": "122",
          "MaxCoverage": "9506",
          "TotCoverage": "568008",
          "MeanCoverage": "860.6181818181818"
        },
        {
          "Gene": "FLT3",
          "Chr": "chr13",
          "Start": "28609570",
          "End": "28609870",
          "MinCoverage": "288",
          "MaxCoverage": "8883",
          "TotCoverage": "270905",
          "MeanCoverage": "903.0166666666667"
        },
        {
          "Gene": "FLT3",
          "Chr": "chr13",
          "Start": "28609991",
          "End": "28610273",
          "MinCoverage": "343",
          "MaxCoverage": "10728",
          "TotCoverage": "297322",
          "MeanCoverage": "1054.3333333333333"
        },
        {
          "Gene": "FLT3",
          "Chr": "chr13",
          "Start": "28611253",
          "End": "28611493",
          "MinCoverage": "216",
          "MaxCoverage": "6432",
          "TotCoverage": "136225",
          "MeanCoverage": "567.6041666666666"
        },
        {
          "Gene": "FLT3",
          "Chr": "chr13",
          "Start": "28622345",
          "End": "28622645",
          "MinCoverage": "403",
          "MaxCoverage": "6561",
          "TotCoverage": "208377",
          "MeanCoverage": "694.59"
        },
        {
          "Gene": "FLT3",
          "Chr": "chr13",
          "Start": "28623445",
          "End": "28623985",
          "MinCoverage": "172",
          "MaxCoverage": "14049",
          "TotCoverage": "496012",
          "MeanCoverage": "918.5407407407407"
        },
        {
          "Gene": "FLT3",
          "Chr": "chr13",
          "Start": "28624175",
          "End": "28624415",
          "MinCoverage": "165",
          "MaxCoverage": "5400",
          "TotCoverage": "85065",
          "MeanCoverage": "354.4375"
        },
        {
          "Gene": "FLT3",
          "Chr": "chr13",
          "Start": "28626626",
          "End": "28626866",
          "MinCoverage": "42",
          "MaxCoverage": "6226",
          "TotCoverage": "102736",
          "MeanCoverage": "428.06666666666666"
        },
        {
          "Gene": "FLT3",
          "Chr": "chr13",
          "Start": "28631421",
          "End": "28631661",
          "MinCoverage": "121",
          "MaxCoverage": "4887",
          "TotCoverage": "87569",
          "MeanCoverage": "364.87083333333334"
        },
        {
          "Gene": "FLT3",
          "Chr": "chr13",
          "Start": "28635924",
          "End": "28636284",
          "MinCoverage": "355",
          "MaxCoverage": "5999",
          "TotCoverage": "206165",
          "MeanCoverage": "572.6805555555555"
        },
        {
          "Gene": "FLT3",
          "Chr": "chr13",
          "Start": "28644568",
          "End": "28644808",
          "MinCoverage": "177",
          "MaxCoverage": "6125",
          "TotCoverage": "169206",
          "MeanCoverage": "705.025"
        },
        {
          "Gene": "FLT3",
          "Chr": "chr13",
          "Start": "28674454",
          "End": "28674934",
          "MinCoverage": "19",
          "MaxCoverage": "7458",
          "TotCoverage": "213272",
          "MeanCoverage": "444.31666666666666"
        },
        {
          "Gene": "BRCA2",
          "Chr": "chr13",
          "Start": "32890540",
          "End": "32890720",
          "MinCoverage": "90",
          "MaxCoverage": "2200",
          "TotCoverage": "30029",
          "MeanCoverage": "166.82777777777778"
        },
        {
          "Gene": "BRCA2",
          "Chr": "chr13",
          "Start": "32893187",
          "End": "32893487",
          "MinCoverage": "139",
          "MaxCoverage": "4788",
          "TotCoverage": "154195",
          "MeanCoverage": "513.9833333333333"
        },
        {
          "Gene": "BRCA2",
          "Chr": "chr13",
          "Start": "32899129",
          "End": "32899352",
          "MinCoverage": "207",
          "MaxCoverage": "15257",
          "TotCoverage": "201335",
          "MeanCoverage": "902.847533632287"
        },
        {
          "Gene": "BRCA2",
          "Chr": "chr13",
          "Start": "32900172",
          "End": "32900488",
          "MinCoverage": "125",
          "MaxCoverage": "7070",
          "TotCoverage": "124123",
          "MeanCoverage": "392.79430379746833"
        },
        {
          "Gene": "BRCA2",
          "Chr": "chr13",
          "Start": "32900572",
          "End": "32900812",
          "MinCoverage": "161",
          "MaxCoverage": "8230",
          "TotCoverage": "140585",
          "MeanCoverage": "585.7708333333334"
        },
        {
          "Gene": "BRCA2",
          "Chr": "chr13",
          "Start": "32903514",
          "End": "32903694",
          "MinCoverage": "376",
          "MaxCoverage": "5730",
          "TotCoverage": "114314",
          "MeanCoverage": "635.0777777777778"
        },
        {
          "Gene": "BRCA2",
          "Chr": "chr13",
          "Start": "32904991",
          "End": "32905231",
          "MinCoverage": "107",
          "MaxCoverage": "4320",
          "TotCoverage": "82990",
          "MeanCoverage": "345.7916666666667"
        },
        {
          "Gene": "BRCA2",
          "Chr": "chr13",
          "Start": "32906396",
          "End": "32907536",
          "MinCoverage": "266",
          "MaxCoverage": "7833",
          "TotCoverage": "717503",
          "MeanCoverage": "629.3885964912281"
        },
        {
          "Gene": "BRCA2",
          "Chr": "chr13",
          "Start": "32910377",
          "End": "32915357",
          "MinCoverage": "159",
          "MaxCoverage": "12016",
          "TotCoverage": "4185531",
          "MeanCoverage": "840.4680722891567"
        },
        {
          "Gene": "BRCA2",
          "Chr": "chr13",
          "Start": "32918652",
          "End": "32918832",
          "MinCoverage": "265",
          "MaxCoverage": "4368",
          "TotCoverage": "108556",
          "MeanCoverage": "603.0888888888888"
        },
        {
          "Gene": "BRCA2",
          "Chr": "chr13",
          "Start": "32920908",
          "End": "32921088",
          "MinCoverage": "254",
          "MaxCoverage": "4595",
          "TotCoverage": "114332",
          "MeanCoverage": "635.1777777777778"
        },
        {
          "Gene": "BRCA2",
          "Chr": "chr13",
          "Start": "32928971",
          "End": "32929451",
          "MinCoverage": "364",
          "MaxCoverage": "11655",
          "TotCoverage": "353873",
          "MeanCoverage": "737.2354166666667"
        },
        {
          "Gene": "BRCA2",
          "Chr": "chr13",
          "Start": "32930535",
          "End": "32930775",
          "MinCoverage": "219",
          "MaxCoverage": "5628",
          "TotCoverage": "142373",
          "MeanCoverage": "593.2208333333333"
        },
        {
          "Gene": "BRCA2",
          "Chr": "chr13",
          "Start": "32931852",
          "End": "32932092",
          "MinCoverage": "282",
          "MaxCoverage": "8305",
          "TotCoverage": "167620",
          "MeanCoverage": "698.4166666666666"
        },
        {
          "Gene": "BRCA2",
          "Chr": "chr13",
          "Start": "32936624",
          "End": "32936864",
          "MinCoverage": "342",
          "MaxCoverage": "7271",
          "TotCoverage": "120553",
          "MeanCoverage": "502.3041666666667"
        },
        {
          "Gene": "BRCA2",
          "Chr": "chr13",
          "Start": "32937282",
          "End": "32937702",
          "MinCoverage": "207",
          "MaxCoverage": "11868",
          "TotCoverage": "273817",
          "MeanCoverage": "651.9452380952381"
        },
        {
          "Gene": "BRCA2",
          "Chr": "chr13",
          "Start": "32944496",
          "End": "32944736",
          "MinCoverage": "150",
          "MaxCoverage": "4557",
          "TotCoverage": "110745",
          "MeanCoverage": "461.4375"
        },
        {
          "Gene": "BRCA2",
          "Chr": "chr13",
          "Start": "32945044",
          "End": "32945284",
          "MinCoverage": "96",
          "MaxCoverage": "3900",
          "TotCoverage": "82283",
          "MeanCoverage": "342.84583333333336"
        },
        {
          "Gene": "BRCA2",
          "Chr": "chr13",
          "Start": "32949421",
          "End": "32949601",
          "MinCoverage": "68",
          "MaxCoverage": "2880",
          "TotCoverage": "34132",
          "MeanCoverage": "189.62222222222223"
        },
        {
          "Gene": "BRCA2",
          "Chr": "chr13",
          "Start": "32950747",
          "End": "32950987",
          "MinCoverage": "247",
          "MaxCoverage": "4938",
          "TotCoverage": "132486",
          "MeanCoverage": "552.025"
        },
        {
          "Gene": "BRCA2",
          "Chr": "chr13",
          "Start": "32953432",
          "End": "32953672",
          "MinCoverage": "164",
          "MaxCoverage": "8113",
          "TotCoverage": "166664",
          "MeanCoverage": "694.4333333333333"
        },
        {
          "Gene": "BRCA2",
          "Chr": "chr13",
          "Start": "32953848",
          "End": "32954088",
          "MinCoverage": "227",
          "MaxCoverage": "5214",
          "TotCoverage": "147177",
          "MeanCoverage": "613.2375"
        },
        {
          "Gene": "BRCA2",
          "Chr": "chr13",
          "Start": "32954092",
          "End": "32954332",
          "MinCoverage": "175",
          "MaxCoverage": "4491",
          "TotCoverage": "121442",
          "MeanCoverage": "506.0083333333333"
        },
        {
          "Gene": "BRCA2",
          "Chr": "chr13",
          "Start": "32968797",
          "End": "32969097",
          "MinCoverage": "236",
          "MaxCoverage": "5866",
          "TotCoverage": "169050",
          "MeanCoverage": "563.5"
        },
        {
          "Gene": "BRCA2",
          "Chr": "chr13",
          "Start": "32970058",
          "End": "32970298",
          "MinCoverage": "18",
          "MaxCoverage": "1143",
          "TotCoverage": "16284",
          "MeanCoverage": "67.85"
        },
        {
          "Gene": "BRCA2",
          "Chr": "chr13",
          "Start": "32970987",
          "End": "32971227",
          "MinCoverage": "234",
          "MaxCoverage": "7623",
          "TotCoverage": "130941",
          "MeanCoverage": "545.5875"
        },
        {
          "Gene": "BRCA2",
          "Chr": "chr13",
          "Start": "32972272",
          "End": "32972932",
          "MinCoverage": "273",
          "MaxCoverage": "8214",
          "TotCoverage": "629263",
          "MeanCoverage": "953.4287878787878"
        },
        {
          "Gene": "RB1",
          "Chr": "chr13",
          "Start": "48877365",
          "End": "48878349",
          "MinCoverage": "46",
          "MaxCoverage": "16590",
          "TotCoverage": "1949949",
          "MeanCoverage": "1981.655487804878"
        },
        {
          "Gene": "RB1",
          "Chr": "chr13",
          "Start": "48881347",
          "End": "48881679",
          "MinCoverage": "344",
          "MaxCoverage": "13520",
          "TotCoverage": "308738",
          "MeanCoverage": "929.933734939759"
        },
        {
          "Gene": "RB1",
          "Chr": "chr13",
          "Start": "48916672",
          "End": "48916912",
          "MinCoverage": "443",
          "MaxCoverage": "7735",
          "TotCoverage": "208366",
          "MeanCoverage": "868.1916666666667"
        },
        {
          "Gene": "RB1",
          "Chr": "chr13",
          "Start": "48919155",
          "End": "48919395",
          "MinCoverage": "270",
          "MaxCoverage": "9380",
          "TotCoverage": "205137",
          "MeanCoverage": "854.7375"
        },
        {
          "Gene": "RB1",
          "Chr": "chr13",
          "Start": "48921859",
          "End": "48922099",
          "MinCoverage": "443",
          "MaxCoverage": "10218",
          "TotCoverage": "221337",
          "MeanCoverage": "922.2375"
        },
        {
          "Gene": "RB1",
          "Chr": "chr13",
          "Start": "48923005",
          "End": "48923245",
          "MinCoverage": "525",
          "MaxCoverage": "8265",
          "TotCoverage": "285589",
          "MeanCoverage": "1189.9541666666667"
        },
        {
          "Gene": "RB1",
          "Chr": "chr13",
          "Start": "48934074",
          "End": "48934314",
          "MinCoverage": "449",
          "MaxCoverage": "8792",
          "TotCoverage": "254653",
          "MeanCoverage": "1061.0541666666666"
        },
        {
          "Gene": "RB1",
          "Chr": "chr13",
          "Start": "48936871",
          "End": "48937171",
          "MinCoverage": "418",
          "MaxCoverage": "12480",
          "TotCoverage": "295672",
          "MeanCoverage": "985.5733333333334"
        },
        {
          "Gene": "RB1",
          "Chr": "chr13",
          "Start": "48938954",
          "End": "48939194",
          "MinCoverage": "280",
          "MaxCoverage": "5341",
          "TotCoverage": "125857",
          "MeanCoverage": "524.4041666666667"
        },
        {
          "Gene": "RB1",
          "Chr": "chr13",
          "Start": "48941564",
          "End": "48941804",
          "MinCoverage": "197",
          "MaxCoverage": "17550",
          "TotCoverage": "224395",
          "MeanCoverage": "934.9791666666666"
        },
        {
          "Gene": "RB1",
          "Chr": "chr13",
          "Start": "48942535",
          "End": "48942872",
          "MinCoverage": "335",
          "MaxCoverage": "10274",
          "TotCoverage": "273191",
          "MeanCoverage": "810.6557863501483"
        },
        {
          "Gene": "RB1",
          "Chr": "chr13",
          "Start": "48947464",
          "End": "48947704",
          "MinCoverage": "398",
          "MaxCoverage": "12404",
          "TotCoverage": "289482",
          "MeanCoverage": "1206.175"
        },
        {
          "Gene": "RB1",
          "Chr": "chr13",
          "Start": "48950991",
          "End": "48951231",
          "MinCoverage": "247",
          "MaxCoverage": "6852",
          "TotCoverage": "196373",
          "MeanCoverage": "818.2208333333333"
        },
        {
          "Gene": "RB1",
          "Chr": "chr13",
          "Start": "48953650",
          "End": "48953835",
          "MinCoverage": "316",
          "MaxCoverage": "6125",
          "TotCoverage": "119276",
          "MeanCoverage": "644.7351351351351"
        },
        {
          "Gene": "RB1",
          "Chr": "chr13",
          "Start": "48954086",
          "End": "48954514",
          "MinCoverage": "116",
          "MaxCoverage": "6256",
          "TotCoverage": "189374",
          "MeanCoverage": "442.4626168224299"
        },
        {
          "Gene": "RB1",
          "Chr": "chr13",
          "Start": "48955330",
          "End": "48955630",
          "MinCoverage": "599",
          "MaxCoverage": "21492",
          "TotCoverage": "361584",
          "MeanCoverage": "1205.28"
        },
        {
          "Gene": "RB1",
          "Chr": "chr13",
          "Start": "49027067",
          "End": "49027307",
          "MinCoverage": "711",
          "MaxCoverage": "16877",
          "TotCoverage": "464312",
          "MeanCoverage": "1934.6333333333334"
        },
        {
          "Gene": "RB1",
          "Chr": "chr13",
          "Start": "49030276",
          "End": "49030591",
          "MinCoverage": "437",
          "MaxCoverage": "10745",
          "TotCoverage": "422788",
          "MeanCoverage": "1342.184126984127"
        },
        {
          "Gene": "RB1",
          "Chr": "chr13",
          "Start": "49033741",
          "End": "49034041",
          "MinCoverage": "431",
          "MaxCoverage": "12922",
          "TotCoverage": "240031",
          "MeanCoverage": "800.1033333333334"
        },
        {
          "Gene": "RB1",
          "Chr": "chr13",
          "Start": "49037798",
          "End": "49038038",
          "MinCoverage": "527",
          "MaxCoverage": "13510",
          "TotCoverage": "349934",
          "MeanCoverage": "1458.0583333333334"
        },
        {
          "Gene": "RB1",
          "Chr": "chr13",
          "Start": "49039001",
          "End": "49039579",
          "MinCoverage": "187",
          "MaxCoverage": "10802",
          "TotCoverage": "457919",
          "MeanCoverage": "792.2474048442907"
        },
        {
          "Gene": "RB1",
          "Chr": "chr13",
          "Start": "49047390",
          "End": "49047630",
          "MinCoverage": "351",
          "MaxCoverage": "7644",
          "TotCoverage": "188488",
          "MeanCoverage": "785.3666666666667"
        },
        {
          "Gene": "RB1",
          "Chr": "chr13",
          "Start": "49050757",
          "End": "49051057",
          "MinCoverage": "311",
          "MaxCoverage": "8288",
          "TotCoverage": "208740",
          "MeanCoverage": "695.8"
        },
        {
          "Gene": "RB1",
          "Chr": "chr13",
          "Start": "49051395",
          "End": "49051635",
          "MinCoverage": "389",
          "MaxCoverage": "6678",
          "TotCoverage": "169700",
          "MeanCoverage": "707.0833333333334"
        },
        {
          "Gene": "BIVM-ERCC5,ERCC5",
          "Chr": "chr13",
          "Start": "103504405",
          "End": "103504705",
          "MinCoverage": "219",
          "MaxCoverage": "8364",
          "TotCoverage": "275996",
          "MeanCoverage": "919.9866666666667"
        },
        {
          "Gene": "BIVM-ERCC5,ERCC5",
          "Chr": "chr13",
          "Start": "103510546",
          "End": "103510846",
          "MinCoverage": "196",
          "MaxCoverage": "9870",
          "TotCoverage": "312323",
          "MeanCoverage": "1041.0766666666666"
        },
        {
          "Gene": "BIVM-ERCC5,ERCC5",
          "Chr": "chr13",
          "Start": "103513780",
          "End": "103514140",
          "MinCoverage": "304",
          "MaxCoverage": "9331",
          "TotCoverage": "307628",
          "MeanCoverage": "854.5222222222222"
        },
        {
          "Gene": "BIVM-ERCC5,ERCC5",
          "Chr": "chr13",
          "Start": "103514316",
          "End": "103515516",
          "MinCoverage": "617",
          "MaxCoverage": "13310",
          "TotCoverage": "1370542",
          "MeanCoverage": "1142.1183333333333"
        },
        {
          "Gene": "BIVM-ERCC5,ERCC5",
          "Chr": "chr13",
          "Start": "103517959",
          "End": "103518791",
          "MinCoverage": "508",
          "MaxCoverage": "16980",
          "TotCoverage": "822399",
          "MeanCoverage": "988.4603365384615"
        },
        {
          "Gene": "BIVM-ERCC5,ERCC5",
          "Chr": "chr13",
          "Start": "103518908",
          "End": "103519268",
          "MinCoverage": "488",
          "MaxCoverage": "10360",
          "TotCoverage": "988918",
          "MeanCoverage": "2746.9944444444445"
        },
        {
          "Gene": "BIVM-ERCC5,ERCC5",
          "Chr": "chr13",
          "Start": "103520332",
          "End": "103520673",
          "MinCoverage": "122",
          "MaxCoverage": "9513",
          "TotCoverage": "232859",
          "MeanCoverage": "682.8709677419355"
        },
        {
          "Gene": "BIVM-ERCC5,ERCC5",
          "Chr": "chr13",
          "Start": "103524467",
          "End": "103524827",
          "MinCoverage": "256",
          "MaxCoverage": "5632",
          "TotCoverage": "214592",
          "MeanCoverage": "596.0888888888888"
        },
        {
          "Gene": "BIVM-ERCC5,ERCC5",
          "Chr": "chr13",
          "Start": "103525530",
          "End": "103525770",
          "MinCoverage": "291",
          "MaxCoverage": "12980",
          "TotCoverage": "116222",
          "MeanCoverage": "484.2583333333333"
        },
        {
          "Gene": "BIVM-ERCC5,ERCC5",
          "Chr": "chr13",
          "Start": "103527583",
          "End": "103528423",
          "MinCoverage": "119",
          "MaxCoverage": "8680",
          "TotCoverage": "564426",
          "MeanCoverage": "671.9357142857143"
        },
        {
          "Gene": "SLC7A8",
          "Chr": "chr14",
          "Start": "23652185",
          "End": "23652528",
          "MinCoverage": "146",
          "MaxCoverage": "3606",
          "TotCoverage": "140983",
          "MeanCoverage": "411.02915451895046"
        },
        {
          "Gene": "FANCM",
          "Chr": "chr14",
          "Start": "45605218",
          "End": "45605758",
          "MinCoverage": "177",
          "MaxCoverage": "7180",
          "TotCoverage": "561146",
          "MeanCoverage": "1039.1592592592592"
        },
        {
          "Gene": "FANCM",
          "Chr": "chr14",
          "Start": "45606237",
          "End": "45606477",
          "MinCoverage": "289",
          "MaxCoverage": "4464",
          "TotCoverage": "112845",
          "MeanCoverage": "470.1875"
        },
        {
          "Gene": "FANCM",
          "Chr": "chr14",
          "Start": "45609783",
          "End": "45609963",
          "MinCoverage": "141",
          "MaxCoverage": "5726",
          "TotCoverage": "59039",
          "MeanCoverage": "327.99444444444447"
        },
        {
          "Gene": "FANCM",
          "Chr": "chr14",
          "Start": "45617998",
          "End": "45618238",
          "MinCoverage": "178",
          "MaxCoverage": "4112",
          "TotCoverage": "106426",
          "MeanCoverage": "443.44166666666666"
        },
        {
          "Gene": "FANCM",
          "Chr": "chr14",
          "Start": "45620545",
          "End": "45620785",
          "MinCoverage": "269",
          "MaxCoverage": "7344",
          "TotCoverage": "93340",
          "MeanCoverage": "388.9166666666667"
        },
        {
          "Gene": "FANCM",
          "Chr": "chr14",
          "Start": "45623068",
          "End": "45623308",
          "MinCoverage": "304",
          "MaxCoverage": "6304",
          "TotCoverage": "170906",
          "MeanCoverage": "712.1083333333333"
        },
        {
          "Gene": "FANCM",
          "Chr": "chr14",
          "Start": "45623855",
          "End": "45624095",
          "MinCoverage": "304",
          "MaxCoverage": "7272",
          "TotCoverage": "166269",
          "MeanCoverage": "692.7875"
        },
        {
          "Gene": "FANCM",
          "Chr": "chr14",
          "Start": "45624528",
          "End": "45624708",
          "MinCoverage": "161",
          "MaxCoverage": "14762",
          "TotCoverage": "80366",
          "MeanCoverage": "446.47777777777776"
        },
        {
          "Gene": "FANCM",
          "Chr": "chr14",
          "Start": "45628270",
          "End": "45628510",
          "MinCoverage": "76",
          "MaxCoverage": "4760",
          "TotCoverage": "97504",
          "MeanCoverage": "406.26666666666665"
        },
        {
          "Gene": "FANCM",
          "Chr": "chr14",
          "Start": "45633544",
          "End": "45633784",
          "MinCoverage": "118",
          "MaxCoverage": "2840",
          "TotCoverage": "58038",
          "MeanCoverage": "241.825"
        },
        {
          "Gene": "FANCM",
          "Chr": "chr14",
          "Start": "45636113",
          "End": "45636413",
          "MinCoverage": "321",
          "MaxCoverage": "9675",
          "TotCoverage": "213027",
          "MeanCoverage": "710.09"
        },
        {
          "Gene": "FANCM",
          "Chr": "chr14",
          "Start": "45639750",
          "End": "45639990",
          "MinCoverage": "97",
          "MaxCoverage": "5904",
          "TotCoverage": "118594",
          "MeanCoverage": "494.14166666666665"
        },
        {
          "Gene": "FANCM",
          "Chr": "chr14",
          "Start": "45642215",
          "End": "45642455",
          "MinCoverage": "233",
          "MaxCoverage": "6550",
          "TotCoverage": "136791",
          "MeanCoverage": "569.9625"
        },
        {
          "Gene": "FANCM",
          "Chr": "chr14",
          "Start": "45644236",
          "End": "45646216",
          "MinCoverage": "176",
          "MaxCoverage": "10704",
          "TotCoverage": "1720834",
          "MeanCoverage": "869.1080808080808"
        },
        {
          "Gene": "FANCM",
          "Chr": "chr14",
          "Start": "45650612",
          "End": "45650963",
          "MinCoverage": "157",
          "MaxCoverage": "5676",
          "TotCoverage": "183057",
          "MeanCoverage": "521.5299145299145"
        },
        {
          "Gene": "FANCM",
          "Chr": "chr14",
          "Start": "45652920",
          "End": "45653160",
          "MinCoverage": "228",
          "MaxCoverage": "9918",
          "TotCoverage": "172799",
          "MeanCoverage": "719.9958333333333"
        },
        {
          "Gene": "FANCM",
          "Chr": "chr14",
          "Start": "45654377",
          "End": "45654617",
          "MinCoverage": "183",
          "MaxCoverage": "5950",
          "TotCoverage": "95545",
          "MeanCoverage": "398.1041666666667"
        },
        {
          "Gene": "FANCM",
          "Chr": "chr14",
          "Start": "45656916",
          "End": "45657156",
          "MinCoverage": "384",
          "MaxCoverage": "9559",
          "TotCoverage": "195967",
          "MeanCoverage": "816.5291666666667"
        },
        {
          "Gene": "FANCM",
          "Chr": "chr14",
          "Start": "45657984",
          "End": "45658584",
          "MinCoverage": "162",
          "MaxCoverage": "9981",
          "TotCoverage": "505640",
          "MeanCoverage": "842.7333333333333"
        },
        {
          "Gene": "FANCM",
          "Chr": "chr14",
          "Start": "45664596",
          "End": "45664836",
          "MinCoverage": "342",
          "MaxCoverage": "4752",
          "TotCoverage": "95740",
          "MeanCoverage": "398.9166666666667"
        },
        {
          "Gene": "FANCM",
          "Chr": "chr14",
          "Start": "45665352",
          "End": "45665772",
          "MinCoverage": "149",
          "MaxCoverage": "6877",
          "TotCoverage": "173414",
          "MeanCoverage": "412.8904761904762"
        },
        {
          "Gene": "FANCM",
          "Chr": "chr14",
          "Start": "45667812",
          "End": "45668172",
          "MinCoverage": "231",
          "MaxCoverage": "6390",
          "TotCoverage": "239220",
          "MeanCoverage": "664.5"
        },
        {
          "Gene": "FANCM",
          "Chr": "chr14",
          "Start": "45669021",
          "End": "45669261",
          "MinCoverage": "180",
          "MaxCoverage": "6412",
          "TotCoverage": "137112",
          "MeanCoverage": "571.3"
        },
        {
          "Gene": "NIN",
          "Chr": "chr14",
          "Start": "51192484",
          "End": "51192844",
          "MinCoverage": "153",
          "MaxCoverage": "8616",
          "TotCoverage": "262466",
          "MeanCoverage": "729.0722222222222"
        },
        {
          "Gene": "NIN",
          "Chr": "chr14",
          "Start": "51196160",
          "End": "51196520",
          "MinCoverage": "203",
          "MaxCoverage": "3352",
          "TotCoverage": "222676",
          "MeanCoverage": "618.5444444444445"
        },
        {
          "Gene": "NIN",
          "Chr": "chr14",
          "Start": "51202164",
          "End": "51202404",
          "MinCoverage": "92",
          "MaxCoverage": "6410",
          "TotCoverage": "136973",
          "MeanCoverage": "570.7208333333333"
        },
        {
          "Gene": "NIN",
          "Chr": "chr14",
          "Start": "51204780",
          "End": "51205080",
          "MinCoverage": "377",
          "MaxCoverage": "6993",
          "TotCoverage": "228333",
          "MeanCoverage": "761.11"
        },
        {
          "Gene": "NIN",
          "Chr": "chr14",
          "Start": "51205965",
          "End": "51206265",
          "MinCoverage": "198",
          "MaxCoverage": "9256",
          "TotCoverage": "137627",
          "MeanCoverage": "458.75666666666666"
        },
        {
          "Gene": "NIN",
          "Chr": "chr14",
          "Start": "51208170",
          "End": "51208512",
          "MinCoverage": "158",
          "MaxCoverage": "11856",
          "TotCoverage": "349425",
          "MeanCoverage": "1021.7105263157895"
        },
        {
          "Gene": "NIN",
          "Chr": "chr14",
          "Start": "51210070",
          "End": "51210310",
          "MinCoverage": "149",
          "MaxCoverage": "6130",
          "TotCoverage": "103474",
          "MeanCoverage": "431.14166666666665"
        },
        {
          "Gene": "NIN",
          "Chr": "chr14",
          "Start": "51210901",
          "End": "51211141",
          "MinCoverage": "432",
          "MaxCoverage": "11055",
          "TotCoverage": "198568",
          "MeanCoverage": "827.3666666666667"
        },
        {
          "Gene": "NIN",
          "Chr": "chr14",
          "Start": "51219163",
          "End": "51219523",
          "MinCoverage": "128",
          "MaxCoverage": "10675",
          "TotCoverage": "336623",
          "MeanCoverage": "935.0638888888889"
        },
        {
          "Gene": "NIN",
          "Chr": "chr14",
          "Start": "51221195",
          "End": "51221682",
          "MinCoverage": "198",
          "MaxCoverage": "8640",
          "TotCoverage": "320481",
          "MeanCoverage": "658.0718685831622"
        },
        {
          "Gene": "NIN",
          "Chr": "chr14",
          "Start": "51226495",
          "End": "51227155",
          "MinCoverage": "99",
          "MaxCoverage": "6984",
          "TotCoverage": "569658",
          "MeanCoverage": "863.1181818181818"
        },
        {
          "Gene": "NIN",
          "Chr": "chr14",
          "Start": "51228448",
          "End": "51228688",
          "MinCoverage": "150",
          "MaxCoverage": "5584",
          "TotCoverage": "116912",
          "MeanCoverage": "487.1333333333333"
        },
        {
          "Gene": "NIN",
          "Chr": "chr14",
          "Start": "51230479",
          "End": "51230815",
          "MinCoverage": "203",
          "MaxCoverage": "7826",
          "TotCoverage": "255380",
          "MeanCoverage": "760.0595238095239"
        },
        {
          "Gene": "NIN",
          "Chr": "chr14",
          "Start": "51232907",
          "End": "51233260",
          "MinCoverage": "247",
          "MaxCoverage": "7007",
          "TotCoverage": "151759",
          "MeanCoverage": "429.91218130311614"
        },
        {
          "Gene": "NIN",
          "Chr": "chr14",
          "Start": "51233432",
          "End": "51233672",
          "MinCoverage": "359",
          "MaxCoverage": "6034",
          "TotCoverage": "178835",
          "MeanCoverage": "745.1458333333334"
        },
        {
          "Gene": "NIN",
          "Chr": "chr14",
          "Start": "51237042",
          "End": "51237342",
          "MinCoverage": "168",
          "MaxCoverage": "5736",
          "TotCoverage": "150749",
          "MeanCoverage": "502.49666666666667"
        },
        {
          "Gene": "NIN",
          "Chr": "chr14",
          "Start": "51237489",
          "End": "51237789",
          "MinCoverage": "202",
          "MaxCoverage": "4908",
          "TotCoverage": "216170",
          "MeanCoverage": "720.5666666666667"
        },
        {
          "Gene": "NIN",
          "Chr": "chr14",
          "Start": "51237997",
          "End": "51238237",
          "MinCoverage": "128",
          "MaxCoverage": "2128",
          "TotCoverage": "46477",
          "MeanCoverage": "193.65416666666667"
        },
        {
          "Gene": "NIN",
          "Chr": "chr14",
          "Start": "51238952",
          "End": "51239252",
          "MinCoverage": "87",
          "MaxCoverage": "4776",
          "TotCoverage": "79400",
          "MeanCoverage": "264.6666666666667"
        },
        {
          "Gene": "NIN",
          "Chr": "chr14",
          "Start": "51239589",
          "End": "51239889",
          "MinCoverage": "229",
          "MaxCoverage": "8822",
          "TotCoverage": "170335",
          "MeanCoverage": "567.7833333333333"
        },
        {
          "Gene": "NIN",
          "Chr": "chr14",
          "Start": "51243611",
          "End": "51243911",
          "MinCoverage": "408",
          "MaxCoverage": "7840",
          "TotCoverage": "228201",
          "MeanCoverage": "760.67"
        },
        {
          "Gene": "NIN",
          "Chr": "chr14",
          "Start": "51259364",
          "End": "51259664",
          "MinCoverage": "340",
          "MaxCoverage": "5345",
          "TotCoverage": "252399",
          "MeanCoverage": "841.33"
        },
        {
          "Gene": "NIN",
          "Chr": "chr14",
          "Start": "51288513",
          "End": "51288873",
          "MinCoverage": "420",
          "MaxCoverage": "12110",
          "TotCoverage": "526922",
          "MeanCoverage": "1463.6722222222222"
        },
        {
          "Gene": "DICER1",
          "Chr": "chr14",
          "Start": "95598782",
          "End": "95599082",
          "MinCoverage": "237",
          "MaxCoverage": "9961",
          "TotCoverage": "273703",
          "MeanCoverage": "912.3433333333334"
        },
        {
          "Gene": "DICER1",
          "Chr": "chr14",
          "Start": "95599595",
          "End": "95599895",
          "MinCoverage": "279",
          "MaxCoverage": "4521",
          "TotCoverage": "125190",
          "MeanCoverage": "417.3"
        },
        {
          "Gene": "AKT1",
          "Chr": "chr14",
          "Start": "105235621",
          "End": "105236821",
          "MinCoverage": "451",
          "MaxCoverage": "8559",
          "TotCoverage": "1571007",
          "MeanCoverage": "1309.1725"
        },
        {
          "Gene": "AKT1",
          "Chr": "chr14",
          "Start": "105239141",
          "End": "105239501",
          "MinCoverage": "166",
          "MaxCoverage": "8700",
          "TotCoverage": "624308",
          "MeanCoverage": "1734.1888888888889"
        },
        {
          "Gene": "AKT1",
          "Chr": "chr14",
          "Start": "105239512",
          "End": "105239992",
          "MinCoverage": "523",
          "MaxCoverage": "11722",
          "TotCoverage": "1478034",
          "MeanCoverage": "3079.2375"
        },
        {
          "Gene": "AKT1",
          "Chr": "chr14",
          "Start": "105240162",
          "End": "105240402",
          "MinCoverage": "608",
          "MaxCoverage": "6141",
          "TotCoverage": "412778",
          "MeanCoverage": "1719.9083333333333"
        },
        {
          "Gene": "AKT1",
          "Chr": "chr14",
          "Start": "105241199",
          "End": "105241619",
          "MinCoverage": "633",
          "MaxCoverage": "7190",
          "TotCoverage": "806027",
          "MeanCoverage": "1919.1119047619047"
        },
        {
          "Gene": "AKT1",
          "Chr": "chr14",
          "Start": "105241912",
          "End": "105242212",
          "MinCoverage": "390",
          "MaxCoverage": "6129",
          "TotCoverage": "480838",
          "MeanCoverage": "1602.7933333333333"
        },
        {
          "Gene": "AKT1",
          "Chr": "chr14",
          "Start": "105242931",
          "End": "105243171",
          "MinCoverage": "573",
          "MaxCoverage": "5337",
          "TotCoverage": "395905",
          "MeanCoverage": "1649.6041666666667"
        },
        {
          "Gene": "AKT1",
          "Chr": "chr14",
          "Start": "105246313",
          "End": "105246608",
          "MinCoverage": "1420",
          "MaxCoverage": "14475",
          "TotCoverage": "1043415",
          "MeanCoverage": "3537.0"
        },
        {
          "Gene": "NIPA2",
          "Chr": "chr15",
          "Start": "23012208",
          "End": "23012508",
          "MinCoverage": "312",
          "MaxCoverage": "7782",
          "TotCoverage": "294846",
          "MeanCoverage": "982.82"
        },
        {
          "Gene": "NIPA2",
          "Chr": "chr15",
          "Start": "23014362",
          "End": "23014602",
          "MinCoverage": "75",
          "MaxCoverage": "2442",
          "TotCoverage": "50571",
          "MeanCoverage": "210.7125"
        },
        {
          "Gene": "BUB1B",
          "Chr": "chr15",
          "Start": "40457175",
          "End": "40457475",
          "MinCoverage": "245",
          "MaxCoverage": "4121",
          "TotCoverage": "108711",
          "MeanCoverage": "362.37"
        },
        {
          "Gene": "BUB1B",
          "Chr": "chr15",
          "Start": "40462172",
          "End": "40462412",
          "MinCoverage": "393",
          "MaxCoverage": "10000",
          "TotCoverage": "199426",
          "MeanCoverage": "830.9416666666667"
        },
        {
          "Gene": "BUB1B",
          "Chr": "chr15",
          "Start": "40462659",
          "End": "40462959",
          "MinCoverage": "56",
          "MaxCoverage": "6470",
          "TotCoverage": "169401",
          "MeanCoverage": "564.67"
        },
        {
          "Gene": "BUB1B",
          "Chr": "chr15",
          "Start": "40468625",
          "End": "40468925",
          "MinCoverage": "312",
          "MaxCoverage": "8092",
          "TotCoverage": "332669",
          "MeanCoverage": "1108.8966666666668"
        },
        {
          "Gene": "BUB1B",
          "Chr": "chr15",
          "Start": "40475849",
          "End": "40476149",
          "MinCoverage": "275",
          "MaxCoverage": "6219",
          "TotCoverage": "182868",
          "MeanCoverage": "609.56"
        },
        {
          "Gene": "BUB1B",
          "Chr": "chr15",
          "Start": "40477292",
          "End": "40477652",
          "MinCoverage": "436",
          "MaxCoverage": "13915",
          "TotCoverage": "311082",
          "MeanCoverage": "864.1166666666667"
        },
        {
          "Gene": "BUB1B",
          "Chr": "chr15",
          "Start": "40477677",
          "End": "40477917",
          "MinCoverage": "401",
          "MaxCoverage": "11495",
          "TotCoverage": "165953",
          "MeanCoverage": "691.4708333333333"
        },
        {
          "Gene": "BUB1B",
          "Chr": "chr15",
          "Start": "40488680",
          "End": "40489040",
          "MinCoverage": "350",
          "MaxCoverage": "11160",
          "TotCoverage": "361902",
          "MeanCoverage": "1005.2833333333333"
        },
        {
          "Gene": "BUB1B",
          "Chr": "chr15",
          "Start": "40494508",
          "End": "40494962",
          "MinCoverage": "296",
          "MaxCoverage": "9480",
          "TotCoverage": "401220",
          "MeanCoverage": "883.7444933920705"
        },
        {
          "Gene": "BUB1B",
          "Chr": "chr15",
          "Start": "40498311",
          "End": "40498731",
          "MinCoverage": "442",
          "MaxCoverage": "14160",
          "TotCoverage": "341687",
          "MeanCoverage": "813.5404761904762"
        },
        {
          "Gene": "BUB1B",
          "Chr": "chr15",
          "Start": "40500784",
          "End": "40501024",
          "MinCoverage": "220",
          "MaxCoverage": "9976",
          "TotCoverage": "193756",
          "MeanCoverage": "807.3166666666667"
        },
        {
          "Gene": "BUB1B",
          "Chr": "chr15",
          "Start": "40501755",
          "End": "40502055",
          "MinCoverage": "427",
          "MaxCoverage": "11310",
          "TotCoverage": "451236",
          "MeanCoverage": "1504.12"
        },
        {
          "Gene": "BUB1B",
          "Chr": "chr15",
          "Start": "40504637",
          "End": "40504937",
          "MinCoverage": "273",
          "MaxCoverage": "15818",
          "TotCoverage": "318451",
          "MeanCoverage": "1061.5033333333333"
        },
        {
          "Gene": "BUB1B",
          "Chr": "chr15",
          "Start": "40505453",
          "End": "40505753",
          "MinCoverage": "336",
          "MaxCoverage": "6723",
          "TotCoverage": "193119",
          "MeanCoverage": "643.73"
        },
        {
          "Gene": "BUB1B,BUB1B-PAK6",
          "Chr": "chr15",
          "Start": "40509568",
          "End": "40509928",
          "MinCoverage": "100",
          "MaxCoverage": "9120",
          "TotCoverage": "180356",
          "MeanCoverage": "500.9888888888889"
        },
        {
          "Gene": "BUB1B,BUB1B-PAK6",
          "Chr": "chr15",
          "Start": "40512690",
          "End": "40513410",
          "MinCoverage": "310",
          "MaxCoverage": "16605",
          "TotCoverage": "850416",
          "MeanCoverage": "1181.1333333333334"
        },
        {
          "Gene": "RAD51",
          "Chr": "chr15",
          "Start": "40990909",
          "End": "40991089",
          "MinCoverage": "236",
          "MaxCoverage": "4627",
          "TotCoverage": "94202",
          "MeanCoverage": "523.3444444444444"
        },
        {
          "Gene": "RAD51",
          "Chr": "chr15",
          "Start": "40993215",
          "End": "40993455",
          "MinCoverage": "67",
          "MaxCoverage": "3870",
          "TotCoverage": "56507",
          "MeanCoverage": "235.44583333333333"
        },
        {
          "Gene": "RAD51",
          "Chr": "chr15",
          "Start": "40998313",
          "End": "40998553",
          "MinCoverage": "241",
          "MaxCoverage": "5430",
          "TotCoverage": "80449",
          "MeanCoverage": "335.20416666666665"
        },
        {
          "Gene": "RAD51",
          "Chr": "chr15",
          "Start": "41001178",
          "End": "41001358",
          "MinCoverage": "206",
          "MaxCoverage": "6495",
          "TotCoverage": "92626",
          "MeanCoverage": "514.5888888888888"
        },
        {
          "Gene": "RAD51",
          "Chr": "chr15",
          "Start": "41010959",
          "End": "41011139",
          "MinCoverage": "210",
          "MaxCoverage": "7676",
          "TotCoverage": "64992",
          "MeanCoverage": "361.06666666666666"
        },
        {
          "Gene": "RAD51",
          "Chr": "chr15",
          "Start": "41020845",
          "End": "41021085",
          "MinCoverage": "387",
          "MaxCoverage": "6523",
          "TotCoverage": "136869",
          "MeanCoverage": "570.2875"
        },
        {
          "Gene": "RAD51",
          "Chr": "chr15",
          "Start": "41021647",
          "End": "41021887",
          "MinCoverage": "187",
          "MaxCoverage": "5300",
          "TotCoverage": "102821",
          "MeanCoverage": "428.42083333333335"
        },
        {
          "Gene": "RAD51",
          "Chr": "chr15",
          "Start": "41021991",
          "End": "41022231",
          "MinCoverage": "212",
          "MaxCoverage": "3848",
          "TotCoverage": "88829",
          "MeanCoverage": "370.12083333333334"
        },
        {
          "Gene": "RAD51",
          "Chr": "chr15",
          "Start": "41023194",
          "End": "41023434",
          "MinCoverage": "143",
          "MaxCoverage": "6528",
          "TotCoverage": "73452",
          "MeanCoverage": "306.05"
        },
        {
          "Gene": "MAP2K1",
          "Chr": "chr15",
          "Start": "66679129",
          "End": "66679789",
          "MinCoverage": "11",
          "MaxCoverage": "1864",
          "TotCoverage": "100682",
          "MeanCoverage": "152.54848484848486"
        },
        {
          "Gene": "MAP2K1",
          "Chr": "chr15",
          "Start": "66707253",
          "End": "66707553",
          "MinCoverage": "138",
          "MaxCoverage": "7890",
          "TotCoverage": "182279",
          "MeanCoverage": "607.5966666666667"
        },
        {
          "Gene": "MAP2K1",
          "Chr": "chr15",
          "Start": "66727349",
          "End": "66727589",
          "MinCoverage": "76",
          "MaxCoverage": "5474",
          "TotCoverage": "77745",
          "MeanCoverage": "323.9375"
        },
        {
          "Gene": "MAP2K1",
          "Chr": "chr15",
          "Start": "66729036",
          "End": "66729276",
          "MinCoverage": "120",
          "MaxCoverage": "8970",
          "TotCoverage": "164453",
          "MeanCoverage": "685.2208333333333"
        },
        {
          "Gene": "MAP2K1",
          "Chr": "chr15",
          "Start": "66735566",
          "End": "66735746",
          "MinCoverage": "39",
          "MaxCoverage": "3600",
          "TotCoverage": "33981",
          "MeanCoverage": "188.78333333333333"
        },
        {
          "Gene": "MAP2K1",
          "Chr": "chr15",
          "Start": "66736968",
          "End": "66737328",
          "MinCoverage": "276",
          "MaxCoverage": "13224",
          "TotCoverage": "202730",
          "MeanCoverage": "563.1388888888889"
        },
        {
          "Gene": "MAP2K1",
          "Chr": "chr15",
          "Start": "66738774",
          "End": "66739134",
          "MinCoverage": "184",
          "MaxCoverage": "7182",
          "TotCoverage": "204704",
          "MeanCoverage": "568.6222222222223"
        },
        {
          "Gene": "MAP2K1",
          "Chr": "chr15",
          "Start": "66745746",
          "End": "66745926",
          "MinCoverage": "152",
          "MaxCoverage": "3580",
          "TotCoverage": "56909",
          "MeanCoverage": "316.1611111111111"
        },
        {
          "Gene": "MAP2K1",
          "Chr": "chr15",
          "Start": "66774034",
          "End": "66774274",
          "MinCoverage": "140",
          "MaxCoverage": "10323",
          "TotCoverage": "182720",
          "MeanCoverage": "761.3333333333334"
        },
        {
          "Gene": "MAP2K1",
          "Chr": "chr15",
          "Start": "66777308",
          "End": "66777548",
          "MinCoverage": "120",
          "MaxCoverage": "1715",
          "TotCoverage": "52477",
          "MeanCoverage": "218.65416666666667"
        },
        {
          "Gene": "MAP2K1",
          "Chr": "chr15",
          "Start": "66779507",
          "End": "66779687",
          "MinCoverage": "242",
          "MaxCoverage": "5520",
          "TotCoverage": "93295",
          "MeanCoverage": "518.3055555555555"
        },
        {
          "Gene": "MAP2K1",
          "Chr": "chr15",
          "Start": "66781493",
          "End": "66781673",
          "MinCoverage": "170",
          "MaxCoverage": "3723",
          "TotCoverage": "39909",
          "MeanCoverage": "221.71666666666667"
        },
        {
          "Gene": "MAP2K1,SNAPC5",
          "Chr": "chr15",
          "Start": "66782039",
          "End": "66783113",
          "MinCoverage": "278",
          "MaxCoverage": "9992",
          "TotCoverage": "1013500",
          "MeanCoverage": "943.6685288640596"
        },
        {
          "Gene": "MAP2K1,SNAPC5",
          "Chr": "chr15",
          "Start": "66783140",
          "End": "66784760",
          "MinCoverage": "151",
          "MaxCoverage": "10430",
          "TotCoverage": "876384",
          "MeanCoverage": "540.9777777777778"
        },
        {
          "Gene": "NTRK3",
          "Chr": "chr15",
          "Start": "88420138",
          "End": "88420378",
          "MinCoverage": "206",
          "MaxCoverage": "4060",
          "TotCoverage": "93204",
          "MeanCoverage": "388.35"
        },
        {
          "Gene": "NTRK3",
          "Chr": "chr15",
          "Start": "88423459",
          "End": "88423699",
          "MinCoverage": "103",
          "MaxCoverage": "7272",
          "TotCoverage": "89097",
          "MeanCoverage": "371.2375"
        },
        {
          "Gene": "NTRK3",
          "Chr": "chr15",
          "Start": "88459690",
          "End": "88459870",
          "MinCoverage": "290",
          "MaxCoverage": "3984",
          "TotCoverage": "82144",
          "MeanCoverage": "456.35555555555555"
        },
        {
          "Gene": "NTRK3",
          "Chr": "chr15",
          "Start": "88468757",
          "End": "88468937",
          "MinCoverage": "489",
          "MaxCoverage": "5810",
          "TotCoverage": "130388",
          "MeanCoverage": "724.3777777777777"
        },
        {
          "Gene": "NTRK3",
          "Chr": "chr15",
          "Start": "88472388",
          "End": "88472688",
          "MinCoverage": "257",
          "MaxCoverage": "4352",
          "TotCoverage": "256325",
          "MeanCoverage": "854.4166666666666"
        },
        {
          "Gene": "NTRK3",
          "Chr": "chr15",
          "Start": "88476208",
          "End": "88476448",
          "MinCoverage": "261",
          "MaxCoverage": "7260",
          "TotCoverage": "121534",
          "MeanCoverage": "506.39166666666665"
        },
        {
          "Gene": "NTRK3",
          "Chr": "chr15",
          "Start": "88483798",
          "End": "88484038",
          "MinCoverage": "315",
          "MaxCoverage": "5677",
          "TotCoverage": "199512",
          "MeanCoverage": "831.3"
        },
        {
          "Gene": "NTRK3",
          "Chr": "chr15",
          "Start": "88522477",
          "End": "88522717",
          "MinCoverage": "202",
          "MaxCoverage": "3948",
          "TotCoverage": "134040",
          "MeanCoverage": "558.5"
        },
        {
          "Gene": "NTRK3",
          "Chr": "chr15",
          "Start": "88524287",
          "End": "88524467",
          "MinCoverage": "134",
          "MaxCoverage": "4872",
          "TotCoverage": "77487",
          "MeanCoverage": "430.48333333333335"
        },
        {
          "Gene": "NTRK3",
          "Chr": "chr15",
          "Start": "88524562",
          "End": "88524742",
          "MinCoverage": "410",
          "MaxCoverage": "5481",
          "TotCoverage": "103666",
          "MeanCoverage": "575.9222222222222"
        },
        {
          "Gene": "NTRK3",
          "Chr": "chr15",
          "Start": "88576061",
          "End": "88576301",
          "MinCoverage": "67",
          "MaxCoverage": "1470",
          "TotCoverage": "61045",
          "MeanCoverage": "254.35416666666666"
        },
        {
          "Gene": "NTRK3",
          "Chr": "chr15",
          "Start": "88615715",
          "End": "88615895",
          "MinCoverage": "373",
          "MaxCoverage": "5874",
          "TotCoverage": "124559",
          "MeanCoverage": "691.9944444444444"
        },
        {
          "Gene": "NTRK3",
          "Chr": "chr15",
          "Start": "88669432",
          "End": "88669672",
          "MinCoverage": "393",
          "MaxCoverage": "11610",
          "TotCoverage": "241338",
          "MeanCoverage": "1005.575"
        },
        {
          "Gene": "NTRK3",
          "Chr": "chr15",
          "Start": "88670334",
          "End": "88670514",
          "MinCoverage": "103",
          "MaxCoverage": "1944",
          "TotCoverage": "31407",
          "MeanCoverage": "174.48333333333332"
        },
        {
          "Gene": "NTRK3",
          "Chr": "chr15",
          "Start": "88671863",
          "End": "88672043",
          "MinCoverage": "272",
          "MaxCoverage": "5845",
          "TotCoverage": "135952",
          "MeanCoverage": "755.2888888888889"
        },
        {
          "Gene": "NTRK3",
          "Chr": "chr15",
          "Start": "88678299",
          "End": "88678659",
          "MinCoverage": "274",
          "MaxCoverage": "5196",
          "TotCoverage": "380734",
          "MeanCoverage": "1057.5944444444444"
        },
        {
          "Gene": "NTRK3",
          "Chr": "chr15",
          "Start": "88679080",
          "End": "88679320",
          "MinCoverage": "344",
          "MaxCoverage": "9504",
          "TotCoverage": "152304",
          "MeanCoverage": "634.6"
        },
        {
          "Gene": "NTRK3",
          "Chr": "chr15",
          "Start": "88679648",
          "End": "88679888",
          "MinCoverage": "21",
          "MaxCoverage": "1729",
          "TotCoverage": "22660",
          "MeanCoverage": "94.41666666666667"
        },
        {
          "Gene": "NTRK3",
          "Chr": "chr15",
          "Start": "88680593",
          "End": "88680833",
          "MinCoverage": "223",
          "MaxCoverage": "5532",
          "TotCoverage": "298606",
          "MeanCoverage": "1244.1916666666666"
        },
        {
          "Gene": "NTRK3",
          "Chr": "chr15",
          "Start": "88690509",
          "End": "88690689",
          "MinCoverage": "290",
          "MaxCoverage": "5034",
          "TotCoverage": "111635",
          "MeanCoverage": "620.1944444444445"
        },
        {
          "Gene": "NTRK3",
          "Chr": "chr15",
          "Start": "88726594",
          "End": "88726774",
          "MinCoverage": "312",
          "MaxCoverage": "2920",
          "TotCoverage": "92642",
          "MeanCoverage": "514.6777777777778"
        },
        {
          "Gene": "NTRK3",
          "Chr": "chr15",
          "Start": "88727393",
          "End": "88727573",
          "MinCoverage": "290",
          "MaxCoverage": "6604",
          "TotCoverage": "198598",
          "MeanCoverage": "1103.3222222222223"
        },
        {
          "Gene": "NTRK3",
          "Chr": "chr15",
          "Start": "88799110",
          "End": "88799410",
          "MinCoverage": "156",
          "MaxCoverage": "6832",
          "TotCoverage": "230966",
          "MeanCoverage": "769.8866666666667"
        },
        {
          "Gene": "IDH2",
          "Chr": "chr15",
          "Start": "90627158",
          "End": "90627638",
          "MinCoverage": "459",
          "MaxCoverage": "7251",
          "TotCoverage": "790090",
          "MeanCoverage": "1646.0208333333333"
        },
        {
          "Gene": "IDH2",
          "Chr": "chr15",
          "Start": "90627978",
          "End": "90628398",
          "MinCoverage": "363",
          "MaxCoverage": "13168",
          "TotCoverage": "822139",
          "MeanCoverage": "1957.4738095238095"
        },
        {
          "Gene": "IDH2",
          "Chr": "chr15",
          "Start": "90628442",
          "End": "90628682",
          "MinCoverage": "292",
          "MaxCoverage": "4494",
          "TotCoverage": "244443",
          "MeanCoverage": "1018.5125"
        },
        {
          "Gene": "IDH2",
          "Chr": "chr15",
          "Start": "90630269",
          "End": "90630569",
          "MinCoverage": "302",
          "MaxCoverage": "4696",
          "TotCoverage": "228206",
          "MeanCoverage": "760.6866666666666"
        },
        {
          "Gene": "IDH2",
          "Chr": "chr15",
          "Start": "90630618",
          "End": "90630858",
          "MinCoverage": "570",
          "MaxCoverage": "4948",
          "TotCoverage": "273031",
          "MeanCoverage": "1137.6291666666666"
        },
        {
          "Gene": "IDH2",
          "Chr": "chr15",
          "Start": "90631529",
          "End": "90632069",
          "MinCoverage": "348",
          "MaxCoverage": "8756",
          "TotCoverage": "757858",
          "MeanCoverage": "1403.4407407407407"
        },
        {
          "Gene": "IDH2",
          "Chr": "chr15",
          "Start": "90634710",
          "End": "90634950",
          "MinCoverage": "330",
          "MaxCoverage": "7184",
          "TotCoverage": "333706",
          "MeanCoverage": "1390.4416666666666"
        },
        {
          "Gene": "TSC2",
          "Chr": "chr16",
          "Start": "2098182",
          "End": "2098362",
          "MinCoverage": "275",
          "MaxCoverage": "2136",
          "TotCoverage": "118892",
          "MeanCoverage": "660.5111111111111"
        },
        {
          "Gene": "TSC2",
          "Chr": "chr16",
          "Start": "2098550",
          "End": "2098790",
          "MinCoverage": "161",
          "MaxCoverage": "4151",
          "TotCoverage": "88459",
          "MeanCoverage": "368.57916666666665"
        },
        {
          "Gene": "TSC2",
          "Chr": "chr16",
          "Start": "2100353",
          "End": "2100533",
          "MinCoverage": "471",
          "MaxCoverage": "7350",
          "TotCoverage": "126733",
          "MeanCoverage": "704.0722222222222"
        },
        {
          "Gene": "TSC2",
          "Chr": "chr16",
          "Start": "2103322",
          "End": "2103562",
          "MinCoverage": "121",
          "MaxCoverage": "1528",
          "TotCoverage": "73648",
          "MeanCoverage": "306.8666666666667"
        },
        {
          "Gene": "TSC2",
          "Chr": "chr16",
          "Start": "2104248",
          "End": "2104488",
          "MinCoverage": "393",
          "MaxCoverage": "6025",
          "TotCoverage": "223419",
          "MeanCoverage": "930.9125"
        },
        {
          "Gene": "TSC2",
          "Chr": "chr16",
          "Start": "2105341",
          "End": "2105581",
          "MinCoverage": "484",
          "MaxCoverage": "4930",
          "TotCoverage": "236859",
          "MeanCoverage": "986.9125"
        },
        {
          "Gene": "TSC2",
          "Chr": "chr16",
          "Start": "2106113",
          "End": "2106293",
          "MinCoverage": "546",
          "MaxCoverage": "7545",
          "TotCoverage": "320932",
          "MeanCoverage": "1782.9555555555555"
        },
        {
          "Gene": "TSC2",
          "Chr": "chr16",
          "Start": "2106587",
          "End": "2106827",
          "MinCoverage": "493",
          "MaxCoverage": "9351",
          "TotCoverage": "453659",
          "MeanCoverage": "1890.2458333333334"
        },
        {
          "Gene": "TSC2",
          "Chr": "chr16",
          "Start": "2107052",
          "End": "2107232",
          "MinCoverage": "257",
          "MaxCoverage": "1915",
          "TotCoverage": "85037",
          "MeanCoverage": "472.4277777777778"
        },
        {
          "Gene": "TSC2",
          "Chr": "chr16",
          "Start": "2108690",
          "End": "2108930",
          "MinCoverage": "316",
          "MaxCoverage": "2145",
          "TotCoverage": "128625",
          "MeanCoverage": "535.9375"
        },
        {
          "Gene": "TSC2",
          "Chr": "chr16",
          "Start": "2110622",
          "End": "2110862",
          "MinCoverage": "504",
          "MaxCoverage": "6093",
          "TotCoverage": "336406",
          "MeanCoverage": "1401.6916666666666"
        },
        {
          "Gene": "TSC2",
          "Chr": "chr16",
          "Start": "2111820",
          "End": "2112060",
          "MinCoverage": "218",
          "MaxCoverage": "6056",
          "TotCoverage": "230528",
          "MeanCoverage": "960.5333333333333"
        },
        {
          "Gene": "TSC2",
          "Chr": "chr16",
          "Start": "2112429",
          "End": "2112669",
          "MinCoverage": "368",
          "MaxCoverage": "3580",
          "TotCoverage": "169969",
          "MeanCoverage": "708.2041666666667"
        },
        {
          "Gene": "TSC2",
          "Chr": "chr16",
          "Start": "2112923",
          "End": "2113103",
          "MinCoverage": "745",
          "MaxCoverage": "4434",
          "TotCoverage": "284114",
          "MeanCoverage": "1578.411111111111"
        },
        {
          "Gene": "TSC2",
          "Chr": "chr16",
          "Start": "2114230",
          "End": "2114470",
          "MinCoverage": "320",
          "MaxCoverage": "7740",
          "TotCoverage": "352105",
          "MeanCoverage": "1467.1041666666667"
        },
        {
          "Gene": "TSC2",
          "Chr": "chr16",
          "Start": "2115457",
          "End": "2115697",
          "MinCoverage": "433",
          "MaxCoverage": "3204",
          "TotCoverage": "170795",
          "MeanCoverage": "711.6458333333334"
        },
        {
          "Gene": "TSC2",
          "Chr": "chr16",
          "Start": "2120397",
          "End": "2120637",
          "MinCoverage": "1228",
          "MaxCoverage": "13380",
          "TotCoverage": "724512",
          "MeanCoverage": "3018.8"
        },
        {
          "Gene": "TSC2",
          "Chr": "chr16",
          "Start": "2121443",
          "End": "2121683",
          "MinCoverage": "802",
          "MaxCoverage": "6462",
          "TotCoverage": "389511",
          "MeanCoverage": "1622.9625"
        },
        {
          "Gene": "TSC2",
          "Chr": "chr16",
          "Start": "2121739",
          "End": "2121979",
          "MinCoverage": "303",
          "MaxCoverage": "3274",
          "TotCoverage": "260002",
          "MeanCoverage": "1083.3416666666667"
        },
        {
          "Gene": "TSC2",
          "Chr": "chr16",
          "Start": "2122182",
          "End": "2122422",
          "MinCoverage": "238",
          "MaxCoverage": "5635",
          "TotCoverage": "217229",
          "MeanCoverage": "905.1208333333333"
        },
        {
          "Gene": "TSC2",
          "Chr": "chr16",
          "Start": "2122796",
          "End": "2123036",
          "MinCoverage": "304",
          "MaxCoverage": "5020",
          "TotCoverage": "209196",
          "MeanCoverage": "871.65"
        },
        {
          "Gene": "TSC2",
          "Chr": "chr16",
          "Start": "2124175",
          "End": "2124415",
          "MinCoverage": "375",
          "MaxCoverage": "3408",
          "TotCoverage": "237150",
          "MeanCoverage": "988.125"
        },
        {
          "Gene": "TSC2",
          "Chr": "chr16",
          "Start": "2125756",
          "End": "2125936",
          "MinCoverage": "1551",
          "MaxCoverage": "13716",
          "TotCoverage": "607836",
          "MeanCoverage": "3376.866666666667"
        },
        {
          "Gene": "TSC2",
          "Chr": "chr16",
          "Start": "2126041",
          "End": "2126281",
          "MinCoverage": "330",
          "MaxCoverage": "6550",
          "TotCoverage": "205657",
          "MeanCoverage": "856.9041666666667"
        },
        {
          "Gene": "TSC2",
          "Chr": "chr16",
          "Start": "2126448",
          "End": "2126628",
          "MinCoverage": "468",
          "MaxCoverage": "4424",
          "TotCoverage": "221983",
          "MeanCoverage": "1233.2388888888888"
        },
        {
          "Gene": "TSC2",
          "Chr": "chr16",
          "Start": "2127542",
          "End": "2127782",
          "MinCoverage": "230",
          "MaxCoverage": "3282",
          "TotCoverage": "170368",
          "MeanCoverage": "709.8666666666667"
        },
        {
          "Gene": "TSC2",
          "Chr": "chr16",
          "Start": "2128994",
          "End": "2129472",
          "MinCoverage": "443",
          "MaxCoverage": "10968",
          "TotCoverage": "929746",
          "MeanCoverage": "1945.0753138075313"
        },
        {
          "Gene": "TSC2",
          "Chr": "chr16",
          "Start": "2129493",
          "End": "2129733",
          "MinCoverage": "235",
          "MaxCoverage": "2932",
          "TotCoverage": "210345",
          "MeanCoverage": "876.4375"
        },
        {
          "Gene": "TSC2",
          "Chr": "chr16",
          "Start": "2130151",
          "End": "2130391",
          "MinCoverage": "337",
          "MaxCoverage": "3972",
          "TotCoverage": "212211",
          "MeanCoverage": "884.2125"
        },
        {
          "Gene": "TSC2",
          "Chr": "chr16",
          "Start": "2131577",
          "End": "2131817",
          "MinCoverage": "966",
          "MaxCoverage": "7374",
          "TotCoverage": "497214",
          "MeanCoverage": "2071.725"
        },
        {
          "Gene": "TSC2",
          "Chr": "chr16",
          "Start": "2132380",
          "End": "2132560",
          "MinCoverage": "768",
          "MaxCoverage": "6126",
          "TotCoverage": "293258",
          "MeanCoverage": "1629.2111111111112"
        },
        {
          "Gene": "TSC2",
          "Chr": "chr16",
          "Start": "2133132",
          "End": "2133312",
          "MinCoverage": "813",
          "MaxCoverage": "8280",
          "TotCoverage": "283237",
          "MeanCoverage": "1573.5388888888888"
        },
        {
          "Gene": "TSC2",
          "Chr": "chr16",
          "Start": "2133636",
          "End": "2133876",
          "MinCoverage": "91",
          "MaxCoverage": "1875",
          "TotCoverage": "97276",
          "MeanCoverage": "405.31666666666666"
        },
        {
          "Gene": "TSC2",
          "Chr": "chr16",
          "Start": "2134202",
          "End": "2134742",
          "MinCoverage": "644",
          "MaxCoverage": "5925",
          "TotCoverage": "953844",
          "MeanCoverage": "1766.3777777777777"
        },
        {
          "Gene": "TSC2",
          "Chr": "chr16",
          "Start": "2134899",
          "End": "2135079",
          "MinCoverage": "1400",
          "MaxCoverage": "14874",
          "TotCoverage": "446664",
          "MeanCoverage": "2481.4666666666667"
        },
        {
          "Gene": "TSC2",
          "Chr": "chr16",
          "Start": "2135186",
          "End": "2135366",
          "MinCoverage": "889",
          "MaxCoverage": "5757",
          "TotCoverage": "306003",
          "MeanCoverage": "1700.0166666666667"
        },
        {
          "Gene": "TSC2",
          "Chr": "chr16",
          "Start": "2136166",
          "End": "2136406",
          "MinCoverage": "604",
          "MaxCoverage": "4356",
          "TotCoverage": "315746",
          "MeanCoverage": "1315.6083333333333"
        },
        {
          "Gene": "TSC2",
          "Chr": "chr16",
          "Start": "2136682",
          "End": "2136922",
          "MinCoverage": "176",
          "MaxCoverage": "6168",
          "TotCoverage": "433622",
          "MeanCoverage": "1806.7583333333334"
        },
        {
          "Gene": "TSC2",
          "Chr": "chr16",
          "Start": "2137812",
          "End": "2137992",
          "MinCoverage": "60",
          "MaxCoverage": "2670",
          "TotCoverage": "60015",
          "MeanCoverage": "333.4166666666667"
        },
        {
          "Gene": "TSC2",
          "Chr": "chr16",
          "Start": "2138004",
          "End": "2138184",
          "MinCoverage": "727",
          "MaxCoverage": "7047",
          "TotCoverage": "310431",
          "MeanCoverage": "1724.6166666666666"
        },
        {
          "Gene": "TSC2",
          "Chr": "chr16",
          "Start": "2138186",
          "End": "2138366",
          "MinCoverage": "1093",
          "MaxCoverage": "4197",
          "TotCoverage": "239728",
          "MeanCoverage": "1331.8222222222223"
        },
        {
          "Gene": "TSC2",
          "Chr": "chr16",
          "Start": "2138408",
          "End": "2138648",
          "MinCoverage": "613",
          "MaxCoverage": "7758",
          "TotCoverage": "548138",
          "MeanCoverage": "2283.9083333333333"
        },
        {
          "Gene": "CREBBP",
          "Chr": "chr16",
          "Start": "3790324",
          "End": "3790624",
          "MinCoverage": "154",
          "MaxCoverage": "6220",
          "TotCoverage": "307971",
          "MeanCoverage": "1026.57"
        },
        {
          "Gene": "CREBBP",
          "Chr": "chr16",
          "Start": "3794808",
          "End": "3795048",
          "MinCoverage": "327",
          "MaxCoverage": "4812",
          "TotCoverage": "145865",
          "MeanCoverage": "607.7708333333334"
        },
        {
          "Gene": "CREBBP",
          "Chr": "chr16",
          "Start": "3795196",
          "End": "3795436",
          "MinCoverage": "215",
          "MaxCoverage": "6061",
          "TotCoverage": "118517",
          "MeanCoverage": "493.8208333333333"
        },
        {
          "Gene": "CREBBP",
          "Chr": "chr16",
          "Start": "3799535",
          "End": "3799775",
          "MinCoverage": "219",
          "MaxCoverage": "2943",
          "TotCoverage": "84884",
          "MeanCoverage": "353.68333333333334"
        },
        {
          "Gene": "CREBBP",
          "Chr": "chr16",
          "Start": "3801646",
          "End": "3801886",
          "MinCoverage": "305",
          "MaxCoverage": "5568",
          "TotCoverage": "90623",
          "MeanCoverage": "377.59583333333336"
        },
        {
          "Gene": "CREBBP",
          "Chr": "chr16",
          "Start": "3807212",
          "End": "3807452",
          "MinCoverage": "141",
          "MaxCoverage": "4149",
          "TotCoverage": "73499",
          "MeanCoverage": "306.24583333333334"
        },
        {
          "Gene": "CREBBP",
          "Chr": "chr16",
          "Start": "3807749",
          "End": "3808109",
          "MinCoverage": "108",
          "MaxCoverage": "7878",
          "TotCoverage": "136944",
          "MeanCoverage": "380.4"
        },
        {
          "Gene": "CREBBP",
          "Chr": "chr16",
          "Start": "3808793",
          "End": "3809033",
          "MinCoverage": "43",
          "MaxCoverage": "1890",
          "TotCoverage": "35398",
          "MeanCoverage": "147.49166666666667"
        },
        {
          "Gene": "CREBBP",
          "Chr": "chr16",
          "Start": "3817665",
          "End": "3817965",
          "MinCoverage": "365",
          "MaxCoverage": "8980",
          "TotCoverage": "195557",
          "MeanCoverage": "651.8566666666667"
        },
        {
          "Gene": "CREBBP",
          "Chr": "chr16",
          "Start": "3819114",
          "End": "3819414",
          "MinCoverage": "321",
          "MaxCoverage": "2860",
          "TotCoverage": "191727",
          "MeanCoverage": "639.09"
        },
        {
          "Gene": "CREBBP",
          "Chr": "chr16",
          "Start": "3820508",
          "End": "3821048",
          "MinCoverage": "106",
          "MaxCoverage": "2464",
          "TotCoverage": "201507",
          "MeanCoverage": "373.1611111111111"
        },
        {
          "Gene": "CREBBP",
          "Chr": "chr16",
          "Start": "3823691",
          "End": "3823991",
          "MinCoverage": "319",
          "MaxCoverage": "4025",
          "TotCoverage": "213338",
          "MeanCoverage": "711.1266666666667"
        },
        {
          "Gene": "CREBBP",
          "Chr": "chr16",
          "Start": "3824511",
          "End": "3824751",
          "MinCoverage": "125",
          "MaxCoverage": "2412",
          "TotCoverage": "62665",
          "MeanCoverage": "261.1041666666667"
        },
        {
          "Gene": "CREBBP",
          "Chr": "chr16",
          "Start": "3827507",
          "End": "3827850",
          "MinCoverage": "266",
          "MaxCoverage": "6194",
          "TotCoverage": "212849",
          "MeanCoverage": "620.5510204081633"
        },
        {
          "Gene": "CREBBP",
          "Chr": "chr16",
          "Start": "3827947",
          "End": "3828247",
          "MinCoverage": "132",
          "MaxCoverage": "3280",
          "TotCoverage": "104310",
          "MeanCoverage": "347.7"
        },
        {
          "Gene": "CREBBP",
          "Chr": "chr16",
          "Start": "3828639",
          "End": "3828879",
          "MinCoverage": "97",
          "MaxCoverage": "6496",
          "TotCoverage": "104039",
          "MeanCoverage": "433.49583333333334"
        },
        {
          "Gene": "CREBBP",
          "Chr": "chr16",
          "Start": "3830655",
          "End": "3830955",
          "MinCoverage": "143",
          "MaxCoverage": "3488",
          "TotCoverage": "107357",
          "MeanCoverage": "357.8566666666667"
        },
        {
          "Gene": "CREBBP",
          "Chr": "chr16",
          "Start": "3831135",
          "End": "3831375",
          "MinCoverage": "79",
          "MaxCoverage": "1539",
          "TotCoverage": "40882",
          "MeanCoverage": "170.34166666666667"
        },
        {
          "Gene": "CREBBP",
          "Chr": "chr16",
          "Start": "3832625",
          "End": "3832985",
          "MinCoverage": "335",
          "MaxCoverage": "5642",
          "TotCoverage": "217459",
          "MeanCoverage": "604.0527777777778"
        },
        {
          "Gene": "CREBBP",
          "Chr": "chr16",
          "Start": "3841918",
          "End": "3842158",
          "MinCoverage": "275",
          "MaxCoverage": "5859",
          "TotCoverage": "154198",
          "MeanCoverage": "642.4916666666667"
        },
        {
          "Gene": "CREBBP",
          "Chr": "chr16",
          "Start": "3843326",
          "End": "3843686",
          "MinCoverage": "104",
          "MaxCoverage": "4077",
          "TotCoverage": "148028",
          "MeanCoverage": "411.18888888888887"
        },
        {
          "Gene": "CREBBP",
          "Chr": "chr16",
          "Start": "3860541",
          "End": "3860841",
          "MinCoverage": "100",
          "MaxCoverage": "4290",
          "TotCoverage": "83771",
          "MeanCoverage": "279.2366666666667"
        },
        {
          "Gene": "CREBBP",
          "Chr": "chr16",
          "Start": "3900233",
          "End": "3901073",
          "MinCoverage": "298",
          "MaxCoverage": "10600",
          "TotCoverage": "1074585",
          "MeanCoverage": "1279.267857142857"
        },
        {
          "Gene": "ERCC4",
          "Chr": "chr16",
          "Start": "14013941",
          "End": "14014301",
          "MinCoverage": "38",
          "MaxCoverage": "1260",
          "TotCoverage": "62525",
          "MeanCoverage": "173.68055555555554"
        },
        {
          "Gene": "ERCC4",
          "Chr": "chr16",
          "Start": "14020365",
          "End": "14020665",
          "MinCoverage": "361",
          "MaxCoverage": "9912",
          "TotCoverage": "298247",
          "MeanCoverage": "994.1566666666666"
        },
        {
          "Gene": "ERCC4",
          "Chr": "chr16",
          "Start": "14024506",
          "End": "14024806",
          "MinCoverage": "255",
          "MaxCoverage": "3871",
          "TotCoverage": "140468",
          "MeanCoverage": "468.2266666666667"
        },
        {
          "Gene": "ERCC4",
          "Chr": "chr16",
          "Start": "14025749",
          "End": "14026509",
          "MinCoverage": "346",
          "MaxCoverage": "13390",
          "TotCoverage": "683073",
          "MeanCoverage": "898.7802631578948"
        },
        {
          "Gene": "ERCC4",
          "Chr": "chr16",
          "Start": "14026871",
          "End": "14027241",
          "MinCoverage": "225",
          "MaxCoverage": "6540",
          "TotCoverage": "308866",
          "MeanCoverage": "834.772972972973"
        },
        {
          "Gene": "ERCC4",
          "Chr": "chr16",
          "Start": "14027983",
          "End": "14028223",
          "MinCoverage": "234",
          "MaxCoverage": "6642",
          "TotCoverage": "106134",
          "MeanCoverage": "442.225"
        },
        {
          "Gene": "ERCC4",
          "Chr": "chr16",
          "Start": "14028941",
          "End": "14029661",
          "MinCoverage": "303",
          "MaxCoverage": "7797",
          "TotCoverage": "455024",
          "MeanCoverage": "631.9777777777778"
        },
        {
          "Gene": "ERCC4",
          "Chr": "chr16",
          "Start": "14038515",
          "End": "14038755",
          "MinCoverage": "124",
          "MaxCoverage": "4980",
          "TotCoverage": "61696",
          "MeanCoverage": "257.06666666666666"
        },
        {
          "Gene": "NOMO1",
          "Chr": "chr16",
          "Start": "14982945",
          "End": "14983125",
          "MinCoverage": "161",
          "MaxCoverage": "2420",
          "TotCoverage": "70954",
          "MeanCoverage": "394.18888888888887"
        },
        {
          "Gene": "PALB2",
          "Chr": "chr16",
          "Start": "23614764",
          "End": "23615004",
          "MinCoverage": "287",
          "MaxCoverage": "6573",
          "TotCoverage": "136834",
          "MeanCoverage": "570.1416666666667"
        },
        {
          "Gene": "PALB2",
          "Chr": "chr16",
          "Start": "23619138",
          "End": "23619378",
          "MinCoverage": "237",
          "MaxCoverage": "4823",
          "TotCoverage": "112869",
          "MeanCoverage": "470.2875"
        },
        {
          "Gene": "PALB2",
          "Chr": "chr16",
          "Start": "23625278",
          "End": "23625458",
          "MinCoverage": "307",
          "MaxCoverage": "4550",
          "TotCoverage": "68878",
          "MeanCoverage": "382.65555555555557"
        },
        {
          "Gene": "PALB2",
          "Chr": "chr16",
          "Start": "23632667",
          "End": "23632907",
          "MinCoverage": "407",
          "MaxCoverage": "8980",
          "TotCoverage": "193969",
          "MeanCoverage": "808.2041666666667"
        },
        {
          "Gene": "PALB2",
          "Chr": "chr16",
          "Start": "23634250",
          "End": "23634490",
          "MinCoverage": "83",
          "MaxCoverage": "5995",
          "TotCoverage": "75237",
          "MeanCoverage": "313.4875"
        },
        {
          "Gene": "PALB2",
          "Chr": "chr16",
          "Start": "23635282",
          "End": "23635462",
          "MinCoverage": "468",
          "MaxCoverage": "9160",
          "TotCoverage": "200776",
          "MeanCoverage": "1115.4222222222222"
        },
        {
          "Gene": "PALB2",
          "Chr": "chr16",
          "Start": "23637517",
          "End": "23637757",
          "MinCoverage": "197",
          "MaxCoverage": "10374",
          "TotCoverage": "229411",
          "MeanCoverage": "955.8791666666667"
        },
        {
          "Gene": "PALB2",
          "Chr": "chr16",
          "Start": "23640470",
          "End": "23640650",
          "MinCoverage": "200",
          "MaxCoverage": "5687",
          "TotCoverage": "71958",
          "MeanCoverage": "399.76666666666665"
        },
        {
          "Gene": "PALB2",
          "Chr": "chr16",
          "Start": "23640925",
          "End": "23641825",
          "MinCoverage": "196",
          "MaxCoverage": "13243",
          "TotCoverage": "538618",
          "MeanCoverage": "598.4644444444444"
        },
        {
          "Gene": "PALB2",
          "Chr": "chr16",
          "Start": "23646168",
          "End": "23647668",
          "MinCoverage": "176",
          "MaxCoverage": "8370",
          "TotCoverage": "871646",
          "MeanCoverage": "581.0973333333334"
        },
        {
          "Gene": "PALB2",
          "Chr": "chr16",
          "Start": "23649101",
          "End": "23649510",
          "MinCoverage": "118",
          "MaxCoverage": "5698",
          "TotCoverage": "178384",
          "MeanCoverage": "436.1466992665037"
        },
        {
          "Gene": "PALB2",
          "Chr": "chr16",
          "Start": "23649805",
          "End": "23649985",
          "MinCoverage": "356",
          "MaxCoverage": "5984",
          "TotCoverage": "90157",
          "MeanCoverage": "500.8722222222222"
        },
        {
          "Gene": "PALB2",
          "Chr": "chr16",
          "Start": "23651509",
          "End": "23651689",
          "MinCoverage": "344",
          "MaxCoverage": "4192",
          "TotCoverage": "137418",
          "MeanCoverage": "763.4333333333333"
        },
        {
          "Gene": "DCTN5,PALB2",
          "Chr": "chr16",
          "Start": "23652364",
          "End": "23652970",
          "MinCoverage": "903",
          "MaxCoverage": "8232",
          "TotCoverage": "1130933",
          "MeanCoverage": "1866.2260726072607"
        },
        {
          "Gene": "CDH1",
          "Chr": "chr16",
          "Start": "68771130",
          "End": "68771430",
          "MinCoverage": "96",
          "MaxCoverage": "3276",
          "TotCoverage": "180177",
          "MeanCoverage": "600.59"
        },
        {
          "Gene": "CDH1",
          "Chr": "chr16",
          "Start": "68772136",
          "End": "68772376",
          "MinCoverage": "56",
          "MaxCoverage": "3300",
          "TotCoverage": "164021",
          "MeanCoverage": "683.4208333333333"
        },
        {
          "Gene": "CDH1",
          "Chr": "chr16",
          "Start": "68835504",
          "End": "68835864",
          "MinCoverage": "245",
          "MaxCoverage": "6096",
          "TotCoverage": "167825",
          "MeanCoverage": "466.18055555555554"
        },
        {
          "Gene": "CDH1",
          "Chr": "chr16",
          "Start": "68842248",
          "End": "68842823",
          "MinCoverage": "154",
          "MaxCoverage": "6720",
          "TotCoverage": "332854",
          "MeanCoverage": "578.8765217391305"
        },
        {
          "Gene": "CDH1",
          "Chr": "chr16",
          "Start": "68844021",
          "End": "68844321",
          "MinCoverage": "142",
          "MaxCoverage": "8253",
          "TotCoverage": "244652",
          "MeanCoverage": "815.5066666666667"
        },
        {
          "Gene": "CDH1",
          "Chr": "chr16",
          "Start": "68845524",
          "End": "68845824",
          "MinCoverage": "297",
          "MaxCoverage": "6629",
          "TotCoverage": "185219",
          "MeanCoverage": "617.3966666666666"
        },
        {
          "Gene": "CDH1",
          "Chr": "chr16",
          "Start": "68845981",
          "End": "68846221",
          "MinCoverage": "252",
          "MaxCoverage": "9911",
          "TotCoverage": "124890",
          "MeanCoverage": "520.375"
        },
        {
          "Gene": "CDH1",
          "Chr": "chr16",
          "Start": "68847156",
          "End": "68847456",
          "MinCoverage": "167",
          "MaxCoverage": "5940",
          "TotCoverage": "214724",
          "MeanCoverage": "715.7466666666667"
        },
        {
          "Gene": "CDH1",
          "Chr": "chr16",
          "Start": "68849359",
          "End": "68849719",
          "MinCoverage": "185",
          "MaxCoverage": "9776",
          "TotCoverage": "179472",
          "MeanCoverage": "498.53333333333336"
        },
        {
          "Gene": "CDH1",
          "Chr": "chr16",
          "Start": "68853105",
          "End": "68853405",
          "MinCoverage": "213",
          "MaxCoverage": "3984",
          "TotCoverage": "112558",
          "MeanCoverage": "375.1933333333333"
        },
        {
          "Gene": "CDH1",
          "Chr": "chr16",
          "Start": "68855835",
          "End": "68856195",
          "MinCoverage": "251",
          "MaxCoverage": "7776",
          "TotCoverage": "237310",
          "MeanCoverage": "659.1944444444445"
        },
        {
          "Gene": "CDH1",
          "Chr": "chr16",
          "Start": "68857235",
          "End": "68857595",
          "MinCoverage": "107",
          "MaxCoverage": "4994",
          "TotCoverage": "164749",
          "MeanCoverage": "457.6361111111111"
        },
        {
          "Gene": "CDH1",
          "Chr": "chr16",
          "Start": "68862021",
          "End": "68862261",
          "MinCoverage": "157",
          "MaxCoverage": "4080",
          "TotCoverage": "95349",
          "MeanCoverage": "397.2875"
        },
        {
          "Gene": "CDH1",
          "Chr": "chr16",
          "Start": "68863478",
          "End": "68863778",
          "MinCoverage": "351",
          "MaxCoverage": "8920",
          "TotCoverage": "381022",
          "MeanCoverage": "1270.0733333333333"
        },
        {
          "Gene": "CDH1",
          "Chr": "chr16",
          "Start": "68868064",
          "End": "68868244",
          "MinCoverage": "247",
          "MaxCoverage": "8008",
          "TotCoverage": "131185",
          "MeanCoverage": "728.8055555555555"
        },
        {
          "Gene": "HYDIN",
          "Chr": "chr16",
          "Start": "70942479",
          "End": "70942839",
          "MinCoverage": "371",
          "MaxCoverage": "8292",
          "TotCoverage": "361964",
          "MeanCoverage": "1005.4555555555555"
        },
        {
          "Gene": "HYDIN",
          "Chr": "chr16",
          "Start": "70954369",
          "End": "70955208",
          "MinCoverage": "360",
          "MaxCoverage": "8674",
          "TotCoverage": "1346829",
          "MeanCoverage": "1605.2789034564958"
        },
        {
          "Gene": "HYDIN",
          "Chr": "chr16",
          "Start": "71094332",
          "End": "71094632",
          "MinCoverage": "459",
          "MaxCoverage": "4550",
          "TotCoverage": "218046",
          "MeanCoverage": "726.82"
        },
        {
          "Gene": "FANCA,ZNF276",
          "Chr": "chr16",
          "Start": "89803838",
          "End": "89806806",
          "MinCoverage": "389",
          "MaxCoverage": "13482",
          "TotCoverage": "4869160",
          "MeanCoverage": "1640.5525606469002"
        },
        {
          "Gene": "FANCA,ZNF276",
          "Chr": "chr16",
          "Start": "89807009",
          "End": "89807403",
          "MinCoverage": "218",
          "MaxCoverage": "9240",
          "TotCoverage": "376984",
          "MeanCoverage": "956.8121827411168"
        },
        {
          "Gene": "FANCA",
          "Chr": "chr16",
          "Start": "89809156",
          "End": "89809396",
          "MinCoverage": "284",
          "MaxCoverage": "9855",
          "TotCoverage": "173984",
          "MeanCoverage": "724.9333333333333"
        },
        {
          "Gene": "FANCA",
          "Chr": "chr16",
          "Start": "89811302",
          "End": "89811542",
          "MinCoverage": "642",
          "MaxCoverage": "8636",
          "TotCoverage": "489592",
          "MeanCoverage": "2039.9666666666667"
        },
        {
          "Gene": "FANCA",
          "Chr": "chr16",
          "Start": "89812923",
          "End": "89813163",
          "MinCoverage": "588",
          "MaxCoverage": "6780",
          "TotCoverage": "243517",
          "MeanCoverage": "1014.6541666666667"
        },
        {
          "Gene": "FANCA",
          "Chr": "chr16",
          "Start": "89813178",
          "End": "89813358",
          "MinCoverage": "304",
          "MaxCoverage": "2646",
          "TotCoverage": "81854",
          "MeanCoverage": "454.74444444444447"
        },
        {
          "Gene": "FANCA",
          "Chr": "chr16",
          "Start": "89815000",
          "End": "89815240",
          "MinCoverage": "214",
          "MaxCoverage": "4074",
          "TotCoverage": "208407",
          "MeanCoverage": "868.3625"
        },
        {
          "Gene": "FANCA",
          "Chr": "chr16",
          "Start": "89816103",
          "End": "89816343",
          "MinCoverage": "298",
          "MaxCoverage": "5565",
          "TotCoverage": "145051",
          "MeanCoverage": "604.3791666666667"
        },
        {
          "Gene": "FANCA",
          "Chr": "chr16",
          "Start": "89818497",
          "End": "89818677",
          "MinCoverage": "396",
          "MaxCoverage": "6480",
          "TotCoverage": "111342",
          "MeanCoverage": "618.5666666666667"
        },
        {
          "Gene": "FANCA",
          "Chr": "chr16",
          "Start": "89824950",
          "End": "89825190",
          "MinCoverage": "329",
          "MaxCoverage": "5196",
          "TotCoverage": "112271",
          "MeanCoverage": "467.79583333333335"
        },
        {
          "Gene": "FANCA",
          "Chr": "chr16",
          "Start": "89828313",
          "End": "89828493",
          "MinCoverage": "241",
          "MaxCoverage": "4310",
          "TotCoverage": "80384",
          "MeanCoverage": "446.5777777777778"
        },
        {
          "Gene": "FANCA",
          "Chr": "chr16",
          "Start": "89831194",
          "End": "89831494",
          "MinCoverage": "262",
          "MaxCoverage": "3890",
          "TotCoverage": "186273",
          "MeanCoverage": "620.91"
        },
        {
          "Gene": "FANCA",
          "Chr": "chr16",
          "Start": "89833506",
          "End": "89833686",
          "MinCoverage": "249",
          "MaxCoverage": "4608",
          "TotCoverage": "93840",
          "MeanCoverage": "521.3333333333334"
        },
        {
          "Gene": "FANCA",
          "Chr": "chr16",
          "Start": "89836216",
          "End": "89836456",
          "MinCoverage": "411",
          "MaxCoverage": "7836",
          "TotCoverage": "398392",
          "MeanCoverage": "1659.9666666666667"
        },
        {
          "Gene": "FANCA",
          "Chr": "chr16",
          "Start": "89836530",
          "End": "89836710",
          "MinCoverage": "356",
          "MaxCoverage": "4252",
          "TotCoverage": "157703",
          "MeanCoverage": "876.1277777777777"
        },
        {
          "Gene": "FANCA",
          "Chr": "chr16",
          "Start": "89836916",
          "End": "89837096",
          "MinCoverage": "330",
          "MaxCoverage": "3369",
          "TotCoverage": "144752",
          "MeanCoverage": "804.1777777777778"
        },
        {
          "Gene": "FANCA",
          "Chr": "chr16",
          "Start": "89838033",
          "End": "89838273",
          "MinCoverage": "349",
          "MaxCoverage": "4080",
          "TotCoverage": "117515",
          "MeanCoverage": "489.6458333333333"
        },
        {
          "Gene": "FANCA",
          "Chr": "chr16",
          "Start": "89839615",
          "End": "89839855",
          "MinCoverage": "240",
          "MaxCoverage": "2756",
          "TotCoverage": "80237",
          "MeanCoverage": "334.3208333333333"
        },
        {
          "Gene": "FANCA",
          "Chr": "chr16",
          "Start": "89842096",
          "End": "89842276",
          "MinCoverage": "266",
          "MaxCoverage": "3636",
          "TotCoverage": "73356",
          "MeanCoverage": "407.53333333333336"
        },
        {
          "Gene": "FANCA",
          "Chr": "chr16",
          "Start": "89845143",
          "End": "89845470",
          "MinCoverage": "295",
          "MaxCoverage": "5008",
          "TotCoverage": "145455",
          "MeanCoverage": "444.8165137614679"
        },
        {
          "Gene": "FANCA",
          "Chr": "chr16",
          "Start": "89846230",
          "End": "89846410",
          "MinCoverage": "275",
          "MaxCoverage": "3244",
          "TotCoverage": "120938",
          "MeanCoverage": "671.8777777777777"
        },
        {
          "Gene": "FANCA",
          "Chr": "chr16",
          "Start": "89849206",
          "End": "89849552",
          "MinCoverage": "104",
          "MaxCoverage": "3724",
          "TotCoverage": "126667",
          "MeanCoverage": "366.0895953757225"
        },
        {
          "Gene": "FANCA",
          "Chr": "chr16",
          "Start": "89851196",
          "End": "89851436",
          "MinCoverage": "370",
          "MaxCoverage": "4372",
          "TotCoverage": "182803",
          "MeanCoverage": "761.6791666666667"
        },
        {
          "Gene": "FANCA",
          "Chr": "chr16",
          "Start": "89857757",
          "End": "89857997",
          "MinCoverage": "558",
          "MaxCoverage": "5016",
          "TotCoverage": "241464",
          "MeanCoverage": "1006.1"
        },
        {
          "Gene": "FANCA",
          "Chr": "chr16",
          "Start": "89858285",
          "End": "89858525",
          "MinCoverage": "315",
          "MaxCoverage": "7524",
          "TotCoverage": "314011",
          "MeanCoverage": "1308.3791666666666"
        },
        {
          "Gene": "FANCA",
          "Chr": "chr16",
          "Start": "89858826",
          "End": "89859006",
          "MinCoverage": "145",
          "MaxCoverage": "2088",
          "TotCoverage": "61790",
          "MeanCoverage": "343.27777777777777"
        },
        {
          "Gene": "FANCA",
          "Chr": "chr16",
          "Start": "89862249",
          "End": "89862489",
          "MinCoverage": "233",
          "MaxCoverage": "3060",
          "TotCoverage": "88821",
          "MeanCoverage": "370.0875"
        },
        {
          "Gene": "FANCA",
          "Chr": "chr16",
          "Start": "89865386",
          "End": "89865697",
          "MinCoverage": "347",
          "MaxCoverage": "7245",
          "TotCoverage": "225532",
          "MeanCoverage": "725.1832797427653"
        },
        {
          "Gene": "FANCA",
          "Chr": "chr16",
          "Start": "89865939",
          "End": "89866119",
          "MinCoverage": "220",
          "MaxCoverage": "4890",
          "TotCoverage": "102352",
          "MeanCoverage": "568.6222222222223"
        },
        {
          "Gene": "FANCA",
          "Chr": "chr16",
          "Start": "89869617",
          "End": "89869797",
          "MinCoverage": "248",
          "MaxCoverage": "4735",
          "TotCoverage": "122212",
          "MeanCoverage": "678.9555555555555"
        },
        {
          "Gene": "FANCA",
          "Chr": "chr16",
          "Start": "89871623",
          "End": "89871863",
          "MinCoverage": "160",
          "MaxCoverage": "6600",
          "TotCoverage": "125996",
          "MeanCoverage": "524.9833333333333"
        },
        {
          "Gene": "FANCA",
          "Chr": "chr16",
          "Start": "89874617",
          "End": "89874797",
          "MinCoverage": "96",
          "MaxCoverage": "3731",
          "TotCoverage": "70684",
          "MeanCoverage": "392.68888888888887"
        },
        {
          "Gene": "FANCA",
          "Chr": "chr16",
          "Start": "89877072",
          "End": "89877252",
          "MinCoverage": "192",
          "MaxCoverage": "4176",
          "TotCoverage": "58037",
          "MeanCoverage": "322.4277777777778"
        },
        {
          "Gene": "FANCA",
          "Chr": "chr16",
          "Start": "89877287",
          "End": "89877527",
          "MinCoverage": "359",
          "MaxCoverage": "8568",
          "TotCoverage": "199326",
          "MeanCoverage": "830.525"
        },
        {
          "Gene": "FANCA",
          "Chr": "chr16",
          "Start": "89880884",
          "End": "89881064",
          "MinCoverage": "247",
          "MaxCoverage": "5761",
          "TotCoverage": "109014",
          "MeanCoverage": "605.6333333333333"
        },
        {
          "Gene": "FANCA",
          "Chr": "chr16",
          "Start": "89882219",
          "End": "89882459",
          "MinCoverage": "648",
          "MaxCoverage": "10588",
          "TotCoverage": "474548",
          "MeanCoverage": "1977.2833333333333"
        },
        {
          "Gene": "FANCA",
          "Chr": "chr16",
          "Start": "89882465",
          "End": "89882705",
          "MinCoverage": "18",
          "MaxCoverage": "6768",
          "TotCoverage": "189515",
          "MeanCoverage": "789.6458333333334"
        },
        {
          "Gene": "FANCA",
          "Chr": "chr16",
          "Start": "89882818",
          "End": "89883058",
          "MinCoverage": "35",
          "MaxCoverage": "1548",
          "TotCoverage": "73014",
          "MeanCoverage": "304.225"
        },
        {
          "Gene": "MC1R",
          "Chr": "chr16",
          "Start": "89985633",
          "End": "89986653",
          "MinCoverage": "886",
          "MaxCoverage": "11523",
          "TotCoverage": "2904384",
          "MeanCoverage": "2847.435294117647"
        },
        {
          "Gene": "MC1R",
          "Chr": "chr16",
          "Start": "89986976",
          "End": "89987216",
          "MinCoverage": "286",
          "MaxCoverage": "3736",
          "TotCoverage": "188526",
          "MeanCoverage": "785.525"
        },
        {
          "Gene": "TP53",
          "Chr": "chr17",
          "Start": "7569482",
          "End": "7569662",
          "MinCoverage": "332",
          "MaxCoverage": "8040",
          "TotCoverage": "119554",
          "MeanCoverage": "664.1888888888889"
        },
        {
          "Gene": "TP53",
          "Chr": "chr17",
          "Start": "7573899",
          "End": "7574139",
          "MinCoverage": "639",
          "MaxCoverage": "18669",
          "TotCoverage": "415518",
          "MeanCoverage": "1731.325"
        },
        {
          "Gene": "TP53",
          "Chr": "chr17",
          "Start": "7576919",
          "End": "7577232",
          "MinCoverage": "580",
          "MaxCoverage": "10392",
          "TotCoverage": "391695",
          "MeanCoverage": "1251.4217252396165"
        },
        {
          "Gene": "TP53",
          "Chr": "chr17",
          "Start": "7577417",
          "End": "7577688",
          "MinCoverage": "567",
          "MaxCoverage": "8382",
          "TotCoverage": "305223",
          "MeanCoverage": "1126.2841328413283"
        },
        {
          "Gene": "TP53",
          "Chr": "chr17",
          "Start": "7578091",
          "End": "7578622",
          "MinCoverage": "605",
          "MaxCoverage": "16224",
          "TotCoverage": "1157183",
          "MeanCoverage": "2179.252354048964"
        },
        {
          "Gene": "TP53",
          "Chr": "chr17",
          "Start": "7579238",
          "End": "7579550",
          "MinCoverage": "135",
          "MaxCoverage": "7184",
          "TotCoverage": "394641",
          "MeanCoverage": "1264.875"
        },
        {
          "Gene": "TP53",
          "Chr": "chr17",
          "Start": "7579758",
          "End": "7580022",
          "MinCoverage": "240",
          "MaxCoverage": "7880",
          "TotCoverage": "256074",
          "MeanCoverage": "969.9772727272727"
        },
        {
          "Gene": "MAP2K4",
          "Chr": "chr17",
          "Start": "11924001",
          "End": "11924499",
          "MinCoverage": "33",
          "MaxCoverage": "4404",
          "TotCoverage": "273754",
          "MeanCoverage": "549.7068273092369"
        },
        {
          "Gene": "MAP2K4",
          "Chr": "chr17",
          "Start": "11958136",
          "End": "11958376",
          "MinCoverage": "295",
          "MaxCoverage": "9786",
          "TotCoverage": "169913",
          "MeanCoverage": "707.9708333333333"
        },
        {
          "Gene": "MAP2K4",
          "Chr": "chr17",
          "Start": "11984609",
          "End": "11984909",
          "MinCoverage": "147",
          "MaxCoverage": "4632",
          "TotCoverage": "84394",
          "MeanCoverage": "281.31333333333333"
        },
        {
          "Gene": "MAP2K4",
          "Chr": "chr17",
          "Start": "11998831",
          "End": "11999071",
          "MinCoverage": "274",
          "MaxCoverage": "15190",
          "TotCoverage": "160381",
          "MeanCoverage": "668.2541666666667"
        },
        {
          "Gene": "MAP2K4",
          "Chr": "chr17",
          "Start": "12011046",
          "End": "12011286",
          "MinCoverage": "489",
          "MaxCoverage": "6872",
          "TotCoverage": "198061",
          "MeanCoverage": "825.2541666666667"
        },
        {
          "Gene": "MAP2K4",
          "Chr": "chr17",
          "Start": "12013597",
          "End": "12013837",
          "MinCoverage": "400",
          "MaxCoverage": "8620",
          "TotCoverage": "172207",
          "MeanCoverage": "717.5291666666667"
        },
        {
          "Gene": "MAP2K4",
          "Chr": "chr17",
          "Start": "12016493",
          "End": "12016733",
          "MinCoverage": "66",
          "MaxCoverage": "4979",
          "TotCoverage": "59053",
          "MeanCoverage": "246.05416666666667"
        },
        {
          "Gene": "MAP2K4",
          "Chr": "chr17",
          "Start": "12028529",
          "End": "12028769",
          "MinCoverage": "243",
          "MaxCoverage": "8954",
          "TotCoverage": "152905",
          "MeanCoverage": "637.1041666666666"
        },
        {
          "Gene": "MAP2K4",
          "Chr": "chr17",
          "Start": "12032379",
          "End": "12032679",
          "MinCoverage": "194",
          "MaxCoverage": "4734",
          "TotCoverage": "128968",
          "MeanCoverage": "429.8933333333333"
        },
        {
          "Gene": "MAP2K4",
          "Chr": "chr17",
          "Start": "12043058",
          "End": "12043298",
          "MinCoverage": "200",
          "MaxCoverage": "2933",
          "TotCoverage": "85859",
          "MeanCoverage": "357.74583333333334"
        },
        {
          "Gene": "NCOR1",
          "Chr": "chr17",
          "Start": "15938018",
          "End": "15938318",
          "MinCoverage": "181",
          "MaxCoverage": "11004",
          "TotCoverage": "234378",
          "MeanCoverage": "781.26"
        },
        {
          "Gene": "NCOR1",
          "Chr": "chr17",
          "Start": "15942677",
          "End": "15943037",
          "MinCoverage": "361",
          "MaxCoverage": "9135",
          "TotCoverage": "300138",
          "MeanCoverage": "833.7166666666667"
        },
        {
          "Gene": "NCOR1",
          "Chr": "chr17",
          "Start": "15943681",
          "End": "15943921",
          "MinCoverage": "130",
          "MaxCoverage": "6232",
          "TotCoverage": "120503",
          "MeanCoverage": "502.09583333333336"
        },
        {
          "Gene": "NCOR1",
          "Chr": "chr17",
          "Start": "15952080",
          "End": "15952380",
          "MinCoverage": "671",
          "MaxCoverage": "9468",
          "TotCoverage": "379608",
          "MeanCoverage": "1265.36"
        },
        {
          "Gene": "NCOR1",
          "Chr": "chr17",
          "Start": "15960759",
          "End": "15961119",
          "MinCoverage": "227",
          "MaxCoverage": "11392",
          "TotCoverage": "276980",
          "MeanCoverage": "769.3888888888889"
        },
        {
          "Gene": "NCOR1",
          "Chr": "chr17",
          "Start": "15961164",
          "End": "15961704",
          "MinCoverage": "236",
          "MaxCoverage": "5880",
          "TotCoverage": "294935",
          "MeanCoverage": "546.175925925926"
        },
        {
          "Gene": "NCOR1",
          "Chr": "chr17",
          "Start": "15961728",
          "End": "15961968",
          "MinCoverage": "115",
          "MaxCoverage": "5940",
          "TotCoverage": "91258",
          "MeanCoverage": "380.2416666666667"
        },
        {
          "Gene": "NCOR1",
          "Chr": "chr17",
          "Start": "15964661",
          "End": "15965261",
          "MinCoverage": "260",
          "MaxCoverage": "9366",
          "TotCoverage": "608555",
          "MeanCoverage": "1014.2583333333333"
        },
        {
          "Gene": "NCOR1",
          "Chr": "chr17",
          "Start": "15965351",
          "End": "15965651",
          "MinCoverage": "364",
          "MaxCoverage": "10912",
          "TotCoverage": "306238",
          "MeanCoverage": "1020.7933333333333"
        },
        {
          "Gene": "NCOR1",
          "Chr": "chr17",
          "Start": "15967261",
          "End": "15967627",
          "MinCoverage": "726",
          "MaxCoverage": "13540",
          "TotCoverage": "729592",
          "MeanCoverage": "1993.4207650273224"
        },
        {
          "Gene": "NCOR1",
          "Chr": "chr17",
          "Start": "15968108",
          "End": "15968408",
          "MinCoverage": "200",
          "MaxCoverage": "14602",
          "TotCoverage": "200486",
          "MeanCoverage": "668.2866666666666"
        },
        {
          "Gene": "NCOR1",
          "Chr": "chr17",
          "Start": "15968735",
          "End": "15969095",
          "MinCoverage": "160",
          "MaxCoverage": "8912",
          "TotCoverage": "244687",
          "MeanCoverage": "679.6861111111111"
        },
        {
          "Gene": "NCOR1",
          "Chr": "chr17",
          "Start": "15973423",
          "End": "15973903",
          "MinCoverage": "392",
          "MaxCoverage": "9009",
          "TotCoverage": "440717",
          "MeanCoverage": "918.1604166666667"
        },
        {
          "Gene": "NCOR1",
          "Chr": "chr17",
          "Start": "15974640",
          "End": "15975104",
          "MinCoverage": "313",
          "MaxCoverage": "11193",
          "TotCoverage": "438089",
          "MeanCoverage": "944.1573275862069"
        },
        {
          "Gene": "NCOR1",
          "Chr": "chr17",
          "Start": "15975380",
          "End": "15975620",
          "MinCoverage": "682",
          "MaxCoverage": "8825",
          "TotCoverage": "314340",
          "MeanCoverage": "1309.75"
        },
        {
          "Gene": "NCOR1",
          "Chr": "chr17",
          "Start": "15976662",
          "End": "15976962",
          "MinCoverage": "401",
          "MaxCoverage": "15696",
          "TotCoverage": "302124",
          "MeanCoverage": "1007.08"
        },
        {
          "Gene": "NCOR1",
          "Chr": "chr17",
          "Start": "15978781",
          "End": "15979081",
          "MinCoverage": "306",
          "MaxCoverage": "15232",
          "TotCoverage": "242840",
          "MeanCoverage": "809.4666666666667"
        },
        {
          "Gene": "NCOR1",
          "Chr": "chr17",
          "Start": "15983207",
          "End": "15983447",
          "MinCoverage": "391",
          "MaxCoverage": "8616",
          "TotCoverage": "131564",
          "MeanCoverage": "548.1833333333333"
        },
        {
          "Gene": "NCOR1",
          "Chr": "chr17",
          "Start": "15983480",
          "End": "15984095",
          "MinCoverage": "82",
          "MaxCoverage": "10278",
          "TotCoverage": "574660",
          "MeanCoverage": "934.4065040650406"
        },
        {
          "Gene": "NCOR1",
          "Chr": "chr17",
          "Start": "15989525",
          "End": "15989825",
          "MinCoverage": "350",
          "MaxCoverage": "13776",
          "TotCoverage": "227557",
          "MeanCoverage": "758.5233333333333"
        },
        {
          "Gene": "NCOR1",
          "Chr": "chr17",
          "Start": "15994827",
          "End": "15995427",
          "MinCoverage": "278",
          "MaxCoverage": "16489",
          "TotCoverage": "577362",
          "MeanCoverage": "962.27"
        },
        {
          "Gene": "NCOR1",
          "Chr": "chr17",
          "Start": "16001625",
          "End": "16001865",
          "MinCoverage": "181",
          "MaxCoverage": "5922",
          "TotCoverage": "142956",
          "MeanCoverage": "595.65"
        },
        {
          "Gene": "NCOR1",
          "Chr": "chr17",
          "Start": "16004511",
          "End": "16005171",
          "MinCoverage": "117",
          "MaxCoverage": "16527",
          "TotCoverage": "525359",
          "MeanCoverage": "795.9984848484848"
        },
        {
          "Gene": "NCOR1",
          "Chr": "chr17",
          "Start": "16012042",
          "End": "16012282",
          "MinCoverage": "50",
          "MaxCoverage": "4675",
          "TotCoverage": "78422",
          "MeanCoverage": "326.7583333333333"
        },
        {
          "Gene": "NCOR1",
          "Chr": "chr17",
          "Start": "16021151",
          "End": "16021391",
          "MinCoverage": "186",
          "MaxCoverage": "8970",
          "TotCoverage": "245706",
          "MeanCoverage": "1023.775"
        },
        {
          "Gene": "NCOR1",
          "Chr": "chr17",
          "Start": "16022647",
          "End": "16022887",
          "MinCoverage": "343",
          "MaxCoverage": "6535",
          "TotCoverage": "200475",
          "MeanCoverage": "835.3125"
        },
        {
          "Gene": "NCOR1",
          "Chr": "chr17",
          "Start": "16024294",
          "End": "16024654",
          "MinCoverage": "728",
          "MaxCoverage": "12860",
          "TotCoverage": "815176",
          "MeanCoverage": "2264.3777777777777"
        },
        {
          "Gene": "NCOR1",
          "Chr": "chr17",
          "Start": "16029293",
          "End": "16029662",
          "MinCoverage": "421",
          "MaxCoverage": "13884",
          "TotCoverage": "294930",
          "MeanCoverage": "799.2682926829268"
        },
        {
          "Gene": "NCOR1",
          "Chr": "chr17",
          "Start": "16040543",
          "End": "16040783",
          "MinCoverage": "127",
          "MaxCoverage": "13920",
          "TotCoverage": "290014",
          "MeanCoverage": "1208.3916666666667"
        },
        {
          "Gene": "NCOR1",
          "Chr": "chr17",
          "Start": "16042138",
          "End": "16042555",
          "MinCoverage": "260",
          "MaxCoverage": "9640",
          "TotCoverage": "337047",
          "MeanCoverage": "808.2661870503597"
        },
        {
          "Gene": "NCOR1",
          "Chr": "chr17",
          "Start": "16046844",
          "End": "16047084",
          "MinCoverage": "180",
          "MaxCoverage": "6776",
          "TotCoverage": "147844",
          "MeanCoverage": "616.0166666666667"
        },
        {
          "Gene": "NCOR1",
          "Chr": "chr17",
          "Start": "16049625",
          "End": "16049925",
          "MinCoverage": "143",
          "MaxCoverage": "9394",
          "TotCoverage": "251641",
          "MeanCoverage": "838.8033333333333"
        },
        {
          "Gene": "NCOR1",
          "Chr": "chr17",
          "Start": "16056560",
          "End": "16056800",
          "MinCoverage": "160",
          "MaxCoverage": "12156",
          "TotCoverage": "149527",
          "MeanCoverage": "623.0291666666667"
        },
        {
          "Gene": "NCOR1",
          "Chr": "chr17",
          "Start": "16062010",
          "End": "16062250",
          "MinCoverage": "280",
          "MaxCoverage": "8239",
          "TotCoverage": "123568",
          "MeanCoverage": "514.8666666666667"
        },
        {
          "Gene": "NCOR1",
          "Chr": "chr17",
          "Start": "16068068",
          "End": "16068542",
          "MinCoverage": "444",
          "MaxCoverage": "8355",
          "TotCoverage": "582867",
          "MeanCoverage": "1229.6772151898733"
        },
        {
          "Gene": "NCOR1",
          "Chr": "chr17",
          "Start": "16075045",
          "End": "16075405",
          "MinCoverage": "314",
          "MaxCoverage": "6139",
          "TotCoverage": "180380",
          "MeanCoverage": "501.05555555555554"
        },
        {
          "Gene": "NCOR1",
          "Chr": "chr17",
          "Start": "16089814",
          "End": "16090054",
          "MinCoverage": "336",
          "MaxCoverage": "8253",
          "TotCoverage": "165264",
          "MeanCoverage": "688.6"
        },
        {
          "Gene": "NCOR1",
          "Chr": "chr17",
          "Start": "16097714",
          "End": "16098014",
          "MinCoverage": "194",
          "MaxCoverage": "5550",
          "TotCoverage": "213349",
          "MeanCoverage": "711.1633333333333"
        },
        {
          "Gene": "NF1",
          "Chr": "chr17",
          "Start": "29421855",
          "End": "29422477",
          "MinCoverage": "122",
          "MaxCoverage": "6216",
          "TotCoverage": "638543",
          "MeanCoverage": "1026.596463022508"
        },
        {
          "Gene": "NF1",
          "Chr": "chr17",
          "Start": "29464004",
          "End": "29464124",
          "MinCoverage": "255",
          "MaxCoverage": "3393",
          "TotCoverage": "44967",
          "MeanCoverage": "374.725"
        },
        {
          "Gene": "NF1",
          "Chr": "chr17",
          "Start": "29464153",
          "End": "29464273",
          "MinCoverage": "200",
          "MaxCoverage": "3614",
          "TotCoverage": "39888",
          "MeanCoverage": "332.4"
        },
        {
          "Gene": "NF1",
          "Chr": "chr17",
          "Start": "29464304",
          "End": "29464424",
          "MinCoverage": "370",
          "MaxCoverage": "4554",
          "TotCoverage": "49907",
          "MeanCoverage": "415.89166666666665"
        },
        {
          "Gene": "NF1",
          "Chr": "chr17",
          "Start": "29464440",
          "End": "29464740",
          "MinCoverage": "442",
          "MaxCoverage": "6705",
          "TotCoverage": "197889",
          "MeanCoverage": "659.63"
        },
        {
          "Gene": "NF1",
          "Chr": "chr17",
          "Start": "29465014",
          "End": "29465134",
          "MinCoverage": "902",
          "MaxCoverage": "11746",
          "TotCoverage": "104678",
          "MeanCoverage": "872.3166666666667"
        },
        {
          "Gene": "NF1",
          "Chr": "chr17",
          "Start": "29482922",
          "End": "29483222",
          "MinCoverage": "806",
          "MaxCoverage": "11860",
          "TotCoverage": "403592",
          "MeanCoverage": "1345.3066666666666"
        },
        {
          "Gene": "NF1",
          "Chr": "chr17",
          "Start": "29485949",
          "End": "29486189",
          "MinCoverage": "334",
          "MaxCoverage": "7624",
          "TotCoverage": "216299",
          "MeanCoverage": "901.2458333333333"
        },
        {
          "Gene": "NF1",
          "Chr": "chr17",
          "Start": "29490150",
          "End": "29490450",
          "MinCoverage": "280",
          "MaxCoverage": "5336",
          "TotCoverage": "158922",
          "MeanCoverage": "529.74"
        },
        {
          "Gene": "NF1",
          "Chr": "chr17",
          "Start": "29496841",
          "End": "29497084",
          "MinCoverage": "512",
          "MaxCoverage": "10737",
          "TotCoverage": "225754",
          "MeanCoverage": "929.0288065843621"
        },
        {
          "Gene": "NF1",
          "Chr": "chr17",
          "Start": "29508353",
          "End": "29508593",
          "MinCoverage": "393",
          "MaxCoverage": "11166",
          "TotCoverage": "289034",
          "MeanCoverage": "1204.3083333333334"
        },
        {
          "Gene": "NF1",
          "Chr": "chr17",
          "Start": "29508645",
          "End": "29508885",
          "MinCoverage": "361",
          "MaxCoverage": "5012",
          "TotCoverage": "134219",
          "MeanCoverage": "559.2458333333333"
        },
        {
          "Gene": "NF1",
          "Chr": "chr17",
          "Start": "29509454",
          "End": "29510060",
          "MinCoverage": "338",
          "MaxCoverage": "9394",
          "TotCoverage": "488521",
          "MeanCoverage": "806.1402640264026"
        },
        {
          "Gene": "NF1",
          "Chr": "chr17",
          "Start": "29527376",
          "End": "29527676",
          "MinCoverage": "256",
          "MaxCoverage": "8864",
          "TotCoverage": "220288",
          "MeanCoverage": "734.2933333333333"
        },
        {
          "Gene": "NF1",
          "Chr": "chr17",
          "Start": "29527995",
          "End": "29528235",
          "MinCoverage": "157",
          "MaxCoverage": "16485",
          "TotCoverage": "279345",
          "MeanCoverage": "1163.9375"
        },
        {
          "Gene": "NF1",
          "Chr": "chr17",
          "Start": "29528345",
          "End": "29528585",
          "MinCoverage": "312",
          "MaxCoverage": "5760",
          "TotCoverage": "177205",
          "MeanCoverage": "738.3541666666666"
        },
        {
          "Gene": "NF1",
          "Chr": "chr17",
          "Start": "29533203",
          "End": "29533443",
          "MinCoverage": "321",
          "MaxCoverage": "10131",
          "TotCoverage": "226104",
          "MeanCoverage": "942.1"
        },
        {
          "Gene": "NF1",
          "Chr": "chr17",
          "Start": "29541415",
          "End": "29541655",
          "MinCoverage": "342",
          "MaxCoverage": "10098",
          "TotCoverage": "175164",
          "MeanCoverage": "729.85"
        },
        {
          "Gene": "NF1",
          "Chr": "chr17",
          "Start": "29545971",
          "End": "29546499",
          "MinCoverage": "139",
          "MaxCoverage": "11376",
          "TotCoverage": "367068",
          "MeanCoverage": "695.2045454545455"
        },
        {
          "Gene": "NF1",
          "Chr": "chr17",
          "Start": "29548736",
          "End": "29549867",
          "MinCoverage": "222",
          "MaxCoverage": "11772",
          "TotCoverage": "918490",
          "MeanCoverage": "812.10433244916"
        },
        {
          "Gene": "NF1",
          "Chr": "chr17",
          "Start": "29550403",
          "End": "29550643",
          "MinCoverage": "563",
          "MaxCoverage": "9684",
          "TotCoverage": "235999",
          "MeanCoverage": "983.3291666666667"
        },
        {
          "Gene": "NF1",
          "Chr": "chr17",
          "Start": "29552034",
          "End": "29552334",
          "MinCoverage": "417",
          "MaxCoverage": "9168",
          "TotCoverage": "282440",
          "MeanCoverage": "941.4666666666667"
        },
        {
          "Gene": "NF1",
          "Chr": "chr17",
          "Start": "29553397",
          "End": "29553757",
          "MinCoverage": "420",
          "MaxCoverage": "10416",
          "TotCoverage": "394355",
          "MeanCoverage": "1095.4305555555557"
        },
        {
          "Gene": "NF1",
          "Chr": "chr17",
          "Start": "29554152",
          "End": "29554392",
          "MinCoverage": "691",
          "MaxCoverage": "7735",
          "TotCoverage": "221562",
          "MeanCoverage": "923.175"
        },
        {
          "Gene": "NF1",
          "Chr": "chr17",
          "Start": "29554462",
          "End": "29554702",
          "MinCoverage": "548",
          "MaxCoverage": "8750",
          "TotCoverage": "252412",
          "MeanCoverage": "1051.7166666666667"
        },
        {
          "Gene": "NF1",
          "Chr": "chr17",
          "Start": "29555977",
          "End": "29557057",
          "MinCoverage": "528",
          "MaxCoverage": "11680",
          "TotCoverage": "1303659",
          "MeanCoverage": "1207.0916666666667"
        },
        {
          "Gene": "NF1",
          "Chr": "chr17",
          "Start": "29557218",
          "End": "29557458",
          "MinCoverage": "221",
          "MaxCoverage": "8490",
          "TotCoverage": "178382",
          "MeanCoverage": "743.2583333333333"
        },
        {
          "Gene": "NF1",
          "Chr": "chr17",
          "Start": "29557781",
          "End": "29558021",
          "MinCoverage": "365",
          "MaxCoverage": "9984",
          "TotCoverage": "228736",
          "MeanCoverage": "953.0666666666667"
        },
        {
          "Gene": "NF1",
          "Chr": "chr17",
          "Start": "29558900",
          "End": "29559308",
          "MinCoverage": "504",
          "MaxCoverage": "9115",
          "TotCoverage": "441304",
          "MeanCoverage": "1081.6274509803923"
        },
        {
          "Gene": "NF1",
          "Chr": "chr17",
          "Start": "29559658",
          "End": "29559958",
          "MinCoverage": "449",
          "MaxCoverage": "9552",
          "TotCoverage": "286827",
          "MeanCoverage": "956.09"
        },
        {
          "Gene": "NF1",
          "Chr": "chr17",
          "Start": "29559962",
          "End": "29560361",
          "MinCoverage": "639",
          "MaxCoverage": "12372",
          "TotCoverage": "485814",
          "MeanCoverage": "1217.578947368421"
        },
        {
          "Gene": "NF1",
          "Chr": "chr17",
          "Start": "29562559",
          "End": "29562859",
          "MinCoverage": "813",
          "MaxCoverage": "10605",
          "TotCoverage": "360264",
          "MeanCoverage": "1200.88"
        },
        {
          "Gene": "NF1",
          "Chr": "chr17",
          "Start": "29562867",
          "End": "29563107",
          "MinCoverage": "411",
          "MaxCoverage": "6984",
          "TotCoverage": "228740",
          "MeanCoverage": "953.0833333333334"
        },
        {
          "Gene": "NF1",
          "Chr": "chr17",
          "Start": "29575949",
          "End": "29576189",
          "MinCoverage": "489",
          "MaxCoverage": "16520",
          "TotCoverage": "262672",
          "MeanCoverage": "1094.4666666666667"
        },
        {
          "Gene": "NF1",
          "Chr": "chr17",
          "Start": "29576897",
          "End": "29581014",
          "MinCoverage": "59",
          "MaxCoverage": "20610",
          "TotCoverage": "4726181",
          "MeanCoverage": "1147.9672091328637"
        },
        {
          "Gene": "NF1",
          "Chr": "chr17",
          "Start": "29584634",
          "End": "29584814",
          "MinCoverage": "198",
          "MaxCoverage": "6050",
          "TotCoverage": "90115",
          "MeanCoverage": "500.6388888888889"
        },
        {
          "Gene": "NF1",
          "Chr": "chr17",
          "Start": "29585290",
          "End": "29585590",
          "MinCoverage": "404",
          "MaxCoverage": "11376",
          "TotCoverage": "222646",
          "MeanCoverage": "742.1533333333333"
        },
        {
          "Gene": "NF1",
          "Chr": "chr17",
          "Start": "29585978",
          "End": "29586218",
          "MinCoverage": "488",
          "MaxCoverage": "11736",
          "TotCoverage": "237363",
          "MeanCoverage": "989.0125"
        },
        {
          "Gene": "NF1",
          "Chr": "chr17",
          "Start": "29587309",
          "End": "29587609",
          "MinCoverage": "495",
          "MaxCoverage": "15375",
          "TotCoverage": "230712",
          "MeanCoverage": "769.04"
        },
        {
          "Gene": "NF1",
          "Chr": "chr17",
          "Start": "29588651",
          "End": "29588951",
          "MinCoverage": "225",
          "MaxCoverage": "15521",
          "TotCoverage": "313328",
          "MeanCoverage": "1044.4266666666667"
        },
        {
          "Gene": "NF1",
          "Chr": "chr17",
          "Start": "29592181",
          "End": "29592421",
          "MinCoverage": "653",
          "MaxCoverage": "19698",
          "TotCoverage": "266666",
          "MeanCoverage": "1111.1083333333333"
        },
        {
          "Gene": "NF1",
          "Chr": "chr17",
          "Start": "29599016",
          "End": "29599796",
          "MinCoverage": "118",
          "MaxCoverage": "9786",
          "TotCoverage": "600597",
          "MeanCoverage": "769.9961538461539"
        },
        {
          "Gene": "NF1",
          "Chr": "chr17",
          "Start": "29600527",
          "End": "29600707",
          "MinCoverage": "103",
          "MaxCoverage": "3060",
          "TotCoverage": "39439",
          "MeanCoverage": "219.10555555555555"
        },
        {
          "Gene": "NF1",
          "Chr": "chr17",
          "Start": "29605131",
          "End": "29605311",
          "MinCoverage": "78",
          "MaxCoverage": "2421",
          "TotCoverage": "30905",
          "MeanCoverage": "171.69444444444446"
        },
        {
          "Gene": "NF1,OMG",
          "Chr": "chr17",
          "Start": "29621574",
          "End": "29624574",
          "MinCoverage": "333",
          "MaxCoverage": "13608",
          "TotCoverage": "2252125",
          "MeanCoverage": "750.7083333333334"
        },
        {
          "Gene": "NF1",
          "Chr": "chr17",
          "Start": "29626485",
          "End": "29626665",
          "MinCoverage": "399",
          "MaxCoverage": "8100",
          "TotCoverage": "132659",
          "MeanCoverage": "736.9944444444444"
        },
        {
          "Gene": "EVI2B,NF1",
          "Chr": "chr17",
          "Start": "29630755",
          "End": "29632675",
          "MinCoverage": "113",
          "MaxCoverage": "10478",
          "TotCoverage": "1162068",
          "MeanCoverage": "605.24375"
        },
        {
          "Gene": "EVI2B,NF1",
          "Chr": "chr17",
          "Start": "29634850",
          "End": "29635030",
          "MinCoverage": "214",
          "MaxCoverage": "4554",
          "TotCoverage": "77029",
          "MeanCoverage": "427.93888888888887"
        },
        {
          "Gene": "EVI2B,NF1",
          "Chr": "chr17",
          "Start": "29640943",
          "End": "29641183",
          "MinCoverage": "270",
          "MaxCoverage": "6344",
          "TotCoverage": "138940",
          "MeanCoverage": "578.9166666666666"
        },
        {
          "Gene": "NF1",
          "Chr": "chr17",
          "Start": "29641272",
          "End": "29641457",
          "MinCoverage": "15",
          "MaxCoverage": "9959",
          "TotCoverage": "62557",
          "MeanCoverage": "338.1459459459459"
        },
        {
          "Gene": "EVI2A,NF1",
          "Chr": "chr17",
          "Start": "29643424",
          "End": "29644024",
          "MinCoverage": "90",
          "MaxCoverage": "5715",
          "TotCoverage": "216949",
          "MeanCoverage": "361.58166666666665"
        },
        {
          "Gene": "EVI2A,NF1",
          "Chr": "chr17",
          "Start": "29644147",
          "End": "29644387",
          "MinCoverage": "132",
          "MaxCoverage": "3850",
          "TotCoverage": "97996",
          "MeanCoverage": "408.31666666666666"
        },
        {
          "Gene": "EVI2A,NF1",
          "Chr": "chr17",
          "Start": "29644421",
          "End": "29646041",
          "MinCoverage": "206",
          "MaxCoverage": "8170",
          "TotCoverage": "977892",
          "MeanCoverage": "603.6370370370371"
        },
        {
          "Gene": "EVI2A,NF1",
          "Chr": "chr17",
          "Start": "29647340",
          "End": "29647580",
          "MinCoverage": "146",
          "MaxCoverage": "3618",
          "TotCoverage": "82513",
          "MeanCoverage": "343.8041666666667"
        },
        {
          "Gene": "EVI2A,NF1",
          "Chr": "chr17",
          "Start": "29647922",
          "End": "29648102",
          "MinCoverage": "165",
          "MaxCoverage": "4224",
          "TotCoverage": "85588",
          "MeanCoverage": "475.4888888888889"
        },
        {
          "Gene": "EVI2A,NF1",
          "Chr": "chr17",
          "Start": "29648497",
          "End": "29648917",
          "MinCoverage": "235",
          "MaxCoverage": "10166",
          "TotCoverage": "223068",
          "MeanCoverage": "531.1142857142858"
        },
        {
          "Gene": "NF1",
          "Chr": "chr17",
          "Start": "29652783",
          "End": "29653323",
          "MinCoverage": "542",
          "MaxCoverage": "13190",
          "TotCoverage": "598230",
          "MeanCoverage": "1107.8333333333333"
        },
        {
          "Gene": "NF1",
          "Chr": "chr17",
          "Start": "29654446",
          "End": "29654926",
          "MinCoverage": "360",
          "MaxCoverage": "23751",
          "TotCoverage": "854852",
          "MeanCoverage": "1780.9416666666666"
        },
        {
          "Gene": "NF1",
          "Chr": "chr17",
          "Start": "29657241",
          "End": "29658778",
          "MinCoverage": "630",
          "MaxCoverage": "20188",
          "TotCoverage": "1887375",
          "MeanCoverage": "1227.9603122966819"
        },
        {
          "Gene": "NF1",
          "Chr": "chr17",
          "Start": "29658825",
          "End": "29659118",
          "MinCoverage": "106",
          "MaxCoverage": "12036",
          "TotCoverage": "202101",
          "MeanCoverage": "689.7645051194539"
        },
        {
          "Gene": "NF1",
          "Chr": "chr17",
          "Start": "29661624",
          "End": "29662188",
          "MinCoverage": "184",
          "MaxCoverage": "16764",
          "TotCoverage": "605787",
          "MeanCoverage": "1074.090425531915"
        },
        {
          "Gene": "NF1",
          "Chr": "chr17",
          "Start": "29663212",
          "End": "29663989",
          "MinCoverage": "282",
          "MaxCoverage": "12231",
          "TotCoverage": "840733",
          "MeanCoverage": "1082.0244530244531"
        },
        {
          "Gene": "NF1",
          "Chr": "chr17",
          "Start": "29664312",
          "End": "29664672",
          "MinCoverage": "465",
          "MaxCoverage": "18693",
          "TotCoverage": "522176",
          "MeanCoverage": "1450.4888888888888"
        },
        {
          "Gene": "NF1",
          "Chr": "chr17",
          "Start": "29664744",
          "End": "29665224",
          "MinCoverage": "558",
          "MaxCoverage": "20196",
          "TotCoverage": "642334",
          "MeanCoverage": "1338.1958333333334"
        },
        {
          "Gene": "NF1",
          "Chr": "chr17",
          "Start": "29665652",
          "End": "29665892",
          "MinCoverage": "382",
          "MaxCoverage": "8748",
          "TotCoverage": "250766",
          "MeanCoverage": "1044.8583333333333"
        },
        {
          "Gene": "NF1",
          "Chr": "chr17",
          "Start": "29667295",
          "End": "29667742",
          "MinCoverage": "137",
          "MaxCoverage": "12740",
          "TotCoverage": "406400",
          "MeanCoverage": "909.17225950783"
        },
        {
          "Gene": "NF1",
          "Chr": "chr17",
          "Start": "29669969",
          "End": "29670209",
          "MinCoverage": "612",
          "MaxCoverage": "8688",
          "TotCoverage": "219707",
          "MeanCoverage": "915.4458333333333"
        },
        {
          "Gene": "NF1",
          "Chr": "chr17",
          "Start": "29672511",
          "End": "29673231",
          "MinCoverage": "458",
          "MaxCoverage": "9328",
          "TotCoverage": "978383",
          "MeanCoverage": "1358.8652777777777"
        },
        {
          "Gene": "NF1",
          "Chr": "chr17",
          "Start": "29675943",
          "End": "29676356",
          "MinCoverage": "643",
          "MaxCoverage": "12312",
          "TotCoverage": "433850",
          "MeanCoverage": "1050.4842615012108"
        },
        {
          "Gene": "NF1",
          "Chr": "chr17",
          "Start": "29677148",
          "End": "29677388",
          "MinCoverage": "817",
          "MaxCoverage": "15381",
          "TotCoverage": "335067",
          "MeanCoverage": "1396.1125"
        },
        {
          "Gene": "NF1",
          "Chr": "chr17",
          "Start": "29679219",
          "End": "29679560",
          "MinCoverage": "83",
          "MaxCoverage": "13060",
          "TotCoverage": "214633",
          "MeanCoverage": "629.4222873900293"
        },
        {
          "Gene": "NF1",
          "Chr": "chr17",
          "Start": "29682868",
          "End": "29685328",
          "MinCoverage": "166",
          "MaxCoverage": "21208",
          "TotCoverage": "2334204",
          "MeanCoverage": "948.8634146341464"
        },
        {
          "Gene": "NF1",
          "Chr": "chr17",
          "Start": "29685345",
          "End": "29686485",
          "MinCoverage": "221",
          "MaxCoverage": "18304",
          "TotCoverage": "1194047",
          "MeanCoverage": "1047.409649122807"
        },
        {
          "Gene": "NF1",
          "Chr": "chr17",
          "Start": "29686807",
          "End": "29688067",
          "MinCoverage": "161",
          "MaxCoverage": "13300",
          "TotCoverage": "1489141",
          "MeanCoverage": "1181.8579365079365"
        },
        {
          "Gene": "NF1",
          "Chr": "chr17",
          "Start": "29688142",
          "End": "29688562",
          "MinCoverage": "118",
          "MaxCoverage": "5958",
          "TotCoverage": "258641",
          "MeanCoverage": "615.8119047619048"
        },
        {
          "Gene": "NF1",
          "Chr": "chr17",
          "Start": "29688575",
          "End": "29688755",
          "MinCoverage": "84",
          "MaxCoverage": "2088",
          "TotCoverage": "37326",
          "MeanCoverage": "207.36666666666667"
        },
        {
          "Gene": "NF1",
          "Chr": "chr17",
          "Start": "29694179",
          "End": "29694359",
          "MinCoverage": "216",
          "MaxCoverage": "7308",
          "TotCoverage": "92249",
          "MeanCoverage": "512.4944444444444"
        },
        {
          "Gene": "NF1",
          "Chr": "chr17",
          "Start": "29701018",
          "End": "29704733",
          "MinCoverage": "124",
          "MaxCoverage": "10208",
          "TotCoverage": "2400850",
          "MeanCoverage": "646.2584118438762"
        },
        {
          "Gene": "CDK12",
          "Chr": "chr17",
          "Start": "37617661",
          "End": "37619450",
          "MinCoverage": "27",
          "MaxCoverage": "9856",
          "TotCoverage": "1123258",
          "MeanCoverage": "627.8692006707657"
        },
        {
          "Gene": "CDK12",
          "Chr": "chr17",
          "Start": "37627063",
          "End": "37628083",
          "MinCoverage": "270",
          "MaxCoverage": "12618",
          "TotCoverage": "814385",
          "MeanCoverage": "798.4166666666666"
        },
        {
          "Gene": "CDK12",
          "Chr": "chr17",
          "Start": "37646747",
          "End": "37647047",
          "MinCoverage": "78",
          "MaxCoverage": "10747",
          "TotCoverage": "156353",
          "MeanCoverage": "521.1766666666666"
        },
        {
          "Gene": "CDK12",
          "Chr": "chr17",
          "Start": "37648912",
          "End": "37649197",
          "MinCoverage": "257",
          "MaxCoverage": "10848",
          "TotCoverage": "273639",
          "MeanCoverage": "960.1368421052632"
        },
        {
          "Gene": "CDK12",
          "Chr": "chr17",
          "Start": "37650711",
          "End": "37651017",
          "MinCoverage": "638",
          "MaxCoverage": "7903",
          "TotCoverage": "311518",
          "MeanCoverage": "1018.0326797385621"
        },
        {
          "Gene": "CDK12",
          "Chr": "chr17",
          "Start": "37657447",
          "End": "37657747",
          "MinCoverage": "197",
          "MaxCoverage": "9792",
          "TotCoverage": "253662",
          "MeanCoverage": "845.54"
        },
        {
          "Gene": "CDK12",
          "Chr": "chr17",
          "Start": "37665830",
          "End": "37666070",
          "MinCoverage": "453",
          "MaxCoverage": "6755",
          "TotCoverage": "205111",
          "MeanCoverage": "854.6291666666667"
        },
        {
          "Gene": "CDK12",
          "Chr": "chr17",
          "Start": "37667712",
          "End": "37667952",
          "MinCoverage": "186",
          "MaxCoverage": "6958",
          "TotCoverage": "151101",
          "MeanCoverage": "629.5875"
        },
        {
          "Gene": "CDK12",
          "Chr": "chr17",
          "Start": "37671902",
          "End": "37672142",
          "MinCoverage": "257",
          "MaxCoverage": "7182",
          "TotCoverage": "191171",
          "MeanCoverage": "796.5458333333333"
        },
        {
          "Gene": "CDK12",
          "Chr": "chr17",
          "Start": "37673630",
          "End": "37673870",
          "MinCoverage": "262",
          "MaxCoverage": "7077",
          "TotCoverage": "157744",
          "MeanCoverage": "657.2666666666667"
        },
        {
          "Gene": "CDK12",
          "Chr": "chr17",
          "Start": "37676154",
          "End": "37676394",
          "MinCoverage": "225",
          "MaxCoverage": "5706",
          "TotCoverage": "145272",
          "MeanCoverage": "605.3"
        },
        {
          "Gene": "CDK12",
          "Chr": "chr17",
          "Start": "37680852",
          "End": "37681212",
          "MinCoverage": "242",
          "MaxCoverage": "8448",
          "TotCoverage": "197921",
          "MeanCoverage": "549.7805555555556"
        },
        {
          "Gene": "CDK12",
          "Chr": "chr17",
          "Start": "37682042",
          "End": "37682642",
          "MinCoverage": "75",
          "MaxCoverage": "7295",
          "TotCoverage": "449254",
          "MeanCoverage": "748.7566666666667"
        },
        {
          "Gene": "ERBB2",
          "Chr": "chr17",
          "Start": "37856085",
          "End": "37856671",
          "MinCoverage": "29",
          "MaxCoverage": "8918",
          "TotCoverage": "585628",
          "MeanCoverage": "999.3651877133105"
        },
        {
          "Gene": "ERBB2",
          "Chr": "chr17",
          "Start": "37863169",
          "End": "37863529",
          "MinCoverage": "559",
          "MaxCoverage": "5661",
          "TotCoverage": "562880",
          "MeanCoverage": "1563.5555555555557"
        },
        {
          "Gene": "ERBB2",
          "Chr": "chr17",
          "Start": "37864494",
          "End": "37864860",
          "MinCoverage": "341",
          "MaxCoverage": "9906",
          "TotCoverage": "907511",
          "MeanCoverage": "2479.53825136612"
        },
        {
          "Gene": "ERBB2",
          "Chr": "chr17",
          "Start": "37865517",
          "End": "37865757",
          "MinCoverage": "372",
          "MaxCoverage": "11052",
          "TotCoverage": "515545",
          "MeanCoverage": "2148.1041666666665"
        },
        {
          "Gene": "ERBB2",
          "Chr": "chr17",
          "Start": "37865979",
          "End": "37866219",
          "MinCoverage": "541",
          "MaxCoverage": "10773",
          "TotCoverage": "269118",
          "MeanCoverage": "1121.325"
        },
        {
          "Gene": "ERBB2",
          "Chr": "chr17",
          "Start": "37866276",
          "End": "37866813",
          "MinCoverage": "1203",
          "MaxCoverage": "14320",
          "TotCoverage": "1414528",
          "MeanCoverage": "2634.130353817505"
        },
        {
          "Gene": "ERBB2",
          "Chr": "chr17",
          "Start": "37868110",
          "End": "37868770",
          "MinCoverage": "377",
          "MaxCoverage": "14127",
          "TotCoverage": "1690282",
          "MeanCoverage": "2561.0333333333333"
        },
        {
          "Gene": "ERBB2",
          "Chr": "chr17",
          "Start": "37871483",
          "End": "37871843",
          "MinCoverage": "400",
          "MaxCoverage": "12761",
          "TotCoverage": "471224",
          "MeanCoverage": "1308.9555555555555"
        },
        {
          "Gene": "ERBB2",
          "Chr": "chr17",
          "Start": "37871942",
          "End": "37872242",
          "MinCoverage": "645",
          "MaxCoverage": "9402",
          "TotCoverage": "593603",
          "MeanCoverage": "1978.6766666666667"
        },
        {
          "Gene": "ERBB2",
          "Chr": "chr17",
          "Start": "37872495",
          "End": "37872915",
          "MinCoverage": "155",
          "MaxCoverage": "6324",
          "TotCoverage": "385757",
          "MeanCoverage": "918.4690476190476"
        },
        {
          "Gene": "ERBB2",
          "Chr": "chr17",
          "Start": "37873491",
          "End": "37873995",
          "MinCoverage": "323",
          "MaxCoverage": "9399",
          "TotCoverage": "806319",
          "MeanCoverage": "1599.8392857142858"
        },
        {
          "Gene": "ERBB2",
          "Chr": "chr17",
          "Start": "37875943",
          "End": "37876197",
          "MinCoverage": "220",
          "MaxCoverage": "11921",
          "TotCoverage": "270434",
          "MeanCoverage": "1064.7007874015749"
        },
        {
          "Gene": "ERBB2",
          "Chr": "chr17",
          "Start": "37879502",
          "End": "37879982",
          "MinCoverage": "696",
          "MaxCoverage": "13072",
          "TotCoverage": "1062208",
          "MeanCoverage": "2212.9333333333334"
        },
        {
          "Gene": "ERBB2",
          "Chr": "chr17",
          "Start": "37880093",
          "End": "37880374",
          "MinCoverage": "629",
          "MaxCoverage": "10728",
          "TotCoverage": "316405",
          "MeanCoverage": "1125.9964412811387"
        },
        {
          "Gene": "ERBB2",
          "Chr": "chr17",
          "Start": "37880879",
          "End": "37881221",
          "MinCoverage": "799",
          "MaxCoverage": "12417",
          "TotCoverage": "909382",
          "MeanCoverage": "2659.0116959064326"
        },
        {
          "Gene": "ERBB2",
          "Chr": "chr17",
          "Start": "37881224",
          "End": "37881737",
          "MinCoverage": "195",
          "MaxCoverage": "25134",
          "TotCoverage": "1068053",
          "MeanCoverage": "2081.9746588693956"
        },
        {
          "Gene": "ERBB2",
          "Chr": "chr17",
          "Start": "37881882",
          "End": "37882182",
          "MinCoverage": "406",
          "MaxCoverage": "6720",
          "TotCoverage": "321209",
          "MeanCoverage": "1070.6966666666667"
        },
        {
          "Gene": "ERBB2",
          "Chr": "chr17",
          "Start": "37882679",
          "End": "37882979",
          "MinCoverage": "305",
          "MaxCoverage": "6910",
          "TotCoverage": "288902",
          "MeanCoverage": "963.0066666666667"
        },
        {
          "Gene": "ERBB2",
          "Chr": "chr17",
          "Start": "37883011",
          "End": "37883311",
          "MinCoverage": "1248",
          "MaxCoverage": "13945",
          "TotCoverage": "781396",
          "MeanCoverage": "2604.653333333333"
        },
        {
          "Gene": "ERBB2",
          "Chr": "chr17",
          "Start": "37883493",
          "End": "37883853",
          "MinCoverage": "1466",
          "MaxCoverage": "9895",
          "TotCoverage": "667214",
          "MeanCoverage": "1853.3722222222223"
        },
        {
          "Gene": "ERBB2,MIEN1",
          "Chr": "chr17",
          "Start": "37883888",
          "End": "37884968",
          "MinCoverage": "365",
          "MaxCoverage": "10864",
          "TotCoverage": "1524795",
          "MeanCoverage": "1411.8472222222222"
        },
        {
          "Gene": "BRCA1",
          "Chr": "chr17",
          "Start": "41196223",
          "End": "41196915",
          "MinCoverage": "93",
          "MaxCoverage": "9740",
          "TotCoverage": "451810",
          "MeanCoverage": "652.9046242774566"
        },
        {
          "Gene": "BRCA1",
          "Chr": "chr17",
          "Start": "41197067",
          "End": "41197883",
          "MinCoverage": "243",
          "MaxCoverage": "11076",
          "TotCoverage": "652812",
          "MeanCoverage": "800.0147058823529"
        },
        {
          "Gene": "BRCA1",
          "Chr": "chr17",
          "Start": "41199548",
          "End": "41199798",
          "MinCoverage": "389",
          "MaxCoverage": "7792",
          "TotCoverage": "203306",
          "MeanCoverage": "813.224"
        },
        {
          "Gene": "BRCA1",
          "Chr": "chr17",
          "Start": "41201054",
          "End": "41201294",
          "MinCoverage": "180",
          "MaxCoverage": "6516",
          "TotCoverage": "162665",
          "MeanCoverage": "677.7708333333334"
        },
        {
          "Gene": "BRCA1",
          "Chr": "chr17",
          "Start": "41202003",
          "End": "41202183",
          "MinCoverage": "255",
          "MaxCoverage": "3460",
          "TotCoverage": "69913",
          "MeanCoverage": "388.40555555555557"
        },
        {
          "Gene": "BRCA1",
          "Chr": "chr17",
          "Start": "41202986",
          "End": "41203226",
          "MinCoverage": "91",
          "MaxCoverage": "4270",
          "TotCoverage": "85529",
          "MeanCoverage": "356.37083333333334"
        },
        {
          "Gene": "BRCA1",
          "Chr": "chr17",
          "Start": "41208990",
          "End": "41209230",
          "MinCoverage": "181",
          "MaxCoverage": "4680",
          "TotCoverage": "111032",
          "MeanCoverage": "462.6333333333333"
        },
        {
          "Gene": "BRCA1",
          "Chr": "chr17",
          "Start": "41215249",
          "End": "41215489",
          "MinCoverage": "225",
          "MaxCoverage": "10232",
          "TotCoverage": "230607",
          "MeanCoverage": "960.8625"
        },
        {
          "Gene": "BRCA1",
          "Chr": "chr17",
          "Start": "41215809",
          "End": "41216049",
          "MinCoverage": "382",
          "MaxCoverage": "11336",
          "TotCoverage": "142042",
          "MeanCoverage": "591.8416666666667"
        },
        {
          "Gene": "BRCA1",
          "Chr": "chr17",
          "Start": "41219551",
          "End": "41219791",
          "MinCoverage": "616",
          "MaxCoverage": "9135",
          "TotCoverage": "354228",
          "MeanCoverage": "1475.95"
        },
        {
          "Gene": "BRCA1",
          "Chr": "chr17",
          "Start": "41222889",
          "End": "41223309",
          "MinCoverage": "180",
          "MaxCoverage": "8946",
          "TotCoverage": "376139",
          "MeanCoverage": "895.5690476190476"
        },
        {
          "Gene": "BRCA1",
          "Chr": "chr17",
          "Start": "41226292",
          "End": "41226592",
          "MinCoverage": "215",
          "MaxCoverage": "12792",
          "TotCoverage": "305209",
          "MeanCoverage": "1017.3633333333333"
        },
        {
          "Gene": "BRCA1",
          "Chr": "chr17",
          "Start": "41228447",
          "End": "41228687",
          "MinCoverage": "364",
          "MaxCoverage": "8879",
          "TotCoverage": "169241",
          "MeanCoverage": "705.1708333333333"
        },
        {
          "Gene": "BRCA1",
          "Chr": "chr17",
          "Start": "41231293",
          "End": "41231473",
          "MinCoverage": "78",
          "MaxCoverage": "3056",
          "TotCoverage": "34776",
          "MeanCoverage": "193.2"
        },
        {
          "Gene": "BRCA1",
          "Chr": "chr17",
          "Start": "41234356",
          "End": "41234656",
          "MinCoverage": "271",
          "MaxCoverage": "11034",
          "TotCoverage": "210820",
          "MeanCoverage": "702.7333333333333"
        },
        {
          "Gene": "BRCA1",
          "Chr": "chr17",
          "Start": "41242908",
          "End": "41246928",
          "MinCoverage": "305",
          "MaxCoverage": "18904",
          "TotCoverage": "4714883",
          "MeanCoverage": "1172.8564676616916"
        },
        {
          "Gene": "BRCA1",
          "Chr": "chr17",
          "Start": "41247810",
          "End": "41247990",
          "MinCoverage": "304",
          "MaxCoverage": "7630",
          "TotCoverage": "97510",
          "MeanCoverage": "541.7222222222222"
        },
        {
          "Gene": "BRCA1",
          "Chr": "chr17",
          "Start": "41249193",
          "End": "41249373",
          "MinCoverage": "123",
          "MaxCoverage": "4046",
          "TotCoverage": "66164",
          "MeanCoverage": "367.5777777777778"
        },
        {
          "Gene": "BRCA1",
          "Chr": "chr17",
          "Start": "41251724",
          "End": "41251964",
          "MinCoverage": "292",
          "MaxCoverage": "10360",
          "TotCoverage": "232236",
          "MeanCoverage": "967.65"
        },
        {
          "Gene": "BRCA1",
          "Chr": "chr17",
          "Start": "41256050",
          "End": "41256345",
          "MinCoverage": "214",
          "MaxCoverage": "9594",
          "TotCoverage": "317119",
          "MeanCoverage": "1074.9796610169492"
        },
        {
          "Gene": "BRCA1",
          "Chr": "chr17",
          "Start": "41256808",
          "End": "41257048",
          "MinCoverage": "410",
          "MaxCoverage": "7155",
          "TotCoverage": "234900",
          "MeanCoverage": "978.75"
        },
        {
          "Gene": "BRCA1",
          "Chr": "chr17",
          "Start": "41258391",
          "End": "41258631",
          "MinCoverage": "151",
          "MaxCoverage": "7882",
          "TotCoverage": "156128",
          "MeanCoverage": "650.5333333333333"
        },
        {
          "Gene": "BRCA1",
          "Chr": "chr17",
          "Start": "41262484",
          "End": "41262664",
          "MinCoverage": "28",
          "MaxCoverage": "440",
          "TotCoverage": "8676",
          "MeanCoverage": "48.2"
        },
        {
          "Gene": "BRCA1",
          "Chr": "chr17",
          "Start": "41267617",
          "End": "41267857",
          "MinCoverage": "185",
          "MaxCoverage": "6648",
          "TotCoverage": "176045",
          "MeanCoverage": "733.5208333333334"
        },
        {
          "Gene": "BRCA1",
          "Chr": "chr17",
          "Start": "41275962",
          "End": "41276202",
          "MinCoverage": "79",
          "MaxCoverage": "4795",
          "TotCoverage": "99143",
          "MeanCoverage": "413.09583333333336"
        },
        {
          "Gene": "BRCA1",
          "Chr": "chr17",
          "Start": "41277110",
          "End": "41277290",
          "MinCoverage": "514",
          "MaxCoverage": "9150",
          "TotCoverage": "256685",
          "MeanCoverage": "1426.0277777777778"
        },
        {
          "Gene": "SPOP",
          "Chr": "chr17",
          "Start": "47676240",
          "End": "47676660",
          "MinCoverage": "112",
          "MaxCoverage": "8046",
          "TotCoverage": "202757",
          "MeanCoverage": "482.7547619047619"
        },
        {
          "Gene": "SPOP",
          "Chr": "chr17",
          "Start": "47676698",
          "End": "47676818",
          "MinCoverage": "151",
          "MaxCoverage": "2118",
          "TotCoverage": "33003",
          "MeanCoverage": "275.025"
        },
        {
          "Gene": "SPOP",
          "Chr": "chr17",
          "Start": "47676877",
          "End": "47678377",
          "MinCoverage": "127",
          "MaxCoverage": "8953",
          "TotCoverage": "1018464",
          "MeanCoverage": "678.976"
        },
        {
          "Gene": "SPOP",
          "Chr": "chr17",
          "Start": "47678383",
          "End": "47678683",
          "MinCoverage": "150",
          "MaxCoverage": "5292",
          "TotCoverage": "200527",
          "MeanCoverage": "668.4233333333333"
        },
        {
          "Gene": "SPOP",
          "Chr": "chr17",
          "Start": "47678710",
          "End": "47679010",
          "MinCoverage": "198",
          "MaxCoverage": "11528",
          "TotCoverage": "303145",
          "MeanCoverage": "1010.4833333333333"
        },
        {
          "Gene": "SPOP",
          "Chr": "chr17",
          "Start": "47679041",
          "End": "47679761",
          "MinCoverage": "376",
          "MaxCoverage": "6672",
          "TotCoverage": "476688",
          "MeanCoverage": "662.0666666666667"
        },
        {
          "Gene": "SPOP",
          "Chr": "chr17",
          "Start": "47684401",
          "End": "47684761",
          "MinCoverage": "249",
          "MaxCoverage": "5464",
          "TotCoverage": "218893",
          "MeanCoverage": "608.0361111111112"
        },
        {
          "Gene": "SPOP",
          "Chr": "chr17",
          "Start": "47685173",
          "End": "47685353",
          "MinCoverage": "347",
          "MaxCoverage": "5432",
          "TotCoverage": "112048",
          "MeanCoverage": "622.4888888888889"
        },
        {
          "Gene": "SPOP",
          "Chr": "chr17",
          "Start": "47688610",
          "End": "47688850",
          "MinCoverage": "310",
          "MaxCoverage": "5446",
          "TotCoverage": "127848",
          "MeanCoverage": "532.7"
        },
        {
          "Gene": "SPOP",
          "Chr": "chr17",
          "Start": "47690101",
          "End": "47690341",
          "MinCoverage": "270",
          "MaxCoverage": "7002",
          "TotCoverage": "135259",
          "MeanCoverage": "563.5791666666667"
        },
        {
          "Gene": "SPOP",
          "Chr": "chr17",
          "Start": "47695805",
          "End": "47695985",
          "MinCoverage": "311",
          "MaxCoverage": "8217",
          "TotCoverage": "105662",
          "MeanCoverage": "587.0111111111111"
        },
        {
          "Gene": "SPOP",
          "Chr": "chr17",
          "Start": "47696286",
          "End": "47696526",
          "MinCoverage": "328",
          "MaxCoverage": "4236",
          "TotCoverage": "137250",
          "MeanCoverage": "571.875"
        },
        {
          "Gene": "SPOP",
          "Chr": "chr17",
          "Start": "47696551",
          "End": "47696791",
          "MinCoverage": "203",
          "MaxCoverage": "8532",
          "TotCoverage": "222985",
          "MeanCoverage": "929.1041666666666"
        },
        {
          "Gene": "SPOP",
          "Chr": "chr17",
          "Start": "47697917",
          "End": "47698097",
          "MinCoverage": "432",
          "MaxCoverage": "14632",
          "TotCoverage": "117052",
          "MeanCoverage": "650.2888888888889"
        },
        {
          "Gene": "SPOP",
          "Chr": "chr17",
          "Start": "47699248",
          "End": "47699488",
          "MinCoverage": "242",
          "MaxCoverage": "8333",
          "TotCoverage": "125566",
          "MeanCoverage": "523.1916666666667"
        },
        {
          "Gene": "SPOP",
          "Chr": "chr17",
          "Start": "47699516",
          "End": "47699696",
          "MinCoverage": "294",
          "MaxCoverage": "8955",
          "TotCoverage": "121025",
          "MeanCoverage": "672.3611111111111"
        },
        {
          "Gene": "SPOP",
          "Chr": "chr17",
          "Start": "47699766",
          "End": "47700246",
          "MinCoverage": "133",
          "MaxCoverage": "9911",
          "TotCoverage": "321376",
          "MeanCoverage": "669.5333333333333"
        },
        {
          "Gene": "SPOP",
          "Chr": "chr17",
          "Start": "47713639",
          "End": "47713819",
          "MinCoverage": "118",
          "MaxCoverage": "5499",
          "TotCoverage": "49174",
          "MeanCoverage": "273.18888888888887"
        },
        {
          "Gene": "SPOP",
          "Chr": "chr17",
          "Start": "47714055",
          "End": "47714235",
          "MinCoverage": "123",
          "MaxCoverage": "3630",
          "TotCoverage": "81846",
          "MeanCoverage": "454.7"
        },
        {
          "Gene": "SPOP",
          "Chr": "chr17",
          "Start": "47723422",
          "End": "47723662",
          "MinCoverage": "285",
          "MaxCoverage": "6061",
          "TotCoverage": "105765",
          "MeanCoverage": "440.6875"
        },
        {
          "Gene": "SPOP",
          "Chr": "chr17",
          "Start": "47723877",
          "End": "47724057",
          "MinCoverage": "129",
          "MaxCoverage": "5220",
          "TotCoverage": "84530",
          "MeanCoverage": "469.6111111111111"
        },
        {
          "Gene": "SPOP",
          "Chr": "chr17",
          "Start": "47755222",
          "End": "47755402",
          "MinCoverage": "222",
          "MaxCoverage": "1528",
          "TotCoverage": "56358",
          "MeanCoverage": "313.1"
        },
        {
          "Gene": "RNF43",
          "Chr": "chr17",
          "Start": "56435073",
          "End": "56435253",
          "MinCoverage": "185",
          "MaxCoverage": "1096",
          "TotCoverage": "51010",
          "MeanCoverage": "283.3888888888889"
        },
        {
          "Gene": "RAD51C",
          "Chr": "chr17",
          "Start": "56783789",
          "End": "56784029",
          "MinCoverage": "424",
          "MaxCoverage": "10600",
          "TotCoverage": "178741",
          "MeanCoverage": "744.7541666666667"
        },
        {
          "Gene": "BRIP1",
          "Chr": "chr17",
          "Start": "59761957",
          "End": "59762137",
          "MinCoverage": "25",
          "MaxCoverage": "670",
          "TotCoverage": "5260",
          "MeanCoverage": "29.22222222222222"
        },
        {
          "Gene": "BRIP1",
          "Chr": "chr17",
          "Start": "59762270",
          "End": "59763589",
          "MinCoverage": "257",
          "MaxCoverage": "13923",
          "TotCoverage": "1395062",
          "MeanCoverage": "1057.6664139499621"
        },
        {
          "Gene": "BRIP1",
          "Chr": "chr17",
          "Start": "59793204",
          "End": "59793616",
          "MinCoverage": "237",
          "MaxCoverage": "8470",
          "TotCoverage": "240321",
          "MeanCoverage": "583.3033980582525"
        },
        {
          "Gene": "BRIP1",
          "Chr": "chr17",
          "Start": "59820314",
          "End": "59820554",
          "MinCoverage": "255",
          "MaxCoverage": "8099",
          "TotCoverage": "213036",
          "MeanCoverage": "887.65"
        },
        {
          "Gene": "BRIP1",
          "Chr": "chr17",
          "Start": "59821722",
          "End": "59822022",
          "MinCoverage": "254",
          "MaxCoverage": "14400",
          "TotCoverage": "254764",
          "MeanCoverage": "849.2133333333334"
        },
        {
          "Gene": "BRIP1",
          "Chr": "chr17",
          "Start": "59853692",
          "End": "59853992",
          "MinCoverage": "274",
          "MaxCoverage": "5877",
          "TotCoverage": "138199",
          "MeanCoverage": "460.66333333333336"
        },
        {
          "Gene": "BRIP1",
          "Chr": "chr17",
          "Start": "59857568",
          "End": "59857808",
          "MinCoverage": "179",
          "MaxCoverage": "4872",
          "TotCoverage": "106043",
          "MeanCoverage": "441.84583333333336"
        },
        {
          "Gene": "BRIP1",
          "Chr": "chr17",
          "Start": "59858133",
          "End": "59858433",
          "MinCoverage": "269",
          "MaxCoverage": "8034",
          "TotCoverage": "228629",
          "MeanCoverage": "762.0966666666667"
        },
        {
          "Gene": "BRIP1",
          "Chr": "chr17",
          "Start": "59861557",
          "End": "59861857",
          "MinCoverage": "94",
          "MaxCoverage": "15759",
          "TotCoverage": "146446",
          "MeanCoverage": "488.1533333333333"
        },
        {
          "Gene": "BRIP1",
          "Chr": "chr17",
          "Start": "59870903",
          "End": "59871143",
          "MinCoverage": "233",
          "MaxCoverage": "5598",
          "TotCoverage": "103767",
          "MeanCoverage": "432.3625"
        },
        {
          "Gene": "BRIP1",
          "Chr": "chr17",
          "Start": "59876410",
          "End": "59876710",
          "MinCoverage": "179",
          "MaxCoverage": "10208",
          "TotCoverage": "215963",
          "MeanCoverage": "719.8766666666667"
        },
        {
          "Gene": "BRIP1",
          "Chr": "chr17",
          "Start": "59878544",
          "End": "59878904",
          "MinCoverage": "258",
          "MaxCoverage": "6252",
          "TotCoverage": "253414",
          "MeanCoverage": "703.9277777777778"
        },
        {
          "Gene": "BRIP1",
          "Chr": "chr17",
          "Start": "59885762",
          "End": "59886182",
          "MinCoverage": "341",
          "MaxCoverage": "10912",
          "TotCoverage": "324225",
          "MeanCoverage": "771.9642857142857"
        },
        {
          "Gene": "BRIP1",
          "Chr": "chr17",
          "Start": "59924401",
          "End": "59924641",
          "MinCoverage": "377",
          "MaxCoverage": "7535",
          "TotCoverage": "113905",
          "MeanCoverage": "474.6041666666667"
        },
        {
          "Gene": "BRIP1",
          "Chr": "chr17",
          "Start": "59926433",
          "End": "59926673",
          "MinCoverage": "339",
          "MaxCoverage": "6748",
          "TotCoverage": "151673",
          "MeanCoverage": "631.9708333333333"
        },
        {
          "Gene": "BRIP1",
          "Chr": "chr17",
          "Start": "59934355",
          "End": "59934655",
          "MinCoverage": "132",
          "MaxCoverage": "6149",
          "TotCoverage": "151010",
          "MeanCoverage": "503.3666666666667"
        },
        {
          "Gene": "BRIP1",
          "Chr": "chr17",
          "Start": "59937092",
          "End": "59937332",
          "MinCoverage": "181",
          "MaxCoverage": "9911",
          "TotCoverage": "148398",
          "MeanCoverage": "618.325"
        },
        {
          "Gene": "BRIP1",
          "Chr": "chr17",
          "Start": "59938748",
          "End": "59938988",
          "MinCoverage": "298",
          "MaxCoverage": "7470",
          "TotCoverage": "128510",
          "MeanCoverage": "535.4583333333334"
        },
        {
          "Gene": "PRKAR1A",
          "Chr": "chr17",
          "Start": "66510889",
          "End": "66511789",
          "MinCoverage": "377",
          "MaxCoverage": "14272",
          "TotCoverage": "891012",
          "MeanCoverage": "990.0133333333333"
        },
        {
          "Gene": "PRKAR1A",
          "Chr": "chr17",
          "Start": "66518831",
          "End": "66519131",
          "MinCoverage": "134",
          "MaxCoverage": "4578",
          "TotCoverage": "134073",
          "MeanCoverage": "446.91"
        },
        {
          "Gene": "PRKAR1A",
          "Chr": "chr17",
          "Start": "66519791",
          "End": "66520031",
          "MinCoverage": "273",
          "MaxCoverage": "5694",
          "TotCoverage": "157274",
          "MeanCoverage": "655.3083333333333"
        },
        {
          "Gene": "PRKAR1A",
          "Chr": "chr17",
          "Start": "66520067",
          "End": "66520307",
          "MinCoverage": "476",
          "MaxCoverage": "6248",
          "TotCoverage": "260325",
          "MeanCoverage": "1084.6875"
        },
        {
          "Gene": "PRKAR1A",
          "Chr": "chr17",
          "Start": "66520955",
          "End": "66521195",
          "MinCoverage": "264",
          "MaxCoverage": "9554",
          "TotCoverage": "163939",
          "MeanCoverage": "683.0791666666667"
        },
        {
          "Gene": "PRKAR1A",
          "Chr": "chr17",
          "Start": "66521823",
          "End": "66522123",
          "MinCoverage": "127",
          "MaxCoverage": "6777",
          "TotCoverage": "141224",
          "MeanCoverage": "470.74666666666667"
        },
        {
          "Gene": "PRKAR1A",
          "Chr": "chr17",
          "Start": "66523896",
          "End": "66524136",
          "MinCoverage": "222",
          "MaxCoverage": "4527",
          "TotCoverage": "111824",
          "MeanCoverage": "465.93333333333334"
        },
        {
          "Gene": "PRKAR1A",
          "Chr": "chr17",
          "Start": "66524951",
          "End": "66525191",
          "MinCoverage": "213",
          "MaxCoverage": "5551",
          "TotCoverage": "124267",
          "MeanCoverage": "517.7791666666667"
        },
        {
          "Gene": "PRKAR1A",
          "Chr": "chr17",
          "Start": "66525981",
          "End": "66526221",
          "MinCoverage": "158",
          "MaxCoverage": "3680",
          "TotCoverage": "81172",
          "MeanCoverage": "338.21666666666664"
        },
        {
          "Gene": "SMAD4",
          "Chr": "chr18",
          "Start": "48573237",
          "End": "48573717",
          "MinCoverage": "158",
          "MaxCoverage": "6048",
          "TotCoverage": "233571",
          "MeanCoverage": "486.60625"
        },
        {
          "Gene": "SMAD4",
          "Chr": "chr18",
          "Start": "48574989",
          "End": "48575292",
          "MinCoverage": "295",
          "MaxCoverage": "10129",
          "TotCoverage": "332313",
          "MeanCoverage": "1096.7425742574258"
        },
        {
          "Gene": "SMAD4",
          "Chr": "chr18",
          "Start": "48575559",
          "End": "48575799",
          "MinCoverage": "326",
          "MaxCoverage": "8232",
          "TotCoverage": "167481",
          "MeanCoverage": "697.8375"
        },
        {
          "Gene": "SMAD4",
          "Chr": "chr18",
          "Start": "48581089",
          "End": "48581353",
          "MinCoverage": "167",
          "MaxCoverage": "9350",
          "TotCoverage": "174635",
          "MeanCoverage": "661.4962121212121"
        },
        {
          "Gene": "SMAD4",
          "Chr": "chr18",
          "Start": "48584406",
          "End": "48584900",
          "MinCoverage": "175",
          "MaxCoverage": "8407",
          "TotCoverage": "405602",
          "MeanCoverage": "821.0566801619433"
        },
        {
          "Gene": "SMAD4",
          "Chr": "chr18",
          "Start": "48586137",
          "End": "48586401",
          "MinCoverage": "365",
          "MaxCoverage": "11274",
          "TotCoverage": "343316",
          "MeanCoverage": "1300.439393939394"
        },
        {
          "Gene": "SMAD4",
          "Chr": "chr18",
          "Start": "48591717",
          "End": "48592034",
          "MinCoverage": "230",
          "MaxCoverage": "27911",
          "TotCoverage": "447841",
          "MeanCoverage": "1412.7476340694006"
        },
        {
          "Gene": "SMAD4",
          "Chr": "chr18",
          "Start": "48593297",
          "End": "48593622",
          "MinCoverage": "38",
          "MaxCoverage": "14250",
          "TotCoverage": "215899",
          "MeanCoverage": "664.3046153846154"
        },
        {
          "Gene": "SMAD4",
          "Chr": "chr18",
          "Start": "48602927",
          "End": "48603215",
          "MinCoverage": "366",
          "MaxCoverage": "16460",
          "TotCoverage": "908275",
          "MeanCoverage": "3153.7326388888887"
        },
        {
          "Gene": "SMAD4",
          "Chr": "chr18",
          "Start": "48604566",
          "End": "48604855",
          "MinCoverage": "617",
          "MaxCoverage": "17244",
          "TotCoverage": "411784",
          "MeanCoverage": "1424.8581314878893"
        },
        {
          "Gene": "STK11",
          "Chr": "chr19",
          "Start": "1206892",
          "End": "1207204",
          "MinCoverage": "394",
          "MaxCoverage": "7996",
          "TotCoverage": "385330",
          "MeanCoverage": "1235.0320512820513"
        },
        {
          "Gene": "STK11",
          "Chr": "chr19",
          "Start": "1219111",
          "End": "1219572",
          "MinCoverage": "48",
          "MaxCoverage": "4405",
          "TotCoverage": "264101",
          "MeanCoverage": "572.887201735358"
        },
        {
          "Gene": "STK11",
          "Chr": "chr19",
          "Start": "1220320",
          "End": "1220608",
          "MinCoverage": "230",
          "MaxCoverage": "6813",
          "TotCoverage": "383372",
          "MeanCoverage": "1331.1527777777778"
        },
        {
          "Gene": "STK11",
          "Chr": "chr19",
          "Start": "1221133",
          "End": "1221424",
          "MinCoverage": "692",
          "MaxCoverage": "9780",
          "TotCoverage": "656712",
          "MeanCoverage": "2256.742268041237"
        },
        {
          "Gene": "STK11",
          "Chr": "chr19",
          "Start": "1222932",
          "End": "1223244",
          "MinCoverage": "546",
          "MaxCoverage": "10899",
          "TotCoverage": "748493",
          "MeanCoverage": "2399.016025641026"
        },
        {
          "Gene": "GNA11",
          "Chr": "chr19",
          "Start": "3094630",
          "End": "3094870",
          "MinCoverage": "77",
          "MaxCoverage": "1056",
          "TotCoverage": "56137",
          "MeanCoverage": "233.90416666666667"
        },
        {
          "Gene": "GNA11",
          "Chr": "chr19",
          "Start": "3110118",
          "End": "3110358",
          "MinCoverage": "620",
          "MaxCoverage": "5889",
          "TotCoverage": "457558",
          "MeanCoverage": "1906.4916666666666"
        },
        {
          "Gene": "GNA11",
          "Chr": "chr19",
          "Start": "3113284",
          "End": "3113524",
          "MinCoverage": "695",
          "MaxCoverage": "6756",
          "TotCoverage": "397365",
          "MeanCoverage": "1655.6875"
        },
        {
          "Gene": "GNA11",
          "Chr": "chr19",
          "Start": "3114885",
          "End": "3115125",
          "MinCoverage": "2418",
          "MaxCoverage": "14746",
          "TotCoverage": "1332225",
          "MeanCoverage": "5550.9375"
        },
        {
          "Gene": "GNA11",
          "Chr": "chr19",
          "Start": "3118866",
          "End": "3119106",
          "MinCoverage": "294",
          "MaxCoverage": "4448",
          "TotCoverage": "168270",
          "MeanCoverage": "701.125"
        },
        {
          "Gene": "GNA11",
          "Chr": "chr19",
          "Start": "3119160",
          "End": "3119400",
          "MinCoverage": "292",
          "MaxCoverage": "3076",
          "TotCoverage": "156922",
          "MeanCoverage": "653.8416666666667"
        },
        {
          "Gene": "GNA11",
          "Chr": "chr19",
          "Start": "3120961",
          "End": "3121201",
          "MinCoverage": "887",
          "MaxCoverage": "6404",
          "TotCoverage": "554280",
          "MeanCoverage": "2309.5"
        },
        {
          "Gene": "GNA11",
          "Chr": "chr19",
          "Start": "3121291",
          "End": "3121471",
          "MinCoverage": "70",
          "MaxCoverage": "3340",
          "TotCoverage": "106654",
          "MeanCoverage": "592.5222222222222"
        },
        {
          "Gene": "MAP2K2",
          "Chr": "chr19",
          "Start": "4097214",
          "End": "4097454",
          "MinCoverage": "156",
          "MaxCoverage": "3927",
          "TotCoverage": "154767",
          "MeanCoverage": "644.8625"
        },
        {
          "Gene": "MAP2K2",
          "Chr": "chr19",
          "Start": "4099125",
          "End": "4099485",
          "MinCoverage": "387",
          "MaxCoverage": "6825",
          "TotCoverage": "521912",
          "MeanCoverage": "1449.7555555555555"
        },
        {
          "Gene": "MAP2K2",
          "Chr": "chr19",
          "Start": "4100937",
          "End": "4101357",
          "MinCoverage": "253",
          "MaxCoverage": "6489",
          "TotCoverage": "529459",
          "MeanCoverage": "1260.6166666666666"
        },
        {
          "Gene": "MAP2K2",
          "Chr": "chr19",
          "Start": "4102307",
          "End": "4103267",
          "MinCoverage": "283",
          "MaxCoverage": "5460",
          "TotCoverage": "1149500",
          "MeanCoverage": "1197.3958333333333"
        },
        {
          "Gene": "MAP2K2",
          "Chr": "chr19",
          "Start": "4110429",
          "End": "4110729",
          "MinCoverage": "304",
          "MaxCoverage": "9963",
          "TotCoverage": "544268",
          "MeanCoverage": "1814.2266666666667"
        },
        {
          "Gene": "MAP2K2",
          "Chr": "chr19",
          "Start": "4117341",
          "End": "4117701",
          "MinCoverage": "555",
          "MaxCoverage": "10840",
          "TotCoverage": "728127",
          "MeanCoverage": "2022.575"
        },
        {
          "Gene": "MUC16",
          "Chr": "chr19",
          "Start": "8999327",
          "End": "8999627",
          "MinCoverage": "130",
          "MaxCoverage": "8908",
          "TotCoverage": "662715",
          "MeanCoverage": "2209.05"
        },
        {
          "Gene": "MUC16",
          "Chr": "chr19",
          "Start": "9002050",
          "End": "9002290",
          "MinCoverage": "117",
          "MaxCoverage": "2352",
          "TotCoverage": "52547",
          "MeanCoverage": "218.94583333333333"
        },
        {
          "Gene": "MUC16",
          "Chr": "chr19",
          "Start": "9004812",
          "End": "9004992",
          "MinCoverage": "157",
          "MaxCoverage": "3010",
          "TotCoverage": "34260",
          "MeanCoverage": "190.33333333333334"
        },
        {
          "Gene": "MUC16",
          "Chr": "chr19",
          "Start": "9005526",
          "End": "9005766",
          "MinCoverage": "136",
          "MaxCoverage": "4400",
          "TotCoverage": "127739",
          "MeanCoverage": "532.2458333333333"
        },
        {
          "Gene": "MUC16",
          "Chr": "chr19",
          "Start": "9006257",
          "End": "9006497",
          "MinCoverage": "48",
          "MaxCoverage": "8560",
          "TotCoverage": "122488",
          "MeanCoverage": "510.3666666666667"
        },
        {
          "Gene": "MUC16",
          "Chr": "chr19",
          "Start": "9006587",
          "End": "9006827",
          "MinCoverage": "210",
          "MaxCoverage": "3060",
          "TotCoverage": "107202",
          "MeanCoverage": "446.675"
        },
        {
          "Gene": "MUC16",
          "Chr": "chr19",
          "Start": "9008108",
          "End": "9008408",
          "MinCoverage": "262",
          "MaxCoverage": "6264",
          "TotCoverage": "190450",
          "MeanCoverage": "634.8333333333334"
        },
        {
          "Gene": "MUC16",
          "Chr": "chr19",
          "Start": "9009180",
          "End": "9009420",
          "MinCoverage": "236",
          "MaxCoverage": "3475",
          "TotCoverage": "139017",
          "MeanCoverage": "579.2375"
        },
        {
          "Gene": "MUC16",
          "Chr": "chr19",
          "Start": "9019187",
          "End": "9019427",
          "MinCoverage": "92",
          "MaxCoverage": "7501",
          "TotCoverage": "81123",
          "MeanCoverage": "338.0125"
        },
        {
          "Gene": "MUC16",
          "Chr": "chr19",
          "Start": "9019920",
          "End": "9020220",
          "MinCoverage": "152",
          "MaxCoverage": "5382",
          "TotCoverage": "136572",
          "MeanCoverage": "455.24"
        },
        {
          "Gene": "MUC16",
          "Chr": "chr19",
          "Start": "9080383",
          "End": "9080623",
          "MinCoverage": "227",
          "MaxCoverage": "5440",
          "TotCoverage": "85360",
          "MeanCoverage": "355.6666666666667"
        },
        {
          "Gene": "SMARCA4",
          "Chr": "chr19",
          "Start": "11094742",
          "End": "11095102",
          "MinCoverage": "1155",
          "MaxCoverage": "11007",
          "TotCoverage": "971085",
          "MeanCoverage": "2697.4583333333335"
        },
        {
          "Gene": "SMARCA4",
          "Chr": "chr19",
          "Start": "11095894",
          "End": "11096134",
          "MinCoverage": "1314",
          "MaxCoverage": "7062",
          "TotCoverage": "512360",
          "MeanCoverage": "2134.8333333333335"
        },
        {
          "Gene": "SMARCA4",
          "Chr": "chr19",
          "Start": "11096795",
          "End": "11097401",
          "MinCoverage": "376",
          "MaxCoverage": "10191",
          "TotCoverage": "1545035",
          "MeanCoverage": "2549.562706270627"
        },
        {
          "Gene": "SMARCA4",
          "Chr": "chr19",
          "Start": "11097509",
          "End": "11097749",
          "MinCoverage": "359",
          "MaxCoverage": "3224",
          "TotCoverage": "226525",
          "MeanCoverage": "943.8541666666666"
        },
        {
          "Gene": "SMARCA4",
          "Chr": "chr19",
          "Start": "11098290",
          "End": "11098650",
          "MinCoverage": "1230",
          "MaxCoverage": "20010",
          "TotCoverage": "1653955",
          "MeanCoverage": "4594.319444444444"
        },
        {
          "Gene": "SMARCA4",
          "Chr": "chr19",
          "Start": "11099935",
          "End": "11100175",
          "MinCoverage": "667",
          "MaxCoverage": "6582",
          "TotCoverage": "415734",
          "MeanCoverage": "1732.225"
        },
        {
          "Gene": "SMARCA4",
          "Chr": "chr19",
          "Start": "11101762",
          "End": "11102062",
          "MinCoverage": "169",
          "MaxCoverage": "5247",
          "TotCoverage": "360840",
          "MeanCoverage": "1202.8"
        },
        {
          "Gene": "SMARCA4",
          "Chr": "chr19",
          "Start": "11105440",
          "End": "11105740",
          "MinCoverage": "422",
          "MaxCoverage": "8940",
          "TotCoverage": "418292",
          "MeanCoverage": "1394.3066666666666"
        },
        {
          "Gene": "SMARCA4",
          "Chr": "chr19",
          "Start": "11106805",
          "End": "11107314",
          "MinCoverage": "365",
          "MaxCoverage": "9164",
          "TotCoverage": "773605",
          "MeanCoverage": "1519.852652259332"
        },
        {
          "Gene": "SMARCA4",
          "Chr": "chr19",
          "Start": "11113649",
          "End": "11113889",
          "MinCoverage": "226",
          "MaxCoverage": "7638",
          "TotCoverage": "230339",
          "MeanCoverage": "959.7458333333333"
        },
        {
          "Gene": "SMARCA4",
          "Chr": "chr19",
          "Start": "11113924",
          "End": "11114164",
          "MinCoverage": "419",
          "MaxCoverage": "6075",
          "TotCoverage": "199862",
          "MeanCoverage": "832.7583333333333"
        },
        {
          "Gene": "SMARCA4",
          "Chr": "chr19",
          "Start": "11118518",
          "End": "11118758",
          "MinCoverage": "171",
          "MaxCoverage": "3864",
          "TotCoverage": "127886",
          "MeanCoverage": "532.8583333333333"
        },
        {
          "Gene": "SMARCA4",
          "Chr": "chr19",
          "Start": "11120981",
          "End": "11121281",
          "MinCoverage": "309",
          "MaxCoverage": "6888",
          "TotCoverage": "263807",
          "MeanCoverage": "879.3566666666667"
        },
        {
          "Gene": "SMARCA4",
          "Chr": "chr19",
          "Start": "11123371",
          "End": "11123851",
          "MinCoverage": "349",
          "MaxCoverage": "5859",
          "TotCoverage": "555437",
          "MeanCoverage": "1157.1604166666666"
        },
        {
          "Gene": "SMARCA4",
          "Chr": "chr19",
          "Start": "11129554",
          "End": "11130454",
          "MinCoverage": "554",
          "MaxCoverage": "10360",
          "TotCoverage": "1311828",
          "MeanCoverage": "1457.5866666666666"
        },
        {
          "Gene": "SMARCA4",
          "Chr": "chr19",
          "Start": "11131246",
          "End": "11131588",
          "MinCoverage": "83",
          "MaxCoverage": "6240",
          "TotCoverage": "307590",
          "MeanCoverage": "899.3859649122807"
        },
        {
          "Gene": "SMARCA4",
          "Chr": "chr19",
          "Start": "11131634",
          "End": "11132714",
          "MinCoverage": "400",
          "MaxCoverage": "13484",
          "TotCoverage": "2246379",
          "MeanCoverage": "2079.9805555555554"
        },
        {
          "Gene": "SMARCA4",
          "Chr": "chr19",
          "Start": "11134130",
          "End": "11134370",
          "MinCoverage": "359",
          "MaxCoverage": "4485",
          "TotCoverage": "247069",
          "MeanCoverage": "1029.4541666666667"
        },
        {
          "Gene": "SMARCA4",
          "Chr": "chr19",
          "Start": "11134940",
          "End": "11135180",
          "MinCoverage": "524",
          "MaxCoverage": "5385",
          "TotCoverage": "326849",
          "MeanCoverage": "1361.8708333333334"
        },
        {
          "Gene": "SMARCA4",
          "Chr": "chr19",
          "Start": "11136020",
          "End": "11136260",
          "MinCoverage": "1066",
          "MaxCoverage": "13929",
          "TotCoverage": "774104",
          "MeanCoverage": "3225.4333333333334"
        },
        {
          "Gene": "SMARCA4",
          "Chr": "chr19",
          "Start": "11138392",
          "End": "11138692",
          "MinCoverage": "380",
          "MaxCoverage": "9900",
          "TotCoverage": "407694",
          "MeanCoverage": "1358.98"
        },
        {
          "Gene": "SMARCA4",
          "Chr": "chr19",
          "Start": "11143899",
          "End": "11144259",
          "MinCoverage": "1006",
          "MaxCoverage": "10587",
          "TotCoverage": "1150029",
          "MeanCoverage": "3194.525"
        },
        {
          "Gene": "SMARCA4",
          "Chr": "chr19",
          "Start": "11144371",
          "End": "11144611",
          "MinCoverage": "357",
          "MaxCoverage": "2901",
          "TotCoverage": "178758",
          "MeanCoverage": "744.825"
        },
        {
          "Gene": "SMARCA4",
          "Chr": "chr19",
          "Start": "11144717",
          "End": "11144957",
          "MinCoverage": "685",
          "MaxCoverage": "6438",
          "TotCoverage": "375254",
          "MeanCoverage": "1563.5583333333334"
        },
        {
          "Gene": "SMARCA4",
          "Chr": "chr19",
          "Start": "11145518",
          "End": "11145878",
          "MinCoverage": "253",
          "MaxCoverage": "6900",
          "TotCoverage": "593297",
          "MeanCoverage": "1648.0472222222222"
        },
        {
          "Gene": "SMARCA4",
          "Chr": "chr19",
          "Start": "11151894",
          "End": "11152314",
          "MinCoverage": "587",
          "MaxCoverage": "18256",
          "TotCoverage": "1069938",
          "MeanCoverage": "2547.4714285714285"
        },
        {
          "Gene": "SMARCA4",
          "Chr": "chr19",
          "Start": "11168864",
          "End": "11169104",
          "MinCoverage": "155",
          "MaxCoverage": "2916",
          "TotCoverage": "161934",
          "MeanCoverage": "674.725"
        },
        {
          "Gene": "SMARCA4",
          "Chr": "chr19",
          "Start": "11169394",
          "End": "11169634",
          "MinCoverage": "738",
          "MaxCoverage": "6386",
          "TotCoverage": "519415",
          "MeanCoverage": "2164.2291666666665"
        },
        {
          "Gene": "SMARCA4",
          "Chr": "chr19",
          "Start": "11170332",
          "End": "11170941",
          "MinCoverage": "170",
          "MaxCoverage": "10314",
          "TotCoverage": "958553",
          "MeanCoverage": "1573.9786535303776"
        },
        {
          "Gene": "SMARCA4",
          "Chr": "chr19",
          "Start": "11172408",
          "End": "11173008",
          "MinCoverage": "415",
          "MaxCoverage": "7520",
          "TotCoverage": "575167",
          "MeanCoverage": "958.6116666666667"
        },
        {
          "Gene": "JAK3",
          "Chr": "chr19",
          "Start": "17940481",
          "End": "17941114",
          "MinCoverage": "135",
          "MaxCoverage": "13788",
          "TotCoverage": "918646",
          "MeanCoverage": "1451.257503949447"
        },
        {
          "Gene": "JAK3",
          "Chr": "chr19",
          "Start": "17941250",
          "End": "17941490",
          "MinCoverage": "87",
          "MaxCoverage": "1868",
          "TotCoverage": "71658",
          "MeanCoverage": "298.575"
        },
        {
          "Gene": "JAK3",
          "Chr": "chr19",
          "Start": "17941901",
          "End": "17942297",
          "MinCoverage": "34",
          "MaxCoverage": "5604",
          "TotCoverage": "468692",
          "MeanCoverage": "1183.5656565656566"
        },
        {
          "Gene": "JAK3",
          "Chr": "chr19",
          "Start": "17942424",
          "End": "17942664",
          "MinCoverage": "588",
          "MaxCoverage": "4224",
          "TotCoverage": "331099",
          "MeanCoverage": "1379.5791666666667"
        },
        {
          "Gene": "JAK3",
          "Chr": "chr19",
          "Start": "17943262",
          "End": "17943802",
          "MinCoverage": "179",
          "MaxCoverage": "8785",
          "TotCoverage": "669310",
          "MeanCoverage": "1239.462962962963"
        },
        {
          "Gene": "JAK3",
          "Chr": "chr19",
          "Start": "17945304",
          "End": "17946082",
          "MinCoverage": "357",
          "MaxCoverage": "13528",
          "TotCoverage": "1454618",
          "MeanCoverage": "1869.688946015424"
        },
        {
          "Gene": "JAK3",
          "Chr": "chr19",
          "Start": "17946676",
          "End": "17946916",
          "MinCoverage": "169",
          "MaxCoverage": "2133",
          "TotCoverage": "58625",
          "MeanCoverage": "244.27083333333334"
        },
        {
          "Gene": "JAK3",
          "Chr": "chr19",
          "Start": "17947427",
          "End": "17948131",
          "MinCoverage": "127",
          "MaxCoverage": "6654",
          "TotCoverage": "786590",
          "MeanCoverage": "1117.315340909091"
        },
        {
          "Gene": "JAK3",
          "Chr": "chr19",
          "Start": "17948686",
          "End": "17948926",
          "MinCoverage": "467",
          "MaxCoverage": "10965",
          "TotCoverage": "322938",
          "MeanCoverage": "1345.575"
        },
        {
          "Gene": "JAK3",
          "Chr": "chr19",
          "Start": "17949015",
          "End": "17949255",
          "MinCoverage": "171",
          "MaxCoverage": "2401",
          "TotCoverage": "67518",
          "MeanCoverage": "281.325"
        },
        {
          "Gene": "JAK3",
          "Chr": "chr19",
          "Start": "17949925",
          "End": "17950165",
          "MinCoverage": "235",
          "MaxCoverage": "3444",
          "TotCoverage": "87630",
          "MeanCoverage": "365.125"
        },
        {
          "Gene": "JAK3",
          "Chr": "chr19",
          "Start": "17950228",
          "End": "17950528",
          "MinCoverage": "215",
          "MaxCoverage": "6209",
          "TotCoverage": "249328",
          "MeanCoverage": "831.0933333333334"
        },
        {
          "Gene": "JAK3",
          "Chr": "chr19",
          "Start": "17950905",
          "End": "17951243",
          "MinCoverage": "66",
          "MaxCoverage": "9610",
          "TotCoverage": "442099",
          "MeanCoverage": "1307.9852071005917"
        },
        {
          "Gene": "JAK3",
          "Chr": "chr19",
          "Start": "17952144",
          "End": "17952624",
          "MinCoverage": "179",
          "MaxCoverage": "10893",
          "TotCoverage": "708000",
          "MeanCoverage": "1475.0"
        },
        {
          "Gene": "JAK3",
          "Chr": "chr19",
          "Start": "17953072",
          "End": "17954032",
          "MinCoverage": "529",
          "MaxCoverage": "8292",
          "TotCoverage": "1441185",
          "MeanCoverage": "1501.234375"
        },
        {
          "Gene": "JAK3",
          "Chr": "chr19",
          "Start": "17954124",
          "End": "17954364",
          "MinCoverage": "266",
          "MaxCoverage": "2385",
          "TotCoverage": "125575",
          "MeanCoverage": "523.2291666666666"
        },
        {
          "Gene": "JAK3",
          "Chr": "chr19",
          "Start": "17954527",
          "End": "17954767",
          "MinCoverage": "156",
          "MaxCoverage": "3264",
          "TotCoverage": "110678",
          "MeanCoverage": "461.15833333333336"
        },
        {
          "Gene": "JAK3",
          "Chr": "chr19",
          "Start": "17954976",
          "End": "17955336",
          "MinCoverage": "106",
          "MaxCoverage": "8060",
          "TotCoverage": "411902",
          "MeanCoverage": "1144.1722222222222"
        },
        {
          "Gene": "chr19:29797000-29797590",
          "Chr": "chr19",
          "Start": "29796999",
          "End": "29797590",
          "MinCoverage": "67",
          "MaxCoverage": "12232",
          "TotCoverage": "524947",
          "MeanCoverage": "888.2351945854484"
        },
        {
          "Gene": "POP4",
          "Chr": "chr19",
          "Start": "30106592",
          "End": "30106772",
          "MinCoverage": "287",
          "MaxCoverage": "3032",
          "TotCoverage": "83404",
          "MeanCoverage": "463.35555555555555"
        },
        {
          "Gene": "chr19:31883816-31883995",
          "Chr": "chr19",
          "Start": "31883815",
          "End": "31883995",
          "MinCoverage": "131",
          "MaxCoverage": "7470",
          "TotCoverage": "53741",
          "MeanCoverage": "298.56111111111113"
        },
        {
          "Gene": "PEPD",
          "Chr": "chr19",
          "Start": "34011157",
          "End": "34011337",
          "MinCoverage": "107",
          "MaxCoverage": "6919",
          "TotCoverage": "62607",
          "MeanCoverage": "347.81666666666666"
        },
        {
          "Gene": "FXYD3",
          "Chr": "chr19",
          "Start": "35615088",
          "End": "35615268",
          "MinCoverage": "811",
          "MaxCoverage": "12870",
          "TotCoverage": "277554",
          "MeanCoverage": "1541.9666666666667"
        },
        {
          "Gene": "ZNF573",
          "Chr": "chr19",
          "Start": "38229287",
          "End": "38229467",
          "MinCoverage": "322",
          "MaxCoverage": "8710",
          "TotCoverage": "149439",
          "MeanCoverage": "830.2166666666667"
        },
        {
          "Gene": "RPS16",
          "Chr": "chr19",
          "Start": "39926418",
          "End": "39926598",
          "MinCoverage": "270",
          "MaxCoverage": "4450",
          "TotCoverage": "117721",
          "MeanCoverage": "654.0055555555556"
        },
        {
          "Gene": "AKT2",
          "Chr": "chr19",
          "Start": "40740348",
          "End": "40741333",
          "MinCoverage": "811",
          "MaxCoverage": "11292",
          "TotCoverage": "2375947",
          "MeanCoverage": "2412.128934010152"
        },
        {
          "Gene": "AKT2",
          "Chr": "chr19",
          "Start": "40741723",
          "End": "40742083",
          "MinCoverage": "314",
          "MaxCoverage": "10500",
          "TotCoverage": "838461",
          "MeanCoverage": "2329.0583333333334"
        },
        {
          "Gene": "AKT2",
          "Chr": "chr19",
          "Start": "40742107",
          "End": "40742347",
          "MinCoverage": "1037",
          "MaxCoverage": "7964",
          "TotCoverage": "574123",
          "MeanCoverage": "2392.179166666667"
        },
        {
          "Gene": "AKT2",
          "Chr": "chr19",
          "Start": "40744725",
          "End": "40744965",
          "MinCoverage": "444",
          "MaxCoverage": "9795",
          "TotCoverage": "549710",
          "MeanCoverage": "2290.4583333333335"
        },
        {
          "Gene": "AKT2",
          "Chr": "chr19",
          "Start": "40745426",
          "End": "40746086",
          "MinCoverage": "307",
          "MaxCoverage": "17178",
          "TotCoverage": "1218892",
          "MeanCoverage": "1846.8060606060606"
        },
        {
          "Gene": "AKT2",
          "Chr": "chr19",
          "Start": "40747790",
          "End": "40748030",
          "MinCoverage": "710",
          "MaxCoverage": "14324",
          "TotCoverage": "684339",
          "MeanCoverage": "2851.4125"
        },
        {
          "Gene": "AKT2",
          "Chr": "chr19",
          "Start": "40748372",
          "End": "40748792",
          "MinCoverage": "603",
          "MaxCoverage": "9878",
          "TotCoverage": "1171410",
          "MeanCoverage": "2789.0714285714284"
        },
        {
          "Gene": "AKT2",
          "Chr": "chr19",
          "Start": "40748992",
          "End": "40749283",
          "MinCoverage": "447",
          "MaxCoverage": "9465",
          "TotCoverage": "361210",
          "MeanCoverage": "1241.2714776632301"
        },
        {
          "Gene": "AKT2",
          "Chr": "chr19",
          "Start": "40761000",
          "End": "40761240",
          "MinCoverage": "608",
          "MaxCoverage": "6650",
          "TotCoverage": "342746",
          "MeanCoverage": "1428.1083333333333"
        },
        {
          "Gene": "AKT2",
          "Chr": "chr19",
          "Start": "40762776",
          "End": "40763016",
          "MinCoverage": "708",
          "MaxCoverage": "8620",
          "TotCoverage": "389935",
          "MeanCoverage": "1624.7291666666667"
        },
        {
          "Gene": "AKT2",
          "Chr": "chr19",
          "Start": "40771073",
          "End": "40771313",
          "MinCoverage": "529",
          "MaxCoverage": "6500",
          "TotCoverage": "283032",
          "MeanCoverage": "1179.3"
        },
        {
          "Gene": "SERTAD1",
          "Chr": "chr19",
          "Start": "40931626",
          "End": "40931806",
          "MinCoverage": "76",
          "MaxCoverage": "1330",
          "TotCoverage": "41466",
          "MeanCoverage": "230.36666666666667"
        },
        {
          "Gene": "chr19:42152952-42153341",
          "Chr": "chr19",
          "Start": "42152951",
          "End": "42153341",
          "MinCoverage": "236",
          "MaxCoverage": "4837",
          "TotCoverage": "182052",
          "MeanCoverage": "466.8"
        },
        {
          "Gene": "IRGQ",
          "Chr": "chr19",
          "Start": "44090104",
          "End": "44090284",
          "MinCoverage": "32",
          "MaxCoverage": "4368",
          "TotCoverage": "29733",
          "MeanCoverage": "165.18333333333334"
        },
        {
          "Gene": "KLC3",
          "Chr": "chr19",
          "Start": "45853056",
          "End": "45853416",
          "MinCoverage": "286",
          "MaxCoverage": "2937",
          "TotCoverage": "254419",
          "MeanCoverage": "706.7194444444444"
        },
        {
          "Gene": "ERCC2,KLC3",
          "Chr": "chr19",
          "Start": "45853512",
          "End": "45855012",
          "MinCoverage": "96",
          "MaxCoverage": "7812",
          "TotCoverage": "1135819",
          "MeanCoverage": "757.2126666666667"
        },
        {
          "Gene": "ERCC2",
          "Chr": "chr19",
          "Start": "45855418",
          "End": "45855658",
          "MinCoverage": "136",
          "MaxCoverage": "1744",
          "TotCoverage": "83350",
          "MeanCoverage": "347.2916666666667"
        },
        {
          "Gene": "ERCC2",
          "Chr": "chr19",
          "Start": "45855715",
          "End": "45856128",
          "MinCoverage": "154",
          "MaxCoverage": "4191",
          "TotCoverage": "337055",
          "MeanCoverage": "816.1138014527845"
        },
        {
          "Gene": "ERCC2",
          "Chr": "chr19",
          "Start": "45856286",
          "End": "45856635",
          "MinCoverage": "166",
          "MaxCoverage": "4220",
          "TotCoverage": "200541",
          "MeanCoverage": "574.6160458452722"
        },
        {
          "Gene": "ERCC2",
          "Chr": "chr19",
          "Start": "45857928",
          "End": "45858168",
          "MinCoverage": "224",
          "MaxCoverage": "3236",
          "TotCoverage": "133531",
          "MeanCoverage": "556.3791666666667"
        },
        {
          "Gene": "ERCC2",
          "Chr": "chr19",
          "Start": "45858864",
          "End": "45859044",
          "MinCoverage": "478",
          "MaxCoverage": "4940",
          "TotCoverage": "134828",
          "MeanCoverage": "749.0444444444445"
        },
        {
          "Gene": "ERCC2",
          "Chr": "chr19",
          "Start": "45860488",
          "End": "45860668",
          "MinCoverage": "126",
          "MaxCoverage": "1432",
          "TotCoverage": "63288",
          "MeanCoverage": "351.6"
        },
        {
          "Gene": "ERCC2",
          "Chr": "chr19",
          "Start": "45860716",
          "End": "45861316",
          "MinCoverage": "144",
          "MaxCoverage": "10925",
          "TotCoverage": "750210",
          "MeanCoverage": "1250.35"
        },
        {
          "Gene": "ERCC2",
          "Chr": "chr19",
          "Start": "45861614",
          "End": "45861974",
          "MinCoverage": "205",
          "MaxCoverage": "6066",
          "TotCoverage": "420882",
          "MeanCoverage": "1169.1166666666666"
        },
        {
          "Gene": "ERCC2",
          "Chr": "chr19",
          "Start": "45864772",
          "End": "45865192",
          "MinCoverage": "151",
          "MaxCoverage": "5500",
          "TotCoverage": "377944",
          "MeanCoverage": "899.8666666666667"
        },
        {
          "Gene": "ERCC2",
          "Chr": "chr19",
          "Start": "45866964",
          "End": "45867430",
          "MinCoverage": "31",
          "MaxCoverage": "2156",
          "TotCoverage": "129863",
          "MeanCoverage": "278.67596566523605"
        },
        {
          "Gene": "ERCC2",
          "Chr": "chr19",
          "Start": "45867450",
          "End": "45867863",
          "MinCoverage": "107",
          "MaxCoverage": "1875",
          "TotCoverage": "132113",
          "MeanCoverage": "319.8861985472155"
        },
        {
          "Gene": "ERCC2",
          "Chr": "chr19",
          "Start": "45868063",
          "End": "45868243",
          "MinCoverage": "229",
          "MaxCoverage": "2100",
          "TotCoverage": "83742",
          "MeanCoverage": "465.23333333333335"
        },
        {
          "Gene": "ERCC2",
          "Chr": "chr19",
          "Start": "45868267",
          "End": "45868447",
          "MinCoverage": "174",
          "MaxCoverage": "2372",
          "TotCoverage": "77748",
          "MeanCoverage": "431.93333333333334"
        },
        {
          "Gene": "ERCC2",
          "Chr": "chr19",
          "Start": "45871855",
          "End": "45872035",
          "MinCoverage": "168",
          "MaxCoverage": "1710",
          "TotCoverage": "45943",
          "MeanCoverage": "255.23888888888888"
        },
        {
          "Gene": "ERCC2",
          "Chr": "chr19",
          "Start": "45872176",
          "End": "45872416",
          "MinCoverage": "422",
          "MaxCoverage": "15651",
          "TotCoverage": "368122",
          "MeanCoverage": "1533.8416666666667"
        },
        {
          "Gene": "ERCC2",
          "Chr": "chr19",
          "Start": "45873373",
          "End": "45874153",
          "MinCoverage": "73",
          "MaxCoverage": "2996",
          "TotCoverage": "368353",
          "MeanCoverage": "472.2474358974359"
        },
        {
          "Gene": "CD3EAP,ERCC1",
          "Chr": "chr19",
          "Start": "45912867",
          "End": "45913047",
          "MinCoverage": "131",
          "MaxCoverage": "2436",
          "TotCoverage": "74301",
          "MeanCoverage": "412.78333333333336"
        },
        {
          "Gene": "ERCC1",
          "Chr": "chr19",
          "Start": "45916814",
          "End": "45917054",
          "MinCoverage": "209",
          "MaxCoverage": "3720",
          "TotCoverage": "120882",
          "MeanCoverage": "503.675"
        },
        {
          "Gene": "ERCC1",
          "Chr": "chr19",
          "Start": "45917166",
          "End": "45917346",
          "MinCoverage": "68",
          "MaxCoverage": "1998",
          "TotCoverage": "23542",
          "MeanCoverage": "130.7888888888889"
        },
        {
          "Gene": "ERCC1",
          "Chr": "chr19",
          "Start": "45918078",
          "End": "45918258",
          "MinCoverage": "176",
          "MaxCoverage": "1520",
          "TotCoverage": "58326",
          "MeanCoverage": "324.03333333333336"
        },
        {
          "Gene": "ERCC1",
          "Chr": "chr19",
          "Start": "45920026",
          "End": "45920206",
          "MinCoverage": "135",
          "MaxCoverage": "1624",
          "TotCoverage": "54451",
          "MeanCoverage": "302.50555555555553"
        },
        {
          "Gene": "ERCC1",
          "Chr": "chr19",
          "Start": "45922315",
          "End": "45922495",
          "MinCoverage": "129",
          "MaxCoverage": "2348",
          "TotCoverage": "74380",
          "MeanCoverage": "413.22222222222223"
        },
        {
          "Gene": "ERCC1",
          "Chr": "chr19",
          "Start": "45922641",
          "End": "45922821",
          "MinCoverage": "118",
          "MaxCoverage": "1314",
          "TotCoverage": "55028",
          "MeanCoverage": "305.7111111111111"
        },
        {
          "Gene": "ERCC1",
          "Chr": "chr19",
          "Start": "45923513",
          "End": "45923753",
          "MinCoverage": "405",
          "MaxCoverage": "4356",
          "TotCoverage": "257002",
          "MeanCoverage": "1070.8416666666667"
        },
        {
          "Gene": "ERCC1",
          "Chr": "chr19",
          "Start": "45924423",
          "End": "45924663",
          "MinCoverage": "67",
          "MaxCoverage": "2335",
          "TotCoverage": "72786",
          "MeanCoverage": "303.275"
        },
        {
          "Gene": "ERCC1",
          "Chr": "chr19",
          "Start": "45926459",
          "End": "45926699",
          "MinCoverage": "182",
          "MaxCoverage": "4205",
          "TotCoverage": "143344",
          "MeanCoverage": "597.2666666666667"
        },
        {
          "Gene": "PPP5D1",
          "Chr": "chr19",
          "Start": "47010880",
          "End": "47011369",
          "MinCoverage": "39",
          "MaxCoverage": "5425",
          "TotCoverage": "220855",
          "MeanCoverage": "451.64621676891613"
        },
        {
          "Gene": "CALM3",
          "Chr": "chr19",
          "Start": "47112557",
          "End": "47112737",
          "MinCoverage": "588",
          "MaxCoverage": "10416",
          "TotCoverage": "148783",
          "MeanCoverage": "826.5722222222222"
        },
        {
          "Gene": "SLC8A2",
          "Chr": "chr19",
          "Start": "47973441",
          "End": "47973931",
          "MinCoverage": "229",
          "MaxCoverage": "8202",
          "TotCoverage": "308719",
          "MeanCoverage": "630.0387755102041"
        },
        {
          "Gene": "EMP3",
          "Chr": "chr19",
          "Start": "48833665",
          "End": "48833941",
          "MinCoverage": "231",
          "MaxCoverage": "6132",
          "TotCoverage": "325955",
          "MeanCoverage": "1180.9963768115942"
        },
        {
          "Gene": "LHB",
          "Chr": "chr19",
          "Start": "49519782",
          "End": "49519962",
          "MinCoverage": "126",
          "MaxCoverage": "1908",
          "TotCoverage": "53226",
          "MeanCoverage": "295.7"
        },
        {
          "Gene": "POLD1",
          "Chr": "chr19",
          "Start": "50887433",
          "End": "50887673",
          "MinCoverage": "18",
          "MaxCoverage": "840",
          "TotCoverage": "14699",
          "MeanCoverage": "61.24583333333333"
        },
        {
          "Gene": "POLD1",
          "Chr": "chr19",
          "Start": "50890868",
          "End": "50891108",
          "MinCoverage": "653",
          "MaxCoverage": "6258",
          "TotCoverage": "271797",
          "MeanCoverage": "1132.4875"
        },
        {
          "Gene": "POLD1",
          "Chr": "chr19",
          "Start": "50897185",
          "End": "50897365",
          "MinCoverage": "180",
          "MaxCoverage": "5005",
          "TotCoverage": "77309",
          "MeanCoverage": "429.49444444444447"
        },
        {
          "Gene": "POLD1",
          "Chr": "chr19",
          "Start": "50898379",
          "End": "50898559",
          "MinCoverage": "251",
          "MaxCoverage": "3816",
          "TotCoverage": "77771",
          "MeanCoverage": "432.06111111111113"
        },
        {
          "Gene": "POLD1",
          "Chr": "chr19",
          "Start": "50902087",
          "End": "50902329",
          "MinCoverage": "233",
          "MaxCoverage": "3472",
          "TotCoverage": "166140",
          "MeanCoverage": "686.5289256198347"
        },
        {
          "Gene": "POLD1",
          "Chr": "chr19",
          "Start": "50902564",
          "End": "50902804",
          "MinCoverage": "524",
          "MaxCoverage": "9471",
          "TotCoverage": "452809",
          "MeanCoverage": "1886.7041666666667"
        },
        {
          "Gene": "POLD1",
          "Chr": "chr19",
          "Start": "50904987",
          "End": "50906053",
          "MinCoverage": "832",
          "MaxCoverage": "12012",
          "TotCoverage": "2943187",
          "MeanCoverage": "2760.9634146341464"
        },
        {
          "Gene": "POLD1",
          "Chr": "chr19",
          "Start": "50906272",
          "End": "50906512",
          "MinCoverage": "740",
          "MaxCoverage": "6048",
          "TotCoverage": "392760",
          "MeanCoverage": "1636.5"
        },
        {
          "Gene": "POLD1",
          "Chr": "chr19",
          "Start": "50906681",
          "End": "50906921",
          "MinCoverage": "860",
          "MaxCoverage": "11811",
          "TotCoverage": "656743",
          "MeanCoverage": "2736.429166666667"
        },
        {
          "Gene": "POLD1",
          "Chr": "chr19",
          "Start": "50909388",
          "End": "50909838",
          "MinCoverage": "1284",
          "MaxCoverage": "7402",
          "TotCoverage": "1108110",
          "MeanCoverage": "2462.4666666666667"
        },
        {
          "Gene": "POLD1",
          "Chr": "chr19",
          "Start": "50910219",
          "End": "50910459",
          "MinCoverage": "595",
          "MaxCoverage": "3362",
          "TotCoverage": "293809",
          "MeanCoverage": "1224.2041666666667"
        },
        {
          "Gene": "POLD1",
          "Chr": "chr19",
          "Start": "50910522",
          "End": "50910710",
          "MinCoverage": "578",
          "MaxCoverage": "7515",
          "TotCoverage": "337324",
          "MeanCoverage": "1794.276595744681"
        },
        {
          "Gene": "POLD1",
          "Chr": "chr19",
          "Start": "50911940",
          "End": "50912180",
          "MinCoverage": "941",
          "MaxCoverage": "11295",
          "TotCoverage": "623172",
          "MeanCoverage": "2596.55"
        },
        {
          "Gene": "POLD1",
          "Chr": "chr19",
          "Start": "50912315",
          "End": "50912555",
          "MinCoverage": "695",
          "MaxCoverage": "6810",
          "TotCoverage": "375828",
          "MeanCoverage": "1565.95"
        },
        {
          "Gene": "POLD1",
          "Chr": "chr19",
          "Start": "50912729",
          "End": "50912969",
          "MinCoverage": "318",
          "MaxCoverage": "6032",
          "TotCoverage": "417210",
          "MeanCoverage": "1738.375"
        },
        {
          "Gene": "POLD1",
          "Chr": "chr19",
          "Start": "50916640",
          "End": "50916820",
          "MinCoverage": "1047",
          "MaxCoverage": "6356",
          "TotCoverage": "332600",
          "MeanCoverage": "1847.7777777777778"
        },
        {
          "Gene": "POLD1",
          "Chr": "chr19",
          "Start": "50916947",
          "End": "50917187",
          "MinCoverage": "185",
          "MaxCoverage": "7236",
          "TotCoverage": "293130",
          "MeanCoverage": "1221.375"
        },
        {
          "Gene": "POLD1",
          "Chr": "chr19",
          "Start": "50918036",
          "End": "50918276",
          "MinCoverage": "797",
          "MaxCoverage": "7635",
          "TotCoverage": "496856",
          "MeanCoverage": "2070.233333333333"
        },
        {
          "Gene": "POLD1",
          "Chr": "chr19",
          "Start": "50918656",
          "End": "50918896",
          "MinCoverage": "634",
          "MaxCoverage": "5883",
          "TotCoverage": "347346",
          "MeanCoverage": "1447.275"
        },
        {
          "Gene": "POLD1",
          "Chr": "chr19",
          "Start": "50918957",
          "End": "50920043",
          "MinCoverage": "393",
          "MaxCoverage": "8888",
          "TotCoverage": "1497114",
          "MeanCoverage": "1378.5580110497237"
        },
        {
          "Gene": "POLD1",
          "Chr": "chr19",
          "Start": "50920161",
          "End": "50920567",
          "MinCoverage": "90",
          "MaxCoverage": "2271",
          "TotCoverage": "195985",
          "MeanCoverage": "482.7216748768473"
        },
        {
          "Gene": "POLD1",
          "Chr": "chr19",
          "Start": "50921031",
          "End": "50921305",
          "MinCoverage": "640",
          "MaxCoverage": "6998",
          "TotCoverage": "610789",
          "MeanCoverage": "2229.1569343065694"
        },
        {
          "Gene": "KLK3",
          "Chr": "chr19",
          "Start": "51359406",
          "End": "51359586",
          "MinCoverage": "560",
          "MaxCoverage": "4688",
          "TotCoverage": "175066",
          "MeanCoverage": "972.5888888888888"
        },
        {
          "Gene": "PPP2R1A",
          "Chr": "chr19",
          "Start": "52704278",
          "End": "52705361",
          "MinCoverage": "80",
          "MaxCoverage": "9366",
          "TotCoverage": "793427",
          "MeanCoverage": "732.6195752539243"
        },
        {
          "Gene": "PPP2R1A",
          "Chr": "chr19",
          "Start": "52709145",
          "End": "52709385",
          "MinCoverage": "249",
          "MaxCoverage": "2700",
          "TotCoverage": "131022",
          "MeanCoverage": "545.925"
        },
        {
          "Gene": "PPP2R1A",
          "Chr": "chr19",
          "Start": "52714448",
          "End": "52714808",
          "MinCoverage": "150",
          "MaxCoverage": "18309",
          "TotCoverage": "992077",
          "MeanCoverage": "2755.7694444444446"
        },
        {
          "Gene": "PPP2R1A",
          "Chr": "chr19",
          "Start": "52715827",
          "End": "52716435",
          "MinCoverage": "568",
          "MaxCoverage": "7892",
          "TotCoverage": "1022688",
          "MeanCoverage": "1682.0526315789473"
        },
        {
          "Gene": "PPP2R1A",
          "Chr": "chr19",
          "Start": "52718936",
          "End": "52719411",
          "MinCoverage": "159",
          "MaxCoverage": "6378",
          "TotCoverage": "580419",
          "MeanCoverage": "1221.9347368421052"
        },
        {
          "Gene": "PPP2R1A",
          "Chr": "chr19",
          "Start": "52719728",
          "End": "52719968",
          "MinCoverage": "564",
          "MaxCoverage": "7464",
          "TotCoverage": "236004",
          "MeanCoverage": "983.35"
        },
        {
          "Gene": "PPP2R1A",
          "Chr": "chr19",
          "Start": "52722880",
          "End": "52723180",
          "MinCoverage": "172",
          "MaxCoverage": "4080",
          "TotCoverage": "358841",
          "MeanCoverage": "1196.1366666666668"
        },
        {
          "Gene": "PPP2R1A",
          "Chr": "chr19",
          "Start": "52723351",
          "End": "52723591",
          "MinCoverage": "253",
          "MaxCoverage": "4182",
          "TotCoverage": "125125",
          "MeanCoverage": "521.3541666666666"
        },
        {
          "Gene": "PPP2R1A",
          "Chr": "chr19",
          "Start": "52724158",
          "End": "52724458",
          "MinCoverage": "733",
          "MaxCoverage": "8790",
          "TotCoverage": "407235",
          "MeanCoverage": "1357.45"
        },
        {
          "Gene": "PPP2R1A",
          "Chr": "chr19",
          "Start": "52725272",
          "End": "52725572",
          "MinCoverage": "296",
          "MaxCoverage": "4524",
          "TotCoverage": "253929",
          "MeanCoverage": "846.43"
        },
        {
          "Gene": "PPP2R1A",
          "Chr": "chr19",
          "Start": "52728895",
          "End": "52729135",
          "MinCoverage": "296",
          "MaxCoverage": "7464",
          "TotCoverage": "256347",
          "MeanCoverage": "1068.1125"
        },
        {
          "Gene": "PPP2R1A",
          "Chr": "chr19",
          "Start": "52729147",
          "End": "52729747",
          "MinCoverage": "374",
          "MaxCoverage": "6894",
          "TotCoverage": "674400",
          "MeanCoverage": "1124.0"
        },
        {
          "Gene": "ZNF701",
          "Chr": "chr19",
          "Start": "53073514",
          "End": "53073694",
          "MinCoverage": "267",
          "MaxCoverage": "4944",
          "TotCoverage": "108947",
          "MeanCoverage": "605.2611111111111"
        },
        {
          "Gene": "ZNF415",
          "Chr": "chr19",
          "Start": "53611099",
          "End": "53611279",
          "MinCoverage": "323",
          "MaxCoverage": "7452",
          "TotCoverage": "92321",
          "MeanCoverage": "512.8944444444444"
        },
        {
          "Gene": "CTB-167G5.5",
          "Chr": "chr19",
          "Start": "54105300",
          "End": "54105736",
          "MinCoverage": "20",
          "MaxCoverage": "4207",
          "TotCoverage": "114218",
          "MeanCoverage": "261.9678899082569"
        },
        {
          "Gene": "SSC5D",
          "Chr": "chr19",
          "Start": "56030337",
          "End": "56030517",
          "MinCoverage": "182",
          "MaxCoverage": "2590",
          "TotCoverage": "67691",
          "MeanCoverage": "376.06111111111113"
        },
        {
          "Gene": "chr19:59093149-59093328",
          "Chr": "chr19",
          "Start": "59093148",
          "End": "59093328",
          "MinCoverage": "310",
          "MaxCoverage": "2529",
          "TotCoverage": "111642",
          "MeanCoverage": "620.2333333333333"
        },
        {
          "Gene": "DNMT3A",
          "Chr": "chr2",
          "Start": "25455752",
          "End": "25457379",
          "MinCoverage": "192",
          "MaxCoverage": "18160",
          "TotCoverage": "2045429",
          "MeanCoverage": "1257.1782421634912"
        },
        {
          "Gene": "DNMT3A",
          "Chr": "chr2",
          "Start": "25458514",
          "End": "25458754",
          "MinCoverage": "642",
          "MaxCoverage": "11304",
          "TotCoverage": "404502",
          "MeanCoverage": "1685.425"
        },
        {
          "Gene": "DNMT3A",
          "Chr": "chr2",
          "Start": "25459719",
          "End": "25459959",
          "MinCoverage": "653",
          "MaxCoverage": "8740",
          "TotCoverage": "394456",
          "MeanCoverage": "1643.5666666666666"
        },
        {
          "Gene": "DNMT3A",
          "Chr": "chr2",
          "Start": "25461917",
          "End": "25462457",
          "MinCoverage": "353",
          "MaxCoverage": "9359",
          "TotCoverage": "742290",
          "MeanCoverage": "1374.611111111111"
        },
        {
          "Gene": "DNMT3A",
          "Chr": "chr2",
          "Start": "25463094",
          "End": "25463394",
          "MinCoverage": "541",
          "MaxCoverage": "6456",
          "TotCoverage": "297543",
          "MeanCoverage": "991.81"
        },
        {
          "Gene": "DNMT3A",
          "Chr": "chr2",
          "Start": "25463433",
          "End": "25463673",
          "MinCoverage": "228",
          "MaxCoverage": "5778",
          "TotCoverage": "178923",
          "MeanCoverage": "745.5125"
        },
        {
          "Gene": "DNMT3A",
          "Chr": "chr2",
          "Start": "25464353",
          "End": "25464653",
          "MinCoverage": "616",
          "MaxCoverage": "10515",
          "TotCoverage": "771766",
          "MeanCoverage": "2572.5533333333333"
        },
        {
          "Gene": "DNMT3A",
          "Chr": "chr2",
          "Start": "25466688",
          "End": "25466928",
          "MinCoverage": "736",
          "MaxCoverage": "4803",
          "TotCoverage": "337952",
          "MeanCoverage": "1408.1333333333334"
        },
        {
          "Gene": "DNMT3A",
          "Chr": "chr2",
          "Start": "25466965",
          "End": "25467265",
          "MinCoverage": "1841",
          "MaxCoverage": "10008",
          "TotCoverage": "946632",
          "MeanCoverage": "3155.44"
        },
        {
          "Gene": "DNMT3A",
          "Chr": "chr2",
          "Start": "25467344",
          "End": "25467584",
          "MinCoverage": "1068",
          "MaxCoverage": "10484",
          "TotCoverage": "493667",
          "MeanCoverage": "2056.945833333333"
        },
        {
          "Gene": "DNMT3A",
          "Chr": "chr2",
          "Start": "25468041",
          "End": "25468281",
          "MinCoverage": "315",
          "MaxCoverage": "6398",
          "TotCoverage": "268267",
          "MeanCoverage": "1117.7791666666667"
        },
        {
          "Gene": "DNMT3A",
          "Chr": "chr2",
          "Start": "25468823",
          "End": "25469243",
          "MinCoverage": "363",
          "MaxCoverage": "14349",
          "TotCoverage": "1157351",
          "MeanCoverage": "2755.597619047619"
        },
        {
          "Gene": "DNMT3A",
          "Chr": "chr2",
          "Start": "25469416",
          "End": "25469716",
          "MinCoverage": "493",
          "MaxCoverage": "9726",
          "TotCoverage": "624017",
          "MeanCoverage": "2080.056666666667"
        },
        {
          "Gene": "DNMT3A",
          "Chr": "chr2",
          "Start": "25469853",
          "End": "25470093",
          "MinCoverage": "668",
          "MaxCoverage": "12582",
          "TotCoverage": "719977",
          "MeanCoverage": "2999.9041666666667"
        },
        {
          "Gene": "DNMT3A",
          "Chr": "chr2",
          "Start": "25470388",
          "End": "25470688",
          "MinCoverage": "1965",
          "MaxCoverage": "16914",
          "TotCoverage": "1448890",
          "MeanCoverage": "4829.633333333333"
        },
        {
          "Gene": "DNMT3A",
          "Chr": "chr2",
          "Start": "25470833",
          "End": "25471193",
          "MinCoverage": "710",
          "MaxCoverage": "8048",
          "TotCoverage": "629343",
          "MeanCoverage": "1748.175"
        },
        {
          "Gene": "DNMT3A",
          "Chr": "chr2",
          "Start": "25472439",
          "End": "25472679",
          "MinCoverage": "459",
          "MaxCoverage": "9880",
          "TotCoverage": "232227",
          "MeanCoverage": "967.6125"
        },
        {
          "Gene": "DNMT3A",
          "Chr": "chr2",
          "Start": "25474488",
          "End": "25475536",
          "MinCoverage": "3",
          "MaxCoverage": "15644",
          "TotCoverage": "732239",
          "MeanCoverage": "698.7013358778626"
        },
        {
          "Gene": "DNMT3A",
          "Chr": "chr2",
          "Start": "25497732",
          "End": "25498032",
          "MinCoverage": "721",
          "MaxCoverage": "7182",
          "TotCoverage": "670477",
          "MeanCoverage": "2234.923333333333"
        },
        {
          "Gene": "DNMT3A",
          "Chr": "chr2",
          "Start": "25498270",
          "End": "25498510",
          "MinCoverage": "204",
          "MaxCoverage": "6120",
          "TotCoverage": "202258",
          "MeanCoverage": "842.7416666666667"
        },
        {
          "Gene": "DNMT3A",
          "Chr": "chr2",
          "Start": "25504210",
          "End": "25505645",
          "MinCoverage": "167",
          "MaxCoverage": "14280",
          "TotCoverage": "2081232",
          "MeanCoverage": "1450.3358885017421"
        },
        {
          "Gene": "DNMT3A",
          "Chr": "chr2",
          "Start": "25522939",
          "End": "25523179",
          "MinCoverage": "467",
          "MaxCoverage": "8310",
          "TotCoverage": "456361",
          "MeanCoverage": "1901.5041666666666"
        },
        {
          "Gene": "ALK",
          "Chr": "chr2",
          "Start": "29415572",
          "End": "29416894",
          "MinCoverage": "382",
          "MaxCoverage": "13576",
          "TotCoverage": "1204225",
          "MeanCoverage": "910.9114977307111"
        },
        {
          "Gene": "ALK",
          "Chr": "chr2",
          "Start": "29419560",
          "End": "29419800",
          "MinCoverage": "122",
          "MaxCoverage": "4319",
          "TotCoverage": "85728",
          "MeanCoverage": "357.2"
        },
        {
          "Gene": "ALK",
          "Chr": "chr2",
          "Start": "29420347",
          "End": "29420679",
          "MinCoverage": "114",
          "MaxCoverage": "7788",
          "TotCoverage": "301107",
          "MeanCoverage": "906.9487951807229"
        },
        {
          "Gene": "ALK",
          "Chr": "chr2",
          "Start": "29429967",
          "End": "29430207",
          "MinCoverage": "146",
          "MaxCoverage": "4712",
          "TotCoverage": "95642",
          "MeanCoverage": "398.5083333333333"
        },
        {
          "Gene": "ALK",
          "Chr": "chr2",
          "Start": "29432551",
          "End": "29432817",
          "MinCoverage": "183",
          "MaxCoverage": "7136",
          "TotCoverage": "159429",
          "MeanCoverage": "599.3571428571429"
        },
        {
          "Gene": "ALK",
          "Chr": "chr2",
          "Start": "29436778",
          "End": "29437018",
          "MinCoverage": "205",
          "MaxCoverage": "3492",
          "TotCoverage": "111954",
          "MeanCoverage": "466.475"
        },
        {
          "Gene": "ALK",
          "Chr": "chr2",
          "Start": "29443516",
          "End": "29443855",
          "MinCoverage": "800",
          "MaxCoverage": "13749",
          "TotCoverage": "1100977",
          "MeanCoverage": "3247.7197640117993"
        },
        {
          "Gene": "ALK",
          "Chr": "chr2",
          "Start": "29445121",
          "End": "29445547",
          "MinCoverage": "199",
          "MaxCoverage": "6315",
          "TotCoverage": "330387",
          "MeanCoverage": "775.556338028169"
        },
        {
          "Gene": "ALK",
          "Chr": "chr2",
          "Start": "29446156",
          "End": "29446516",
          "MinCoverage": "553",
          "MaxCoverage": "6040",
          "TotCoverage": "488442",
          "MeanCoverage": "1356.7833333333333"
        },
        {
          "Gene": "ALK",
          "Chr": "chr2",
          "Start": "29449713",
          "End": "29450013",
          "MinCoverage": "219",
          "MaxCoverage": "5712",
          "TotCoverage": "288920",
          "MeanCoverage": "963.0666666666667"
        },
        {
          "Gene": "ALK",
          "Chr": "chr2",
          "Start": "29450368",
          "End": "29450608",
          "MinCoverage": "190",
          "MaxCoverage": "6832",
          "TotCoverage": "135407",
          "MeanCoverage": "564.1958333333333"
        },
        {
          "Gene": "ALK",
          "Chr": "chr2",
          "Start": "29451690",
          "End": "29451990",
          "MinCoverage": "192",
          "MaxCoverage": "6045",
          "TotCoverage": "249795",
          "MeanCoverage": "832.65"
        },
        {
          "Gene": "ALK",
          "Chr": "chr2",
          "Start": "29455091",
          "End": "29455391",
          "MinCoverage": "342",
          "MaxCoverage": "5240",
          "TotCoverage": "402509",
          "MeanCoverage": "1341.6966666666667"
        },
        {
          "Gene": "ALK",
          "Chr": "chr2",
          "Start": "29456376",
          "End": "29456616",
          "MinCoverage": "221",
          "MaxCoverage": "6195",
          "TotCoverage": "96009",
          "MeanCoverage": "400.0375"
        },
        {
          "Gene": "ALK",
          "Chr": "chr2",
          "Start": "29462470",
          "End": "29462770",
          "MinCoverage": "569",
          "MaxCoverage": "8124",
          "TotCoverage": "471752",
          "MeanCoverage": "1572.5066666666667"
        },
        {
          "Gene": "ALK",
          "Chr": "chr2",
          "Start": "29497908",
          "End": "29498148",
          "MinCoverage": "128",
          "MaxCoverage": "4472",
          "TotCoverage": "106161",
          "MeanCoverage": "442.3375"
        },
        {
          "Gene": "ALK",
          "Chr": "chr2",
          "Start": "29498194",
          "End": "29498434",
          "MinCoverage": "245",
          "MaxCoverage": "5230",
          "TotCoverage": "147991",
          "MeanCoverage": "616.6291666666667"
        },
        {
          "Gene": "ALK",
          "Chr": "chr2",
          "Start": "29519688",
          "End": "29519988",
          "MinCoverage": "111",
          "MaxCoverage": "6265",
          "TotCoverage": "185241",
          "MeanCoverage": "617.47"
        },
        {
          "Gene": "ALK",
          "Chr": "chr2",
          "Start": "29541099",
          "End": "29541339",
          "MinCoverage": "94",
          "MaxCoverage": "12030",
          "TotCoverage": "171390",
          "MeanCoverage": "714.125"
        },
        {
          "Gene": "ALK",
          "Chr": "chr2",
          "Start": "29543562",
          "End": "29543802",
          "MinCoverage": "176",
          "MaxCoverage": "3720",
          "TotCoverage": "86141",
          "MeanCoverage": "358.92083333333335"
        },
        {
          "Gene": "ALK",
          "Chr": "chr2",
          "Start": "29551161",
          "End": "29551401",
          "MinCoverage": "156",
          "MaxCoverage": "3960",
          "TotCoverage": "152910",
          "MeanCoverage": "637.125"
        },
        {
          "Gene": "ALK",
          "Chr": "chr2",
          "Start": "29606541",
          "End": "29606781",
          "MinCoverage": "169",
          "MaxCoverage": "3864",
          "TotCoverage": "50345",
          "MeanCoverage": "209.77083333333334"
        },
        {
          "Gene": "ALK",
          "Chr": "chr2",
          "Start": "29754701",
          "End": "29755061",
          "MinCoverage": "287",
          "MaxCoverage": "6138",
          "TotCoverage": "334452",
          "MeanCoverage": "929.0333333333333"
        },
        {
          "Gene": "ALK",
          "Chr": "chr2",
          "Start": "29917647",
          "End": "29917947",
          "MinCoverage": "158",
          "MaxCoverage": "9690",
          "TotCoverage": "391868",
          "MeanCoverage": "1306.2266666666667"
        },
        {
          "Gene": "ALK",
          "Chr": "chr2",
          "Start": "29940383",
          "End": "29940623",
          "MinCoverage": "145",
          "MaxCoverage": "4224",
          "TotCoverage": "84370",
          "MeanCoverage": "351.5416666666667"
        },
        {
          "Gene": "ALK",
          "Chr": "chr2",
          "Start": "30142805",
          "End": "30144596",
          "MinCoverage": "29",
          "MaxCoverage": "7590",
          "TotCoverage": "2149658",
          "MeanCoverage": "1200.255723059743"
        },
        {
          "Gene": "MAP4K3",
          "Chr": "chr2",
          "Start": "39536528",
          "End": "39536820",
          "MinCoverage": "102",
          "MaxCoverage": "5445",
          "TotCoverage": "99526",
          "MeanCoverage": "340.8424657534247"
        },
        {
          "Gene": "MSH2",
          "Chr": "chr2",
          "Start": "47630133",
          "End": "47630613",
          "MinCoverage": "118",
          "MaxCoverage": "2682",
          "TotCoverage": "315347",
          "MeanCoverage": "656.9729166666667"
        },
        {
          "Gene": "MSH2",
          "Chr": "chr2",
          "Start": "47635467",
          "End": "47635767",
          "MinCoverage": "78",
          "MaxCoverage": "5502",
          "TotCoverage": "212249",
          "MeanCoverage": "707.4966666666667"
        },
        {
          "Gene": "MSH2",
          "Chr": "chr2",
          "Start": "47637138",
          "End": "47637575",
          "MinCoverage": "178",
          "MaxCoverage": "6720",
          "TotCoverage": "227700",
          "MeanCoverage": "521.0526315789474"
        },
        {
          "Gene": "MSH2",
          "Chr": "chr2",
          "Start": "47639493",
          "End": "47639831",
          "MinCoverage": "198",
          "MaxCoverage": "6050",
          "TotCoverage": "159367",
          "MeanCoverage": "471.5"
        },
        {
          "Gene": "MSH2",
          "Chr": "chr2",
          "Start": "47641338",
          "End": "47641747",
          "MinCoverage": "61",
          "MaxCoverage": "5216",
          "TotCoverage": "197446",
          "MeanCoverage": "482.7530562347188"
        },
        {
          "Gene": "MSH2",
          "Chr": "chr2",
          "Start": "47643381",
          "End": "47643621",
          "MinCoverage": "92",
          "MaxCoverage": "5928",
          "TotCoverage": "131317",
          "MeanCoverage": "547.1541666666667"
        },
        {
          "Gene": "MSH2",
          "Chr": "chr2",
          "Start": "47656754",
          "End": "47657158",
          "MinCoverage": "265",
          "MaxCoverage": "9107",
          "TotCoverage": "329545",
          "MeanCoverage": "815.7054455445544"
        },
        {
          "Gene": "MSH2",
          "Chr": "chr2",
          "Start": "47672621",
          "End": "47672861",
          "MinCoverage": "331",
          "MaxCoverage": "10088",
          "TotCoverage": "232769",
          "MeanCoverage": "969.8708333333333"
        },
        {
          "Gene": "MSH2",
          "Chr": "chr2",
          "Start": "47690111",
          "End": "47690351",
          "MinCoverage": "286",
          "MaxCoverage": "8370",
          "TotCoverage": "152537",
          "MeanCoverage": "635.5708333333333"
        },
        {
          "Gene": "MSH2",
          "Chr": "chr2",
          "Start": "47691351",
          "End": "47691531",
          "MinCoverage": "536",
          "MaxCoverage": "3656",
          "TotCoverage": "138833",
          "MeanCoverage": "771.2944444444445"
        },
        {
          "Gene": "MSH2",
          "Chr": "chr2",
          "Start": "47693721",
          "End": "47694021",
          "MinCoverage": "235",
          "MaxCoverage": "9112",
          "TotCoverage": "251678",
          "MeanCoverage": "838.9266666666666"
        },
        {
          "Gene": "MSH2",
          "Chr": "chr2",
          "Start": "47697902",
          "End": "47698305",
          "MinCoverage": "346",
          "MaxCoverage": "10408",
          "TotCoverage": "300579",
          "MeanCoverage": "745.8535980148883"
        },
        {
          "Gene": "MSH2",
          "Chr": "chr2",
          "Start": "47702099",
          "End": "47702459",
          "MinCoverage": "301",
          "MaxCoverage": "10080",
          "TotCoverage": "238361",
          "MeanCoverage": "662.1138888888889"
        },
        {
          "Gene": "MSH2",
          "Chr": "chr2",
          "Start": "47703427",
          "End": "47703787",
          "MinCoverage": "203",
          "MaxCoverage": "8775",
          "TotCoverage": "193831",
          "MeanCoverage": "538.4194444444445"
        },
        {
          "Gene": "MSH2",
          "Chr": "chr2",
          "Start": "47705354",
          "End": "47705714",
          "MinCoverage": "333",
          "MaxCoverage": "9387",
          "TotCoverage": "319443",
          "MeanCoverage": "887.3416666666667"
        },
        {
          "Gene": "MSH2",
          "Chr": "chr2",
          "Start": "47707772",
          "End": "47708072",
          "MinCoverage": "373",
          "MaxCoverage": "9646",
          "TotCoverage": "299629",
          "MeanCoverage": "998.7633333333333"
        },
        {
          "Gene": "MSH2",
          "Chr": "chr2",
          "Start": "47709842",
          "End": "47710442",
          "MinCoverage": "124",
          "MaxCoverage": "6831",
          "TotCoverage": "329271",
          "MeanCoverage": "548.785"
        },
        {
          "Gene": "MSH6",
          "Chr": "chr2",
          "Start": "48010014",
          "End": "48011363",
          "MinCoverage": "14",
          "MaxCoverage": "6462",
          "TotCoverage": "483490",
          "MeanCoverage": "358.40622683469235"
        },
        {
          "Gene": "MSH6",
          "Chr": "chr2",
          "Start": "48011439",
          "End": "48011782",
          "MinCoverage": "353",
          "MaxCoverage": "9345",
          "TotCoverage": "478095",
          "MeanCoverage": "1393.8629737609328"
        },
        {
          "Gene": "MSH6",
          "Chr": "chr2",
          "Start": "48011828",
          "End": "48012008",
          "MinCoverage": "757",
          "MaxCoverage": "6792",
          "TotCoverage": "184746",
          "MeanCoverage": "1026.3666666666666"
        },
        {
          "Gene": "MSH6",
          "Chr": "chr2",
          "Start": "48017998",
          "End": "48018395",
          "MinCoverage": "217",
          "MaxCoverage": "8063",
          "TotCoverage": "304446",
          "MeanCoverage": "766.8664987405541"
        },
        {
          "Gene": "MSH6",
          "Chr": "chr2",
          "Start": "48022892",
          "End": "48023283",
          "MinCoverage": "39",
          "MaxCoverage": "3916",
          "TotCoverage": "115753",
          "MeanCoverage": "296.04347826086956"
        },
        {
          "Gene": "MSH6",
          "Chr": "chr2",
          "Start": "48025689",
          "End": "48028509",
          "MinCoverage": "131",
          "MaxCoverage": "12990",
          "TotCoverage": "1659927",
          "MeanCoverage": "588.6265957446808"
        },
        {
          "Gene": "MSH6",
          "Chr": "chr2",
          "Start": "48030481",
          "End": "48030901",
          "MinCoverage": "106",
          "MaxCoverage": "13273",
          "TotCoverage": "256985",
          "MeanCoverage": "611.8690476190476"
        },
        {
          "Gene": "MSH6",
          "Chr": "chr2",
          "Start": "48031987",
          "End": "48032227",
          "MinCoverage": "170",
          "MaxCoverage": "4482",
          "TotCoverage": "83296",
          "MeanCoverage": "347.06666666666666"
        },
        {
          "Gene": "MSH6",
          "Chr": "chr2",
          "Start": "48032681",
          "End": "48032921",
          "MinCoverage": "148",
          "MaxCoverage": "3165",
          "TotCoverage": "94746",
          "MeanCoverage": "394.775"
        },
        {
          "Gene": "FBXO11,MSH6",
          "Chr": "chr2",
          "Start": "48033266",
          "End": "48035637",
          "MinCoverage": "79",
          "MaxCoverage": "10543",
          "TotCoverage": "2322668",
          "MeanCoverage": "979.6153521720793"
        },
        {
          "Gene": "ZNF2",
          "Chr": "chr2",
          "Start": "95849200",
          "End": "95849497",
          "MinCoverage": "145",
          "MaxCoverage": "7155",
          "TotCoverage": "233311",
          "MeanCoverage": "785.5589225589225"
        },
        {
          "Gene": "ERCC3",
          "Chr": "chr2",
          "Start": "128016797",
          "End": "128017097",
          "MinCoverage": "798",
          "MaxCoverage": "7395",
          "TotCoverage": "478467",
          "MeanCoverage": "1594.89"
        },
        {
          "Gene": "ERCC3",
          "Chr": "chr2",
          "Start": "128018742",
          "End": "128018982",
          "MinCoverage": "373",
          "MaxCoverage": "6640",
          "TotCoverage": "196148",
          "MeanCoverage": "817.2833333333333"
        },
        {
          "Gene": "ERCC3",
          "Chr": "chr2",
          "Start": "128028850",
          "End": "128029090",
          "MinCoverage": "184",
          "MaxCoverage": "5772",
          "TotCoverage": "99814",
          "MeanCoverage": "415.89166666666665"
        },
        {
          "Gene": "ERCC3",
          "Chr": "chr2",
          "Start": "128030368",
          "End": "128030608",
          "MinCoverage": "218",
          "MaxCoverage": "6875",
          "TotCoverage": "104938",
          "MeanCoverage": "437.2416666666667"
        },
        {
          "Gene": "ERCC3",
          "Chr": "chr2",
          "Start": "128036669",
          "End": "128037029",
          "MinCoverage": "233",
          "MaxCoverage": "8606",
          "TotCoverage": "226515",
          "MeanCoverage": "629.2083333333334"
        },
        {
          "Gene": "ERCC3",
          "Chr": "chr2",
          "Start": "128044225",
          "End": "128044645",
          "MinCoverage": "414",
          "MaxCoverage": "9478",
          "TotCoverage": "418968",
          "MeanCoverage": "997.5428571428571"
        },
        {
          "Gene": "ERCC3",
          "Chr": "chr2",
          "Start": "128046157",
          "End": "128046517",
          "MinCoverage": "200",
          "MaxCoverage": "5551",
          "TotCoverage": "172155",
          "MeanCoverage": "478.2083333333333"
        },
        {
          "Gene": "ERCC3",
          "Chr": "chr2",
          "Start": "128046834",
          "End": "128048394",
          "MinCoverage": "135",
          "MaxCoverage": "10152",
          "TotCoverage": "1093892",
          "MeanCoverage": "701.2128205128205"
        },
        {
          "Gene": "ERCC3",
          "Chr": "chr2",
          "Start": "128049590",
          "End": "128050490",
          "MinCoverage": "203",
          "MaxCoverage": "12480",
          "TotCoverage": "599809",
          "MeanCoverage": "666.4544444444444"
        },
        {
          "Gene": "ERCC3",
          "Chr": "chr2",
          "Start": "128051030",
          "End": "128051810",
          "MinCoverage": "197",
          "MaxCoverage": "8985",
          "TotCoverage": "802047",
          "MeanCoverage": "1028.2653846153846"
        },
        {
          "Gene": "ACVR2A",
          "Chr": "chr2",
          "Start": "148683599",
          "End": "148683779",
          "MinCoverage": "65",
          "MaxCoverage": "2288",
          "TotCoverage": "27092",
          "MeanCoverage": "150.51111111111112"
        },
        {
          "Gene": "TTN",
          "Chr": "chr2",
          "Start": "179394835",
          "End": "179400655",
          "MinCoverage": "105",
          "MaxCoverage": "11568",
          "TotCoverage": "4483414",
          "MeanCoverage": "770.3460481099656"
        },
        {
          "Gene": "TTN",
          "Chr": "chr2",
          "Start": "179423677",
          "End": "179441222",
          "MinCoverage": "55",
          "MaxCoverage": "17504",
          "TotCoverage": "13914266",
          "MeanCoverage": "793.0616129951553"
        },
        {
          "Gene": "TTN",
          "Chr": "chr2",
          "Start": "179453157",
          "End": "179456397",
          "MinCoverage": "207",
          "MaxCoverage": "12390",
          "TotCoverage": "2880219",
          "MeanCoverage": "888.9564814814814"
        },
        {
          "Gene": "TTN",
          "Chr": "chr2",
          "Start": "179583832",
          "End": "179584312",
          "MinCoverage": "390",
          "MaxCoverage": "7424",
          "TotCoverage": "328199",
          "MeanCoverage": "683.7479166666667"
        },
        {
          "Gene": "TTN",
          "Chr": "chr2",
          "Start": "179594357",
          "End": "179594717",
          "MinCoverage": "96",
          "MaxCoverage": "11544",
          "TotCoverage": "197378",
          "MeanCoverage": "548.2722222222222"
        },
        {
          "Gene": "CASP8",
          "Chr": "chr2",
          "Start": "202122689",
          "End": "202123169",
          "MinCoverage": "63",
          "MaxCoverage": "6036",
          "TotCoverage": "193612",
          "MeanCoverage": "403.35833333333335"
        },
        {
          "Gene": "CASP8",
          "Chr": "chr2",
          "Start": "202131108",
          "End": "202131588",
          "MinCoverage": "113",
          "MaxCoverage": "7436",
          "TotCoverage": "195504",
          "MeanCoverage": "407.3"
        },
        {
          "Gene": "CASP8",
          "Chr": "chr2",
          "Start": "202136171",
          "End": "202136411",
          "MinCoverage": "195",
          "MaxCoverage": "7416",
          "TotCoverage": "115832",
          "MeanCoverage": "482.6333333333333"
        },
        {
          "Gene": "CASP8",
          "Chr": "chr2",
          "Start": "202137302",
          "End": "202137722",
          "MinCoverage": "154",
          "MaxCoverage": "7820",
          "TotCoverage": "190765",
          "MeanCoverage": "454.20238095238096"
        },
        {
          "Gene": "CASP8",
          "Chr": "chr2",
          "Start": "202139523",
          "End": "202139763",
          "MinCoverage": "163",
          "MaxCoverage": "7315",
          "TotCoverage": "164257",
          "MeanCoverage": "684.4041666666667"
        },
        {
          "Gene": "CASP8",
          "Chr": "chr2",
          "Start": "202141483",
          "End": "202141920",
          "MinCoverage": "163",
          "MaxCoverage": "9821",
          "TotCoverage": "364501",
          "MeanCoverage": "834.0983981693364"
        },
        {
          "Gene": "CASP8",
          "Chr": "chr2",
          "Start": "202149459",
          "End": "202150119",
          "MinCoverage": "404",
          "MaxCoverage": "12830",
          "TotCoverage": "601900",
          "MeanCoverage": "911.969696969697"
        },
        {
          "Gene": "CASP8",
          "Chr": "chr2",
          "Start": "202151104",
          "End": "202151344",
          "MinCoverage": "508",
          "MaxCoverage": "6312",
          "TotCoverage": "190344",
          "MeanCoverage": "793.1"
        },
        {
          "Gene": "CASP8",
          "Chr": "chr2",
          "Start": "202151592",
          "End": "202151977",
          "MinCoverage": "287",
          "MaxCoverage": "14625",
          "TotCoverage": "365706",
          "MeanCoverage": "949.8857142857142"
        },
        {
          "Gene": "CASP8",
          "Chr": "chr2",
          "Start": "202151983",
          "End": "202152516",
          "MinCoverage": "202",
          "MaxCoverage": "7524",
          "TotCoverage": "350138",
          "MeanCoverage": "656.9193245778612"
        },
        {
          "Gene": "IDH1",
          "Chr": "chr2",
          "Start": "209103725",
          "End": "209104025",
          "MinCoverage": "212",
          "MaxCoverage": "7896",
          "TotCoverage": "267105",
          "MeanCoverage": "890.35"
        },
        {
          "Gene": "IDH1",
          "Chr": "chr2",
          "Start": "209104506",
          "End": "209104806",
          "MinCoverage": "57",
          "MaxCoverage": "4323",
          "TotCoverage": "73471",
          "MeanCoverage": "244.90333333333334"
        },
        {
          "Gene": "IDH1",
          "Chr": "chr2",
          "Start": "209108089",
          "End": "209108389",
          "MinCoverage": "194",
          "MaxCoverage": "6272",
          "TotCoverage": "180112",
          "MeanCoverage": "600.3733333333333"
        },
        {
          "Gene": "IDH1",
          "Chr": "chr2",
          "Start": "209109975",
          "End": "209110215",
          "MinCoverage": "68",
          "MaxCoverage": "3500",
          "TotCoverage": "107357",
          "MeanCoverage": "447.3208333333333"
        },
        {
          "Gene": "IDH1",
          "Chr": "chr2",
          "Start": "209112996",
          "End": "209113448",
          "MinCoverage": "169",
          "MaxCoverage": "9540",
          "TotCoverage": "518306",
          "MeanCoverage": "1146.6946902654868"
        },
        {
          "Gene": "IDH1",
          "Chr": "chr2",
          "Start": "209116103",
          "End": "209116343",
          "MinCoverage": "61",
          "MaxCoverage": "5016",
          "TotCoverage": "117475",
          "MeanCoverage": "489.4791666666667"
        },
        {
          "Gene": "ERBB4",
          "Chr": "chr2",
          "Start": "212248322",
          "End": "212248802",
          "MinCoverage": "304",
          "MaxCoverage": "8688",
          "TotCoverage": "314616",
          "MeanCoverage": "655.45"
        },
        {
          "Gene": "ERBB4",
          "Chr": "chr2",
          "Start": "212251546",
          "End": "212251906",
          "MinCoverage": "287",
          "MaxCoverage": "5406",
          "TotCoverage": "239807",
          "MeanCoverage": "666.1305555555556"
        },
        {
          "Gene": "ERBB4",
          "Chr": "chr2",
          "Start": "212252603",
          "End": "212252783",
          "MinCoverage": "108",
          "MaxCoverage": "5389",
          "TotCoverage": "44295",
          "MeanCoverage": "246.08333333333334"
        },
        {
          "Gene": "ERBB4",
          "Chr": "chr2",
          "Start": "212285130",
          "End": "212285370",
          "MinCoverage": "243",
          "MaxCoverage": "4920",
          "TotCoverage": "115205",
          "MeanCoverage": "480.0208333333333"
        },
        {
          "Gene": "ERBB4",
          "Chr": "chr2",
          "Start": "212286690",
          "End": "212286870",
          "MinCoverage": "372",
          "MaxCoverage": "6296",
          "TotCoverage": "119219",
          "MeanCoverage": "662.3277777777778"
        },
        {
          "Gene": "ERBB4",
          "Chr": "chr2",
          "Start": "212288832",
          "End": "212289072",
          "MinCoverage": "125",
          "MaxCoverage": "5664",
          "TotCoverage": "162371",
          "MeanCoverage": "676.5458333333333"
        },
        {
          "Gene": "ERBB4",
          "Chr": "chr2",
          "Start": "212293080",
          "End": "212293260",
          "MinCoverage": "134",
          "MaxCoverage": "4565",
          "TotCoverage": "65179",
          "MeanCoverage": "362.10555555555555"
        },
        {
          "Gene": "ERBB4",
          "Chr": "chr2",
          "Start": "212295627",
          "End": "212295867",
          "MinCoverage": "324",
          "MaxCoverage": "6324",
          "TotCoverage": "162959",
          "MeanCoverage": "678.9958333333333"
        },
        {
          "Gene": "ERBB4",
          "Chr": "chr2",
          "Start": "212426600",
          "End": "212426840",
          "MinCoverage": "183",
          "MaxCoverage": "3906",
          "TotCoverage": "89344",
          "MeanCoverage": "372.26666666666665"
        },
        {
          "Gene": "ERBB4",
          "Chr": "chr2",
          "Start": "212483860",
          "End": "212484040",
          "MinCoverage": "244",
          "MaxCoverage": "3834",
          "TotCoverage": "81188",
          "MeanCoverage": "451.0444444444444"
        },
        {
          "Gene": "ERBB4",
          "Chr": "chr2",
          "Start": "212488587",
          "End": "212488827",
          "MinCoverage": "232",
          "MaxCoverage": "6020",
          "TotCoverage": "127664",
          "MeanCoverage": "531.9333333333333"
        },
        {
          "Gene": "ERBB4",
          "Chr": "chr2",
          "Start": "212495132",
          "End": "212495372",
          "MinCoverage": "255",
          "MaxCoverage": "3078",
          "TotCoverage": "123529",
          "MeanCoverage": "514.7041666666667"
        },
        {
          "Gene": "ERBB4",
          "Chr": "chr2",
          "Start": "212522425",
          "End": "212522605",
          "MinCoverage": "275",
          "MaxCoverage": "6566",
          "TotCoverage": "109295",
          "MeanCoverage": "607.1944444444445"
        },
        {
          "Gene": "ERBB4",
          "Chr": "chr2",
          "Start": "212522606",
          "End": "212522786",
          "MinCoverage": "223",
          "MaxCoverage": "5620",
          "TotCoverage": "83667",
          "MeanCoverage": "464.81666666666666"
        },
        {
          "Gene": "ERBB4",
          "Chr": "chr2",
          "Start": "212530004",
          "End": "212530244",
          "MinCoverage": "175",
          "MaxCoverage": "6258",
          "TotCoverage": "127731",
          "MeanCoverage": "532.2125"
        },
        {
          "Gene": "ERBB4",
          "Chr": "chr2",
          "Start": "212537845",
          "End": "212538025",
          "MinCoverage": "143",
          "MaxCoverage": "2992",
          "TotCoverage": "68550",
          "MeanCoverage": "380.8333333333333"
        },
        {
          "Gene": "ERBB4",
          "Chr": "chr2",
          "Start": "212543722",
          "End": "212543962",
          "MinCoverage": "373",
          "MaxCoverage": "8094",
          "TotCoverage": "255978",
          "MeanCoverage": "1066.575"
        },
        {
          "Gene": "ERBB4",
          "Chr": "chr2",
          "Start": "212566671",
          "End": "212566911",
          "MinCoverage": "243",
          "MaxCoverage": "4515",
          "TotCoverage": "163308",
          "MeanCoverage": "680.45"
        },
        {
          "Gene": "ERBB4",
          "Chr": "chr2",
          "Start": "212568783",
          "End": "212568963",
          "MinCoverage": "303",
          "MaxCoverage": "4137",
          "TotCoverage": "88501",
          "MeanCoverage": "491.6722222222222"
        },
        {
          "Gene": "ERBB4",
          "Chr": "chr2",
          "Start": "212569989",
          "End": "212570169",
          "MinCoverage": "368",
          "MaxCoverage": "6640",
          "TotCoverage": "121938",
          "MeanCoverage": "677.4333333333333"
        },
        {
          "Gene": "ERBB4",
          "Chr": "chr2",
          "Start": "212576717",
          "End": "212576957",
          "MinCoverage": "330",
          "MaxCoverage": "7560",
          "TotCoverage": "221882",
          "MeanCoverage": "924.5083333333333"
        },
        {
          "Gene": "ERBB4",
          "Chr": "chr2",
          "Start": "212578196",
          "End": "212578436",
          "MinCoverage": "159",
          "MaxCoverage": "3438",
          "TotCoverage": "129817",
          "MeanCoverage": "540.9041666666667"
        },
        {
          "Gene": "ERBB4",
          "Chr": "chr2",
          "Start": "212587068",
          "End": "212587308",
          "MinCoverage": "237",
          "MaxCoverage": "6780",
          "TotCoverage": "198845",
          "MeanCoverage": "828.5208333333334"
        },
        {
          "Gene": "ERBB4",
          "Chr": "chr2",
          "Start": "212589739",
          "End": "212589979",
          "MinCoverage": "198",
          "MaxCoverage": "6342",
          "TotCoverage": "142701",
          "MeanCoverage": "594.5875"
        },
        {
          "Gene": "ERBB4",
          "Chr": "chr2",
          "Start": "212615306",
          "End": "212615486",
          "MinCoverage": "312",
          "MaxCoverage": "6500",
          "TotCoverage": "119993",
          "MeanCoverage": "666.6277777777777"
        },
        {
          "Gene": "ERBB4",
          "Chr": "chr2",
          "Start": "212652696",
          "End": "212652936",
          "MinCoverage": "212",
          "MaxCoverage": "10170",
          "TotCoverage": "161312",
          "MeanCoverage": "672.1333333333333"
        },
        {
          "Gene": "ERBB4",
          "Chr": "chr2",
          "Start": "212812127",
          "End": "212812367",
          "MinCoverage": "305",
          "MaxCoverage": "7302",
          "TotCoverage": "199839",
          "MeanCoverage": "832.6625"
        },
        {
          "Gene": "ERBB4",
          "Chr": "chr2",
          "Start": "212989432",
          "End": "212989672",
          "MinCoverage": "273",
          "MaxCoverage": "9408",
          "TotCoverage": "174025",
          "MeanCoverage": "725.1041666666666"
        },
        {
          "Gene": "ERBB4",
          "Chr": "chr2",
          "Start": "213403123",
          "End": "213403303",
          "MinCoverage": "993",
          "MaxCoverage": "10560",
          "TotCoverage": "354227",
          "MeanCoverage": "1967.9277777777777"
        },
        {
          "Gene": "SRC",
          "Chr": "chr20",
          "Start": "36012531",
          "End": "36012831",
          "MinCoverage": "304",
          "MaxCoverage": "7932",
          "TotCoverage": "430568",
          "MeanCoverage": "1435.2266666666667"
        },
        {
          "Gene": "SRC",
          "Chr": "chr20",
          "Start": "36014437",
          "End": "36014645",
          "MinCoverage": "550",
          "MaxCoverage": "5570",
          "TotCoverage": "233496",
          "MeanCoverage": "1122.576923076923"
        },
        {
          "Gene": "SRC",
          "Chr": "chr20",
          "Start": "36014834",
          "End": "36015014",
          "MinCoverage": "106",
          "MaxCoverage": "1225",
          "TotCoverage": "42908",
          "MeanCoverage": "238.37777777777777"
        },
        {
          "Gene": "SRC",
          "Chr": "chr20",
          "Start": "36022256",
          "End": "36022457",
          "MinCoverage": "972",
          "MaxCoverage": "9699",
          "TotCoverage": "539439",
          "MeanCoverage": "2683.776119402985"
        },
        {
          "Gene": "SRC",
          "Chr": "chr20",
          "Start": "36022507",
          "End": "36022747",
          "MinCoverage": "810",
          "MaxCoverage": "7728",
          "TotCoverage": "282872",
          "MeanCoverage": "1178.6333333333334"
        },
        {
          "Gene": "SRC",
          "Chr": "chr20",
          "Start": "36024519",
          "End": "36024759",
          "MinCoverage": "1301",
          "MaxCoverage": "8864",
          "TotCoverage": "779496",
          "MeanCoverage": "3247.9"
        },
        {
          "Gene": "SRC",
          "Chr": "chr20",
          "Start": "36026059",
          "End": "36026299",
          "MinCoverage": "164",
          "MaxCoverage": "4978",
          "TotCoverage": "332340",
          "MeanCoverage": "1384.75"
        },
        {
          "Gene": "SRC",
          "Chr": "chr20",
          "Start": "36028487",
          "End": "36028769",
          "MinCoverage": "153",
          "MaxCoverage": "2512",
          "TotCoverage": "157909",
          "MeanCoverage": "559.9609929078014"
        },
        {
          "Gene": "SRC",
          "Chr": "chr20",
          "Start": "36029931",
          "End": "36030132",
          "MinCoverage": "228",
          "MaxCoverage": "2118",
          "TotCoverage": "76627",
          "MeanCoverage": "381.228855721393"
        },
        {
          "Gene": "SRC",
          "Chr": "chr20",
          "Start": "36030794",
          "End": "36031034",
          "MinCoverage": "393",
          "MaxCoverage": "2654",
          "TotCoverage": "231705",
          "MeanCoverage": "965.4375"
        },
        {
          "Gene": "SRC",
          "Chr": "chr20",
          "Start": "36031150",
          "End": "36031349",
          "MinCoverage": "338",
          "MaxCoverage": "2944",
          "TotCoverage": "119121",
          "MeanCoverage": "598.5979899497487"
        },
        {
          "Gene": "SRC",
          "Chr": "chr20",
          "Start": "36031557",
          "End": "36031845",
          "MinCoverage": "433",
          "MaxCoverage": "7671",
          "TotCoverage": "466827",
          "MeanCoverage": "1620.9270833333333"
        },
        {
          "Gene": "AURKA",
          "Chr": "chr20",
          "Start": "54944380",
          "End": "54945460",
          "MinCoverage": "269",
          "MaxCoverage": "7790",
          "TotCoverage": "693612",
          "MeanCoverage": "642.2333333333333"
        },
        {
          "Gene": "AURKA",
          "Chr": "chr20",
          "Start": "54945477",
          "End": "54945777",
          "MinCoverage": "129",
          "MaxCoverage": "6776",
          "TotCoverage": "107874",
          "MeanCoverage": "359.58"
        },
        {
          "Gene": "AURKA",
          "Chr": "chr20",
          "Start": "54948387",
          "End": "54948687",
          "MinCoverage": "225",
          "MaxCoverage": "7664",
          "TotCoverage": "182963",
          "MeanCoverage": "609.8766666666667"
        },
        {
          "Gene": "AURKA",
          "Chr": "chr20",
          "Start": "54957986",
          "End": "54958286",
          "MinCoverage": "172",
          "MaxCoverage": "5328",
          "TotCoverage": "147889",
          "MeanCoverage": "492.9633333333333"
        },
        {
          "Gene": "AURKA",
          "Chr": "chr20",
          "Start": "54961240",
          "End": "54961660",
          "MinCoverage": "231",
          "MaxCoverage": "10205",
          "TotCoverage": "305540",
          "MeanCoverage": "727.4761904761905"
        },
        {
          "Gene": "AURKA",
          "Chr": "chr20",
          "Start": "54963114",
          "End": "54963354",
          "MinCoverage": "338",
          "MaxCoverage": "4360",
          "TotCoverage": "114361",
          "MeanCoverage": "476.50416666666666"
        },
        {
          "Gene": "AURKA",
          "Chr": "chr20",
          "Start": "54963790",
          "End": "54963970",
          "MinCoverage": "200",
          "MaxCoverage": "12430",
          "TotCoverage": "107073",
          "MeanCoverage": "594.85"
        },
        {
          "Gene": "RUNX1",
          "Chr": "chr21",
          "Start": "36171528",
          "End": "36171828",
          "MinCoverage": "93",
          "MaxCoverage": "6840",
          "TotCoverage": "105207",
          "MeanCoverage": "350.69"
        },
        {
          "Gene": "RUNX1",
          "Chr": "chr21",
          "Start": "36205171",
          "End": "36205411",
          "MinCoverage": "258",
          "MaxCoverage": "9944",
          "TotCoverage": "208313",
          "MeanCoverage": "867.9708333333333"
        },
        {
          "Gene": "RUNX1",
          "Chr": "chr21",
          "Start": "36205647",
          "End": "36207029",
          "MinCoverage": "110",
          "MaxCoverage": "16602",
          "TotCoverage": "1137347",
          "MeanCoverage": "822.9717800289436"
        },
        {
          "Gene": "RUNX1",
          "Chr": "chr21",
          "Start": "36231572",
          "End": "36231932",
          "MinCoverage": "133",
          "MaxCoverage": "2736",
          "TotCoverage": "86809",
          "MeanCoverage": "241.13611111111112"
        },
        {
          "Gene": "RUNX1",
          "Chr": "chr21",
          "Start": "36252781",
          "End": "36253081",
          "MinCoverage": "380",
          "MaxCoverage": "9576",
          "TotCoverage": "201841",
          "MeanCoverage": "672.8033333333333"
        },
        {
          "Gene": "RUNX1",
          "Chr": "chr21",
          "Start": "36421059",
          "End": "36421719",
          "MinCoverage": "121",
          "MaxCoverage": "10740",
          "TotCoverage": "340394",
          "MeanCoverage": "515.7484848484848"
        },
        {
          "Gene": "SMARCB1",
          "Chr": "chr22",
          "Start": "24129073",
          "End": "24129548",
          "MinCoverage": "49",
          "MaxCoverage": "10512",
          "TotCoverage": "570315",
          "MeanCoverage": "1200.6631578947367"
        },
        {
          "Gene": "SMARCB1",
          "Chr": "chr22",
          "Start": "24133891",
          "End": "24134131",
          "MinCoverage": "429",
          "MaxCoverage": "3018",
          "TotCoverage": "151619",
          "MeanCoverage": "631.7458333333333"
        },
        {
          "Gene": "SMARCB1",
          "Chr": "chr22",
          "Start": "24135690",
          "End": "24135930",
          "MinCoverage": "79",
          "MaxCoverage": "2912",
          "TotCoverage": "67529",
          "MeanCoverage": "281.37083333333334"
        },
        {
          "Gene": "SMARCB1",
          "Chr": "chr22",
          "Start": "24143045",
          "End": "24144109",
          "MinCoverage": "223",
          "MaxCoverage": "12484",
          "TotCoverage": "1646145",
          "MeanCoverage": "1547.1287593984962"
        },
        {
          "Gene": "SMARCB1",
          "Chr": "chr22",
          "Start": "24145425",
          "End": "24145665",
          "MinCoverage": "767",
          "MaxCoverage": "6630",
          "TotCoverage": "451494",
          "MeanCoverage": "1881.225"
        },
        {
          "Gene": "SMARCB1",
          "Chr": "chr22",
          "Start": "24158889",
          "End": "24159189",
          "MinCoverage": "473",
          "MaxCoverage": "11208",
          "TotCoverage": "535684",
          "MeanCoverage": "1785.6133333333332"
        },
        {
          "Gene": "SMARCB1",
          "Chr": "chr22",
          "Start": "24167356",
          "End": "24167656",
          "MinCoverage": "401",
          "MaxCoverage": "6216",
          "TotCoverage": "332127",
          "MeanCoverage": "1107.09"
        },
        {
          "Gene": "SMARCB1",
          "Chr": "chr22",
          "Start": "24175704",
          "End": "24175944",
          "MinCoverage": "812",
          "MaxCoverage": "10965",
          "TotCoverage": "565631",
          "MeanCoverage": "2356.795833333333"
        },
        {
          "Gene": "CHEK2",
          "Chr": "chr22",
          "Start": "29083675",
          "End": "29084035",
          "MinCoverage": "465",
          "MaxCoverage": "21728",
          "TotCoverage": "621574",
          "MeanCoverage": "1726.5944444444444"
        },
        {
          "Gene": "CHEK2",
          "Chr": "chr22",
          "Start": "29085072",
          "End": "29085343",
          "MinCoverage": "203",
          "MaxCoverage": "6072",
          "TotCoverage": "119170",
          "MeanCoverage": "439.74169741697415"
        },
        {
          "Gene": "CHEK2",
          "Chr": "chr22",
          "Start": "29089942",
          "End": "29090182",
          "MinCoverage": "305",
          "MaxCoverage": "9226",
          "TotCoverage": "192875",
          "MeanCoverage": "803.6458333333334"
        },
        {
          "Gene": "CHEK2",
          "Chr": "chr22",
          "Start": "29091052",
          "End": "29091292",
          "MinCoverage": "362",
          "MaxCoverage": "6858",
          "TotCoverage": "164948",
          "MeanCoverage": "687.2833333333333"
        },
        {
          "Gene": "CHEK2",
          "Chr": "chr22",
          "Start": "29091629",
          "End": "29091929",
          "MinCoverage": "463",
          "MaxCoverage": "7098",
          "TotCoverage": "268991",
          "MeanCoverage": "896.6366666666667"
        },
        {
          "Gene": "CHEK2",
          "Chr": "chr22",
          "Start": "29092811",
          "End": "29093051",
          "MinCoverage": "265",
          "MaxCoverage": "13314",
          "TotCoverage": "167226",
          "MeanCoverage": "696.775"
        },
        {
          "Gene": "CHEK2",
          "Chr": "chr22",
          "Start": "29095755",
          "End": "29095995",
          "MinCoverage": "182",
          "MaxCoverage": "11429",
          "TotCoverage": "196320",
          "MeanCoverage": "818.0"
        },
        {
          "Gene": "CHEK2",
          "Chr": "chr22",
          "Start": "29099433",
          "End": "29099613",
          "MinCoverage": "141",
          "MaxCoverage": "3774",
          "TotCoverage": "52499",
          "MeanCoverage": "291.6611111111111"
        },
        {
          "Gene": "CHEK2",
          "Chr": "chr22",
          "Start": "29105930",
          "End": "29106110",
          "MinCoverage": "135",
          "MaxCoverage": "5976",
          "TotCoverage": "81037",
          "MeanCoverage": "450.2055555555556"
        },
        {
          "Gene": "CHEK2",
          "Chr": "chr22",
          "Start": "29107830",
          "End": "29108070",
          "MinCoverage": "500",
          "MaxCoverage": "13078",
          "TotCoverage": "219811",
          "MeanCoverage": "915.8791666666667"
        },
        {
          "Gene": "CHEK2",
          "Chr": "chr22",
          "Start": "29115337",
          "End": "29115517",
          "MinCoverage": "346",
          "MaxCoverage": "4734",
          "TotCoverage": "119721",
          "MeanCoverage": "665.1166666666667"
        },
        {
          "Gene": "CHEK2",
          "Chr": "chr22",
          "Start": "29117513",
          "End": "29117693",
          "MinCoverage": "389",
          "MaxCoverage": "5796",
          "TotCoverage": "188310",
          "MeanCoverage": "1046.1666666666667"
        },
        {
          "Gene": "CHEK2",
          "Chr": "chr22",
          "Start": "29120801",
          "End": "29121412",
          "MinCoverage": "779",
          "MaxCoverage": "15918",
          "TotCoverage": "801804",
          "MeanCoverage": "1312.2815057283142"
        },
        {
          "Gene": "CHEK2",
          "Chr": "chr22",
          "Start": "29126342",
          "End": "29126582",
          "MinCoverage": "657",
          "MaxCoverage": "12280",
          "TotCoverage": "375699",
          "MeanCoverage": "1565.4125"
        },
        {
          "Gene": "CHEK2",
          "Chr": "chr22",
          "Start": "29130312",
          "End": "29130792",
          "MinCoverage": "352",
          "MaxCoverage": "8813",
          "TotCoverage": "478483",
          "MeanCoverage": "996.8395833333333"
        },
        {
          "Gene": "CHEK2",
          "Chr": "chr22",
          "Start": "29133169",
          "End": "29133349",
          "MinCoverage": "458",
          "MaxCoverage": "8304",
          "TotCoverage": "160312",
          "MeanCoverage": "890.6222222222223"
        },
        {
          "Gene": "CHEK2",
          "Chr": "chr22",
          "Start": "29137669",
          "End": "29137909",
          "MinCoverage": "419",
          "MaxCoverage": "8816",
          "TotCoverage": "228185",
          "MeanCoverage": "950.7708333333334"
        },
        {
          "Gene": "HSCB",
          "Chr": "chr22",
          "Start": "29137970",
          "End": "29138390",
          "MinCoverage": "761",
          "MaxCoverage": "9138",
          "TotCoverage": "833304",
          "MeanCoverage": "1984.057142857143"
        },
        {
          "Gene": "EWSR1",
          "Chr": "chr22",
          "Start": "29664303",
          "End": "29664483",
          "MinCoverage": "67",
          "MaxCoverage": "585",
          "TotCoverage": "21881",
          "MeanCoverage": "121.56111111111112"
        },
        {
          "Gene": "EWSR1",
          "Chr": "chr22",
          "Start": "29668132",
          "End": "29668484",
          "MinCoverage": "220",
          "MaxCoverage": "4928",
          "TotCoverage": "151841",
          "MeanCoverage": "431.36647727272725"
        },
        {
          "Gene": "EWSR1",
          "Chr": "chr22",
          "Start": "29669669",
          "End": "29669909",
          "MinCoverage": "152",
          "MaxCoverage": "3780",
          "TotCoverage": "63409",
          "MeanCoverage": "264.20416666666665"
        },
        {
          "Gene": "EWSR1",
          "Chr": "chr22",
          "Start": "29670172",
          "End": "29670352",
          "MinCoverage": "303",
          "MaxCoverage": "5718",
          "TotCoverage": "124387",
          "MeanCoverage": "691.0388888888889"
        },
        {
          "Gene": "EWSR1",
          "Chr": "chr22",
          "Start": "29673991",
          "End": "29674231",
          "MinCoverage": "110",
          "MaxCoverage": "3178",
          "TotCoverage": "86687",
          "MeanCoverage": "361.1958333333333"
        },
        {
          "Gene": "EWSR1",
          "Chr": "chr22",
          "Start": "29678349",
          "End": "29678589",
          "MinCoverage": "273",
          "MaxCoverage": "3996",
          "TotCoverage": "90370",
          "MeanCoverage": "376.5416666666667"
        },
        {
          "Gene": "EWSR1",
          "Chr": "chr22",
          "Start": "29682896",
          "End": "29683136",
          "MinCoverage": "249",
          "MaxCoverage": "4935",
          "TotCoverage": "124524",
          "MeanCoverage": "518.85"
        },
        {
          "Gene": "EWSR1",
          "Chr": "chr22",
          "Start": "29684564",
          "End": "29684804",
          "MinCoverage": "74",
          "MaxCoverage": "2254",
          "TotCoverage": "50691",
          "MeanCoverage": "211.2125"
        },
        {
          "Gene": "EWSR1",
          "Chr": "chr22",
          "Start": "29686356",
          "End": "29686536",
          "MinCoverage": "267",
          "MaxCoverage": "5056",
          "TotCoverage": "100617",
          "MeanCoverage": "558.9833333333333"
        },
        {
          "Gene": "EWSR1",
          "Chr": "chr22",
          "Start": "29687479",
          "End": "29687659",
          "MinCoverage": "78",
          "MaxCoverage": "1728",
          "TotCoverage": "29506",
          "MeanCoverage": "163.92222222222222"
        },
        {
          "Gene": "EWSR1",
          "Chr": "chr22",
          "Start": "29688051",
          "End": "29688231",
          "MinCoverage": "234",
          "MaxCoverage": "4849",
          "TotCoverage": "65291",
          "MeanCoverage": "362.72777777777776"
        },
        {
          "Gene": "EWSR1",
          "Chr": "chr22",
          "Start": "29688415",
          "End": "29688655",
          "MinCoverage": "337",
          "MaxCoverage": "4422",
          "TotCoverage": "160974",
          "MeanCoverage": "670.725"
        },
        {
          "Gene": "EWSR1",
          "Chr": "chr22",
          "Start": "29692173",
          "End": "29692413",
          "MinCoverage": "157",
          "MaxCoverage": "3910",
          "TotCoverage": "84038",
          "MeanCoverage": "350.15833333333336"
        },
        {
          "Gene": "EWSR1",
          "Chr": "chr22",
          "Start": "29693757",
          "End": "29693997",
          "MinCoverage": "108",
          "MaxCoverage": "4576",
          "TotCoverage": "45855",
          "MeanCoverage": "191.0625"
        },
        {
          "Gene": "EWSR1",
          "Chr": "chr22",
          "Start": "29694683",
          "End": "29694923",
          "MinCoverage": "56",
          "MaxCoverage": "1728",
          "TotCoverage": "50007",
          "MeanCoverage": "208.3625"
        },
        {
          "Gene": "EWSR1",
          "Chr": "chr22",
          "Start": "29695132",
          "End": "29695372",
          "MinCoverage": "235",
          "MaxCoverage": "7776",
          "TotCoverage": "101638",
          "MeanCoverage": "423.4916666666667"
        },
        {
          "Gene": "EWSR1",
          "Chr": "chr22",
          "Start": "29695564",
          "End": "29695864",
          "MinCoverage": "78",
          "MaxCoverage": "2105",
          "TotCoverage": "78042",
          "MeanCoverage": "260.14"
        },
        {
          "Gene": "EWSR1",
          "Chr": "chr22",
          "Start": "29696041",
          "End": "29696221",
          "MinCoverage": "206",
          "MaxCoverage": "4515",
          "TotCoverage": "92778",
          "MeanCoverage": "515.4333333333333"
        },
        {
          "Gene": "NF2",
          "Chr": "chr22",
          "Start": "29999492",
          "End": "30000152",
          "MinCoverage": "41",
          "MaxCoverage": "5560",
          "TotCoverage": "565956",
          "MeanCoverage": "857.5090909090909"
        },
        {
          "Gene": "NF2",
          "Chr": "chr22",
          "Start": "30032664",
          "End": "30032964",
          "MinCoverage": "78",
          "MaxCoverage": "5550",
          "TotCoverage": "109353",
          "MeanCoverage": "364.51"
        },
        {
          "Gene": "NF2",
          "Chr": "chr22",
          "Start": "30035019",
          "End": "30035259",
          "MinCoverage": "272",
          "MaxCoverage": "5720",
          "TotCoverage": "115433",
          "MeanCoverage": "480.97083333333336"
        },
        {
          "Gene": "NF2",
          "Chr": "chr22",
          "Start": "30038112",
          "End": "30038352",
          "MinCoverage": "312",
          "MaxCoverage": "5410",
          "TotCoverage": "125355",
          "MeanCoverage": "522.3125"
        },
        {
          "Gene": "NF2",
          "Chr": "chr22",
          "Start": "30050559",
          "End": "30050799",
          "MinCoverage": "165",
          "MaxCoverage": "4716",
          "TotCoverage": "97366",
          "MeanCoverage": "405.69166666666666"
        },
        {
          "Gene": "NF2",
          "Chr": "chr22",
          "Start": "30051503",
          "End": "30051743",
          "MinCoverage": "67",
          "MaxCoverage": "5112",
          "TotCoverage": "85599",
          "MeanCoverage": "356.6625"
        },
        {
          "Gene": "NF2",
          "Chr": "chr22",
          "Start": "30054095",
          "End": "30054335",
          "MinCoverage": "163",
          "MaxCoverage": "4810",
          "TotCoverage": "78061",
          "MeanCoverage": "325.25416666666666"
        },
        {
          "Gene": "NF2",
          "Chr": "chr22",
          "Start": "30057140",
          "End": "30057380",
          "MinCoverage": "72",
          "MaxCoverage": "3304",
          "TotCoverage": "73701",
          "MeanCoverage": "307.0875"
        },
        {
          "Gene": "NF2",
          "Chr": "chr22",
          "Start": "30060895",
          "End": "30061135",
          "MinCoverage": "302",
          "MaxCoverage": "5240",
          "TotCoverage": "117069",
          "MeanCoverage": "487.7875"
        },
        {
          "Gene": "NF2",
          "Chr": "chr22",
          "Start": "30064258",
          "End": "30064498",
          "MinCoverage": "76",
          "MaxCoverage": "2464",
          "TotCoverage": "49327",
          "MeanCoverage": "205.52916666666667"
        },
        {
          "Gene": "NF2",
          "Chr": "chr22",
          "Start": "30067755",
          "End": "30067995",
          "MinCoverage": "286",
          "MaxCoverage": "4315",
          "TotCoverage": "171852",
          "MeanCoverage": "716.05"
        },
        {
          "Gene": "NF2",
          "Chr": "chr22",
          "Start": "30069186",
          "End": "30069546",
          "MinCoverage": "142",
          "MaxCoverage": "2884",
          "TotCoverage": "167356",
          "MeanCoverage": "464.8777777777778"
        },
        {
          "Gene": "NF2",
          "Chr": "chr22",
          "Start": "30070757",
          "End": "30070997",
          "MinCoverage": "544",
          "MaxCoverage": "7188",
          "TotCoverage": "290967",
          "MeanCoverage": "1212.3625"
        },
        {
          "Gene": "NF2",
          "Chr": "chr22",
          "Start": "30074128",
          "End": "30074368",
          "MinCoverage": "444",
          "MaxCoverage": "8176",
          "TotCoverage": "155290",
          "MeanCoverage": "647.0416666666666"
        },
        {
          "Gene": "NF2",
          "Chr": "chr22",
          "Start": "30077358",
          "End": "30077658",
          "MinCoverage": "132",
          "MaxCoverage": "4640",
          "TotCoverage": "140333",
          "MeanCoverage": "467.77666666666664"
        },
        {
          "Gene": "NF2",
          "Chr": "chr22",
          "Start": "30078895",
          "End": "30079975",
          "MinCoverage": "210",
          "MaxCoverage": "14145",
          "TotCoverage": "1072035",
          "MeanCoverage": "992.625"
        },
        {
          "Gene": "EP300",
          "Chr": "chr22",
          "Start": "41488396",
          "End": "41489167",
          "MinCoverage": "10",
          "MaxCoverage": "9768",
          "TotCoverage": "986632",
          "MeanCoverage": "1279.6783398184177"
        },
        {
          "Gene": "EP300",
          "Chr": "chr22",
          "Start": "41513117",
          "End": "41513897",
          "MinCoverage": "262",
          "MaxCoverage": "9880",
          "TotCoverage": "470592",
          "MeanCoverage": "603.3230769230769"
        },
        {
          "Gene": "EP300",
          "Chr": "chr22",
          "Start": "41521805",
          "End": "41522105",
          "MinCoverage": "258",
          "MaxCoverage": "8340",
          "TotCoverage": "223336",
          "MeanCoverage": "744.4533333333334"
        },
        {
          "Gene": "EP300",
          "Chr": "chr22",
          "Start": "41523411",
          "End": "41523831",
          "MinCoverage": "645",
          "MaxCoverage": "10592",
          "TotCoverage": "532604",
          "MeanCoverage": "1268.104761904762"
        },
        {
          "Gene": "EP300",
          "Chr": "chr22",
          "Start": "41525830",
          "End": "41526070",
          "MinCoverage": "174",
          "MaxCoverage": "6520",
          "TotCoverage": "171276",
          "MeanCoverage": "713.65"
        },
        {
          "Gene": "EP300",
          "Chr": "chr22",
          "Start": "41527334",
          "End": "41527694",
          "MinCoverage": "348",
          "MaxCoverage": "12168",
          "TotCoverage": "330465",
          "MeanCoverage": "917.9583333333334"
        },
        {
          "Gene": "EP300",
          "Chr": "chr22",
          "Start": "41531743",
          "End": "41531983",
          "MinCoverage": "192",
          "MaxCoverage": "9905",
          "TotCoverage": "193528",
          "MeanCoverage": "806.3666666666667"
        },
        {
          "Gene": "EP300",
          "Chr": "chr22",
          "Start": "41533605",
          "End": "41533845",
          "MinCoverage": "390",
          "MaxCoverage": "11590",
          "TotCoverage": "289404",
          "MeanCoverage": "1205.85"
        },
        {
          "Gene": "EP300",
          "Chr": "chr22",
          "Start": "41536082",
          "End": "41536322",
          "MinCoverage": "341",
          "MaxCoverage": "11376",
          "TotCoverage": "210354",
          "MeanCoverage": "876.475"
        },
        {
          "Gene": "EP300",
          "Chr": "chr22",
          "Start": "41536988",
          "End": "41537288",
          "MinCoverage": "238",
          "MaxCoverage": "8200",
          "TotCoverage": "171606",
          "MeanCoverage": "572.02"
        },
        {
          "Gene": "EP300",
          "Chr": "chr22",
          "Start": "41542609",
          "End": "41543014",
          "MinCoverage": "223",
          "MaxCoverage": "9640",
          "TotCoverage": "264143",
          "MeanCoverage": "652.204938271605"
        },
        {
          "Gene": "EP300",
          "Chr": "chr22",
          "Start": "41545713",
          "End": "41546253",
          "MinCoverage": "370",
          "MaxCoverage": "19015",
          "TotCoverage": "1346883",
          "MeanCoverage": "2494.2277777777776"
        },
        {
          "Gene": "EP300",
          "Chr": "chr22",
          "Start": "41547776",
          "End": "41548076",
          "MinCoverage": "624",
          "MaxCoverage": "11520",
          "TotCoverage": "419954",
          "MeanCoverage": "1399.8466666666666"
        },
        {
          "Gene": "EP300",
          "Chr": "chr22",
          "Start": "41548131",
          "End": "41548431",
          "MinCoverage": "152",
          "MaxCoverage": "6096",
          "TotCoverage": "142721",
          "MeanCoverage": "475.7366666666667"
        },
        {
          "Gene": "EP300",
          "Chr": "chr22",
          "Start": "41550933",
          "End": "41551177",
          "MinCoverage": "368",
          "MaxCoverage": "12618",
          "TotCoverage": "272908",
          "MeanCoverage": "1118.4754098360656"
        },
        {
          "Gene": "EP300",
          "Chr": "chr22",
          "Start": "41553112",
          "End": "41553472",
          "MinCoverage": "443",
          "MaxCoverage": "9600",
          "TotCoverage": "361777",
          "MeanCoverage": "1004.9361111111111"
        },
        {
          "Gene": "EP300",
          "Chr": "chr22",
          "Start": "41554339",
          "End": "41554579",
          "MinCoverage": "90",
          "MaxCoverage": "7695",
          "TotCoverage": "141048",
          "MeanCoverage": "587.7"
        },
        {
          "Gene": "EP300",
          "Chr": "chr22",
          "Start": "41556565",
          "End": "41556805",
          "MinCoverage": "520",
          "MaxCoverage": "7641",
          "TotCoverage": "175852",
          "MeanCoverage": "732.7166666666667"
        },
        {
          "Gene": "EP300",
          "Chr": "chr22",
          "Start": "41562516",
          "End": "41562758",
          "MinCoverage": "345",
          "MaxCoverage": "7440",
          "TotCoverage": "162947",
          "MeanCoverage": "673.3347107438017"
        },
        {
          "Gene": "EP300",
          "Chr": "chr22",
          "Start": "41564377",
          "End": "41564947",
          "MinCoverage": "597",
          "MaxCoverage": "14180",
          "TotCoverage": "693246",
          "MeanCoverage": "1216.221052631579"
        },
        {
          "Gene": "EP300",
          "Chr": "chr22",
          "Start": "41565443",
          "End": "41565683",
          "MinCoverage": "317",
          "MaxCoverage": "9251",
          "TotCoverage": "178699",
          "MeanCoverage": "744.5791666666667"
        },
        {
          "Gene": "EP300",
          "Chr": "chr22",
          "Start": "41566342",
          "End": "41566642",
          "MinCoverage": "446",
          "MaxCoverage": "16650",
          "TotCoverage": "359941",
          "MeanCoverage": "1199.8033333333333"
        },
        {
          "Gene": "EP300",
          "Chr": "chr22",
          "Start": "41568434",
          "End": "41568734",
          "MinCoverage": "161",
          "MaxCoverage": "11484",
          "TotCoverage": "287789",
          "MeanCoverage": "959.2966666666666"
        },
        {
          "Gene": "EP300",
          "Chr": "chr22",
          "Start": "41569552",
          "End": "41569852",
          "MinCoverage": "220",
          "MaxCoverage": "6713",
          "TotCoverage": "193071",
          "MeanCoverage": "643.57"
        },
        {
          "Gene": "EP300",
          "Chr": "chr22",
          "Start": "41572150",
          "End": "41572586",
          "MinCoverage": "280",
          "MaxCoverage": "10524",
          "TotCoverage": "683913",
          "MeanCoverage": "1568.6077981651376"
        },
        {
          "Gene": "FANCD2",
          "Chr": "chr3",
          "Start": "10070236",
          "End": "10070476",
          "MinCoverage": "190",
          "MaxCoverage": "6350",
          "TotCoverage": "112978",
          "MeanCoverage": "470.7416666666667"
        },
        {
          "Gene": "FANCD2",
          "Chr": "chr3",
          "Start": "10074435",
          "End": "10074735",
          "MinCoverage": "395",
          "MaxCoverage": "11676",
          "TotCoverage": "174951",
          "MeanCoverage": "583.17"
        },
        {
          "Gene": "FANCD2",
          "Chr": "chr3",
          "Start": "10076066",
          "End": "10076590",
          "MinCoverage": "129",
          "MaxCoverage": "8129",
          "TotCoverage": "289485",
          "MeanCoverage": "552.4522900763359"
        },
        {
          "Gene": "FANCD2",
          "Chr": "chr3",
          "Start": "10076766",
          "End": "10077006",
          "MinCoverage": "199",
          "MaxCoverage": "8721",
          "TotCoverage": "174525",
          "MeanCoverage": "727.1875"
        },
        {
          "Gene": "FANCD2",
          "Chr": "chr3",
          "Start": "10077895",
          "End": "10078135",
          "MinCoverage": "145",
          "MaxCoverage": "9608",
          "TotCoverage": "170970",
          "MeanCoverage": "712.375"
        },
        {
          "Gene": "FANCD2",
          "Chr": "chr3",
          "Start": "10080911",
          "End": "10081091",
          "MinCoverage": "321",
          "MaxCoverage": "4653",
          "TotCoverage": "70098",
          "MeanCoverage": "389.43333333333334"
        },
        {
          "Gene": "FANCD2",
          "Chr": "chr3",
          "Start": "10081362",
          "End": "10081602",
          "MinCoverage": "139",
          "MaxCoverage": "3840",
          "TotCoverage": "74734",
          "MeanCoverage": "311.39166666666665"
        },
        {
          "Gene": "FANCD2",
          "Chr": "chr3",
          "Start": "10082181",
          "End": "10082361",
          "MinCoverage": "135",
          "MaxCoverage": "3410",
          "TotCoverage": "50695",
          "MeanCoverage": "281.6388888888889"
        },
        {
          "Gene": "FANCD2",
          "Chr": "chr3",
          "Start": "10083260",
          "End": "10083440",
          "MinCoverage": "386",
          "MaxCoverage": "11970",
          "TotCoverage": "110238",
          "MeanCoverage": "612.4333333333333"
        },
        {
          "Gene": "FANCD2",
          "Chr": "chr3",
          "Start": "10084174",
          "End": "10084414",
          "MinCoverage": "542",
          "MaxCoverage": "14652",
          "TotCoverage": "292828",
          "MeanCoverage": "1220.1166666666666"
        },
        {
          "Gene": "FANCD2",
          "Chr": "chr3",
          "Start": "10084663",
          "End": "10084903",
          "MinCoverage": "313",
          "MaxCoverage": "12560",
          "TotCoverage": "153879",
          "MeanCoverage": "641.1625"
        },
        {
          "Gene": "FANCD2",
          "Chr": "chr3",
          "Start": "10085101",
          "End": "10085341",
          "MinCoverage": "412",
          "MaxCoverage": "5315",
          "TotCoverage": "172590",
          "MeanCoverage": "719.125"
        },
        {
          "Gene": "FANCD2",
          "Chr": "chr3",
          "Start": "10085440",
          "End": "10085620",
          "MinCoverage": "108",
          "MaxCoverage": "5922",
          "TotCoverage": "47651",
          "MeanCoverage": "264.72777777777776"
        },
        {
          "Gene": "FANCD2",
          "Chr": "chr3",
          "Start": "10088198",
          "End": "10088524",
          "MinCoverage": "276",
          "MaxCoverage": "6900",
          "TotCoverage": "250801",
          "MeanCoverage": "769.3282208588957"
        },
        {
          "Gene": "FANCD2",
          "Chr": "chr3",
          "Start": "10089547",
          "End": "10089787",
          "MinCoverage": "520",
          "MaxCoverage": "9834",
          "TotCoverage": "316031",
          "MeanCoverage": "1316.7958333333333"
        },
        {
          "Gene": "FANCD2",
          "Chr": "chr3",
          "Start": "10091003",
          "End": "10091243",
          "MinCoverage": "370",
          "MaxCoverage": "11888",
          "TotCoverage": "284227",
          "MeanCoverage": "1184.2791666666667"
        },
        {
          "Gene": "FANCD2",
          "Chr": "chr3",
          "Start": "10093985",
          "End": "10094225",
          "MinCoverage": "691",
          "MaxCoverage": "11648",
          "TotCoverage": "357727",
          "MeanCoverage": "1490.5291666666667"
        },
        {
          "Gene": "FANCD2",
          "Chr": "chr3",
          "Start": "10101912",
          "End": "10102152",
          "MinCoverage": "173",
          "MaxCoverage": "7533",
          "TotCoverage": "129334",
          "MeanCoverage": "538.8916666666667"
        },
        {
          "Gene": "FANCD2",
          "Chr": "chr3",
          "Start": "10103821",
          "End": "10103941",
          "MinCoverage": "1122",
          "MaxCoverage": "5980",
          "TotCoverage": "187398",
          "MeanCoverage": "1561.65"
        },
        {
          "Gene": "FANCD2",
          "Chr": "chr3",
          "Start": "10105415",
          "End": "10105655",
          "MinCoverage": "185",
          "MaxCoverage": "6710",
          "TotCoverage": "223946",
          "MeanCoverage": "933.1083333333333"
        },
        {
          "Gene": "FANCD2",
          "Chr": "chr3",
          "Start": "10105981",
          "End": "10106221",
          "MinCoverage": "170",
          "MaxCoverage": "5184",
          "TotCoverage": "126979",
          "MeanCoverage": "529.0791666666667"
        },
        {
          "Gene": "FANCD2",
          "Chr": "chr3",
          "Start": "10106335",
          "End": "10106635",
          "MinCoverage": "357",
          "MaxCoverage": "9048",
          "TotCoverage": "218393",
          "MeanCoverage": "727.9766666666667"
        },
        {
          "Gene": "FANCD2",
          "Chr": "chr3",
          "Start": "10107007",
          "End": "10107247",
          "MinCoverage": "217",
          "MaxCoverage": "6048",
          "TotCoverage": "107730",
          "MeanCoverage": "448.875"
        },
        {
          "Gene": "FANCD2",
          "Chr": "chr3",
          "Start": "10107485",
          "End": "10107725",
          "MinCoverage": "200",
          "MaxCoverage": "6069",
          "TotCoverage": "135707",
          "MeanCoverage": "565.4458333333333"
        },
        {
          "Gene": "FANCD2",
          "Chr": "chr3",
          "Start": "10108826",
          "End": "10109066",
          "MinCoverage": "258",
          "MaxCoverage": "7203",
          "TotCoverage": "169471",
          "MeanCoverage": "706.1291666666667"
        },
        {
          "Gene": "FANCD2",
          "Chr": "chr3",
          "Start": "10114489",
          "End": "10114729",
          "MinCoverage": "202",
          "MaxCoverage": "5920",
          "TotCoverage": "121357",
          "MeanCoverage": "505.65416666666664"
        },
        {
          "Gene": "FANCD2",
          "Chr": "chr3",
          "Start": "10114871",
          "End": "10115111",
          "MinCoverage": "184",
          "MaxCoverage": "6728",
          "TotCoverage": "149539",
          "MeanCoverage": "623.0791666666667"
        },
        {
          "Gene": "FANCD2",
          "Chr": "chr3",
          "Start": "10116135",
          "End": "10116435",
          "MinCoverage": "91",
          "MaxCoverage": "7728",
          "TotCoverage": "182412",
          "MeanCoverage": "608.04"
        },
        {
          "Gene": "FANCD2",
          "Chr": "chr3",
          "Start": "10119702",
          "End": "10119942",
          "MinCoverage": "242",
          "MaxCoverage": "5819",
          "TotCoverage": "130970",
          "MeanCoverage": "545.7083333333334"
        },
        {
          "Gene": "FANCD2,FANCD2OS",
          "Chr": "chr3",
          "Start": "10122727",
          "End": "10123269",
          "MinCoverage": "362",
          "MaxCoverage": "16880",
          "TotCoverage": "760969",
          "MeanCoverage": "1404.0018450184502"
        },
        {
          "Gene": "FANCD2,FANCD2OS",
          "Chr": "chr3",
          "Start": "10127430",
          "End": "10127670",
          "MinCoverage": "538",
          "MaxCoverage": "13566",
          "TotCoverage": "345648",
          "MeanCoverage": "1440.2"
        },
        {
          "Gene": "FANCD2,FANCD2OS",
          "Chr": "chr3",
          "Start": "10128744",
          "End": "10129148",
          "MinCoverage": "572",
          "MaxCoverage": "9552",
          "TotCoverage": "477553",
          "MeanCoverage": "1182.0618811881188"
        },
        {
          "Gene": "FANCD2,FANCD2OS",
          "Chr": "chr3",
          "Start": "10130089",
          "End": "10130269",
          "MinCoverage": "100",
          "MaxCoverage": "2430",
          "TotCoverage": "48138",
          "MeanCoverage": "267.43333333333334"
        },
        {
          "Gene": "FANCD2,FANCD2OS",
          "Chr": "chr3",
          "Start": "10130452",
          "End": "10130692",
          "MinCoverage": "310",
          "MaxCoverage": "7252",
          "TotCoverage": "202296",
          "MeanCoverage": "842.9"
        },
        {
          "Gene": "FANCD2,FANCD2OS",
          "Chr": "chr3",
          "Start": "10131932",
          "End": "10132112",
          "MinCoverage": "80",
          "MaxCoverage": "4246",
          "TotCoverage": "47123",
          "MeanCoverage": "261.7944444444444"
        },
        {
          "Gene": "FANCD2,FANCD2OS",
          "Chr": "chr3",
          "Start": "10133780",
          "End": "10134020",
          "MinCoverage": "412",
          "MaxCoverage": "7380",
          "TotCoverage": "237544",
          "MeanCoverage": "989.7666666666667"
        },
        {
          "Gene": "FANCD2,FANCD2OS",
          "Chr": "chr3",
          "Start": "10134867",
          "End": "10135107",
          "MinCoverage": "347",
          "MaxCoverage": "9549",
          "TotCoverage": "216350",
          "MeanCoverage": "901.4583333333334"
        },
        {
          "Gene": "FANCD2,FANCD2OS",
          "Chr": "chr3",
          "Start": "10135889",
          "End": "10136129",
          "MinCoverage": "299",
          "MaxCoverage": "5060",
          "TotCoverage": "137737",
          "MeanCoverage": "573.9041666666667"
        },
        {
          "Gene": "FANCD2,FANCD2OS",
          "Chr": "chr3",
          "Start": "10136800",
          "End": "10137040",
          "MinCoverage": "452",
          "MaxCoverage": "8976",
          "TotCoverage": "157823",
          "MeanCoverage": "657.5958333333333"
        },
        {
          "Gene": "FANCD2,FANCD2OS",
          "Chr": "chr3",
          "Start": "10137962",
          "End": "10138202",
          "MinCoverage": "186",
          "MaxCoverage": "8107",
          "TotCoverage": "126764",
          "MeanCoverage": "528.1833333333333"
        },
        {
          "Gene": "FANCD2,FANCD2OS",
          "Chr": "chr3",
          "Start": "10140328",
          "End": "10141182",
          "MinCoverage": "264",
          "MaxCoverage": "11154",
          "TotCoverage": "793141",
          "MeanCoverage": "928.7365339578454"
        },
        {
          "Gene": "FANCD2,FANCD2OS",
          "Chr": "chr3",
          "Start": "10142818",
          "End": "10143092",
          "MinCoverage": "194",
          "MaxCoverage": "13923",
          "TotCoverage": "259462",
          "MeanCoverage": "946.9416058394161"
        },
        {
          "Gene": "FANCD2,FANCD2OS",
          "Chr": "chr3",
          "Start": "10143314",
          "End": "10143665",
          "MinCoverage": "299",
          "MaxCoverage": "10952",
          "TotCoverage": "298857",
          "MeanCoverage": "851.4444444444445"
        },
        {
          "Gene": "VHL",
          "Chr": "chr3",
          "Start": "10183687",
          "End": "10183958",
          "MinCoverage": "262",
          "MaxCoverage": "4419",
          "TotCoverage": "261621",
          "MeanCoverage": "965.3911439114391"
        },
        {
          "Gene": "VHL",
          "Chr": "chr3",
          "Start": "10188162",
          "End": "10188407",
          "MinCoverage": "925",
          "MaxCoverage": "19016",
          "TotCoverage": "435271",
          "MeanCoverage": "1776.6163265306122"
        },
        {
          "Gene": "VHL",
          "Chr": "chr3",
          "Start": "10191372",
          "End": "10191636",
          "MinCoverage": "414",
          "MaxCoverage": "12368",
          "TotCoverage": "213383",
          "MeanCoverage": "808.2689393939394"
        },
        {
          "Gene": "XPC",
          "Chr": "chr3",
          "Start": "14188714",
          "End": "14188954",
          "MinCoverage": "198",
          "MaxCoverage": "3225",
          "TotCoverage": "119176",
          "MeanCoverage": "496.56666666666666"
        },
        {
          "Gene": "XPC",
          "Chr": "chr3",
          "Start": "14189334",
          "End": "14189574",
          "MinCoverage": "534",
          "MaxCoverage": "4900",
          "TotCoverage": "236679",
          "MeanCoverage": "986.1625"
        },
        {
          "Gene": "XPC",
          "Chr": "chr3",
          "Start": "14189984",
          "End": "14190524",
          "MinCoverage": "632",
          "MaxCoverage": "5727",
          "TotCoverage": "799612",
          "MeanCoverage": "1480.762962962963"
        },
        {
          "Gene": "XPC",
          "Chr": "chr3",
          "Start": "14197764",
          "End": "14198064",
          "MinCoverage": "461",
          "MaxCoverage": "7847",
          "TotCoverage": "239333",
          "MeanCoverage": "797.7766666666666"
        },
        {
          "Gene": "XPC",
          "Chr": "chr3",
          "Start": "14199450",
          "End": "14200470",
          "MinCoverage": "205",
          "MaxCoverage": "12381",
          "TotCoverage": "1645352",
          "MeanCoverage": "1613.0901960784313"
        },
        {
          "Gene": "XPC",
          "Chr": "chr3",
          "Start": "14206252",
          "End": "14206492",
          "MinCoverage": "457",
          "MaxCoverage": "10300",
          "TotCoverage": "268156",
          "MeanCoverage": "1117.3166666666666"
        },
        {
          "Gene": "XPC",
          "Chr": "chr3",
          "Start": "14211873",
          "End": "14212113",
          "MinCoverage": "220",
          "MaxCoverage": "7917",
          "TotCoverage": "184983",
          "MeanCoverage": "770.7625"
        },
        {
          "Gene": "XPC",
          "Chr": "chr3",
          "Start": "14214314",
          "End": "14214614",
          "MinCoverage": "223",
          "MaxCoverage": "6904",
          "TotCoverage": "201017",
          "MeanCoverage": "670.0566666666666"
        },
        {
          "Gene": "LSM3,XPC",
          "Chr": "chr3",
          "Start": "14219903",
          "End": "14220443",
          "MinCoverage": "228",
          "MaxCoverage": "19832",
          "TotCoverage": "1263321",
          "MeanCoverage": "2339.483333333333"
        },
        {
          "Gene": "MLH1",
          "Chr": "chr3",
          "Start": "37035204",
          "End": "37035444",
          "MinCoverage": "434",
          "MaxCoverage": "7092",
          "TotCoverage": "227958",
          "MeanCoverage": "949.825"
        },
        {
          "Gene": "MLH1",
          "Chr": "chr3",
          "Start": "37038034",
          "End": "37038274",
          "MinCoverage": "335",
          "MaxCoverage": "5775",
          "TotCoverage": "155637",
          "MeanCoverage": "648.4875"
        },
        {
          "Gene": "MLH1",
          "Chr": "chr3",
          "Start": "37042374",
          "End": "37042614",
          "MinCoverage": "469",
          "MaxCoverage": "9449",
          "TotCoverage": "179175",
          "MeanCoverage": "746.5625"
        },
        {
          "Gene": "MLH1",
          "Chr": "chr3",
          "Start": "37045808",
          "End": "37046048",
          "MinCoverage": "434",
          "MaxCoverage": "9037",
          "TotCoverage": "185836",
          "MeanCoverage": "774.3166666666667"
        },
        {
          "Gene": "MLH1",
          "Chr": "chr3",
          "Start": "37048397",
          "End": "37048637",
          "MinCoverage": "169",
          "MaxCoverage": "10373",
          "TotCoverage": "180648",
          "MeanCoverage": "752.7"
        },
        {
          "Gene": "MLH1",
          "Chr": "chr3",
          "Start": "37050230",
          "End": "37050470",
          "MinCoverage": "294",
          "MaxCoverage": "12040",
          "TotCoverage": "220449",
          "MeanCoverage": "918.5375"
        },
        {
          "Gene": "MLH1",
          "Chr": "chr3",
          "Start": "37053211",
          "End": "37053665",
          "MinCoverage": "215",
          "MaxCoverage": "13032",
          "TotCoverage": "617390",
          "MeanCoverage": "1359.8898678414098"
        },
        {
          "Gene": "MLH1",
          "Chr": "chr3",
          "Start": "37055858",
          "End": "37056098",
          "MinCoverage": "276",
          "MaxCoverage": "9099",
          "TotCoverage": "215594",
          "MeanCoverage": "898.3083333333333"
        },
        {
          "Gene": "MLH1",
          "Chr": "chr3",
          "Start": "37058923",
          "End": "37059163",
          "MinCoverage": "608",
          "MaxCoverage": "13230",
          "TotCoverage": "249303",
          "MeanCoverage": "1038.7625"
        },
        {
          "Gene": "MLH1",
          "Chr": "chr3",
          "Start": "37061727",
          "End": "37062027",
          "MinCoverage": "264",
          "MaxCoverage": "8181",
          "TotCoverage": "262906",
          "MeanCoverage": "876.3533333333334"
        },
        {
          "Gene": "MLH1",
          "Chr": "chr3",
          "Start": "37067005",
          "End": "37067581",
          "MinCoverage": "62",
          "MaxCoverage": "18249",
          "TotCoverage": "308006",
          "MeanCoverage": "534.7326388888889"
        },
        {
          "Gene": "MLH1",
          "Chr": "chr3",
          "Start": "37070198",
          "End": "37070498",
          "MinCoverage": "265",
          "MaxCoverage": "6832",
          "TotCoverage": "228563",
          "MeanCoverage": "761.8766666666667"
        },
        {
          "Gene": "MLH1",
          "Chr": "chr3",
          "Start": "37081610",
          "End": "37081850",
          "MinCoverage": "507",
          "MaxCoverage": "11256",
          "TotCoverage": "208625",
          "MeanCoverage": "869.2708333333334"
        },
        {
          "Gene": "MLH1",
          "Chr": "chr3",
          "Start": "37083670",
          "End": "37083910",
          "MinCoverage": "424",
          "MaxCoverage": "11940",
          "TotCoverage": "207931",
          "MeanCoverage": "866.3791666666667"
        },
        {
          "Gene": "MLH1",
          "Chr": "chr3",
          "Start": "37088941",
          "End": "37089241",
          "MinCoverage": "335",
          "MaxCoverage": "9268",
          "TotCoverage": "167215",
          "MeanCoverage": "557.3833333333333"
        },
        {
          "Gene": "MLH1",
          "Chr": "chr3",
          "Start": "37089933",
          "End": "37090173",
          "MinCoverage": "470",
          "MaxCoverage": "8380",
          "TotCoverage": "166811",
          "MeanCoverage": "695.0458333333333"
        },
        {
          "Gene": "MLH1",
          "Chr": "chr3",
          "Start": "37090331",
          "End": "37090571",
          "MinCoverage": "515",
          "MaxCoverage": "9891",
          "TotCoverage": "223884",
          "MeanCoverage": "932.85"
        },
        {
          "Gene": "MLH1",
          "Chr": "chr3",
          "Start": "37091916",
          "End": "37092396",
          "MinCoverage": "221",
          "MaxCoverage": "10846",
          "TotCoverage": "337633",
          "MeanCoverage": "703.4020833333333"
        },
        {
          "Gene": "MYD88",
          "Chr": "chr3",
          "Start": "38179913",
          "End": "38180573",
          "MinCoverage": "501",
          "MaxCoverage": "15532",
          "TotCoverage": "1529754",
          "MeanCoverage": "2317.809090909091"
        },
        {
          "Gene": "MYD88",
          "Chr": "chr3",
          "Start": "38181287",
          "End": "38182413",
          "MinCoverage": "122",
          "MaxCoverage": "12870",
          "TotCoverage": "1244698",
          "MeanCoverage": "1105.4156305506217"
        },
        {
          "Gene": "MYD88",
          "Chr": "chr3",
          "Start": "38182579",
          "End": "38182819",
          "MinCoverage": "285",
          "MaxCoverage": "6327",
          "TotCoverage": "164778",
          "MeanCoverage": "686.575"
        },
        {
          "Gene": "CTNNB1",
          "Chr": "chr3",
          "Start": "41265421",
          "End": "41265866",
          "MinCoverage": "258",
          "MaxCoverage": "6936",
          "TotCoverage": "271333",
          "MeanCoverage": "609.7370786516854"
        },
        {
          "Gene": "CTNNB1",
          "Chr": "chr3",
          "Start": "41265931",
          "End": "41267418",
          "MinCoverage": "193",
          "MaxCoverage": "14880",
          "TotCoverage": "1085707",
          "MeanCoverage": "730.1324815063887"
        },
        {
          "Gene": "CTNNB1",
          "Chr": "chr3",
          "Start": "41268620",
          "End": "41268920",
          "MinCoverage": "58",
          "MaxCoverage": "6146",
          "TotCoverage": "161710",
          "MeanCoverage": "539.0333333333333"
        },
        {
          "Gene": "CTNNB1",
          "Chr": "chr3",
          "Start": "41279416",
          "End": "41279656",
          "MinCoverage": "322",
          "MaxCoverage": "7000",
          "TotCoverage": "126936",
          "MeanCoverage": "528.9"
        },
        {
          "Gene": "CTNNB1",
          "Chr": "chr3",
          "Start": "41280570",
          "End": "41282023",
          "MinCoverage": "173",
          "MaxCoverage": "9023",
          "TotCoverage": "929826",
          "MeanCoverage": "639.9353062629043"
        },
        {
          "Gene": "SETD2",
          "Chr": "chr3",
          "Start": "47057840",
          "End": "47058800",
          "MinCoverage": "89",
          "MaxCoverage": "5946",
          "TotCoverage": "538798",
          "MeanCoverage": "561.2479166666667"
        },
        {
          "Gene": "SETD2",
          "Chr": "chr3",
          "Start": "47059058",
          "End": "47059298",
          "MinCoverage": "63",
          "MaxCoverage": "4419",
          "TotCoverage": "68861",
          "MeanCoverage": "286.92083333333335"
        },
        {
          "Gene": "SETD2",
          "Chr": "chr3",
          "Start": "47061169",
          "End": "47061409",
          "MinCoverage": "240",
          "MaxCoverage": "6760",
          "TotCoverage": "117204",
          "MeanCoverage": "488.35"
        },
        {
          "Gene": "SETD2",
          "Chr": "chr3",
          "Start": "47079091",
          "End": "47079331",
          "MinCoverage": "121",
          "MaxCoverage": "6048",
          "TotCoverage": "70088",
          "MeanCoverage": "292.03333333333336"
        },
        {
          "Gene": "SETD2",
          "Chr": "chr3",
          "Start": "47084000",
          "End": "47084240",
          "MinCoverage": "240",
          "MaxCoverage": "4698",
          "TotCoverage": "99186",
          "MeanCoverage": "413.275"
        },
        {
          "Gene": "SETD2",
          "Chr": "chr3",
          "Start": "47087923",
          "End": "47088163",
          "MinCoverage": "150",
          "MaxCoverage": "3648",
          "TotCoverage": "65952",
          "MeanCoverage": "274.8"
        },
        {
          "Gene": "SETD2",
          "Chr": "chr3",
          "Start": "47098255",
          "End": "47099035",
          "MinCoverage": "237",
          "MaxCoverage": "6705",
          "TotCoverage": "357868",
          "MeanCoverage": "458.8051282051282"
        },
        {
          "Gene": "SETD2",
          "Chr": "chr3",
          "Start": "47103449",
          "End": "47103913",
          "MinCoverage": "118",
          "MaxCoverage": "10536",
          "TotCoverage": "245473",
          "MeanCoverage": "529.0366379310345"
        },
        {
          "Gene": "SETD2",
          "Chr": "chr3",
          "Start": "47108463",
          "End": "47108703",
          "MinCoverage": "114",
          "MaxCoverage": "5571",
          "TotCoverage": "96487",
          "MeanCoverage": "402.02916666666664"
        },
        {
          "Gene": "SETD2",
          "Chr": "chr3",
          "Start": "47125147",
          "End": "47125927",
          "MinCoverage": "28",
          "MaxCoverage": "10270",
          "TotCoverage": "424249",
          "MeanCoverage": "543.9089743589743"
        },
        {
          "Gene": "SETD2",
          "Chr": "chr3",
          "Start": "47127624",
          "End": "47127864",
          "MinCoverage": "195",
          "MaxCoverage": "7428",
          "TotCoverage": "102320",
          "MeanCoverage": "426.3333333333333"
        },
        {
          "Gene": "SETD2",
          "Chr": "chr3",
          "Start": "47129549",
          "End": "47129789",
          "MinCoverage": "123",
          "MaxCoverage": "5642",
          "TotCoverage": "113823",
          "MeanCoverage": "474.2625"
        },
        {
          "Gene": "SETD2",
          "Chr": "chr3",
          "Start": "47139387",
          "End": "47139627",
          "MinCoverage": "140",
          "MaxCoverage": "11292",
          "TotCoverage": "165419",
          "MeanCoverage": "689.2458333333333"
        },
        {
          "Gene": "SETD2",
          "Chr": "chr3",
          "Start": "47142866",
          "End": "47143106",
          "MinCoverage": "0",
          "MaxCoverage": "7343",
          "TotCoverage": "151742",
          "MeanCoverage": "632.2583333333333"
        },
        {
          "Gene": "SETD2",
          "Chr": "chr3",
          "Start": "47144754",
          "End": "47144994",
          "MinCoverage": "273",
          "MaxCoverage": "7962",
          "TotCoverage": "187792",
          "MeanCoverage": "782.4666666666667"
        },
        {
          "Gene": "SETD2",
          "Chr": "chr3",
          "Start": "47155227",
          "End": "47155559",
          "MinCoverage": "206",
          "MaxCoverage": "7330",
          "TotCoverage": "223221",
          "MeanCoverage": "672.3524096385543"
        },
        {
          "Gene": "SETD2",
          "Chr": "chr3",
          "Start": "47158058",
          "End": "47158298",
          "MinCoverage": "138",
          "MaxCoverage": "5288",
          "TotCoverage": "118058",
          "MeanCoverage": "491.90833333333336"
        },
        {
          "Gene": "SETD2",
          "Chr": "chr3",
          "Start": "47161604",
          "End": "47166104",
          "MinCoverage": "146",
          "MaxCoverage": "12375",
          "TotCoverage": "3423152",
          "MeanCoverage": "760.7004444444444"
        },
        {
          "Gene": "DOCK3",
          "Chr": "chr3",
          "Start": "51417516",
          "End": "51417696",
          "MinCoverage": "879",
          "MaxCoverage": "6984",
          "TotCoverage": "300157",
          "MeanCoverage": "1667.5388888888888"
        },
        {
          "Gene": "BAP1",
          "Chr": "chr3",
          "Start": "52434948",
          "End": "52436508",
          "MinCoverage": "131",
          "MaxCoverage": "7965",
          "TotCoverage": "1389465",
          "MeanCoverage": "890.6826923076923"
        },
        {
          "Gene": "BAP1",
          "Chr": "chr3",
          "Start": "52436533",
          "End": "52437025",
          "MinCoverage": "611",
          "MaxCoverage": "11400",
          "TotCoverage": "848943",
          "MeanCoverage": "1725.4939024390244"
        },
        {
          "Gene": "BAP1",
          "Chr": "chr3",
          "Start": "52437083",
          "End": "52437970",
          "MinCoverage": "272",
          "MaxCoverage": "7377",
          "TotCoverage": "1125621",
          "MeanCoverage": "1269.0202931228862"
        },
        {
          "Gene": "BAP1",
          "Chr": "chr3",
          "Start": "52438332",
          "End": "52438751",
          "MinCoverage": "211",
          "MaxCoverage": "6304",
          "TotCoverage": "241780",
          "MeanCoverage": "577.0405727923628"
        },
        {
          "Gene": "BAP1",
          "Chr": "chr3",
          "Start": "52439067",
          "End": "52439367",
          "MinCoverage": "163",
          "MaxCoverage": "2495",
          "TotCoverage": "111307",
          "MeanCoverage": "371.0233333333333"
        },
        {
          "Gene": "BAP1",
          "Chr": "chr3",
          "Start": "52439704",
          "End": "52440004",
          "MinCoverage": "249",
          "MaxCoverage": "4926",
          "TotCoverage": "186278",
          "MeanCoverage": "620.9266666666666"
        },
        {
          "Gene": "BAP1",
          "Chr": "chr3",
          "Start": "52440210",
          "End": "52440450",
          "MinCoverage": "256",
          "MaxCoverage": "5529",
          "TotCoverage": "263496",
          "MeanCoverage": "1097.9"
        },
        {
          "Gene": "BAP1",
          "Chr": "chr3",
          "Start": "52440763",
          "End": "52441003",
          "MinCoverage": "258",
          "MaxCoverage": "5094",
          "TotCoverage": "297672",
          "MeanCoverage": "1240.3"
        },
        {
          "Gene": "BAP1",
          "Chr": "chr3",
          "Start": "52441122",
          "End": "52441542",
          "MinCoverage": "326",
          "MaxCoverage": "7049",
          "TotCoverage": "383336",
          "MeanCoverage": "912.7047619047619"
        },
        {
          "Gene": "BAP1",
          "Chr": "chr3",
          "Start": "52441913",
          "End": "52442153",
          "MinCoverage": "329",
          "MaxCoverage": "4932",
          "TotCoverage": "122649",
          "MeanCoverage": "511.0375"
        },
        {
          "Gene": "BAP1",
          "Chr": "chr3",
          "Start": "52442435",
          "End": "52442675",
          "MinCoverage": "117",
          "MaxCoverage": "4688",
          "TotCoverage": "88774",
          "MeanCoverage": "369.89166666666665"
        },
        {
          "Gene": "BAP1",
          "Chr": "chr3",
          "Start": "52443476",
          "End": "52444195",
          "MinCoverage": "13",
          "MaxCoverage": "9450",
          "TotCoverage": "804288",
          "MeanCoverage": "1118.6203059805284"
        },
        {
          "Gene": "PHF7",
          "Chr": "chr3",
          "Start": "52444401",
          "End": "52445346",
          "MinCoverage": "16",
          "MaxCoverage": "11052",
          "TotCoverage": "1223389",
          "MeanCoverage": "1294.5915343915344"
        },
        {
          "Gene": "GATA2",
          "Chr": "chr3",
          "Start": "128200594",
          "End": "128200925",
          "MinCoverage": "368",
          "MaxCoverage": "10424",
          "TotCoverage": "602880",
          "MeanCoverage": "1821.3897280966767"
        },
        {
          "Gene": "GATA2",
          "Chr": "chr3",
          "Start": "128202625",
          "End": "128202925",
          "MinCoverage": "480",
          "MaxCoverage": "4341",
          "TotCoverage": "309698",
          "MeanCoverage": "1032.3266666666666"
        },
        {
          "Gene": "GATA2",
          "Chr": "chr3",
          "Start": "128204500",
          "End": "128205280",
          "MinCoverage": "186",
          "MaxCoverage": "4258",
          "TotCoverage": "856395",
          "MeanCoverage": "1097.9423076923076"
        },
        {
          "Gene": "GATA2",
          "Chr": "chr3",
          "Start": "128205572",
          "End": "128205992",
          "MinCoverage": "193",
          "MaxCoverage": "2400",
          "TotCoverage": "205461",
          "MeanCoverage": "489.1928571428571"
        },
        {
          "Gene": "TOPBP1",
          "Chr": "chr3",
          "Start": "133320045",
          "End": "133320285",
          "MinCoverage": "131",
          "MaxCoverage": "3241",
          "TotCoverage": "83163",
          "MeanCoverage": "346.5125"
        },
        {
          "Gene": "TOPBP1",
          "Chr": "chr3",
          "Start": "133327339",
          "End": "133327579",
          "MinCoverage": "348",
          "MaxCoverage": "4368",
          "TotCoverage": "152079",
          "MeanCoverage": "633.6625"
        },
        {
          "Gene": "TOPBP1",
          "Chr": "chr3",
          "Start": "133327671",
          "End": "133327851",
          "MinCoverage": "107",
          "MaxCoverage": "7047",
          "TotCoverage": "101323",
          "MeanCoverage": "562.9055555555556"
        },
        {
          "Gene": "TOPBP1",
          "Chr": "chr3",
          "Start": "133329796",
          "End": "133330036",
          "MinCoverage": "281",
          "MaxCoverage": "9780",
          "TotCoverage": "123669",
          "MeanCoverage": "515.2875"
        },
        {
          "Gene": "TOPBP1",
          "Chr": "chr3",
          "Start": "133331194",
          "End": "133331434",
          "MinCoverage": "177",
          "MaxCoverage": "2790",
          "TotCoverage": "67619",
          "MeanCoverage": "281.74583333333334"
        },
        {
          "Gene": "TOPBP1",
          "Chr": "chr3",
          "Start": "133335593",
          "End": "133335833",
          "MinCoverage": "176",
          "MaxCoverage": "5550",
          "TotCoverage": "138035",
          "MeanCoverage": "575.1458333333334"
        },
        {
          "Gene": "TOPBP1",
          "Chr": "chr3",
          "Start": "133335966",
          "End": "133336206",
          "MinCoverage": "51",
          "MaxCoverage": "3540",
          "TotCoverage": "77267",
          "MeanCoverage": "321.9458333333333"
        },
        {
          "Gene": "TOPBP1",
          "Chr": "chr3",
          "Start": "133337016",
          "End": "133337316",
          "MinCoverage": "268",
          "MaxCoverage": "9240",
          "TotCoverage": "227333",
          "MeanCoverage": "757.7766666666666"
        },
        {
          "Gene": "TOPBP1",
          "Chr": "chr3",
          "Start": "133338974",
          "End": "133339214",
          "MinCoverage": "236",
          "MaxCoverage": "4743",
          "TotCoverage": "142801",
          "MeanCoverage": "595.0041666666667"
        },
        {
          "Gene": "TOPBP1",
          "Chr": "chr3",
          "Start": "133341914",
          "End": "133342094",
          "MinCoverage": "193",
          "MaxCoverage": "3312",
          "TotCoverage": "73925",
          "MeanCoverage": "410.69444444444446"
        },
        {
          "Gene": "TOPBP1",
          "Chr": "chr3",
          "Start": "133342107",
          "End": "133342347",
          "MinCoverage": "451",
          "MaxCoverage": "7830",
          "TotCoverage": "175617",
          "MeanCoverage": "731.7375"
        },
        {
          "Gene": "TOPBP1",
          "Chr": "chr3",
          "Start": "133342837",
          "End": "133343077",
          "MinCoverage": "135",
          "MaxCoverage": "5187",
          "TotCoverage": "118907",
          "MeanCoverage": "495.4458333333333"
        },
        {
          "Gene": "TOPBP1",
          "Chr": "chr3",
          "Start": "133347140",
          "End": "133347610",
          "MinCoverage": "229",
          "MaxCoverage": "6000",
          "TotCoverage": "271353",
          "MeanCoverage": "577.3468085106383"
        },
        {
          "Gene": "TOPBP1",
          "Chr": "chr3",
          "Start": "133356682",
          "End": "133357042",
          "MinCoverage": "114",
          "MaxCoverage": "10112",
          "TotCoverage": "181080",
          "MeanCoverage": "503.0"
        },
        {
          "Gene": "TOPBP1",
          "Chr": "chr3",
          "Start": "133358788",
          "End": "133359028",
          "MinCoverage": "208",
          "MaxCoverage": "11286",
          "TotCoverage": "190559",
          "MeanCoverage": "793.9958333333333"
        },
        {
          "Gene": "TOPBP1",
          "Chr": "chr3",
          "Start": "133362009",
          "End": "133362249",
          "MinCoverage": "307",
          "MaxCoverage": "3948",
          "TotCoverage": "109031",
          "MeanCoverage": "454.29583333333335"
        },
        {
          "Gene": "TOPBP1",
          "Chr": "chr3",
          "Start": "133362825",
          "End": "133363245",
          "MinCoverage": "257",
          "MaxCoverage": "10231",
          "TotCoverage": "286755",
          "MeanCoverage": "682.75"
        },
        {
          "Gene": "TOPBP1",
          "Chr": "chr3",
          "Start": "133368201",
          "End": "133368501",
          "MinCoverage": "350",
          "MaxCoverage": "8505",
          "TotCoverage": "217321",
          "MeanCoverage": "724.4033333333333"
        },
        {
          "Gene": "TOPBP1",
          "Chr": "chr3",
          "Start": "133368585",
          "End": "133368825",
          "MinCoverage": "247",
          "MaxCoverage": "6968",
          "TotCoverage": "117857",
          "MeanCoverage": "491.0708333333333"
        },
        {
          "Gene": "TOPBP1",
          "Chr": "chr3",
          "Start": "133371269",
          "End": "133371509",
          "MinCoverage": "318",
          "MaxCoverage": "6264",
          "TotCoverage": "136180",
          "MeanCoverage": "567.4166666666666"
        },
        {
          "Gene": "TOPBP1",
          "Chr": "chr3",
          "Start": "133372158",
          "End": "133372398",
          "MinCoverage": "432",
          "MaxCoverage": "8411",
          "TotCoverage": "149060",
          "MeanCoverage": "621.0833333333334"
        },
        {
          "Gene": "TOPBP1",
          "Chr": "chr3",
          "Start": "133374111",
          "End": "133374351",
          "MinCoverage": "309",
          "MaxCoverage": "7378",
          "TotCoverage": "195978",
          "MeanCoverage": "816.575"
        },
        {
          "Gene": "TOPBP1",
          "Chr": "chr3",
          "Start": "133375490",
          "End": "133375730",
          "MinCoverage": "385",
          "MaxCoverage": "10170",
          "TotCoverage": "164282",
          "MeanCoverage": "684.5083333333333"
        },
        {
          "Gene": "TOPBP1",
          "Chr": "chr3",
          "Start": "133376612",
          "End": "133376852",
          "MinCoverage": "238",
          "MaxCoverage": "4396",
          "TotCoverage": "103008",
          "MeanCoverage": "429.2"
        },
        {
          "Gene": "TOPBP1",
          "Chr": "chr3",
          "Start": "133377806",
          "End": "133378046",
          "MinCoverage": "369",
          "MaxCoverage": "8784",
          "TotCoverage": "179798",
          "MeanCoverage": "749.1583333333333"
        },
        {
          "Gene": "TOPBP1",
          "Chr": "chr3",
          "Start": "133379839",
          "End": "133380019",
          "MinCoverage": "340",
          "MaxCoverage": "6500",
          "TotCoverage": "98240",
          "MeanCoverage": "545.7777777777778"
        },
        {
          "Gene": "ATR",
          "Chr": "chr3",
          "Start": "142168237",
          "End": "142168477",
          "MinCoverage": "217",
          "MaxCoverage": "6168",
          "TotCoverage": "123224",
          "MeanCoverage": "513.4333333333333"
        },
        {
          "Gene": "ATR",
          "Chr": "chr3",
          "Start": "142169319",
          "End": "142169499",
          "MinCoverage": "188",
          "MaxCoverage": "3654",
          "TotCoverage": "63742",
          "MeanCoverage": "354.1222222222222"
        },
        {
          "Gene": "ATR",
          "Chr": "chr3",
          "Start": "142171866",
          "End": "142172106",
          "MinCoverage": "188",
          "MaxCoverage": "4400",
          "TotCoverage": "171219",
          "MeanCoverage": "713.4125"
        },
        {
          "Gene": "ATR",
          "Chr": "chr3",
          "Start": "142176401",
          "End": "142176641",
          "MinCoverage": "232",
          "MaxCoverage": "5940",
          "TotCoverage": "145996",
          "MeanCoverage": "608.3166666666667"
        },
        {
          "Gene": "ATR",
          "Chr": "chr3",
          "Start": "142177756",
          "End": "142177996",
          "MinCoverage": "307",
          "MaxCoverage": "5397",
          "TotCoverage": "123038",
          "MeanCoverage": "512.6583333333333"
        },
        {
          "Gene": "ATR",
          "Chr": "chr3",
          "Start": "142178026",
          "End": "142178266",
          "MinCoverage": "410",
          "MaxCoverage": "7630",
          "TotCoverage": "141560",
          "MeanCoverage": "589.8333333333334"
        },
        {
          "Gene": "ATR",
          "Chr": "chr3",
          "Start": "142180736",
          "End": "142180976",
          "MinCoverage": "419",
          "MaxCoverage": "8397",
          "TotCoverage": "177339",
          "MeanCoverage": "738.9125"
        },
        {
          "Gene": "ATR",
          "Chr": "chr3",
          "Start": "142183902",
          "End": "142184142",
          "MinCoverage": "280",
          "MaxCoverage": "8928",
          "TotCoverage": "204435",
          "MeanCoverage": "851.8125"
        },
        {
          "Gene": "ATR",
          "Chr": "chr3",
          "Start": "142185150",
          "End": "142185390",
          "MinCoverage": "165",
          "MaxCoverage": "7300",
          "TotCoverage": "126842",
          "MeanCoverage": "528.5083333333333"
        },
        {
          "Gene": "ATR",
          "Chr": "chr3",
          "Start": "142186722",
          "End": "142186962",
          "MinCoverage": "148",
          "MaxCoverage": "7040",
          "TotCoverage": "146476",
          "MeanCoverage": "610.3166666666667"
        },
        {
          "Gene": "ATR",
          "Chr": "chr3",
          "Start": "142188144",
          "End": "142188444",
          "MinCoverage": "194",
          "MaxCoverage": "4975",
          "TotCoverage": "175922",
          "MeanCoverage": "586.4066666666666"
        },
        {
          "Gene": "ATR",
          "Chr": "chr3",
          "Start": "142188886",
          "End": "142189066",
          "MinCoverage": "539",
          "MaxCoverage": "5648",
          "TotCoverage": "103876",
          "MeanCoverage": "577.0888888888888"
        },
        {
          "Gene": "ATR",
          "Chr": "chr3",
          "Start": "142203932",
          "End": "142204172",
          "MinCoverage": "213",
          "MaxCoverage": "4896",
          "TotCoverage": "99756",
          "MeanCoverage": "415.65"
        },
        {
          "Gene": "ATR",
          "Chr": "chr3",
          "Start": "142211943",
          "End": "142212183",
          "MinCoverage": "115",
          "MaxCoverage": "8960",
          "TotCoverage": "153239",
          "MeanCoverage": "638.4958333333333"
        },
        {
          "Gene": "ATR",
          "Chr": "chr3",
          "Start": "142215162",
          "End": "142215402",
          "MinCoverage": "0",
          "MaxCoverage": "4072",
          "TotCoverage": "67570",
          "MeanCoverage": "281.5416666666667"
        },
        {
          "Gene": "ATR",
          "Chr": "chr3",
          "Start": "142215824",
          "End": "142216064",
          "MinCoverage": "231",
          "MaxCoverage": "4365",
          "TotCoverage": "98576",
          "MeanCoverage": "410.73333333333335"
        },
        {
          "Gene": "ATR",
          "Chr": "chr3",
          "Start": "142217407",
          "End": "142217647",
          "MinCoverage": "139",
          "MaxCoverage": "2992",
          "TotCoverage": "41554",
          "MeanCoverage": "173.14166666666668"
        },
        {
          "Gene": "ATR",
          "Chr": "chr3",
          "Start": "142218424",
          "End": "142218604",
          "MinCoverage": "521",
          "MaxCoverage": "14530",
          "TotCoverage": "185538",
          "MeanCoverage": "1030.7666666666667"
        },
        {
          "Gene": "ATR",
          "Chr": "chr3",
          "Start": "142222138",
          "End": "142222318",
          "MinCoverage": "191",
          "MaxCoverage": "3360",
          "TotCoverage": "63378",
          "MeanCoverage": "352.1"
        },
        {
          "Gene": "ATR",
          "Chr": "chr3",
          "Start": "142223942",
          "End": "142224182",
          "MinCoverage": "200",
          "MaxCoverage": "5264",
          "TotCoverage": "148436",
          "MeanCoverage": "618.4833333333333"
        },
        {
          "Gene": "ATR",
          "Chr": "chr3",
          "Start": "142226741",
          "End": "142226981",
          "MinCoverage": "203",
          "MaxCoverage": "5052",
          "TotCoverage": "162551",
          "MeanCoverage": "677.2958333333333"
        },
        {
          "Gene": "ATR",
          "Chr": "chr3",
          "Start": "142231086",
          "End": "142231326",
          "MinCoverage": "228",
          "MaxCoverage": "3255",
          "TotCoverage": "100218",
          "MeanCoverage": "417.575"
        },
        {
          "Gene": "ATR",
          "Chr": "chr3",
          "Start": "142232291",
          "End": "142232531",
          "MinCoverage": "278",
          "MaxCoverage": "8712",
          "TotCoverage": "229208",
          "MeanCoverage": "955.0333333333333"
        },
        {
          "Gene": "ATR",
          "Chr": "chr3",
          "Start": "142234176",
          "End": "142234416",
          "MinCoverage": "181",
          "MaxCoverage": "5751",
          "TotCoverage": "113946",
          "MeanCoverage": "474.775"
        },
        {
          "Gene": "ATR",
          "Chr": "chr3",
          "Start": "142238481",
          "End": "142238721",
          "MinCoverage": "270",
          "MaxCoverage": "12408",
          "TotCoverage": "175244",
          "MeanCoverage": "730.1833333333333"
        },
        {
          "Gene": "ATR",
          "Chr": "chr3",
          "Start": "142241506",
          "End": "142241746",
          "MinCoverage": "112",
          "MaxCoverage": "8968",
          "TotCoverage": "179744",
          "MeanCoverage": "748.9333333333333"
        },
        {
          "Gene": "ATR",
          "Chr": "chr3",
          "Start": "142242817",
          "End": "142243057",
          "MinCoverage": "183",
          "MaxCoverage": "9675",
          "TotCoverage": "182261",
          "MeanCoverage": "759.4208333333333"
        },
        {
          "Gene": "ATR",
          "Chr": "chr3",
          "Start": "142253864",
          "End": "142254104",
          "MinCoverage": "193",
          "MaxCoverage": "5490",
          "TotCoverage": "105035",
          "MeanCoverage": "437.6458333333333"
        },
        {
          "Gene": "ATR",
          "Chr": "chr3",
          "Start": "142254906",
          "End": "142255086",
          "MinCoverage": "162",
          "MaxCoverage": "4732",
          "TotCoverage": "76338",
          "MeanCoverage": "424.1"
        },
        {
          "Gene": "ATR",
          "Chr": "chr3",
          "Start": "142257275",
          "End": "142257515",
          "MinCoverage": "130",
          "MaxCoverage": "5012",
          "TotCoverage": "81872",
          "MeanCoverage": "341.1333333333333"
        },
        {
          "Gene": "ATR",
          "Chr": "chr3",
          "Start": "142259709",
          "End": "142259949",
          "MinCoverage": "226",
          "MaxCoverage": "4788",
          "TotCoverage": "131118",
          "MeanCoverage": "546.325"
        },
        {
          "Gene": "ATR",
          "Chr": "chr3",
          "Start": "142261462",
          "End": "142261642",
          "MinCoverage": "322",
          "MaxCoverage": "8160",
          "TotCoverage": "164842",
          "MeanCoverage": "915.7888888888889"
        },
        {
          "Gene": "ATR",
          "Chr": "chr3",
          "Start": "142266539",
          "End": "142266779",
          "MinCoverage": "506",
          "MaxCoverage": "8073",
          "TotCoverage": "200621",
          "MeanCoverage": "835.9208333333333"
        },
        {
          "Gene": "ATR",
          "Chr": "chr3",
          "Start": "142268299",
          "End": "142268539",
          "MinCoverage": "201",
          "MaxCoverage": "5390",
          "TotCoverage": "120080",
          "MeanCoverage": "500.3333333333333"
        },
        {
          "Gene": "ATR",
          "Chr": "chr3",
          "Start": "142268938",
          "End": "142269178",
          "MinCoverage": "212",
          "MaxCoverage": "6424",
          "TotCoverage": "165848",
          "MeanCoverage": "691.0333333333333"
        },
        {
          "Gene": "ATR",
          "Chr": "chr3",
          "Start": "142272034",
          "End": "142272274",
          "MinCoverage": "240",
          "MaxCoverage": "8107",
          "TotCoverage": "133992",
          "MeanCoverage": "558.3"
        },
        {
          "Gene": "ATR",
          "Chr": "chr3",
          "Start": "142272411",
          "End": "142272881",
          "MinCoverage": "288",
          "MaxCoverage": "7212",
          "TotCoverage": "434050",
          "MeanCoverage": "923.5106382978723"
        },
        {
          "Gene": "ATR",
          "Chr": "chr3",
          "Start": "142274699",
          "End": "142274999",
          "MinCoverage": "202",
          "MaxCoverage": "7609",
          "TotCoverage": "183018",
          "MeanCoverage": "610.06"
        },
        {
          "Gene": "ATR",
          "Chr": "chr3",
          "Start": "142275200",
          "End": "142275440",
          "MinCoverage": "274",
          "MaxCoverage": "7929",
          "TotCoverage": "138778",
          "MeanCoverage": "578.2416666666667"
        },
        {
          "Gene": "ATR",
          "Chr": "chr3",
          "Start": "142277421",
          "End": "142277661",
          "MinCoverage": "196",
          "MaxCoverage": "9984",
          "TotCoverage": "193309",
          "MeanCoverage": "805.4541666666667"
        },
        {
          "Gene": "ATR",
          "Chr": "chr3",
          "Start": "142278067",
          "End": "142278307",
          "MinCoverage": "299",
          "MaxCoverage": "4272",
          "TotCoverage": "86725",
          "MeanCoverage": "361.3541666666667"
        },
        {
          "Gene": "ATR",
          "Chr": "chr3",
          "Start": "142279080",
          "End": "142279320",
          "MinCoverage": "348",
          "MaxCoverage": "4711",
          "TotCoverage": "143745",
          "MeanCoverage": "598.9375"
        },
        {
          "Gene": "ATR",
          "Chr": "chr3",
          "Start": "142280053",
          "End": "142280293",
          "MinCoverage": "248",
          "MaxCoverage": "8260",
          "TotCoverage": "197487",
          "MeanCoverage": "822.8625"
        },
        {
          "Gene": "ATR",
          "Chr": "chr3",
          "Start": "142281062",
          "End": "142281962",
          "MinCoverage": "287",
          "MaxCoverage": "11286",
          "TotCoverage": "751846",
          "MeanCoverage": "835.3844444444444"
        },
        {
          "Gene": "ATR",
          "Chr": "chr3",
          "Start": "142284912",
          "End": "142285152",
          "MinCoverage": "186",
          "MaxCoverage": "4632",
          "TotCoverage": "117215",
          "MeanCoverage": "488.3958333333333"
        },
        {
          "Gene": "ATR",
          "Chr": "chr3",
          "Start": "142286860",
          "End": "142287040",
          "MinCoverage": "161",
          "MaxCoverage": "9558",
          "TotCoverage": "80255",
          "MeanCoverage": "445.8611111111111"
        },
        {
          "Gene": "ATR",
          "Chr": "chr3",
          "Start": "142297426",
          "End": "142297606",
          "MinCoverage": "1275",
          "MaxCoverage": "6543",
          "TotCoverage": "359852",
          "MeanCoverage": "1999.1777777777777"
        },
        {
          "Gene": "PIK3CA",
          "Chr": "chr3",
          "Start": "178916481",
          "End": "178917021",
          "MinCoverage": "151",
          "MaxCoverage": "11361",
          "TotCoverage": "508680",
          "MeanCoverage": "942.0"
        },
        {
          "Gene": "PIK3CA",
          "Chr": "chr3",
          "Start": "178917402",
          "End": "178917762",
          "MinCoverage": "180",
          "MaxCoverage": "6496",
          "TotCoverage": "259456",
          "MeanCoverage": "720.7111111111111"
        },
        {
          "Gene": "PIK3CA",
          "Chr": "chr3",
          "Start": "178919003",
          "End": "178919440",
          "MinCoverage": "212",
          "MaxCoverage": "11748",
          "TotCoverage": "477964",
          "MeanCoverage": "1093.7391304347825"
        },
        {
          "Gene": "PIK3CA",
          "Chr": "chr3",
          "Start": "178921274",
          "End": "178921667",
          "MinCoverage": "289",
          "MaxCoverage": "11466",
          "TotCoverage": "406799",
          "MeanCoverage": "1035.1119592875318"
        },
        {
          "Gene": "PIK3CA",
          "Chr": "chr3",
          "Start": "178922213",
          "End": "178922453",
          "MinCoverage": "358",
          "MaxCoverage": "5346",
          "TotCoverage": "151781",
          "MeanCoverage": "632.4208333333333"
        },
        {
          "Gene": "PIK3CA",
          "Chr": "chr3",
          "Start": "178927316",
          "End": "178927556",
          "MinCoverage": "253",
          "MaxCoverage": "8112",
          "TotCoverage": "98896",
          "MeanCoverage": "412.06666666666666"
        },
        {
          "Gene": "PIK3CA",
          "Chr": "chr3",
          "Start": "178927818",
          "End": "178928403",
          "MinCoverage": "218",
          "MaxCoverage": "7735",
          "TotCoverage": "527086",
          "MeanCoverage": "901.0017094017094"
        },
        {
          "Gene": "PIK3CA",
          "Chr": "chr3",
          "Start": "178935939",
          "End": "178936215",
          "MinCoverage": "333",
          "MaxCoverage": "9750",
          "TotCoverage": "375847",
          "MeanCoverage": "1361.7644927536232"
        },
        {
          "Gene": "PIK3CA",
          "Chr": "chr3",
          "Start": "178936904",
          "End": "178937144",
          "MinCoverage": "296",
          "MaxCoverage": "7930",
          "TotCoverage": "267786",
          "MeanCoverage": "1115.775"
        },
        {
          "Gene": "PIK3CA",
          "Chr": "chr3",
          "Start": "178937296",
          "End": "178937644",
          "MinCoverage": "336",
          "MaxCoverage": "8428",
          "TotCoverage": "272270",
          "MeanCoverage": "782.3850574712644"
        },
        {
          "Gene": "PIK3CA",
          "Chr": "chr3",
          "Start": "178937668",
          "End": "178937908",
          "MinCoverage": "217",
          "MaxCoverage": "6396",
          "TotCoverage": "208559",
          "MeanCoverage": "868.9958333333333"
        },
        {
          "Gene": "PIK3CA",
          "Chr": "chr3",
          "Start": "178938574",
          "End": "178939007",
          "MinCoverage": "233",
          "MaxCoverage": "12908",
          "TotCoverage": "396895",
          "MeanCoverage": "916.6166281755196"
        },
        {
          "Gene": "PIK3CA",
          "Chr": "chr3",
          "Start": "178941801",
          "End": "178942041",
          "MinCoverage": "252",
          "MaxCoverage": "5408",
          "TotCoverage": "113888",
          "MeanCoverage": "474.53333333333336"
        },
        {
          "Gene": "PIK3CA",
          "Chr": "chr3",
          "Start": "178942428",
          "End": "178942668",
          "MinCoverage": "187",
          "MaxCoverage": "5824",
          "TotCoverage": "132086",
          "MeanCoverage": "550.3583333333333"
        },
        {
          "Gene": "PIK3CA",
          "Chr": "chr3",
          "Start": "178946994",
          "End": "178947294",
          "MinCoverage": "178",
          "MaxCoverage": "8960",
          "TotCoverage": "127978",
          "MeanCoverage": "426.5933333333333"
        },
        {
          "Gene": "PIK3CA",
          "Chr": "chr3",
          "Start": "178947730",
          "End": "178948238",
          "MinCoverage": "209",
          "MaxCoverage": "9982",
          "TotCoverage": "428767",
          "MeanCoverage": "844.0295275590552"
        },
        {
          "Gene": "PIK3CA",
          "Chr": "chr3",
          "Start": "178951817",
          "End": "178952549",
          "MinCoverage": "255",
          "MaxCoverage": "15708",
          "TotCoverage": "735162",
          "MeanCoverage": "1004.3196721311475"
        },
        {
          "Gene": "KCNMB3,PIK3CA",
          "Chr": "chr3",
          "Start": "178957484",
          "End": "178957904",
          "MinCoverage": "169",
          "MaxCoverage": "6740",
          "TotCoverage": "336309",
          "MeanCoverage": "800.7357142857143"
        },
        {
          "Gene": "MAP3K13",
          "Chr": "chr3",
          "Start": "185146234",
          "End": "185146894",
          "MinCoverage": "133",
          "MaxCoverage": "9410",
          "TotCoverage": "406128",
          "MeanCoverage": "615.3454545454546"
        },
        {
          "Gene": "MAP3K13",
          "Chr": "chr3",
          "Start": "185155176",
          "End": "185155476",
          "MinCoverage": "111",
          "MaxCoverage": "6256",
          "TotCoverage": "143200",
          "MeanCoverage": "477.3333333333333"
        },
        {
          "Gene": "MAP3K13",
          "Chr": "chr3",
          "Start": "185161175",
          "End": "185161502",
          "MinCoverage": "189",
          "MaxCoverage": "7731",
          "TotCoverage": "229510",
          "MeanCoverage": "701.8654434250765"
        },
        {
          "Gene": "MAP3K13",
          "Chr": "chr3",
          "Start": "185165505",
          "End": "185165805",
          "MinCoverage": "215",
          "MaxCoverage": "7276",
          "TotCoverage": "146364",
          "MeanCoverage": "487.88"
        },
        {
          "Gene": "MAP3K13",
          "Chr": "chr3",
          "Start": "185167616",
          "End": "185167916",
          "MinCoverage": "266",
          "MaxCoverage": "6496",
          "TotCoverage": "155262",
          "MeanCoverage": "517.54"
        },
        {
          "Gene": "MAP3K13",
          "Chr": "chr3",
          "Start": "185169018",
          "End": "185169378",
          "MinCoverage": "167",
          "MaxCoverage": "8261",
          "TotCoverage": "177374",
          "MeanCoverage": "492.7055555555556"
        },
        {
          "Gene": "MAP3K13",
          "Chr": "chr3",
          "Start": "185181272",
          "End": "185181512",
          "MinCoverage": "264",
          "MaxCoverage": "5621",
          "TotCoverage": "164898",
          "MeanCoverage": "687.075"
        },
        {
          "Gene": "MAP3K13",
          "Chr": "chr3",
          "Start": "185183472",
          "End": "185183712",
          "MinCoverage": "157",
          "MaxCoverage": "5621",
          "TotCoverage": "131930",
          "MeanCoverage": "549.7083333333334"
        },
        {
          "Gene": "MAP3K13",
          "Chr": "chr3",
          "Start": "185184562",
          "End": "185184802",
          "MinCoverage": "270",
          "MaxCoverage": "5600",
          "TotCoverage": "141370",
          "MeanCoverage": "589.0416666666666"
        },
        {
          "Gene": "MAP3K13",
          "Chr": "chr3",
          "Start": "185190705",
          "End": "185191605",
          "MinCoverage": "251",
          "MaxCoverage": "15730",
          "TotCoverage": "1569954",
          "MeanCoverage": "1744.3933333333334"
        },
        {
          "Gene": "MAP3K13",
          "Chr": "chr3",
          "Start": "185195028",
          "End": "185195268",
          "MinCoverage": "94",
          "MaxCoverage": "7096",
          "TotCoverage": "126940",
          "MeanCoverage": "528.9166666666666"
        },
        {
          "Gene": "MAP3K13",
          "Chr": "chr3",
          "Start": "185197958",
          "End": "185198378",
          "MinCoverage": "227",
          "MaxCoverage": "6455",
          "TotCoverage": "334634",
          "MeanCoverage": "796.7476190476191"
        },
        {
          "Gene": "FGFR3",
          "Chr": "chr4",
          "Start": "1800905",
          "End": "1801325",
          "MinCoverage": "404",
          "MaxCoverage": "3882",
          "TotCoverage": "377580",
          "MeanCoverage": "899.0"
        },
        {
          "Gene": "FGFR3",
          "Chr": "chr4",
          "Start": "1801386",
          "End": "1801626",
          "MinCoverage": "261",
          "MaxCoverage": "2772",
          "TotCoverage": "130787",
          "MeanCoverage": "544.9458333333333"
        },
        {
          "Gene": "FGFR3",
          "Chr": "chr4",
          "Start": "1803027",
          "End": "1803818",
          "MinCoverage": "374",
          "MaxCoverage": "7182",
          "TotCoverage": "1013756",
          "MeanCoverage": "1281.6131479140329"
        },
        {
          "Gene": "FGFR3",
          "Chr": "chr4",
          "Start": "1804565",
          "End": "1804865",
          "MinCoverage": "486",
          "MaxCoverage": "5151",
          "TotCoverage": "402950",
          "MeanCoverage": "1343.1666666666667"
        },
        {
          "Gene": "FGFR3",
          "Chr": "chr4",
          "Start": "1805340",
          "End": "1805640",
          "MinCoverage": "490",
          "MaxCoverage": "5223",
          "TotCoverage": "346549",
          "MeanCoverage": "1155.1633333333334"
        },
        {
          "Gene": "FGFR3",
          "Chr": "chr4",
          "Start": "1806001",
          "End": "1806315",
          "MinCoverage": "631",
          "MaxCoverage": "14046",
          "TotCoverage": "959465",
          "MeanCoverage": "3055.62101910828"
        },
        {
          "Gene": "FGFR3",
          "Chr": "chr4",
          "Start": "1806471",
          "End": "1806771",
          "MinCoverage": "163",
          "MaxCoverage": "7044",
          "TotCoverage": "551250",
          "MeanCoverage": "1837.5"
        },
        {
          "Gene": "FGFR3",
          "Chr": "chr4",
          "Start": "1807010",
          "End": "1808125",
          "MinCoverage": "126",
          "MaxCoverage": "14460",
          "TotCoverage": "1733164",
          "MeanCoverage": "1554.4071748878923"
        },
        {
          "Gene": "FGFR3",
          "Chr": "chr4",
          "Start": "1808186",
          "End": "1808474",
          "MinCoverage": "282",
          "MaxCoverage": "4917",
          "TotCoverage": "328151",
          "MeanCoverage": "1139.4131944444443"
        },
        {
          "Gene": "FGFR3",
          "Chr": "chr4",
          "Start": "1808488",
          "End": "1808728",
          "MinCoverage": "934",
          "MaxCoverage": "7380",
          "TotCoverage": "439621",
          "MeanCoverage": "1831.7541666666666"
        },
        {
          "Gene": "FGFR3",
          "Chr": "chr4",
          "Start": "1808840",
          "End": "1809104",
          "MinCoverage": "566",
          "MaxCoverage": "8324",
          "TotCoverage": "354632",
          "MeanCoverage": "1343.3030303030303"
        },
        {
          "Gene": "PDGFRA",
          "Chr": "chr4",
          "Start": "55124833",
          "End": "55125073",
          "MinCoverage": "270",
          "MaxCoverage": "6482",
          "TotCoverage": "100571",
          "MeanCoverage": "419.04583333333335"
        },
        {
          "Gene": "PDGFRA",
          "Chr": "chr4",
          "Start": "55127210",
          "End": "55127630",
          "MinCoverage": "130",
          "MaxCoverage": "4851",
          "TotCoverage": "196223",
          "MeanCoverage": "467.19761904761907"
        },
        {
          "Gene": "PDGFRA",
          "Chr": "chr4",
          "Start": "55129778",
          "End": "55131604",
          "MinCoverage": "281",
          "MaxCoverage": "15043",
          "TotCoverage": "1438031",
          "MeanCoverage": "787.5306681270537"
        },
        {
          "Gene": "PDGFRA",
          "Chr": "chr4",
          "Start": "55133392",
          "End": "55133992",
          "MinCoverage": "74",
          "MaxCoverage": "9330",
          "TotCoverage": "319039",
          "MeanCoverage": "531.7316666666667"
        },
        {
          "Gene": "PDGFRA",
          "Chr": "chr4",
          "Start": "55136737",
          "End": "55136977",
          "MinCoverage": "254",
          "MaxCoverage": "3787",
          "TotCoverage": "97438",
          "MeanCoverage": "405.9916666666667"
        },
        {
          "Gene": "PDGFRA",
          "Chr": "chr4",
          "Start": "55138503",
          "End": "55138743",
          "MinCoverage": "245",
          "MaxCoverage": "9570",
          "TotCoverage": "118871",
          "MeanCoverage": "495.29583333333335"
        },
        {
          "Gene": "PDGFRA",
          "Chr": "chr4",
          "Start": "55139650",
          "End": "55139950",
          "MinCoverage": "150",
          "MaxCoverage": "7932",
          "TotCoverage": "251061",
          "MeanCoverage": "836.87"
        },
        {
          "Gene": "PDGFRA",
          "Chr": "chr4",
          "Start": "55140624",
          "End": "55140864",
          "MinCoverage": "343",
          "MaxCoverage": "7644",
          "TotCoverage": "128561",
          "MeanCoverage": "535.6708333333333"
        },
        {
          "Gene": "PDGFRA",
          "Chr": "chr4",
          "Start": "55140897",
          "End": "55141193",
          "MinCoverage": "467",
          "MaxCoverage": "23872",
          "TotCoverage": "275950",
          "MeanCoverage": "932.2635135135135"
        },
        {
          "Gene": "PDGFRA",
          "Chr": "chr4",
          "Start": "55143290",
          "End": "55143710",
          "MinCoverage": "135",
          "MaxCoverage": "5306",
          "TotCoverage": "218680",
          "MeanCoverage": "520.6666666666666"
        },
        {
          "Gene": "PDGFRA",
          "Chr": "chr4",
          "Start": "55143997",
          "End": "55144277",
          "MinCoverage": "204",
          "MaxCoverage": "9422",
          "TotCoverage": "262805",
          "MeanCoverage": "938.5892857142857"
        },
        {
          "Gene": "PDGFRA",
          "Chr": "chr4",
          "Start": "55144422",
          "End": "55144755",
          "MinCoverage": "159",
          "MaxCoverage": "15500",
          "TotCoverage": "334347",
          "MeanCoverage": "1004.0450450450451"
        },
        {
          "Gene": "PDGFRA",
          "Chr": "chr4",
          "Start": "55144911",
          "End": "55145211",
          "MinCoverage": "218",
          "MaxCoverage": "4770",
          "TotCoverage": "160139",
          "MeanCoverage": "533.7966666666666"
        },
        {
          "Gene": "PDGFRA",
          "Chr": "chr4",
          "Start": "55146402",
          "End": "55147028",
          "MinCoverage": "120",
          "MaxCoverage": "6576",
          "TotCoverage": "211537",
          "MeanCoverage": "337.9185303514377"
        },
        {
          "Gene": "PDGFRA",
          "Chr": "chr4",
          "Start": "55151475",
          "End": "55151715",
          "MinCoverage": "178",
          "MaxCoverage": "10373",
          "TotCoverage": "141868",
          "MeanCoverage": "591.1166666666667"
        },
        {
          "Gene": "PDGFRA",
          "Chr": "chr4",
          "Start": "55151921",
          "End": "55152219",
          "MinCoverage": "417",
          "MaxCoverage": "12798",
          "TotCoverage": "406351",
          "MeanCoverage": "1363.5939597315437"
        },
        {
          "Gene": "PDGFRA",
          "Chr": "chr4",
          "Start": "55153532",
          "End": "55153772",
          "MinCoverage": "295",
          "MaxCoverage": "6048",
          "TotCoverage": "124017",
          "MeanCoverage": "516.7375"
        },
        {
          "Gene": "PDGFRA",
          "Chr": "chr4",
          "Start": "55154895",
          "End": "55155348",
          "MinCoverage": "260",
          "MaxCoverage": "6780",
          "TotCoverage": "331250",
          "MeanCoverage": "731.2362030905077"
        },
        {
          "Gene": "PDGFRA",
          "Chr": "chr4",
          "Start": "55156420",
          "End": "55156780",
          "MinCoverage": "267",
          "MaxCoverage": "6650",
          "TotCoverage": "214557",
          "MeanCoverage": "595.9916666666667"
        },
        {
          "Gene": "KIT",
          "Chr": "chr4",
          "Start": "55524124",
          "End": "55524304",
          "MinCoverage": "1036",
          "MaxCoverage": "6570",
          "TotCoverage": "416463",
          "MeanCoverage": "2313.6833333333334"
        },
        {
          "Gene": "KIT",
          "Chr": "chr4",
          "Start": "55561650",
          "End": "55561962",
          "MinCoverage": "419",
          "MaxCoverage": "14244",
          "TotCoverage": "405977",
          "MeanCoverage": "1301.2083333333333"
        },
        {
          "Gene": "KIT",
          "Chr": "chr4",
          "Start": "55564410",
          "End": "55564770",
          "MinCoverage": "117",
          "MaxCoverage": "5872",
          "TotCoverage": "155742",
          "MeanCoverage": "432.6166666666667"
        },
        {
          "Gene": "KIT",
          "Chr": "chr4",
          "Start": "55565743",
          "End": "55565983",
          "MinCoverage": "208",
          "MaxCoverage": "4368",
          "TotCoverage": "97200",
          "MeanCoverage": "405.0"
        },
        {
          "Gene": "KIT",
          "Chr": "chr4",
          "Start": "55569853",
          "End": "55570093",
          "MinCoverage": "187",
          "MaxCoverage": "8071",
          "TotCoverage": "196974",
          "MeanCoverage": "820.725"
        },
        {
          "Gene": "KIT",
          "Chr": "chr4",
          "Start": "55573238",
          "End": "55573478",
          "MinCoverage": "352",
          "MaxCoverage": "7620",
          "TotCoverage": "212958",
          "MeanCoverage": "887.325"
        },
        {
          "Gene": "KIT",
          "Chr": "chr4",
          "Start": "55575527",
          "End": "55575767",
          "MinCoverage": "323",
          "MaxCoverage": "8586",
          "TotCoverage": "175044",
          "MeanCoverage": "729.35"
        },
        {
          "Gene": "KIT",
          "Chr": "chr4",
          "Start": "55589686",
          "End": "55589926",
          "MinCoverage": "265",
          "MaxCoverage": "10605",
          "TotCoverage": "238207",
          "MeanCoverage": "992.5291666666667"
        },
        {
          "Gene": "KIT",
          "Chr": "chr4",
          "Start": "55591999",
          "End": "55592333",
          "MinCoverage": "455",
          "MaxCoverage": "15752",
          "TotCoverage": "478633",
          "MeanCoverage": "1433.0329341317365"
        },
        {
          "Gene": "KIT",
          "Chr": "chr4",
          "Start": "55593316",
          "End": "55593772",
          "MinCoverage": "586",
          "MaxCoverage": "13480",
          "TotCoverage": "677130",
          "MeanCoverage": "1484.9342105263158"
        },
        {
          "Gene": "KIT",
          "Chr": "chr4",
          "Start": "55593920",
          "End": "55594400",
          "MinCoverage": "175",
          "MaxCoverage": "8838",
          "TotCoverage": "397934",
          "MeanCoverage": "829.0291666666667"
        },
        {
          "Gene": "KIT",
          "Chr": "chr4",
          "Start": "55595396",
          "End": "55595695",
          "MinCoverage": "338",
          "MaxCoverage": "11312",
          "TotCoverage": "335933",
          "MeanCoverage": "1123.5217391304348"
        },
        {
          "Gene": "KIT",
          "Chr": "chr4",
          "Start": "55597376",
          "End": "55597640",
          "MinCoverage": "909",
          "MaxCoverage": "13650",
          "TotCoverage": "404168",
          "MeanCoverage": "1530.939393939394"
        },
        {
          "Gene": "KIT",
          "Chr": "chr4",
          "Start": "55597976",
          "End": "55598397",
          "MinCoverage": "281",
          "MaxCoverage": "8896",
          "TotCoverage": "328402",
          "MeanCoverage": "780.0522565320665"
        },
        {
          "Gene": "KIT",
          "Chr": "chr4",
          "Start": "55599176",
          "End": "55599461",
          "MinCoverage": "356",
          "MaxCoverage": "11977",
          "TotCoverage": "351754",
          "MeanCoverage": "1234.2245614035087"
        },
        {
          "Gene": "KIT",
          "Chr": "chr4",
          "Start": "55602580",
          "End": "55602844",
          "MinCoverage": "329",
          "MaxCoverage": "18606",
          "TotCoverage": "273527",
          "MeanCoverage": "1036.0871212121212"
        },
        {
          "Gene": "KIT",
          "Chr": "chr4",
          "Start": "55602846",
          "End": "55603026",
          "MinCoverage": "204",
          "MaxCoverage": "8974",
          "TotCoverage": "112912",
          "MeanCoverage": "627.2888888888889"
        },
        {
          "Gene": "KIT",
          "Chr": "chr4",
          "Start": "55603273",
          "End": "55603513",
          "MinCoverage": "181",
          "MaxCoverage": "7044",
          "TotCoverage": "184450",
          "MeanCoverage": "768.5416666666666"
        },
        {
          "Gene": "KIT",
          "Chr": "chr4",
          "Start": "55604538",
          "End": "55604778",
          "MinCoverage": "86",
          "MaxCoverage": "6048",
          "TotCoverage": "151462",
          "MeanCoverage": "631.0916666666667"
        },
        {
          "Gene": "KDR",
          "Chr": "chr4",
          "Start": "55944612",
          "End": "55946344",
          "MinCoverage": "92",
          "MaxCoverage": "10392",
          "TotCoverage": "1206082",
          "MeanCoverage": "696.3521939953811"
        },
        {
          "Gene": "KDR",
          "Chr": "chr4",
          "Start": "55948075",
          "End": "55948255",
          "MinCoverage": "148",
          "MaxCoverage": "3926",
          "TotCoverage": "50702",
          "MeanCoverage": "281.6777777777778"
        },
        {
          "Gene": "KDR",
          "Chr": "chr4",
          "Start": "55948662",
          "End": "55948842",
          "MinCoverage": "331",
          "MaxCoverage": "5140",
          "TotCoverage": "125552",
          "MeanCoverage": "697.5111111111111"
        },
        {
          "Gene": "KDR",
          "Chr": "chr4",
          "Start": "55953729",
          "End": "55953969",
          "MinCoverage": "278",
          "MaxCoverage": "4739",
          "TotCoverage": "144735",
          "MeanCoverage": "603.0625"
        },
        {
          "Gene": "KDR",
          "Chr": "chr4",
          "Start": "55954997",
          "End": "55955177",
          "MinCoverage": "431",
          "MaxCoverage": "7020",
          "TotCoverage": "104866",
          "MeanCoverage": "582.5888888888888"
        },
        {
          "Gene": "KDR",
          "Chr": "chr4",
          "Start": "55955500",
          "End": "55955680",
          "MinCoverage": "282",
          "MaxCoverage": "5340",
          "TotCoverage": "87406",
          "MeanCoverage": "485.5888888888889"
        },
        {
          "Gene": "KDR",
          "Chr": "chr4",
          "Start": "55955823",
          "End": "55956003",
          "MinCoverage": "208",
          "MaxCoverage": "4880",
          "TotCoverage": "79510",
          "MeanCoverage": "441.72222222222223"
        },
        {
          "Gene": "KDR",
          "Chr": "chr4",
          "Start": "55956063",
          "End": "55956303",
          "MinCoverage": "211",
          "MaxCoverage": "4848",
          "TotCoverage": "129607",
          "MeanCoverage": "540.0291666666667"
        },
        {
          "Gene": "KDR",
          "Chr": "chr4",
          "Start": "55958481",
          "End": "55958721",
          "MinCoverage": "482",
          "MaxCoverage": "10000",
          "TotCoverage": "214673",
          "MeanCoverage": "894.4708333333333"
        },
        {
          "Gene": "KDR",
          "Chr": "chr4",
          "Start": "55958742",
          "End": "55958922",
          "MinCoverage": "239",
          "MaxCoverage": "2936",
          "TotCoverage": "78988",
          "MeanCoverage": "438.8222222222222"
        },
        {
          "Gene": "KDR",
          "Chr": "chr4",
          "Start": "55960925",
          "End": "55961165",
          "MinCoverage": "165",
          "MaxCoverage": "4320",
          "TotCoverage": "104421",
          "MeanCoverage": "435.0875"
        },
        {
          "Gene": "KDR",
          "Chr": "chr4",
          "Start": "55961697",
          "End": "55961877",
          "MinCoverage": "462",
          "MaxCoverage": "4750",
          "TotCoverage": "139854",
          "MeanCoverage": "776.9666666666667"
        },
        {
          "Gene": "KDR",
          "Chr": "chr4",
          "Start": "55962371",
          "End": "55962911",
          "MinCoverage": "169",
          "MaxCoverage": "7042",
          "TotCoverage": "306636",
          "MeanCoverage": "567.8444444444444"
        },
        {
          "Gene": "KDR",
          "Chr": "chr4",
          "Start": "55963790",
          "End": "55963970",
          "MinCoverage": "321",
          "MaxCoverage": "6910",
          "TotCoverage": "93486",
          "MeanCoverage": "519.3666666666667"
        },
        {
          "Gene": "KDR",
          "Chr": "chr4",
          "Start": "55964251",
          "End": "55964491",
          "MinCoverage": "187",
          "MaxCoverage": "7074",
          "TotCoverage": "136496",
          "MeanCoverage": "568.7333333333333"
        },
        {
          "Gene": "KDR",
          "Chr": "chr4",
          "Start": "55964826",
          "End": "55965006",
          "MinCoverage": "135",
          "MaxCoverage": "3366",
          "TotCoverage": "73132",
          "MeanCoverage": "406.2888888888889"
        },
        {
          "Gene": "KDR",
          "Chr": "chr4",
          "Start": "55968037",
          "End": "55968277",
          "MinCoverage": "186",
          "MaxCoverage": "6870",
          "TotCoverage": "90045",
          "MeanCoverage": "375.1875"
        },
        {
          "Gene": "KDR",
          "Chr": "chr4",
          "Start": "55968481",
          "End": "55968721",
          "MinCoverage": "292",
          "MaxCoverage": "7352",
          "TotCoverage": "171577",
          "MeanCoverage": "714.9041666666667"
        },
        {
          "Gene": "KDR",
          "Chr": "chr4",
          "Start": "55970745",
          "End": "55971165",
          "MinCoverage": "184",
          "MaxCoverage": "7065",
          "TotCoverage": "202347",
          "MeanCoverage": "481.7785714285714"
        },
        {
          "Gene": "KDR",
          "Chr": "chr4",
          "Start": "55971962",
          "End": "55972142",
          "MinCoverage": "305",
          "MaxCoverage": "6160",
          "TotCoverage": "86390",
          "MeanCoverage": "479.94444444444446"
        },
        {
          "Gene": "KDR",
          "Chr": "chr4",
          "Start": "55972795",
          "End": "55973035",
          "MinCoverage": "278",
          "MaxCoverage": "7408",
          "TotCoverage": "175496",
          "MeanCoverage": "731.2333333333333"
        },
        {
          "Gene": "KDR",
          "Chr": "chr4",
          "Start": "55973861",
          "End": "55974101",
          "MinCoverage": "137",
          "MaxCoverage": "2748",
          "TotCoverage": "57023",
          "MeanCoverage": "237.59583333333333"
        },
        {
          "Gene": "KDR",
          "Chr": "chr4",
          "Start": "55976531",
          "End": "55976771",
          "MinCoverage": "357",
          "MaxCoverage": "7035",
          "TotCoverage": "172725",
          "MeanCoverage": "719.6875"
        },
        {
          "Gene": "KDR",
          "Chr": "chr4",
          "Start": "55976787",
          "End": "55976967",
          "MinCoverage": "36",
          "MaxCoverage": "2656",
          "TotCoverage": "23764",
          "MeanCoverage": "132.0222222222222"
        },
        {
          "Gene": "KDR",
          "Chr": "chr4",
          "Start": "55979439",
          "End": "55979679",
          "MinCoverage": "476",
          "MaxCoverage": "6078",
          "TotCoverage": "181747",
          "MeanCoverage": "757.2791666666667"
        },
        {
          "Gene": "KDR",
          "Chr": "chr4",
          "Start": "55980242",
          "End": "55980482",
          "MinCoverage": "384",
          "MaxCoverage": "9216",
          "TotCoverage": "167472",
          "MeanCoverage": "697.8"
        },
        {
          "Gene": "KDR",
          "Chr": "chr4",
          "Start": "55981004",
          "End": "55981244",
          "MinCoverage": "274",
          "MaxCoverage": "5310",
          "TotCoverage": "102886",
          "MeanCoverage": "428.69166666666666"
        },
        {
          "Gene": "KDR",
          "Chr": "chr4",
          "Start": "55981392",
          "End": "55981632",
          "MinCoverage": "289",
          "MaxCoverage": "10400",
          "TotCoverage": "179049",
          "MeanCoverage": "746.0375"
        },
        {
          "Gene": "KDR",
          "Chr": "chr4",
          "Start": "55984748",
          "End": "55984988",
          "MinCoverage": "218",
          "MaxCoverage": "8802",
          "TotCoverage": "148909",
          "MeanCoverage": "620.4541666666667"
        },
        {
          "Gene": "KDR",
          "Chr": "chr4",
          "Start": "55987220",
          "End": "55987400",
          "MinCoverage": "165",
          "MaxCoverage": "3710",
          "TotCoverage": "62934",
          "MeanCoverage": "349.6333333333333"
        },
        {
          "Gene": "KDR",
          "Chr": "chr4",
          "Start": "55991364",
          "End": "55991784",
          "MinCoverage": "106",
          "MaxCoverage": "2292",
          "TotCoverage": "149011",
          "MeanCoverage": "354.78809523809525"
        },
        {
          "Gene": "FAM175A",
          "Chr": "chr4",
          "Start": "84401466",
          "End": "84401586",
          "MinCoverage": "283",
          "MaxCoverage": "3676",
          "TotCoverage": "89146",
          "MeanCoverage": "742.8833333333333"
        },
        {
          "Gene": "FBXW7",
          "Chr": "chr4",
          "Start": "153245260",
          "End": "153245620",
          "MinCoverage": "289",
          "MaxCoverage": "9360",
          "TotCoverage": "262044",
          "MeanCoverage": "727.9"
        },
        {
          "Gene": "FBXW7",
          "Chr": "chr4",
          "Start": "153247090",
          "End": "153247450",
          "MinCoverage": "299",
          "MaxCoverage": "9568",
          "TotCoverage": "308265",
          "MeanCoverage": "856.2916666666666"
        },
        {
          "Gene": "FBXW7",
          "Chr": "chr4",
          "Start": "153249300",
          "End": "153249600",
          "MinCoverage": "325",
          "MaxCoverage": "4860",
          "TotCoverage": "194854",
          "MeanCoverage": "649.5133333333333"
        },
        {
          "Gene": "FBXW7",
          "Chr": "chr4",
          "Start": "153250760",
          "End": "153251000",
          "MinCoverage": "129",
          "MaxCoverage": "5115",
          "TotCoverage": "90303",
          "MeanCoverage": "376.2625"
        },
        {
          "Gene": "FBXW7",
          "Chr": "chr4",
          "Start": "153251831",
          "End": "153252071",
          "MinCoverage": "426",
          "MaxCoverage": "9152",
          "TotCoverage": "162713",
          "MeanCoverage": "677.9708333333333"
        },
        {
          "Gene": "FBXW7",
          "Chr": "chr4",
          "Start": "153253678",
          "End": "153254009",
          "MinCoverage": "169",
          "MaxCoverage": "9482",
          "TotCoverage": "171870",
          "MeanCoverage": "519.2447129909366"
        },
        {
          "Gene": "FBXW7",
          "Chr": "chr4",
          "Start": "153258900",
          "End": "153259140",
          "MinCoverage": "190",
          "MaxCoverage": "6027",
          "TotCoverage": "144770",
          "MeanCoverage": "603.2083333333334"
        },
        {
          "Gene": "FBXW7",
          "Chr": "chr4",
          "Start": "153268006",
          "End": "153268349",
          "MinCoverage": "372",
          "MaxCoverage": "10155",
          "TotCoverage": "221740",
          "MeanCoverage": "646.4723032069971"
        },
        {
          "Gene": "FBXW7",
          "Chr": "chr4",
          "Start": "153271114",
          "End": "153271354",
          "MinCoverage": "171",
          "MaxCoverage": "3920",
          "TotCoverage": "84552",
          "MeanCoverage": "352.3"
        },
        {
          "Gene": "FBXW7",
          "Chr": "chr4",
          "Start": "153273565",
          "End": "153274165",
          "MinCoverage": "253",
          "MaxCoverage": "8625",
          "TotCoverage": "374212",
          "MeanCoverage": "623.6866666666666"
        },
        {
          "Gene": "FBXW7",
          "Chr": "chr4",
          "Start": "153303274",
          "End": "153303758",
          "MinCoverage": "340",
          "MaxCoverage": "9880",
          "TotCoverage": "313447",
          "MeanCoverage": "647.6177685950413"
        },
        {
          "Gene": "FBXW7",
          "Chr": "chr4",
          "Start": "153332252",
          "End": "153333091",
          "MinCoverage": "163",
          "MaxCoverage": "7650",
          "TotCoverage": "510509",
          "MeanCoverage": "608.4731823599524"
        },
        {
          "Gene": "DNAH5",
          "Chr": "chr5",
          "Start": "13700684",
          "End": "13701044",
          "MinCoverage": "216",
          "MaxCoverage": "13390",
          "TotCoverage": "274850",
          "MeanCoverage": "763.4722222222222"
        },
        {
          "Gene": "DNAH5",
          "Chr": "chr5",
          "Start": "13701318",
          "End": "13701618",
          "MinCoverage": "166",
          "MaxCoverage": "3240",
          "TotCoverage": "128603",
          "MeanCoverage": "428.6766666666667"
        },
        {
          "Gene": "DNAH5",
          "Chr": "chr5",
          "Start": "13708157",
          "End": "13708517",
          "MinCoverage": "279",
          "MaxCoverage": "10483",
          "TotCoverage": "350320",
          "MeanCoverage": "973.1111111111111"
        },
        {
          "Gene": "DNAH5",
          "Chr": "chr5",
          "Start": "13714441",
          "End": "13714801",
          "MinCoverage": "533",
          "MaxCoverage": "9212",
          "TotCoverage": "429119",
          "MeanCoverage": "1191.9972222222223"
        },
        {
          "Gene": "DNAH5",
          "Chr": "chr5",
          "Start": "13716517",
          "End": "13716877",
          "MinCoverage": "417",
          "MaxCoverage": "9352",
          "TotCoverage": "312103",
          "MeanCoverage": "866.9527777777778"
        },
        {
          "Gene": "DNAH5",
          "Chr": "chr5",
          "Start": "13717346",
          "End": "13717706",
          "MinCoverage": "207",
          "MaxCoverage": "5475",
          "TotCoverage": "217485",
          "MeanCoverage": "604.125"
        },
        {
          "Gene": "DNAH5",
          "Chr": "chr5",
          "Start": "13718920",
          "End": "13719280",
          "MinCoverage": "158",
          "MaxCoverage": "4690",
          "TotCoverage": "132577",
          "MeanCoverage": "368.26944444444445"
        },
        {
          "Gene": "DNAH5",
          "Chr": "chr5",
          "Start": "13721051",
          "End": "13721411",
          "MinCoverage": "124",
          "MaxCoverage": "7168",
          "TotCoverage": "232699",
          "MeanCoverage": "646.3861111111111"
        },
        {
          "Gene": "DNAH5",
          "Chr": "chr5",
          "Start": "13727481",
          "End": "13727818",
          "MinCoverage": "280",
          "MaxCoverage": "6846",
          "TotCoverage": "237105",
          "MeanCoverage": "703.5756676557863"
        },
        {
          "Gene": "DNAH5",
          "Chr": "chr5",
          "Start": "13729449",
          "End": "13729854",
          "MinCoverage": "57",
          "MaxCoverage": "9190",
          "TotCoverage": "139088",
          "MeanCoverage": "343.42716049382716"
        },
        {
          "Gene": "DNAH5",
          "Chr": "chr5",
          "Start": "13735184",
          "End": "13735484",
          "MinCoverage": "349",
          "MaxCoverage": "11320",
          "TotCoverage": "228579",
          "MeanCoverage": "761.93"
        },
        {
          "Gene": "DNAH5",
          "Chr": "chr5",
          "Start": "13735863",
          "End": "13736103",
          "MinCoverage": "250",
          "MaxCoverage": "4080",
          "TotCoverage": "139706",
          "MeanCoverage": "582.1083333333333"
        },
        {
          "Gene": "DNAH5",
          "Chr": "chr5",
          "Start": "13737302",
          "End": "13737662",
          "MinCoverage": "191",
          "MaxCoverage": "4662",
          "TotCoverage": "174344",
          "MeanCoverage": "484.2888888888889"
        },
        {
          "Gene": "DNAH5",
          "Chr": "chr5",
          "Start": "13751133",
          "End": "13751486",
          "MinCoverage": "233",
          "MaxCoverage": "11100",
          "TotCoverage": "241957",
          "MeanCoverage": "685.4305949008499"
        },
        {
          "Gene": "DNAH5",
          "Chr": "chr5",
          "Start": "13752170",
          "End": "13752470",
          "MinCoverage": "551",
          "MaxCoverage": "7464",
          "TotCoverage": "265297",
          "MeanCoverage": "884.3233333333334"
        },
        {
          "Gene": "DNAH5",
          "Chr": "chr5",
          "Start": "13753289",
          "End": "13753709",
          "MinCoverage": "575",
          "MaxCoverage": "6083",
          "TotCoverage": "406398",
          "MeanCoverage": "967.6142857142858"
        },
        {
          "Gene": "DNAH5",
          "Chr": "chr5",
          "Start": "13754259",
          "End": "13754499",
          "MinCoverage": "256",
          "MaxCoverage": "8703",
          "TotCoverage": "155940",
          "MeanCoverage": "649.75"
        },
        {
          "Gene": "DNAH5",
          "Chr": "chr5",
          "Start": "13758903",
          "End": "13759143",
          "MinCoverage": "217",
          "MaxCoverage": "5700",
          "TotCoverage": "191431",
          "MeanCoverage": "797.6291666666667"
        },
        {
          "Gene": "DNAH5",
          "Chr": "chr5",
          "Start": "13762770",
          "End": "13763070",
          "MinCoverage": "173",
          "MaxCoverage": "6416",
          "TotCoverage": "160469",
          "MeanCoverage": "534.8966666666666"
        },
        {
          "Gene": "DNAH5",
          "Chr": "chr5",
          "Start": "13766006",
          "End": "13766366",
          "MinCoverage": "269",
          "MaxCoverage": "8424",
          "TotCoverage": "286407",
          "MeanCoverage": "795.575"
        },
        {
          "Gene": "DNAH5",
          "Chr": "chr5",
          "Start": "13769010",
          "End": "13769310",
          "MinCoverage": "503",
          "MaxCoverage": "6392",
          "TotCoverage": "220516",
          "MeanCoverage": "735.0533333333333"
        },
        {
          "Gene": "DNAH5",
          "Chr": "chr5",
          "Start": "13769546",
          "End": "13769786",
          "MinCoverage": "257",
          "MaxCoverage": "8784",
          "TotCoverage": "130834",
          "MeanCoverage": "545.1416666666667"
        },
        {
          "Gene": "DNAH5",
          "Chr": "chr5",
          "Start": "13770793",
          "End": "13771153",
          "MinCoverage": "304",
          "MaxCoverage": "12210",
          "TotCoverage": "223719",
          "MeanCoverage": "621.4416666666667"
        },
        {
          "Gene": "DNAH5",
          "Chr": "chr5",
          "Start": "13776471",
          "End": "13776891",
          "MinCoverage": "245",
          "MaxCoverage": "6336",
          "TotCoverage": "312933",
          "MeanCoverage": "745.0785714285714"
        },
        {
          "Gene": "DNAH5",
          "Chr": "chr5",
          "Start": "13777237",
          "End": "13777537",
          "MinCoverage": "230",
          "MaxCoverage": "5754",
          "TotCoverage": "185701",
          "MeanCoverage": "619.0033333333333"
        },
        {
          "Gene": "DNAH5",
          "Chr": "chr5",
          "Start": "13780882",
          "End": "13781122",
          "MinCoverage": "118",
          "MaxCoverage": "3592",
          "TotCoverage": "98846",
          "MeanCoverage": "411.85833333333335"
        },
        {
          "Gene": "DNAH5",
          "Chr": "chr5",
          "Start": "13786223",
          "End": "13786523",
          "MinCoverage": "232",
          "MaxCoverage": "5103",
          "TotCoverage": "179418",
          "MeanCoverage": "598.06"
        },
        {
          "Gene": "DNAH5",
          "Chr": "chr5",
          "Start": "13788773",
          "End": "13789073",
          "MinCoverage": "337",
          "MaxCoverage": "10280",
          "TotCoverage": "320099",
          "MeanCoverage": "1066.9966666666667"
        },
        {
          "Gene": "DNAH5",
          "Chr": "chr5",
          "Start": "13792039",
          "End": "13792399",
          "MinCoverage": "184",
          "MaxCoverage": "9955",
          "TotCoverage": "271244",
          "MeanCoverage": "753.4555555555555"
        },
        {
          "Gene": "DNAH5",
          "Chr": "chr5",
          "Start": "13793550",
          "End": "13793910",
          "MinCoverage": "377",
          "MaxCoverage": "8680",
          "TotCoverage": "273132",
          "MeanCoverage": "758.7"
        },
        {
          "Gene": "DNAH5",
          "Chr": "chr5",
          "Start": "13793985",
          "End": "13794225",
          "MinCoverage": "688",
          "MaxCoverage": "14355",
          "TotCoverage": "314765",
          "MeanCoverage": "1311.5208333333333"
        },
        {
          "Gene": "DNAH5",
          "Chr": "chr5",
          "Start": "13807646",
          "End": "13807973",
          "MinCoverage": "212",
          "MaxCoverage": "11448",
          "TotCoverage": "338563",
          "MeanCoverage": "1035.3608562691131"
        },
        {
          "Gene": "DNAH5",
          "Chr": "chr5",
          "Start": "13809073",
          "End": "13809373",
          "MinCoverage": "611",
          "MaxCoverage": "11028",
          "TotCoverage": "380618",
          "MeanCoverage": "1268.7266666666667"
        },
        {
          "Gene": "DNAH5",
          "Chr": "chr5",
          "Start": "13810088",
          "End": "13810448",
          "MinCoverage": "193",
          "MaxCoverage": "1989",
          "TotCoverage": "140876",
          "MeanCoverage": "391.3222222222222"
        },
        {
          "Gene": "DNAH5",
          "Chr": "chr5",
          "Start": "13811693",
          "End": "13811993",
          "MinCoverage": "274",
          "MaxCoverage": "3990",
          "TotCoverage": "156218",
          "MeanCoverage": "520.7266666666667"
        },
        {
          "Gene": "DNAH5",
          "Chr": "chr5",
          "Start": "13814654",
          "End": "13815014",
          "MinCoverage": "278",
          "MaxCoverage": "11284",
          "TotCoverage": "273070",
          "MeanCoverage": "758.5277777777778"
        },
        {
          "Gene": "DNAH5",
          "Chr": "chr5",
          "Start": "13817579",
          "End": "13817879",
          "MinCoverage": "364",
          "MaxCoverage": "9583",
          "TotCoverage": "285560",
          "MeanCoverage": "951.8666666666667"
        },
        {
          "Gene": "DNAH5",
          "Chr": "chr5",
          "Start": "13820370",
          "End": "13820670",
          "MinCoverage": "180",
          "MaxCoverage": "6824",
          "TotCoverage": "185898",
          "MeanCoverage": "619.66"
        },
        {
          "Gene": "DNAH5",
          "Chr": "chr5",
          "Start": "13823305",
          "End": "13823545",
          "MinCoverage": "287",
          "MaxCoverage": "5068",
          "TotCoverage": "138384",
          "MeanCoverage": "576.6"
        },
        {
          "Gene": "DNAH5",
          "Chr": "chr5",
          "Start": "13824254",
          "End": "13824494",
          "MinCoverage": "373",
          "MaxCoverage": "4920",
          "TotCoverage": "182429",
          "MeanCoverage": "760.1208333333333"
        },
        {
          "Gene": "DNAH5",
          "Chr": "chr5",
          "Start": "13829565",
          "End": "13829865",
          "MinCoverage": "302",
          "MaxCoverage": "7848",
          "TotCoverage": "251493",
          "MeanCoverage": "838.31"
        },
        {
          "Gene": "DNAH5",
          "Chr": "chr5",
          "Start": "13830078",
          "End": "13830378",
          "MinCoverage": "168",
          "MaxCoverage": "8346",
          "TotCoverage": "233530",
          "MeanCoverage": "778.4333333333333"
        },
        {
          "Gene": "DNAH5",
          "Chr": "chr5",
          "Start": "13830644",
          "End": "13830944",
          "MinCoverage": "426",
          "MaxCoverage": "5768",
          "TotCoverage": "178304",
          "MeanCoverage": "594.3466666666667"
        },
        {
          "Gene": "DNAH5",
          "Chr": "chr5",
          "Start": "13839400",
          "End": "13839700",
          "MinCoverage": "176",
          "MaxCoverage": "6545",
          "TotCoverage": "164810",
          "MeanCoverage": "549.3666666666667"
        },
        {
          "Gene": "DNAH5",
          "Chr": "chr5",
          "Start": "13840946",
          "End": "13841306",
          "MinCoverage": "224",
          "MaxCoverage": "5552",
          "TotCoverage": "184121",
          "MeanCoverage": "511.4472222222222"
        },
        {
          "Gene": "DNAH5",
          "Chr": "chr5",
          "Start": "13841669",
          "End": "13842086",
          "MinCoverage": "62",
          "MaxCoverage": "6822",
          "TotCoverage": "317738",
          "MeanCoverage": "761.9616306954437"
        },
        {
          "Gene": "DNAH5",
          "Chr": "chr5",
          "Start": "13844873",
          "End": "13845173",
          "MinCoverage": "126",
          "MaxCoverage": "5130",
          "TotCoverage": "148502",
          "MeanCoverage": "495.00666666666666"
        },
        {
          "Gene": "DNAH5",
          "Chr": "chr5",
          "Start": "13850692",
          "End": "13850992",
          "MinCoverage": "176",
          "MaxCoverage": "6118",
          "TotCoverage": "156050",
          "MeanCoverage": "520.1666666666666"
        },
        {
          "Gene": "DNAH5",
          "Chr": "chr5",
          "Start": "13859487",
          "End": "13859787",
          "MinCoverage": "196",
          "MaxCoverage": "6655",
          "TotCoverage": "196301",
          "MeanCoverage": "654.3366666666667"
        },
        {
          "Gene": "DNAH5",
          "Chr": "chr5",
          "Start": "13862606",
          "End": "13862906",
          "MinCoverage": "467",
          "MaxCoverage": "15568",
          "TotCoverage": "378056",
          "MeanCoverage": "1260.1866666666667"
        },
        {
          "Gene": "DNAH5",
          "Chr": "chr5",
          "Start": "13864445",
          "End": "13864805",
          "MinCoverage": "388",
          "MaxCoverage": "5383",
          "TotCoverage": "189887",
          "MeanCoverage": "527.4638888888888"
        },
        {
          "Gene": "DNAH5",
          "Chr": "chr5",
          "Start": "13865715",
          "End": "13866075",
          "MinCoverage": "163",
          "MaxCoverage": "8580",
          "TotCoverage": "192179",
          "MeanCoverage": "533.8305555555555"
        },
        {
          "Gene": "DNAH5",
          "Chr": "chr5",
          "Start": "13866239",
          "End": "13866479",
          "MinCoverage": "92",
          "MaxCoverage": "4230",
          "TotCoverage": "71909",
          "MeanCoverage": "299.62083333333334"
        },
        {
          "Gene": "DNAH5",
          "Chr": "chr5",
          "Start": "13867811",
          "End": "13868171",
          "MinCoverage": "222",
          "MaxCoverage": "7240",
          "TotCoverage": "222993",
          "MeanCoverage": "619.425"
        },
        {
          "Gene": "DNAH5",
          "Chr": "chr5",
          "Start": "13870813",
          "End": "13871173",
          "MinCoverage": "251",
          "MaxCoverage": "6413",
          "TotCoverage": "277458",
          "MeanCoverage": "770.7166666666667"
        },
        {
          "Gene": "DNAH5",
          "Chr": "chr5",
          "Start": "13871593",
          "End": "13871953",
          "MinCoverage": "236",
          "MaxCoverage": "14025",
          "TotCoverage": "302327",
          "MeanCoverage": "839.7972222222222"
        },
        {
          "Gene": "DNAH5",
          "Chr": "chr5",
          "Start": "13876739",
          "End": "13876979",
          "MinCoverage": "220",
          "MaxCoverage": "3990",
          "TotCoverage": "111844",
          "MeanCoverage": "466.01666666666665"
        },
        {
          "Gene": "DNAH5",
          "Chr": "chr5",
          "Start": "13882779",
          "End": "13883259",
          "MinCoverage": "105",
          "MaxCoverage": "8910",
          "TotCoverage": "290473",
          "MeanCoverage": "605.1520833333333"
        },
        {
          "Gene": "DNAH5",
          "Chr": "chr5",
          "Start": "13885030",
          "End": "13885390",
          "MinCoverage": "277",
          "MaxCoverage": "8352",
          "TotCoverage": "319470",
          "MeanCoverage": "887.4166666666666"
        },
        {
          "Gene": "DNAH5",
          "Chr": "chr5",
          "Start": "13886005",
          "End": "13886305",
          "MinCoverage": "340",
          "MaxCoverage": "9684",
          "TotCoverage": "201184",
          "MeanCoverage": "670.6133333333333"
        },
        {
          "Gene": "DNAH5",
          "Chr": "chr5",
          "Start": "13891007",
          "End": "13891307",
          "MinCoverage": "116",
          "MaxCoverage": "5280",
          "TotCoverage": "127296",
          "MeanCoverage": "424.32"
        },
        {
          "Gene": "DNAH5",
          "Chr": "chr5",
          "Start": "13894694",
          "End": "13894994",
          "MinCoverage": "388",
          "MaxCoverage": "8574",
          "TotCoverage": "341842",
          "MeanCoverage": "1139.4733333333334"
        },
        {
          "Gene": "DNAH5",
          "Chr": "chr5",
          "Start": "13900237",
          "End": "13900597",
          "MinCoverage": "185",
          "MaxCoverage": "5951",
          "TotCoverage": "208371",
          "MeanCoverage": "578.8083333333333"
        },
        {
          "Gene": "DNAH5",
          "Chr": "chr5",
          "Start": "13901304",
          "End": "13901818",
          "MinCoverage": "184",
          "MaxCoverage": "5665",
          "TotCoverage": "352110",
          "MeanCoverage": "685.0389105058366"
        },
        {
          "Gene": "DNAH5",
          "Chr": "chr5",
          "Start": "13902084",
          "End": "13902324",
          "MinCoverage": "237",
          "MaxCoverage": "4530",
          "TotCoverage": "159846",
          "MeanCoverage": "666.025"
        },
        {
          "Gene": "DNAH5",
          "Chr": "chr5",
          "Start": "13911413",
          "End": "13911653",
          "MinCoverage": "130",
          "MaxCoverage": "8141",
          "TotCoverage": "169171",
          "MeanCoverage": "704.8791666666667"
        },
        {
          "Gene": "DNAH5",
          "Chr": "chr5",
          "Start": "13913779",
          "End": "13914139",
          "MinCoverage": "166",
          "MaxCoverage": "6432",
          "TotCoverage": "133019",
          "MeanCoverage": "369.4972222222222"
        },
        {
          "Gene": "DNAH5",
          "Chr": "chr5",
          "Start": "13916390",
          "End": "13916630",
          "MinCoverage": "344",
          "MaxCoverage": "5056",
          "TotCoverage": "139615",
          "MeanCoverage": "581.7291666666666"
        },
        {
          "Gene": "DNAH5",
          "Chr": "chr5",
          "Start": "13917188",
          "End": "13917428",
          "MinCoverage": "504",
          "MaxCoverage": "7938",
          "TotCoverage": "194992",
          "MeanCoverage": "812.4666666666667"
        },
        {
          "Gene": "DNAH5",
          "Chr": "chr5",
          "Start": "13919217",
          "End": "13919577",
          "MinCoverage": "215",
          "MaxCoverage": "5952",
          "TotCoverage": "250735",
          "MeanCoverage": "696.4861111111111"
        },
        {
          "Gene": "DNAH5",
          "Chr": "chr5",
          "Start": "13920537",
          "End": "13920777",
          "MinCoverage": "375",
          "MaxCoverage": "10917",
          "TotCoverage": "172077",
          "MeanCoverage": "716.9875"
        },
        {
          "Gene": "DNAH5",
          "Chr": "chr5",
          "Start": "13922146",
          "End": "13922506",
          "MinCoverage": "399",
          "MaxCoverage": "9575",
          "TotCoverage": "498220",
          "MeanCoverage": "1383.9444444444443"
        },
        {
          "Gene": "DNAH5",
          "Chr": "chr5",
          "Start": "13923318",
          "End": "13923618",
          "MinCoverage": "187",
          "MaxCoverage": "7111",
          "TotCoverage": "124217",
          "MeanCoverage": "414.0566666666667"
        },
        {
          "Gene": "DNAH5",
          "Chr": "chr5",
          "Start": "13928124",
          "End": "13928364",
          "MinCoverage": "155",
          "MaxCoverage": "4445",
          "TotCoverage": "94536",
          "MeanCoverage": "393.9"
        },
        {
          "Gene": "DNAH5",
          "Chr": "chr5",
          "Start": "13931165",
          "End": "13931405",
          "MinCoverage": "329",
          "MaxCoverage": "8472",
          "TotCoverage": "196530",
          "MeanCoverage": "818.875"
        },
        {
          "Gene": "DNAH5",
          "Chr": "chr5",
          "Start": "13944419",
          "End": "13944659",
          "MinCoverage": "268",
          "MaxCoverage": "6664",
          "TotCoverage": "139002",
          "MeanCoverage": "579.175"
        },
        {
          "Gene": "MAP3K1",
          "Chr": "chr5",
          "Start": "56152351",
          "End": "56152651",
          "MinCoverage": "143",
          "MaxCoverage": "4716",
          "TotCoverage": "105255",
          "MeanCoverage": "350.85"
        },
        {
          "Gene": "MAP3K1",
          "Chr": "chr5",
          "Start": "56155461",
          "End": "56155821",
          "MinCoverage": "166",
          "MaxCoverage": "5337",
          "TotCoverage": "168239",
          "MeanCoverage": "467.3305555555556"
        },
        {
          "Gene": "MAP3K1",
          "Chr": "chr5",
          "Start": "56160480",
          "End": "56160840",
          "MinCoverage": "107",
          "MaxCoverage": "5920",
          "TotCoverage": "200798",
          "MeanCoverage": "557.7722222222222"
        },
        {
          "Gene": "MAP3K1",
          "Chr": "chr5",
          "Start": "56161104",
          "End": "56161344",
          "MinCoverage": "257",
          "MaxCoverage": "5050",
          "TotCoverage": "102022",
          "MeanCoverage": "425.09166666666664"
        },
        {
          "Gene": "MAP3K1",
          "Chr": "chr5",
          "Start": "56161579",
          "End": "56161879",
          "MinCoverage": "244",
          "MaxCoverage": "6677",
          "TotCoverage": "147762",
          "MeanCoverage": "492.54"
        },
        {
          "Gene": "MAP3K1",
          "Chr": "chr5",
          "Start": "56167677",
          "End": "56167917",
          "MinCoverage": "371",
          "MaxCoverage": "5427",
          "TotCoverage": "146579",
          "MeanCoverage": "610.7458333333333"
        },
        {
          "Gene": "MAP3K1",
          "Chr": "chr5",
          "Start": "56168388",
          "End": "56168891",
          "MinCoverage": "43",
          "MaxCoverage": "5157",
          "TotCoverage": "147676",
          "MeanCoverage": "293.5904572564612"
        },
        {
          "Gene": "MAP3K1",
          "Chr": "chr5",
          "Start": "56170787",
          "End": "56171207",
          "MinCoverage": "216",
          "MaxCoverage": "5455",
          "TotCoverage": "249390",
          "MeanCoverage": "593.7857142857143"
        },
        {
          "Gene": "MAP3K1",
          "Chr": "chr5",
          "Start": "56174747",
          "End": "56174987",
          "MinCoverage": "275",
          "MaxCoverage": "8020",
          "TotCoverage": "139146",
          "MeanCoverage": "579.775"
        },
        {
          "Gene": "MAP3K1",
          "Chr": "chr5",
          "Start": "56176463",
          "End": "56176703",
          "MinCoverage": "234",
          "MaxCoverage": "5632",
          "TotCoverage": "65957",
          "MeanCoverage": "274.8208333333333"
        },
        {
          "Gene": "MAP3K1",
          "Chr": "chr5",
          "Start": "56176854",
          "End": "56177154",
          "MinCoverage": "521",
          "MaxCoverage": "8155",
          "TotCoverage": "280751",
          "MeanCoverage": "935.8366666666667"
        },
        {
          "Gene": "MAP3K1",
          "Chr": "chr5",
          "Start": "56177327",
          "End": "56178753",
          "MinCoverage": "169",
          "MaxCoverage": "14868",
          "TotCoverage": "1111224",
          "MeanCoverage": "779.2594670406733"
        },
        {
          "Gene": "MAP3K1",
          "Chr": "chr5",
          "Start": "56179279",
          "End": "56179579",
          "MinCoverage": "146",
          "MaxCoverage": "11245",
          "TotCoverage": "205544",
          "MeanCoverage": "685.1466666666666"
        },
        {
          "Gene": "MAP3K1",
          "Chr": "chr5",
          "Start": "56181694",
          "End": "56181996",
          "MinCoverage": "80",
          "MaxCoverage": "5460",
          "TotCoverage": "95197",
          "MeanCoverage": "315.22185430463577"
        },
        {
          "Gene": "MAP3K1",
          "Chr": "chr5",
          "Start": "56183125",
          "End": "56183425",
          "MinCoverage": "306",
          "MaxCoverage": "6060",
          "TotCoverage": "179618",
          "MeanCoverage": "598.7266666666667"
        },
        {
          "Gene": "MAP3K1",
          "Chr": "chr5",
          "Start": "56183998",
          "End": "56184238",
          "MinCoverage": "200",
          "MaxCoverage": "4760",
          "TotCoverage": "66582",
          "MeanCoverage": "277.425"
        },
        {
          "Gene": "PIK3R1",
          "Chr": "chr5",
          "Start": "67522057",
          "End": "67522897",
          "MinCoverage": "260",
          "MaxCoverage": "7612",
          "TotCoverage": "459669",
          "MeanCoverage": "547.225"
        },
        {
          "Gene": "PIK3R1",
          "Chr": "chr5",
          "Start": "67569143",
          "End": "67569383",
          "MinCoverage": "311",
          "MaxCoverage": "6552",
          "TotCoverage": "138561",
          "MeanCoverage": "577.3375"
        },
        {
          "Gene": "PIK3R1",
          "Chr": "chr5",
          "Start": "67569683",
          "End": "67569923",
          "MinCoverage": "375",
          "MaxCoverage": "6840",
          "TotCoverage": "132593",
          "MeanCoverage": "552.4708333333333"
        },
        {
          "Gene": "PIK3R1",
          "Chr": "chr5",
          "Start": "67575375",
          "End": "67575615",
          "MinCoverage": "98",
          "MaxCoverage": "7920",
          "TotCoverage": "127854",
          "MeanCoverage": "532.725"
        },
        {
          "Gene": "PIK3R1",
          "Chr": "chr5",
          "Start": "67576276",
          "End": "67576636",
          "MinCoverage": "126",
          "MaxCoverage": "6780",
          "TotCoverage": "250967",
          "MeanCoverage": "697.1305555555556"
        },
        {
          "Gene": "PIK3R1",
          "Chr": "chr5",
          "Start": "67576674",
          "End": "67576914",
          "MinCoverage": "184",
          "MaxCoverage": "8172",
          "TotCoverage": "88721",
          "MeanCoverage": "369.67083333333335"
        },
        {
          "Gene": "PIK3R1",
          "Chr": "chr5",
          "Start": "67586397",
          "End": "67588257",
          "MinCoverage": "219",
          "MaxCoverage": "8424",
          "TotCoverage": "1343227",
          "MeanCoverage": "722.1650537634408"
        },
        {
          "Gene": "PIK3R1",
          "Chr": "chr5",
          "Start": "67588312",
          "End": "67589370",
          "MinCoverage": "394",
          "MaxCoverage": "13195",
          "TotCoverage": "937671",
          "MeanCoverage": "886.2674858223062"
        },
        {
          "Gene": "PIK3R1",
          "Chr": "chr5",
          "Start": "67589479",
          "End": "67589719",
          "MinCoverage": "119",
          "MaxCoverage": "4932",
          "TotCoverage": "81791",
          "MeanCoverage": "340.79583333333335"
        },
        {
          "Gene": "PIK3R1",
          "Chr": "chr5",
          "Start": "67590284",
          "End": "67590584",
          "MinCoverage": "344",
          "MaxCoverage": "7630",
          "TotCoverage": "260938",
          "MeanCoverage": "869.7933333333333"
        },
        {
          "Gene": "PIK3R1",
          "Chr": "chr5",
          "Start": "67590901",
          "End": "67591693",
          "MinCoverage": "315",
          "MaxCoverage": "16990",
          "TotCoverage": "763895",
          "MeanCoverage": "964.5138888888889"
        },
        {
          "Gene": "PIK3R1",
          "Chr": "chr5",
          "Start": "67591933",
          "End": "67592233",
          "MinCoverage": "161",
          "MaxCoverage": "7678",
          "TotCoverage": "123456",
          "MeanCoverage": "411.52"
        },
        {
          "Gene": "ADGRV1",
          "Chr": "chr5",
          "Start": "89924303",
          "End": "89924723",
          "MinCoverage": "118",
          "MaxCoverage": "7348",
          "TotCoverage": "159330",
          "MeanCoverage": "379.35714285714283"
        },
        {
          "Gene": "ADGRV1",
          "Chr": "chr5",
          "Start": "89943237",
          "End": "89943657",
          "MinCoverage": "145",
          "MaxCoverage": "8281",
          "TotCoverage": "235382",
          "MeanCoverage": "560.4333333333333"
        },
        {
          "Gene": "ADGRV1",
          "Chr": "chr5",
          "Start": "89969810",
          "End": "89970110",
          "MinCoverage": "272",
          "MaxCoverage": "9280",
          "TotCoverage": "204465",
          "MeanCoverage": "681.55"
        },
        {
          "Gene": "ADGRV1",
          "Chr": "chr5",
          "Start": "89989632",
          "End": "89990592",
          "MinCoverage": "184",
          "MaxCoverage": "9779",
          "TotCoverage": "618933",
          "MeanCoverage": "644.721875"
        },
        {
          "Gene": "ADGRV1",
          "Chr": "chr5",
          "Start": "90015802",
          "End": "90016102",
          "MinCoverage": "331",
          "MaxCoverage": "5670",
          "TotCoverage": "246838",
          "MeanCoverage": "822.7933333333333"
        },
        {
          "Gene": "ADGRV1",
          "Chr": "chr5",
          "Start": "90052736",
          "End": "90053036",
          "MinCoverage": "175",
          "MaxCoverage": "6105",
          "TotCoverage": "164542",
          "MeanCoverage": "548.4733333333334"
        },
        {
          "Gene": "ADGRV1",
          "Chr": "chr5",
          "Start": "90079584",
          "End": "90079944",
          "MinCoverage": "205",
          "MaxCoverage": "4550",
          "TotCoverage": "141431",
          "MeanCoverage": "392.8638888888889"
        },
        {
          "Gene": "ADGRV1",
          "Chr": "chr5",
          "Start": "90105972",
          "End": "90107232",
          "MinCoverage": "232",
          "MaxCoverage": "10829",
          "TotCoverage": "968343",
          "MeanCoverage": "768.5261904761904"
        },
        {
          "Gene": "ADGRV1",
          "Chr": "chr5",
          "Start": "90124701",
          "End": "90125061",
          "MinCoverage": "172",
          "MaxCoverage": "5271",
          "TotCoverage": "163211",
          "MeanCoverage": "453.3638888888889"
        },
        {
          "Gene": "ADGRV1",
          "Chr": "chr5",
          "Start": "90136328",
          "End": "90136868",
          "MinCoverage": "196",
          "MaxCoverage": "8130",
          "TotCoverage": "411358",
          "MeanCoverage": "761.7740740740741"
        },
        {
          "Gene": "ADGRV1",
          "Chr": "chr5",
          "Start": "90445723",
          "End": "90446169",
          "MinCoverage": "557",
          "MaxCoverage": "13342",
          "TotCoverage": "534795",
          "MeanCoverage": "1199.091928251121"
        },
        {
          "Gene": "APC",
          "Chr": "chr5",
          "Start": "112090495",
          "End": "112090795",
          "MinCoverage": "157",
          "MaxCoverage": "9438",
          "TotCoverage": "166536",
          "MeanCoverage": "555.12"
        },
        {
          "Gene": "APC",
          "Chr": "chr5",
          "Start": "112101944",
          "End": "112102184",
          "MinCoverage": "129",
          "MaxCoverage": "2544",
          "TotCoverage": "58554",
          "MeanCoverage": "243.975"
        },
        {
          "Gene": "APC",
          "Chr": "chr5",
          "Start": "112102806",
          "End": "112103166",
          "MinCoverage": "109",
          "MaxCoverage": "5368",
          "TotCoverage": "180092",
          "MeanCoverage": "500.25555555555553"
        },
        {
          "Gene": "APC",
          "Chr": "chr5",
          "Start": "112111141",
          "End": "112111545",
          "MinCoverage": "133",
          "MaxCoverage": "7256",
          "TotCoverage": "256485",
          "MeanCoverage": "634.8638613861386"
        },
        {
          "Gene": "APC",
          "Chr": "chr5",
          "Start": "112116423",
          "End": "112116663",
          "MinCoverage": "178",
          "MaxCoverage": "8876",
          "TotCoverage": "157350",
          "MeanCoverage": "655.625"
        },
        {
          "Gene": "APC",
          "Chr": "chr5",
          "Start": "112128091",
          "End": "112128331",
          "MinCoverage": "79",
          "MaxCoverage": "9770",
          "TotCoverage": "182568",
          "MeanCoverage": "760.7"
        },
        {
          "Gene": "APC",
          "Chr": "chr5",
          "Start": "112136860",
          "End": "112137285",
          "MinCoverage": "123",
          "MaxCoverage": "11356",
          "TotCoverage": "216644",
          "MeanCoverage": "509.7505882352941"
        },
        {
          "Gene": "APC",
          "Chr": "chr5",
          "Start": "112145747",
          "End": "112145927",
          "MinCoverage": "600",
          "MaxCoverage": "10668",
          "TotCoverage": "215888",
          "MeanCoverage": "1199.3777777777777"
        },
        {
          "Gene": "APC",
          "Chr": "chr5",
          "Start": "112151120",
          "End": "112151360",
          "MinCoverage": "426",
          "MaxCoverage": "8411",
          "TotCoverage": "158284",
          "MeanCoverage": "659.5166666666667"
        },
        {
          "Gene": "APC",
          "Chr": "chr5",
          "Start": "112154611",
          "End": "112155091",
          "MinCoverage": "207",
          "MaxCoverage": "10296",
          "TotCoverage": "337928",
          "MeanCoverage": "704.0166666666667"
        },
        {
          "Gene": "APC",
          "Chr": "chr5",
          "Start": "112157520",
          "End": "112157760",
          "MinCoverage": "319",
          "MaxCoverage": "6536",
          "TotCoverage": "147103",
          "MeanCoverage": "612.9291666666667"
        },
        {
          "Gene": "APC",
          "Chr": "chr5",
          "Start": "112162754",
          "End": "112162994",
          "MinCoverage": "173",
          "MaxCoverage": "6629",
          "TotCoverage": "192167",
          "MeanCoverage": "800.6958333333333"
        },
        {
          "Gene": "APC",
          "Chr": "chr5",
          "Start": "112163504",
          "End": "112163805",
          "MinCoverage": "183",
          "MaxCoverage": "15008",
          "TotCoverage": "323278",
          "MeanCoverage": "1074.0132890365448"
        },
        {
          "Gene": "APC",
          "Chr": "chr5",
          "Start": "112164490",
          "End": "112164730",
          "MinCoverage": "71",
          "MaxCoverage": "7263",
          "TotCoverage": "113704",
          "MeanCoverage": "473.76666666666665"
        },
        {
          "Gene": "APC",
          "Chr": "chr5",
          "Start": "112170574",
          "End": "112170934",
          "MinCoverage": "165",
          "MaxCoverage": "6036",
          "TotCoverage": "243340",
          "MeanCoverage": "675.9444444444445"
        },
        {
          "Gene": "RAD50",
          "Chr": "chr5",
          "Start": "131892960",
          "End": "131893200",
          "MinCoverage": "169",
          "MaxCoverage": "4886",
          "TotCoverage": "157832",
          "MeanCoverage": "657.6333333333333"
        },
        {
          "Gene": "RAD50",
          "Chr": "chr5",
          "Start": "131894927",
          "End": "131895107",
          "MinCoverage": "178",
          "MaxCoverage": "6048",
          "TotCoverage": "85451",
          "MeanCoverage": "474.72777777777776"
        },
        {
          "Gene": "RAD50",
          "Chr": "chr5",
          "Start": "131911424",
          "End": "131911664",
          "MinCoverage": "291",
          "MaxCoverage": "6790",
          "TotCoverage": "167269",
          "MeanCoverage": "696.9541666666667"
        },
        {
          "Gene": "RAD50",
          "Chr": "chr5",
          "Start": "131914981",
          "End": "131915221",
          "MinCoverage": "274",
          "MaxCoverage": "4589",
          "TotCoverage": "129458",
          "MeanCoverage": "539.4083333333333"
        },
        {
          "Gene": "RAD50",
          "Chr": "chr5",
          "Start": "131915535",
          "End": "131915775",
          "MinCoverage": "138",
          "MaxCoverage": "4329",
          "TotCoverage": "121414",
          "MeanCoverage": "505.89166666666665"
        },
        {
          "Gene": "RAD50",
          "Chr": "chr5",
          "Start": "131923197",
          "End": "131923437",
          "MinCoverage": "150",
          "MaxCoverage": "3940",
          "TotCoverage": "66800",
          "MeanCoverage": "278.3333333333333"
        },
        {
          "Gene": "RAD50",
          "Chr": "chr5",
          "Start": "131923578",
          "End": "131923818",
          "MinCoverage": "167",
          "MaxCoverage": "4970",
          "TotCoverage": "123008",
          "MeanCoverage": "512.5333333333333"
        },
        {
          "Gene": "RAD50",
          "Chr": "chr5",
          "Start": "131924355",
          "End": "131924595",
          "MinCoverage": "271",
          "MaxCoverage": "5568",
          "TotCoverage": "124340",
          "MeanCoverage": "518.0833333333334"
        },
        {
          "Gene": "RAD50",
          "Chr": "chr5",
          "Start": "131925305",
          "End": "131925545",
          "MinCoverage": "248",
          "MaxCoverage": "3930",
          "TotCoverage": "104072",
          "MeanCoverage": "433.6333333333333"
        },
        {
          "Gene": "RAD50",
          "Chr": "chr5",
          "Start": "131926886",
          "End": "131927126",
          "MinCoverage": "288",
          "MaxCoverage": "4800",
          "TotCoverage": "113519",
          "MeanCoverage": "472.99583333333334"
        },
        {
          "Gene": "RAD50",
          "Chr": "chr5",
          "Start": "131927527",
          "End": "131927767",
          "MinCoverage": "259",
          "MaxCoverage": "5131",
          "TotCoverage": "135455",
          "MeanCoverage": "564.3958333333334"
        },
        {
          "Gene": "RAD50",
          "Chr": "chr5",
          "Start": "131930528",
          "End": "131930768",
          "MinCoverage": "148",
          "MaxCoverage": "4800",
          "TotCoverage": "88031",
          "MeanCoverage": "366.79583333333335"
        },
        {
          "Gene": "RAD50",
          "Chr": "chr5",
          "Start": "131931233",
          "End": "131931533",
          "MinCoverage": "304",
          "MaxCoverage": "4719",
          "TotCoverage": "130863",
          "MeanCoverage": "436.21"
        },
        {
          "Gene": "RAD50",
          "Chr": "chr5",
          "Start": "131938966",
          "End": "131939206",
          "MinCoverage": "301",
          "MaxCoverage": "6090",
          "TotCoverage": "164275",
          "MeanCoverage": "684.4791666666666"
        },
        {
          "Gene": "RAD50",
          "Chr": "chr5",
          "Start": "131939554",
          "End": "131939794",
          "MinCoverage": "304",
          "MaxCoverage": "7329",
          "TotCoverage": "224751",
          "MeanCoverage": "936.4625"
        },
        {
          "Gene": "RAD50",
          "Chr": "chr5",
          "Start": "131940474",
          "End": "131940714",
          "MinCoverage": "256",
          "MaxCoverage": "4084",
          "TotCoverage": "163054",
          "MeanCoverage": "679.3916666666667"
        },
        {
          "Gene": "RAD50",
          "Chr": "chr5",
          "Start": "131944286",
          "End": "131944526",
          "MinCoverage": "290",
          "MaxCoverage": "3608",
          "TotCoverage": "95595",
          "MeanCoverage": "398.3125"
        },
        {
          "Gene": "RAD50",
          "Chr": "chr5",
          "Start": "131944741",
          "End": "131944921",
          "MinCoverage": "265",
          "MaxCoverage": "4977",
          "TotCoverage": "84363",
          "MeanCoverage": "468.68333333333334"
        },
        {
          "Gene": "RAD50",
          "Chr": "chr5",
          "Start": "131944925",
          "End": "131945165",
          "MinCoverage": "200",
          "MaxCoverage": "5918",
          "TotCoverage": "99344",
          "MeanCoverage": "413.93333333333334"
        },
        {
          "Gene": "RAD50",
          "Chr": "chr5",
          "Start": "131951638",
          "End": "131951878",
          "MinCoverage": "158",
          "MaxCoverage": "7546",
          "TotCoverage": "110012",
          "MeanCoverage": "458.3833333333333"
        },
        {
          "Gene": "RAD50",
          "Chr": "chr5",
          "Start": "131953723",
          "End": "131954023",
          "MinCoverage": "219",
          "MaxCoverage": "5967",
          "TotCoverage": "180723",
          "MeanCoverage": "602.41"
        },
        {
          "Gene": "RAD50",
          "Chr": "chr5",
          "Start": "131972761",
          "End": "131972941",
          "MinCoverage": "348",
          "MaxCoverage": "4396",
          "TotCoverage": "78219",
          "MeanCoverage": "434.55"
        },
        {
          "Gene": "RAD50",
          "Chr": "chr5",
          "Start": "131973723",
          "End": "131973963",
          "MinCoverage": "198",
          "MaxCoverage": "8925",
          "TotCoverage": "178254",
          "MeanCoverage": "742.725"
        },
        {
          "Gene": "RAD50",
          "Chr": "chr5",
          "Start": "131976310",
          "End": "131976550",
          "MinCoverage": "224",
          "MaxCoverage": "5632",
          "TotCoverage": "156616",
          "MeanCoverage": "652.5666666666667"
        },
        {
          "Gene": "RAD50",
          "Chr": "chr5",
          "Start": "131977842",
          "End": "131978082",
          "MinCoverage": "227",
          "MaxCoverage": "8190",
          "TotCoverage": "128351",
          "MeanCoverage": "534.7958333333333"
        },
        {
          "Gene": "RAD50",
          "Chr": "chr5",
          "Start": "131978754",
          "End": "131978934",
          "MinCoverage": "439",
          "MaxCoverage": "5390",
          "TotCoverage": "108943",
          "MeanCoverage": "605.2388888888889"
        },
        {
          "Gene": "HMGXB3",
          "Chr": "chr5",
          "Start": "149431216",
          "End": "149432776",
          "MinCoverage": "190",
          "MaxCoverage": "12054",
          "TotCoverage": "1280871",
          "MeanCoverage": "821.0711538461538"
        },
        {
          "Gene": "CSF1R",
          "Chr": "chr5",
          "Start": "149432787",
          "End": "149434056",
          "MinCoverage": "132",
          "MaxCoverage": "7088",
          "TotCoverage": "1191217",
          "MeanCoverage": "938.705279747833"
        },
        {
          "Gene": "CSF1R",
          "Chr": "chr5",
          "Start": "149434729",
          "End": "149434969",
          "MinCoverage": "70",
          "MaxCoverage": "3641",
          "TotCoverage": "60578",
          "MeanCoverage": "252.40833333333333"
        },
        {
          "Gene": "CSF1R",
          "Chr": "chr5",
          "Start": "149435536",
          "End": "149435956",
          "MinCoverage": "201",
          "MaxCoverage": "5880",
          "TotCoverage": "425916",
          "MeanCoverage": "1014.0857142857143"
        },
        {
          "Gene": "CSF1R",
          "Chr": "chr5",
          "Start": "149436778",
          "End": "149437230",
          "MinCoverage": "177",
          "MaxCoverage": "4680",
          "TotCoverage": "278588",
          "MeanCoverage": "616.3451327433628"
        },
        {
          "Gene": "CSF1R",
          "Chr": "chr5",
          "Start": "149439193",
          "End": "149439493",
          "MinCoverage": "207",
          "MaxCoverage": "3668",
          "TotCoverage": "274364",
          "MeanCoverage": "914.5466666666666"
        },
        {
          "Gene": "CSF1R",
          "Chr": "chr5",
          "Start": "149440359",
          "End": "149440599",
          "MinCoverage": "181",
          "MaxCoverage": "3354",
          "TotCoverage": "117697",
          "MeanCoverage": "490.40416666666664"
        },
        {
          "Gene": "CSF1R",
          "Chr": "chr5",
          "Start": "149440985",
          "End": "149441225",
          "MinCoverage": "148",
          "MaxCoverage": "10392",
          "TotCoverage": "284966",
          "MeanCoverage": "1187.3583333333333"
        },
        {
          "Gene": "CSF1R",
          "Chr": "chr5",
          "Start": "149441228",
          "End": "149441468",
          "MinCoverage": "322",
          "MaxCoverage": "7640",
          "TotCoverage": "223336",
          "MeanCoverage": "930.5666666666667"
        },
        {
          "Gene": "CSF1R",
          "Chr": "chr5",
          "Start": "149447635",
          "End": "149447991",
          "MinCoverage": "166",
          "MaxCoverage": "3456",
          "TotCoverage": "146910",
          "MeanCoverage": "412.6685393258427"
        },
        {
          "Gene": "CSF1R",
          "Chr": "chr5",
          "Start": "149449305",
          "End": "149449924",
          "MinCoverage": "0",
          "MaxCoverage": "2844",
          "TotCoverage": "261197",
          "MeanCoverage": "421.96607431340874"
        },
        {
          "Gene": "CSF1R",
          "Chr": "chr5",
          "Start": "149449956",
          "End": "149450196",
          "MinCoverage": "57",
          "MaxCoverage": "2310",
          "TotCoverage": "102372",
          "MeanCoverage": "426.55"
        },
        {
          "Gene": "CSF1R",
          "Chr": "chr5",
          "Start": "149452809",
          "End": "149453109",
          "MinCoverage": "134",
          "MaxCoverage": "3912",
          "TotCoverage": "72546",
          "MeanCoverage": "241.82"
        },
        {
          "Gene": "CSF1R",
          "Chr": "chr5",
          "Start": "149456367",
          "End": "149457130",
          "MinCoverage": "123",
          "MaxCoverage": "8687",
          "TotCoverage": "530596",
          "MeanCoverage": "695.4076015727392"
        },
        {
          "Gene": "CSF1R",
          "Chr": "chr5",
          "Start": "149457622",
          "End": "149457862",
          "MinCoverage": "387",
          "MaxCoverage": "5896",
          "TotCoverage": "265102",
          "MeanCoverage": "1104.5916666666667"
        },
        {
          "Gene": "CSF1R",
          "Chr": "chr5",
          "Start": "149459546",
          "End": "149459966",
          "MinCoverage": "235",
          "MaxCoverage": "6764",
          "TotCoverage": "507251",
          "MeanCoverage": "1207.740476190476"
        },
        {
          "Gene": "CSF1R",
          "Chr": "chr5",
          "Start": "149460278",
          "End": "149460638",
          "MinCoverage": "40",
          "MaxCoverage": "2737",
          "TotCoverage": "164030",
          "MeanCoverage": "455.6388888888889"
        },
        {
          "Gene": "CSF1R",
          "Chr": "chr5",
          "Start": "149465883",
          "End": "149466243",
          "MinCoverage": "278",
          "MaxCoverage": "7116",
          "TotCoverage": "377853",
          "MeanCoverage": "1049.5916666666667"
        },
        {
          "Gene": "PDGFRB",
          "Chr": "chr5",
          "Start": "149495297",
          "End": "149495537",
          "MinCoverage": "366",
          "MaxCoverage": "8382",
          "TotCoverage": "464146",
          "MeanCoverage": "1933.9416666666666"
        },
        {
          "Gene": "PDGFRB",
          "Chr": "chr5",
          "Start": "149497146",
          "End": "149497446",
          "MinCoverage": "105",
          "MaxCoverage": "3205",
          "TotCoverage": "151156",
          "MeanCoverage": "503.85333333333335"
        },
        {
          "Gene": "PDGFRB",
          "Chr": "chr5",
          "Start": "149498242",
          "End": "149498482",
          "MinCoverage": "120",
          "MaxCoverage": "5160",
          "TotCoverage": "207761",
          "MeanCoverage": "865.6708333333333"
        },
        {
          "Gene": "PDGFRB",
          "Chr": "chr5",
          "Start": "149498995",
          "End": "149499175",
          "MinCoverage": "180",
          "MaxCoverage": "2304",
          "TotCoverage": "43541",
          "MeanCoverage": "241.89444444444445"
        },
        {
          "Gene": "PDGFRB",
          "Chr": "chr5",
          "Start": "149499510",
          "End": "149499750",
          "MinCoverage": "301",
          "MaxCoverage": "5908",
          "TotCoverage": "211023",
          "MeanCoverage": "879.2625"
        },
        {
          "Gene": "PDGFRB",
          "Chr": "chr5",
          "Start": "149500391",
          "End": "149500631",
          "MinCoverage": "483",
          "MaxCoverage": "10602",
          "TotCoverage": "362080",
          "MeanCoverage": "1508.6666666666667"
        },
        {
          "Gene": "PDGFRB",
          "Chr": "chr5",
          "Start": "149500705",
          "End": "149500945",
          "MinCoverage": "143",
          "MaxCoverage": "5230",
          "TotCoverage": "192719",
          "MeanCoverage": "802.9958333333333"
        },
        {
          "Gene": "PDGFRB",
          "Chr": "chr5",
          "Start": "149501402",
          "End": "149501642",
          "MinCoverage": "195",
          "MaxCoverage": "4810",
          "TotCoverage": "104017",
          "MeanCoverage": "433.40416666666664"
        },
        {
          "Gene": "PDGFRB",
          "Chr": "chr5",
          "Start": "149502564",
          "End": "149502804",
          "MinCoverage": "206",
          "MaxCoverage": "2026",
          "TotCoverage": "148419",
          "MeanCoverage": "618.4125"
        },
        {
          "Gene": "PDGFRB",
          "Chr": "chr5",
          "Start": "149503747",
          "End": "149503987",
          "MinCoverage": "368",
          "MaxCoverage": "6108",
          "TotCoverage": "284432",
          "MeanCoverage": "1185.1333333333334"
        },
        {
          "Gene": "PDGFRB",
          "Chr": "chr5",
          "Start": "149504221",
          "End": "149504461",
          "MinCoverage": "254",
          "MaxCoverage": "3504",
          "TotCoverage": "137962",
          "MeanCoverage": "574.8416666666667"
        },
        {
          "Gene": "PDGFRB",
          "Chr": "chr5",
          "Start": "149504977",
          "End": "149505217",
          "MinCoverage": "309",
          "MaxCoverage": "6472",
          "TotCoverage": "203019",
          "MeanCoverage": "845.9125"
        },
        {
          "Gene": "PDGFRB",
          "Chr": "chr5",
          "Start": "149506039",
          "End": "149506219",
          "MinCoverage": "165",
          "MaxCoverage": "3339",
          "TotCoverage": "56551",
          "MeanCoverage": "314.1722222222222"
        },
        {
          "Gene": "PDGFRB",
          "Chr": "chr5",
          "Start": "149509305",
          "End": "149509545",
          "MinCoverage": "1429",
          "MaxCoverage": "10542",
          "TotCoverage": "805027",
          "MeanCoverage": "3354.2791666666667"
        },
        {
          "Gene": "PDGFRB",
          "Chr": "chr5",
          "Start": "149510043",
          "End": "149510283",
          "MinCoverage": "366",
          "MaxCoverage": "2331",
          "TotCoverage": "154405",
          "MeanCoverage": "643.3541666666666"
        },
        {
          "Gene": "PDGFRB",
          "Chr": "chr5",
          "Start": "149511539",
          "End": "149511659",
          "MinCoverage": "680",
          "MaxCoverage": "5810",
          "TotCoverage": "100052",
          "MeanCoverage": "833.7666666666667"
        },
        {
          "Gene": "PDGFRB",
          "Chr": "chr5",
          "Start": "149512288",
          "End": "149512528",
          "MinCoverage": "176",
          "MaxCoverage": "2907",
          "TotCoverage": "148261",
          "MeanCoverage": "617.7541666666667"
        },
        {
          "Gene": "PDGFRB",
          "Chr": "chr5",
          "Start": "149513115",
          "End": "149513355",
          "MinCoverage": "236",
          "MaxCoverage": "5805",
          "TotCoverage": "215341",
          "MeanCoverage": "897.2541666666667"
        },
        {
          "Gene": "PDGFRB",
          "Chr": "chr5",
          "Start": "149513387",
          "End": "149513627",
          "MinCoverage": "523",
          "MaxCoverage": "6635",
          "TotCoverage": "320847",
          "MeanCoverage": "1336.8625"
        },
        {
          "Gene": "PDGFRB",
          "Chr": "chr5",
          "Start": "149514253",
          "End": "149514613",
          "MinCoverage": "174",
          "MaxCoverage": "4953",
          "TotCoverage": "141380",
          "MeanCoverage": "392.72222222222223"
        },
        {
          "Gene": "PDGFRB",
          "Chr": "chr5",
          "Start": "149515099",
          "End": "149515459",
          "MinCoverage": "203",
          "MaxCoverage": "5115",
          "TotCoverage": "275923",
          "MeanCoverage": "766.4527777777778"
        },
        {
          "Gene": "PDGFRB",
          "Chr": "chr5",
          "Start": "149516500",
          "End": "149516680",
          "MinCoverage": "910",
          "MaxCoverage": "6837",
          "TotCoverage": "326412",
          "MeanCoverage": "1813.4"
        },
        {
          "Gene": "FAM71B",
          "Chr": "chr5",
          "Start": "156592506",
          "End": "156593346",
          "MinCoverage": "296",
          "MaxCoverage": "5887",
          "TotCoverage": "497130",
          "MeanCoverage": "591.8214285714286"
        },
        {
          "Gene": "ITK",
          "Chr": "chr5",
          "Start": "156607836",
          "End": "156608196",
          "MinCoverage": "79",
          "MaxCoverage": "5802",
          "TotCoverage": "247444",
          "MeanCoverage": "687.3444444444444"
        },
        {
          "Gene": "ITK",
          "Chr": "chr5",
          "Start": "156635831",
          "End": "156636071",
          "MinCoverage": "278",
          "MaxCoverage": "6800",
          "TotCoverage": "132582",
          "MeanCoverage": "552.425"
        },
        {
          "Gene": "ITK",
          "Chr": "chr5",
          "Start": "156638218",
          "End": "156638458",
          "MinCoverage": "208",
          "MaxCoverage": "5436",
          "TotCoverage": "96292",
          "MeanCoverage": "401.21666666666664"
        },
        {
          "Gene": "ITK",
          "Chr": "chr5",
          "Start": "156641145",
          "End": "156641385",
          "MinCoverage": "120",
          "MaxCoverage": "5472",
          "TotCoverage": "97945",
          "MeanCoverage": "408.1041666666667"
        },
        {
          "Gene": "ITK",
          "Chr": "chr5",
          "Start": "156644776",
          "End": "156645016",
          "MinCoverage": "194",
          "MaxCoverage": "4102",
          "TotCoverage": "97369",
          "MeanCoverage": "405.70416666666665"
        },
        {
          "Gene": "ITK",
          "Chr": "chr5",
          "Start": "156649798",
          "End": "156650098",
          "MinCoverage": "168",
          "MaxCoverage": "5368",
          "TotCoverage": "127919",
          "MeanCoverage": "426.39666666666665"
        },
        {
          "Gene": "ITK",
          "Chr": "chr5",
          "Start": "156659229",
          "End": "156659469",
          "MinCoverage": "219",
          "MaxCoverage": "5760",
          "TotCoverage": "128182",
          "MeanCoverage": "534.0916666666667"
        },
        {
          "Gene": "ITK",
          "Chr": "chr5",
          "Start": "156665039",
          "End": "156665279",
          "MinCoverage": "234",
          "MaxCoverage": "6006",
          "TotCoverage": "107099",
          "MeanCoverage": "446.24583333333334"
        },
        {
          "Gene": "ITK",
          "Chr": "chr5",
          "Start": "156668572",
          "End": "156668812",
          "MinCoverage": "109",
          "MaxCoverage": "5139",
          "TotCoverage": "76907",
          "MeanCoverage": "320.4458333333333"
        },
        {
          "Gene": "ITK",
          "Chr": "chr5",
          "Start": "156670568",
          "End": "156670868",
          "MinCoverage": "310",
          "MaxCoverage": "7920",
          "TotCoverage": "195205",
          "MeanCoverage": "650.6833333333333"
        },
        {
          "Gene": "ITK",
          "Chr": "chr5",
          "Start": "156671199",
          "End": "156671559",
          "MinCoverage": "259",
          "MaxCoverage": "6831",
          "TotCoverage": "218091",
          "MeanCoverage": "605.8083333333333"
        },
        {
          "Gene": "ITK",
          "Chr": "chr5",
          "Start": "156672662",
          "End": "156673082",
          "MinCoverage": "124",
          "MaxCoverage": "7395",
          "TotCoverage": "219907",
          "MeanCoverage": "523.5880952380952"
        },
        {
          "Gene": "ITK",
          "Chr": "chr5",
          "Start": "156675788",
          "End": "156676088",
          "MinCoverage": "109",
          "MaxCoverage": "7620",
          "TotCoverage": "146251",
          "MeanCoverage": "487.50333333333333"
        },
        {
          "Gene": "NPM1",
          "Chr": "chr5",
          "Start": "170818248",
          "End": "170818488",
          "MinCoverage": "268",
          "MaxCoverage": "7725",
          "TotCoverage": "120707",
          "MeanCoverage": "502.9458333333333"
        },
        {
          "Gene": "NPM1",
          "Chr": "chr5",
          "Start": "170818636",
          "End": "170818876",
          "MinCoverage": "94",
          "MaxCoverage": "4347",
          "TotCoverage": "96572",
          "MeanCoverage": "402.3833333333333"
        },
        {
          "Gene": "NPM1",
          "Chr": "chr5",
          "Start": "170819650",
          "End": "170820140",
          "MinCoverage": "141",
          "MaxCoverage": "8460",
          "TotCoverage": "329880",
          "MeanCoverage": "673.2244897959183"
        },
        {
          "Gene": "NPM1",
          "Chr": "chr5",
          "Start": "170827765",
          "End": "170828005",
          "MinCoverage": "377",
          "MaxCoverage": "3745",
          "TotCoverage": "164181",
          "MeanCoverage": "684.0875"
        },
        {
          "Gene": "NPM1",
          "Chr": "chr5",
          "Start": "170832236",
          "End": "170832476",
          "MinCoverage": "246",
          "MaxCoverage": "7304",
          "TotCoverage": "107874",
          "MeanCoverage": "449.475"
        },
        {
          "Gene": "NPM1",
          "Chr": "chr5",
          "Start": "170833325",
          "End": "170833805",
          "MinCoverage": "338",
          "MaxCoverage": "10109",
          "TotCoverage": "378241",
          "MeanCoverage": "788.0020833333333"
        },
        {
          "Gene": "NPM1",
          "Chr": "chr5",
          "Start": "170834620",
          "End": "170834860",
          "MinCoverage": "342",
          "MaxCoverage": "10008",
          "TotCoverage": "188598",
          "MeanCoverage": "785.825"
        },
        {
          "Gene": "NPM1",
          "Chr": "chr5",
          "Start": "170837417",
          "End": "170837949",
          "MinCoverage": "127",
          "MaxCoverage": "6440",
          "TotCoverage": "388167",
          "MeanCoverage": "729.6372180451128"
        },
        {
          "Gene": "DAXX",
          "Chr": "chr6",
          "Start": "33286276",
          "End": "33286636",
          "MinCoverage": "70",
          "MaxCoverage": "1980",
          "TotCoverage": "34539",
          "MeanCoverage": "95.94166666666666"
        },
        {
          "Gene": "DAXX",
          "Chr": "chr6",
          "Start": "33286704",
          "End": "33287064",
          "MinCoverage": "57",
          "MaxCoverage": "760",
          "TotCoverage": "36514",
          "MeanCoverage": "101.42777777777778"
        },
        {
          "Gene": "DAXX",
          "Chr": "chr6",
          "Start": "33287093",
          "End": "33288441",
          "MinCoverage": "19",
          "MaxCoverage": "2079",
          "TotCoverage": "143619",
          "MeanCoverage": "106.54228486646885"
        },
        {
          "Gene": "DAXX",
          "Chr": "chr6",
          "Start": "33288459",
          "End": "33289834",
          "MinCoverage": "21",
          "MaxCoverage": "1708",
          "TotCoverage": "162895",
          "MeanCoverage": "118.46909090909091"
        },
        {
          "Gene": "FANCE",
          "Chr": "chr6",
          "Start": "35423466",
          "End": "35424186",
          "MinCoverage": "195",
          "MaxCoverage": "6720",
          "TotCoverage": "654395",
          "MeanCoverage": "908.8819444444445"
        },
        {
          "Gene": "FANCE",
          "Chr": "chr6",
          "Start": "35425606",
          "End": "35425846",
          "MinCoverage": "76",
          "MaxCoverage": "2565",
          "TotCoverage": "58874",
          "MeanCoverage": "245.30833333333334"
        },
        {
          "Gene": "FANCE",
          "Chr": "chr6",
          "Start": "35425995",
          "End": "35426295",
          "MinCoverage": "315",
          "MaxCoverage": "5980",
          "TotCoverage": "314772",
          "MeanCoverage": "1049.24"
        },
        {
          "Gene": "FANCE",
          "Chr": "chr6",
          "Start": "35428241",
          "End": "35428481",
          "MinCoverage": "118",
          "MaxCoverage": "1780",
          "TotCoverage": "66408",
          "MeanCoverage": "276.7"
        },
        {
          "Gene": "FANCE",
          "Chr": "chr6",
          "Start": "35430425",
          "End": "35430756",
          "MinCoverage": "325",
          "MaxCoverage": "6839",
          "TotCoverage": "195454",
          "MeanCoverage": "590.4954682779456"
        },
        {
          "Gene": "VEGFA",
          "Chr": "chr6",
          "Start": "43737897",
          "End": "43738737",
          "MinCoverage": "7",
          "MaxCoverage": "5688",
          "TotCoverage": "418309",
          "MeanCoverage": "497.9869047619048"
        },
        {
          "Gene": "VEGFA",
          "Chr": "chr6",
          "Start": "43738752",
          "End": "43739052",
          "MinCoverage": "8",
          "MaxCoverage": "1456",
          "TotCoverage": "52906",
          "MeanCoverage": "176.35333333333332"
        },
        {
          "Gene": "VEGFA",
          "Chr": "chr6",
          "Start": "43739693",
          "End": "43739873",
          "MinCoverage": "45",
          "MaxCoverage": "987",
          "TotCoverage": "20327",
          "MeanCoverage": "112.92777777777778"
        },
        {
          "Gene": "VEGFA",
          "Chr": "chr6",
          "Start": "43740906",
          "End": "43744626",
          "MinCoverage": "58",
          "MaxCoverage": "7293",
          "TotCoverage": "2488826",
          "MeanCoverage": "669.0392473118279"
        },
        {
          "Gene": "VEGFA",
          "Chr": "chr6",
          "Start": "43744737",
          "End": "43746417",
          "MinCoverage": "97",
          "MaxCoverage": "7553",
          "TotCoverage": "799279",
          "MeanCoverage": "475.76130952380953"
        },
        {
          "Gene": "VEGFA",
          "Chr": "chr6",
          "Start": "43746484",
          "End": "43748639",
          "MinCoverage": "264",
          "MaxCoverage": "7470",
          "TotCoverage": "1814461",
          "MeanCoverage": "841.9772621809744"
        },
        {
          "Gene": "VEGFA",
          "Chr": "chr6",
          "Start": "43748680",
          "End": "43749880",
          "MinCoverage": "180",
          "MaxCoverage": "9023",
          "TotCoverage": "998745",
          "MeanCoverage": "832.2875"
        },
        {
          "Gene": "VEGFA",
          "Chr": "chr6",
          "Start": "43749903",
          "End": "43752663",
          "MinCoverage": "296",
          "MaxCoverage": "17619",
          "TotCoverage": "2784702",
          "MeanCoverage": "1008.95"
        },
        {
          "Gene": "VEGFA",
          "Chr": "chr6",
          "Start": "43752762",
          "End": "43753842",
          "MinCoverage": "255",
          "MaxCoverage": "7482",
          "TotCoverage": "942624",
          "MeanCoverage": "872.8"
        },
        {
          "Gene": "VEGFA",
          "Chr": "chr6",
          "Start": "43754022",
          "End": "43754262",
          "MinCoverage": "287",
          "MaxCoverage": "3171",
          "TotCoverage": "112317",
          "MeanCoverage": "467.9875"
        },
        {
          "Gene": "MDN1",
          "Chr": "chr6",
          "Start": "90503426",
          "End": "90503726",
          "MinCoverage": "85",
          "MaxCoverage": "5214",
          "TotCoverage": "142912",
          "MeanCoverage": "476.37333333333333"
        },
        {
          "Gene": "MDN1",
          "Chr": "chr6",
          "Start": "90503752",
          "End": "90503992",
          "MinCoverage": "145",
          "MaxCoverage": "4536",
          "TotCoverage": "114984",
          "MeanCoverage": "479.1"
        },
        {
          "Gene": "ROS1",
          "Chr": "chr6",
          "Start": "117609468",
          "End": "117610101",
          "MinCoverage": "408",
          "MaxCoverage": "17370",
          "TotCoverage": "726248",
          "MeanCoverage": "1147.3112164297"
        },
        {
          "Gene": "ROS1",
          "Chr": "chr6",
          "Start": "117622068",
          "End": "117622368",
          "MinCoverage": "206",
          "MaxCoverage": "6550",
          "TotCoverage": "126221",
          "MeanCoverage": "420.7366666666667"
        },
        {
          "Gene": "ROS1",
          "Chr": "chr6",
          "Start": "117629903",
          "End": "117630143",
          "MinCoverage": "136",
          "MaxCoverage": "3573",
          "TotCoverage": "95189",
          "MeanCoverage": "396.62083333333334"
        },
        {
          "Gene": "ROS1",
          "Chr": "chr6",
          "Start": "117631130",
          "End": "117631578",
          "MinCoverage": "110",
          "MaxCoverage": "7707",
          "TotCoverage": "286505",
          "MeanCoverage": "639.5200892857143"
        },
        {
          "Gene": "ROS1",
          "Chr": "chr6",
          "Start": "117632108",
          "End": "117632348",
          "MinCoverage": "318",
          "MaxCoverage": "7360",
          "TotCoverage": "203366",
          "MeanCoverage": "847.3583333333333"
        },
        {
          "Gene": "ROS1",
          "Chr": "chr6",
          "Start": "117638250",
          "End": "117638490",
          "MinCoverage": "300",
          "MaxCoverage": "6765",
          "TotCoverage": "98178",
          "MeanCoverage": "409.075"
        },
        {
          "Gene": "ROS1",
          "Chr": "chr6",
          "Start": "117640961",
          "End": "117641261",
          "MinCoverage": "517",
          "MaxCoverage": "10500",
          "TotCoverage": "326191",
          "MeanCoverage": "1087.3033333333333"
        },
        {
          "Gene": "ROS1",
          "Chr": "chr6",
          "Start": "117642289",
          "End": "117642644",
          "MinCoverage": "223",
          "MaxCoverage": "10290",
          "TotCoverage": "289533",
          "MeanCoverage": "815.5859154929577"
        },
        {
          "Gene": "ROS1",
          "Chr": "chr6",
          "Start": "117647331",
          "End": "117647631",
          "MinCoverage": "338",
          "MaxCoverage": "15300",
          "TotCoverage": "301640",
          "MeanCoverage": "1005.4666666666667"
        },
        {
          "Gene": "ROS1",
          "Chr": "chr6",
          "Start": "117650430",
          "End": "117650670",
          "MinCoverage": "553",
          "MaxCoverage": "8868",
          "TotCoverage": "302294",
          "MeanCoverage": "1259.5583333333334"
        },
        {
          "Gene": "ROS1",
          "Chr": "chr6",
          "Start": "117658268",
          "End": "117658568",
          "MinCoverage": "373",
          "MaxCoverage": "9922",
          "TotCoverage": "264639",
          "MeanCoverage": "882.13"
        },
        {
          "Gene": "ROS1",
          "Chr": "chr6",
          "Start": "117662246",
          "End": "117662846",
          "MinCoverage": "322",
          "MaxCoverage": "10843",
          "TotCoverage": "588956",
          "MeanCoverage": "981.5933333333334"
        },
        {
          "Gene": "ROS1",
          "Chr": "chr6",
          "Start": "117663484",
          "End": "117663784",
          "MinCoverage": "182",
          "MaxCoverage": "12033",
          "TotCoverage": "421764",
          "MeanCoverage": "1405.88"
        },
        {
          "Gene": "ROS1",
          "Chr": "chr6",
          "Start": "117665143",
          "End": "117665503",
          "MinCoverage": "124",
          "MaxCoverage": "7024",
          "TotCoverage": "244415",
          "MeanCoverage": "678.9305555555555"
        },
        {
          "Gene": "ROS1",
          "Chr": "chr6",
          "Start": "117674092",
          "End": "117674392",
          "MinCoverage": "268",
          "MaxCoverage": "12420",
          "TotCoverage": "311918",
          "MeanCoverage": "1039.7266666666667"
        },
        {
          "Gene": "ROS1",
          "Chr": "chr6",
          "Start": "117677724",
          "End": "117678144",
          "MinCoverage": "404",
          "MaxCoverage": "11132",
          "TotCoverage": "368072",
          "MeanCoverage": "876.3619047619047"
        },
        {
          "Gene": "ROS1",
          "Chr": "chr6",
          "Start": "117678889",
          "End": "117679249",
          "MinCoverage": "130",
          "MaxCoverage": "9562",
          "TotCoverage": "369589",
          "MeanCoverage": "1026.6361111111112"
        },
        {
          "Gene": "ROS1",
          "Chr": "chr6",
          "Start": "117680892",
          "End": "117681252",
          "MinCoverage": "447",
          "MaxCoverage": "17343",
          "TotCoverage": "473180",
          "MeanCoverage": "1314.388888888889"
        },
        {
          "Gene": "ROS1",
          "Chr": "chr6",
          "Start": "117681443",
          "End": "117681683",
          "MinCoverage": "230",
          "MaxCoverage": "8414",
          "TotCoverage": "187584",
          "MeanCoverage": "781.6"
        },
        {
          "Gene": "ROS1",
          "Chr": "chr6",
          "Start": "117683686",
          "End": "117684106",
          "MinCoverage": "316",
          "MaxCoverage": "9738",
          "TotCoverage": "353070",
          "MeanCoverage": "840.6428571428571"
        },
        {
          "Gene": "ROS1",
          "Chr": "chr6",
          "Start": "117686144",
          "End": "117686444",
          "MinCoverage": "293",
          "MaxCoverage": "11550",
          "TotCoverage": "201921",
          "MeanCoverage": "673.07"
        },
        {
          "Gene": "ROS1",
          "Chr": "chr6",
          "Start": "117686673",
          "End": "117686973",
          "MinCoverage": "259",
          "MaxCoverage": "5621",
          "TotCoverage": "174213",
          "MeanCoverage": "580.71"
        },
        {
          "Gene": "ROS1",
          "Chr": "chr6",
          "Start": "117687165",
          "End": "117687525",
          "MinCoverage": "538",
          "MaxCoverage": "8757",
          "TotCoverage": "317141",
          "MeanCoverage": "880.9472222222222"
        },
        {
          "Gene": "ROS1",
          "Chr": "chr6",
          "Start": "117700151",
          "End": "117700391",
          "MinCoverage": "276",
          "MaxCoverage": "11220",
          "TotCoverage": "148019",
          "MeanCoverage": "616.7458333333333"
        },
        {
          "Gene": "ROS1",
          "Chr": "chr6",
          "Start": "117704425",
          "End": "117704725",
          "MinCoverage": "174",
          "MaxCoverage": "9636",
          "TotCoverage": "277539",
          "MeanCoverage": "925.13"
        },
        {
          "Gene": "ROS1",
          "Chr": "chr6",
          "Start": "117706784",
          "End": "117707086",
          "MinCoverage": "402",
          "MaxCoverage": "10710",
          "TotCoverage": "285312",
          "MeanCoverage": "944.7417218543046"
        },
        {
          "Gene": "ROS1",
          "Chr": "chr6",
          "Start": "117707986",
          "End": "117708226",
          "MinCoverage": "261",
          "MaxCoverage": "7290",
          "TotCoverage": "196907",
          "MeanCoverage": "820.4458333333333"
        },
        {
          "Gene": "ROS1",
          "Chr": "chr6",
          "Start": "117708889",
          "End": "117709249",
          "MinCoverage": "444",
          "MaxCoverage": "14244",
          "TotCoverage": "350973",
          "MeanCoverage": "974.925"
        },
        {
          "Gene": "ROS1",
          "Chr": "chr6",
          "Start": "117710460",
          "End": "117711060",
          "MinCoverage": "463",
          "MaxCoverage": "13958",
          "TotCoverage": "900089",
          "MeanCoverage": "1500.1483333333333"
        },
        {
          "Gene": "ROS1",
          "Chr": "chr6",
          "Start": "117714315",
          "End": "117714555",
          "MinCoverage": "405",
          "MaxCoverage": "7290",
          "TotCoverage": "182213",
          "MeanCoverage": "759.2208333333333"
        },
        {
          "Gene": "ROS1",
          "Chr": "chr6",
          "Start": "117715266",
          "End": "117715566",
          "MinCoverage": "373",
          "MaxCoverage": "7290",
          "TotCoverage": "237252",
          "MeanCoverage": "790.84"
        },
        {
          "Gene": "ROS1",
          "Chr": "chr6",
          "Start": "117715719",
          "End": "117715959",
          "MinCoverage": "500",
          "MaxCoverage": "13940",
          "TotCoverage": "295762",
          "MeanCoverage": "1232.3416666666667"
        },
        {
          "Gene": "ROS1",
          "Chr": "chr6",
          "Start": "117717998",
          "End": "117718358",
          "MinCoverage": "207",
          "MaxCoverage": "9470",
          "TotCoverage": "256656",
          "MeanCoverage": "712.9333333333333"
        },
        {
          "Gene": "ROS1",
          "Chr": "chr6",
          "Start": "117724250",
          "End": "117724490",
          "MinCoverage": "307",
          "MaxCoverage": "7634",
          "TotCoverage": "114924",
          "MeanCoverage": "478.85"
        },
        {
          "Gene": "ROS1",
          "Chr": "chr6",
          "Start": "117725379",
          "End": "117725679",
          "MinCoverage": "517",
          "MaxCoverage": "7550",
          "TotCoverage": "331602",
          "MeanCoverage": "1105.34"
        },
        {
          "Gene": "ROS1",
          "Chr": "chr6",
          "Start": "117730654",
          "End": "117730894",
          "MinCoverage": "352",
          "MaxCoverage": "8280",
          "TotCoverage": "249502",
          "MeanCoverage": "1039.5916666666667"
        },
        {
          "Gene": "ROS1",
          "Chr": "chr6",
          "Start": "117739526",
          "End": "117739766",
          "MinCoverage": "398",
          "MaxCoverage": "9552",
          "TotCoverage": "198708",
          "MeanCoverage": "827.95"
        },
        {
          "Gene": "ROS1",
          "Chr": "chr6",
          "Start": "117746617",
          "End": "117747097",
          "MinCoverage": "632",
          "MaxCoverage": "9304",
          "TotCoverage": "484824",
          "MeanCoverage": "1010.05"
        },
        {
          "Gene": "ESR1",
          "Chr": "chr6",
          "Start": "152129029",
          "End": "152129509",
          "MinCoverage": "535",
          "MaxCoverage": "9414",
          "TotCoverage": "891211",
          "MeanCoverage": "1856.6895833333333"
        },
        {
          "Gene": "ESR1",
          "Chr": "chr6",
          "Start": "152130204",
          "End": "152130444",
          "MinCoverage": "291",
          "MaxCoverage": "3333",
          "TotCoverage": "234899",
          "MeanCoverage": "978.7458333333333"
        },
        {
          "Gene": "ESR1",
          "Chr": "chr6",
          "Start": "152163709",
          "End": "152163949",
          "MinCoverage": "148",
          "MaxCoverage": "4858",
          "TotCoverage": "106689",
          "MeanCoverage": "444.5375"
        },
        {
          "Gene": "ESR1",
          "Chr": "chr6",
          "Start": "152201727",
          "End": "152201967",
          "MinCoverage": "177",
          "MaxCoverage": "2900",
          "TotCoverage": "116450",
          "MeanCoverage": "485.2083333333333"
        },
        {
          "Gene": "ESR1",
          "Chr": "chr6",
          "Start": "152265295",
          "End": "152265655",
          "MinCoverage": "227",
          "MaxCoverage": "8199",
          "TotCoverage": "223548",
          "MeanCoverage": "620.9666666666667"
        },
        {
          "Gene": "ESR1",
          "Chr": "chr6",
          "Start": "152332739",
          "End": "152332979",
          "MinCoverage": "212",
          "MaxCoverage": "4662",
          "TotCoverage": "89020",
          "MeanCoverage": "370.9166666666667"
        },
        {
          "Gene": "ESR1",
          "Chr": "chr6",
          "Start": "152382091",
          "End": "152382331",
          "MinCoverage": "176",
          "MaxCoverage": "5382",
          "TotCoverage": "104882",
          "MeanCoverage": "437.0083333333333"
        },
        {
          "Gene": "ESR1",
          "Chr": "chr6",
          "Start": "152415491",
          "End": "152415731",
          "MinCoverage": "657",
          "MaxCoverage": "10115",
          "TotCoverage": "345097",
          "MeanCoverage": "1437.9041666666667"
        },
        {
          "Gene": "ESR1",
          "Chr": "chr6",
          "Start": "152419833",
          "End": "152420133",
          "MinCoverage": "359",
          "MaxCoverage": "7840",
          "TotCoverage": "486150",
          "MeanCoverage": "1620.5"
        },
        {
          "Gene": "ESR1,SYNE1",
          "Chr": "chr6",
          "Start": "152446351",
          "End": "152446531",
          "MinCoverage": "277",
          "MaxCoverage": "5110",
          "TotCoverage": "87121",
          "MeanCoverage": "484.00555555555553"
        },
        {
          "Gene": "ARID1B",
          "Chr": "chr6",
          "Start": "157098880",
          "End": "157100793",
          "MinCoverage": "0",
          "MaxCoverage": "7842",
          "TotCoverage": "1407019",
          "MeanCoverage": "735.5039205436487"
        },
        {
          "Gene": "ARID1B",
          "Chr": "chr6",
          "Start": "157150307",
          "End": "157150607",
          "MinCoverage": "253",
          "MaxCoverage": "6144",
          "TotCoverage": "306868",
          "MeanCoverage": "1022.8933333333333"
        },
        {
          "Gene": "ARID1B",
          "Chr": "chr6",
          "Start": "157222434",
          "End": "157222734",
          "MinCoverage": "517",
          "MaxCoverage": "7972",
          "TotCoverage": "532698",
          "MeanCoverage": "1775.66"
        },
        {
          "Gene": "ARID1B",
          "Chr": "chr6",
          "Start": "157405737",
          "End": "157406097",
          "MinCoverage": "622",
          "MaxCoverage": "17124",
          "TotCoverage": "972799",
          "MeanCoverage": "2702.2194444444444"
        },
        {
          "Gene": "ARID1B",
          "Chr": "chr6",
          "Start": "157431530",
          "End": "157431770",
          "MinCoverage": "277",
          "MaxCoverage": "4392",
          "TotCoverage": "131363",
          "MeanCoverage": "547.3458333333333"
        },
        {
          "Gene": "ARID1B",
          "Chr": "chr6",
          "Start": "157454101",
          "End": "157454401",
          "MinCoverage": "294",
          "MaxCoverage": "11102",
          "TotCoverage": "180938",
          "MeanCoverage": "603.1266666666667"
        },
        {
          "Gene": "ARID1B",
          "Chr": "chr6",
          "Start": "157488096",
          "End": "157488396",
          "MinCoverage": "487",
          "MaxCoverage": "13725",
          "TotCoverage": "944216",
          "MeanCoverage": "3147.3866666666668"
        },
        {
          "Gene": "ARID1B",
          "Chr": "chr6",
          "Start": "157502027",
          "End": "157502387",
          "MinCoverage": "131",
          "MaxCoverage": "2682",
          "TotCoverage": "104168",
          "MeanCoverage": "289.35555555555555"
        },
        {
          "Gene": "ARID1B",
          "Chr": "chr6",
          "Start": "157505286",
          "End": "157505646",
          "MinCoverage": "273",
          "MaxCoverage": "7385",
          "TotCoverage": "339427",
          "MeanCoverage": "942.8527777777778"
        },
        {
          "Gene": "ARID1B",
          "Chr": "chr6",
          "Start": "157510724",
          "End": "157510964",
          "MinCoverage": "215",
          "MaxCoverage": "4512",
          "TotCoverage": "106895",
          "MeanCoverage": "445.3958333333333"
        },
        {
          "Gene": "ARID1B",
          "Chr": "chr6",
          "Start": "157511107",
          "End": "157511407",
          "MinCoverage": "390",
          "MaxCoverage": "8964",
          "TotCoverage": "347068",
          "MeanCoverage": "1156.8933333333334"
        },
        {
          "Gene": "ARID1B",
          "Chr": "chr6",
          "Start": "157517223",
          "End": "157517523",
          "MinCoverage": "346",
          "MaxCoverage": "4816",
          "TotCoverage": "177101",
          "MeanCoverage": "590.3366666666667"
        },
        {
          "Gene": "ARID1B",
          "Chr": "chr6",
          "Start": "157519872",
          "End": "157520112",
          "MinCoverage": "387",
          "MaxCoverage": "4116",
          "TotCoverage": "237315",
          "MeanCoverage": "988.8125"
        },
        {
          "Gene": "ARID1B",
          "Chr": "chr6",
          "Start": "157521780",
          "End": "157522680",
          "MinCoverage": "487",
          "MaxCoverage": "17308",
          "TotCoverage": "2350646",
          "MeanCoverage": "2611.8288888888887"
        },
        {
          "Gene": "ARID1B",
          "Chr": "chr6",
          "Start": "157524944",
          "End": "157525184",
          "MinCoverage": "256",
          "MaxCoverage": "10280",
          "TotCoverage": "194571",
          "MeanCoverage": "810.7125"
        },
        {
          "Gene": "PMS2",
          "Chr": "chr7",
          "Start": "6012981",
          "End": "6013221",
          "MinCoverage": "135",
          "MaxCoverage": "2740",
          "TotCoverage": "81113",
          "MeanCoverage": "337.97083333333336"
        },
        {
          "Gene": "PMS2",
          "Chr": "chr7",
          "Start": "6017183",
          "End": "6017423",
          "MinCoverage": "344",
          "MaxCoverage": "6920",
          "TotCoverage": "312095",
          "MeanCoverage": "1300.3958333333333"
        },
        {
          "Gene": "PMS2",
          "Chr": "chr7",
          "Start": "6018182",
          "End": "6018422",
          "MinCoverage": "287",
          "MaxCoverage": "5172",
          "TotCoverage": "213970",
          "MeanCoverage": "891.5416666666666"
        },
        {
          "Gene": "PMS2",
          "Chr": "chr7",
          "Start": "6022418",
          "End": "6022658",
          "MinCoverage": "236",
          "MaxCoverage": "6176",
          "TotCoverage": "139525",
          "MeanCoverage": "581.3541666666666"
        },
        {
          "Gene": "PMS2",
          "Chr": "chr7",
          "Start": "6026370",
          "End": "6027270",
          "MinCoverage": "286",
          "MaxCoverage": "10758",
          "TotCoverage": "1260774",
          "MeanCoverage": "1400.86"
        },
        {
          "Gene": "PMS2",
          "Chr": "chr7",
          "Start": "6029388",
          "End": "6029628",
          "MinCoverage": "126",
          "MaxCoverage": "9757",
          "TotCoverage": "134911",
          "MeanCoverage": "562.1291666666667"
        },
        {
          "Gene": "PMS2",
          "Chr": "chr7",
          "Start": "6031555",
          "End": "6031735",
          "MinCoverage": "273",
          "MaxCoverage": "5203",
          "TotCoverage": "95328",
          "MeanCoverage": "529.6"
        },
        {
          "Gene": "PMS2",
          "Chr": "chr7",
          "Start": "6035124",
          "End": "6035304",
          "MinCoverage": "288",
          "MaxCoverage": "5240",
          "TotCoverage": "81173",
          "MeanCoverage": "450.9611111111111"
        },
        {
          "Gene": "PMS2",
          "Chr": "chr7",
          "Start": "6036915",
          "End": "6037095",
          "MinCoverage": "46",
          "MaxCoverage": "1905",
          "TotCoverage": "23236",
          "MeanCoverage": "129.0888888888889"
        },
        {
          "Gene": "PMS2",
          "Chr": "chr7",
          "Start": "6038702",
          "End": "6038942",
          "MinCoverage": "270",
          "MaxCoverage": "5120",
          "TotCoverage": "111125",
          "MeanCoverage": "463.0208333333333"
        },
        {
          "Gene": "PMS2",
          "Chr": "chr7",
          "Start": "6042055",
          "End": "6042295",
          "MinCoverage": "136",
          "MaxCoverage": "3069",
          "TotCoverage": "56857",
          "MeanCoverage": "236.90416666666667"
        },
        {
          "Gene": "PMS2",
          "Chr": "chr7",
          "Start": "6043251",
          "End": "6043491",
          "MinCoverage": "242",
          "MaxCoverage": "3845",
          "TotCoverage": "123284",
          "MeanCoverage": "513.6833333333333"
        },
        {
          "Gene": "PMS2",
          "Chr": "chr7",
          "Start": "6043536",
          "End": "6043716",
          "MinCoverage": "127",
          "MaxCoverage": "8569",
          "TotCoverage": "93994",
          "MeanCoverage": "522.1888888888889"
        },
        {
          "Gene": "PMS2",
          "Chr": "chr7",
          "Start": "6045472",
          "End": "6045712",
          "MinCoverage": "288",
          "MaxCoverage": "5976",
          "TotCoverage": "178201",
          "MeanCoverage": "742.5041666666667"
        },
        {
          "Gene": "PMS2",
          "Chr": "chr7",
          "Start": "6048548",
          "End": "6048728",
          "MinCoverage": "616",
          "MaxCoverage": "11740",
          "TotCoverage": "201683",
          "MeanCoverage": "1120.4611111111112"
        },
        {
          "Gene": "ABCA13",
          "Chr": "chr7",
          "Start": "48280413",
          "End": "48280713",
          "MinCoverage": "290",
          "MaxCoverage": "4543",
          "TotCoverage": "120128",
          "MeanCoverage": "400.4266666666667"
        },
        {
          "Gene": "ABCA13",
          "Chr": "chr7",
          "Start": "48550617",
          "End": "48550857",
          "MinCoverage": "162",
          "MaxCoverage": "8163",
          "TotCoverage": "133413",
          "MeanCoverage": "555.8875"
        },
        {
          "Gene": "ABCA13",
          "Chr": "chr7",
          "Start": "48556255",
          "End": "48556555",
          "MinCoverage": "471",
          "MaxCoverage": "9128",
          "TotCoverage": "321523",
          "MeanCoverage": "1071.7433333333333"
        },
        {
          "Gene": "ABCA13",
          "Chr": "chr7",
          "Start": "48559583",
          "End": "48559943",
          "MinCoverage": "294",
          "MaxCoverage": "7928",
          "TotCoverage": "213226",
          "MeanCoverage": "592.2944444444445"
        },
        {
          "Gene": "ABCA13",
          "Chr": "chr7",
          "Start": "48619744",
          "End": "48620044",
          "MinCoverage": "361",
          "MaxCoverage": "5532",
          "TotCoverage": "268736",
          "MeanCoverage": "895.7866666666666"
        },
        {
          "Gene": "ABCA13",
          "Chr": "chr7",
          "Start": "48682816",
          "End": "48683056",
          "MinCoverage": "302",
          "MaxCoverage": "5516",
          "TotCoverage": "153478",
          "MeanCoverage": "639.4916666666667"
        },
        {
          "Gene": "EGFR",
          "Chr": "chr7",
          "Start": "55086669",
          "End": "55087329",
          "MinCoverage": "46",
          "MaxCoverage": "1956",
          "TotCoverage": "194431",
          "MeanCoverage": "294.5924242424242"
        },
        {
          "Gene": "EGFR",
          "Chr": "chr7",
          "Start": "55209904",
          "End": "55210204",
          "MinCoverage": "131",
          "MaxCoverage": "4752",
          "TotCoverage": "113441",
          "MeanCoverage": "378.13666666666666"
        },
        {
          "Gene": "EGFR",
          "Chr": "chr7",
          "Start": "55210921",
          "End": "55211239",
          "MinCoverage": "472",
          "MaxCoverage": "12112",
          "TotCoverage": "307955",
          "MeanCoverage": "968.4119496855346"
        },
        {
          "Gene": "EGFR",
          "Chr": "chr7",
          "Start": "55214245",
          "End": "55214485",
          "MinCoverage": "349",
          "MaxCoverage": "8708",
          "TotCoverage": "202707",
          "MeanCoverage": "844.6125"
        },
        {
          "Gene": "EGFR",
          "Chr": "chr7",
          "Start": "55218900",
          "End": "55219140",
          "MinCoverage": "204",
          "MaxCoverage": "10416",
          "TotCoverage": "110952",
          "MeanCoverage": "462.3"
        },
        {
          "Gene": "EGFR",
          "Chr": "chr7",
          "Start": "55220009",
          "End": "55220429",
          "MinCoverage": "413",
          "MaxCoverage": "7680",
          "TotCoverage": "643853",
          "MeanCoverage": "1532.9833333333333"
        },
        {
          "Gene": "EGFR",
          "Chr": "chr7",
          "Start": "55221624",
          "End": "55221957",
          "MinCoverage": "652",
          "MaxCoverage": "11966",
          "TotCoverage": "1324876",
          "MeanCoverage": "3978.6066066066064"
        },
        {
          "Gene": "EGFR",
          "Chr": "chr7",
          "Start": "55223460",
          "End": "55223700",
          "MinCoverage": "468",
          "MaxCoverage": "4434",
          "TotCoverage": "317916",
          "MeanCoverage": "1324.65"
        },
        {
          "Gene": "EGFR",
          "Chr": "chr7",
          "Start": "55224164",
          "End": "55224704",
          "MinCoverage": "219",
          "MaxCoverage": "6468",
          "TotCoverage": "378877",
          "MeanCoverage": "701.6240740740741"
        },
        {
          "Gene": "EGFR",
          "Chr": "chr7",
          "Start": "55225280",
          "End": "55225520",
          "MinCoverage": "450",
          "MaxCoverage": "9990",
          "TotCoverage": "291694",
          "MeanCoverage": "1215.3916666666667"
        },
        {
          "Gene": "EGFR",
          "Chr": "chr7",
          "Start": "55227781",
          "End": "55228081",
          "MinCoverage": "184",
          "MaxCoverage": "4102",
          "TotCoverage": "128608",
          "MeanCoverage": "428.6933333333333"
        },
        {
          "Gene": "EGFR",
          "Chr": "chr7",
          "Start": "55229137",
          "End": "55229377",
          "MinCoverage": "264",
          "MaxCoverage": "4242",
          "TotCoverage": "242242",
          "MeanCoverage": "1009.3416666666667"
        },
        {
          "Gene": "EGFR",
          "Chr": "chr7",
          "Start": "55231350",
          "End": "55231590",
          "MinCoverage": "381",
          "MaxCoverage": "6890",
          "TotCoverage": "253305",
          "MeanCoverage": "1055.4375"
        },
        {
          "Gene": "EGFR",
          "Chr": "chr7",
          "Start": "55232863",
          "End": "55233656",
          "MinCoverage": "473",
          "MaxCoverage": "19360",
          "TotCoverage": "1455903",
          "MeanCoverage": "1835.9432534678435"
        },
        {
          "Gene": "EGFR",
          "Chr": "chr7",
          "Start": "55233768",
          "End": "55234028",
          "MinCoverage": "327",
          "MaxCoverage": "8046",
          "TotCoverage": "315950",
          "MeanCoverage": "1215.1923076923076"
        },
        {
          "Gene": "EGFR",
          "Chr": "chr7",
          "Start": "55237942",
          "End": "55239006",
          "MinCoverage": "253",
          "MaxCoverage": "13360",
          "TotCoverage": "1246928",
          "MeanCoverage": "1171.9248120300751"
        },
        {
          "Gene": "EGFR",
          "Chr": "chr7",
          "Start": "55240596",
          "End": "55240896",
          "MinCoverage": "99",
          "MaxCoverage": "2536",
          "TotCoverage": "149662",
          "MeanCoverage": "498.87333333333333"
        },
        {
          "Gene": "EGFR",
          "Chr": "chr7",
          "Start": "55241536",
          "End": "55241824",
          "MinCoverage": "478",
          "MaxCoverage": "10608",
          "TotCoverage": "715089",
          "MeanCoverage": "2482.9479166666665"
        },
        {
          "Gene": "EGFR",
          "Chr": "chr7",
          "Start": "55242309",
          "End": "55242625",
          "MinCoverage": "619",
          "MaxCoverage": "12815",
          "TotCoverage": "610319",
          "MeanCoverage": "1931.389240506329"
        },
        {
          "Gene": "EGFR",
          "Chr": "chr7",
          "Start": "55248933",
          "End": "55249245",
          "MinCoverage": "782",
          "MaxCoverage": "12834",
          "TotCoverage": "1221951",
          "MeanCoverage": "3916.5096153846152"
        },
        {
          "Gene": "EGFR",
          "Chr": "chr7",
          "Start": "55259329",
          "End": "55259641",
          "MinCoverage": "641",
          "MaxCoverage": "18137",
          "TotCoverage": "507941",
          "MeanCoverage": "1628.0160256410256"
        },
        {
          "Gene": "EGFR",
          "Chr": "chr7",
          "Start": "55260376",
          "End": "55260616",
          "MinCoverage": "118",
          "MaxCoverage": "4712",
          "TotCoverage": "163720",
          "MeanCoverage": "682.1666666666666"
        },
        {
          "Gene": "EGFR",
          "Chr": "chr7",
          "Start": "55266332",
          "End": "55266632",
          "MinCoverage": "255",
          "MaxCoverage": "5304",
          "TotCoverage": "143140",
          "MeanCoverage": "477.1333333333333"
        },
        {
          "Gene": "EGFR",
          "Chr": "chr7",
          "Start": "55267937",
          "End": "55268177",
          "MinCoverage": "462",
          "MaxCoverage": "7256",
          "TotCoverage": "157375",
          "MeanCoverage": "655.7291666666666"
        },
        {
          "Gene": "EGFR",
          "Chr": "chr7",
          "Start": "55268814",
          "End": "55269114",
          "MinCoverage": "262",
          "MaxCoverage": "6768",
          "TotCoverage": "267272",
          "MeanCoverage": "890.9066666666666"
        },
        {
          "Gene": "EGFR",
          "Chr": "chr7",
          "Start": "55269331",
          "End": "55269571",
          "MinCoverage": "514",
          "MaxCoverage": "8484",
          "TotCoverage": "189299",
          "MeanCoverage": "788.7458333333333"
        },
        {
          "Gene": "chr7:74608580-74608759",
          "Chr": "chr7",
          "Start": "74608579",
          "End": "74608759",
          "MinCoverage": "333",
          "MaxCoverage": "5552",
          "TotCoverage": "175542",
          "MeanCoverage": "975.2333333333333"
        },
        {
          "Gene": "PCLO",
          "Chr": "chr7",
          "Start": "82434924",
          "End": "82435224",
          "MinCoverage": "298",
          "MaxCoverage": "5256",
          "TotCoverage": "195731",
          "MeanCoverage": "652.4366666666666"
        },
        {
          "Gene": "PCLO",
          "Chr": "chr7",
          "Start": "82453491",
          "End": "82453791",
          "MinCoverage": "290",
          "MaxCoverage": "7271",
          "TotCoverage": "153160",
          "MeanCoverage": "510.53333333333336"
        },
        {
          "Gene": "PCLO",
          "Chr": "chr7",
          "Start": "82455820",
          "End": "82456060",
          "MinCoverage": "193",
          "MaxCoverage": "4044",
          "TotCoverage": "125521",
          "MeanCoverage": "523.0041666666667"
        },
        {
          "Gene": "PCLO",
          "Chr": "chr7",
          "Start": "82531853",
          "End": "82532162",
          "MinCoverage": "158",
          "MaxCoverage": "7353",
          "TotCoverage": "218616",
          "MeanCoverage": "707.495145631068"
        },
        {
          "Gene": "PCLO",
          "Chr": "chr7",
          "Start": "82595024",
          "End": "82595864",
          "MinCoverage": "306",
          "MaxCoverage": "9888",
          "TotCoverage": "862403",
          "MeanCoverage": "1026.6702380952381"
        },
        {
          "Gene": "PCLO",
          "Chr": "chr7",
          "Start": "82763366",
          "End": "82765040",
          "MinCoverage": "205",
          "MaxCoverage": "10570",
          "TotCoverage": "989079",
          "MeanCoverage": "590.847670250896"
        },
        {
          "Gene": "PCLO",
          "Chr": "chr7",
          "Start": "82783985",
          "End": "82785785",
          "MinCoverage": "72",
          "MaxCoverage": "8265",
          "TotCoverage": "1301108",
          "MeanCoverage": "722.8377777777778"
        },
        {
          "Gene": "CDK6",
          "Chr": "chr7",
          "Start": "92244406",
          "End": "92244646",
          "MinCoverage": "200",
          "MaxCoverage": "3426",
          "TotCoverage": "87975",
          "MeanCoverage": "366.5625"
        },
        {
          "Gene": "CDK6",
          "Chr": "chr7",
          "Start": "92247333",
          "End": "92247573",
          "MinCoverage": "261",
          "MaxCoverage": "4644",
          "TotCoverage": "119168",
          "MeanCoverage": "496.53333333333336"
        },
        {
          "Gene": "CDK6",
          "Chr": "chr7",
          "Start": "92252284",
          "End": "92252464",
          "MinCoverage": "102",
          "MaxCoverage": "5280",
          "TotCoverage": "59564",
          "MeanCoverage": "330.9111111111111"
        },
        {
          "Gene": "CDK6",
          "Chr": "chr7",
          "Start": "92300674",
          "End": "92300914",
          "MinCoverage": "186",
          "MaxCoverage": "6076",
          "TotCoverage": "107358",
          "MeanCoverage": "447.325"
        },
        {
          "Gene": "CDK6",
          "Chr": "chr7",
          "Start": "92354903",
          "End": "92355143",
          "MinCoverage": "56",
          "MaxCoverage": "3537",
          "TotCoverage": "63814",
          "MeanCoverage": "265.89166666666665"
        },
        {
          "Gene": "CDK6",
          "Chr": "chr7",
          "Start": "92403957",
          "End": "92404197",
          "MinCoverage": "295",
          "MaxCoverage": "8100",
          "TotCoverage": "162421",
          "MeanCoverage": "676.7541666666667"
        },
        {
          "Gene": "CDK6",
          "Chr": "chr7",
          "Start": "92462366",
          "End": "92462666",
          "MinCoverage": "594",
          "MaxCoverage": "9546",
          "TotCoverage": "681952",
          "MeanCoverage": "2273.173333333333"
        },
        {
          "Gene": "RINT1",
          "Chr": "chr7",
          "Start": "105175946",
          "End": "105176126",
          "MinCoverage": "100",
          "MaxCoverage": "1853",
          "TotCoverage": "23142",
          "MeanCoverage": "128.56666666666666"
        },
        {
          "Gene": "MET",
          "Chr": "chr7",
          "Start": "116339071",
          "End": "116340391",
          "MinCoverage": "211",
          "MaxCoverage": "16552",
          "TotCoverage": "1201273",
          "MeanCoverage": "910.055303030303"
        },
        {
          "Gene": "MET",
          "Chr": "chr7",
          "Start": "116371647",
          "End": "116372067",
          "MinCoverage": "366",
          "MaxCoverage": "5985",
          "TotCoverage": "255400",
          "MeanCoverage": "608.0952380952381"
        },
        {
          "Gene": "MET",
          "Chr": "chr7",
          "Start": "116379934",
          "End": "116380234",
          "MinCoverage": "238",
          "MaxCoverage": "6328",
          "TotCoverage": "151031",
          "MeanCoverage": "503.43666666666667"
        },
        {
          "Gene": "MET",
          "Chr": "chr7",
          "Start": "116380828",
          "End": "116381328",
          "MinCoverage": "154",
          "MaxCoverage": "8072",
          "TotCoverage": "355411",
          "MeanCoverage": "710.822"
        },
        {
          "Gene": "MET",
          "Chr": "chr7",
          "Start": "116395343",
          "End": "116395643",
          "MinCoverage": "40",
          "MaxCoverage": "5464",
          "TotCoverage": "150516",
          "MeanCoverage": "501.72"
        },
        {
          "Gene": "MET",
          "Chr": "chr7",
          "Start": "116397418",
          "End": "116397958",
          "MinCoverage": "340",
          "MaxCoverage": "11308",
          "TotCoverage": "415882",
          "MeanCoverage": "770.1518518518518"
        },
        {
          "Gene": "MET",
          "Chr": "chr7",
          "Start": "116398443",
          "End": "116398743",
          "MinCoverage": "260",
          "MaxCoverage": "10373",
          "TotCoverage": "185428",
          "MeanCoverage": "618.0933333333334"
        },
        {
          "Gene": "MET",
          "Chr": "chr7",
          "Start": "116409620",
          "End": "116410040",
          "MinCoverage": "259",
          "MaxCoverage": "10770",
          "TotCoverage": "210827",
          "MeanCoverage": "501.9690476190476"
        },
        {
          "Gene": "MET",
          "Chr": "chr7",
          "Start": "116411479",
          "End": "116411779",
          "MinCoverage": "366",
          "MaxCoverage": "3610",
          "TotCoverage": "182548",
          "MeanCoverage": "608.4933333333333"
        },
        {
          "Gene": "MET",
          "Chr": "chr7",
          "Start": "116411822",
          "End": "116412122",
          "MinCoverage": "463",
          "MaxCoverage": "9232",
          "TotCoverage": "238661",
          "MeanCoverage": "795.5366666666666"
        },
        {
          "Gene": "MET",
          "Chr": "chr7",
          "Start": "116414869",
          "End": "116415229",
          "MinCoverage": "410",
          "MaxCoverage": "4356",
          "TotCoverage": "215996",
          "MeanCoverage": "599.9888888888889"
        },
        {
          "Gene": "MET",
          "Chr": "chr7",
          "Start": "116417324",
          "End": "116417612",
          "MinCoverage": "289",
          "MaxCoverage": "21762",
          "TotCoverage": "368656",
          "MeanCoverage": "1280.0555555555557"
        },
        {
          "Gene": "MET",
          "Chr": "chr7",
          "Start": "116418770",
          "End": "116419070",
          "MinCoverage": "188",
          "MaxCoverage": "4023",
          "TotCoverage": "99090",
          "MeanCoverage": "330.3"
        },
        {
          "Gene": "MET",
          "Chr": "chr7",
          "Start": "116421976",
          "End": "116422216",
          "MinCoverage": "372",
          "MaxCoverage": "4466",
          "TotCoverage": "114137",
          "MeanCoverage": "475.5708333333333"
        },
        {
          "Gene": "MET",
          "Chr": "chr7",
          "Start": "116423290",
          "End": "116423590",
          "MinCoverage": "364",
          "MaxCoverage": "10738",
          "TotCoverage": "347298",
          "MeanCoverage": "1157.66"
        },
        {
          "Gene": "SMO",
          "Chr": "chr7",
          "Start": "128828571",
          "End": "128829582",
          "MinCoverage": "16",
          "MaxCoverage": "3258",
          "TotCoverage": "397378",
          "MeanCoverage": "393.0544015825915"
        },
        {
          "Gene": "SMO",
          "Chr": "chr7",
          "Start": "128843147",
          "End": "128843507",
          "MinCoverage": "377",
          "MaxCoverage": "8049",
          "TotCoverage": "647128",
          "MeanCoverage": "1797.5777777777778"
        },
        {
          "Gene": "SMO",
          "Chr": "chr7",
          "Start": "128844967",
          "End": "128845328",
          "MinCoverage": "799",
          "MaxCoverage": "13980",
          "TotCoverage": "1113638",
          "MeanCoverage": "3084.869806094183"
        },
        {
          "Gene": "SMO",
          "Chr": "chr7",
          "Start": "128845386",
          "End": "128845686",
          "MinCoverage": "548",
          "MaxCoverage": "6237",
          "TotCoverage": "447241",
          "MeanCoverage": "1490.8033333333333"
        },
        {
          "Gene": "SMO",
          "Chr": "chr7",
          "Start": "128845899",
          "End": "128846520",
          "MinCoverage": "545",
          "MaxCoverage": "15180",
          "TotCoverage": "1307990",
          "MeanCoverage": "2106.2640901771338"
        },
        {
          "Gene": "SMO",
          "Chr": "chr7",
          "Start": "128848525",
          "End": "128848765",
          "MinCoverage": "836",
          "MaxCoverage": "7864",
          "TotCoverage": "401474",
          "MeanCoverage": "1672.8083333333334"
        },
        {
          "Gene": "SMO",
          "Chr": "chr7",
          "Start": "128849063",
          "End": "128849303",
          "MinCoverage": "347",
          "MaxCoverage": "9405",
          "TotCoverage": "292008",
          "MeanCoverage": "1216.7"
        },
        {
          "Gene": "SMO",
          "Chr": "chr7",
          "Start": "128850064",
          "End": "128850467",
          "MinCoverage": "465",
          "MaxCoverage": "16865",
          "TotCoverage": "850528",
          "MeanCoverage": "2110.4913151364763"
        },
        {
          "Gene": "SMO",
          "Chr": "chr7",
          "Start": "128850729",
          "End": "128851029",
          "MinCoverage": "201",
          "MaxCoverage": "10864",
          "TotCoverage": "474403",
          "MeanCoverage": "1581.3433333333332"
        },
        {
          "Gene": "SMO",
          "Chr": "chr7",
          "Start": "128851450",
          "End": "128851714",
          "MinCoverage": "314",
          "MaxCoverage": "4792",
          "TotCoverage": "153708",
          "MeanCoverage": "582.2272727272727"
        },
        {
          "Gene": "BRAF",
          "Chr": "chr7",
          "Start": "140433714",
          "End": "140434691",
          "MinCoverage": "60",
          "MaxCoverage": "15048",
          "TotCoverage": "691668",
          "MeanCoverage": "707.9508700102355"
        },
        {
          "Gene": "BRAF",
          "Chr": "chr7",
          "Start": "140439558",
          "End": "140439798",
          "MinCoverage": "226",
          "MaxCoverage": "4808",
          "TotCoverage": "93500",
          "MeanCoverage": "389.5833333333333"
        },
        {
          "Gene": "BRAF",
          "Chr": "chr7",
          "Start": "140449032",
          "End": "140449272",
          "MinCoverage": "244",
          "MaxCoverage": "5250",
          "TotCoverage": "120180",
          "MeanCoverage": "500.75"
        },
        {
          "Gene": "BRAF",
          "Chr": "chr7",
          "Start": "140453013",
          "End": "140453305",
          "MinCoverage": "475",
          "MaxCoverage": "12078",
          "TotCoverage": "401777",
          "MeanCoverage": "1375.9486301369864"
        },
        {
          "Gene": "BRAF",
          "Chr": "chr7",
          "Start": "140453889",
          "End": "140454129",
          "MinCoverage": "251",
          "MaxCoverage": "7344",
          "TotCoverage": "229958",
          "MeanCoverage": "958.1583333333333"
        },
        {
          "Gene": "BRAF",
          "Chr": "chr7",
          "Start": "140476649",
          "End": "140476949",
          "MinCoverage": "345",
          "MaxCoverage": "9966",
          "TotCoverage": "223192",
          "MeanCoverage": "743.9733333333334"
        },
        {
          "Gene": "BRAF",
          "Chr": "chr7",
          "Start": "140477712",
          "End": "140477952",
          "MinCoverage": "166",
          "MaxCoverage": "2919",
          "TotCoverage": "76395",
          "MeanCoverage": "318.3125"
        },
        {
          "Gene": "BRAF",
          "Chr": "chr7",
          "Start": "140481292",
          "End": "140481604",
          "MinCoverage": "466",
          "MaxCoverage": "11510",
          "TotCoverage": "447595",
          "MeanCoverage": "1434.599358974359"
        },
        {
          "Gene": "BRAF",
          "Chr": "chr7",
          "Start": "140482768",
          "End": "140483008",
          "MinCoverage": "228",
          "MaxCoverage": "5090",
          "TotCoverage": "96855",
          "MeanCoverage": "403.5625"
        },
        {
          "Gene": "BRAF",
          "Chr": "chr7",
          "Start": "140487245",
          "End": "140487485",
          "MinCoverage": "540",
          "MaxCoverage": "6608",
          "TotCoverage": "279001",
          "MeanCoverage": "1162.5041666666666"
        },
        {
          "Gene": "BRAF",
          "Chr": "chr7",
          "Start": "140494037",
          "End": "140494337",
          "MinCoverage": "255",
          "MaxCoverage": "6216",
          "TotCoverage": "119870",
          "MeanCoverage": "399.56666666666666"
        },
        {
          "Gene": "BRAF",
          "Chr": "chr7",
          "Start": "140500101",
          "End": "140500341",
          "MinCoverage": "178",
          "MaxCoverage": "3664",
          "TotCoverage": "97889",
          "MeanCoverage": "407.87083333333334"
        },
        {
          "Gene": "BRAF",
          "Chr": "chr7",
          "Start": "140501135",
          "End": "140501435",
          "MinCoverage": "273",
          "MaxCoverage": "6432",
          "TotCoverage": "158574",
          "MeanCoverage": "528.58"
        },
        {
          "Gene": "BRAF",
          "Chr": "chr7",
          "Start": "140507690",
          "End": "140507930",
          "MinCoverage": "209",
          "MaxCoverage": "6307",
          "TotCoverage": "143481",
          "MeanCoverage": "597.8375"
        },
        {
          "Gene": "BRAF",
          "Chr": "chr7",
          "Start": "140508623",
          "End": "140508863",
          "MinCoverage": "366",
          "MaxCoverage": "8464",
          "TotCoverage": "186875",
          "MeanCoverage": "778.6458333333334"
        },
        {
          "Gene": "BRAF",
          "Chr": "chr7",
          "Start": "140534330",
          "End": "140534750",
          "MinCoverage": "213",
          "MaxCoverage": "6651",
          "TotCoverage": "229753",
          "MeanCoverage": "547.0309523809524"
        },
        {
          "Gene": "BRAF",
          "Chr": "chr7",
          "Start": "140624237",
          "End": "140624886",
          "MinCoverage": "5",
          "MaxCoverage": "1700",
          "TotCoverage": "139746",
          "MeanCoverage": "215.3251155624037"
        },
        {
          "Gene": "EZH2",
          "Chr": "chr7",
          "Start": "148504390",
          "End": "148504870",
          "MinCoverage": "155",
          "MaxCoverage": "7047",
          "TotCoverage": "301369",
          "MeanCoverage": "627.8520833333333"
        },
        {
          "Gene": "EZH2",
          "Chr": "chr7",
          "Start": "148506084",
          "End": "148506561",
          "MinCoverage": "247",
          "MaxCoverage": "6102",
          "TotCoverage": "301936",
          "MeanCoverage": "632.9895178197065"
        },
        {
          "Gene": "EZH2",
          "Chr": "chr7",
          "Start": "148507345",
          "End": "148507585",
          "MinCoverage": "371",
          "MaxCoverage": "7116",
          "TotCoverage": "222187",
          "MeanCoverage": "925.7791666666667"
        },
        {
          "Gene": "EZH2",
          "Chr": "chr7",
          "Start": "148508644",
          "End": "148508884",
          "MinCoverage": "339",
          "MaxCoverage": "7096",
          "TotCoverage": "169602",
          "MeanCoverage": "706.675"
        },
        {
          "Gene": "EZH2",
          "Chr": "chr7",
          "Start": "148510989",
          "End": "148511289",
          "MinCoverage": "270",
          "MaxCoverage": "9112",
          "TotCoverage": "235786",
          "MeanCoverage": "785.9533333333334"
        },
        {
          "Gene": "EZH2",
          "Chr": "chr7",
          "Start": "148511948",
          "End": "148512188",
          "MinCoverage": "96",
          "MaxCoverage": "5850",
          "TotCoverage": "102522",
          "MeanCoverage": "427.175"
        },
        {
          "Gene": "EZH2",
          "Chr": "chr7",
          "Start": "148512497",
          "End": "148512737",
          "MinCoverage": "174",
          "MaxCoverage": "5844",
          "TotCoverage": "105721",
          "MeanCoverage": "440.50416666666666"
        },
        {
          "Gene": "EZH2",
          "Chr": "chr7",
          "Start": "148513712",
          "End": "148515272",
          "MinCoverage": "167",
          "MaxCoverage": "9347",
          "TotCoverage": "1015621",
          "MeanCoverage": "651.0391025641026"
        },
        {
          "Gene": "EZH2",
          "Chr": "chr7",
          "Start": "148516613",
          "End": "148516853",
          "MinCoverage": "153",
          "MaxCoverage": "7821",
          "TotCoverage": "139205",
          "MeanCoverage": "580.0208333333334"
        },
        {
          "Gene": "EZH2",
          "Chr": "chr7",
          "Start": "148523484",
          "End": "148523784",
          "MinCoverage": "141",
          "MaxCoverage": "6736",
          "TotCoverage": "163007",
          "MeanCoverage": "543.3566666666667"
        },
        {
          "Gene": "EZH2",
          "Chr": "chr7",
          "Start": "148524186",
          "End": "148524426",
          "MinCoverage": "200",
          "MaxCoverage": "4095",
          "TotCoverage": "90960",
          "MeanCoverage": "379.0"
        },
        {
          "Gene": "EZH2",
          "Chr": "chr7",
          "Start": "148525727",
          "End": "148526076",
          "MinCoverage": "241",
          "MaxCoverage": "8242",
          "TotCoverage": "298866",
          "MeanCoverage": "856.3495702005731"
        },
        {
          "Gene": "EZH2",
          "Chr": "chr7",
          "Start": "148526759",
          "End": "148526999",
          "MinCoverage": "268",
          "MaxCoverage": "9054",
          "TotCoverage": "166580",
          "MeanCoverage": "694.0833333333334"
        },
        {
          "Gene": "EZH2",
          "Chr": "chr7",
          "Start": "148529663",
          "End": "148529903",
          "MinCoverage": "83",
          "MaxCoverage": "3829",
          "TotCoverage": "108105",
          "MeanCoverage": "450.4375"
        },
        {
          "Gene": "EZH2",
          "Chr": "chr7",
          "Start": "148543505",
          "End": "148543745",
          "MinCoverage": "243",
          "MaxCoverage": "7995",
          "TotCoverage": "265320",
          "MeanCoverage": "1105.5"
        },
        {
          "Gene": "EZH2",
          "Chr": "chr7",
          "Start": "148544215",
          "End": "148544455",
          "MinCoverage": "132",
          "MaxCoverage": "4056",
          "TotCoverage": "81812",
          "MeanCoverage": "340.8833333333333"
        },
        {
          "Gene": "KMT2C",
          "Chr": "chr7",
          "Start": "151836187",
          "End": "151836427",
          "MinCoverage": "633",
          "MaxCoverage": "12080",
          "TotCoverage": "533095",
          "MeanCoverage": "2221.2291666666665"
        },
        {
          "Gene": "KMT2C",
          "Chr": "chr7",
          "Start": "151841731",
          "End": "151842031",
          "MinCoverage": "417",
          "MaxCoverage": "12432",
          "TotCoverage": "299197",
          "MeanCoverage": "997.3233333333334"
        },
        {
          "Gene": "KMT2C",
          "Chr": "chr7",
          "Start": "151842158",
          "End": "151842458",
          "MinCoverage": "383",
          "MaxCoverage": "9888",
          "TotCoverage": "271439",
          "MeanCoverage": "904.7966666666666"
        },
        {
          "Gene": "KMT2C",
          "Chr": "chr7",
          "Start": "151843631",
          "End": "151843871",
          "MinCoverage": "290",
          "MaxCoverage": "6440",
          "TotCoverage": "171322",
          "MeanCoverage": "713.8416666666667"
        },
        {
          "Gene": "KMT2C",
          "Chr": "chr7",
          "Start": "151845047",
          "End": "151846307",
          "MinCoverage": "408",
          "MaxCoverage": "21229",
          "TotCoverage": "1246933",
          "MeanCoverage": "989.6293650793651"
        },
        {
          "Gene": "KMT2C",
          "Chr": "chr7",
          "Start": "151847920",
          "End": "151848160",
          "MinCoverage": "312",
          "MaxCoverage": "6130",
          "TotCoverage": "135337",
          "MeanCoverage": "563.9041666666667"
        },
        {
          "Gene": "KMT2C",
          "Chr": "chr7",
          "Start": "151848476",
          "End": "151848716",
          "MinCoverage": "318",
          "MaxCoverage": "11451",
          "TotCoverage": "183620",
          "MeanCoverage": "765.0833333333334"
        },
        {
          "Gene": "KMT2C",
          "Chr": "chr7",
          "Start": "151849734",
          "End": "151850094",
          "MinCoverage": "339",
          "MaxCoverage": "11880",
          "TotCoverage": "375712",
          "MeanCoverage": "1043.6444444444444"
        },
        {
          "Gene": "KMT2C",
          "Chr": "chr7",
          "Start": "151851042",
          "End": "151851282",
          "MinCoverage": "401",
          "MaxCoverage": "7638",
          "TotCoverage": "217238",
          "MeanCoverage": "905.1583333333333"
        },
        {
          "Gene": "KMT2C",
          "Chr": "chr7",
          "Start": "151851290",
          "End": "151851590",
          "MinCoverage": "201",
          "MaxCoverage": "8736",
          "TotCoverage": "303036",
          "MeanCoverage": "1010.12"
        },
        {
          "Gene": "KMT2C",
          "Chr": "chr7",
          "Start": "151852918",
          "End": "151853510",
          "MinCoverage": "116",
          "MaxCoverage": "16072",
          "TotCoverage": "319162",
          "MeanCoverage": "539.125"
        },
        {
          "Gene": "KMT2C",
          "Chr": "chr7",
          "Start": "151854777",
          "End": "151855077",
          "MinCoverage": "588",
          "MaxCoverage": "11050",
          "TotCoverage": "333328",
          "MeanCoverage": "1111.0933333333332"
        },
        {
          "Gene": "KMT2C",
          "Chr": "chr7",
          "Start": "151855880",
          "End": "151856240",
          "MinCoverage": "373",
          "MaxCoverage": "9630",
          "TotCoverage": "307012",
          "MeanCoverage": "852.8111111111111"
        },
        {
          "Gene": "KMT2C",
          "Chr": "chr7",
          "Start": "151859119",
          "End": "151860989",
          "MinCoverage": "467",
          "MaxCoverage": "14170",
          "TotCoverage": "1894979",
          "MeanCoverage": "1013.3577540106952"
        },
        {
          "Gene": "KMT2C",
          "Chr": "chr7",
          "Start": "151864166",
          "End": "151864526",
          "MinCoverage": "321",
          "MaxCoverage": "11944",
          "TotCoverage": "447414",
          "MeanCoverage": "1242.8166666666666"
        },
        {
          "Gene": "KMT2C",
          "Chr": "chr7",
          "Start": "151866179",
          "End": "151866419",
          "MinCoverage": "401",
          "MaxCoverage": "10730",
          "TotCoverage": "168956",
          "MeanCoverage": "703.9833333333333"
        },
        {
          "Gene": "KMT2C",
          "Chr": "chr7",
          "Start": "151871151",
          "End": "151871391",
          "MinCoverage": "236",
          "MaxCoverage": "5894",
          "TotCoverage": "126469",
          "MeanCoverage": "526.9541666666667"
        },
        {
          "Gene": "KMT2C",
          "Chr": "chr7",
          "Start": "151873199",
          "End": "151875288",
          "MinCoverage": "225",
          "MaxCoverage": "13688",
          "TotCoverage": "2013886",
          "MeanCoverage": "964.0430828147439"
        },
        {
          "Gene": "KMT2C",
          "Chr": "chr7",
          "Start": "151876854",
          "End": "151877274",
          "MinCoverage": "262",
          "MaxCoverage": "11340",
          "TotCoverage": "295669",
          "MeanCoverage": "703.9738095238096"
        },
        {
          "Gene": "KMT2C",
          "Chr": "chr7",
          "Start": "151877734",
          "End": "151879770",
          "MinCoverage": "213",
          "MaxCoverage": "11759",
          "TotCoverage": "1487220",
          "MeanCoverage": "730.4616895874263"
        },
        {
          "Gene": "KMT2C",
          "Chr": "chr7",
          "Start": "151879999",
          "End": "151880299",
          "MinCoverage": "329",
          "MaxCoverage": "11286",
          "TotCoverage": "302822",
          "MeanCoverage": "1009.4066666666666"
        },
        {
          "Gene": "KMT2C",
          "Chr": "chr7",
          "Start": "151882559",
          "End": "151882799",
          "MinCoverage": "607",
          "MaxCoverage": "10010",
          "TotCoverage": "274579",
          "MeanCoverage": "1144.0791666666667"
        },
        {
          "Gene": "KMT2C",
          "Chr": "chr7",
          "Start": "151884273",
          "End": "151884633",
          "MinCoverage": "299",
          "MaxCoverage": "8175",
          "TotCoverage": "376303",
          "MeanCoverage": "1045.286111111111"
        },
        {
          "Gene": "KMT2C",
          "Chr": "chr7",
          "Start": "151884745",
          "End": "151884985",
          "MinCoverage": "361",
          "MaxCoverage": "8200",
          "TotCoverage": "261221",
          "MeanCoverage": "1088.4208333333333"
        },
        {
          "Gene": "KMT2C",
          "Chr": "chr7",
          "Start": "151891039",
          "End": "151891399",
          "MinCoverage": "134",
          "MaxCoverage": "14588",
          "TotCoverage": "233833",
          "MeanCoverage": "649.5361111111112"
        },
        {
          "Gene": "KMT2C",
          "Chr": "chr7",
          "Start": "151891468",
          "End": "151891708",
          "MinCoverage": "365",
          "MaxCoverage": "11759",
          "TotCoverage": "204935",
          "MeanCoverage": "853.8958333333334"
        },
        {
          "Gene": "KMT2C",
          "Chr": "chr7",
          "Start": "151892923",
          "End": "151893163",
          "MinCoverage": "323",
          "MaxCoverage": "8155",
          "TotCoverage": "256551",
          "MeanCoverage": "1068.9625"
        },
        {
          "Gene": "KMT2C",
          "Chr": "chr7",
          "Start": "151896303",
          "End": "151896603",
          "MinCoverage": "263",
          "MaxCoverage": "6714",
          "TotCoverage": "181811",
          "MeanCoverage": "606.0366666666666"
        },
        {
          "Gene": "KMT2C",
          "Chr": "chr7",
          "Start": "151899963",
          "End": "151900203",
          "MinCoverage": "372",
          "MaxCoverage": "12681",
          "TotCoverage": "227710",
          "MeanCoverage": "948.7916666666666"
        },
        {
          "Gene": "KMT2C",
          "Chr": "chr7",
          "Start": "151901992",
          "End": "151902398",
          "MinCoverage": "324",
          "MaxCoverage": "9317",
          "TotCoverage": "301112",
          "MeanCoverage": "741.6551724137931"
        },
        {
          "Gene": "KMT2C",
          "Chr": "chr7",
          "Start": "151904328",
          "End": "151904568",
          "MinCoverage": "378",
          "MaxCoverage": "8848",
          "TotCoverage": "219790",
          "MeanCoverage": "915.7916666666666"
        },
        {
          "Gene": "KMT2C",
          "Chr": "chr7",
          "Start": "151917533",
          "End": "151917893",
          "MinCoverage": "368",
          "MaxCoverage": "10486",
          "TotCoverage": "348248",
          "MeanCoverage": "967.3555555555556"
        },
        {
          "Gene": "KMT2C",
          "Chr": "chr7",
          "Start": "151918998",
          "End": "151919238",
          "MinCoverage": "158",
          "MaxCoverage": "6880",
          "TotCoverage": "113495",
          "MeanCoverage": "472.8958333333333"
        },
        {
          "Gene": "KMT2C",
          "Chr": "chr7",
          "Start": "151919592",
          "End": "151919832",
          "MinCoverage": "312",
          "MaxCoverage": "13559",
          "TotCoverage": "251425",
          "MeanCoverage": "1047.6041666666667"
        },
        {
          "Gene": "KMT2C",
          "Chr": "chr7",
          "Start": "151921031",
          "End": "151921331",
          "MinCoverage": "409",
          "MaxCoverage": "6840",
          "TotCoverage": "368703",
          "MeanCoverage": "1229.01"
        },
        {
          "Gene": "KMT2C",
          "Chr": "chr7",
          "Start": "151921460",
          "End": "151921760",
          "MinCoverage": "266",
          "MaxCoverage": "7672",
          "TotCoverage": "272180",
          "MeanCoverage": "907.2666666666667"
        },
        {
          "Gene": "KMT2C",
          "Chr": "chr7",
          "Start": "151926939",
          "End": "151927179",
          "MinCoverage": "762",
          "MaxCoverage": "13138",
          "TotCoverage": "996805",
          "MeanCoverage": "4153.354166666667"
        },
        {
          "Gene": "KMT2C",
          "Chr": "chr7",
          "Start": "151932839",
          "End": "151933079",
          "MinCoverage": "618",
          "MaxCoverage": "21930",
          "TotCoverage": "786615",
          "MeanCoverage": "3277.5625"
        },
        {
          "Gene": "KMT2C",
          "Chr": "chr7",
          "Start": "151944925",
          "End": "151945765",
          "MinCoverage": "448",
          "MaxCoverage": "11874",
          "TotCoverage": "1677525",
          "MeanCoverage": "1997.0535714285713"
        },
        {
          "Gene": "KMT2C",
          "Chr": "chr7",
          "Start": "151946879",
          "End": "151947119",
          "MinCoverage": "400",
          "MaxCoverage": "7758",
          "TotCoverage": "237153",
          "MeanCoverage": "988.1375"
        },
        {
          "Gene": "KMT2C",
          "Chr": "chr7",
          "Start": "151947874",
          "End": "151948114",
          "MinCoverage": "391",
          "MaxCoverage": "9780",
          "TotCoverage": "269114",
          "MeanCoverage": "1121.3083333333334"
        },
        {
          "Gene": "KMT2C",
          "Chr": "chr7",
          "Start": "151948949",
          "End": "151949249",
          "MinCoverage": "149",
          "MaxCoverage": "8200",
          "TotCoverage": "173353",
          "MeanCoverage": "577.8433333333334"
        },
        {
          "Gene": "KMT2C",
          "Chr": "chr7",
          "Start": "151949565",
          "End": "151949865",
          "MinCoverage": "343",
          "MaxCoverage": "7263",
          "TotCoverage": "210392",
          "MeanCoverage": "701.3066666666666"
        },
        {
          "Gene": "KMT2C",
          "Chr": "chr7",
          "Start": "151959971",
          "End": "151960313",
          "MinCoverage": "242",
          "MaxCoverage": "11288",
          "TotCoverage": "361805",
          "MeanCoverage": "1057.9093567251462"
        },
        {
          "Gene": "KMT2C",
          "Chr": "chr7",
          "Start": "151962058",
          "End": "151962358",
          "MinCoverage": "195",
          "MaxCoverage": "14222",
          "TotCoverage": "1009088",
          "MeanCoverage": "3363.6266666666666"
        },
        {
          "Gene": "KMT2C",
          "Chr": "chr7",
          "Start": "151970720",
          "End": "151971020",
          "MinCoverage": "1440",
          "MaxCoverage": "9546",
          "TotCoverage": "1232671",
          "MeanCoverage": "4108.903333333334"
        },
        {
          "Gene": "KMT2C",
          "Chr": "chr7",
          "Start": "152006985",
          "End": "152007225",
          "MinCoverage": "315",
          "MaxCoverage": "8100",
          "TotCoverage": "181542",
          "MeanCoverage": "756.425"
        },
        {
          "Gene": "KMT2C",
          "Chr": "chr7",
          "Start": "152008806",
          "End": "152009106",
          "MinCoverage": "208",
          "MaxCoverage": "10688",
          "TotCoverage": "221214",
          "MeanCoverage": "737.38"
        },
        {
          "Gene": "KMT2C",
          "Chr": "chr7",
          "Start": "152012142",
          "End": "152012502",
          "MinCoverage": "262",
          "MaxCoverage": "8960",
          "TotCoverage": "378700",
          "MeanCoverage": "1051.9444444444443"
        },
        {
          "Gene": "KMT2C",
          "Chr": "chr7",
          "Start": "152027634",
          "End": "152027874",
          "MinCoverage": "510",
          "MaxCoverage": "20734",
          "TotCoverage": "248496",
          "MeanCoverage": "1035.4"
        },
        {
          "Gene": "KMT2C",
          "Chr": "chr7",
          "Start": "152055595",
          "End": "152055835",
          "MinCoverage": "238",
          "MaxCoverage": "10744",
          "TotCoverage": "237462",
          "MeanCoverage": "989.425"
        },
        {
          "Gene": "KMT2C",
          "Chr": "chr7",
          "Start": "152132641",
          "End": "152133221",
          "MinCoverage": "0",
          "MaxCoverage": "5728",
          "TotCoverage": "500607",
          "MeanCoverage": "863.1155172413793"
        },
        {
          "Gene": "DEFB105B",
          "Chr": "chr8",
          "Start": "7346780",
          "End": "7346960",
          "MinCoverage": "273",
          "MaxCoverage": "4095",
          "TotCoverage": "110862",
          "MeanCoverage": "615.9"
        },
        {
          "Gene": "DEFB105A",
          "Chr": "chr8",
          "Start": "7679641",
          "End": "7679821",
          "MinCoverage": "261",
          "MaxCoverage": "3890",
          "TotCoverage": "111498",
          "MeanCoverage": "619.4333333333333"
        },
        {
          "Gene": "PCM1",
          "Chr": "chr8",
          "Start": "17793036",
          "End": "17793276",
          "MinCoverage": "136",
          "MaxCoverage": "8388",
          "TotCoverage": "168323",
          "MeanCoverage": "701.3458333333333"
        },
        {
          "Gene": "PCM1",
          "Chr": "chr8",
          "Start": "17794585",
          "End": "17794945",
          "MinCoverage": "114",
          "MaxCoverage": "5904",
          "TotCoverage": "171933",
          "MeanCoverage": "477.59166666666664"
        },
        {
          "Gene": "PCM1",
          "Chr": "chr8",
          "Start": "17796173",
          "End": "17796593",
          "MinCoverage": "181",
          "MaxCoverage": "6018",
          "TotCoverage": "302925",
          "MeanCoverage": "721.25"
        },
        {
          "Gene": "PCM1",
          "Chr": "chr8",
          "Start": "17797134",
          "End": "17797434",
          "MinCoverage": "148",
          "MaxCoverage": "5412",
          "TotCoverage": "136806",
          "MeanCoverage": "456.02"
        },
        {
          "Gene": "PCM1",
          "Chr": "chr8",
          "Start": "17804633",
          "End": "17804933",
          "MinCoverage": "254",
          "MaxCoverage": "4554",
          "TotCoverage": "135155",
          "MeanCoverage": "450.51666666666665"
        },
        {
          "Gene": "PCM1",
          "Chr": "chr8",
          "Start": "17812914",
          "End": "17813454",
          "MinCoverage": "194",
          "MaxCoverage": "7139",
          "TotCoverage": "307258",
          "MeanCoverage": "568.9962962962964"
        },
        {
          "Gene": "PCM1",
          "Chr": "chr8",
          "Start": "17814049",
          "End": "17814349",
          "MinCoverage": "216",
          "MaxCoverage": "5432",
          "TotCoverage": "178904",
          "MeanCoverage": "596.3466666666667"
        },
        {
          "Gene": "PCM1",
          "Chr": "chr8",
          "Start": "17814701",
          "End": "17815359",
          "MinCoverage": "213",
          "MaxCoverage": "9198",
          "TotCoverage": "695623",
          "MeanCoverage": "1057.177811550152"
        },
        {
          "Gene": "PCM1",
          "Chr": "chr8",
          "Start": "17817464",
          "End": "17817878",
          "MinCoverage": "259",
          "MaxCoverage": "5392",
          "TotCoverage": "200690",
          "MeanCoverage": "484.75845410628017"
        },
        {
          "Gene": "PCM1",
          "Chr": "chr8",
          "Start": "17819462",
          "End": "17819762",
          "MinCoverage": "135",
          "MaxCoverage": "8932",
          "TotCoverage": "190666",
          "MeanCoverage": "635.5533333333333"
        },
        {
          "Gene": "PCM1",
          "Chr": "chr8",
          "Start": "17820554",
          "End": "17820854",
          "MinCoverage": "203",
          "MaxCoverage": "8708",
          "TotCoverage": "120934",
          "MeanCoverage": "403.11333333333334"
        },
        {
          "Gene": "PCM1",
          "Chr": "chr8",
          "Start": "17822023",
          "End": "17822415",
          "MinCoverage": "243",
          "MaxCoverage": "5680",
          "TotCoverage": "249273",
          "MeanCoverage": "635.9005102040817"
        },
        {
          "Gene": "PCM1",
          "Chr": "chr8",
          "Start": "17823437",
          "End": "17823797",
          "MinCoverage": "235",
          "MaxCoverage": "10450",
          "TotCoverage": "270016",
          "MeanCoverage": "750.0444444444445"
        },
        {
          "Gene": "PCM1",
          "Chr": "chr8",
          "Start": "17824433",
          "End": "17824733",
          "MinCoverage": "233",
          "MaxCoverage": "6677",
          "TotCoverage": "133770",
          "MeanCoverage": "445.9"
        },
        {
          "Gene": "PCM1",
          "Chr": "chr8",
          "Start": "17827021",
          "End": "17827321",
          "MinCoverage": "254",
          "MaxCoverage": "8019",
          "TotCoverage": "218115",
          "MeanCoverage": "727.05"
        },
        {
          "Gene": "PCM1",
          "Chr": "chr8",
          "Start": "17829776",
          "End": "17830256",
          "MinCoverage": "177",
          "MaxCoverage": "7328",
          "TotCoverage": "280228",
          "MeanCoverage": "583.8083333333333"
        },
        {
          "Gene": "PCM1",
          "Chr": "chr8",
          "Start": "17838031",
          "End": "17838331",
          "MinCoverage": "218",
          "MaxCoverage": "6930",
          "TotCoverage": "135856",
          "MeanCoverage": "452.85333333333335"
        },
        {
          "Gene": "PCM1",
          "Chr": "chr8",
          "Start": "17843411",
          "End": "17843651",
          "MinCoverage": "195",
          "MaxCoverage": "9027",
          "TotCoverage": "141119",
          "MeanCoverage": "587.9958333333333"
        },
        {
          "Gene": "PCM1",
          "Chr": "chr8",
          "Start": "17848988",
          "End": "17849228",
          "MinCoverage": "219",
          "MaxCoverage": "5700",
          "TotCoverage": "101322",
          "MeanCoverage": "422.175"
        },
        {
          "Gene": "PCM1",
          "Chr": "chr8",
          "Start": "17850939",
          "End": "17851179",
          "MinCoverage": "193",
          "MaxCoverage": "8430",
          "TotCoverage": "163396",
          "MeanCoverage": "680.8166666666667"
        },
        {
          "Gene": "PCM1",
          "Chr": "chr8",
          "Start": "17863718",
          "End": "17863958",
          "MinCoverage": "264",
          "MaxCoverage": "4452",
          "TotCoverage": "144780",
          "MeanCoverage": "603.25"
        },
        {
          "Gene": "PCM1",
          "Chr": "chr8",
          "Start": "17867004",
          "End": "17867304",
          "MinCoverage": "213",
          "MaxCoverage": "4770",
          "TotCoverage": "162027",
          "MeanCoverage": "540.09"
        },
        {
          "Gene": "PCM1",
          "Chr": "chr8",
          "Start": "17869108",
          "End": "17869408",
          "MinCoverage": "536",
          "MaxCoverage": "7624",
          "TotCoverage": "253534",
          "MeanCoverage": "845.1133333333333"
        },
        {
          "Gene": "PCM1",
          "Chr": "chr8",
          "Start": "17872040",
          "End": "17872400",
          "MinCoverage": "285",
          "MaxCoverage": "7232",
          "TotCoverage": "330857",
          "MeanCoverage": "919.0472222222222"
        },
        {
          "Gene": "PTK2B",
          "Chr": "chr8",
          "Start": "27255004",
          "End": "27255364",
          "MinCoverage": "308",
          "MaxCoverage": "7520",
          "TotCoverage": "411474",
          "MeanCoverage": "1142.9833333333333"
        },
        {
          "Gene": "PTK2B",
          "Chr": "chr8",
          "Start": "27277350",
          "End": "27277650",
          "MinCoverage": "53",
          "MaxCoverage": "4284",
          "TotCoverage": "168704",
          "MeanCoverage": "562.3466666666667"
        },
        {
          "Gene": "PTK2B",
          "Chr": "chr8",
          "Start": "27279740",
          "End": "27279980",
          "MinCoverage": "713",
          "MaxCoverage": "10719",
          "TotCoverage": "488135",
          "MeanCoverage": "2033.8958333333333"
        },
        {
          "Gene": "PTK2B",
          "Chr": "chr8",
          "Start": "27287520",
          "End": "27287760",
          "MinCoverage": "472",
          "MaxCoverage": "6256",
          "TotCoverage": "260372",
          "MeanCoverage": "1084.8833333333334"
        },
        {
          "Gene": "PTK2B",
          "Chr": "chr8",
          "Start": "27287787",
          "End": "27288027",
          "MinCoverage": "412",
          "MaxCoverage": "5155",
          "TotCoverage": "182431",
          "MeanCoverage": "760.1291666666667"
        },
        {
          "Gene": "PTK2B",
          "Chr": "chr8",
          "Start": "27288330",
          "End": "27289050",
          "MinCoverage": "553",
          "MaxCoverage": "7620",
          "TotCoverage": "831153",
          "MeanCoverage": "1154.3791666666666"
        },
        {
          "Gene": "PTK2B",
          "Chr": "chr8",
          "Start": "27290890",
          "End": "27291130",
          "MinCoverage": "252",
          "MaxCoverage": "5274",
          "TotCoverage": "185660",
          "MeanCoverage": "773.5833333333334"
        },
        {
          "Gene": "PTK2B",
          "Chr": "chr8",
          "Start": "27291932",
          "End": "27292172",
          "MinCoverage": "151",
          "MaxCoverage": "8544",
          "TotCoverage": "248081",
          "MeanCoverage": "1033.6708333333333"
        },
        {
          "Gene": "PTK2B",
          "Chr": "chr8",
          "Start": "27293164",
          "End": "27293404",
          "MinCoverage": "665",
          "MaxCoverage": "7971",
          "TotCoverage": "471050",
          "MeanCoverage": "1962.7083333333333"
        },
        {
          "Gene": "PTK2B",
          "Chr": "chr8",
          "Start": "27293696",
          "End": "27293936",
          "MinCoverage": "115",
          "MaxCoverage": "4490",
          "TotCoverage": "77844",
          "MeanCoverage": "324.35"
        },
        {
          "Gene": "PTK2B",
          "Chr": "chr8",
          "Start": "27294560",
          "End": "27294800",
          "MinCoverage": "242",
          "MaxCoverage": "3888",
          "TotCoverage": "127478",
          "MeanCoverage": "531.1583333333333"
        },
        {
          "Gene": "PTK2B",
          "Chr": "chr8",
          "Start": "27294842",
          "End": "27295082",
          "MinCoverage": "337",
          "MaxCoverage": "7070",
          "TotCoverage": "219694",
          "MeanCoverage": "915.3916666666667"
        },
        {
          "Gene": "PTK2B",
          "Chr": "chr8",
          "Start": "27295219",
          "End": "27295459",
          "MinCoverage": "385",
          "MaxCoverage": "6072",
          "TotCoverage": "264247",
          "MeanCoverage": "1101.0291666666667"
        },
        {
          "Gene": "PTK2B",
          "Chr": "chr8",
          "Start": "27296477",
          "End": "27296717",
          "MinCoverage": "185",
          "MaxCoverage": "4158",
          "TotCoverage": "112224",
          "MeanCoverage": "467.6"
        },
        {
          "Gene": "PTK2B",
          "Chr": "chr8",
          "Start": "27296750",
          "End": "27296990",
          "MinCoverage": "268",
          "MaxCoverage": "9312",
          "TotCoverage": "187510",
          "MeanCoverage": "781.2916666666666"
        },
        {
          "Gene": "PTK2B",
          "Chr": "chr8",
          "Start": "27297675",
          "End": "27298035",
          "MinCoverage": "388",
          "MaxCoverage": "7464",
          "TotCoverage": "540706",
          "MeanCoverage": "1501.9611111111112"
        },
        {
          "Gene": "PTK2B",
          "Chr": "chr8",
          "Start": "27300325",
          "End": "27300565",
          "MinCoverage": "194",
          "MaxCoverage": "4510",
          "TotCoverage": "156702",
          "MeanCoverage": "652.925"
        },
        {
          "Gene": "PTK2B",
          "Chr": "chr8",
          "Start": "27301635",
          "End": "27301875",
          "MinCoverage": "262",
          "MaxCoverage": "5568",
          "TotCoverage": "108814",
          "MeanCoverage": "453.39166666666665"
        },
        {
          "Gene": "PTK2B",
          "Chr": "chr8",
          "Start": "27303253",
          "End": "27303493",
          "MinCoverage": "537",
          "MaxCoverage": "5836",
          "TotCoverage": "251049",
          "MeanCoverage": "1046.0375"
        },
        {
          "Gene": "PTK2B",
          "Chr": "chr8",
          "Start": "27308188",
          "End": "27308697",
          "MinCoverage": "386",
          "MaxCoverage": "7668",
          "TotCoverage": "518753",
          "MeanCoverage": "1019.1611001964636"
        },
        {
          "Gene": "PTK2B",
          "Chr": "chr8",
          "Start": "27308948",
          "End": "27309818",
          "MinCoverage": "269",
          "MaxCoverage": "8515",
          "TotCoverage": "851732",
          "MeanCoverage": "979.0022988505747"
        },
        {
          "Gene": "PTK2B",
          "Chr": "chr8",
          "Start": "27309880",
          "End": "27310262",
          "MinCoverage": "276",
          "MaxCoverage": "5592",
          "TotCoverage": "456393",
          "MeanCoverage": "1194.7460732984293"
        },
        {
          "Gene": "PTK2B",
          "Chr": "chr8",
          "Start": "27310533",
          "End": "27310773",
          "MinCoverage": "90",
          "MaxCoverage": "2563",
          "TotCoverage": "43275",
          "MeanCoverage": "180.3125"
        },
        {
          "Gene": "PTK2B",
          "Chr": "chr8",
          "Start": "27311619",
          "End": "27311859",
          "MinCoverage": "287",
          "MaxCoverage": "5948",
          "TotCoverage": "238911",
          "MeanCoverage": "995.4625"
        },
        {
          "Gene": "PTK2B",
          "Chr": "chr8",
          "Start": "27311967",
          "End": "27312207",
          "MinCoverage": "286",
          "MaxCoverage": "2780",
          "TotCoverage": "150483",
          "MeanCoverage": "627.0125"
        },
        {
          "Gene": "PTK2B",
          "Chr": "chr8",
          "Start": "27315758",
          "End": "27317050",
          "MinCoverage": "389",
          "MaxCoverage": "17334",
          "TotCoverage": "1993615",
          "MeanCoverage": "1543.0456656346748"
        },
        {
          "Gene": "WRN",
          "Chr": "chr8",
          "Start": "30915921",
          "End": "30916101",
          "MinCoverage": "185",
          "MaxCoverage": "4264",
          "TotCoverage": "71071",
          "MeanCoverage": "394.8388888888889"
        },
        {
          "Gene": "WRN",
          "Chr": "chr8",
          "Start": "30916604",
          "End": "30916844",
          "MinCoverage": "379",
          "MaxCoverage": "8361",
          "TotCoverage": "215123",
          "MeanCoverage": "896.3458333333333"
        },
        {
          "Gene": "WRN",
          "Chr": "chr8",
          "Start": "30921775",
          "End": "30922015",
          "MinCoverage": "248",
          "MaxCoverage": "5957",
          "TotCoverage": "163598",
          "MeanCoverage": "681.6583333333333"
        },
        {
          "Gene": "WRN",
          "Chr": "chr8",
          "Start": "30922384",
          "End": "30922624",
          "MinCoverage": "197",
          "MaxCoverage": "5740",
          "TotCoverage": "116004",
          "MeanCoverage": "483.35"
        },
        {
          "Gene": "WRN",
          "Chr": "chr8",
          "Start": "30924503",
          "End": "30924743",
          "MinCoverage": "149",
          "MaxCoverage": "6426",
          "TotCoverage": "69419",
          "MeanCoverage": "289.24583333333334"
        },
        {
          "Gene": "WRN",
          "Chr": "chr8",
          "Start": "30925718",
          "End": "30925898",
          "MinCoverage": "124",
          "MaxCoverage": "7650",
          "TotCoverage": "121390",
          "MeanCoverage": "674.3888888888889"
        },
        {
          "Gene": "WRN",
          "Chr": "chr8",
          "Start": "30933625",
          "End": "30933865",
          "MinCoverage": "21",
          "MaxCoverage": "4180",
          "TotCoverage": "81492",
          "MeanCoverage": "339.55"
        },
        {
          "Gene": "WRN",
          "Chr": "chr8",
          "Start": "30938357",
          "End": "30938837",
          "MinCoverage": "127",
          "MaxCoverage": "7120",
          "TotCoverage": "298924",
          "MeanCoverage": "622.7583333333333"
        },
        {
          "Gene": "WRN",
          "Chr": "chr8",
          "Start": "30941164",
          "End": "30941344",
          "MinCoverage": "167",
          "MaxCoverage": "6558",
          "TotCoverage": "139571",
          "MeanCoverage": "775.3944444444444"
        },
        {
          "Gene": "WRN",
          "Chr": "chr8",
          "Start": "30942631",
          "End": "30942811",
          "MinCoverage": "396",
          "MaxCoverage": "9432",
          "TotCoverage": "188105",
          "MeanCoverage": "1045.0277777777778"
        },
        {
          "Gene": "WRN",
          "Chr": "chr8",
          "Start": "30945215",
          "End": "30945395",
          "MinCoverage": "67",
          "MaxCoverage": "5220",
          "TotCoverage": "51181",
          "MeanCoverage": "284.3388888888889"
        },
        {
          "Gene": "WRN",
          "Chr": "chr8",
          "Start": "30945412",
          "End": "30945592",
          "MinCoverage": "108",
          "MaxCoverage": "3612",
          "TotCoverage": "64124",
          "MeanCoverage": "356.24444444444447"
        },
        {
          "Gene": "WRN",
          "Chr": "chr8",
          "Start": "30946353",
          "End": "30946533",
          "MinCoverage": "223",
          "MaxCoverage": "4518",
          "TotCoverage": "68846",
          "MeanCoverage": "382.47777777777776"
        },
        {
          "Gene": "WRN",
          "Chr": "chr8",
          "Start": "30947924",
          "End": "30948104",
          "MinCoverage": "128",
          "MaxCoverage": "2556",
          "TotCoverage": "36861",
          "MeanCoverage": "204.78333333333333"
        },
        {
          "Gene": "WRN",
          "Chr": "chr8",
          "Start": "30948326",
          "End": "30948566",
          "MinCoverage": "442",
          "MaxCoverage": "9559",
          "TotCoverage": "214527",
          "MeanCoverage": "893.8625"
        },
        {
          "Gene": "WRN",
          "Chr": "chr8",
          "Start": "30949261",
          "End": "30949441",
          "MinCoverage": "202",
          "MaxCoverage": "7330",
          "TotCoverage": "101680",
          "MeanCoverage": "564.8888888888889"
        },
        {
          "Gene": "WRN",
          "Chr": "chr8",
          "Start": "30954260",
          "End": "30954440",
          "MinCoverage": "158",
          "MaxCoverage": "5128",
          "TotCoverage": "84357",
          "MeanCoverage": "468.65"
        },
        {
          "Gene": "WRN",
          "Chr": "chr8",
          "Start": "30958297",
          "End": "30958537",
          "MinCoverage": "35",
          "MaxCoverage": "5700",
          "TotCoverage": "126029",
          "MeanCoverage": "525.1208333333333"
        },
        {
          "Gene": "WRN",
          "Chr": "chr8",
          "Start": "30969102",
          "End": "30969342",
          "MinCoverage": "223",
          "MaxCoverage": "6130",
          "TotCoverage": "109860",
          "MeanCoverage": "457.75"
        },
        {
          "Gene": "WRN",
          "Chr": "chr8",
          "Start": "30973836",
          "End": "30974076",
          "MinCoverage": "307",
          "MaxCoverage": "6312",
          "TotCoverage": "141619",
          "MeanCoverage": "590.0791666666667"
        },
        {
          "Gene": "WRN",
          "Chr": "chr8",
          "Start": "30977729",
          "End": "30977969",
          "MinCoverage": "120",
          "MaxCoverage": "7546",
          "TotCoverage": "155017",
          "MeanCoverage": "645.9041666666667"
        },
        {
          "Gene": "WRN",
          "Chr": "chr8",
          "Start": "30981968",
          "End": "30982208",
          "MinCoverage": "349",
          "MaxCoverage": "10740",
          "TotCoverage": "232434",
          "MeanCoverage": "968.475"
        },
        {
          "Gene": "WRN",
          "Chr": "chr8",
          "Start": "30982393",
          "End": "30982573",
          "MinCoverage": "263",
          "MaxCoverage": "5124",
          "TotCoverage": "91827",
          "MeanCoverage": "510.15"
        },
        {
          "Gene": "WRN",
          "Chr": "chr8",
          "Start": "30989831",
          "End": "30990071",
          "MinCoverage": "135",
          "MaxCoverage": "5082",
          "TotCoverage": "120673",
          "MeanCoverage": "502.8041666666667"
        },
        {
          "Gene": "WRN",
          "Chr": "chr8",
          "Start": "30998910",
          "End": "30999150",
          "MinCoverage": "337",
          "MaxCoverage": "13962",
          "TotCoverage": "176826",
          "MeanCoverage": "736.775"
        },
        {
          "Gene": "WRN",
          "Chr": "chr8",
          "Start": "30999153",
          "End": "30999333",
          "MinCoverage": "568",
          "MaxCoverage": "5392",
          "TotCoverage": "117312",
          "MeanCoverage": "651.7333333333333"
        },
        {
          "Gene": "WRN",
          "Chr": "chr8",
          "Start": "31001012",
          "End": "31001192",
          "MinCoverage": "212",
          "MaxCoverage": "7117",
          "TotCoverage": "88224",
          "MeanCoverage": "490.1333333333333"
        },
        {
          "Gene": "WRN",
          "Chr": "chr8",
          "Start": "31004548",
          "End": "31004728",
          "MinCoverage": "222",
          "MaxCoverage": "6842",
          "TotCoverage": "86088",
          "MeanCoverage": "478.26666666666665"
        },
        {
          "Gene": "WRN",
          "Chr": "chr8",
          "Start": "31004815",
          "End": "31005055",
          "MinCoverage": "147",
          "MaxCoverage": "7120",
          "TotCoverage": "118565",
          "MeanCoverage": "494.0208333333333"
        },
        {
          "Gene": "WRN",
          "Chr": "chr8",
          "Start": "31007829",
          "End": "31008069",
          "MinCoverage": "347",
          "MaxCoverage": "7870",
          "TotCoverage": "173936",
          "MeanCoverage": "724.7333333333333"
        },
        {
          "Gene": "WRN",
          "Chr": "chr8",
          "Start": "31012085",
          "End": "31012325",
          "MinCoverage": "219",
          "MaxCoverage": "10464",
          "TotCoverage": "138096",
          "MeanCoverage": "575.4"
        },
        {
          "Gene": "WRN",
          "Chr": "chr8",
          "Start": "31014844",
          "End": "31015084",
          "MinCoverage": "180",
          "MaxCoverage": "4296",
          "TotCoverage": "84707",
          "MeanCoverage": "352.9458333333333"
        },
        {
          "Gene": "WRN",
          "Chr": "chr8",
          "Start": "31024521",
          "End": "31024761",
          "MinCoverage": "280",
          "MaxCoverage": "9288",
          "TotCoverage": "186173",
          "MeanCoverage": "775.7208333333333"
        },
        {
          "Gene": "WRN",
          "Chr": "chr8",
          "Start": "31030444",
          "End": "31030684",
          "MinCoverage": "205",
          "MaxCoverage": "7280",
          "TotCoverage": "101137",
          "MeanCoverage": "421.40416666666664"
        },
        {
          "Gene": "FGFR1",
          "Chr": "chr8",
          "Start": "38271368",
          "End": "38271608",
          "MinCoverage": "327",
          "MaxCoverage": "4113",
          "TotCoverage": "252807",
          "MeanCoverage": "1053.3625"
        },
        {
          "Gene": "FGFR1",
          "Chr": "chr8",
          "Start": "38271618",
          "End": "38271858",
          "MinCoverage": "708",
          "MaxCoverage": "12519",
          "TotCoverage": "671998",
          "MeanCoverage": "2799.991666666667"
        },
        {
          "Gene": "FGFR1",
          "Chr": "chr8",
          "Start": "38271991",
          "End": "38272625",
          "MinCoverage": "180",
          "MaxCoverage": "7011",
          "TotCoverage": "984282",
          "MeanCoverage": "1552.4952681388013"
        },
        {
          "Gene": "FGFR1",
          "Chr": "chr8",
          "Start": "38273290",
          "End": "38273650",
          "MinCoverage": "141",
          "MaxCoverage": "2472",
          "TotCoverage": "192250",
          "MeanCoverage": "534.0277777777778"
        },
        {
          "Gene": "FGFR1",
          "Chr": "chr8",
          "Start": "38274758",
          "End": "38274998",
          "MinCoverage": "391",
          "MaxCoverage": "5815",
          "TotCoverage": "303881",
          "MeanCoverage": "1266.1708333333333"
        },
        {
          "Gene": "FGFR1",
          "Chr": "chr8",
          "Start": "38275328",
          "End": "38275568",
          "MinCoverage": "268",
          "MaxCoverage": "4264",
          "TotCoverage": "157628",
          "MeanCoverage": "656.7833333333333"
        },
        {
          "Gene": "FGFR1",
          "Chr": "chr8",
          "Start": "38275668",
          "End": "38275968",
          "MinCoverage": "226",
          "MaxCoverage": "5256",
          "TotCoverage": "170266",
          "MeanCoverage": "567.5533333333333"
        },
        {
          "Gene": "FGFR1",
          "Chr": "chr8",
          "Start": "38276971",
          "End": "38277331",
          "MinCoverage": "307",
          "MaxCoverage": "9132",
          "TotCoverage": "351917",
          "MeanCoverage": "977.5472222222222"
        },
        {
          "Gene": "FGFR1",
          "Chr": "chr8",
          "Start": "38279102",
          "End": "38279522",
          "MinCoverage": "319",
          "MaxCoverage": "5934",
          "TotCoverage": "492380",
          "MeanCoverage": "1172.3333333333333"
        },
        {
          "Gene": "FGFR1",
          "Chr": "chr8",
          "Start": "38280663",
          "End": "38280876",
          "MinCoverage": "130",
          "MaxCoverage": "17367",
          "TotCoverage": "323446",
          "MeanCoverage": "1518.5258215962442"
        },
        {
          "Gene": "FGFR1",
          "Chr": "chr8",
          "Start": "38281089",
          "End": "38282317",
          "MinCoverage": "140",
          "MaxCoverage": "14880",
          "TotCoverage": "1326060",
          "MeanCoverage": "1079.8534201954396"
        },
        {
          "Gene": "FGFR1",
          "Chr": "chr8",
          "Start": "38283581",
          "End": "38283821",
          "MinCoverage": "440",
          "MaxCoverage": "4196",
          "TotCoverage": "187402",
          "MeanCoverage": "780.8416666666667"
        },
        {
          "Gene": "FGFR1",
          "Chr": "chr8",
          "Start": "38285374",
          "End": "38285674",
          "MinCoverage": "441",
          "MaxCoverage": "14928",
          "TotCoverage": "253482",
          "MeanCoverage": "844.94"
        },
        {
          "Gene": "FGFR1",
          "Chr": "chr8",
          "Start": "38285752",
          "End": "38286094",
          "MinCoverage": "376",
          "MaxCoverage": "14966",
          "TotCoverage": "599646",
          "MeanCoverage": "1753.3508771929824"
        },
        {
          "Gene": "FGFR1",
          "Chr": "chr8",
          "Start": "38286686",
          "End": "38286986",
          "MinCoverage": "199",
          "MaxCoverage": "3432",
          "TotCoverage": "205010",
          "MeanCoverage": "683.3666666666667"
        },
        {
          "Gene": "FGFR1",
          "Chr": "chr8",
          "Start": "38287134",
          "End": "38287595",
          "MinCoverage": "280",
          "MaxCoverage": "17016",
          "TotCoverage": "856550",
          "MeanCoverage": "1858.0260303687635"
        },
        {
          "Gene": "FGFR1",
          "Chr": "chr8",
          "Start": "38297737",
          "End": "38297977",
          "MinCoverage": "145",
          "MaxCoverage": "3843",
          "TotCoverage": "77430",
          "MeanCoverage": "322.625"
        },
        {
          "Gene": "FGFR1",
          "Chr": "chr8",
          "Start": "38314812",
          "End": "38315112",
          "MinCoverage": "219",
          "MaxCoverage": "8170",
          "TotCoverage": "198595",
          "MeanCoverage": "661.9833333333333"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48686715",
          "End": "48686955",
          "MinCoverage": "131",
          "MaxCoverage": "3090",
          "TotCoverage": "66626",
          "MeanCoverage": "277.60833333333335"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48689354",
          "End": "48689594",
          "MinCoverage": "230",
          "MaxCoverage": "7152",
          "TotCoverage": "139747",
          "MeanCoverage": "582.2791666666667"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48690220",
          "End": "48690460",
          "MinCoverage": "193",
          "MaxCoverage": "5110",
          "TotCoverage": "104688",
          "MeanCoverage": "436.2"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48691000",
          "End": "48691414",
          "MinCoverage": "235",
          "MaxCoverage": "6708",
          "TotCoverage": "383751",
          "MeanCoverage": "926.9347826086956"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48691519",
          "End": "48691699",
          "MinCoverage": "360",
          "MaxCoverage": "4800",
          "TotCoverage": "146347",
          "MeanCoverage": "813.0388888888889"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48694678",
          "End": "48694858",
          "MinCoverage": "320",
          "MaxCoverage": "7380",
          "TotCoverage": "133097",
          "MeanCoverage": "739.4277777777778"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48694898",
          "End": "48695198",
          "MinCoverage": "758",
          "MaxCoverage": "5944",
          "TotCoverage": "399652",
          "MeanCoverage": "1332.1733333333334"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48696246",
          "End": "48696426",
          "MinCoverage": "588",
          "MaxCoverage": "11730",
          "TotCoverage": "186023",
          "MeanCoverage": "1033.4611111111112"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48697655",
          "End": "48697895",
          "MinCoverage": "216",
          "MaxCoverage": "4290",
          "TotCoverage": "105529",
          "MeanCoverage": "439.70416666666665"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48701418",
          "End": "48701658",
          "MinCoverage": "109",
          "MaxCoverage": "3339",
          "TotCoverage": "77489",
          "MeanCoverage": "322.87083333333334"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48701665",
          "End": "48701845",
          "MinCoverage": "455",
          "MaxCoverage": "9438",
          "TotCoverage": "180443",
          "MeanCoverage": "1002.4611111111111"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48706836",
          "End": "48707076",
          "MinCoverage": "146",
          "MaxCoverage": "9200",
          "TotCoverage": "129089",
          "MeanCoverage": "537.8708333333333"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48710757",
          "End": "48710997",
          "MinCoverage": "558",
          "MaxCoverage": "11055",
          "TotCoverage": "184415",
          "MeanCoverage": "768.3958333333334"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48711740",
          "End": "48711980",
          "MinCoverage": "754",
          "MaxCoverage": "15078",
          "TotCoverage": "519244",
          "MeanCoverage": "2163.516666666667"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48713330",
          "End": "48713570",
          "MinCoverage": "380",
          "MaxCoverage": "5872",
          "TotCoverage": "140122",
          "MeanCoverage": "583.8416666666667"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48715833",
          "End": "48716073",
          "MinCoverage": "400",
          "MaxCoverage": "7488",
          "TotCoverage": "294736",
          "MeanCoverage": "1228.0666666666666"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48719672",
          "End": "48719912",
          "MinCoverage": "263",
          "MaxCoverage": "5027",
          "TotCoverage": "94616",
          "MeanCoverage": "394.23333333333335"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48729946",
          "End": "48730186",
          "MinCoverage": "273",
          "MaxCoverage": "7335",
          "TotCoverage": "149685",
          "MeanCoverage": "623.6875"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48731853",
          "End": "48732093",
          "MinCoverage": "153",
          "MaxCoverage": "4536",
          "TotCoverage": "105142",
          "MeanCoverage": "438.09166666666664"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48733253",
          "End": "48733553",
          "MinCoverage": "65",
          "MaxCoverage": "5028",
          "TotCoverage": "97668",
          "MeanCoverage": "325.56"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48734138",
          "End": "48734378",
          "MinCoverage": "98",
          "MaxCoverage": "4158",
          "TotCoverage": "70851",
          "MeanCoverage": "295.2125"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48736367",
          "End": "48736607",
          "MinCoverage": "359",
          "MaxCoverage": "5096",
          "TotCoverage": "141742",
          "MeanCoverage": "590.5916666666667"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48739199",
          "End": "48739439",
          "MinCoverage": "697",
          "MaxCoverage": "3516",
          "TotCoverage": "282369",
          "MeanCoverage": "1176.5375"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48740698",
          "End": "48740938",
          "MinCoverage": "217",
          "MaxCoverage": "4176",
          "TotCoverage": "83530",
          "MeanCoverage": "348.0416666666667"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48743111",
          "End": "48743351",
          "MinCoverage": "158",
          "MaxCoverage": "5187",
          "TotCoverage": "96936",
          "MeanCoverage": "403.9"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48744310",
          "End": "48744550",
          "MinCoverage": "1295",
          "MaxCoverage": "14816",
          "TotCoverage": "678952",
          "MeanCoverage": "2828.9666666666667"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48746736",
          "End": "48746976",
          "MinCoverage": "521",
          "MaxCoverage": "6504",
          "TotCoverage": "235919",
          "MeanCoverage": "982.9958333333333"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48748873",
          "End": "48749113",
          "MinCoverage": "271",
          "MaxCoverage": "4235",
          "TotCoverage": "161997",
          "MeanCoverage": "674.9875"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48749756",
          "End": "48749996",
          "MinCoverage": "249",
          "MaxCoverage": "7068",
          "TotCoverage": "120082",
          "MeanCoverage": "500.34166666666664"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48751667",
          "End": "48751847",
          "MinCoverage": "429",
          "MaxCoverage": "8576",
          "TotCoverage": "166818",
          "MeanCoverage": "926.7666666666667"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48752543",
          "End": "48752783",
          "MinCoverage": "123",
          "MaxCoverage": "5864",
          "TotCoverage": "115861",
          "MeanCoverage": "482.75416666666666"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48761669",
          "End": "48762121",
          "MinCoverage": "142",
          "MaxCoverage": "7670",
          "TotCoverage": "167690",
          "MeanCoverage": "370.99557522123894"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48765169",
          "End": "48765409",
          "MinCoverage": "519",
          "MaxCoverage": "11889",
          "TotCoverage": "267178",
          "MeanCoverage": "1113.2416666666666"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48766589",
          "End": "48766829",
          "MinCoverage": "250",
          "MaxCoverage": "5640",
          "TotCoverage": "154766",
          "MeanCoverage": "644.8583333333333"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48767738",
          "End": "48767978",
          "MinCoverage": "444",
          "MaxCoverage": "5100",
          "TotCoverage": "211862",
          "MeanCoverage": "882.7583333333333"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48769668",
          "End": "48769908",
          "MinCoverage": "202",
          "MaxCoverage": "5823",
          "TotCoverage": "119112",
          "MeanCoverage": "496.3"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48771016",
          "End": "48771256",
          "MinCoverage": "199",
          "MaxCoverage": "6224",
          "TotCoverage": "113250",
          "MeanCoverage": "471.875"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48771358",
          "End": "48771598",
          "MinCoverage": "734",
          "MaxCoverage": "8628",
          "TotCoverage": "538133",
          "MeanCoverage": "2242.2208333333333"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48772125",
          "End": "48772365",
          "MinCoverage": "144",
          "MaxCoverage": "3970",
          "TotCoverage": "83312",
          "MeanCoverage": "347.1333333333333"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48773405",
          "End": "48773585",
          "MinCoverage": "148",
          "MaxCoverage": "14192",
          "TotCoverage": "106336",
          "MeanCoverage": "590.7555555555556"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48774565",
          "End": "48774745",
          "MinCoverage": "134",
          "MaxCoverage": "3760",
          "TotCoverage": "34287",
          "MeanCoverage": "190.48333333333332"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48774897",
          "End": "48775137",
          "MinCoverage": "227",
          "MaxCoverage": "6648",
          "TotCoverage": "127685",
          "MeanCoverage": "532.0208333333334"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48775928",
          "End": "48776168",
          "MinCoverage": "169",
          "MaxCoverage": "6888",
          "TotCoverage": "151508",
          "MeanCoverage": "631.2833333333333"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48777100",
          "End": "48777340",
          "MinCoverage": "248",
          "MaxCoverage": "4563",
          "TotCoverage": "93855",
          "MeanCoverage": "391.0625"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48790228",
          "End": "48790468",
          "MinCoverage": "179",
          "MaxCoverage": "13893",
          "TotCoverage": "225444",
          "MeanCoverage": "939.35"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48792015",
          "End": "48792255",
          "MinCoverage": "122",
          "MaxCoverage": "2664",
          "TotCoverage": "62658",
          "MeanCoverage": "261.075"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48793908",
          "End": "48794148",
          "MinCoverage": "239",
          "MaxCoverage": "6985",
          "TotCoverage": "167455",
          "MeanCoverage": "697.7291666666666"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48794445",
          "End": "48794685",
          "MinCoverage": "254",
          "MaxCoverage": "9971",
          "TotCoverage": "160021",
          "MeanCoverage": "666.7541666666667"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48798486",
          "End": "48798726",
          "MinCoverage": "206",
          "MaxCoverage": "7644",
          "TotCoverage": "124721",
          "MeanCoverage": "519.6708333333333"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48800066",
          "End": "48800306",
          "MinCoverage": "150",
          "MaxCoverage": "2340",
          "TotCoverage": "63000",
          "MeanCoverage": "262.5"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48801024",
          "End": "48801264",
          "MinCoverage": "154",
          "MaxCoverage": "2140",
          "TotCoverage": "53175",
          "MeanCoverage": "221.5625"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48801558",
          "End": "48801798",
          "MinCoverage": "318",
          "MaxCoverage": "5052",
          "TotCoverage": "95808",
          "MeanCoverage": "399.2"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48802779",
          "End": "48803079",
          "MinCoverage": "165",
          "MaxCoverage": "5792",
          "TotCoverage": "120682",
          "MeanCoverage": "402.2733333333333"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48805673",
          "End": "48805973",
          "MinCoverage": "392",
          "MaxCoverage": "3999",
          "TotCoverage": "280596",
          "MeanCoverage": "935.32"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48809667",
          "End": "48809907",
          "MinCoverage": "437",
          "MaxCoverage": "12114",
          "TotCoverage": "177241",
          "MeanCoverage": "738.5041666666667"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48810989",
          "End": "48811169",
          "MinCoverage": "87",
          "MaxCoverage": "4785",
          "TotCoverage": "45621",
          "MeanCoverage": "253.45"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48812889",
          "End": "48813069",
          "MinCoverage": "534",
          "MaxCoverage": "9408",
          "TotCoverage": "176809",
          "MeanCoverage": "982.2722222222222"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48815091",
          "End": "48815391",
          "MinCoverage": "135",
          "MaxCoverage": "7525",
          "TotCoverage": "119225",
          "MeanCoverage": "397.4166666666667"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48817362",
          "End": "48817602",
          "MinCoverage": "128",
          "MaxCoverage": "4404",
          "TotCoverage": "100520",
          "MeanCoverage": "418.8333333333333"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48824925",
          "End": "48825165",
          "MinCoverage": "141",
          "MaxCoverage": "5588",
          "TotCoverage": "100931",
          "MeanCoverage": "420.54583333333335"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48826422",
          "End": "48826662",
          "MinCoverage": "247",
          "MaxCoverage": "5142",
          "TotCoverage": "161429",
          "MeanCoverage": "672.6208333333333"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48827842",
          "End": "48828022",
          "MinCoverage": "413",
          "MaxCoverage": "9279",
          "TotCoverage": "144169",
          "MeanCoverage": "800.9388888888889"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48830769",
          "End": "48831009",
          "MinCoverage": "369",
          "MaxCoverage": "18720",
          "TotCoverage": "187011",
          "MeanCoverage": "779.2125"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48839713",
          "End": "48839953",
          "MinCoverage": "404",
          "MaxCoverage": "8532",
          "TotCoverage": "192725",
          "MeanCoverage": "803.0208333333334"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48840270",
          "End": "48840510",
          "MinCoverage": "300",
          "MaxCoverage": "6348",
          "TotCoverage": "160164",
          "MeanCoverage": "667.35"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48841604",
          "End": "48841784",
          "MinCoverage": "203",
          "MaxCoverage": "5424",
          "TotCoverage": "112850",
          "MeanCoverage": "626.9444444444445"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48842372",
          "End": "48842612",
          "MinCoverage": "311",
          "MaxCoverage": "5112",
          "TotCoverage": "121209",
          "MeanCoverage": "505.0375"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48843169",
          "End": "48843409",
          "MinCoverage": "241",
          "MaxCoverage": "7044",
          "TotCoverage": "150484",
          "MeanCoverage": "627.0166666666667"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48845535",
          "End": "48845775",
          "MinCoverage": "149",
          "MaxCoverage": "5440",
          "TotCoverage": "103107",
          "MeanCoverage": "429.6125"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48846467",
          "End": "48846707",
          "MinCoverage": "203",
          "MaxCoverage": "4860",
          "TotCoverage": "109031",
          "MeanCoverage": "454.29583333333335"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48847460",
          "End": "48847640",
          "MinCoverage": "351",
          "MaxCoverage": "4945",
          "TotCoverage": "123367",
          "MeanCoverage": "685.3722222222223"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48848255",
          "End": "48848495",
          "MinCoverage": "394",
          "MaxCoverage": "10549",
          "TotCoverage": "217072",
          "MeanCoverage": "904.4666666666667"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48848874",
          "End": "48849114",
          "MinCoverage": "300",
          "MaxCoverage": "5820",
          "TotCoverage": "161107",
          "MeanCoverage": "671.2791666666667"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48852063",
          "End": "48852303",
          "MinCoverage": "257",
          "MaxCoverage": "5262",
          "TotCoverage": "178936",
          "MeanCoverage": "745.5666666666667"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48855727",
          "End": "48855967",
          "MinCoverage": "215",
          "MaxCoverage": "3438",
          "TotCoverage": "78552",
          "MeanCoverage": "327.3"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48856337",
          "End": "48856651",
          "MinCoverage": "223",
          "MaxCoverage": "8386",
          "TotCoverage": "145952",
          "MeanCoverage": "464.81528662420385"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48866139",
          "End": "48866542",
          "MinCoverage": "315",
          "MaxCoverage": "5472",
          "TotCoverage": "201340",
          "MeanCoverage": "499.6029776674938"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48866831",
          "End": "48867071",
          "MinCoverage": "340",
          "MaxCoverage": "5648",
          "TotCoverage": "173786",
          "MeanCoverage": "724.1083333333333"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48868380",
          "End": "48868560",
          "MinCoverage": "28",
          "MaxCoverage": "2340",
          "TotCoverage": "30886",
          "MeanCoverage": "171.5888888888889"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48869686",
          "End": "48870042",
          "MinCoverage": "210",
          "MaxCoverage": "4947",
          "TotCoverage": "127705",
          "MeanCoverage": "358.7219101123595"
        },
        {
          "Gene": "PRKDC",
          "Chr": "chr8",
          "Start": "48872489",
          "End": "48872729",
          "MinCoverage": "275",
          "MaxCoverage": "3888",
          "TotCoverage": "195719",
          "MeanCoverage": "815.4958333333333"
        },
        {
          "Gene": "RPS20",
          "Chr": "chr8",
          "Start": "56982295",
          "End": "56982475",
          "MinCoverage": "599",
          "MaxCoverage": "8960",
          "TotCoverage": "173352",
          "MeanCoverage": "963.0666666666667"
        },
        {
          "Gene": "NBN",
          "Chr": "chr8",
          "Start": "90948219",
          "End": "90948339",
          "MinCoverage": "916",
          "MaxCoverage": "7304",
          "TotCoverage": "185935",
          "MeanCoverage": "1549.4583333333333"
        },
        {
          "Gene": "MYC",
          "Chr": "chr8",
          "Start": "128747713",
          "End": "128748133",
          "MinCoverage": "85",
          "MaxCoverage": "7108",
          "TotCoverage": "508406",
          "MeanCoverage": "1210.490476190476"
        },
        {
          "Gene": "MYC",
          "Chr": "chr8",
          "Start": "128748213",
          "End": "128748943",
          "MinCoverage": "103",
          "MaxCoverage": "10534",
          "TotCoverage": "1309500",
          "MeanCoverage": "1793.835616438356"
        },
        {
          "Gene": "MYC",
          "Chr": "chr8",
          "Start": "128750425",
          "End": "128751325",
          "MinCoverage": "759",
          "MaxCoverage": "12246",
          "TotCoverage": "2199125",
          "MeanCoverage": "2443.472222222222"
        },
        {
          "Gene": "MYC",
          "Chr": "chr8",
          "Start": "128752590",
          "End": "128753730",
          "MinCoverage": "261",
          "MaxCoverage": "9120",
          "TotCoverage": "1220984",
          "MeanCoverage": "1071.038596491228"
        },
        {
          "Gene": "MFSD3,RECQL4",
          "Chr": "chr8",
          "Start": "145736592",
          "End": "145738597",
          "MinCoverage": "121",
          "MaxCoverage": "13244",
          "TotCoverage": "4368507",
          "MeanCoverage": "2178.8064837905235"
        },
        {
          "Gene": "RECQL4",
          "Chr": "chr8",
          "Start": "145738886",
          "End": "145739226",
          "MinCoverage": "290",
          "MaxCoverage": "4494",
          "TotCoverage": "312740",
          "MeanCoverage": "919.8235294117648"
        },
        {
          "Gene": "RECQL4",
          "Chr": "chr8",
          "Start": "145739251",
          "End": "145739971",
          "MinCoverage": "426",
          "MaxCoverage": "9579",
          "TotCoverage": "1208873",
          "MeanCoverage": "1678.9902777777777"
        },
        {
          "Gene": "RECQL4",
          "Chr": "chr8",
          "Start": "145740250",
          "End": "145740910",
          "MinCoverage": "322",
          "MaxCoverage": "11876",
          "TotCoverage": "1092029",
          "MeanCoverage": "1654.5893939393939"
        },
        {
          "Gene": "RECQL4",
          "Chr": "chr8",
          "Start": "145741077",
          "End": "145742217",
          "MinCoverage": "253",
          "MaxCoverage": "15688",
          "TotCoverage": "1432577",
          "MeanCoverage": "1256.64649122807"
        },
        {
          "Gene": "RECQL4",
          "Chr": "chr8",
          "Start": "145742353",
          "End": "145742653",
          "MinCoverage": "479",
          "MaxCoverage": "5238",
          "TotCoverage": "399947",
          "MeanCoverage": "1333.1566666666668"
        },
        {
          "Gene": "RECQL4",
          "Chr": "chr8",
          "Start": "145742724",
          "End": "145742964",
          "MinCoverage": "53",
          "MaxCoverage": "1195",
          "TotCoverage": "51281",
          "MeanCoverage": "213.67083333333332"
        },
        {
          "Gene": "JAK2",
          "Chr": "chr9",
          "Start": "5021824",
          "End": "5022277",
          "MinCoverage": "229",
          "MaxCoverage": "7824",
          "TotCoverage": "330352",
          "MeanCoverage": "729.2538631346579"
        },
        {
          "Gene": "JAK2",
          "Chr": "chr9",
          "Start": "5029724",
          "End": "5029964",
          "MinCoverage": "159",
          "MaxCoverage": "11220",
          "TotCoverage": "163821",
          "MeanCoverage": "682.5875"
        },
        {
          "Gene": "JAK2",
          "Chr": "chr9",
          "Start": "5044341",
          "End": "5044581",
          "MinCoverage": "90",
          "MaxCoverage": "4550",
          "TotCoverage": "86259",
          "MeanCoverage": "359.4125"
        },
        {
          "Gene": "JAK2",
          "Chr": "chr9",
          "Start": "5050608",
          "End": "5050908",
          "MinCoverage": "242",
          "MaxCoverage": "5526",
          "TotCoverage": "149506",
          "MeanCoverage": "498.35333333333335"
        },
        {
          "Gene": "JAK2",
          "Chr": "chr9",
          "Start": "5054483",
          "End": "5054963",
          "MinCoverage": "198",
          "MaxCoverage": "6352",
          "TotCoverage": "276469",
          "MeanCoverage": "575.9770833333333"
        },
        {
          "Gene": "JAK2",
          "Chr": "chr9",
          "Start": "5055608",
          "End": "5055848",
          "MinCoverage": "291",
          "MaxCoverage": "7242",
          "TotCoverage": "201346",
          "MeanCoverage": "838.9416666666667"
        },
        {
          "Gene": "JAK2",
          "Chr": "chr9",
          "Start": "5064811",
          "End": "5065111",
          "MinCoverage": "215",
          "MaxCoverage": "7686",
          "TotCoverage": "225565",
          "MeanCoverage": "751.8833333333333"
        },
        {
          "Gene": "JAK2",
          "Chr": "chr9",
          "Start": "5066613",
          "End": "5066853",
          "MinCoverage": "347",
          "MaxCoverage": "6015",
          "TotCoverage": "202909",
          "MeanCoverage": "845.4541666666667"
        },
        {
          "Gene": "JAK2",
          "Chr": "chr9",
          "Start": "5068964",
          "End": "5069264",
          "MinCoverage": "310",
          "MaxCoverage": "5754",
          "TotCoverage": "236627",
          "MeanCoverage": "788.7566666666667"
        },
        {
          "Gene": "JAK2",
          "Chr": "chr9",
          "Start": "5069868",
          "End": "5070108",
          "MinCoverage": "68",
          "MaxCoverage": "7104",
          "TotCoverage": "119298",
          "MeanCoverage": "497.075"
        },
        {
          "Gene": "JAK2",
          "Chr": "chr9",
          "Start": "5072438",
          "End": "5072678",
          "MinCoverage": "183",
          "MaxCoverage": "3636",
          "TotCoverage": "96121",
          "MeanCoverage": "400.50416666666666"
        },
        {
          "Gene": "JAK2",
          "Chr": "chr9",
          "Start": "5073621",
          "End": "5073861",
          "MinCoverage": "210",
          "MaxCoverage": "4776",
          "TotCoverage": "100545",
          "MeanCoverage": "418.9375"
        },
        {
          "Gene": "JAK2",
          "Chr": "chr9",
          "Start": "5077402",
          "End": "5077642",
          "MinCoverage": "107",
          "MaxCoverage": "5256",
          "TotCoverage": "65522",
          "MeanCoverage": "273.0083333333333"
        },
        {
          "Gene": "JAK2",
          "Chr": "chr9",
          "Start": "5078254",
          "End": "5078494",
          "MinCoverage": "315",
          "MaxCoverage": "5470",
          "TotCoverage": "189241",
          "MeanCoverage": "788.5041666666667"
        },
        {
          "Gene": "JAK2",
          "Chr": "chr9",
          "Start": "5080154",
          "End": "5080454",
          "MinCoverage": "309",
          "MaxCoverage": "6272",
          "TotCoverage": "178577",
          "MeanCoverage": "595.2566666666667"
        },
        {
          "Gene": "JAK2",
          "Chr": "chr9",
          "Start": "5080457",
          "End": "5080757",
          "MinCoverage": "319",
          "MaxCoverage": "8205",
          "TotCoverage": "310156",
          "MeanCoverage": "1033.8533333333332"
        },
        {
          "Gene": "JAK2",
          "Chr": "chr9",
          "Start": "5081672",
          "End": "5081912",
          "MinCoverage": "165",
          "MaxCoverage": "3545",
          "TotCoverage": "102622",
          "MeanCoverage": "427.59166666666664"
        },
        {
          "Gene": "JAK2",
          "Chr": "chr9",
          "Start": "5089618",
          "End": "5089918",
          "MinCoverage": "243",
          "MaxCoverage": "3305",
          "TotCoverage": "164017",
          "MeanCoverage": "546.7233333333334"
        },
        {
          "Gene": "JAK2",
          "Chr": "chr9",
          "Start": "5090387",
          "End": "5090627",
          "MinCoverage": "429",
          "MaxCoverage": "7359",
          "TotCoverage": "149492",
          "MeanCoverage": "622.8833333333333"
        },
        {
          "Gene": "JAK2",
          "Chr": "chr9",
          "Start": "5090674",
          "End": "5090974",
          "MinCoverage": "162",
          "MaxCoverage": "4470",
          "TotCoverage": "118806",
          "MeanCoverage": "396.02"
        },
        {
          "Gene": "JAK2",
          "Chr": "chr9",
          "Start": "5122938",
          "End": "5123178",
          "MinCoverage": "229",
          "MaxCoverage": "5040",
          "TotCoverage": "115206",
          "MeanCoverage": "480.025"
        },
        {
          "Gene": "JAK2",
          "Chr": "chr9",
          "Start": "5126269",
          "End": "5126509",
          "MinCoverage": "317",
          "MaxCoverage": "8600",
          "TotCoverage": "184735",
          "MeanCoverage": "769.7291666666666"
        },
        {
          "Gene": "JAK2",
          "Chr": "chr9",
          "Start": "5126599",
          "End": "5128282",
          "MinCoverage": "208",
          "MaxCoverage": "9531",
          "TotCoverage": "1184348",
          "MeanCoverage": "703.7124183006536"
        },
        {
          "Gene": "CDKN2A",
          "Chr": "chr9",
          "Start": "21967028",
          "End": "21968320",
          "MinCoverage": "276",
          "MaxCoverage": "11070",
          "TotCoverage": "1587537",
          "MeanCoverage": "1228.7438080495356"
        },
        {
          "Gene": "CDKN2A",
          "Chr": "chr9",
          "Start": "21970843",
          "End": "21971317",
          "MinCoverage": "353",
          "MaxCoverage": "7617",
          "TotCoverage": "820261",
          "MeanCoverage": "1730.5084388185653"
        },
        {
          "Gene": "CDKN2A",
          "Chr": "chr9",
          "Start": "21974347",
          "End": "21975219",
          "MinCoverage": "316",
          "MaxCoverage": "23184",
          "TotCoverage": "1982743",
          "MeanCoverage": "2273.787844036697"
        },
        {
          "Gene": "CDKN2A",
          "Chr": "chr9",
          "Start": "21994082",
          "End": "21994611",
          "MinCoverage": "28",
          "MaxCoverage": "11652",
          "TotCoverage": "1141221",
          "MeanCoverage": "2157.3175803402646"
        },
        {
          "Gene": "CDKN2A",
          "Chr": "chr9",
          "Start": "21994734",
          "End": "21995214",
          "MinCoverage": "318",
          "MaxCoverage": "11244",
          "TotCoverage": "1125382",
          "MeanCoverage": "2344.545833333333"
        },
        {
          "Gene": "FANCG",
          "Chr": "chr9",
          "Start": "35073783",
          "End": "35074263",
          "MinCoverage": "343",
          "MaxCoverage": "5152",
          "TotCoverage": "303843",
          "MeanCoverage": "633.00625"
        },
        {
          "Gene": "FANCG",
          "Chr": "chr9",
          "Start": "35074309",
          "End": "35074549",
          "MinCoverage": "321",
          "MaxCoverage": "6501",
          "TotCoverage": "174089",
          "MeanCoverage": "725.3708333333333"
        },
        {
          "Gene": "FANCG",
          "Chr": "chr9",
          "Start": "35074851",
          "End": "35075151",
          "MinCoverage": "392",
          "MaxCoverage": "6384",
          "TotCoverage": "192021",
          "MeanCoverage": "640.07"
        },
        {
          "Gene": "FANCG",
          "Chr": "chr9",
          "Start": "35075178",
          "End": "35075816",
          "MinCoverage": "147",
          "MaxCoverage": "7637",
          "TotCoverage": "372020",
          "MeanCoverage": "583.1034482758621"
        },
        {
          "Gene": "FANCG",
          "Chr": "chr9",
          "Start": "35075871",
          "End": "35076111",
          "MinCoverage": "306",
          "MaxCoverage": "7766",
          "TotCoverage": "169908",
          "MeanCoverage": "707.95"
        },
        {
          "Gene": "FANCG",
          "Chr": "chr9",
          "Start": "35076354",
          "End": "35076654",
          "MinCoverage": "194",
          "MaxCoverage": "4704",
          "TotCoverage": "129629",
          "MeanCoverage": "432.0966666666667"
        },
        {
          "Gene": "FANCG",
          "Chr": "chr9",
          "Start": "35076669",
          "End": "35077149",
          "MinCoverage": "197",
          "MaxCoverage": "8163",
          "TotCoverage": "293230",
          "MeanCoverage": "610.8958333333334"
        },
        {
          "Gene": "FANCG",
          "Chr": "chr9",
          "Start": "35077208",
          "End": "35077448",
          "MinCoverage": "211",
          "MaxCoverage": "4032",
          "TotCoverage": "105951",
          "MeanCoverage": "441.4625"
        },
        {
          "Gene": "FANCG",
          "Chr": "chr9",
          "Start": "35078058",
          "End": "35078418",
          "MinCoverage": "138",
          "MaxCoverage": "11240",
          "TotCoverage": "611063",
          "MeanCoverage": "1697.3972222222221"
        },
        {
          "Gene": "FANCG",
          "Chr": "chr9",
          "Start": "35078547",
          "End": "35078787",
          "MinCoverage": "107",
          "MaxCoverage": "2976",
          "TotCoverage": "54729",
          "MeanCoverage": "228.0375"
        },
        {
          "Gene": "FANCG",
          "Chr": "chr9",
          "Start": "35079072",
          "End": "35079312",
          "MinCoverage": "61",
          "MaxCoverage": "5516",
          "TotCoverage": "54586",
          "MeanCoverage": "227.44166666666666"
        },
        {
          "Gene": "FANCG",
          "Chr": "chr9",
          "Start": "35079365",
          "End": "35080085",
          "MinCoverage": "438",
          "MaxCoverage": "8800",
          "TotCoverage": "875752",
          "MeanCoverage": "1216.3222222222223"
        },
        {
          "Gene": "PAX5",
          "Chr": "chr9",
          "Start": "36846762",
          "End": "36847002",
          "MinCoverage": "329",
          "MaxCoverage": "4185",
          "TotCoverage": "232301",
          "MeanCoverage": "967.9208333333333"
        },
        {
          "Gene": "PAX5",
          "Chr": "chr9",
          "Start": "36881931",
          "End": "36882171",
          "MinCoverage": "787",
          "MaxCoverage": "4389",
          "TotCoverage": "298921",
          "MeanCoverage": "1245.5041666666666"
        },
        {
          "Gene": "PAX5",
          "Chr": "chr9",
          "Start": "36923296",
          "End": "36923536",
          "MinCoverage": "666",
          "MaxCoverage": "10668",
          "TotCoverage": "394898",
          "MeanCoverage": "1645.4083333333333"
        },
        {
          "Gene": "PAX5",
          "Chr": "chr9",
          "Start": "36966483",
          "End": "36966783",
          "MinCoverage": "169",
          "MaxCoverage": "2592",
          "TotCoverage": "184349",
          "MeanCoverage": "614.4966666666667"
        },
        {
          "Gene": "PAX5",
          "Chr": "chr9",
          "Start": "37002588",
          "End": "37002828",
          "MinCoverage": "382",
          "MaxCoverage": "4080",
          "TotCoverage": "324177",
          "MeanCoverage": "1350.7375"
        },
        {
          "Gene": "PAX5",
          "Chr": "chr9",
          "Start": "37006276",
          "End": "37006619",
          "MinCoverage": "88",
          "MaxCoverage": "4448",
          "TotCoverage": "121476",
          "MeanCoverage": "354.15743440233234"
        },
        {
          "Gene": "PAX5",
          "Chr": "chr9",
          "Start": "37014942",
          "End": "37015242",
          "MinCoverage": "222",
          "MaxCoverage": "13797",
          "TotCoverage": "425179",
          "MeanCoverage": "1417.2633333333333"
        },
        {
          "Gene": "PAX5",
          "Chr": "chr9",
          "Start": "37020565",
          "End": "37020865",
          "MinCoverage": "330",
          "MaxCoverage": "8540",
          "TotCoverage": "212181",
          "MeanCoverage": "707.27"
        },
        {
          "Gene": "PAX5",
          "Chr": "chr9",
          "Start": "37033864",
          "End": "37034534",
          "MinCoverage": "133",
          "MaxCoverage": "9532",
          "TotCoverage": "1144257",
          "MeanCoverage": "1707.8462686567163"
        },
        {
          "Gene": "NTRK2",
          "Chr": "chr9",
          "Start": "87285649",
          "End": "87285889",
          "MinCoverage": "429",
          "MaxCoverage": "3775",
          "TotCoverage": "217151",
          "MeanCoverage": "904.7958333333333"
        },
        {
          "Gene": "NTRK2",
          "Chr": "chr9",
          "Start": "87317020",
          "End": "87317200",
          "MinCoverage": "223",
          "MaxCoverage": "3016",
          "TotCoverage": "55406",
          "MeanCoverage": "307.81111111111113"
        },
        {
          "Gene": "NTRK2",
          "Chr": "chr9",
          "Start": "87317208",
          "End": "87317388",
          "MinCoverage": "190",
          "MaxCoverage": "5614",
          "TotCoverage": "103962",
          "MeanCoverage": "577.5666666666667"
        },
        {
          "Gene": "NTRK2",
          "Chr": "chr9",
          "Start": "87322702",
          "End": "87322882",
          "MinCoverage": "285",
          "MaxCoverage": "5650",
          "TotCoverage": "90338",
          "MeanCoverage": "501.8777777777778"
        },
        {
          "Gene": "NTRK2",
          "Chr": "chr9",
          "Start": "87325508",
          "End": "87325748",
          "MinCoverage": "292",
          "MaxCoverage": "7840",
          "TotCoverage": "128367",
          "MeanCoverage": "534.8625"
        },
        {
          "Gene": "NTRK2",
          "Chr": "chr9",
          "Start": "87338435",
          "End": "87338675",
          "MinCoverage": "175",
          "MaxCoverage": "4768",
          "TotCoverage": "74479",
          "MeanCoverage": "310.32916666666665"
        },
        {
          "Gene": "NTRK2",
          "Chr": "chr9",
          "Start": "87339084",
          "End": "87339324",
          "MinCoverage": "177",
          "MaxCoverage": "7472",
          "TotCoverage": "146528",
          "MeanCoverage": "610.5333333333333"
        },
        {
          "Gene": "NTRK2",
          "Chr": "chr9",
          "Start": "87342541",
          "End": "87342901",
          "MinCoverage": "303",
          "MaxCoverage": "9350",
          "TotCoverage": "274682",
          "MeanCoverage": "763.0055555555556"
        },
        {
          "Gene": "NTRK2",
          "Chr": "chr9",
          "Start": "87356734",
          "End": "87356914",
          "MinCoverage": "308",
          "MaxCoverage": "3952",
          "TotCoverage": "80135",
          "MeanCoverage": "445.19444444444446"
        },
        {
          "Gene": "NTRK2",
          "Chr": "chr9",
          "Start": "87359817",
          "End": "87360057",
          "MinCoverage": "316",
          "MaxCoverage": "6250",
          "TotCoverage": "141512",
          "MeanCoverage": "589.6333333333333"
        },
        {
          "Gene": "NTRK2",
          "Chr": "chr9",
          "Start": "87366860",
          "End": "87367040",
          "MinCoverage": "260",
          "MaxCoverage": "3930",
          "TotCoverage": "60243",
          "MeanCoverage": "334.68333333333334"
        },
        {
          "Gene": "NTRK2",
          "Chr": "chr9",
          "Start": "87425385",
          "End": "87425565",
          "MinCoverage": "158",
          "MaxCoverage": "3070",
          "TotCoverage": "78308",
          "MeanCoverage": "435.0444444444444"
        },
        {
          "Gene": "NTRK2",
          "Chr": "chr9",
          "Start": "87475888",
          "End": "87476068",
          "MinCoverage": "150",
          "MaxCoverage": "4977",
          "TotCoverage": "88197",
          "MeanCoverage": "489.98333333333335"
        },
        {
          "Gene": "NTRK2",
          "Chr": "chr9",
          "Start": "87482131",
          "End": "87482371",
          "MinCoverage": "214",
          "MaxCoverage": "6270",
          "TotCoverage": "114936",
          "MeanCoverage": "478.9"
        },
        {
          "Gene": "NTRK2",
          "Chr": "chr9",
          "Start": "87486627",
          "End": "87486807",
          "MinCoverage": "118",
          "MaxCoverage": "3829",
          "TotCoverage": "60686",
          "MeanCoverage": "337.14444444444445"
        },
        {
          "Gene": "NTRK2",
          "Chr": "chr9",
          "Start": "87549021",
          "End": "87549261",
          "MinCoverage": "270",
          "MaxCoverage": "7015",
          "TotCoverage": "136731",
          "MeanCoverage": "569.7125"
        },
        {
          "Gene": "NTRK2",
          "Chr": "chr9",
          "Start": "87563342",
          "End": "87563582",
          "MinCoverage": "278",
          "MaxCoverage": "10656",
          "TotCoverage": "290078",
          "MeanCoverage": "1208.6583333333333"
        },
        {
          "Gene": "NTRK2",
          "Chr": "chr9",
          "Start": "87570164",
          "End": "87570464",
          "MinCoverage": "391",
          "MaxCoverage": "4182",
          "TotCoverage": "390452",
          "MeanCoverage": "1301.5066666666667"
        },
        {
          "Gene": "NTRK2",
          "Chr": "chr9",
          "Start": "87635079",
          "End": "87635319",
          "MinCoverage": "166",
          "MaxCoverage": "5733",
          "TotCoverage": "134646",
          "MeanCoverage": "561.025"
        },
        {
          "Gene": "NTRK2",
          "Chr": "chr9",
          "Start": "87636139",
          "End": "87636379",
          "MinCoverage": "545",
          "MaxCoverage": "6675",
          "TotCoverage": "268000",
          "MeanCoverage": "1116.6666666666667"
        },
        {
          "Gene": "FANCC",
          "Chr": "chr9",
          "Start": "97869269",
          "End": "97869629",
          "MinCoverage": "266",
          "MaxCoverage": "6165",
          "TotCoverage": "308113",
          "MeanCoverage": "855.8694444444444"
        },
        {
          "Gene": "FANCC",
          "Chr": "chr9",
          "Start": "97872437",
          "End": "97873981",
          "MinCoverage": "226",
          "MaxCoverage": "16990",
          "TotCoverage": "1821521",
          "MeanCoverage": "1179.7415803108809"
        },
        {
          "Gene": "FANCC",
          "Chr": "chr9",
          "Start": "97876831",
          "End": "97877071",
          "MinCoverage": "54",
          "MaxCoverage": "3864",
          "TotCoverage": "54277",
          "MeanCoverage": "226.15416666666667"
        },
        {
          "Gene": "FANCC",
          "Chr": "chr9",
          "Start": "97887297",
          "End": "97887537",
          "MinCoverage": "554",
          "MaxCoverage": "13620",
          "TotCoverage": "219956",
          "MeanCoverage": "916.4833333333333"
        },
        {
          "Gene": "FANCC",
          "Chr": "chr9",
          "Start": "97912136",
          "End": "97912436",
          "MinCoverage": "302",
          "MaxCoverage": "7176",
          "TotCoverage": "144262",
          "MeanCoverage": "480.87333333333333"
        },
        {
          "Gene": "FANCC",
          "Chr": "chr9",
          "Start": "98002857",
          "End": "98003097",
          "MinCoverage": "82",
          "MaxCoverage": "4488",
          "TotCoverage": "88017",
          "MeanCoverage": "366.7375"
        },
        {
          "Gene": "FANCC",
          "Chr": "chr9",
          "Start": "98011349",
          "End": "98011709",
          "MinCoverage": "166",
          "MaxCoverage": "5535",
          "TotCoverage": "133621",
          "MeanCoverage": "371.1694444444444"
        },
        {
          "Gene": "PTCH1",
          "Chr": "chr9",
          "Start": "98209163",
          "End": "98209763",
          "MinCoverage": "104",
          "MaxCoverage": "4515",
          "TotCoverage": "503632",
          "MeanCoverage": "839.3866666666667"
        },
        {
          "Gene": "PTCH1",
          "Chr": "chr9",
          "Start": "98211327",
          "End": "98211627",
          "MinCoverage": "251",
          "MaxCoverage": "5397",
          "TotCoverage": "356294",
          "MeanCoverage": "1187.6466666666668"
        },
        {
          "Gene": "PTCH1",
          "Chr": "chr9",
          "Start": "98212082",
          "End": "98212262",
          "MinCoverage": "598",
          "MaxCoverage": "10272",
          "TotCoverage": "262971",
          "MeanCoverage": "1460.95"
        },
        {
          "Gene": "PTCH1",
          "Chr": "chr9",
          "Start": "98215710",
          "End": "98215950",
          "MinCoverage": "601",
          "MaxCoverage": "10232",
          "TotCoverage": "516281",
          "MeanCoverage": "2151.170833333333"
        },
        {
          "Gene": "PTCH1",
          "Chr": "chr9",
          "Start": "98218506",
          "End": "98218746",
          "MinCoverage": "1088",
          "MaxCoverage": "9330",
          "TotCoverage": "634046",
          "MeanCoverage": "2641.858333333333"
        },
        {
          "Gene": "PTCH1",
          "Chr": "chr9",
          "Start": "98220254",
          "End": "98220614",
          "MinCoverage": "220",
          "MaxCoverage": "6888",
          "TotCoverage": "346652",
          "MeanCoverage": "962.9222222222222"
        },
        {
          "Gene": "PTCH1",
          "Chr": "chr9",
          "Start": "98221853",
          "End": "98222093",
          "MinCoverage": "310",
          "MaxCoverage": "2511",
          "TotCoverage": "154175",
          "MeanCoverage": "642.3958333333334"
        },
        {
          "Gene": "PTCH1",
          "Chr": "chr9",
          "Start": "98224088",
          "End": "98224328",
          "MinCoverage": "639",
          "MaxCoverage": "8932",
          "TotCoverage": "475132",
          "MeanCoverage": "1979.7166666666667"
        },
        {
          "Gene": "PTCH1",
          "Chr": "chr9",
          "Start": "98229372",
          "End": "98229732",
          "MinCoverage": "214",
          "MaxCoverage": "10710",
          "TotCoverage": "207000",
          "MeanCoverage": "575.0"
        },
        {
          "Gene": "PTCH1",
          "Chr": "chr9",
          "Start": "98230993",
          "End": "98231473",
          "MinCoverage": "96",
          "MaxCoverage": "2905",
          "TotCoverage": "193802",
          "MeanCoverage": "403.75416666666666"
        },
        {
          "Gene": "PTCH1",
          "Chr": "chr9",
          "Start": "98232033",
          "End": "98232273",
          "MinCoverage": "373",
          "MaxCoverage": "8406",
          "TotCoverage": "164797",
          "MeanCoverage": "686.6541666666667"
        },
        {
          "Gene": "PTCH1",
          "Chr": "chr9",
          "Start": "98236269",
          "End": "98236449",
          "MinCoverage": "112",
          "MaxCoverage": "4361",
          "TotCoverage": "70830",
          "MeanCoverage": "393.5"
        },
        {
          "Gene": "PTCH1",
          "Chr": "chr9",
          "Start": "98238258",
          "End": "98238498",
          "MinCoverage": "433",
          "MaxCoverage": "3915",
          "TotCoverage": "274944",
          "MeanCoverage": "1145.6"
        },
        {
          "Gene": "PTCH1",
          "Chr": "chr9",
          "Start": "98238999",
          "End": "98239179",
          "MinCoverage": "313",
          "MaxCoverage": "6888",
          "TotCoverage": "109233",
          "MeanCoverage": "606.85"
        },
        {
          "Gene": "PTCH1",
          "Chr": "chr9",
          "Start": "98239786",
          "End": "98240026",
          "MinCoverage": "1047",
          "MaxCoverage": "10036",
          "TotCoverage": "466356",
          "MeanCoverage": "1943.15"
        },
        {
          "Gene": "PTCH1",
          "Chr": "chr9",
          "Start": "98240282",
          "End": "98240522",
          "MinCoverage": "156",
          "MaxCoverage": "6624",
          "TotCoverage": "97284",
          "MeanCoverage": "405.35"
        },
        {
          "Gene": "PTCH1",
          "Chr": "chr9",
          "Start": "98241235",
          "End": "98241475",
          "MinCoverage": "292",
          "MaxCoverage": "5445",
          "TotCoverage": "139425",
          "MeanCoverage": "580.9375"
        },
        {
          "Gene": "PTCH1",
          "Chr": "chr9",
          "Start": "98242191",
          "End": "98242431",
          "MinCoverage": "294",
          "MaxCoverage": "5949",
          "TotCoverage": "135205",
          "MeanCoverage": "563.3541666666666"
        },
        {
          "Gene": "PTCH1",
          "Chr": "chr9",
          "Start": "98242650",
          "End": "98242890",
          "MinCoverage": "201",
          "MaxCoverage": "3501",
          "TotCoverage": "72768",
          "MeanCoverage": "303.2"
        },
        {
          "Gene": "PTCH1",
          "Chr": "chr9",
          "Start": "98244184",
          "End": "98244551",
          "MinCoverage": "153",
          "MaxCoverage": "6780",
          "TotCoverage": "172467",
          "MeanCoverage": "469.93732970027247"
        },
        {
          "Gene": "PTCH1",
          "Chr": "chr9",
          "Start": "98247941",
          "End": "98248181",
          "MinCoverage": "127",
          "MaxCoverage": "3258",
          "TotCoverage": "82790",
          "MeanCoverage": "344.9583333333333"
        },
        {
          "Gene": "PTCH1",
          "Chr": "chr9",
          "Start": "98268666",
          "End": "98268906",
          "MinCoverage": "454",
          "MaxCoverage": "4868",
          "TotCoverage": "274554",
          "MeanCoverage": "1143.975"
        },
        {
          "Gene": "PTCH1",
          "Chr": "chr9",
          "Start": "98270419",
          "End": "98270659",
          "MinCoverage": "55",
          "MaxCoverage": "1560",
          "TotCoverage": "57845",
          "MeanCoverage": "241.02083333333334"
        },
        {
          "Gene": "PTCH1",
          "Chr": "chr9",
          "Start": "98278661",
          "End": "98278957",
          "MinCoverage": "153",
          "MaxCoverage": "5096",
          "TotCoverage": "345374",
          "MeanCoverage": "1166.804054054054"
        },
        {
          "Gene": "PTCH1",
          "Chr": "chr9",
          "Start": "98278971",
          "End": "98279211",
          "MinCoverage": "646",
          "MaxCoverage": "5766",
          "TotCoverage": "340110",
          "MeanCoverage": "1417.125"
        },
        {
          "Gene": "XPA",
          "Chr": "chr9",
          "Start": "100459296",
          "End": "100460005",
          "MinCoverage": "6",
          "MaxCoverage": "11656",
          "TotCoverage": "383042",
          "MeanCoverage": "540.2566995768689"
        },
        {
          "Gene": "GALNT12",
          "Chr": "chr9",
          "Start": "101569942",
          "End": "101570223",
          "MinCoverage": "0",
          "MaxCoverage": "180",
          "TotCoverage": "1398",
          "MeanCoverage": "4.97508896797153"
        },
        {
          "Gene": "ABL1",
          "Chr": "chr9",
          "Start": "133729387",
          "End": "133729687",
          "MinCoverage": "24",
          "MaxCoverage": "6288",
          "TotCoverage": "82185",
          "MeanCoverage": "273.95"
        },
        {
          "Gene": "ABL1",
          "Chr": "chr9",
          "Start": "133730125",
          "End": "133730545",
          "MinCoverage": "208",
          "MaxCoverage": "10572",
          "TotCoverage": "390465",
          "MeanCoverage": "929.6785714285714"
        },
        {
          "Gene": "ABL1",
          "Chr": "chr9",
          "Start": "133738075",
          "End": "133738495",
          "MinCoverage": "296",
          "MaxCoverage": "11472",
          "TotCoverage": "836593",
          "MeanCoverage": "1991.8880952380953"
        },
        {
          "Gene": "ABL1",
          "Chr": "chr9",
          "Start": "133747403",
          "End": "133747677",
          "MinCoverage": "715",
          "MaxCoverage": "9424",
          "TotCoverage": "502416",
          "MeanCoverage": "1833.6350364963503"
        },
        {
          "Gene": "ABL1",
          "Chr": "chr9",
          "Start": "133748177",
          "End": "133748489",
          "MinCoverage": "506",
          "MaxCoverage": "11355",
          "TotCoverage": "691781",
          "MeanCoverage": "2217.246794871795"
        },
        {
          "Gene": "ABL1",
          "Chr": "chr9",
          "Start": "133750196",
          "End": "133750511",
          "MinCoverage": "390",
          "MaxCoverage": "12492",
          "TotCoverage": "351776",
          "MeanCoverage": "1116.7492063492064"
        },
        {
          "Gene": "ABL1",
          "Chr": "chr9",
          "Start": "133753727",
          "End": "133754027",
          "MinCoverage": "192",
          "MaxCoverage": "5425",
          "TotCoverage": "172039",
          "MeanCoverage": "573.4633333333334"
        },
        {
          "Gene": "ABL1",
          "Chr": "chr9",
          "Start": "133755379",
          "End": "133755619",
          "MinCoverage": "110",
          "MaxCoverage": "6021",
          "TotCoverage": "94055",
          "MeanCoverage": "391.8958333333333"
        },
        {
          "Gene": "ABL1",
          "Chr": "chr9",
          "Start": "133755818",
          "End": "133756118",
          "MinCoverage": "338",
          "MaxCoverage": "7077",
          "TotCoverage": "307525",
          "MeanCoverage": "1025.0833333333333"
        },
        {
          "Gene": "NUP214",
          "Chr": "chr9",
          "Start": "134002858",
          "End": "134003158",
          "MinCoverage": "226",
          "MaxCoverage": "9288",
          "TotCoverage": "191256",
          "MeanCoverage": "637.52"
        },
        {
          "Gene": "NUP214",
          "Chr": "chr9",
          "Start": "134003644",
          "End": "134003944",
          "MinCoverage": "179",
          "MaxCoverage": "8800",
          "TotCoverage": "177643",
          "MeanCoverage": "592.1433333333333"
        },
        {
          "Gene": "NUP214",
          "Chr": "chr9",
          "Start": "134004614",
          "End": "134004914",
          "MinCoverage": "285",
          "MaxCoverage": "6849",
          "TotCoverage": "206915",
          "MeanCoverage": "689.7166666666667"
        },
        {
          "Gene": "NUP214",
          "Chr": "chr9",
          "Start": "134006067",
          "End": "134006307",
          "MinCoverage": "91",
          "MaxCoverage": "3087",
          "TotCoverage": "68308",
          "MeanCoverage": "284.6166666666667"
        },
        {
          "Gene": "NUP214",
          "Chr": "chr9",
          "Start": "134008424",
          "End": "134008664",
          "MinCoverage": "82",
          "MaxCoverage": "7392",
          "TotCoverage": "101825",
          "MeanCoverage": "424.2708333333333"
        },
        {
          "Gene": "NUP214",
          "Chr": "chr9",
          "Start": "134010217",
          "End": "134010457",
          "MinCoverage": "204",
          "MaxCoverage": "6020",
          "TotCoverage": "95105",
          "MeanCoverage": "396.2708333333333"
        },
        {
          "Gene": "NUP214",
          "Chr": "chr9",
          "Start": "134014541",
          "End": "134014886",
          "MinCoverage": "371",
          "MaxCoverage": "9712",
          "TotCoverage": "294940",
          "MeanCoverage": "854.8985507246376"
        },
        {
          "Gene": "NUP214",
          "Chr": "chr9",
          "Start": "134015866",
          "End": "134016166",
          "MinCoverage": "202",
          "MaxCoverage": "9480",
          "TotCoverage": "154741",
          "MeanCoverage": "515.8033333333333"
        },
        {
          "Gene": "NUP214",
          "Chr": "chr9",
          "Start": "134019603",
          "End": "134020203",
          "MinCoverage": "314",
          "MaxCoverage": "7170",
          "TotCoverage": "509972",
          "MeanCoverage": "849.9533333333334"
        },
        {
          "Gene": "NUP214",
          "Chr": "chr9",
          "Start": "134021453",
          "End": "134021753",
          "MinCoverage": "165",
          "MaxCoverage": "15440",
          "TotCoverage": "313284",
          "MeanCoverage": "1044.28"
        },
        {
          "Gene": "NUP214",
          "Chr": "chr9",
          "Start": "134022802",
          "End": "134023042",
          "MinCoverage": "369",
          "MaxCoverage": "7458",
          "TotCoverage": "137953",
          "MeanCoverage": "574.8041666666667"
        },
        {
          "Gene": "NUP214",
          "Chr": "chr9",
          "Start": "134025633",
          "End": "134025873",
          "MinCoverage": "189",
          "MaxCoverage": "3597",
          "TotCoverage": "81174",
          "MeanCoverage": "338.225"
        },
        {
          "Gene": "NUP214",
          "Chr": "chr9",
          "Start": "134025927",
          "End": "134026227",
          "MinCoverage": "262",
          "MaxCoverage": "8226",
          "TotCoverage": "176878",
          "MeanCoverage": "589.5933333333334"
        },
        {
          "Gene": "NUP214",
          "Chr": "chr9",
          "Start": "134027051",
          "End": "134027351",
          "MinCoverage": "164",
          "MaxCoverage": "8541",
          "TotCoverage": "156935",
          "MeanCoverage": "523.1166666666667"
        },
        {
          "Gene": "NUP214",
          "Chr": "chr9",
          "Start": "134034663",
          "End": "134034934",
          "MinCoverage": "482",
          "MaxCoverage": "11730",
          "TotCoverage": "196528",
          "MeanCoverage": "725.1955719557195"
        },
        {
          "Gene": "NUP214",
          "Chr": "chr9",
          "Start": "134038318",
          "End": "134038618",
          "MinCoverage": "153",
          "MaxCoverage": "5820",
          "TotCoverage": "116160",
          "MeanCoverage": "387.2"
        },
        {
          "Gene": "NUP214",
          "Chr": "chr9",
          "Start": "134039179",
          "End": "134039419",
          "MinCoverage": "333",
          "MaxCoverage": "10038",
          "TotCoverage": "227913",
          "MeanCoverage": "949.6375"
        },
        {
          "Gene": "NUP214",
          "Chr": "chr9",
          "Start": "134049363",
          "End": "134049783",
          "MinCoverage": "306",
          "MaxCoverage": "11400",
          "TotCoverage": "657637",
          "MeanCoverage": "1565.8023809523809"
        },
        {
          "Gene": "NUP214",
          "Chr": "chr9",
          "Start": "134050777",
          "End": "134051077",
          "MinCoverage": "484",
          "MaxCoverage": "11284",
          "TotCoverage": "552962",
          "MeanCoverage": "1843.2066666666667"
        },
        {
          "Gene": "NUP214",
          "Chr": "chr9",
          "Start": "134064358",
          "End": "134064598",
          "MinCoverage": "165",
          "MaxCoverage": "6864",
          "TotCoverage": "136822",
          "MeanCoverage": "570.0916666666667"
        },
        {
          "Gene": "NUP214",
          "Chr": "chr9",
          "Start": "134070562",
          "End": "134071102",
          "MinCoverage": "357",
          "MaxCoverage": "9647",
          "TotCoverage": "377008",
          "MeanCoverage": "698.162962962963"
        },
        {
          "Gene": "NUP214",
          "Chr": "chr9",
          "Start": "134072542",
          "End": "134074462",
          "MinCoverage": "264",
          "MaxCoverage": "18904",
          "TotCoverage": "2914830",
          "MeanCoverage": "1518.140625"
        },
        {
          "Gene": "NUP214",
          "Chr": "chr9",
          "Start": "134076951",
          "End": "134077191",
          "MinCoverage": "362",
          "MaxCoverage": "8715",
          "TotCoverage": "174711",
          "MeanCoverage": "727.9625"
        },
        {
          "Gene": "NUP214",
          "Chr": "chr9",
          "Start": "134090526",
          "End": "134090826",
          "MinCoverage": "149",
          "MaxCoverage": "12280",
          "TotCoverage": "140197",
          "MeanCoverage": "467.3233333333333"
        },
        {
          "Gene": "NUP214",
          "Chr": "chr9",
          "Start": "134098090",
          "End": "134098390",
          "MinCoverage": "161",
          "MaxCoverage": "7953",
          "TotCoverage": "136912",
          "MeanCoverage": "456.37333333333333"
        },
        {
          "Gene": "NUP214",
          "Chr": "chr9",
          "Start": "134103482",
          "End": "134103782",
          "MinCoverage": "332",
          "MaxCoverage": "2335",
          "TotCoverage": "165389",
          "MeanCoverage": "551.2966666666666"
        },
        {
          "Gene": "NUP214",
          "Chr": "chr9",
          "Start": "134104980",
          "End": "134105280",
          "MinCoverage": "174",
          "MaxCoverage": "5109",
          "TotCoverage": "111185",
          "MeanCoverage": "370.6166666666667"
        },
        {
          "Gene": "NUP214",
          "Chr": "chr9",
          "Start": "134105966",
          "End": "134106206",
          "MinCoverage": "288",
          "MaxCoverage": "6966",
          "TotCoverage": "223260",
          "MeanCoverage": "930.25"
        },
        {
          "Gene": "NUP214",
          "Chr": "chr9",
          "Start": "134108785",
          "End": "134109145",
          "MinCoverage": "464",
          "MaxCoverage": "8465",
          "TotCoverage": "372970",
          "MeanCoverage": "1036.0277777777778"
        },
        {
          "Gene": "TSC1",
          "Chr": "chr9",
          "Start": "135771586",
          "End": "135772228",
          "MinCoverage": "192",
          "MaxCoverage": "9096",
          "TotCoverage": "631311",
          "MeanCoverage": "983.3504672897196"
        },
        {
          "Gene": "TSC1",
          "Chr": "chr9",
          "Start": "135772531",
          "End": "135772771",
          "MinCoverage": "224",
          "MaxCoverage": "3894",
          "TotCoverage": "128530",
          "MeanCoverage": "535.5416666666666"
        },
        {
          "Gene": "TSC1",
          "Chr": "chr9",
          "Start": "135772783",
          "End": "135773023",
          "MinCoverage": "113",
          "MaxCoverage": "4368",
          "TotCoverage": "118347",
          "MeanCoverage": "493.1125"
        },
        {
          "Gene": "TSC1",
          "Chr": "chr9",
          "Start": "135776042",
          "End": "135776282",
          "MinCoverage": "185",
          "MaxCoverage": "18940",
          "TotCoverage": "166332",
          "MeanCoverage": "693.05"
        },
        {
          "Gene": "TSC1",
          "Chr": "chr9",
          "Start": "135776910",
          "End": "135777150",
          "MinCoverage": "139",
          "MaxCoverage": "5330",
          "TotCoverage": "103438",
          "MeanCoverage": "430.9916666666667"
        },
        {
          "Gene": "TSC1",
          "Chr": "chr9",
          "Start": "135777962",
          "End": "135778202",
          "MinCoverage": "254",
          "MaxCoverage": "6809",
          "TotCoverage": "103565",
          "MeanCoverage": "431.5208333333333"
        },
        {
          "Gene": "TSC1",
          "Chr": "chr9",
          "Start": "135779000",
          "End": "135779240",
          "MinCoverage": "45",
          "MaxCoverage": "1504",
          "TotCoverage": "16507",
          "MeanCoverage": "68.77916666666667"
        },
        {
          "Gene": "TSC1",
          "Chr": "chr9",
          "Start": "135779729",
          "End": "135779909",
          "MinCoverage": "257",
          "MaxCoverage": "5588",
          "TotCoverage": "77671",
          "MeanCoverage": "431.50555555555553"
        },
        {
          "Gene": "TSC1",
          "Chr": "chr9",
          "Start": "135780946",
          "End": "135781546",
          "MinCoverage": "135",
          "MaxCoverage": "5904",
          "TotCoverage": "242328",
          "MeanCoverage": "403.88"
        },
        {
          "Gene": "TSC1",
          "Chr": "chr9",
          "Start": "135782049",
          "End": "135782289",
          "MinCoverage": "164",
          "MaxCoverage": "6090",
          "TotCoverage": "68631",
          "MeanCoverage": "285.9625"
        },
        {
          "Gene": "TSC1",
          "Chr": "chr9",
          "Start": "135782632",
          "End": "135782812",
          "MinCoverage": "143",
          "MaxCoverage": "4260",
          "TotCoverage": "68531",
          "MeanCoverage": "380.72777777777776"
        },
        {
          "Gene": "TSC1",
          "Chr": "chr9",
          "Start": "135785898",
          "End": "135786138",
          "MinCoverage": "138",
          "MaxCoverage": "2871",
          "TotCoverage": "56366",
          "MeanCoverage": "234.85833333333332"
        },
        {
          "Gene": "TSC1",
          "Chr": "chr9",
          "Start": "135786324",
          "End": "135786564",
          "MinCoverage": "148",
          "MaxCoverage": "4860",
          "TotCoverage": "84403",
          "MeanCoverage": "351.6791666666667"
        },
        {
          "Gene": "TSC1",
          "Chr": "chr9",
          "Start": "135786741",
          "End": "135786981",
          "MinCoverage": "174",
          "MaxCoverage": "4416",
          "TotCoverage": "82699",
          "MeanCoverage": "344.57916666666665"
        },
        {
          "Gene": "TSC1",
          "Chr": "chr9",
          "Start": "135787636",
          "End": "135787876",
          "MinCoverage": "191",
          "MaxCoverage": "3740",
          "TotCoverage": "56796",
          "MeanCoverage": "236.65"
        },
        {
          "Gene": "TSC1",
          "Chr": "chr9",
          "Start": "135796696",
          "End": "135796876",
          "MinCoverage": "280",
          "MaxCoverage": "4790",
          "TotCoverage": "112421",
          "MeanCoverage": "624.5611111111111"
        },
        {
          "Gene": "TSC1",
          "Chr": "chr9",
          "Start": "135797162",
          "End": "135797402",
          "MinCoverage": "224",
          "MaxCoverage": "10710",
          "TotCoverage": "129355",
          "MeanCoverage": "538.9791666666666"
        },
        {
          "Gene": "TSC1",
          "Chr": "chr9",
          "Start": "135798686",
          "End": "135798926",
          "MinCoverage": "242",
          "MaxCoverage": "7766",
          "TotCoverage": "142945",
          "MeanCoverage": "595.6041666666666"
        },
        {
          "Gene": "TSC1",
          "Chr": "chr9",
          "Start": "135800929",
          "End": "135801169",
          "MinCoverage": "185",
          "MaxCoverage": "5136",
          "TotCoverage": "114812",
          "MeanCoverage": "478.3833333333333"
        },
        {
          "Gene": "TSC1",
          "Chr": "chr9",
          "Start": "135802519",
          "End": "135802759",
          "MinCoverage": "184",
          "MaxCoverage": "4400",
          "TotCoverage": "96786",
          "MeanCoverage": "403.275"
        },
        {
          "Gene": "TSC1",
          "Chr": "chr9",
          "Start": "135804086",
          "End": "135804326",
          "MinCoverage": "388",
          "MaxCoverage": "8586",
          "TotCoverage": "270749",
          "MeanCoverage": "1128.1208333333334"
        },
        {
          "Gene": "NOTCH1",
          "Chr": "chr9",
          "Start": "139394876",
          "End": "139395356",
          "MinCoverage": "57",
          "MaxCoverage": "2697",
          "TotCoverage": "204756",
          "MeanCoverage": "426.575"
        },
        {
          "Gene": "NOTCH1",
          "Chr": "chr9",
          "Start": "139397607",
          "End": "139397895",
          "MinCoverage": "314",
          "MaxCoverage": "7287",
          "TotCoverage": "427753",
          "MeanCoverage": "1485.2534722222222"
        },
        {
          "Gene": "NOTCH1",
          "Chr": "chr9",
          "Start": "139399231",
          "End": "139399543",
          "MinCoverage": "289",
          "MaxCoverage": "4443",
          "TotCoverage": "343802",
          "MeanCoverage": "1101.929487179487"
        },
        {
          "Gene": "NOTCH1",
          "Chr": "chr9",
          "Start": "139403242",
          "End": "139403602",
          "MinCoverage": "37",
          "MaxCoverage": "973",
          "TotCoverage": "33124",
          "MeanCoverage": "92.0111111111111"
        },
        {
          "Gene": "NOTCH1",
          "Chr": "chr9",
          "Start": "139405030",
          "End": "139405330",
          "MinCoverage": "90",
          "MaxCoverage": "1656",
          "TotCoverage": "95333",
          "MeanCoverage": "317.77666666666664"
        },
        {
          "Gene": "NOTCH1",
          "Chr": "chr9",
          "Start": "139438412",
          "End": "139438772",
          "MinCoverage": "306",
          "MaxCoverage": "4185",
          "TotCoverage": "321235",
          "MeanCoverage": "892.3194444444445"
        },
        {
          "Gene": ""
        }
      ]
    };
  },


  [actionsTypes.HANDLE_SELECTED_ROW_COVERAGE]: (state, { payload }) => {

    const { item, value } = payload;

    let data = state?.data;

    const newData = Object.assign([], data);

    state.data = newData;

    newData.map(record => {

      if(record.id === item.id){
        record.selected = value;
      }

      return record;
    });
    
    return {
      ...state
    };
  },

  [actionsTypes.HANDLE_SELECT_ALL_ROWS_COVERAGE]: (state, { payload }) => {

    let data = state?.data;

    const newData = Object.assign([], data);

    newData.map(record => {
      if (record.status === TEXTS.UNCHECK) {
        record.selected = !payload;
      }
      return record;
    });

    state.data = newData;

    return {
      ...state,
    };
  },


});

export default coveragePageReducer;
