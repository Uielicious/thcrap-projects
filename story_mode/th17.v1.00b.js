{
	"binhacks": {
		"remove_1cc_requirement_for_Good_Ending": {
			"enable": false,
			"addr": "Rx1BFAA",
			"code": "EB 0C",
			"expected": "74 0C"
		},
		"change_1cc_requirement_to_Normal+_Clear": {
			"enable": true,
			"addr": "Rx1BFA3",
			"code": "\
83 3D 005A4B00 00  \
75 0C \
",
			"expected": "\
83 3D 045A4B00 00  \
74 0C \
"
		},
		"change_achievement_requirement_for_Bad_Ending": {
			"enable": true,
			"addr": "Rx322E7",
			"code": "\
39 35 005A4B00  \
75 0B \
",
			"expected": "\
39 35 045A4B00  \
74 0B \
"
		}
	}
}