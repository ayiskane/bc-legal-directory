export interface CourtLevel {
  level: 'Provincial' | 'Supreme' | 'Federal';
  crown_email?: string;
  jcm_scheduling_email?: string;
  registry_email?: string;
  criminal_registry_email?: string;
  bail_crown_email?: string;
  bail_jcm_email?: string;
  interpreter_request_email?: string;
  fax_filing?: string;
  scheduling_email?: string;
}

export interface Courthouse {
  id: string;
  name: string;
  city: string;
  region: string;
  access_code?: string;
  access_code_notes?: string;
  levels: CourtLevel[];
  is_circuit: boolean;
  hub_name?: string;
}

export const courthouses: Courthouse[] = [
  {
    id: "abbotsford",
    name: "Abbotsford",
    city: "Abbotsford",
    region: "Fraser",
    access_code: "134",
    levels: [
      {
        level: "Provincial",
        crown_email: "BCPS.Abbotsford.Reception@gov.bc.ca",
        jcm_scheduling_email: "Abbotsford.Scheduling@provincialcourt.bc.ca",
        registry_email: "CSBAbbotsfordCounterInquiries@gov.bc.ca",
        criminal_registry_email: "CSBAbbotsfordCriminal@gov.bc.ca",
        bail_crown_email: "Abbotsford.VirtualBail@gov.bc.ca",
        bail_jcm_email: "Abbotsford.VirtualHybridBail@provincialcourt.bc.ca"
      },
      {
        level: "Supreme",
        scheduling_email: "sc.scheduling.abb@bccourts.ca",
        fax_filing: "604-897-2178"
      }
    ],
    is_circuit: false
  },
  {
    id: "burnaby",
    name: "Burnaby",
    city: "Burnaby",
    region: "Fraser",
    access_code: "1998",
    levels: [
      {
        level: "Provincial",
        crown_email: "BCPS.Burnaby.Reception@gov.bc.ca",
        jcm_scheduling_email: "Burnaby.Scheduling@provincialcourt.bc.ca",
        criminal_registry_email: "CSBBurnabyCriminal@gov.bc.ca",
        bail_crown_email: "Burnaby.VirtualBail@gov.bc.ca",
        bail_jcm_email: "Burnaby.VirtualHybridBail@provincialcourt.bc.ca"
      }
    ],
    is_circuit: false
  },
  {
    id: "campbell-river",
    name: "Campbell River",
    city: "Campbell River",
    region: "Vancouver Island",
    access_code: "135",
    levels: [
      {
        level: "Provincial",
        crown_email: "BCPS.CampbellRiver.Reception@gov.bc.ca",
        jcm_scheduling_email: "CampbellRiver.Scheduling@provincialcourt.bc.ca",
        registry_email: "CSBCampbellRiverCounterInquiries@gov.bc.ca",
        criminal_registry_email: "CSBCampbellRiverCriminal@gov.bc.ca",
        bail_crown_email: "CampbellRiver.VirtualBail@gov.bc.ca",
        bail_jcm_email: "CampbellRiver.VirtualHybridBail@provincialcourt.bc.ca"
      },
      {
        level: "Supreme",
        scheduling_email: "sc.scheduling_cr@bccourts.ca"
      }
    ],
    is_circuit: false
  },
  {
    id: "chilliwack",
    name: "Chilliwack",
    city: "Chilliwack",
    region: "Fraser",
    access_code: "512",
    levels: [
      {
        level: "Provincial",
        crown_email: "BCPS.Chilliwack.Reception@gov.bc.ca",
        jcm_scheduling_email: "Chilliwack.Scheduling@provincialcourt.bc.ca",
        registry_email: "CSBChilliwackCounterInquiries@gov.bc.ca",
        criminal_registry_email: "CSBChilliwackCriminal@gov.bc.ca",
        bail_crown_email: "Chilliwack.VirtualBail@gov.bc.ca",
        bail_jcm_email: "Abbotsford.VirtualHybridBail@provincialcourt.bc.ca"
      },
      {
        level: "Supreme",
        scheduling_email: "sc.scheduling_cw@bccourts.ca",
        fax_filing: "604-795-8397"
      }
    ],
    is_circuit: false
  },
  {
    id: "courtenay",
    name: "Courtenay",
    city: "Courtenay",
    region: "Vancouver Island",
    access_code: "0721",
    levels: [
      {
        level: "Provincial",
        crown_email: "BCPS.Courtenay.Reception@gov.bc.ca",
        jcm_scheduling_email: "Courtenay.Scheduling@provincialcourt.bc.ca",
        registry_email: "CSBCourtenayCounterInquiries@gov.bc.ca",
        criminal_registry_email: "CSBCourtenayCriminal@gov.bc.ca",
        bail_crown_email: "Courtenay.VirtualBail@gov.bc.ca",
        bail_jcm_email: "Courtenay.VirtualHybridBail@provincialcourt.bc.ca"
      },
      {
        level: "Supreme",
        scheduling_email: "sc.scheduling_cy@bccourts.ca"
      }
    ],
    is_circuit: false
  },
  {
    id: "cranbrook",
    name: "Cranbrook",
    city: "Cranbrook",
    region: "Kootenay",
    access_code: "1357",
    levels: [
      {
        level: "Provincial",
        crown_email: "BCPS.Cranbrook.Reception@gov.bc.ca",
        jcm_scheduling_email: "Cranbrook.Scheduling@provincialcourt.bc.ca",
        registry_email: "CSBCranbrookCounterInquiries@gov.bc.ca",
        criminal_registry_email: "CSBCranbrookCriminal@gov.bc.ca",
        bail_crown_email: "Cranbrook.VirtualBail@gov.bc.ca",
        bail_jcm_email: "Cranbrook.VirtualHybridBail@provincialcourt.bc.ca"
      },
      {
        level: "Supreme",
        scheduling_email: "sc.scheduling_ck@bccourts.ca"
      }
    ],
    is_circuit: false
  },
  {
    id: "dawson-creek",
    name: "Dawson Creek",
    city: "Dawson Creek",
    region: "North",
    levels: [
      {
        level: "Provincial",
        crown_email: "BCPS.DawsonCreek.Reception@gov.bc.ca",
        jcm_scheduling_email: "DawsonCreek.Scheduling@provincialcourt.bc.ca",
        registry_email: "CSBDawsonCreekCounterInquiries@gov.bc.ca",
        criminal_registry_email: "CSBDawsonCreekCriminal@gov.bc.ca",
        bail_crown_email: "DawsonCreek.VirtualBail@gov.bc.ca",
        bail_jcm_email: "DawsonCreek.VirtualHybridBail@provincialcourt.bc.ca"
      },
      {
        level: "Supreme",
        scheduling_email: "sc.scheduling_dc@bccourts.ca"
      }
    ],
    is_circuit: false
  },
  {
    id: "duncan",
    name: "Duncan",
    city: "Duncan",
    region: "Vancouver Island",
    access_code: "2580",
    levels: [
      {
        level: "Provincial",
        crown_email: "BCPS.Duncan.Reception@gov.bc.ca",
        jcm_scheduling_email: "Duncan.Scheduling@provincialcourt.bc.ca",
        registry_email: "CSBDuncanCounterInquiries@gov.bc.ca",
        criminal_registry_email: "CSBDuncanCriminal@gov.bc.ca",
        bail_crown_email: "Duncan.VirtualBail@gov.bc.ca",
        bail_jcm_email: "Duncan.VirtualHybridBail@provincialcourt.bc.ca"
      },
      {
        level: "Supreme",
        scheduling_email: "sc.scheduling_dn@bccourts.ca"
      }
    ],
    is_circuit: false
  },
  {
    id: "fort-nelson",
    name: "Fort Nelson",
    city: "Fort Nelson",
    region: "North",
    levels: [
      {
        level: "Provincial",
        crown_email: "BCPS.FortNelson.Reception@gov.bc.ca",
        jcm_scheduling_email: "FortNelson.Scheduling@provincialcourt.bc.ca",
        registry_email: "CSBFortNelsonCounterInquiries@gov.bc.ca",
        criminal_registry_email: "CSBFortNelsonCriminal@gov.bc.ca",
        bail_crown_email: "FortNelson.VirtualBail@gov.bc.ca",
        bail_jcm_email: "FortNelson.VirtualHybridBail@provincialcourt.bc.ca"
      }
    ],
    is_circuit: false
  },
  {
    id: "fort-st-john",
    name: "Fort St. John",
    city: "Fort St. John",
    region: "North",
    levels: [
      {
        level: "Provincial",
        crown_email: "BCPS.FortStJohn.Reception@gov.bc.ca",
        jcm_scheduling_email: "FortStJohn.Scheduling@provincialcourt.bc.ca",
        registry_email: "CSBFortStJohnCounterInquiries@gov.bc.ca",
        criminal_registry_email: "CSBFortStJohnCriminal@gov.bc.ca",
        bail_crown_email: "FortStJohn.VirtualBail@gov.bc.ca",
        bail_jcm_email: "FortStJohn.VirtualHybridBail@provincialcourt.bc.ca"
      },
      {
        level: "Supreme",
        scheduling_email: "sc.scheduling_fsj@bccourts.ca"
      }
    ],
    is_circuit: false
  },
  {
    id: "golden",
    name: "Golden",
    city: "Golden",
    region: "Kootenay",
    levels: [
      {
        level: "Provincial",
        crown_email: "BCPS.Golden.Reception@gov.bc.ca",
        jcm_scheduling_email: "Cranbrook.Scheduling@provincialcourt.bc.ca",
        registry_email: "CSBGoldenCounterInquiries@gov.bc.ca",
        criminal_registry_email: "CSBGoldenCriminal@gov.bc.ca",
        bail_crown_email: "Golden.VirtualBail@gov.bc.ca",
        bail_jcm_email: "Cranbrook.VirtualHybridBail@provincialcourt.bc.ca"
      }
    ],
    is_circuit: false
  },
  {
    id: "kamloops",
    name: "Kamloops",
    city: "Kamloops",
    region: "Interior",
    access_code: "1432",
    levels: [
      {
        level: "Provincial",
        crown_email: "BCPS.Kamloops.Reception@gov.bc.ca",
        jcm_scheduling_email: "Kamloops.Scheduling@provincialcourt.bc.ca",
        registry_email: "CSBKamloopsCounterInquiries@gov.bc.ca",
        criminal_registry_email: "CSBKamloopsCriminal@gov.bc.ca",
        bail_crown_email: "Kamloops.VirtualBail@gov.bc.ca",
        bail_jcm_email: "Kamloops.VirtualHybridBail@provincialcourt.bc.ca"
      },
      {
        level: "Supreme",
        scheduling_email: "sc.scheduling_ka@bccourts.ca",
        fax_filing: "250-828-4552"
      }
    ],
    is_circuit: false
  },
  {
    id: "kelowna",
    name: "Kelowna",
    city: "Kelowna",
    region: "Interior",
    access_code: "4862",
    levels: [
      {
        level: "Provincial",
        crown_email: "BCPS.Kelowna.Reception@gov.bc.ca",
        jcm_scheduling_email: "Kelowna.Scheduling@provincialcourt.bc.ca",
        registry_email: "CSBKelownaCounterInquiries@gov.bc.ca",
        criminal_registry_email: "CSBKelownaCriminal@gov.bc.ca",
        bail_crown_email: "Kelowna.VirtualBail@gov.bc.ca",
        bail_jcm_email: "Kelowna.VirtualHybridBail@provincialcourt.bc.ca"
      },
      {
        level: "Supreme",
        scheduling_email: "sc.scheduling_ke@bccourts.ca",
        fax_filing: "250-470-6922"
      }
    ],
    is_circuit: false
  },
  {
    id: "nanaimo",
    name: "Nanaimo",
    city: "Nanaimo",
    region: "Vancouver Island",
    access_code: "0918",
    levels: [
      {
        level: "Provincial",
        crown_email: "BCPS.Nanaimo.Reception@gov.bc.ca",
        jcm_scheduling_email: "Nanaimo.Scheduling@provincialcourt.bc.ca",
        registry_email: "CSBNanaimoCounterInquiries@gov.bc.ca",
        criminal_registry_email: "CSBNanaimoCriminal@gov.bc.ca",
        bail_crown_email: "Nanaimo.VirtualBail@gov.bc.ca",
        bail_jcm_email: "Nanaimo.VirtualHybridBail@provincialcourt.bc.ca"
      },
      {
        level: "Supreme",
        scheduling_email: "sc.scheduling_na@bccourts.ca",
        fax_filing: "250-741-5601"
      }
    ],
    is_circuit: false
  },
  {
    id: "nelson",
    name: "Nelson",
    city: "Nelson",
    region: "Kootenay",
    access_code: "6845",
    levels: [
      {
        level: "Provincial",
        crown_email: "BCPS.Nelson.Reception@gov.bc.ca",
        jcm_scheduling_email: "Nelson.Scheduling@provincialcourt.bc.ca",
        registry_email: "CSBNelsonCounterInquiries@gov.bc.ca",
        criminal_registry_email: "CSBNelsonCriminal@gov.bc.ca",
        bail_crown_email: "Nelson.VirtualBail@gov.bc.ca",
        bail_jcm_email: "Nelson.VirtualHybridBail@provincialcourt.bc.ca"
      },
      {
        level: "Supreme",
        scheduling_email: "sc.scheduling_ne@bccourts.ca"
      }
    ],
    is_circuit: false
  },
  {
    id: "new-westminster",
    name: "New Westminster",
    city: "New Westminster",
    region: "Fraser",
    access_code: "2468",
    levels: [
      {
        level: "Provincial",
        crown_email: "BCPS.NewWestminster.Reception@gov.bc.ca",
        jcm_scheduling_email: "NewWestminster.Scheduling@provincialcourt.bc.ca",
        registry_email: "CSBNewWestminsterCounterInquiries@gov.bc.ca",
        criminal_registry_email: "CSBNewWestminsterCriminal@gov.bc.ca",
        bail_crown_email: "NewWestminster.VirtualBail@gov.bc.ca",
        bail_jcm_email: "NewWestminster.VirtualHybridBail@provincialcourt.bc.ca"
      },
      {
        level: "Supreme",
        scheduling_email: "sc.scheduling_nw@bccourts.ca",
        fax_filing: "604-660-8577"
      }
    ],
    is_circuit: false
  },
  {
    id: "north-vancouver",
    name: "North Vancouver",
    city: "North Vancouver",
    region: "Vancouver Coastal",
    access_code: "4321",
    levels: [
      {
        level: "Provincial",
        crown_email: "BCPS.NorthVancouver.Reception@gov.bc.ca",
        jcm_scheduling_email: "NorthVancouver.Scheduling@provincialcourt.bc.ca",
        registry_email: "CSBNorthVancouverCounterInquiries@gov.bc.ca",
        criminal_registry_email: "CSBNorthVancouverCriminal@gov.bc.ca",
        bail_crown_email: "NorthVancouver.VirtualBail@gov.bc.ca",
        bail_jcm_email: "NorthVancouver.VirtualHybridBail@provincialcourt.bc.ca"
      }
    ],
    is_circuit: false
  },
  {
    id: "penticton",
    name: "Penticton",
    city: "Penticton",
    region: "Interior",
    access_code: "8520",
    levels: [
      {
        level: "Provincial",
        crown_email: "BCPS.Penticton.Reception@gov.bc.ca",
        jcm_scheduling_email: "Penticton.Scheduling@provincialcourt.bc.ca",
        registry_email: "CSBPentictonCounterInquiries@gov.bc.ca",
        criminal_registry_email: "CSBPentictonCriminal@gov.bc.ca",
        bail_crown_email: "Penticton.VirtualBail@gov.bc.ca",
        bail_jcm_email: "Kelowna.VirtualHybridBail@provincialcourt.bc.ca"
      },
      {
        level: "Supreme",
        scheduling_email: "sc.scheduling_pe@bccourts.ca"
      }
    ],
    is_circuit: false
  },
  {
    id: "port-alberni",
    name: "Port Alberni",
    city: "Port Alberni",
    region: "Vancouver Island",
    access_code: "1478",
    levels: [
      {
        level: "Provincial",
        crown_email: "BCPS.PortAlberni.Reception@gov.bc.ca",
        jcm_scheduling_email: "PortAlberni.Scheduling@provincialcourt.bc.ca",
        registry_email: "CSBPortAlberniCounterInquiries@gov.bc.ca",
        criminal_registry_email: "CSBPortAlberniCriminal@gov.bc.ca",
        bail_crown_email: "PortAlberni.VirtualBail@gov.bc.ca",
        bail_jcm_email: "PortAlberni.VirtualHybridBail@provincialcourt.bc.ca"
      }
    ],
    is_circuit: false
  },
  {
    id: "port-coquitlam",
    name: "Port Coquitlam",
    city: "Port Coquitlam",
    region: "Fraser",
    access_code: "3690",
    levels: [
      {
        level: "Provincial",
        crown_email: "BCPS.PortCoquitlam.Reception@gov.bc.ca",
        jcm_scheduling_email: "PortCoquitlam.Scheduling@provincialcourt.bc.ca",
        registry_email: "CSBPortCoquitlamCounterInquiries@gov.bc.ca",
        criminal_registry_email: "CSBPortCoquitlamCriminal@gov.bc.ca",
        bail_crown_email: "PortCoquitlam.VirtualBail@gov.bc.ca",
        bail_jcm_email: "PortCoquitlam.VirtualHybridBail@provincialcourt.bc.ca"
      }
    ],
    is_circuit: false
  },
  {
    id: "port-hardy",
    name: "Port Hardy",
    city: "Port Hardy",
    region: "Vancouver Island",
    levels: [
      {
        level: "Provincial",
        crown_email: "BCPS.PortHardy.Reception@gov.bc.ca",
        jcm_scheduling_email: "CampbellRiver.Scheduling@provincialcourt.bc.ca",
        registry_email: "CSBPortHardyCounterInquiries@gov.bc.ca",
        criminal_registry_email: "CSBPortHardyCriminal@gov.bc.ca",
        bail_crown_email: "PortHardy.VirtualBail@gov.bc.ca",
        bail_jcm_email: "CampbellRiver.VirtualHybridBail@provincialcourt.bc.ca"
      }
    ],
    is_circuit: false
  },
  {
    id: "powell-river",
    name: "Powell River",
    city: "Powell River",
    region: "Vancouver Coastal",
    levels: [
      {
        level: "Provincial",
        crown_email: "BCPS.PowellRiver.Reception@gov.bc.ca",
        jcm_scheduling_email: "PowellRiver.Scheduling@provincialcourt.bc.ca",
        registry_email: "CSBPowellRiverCounterInquiries@gov.bc.ca",
        criminal_registry_email: "CSBPowellRiverCriminal@gov.bc.ca",
        bail_crown_email: "PowellRiver.VirtualBail@gov.bc.ca",
        bail_jcm_email: "PowellRiver.VirtualHybridBail@provincialcourt.bc.ca"
      }
    ],
    is_circuit: false
  },
  {
    id: "prince-george",
    name: "Prince George",
    city: "Prince George",
    region: "North",
    access_code: "9630",
    levels: [
      {
        level: "Provincial",
        crown_email: "BCPS.PrinceGeorge.Reception@gov.bc.ca",
        jcm_scheduling_email: "PrinceGeorge.Scheduling@provincialcourt.bc.ca",
        registry_email: "CSBPrinceGeorgeCounterInquiries@gov.bc.ca",
        criminal_registry_email: "CSBPrinceGeorgeCriminal@gov.bc.ca",
        bail_crown_email: "PrinceGeorge.VirtualBail@gov.bc.ca",
        bail_jcm_email: "PrinceGeorge.VirtualHybridBail@provincialcourt.bc.ca"
      },
      {
        level: "Supreme",
        scheduling_email: "sc.scheduling_pg@bccourts.ca",
        fax_filing: "250-614-2752"
      }
    ],
    is_circuit: false
  },
  {
    id: "prince-rupert",
    name: "Prince Rupert",
    city: "Prince Rupert",
    region: "North",
    levels: [
      {
        level: "Provincial",
        crown_email: "BCPS.PrinceRupert.Reception@gov.bc.ca",
        jcm_scheduling_email: "PrinceRupert.Scheduling@provincialcourt.bc.ca",
        registry_email: "CSBPrinceRupertCounterInquiries@gov.bc.ca",
        criminal_registry_email: "CSBPrinceRupertCriminal@gov.bc.ca",
        bail_crown_email: "PrinceRupert.VirtualBail@gov.bc.ca",
        bail_jcm_email: "PrinceRupert.VirtualHybridBail@provincialcourt.bc.ca"
      },
      {
        level: "Supreme",
        scheduling_email: "sc.scheduling_pr@bccourts.ca"
      }
    ],
    is_circuit: false
  },
  {
    id: "quesnel",
    name: "Quesnel",
    city: "Quesnel",
    region: "North",
    levels: [
      {
        level: "Provincial",
        crown_email: "BCPS.Quesnel.Reception@gov.bc.ca",
        jcm_scheduling_email: "Quesnel.Scheduling@provincialcourt.bc.ca",
        registry_email: "CSBQuesnelCounterInquiries@gov.bc.ca",
        criminal_registry_email: "CSBQuesnelCriminal@gov.bc.ca",
        bail_crown_email: "Quesnel.VirtualBail@gov.bc.ca",
        bail_jcm_email: "PrinceGeorge.VirtualHybridBail@provincialcourt.bc.ca"
      },
      {
        level: "Supreme",
        scheduling_email: "sc.scheduling_qu@bccourts.ca"
      }
    ],
    is_circuit: false
  },
  {
    id: "richmond",
    name: "Richmond",
    city: "Richmond",
    region: "Vancouver Coastal",
    access_code: "8521",
    levels: [
      {
        level: "Provincial",
        crown_email: "BCPS.Richmond.Reception@gov.bc.ca",
        jcm_scheduling_email: "Richmond.Scheduling@provincialcourt.bc.ca",
        registry_email: "CSBRichmondCounterInquiries@gov.bc.ca",
        criminal_registry_email: "CSBRichmondCriminal@gov.bc.ca",
        bail_crown_email: "Richmond.VirtualBail@gov.bc.ca",
        bail_jcm_email: "Richmond.VirtualHybridBail@provincialcourt.bc.ca"
      }
    ],
    is_circuit: false
  },
  {
    id: "rossland",
    name: "Rossland",
    city: "Rossland",
    region: "Kootenay",
    access_code: "2593",
    levels: [
      {
        level: "Provincial",
        crown_email: "BCPS.Rossland.Reception@gov.bc.ca",
        jcm_scheduling_email: "Rossland.Scheduling@provincialcourt.bc.ca",
        registry_email: "CSBRosslandCounterInquiries@gov.bc.ca",
        criminal_registry_email: "CSBRosslandCriminal@gov.bc.ca",
        bail_crown_email: "Rossland.VirtualBail@gov.bc.ca",
        bail_jcm_email: "Rossland.VirtualHybridBail@provincialcourt.bc.ca"
      },
      {
        level: "Supreme",
        scheduling_email: "sc.scheduling_ro@bccourts.ca"
      }
    ],
    is_circuit: false
  },
  {
    id: "salmon-arm",
    name: "Salmon Arm",
    city: "Salmon Arm",
    region: "Interior",
    access_code: "7896",
    levels: [
      {
        level: "Provincial",
        crown_email: "BCPS.SalmonArm.Reception@gov.bc.ca",
        jcm_scheduling_email: "SalmonArm.Scheduling@provincialcourt.bc.ca",
        registry_email: "CSBSalmonArmCounterInquiries@gov.bc.ca",
        criminal_registry_email: "CSBSalmonArmCriminal@gov.bc.ca",
        bail_crown_email: "SalmonArm.VirtualBail@gov.bc.ca",
        bail_jcm_email: "SalmonArm.VirtualHybridBail@provincialcourt.bc.ca"
      },
      {
        level: "Supreme",
        scheduling_email: "sc.scheduling_sa@bccourts.ca"
      }
    ],
    is_circuit: false
  },
  {
    id: "sechelt",
    name: "Sechelt",
    city: "Sechelt",
    region: "Vancouver Coastal",
    levels: [
      {
        level: "Provincial",
        crown_email: "BCPS.Sechelt.Reception@gov.bc.ca",
        jcm_scheduling_email: "Sechelt.Scheduling@provincialcourt.bc.ca",
        registry_email: "CSBSecheltCounterInquiries@gov.bc.ca",
        criminal_registry_email: "CSBSecheltCriminal@gov.bc.ca",
        bail_crown_email: "Sechelt.VirtualBail@gov.bc.ca",
        bail_jcm_email: "Sechelt.VirtualHybridBail@provincialcourt.bc.ca"
      }
    ],
    is_circuit: false
  },
  {
    id: "smithers",
    name: "Smithers",
    city: "Smithers",
    region: "North",
    levels: [
      {
        level: "Provincial",
        crown_email: "BCPS.Smithers.Reception@gov.bc.ca",
        jcm_scheduling_email: "Smithers.Scheduling@provincialcourt.bc.ca",
        registry_email: "CSBSmithersCounterInquiries@gov.bc.ca",
        criminal_registry_email: "CSBSmithersCriminal@gov.bc.ca",
        bail_crown_email: "Smithers.VirtualBail@gov.bc.ca",
        bail_jcm_email: "Smithers.VirtualHybridBail@provincialcourt.bc.ca"
      },
      {
        level: "Supreme",
        scheduling_email: "sc.scheduling_sm@bccourts.ca"
      }
    ],
    is_circuit: false
  },
  {
    id: "surrey",
    name: "Surrey",
    city: "Surrey",
    region: "Fraser",
    access_code: "6666",
    levels: [
      {
        level: "Provincial",
        crown_email: "BCPS.Surrey.Reception@gov.bc.ca",
        jcm_scheduling_email: "Surrey.Scheduling@provincialcourt.bc.ca",
        registry_email: "CSBSurreyCounterInquiries@gov.bc.ca",
        criminal_registry_email: "CSBSurreyCriminal@gov.bc.ca",
        bail_crown_email: "Surrey.VirtualBail@gov.bc.ca",
        bail_jcm_email: "Surrey.VirtualHybridBail@provincialcourt.bc.ca"
      },
      {
        level: "Supreme",
        scheduling_email: "sc.scheduling_su@bccourts.ca",
        fax_filing: "604-572-2169"
      }
    ],
    is_circuit: false
  },
  {
    id: "terrace",
    name: "Terrace",
    city: "Terrace",
    region: "North",
    levels: [
      {
        level: "Provincial",
        crown_email: "BCPS.Terrace.Reception@gov.bc.ca",
        jcm_scheduling_email: "Terrace.Scheduling@provincialcourt.bc.ca",
        registry_email: "CSBTerraceCounterInquiries@gov.bc.ca",
        criminal_registry_email: "CSBTerraceCriminal@gov.bc.ca",
        bail_crown_email: "Terrace.VirtualBail@gov.bc.ca",
        bail_jcm_email: "Terrace.VirtualHybridBail@provincialcourt.bc.ca"
      },
      {
        level: "Supreme",
        scheduling_email: "sc.scheduling_te@bccourts.ca"
      }
    ],
    is_circuit: false
  },
  {
    id: "vancouver-robson",
    name: "Vancouver (Robson Square)",
    city: "Vancouver",
    region: "Vancouver Coastal",
    access_code: "1234",
    levels: [
      {
        level: "Provincial",
        crown_email: "BCPS.Vancouver.Reception@gov.bc.ca",
        jcm_scheduling_email: "Vancouver.Scheduling@provincialcourt.bc.ca",
        registry_email: "CSBVancouverCounterInquiries@gov.bc.ca",
        criminal_registry_email: "CSBVancouverCriminal@gov.bc.ca",
        bail_crown_email: "Vancouver.VirtualBail@gov.bc.ca",
        bail_jcm_email: "Vancouver.VirtualHybridBail@provincialcourt.bc.ca"
      },
      {
        level: "Supreme",
        scheduling_email: "sc.scheduling_va@bccourts.ca",
        fax_filing: "604-660-2847"
      }
    ],
    is_circuit: false
  },
  {
    id: "vernon",
    name: "Vernon",
    city: "Vernon",
    region: "Interior",
    access_code: "3574",
    levels: [
      {
        level: "Provincial",
        crown_email: "BCPS.Vernon.Reception@gov.bc.ca",
        jcm_scheduling_email: "Vernon.Scheduling@provincialcourt.bc.ca",
        registry_email: "CSBVernonCounterInquiries@gov.bc.ca",
        criminal_registry_email: "CSBVernonCriminal@gov.bc.ca",
        bail_crown_email: "Vernon.VirtualBail@gov.bc.ca",
        bail_jcm_email: "Vernon.VirtualHybridBail@provincialcourt.bc.ca"
      },
      {
        level: "Supreme",
        scheduling_email: "sc.scheduling_vr@bccourts.ca"
      }
    ],
    is_circuit: false
  },
  {
    id: "victoria",
    name: "Victoria",
    city: "Victoria",
    region: "Vancouver Island",
    access_code: "9517",
    levels: [
      {
        level: "Provincial",
        crown_email: "BCPS.Victoria.Reception@gov.bc.ca",
        jcm_scheduling_email: "Victoria.Scheduling@provincialcourt.bc.ca",
        registry_email: "CSBVictoriaCounterInquiries@gov.bc.ca",
        criminal_registry_email: "CSBVictoriaCriminal@gov.bc.ca",
        bail_crown_email: "Victoria.VirtualBail@gov.bc.ca",
        bail_jcm_email: "Victoria.VirtualHybridBail@provincialcourt.bc.ca"
      },
      {
        level: "Supreme",
        scheduling_email: "sc.scheduling_vi@bccourts.ca",
        fax_filing: "250-356-1723"
      }
    ],
    is_circuit: false
  },
  {
    id: "western-communities",
    name: "Western Communities",
    city: "Colwood",
    region: "Vancouver Island",
    access_code: "7531",
    levels: [
      {
        level: "Provincial",
        crown_email: "BCPS.WesternCommunities.Reception@gov.bc.ca",
        jcm_scheduling_email: "WesternCommunities.Scheduling@provincialcourt.bc.ca",
        registry_email: "CSBWesternCommunitiesCounterInquiries@gov.bc.ca",
        criminal_registry_email: "CSBWesternCommunitiesCriminal@gov.bc.ca",
        bail_crown_email: "WesternCommunities.VirtualBail@gov.bc.ca",
        bail_jcm_email: "WesternCommunities.VirtualHybridBail@provincialcourt.bc.ca"
      }
    ],
    is_circuit: false
  },
  {
    id: "williams-lake",
    name: "Williams Lake",
    city: "Williams Lake",
    region: "North",
    levels: [
      {
        level: "Provincial",
        crown_email: "BCPS.WilliamsLake.Reception@gov.bc.ca",
        jcm_scheduling_email: "WilliamsLake.Scheduling@provincialcourt.bc.ca",
        registry_email: "CSBWilliamsLakeCounterInquiries@gov.bc.ca",
        criminal_registry_email: "CSBWilliamsLakeCriminal@gov.bc.ca",
        bail_crown_email: "WilliamsLake.VirtualBail@gov.bc.ca",
        bail_jcm_email: "WilliamsLake.VirtualHybridBail@provincialcourt.bc.ca"
      },
      {
        level: "Supreme",
        scheduling_email: "sc.scheduling_wl@bccourts.ca"
      }
    ],
    is_circuit: false
  },
  // Circuit Courts
  {
    id: "agassiz",
    name: "Agassiz",
    city: "Agassiz",
    region: "Fraser",
    levels: [],
    is_circuit: true,
    hub_name: "Chilliwack"
  },
  {
    id: "alert-bay",
    name: "Alert Bay",
    city: "Alert Bay",
    region: "Vancouver Island",
    levels: [],
    is_circuit: true,
    hub_name: "Port Hardy"
  },
  {
    id: "alexis-creek",
    name: "Alexis Creek",
    city: "Alexis Creek",
    region: "North",
    levels: [],
    is_circuit: true,
    hub_name: "Williams Lake"
  },
  {
    id: "anahim-lake",
    name: "Anahim Lake",
    city: "Anahim Lake",
    region: "North",
    levels: [],
    is_circuit: true,
    hub_name: "Williams Lake"
  },
  {
    id: "ashcroft",
    name: "Ashcroft",
    city: "Ashcroft",
    region: "Interior",
    levels: [],
    is_circuit: true,
    hub_name: "Kamloops"
  },
  {
    id: "atlin",
    name: "Atlin",
    city: "Atlin",
    region: "North",
    levels: [],
    is_circuit: true,
    hub_name: "Terrace"
  },
  {
    id: "barriere",
    name: "Barriere",
    city: "Barriere",
    region: "Interior",
    levels: [],
    is_circuit: true,
    hub_name: "Kamloops"
  },
  {
    id: "bella-bella",
    name: "Bella Bella",
    city: "Bella Bella",
    region: "Vancouver Coastal",
    levels: [],
    is_circuit: true,
    hub_name: "Smithers"
  },
  {
    id: "bella-coola",
    name: "Bella Coola",
    city: "Bella Coola",
    region: "Vancouver Coastal",
    levels: [],
    is_circuit: true,
    hub_name: "Williams Lake"
  },
  {
    id: "burns-lake",
    name: "Burns Lake",
    city: "Burns Lake",
    region: "North",
    levels: [],
    is_circuit: true,
    hub_name: "Smithers"
  },
  {
    id: "chetwynd",
    name: "Chetwynd",
    city: "Chetwynd",
    region: "North",
    levels: [],
    is_circuit: true,
    hub_name: "Dawson Creek"
  },
  {
    id: "clearwater",
    name: "Clearwater",
    city: "Clearwater",
    region: "Interior",
    levels: [],
    is_circuit: true,
    hub_name: "Kamloops"
  },
  {
    id: "clinton",
    name: "Clinton",
    city: "Clinton",
    region: "Interior",
    levels: [],
    is_circuit: true,
    hub_name: "Kamloops"
  },
  {
    id: "dease-lake",
    name: "Dease Lake",
    city: "Dease Lake",
    region: "North",
    levels: [],
    is_circuit: true,
    hub_name: "Terrace"
  },
  {
    id: "elkford",
    name: "Elkford",
    city: "Elkford",
    region: "Kootenay",
    levels: [],
    is_circuit: true,
    hub_name: "Cranbrook"
  },
  {
    id: "fernie",
    name: "Fernie",
    city: "Fernie",
    region: "Kootenay",
    levels: [],
    is_circuit: true,
    hub_name: "Cranbrook"
  },
  {
    id: "fraser-lake",
    name: "Fraser Lake",
    city: "Fraser Lake",
    region: "North",
    levels: [],
    is_circuit: true,
    hub_name: "Prince George"
  },
  {
    id: "ganges",
    name: "Ganges",
    city: "Ganges",
    region: "Vancouver Island",
    levels: [],
    is_circuit: true,
    hub_name: "Victoria"
  },
  {
    id: "gold-river",
    name: "Gold River",
    city: "Gold River",
    region: "Vancouver Island",
    levels: [],
    is_circuit: true,
    hub_name: "Campbell River"
  },
  {
    id: "good-hope-lake",
    name: "Good Hope Lake",
    city: "Good Hope Lake",
    region: "North",
    levels: [],
    is_circuit: true,
    hub_name: "Terrace"
  },
  {
    id: "granisle",
    name: "Granisle",
    city: "Granisle",
    region: "North",
    levels: [],
    is_circuit: true,
    hub_name: "Smithers"
  },
  {
    id: "hazelton",
    name: "Hazelton",
    city: "Hazelton",
    region: "North",
    levels: [],
    is_circuit: true,
    hub_name: "Smithers"
  },
  {
    id: "hope",
    name: "Hope",
    city: "Hope",
    region: "Fraser",
    levels: [],
    is_circuit: true,
    hub_name: "Chilliwack"
  },
  {
    id: "houston",
    name: "Houston",
    city: "Houston",
    region: "North",
    levels: [],
    is_circuit: true,
    hub_name: "Smithers"
  },
  {
    id: "hudson-hope",
    name: "Hudson Hope",
    city: "Hudson Hope",
    region: "North",
    levels: [],
    is_circuit: true,
    hub_name: "Fort St. John"
  },
  {
    id: "invermere",
    name: "Invermere",
    city: "Invermere",
    region: "Kootenay",
    levels: [],
    is_circuit: true,
    hub_name: "Cranbrook"
  },
  {
    id: "kaslo",
    name: "Kaslo",
    city: "Kaslo",
    region: "Kootenay",
    levels: [],
    is_circuit: true,
    hub_name: "Nelson"
  },
  {
    id: "kitimat",
    name: "Kitimat",
    city: "Kitimat",
    region: "North",
    levels: [],
    is_circuit: true,
    hub_name: "Terrace"
  },
  {
    id: "lillooet",
    name: "Lillooet",
    city: "Lillooet",
    region: "Interior",
    levels: [],
    is_circuit: true,
    hub_name: "Kamloops"
  },
  {
    id: "lytton",
    name: "Lytton",
    city: "Lytton",
    region: "Interior",
    levels: [],
    is_circuit: true,
    hub_name: "Kamloops"
  },
  {
    id: "mackenzie",
    name: "Mackenzie",
    city: "Mackenzie",
    region: "North",
    levels: [],
    is_circuit: true,
    hub_name: "Prince George"
  },
  {
    id: "masset",
    name: "Masset",
    city: "Masset",
    region: "North",
    levels: [],
    is_circuit: true,
    hub_name: "Prince Rupert"
  },
  {
    id: "mcbride",
    name: "McBride",
    city: "McBride",
    region: "North",
    levels: [],
    is_circuit: true,
    hub_name: "Prince George"
  },
  {
    id: "merritt",
    name: "Merritt",
    city: "Merritt",
    region: "Interior",
    levels: [],
    is_circuit: true,
    hub_name: "Kamloops"
  },
  {
    id: "nakusp",
    name: "Nakusp",
    city: "Nakusp",
    region: "Kootenay",
    levels: [],
    is_circuit: true,
    hub_name: "Nelson"
  },
  {
    id: "new-aiyansh",
    name: "New Aiyansh",
    city: "New Aiyansh",
    region: "North",
    levels: [],
    is_circuit: true,
    hub_name: "Terrace"
  },
  {
    id: "oliver",
    name: "Oliver",
    city: "Oliver",
    region: "Interior",
    levels: [],
    is_circuit: true,
    hub_name: "Penticton"
  },
  {
    id: "pemberton",
    name: "Pemberton",
    city: "Pemberton",
    region: "Vancouver Coastal",
    levels: [],
    is_circuit: true,
    hub_name: "Vancouver"
  },
  {
    id: "princeton",
    name: "Princeton",
    city: "Princeton",
    region: "Interior",
    levels: [],
    is_circuit: true,
    hub_name: "Penticton"
  },
  {
    id: "queen-charlotte-city",
    name: "Queen Charlotte City",
    city: "Queen Charlotte City",
    region: "North",
    levels: [],
    is_circuit: true,
    hub_name: "Prince Rupert"
  },
  {
    id: "revelstoke",
    name: "Revelstoke",
    city: "Revelstoke",
    region: "Interior",
    levels: [],
    is_circuit: true,
    hub_name: "Salmon Arm"
  },
  {
    id: "sparwood",
    name: "Sparwood",
    city: "Sparwood",
    region: "Kootenay",
    levels: [],
    is_circuit: true,
    hub_name: "Cranbrook"
  },
  {
    id: "stewart",
    name: "Stewart",
    city: "Stewart",
    region: "North",
    levels: [],
    is_circuit: true,
    hub_name: "Terrace"
  },
  {
    id: "tahsis",
    name: "Tahsis",
    city: "Tahsis",
    region: "Vancouver Island",
    levels: [],
    is_circuit: true,
    hub_name: "Campbell River"
  },
  {
    id: "telegraph-creek",
    name: "Telegraph Creek",
    city: "Telegraph Creek",
    region: "North",
    levels: [],
    is_circuit: true,
    hub_name: "Terrace"
  },
  {
    id: "tofino",
    name: "Tofino",
    city: "Tofino",
    region: "Vancouver Island",
    levels: [],
    is_circuit: true,
    hub_name: "Port Alberni"
  },
  {
    id: "tumbler-ridge",
    name: "Tumbler Ridge",
    city: "Tumbler Ridge",
    region: "North",
    levels: [],
    is_circuit: true,
    hub_name: "Dawson Creek"
  },
  {
    id: "ucluelet",
    name: "Ucluelet",
    city: "Ucluelet",
    region: "Vancouver Island",
    levels: [],
    is_circuit: true,
    hub_name: "Port Alberni"
  },
  {
    id: "valemount",
    name: "Valemount",
    city: "Valemount",
    region: "North",
    levels: [],
    is_circuit: true,
    hub_name: "Prince George"
  },
  {
    id: "vanderhoof",
    name: "Vanderhoof",
    city: "Vanderhoof",
    region: "North",
    levels: [],
    is_circuit: true,
    hub_name: "Prince George"
  }
];
